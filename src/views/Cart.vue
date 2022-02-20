<template>
    <h2 class="text-center text-4xl m-4 text-green-700">
        Twój koszyk
    </h2>
    <div v-if="orders.length > 0" class="border-2 border-black m-2 p-4 rounded-lg justify-center">
        <table class="table-auto text-center divide-y divide-green-500 w-full">
            <thead>
                <tr class="divide-x divide-green-500">
                    <th class="w-1/3 p-2">Nazwa</th>
                    <th class="w-1/3 p-2">Cena za sztukę</th>
                    <th class="w-1/3 p-2">Ilość</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-green-500">
                <tr v-for="order in orders" v-bind:key="order.id"
                class="divide-x divide-green-500">
                    <td class="p-2">
                        <router-link class="hover:text-green-500" v-bind:to="'/product-details/' + order.id">
                            {{order.name}}
                        </router-link>
                    </td>
                    <td class="p-2">{{order.price}} zł</td>
                    <td class="p-2">
                        <div class="flex justify-center items-center">
                            <button v-on:click="decrementOrderAmount(order.id)">
                                <MinusCircleIcon class="w-6 h-6 text-green-500 hover:text-green-700"/>
                            </button>
                            <span class="m-2">{{order.amount}}</span>
                            <button v-on:click="incrementOrderAmount(order.id)">
                                <PlusCircleIcon class="w-6 h-6 text-green-500 hover:text-green-700"/>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="m-2 flex justify-between">
            <div class="font-bold">Suma:</div>
            <div>{{this.getPriceSum.toFixed(2)}} zł</div>
        </div>
    </div>
    <div v-if="orders.length > 0" class="text-center">
        <router-link to="order-details">
            <button class="btn-green m-4">
                Wypełnij dane zamówienia
            </button>
        </router-link>
    </div>
    <div v-else class="text-2xl my-20 text-center">
        Koszyk jest pusty
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/outline';

export default {
    computed: {
        ...mapState([
            'orders'
        ]),
        ...mapGetters([
            'getPriceSum'
        ]),
    },
    components: {
        PlusCircleIcon,
        MinusCircleIcon
    },
    methods: {
        ...mapMutations([
            'incrementOrderAmount',
            'decrementOrderAmount'
        ])
    }
}
</script>