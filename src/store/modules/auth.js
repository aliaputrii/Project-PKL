import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
    user: JSON.stringify(localStorage.getItem("user") || null),
    userAddress: []
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    gettersUserAddress: (state) => state.userAddress,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const loginUrl = 'https://ecommerce.olipiskandar.com/api/v1/auth/login';
        const response = await axios.post(loginUrl, credentials);
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        commit('SET_LOGIN)_ERROR', null)
        console.log("token Saved", token)
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "login failed";
        commit("SET_LOGIN_ERROR", errorMessage);
        console.error(error);
        return false;
      }
    },
    async register({ commit }, credentials) {
      try {
        const registerUrl = 'https://ecommerce.olipiskandar.com/api/v1/auth/signup';
        const response = await axios.post(registerUrl, credentials);
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async getUserInfo({ state }) {
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/info",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        return response.data.user;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async getUserAddress({ state,commit }) {
      try {
        const urlAddresses =
          'https://ecommerce.olipiskandar.com/api/v1/user/addresses';
        const response = await axios.get(urlAddresses, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        commit('SET_ADDRESS', response.data)
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },

    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');

      //Log Token removed
      console.log("Token Removed:", token);
      this.$router.push("/login")
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_ADDRESS(state, address) {
      state.userAddress = address
    }
  },
};

export default auth;