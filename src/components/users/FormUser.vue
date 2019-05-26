<template>
  <v-dialog :value="isShow" @input="$emit('closeModel')" width="500">
    <v-card class="pa-3">
      <TitleForm title="Thêm mới người dùng" icon="add" v-if="!item"/>
      <TitleForm title="Chỉnh sửa người dùng" icon="edit" v-else/>
      <v-form ref="form" lazy-validation class="my-2">
        <v-text-field
          v-model="name"
          :rules="[ v => !!v || 'Password is required' ]"
          label="Tên người dùng"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="[ v => !!v || 'Password is required' ]"
          label="E-mail người dùng"
          required
        ></v-text-field>
        <v-select
          :items="listRole"
          label="Quyền truy cập"
          item-text="name"
          item-value="id"
          v-model="role"
          :rules="[ v => !!v || 'Password is required' ]"
        ></v-select>
        <v-textarea
          name="input-7-1"
          label="Mô tả "
          v-model="description"
          :rules="[ v => !!v || 'Password is required' ]"
        ></v-textarea>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outline color="error" @click="$emit('closeModel')">Cancel</v-btn>
        <v-btn v-if="!item" color="success" outline @click="add">Thêm</v-btn>
        <v-btn v-else color="success" outline @click="edit">Cập nhật</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
import TitleForm from "../layout-forms/TitleForm";
export default {
  props: {
    isShow: Boolean,
    item: Object
  },
  components: {
    TitleForm
  },
  data() {
    return {
      name: "",
      email: "",
      role: "",
      description: ""
    };
  },
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        const data = {
          id: Math.random(),
          name: this.name,
          email: this.email,
          description: this.description,
          role: this.role
        };
        this.$emit("addNewUser", data);
        this.$refs.form.reset();
      }
    },
    edit() {
      if (this.$refs.form.validate()) {
        const data = {
          id: this.item.id,
          name: this.name,
          email: this.email,
          description: this.description,
          role: this.role
        };
        this.$emit("editUser", data);
      }
    }
  },
  computed: {
    ...mapGetters("role", ["listRole"])
  },
  watch: {
    isShow(e) {
      if (this.item) {
          this.name = this.item.name;
          this.email = this.item.email;
          this.description = this.item.description;
          this.role = this.item.role;
        }
    }
  }
};
</script>
