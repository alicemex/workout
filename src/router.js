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
    {   
        name: 'DayC', 
        path: "/dayc", 
        component: () => import('./components/DayC.vue') 
    },
    {   
        name: 'BebeCasa', 
        path: "/bebedelacasa", 
        component: () => import('./components/BebeCasa.vue') 
    },
    {   
        name: 'ChiquisBonita', 
        path: "/chiquisbonita", 
        component: () => import('./components/ChiquisBonita.vue')  //importing and using simultaneosly
    },
    {   
        name: 'ChiquisA', 
        path: "/ChiquisA", 
        component: () => import('./components/ChiquisA.vue')  //importing and using simultaneosly
    },
    {   
        name: 'ChiquisB', 
        path: "/ChiquisB", 
        component: () => import('./components/ChiquisB.vue')  //importing and using simultaneosly
    },
    {   
        name: 'ChiquisC', 
        path: "/ChiquisC", 
        component: () => import('./components/ChiquisC.vue')  //importing and using simultaneosly
    },

];


const router =  createRouter({
    history: createWebHistory(),
    routes : routes
});

export default router;