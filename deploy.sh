# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy : 1. 未載入圖片時用背景色 2. Go Top'

git push https://github.com/limecorner/movie_app.git master:movie_app_v11