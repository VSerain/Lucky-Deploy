import "reflect-metadata";
import Vue from "vue";
import VueRouter from 'vue-router'

import vuetify from "./plugins/vuetify";
import Router from 'app/router';

Vue.use(VueRouter)

if (localStorage.getItem("apikey")) {
    document.cookie = "user=" + localStorage.getItem("apikey");
}

let vue: Vue = new Vue({
    router: Router,
    vuetify,
    data: {
    }
} as any).$mount('#app');

window["$Vue"] = vue;