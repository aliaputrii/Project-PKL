<template>
<br><br>  
<br><br><br><br>
    <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p class="text-center text-3xl font-bold">Welcome to Lilia <span class="text-green-400">Chou</span></p>
      <p class="mt-2 text-center text-gray-500">Welcome back, please enter your details.</p>
      <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="performRegister">
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="text" v-model="name" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="name" required/>
          </div>
        </div>
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="email" v-model="email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" required/>
          </div>
        </div>
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password" v-model="password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" required/>
          </div>
        </div>
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password" v-model="confirm_password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="confirm password" required/>
          </div>
        </div>
        <div class="mb-12 flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="number"  v-model="phone" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Phone" required/>
          </div>
        </div>
        
        <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Sign Up</button>
      </form>
      <div class="py-12 text-center">
        <p class="whitespace-nowrap text-gray-600">
         have an account?
          <a href="/login" class="underline-offset-4 font-semibold text-gray-900 underline">Login Now.</a>
        </p>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
      return {
          name: '',
          email: '',
          phone: '',
          password: '',
          confirm_password: '',
          avatar: '',
      };
  },
  methods: {
      ...mapActions('auth', ['register']),
      async performRegister() {
          const credentials = {
              name: this.name,
              email: this.email,
              phone: this.phone,
              password: this.password,
              confirm_password: this.confirm_password,
              avatar: this.avatar
          };

          const successRegister = await this.register(credentials);

          if (successRegister) {
              // Redirect to the desired route on successful login
              this.$router.push("/login");
          } else {
              alert("register failed");
          }
      },
  },
};
</script>