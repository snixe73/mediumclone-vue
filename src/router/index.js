import Vue from 'vue'
import VueRouter from 'vue-router'

import GlobalFeed from '@/views/GlobalFeed'
import Register from '@/views/Register'
import Login from '@/views/Login'
import YourFeed from '@/views/YourFeed';
import TagFeed from '@/views/TagFeed';

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed
  },
  {
    path: '/article',
    name: 'createArticle',
    component: GlobalFeed
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: GlobalFeed
  },
  {
    path: '/article/:slug/edit',
    name: 'editArticle',
    component: GlobalFeed
  },
  {
    path: '/settings',
    name: 'settings',
    component: GlobalFeed
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeed
  },
  {
    path: '/profiles/:slug/favourites',
    name: 'userProfileFavourites',
    component: GlobalFeed
  },
]

const router = new VueRouter({
  routes
})

export default router
