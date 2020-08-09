<template>
  <div v-if="user">
    <div v-for="item in actualRecipe" :key="item.id">
  

      <h2>{{ item.recipeName }}</h2>
    <img :src="item.imageUrlName" />
       <h3>Ingredients</h3>
      <ul>
        <li v-for="(ingredient, index) in item.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
      <h3>Recipe</h3>
      <p class="paragraphStyle">{{ item.recipeInstructions }}</p>

                  <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Delete Meeting"
                  @click="$emit('deleterecipe', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                  </button> 


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
</style>