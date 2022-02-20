<template>
  <div class="border-2 border-black h-5/6 rounded-lg m-2 my-16">
    <div class="w-full fixed left-0 top-0 z-10 p-2"  v-bind:class="{ hidden: this.hidden }">
      <div class="border-2 border-purple-500 bg-purple-700 rounded-lg text-white text-center p-2">
        Produkt został dodany do koszyka <br/>
        Liczba sztuk produktu w koszyku: {{amount}}
      </div>
    </div>
    <div>
      <img v-bind:src="data.image" alt="product photo" class="w-48 h-40 lg:w-1/3 lg:h-1/4 rounded-xl mx-auto my-6">
      <div class="border-t-2 border-black text-center p-2 px-6">
        <div class="my-2 text-lg">
          {{data.name}}
        </div>
        <div>
          {{data.description}}
        </div>
        <div  class="my-2">
          Cena: <span class="text-green-500">{{data.price}}</span> zł
        </div>
        <div>
          <button class="btn-green m-1" onclick="history.back()">Wróć</button>
          <button class="btn-green m-1" v-on:click="addProduct">Dodaj</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      data: null,
      hidden: true,
      timeout: 0,
      amount: 0
    }
  },
  computed: {
      ...mapState([
          'products'
      ]),
      ...mapGetters([
        'getOrderAmount',
        'getProduct'
      ]),
  },
  methods: {
    addProduct() {
      this.$store.commit('addOrder', this.data);
      this.amount = this.getOrderAmount(this.$route.params.id);
      this.displayInfo();
    },
    displayInfo() {
      if(this.hidden)
        this.hidden = !this.hidden;
      else
        clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.hidden=!this.hidden;
      }, 4000);
    }
  },
  created() {
    this.data = this.getProduct(this.$route.params.id);
  }
}
</script>