import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Movies from '../views/Movies.vue'
import FavoriteMovies from '../views/FavoriteMovies.vue'
import RatedMovies from '../views/RatedMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: Movies
  },

  {
    path: '/movies',
    name: 'movies',
    component: Movies,
  },
  {
    path: '/favorite/movies',
    name: 'favorite-movies',
    component: FavoriteMovies,
  },
  {
    path: '/rated/movies',
    name: 'rated-movies',
    component: RatedMovies,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
