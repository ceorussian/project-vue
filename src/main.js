import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from "./router/index";
import store from './store/index'
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
