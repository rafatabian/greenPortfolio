import{r as t,j as e}from"./index-C82O5nV7.js";import{G as n,b as j,c as _}from"./index-DQsMa6wE.js";import{I as g,a as M,b as I,c as p}from"./index-CoHpEqU6.js";function N(s){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.03 2.59a1.501 1.501 0 0 1 1.94 0l7.5 6.363a1.5 1.5 0 0 1 .53 1.144V19.5a1.5 1.5 0 0 1-1.5 1.5h-5.75a.75.75 0 0 1-.75-.75V14h-2v6.25a.75.75 0 0 1-.75.75H4.5A1.5 1.5 0 0 1 3 19.5v-9.403c0-.44.194-.859.53-1.144ZM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v6.25h5v-9.403Z"},child:[]}]})(s)}function k(s){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z"},child:[]}]})(s)}function C(s){return n({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"},child:[]}]})(s)}function w(s){return n({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},child:[]},{tag:"path",attr:{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},child:[]}]})(s)}const z=({scrollToSection:s})=>{const[v,r]=t.useState(!1),[b,i]=t.useState(!1),[m,u]=t.useState(!1),[x,h]=t.useState(!1),[o,f]=t.useState(!1),[a,c]=t.useState(!1);t.useEffect(()=>{window.innerWidth<600&&f(!0)},[]);const l=d=>{c(!1),s(d)};return t.useEffect(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[a]),e.jsxs("div",{className:`navbar_container ${o?"nav_mobile_cont":""}`,children:[e.jsx("div",{className:"navbar_logo",children:e.jsx("h1",{children:"F"})}),o&&!a?e.jsx("div",{className:"navbar_mobile_menu",children:e.jsx(g,{onClick:()=>c(!0)})}):null,e.jsxs("div",{className:`${o?"btns_mobile":"navbar_buttons"} ${a?"showNavMenu":""}`,children:[o&&a?e.jsx(M,{onClick:()=>c(!1),className:"navbar_close_menu"}):null,e.jsxs("div",{className:"navbar_buttons_home",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onClick:()=>l("home"),children:[v?e.jsx(k,{}):e.jsx(N,{}),e.jsx("h2",{className:"navbar_buttons_text",children:"HOME"})]}),e.jsxs("div",{className:"navbar_buttons_about",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onClick:()=>l("about"),children:[b?e.jsx(C,{}):e.jsx(w,{}),e.jsx("h2",{className:"navbar_buttons_text",children:"ABOUT"})]}),e.jsxs("div",{className:"navbar_buttons_skills",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),onClick:()=>l("skills"),children:[m?e.jsx(I,{}):e.jsx(p,{}),e.jsx("h2",{className:"navbar_buttons_text",children:"SKILLS"})]}),e.jsxs("div",{className:"navbar_buttons_projects",onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onClick:()=>l("projects"),children:[x?e.jsx(j,{}):e.jsx(_,{}),e.jsx("h2",{className:"navbar_buttons_text",children:"PROJECTS"})]})]})]})};export{z as default};
