<template>
  <nav id="sidebar">
    <div class="sidebar-header">
      <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
    <span class="ml-3">Tô Văn Chén</span>
    </div>
    <ul class="list-unstyled">
      <p class="ml-4">Quản lý hệ thống</p>
      <li v-for="item in items" :key="item.id">
        <router-link class="white--text" :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data(){
    return {
      items: [
        {
          id: 1,
          name: "Quản lý người dùng",
          link: "user",
        },
        {
          id: 2,
          name: "Quản lý dự án",
          link: "project"
        },
        {
          id: 3,
          name: "Quản lý bài viết",
          link: "post"
        }
      ]
    }
  }
}
</script>
