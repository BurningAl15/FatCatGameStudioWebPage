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
    component: Games,
    props: true
  },
  {
    path: "/games/:id",
    name: "gameData",
    component: GameData,
    props: (route) => ({
      game: route.query.game,
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
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("../views/Privacy.vue")
  },
  {
    path: "/privacy/mix2word",
    name: "privacyMix2Word",
    component: () => import("../views/PrivacyMix2Word.vue")
  },
  {
    path: "/privacy/pigyear",
    name: "privacyPigYear",
    component: () => import("../views/PrivacyPigYear.vue")
  },
  {
    path: "/privacy/lazylovers",
    name: "privacyLazyLovers",
    component: () => import("../views/PrivacyLazyLovers.vue")
  },
  {
    path: "/privacy/pizzamaster",
    name: "privacyPizzaMaster",
    component: () => import("../views/PrivacyPizzaMaster.vue")
  },
  {
    path: "/privacy/slothysbakery",
    name: "privacySlothysBakery",
    component: () => import("../views/PrivacySlothysBakery.vue")
  },
  {
    path: "/privacy/slothyscafe",
    name: "privacySlothysCafe",
    component: () => import("../views/PrivacySlothysCafe.vue")
  },
  {
    path: "/privacy/matchtherunes",
    name: "privacyMatchTheRunes",
    component: () => import("../views/PrivacyMatchTheRunes.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
