import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Profile from "@/views/Profile.vue";
import Dashboard from "@/views/Dashboard.vue";
import NotFoundView from "@/views/NotFoundView.vue";

function isAuthenticated() {
  return !!localStorage.getItem("token"); // Check if token exists
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: "auth", requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { layout: "guest", requiresAuth: false },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { layout: "guest", requiresAuth: false },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { layout: "auth", requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { layout: "auth", requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some((record) => record.meta.requiresAuth);
  if (authRequired && !isAuthenticated()) {
    next("/login"); // Redirect to login if not authenticated
  } else if (
    !authRequired &&
    isAuthenticated() &&
    ["/login", "/register"].includes(to.path)
  ) {
    next("/dashboard"); // Redirect authenticated users away from guest pages
  } else {
    
    next();
  }
});

export default router;
