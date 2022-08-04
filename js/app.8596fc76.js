(function(t){function e(e){for(var i,r,n=e[0],c=e[1],l=e[2],v=0,f=[];v<n.length;v++)r=n[v],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/movie_app/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1333:function(t,e,a){},"1da4":function(t,e,a){"use strict";a("e9f1")},3223:function(t,e,a){},"40f8":function(t,e,a){"use strict";a("b8f9")},"42de":function(t,e,a){"use strict";a("5691")},4987:function(t,e,a){},5691:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"nav-container mt-4"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-3"},[e("router-link",{staticClass:"tab",attrs:{to:"/movies"}},[t._v("Home")])],1),e("div",{staticClass:"col-3"},[e("router-link",{staticClass:"tab",attrs:{to:"/favorite/movies"}},[t._v("Favorite")])],1),e("div",{staticClass:"col-3"},[e("router-link",{staticClass:"tab",attrs:{to:"/rated/movies"}},[t._v("Rated")])],1)])]),e("router-view")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-3"},[e("h5",{staticClass:"web-title"},[t._v("速查電影")])])}],r=(a("4989"),a("ab8b"),{name:"App"}),n=r,c=(a("76b9"),a("2877")),l=Object(c["a"])(n,s,o,!1,null,null,null),d=l.exports,v=a("8c4f"),f=function(){var t=this,e=t._self._c;return e("h1",[t._v("404 Page Not Found")])},m=[],u={},g=Object(c["a"])(u,f,m,!1,null,null,null),h=g.exports,p=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container mt-3"},[e("div",{staticClass:"select-wrapper row"},[e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("select",{attrs:{id:"year-area"},on:{change:function(e){return t.changeQuery(e)}}},[e("option",{attrs:{value:"",selected:""}},[t._v("年份")]),t._l(t.years,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" ")])}))],2)]),e("div",{staticClass:"col-12 col-sm-6 col-md-4"},[e("select",{attrs:{id:"genre-area"},on:{change:function(e){return t.changeQuery(e)}}},[e("option",{attrs:{value:"",selected:""}},[t._v("類型")]),t._l(t.genres,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v(" "+t._s(a.name)+" ")])}))],2)]),e("div",{staticClass:"col-12 col-sm-8 col-md-4 d-flex justify-content-center"},[e("form",{staticClass:"d-flex",attrs:{id:"search-form"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control me-2",attrs:{id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.filterMoviesByMovieName(t.keyword,1)}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-magnifying-glass"}})],1)])]),e("div",{staticClass:"icon-wrapper col-6 col-sm-2 d-flex align-items-center justify-content-center"},[e("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"fa-solid fa-grip",size:"2x"},on:{click:function(e){return t.changeFormat("card-format")}}})],1),e("div",{staticClass:"icon-wrapper col-6 col-sm-2 d-flex align-items-center justify-content-center"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-list",size:"2x"},on:{click:function(e){return t.changeFormat("list-format")}}})],1)])]),t.isLoading?e("div",{staticClass:"spinner-wrapper"},[e("breeding-rhombus-spinner",{attrs:{"animation-duration":1e3,size:65,color:"#ff1d5e"}})],1):["card-format"===t.currentFormat?e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row",attrs:{id:"data-panel"}},t._l(t.movies,(function(a){return e("MovieCard",{key:a.id,attrs:{item:a},on:{"after-click-more":t.afterClickMore}})})),1)]):e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"list-table row align-items-center"},[e("tr",{staticClass:"col-4"},[t._v(" Name ")]),e("tr",{staticClass:"col-1"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"}})],1),e("tr",{staticClass:"col-3"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-ranking-star"}})],1),e("tr",{staticClass:"col-2"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}})],1),e("tr",{staticClass:"col-2"},[t._v(" More ")])]),t._l(t.movies,(function(a){return e("MovieList",{key:a.id,attrs:{item:a},on:{"after-click-more":t.afterClickMore}})}))],2)],e("paginate",{attrs:{"page-count":t.totalPages,"page-range":3,"margin-pages":2,"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-link","next-class":"page-link","force-page":t.currentPage}}),e("MovieModal",{attrs:{item:t.item}})],2)},_=[],y=a("bc3a"),b=a.n(y),C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-container col-6 col-md-4 col-lg-3 col-xl-2"},[e("div",{staticClass:"card mb-2"},[e("img",{staticClass:"card-img-top",attrs:{src:t.getPoster,alt:"Card image cap"}}),e("div",{staticClass:"card-body movie-item-body"},[e("h5",[t._v(t._s(t.getTitle))]),e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex justify-content-around align-items-center"},[t.isFavorite?e("font-awesome-icon",{staticClass:"favorite",attrs:{icon:"fa-solid fa-heart"},on:{click:function(e){return t.onToggleFavorite(t.item)}}}):e("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"},on:{click:function(e){return t.onToggleFavorite(t.item)}}}),t.isRated?e("font-awesome-icon",{staticClass:"rate-star rated",attrs:{icon:"fa-solid fa-star"},on:{click:function(e){return t.deleteRate(t.item)}}}):e("font-awesome-icon",{attrs:{icon:"fa-regular fa-star"}}),e("star-rating",{staticClass:"pb-1",attrs:{increment:.5,"star-size":15,"active-color":"#f28500","show-rating":!1,inline:!0},on:{"rating-selected":t.setRating},model:{value:t.rateInStar,callback:function(e){t.rateInStar=e},expression:"rateInStar"}}),t._v(t._s(t.rateInStar>0?2*t.rateInStar:"")+" ")],1)])]),e("div",{staticClass:"card-footer d-flex justify-content-between"},[e("div",[e("div",{staticClass:"text-left"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-ranking-star"}}),t._v(" "+t._s(t.getPopularity)+" ")],1),e("div",{staticClass:"text-left"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}}),t._v(" "+t._s(t.getVote)+" ")],1)]),e("button",{staticClass:"btn btn-show-movie btn-show-movie-card-format",attrs:{"data-toggle":"modal","data-target":"#show-movie-modal"},on:{click:function(e){return t.clickMore(t.item)}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-down"}})],1)])])])},w=[];const k="https://api.themoviedb.org/3/",M={methods:{clickMore(t){b.a.get(`${k}movie/${t.id}?api_key=70c1033d4e5a041d7597a7d9758e86a6`).then(t=>{const{data:e}=t;this.$emit("after-click-more",e)}).catch(t=>console.log(t))}}},x={computed:{getPoster(){return this.item.poster_path?"https://image.tmdb.org/t/p/w500/"+this.item.poster_path:"http://fakeimg.pl/440x650/?text=NoImg"},getTitle(){return this.item.title?this.item.title:"無資料"},getPopularity(){return this.item.popularity?this.item.popularity:"無資料"},getVote(){return this.item.vote_average?this.item.vote_average:"無資料"},getReleaseDate(){return this.item.release_date?this.item.release_date:"無資料"},getBudget(){return this.item.budget?this.item.budget:"無資料"},getRevenue(){return this.item.revenue?this.item.revenue:"無資料"},getOverview(){return this.item.overview?this.item.overview:"無資料"},getTagline(){return this.item.tagline?this.item.tagline:"無資料"}}};var I=a("3d20"),P=a.n(I);const S=P.a.mixin({toast:!0,position:"center",showConfirmButton:!1,timer:3e3});var j=a("5b3d"),F=a.n(j);const O="https://api.themoviedb.org/3/",L=b.a.create({baseURL:O,headers:{"Content-Type":"application/json;charset=utf-8"}});var T={components:{StarRating:F.a},mixins:[M,x],props:{item:{type:Object,required:!0}},data(){return{isFavorite:!1,rateInStar:-1,isRated:!1}},created(){this.getAccountStates(this.item)},methods:{onToggleFavorite(t){const e=O+"account/13446156/favorite?api_key=70c1033d4e5a041d7597a7d9758e86a6&session_id=df70931400331ac12bf1a79bf28dcc0973f037a4",a={media_type:"movie",media_id:t.id,favorite:!this.isFavorite};L.post(e,a).then(t=>{this.isFavorite=a.favorite,a.favorite?S.fire({icon:"success",title:"成功",text:"加到最愛",width:200}):S.fire({icon:"success",title:"成功",text:"移除最愛",width:200}),console.log(t)}).catch(t=>console.log(t))},setRating(t){console.log("rating",t),this.rateInStar=t,this.rateMovie(this.item)},rateMovie(t){const e=`movie/${t.id}/rating`,a={value:2*this.rateInStar},i={params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",session_id:"df70931400331ac12bf1a79bf28dcc0973f037a4"}};L.post(e,a,i).then(t=>{console.log(t),this.isRated=!0,S.fire({icon:"success",title:"成功",text:"評分",width:170})}).catch(t=>{S.fire({icon:"error",title:"失敗",text:"評分",width:170}),console.log(t)})},deleteRate(t){this.rateInStar=0;const e=`${O}movie/${t.id}/rating`,a={params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",session_id:"df70931400331ac12bf1a79bf28dcc0973f037a4"}};b.a.delete(e,a).then(()=>{this.isRated=!1,this.rate=-1,S.fire({icon:"success",title:"成功",text:"移除評分",width:200})}).catch(t=>{S.fire({icon:"error",title:"失敗",text:"移除評分",width:200}),console.log(t)})},getAccountStates(t){const e=`${O}movie/${t.id}/account_states`,a={params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",session_id:"df70931400331ac12bf1a79bf28dcc0973f037a4"}};b.a.get(e,a).then(t=>{const{data:e}=t;this.isFavorite=e.favorite,e.rated.value>0&&(console.log(e.rated.value),this.isRated=!0,this.rateInStar=e.rated.value/2)}).catch(t=>console.log(t))}}},R=T,A=(a("1da4"),Object(c["a"])(R,C,w,!1,null,"67beb449",null)),$=A.exports,N=(a("caad"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-table row align-items-center"},[e("tr",{staticClass:"col-4 pl-2"},[t._v(" "+t._s(t.getTitle)+" ")]),e("tr",{staticClass:"col-1"},[t.favoriteMoviesIdArray.includes(t.item.id)?e("font-awesome-icon",{staticClass:"favorite",attrs:{icon:"fa-solid fa-heart"},on:{click:function(e){return t.onToggleFavorite(t.item)}}}):e("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart"},on:{click:function(e){return t.onToggleFavorite(t.item)}}})],1),e("tr",{staticClass:"col-3"},[t._v(" "+t._s(t.getPopularity)+" ")]),e("tr",{staticClass:"col-2"},[t._v(" "+t._s(t.getVote)+" ")]),e("tr",{staticClass:"col-2"},[e("button",{staticClass:"btn btn-show-movie btn-show-movie-list-format mx-2",attrs:{type:"button","data-toggle":"modal","data-target":"#show-movie-modal"},on:{click:function(e){return t.clickMore(t.item)}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-down"}})],1)])])}),B=[];const z="https://api.themoviedb.org/3/",G=b.a.create({baseURL:z,headers:{"Content-Type":"application/json;charset=utf-8"}});var Y={mixins:[M,x],props:{item:{type:Object,required:!0}},data(){return{isFavorite:!1,favoriteMoviesIdArray:[]}},created(){this.favoriteMoviesIdArray=JSON.parse(localStorage.getItem("favorite_key"))||[]},methods:{onToggleFavorite(t){const e=!this.favoriteMoviesIdArray.includes(t.id);this.favoriteMoviesIdArray=JSON.parse(localStorage.getItem("favorite_key"))||[],e?this.favoriteMoviesIdArray.push(t.id):(this.favoriteMoviesIdArray=this.favoriteMoviesIdArray.filter(e=>e!==t.id),this.$emit("after-toggle-favorite",this.favoriteMoviesIdArray)),localStorage.setItem("favorite_key",JSON.stringify(this.favoriteMoviesIdArray));const a=z+"account/13446156/favorite?api_key=70c1033d4e5a041d7597a7d9758e86a6&session_id=df70931400331ac12bf1a79bf28dcc0973f037a4",i={media_type:"movie",media_id:t.id,favorite:e};G.post(a,i).then(t=>{console.log(t)}).catch(t=>console.log(t))}}},J=Y,q=(a("40f8"),Object(c["a"])(J,N,B,!1,null,"2872d194",null)),V=q.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"show-movie-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body",attrs:{id:"show-movie-body"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("img",{attrs:{src:t.getPoster,id:"show-movie-image"}})]),e("div",{staticClass:"col-6"},[e("h5",{staticClass:"modal-title",attrs:{id:"show-movie-title"}},[t._v(" "+t._s(t.getTitle)+" ")]),e("p",{staticClass:"m-0"},[t._v("發行日 : "+t._s(t.getReleaseDate))]),e("div",[e("span",[t._v("類型 : ")]),t._l(t.item.genres,(function(a){return e("span",{key:a.id,staticClass:"mr-2"},[t._v(t._s(a.name?a.name:"無資料")+" ")])}))],2),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"text-center"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-ranking-star"}}),t._v(" "+t._s(t.getPopularity)+" ")],1),e("div",{staticClass:"text-center"},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}}),t._v(" "+t._s(t.getVote)+" ")],1)]),e("div",{staticClass:"col-8"},[e("div",[e("p",{staticClass:"text-center m-0"},[t._v(" 預算 "+t._s(t.getBudget)+" ")])]),e("div",[e("p",{staticClass:"text-center m-0"},[t._v(" 票房 "+t._s(t.getRevenue)+" ")])])])]),e("div",{staticClass:"mt-3",attrs:{id:"show-movie-description "}},[e("p",{staticClass:"overview-title text-center m-0"},[t._v("概要")]),e("p",{staticClass:"text-center"},[t._v(t._s(t.getOverview))])]),e("div",{attrs:{id:"show-movie-description"}},[e("p",{staticClass:"overview-title text-center m-0"},[t._v("標語")]),e("p",{staticClass:"text-center"},[t._v(" "+t._s(t.getTagline)+" ")])])])])])])])])},Q=[],U={mixins:[x],props:{item:{type:Object,required:!0}}},H=U,E=(a("42de"),Object(c["a"])(H,D,Q,!1,null,"1301d1a0",null)),K=E.exports,W=a("4583");const X="https://api.themoviedb.org/3/";var Z={components:{BreedingRhombusSpinner:W["a"],MovieCard:$,MovieList:V,MovieModal:K},data(){return{isLoading:!0,years:[],genres:[],year:"",genreId:"",movies:[],currentPage:1,item:{},totalPages:3,currentFormat:"card-format",keyword:"",filterType:"byYearAndGenre"}},created(){this.initilaizeYears(2010),this.getGenres(),this.filterMovies(1,this.year,this.genreId)},methods:{getGenres(){this.isLoading=!0,b.a.get(X+"genre/movie/list",{params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6"}}).then(t=>{this.isLoading=!1;const{data:e}=t;this.genres=e.genres}).catch(t=>{this.isLoading=!1,console.log(t)})},clickCallback(t){console.log(t),this.currentPage=t,"byYearAndGenre"===this.filterType?this.filterMovies(t,this.year,this.genreId):this.filterMoviesByMovieName(this.keyword,t)},initilaizeYears(t){for(let e=2022;e>=t;e--)this.years.push(e)},changeQuery(t){"year-area"===t.target.id?this.year=t.target.value:this.genreId=t.target.value,this.filterType="byYearAndGenre",this.currentPage=1,this.filterMovies(this.currentPage,this.year,this.genreId)},filterMovies(t,e,a){this.isLoading=!0,console.log({page:t,year:e,genreId:a}),b.a.get(X+"discover/movie",{params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",sort_by:"popularity.desc",include_video:!1,page:t,primary_release_year:e,with_genres:a}}).then(e=>{const{data:a}=e;this.movies=a.results,this.totalPages=a.total_pages,this.$router.push(`/movies?year=${this.year}&genreId=${this.genreId}&page=${t}`),this.isLoading=!1}).catch(t=>{this.isLoading=!1,console.log(t)})},filterMoviesByMovieName(t,e){this.isLoading=!0,this.currentPage="byYearAndGenre"===this.filterType?1:e,this.filterType="byMovieName",b.a.get(X+"search/movie",{params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",query:t,page:this.currentPage}}).then(t=>{this.isLoading=!1;const{data:e}=t;this.movies=e.results,this.totalPages=e.total_pages,this.$router.push(`movies?keyword=${this.keyword}&page=${this.currentPage}`)}).catch(t=>{this.isLoading=!1,console.log(t)})},afterClickMore(t){this.item=t},changeFormat(t){this.currentFormat=t,console.log(this.currentFormat)}}},tt=Z,et=(a("d373"),Object(c["a"])(tt,p,_,!1,null,"7c343002",null)),at=et.exports,it=function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("div",{staticClass:"spinner-wrapper"},[e("breeding-rhombus-spinner",{attrs:{"animation-duration":1e3,size:65,color:"#ff1d5e"}})],1):["card-format"===t.currentFormat?e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row",attrs:{id:"data-panel"}},t._l(t.movies,(function(a){return e("MovieCard",{key:a.id,attrs:{item:a},on:{"after-click-more":t.afterClickMore}})})),1)]):t._e()],e("MovieModal",{attrs:{item:t.item}})],2)},st=[];const ot="https://api.themoviedb.org/3/";var rt={mixins:[M,x],components:{BreedingRhombusSpinner:W["a"],MovieCard:$,MovieModal:K},data(){return{isLoading:!0,movies:[],item:{},currentFormat:"card-format"}},created(){this.getFavoriteMovies()},methods:{getFavoriteMovies(){this.isLoading=!0,b.a.get(ot+"account/13446156/favorite/movies",{params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",session_id:"df70931400331ac12bf1a79bf28dcc0973f037a4",sort_by:"created_at.desc"}}).then(t=>{this.isLoading=!1;const{data:e}=t;this.movies=e.results}).catch(t=>{this.isLoading=!1,console.log(t)})},afterClickMore(t){this.item=t}}},nt=rt,ct=(a("ffdc"),Object(c["a"])(nt,it,st,!1,null,"0a0c09a8",null)),lt=ct.exports,dt=function(){var t=this,e=t._self._c;return e("div",[t.isLoading?e("div",{staticClass:"spinner-wrapper"},[e("breeding-rhombus-spinner",{attrs:{"animation-duration":1e3,size:65,color:"#ff1d5e"}})],1):["card-format"===t.currentFormat?e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"row",attrs:{id:"data-panel"}},t._l(t.movies,(function(a){return e("MovieCard",{key:a.id,attrs:{item:a},on:{"after-click-more":t.afterClickMore}})})),1)]):t._e()],e("MovieModal",{attrs:{item:t.item}})],2)},vt=[];const ft="https://api.themoviedb.org/3/";var mt={mixins:[M,x],components:{BreedingRhombusSpinner:W["a"],MovieCard:$,MovieModal:K},data(){return{isLoading:!0,movies:[],item:{},currentFormat:"card-format"}},created(){this.getRatedMovies()},methods:{getRatedMovies(){this.isLoading=!0;const t=ft+"account/13446156/rated/movies",e={params:{api_key:"70c1033d4e5a041d7597a7d9758e86a6",session_id:"df70931400331ac12bf1a79bf28dcc0973f037a4",sort_by:"created_at.desc"}};b.a.get(t,e).then(t=>{this.isLoading=!1;const{data:e}=t;this.movies=e.results}).catch(t=>{this.isLoading=!1,console.log(t)})},afterClickMore(t){this.item=t}}},ut=mt,gt=(a("ac4d"),Object(c["a"])(ut,dt,vt,!1,null,"723eaf78",null)),ht=gt.exports;i["default"].use(v["a"]);const pt=[{path:"/",name:"movies",component:at},{path:"/movies",name:"movies",component:at},{path:"/favorite/movies",name:"favorite-movies",component:lt},{path:"/rated/movies",name:"rated-movies",component:ht},{path:"*",name:"not-found",component:h}],_t=new v["a"]({routes:pt});var yt=_t,bt=a("5f5b"),Ct=a("b1e0"),wt=(a("f9e3"),a("2dd8"),a("ecee")),kt=a("ad3d"),Mt=a("c074"),xt=a("b702"),It=a("8832"),Pt=a.n(It);const St=v["a"].prototype.push;v["a"].prototype.push=function(t){return St.call(this,t).catch(t=>t)},i["default"].component("paginate",Pt.a),i["default"].config.productionTip=!1,i["default"].use(bt["a"]),i["default"].use(Ct["a"]),wt["c"].add(Mt["a"],xt["a"]),i["default"].component("font-awesome-icon",kt["a"]),new i["default"]({router:yt,render:t=>t(d)}).$mount("#app")},"76b9":function(t,e,a){"use strict";a("4987")},8248:function(t,e,a){},ac4d:function(t,e,a){"use strict";a("3223")},b8f9:function(t,e,a){},d373:function(t,e,a){"use strict";a("8248")},e9f1:function(t,e,a){},ffdc:function(t,e,a){"use strict";a("1333")}});
//# sourceMappingURL=app.8596fc76.js.map