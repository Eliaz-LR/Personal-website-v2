import { createRouter, createWebHistory } from "vue-router";

const Home = { template: '<div>Home</div>' }
const routes = [
    { path: '/', component: Home }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router;