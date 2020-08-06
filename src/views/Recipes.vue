<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-11 col-md-8 col-lg-6">
        <div class="card border-top-0 rounded-0">
          <div class="card-body py-2">
            <h4 class="card-title m-0 text-center">Your Recipes</h4>
          </div>
          <div class="list-group list-group-flush">
            <div class="list-group-item d-flex" v-for="item of recipes" :key="item.id">
              <section
                class="btn-group align-self-center"
                role="group"
                aria-label="Meeting Options"
              >
                <button
                  class="btn btn-sm btn-outline-secondary"
                  title="Delete Meeting"
                  @click="$emit('deleterecipe', item.id)"
                >
                  <font-awesome-icon icon="trash"></font-awesome-icon>
                </button>
              </section>

              <router-link
                :to="'/recipe/' + user.uid + '/' + item.id"
                class="pl-3 text-left align-self-center"
              >{{item.recipeName}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "recipes",
  data: function() {
    return {
    };
  },
  components: {
    FontAwesomeIcon
  },
  props: ["user", "recipes"]
};
</script>
