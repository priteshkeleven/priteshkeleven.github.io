(this["webpackJsonppriteshkeleven.github.io"]=this["webpackJsonppriteshkeleven.github.io"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(3),a=c(5),n=c.n(a),i=c(20),o=c.n(i),r=(c(27),c(28),c(29),c(30),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("ul",{className:"header-menu",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#about",children:"About"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#contact",children:"Contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#social",children:"Socials"})})]})})}),l=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("nav",{className:"nav-header",children:Object(s.jsx)("h3",{className:"heading",children:Object(s.jsx)("a",{href:"https://priteshkeleven.github.io",children:"Pritesh K."})})})}),Object(s.jsx)(r,{})]})},j=(c(31),c(32),c.p+"static/media/about-me.4c5593cd.svg"),b=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"about",id:"about",children:[Object(s.jsx)("div",{className:"about-me-img-container",children:Object(s.jsx)("img",{className:"about-me-img",src:j,alt:"about-me"})}),Object(s.jsxs)("div",{className:"about-me-text",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsx)("strong",{children:"Hi There! \ud83d\udc4b"}),Object(s.jsxs)("p",{children:["I am working as a Full-Stack JavaScript Developer \ud83d\udc68\u200d\ud83d\udcbb with two years of experience. ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"I mainly work with two major languages, JavaScript and Python. For Front-end, I can develop responsive layout with ",Object(s.jsx)("strong",{children:"ReactJS, SASS, CSS3, Vanilla JS, ES6/7, HTML5"})," and for Back-end, I can use ",Object(s.jsx)("strong",{children:"Django, Flask, ExpressJS, NodeJS, Axios"}),". On top of that, I can also integrate it with various SQL/NoSQL Database."]}),Object(s.jsxs)("p",{children:["To know more --\x3e ",Object(s.jsx)("strong",{children:Object(s.jsx)("a",{href:"#social",children:"Go to Socials! \ud83d\udcf1"})})]}),Object(s.jsxs)("p",{children:["To contact me --\x3e ",Object(s.jsx)("strong",{children:Object(s.jsx)("a",{href:"#contact",children:"Use Form! \ud83e\uddfe"})})]})]})]})})},d=c(15),m=c(12),h=c(11),O=(c(33),c.p+"static/media/contact-me.77a30941.svg"),u=c(18),x=function(){var e=u.a.firestore(),t=Object(a.useState)({name:"",email:"",message:""}),c=Object(h.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(!1),r=Object(h.a)(o,2),l=r[0],j=r[1],b=Object(a.useState)(!1),x=Object(h.a)(b,2),p=x[0],g=x[1],f=Object(a.useState)(!1),S=Object(h.a)(f,2),_=S[0],v=S[1],A=Object(a.useState)(!1),E=Object(h.a)(A,2),N=E[0],P=E[1],T=Object(a.useState)(!1),w=Object(h.a)(T,2),C=w[0],k=w[1],I=Object(a.useState)(!1),R=Object(h.a)(I,2),D=R[0],F=R[1],y=function(e){var t=e.target,c=t.name,s=t.value;"name"===c&&N&&P(!1),"email"===c&&C&&k(!1),"message"===c&&F&&F(!1),i((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},c,s))}))};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"contact",id:"contact",children:[Object(s.jsxs)("div",{className:"contact-form",children:[l||_?Object(s.jsx)(a.Fragment,{}):Object(s.jsxs)(a.Fragment,{children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("input",{type:"text",className:"input name",name:"name",placeholder:"Your Name, Please!",onChange:y,value:n.name}),N?Object(s.jsx)("span",{className:"validation-text",children:"Name shouldn't be empty!!"}):Object(s.jsx)(a.Fragment,{})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("input",{type:"email",className:"input email",name:"email",value:n.email,placeholder:"Email Address Too, Thanks!!",onChange:y}),C?Object(s.jsx)("span",{className:"validation-text",children:"Email shouldn't be empty or invalid!!"}):Object(s.jsx)(a.Fragment,{})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("textarea",{rows:5,className:"input message",name:"message",value:n.message,placeholder:"Greetings!!! Your Message Goes Here!",onChange:y}),D?Object(s.jsx)("span",{className:"validation-text",children:"Message looks empty!! It shouldn't."}):Object(s.jsx)(a.Fragment,{})]}),Object(s.jsx)("div",{className:"form-control",children:Object(s.jsx)("button",{className:"send-button",onClick:function(){""===n.name&&P(!0),""!==n.email&&/\S+@\S+\.\S+/.test(n.email)||k(!0),""===n.message&&F(!0),""!==n.name&&""!==n.email&&""!==n.message&&/\S+@\S+\.\S+/.test(n.email)&&(g(!0),e.collection("leads").add(Object(m.a)(Object(m.a)({},n),{},{datetime:u.a.firestore.Timestamp.fromDate(new Date)})).then((function(e){j(!0),g(!1)})).catch((function(e){v(!0),g(!1)})))},children:p?"Loading...":"Send \ud83d\udce1"})})]}),l?Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"send-button",disabled:!0,children:"Sent! Will get back to you soon. \ud83d\udc4d"})}):Object(s.jsx)(a.Fragment,{}),_?Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"send-button",disabled:!0,children:"Error! Try refreshing page. \u26a0\ufe0f"})}):Object(s.jsx)(a.Fragment,{})]}),Object(s.jsx)("div",{className:"contact-img-container",children:Object(s.jsx)("img",{src:O,className:"contact-img",alt:"contact-form"})})]})})},p=(c(34),c.p+"static/media/socials.d12ea9bd.svg"),g=c(13),f=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"social",id:"social",children:[Object(s.jsx)("div",{className:"social-img-container",children:Object(s.jsx)("img",{src:p,className:"social-img",alt:"socials"})}),Object(s.jsxs)("div",{className:"social-group",children:[Object(s.jsxs)("button",{className:"social-button",onClick:function(){return window.open("https://twitter.com/priteshkeleven")},children:[Object(s.jsx)(g.d,{title:"Twitter Icon"})," Twitter"]}),Object(s.jsxs)("button",{className:"social-button",onClick:function(){return window.open("https://www.linkedin.com/in/pritesh-k/")},children:[Object(s.jsx)(g.b,{title:"LinkedIn Icon"})," LinkedIn"]}),Object(s.jsxs)("button",{className:"social-button",onClick:function(){return window.open("https://github.com/priteshkeleven")},children:[Object(s.jsx)(g.a,{title:"Github Icon"})," Github"]}),Object(s.jsxs)("button",{className:"social-button",onClick:function(){return window.open("https://stackoverflow.com/users/11389944/pritesh-k")},children:[Object(s.jsx)(g.c,{title:"StackOverflow Icon"})," Stack Overflow"]})]})]})})},S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(x,{}),Object(s.jsx)(f,{})]})},_=(c(35),c(21)),v=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("nav",{className:"nav-footer",children:Object(s.jsxs)("h4",{children:["Made with ",Object(s.jsx)(_.a,{style:{verticalAlign:"middle"}})," by Pritesh K."]})})})})},A=c(14),E=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyBoq-PHEREsXCfLeM-50Yw_usObljnHw-Y",REACT_APP_APP_ID:"1:516528077725:web:33ffbe1469d16de4f54d74",REACT_APP_AUTH_DOMAIN:"portfolio-leads-pritesh-k.firebaseapp.com",REACT_APP_MEASUREMENT_ID:"G-4JCDQTF9Z0",REACT_APP_MESSAGING_SENDER_ID:"516528077725",REACT_APP_PROJECT_ID:"portfolio-leads-pritesh-k",REACT_APP_STORAGE_BUCKET:"portfolio-leads-pritesh-k.appspot.com"}),t={apiKey:e.REACT_APP_API_KEY,authDomain:e.REACT_APP_AUTH_DOMAIN,projectId:e.REACT_APP_PROJECT_ID,storageBucket:e.REACT_APP_STORAGE_BUCKET,messagingSenderId:e.REACT_APP_MESSAGING_SENDER_ID,appId:e.REACT_APP_APP_ID,measurementId:e.REACT_APP_MEASUREMENT_ID};return A.a.apps.length?A.a.app():A.a.initializeApp(t),A.a.analytics(),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(S,{}),Object(s.jsx)(v,{})]})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.43b121a7.chunk.js.map