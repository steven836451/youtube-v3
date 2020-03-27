// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Duration from './filters/duration';
// 第三方套件
import Vuex from 'vuex';
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import 'video.js/dist/video-js.css';



Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('duration',Duration);
// Vue.prototype.$video = Video;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
