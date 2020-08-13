<template>
  <div class="background">
    <div class="top-space"></div>
    <img
      class="center imageSpace"
      src="../../public/images/onion.png"
      alt="illustraion of an onion"
    />

    <div class="about-container">

        <h3 v-if="user" class="text-center">
          Hi
          <span class="font-weight-bold text-info">{{user.displayName}}</span>,
        </h3>
     

      <h2>
        Welcome to
        <span class="logoTitle">Cookbook</span>
      </h2>
      <p class="largeParagraphText">
        This app can help you store all of your recipes and food creations with
        <a
          href="https://vuejs.org/"
        >Vue.js</a>
        and
        <a href="https://firebase.google.com">Firebase</a>.
      </p>
      <p class="largeParagraphText">
        Cookbook was created in the summer quarter of 2020 for the
        <a href="https://www.seattleu.edu/ncs/web-development/">WATS program</a> at Seattle University. It uses firbase to store user data and provides a content management system for users to upload and store recipes and access them from any device. The design is hand-coded and was a blast to create. Hope you enjoy it!
      </p>
      <!-- <div class="flex">
      <router-link class="textCenter" to="/login" v-if="!user">Log In</router-link>
      <router-link class="textCenter" to="/register" v-if="!user">Register</router-link>
      </div>

      <div class="flex">
      <router-link class="textCenter" to="/recipes" v-if="user">Recipes</router-link>
      <router-link  to="/create" v-if="user">Create a recipe</router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"],
  beforeCreate: function() {
    // if (!this.user) {
      document.body.className = "brand";
    // }
  }
};
</script>

<style scoped>
.largeParagraphText {
  font-size: 1.75em;
  margin-bottom: 1em;
  line-height: 1.5em;
}

.largeParagraphText a {
  color: black;
  font-family: var(--paragraph);
}

.largeParagraphText a:hover {
  color: rgb(70, 70, 70);
}

.about-container {
  width: 50em;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 5em;
}


.imageSpace {
  margin-top: 3em;
}


</style>