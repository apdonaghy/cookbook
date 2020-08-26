<template>
  <div>
    <div class="container">
      <div class="top-space"></div>
      <div class="stylized-title">
        <h1>MY RECIPES</h1>
      </div>

      <div class="firstRecipe newRecipe">
        <router-link to="/create">
          +
          <br />Create a new recipe
        </router-link>
      </div>

      <div class="flex flex-wrap">
        <!-- using the recipe prop that was created by methods in the main app level -->
        <div class="thirds margin-bottom" v-for="item of recipes" :key="item.id">
          <router-link :to="'/recipe/' + user.uid + '/' + item.id" id="thumbnailLink"> <!-- link to dynamic route that uses :to and pushes the user to a route with the user id and the unique recipe id for each recipe-->

            <div
              role="img"
              :aria-label="`${item.recipeName}`"
              class="thumbnailImages"
              :style="{backgroundImage:`url(${ item.imageUrlName })`}"
            ></div>

            <span
              class="recipe-title"
              :to="'/recipe/' + user.uid + '/' + item.id"
            >{{item.recipeName}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "recipes",
  data: function() {
    return {
      showFirstRecipe: false
    };
  },
  beforeCreate: function() {
    document.body.className = "white";
  },
  components: {
    // FontAwesomeIcon
  },
  props: ["user", "recipes"]
};
</script>
<style scoped>
.thirds {
  width: 31.3333333%;
  padding: 1%;
}

.thumbnailImages {
  width: 100%;
  height: 25em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 0.6em;
}

.thumbnailImages:hover {
  opacity: 0.75;
  transition: 0.3s;
 
  /* background-color: var(--brand); */
}

#thumbnailLink span:hover{
   color: #70c599;
   text-decoration: underline;
}

@media only screen and (max-width: 1300px) {
  .thumbnailImages {
    height: 20em;
  }
}

@media only screen and (max-width: 1100px) {
  .thumbnailImages {
    height: 20em;
  }
}

@media only screen and (max-width: 1000px) {
  .thumbnailImages {
    height: 18em;
  }
}

@media only screen and (max-width: 800px) {
  .thumbnailImages {
    height: 17em;
  }
}

@media only screen and (max-width: 900px) {
  .thumbnailImages {
    height: 15em;
  }
}

@media only screen and (max-width: 700px) {
  .thumbnailImages {
    height: 12em;
  }
}

@media only screen and (max-width: 500px) {
    .thirds {
    width: 96%;
    margin:0 auto;
  
  }
  .flex {
    display: block;
  }
  .thumbnailImages {
    height: 27em;
  }
}

@media only screen and (max-width: 450px) {

  .thumbnailImages {
    height: 24em;
  }
}

@media only screen and (max-width: 400px) {

  .thumbnailImages {
    height: 22em;
  }
}

.firstRecipe {
  width: 10em;
  font-size: 5em;
  color: black;
  padding-top: 1em;
  margin: 0 auto;
  text-align: center;
}

.firstRecipe a {
  color: black;
  text-decoration: none;
}

.firstRecipe a:hover {
  color: #70c599;
  text-decoration: underline;
}

.newRecipe {
  margin-top: -2em;
  padding-bottom: 2em;
  font-size: 1.5em;
}

.recipe-title {
  font-size: 1.5em;
  color: black;
  font-family: var(--medium);
  text-decoration: none;
  padding-right: 1em;
}

.recipe-title:hover {
  /* text-decoration: underline;
  color: #70c599; */
}

.margin-bottom {
  margin-bottom: 3em;
}

@media only screen and (max-width: 900px) {

.margin-bottom {
  margin-bottom: 2em;
}
}

.fadeIn {
  transition: ease 0.3s;
}
</style>