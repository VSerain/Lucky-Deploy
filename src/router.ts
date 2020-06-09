import VueRouter, { RouteConfig } from 'vue-router'
import {
    HelloComponent
} from "app/components"

const routes: Array<RouteConfig> = [
    {
        path: "/hello/:name?",
        component: HelloComponent,
        props: true
    },

    {
        path: "*",
        component: HelloComponent,
        props: true
    },
]


export default new VueRouter({ routes })