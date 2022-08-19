<template>
  <div id="app">
    <nav class="nav-container mt-4">
      <div class="row">
        <div class="col-3">
          <h5 class="web-title-mobile">速</h5>
          <h5 class="web-title">速查電影</h5>
        </div>
        <div class="col-3">
          <router-link class="tab" to="/movies">Home</router-link>
        </div>
        <div class="col-3">
          <router-link class="tab" to="/favorite/movies">Favorite</router-link>
        </div>
        <div class="col-3">
          <router-link class="tab" to="/rated/movies">Rated</router-link>
        </div>
      </div>
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
.nav-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.web-title-mobile {
  font-size: 26px;
}
.web-title {
  display: none;
  font-size: 18px;
}
.tab {
  padding: 5px 10px;
  border: solid 2px white;
  border-radius: 5px;
  color: white;
  font-size: 18px;
}
.tab:hover {
  text-decoration: none;
  color: #87ceeb;
}
.router-link-active {
  color: #87ceeb;
}

@media screen and (min-width: 576px) {
  .web-title-mobile {
    display: none;
  }
  .web-title {
    display: block;
    font-size: 22px;
  }
  .tab {
    font-size: 24px;
  }
}
</style>


<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
};
</script>