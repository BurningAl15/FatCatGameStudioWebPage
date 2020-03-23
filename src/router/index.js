import Vue from "vue";
import VueRouter from "vue-router";
import Games from "../views/Games.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import GameData from "../views/GameData.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "games",
    // component: () 
    //   import(/* webpackChunkName: "about" */ '../views/EventList.vue')
    component: Games,
    props:true
  },
  {
    path: "/games/:id",
    name: "gameData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: GameData,
    props: (route)=>({
      game:route.query.game,
      ...route.params
    })
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/about",
    name: "about",
    component: About,
  }
  // {
  //   path:'*',
  //   component:NotFoundComponent
  // }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
