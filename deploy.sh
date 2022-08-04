# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy : 加入 Spinner + RWD'

git push https://github.com/limecorner/movie_app.git master:movie_app_v10