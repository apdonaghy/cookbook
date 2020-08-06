<template>
  <div id="app">
    <Navigation
      :user="user"
      @logout="logout"
    />
    <router-view
      class="container"
      :user="user"
      :recipes="recipes"
      :error="error"
      @logout="logout"
      @addRecipe="addRecipe"
      @deleterecipe="deleterecipe"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Firebase from "firebase";
import db from "./db.js";

export default {
  name: "App",
  data: function() {
    return {
      user: null,
      error: null,
      recipes: []
    };
  },
  methods: {
    logout: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null;
          this.$router.push("login");
        });
    },
    addRecipe: function(payload) {
      // try adding image here too
   
      db.collection("users")
        .doc(this.user.uid)
        .collection("recipes")
        .add({
          recipeName: payload.recipeName,
          ingredients: payload.ingredients,
          recipeInstructions: payload.recipeInstructions,
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log(this.recipes)
    },
    deleterecipe: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("recipes")
        .doc(payload)
        .delete();
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        db.collection("users")
          .doc(this.user.uid)
          .collection("recipes")
          .onSnapshot(snapshot => {
            const snapData = [];
            snapshot.forEach(doc => {
              snapData.push({
                id: doc.id,
                recipeName: doc.data().recipeName,
                recipeInstructions: doc.data().recipeInstructions,
                ingredients: doc.data().ingredients
                });
            
            });
            // alphabetical org
            //  this.recipes = snapData.sort((a, b) => {
            //   if (a.title.toLowerCase() < b.title.toLowerCase()) {
            //     return -1;
            //   } else {
            //     return 1;
            //   }
            // });
             // alphabetical org
            this.recipes = snapData.sort((a, b) => {
              if (a.createdAt < b.createdAt) {
                return -1;
              } else {
                return 1;
              }
            });
          });
      }
    });
        
  },
  components: {
    Navigation
  }
};
</script>


<style lang="scss">
$primary: #05b2dd;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
