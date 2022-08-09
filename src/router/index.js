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
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;