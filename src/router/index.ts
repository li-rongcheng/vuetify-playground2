import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import RLTest from "../views/RLTest.vue";
import Babylon from "../views/Babylon.vue";
import BabylonDemo1 from "../views/babylon/BabylonDemo1.vue";
import BabylonDemo2 from "../views/babylon/BabylonDemo2.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/rltest", name: "RLTest", component: RLTest },
  {
    path: "/babylon",
    name: "Babylon",
    component: Babylon,
    children: [
      { path: "demo1", name: "BabylonDemo1", component: BabylonDemo1 },
      { path: "demo2", name: "BabylonDemo2", component: BabylonDemo2 },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
