import { createStore } from 'vuex'
import Axios from 'axios';

const PRODUCTS_URL = 'http://localhost:3000/products';

export default createStore({
  state: {
    currentPage: 1,
    pageCount: 0,
    products: [],
    orders: []
  },
  getters: {
    getOrderAmount(state) {
      return function(id) {
        let order = state.orders.find(el => {
          return el.id==id;
        });
        return order.amount;
      }
    },
    getPriceSum(state) {
      return state.orders.reduce((prev, cur) => cur.amount * cur.price + prev, 0);
    },
    getProduct(state) {
      return function(id) {
        const data = state.products.find(el => el.id == id);
        return data ? data : state.orders.find(el => el.id == id);
      }
    }
  },
  mutations: {
    setCurrentPage(state, current) {
      state.currentPage = current;
    },
    setPageSize(state, size) {
      state.pageSize = size;
    },
    setPageCount(state, count) {
      state.pageCount = Math.ceil((Number(count) / 10));
    },
    setProducts(state, products) {
      state.products = products;
    },
    addOrder(state, order) {
      const index = state.orders.findIndex(el => el.id == order.id);
      if(index > -1) {
        state.orders[index].amount++;
      }
      else {
        state.orders.push({id: order.id, amount: 1, name: order.name, price: order.price, image: order.image, description: order.description});
      }
    },
    decrementOrderAmount(state, id) {
      const orderIndex = state.orders.findIndex(el => el.id == id);
      if(orderIndex < 0)
        return;
      if(state.orders[orderIndex].amount > 1)
        state.orders[orderIndex].amount--;
      else
        state.orders.splice(orderIndex, 1);
    },
    incrementOrderAmount(state, id) {
      let order = state.orders.find(el => el.id == id);
      order.amount++;
    }

  },
  actions: {
    async getData({commit, state}) {
      const url = `${PRODUCTS_URL}?_page=${state.currentPage}`;
      const res = await Axios.get(url);
      commit('setPageCount', res.headers['x-total-count']);
      commit('setProducts',res.data);
    },
    setCurrentPage({dispatch ,commit, state}, page) {
      if(page < 1 || page > state.pageCount)
        return;
      commit('setCurrentPage', page);
      dispatch('getData');
    }
  },
})
