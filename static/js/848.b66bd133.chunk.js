"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[848],{4647:function(n,e,t){t.d(e,{i:function(){return Z}});var r,a,i,o,s,c,l,d=t(168),u=t(6088),h=t(1148),x=t(4224),f=(t(1720),u.Z.h1(r||(r=(0,d.Z)(["\n  margin-bottom: 32px;\n\n  font-size: 32px;\n  text-align: center;\n"])))),p=u.Z.form(a||(a=(0,d.Z)(["\n  width: 500px;\n  margin: 90px auto;\n  padding: 20px 50px;\n\n  background-color: #fff3;\n\n  border-radius: 25px;\n"]))),m=u.Z.label(i||(i=(0,d.Z)(["\n  font-size: 24px;\n"]))),j=(0,u.Z)(h.I)(o||(o=(0,d.Z)(["\n  margin-bottom: 32px;\n\n  font-family: 'Inconsolata';\n  font-size: 20px;\n\n  &:focus-visible {\n    border-color: purple;\n    box-shadow: 0px 1px 0px 0px purple;\n  }\n"]))),g=(0,u.Z)(x.z)(s||(s=(0,d.Z)(["\n  display: block;\n  margin: 0 auto 24px;\n"]))),v=u.Z.p(c||(c=(0,d.Z)(["\n  text-align: center;\n"]))),b=u.Z.span(l||(l=(0,d.Z)(["\n  margin-left: 8px;\n\n  font-weight: 700;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: teal;\n  }\n"]))),w=t(1087),y=t(184),Z=function(n){var e=n.type,t=n.onSubmit,r=n.onFilterChange;return"login"===e?(0,y.jsxs)(p,{autoComplete:"off",children:[(0,y.jsx)(f,{children:"Welcome Back"}),(0,y.jsxs)(m,{children:["Email",(0,y.jsx)(j,{name:"email",variant:"flushed"})]}),(0,y.jsxs)(m,{children:["Password",(0,y.jsx)(j,{name:"password",variant:"flushed"})]}),(0,y.jsx)(g,{colorScheme:"blackAlpha",type:"submit",children:"Login"}),(0,y.jsxs)(v,{children:["Do not have an account?",(0,y.jsx)(b,{children:(0,y.jsx)(w.OL,{to:"/register",children:"Register"})})]})]}):"register"===e?(0,y.jsxs)(p,{autoComplete:"off",children:[(0,y.jsx)(f,{children:"Create an account"}),(0,y.jsxs)(m,{children:["Name",(0,y.jsx)(j,{name:"name",variant:"flushed"})]}),(0,y.jsxs)(m,{children:["Email",(0,y.jsx)(j,{name:"email",variant:"flushed"})]}),(0,y.jsxs)(m,{children:["Password",(0,y.jsx)(j,{name:"password",variant:"flushed"})]}),(0,y.jsx)(g,{colorScheme:"blackAlpha",type:"submit",children:"Create Account"}),(0,y.jsxs)(v,{children:["Already have an account?",(0,y.jsx)(b,{children:(0,y.jsx)(w.OL,{to:"/login",children:"Sign in"})})]})]}):"contacts"===e?(0,y.jsxs)(p,{onSubmit:t,autoComplete:"off",children:[(0,y.jsxs)(m,{children:["Name",(0,y.jsx)(j,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,variant:"flushed"})]}),(0,y.jsxs)(m,{children:["Number",(0,y.jsx)(j,{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,variant:"flushed"})]}),(0,y.jsx)(g,{type:"submit",colorScheme:"blackAlpha",style:{margin:"0 auto"},children:"Add contact"})]}):"filter"===e?(0,y.jsx)(p,{children:(0,y.jsxs)(m,{children:["Find contacts by name",(0,y.jsx)(j,{type:"text",variant:"flushed",onChange:r})]})}):void 0}},8815:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o=t(9439),s=t(9434),c=t(8097),l=function(n){return n.contacts.items},d=function(n){return l(n).filter((function(e){return e.name.toLowerCase().includes(function(n){return n.filter}(n))}))},u=t(1086),h=t(4647),x=t(184),f=function(n){var e=n.toggle,t=(0,s.v9)(l),r=(0,s.I0)();return(0,x.jsx)(h.i,{type:"contacts",onSubmit:function(n){n.preventDefault();var a=n.currentTarget,i=a.name.value,o=a.number.value;t.some((function(n){return n.name===i}))?(0,u.K)(i):(r((0,c.uK)({name:i,phone:o})),e(),a.reset())}})},p=t(8268),m=function(){var n=(0,s.I0)();return(0,x.jsx)(h.i,{type:"filter",onFilterChange:function(e){var t=e.target.value.toLowerCase();n((0,p.c)(t))}})},j=t(4164),g=t(2791),v=t(168),b=t(6088),w=b.Z.div(r||(r=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(10px);\n"]))),y=b.Z.div(a||(a=(0,v.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Z=document.querySelector("#modal-root"),k=function(n){var e=n.children,t=n.toggle;(0,g.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]);return(0,j.createPortal)((0,x.jsx)(w,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,x.jsx)(y,{children:e})}),Z)},C=t(8966),S=b.Z.li(i||(i=(0,v.Z)(["\n  display: flex;\n  font-size: 20px;\n  justify-content: space-between;\n  width: 400px;\n  align-items: center;\n  margin-bottom: 8px;\n"]))),A=t(4224),z=function(n){var e=n.data,t=e.name,r=e.phone,a=e.id,i=(0,s.I0)(),l=(0,g.useState)(!1),d=(0,o.Z)(l,2),u=d[0],h=d[1];return(0,x.jsxs)(S,{children:[(0,x.jsxs)("p",{children:[t,": ",r]}),(0,x.jsx)(A.z,{type:"button",onClick:function(n){i((0,c.GK)(a)),h(!0)},disabled:u,colorScheme:"blackAlpha",children:u?(0,x.jsx)(C.g4,{height:"10",width:"42",radius:"9",color:"#ffffff",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,x.jsx)("p",{children:"Delete"})})]})},L=function(){var n=(0,s.I0)(),e=(0,s.v9)(d);return(0,g.useEffect)((function(){n((0,c.yF)())}),[n]),(0,x.jsx)("ul",{children:e.map((function(n){return(0,x.jsx)(z,{data:n},n.id)}))})},E=function(){var n=(0,g.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=function(){r((function(n){return!n}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(A.z,{colorScheme:"blackAlpha",onClick:a,children:"Add new contact"}),t&&(0,x.jsx)(k,{toggle:a,children:(0,x.jsx)(f,{toggle:a})}),(0,x.jsx)(m,{}),(0,x.jsx)(L,{})]})}}}]);
//# sourceMappingURL=848.b66bd133.chunk.js.map