<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
    <template slot="activator">
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <span class="mx-2">Supper Admin</span>
    </template>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Supper Admin</v-list-tile-title>
            <v-list-tile-sub-title>Quản lý dự án</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list>
        <v-list-tile @click="profile">
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="changePassword">
          <v-list-tile-title>Thay đổi mật khẩu</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      menu: false
    };
  },
  methods:{
    changePassword(){

    },
    profile(){

    }
  }
};
</script>
