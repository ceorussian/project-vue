import Vue from "vue";
import Vuex from "vuex";
import user from "../store/modules/user";
import role from "../store/modules/role";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user,
    role
  }
});
