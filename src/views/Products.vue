<template>
    <div class="m-4 text-center">
        <ol>
            <li v-for="product in this.products" v-bind:key="product.id" class="border border-black rounded-lg m-4 hover:bg-green-200">
                <router-link v-bind:to="'/product-details/'+product.id">
                    <div class="p-4 flex justify-center">
                        <div class=" flex-column justify-center">
                            <div class=" m-2 flex justify-center">
                                <img v-bind:src="product.image" alt="product picture" class="w-20 h-20 rounded-lg">
                            </div>
                            <p>{{product.id}} <span class="text-green-500">|</span> {{product.name}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ol>
        <div class="my-4 flex justify-center items-center">
            <button class="text-green-500 hover:text-green-700" v-on:click="setCurrentPage(this.currentPage - 1)">
                <ArrowCircleLeftIcon class="w-12 h-12"/>
            </button>
            <div class="mx-4 text-xl">
                {{this.currentPage}}<span class="mx-2 text-green-500 font-bold">/</span> {{this.pageCount}}
            </div>
            <button class="text-green-500 hover:text-green-700" v-on:click="setCurrentPage(this.currentPage + 1)">
                <ArrowCircleRightIcon class="w-12 h-12"/>
            </button>
        </div>
    </div>
</template>
<script>
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline';
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        ArrowCircleLeftIcon,
        ArrowCircleRightIcon
    },
    computed: {
        ...mapState([
            'products',
            'pageCount',
            'currentPage'
        ]),
    },
    methods: {
        ...mapActions([
            'setCurrentPage'
        ]),
    }
}
</script>