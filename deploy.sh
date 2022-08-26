# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
git init
git add -A
git commit -m 'deploy : 用年分、類型查詢 : 新增上(下)一頁功能'

git push https://github.com/limecorner/movie_app.git master:movie_app_v13