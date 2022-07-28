(function(e){function t(t){for(var i,n,r=t[0],l=t[1],c=t[2],m=0,v=[];m<r.length;m++)n=r[m],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},s={app:0},o=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/movie_app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"49ef":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],n=(a("4989"),a("ab8b"),{name:"App"}),r=n,l=(a("f5e0"),a("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null),d=c.exports,m=a("8c4f"),v=function(){var e=this,t=e._self._c;return t("h1",[e._v("404 Page Not Found")])},u=[],p={},f=Object(l["a"])(p,v,u,!1,null,null,null),h=f.exports,g=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container mt-3"},[t("div",{staticClass:"row"},[e._m(0),t("select",{staticClass:"col-2 mr-1",attrs:{id:"year-area"},on:{change:function(t){return e.changeYear(t)}}},[t("option",{attrs:{value:"",selected:""}},[e._v("年份")]),e._l(e.years,(function(a){return t("option",{key:a,domProps:{value:a}},[e._v(" "+e._s(a)+" ")])}))],2),t("select",{staticClass:"col-2 mr-1",attrs:{id:"genre-area"},on:{change:function(t){return e.changeGenre(t)}}},[t("option",{attrs:{value:"",selected:""}},[e._v("類型")]),e._l(e.genres,(function(a){return t("option",{key:a.id,domProps:{value:a.id}},[e._v(" "+e._s(a.chineseName)+" ")])}))],2),t("div",{staticClass:"col-6 col-md-4 col-lg-4"},[t("form",{staticClass:"d-flex",attrs:{id:"search-form"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],staticClass:"form-control me-2",attrs:{id:"search-input",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),t("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.filterMoviesByMovieName(e.keyword,1)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-magnifying-glass"}})],1)])]),t("div",{staticClass:"d-flex col-4 col-md-1 col-lg-1",attrs:{id:"control-form"}},[t("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"fa-solid fa-grip",size:"2x"},on:{click:function(t){return e.changeFormat("card-format")}}}),t("font-awesome-icon",{attrs:{icon:"fa-solid fa-list",size:"2x"},on:{click:function(t){return e.changeFormat("list-format")}}})],1)])]),"card-format"===e.currentFormat?t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"row",attrs:{id:"data-panel"}},e._l(e.movies,(function(a){return t("div",{key:a.id,staticClass:"col-6 col-md-4 col-lg-3 col-xl-2"},[t("div",{staticClass:"card mb-2"},[t("img",{staticClass:"card-img-top",attrs:{src:a.poster_path?"https://image.tmdb.org/t/p/w500/"+a.poster_path:"http://fakeimg.pl/440x650/?text=No img",alt:"Card image cap"}}),t("div",{staticClass:"card-body movie-item-body"},[t("h5",[e._v(e._s(a.title))])]),t("div",{staticClass:"card-footer d-flex justify-content-between"},[t("div",[t("div",{staticClass:"text-left"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}}),e._v(" "+e._s(a.popularity?a.popularity:"無資料")+" ")],1),t("div",{staticClass:"text-left"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-thumbs-up"}}),e._v(" "+e._s(a.vote_average?a.vote_average:"無資料")+" ")],1)]),t("button",{staticClass:"btn btn-show-movie btn-show-movie-card-format",attrs:{"data-toggle":"modal","data-target":"#show-movie-modal"},on:{click:function(t){return e.clickMore(a)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-down"}})],1)])])])})),0)]):t("div",{staticClass:"container mt-5"},[t("div",{staticClass:"list-table row align-items-center"},[t("tr",{staticClass:"col-5"},[e._v(" Name ")]),t("tr",{staticClass:"col-3"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}})],1),t("tr",{staticClass:"col-2"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-thumbs-up"}})],1),t("tr",{staticClass:"col-2"},[e._v(" More ")])]),e._l(e.movies,(function(a){return t("div",{key:a.id,staticClass:"list-table row align-items-center"},[t("tr",{staticClass:"col-5 pl-2"},[e._v(" "+e._s(a.title)+" ")]),t("tr",{staticClass:"col-3"},[e._v(" "+e._s(a.popularity?a.popularity:"無資料")+" ")]),t("tr",{staticClass:"col-2"},[e._v(" "+e._s(a.vote_average?a.vote_average:"無資料")+" ")]),t("tr",{staticClass:"col-2"},[t("button",{staticClass:"btn btn-show-movie btn-show-movie-list-format mx-2",attrs:{type:"button","data-toggle":"modal","data-target":"#show-movie-modal"},on:{click:function(t){return e.clickMore(a)}}},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-down"}})],1)])])}))],2),t("paginate",{attrs:{"page-count":e.totalPages,"page-range":3,"margin-pages":2,"click-handler":e.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-link","next-class":"page-link"}}),t("div",{staticClass:"modal fade",attrs:{id:"show-movie-modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"}},[t("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-body",attrs:{id:"show-movie-body"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-6"},[t("img",{attrs:{src:"https://image.tmdb.org/t/p/w500/"+e.movieDetail.poster_path,id:"show-movie-image"}})]),t("div",{staticClass:"col-6"},[t("h5",{staticClass:"modal-title",attrs:{id:"show-movie-title"}},[e._v(" "+e._s(e.movieDetail.title)+" ")]),t("p",{staticClass:"m-0"},[e._v("發行日 : "+e._s(e.movieDetail.release_date))]),t("div",[t("span",[e._v("類型 : ")]),e._l(e.movieDetail.genres,(function(a){return t("span",{key:a.id,staticClass:"mr-2"},[e._v(e._s(a.name)+" ")])}))],2),t("div",{staticClass:"row mt-3"},[t("div",{staticClass:"col-4"},[t("div",{staticClass:"text-center"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-star"}}),e._v(" "+e._s(e.movieDetail.popularity?e.movieDetail.popularity:"無資料")+" ")],1),t("div",{staticClass:"text-center"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-thumbs-up"}}),e._v(" "+e._s(e.movieDetail.vote_average?e.movieDetail.vote_average:"無資料")+" ")],1)]),t("div",{staticClass:"col-8"},[t("div",[t("p",{staticClass:"text-center m-0"},[e._v(" 預算 "+e._s(e.movieDetail.budget?e.movieDetail.budget:"無資料")+" ")])]),t("div",[t("p",{staticClass:"text-center m-0"},[e._v(" 票房 "+e._s(e.movieDetail.revenue?e.movieDetail.revenue:"無資料")+" ")])])])]),t("div",{staticClass:"mt-3",attrs:{id:"show-movie-description "}},[t("p",{staticClass:"overview-title text-center m-0"},[e._v("概要")]),t("p",{staticClass:"text-center"},[e._v(e._s(e.movieDetail.overview))])]),t("div",{attrs:{id:"show-movie-description"}},[t("p",{staticClass:"overview-title text-center m-0"},[e._v("標語")]),t("p",{staticClass:"text-center"},[e._v(" "+e._s(e.movieDetail.tagline?e.movieDetail.tagline:"無資料")+" ")])])])])])])])])],1)},y=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-4 col-md-2 col-lg-2 d-flex align-items-center justify-content-center"},[t("h5",{staticClass:"web-title"},[e._v("速查電影")])])}],_=a("bc3a"),b=a.n(_);const w=[{id:28,name:"Action",chineseName:"動作"},{id:12,name:"Adventure",chineseName:"冒險"},{id:16,name:"Animation",chineseName:"動畫"},{id:35,name:"Comedy",chineseName:"喜劇"},{id:80,name:"Crime",chineseName:"犯罪"},{id:99,name:"Documentary",chineseName:"紀錄片"},{id:18,name:"Drama",chineseName:"戲劇"},{id:10751,name:"Family",chineseName:"家庭"},{id:14,name:"Fantasy",chineseName:"奇幻"},{id:36,name:"History",chineseName:"歷史"},{id:27,name:"Horror",chineseName:"恐怖"},{id:10402,name:"Music",chineseName:"音樂"},{id:9648,name:"Mystery",chineseName:"靈異"},{id:10749,name:"Romance",chineseName:"愛情"},{id:878,name:"Science Fiction",chineseName:"科幻"},{id:10770,name:"TV Movie",chineseName:"電視電影"},{id:53,name:"Thriller",chineseName:"驚悚"},{id:10752,name:"War",chineseName:"戰爭"},{id:37,name:"Western",chineseName:"西方"}],C="70c1033d4e5a041d7597a7d9758e86a6",k="https://api.themoviedb.org/3/";var x={data(){return{years:[],genres:[],year:"",genreId:"",movies:[],currentPage:1,movieDetail:{},totalPages:3,currentFormat:"card-format",keyword:"",filterType:"byYearAndGenre"}},created(){this.initilaizeYears(2010),this.genres=w,this.filterMovies(1,this.year,this.genreId)},methods:{clickCallback(e){console.log(e),"byYearAndGenre"===this.filterType?this.filterMovies(e,this.year,this.genreId):this.filterMoviesByMovieName(this.keyword,e)},initilaizeYears(e){for(let t=2022;t>=e;t--)this.years.push(t)},changeYear(e){this.filterType="byYearAndGenre",this.currentPage=1,this.year=e.target.value,this.filterMovies(this.currentPage,this.year,this.genreId)},changeGenre(e){this.filterType="byYearAndGenre",this.currentPage=1,this.genreId=e.target.value,this.filterMovies(this.currentPage,this.year,this.genreId)},filterMovies(e,t,a){console.log({page:e,year:t,genre:a}),b.a.get(`${k}discover/movie?api_key=${C}&sort_by=popularity.desc&include_video=false&page=${e}&primary_release_year=${t}&with_genres=${a}`).then(t=>{const{data:a}=t;this.movies=a.results,this.totalPages=a.total_pages,this.$router.push(`/movies?year=${this.year}&genreId=${this.genreId}&page=${e}`)}).catch(e=>console.log(e))},filterMoviesByMovieName(e,t){this.filterType="byMovieName",b.a.get(`${k}search/movie?api_key=${C}&query=${e}&page=${t}`).then(e=>{const{data:a}=e;this.movies=a.results,this.totalPages=a.total_pages,this.$router.push(`movies?keyword=${this.keyword}&page=${t}`)}).catch(e=>console.log(e))},clickMore(e){b.a.get(`${k}movie/${e.id}?api_key=${C}`).then(e=>{const{data:t}=e;this.movieDetail=t}).catch(e=>console.log(e))},changeFormat(e){this.currentFormat=e,console.log(this.currentFormat)}}},N=x,M=(a("961c"),Object(l["a"])(N,g,y,!1,null,"24e31ab0",null)),P=M.exports;i["default"].use(m["a"]);const D=[{path:"/",name:"movies",component:P},{path:"/movies",name:"movies",component:P},{path:"*",name:"not-found",component:h}],$=new m["a"]({routes:D});var j=$,O=a("5f5b"),F=a("b1e0"),T=(a("f9e3"),a("2dd8"),a("ecee")),A=a("ad3d"),I=a("c074"),S=a("8832"),Y=a.n(S);const G=m["a"].prototype.push;m["a"].prototype.push=function(e){return G.call(this,e).catch(e=>e)},i["default"].component("paginate",Y.a),i["default"].config.productionTip=!1,i["default"].use(O["a"]),i["default"].use(F["a"]),T["c"].add(I["a"]),i["default"].component("font-awesome-icon",A["a"]),new i["default"]({router:j,render:e=>e(d)}).$mount("#app")},"961c":function(e,t,a){"use strict";a("49ef")},c790:function(e,t,a){},f5e0:function(e,t,a){"use strict";a("c790")}});
//# sourceMappingURL=app.b4c7ad00.js.map