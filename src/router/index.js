import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import PedidosAbertosView from "@/views/PedidosAbertosView.vue";
import HistoricoPedView from "@/views/HistoricoPedView.vue";
import CardapioView from "@/views/CardapioView.vue"
import FuncionariosView from "@/views/FuncionariosView.vue"

import FullLayout from '@/layouts/FullLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: BlankLayout,
        children: [{
          
          path: '',
          name: 'login',
          component: LoginView,
        },
        ]
      },
      {
        path: '/',
        component: FullLayout,
        children: [

          {
            path: '/pedidosAbertos',
            name: 'pedidosAbertos',
            component: PedidosAbertosView,
          },
          {
            path: '/historicoPedidos',
            name: 'historicoPedidos',
            component: HistoricoPedView,
          },
          {
            path: '/editarCardapio',
            name: 'editarCardapio',
            component: CardapioView,
          },
          {
            path: '/funcionarios',
            name: 'funcionarios',
            component: FuncionariosView,
          },
        ]
      },
      
    ]      
});

export default router;