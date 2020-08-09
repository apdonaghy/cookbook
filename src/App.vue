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
      db.collection("users")
        .doc(this.user.uid)
        .collection("recipes")
        .add({
          recipeName: payload.recipeName,
          ingredients: payload.ingredients,
          recipeInstructions: payload.recipeInstructions,
          imageUrlName: 'https://firebasestorage.googleapis.com/v0/b/cookbook-fa062.appspot.com/o/images%2F' + payload.imageUrlName + '?alt=media',
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        });
      this.$router.push('/recipes'); 
    },
    deleterecipe: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("recipes")
        .doc(payload)
        .delete();
        this.$router.push("/recipes");
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
                ingredients: doc.data().ingredients,
                imageUrlName: doc.data().imageUrlName
                // imageUrl: doc.data().imageUrl 
              });
            });
            // alphabetical org
             this.recipes = snapData.sort((a, b) => {
              if (a.recipeName.toLowerCase() < b.recipeName.toLowerCase()) {
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
$primary: black;

@font-face {
font-family: 'NeutraTextBoldAlt';
src: url(../public/fonts/NeutraTextBoldAlt.otf);
}

@font-face {
font-family: 'SortsMillGoudy-Regular';
src: url(../public/fonts/SortsMillGoudy-Regular.ttf);
}

*{
  font-family: 'NeutraTextBoldAlt';
}

p{
  font-family:'SortsMillGoudy-Regular';
}
// *{
//   background-color:black;
// }

// h1, h2, h2, p, li{
//   color:white;
// }
@import "node_modules/bootstrap/scss/bootstrap";
</style>
