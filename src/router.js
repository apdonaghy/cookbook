import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Createrecipe from "./views/Createrecipe.vue";
import Meetings from "./views/Recipes.vue";
import Register from "./views/Register.vue";
import CheckIn from "./views/Checkin.vue";
import Attendees from "./views/Attendees.vue";

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
      component: Meetings
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/createrecipe",
      name: "createrecipe",
      component: Createrecipe
    },
    {
      path:"/checkin/:userID/:meetingID", 
      name: "CheckIn",
      component: CheckIn
    },
    {
      path:"/attendees/:userID/:meetingID", 
      name: "attendees",
      component: Attendees
    },
    {
      path: "*",
      redirect: '/'
    }

  ]
});
