<template>
  <div>
    <div class="top-space"></div>
    <div class="container createContainer">
      <div class="stylized-title create">
        <h1>CREATE A RECIPE</h1>
      </div>
      <div class="mt">
        <form id="createRecipe" autocomplete="off">
          <div>
            <label style="display:none" for="recipeName">Recipe Name</label>
            <input
              type="text"
              class="block createInput"
              name="recipeName"
              placeholder="Recipe title"
              aria-describedby="buttonAdd"
              v-model="recipeName"
              ref="recipeName"
              id="recipeName"
            />
            <div class="flex">
              <label style="display:none" for="ingredient">Ingredient</label>
              <input
                type="text"
                class="createInput"
                name="ingredient"
                placeholder="Ingredient"
                aria-describedby="buttonAdd"
                v-model="ingredient"
                ref="ingredient"
                id="ingredient"
              />
              <button
                style="cursor:pointer;"
                @click.prevent="addIngredient"
                class="addBtn addBtnWidth"
              >Add ingredient+</button>
            </div>

            <ul class="block">
              <li v-for="(item, index) in ingredients" :key="index" class="ingredientLi">
                {{ item }}
                <span
                  tabindex="0"
                  role="button"
                  class="delete"
                  v-if="ingredients.length > 0"
                  @keyup.enter="deleteIngredient(index)"
                  @click="deleteIngredient(index)"
                  >Delete
                  </span>
              </li>
            </ul>

            <div class="mt mb">
              <!-- this button opens <input type="file"> using the ref "recipePic" and the click() function  -->
              <button
                tabindex="0"
                @click.prevent="openImage"
                @keyup.enter.prevent="openImage"
                class="upload"
                role="button"
              >
              <font-awesome-icon icon="upload" /> Upload an image or take a pic of your dish
              </button>
              <label style="display:none" for="imageUpload">Image Upload</label>
              
              <!-- @change listens for the value of the input to change and then initiates the "recipePicChosen" method – essentially when a new image is uploaded -->
              <input
                class="imgWidth"
                style="display:none"
                type="file"
                ref="recipePic"
                accept="image/*"
                id="imageUpload"
                @change="recipePicChosen"
              />
              
              <!-- this v-if statement shows the spinner when it is set to true from the recipePicChosen method and then changes it to false again if the last value in the array is === to 100 -->
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
  components: {
    FontAwesomeIcon
  },
  methods: {
    addIngredient: function() {
      if (this.ingredient !== "") {
        this.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.$refs.ingredient.focus(); // this forces the focus back on the ingredient input so the user doesn't have to navigate back to the form to add another ingredient

      } else {
        console.log("error");
      }
    },
    deleteIngredient: function(index) {
      // the vue function $delete takes two arguments in this instance, the array of ingredients and the index. When the user clicks the delete button that's adjecent to a particular ingredient, it deletes that specific ingredient using the "index" as a map of which item should be removed.
      this.$delete(this.ingredients, index);
    },
    openImage: function() {
      this.$refs.recipePic.click();
    },
    // this method emits all of the data collected from the user and sends it to the main app, where it will then be pushed to firebase via the "addRecipe" function. The benifit here is that when it's pushed on to be processed in the top level app, it makes it much easier to share this data to with other views as props. 
    handleAdd: function() {
      if (this.recipeName !== "") {
        this.$emit("addRecipe", {
          recipeName: this.recipeName,
          recipeInstructions: this.recipeInstructions,
          ingredients: this.ingredients,
          imageUrlName: this.imageUrlName
        });
      } else {
        console.log("error");
      }
    },
  
    recipePicChosen: function(event) {

      // this function removes spaces in the filename so when the filename is referenced there aren't any "% 20" symbols in the url, which would interfier with accessing the file
      function removeSpaces(str) {
        return str.replace(/ /g, "_");
      }

      // These variables hold the array of files (in this case the app only takes on file at a time) and the filename that were added from the DOM
      const fileArray = event.target.files;
      let filename = removeSpaces(fileArray[0].name);
      let image = fileArray[0];
      // This looks to see if the file added has an extension
      if (filename.lastIndexOf(".") <= 0) {
        return alert("please add a valid file");
      }

      

       // The "changeFilename" function uses string "replace" methods that read the extension of the file and replace it with the pictures new dimensions that will automatically inserted by the storage bucket after the resize function is finished processing and deltes the original file from the database. This renaming function ensures that the user will be able to retrieve the file from the storagebucket's url since the name is changed post processsing.  
      function changeFileName(str) {
        if (str.indexOf(".jpg") > -1) {
          return str.replace(/\.jpg$/, "_700x933.jpg");
        } else if (str.indexOf(".jpeg") > -1) {
          return str.replace(/\.jpeg$/, "_700x933.jpeg");
        } else if (str.indexOf(".png") > -1) {
          return str.replace(/\.png$/, "_700x933.png");
        } else {
          console.log("this is probably a svg");
        }
      }

      // This set of functions pushes the image to the storage bucket in the database
      const storageRef = Firebase.storage().ref();
      const imgFolder = storageRef.child(
        `images/${filename}`
      );
      imgFolder.put(image);

      // this line of code is what pushes the correct file name to the database that will be used to reference the actual image in the database
      this.imageUrlName = changeFileName(filename);


      // this set of functions shows the spinner while the image is uploading to the database, but stops when it's fully uploaded and processed by the database
      this.showSpinner = true;
      let progressArray = [];
      this.localProgressArray = progressArray;
      imgFolder.put(image).on(
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
    
      // This set of variables and functions uses the uploaded file and creates a base64 image to use as a preview. A base64 image is essentially the image as a string value instead of binary, which is fine for an image preview, however, this image will not be added to the storage bucket since base64 images are typically larger than binary files.
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.previewUrl = fileReader.result;
      });
      fileReader.readAsDataURL(image);

    }
  }
};
</script>

<style scoped>
.imgWidth {
  max-width: 15em;
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
  width: 98.5%;
  height: 10em;
  border: 3px solid black;
}

.createRecipeBtn {
  padding: 0 1em 0 1em;
  margin-right: 0em;
}

.mt {
  padding-top: 2em;
}

.mt-2 {
  padding-top: 4em;
}

textarea {
  font-size: 1.4em;
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
  height: 2.8em;
  margin-left: 10px;
  /* padding-bottom: 0.3em; */
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
  display: block;
}

.upload:hover,
.upload:focus {
  background: black;
  color: var(--brand);
  transition: 0.3s;
}

.upload:focus {
  outline: none;
  border: solid 3px dodgerblue;
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