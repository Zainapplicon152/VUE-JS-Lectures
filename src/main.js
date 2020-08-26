import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from "vue-router";
import route1 from "./components/route1";
import route2 from "./components/route2";
import route3 from "./components/route3";
import sub_routes from "./components/sub_routes";

Vue.use(VueRouter);
const routes = [
    {path: '/', component: route1},
    {path: '/route2', component: route2},
    {path: '/route3', component: route3},
    {path: '/sub_routes/:id', component: sub_routes}
]

const router = new VueRouter({
    routes
})


Vue.config.productionTip = false

Vue.filter('ucase', function (val) {
    return val.toUpperCase();
})

Vue.filter('currency', function (val) {
    return val * 100;
})
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')