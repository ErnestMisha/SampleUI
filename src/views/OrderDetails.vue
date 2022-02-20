<template>
    <div class="text-green-700 text-center text-4xl m-4">
        Formularz zamówienia
    </div>
    <div class="border-2 border-black m-2 p-4 rounded-lg text-xl">
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Imię</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Nazwisko</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Adres mail</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Numer telefonu</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Miasto</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Kod pocztowy</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Ulica</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
        <div class="flex justify-center m-4">
            <div class="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-5/6 text-center">
                <p class="mb-2">Numer domu</p>
                <input class="lg:w-3/4 h-3/4 text-lg rounded-lg p-2 focus:outline-none focus:ring" type="text">
            </div>
        </div>
    </div>
    <div class="text-center my-4">
        <router-link to="confirm-order">
            <button class="btn-green">
                Złóż zamówienie
            </button>
        </router-link>
    </div>
</template>