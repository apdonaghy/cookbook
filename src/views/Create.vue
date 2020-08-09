<template>
  <div class="container centered">
    <h1 class="text-center">Create Recipe</h1>
    <form id="createRecipe">
      <div>
        <input
          type="text"
          class="form-control block"
          name="recipeName"
          placeholder="Recipe title"
          aria-describedby="buttonAdd"
          v-model="recipeName"
          ref="recipeName"
        />
        <p>Upload an image of your dish</p>
        <input type="file" ref="recipePic" accept="image/*" @change="recipePicChosen" />
        <font-awesome-icon v-if="showSpinner && (localProgressArray[localProgressArray.length - 1] === 100) === false" icon="spinner" class="fa-spin"></font-awesome-icon>
        <img v-if="localProgressArray[localProgressArray.length - 1] === 100" :src="previewUrl" height="150px" />

        <input
          type="text"
          class="form-control mt-4"
          name="ingredient"
          placeholder="Ingredient"
          aria-describedby="buttonAdd"
          v-model="ingredient"
          ref="ingredient"
        />
        <button
          style="cursor:pointer;"
          @click.prevent="addIngredient"
          role="button"
          class="btn btn-sm btn-info float mb-4"
        >Add ingredient+</button>

        <ul class="block">
          <li v-for="(item, index) in ingredients" :key="index">
            {{ item }}
            <span
              role="button"
              class="delete"
              v-if="ingredients.length > 0"
              @click="deleteIngredient(index)"
            >Delete item</span>
          </li>
        </ul>

        <textarea
          type="text"
          class="form-control block"
          name="recipeInstructions"
          placeholder="Recipe instructions"
          aria-describedby="buttonAdd"
          v-model="recipeInstructions"
          ref="recipeInstructions"
        />

        <div class="input-group-append float">
          <button type="submit" @click.prevent="handleAdd" class="btn btn-lg btn-info" id="buttonAdd">Create Recipe</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "create",
  data: function() {
    return {
      recipeName: "",
      recipeInstructions: null,
      previewUrl: "",
      image: null,
      ingredient: "",
      ingredients: [],
      imageUrlName: "cookbook.svg",
      localProgressArray: [],
      showSpinner: false
    };
  },
  props: ["user", "recipes"],
  components: {
    FontAwesomeIcon
  },
  methods: {
    addIngredient: function() {



      if (this.ingredient !== "") {
        this.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.$refs.ingredient.focus();
      
      } else {
        console.log("error");
      }
    },
    deleteIngredient: function(index) {
      this.$delete(this.ingredients, index);
    },


    handleAdd: function() {

      if (this.recipeName !== "") {
        this.$emit("addRecipe", {
          recipeName: this.recipeName,
          recipeInstructions: this.recipeInstructions,
          ingredients: this.ingredients,
          imageUrlName: this.imageUrlName
        });
        this.recipeName = null;
        this.recipeInstructions = null;
        this.$refs.recipeName.focus();
      } else {
        console.log("error");
      }
    },
    recipePicChosen: function(event) {
      function removeSpaces(str) {
        return str.replace(/ /g, "_");
      }
      this.showSpinner = true;
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.previewUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];

      const storageRef = Firebase.storage().ref();
      const imgFolder = storageRef.child(
        `images/${removeSpaces(this.image.name)}`
      );
      imgFolder.put(this.image);

      this.imageUrlName = removeSpaces(this.image.name);
      
      let progressArray = []
      this.localProgressArray = progressArray

      imgFolder.put(this.image).on(
        Firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progressArray.push(progress);
          switch (snapshot.state) {
            case Firebase.storage.TaskState.PAUSED: // or 'paused'
              // console.log("Upload is paused");
              break;
            case Firebase.storage.TaskState.RUNNING: // or 'running'
              // console.log("Upload is running");
              break;
          }
        }
      );
    }
  }
  //   props: ["user", "recipes"]
};
</script>

<style scoped>
h1 {
  margin-bottom: 1em;
}

.block {
  display: block;
  margin-bottom: 2em;
}
.large-text {
  font-size: 2em;
  float: right;
}
.centered {
  width: 25em;
  margin: 0 auto;
  margin-top: 50px;
}
.float {
  float: right;
}
.delete {
  color: red;
  cursor: pointer;
}
</style>