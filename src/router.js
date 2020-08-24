import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Recipes from "./views/Recipes.vue";
import Recipe from "./views/Recipe.vue";
import Register from "./views/Register.vue";
import Create from "./views/Create.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/recipes",
      name: "recipes",
      component: Recipes
    },
    {
      // this is the dynamic route, which uses the user iD and recipe iD to create a unique url. In vue the colon means that the data is dynamic
      path: "/recipe/:userID/:recipesID",
      name: "recipe",
      component: Recipe
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "*",
      redirect: '/'
    }

  ]
});
