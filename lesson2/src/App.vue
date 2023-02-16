<template>
  <div id="app">
    <div class="nav">
      <div class="nav__logo">
        Lesson 2
      </div>
      <div class="nav__links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/1-html-basic">1-html-basic</router-link> |
        <router-link to="/2-playground">2-playground</router-link> |
        <router-link to="/3-sexy">3-sexy</router-link> |
        <router-link to="/4-final-playground">4-final-playground</router-link> |
      </div>
      <div class="nav__right">
        {{ username }}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "heck"
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router-view {
  padding: 20px 30px;
}

.nav {
  display: flex;
  padding: 30px;
  justify-content: space-between;
  background: aliceblue;
}

.nav * {
  align-self: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a .router-link-exact-active {
  color: #42b983;
}

.nav__logo {
  font-weight: 600;
  font-family: cursive;
  font-size: 20px;
}

.nav__links {
  align-self: center;
}
</style>
