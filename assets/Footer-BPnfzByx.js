import{r as i,j as a,f as h,g as d,e as x,h as m,i as j}from"./index-DP4O2w4j.js";const f=({scrollToSection:e})=>{const[c,t]=i.useState(!1),[r,p]=i.useState("fabianrwork@gmail.com"),[s,n]=i.useState(0),o=()=>{window.location.href="mailto:fabianrwork@gmail.com",t(!0)},l=()=>{navigator.clipboard.writeText(r).then(()=>{n(1),setTimeout(()=>n(0),[1e3])}).catch(()=>{console.error("Failed to copy")})};return a.jsxs("div",{className:"footer_container",children:[a.jsxs("div",{className:"footer_question",children:[a.jsx("h1",{children:"Have any project in your mind?"}),c?a.jsx(a.Fragment,{children:a.jsxs("p",{className:"footer_mail",children:["fabianrwork@gmail.com",s===0?a.jsx(h,{className:"email_copy_icon",onClick:()=>l()}):s===1?a.jsx(d,{className:"email_copied_check_icon"}):null]})}):a.jsx("button",{onClick:()=>o(),children:"GET IN TOUCH"})]}),a.jsxs("div",{className:"footer_links_and_text",children:[a.jsxs("div",{children:[a.jsx("a",{href:"https://github.com/rafatabian","aria-label":"github",children:a.jsx(x,{})}),a.jsx("a",{href:"https://www.linkedin.com/in/fabian-rata-781389281/","aria-label":"linkedin",children:a.jsx(m,{})})]}),a.jsxs("div",{children:[a.jsx("p",{onClick:()=>e("home"),children:"HOME"}),a.jsx("p",{onClick:()=>e("about"),children:"ABOUT"}),a.jsx("p",{onClick:()=>e("skills"),children:"SKILLS"}),a.jsx("p",{onClick:()=>e("projects"),children:"PROJECTS"})]}),a.jsxs("div",{children:[a.jsxs("p",{children:["Designed with ",a.jsx(j,{})]}),a.jsx("p",{children:"© 2024 copyright by Fabian"})]})]})]})};export{f as default};
