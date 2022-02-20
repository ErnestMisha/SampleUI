<template>
    <nav class="bg-green-500 text-white">
        <div class="flex justify-between">
            <div class="flex items-center">
                <button>
                    <router-link to="/">
                        <ShoppingBagIcon class="w-14 h-14 m-1 "/>
                    </router-link>
                </button>
            </div>
            <div class="hidden lg:flex flex-row items-center">
                <ul class="flex flex-row p-2 text-2xl font-bold">
                    <template v-for="route in $router.options.routes">
                        <li v-if="route.name" v-bind:key="route.path"
                        class="p-2">
                            <router-link v-bind:to="route.path" class="hover:text-green-700" active-class="text-black">
                                {{route.name}}
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="lg:hidden flex items-center">
                <button v-on:click="toggleList" :class="{hidden: listActive}">
                    <MenuIcon class="w-14 h-14 m-1"/>
                </button>
                <button @click="toggleList" v-bind:class="{hidden: !listActive}">
                    <XIcon class="w-14 h-14 m-1"/>
                </button>
            </div>
        </div>
        <div :class="{hidden: !listActive}">
            <ul>
                <template v-for="route in $router.options.routes"> 
                    <li v-if="route.name" v-bind:key="route.path"
                    class="border-t-2 border-white text-lg text-center lg:hidden">
                        <router-link v-bind:to="route.path" class="block p-2 text-xl" active-class="bg-green-700" v-on:click="toggleList">
                            {{route.name}}
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>
<script>
import { ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
    data() {
        return {
            listActive: false
        }
    },
    components: {
        ShoppingBagIcon,
        MenuIcon,
        XIcon
    },
    methods: {
        toggleList() {
            this.listActive=!this.listActive;
        }
    }
}
</script>