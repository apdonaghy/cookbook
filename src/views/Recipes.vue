<template>
  <div class="container mt-4">
     <div class="top-space"></div>
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <div class="card border-top-0 rounded-0">
          <div class="card-body py-2">
            <h4 class="card-title m-0 text-center">Your Recipes</h4>
          </div>
          <div class="list-group list-group-flush">
              <router-link to="/create" v-if="recipes.length === 0">Create a recipe</router-link>
            <div class="list-group-item d-flex" v-for="item of recipes" :key="item.id">
              <router-link :to="'/recipe/' + user.uid + '/' + item.id">
              <div role="img" :aria-label="`${item.recipeName}`" class="thumbnailImages" :style="{backgroundImage:`url(${ item.imageUrlName })`}"></div>

              <router-link
                :to="'/recipe/' + user.uid + '/' + item.id"
                class="pl-3 text-left align-self-center"
              >{{item.recipeName}}</router-link>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "recipes",
  data: function() {
    return {};
  },
  beforeCreate: function() {
    document.body.className = 'white';
  },
  components: {
    // FontAwesomeIcon
  },
  props: ["user", "recipes"]
};
</script>
<style scoped>
.thumbnailImages {
  width: 200px;
  height: 200px;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
}
</style>