import "reflect-metadata";
import Vue from "vue";
import VueRouter from 'vue-router'

import Router from 'app/router';
const config = {
    
}

Vue.use(VueRouter)

let vue: Vue = new Vue({
    router: Router,
    data: {
        config
    }
}).$mount('#app');