<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <SideBarLeft/>
    <!-- Page Content Holder -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="navbar-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
              <ProfileUser/>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import SideBarLeft from "../components/layouts/SideBarLeft";
import ProfileUser from "../components/layouts/ProfileUser";
export default {
  data() {
    return {
      menu: false
    };
  },
  components: {
    SideBarLeft,
    ProfileUser
  }
};
</script>