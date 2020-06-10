import VueRouter, { RouteConfig } from 'vue-router'

import { userController } from "app/controllers";

import {
    HomeComponent,
    LoginComponent
} from "app/components"

const routes: Array<RouteConfig> = [
    {
        path: "/login",
        component: LoginComponent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (userController.connected) next('/')
            else next()
        }
    },

    {
        path: "*",
        component: HomeComponent,
        props: true,
        beforeEnter: (to, from, next) => {
            if (!userController.connected) next('/login')
            else next()
        }
    },
]


export default new VueRouter({ routes })