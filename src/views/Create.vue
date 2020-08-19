<template>
  <div>
    <div class="top-space"></div>
    <div class="container createContainer">
      <div class="stylized-title create">
        <span>CREATE A RECIPE</span>
      </div>
      <div class="mt">
        <form id="createRecipe" autocomplete="off">
          <div>
            <input
              type="text"
              class="block createInput"
              name="recipeName"
              placeholder="Recipe title"
              aria-describedby="buttonAdd"
              v-model="recipeName"
              ref="recipeName"
            />
            <div class="flex">
              <input
                type="text"
                class="createInput"
                name="ingredient"
                placeholder="Ingredient"
                aria-describedby="buttonAdd"
                v-model="ingredient"
                ref="ingredient"
              />
              <button
                style="cursor:pointer;"
                @click.prevent="addIngredient"
                class="float addBtn addBtnWidth"
              >Add ingredient+</button>
            </div>

            <ul class="block">
              <li v-for="(item, index) in ingredients" :key="index" class="ingredientLi">
                {{ item }}
                <span
                  tabindex=0
                  role="button"
                  class="delete"
                  v-if="ingredients.length > 0"
                  @keyup.enter="deleteIngredient(index)"
                  @click="deleteIngredient(index)"
                >Delete</span>
              </li>
            </ul>

            <div class="mt mb">
              <span tabindex=0 @click="openImage" @keyup.enter="openImage" class="upload" role="button"><font-awesome-icon icon="upload"/> Upload an image or take a pic of your dish</span>
              <input
                class="imgWidth"
                style="display:none"
                type="file"
                ref="recipePic"
                accept="image/*"
                @change="recipePicChosen"
              />
              <font-awesome-icon
                v-if="showSpinner && (localProgressArray[localProgressArray.length - 1] === 100) === false"
                icon="spinner"
                class="fa-spin block spin"
              ></font-awesome-icon>
              <img
                class="block"
                v-if="localProgressArray[localProgressArray.length - 1] === 100"
                :src="previewUrl"
                height="150px"
              />
            </div>

            <div class="mt-2">
              <label for="instructions">
                <h4>Recipe</h4>
              </label>
              <textarea
                type="text"
                class="block instructions"
                name="recipeInstructions"
                placeholder="Recipe instructions"
                aria-describedby="buttonAdd"
                v-model="recipeInstructions"
                ref="recipeInstructions"
                id="instructions"
              />
            </div>

            <div class="input-group-append float">
              <button
                type="submit"
                @keyup.enter="handleAdd"
                @click.prevent="handleAdd"
                class="signInBtn createRecipeBtn"
                id="buttonAdd"
              >Create Recipe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
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
  beforeCreate: function() {
    document.body.className = "white";
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
    openImage: function() {
      this.$refs.recipePic.click();
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
      function changeFileName(str) {
        if (str.indexOf(".jpg") > -1) {
          return str.replace(/\.jpg$/, "_700x933.jpg");
        } else if (str.indexOf(".png") > -1) {
          return str.replace(/\.png$/, "_700x933.png");
        } else {
          console.log("this is probably a svg");
        }
      }

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

      this.imageUrlName = changeFileName(removeSpaces(this.image.name));

      let progressArray = [];
      this.localProgressArray = progressArray;

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
.imgWidth {
  max-width: 15em;
}

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
  max-width: 25em;
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

.create {
  width: 12.7em;
}

.createContainer {
  max-width: 35em;
  padding: 20px;
  margin-bottom: 5%;
}

.instructions {
  width: 100%;
  height: 10em;
  border: 3px solid black;
}

.createRecipeBtn {
  padding: 0 1em 0 1em;
}

.mt {
  padding-top: 2em;
}

.mt-2 {
  padding-top: 4em;
}

textarea {
  font-size: 1.4em;
  padding: 0.65em;
  font-family: var(--paragraph);
}

.spin {
  font-size: 2em;
}

.addBtn {
  background: none;
  padding: 0.5em;
  border: 3px solid black;
}

.addBtn:hover,
.addBtn:focus {
  background: black;
  color: var(--brand);
  transition: 0.2s;
}

.addBtnWidth {
  width: 12em;
  height: 2.6em;
  padding-bottom: 0.3em;
}

.ingredientLi {
  font-family: var(--medium);
  font-size: 1.1em;
  line-height: 1.3em;
}

.delete:hover,
.delete:focus {
  text-decoration: underline;
}

.upload {
  color: black;
  border: solid 3px black;
  padding: 0.75em;
  font-family: var(--medium);
  border-radius: 99em;
  cursor: pointer;
  text-align: center;
  font-size: 1.5em;
  margin: 0;
  width: 100%;
  background: transparent;
  display:block;
}

.upload:hover,
.upload:focus {
  background: black;
  color: var(--brand);
  transition: 0.3s;
}

@media only screen and (max-width: 600px) {
  .upload {
    font-size: 1.2em;
  }
}

@media only screen and (max-width: 500px) {
  .createInput {
    font-size: 1.5em;
  }
  .addBtn {
    background: none;
    font-size: 0.92em;
    border: 3px solid black;
    width: 15em;
  }
  .upload {
    font-size: 1em;
    padding: 0.5em;
  }
}
</style>