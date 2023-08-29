<template>
  <br><br><br>
  <center>
  <br><br><br>
    <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
      <p class="text-center text-3xl font-bold">Welcome to Lilia <span class="text-green-400">Chou</span></p>
      <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="performLogin">
        <div class="flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="text" v-model="email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email or username" />
          </div>
        </div>
        <div class="mb-12 flex flex-col pt-4">
          <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
            <input type="password"  v-model="password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
          </div>
        </div>
        <button type="submit" class="w-full rounded-lg bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Log in</button>
      </form>
      <div class="py-12 text-center">
        <p class="whitespace-nowrap text-gray-600">
          Don't have an account?
          <a href="register" class="underline-offset-4 font-semibold text-gray-900 underline">Sign up Now</a>
        </p>
      </div>
 
 </div>
</center>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
      return {
          email: '',
          password: '',
      };
  },
  computed: {
    ...mapGetters('auth', ['loginError', 'isAuthenticated']),
  },
  methods: {
      ...mapActions('auth', ['login']),
      async performLogin() {
          const credentials = {
              email: this.email,
              password: this.password,
          };

          const success = await this.login(credentials);

          if (success && this.isAuthenticated) {
              // Redirect to the desired route on successful login
              this.$router.push('/');
          } else {
            // handle login error
            if (this.loginError) {
              
            } else {
              alert("Login Failed");
            }
              
          }
      },
  },
};
</script>