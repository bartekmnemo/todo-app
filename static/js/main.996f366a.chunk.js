(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(7),r=a.n(s),o=(a(13),a(8)),i=a(2),l=a(3),d=a(5),j=a(4),h=(a(14),a(0)),u=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={value:"",date:"",category:"normal"},t.handleClick=function(e){"text"===e.target.type?t.setState({value:e.target.value}):"date"===e.target.type?t.setState({date:e.target.value}):"select-one"===e.target.type&&t.setState({category:e.target.value})},t.addNewTask=function(){var e=t.state,a=e.value,n=e.date,c=e.category;a&&n&&c&&t.props.addTask(a,n,c)},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Add Task"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"taskValue",children:"Task: "}),Object(h.jsx)("input",{type:"text",id:"taskValue",value:this.state.value,onChange:this.handleClick,placeholder:"add task"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"deadline",children:"Completion date:"})," ",Object(h.jsx)("input",{type:"date",id:"deadline",value:this.state.date,onChange:this.handleClick,size:"1"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"group",children:"Category: "}),Object(h.jsxs)("select",{id:"group",value:this.state.category,onChange:this.handleClick,children:[Object(h.jsx)("option",{value:"normal",children:"Normal"}),Object(h.jsx)("option",{value:"job",children:"Job"}),Object(h.jsx)("option",{value:"personal",children:"Personal"}),Object(h.jsx)("option",{value:"important",children:"Important"})]})]}),Object(h.jsx)("button",{onClick:this.addNewTask,children:"Add"}),Object(h.jsx)("hr",{})]})}}]),a}(n.Component),b=function(t){var e={color:t.task.category.color};return Object(h.jsxs)("p",{style:e,children:[Object(h.jsx)("strong",{children:t.task.text}),", czas do ",t.task.date," ",Object(h.jsx)("button",{children:Object(h.jsx)("i",{className:"fas fa-check"})})," ",Object(h.jsx)("button",{children:Object(h.jsx)("i",{className:"fas fa-trash-alt"})})]})},O=function(t){var e=t.tasks.filter((function(t){return!0===t.active})),a=t.tasks.filter((function(t){return!0!==t.active})),c=e.map((function(t){return Object(h.jsx)(b,{task:t},t.id)})),s=a.map((function(t){return Object(h.jsx)(b,{task:t},t.id)}));return Object(h.jsxs)(n.Fragment,{children:[Object(h.jsx)("h1",{children:"To Do"}),Object(h.jsx)("div",{children:c}),Object(h.jsx)("hr",{}),Object(h.jsx)("h1",{children:"Done"}),Object(h.jsx)("div",{children:s})]})},p=3,x=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={tasks:[{id:0,text:"Wyjd\u017a z psem",category:{name:"important",color:"red"},date:"2021-10-22",active:!1,finishDate:null},{id:1,text:"Pole\u0107 na marsa",category:{name:"job",color:"blue"},date:"2021-09-02",active:!0,finishDate:null},{id:2,text:"Zbuduj wehiku\u0142 czasu",category:{name:"personal",color:"green"},date:"2021-07-14",active:!0,finishDate:null}]},t.addTast=function(e,a,n){console.log(e,a,n);var c={};"normal"===n?c={name:"normal",color:"black"}:"personal"===n?c={name:"personal",color:"green"}:"job"===n?c={name:"job",color:"blue"}:"important"===n&&(c={name:"important",color:"red"});var s=Object(o.a)(t.state.tasks).concat({id:p,text:e,category:{name:c.name,color:c.color},date:a,active:!0,finishDate:null});t.setState({tasks:s}),p++,console.log(p)},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Plan your day just here, just now!"}),Object(h.jsx)("q",{children:"The secret of getting ahead is getting started."}),Object(h.jsx)(u,{tasks:this.state.tasks,addTask:this.addTast}),Object(h.jsx)(O,{tasks:this.state.tasks}),Object(h.jsx)("footer",{children:"designed and created by Bartosz Zi\u0119cina"})]})}}]),a}(n.Component),g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),s(t),r(t)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.996f366a.chunk.js.map