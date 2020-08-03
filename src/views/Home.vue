<template>
  <div class="mt-3">
    <div class="text-secondary text-center">
      <div
        v-if="user"
        class="text-center"
      >
        Welcome back
        <span class="font-weight-bold text-info">{{user.displayName}}</span>, <a
          href="#"
          role="button"
          class="text-primary"
          @click="$emit('logout')"
        >logout</a>
      </div>
    </div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-10 col-lg-8 col-xl-7">
          <h4 class="display-4 text-primary mb-2">Welcome</h4>
          <p class="lead">
            This app can help you store all of your favorite recipes with
            <a href="https://vuejs.org/">Vue.js</a>
            and
            <a href="https://firebase.google.com">Firebase</a>.
          </p>

          <router-link
            class="btn btn-outline-primary mr-2"
            to="/register"
            v-if="!user"
          >Register</router-link>
          <router-link
            class="btn btn-outline-primary mr-2"
            to="/login"
            v-if="!user"
          >Log In</router-link>
          <router-link
            class="btn btn-primary"
            to="/recipes"
            v-if="user"
          >Recipes</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"]
};
</script>
