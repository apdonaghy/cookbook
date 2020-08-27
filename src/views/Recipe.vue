<template>
  <div>
    <div class="top-space"></div>

    <div class="container recipeContainer">
      <div class="stylized-title recipe">
        <h1>RECIPE</h1>
      </div>

      <div v-for="item in localRecipe" :key="item.id">
        <h2>{{ item.recipeName }}</h2>
        <img class="center picSize" :src="item.imageUrlName" :alt="item.recipeName" />
        <h3 class="text-left margin-top recipeTags">Ingredients</h3>
        <ul class="ingredientsList">
          <li v-for="(ingredient, index) in item.ingredients" :key="index">{{ ingredient }}</li>
        </ul>
        <h3 class="text-left recipeTags">Recipe</h3>
        <p class="paragraphStyle recipeText">{{ item.recipeInstructions }}</p>

        <button
          class="delete"
          title="Delete Recipe"
          @click="deleteRecipeOn"
          @keyup.enter="deleteRecipeOn"
        >
          <font-awesome-icon icon="trash"></font-awesome-icon>Delete Recipe
        </button>

        <transition name="fade">
          <div
            tabindex="0"
            role="button"
            @click="show = !show"
            @keyup.enter="show = !show"
            v-if="show"
            class="higher"
          >
            <button
              class="delete confirm"
              title="Confirm Delete"
              @click="$emit('deleterecipe', item.id)"
              @keydown.tab="show = !show"
            >
              <font-awesome-icon icon="trash"></font-awesome-icon>Confirm Delete
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../db.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "recipe",

  data: function() {
    return {
      userID: this.$route.params.userID,
      recipesID: this.$route.params.recipesID,
      localRecipe: [],
      show: false
    };
  },
  beforeCreate: function() {
    document.body.className = "white";
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    deleteRecipeOn() {
      this.show = true;
    }
  },
  mounted() {
    // this is where I get the users recipe data from the database, using the userID that I'm taking from the route that was pushed via the recipes page
    db.collection("users")
      .doc(this.userID)
      .collection("recipes")
      .onSnapshot(snapshot => {
        const snapData = [];
        snapshot.forEach(doc => {
          snapData.push({
            id: doc.id,
            recipeName: doc.data().recipeName,
            recipeInstructions: doc.data().recipeInstructions,
            ingredients: doc.data().ingredients,
            imageUrlName: doc.data().imageUrlName
          });
        });

        // this is where I get the unique recipe data by taking the user's recipes collection that I just pushed to snapData on mount and then look for the recipe with the same id as the route (recipesID) and then push that to a local array called "localRecipe." Then I use that array to loop through for the content of each recipe page.
        for (let recipe in snapData) {
          if (snapData[recipe].id === this.recipesID) {
            this.localRecipe.push(snapData[recipe]);
          }
        }
      });
  }
};
</script>

<style scoped>
.paragraphStyle {
  white-space: pre-wrap;
}

.recipe {
  width: 6.8em;
}

.picSize {
  width: 100%;
  max-width: 44em;
}

.text-left {
  text-align: left;
}

.recipeContainer {
  max-width: 50em;
  padding: 0 40px 0 40px;
}

.recipeText {
  font-size: 1.35em;
  line-height: 1.6em;
}

.ingredientsList {
  margin-bottom: 4em;
}

.ingredientsList li {
  margin-bottom: 1em;
  font-family: var(--medium);
  font-size: 1.15em;
}

.margin-top {
  margin-top: 3em;
}

.recipeTags {
  font-size: 2.2em;
}

.delete {
  padding: 0.5em;
  background: white;
  cursor: pointer;
  background-image: none;
  font-size: 1.25em;
  display: block;
  margin: 0 auto;
  margin-top: 2em;
  border: 3px solid black;
}

.delete:hover {
  color: red;
  border: 3px solid red;
  transition: 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.lower {
  position: relative;
  z-index: 1;
}

.confirm {
  z-index: 6;
  width: 10em;
  height: 3em;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: black;
  color: white;
  border: 3px solid white;
}

.higher {
  z-index: 5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* background:rgba(); */
  background: rgba(0, 0, 0, 0.3);
}
</style>