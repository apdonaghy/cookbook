<template>
  <div>
    <div class="container">
      <div class="top-space"></div>
      <div class="stylized-title">
        <span>MY RECIPES</span>
      </div>
      <div v-if="recipes.length === 0" class="firstRecipe">
        <router-link to="/create">Create your first recipe</router-link>
      </div>

      <div v-if="recipes.length >= 1" class="firstRecipe newRecipe">
        <router-link to="/create">+<br>Create a new recipe</router-link>
      </div>

      <div class="flex flex-wrap">
        <div class="thirds margin-bottom" v-for="item of recipes" :key="item.id">
          <router-link :to="'/recipe/' + user.uid + '/' + item.id">
            <div
              role="img"
              :aria-label="`${item.recipeName}`"
              class="thumbnailImages"
              :style="{backgroundImage:`url(${ item.imageUrlName })`}"
            ></div>

            <router-link
              class="recipe-title"
              :to="'/recipe/' + user.uid + '/' + item.id"
            >{{item.recipeName}}</router-link>
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
    return {};
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
  width: 33.3333%;
  padding: 10px;
  
}


.thumbnailImages {
  width: 100%;
  height: 25em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom:.6em;
}


.thumbnailImages:hover {
  opacity: .75;
  transition: .3s;
  /* background-color: var(--brand); */
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
  color:#70c599;
  text-decoration: underline;
}

.newRecipe{
  margin-top: -2em;
 padding-bottom: 2em;
 font-size: 1.5em;
 
}



a[data-v-0632d8db].recipe-title{

  font-size:1.5em;
  color:black;
    font-family: var(--medium);
    text-decoration: none;
   
}

a[data-v-0632d8db].recipe-title:hover{
    text-decoration: underline;
   color:#70c599;
}

.margin-bottom{
  margin-bottom: 1.75em;
}

</style>