<template>
 <header class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
      <img src="https://cdn.pixabay.com/photo/2019/12/31/11/08/flat-design-4731671_1280.png" class="h-11 mr-3" alt="Flowbite Logo" />
      <!-- <span class="mr-2 text-4xl text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
      </span> -->
      <span>Lilia</span><span class="text-green-600">Chou</span>
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation"  class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="/">Home</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="/product">Product</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="/brands">Brands</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="/category">Categories</a></li>
        <li class="text-gray-600 md:mr-12 hover:text-green-600"><a href="/contact">Contact</a></li>
        <li>
          <a href="/profile">
            <svg class="w-[24px] h-[24px] text-black-400 hover:text-green-600 transation duration-1000 hover:scale-105 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
          </a>
        </li>
        <li class="md:ml-5">
          <div v-if="isAuthenticated">
          <a href="/cart">
            <svg class="w-[22px] h-[25px] text-black-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
    </svg>
  <Cart></Cart>
     </a>
    </div>
        </li>
        <li class="text-gray-600 ml-5">
          <div v-if="isAuthenticated"> 
          </div>
          <div v-else>
          <a href="/login">
          <button class="rounded-md border-2 border-green-400 px-6 py-1 font-medium text-green-400 transition-colors hover:bg-green-300 hover:text-indigo-900">Login</button>
        </a>
      </div>
        </li>
        <li></li>
      </ul>
    </nav>
  </div>
</header>

</template>
<script>
import Cart from "../components/Cart.vue"
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
    confirm() {
      alert('terkirim')
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
  components: {
    Cart
  }
};
</script>