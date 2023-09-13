import login from './views/login.js';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home, 
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        }        
    ],
});
