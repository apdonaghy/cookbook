<template>
  <div>
    <div @click="closeNav" :class="{overlay: isActive}"></div>

    <nav>
      <div class="navbar paddingTop">
        <div class="flex space-between navContainer">
          <span v-if="!user" class="hamburger black">&#9776;</span>
          <span
            v-if="user"
            tabindex="0"
            class="hamburger"
            role="button"
            style="cursor:pointer"
            @click="openNav"
            @keyup.enter="openNav"
          >&#9776;</span>

          <div v-if="user" class="sidenav" :class="{activeNav: isActive}">
            <font-awesome-icon
              tabindex="0"
              class="closeBtn"
              :class="{fade: !isActive}"
              role="button"
              icon="times"
              @click="closeNav"
              @keyup.enter="closeNav"
            ></font-awesome-icon>

            <transition name="fade">
              <div v-if="isActive" @click="closeNav" @keyup.enter="closeNav" tabindex="-1">
                <router-link tag="a" to="/">About</router-link>
              </div>
            </transition>

            <transition name="fade">
              <div
                v-if="isActive"
                @click="closeNav"
                tabindex="-1"
                @keyup.enter="closeNav"
                style="white-space: nowrap;"
              >
                <router-link tag="a" to="/recipes">My recipes</router-link>
              </div>
            </transition>

            <transition name="fade">
              <div
                v-if="isActive"
                tabindex="-1"
                @keydown.tab="closeNav"
                @click="closeNav"
                @keyup.enter="closeNav"
                style="white-space: nowrap;"
              >
                <router-link to="/create">Create a recipe</router-link>
              </div>
            </transition>
          </div>

          <router-link v-if="user" class="logo userMargin" to="/recipes">Cookbook</router-link>
          <router-link v-if="!user" class="logo" to="/">Cookbook</router-link>

          <div v-if="!user" class="flex" style="align-items: center;">
            <router-link class="login" to="/login">sign in</router-link>
            <p class="padding-sm"></p>
            <router-link class="login registerMobile" to="/register">register</router-link>
          </div>
          <span
            v-if="user"
            tabindex="0"
            role="button"
            class="logout"
            @keyup.enter="$emit('logout')"
            @click="$emit('logout')"
          >logout</span>
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
.paddingTop{
  padding-top:5px;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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
  color: white;
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
  padding: 0 5px 0 5px;
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

.sidenav a:hover, .sidenav a:focus {
  color: black;
}

.userMargin {
  margin-left: 17px;
}

.hamburger {
  font-size: 1.75em;
  line-height: 0;
}

.hamburger:hover {
  color: white;
  transition: 0.3s;
}

.hamburger:focus {
  border: 2px solid dodgerblue;
  padding: 0.4em 0 0.4em 0;
  width: 0.9em;
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

.registerMobile {
  display: inline-block;
}

@media screen and (max-width: 500px) {
  .registerMobile {
    display: none;
  }
  .black {
    width: 45px;
  }
}
</style>