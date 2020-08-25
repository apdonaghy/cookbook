<template>
  <div id="app">
    <!-- this is where I add the navigation component so that it's in every route -->
    <Navigation :user="user" @logout="logout" />

    <!-- global methods and data properties -->
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
    // this method pushes the recipe to the database which is emmited from the "create a recipe" page
    addRecipe: function(payload) {
      db.collection("users")
        .doc(this.user.uid)
        .collection("recipes")
        .add({
          recipeName: payload.recipeName,
          ingredients: payload.ingredients,
          recipeInstructions: payload.recipeInstructions,
          // this is a reference to the user uploaded image that is actually in the storage bucket.
          imageUrlName:
            "https://firebasestorage.googleapis.com/v0/b/cookbook-fa062.appspot.com/o/images%2F" +
            payload.imageUrlName +
            "?alt=media",
          createdAt: Firebase.firestore.FieldValue.serverTimestamp()
        });
      this.$router.push("/recipes");
    },
    // deletes recipe from database
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
    // this collects data from the database if recipes already exist and pushes the recipe data to the "recipes" array
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
              });
            });
            // sorts recipes on the "recipes" page alphabetically
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
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
  /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}

/* end of normalize css */
/* end of normalize css */
/* end of normalize css */
/* end of normalize css */

@font-face {
  font-family: "NeutraTextBoldAlt";
  src: url(../public/fonts/NeutraTextBoldAlt.otf);
}

@font-face {
  font-family: "SortsMillGoudy-Regular";
  src: url(../public/fonts/SortsMillGoudy-Regular.ttf);
}

@font-face {
  font-family: "NeutraMedium";
  src: url(../public/fonts/NeutraTextDemiAlt.otf);
}

:root {
  --brand: #ffdc87;
  --offwhite: #fdfdfd;
  --boldFace: "NeutraTextBoldAlt";
  --medium: "NeutraMedium";
  --paragraph: "SortsMillGoudy-Regular";
}

h1 {
  font-size: 1em;
}

h2 {
  font-size: 3.75em;
  margin-bottom: 0.7em;
  text-align: center;
}

h3 {
  font-size: 1.7em;
  margin-bottom: 1em;
  text-align: center;
}

h4 {
  font-size: 1.35em;
  margin-bottom: 1em;
}

::selection {
  background-color: black;
  color: white;
}

.top-space {
  height: 50px;
  width: 100%;
  position: relative;
}

.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.center {
  display: block;
  margin: 0 auto;
}

.padding-top {
  padding-top: 50px;
}

body.brand {
  background: var(--brand);
}
body.white {
  background: var(--offwhite);
}

* {
  font-family: "NeutraTextBoldAlt";
}

p {
  font-family: "SortsMillGoudy-Regular";
}

.stylized-title {
  display: block;
  background: black;
  color: white;
  width: 9.5em;
  padding: 7px;
  margin: 0 auto;
  text-align: center;
  margin-top: 4em;
  margin-bottom: 3em;
}

.stylized-title h1 {
  font-size: 1.25em;
  padding: 10px 10px 5px 10px;
  border: solid 2px white;
  font-family: var(--medium);
  margin: 0px;
}

.container {
  max-width: 1250px;
  margin: 0 auto;
  padding-bottom: 3em;
}

/* form */
/* form */
/* form */
input[type="text"],
input[type="email"],
input[type="password"] {
  border: none;
  /* text-decoration: underline; */
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  font-family: var(--medium);
  font-weight: 500;
  color: black;
  font-size: 1.75em;
  width: 100%;
  border-bottom: 3px solid black;
  padding-top: 7px;
  padding-bottom: 4px;
  margin-bottom: 1em;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  outline: none;

  box-shadow: none;
  font-family: var(--medium);
  color: black;
  border-bottom: solid 3px lightgray;
  transition: 0.3s;
}

::-webkit-input-placeholder {
  /* Edge */
  color: rgb(191, 191, 191);
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgb(191, 191, 191);
}

::placeholder {
  color: rgb(191, 191, 191);
}

input:focus::-webkit-input-placeholder {
  color: transparent;
  transition: 0.3s;
}

/* login and register */
/* login and register */
/* login and register */

.login-form {
  background: white;
  border-radius: 20px;
  padding: 2.75em;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  box-shadow: 0px 0px 20px #ffbc63;
}

.loginForm {
  max-width: 25em;
  height: 25em;
}

.register {
  max-width: 25em;
  height: 36em;
}


.signInBtn {
  border: 3px solid black;

  color: black;
  background: none;
  height: 2.75em;
  cursor: pointer;
  font-size: 1.5em;
  width: 100%;
}

.signInBtn:hover,
.signInBtn:focus {
  background-color: black;
  color: var(--brand);

  transition: ease-in-out 0.3s;
}

.createAnAccount {
  text-align: center;
  margin-top: 15px;
  font-family: var(--medium);
  color: rgb(142, 142, 142);
}

.createAnAccount a {
  text-decoration: none;
  color: rgb(142, 142, 142);
}

.createAnAccount a:hover {
  color: black;
}

.error {
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 25em;
  margin-top: 3em;
  line-height: 1.5em;
  font-family: var(--medium);
}

a {
  text-decoration: none;
}

.underline {
  text-decoration: underline;
}
/* login and register */
/* login and register */
/* login and register */


@media only screen and (max-width: 1300px) {
  .container {
    max-width: 1100px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    max-width: 950px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 980px) {
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 925px) {
  .container {
    max-width: 850px;
    margin: 0 auto;
  }
}

@media only screen and (max-height: 800px) {
  .login-form {
    position: relative;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }
}

@media only screen and (max-width: 500px) {
  .login-form {
    position: relative;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
    margin: 25px;
    padding: 1.75em;
  }
}

</style>
