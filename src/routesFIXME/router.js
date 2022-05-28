import { createRouter, createWebHistory } from "vue-router";
import RoutePath from "./utils/RoutePath";

const routes = [
  {
    path: "/",
    component: () => import("./views/LoginSelectionView.vue"),
  },
  {
    path: "/login",
    component: () => import("./views/LoginView.vue"),
  },
  {
    path: RoutePath.SELECT,
    component: () => import("./views/SelectView.vue"),
  },
  {
    path: RoutePath.SHUFFLE,
    component: () => import("./views/ShuffleView.vue"),
  },
  {
    path: RoutePath.QUEUE,
    component: () => import("./views/QueueView.vue"),
  },
  {
    path: RoutePath.PARAMS,
    component: () => import("./views/ParamsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
