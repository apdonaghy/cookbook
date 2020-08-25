<template>
  <div class="background">
    <div class="top-space"></div>
    <img
      class="center imageSpace svgImg"
      src="../../public/images/onion.svg"
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
          class="underline"
          href="https://vuejs.org/"
        >Vue.js</a>
        and
        <a class="underline" href="https://firebase.google.com">Firebase</a>.
      </p>
      <p class="largeParagraphText">
        Cookbook was created in the summer quarter of 2020 for the
        <a
          class="underline"
          href="https://www.seattleu.edu/ncs/web-development/"
        >WATS program</a> at Seattle University. It uses firebase to store user data and provides a content management system for users to upload and store recipes and access them from any device. The design is hand-coded and was a blast to create. Hope you enjoy it!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"],
  beforeCreate: function() {
    document.body.className = "brand";
  }
};
</script>

<style scoped>
.svgImg {
  width: 7em;
}

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
  max-width: 55em;
  margin: 0 auto;
  margin-top: 1em;
  padding: 15px;
}

.imageSpace {
  margin-top: 3em;
}
</style>