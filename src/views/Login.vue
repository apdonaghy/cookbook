<template>
  <div>
    <div class="top-space"></div>
       
    <form class="login-form loginForm" @submit.prevent="login">
      <h3>sign in</h3>
      <section class="form-group">
        <label  :class="{showLabel: emailLabel}" for="email">Email</label>
        <input
          @focus="emailHandler"
          required
          class="form-control"
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />
      </section>
      <section class="form-group">
        <label :class="{showLabel: passLabel}" for="password">Password</label>
        <input
          @focus="passHandler"
          required
          class="form-control"
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </section>
      <div class="form-group text-right mb-0">
        <button class="signInBtn" type="submit">sign in</button>
      </div>

      <p class="createAnAccount">
        or
        <router-link to="/register">Create an account</router-link>
       
      </p>
       
    </form>

    <div class="error" v-show="error">{{ error }}</div>
  </div>
</template>
<script>
import Firebase from "firebase";
export default {
  data: function() {
    return {
      email: "",
      password: "",
      error: "",
      emailLabel: false,
      passLabel: false,
    };
  },
  beforeCreate: function() {
    document.body.className = "brand";
  },
  methods: {
    login: function() {
      const info = {
        email: this.email,
        password: this.password
      };

      Firebase.auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(
          () => {
            this.$router.push("/recipes");
          },
          error => {
            this.error = error.message;
          }
        );
    },
      emailHandler: function(){
      this.emailLabel = true
      this.passLabel = false

    },
      passHandler: function(){
      this.emailLabel = false
      this.passLabel = true
     
    },
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