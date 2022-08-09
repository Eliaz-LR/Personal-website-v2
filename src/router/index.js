import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import Article from "../views/Article.vue";

const routes = [
    {
        name: "home",
        path: '/', 
        component: Home 
    },
    {
        name: "Articles",
        path: '/articles',
        component: Articles
    },
    {
        name: "article",
        path: '/articles/:id',
        component: Article,
        props: true,
    },
    {
        name: "404",
        path: "/:pathMatch(.*)",
        component: () => import("../views/404.vue"),
        meta: {
            title: "404 Not Found",
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;