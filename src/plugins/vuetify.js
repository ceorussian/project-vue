import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#6d42c7",
    secondary: "#e57373",
    accent: "#8aacff",
    error: "#e85b48",
    warning: "#fbe4a0",
    info: "#626fe6",
    success: "#24b314",
    grey: "#757575"
  }
})
