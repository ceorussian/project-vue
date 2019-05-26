import api from "../../api/user";
const state = {
  listUser: []
};

// getters
const getters = {
  listUser: state => state.listUser
};

const actions = {
  async getListUserRequest({ commit }) {
    commit("getListUser", await api.getDataListUser());
  },
  async addNewUserRequest({ commit }, data) {
    commit("addNewUser", data);
  },
  async editUserRequest({ commit }, data) {
    commit("editUser", data);
  },
  async deleteUserRequest({ commit }, id) {
    commit("deleteUser", id);
  }
};

const mutations = {
  getListUser(state, data) {
    state.listUser = data
  },
  addNewUser(state, data){
    state.listUser.unshift(data)
  },
  editUser(state, data){
    state.listUser = state.listUser.map(x => {
      if(x.id === data.id){
        return {...x,...data}
      }
      return x;
    })
  },
  deleteUser(state, id){
    state.listUser = state.listUser.filter(x => x.id !==id)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
