<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          to="/"
        >Cookbook</router-link>
        <div class="navbar-nav ml-auto">
          <router-link
            class="nav-item nav-link"
            to="/recipes"
            v-if="user"
          >recipes</router-link>
          <router-link
            class="nav-item nav-link"
            to="/create"
            v-if="user"
          >Create a recipe</router-link>
          <router-link
            class="nav-item nav-link"
            to="/login"
            v-if="!user"
          >log in</router-link>
          <router-link
            class="nav-item nav-link"
            to="/register"
            v-if="!user"
          >register</router-link>
          <button 
            v-if="user"
            class="nav-item nav-link btn btn-link"
            @click="$emit('logout')"
          >
            logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navigation",
  props: ["user"]
};
</script>
