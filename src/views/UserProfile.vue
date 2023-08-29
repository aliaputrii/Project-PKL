<template>
  <center>
    <br><br><br>
    <div class="max-w-xs">
      <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="relative mx-auto w-36 rounded-full">
          <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          <img class="mx-auto h-auto w-full rounded-full"
            src="https://media.istockphoto.com/id/1255163297/id/vektor/vektor-ikon-profil-pengguna-simbol-potret-avatar-logo-tanda-orang-bentuk-datar-siluet-hitam.jpg?s=170667a&w=0&k=20&c=XHIj0IgaoxhePW5ocWVnHhquH22vRhwjmlr63hbgAQc="
            alt="" />
        </div>
        <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.name }}</h1>
        <h3 class="font-lg text-semibold text-center leading-6 text-gray-900">{{ user.email }}</h3>
        <h3 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">$ {{ user.balance }}</h3>
        <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">{{ user.phone }}</h3>
              
        <p class="text-center text-sm leading-6 text-gray-600 hover:text-gray-600">HI! Aku {{ user.name }}</p>
        <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li class="flex items-center py-3 text-sm">
            <span>Status</span>
            <span class="ml-auto"><span
                class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">Online</span></span>
          </li>
          <li class="flex items-center py-3 text-sm">
            <span>Joined On</span>
            <span class="ml-auto">Apr 08, 2022</span>
          </li>
        </ul>
        <div class="text-center my-3">
          <a href="/">
                    <button @click="logout"
                        class="block w-full bg-green-100 text-black-800 text-sm font-semibold rounded-lg hover:bg-green-200 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                        Logout</button></a>
                </div>
      </div>
    </div>
    <div class="bg-white p-3 shadow-sm rounded-sm">


      <div>
        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
          <span clas="text-green-500">
            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
          <span class="tracking-wide">Purchase History</span>
        </div>
        <!-- isi history -->

        <div class="relative overflow-y-auto h-72 shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Details
                </th>
                <th scope="col" class="px-6 py-3">
                  info
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount
                </th>
                <th scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="orderItems in order" :key="orderItems.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-dark whitespace-nowrap dark:text-white">
                  {{ orderItems.code }}
                  <dd>{{ orderItems.date }}</dd>
                </th>
                <td class="px-6 py-4">
                  product {{ order.length }}
                </td>
                <td class="px-6 py-4">
                  {{ orderItems.grand_total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}
                </td>
                <td class="px-6 py-4 text-left">
                  <a href="/product" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Views details</a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
    <!-- End of Experience and education grid -->

    <!-- End of profile tab -->

  </center>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("auth", ["gettersUserAddress"]),
    ...mapGetters('order', ['getAllOrder']),
    user() {
      return this.getUser;
    },
    address() {
      return this.gettersUserAddress;
    },
    order() {
      return this.getAllOrder;
    }
  },
  methods: {
    ...mapActions("auth", ["getUserInfo"]),
    ...mapActions('auth', ['getUserAddress']),
    ...mapActions('auth', ['logout']),
    ...mapActions('order', ['fetchAllOrderData'])
  },
  async mounted() {
    this.fetchAllOrderData();
    this.getUserAddress();
    const user = await this.getUserInfo();

    // if user information
    if (user) {
      this.$store.commit("auth/SET_USER", user);
    }
  },
};
</script>