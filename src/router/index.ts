import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Login from '../views/Login.vue';
import Admin from '../views/Admin.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';


const routes:Array<RouteRecordRaw> = [
  { path: '/', name:'Home',component: Home },
  { path: '/search',  name:'Search',component: Search },
  { path: '/login',  name:'Login',component: Login },
  { path: '/admin',  name:'Admin',component: Admin },
  { path: '/about',  name:'About',component: About },
  { path: '/contact',  name:'Contact',component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
