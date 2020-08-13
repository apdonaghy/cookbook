<template>
  <div>
     <div class="top-space"></div>

      <div class="container recipeContainer">
      <div class="stylized-title recipe">
        <span>RECIPE</span>
      </div>

    <div v-for="item in actualRecipe" :key="item.id">
  

      <h2>{{ item.recipeName }}</h2>
    <img class="center picSize" :src="item.imageUrlName" />
       <h3 class="text-left margin-top recipeTags">Ingredients</h3>
      <ul class="ingredientsList">
        <li v-for="(ingredient, index) in item.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <h3 class="text-left recipeTags">Recipe</h3>
      <p class="paragraphStyle recipeText">{{ item.recipeInstructions }}</p>

                  <button
                  class="delete"
                  title="Delete Meeting"
                  @click="$emit('deleterecipe', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon> Delete Recipe
                  </button> 


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
      actualRecipe: []
    };
  },
    beforeCreate: function() {
    document.body.className = 'white';
  },
  components: {
    FontAwesomeIcon
  },
  props: ["user", "recipes"],
  mounted() {

    db.collection("users")
      .doc(this.userID)
      .collection("recipes")
      // .doc(this.recipiesID)
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
        this.localRecipe = snapData;
        for (let recipe in this.localRecipe) {
          if (this.localRecipe[recipe].id === this.recipesID) {
            this.actualRecipe.push(this.localRecipe[recipe]);
          }
        }
      });
  }
};
</script>

<style scoped>
.paragraphStyle{
  white-space: pre-wrap;
}

.recipe{
  width:6.8em;
}

.picSize{
  width:100%;
  max-width:44em;
}

.text-left{
  text-align:left;
}

.recipeContainer{
  max-width: 57em;
  padding: 0 40px 0 40px;
}

.recipeText{
  font-size:1.35em;
  line-height: 1.6em;
}

.ingredientsList{
  margin-bottom:4em;
}

.ingredientsList li{
  margin-bottom:1em;
  font-family: var(--medium);
  font-size: 1.15em;
}

.margin-top{
  margin-top: 3em;
}

.recipeTags{
  font-size:2.2em;
}

.delete{
  padding:.5em;
  background: white;
  cursor: pointer;
  background-image: none;
  font-size:1.25em;
  display:block;
  margin: 0 auto;
  margin-top: 2em;
  border:3px solid black;
}

.delete:hover{
  color:red;
  border:3px solid red;
}

</style>