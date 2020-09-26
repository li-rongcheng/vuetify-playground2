import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Babylon from "../views/Babylon.vue";
import BabylonDemo1 from "../views/babylon/BabylonDemo1.vue";
import BabylonDemo2 from "../views/babylon/BabylonDemo2.vue";
import BabylonDemoAnimation101 from "../views/babylon/BabylonDemoAnimation101.vue";
import BabylonDemoGLTF from "../views/babylon/BabylonDemoGLTF.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/rltest",
    name: "RLTest",
    // route level code-splitting
    // this generates a separate chunk ([name].[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/RLTest.vue"),
  },
  {
    path: "/babylon",
    name: "Babylon",
    component: Babylon,
    children: [
      { path: "demo1", name: "BabylonDemo1", component: BabylonDemo1 },
      { path: "demo2", name: "BabylonDemo2", component: BabylonDemo2 },
      { path: "animation101", name: "BabylonDemoAnimation101", component: BabylonDemoAnimation101 },
      { path: "gltf", name: "BabylonDemoGLTF", component: BabylonDemoGLTF },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
