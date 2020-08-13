<template>
  <div>
    <div @click="closeNav" :class="{overlay: isActive}"></div>
    <nav>
      <div v-if="user" class="sidenav" :class="{activeNav: isActive}">
        <font-awesome-icon
          class="closeBtn"
          :class="{fade: !isActive}"
          role="button"
          icon="times"
          @click="closeNav"
        ></font-awesome-icon>
        <router-link :class="{fade: !isActive}" to="/">
          <span @click="closeNav">About</span>
        </router-link>
        <router-link :class="{fade: !isActive}" to="/recipes">
          <span @click="closeNav">My recipes</span>
        </router-link>
        <router-link :class="{fade: !isActive}" to="/create">
          <span @click="closeNav">Create a recipe</span>
        </router-link>
      </div>

      <div class="navbar">
        <div class="flex space-between navContainer">
          <span v-if="!user" class="hamburger black">&#9776;</span>
          <span
            v-if="user"
            class="hamburger"
            role="button"
            style="cursor:pointer"
            @click="openNav()"
          >&#9776;</span>

          <router-link v-if="user" class="logo userMargin" to="/recipes">Cookbook</router-link>
          <router-link  v-if="!user" class="logo" to="/">Cookbook</router-link>

          <div v-if="!user" class="flex">
            <router-link class="login" to="/login">sign in</router-link>
            <p class="padding-sm"></p>
            <router-link class="login" to="/register">register</router-link>
          </div>
          <span v-if="user" role="button" class="logout" @click="$emit('logout')">logout</span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navigation",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    openNav: function() {
      this.isActive = true;
    },
    closeNav: function() {
      this.isActive = false;
    }
  },
  props: ["user"],
  components: {
    FontAwesomeIcon
  }
};
</script>
<style scoped>
element.style {
}

.sidenav a[data-v-81440b78].fade {
  color: white;
  transition: 0.1s;
}

.sidenav a[data-v-81440b78].fade {
  color: white;
  transition: 0.1s;
}

.closeBtn[data-v-81440b78].fade {
  color: white;
  transition: 0.1s;
}

.space-between {
  justify-content: space-between;
  align-items: center;
}

a.logo {
  font-family: "SortsMillGoudy-Regular";
  text-decoration: none;
  color: var(--brand);
  font-size: 1.5em;
}

a.logo:hover {
  color:white;
}
a.login {
  text-decoration: none;
  color: var(--brand);
  font-family: var(--medium);
}

a.login:hover {
  color: white;
  transition: ease-in-out 0.3s;
}

.padding-sm {
  padding: 0 4px 0 4px;
}

.logout {
  cursor: pointer;
  font-family: var(--medium);
}

.logout:hover {
  color: white;
  transition: ease-in-out 0.3s;
}

.closeBtn {
  cursor: pointer;
  color: black;
  position: absolute;
  top: 3px;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
}

.closeBtn:hover {
  color: rgb(63, 63, 63);
  transition: 0.2s;
}

.overlay {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  /* background:rgba(); */
  background: rgba(0, 0, 0, 0.3);
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background-color: var(--offwhite);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.activeNav {
  width: 250px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.1s;
}

.sidenav a:hover {
  color: black;
}

.userMargin{
    margin-left:17px;

}

.hamburger {
  font-size: 1.75em;
  line-height: 0;
}

.hamburger:hover {
  color: #efb862;
  transition: 0.3s;
}

.black {
  color: black;
  width: 115px;
}

.black:hover {
  color: black;
  width: 115px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

.navbar {
  background: black;
  height: 50px;
  position: fixed;
  z-index: 2;
  width: 100%;
}

.navContainer {
  padding: 10px;
  color: var(--brand);
}
</style>