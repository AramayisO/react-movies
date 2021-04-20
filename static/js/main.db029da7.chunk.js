(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(10),a=n.n(s),i=(n(15),n(1)),o=n.n(i),u=n(4),l=n(5),d=n(6),h=n(3),p=n(8),j=n(7),b=n(0),v=function(e){var t=e.onClose,n=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:t,children:"X"})}),n]})},x=function(e){var t=e.title,n=e.type,r=e.posterUrl,c=e.onMovieClicked;return Object(b.jsxs)("div",{style:{display:"inline-block",border:"1px solid black",margin:"15px"},onClick:c,children:[Object(b.jsx)("section",{children:Object(b.jsx)("img",{src:r,alt:"".concat(t," poster")})}),Object(b.jsxs)("section",{children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:n})})]})]})},O=function(e){var t=e.movies,n=e.onMovieCardClicked;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(x,{title:e.Title,type:e.Type,posterUrl:e.Poster,onMovieClicked:function(){return n(e.imdbID)}},e.imdbID)}))})};O.defaultProps={movies:[]};var f=O,m=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{children:Object(b.jsx)("img",{src:e.posterUrl,alt:"Poster for ".concat(e.title)})}),Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:e.title}),Object(b.jsx)("p",{children:e.rating})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:e.rated}),Object(b.jsx)("span",{children:e.runtime}),Object(b.jsx)("span",{children:e.genre})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Plot:"}),Object(b.jsx)("p",{children:e.plot})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Actors:"}),Object(b.jsx)("p",{children:e.actors})]})]})]})};m.defaultProps={rating:0,rated:"N/A",genre:"N/A",plot:"N/A",actors:"N/A"};var g=m,S="http://www.omdbapi.com/",k="168cc8dc",y=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c,s,a,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"movie",r=i.length>2&&void 0!==i[2]?i[2]:1,c="".concat(S,"?apikey=").concat(k,"&s=").concat(t,"&type=").concat(n,"&page=").concat(r),e.prev=3,e.next=6,fetch(c);case 6:return s=e.sent,e.next=9,s.json();case 9:return a=e.sent,console.log(a),e.abrupt("return",a.Search);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:return e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(S,"?apikey=").concat(k,"&i=").concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",null);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={search:"",type:"movie"},r.onFormSubmit=r.onFormSubmit.bind(Object(h.a)(r)),r}return Object(d.a)(n,[{key:"onFormSubmit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.search,this.state.type)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{onSubmit:this.onFormSubmit,children:[Object(b.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}),Object(b.jsxs)("select",{value:this.state.type,onChange:function(t){return e.setState({type:t.target.value})},children:[Object(b.jsx)("option",{value:"movie",children:"Movie"}),Object(b.jsx)("option",{value:"series",children:"Series"}),Object(b.jsx)("option",{value:"episode",children:"Episode"})]}),Object(b.jsx)("button",{type:"submit",children:"Search"})]})}}]),n}(c.a.Component),C=function(e){var t=e.currentPage,n=e.getNextPage,r=e.getPrevPage;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Page: ",t]}),Object(b.jsx)("button",{onClick:function(){return r()},children:"Prev"}),Object(b.jsx)("button",{onClick:function(){return n()},children:"Next"})]})},P=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={movies:[],search:"batman",type:"",isLoading:!1,error:null,showModal:!1,selectedMovieId:null,selectedMovie:null,page:1},r.updateShowModalState=r.updateShowModalState.bind(Object(h.a)(r)),r.onMovieClicked=r.onMovieClicked.bind(Object(h.a)(r)),r.onSearchFormSubmit=r.onSearchFormSubmit.bind(Object(h.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),setTimeout(Object(u.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(t.state.search);case 3:n=e.sent,t.setState({movies:n,error:null,isLoading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.setState({movies:[],error:e.t0,isLoading:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),5e3);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.selectedMovieId===this.state.selectedMovieId){e.next=11;break}return e.prev=1,e.next=4,M(this.state.selectedMovieId);case 4:r=e.sent,this.setState({selectedMovie:r,showModal:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({error:e.t0,showModal:!1});case 11:if(n.search===this.state.search&&n.type===this.state.type&&n.page===this.state.page){e.next=22;break}return e.prev=12,e.next=15,y(this.state.search,this.state.type,this.state.page);case 15:c=e.sent,this.setState({movies:c,error:null}),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(12),this.setState({error:e.t1,movies:[]});case 22:case"end":return e.stop()}}),e,this,[[1,8],[12,19]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateShowModalState",value:function(e){this.setState({showModal:e})}},{key:"onMovieClicked",value:function(e){this.setState({selectedMovieId:e})}},{key:"onSearchFormSubmit",value:function(e,t){this.setState({search:e,type:t}),console.log(e,t)}},{key:"updatePage",value:function(e){this.setState((function(t){var n=t.page+e;return n>0&&n<101?{page:n}:{page:t.page}}))}},{key:"render",value:function(){var e=this,t=this.state.selectedMovie;return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{onSubmit:this.onSearchFormSubmit}),this.state.isLoading&&Object(b.jsx)("p",{children:"Loading..."}),Object(b.jsx)(f,{movies:this.state.movies,onMovieCardClicked:this.onMovieClicked}),Object(b.jsx)(C,{currentPage:this.state.page,getNextPage:function(){return e.updatePage(1)},getPrevPage:function(){return e.updatePage(-1)}}),this.state.showModal&&Object(b.jsx)(v,{show:this.state.showModal,onClose:function(){return e.updateShowModalState(!1)},children:Object(b.jsx)(g,{posterUrl:t.Poster,title:t.Title,rating:t.Ratings[0].Value,rated:t.Rated,runtime:t.Runtime,genre:t.Genre,plot:t.Plot,actors:t.Actors})})]})}}]),n}(c.a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),F()}},[[18,1,2]]]);
//# sourceMappingURL=main.db029da7.chunk.js.map