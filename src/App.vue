<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
html {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: black;
  color: white;
}
</style>


<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
};
</script>