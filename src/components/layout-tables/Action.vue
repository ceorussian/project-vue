<template>
  <div>
    <v-btn flat icon color="success" @click="edit">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-btn flat icon color="error" @click="isShowPopup = true">
      <v-icon>delete_outline</v-icon>
    </v-btn>
    <ConfirmDelete
      :isShowPopup="isShowPopup"
      @remove="deleteConfirm"
      @cancel="isShowPopup= false"
      messageConfirm="Bạn có chắc chắn muốn xóa tài khoản này ?"
    />
  </div>
</template>
<script>
import ConfirmDelete from "../confirms/ConfirmDelete";
export default {
  data() {
    return {
      isShowPopup: false
    };
  },
  props: {
    item: Object
  },
  components: {
    ConfirmDelete
  },
  methods: {
    deleteConfirm() {
      this.$emit("deleteUser", this.item.id);
      this.isShowPopup = false;
    },
    edit() {
      this.$emit("editUser", this.item);
    }
  }
};
</script>
