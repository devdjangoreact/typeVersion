(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[0],{115:function(e,t,s){var a={"./error-dark.svg":116,"./error.svg":117,"./forgot-password-v2-dark.svg":118,"./forgot-password-v2.svg":119,"./login-v2-dark.svg":120,"./login-v2.svg":121,"./not-authorized-dark.svg":122,"./not-authorized.svg":123,"./register-v2-dark.svg":124,"./register-v2.svg":125};function r(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=115},116:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/error-dark.6de97f7b.svg"},117:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/error.51731f25.svg"},118:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/forgot-password-v2-dark.593b4f61.svg"},119:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/forgot-password-v2.490e62f0.svg"},120:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/login-v2-dark.5b83e8c4.svg"},121:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/login-v2.2198399d.svg"},122:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/not-authorized-dark.c7c1ece5.svg"},123:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/not-authorized.e62938f3.svg"},124:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/register-v2-dark.7685db34.svg"},125:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/register-v2.4620a1e5.svg"},128:function(e,t,s){},131:function(e,t,s){"use strict";var a=s(12),r=s(16),c=s(7),n=s(31),i=s(1),o=s(2),l=s.n(o),d=s(143),j=s(144),b=s(23),u=s(4),m=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],f=Object(i.forwardRef)((function(e,t){var s,o=e.label,f=e.hideIcon,x=e.showIcon,O=e.visible,h=e.className,p=e.htmlFor,v=e.placeholder,g=e.iconSize,N=e.inputClassName,y=e.invalid,k=Object(n.a)(e,m),w=Object(i.useState)(O),C=Object(c.a)(w,2),F=C[0],z=C[1];return Object(u.jsxs)(i.Fragment,{children:[o?Object(u.jsx)(b.r,{className:"form-label",for:p,children:o}):null,Object(u.jsxs)(b.p,{className:l()((s={},Object(r.a)(s,h,h),Object(r.a)(s,"is-invalid",y),s)),children:[Object(u.jsx)(b.o,Object(a.a)(Object(a.a)({ref:t,invalid:y,type:!1===F?"password":"text",placeholder:v||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(r.a)({},N,N))},o&&p?{id:p}:{}),k)),Object(u.jsx)(b.q,{className:"cursor-pointer",onClick:function(){return z(!F)},children:function(){var e=g||14;return!1===F?f||Object(u.jsx)(d.a,{size:e}):x||Object(u.jsx)(j.a,{size:e})}()})]})]})}));t.a=f,f.defaultProps={visible:!1}},175:function(e,t,s){"use strict";s.r(t);var a=s(12),r=s(7),c=s(1),n=s(3),i=s(28),o=s(146),l=s(147),d=s(154),j=s(148),b=s(131),u=s(23),m=(s(128),s(47)),f=s(29),x=s(145),O=s(46),h=s(19),p=s(24),v=s(13),g=s.n(v);function N(){return(N=Object(p.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("http://127.0.0.1:8000/api/profile/csrf_cookie");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=s(126),k=s(169),w=s(151),C=s(45),F=s(33),z=s(134),L=s(127),E=s(4),P=function(e){var t=e.t,s=e.name,a=e.role;return Object(E.jsxs)("div",{className:"d-flex",children:[Object(E.jsx)("div",{className:"me-1",children:Object(E.jsx)(z.a,{size:"sm",color:"success",icon:Object(E.jsx)(k.a,{size:12})})}),Object(E.jsxs)("div",{className:"d-flex flex-column",children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)("h6",{children:s}),Object(E.jsx)(w.a,{size:12,className:"cursor-pointer",onClick:function(){return m.b.dismiss(t.id)}})]}),Object(E.jsxs)("span",{children:["You have successfully logged in as an ",a," user to Vuexy. Now you can start to explore. Enjoy!"]})]})]})},S={password:"1111",username:"dev@dev.com"};t.default=function(){var e=Object(y.a)().skin,t=Object(f.b)(),h=Object(n.f)(),p=Object(c.useContext)(F.a),v=Object(x.b)({defaultValues:S}),g=v.control,k=v.setError,w=v.handleSubmit,z=v.formState.errors,G=Object(c.useState)(!1),I=Object(r.a)(G,2),T=I[0],D=I[1],M="dark"===e?"login-v2-dark.svg":"login-v2.svg",R=s(115)("./".concat(M)).default;return Object(c.useEffect)((function(){if(!T){var e=function(){return N.apply(this,arguments)}();e.then((function(e){localStorage.setItem("CsrfToken",e.data.CSRF_COOKIE),D(!0)}))}})),Object(E.jsx)("div",{className:"auth-wrapper auth-cover",children:Object(E.jsxs)(u.v,{className:"auth-inner m-0",children:[Object(E.jsxs)(i.b,{className:"brand-logo",to:"/",onClick:function(e){return e.preventDefault()},children:[Object(E.jsxs)("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[Object(E.jsxs)("defs",{children:[Object(E.jsxs)("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[Object(E.jsx)("stop",{stopColor:"#000000",offset:"0%"}),Object(E.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),Object(E.jsxs)("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[Object(E.jsx)("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),Object(E.jsx)("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),Object(E.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(E.jsx)("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:Object(E.jsxs)("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[Object(E.jsx)("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),Object(E.jsx)("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),Object(E.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),Object(E.jsx)("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),Object(E.jsx)("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),Object(E.jsx)("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),Object(E.jsx)(u.i,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:Object(E.jsx)("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:Object(E.jsx)("img",{className:"img-fluid",src:R,alt:"Login Cover"})})}),Object(E.jsx)(u.i,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:Object(E.jsxs)(u.i,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[Object(E.jsx)(u.h,{tag:"h2",className:"fw-bold mb-1",children:"Welcome ! \ud83d\udc4b"}),Object(E.jsx)(u.g,{className:"mb-2",children:"Please sign-in to your account and start the adventure"}),Object(E.jsxs)(u.n,{className:"auth-login-form mt-2",onSubmit:w((function(e){if(Object.values(e).every((function(e){return e.length>0})))O.a.login(e.username,e.password).then((function(e){var s=Object(a.a)(Object(a.a)({},e.data.data),{},{accessToken:e.data.data.accessToken,refreshToken:e.data.data.refreshToken});t(Object(C.b)(s)),p.update(e.data.data.ability),h(Object(L.a)(s.groups[0].name)),Object(m.b)((function(e){return Object(E.jsx)(P,{t:e,role:s.role||"admin",name:s.fullName||s.username||"John Doe"})}))})).catch((function(e){return console.log(e)}));else for(var s in e)0===e[s].length&&k(s,{type:"manual"})})),children:[Object(E.jsxs)("div",{className:"mb-1",children:[Object(E.jsx)(u.r,{className:"form-label",for:"login-email",children:"Email"}),Object(E.jsx)(x.a,{id:"username",name:"username",control:g,render:function(e){var t=e.field;return Object(E.jsx)(u.o,Object(a.a)({autoFocus:!0,type:"email",placeholder:"john@example.com",invalid:z.username&&!0},t))}})]}),Object(E.jsxs)("div",{className:"mb-1",children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsx)(u.r,{className:"form-label",for:"login-password",children:"Password"}),Object(E.jsx)(i.b,{to:"/forgot-password",children:Object(E.jsx)("small",{children:"Forgot Password?"})})]}),Object(E.jsx)(x.a,{id:"password",name:"password",control:g,render:function(e){var t=e.field;return Object(E.jsx)(b.a,Object(a.a)({className:"input-group-merge",invalid:z.password&&!0},t))}})]}),Object(E.jsxs)("div",{className:"form-check mb-1",children:[Object(E.jsx)(u.o,{type:"checkbox",id:"remember-me"}),Object(E.jsx)(u.r,{className:"form-check-label",for:"remember-me",children:"Remember Me"})]}),Object(E.jsx)(u.b,{type:"submit",color:"primary",block:!0,children:"Sign in"})]}),Object(E.jsxs)("p",{className:"text-center mt-2",children:[Object(E.jsx)("span",{className:"me-25",children:"New on our platform?"}),Object(E.jsx)(i.b,{to:"/register",children:Object(E.jsx)("span",{children:"Create an account"})})]}),Object(E.jsx)("div",{className:"divider my-2",children:Object(E.jsx)("div",{className:"divider-text",children:"or"})}),Object(E.jsxs)("div",{className:"auth-footer-btn d-flex justify-content-center",children:[Object(E.jsx)(u.b,{color:"facebook",children:Object(E.jsx)(o.a,{size:14})}),Object(E.jsx)(u.b,{color:"twitter",children:Object(E.jsx)(l.a,{size:14})}),Object(E.jsx)(u.b,{color:"google",children:Object(E.jsx)(d.a,{size:14})}),Object(E.jsx)(u.b,{className:"me-0",color:"github",children:Object(E.jsx)(j.a,{size:14})})]})]})})]})})}}}]);
//# sourceMappingURL=0.26f9f6a7.chunk.js.map