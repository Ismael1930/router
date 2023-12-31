import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage.vue')
    },
    {
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPAge" */ '../modules/pokemon/pages/AboutPage.vue')
    },
    {
        path: '/id',
        component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router