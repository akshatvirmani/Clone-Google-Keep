(this.webpackJsonpkeepclone=this.webpackJsonpkeepclone||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(10),a=n.n(r),i=n(9),s=n(4),j=(n(17),n(1));var l=function(){var e=Object(j.jsx)("img",{className:"photo",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPFl15AoRoHAzyfeAMVrbMI3wctquPUETdw&usqp=CAU",alt:"logo"});return Object(j.jsxs)("div",{className:"header",children:[e,Object(j.jsx)("h1",{children:"Note Keeper"})]})},u=n(6),b=n(8),O=n(11);var d=function(e){var t=e.onAdd,n=Object(c.useState)(!1),o=Object(s.a)(n,2),r=o[0],a=o[1],i=Object(c.useState)({title:"",content:""}),l=Object(s.a)(i,2),d=l[0],h=l[1];function f(e){var t=e.target,n=t.name,c=t.value;h((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[r&&Object(j.jsx)("input",{value:d.title,type:"text",placeholder:"Title",name:"title",onChange:f}),Object(j.jsx)("p",{children:Object(j.jsx)("textarea",{value:d.content,onClick:function(){a(!0)},name:"content",placeholder:"Take a note...",onChange:f,rows:r?3:1})}),Object(j.jsx)("button",{onClick:function(e){t(d),h({title:"",content:""}),e.preventDefault()},children:Object(j.jsx)(O.a,{size:35})})]})})},h=n(12);var f=function(e){var t=e.title,n=e.content,c=e.onDelete,o=e.id;return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("button",{onClick:function(){return c(o)},children:Object(j.jsx)(h.a,{size:25})})]})};var x=function(e){var t=e.count;return Object(j.jsx)("div",{className:"count",children:Object(j.jsx)("h4",{children:t})})};var p=function(e){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{children:"Keep your notes here"})})};var v=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),o=n[0],r=n[1];function a(e){r((function(t){return Object(i.a)(t.filter((function(t,n){return n!==e})))}))}return Object(c.useEffect)((function(){var e=window.localStorage.getItem("notes");r(JSON.parse(e))}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("notes",JSON.stringify(o))})),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)(x,{count:0===o.length?"There are no notes":"Showing ".concat(o.length," Note(s) in Database")}),Object(j.jsx)(d,{onAdd:function(e){r((function(t){return[].concat(Object(i.a)(t),[e])}))}}),o.map((function(e,t){return Object(j.jsx)(f,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(j.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.2d9094ed.chunk.js.map