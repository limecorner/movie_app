module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/movie_app/'
    : '/'
}