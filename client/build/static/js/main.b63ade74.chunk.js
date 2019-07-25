(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(59)},59:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(30),c=n.n(r),i=n(4),l=n(5),s=n(7),u=n(6),m=n(8),h=n(16),f=n(11),v=n(15),d=n.n(v),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],query:""},n.handleInputChange=function(e){n.setState({query:e.target.value})},n.fetchbooks=function(e){e.preventDefault(),d.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(n.state.query)).then(function(e){n.setState({books:e.data.items})}).catch(function(e){console.log(e)})},n.saveBook=function(e){d.a.post("/api/books",{title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.previewLink})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.fetchbooks},o.a.createElement("label",{htmlFor:"search"},"Search"),o.a.createElement("input",{id:"search",type:"text",onChange:this.handleInputChange}),o.a.createElement("button",{type:"submit"},"Search")),o.a.createElement("hr",null),this.state.books.map(function(t){return o.a.createElement("div",{key:t.id},o.a.createElement("h2",null,t.volumeInfo.title),t.volumeInfo.authors&&t.volumeInfo.authors.map(function(e){return o.a.createElement("p",{key:e},e)}),o.a.createElement("p",null,t.volumeInfo.description),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.volumeInfo.previewLink},"View"),o.a.createElement("button",{onClick:function(){return e.saveBook(t)}},"Save"))}))}}]),t}(o.a.Component),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={saved:[]},n.fetchSaved=function(){d.a.get("/api/books").then(function(e){n.setState({saved:e.data})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("it is mounted"),this.fetchSaved()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null," Saved Books "),this.state.saved.map(function(e){return o.a.createElement("div",{key:e._id},e.title)}))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",{className:""},"Google Books"),o.a.createElement("li",{className:""},o.a.createElement(h.b,{to:"/"},"Search")),o.a.createElement("li",{className:""},o.a.createElement(h.b,{to:"/books"},"Saved")))),o.a.createElement("div",null,o.a.createElement("h1",null,"Google Books Search with React"),o.a.createElement("p",null," Search and Save Books of Interest")),o.a.createElement(f.a,{exact:!0,path:"/",component:p}),o.a.createElement(f.a,{exact:!0,path:"/search",component:p}),o.a.createElement(f.a,{exact:!0,path:"/books",component:b}))}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");g?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()}},[[33,2,1]]]);
//# sourceMappingURL=main.b63ade74.chunk.js.map