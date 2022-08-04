# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy : 加入 Spinner'

git push https://github.com/limecorner/movie_app.git master:v9_add-spinner