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
          this.$router.push("/login");
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


<style>
*{
  margin:0;
  padding:0;
  font-size: 1em;
  box-sizing: border-box;
}


::selection{
  background-color:black;
  color:white;
}



.top-space{
 height:50px;
 width:100%;
 position:relative
}

@font-face {
font-family: 'NeutraTextBoldAlt';
src: url(../public/fonts/NeutraTextBoldAlt.otf);
}

@font-face {
font-family: 'SortsMillGoudy-Regular';
src: url(../public/fonts/SortsMillGoudy-Regular.ttf);
}

@font-face {
font-family: 'NeutraMedium';
src: url(../public/fonts/NeutraTextDemiAlt.otf);
}

.flex {
  display: flex;
}

.flex-wrap{
  flex-wrap: wrap;
}



.center {
  display: block;
  margin: 0 auto;
}

h2{
  font-size:3.75em;
   margin-bottom:.7em;
  text-align: center;

}

h3{
  font-size:1.7em;
  margin-bottom:1em;
  text-align:center;
}

:root {
  --brand: #ffdc87;
  --offwhite: #fdfdfd;
  --boldFace: 'NeutraTextBoldAlt';
  --medium: 'NeutraMedium';
  --paragraph: 'SortsMillGoudy-Regular';
}

.padding-top{
  padding-top:50px;
}

body.brand {
    background:var(--brand);
}
body.white {
    background:var(--offwhite);
}




*{
  font-family: 'NeutraTextBoldAlt';
}

p{
  font-family:'SortsMillGoudy-Regular';
}

.stylized-title{
  display:block;
  background:black;
  color:white;
  width:9.5em;
  padding:18px 8px 13px 8px;
  margin:0 auto;
  text-align:center;
  margin-top:4em;
  margin-bottom:3em;
  
}

.stylized-title span{
  font-size:1.25em;
  padding:10px 10px 5px 10px;
  border: solid 2px white;
  font-family: var(--medium);
}


.container{
  max-width: 1250px;
  margin: 0 auto;
  padding-bottom: 3em;
}

@media only screen and (max-width: 1300px){
.container{
  max-width: 1100px;
  margin: 0 auto;
}
}

@media only screen and (max-width: 1200px){
.container{
  max-width: 950px;
  margin: 0 auto;
}
}

@media only screen and (max-width: 980px){
.container{
  max-width: 900px;
  margin: 0 auto;
}
}

@media only screen and (max-width: 925px){
.container{
  max-width: 850px;
  margin: 0 auto;
}
}



/* form */
input[type="text"], input[type="email"], input[type="password"] {
  border: none;
  /* text-decoration: underline; */
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: var(--medium);
  font-weight: 500;
  color:black;
  font-size: 1.75em;
  width: 100%;
  border-bottom: 3px solid black;
  padding-top:7px;
  padding-bottom:4px;
  margin-bottom:1em;
}


input[type="text"]:focus, input[type="email"]:focus, input[type="password"]:focus {
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: var(--medium);
  color:black;
  border-bottom: 3px solid gray;
  transition: 0.3s;
}

::-webkit-input-placeholder { /* Edge */
  color:rgb(191, 191, 191);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color:rgb(191, 191, 191);
}

::placeholder {
  color:rgb(191, 191, 191);
}

input:focus::-webkit-input-placeholder 
{
    color: transparent;
    transition: 0.3s;
}


.login-form{
  background:white;
  border-radius: 20px;
  padding:2.75em;
  position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
  z-index:1;
  box-shadow: 0px 0px 20px #ffbc63;
}

@media only screen and (max-height: 800px){
  .login-form{
  position: relative;
	margin: 0 auto;
  margin-top:5%;
  z-index:1;
   margin-bottom:5%;
}
}
.signInBtn {
  border: 3px solid black;
  
  color:black;
  background:none;
  height: 2.75em;
  cursor: pointer;
  font-size: 1.5em;
  width:100%;
}


.signInBtn:hover,.signInBtn:focus {
  background-color: black;
  color:var(--brand);

  transition: ease-in-out .3s;

}

.createAnAccount{
  text-align:center;
  margin-top:1em;
  font-family: var(--medium);
   color:rgb(142, 142, 142);
}


.createAnAccount a{
 text-decoration: none;
 color:rgb(142, 142, 142);
}

.createAnAccount a:hover{
 color:black;
}

.loginForm{
    width:25em;
  height:25em;
}

.register{
  width:25em;
  height:36em;
}

.error{
  display:block;
  margin: 0 auto;
  text-align: center;
  max-width: 25em;
  margin-top:3em;
  line-height: 1.5em;
  font-family: var(--medium);
}

/* form */

/* @import "node_modules/bootstrap/scss/bootstrap"; */
</style>
