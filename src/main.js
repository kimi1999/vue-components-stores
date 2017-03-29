// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueResource from 'vue-resource'
Vue.use(VueResource);

//Vue.http.options.emulateJSON = true
//Vue.http.options.emulateHTTP = true

Vue.config.productionTip = false

router.beforeEach(function(to,from,next){
  // 每次路由跳转之前执行
  // console.log("000000000000000");
  // console.log(to);
  // console.log(from);
  next();
});
router.afterEach(function(a){
  // 每次路由跳转之后执行
  // console.log("999999999");
  // console.log(a);
  // document.title="88"
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
