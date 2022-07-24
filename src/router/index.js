import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Article from "../views/Article.vue";

const routes = [
    {
        name: "home",
        path: '/', 
        component: Home 
    },
    {
        name: "blog",
        path: '/blog',
        component: Blog
    },
    {
        name: "article",
        path: '/article/:id',
        component: Article
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;