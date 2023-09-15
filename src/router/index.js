import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/Login.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'login',
          component: login,
        }        
    ],
});

export default router;