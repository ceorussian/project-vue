<template>
  <div>
    <v-btn outline color="indigo" @click="isShowCreate = true">thêm người dùng</v-btn>
    <v-data-table :headers="headers" :items="listUser" class="elevation-1 my-1">
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">{{ props.header.text }}</span>
          </template>
          <span>{{ props.header.text }}</span>
        </v-tooltip>
      </template>
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">
          <v-chip
            label
            outline
            :color="joinRole(props.item.role).color"
          >{{ joinRole(props.item.role).name }}</v-chip>
        </td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-left">{{ props.item.description }}</td>
        <td class="text-xs-left">
          <Action :item="props.item" @editUser="editUser" @deleteUser="deleteUser"/>
        </td>
      </template>
    </v-data-table>
    <FormUser :isShow="isShowCreate" @closeModel="isShowCreate = false" @addNewUser="addNewUser"/>
    <FormUser :isShow="iShowEdit" @closeModel="iShowEdit = false" :item="itemEdit" @editUser="updateUser"/>
    <v-snackbar
      v-model="isShowAlertAdd"
      :timeout="3000"
      color="success"
      :right="true"
      :bottom="true"
    >Thêm mới người dùng thành công !</v-snackbar>
    <v-snackbar
      v-model="isShowAlertEdit"
      :timeout="3000"
      color="success"
      :right="true"
      :bottom="true"
    >Cập nhật người dùng thành công !</v-snackbar>
    <v-snackbar
      v-model="isShowAlertDelete"
      :timeout="3000"
      color="success"
      :right="true"
      :bottom="true"
    >Xóa người dùng thành công !</v-snackbar>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Action from "../../components/layout-tables/Action";
import FormUser from "../../components/users/FormUser";
export default {
  data() {
    return {
      isShowCreate: false,
      isShowAlertAdd: false,
      isShowAlertEdit: false,
      iShowEdit: false,
      isShowAlertDelete: false,
      itemEdit: {},
      headers: [
        { text: "STT", value: "id" },
        { text: "Tên người dùng", value: "name" },
        { text: "Quyền truy cập", value: "role" },
        { text: "Email người dùng", value: "email" },
        { text: "Mô tả", value: "description" },
        { text: "", value: "action" }
      ]
    };
  },
  components: {
    Action,
    FormUser
  },
  methods: {
    ...mapActions("user", ["getListUserRequest", "addNewUserRequest", "editUserRequest", "deleteUserRequest"]),
    ...mapActions("role", ["getListRoleRequest"]),
    joinRole(id) {
      return this.listRole.find(x => x.id === id) || {};
    },
    addNewUser(data) {
      this.addNewUserRequest(data);
      this.isShowAlertAdd = true;
      this.isShowCreate = false;
    },
    editUser(item) {
      this.itemEdit = item;
      this.iShowEdit = true;
    },
    updateUser(data){
      this.editUserRequest(data);
      this.iShowEdit = false;
      this.isShowAlertEdit = true
    },
    deleteUser(id){
      this.deleteUserRequest(id);
      this.isShowAlertDelete = true
    }
  },
  computed: {
    ...mapGetters("user", ["listUser"]),
    ...mapGetters("role", ["listRole"])
  },
  mounted() {
    this.getListUserRequest();
    this.getListRoleRequest();
  }
};
</script>
