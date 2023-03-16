import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {   
        name: 'WelcomeScreen', 
        path: "/", 
        component: () => import('./components/WelcomeScreen.vue')  //importing and using simultaneosly
    },
    {   
        name: 'DayA', 
        path: "/dayA", 
        component: () => import('./components/DayA.vue')  //importing and using simultaneosly
    },
    {   
        name: 'DayB', 
        path: "/dayB", 
        component: () => import('./components/DayB.vue')  //importing and using simultaneosly
    },

];


const router =  createRouter({
    history: createWebHistory(),
    routes : routes
});

export default router;