import api from "../../api/role";
const state = {
  listRole: []
};

// getters
const getters = {
  listRole: state => state.listRole
};

const actions = {
  async getListRoleRequest({ commit }) {
    commit("getListRole", await api.getDataListRole());
  }
};

const mutations = {
    getListRole(state, data) {
    state.listRole = data

  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
