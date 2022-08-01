<template>
  <div id="app">
    <nav class="mt-3">
      <router-link class="tab mr-3" to="/movies">Home</router-link>
      <router-link class="tab" to="/favorite/movies">Favorite</router-link>
    </nav>
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

.tab {
  padding: 5px 10px;
  border: solid 2px white;
  border-radius: 5px;
  color: white;
  font-size: 24px;
}
.tab:hover {
  text-decoration: none;
  color: #87ceeb;
}
.router-link-active {
  color: #87ceeb;
}
</style>


<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
};
</script>