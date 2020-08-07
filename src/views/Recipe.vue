<template>
  <div v-if="user">
    <!-- <div class="list-group-item d-flex" v-for="item of recipes" :key="item.id">
      <p v-if="item.id === recipesID">{{item.recipeName}}</p>
    </div> -->
<div v-for="item in actualRecipe" :key="item.id">

  <img :src="item.imageUrlName">

  <p> {{ item.recipeName }} </p>

  <ul> 
    <li v-for="(ingredient, index) in item.ingredients" :key="index">
    {{ ingredient }} 
    </li>
  </ul>

  <p> {{ item.recipeInstructions }} </p>

</div>

  </div>
</template>
<script>
import db from "../db.js";
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
        for(let recipe in this.localRecipe){
        if(this.localRecipe[recipe].id === this.recipesID){
           this.actualRecipe.push(this.localRecipe[recipe])
          
        }
        }
       
      });
     
  }
  

};
</script>