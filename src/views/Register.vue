<template>
  <div>
    <div class="top-space"></div>
    <form class="login-form register" @submit.prevent="register">
      <!-- <h3 class="font-weight-light mb-3">Register</h3> -->
      <h3>create an account</h3>
      <section>
        <label :class="{showLabel: userLabel}" for="displayName">User Name</label>
        <input
         @focus="userHandler"
          class="form-control"
          type="text"
          id="displayName"
          placeholder="User Name"
          name="displayName"
          required
          v-model="displayName"
        />
      </section>

      <section>
        <label  :class="{showLabel: emailLabel}" for="email">Email</label>
        <input
          @focus="emailHandler"
          class="form-control"
          type="email"
          id="email"
          placeholder="Email Address"
          required
          name="email"
          v-model="email"
        />
      </section>

      <section class="">
        <label :class="{showLabel: passLabel}" for="password">Password</label>
        <input 
         @focus="passHandler"
        class="form-control" 
              type="password"  
              id="password"
              placeholder="Password" 
              v-model="passOne" />
      </section>
      <section class="">
         <label :class="{showLabel: passLabel2}"  for="password2">Confirm Password</label>
        <input
          @focus="pass2Handler"
          class="form-control"
          type="password"
          id="password2"
          required
          placeholder="Confirm Password"
          v-model="passTwo"
        />
      </section>
      <div v-if="error">{{ error }}</div>

      <button class="signInBtn" type="submit">Register</button>
      <p class="createAnAccount">
        or
        <router-link to="/login">Sign in</router-link>
      </p>
    </form>
  </div>
</template>
<script>
import Firebase from "firebase";

export default {
  data: function() {
    return {
      displayName: null,
      email: null,
      passOne: null,
      passTwo: null,
      error: null,
      userLabel: false,
      emailLabel: false,
      passLabel: false,
      passLabel2: false
    };
  },
  beforeCreate: function() {
    document.body.className = "brand";
  },
  methods: {
    register: function() {
      const info = {
        email: this.email,
        password: this.passOne,
        displayName: this.displayName
      };
      if (!this.error) {
        Firebase.auth()
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            userCredentials => {
              return userCredentials.user
                .updateProfile({
                  displayName: info.displayName
                })
                .then(() => {
                  this.$router.replace("recipes");
                });
            },
            error => {
              this.error = error.message;
            }
          );
      }
    },
    userHandler: function(){
      this.userLabel = true
      this.emailLabel = false
      this.passLabel = false
      this.passLabel2 = false
    },
      emailHandler: function(){
      this.userLabel = false
      this.emailLabel = true
      this.passLabel = false
      this.passLabel2 = false
    },
      passHandler: function(){
      this.userLabel = false
      this.emailLabel = false
      this.passLabel = true
      this.passLabel2 = false
    },
      pass2Handler: function(){
      this.userLabel = false
      this.emailLabel = false
      this.passLabel = false
      this.passLabel2 = true
    },
  },
  watch: {
    passTwo: function() {
      if (
        this.passOne !== "" &&
        this.passTwo !== "" &&
        this.passTwo !== this.passOne
      ) {
        this.error = "passwords must match";
      } else {
        this.error = null;
      }
    }
  }
};
</script>

<style scoped>
label{
  visibility:hidden;
  font-family: var(--medium);
  font-size:1.05em;
 
}

.showLabel{
  visibility:visible;
}

</style>