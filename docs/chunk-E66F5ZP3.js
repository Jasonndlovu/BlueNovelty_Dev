import{a as m}from"./chunk-FERD25SW.js";import{e as $}from"./chunk-C5FLGXKQ.js";import{c as b}from"./chunk-Q7SJDITE.js";import{b as A}from"./chunk-MCRJI3T3.js";import{a as I}from"./chunk-MM5QLNJM.js";import{b as v}from"./chunk-72KDLSWN.js";import{g as i}from"./chunk-OLRFWS6T.js";var T=t=>m().duration(t?400:300),q=t=>{let o,a,d=t.width+8,c=m(),p=m();t.isEndSide?(o=d+"px",a="0px"):(o=-d+"px",a="0px"),c.addElement(t.menuInnerEl).fromTo("transform",`translateX(${o})`,`translateX(${a})`);let w=b(t)==="ios",x=w?.2:.25;return p.addElement(t.backdropEl).fromTo("opacity",.01,x),T(w).addAnimation([c,p])},U=t=>{let o,a,d=b(t),c=t.width;t.isEndSide?(o=-c+"px",a=c+"px"):(o=c+"px",a=-c+"px");let p=m().addElement(t.menuInnerEl).fromTo("transform",`translateX(${a})`,"translateX(0px)"),h=m().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${o})`),w=m().addElement(t.backdropEl).fromTo("opacity",.01,.32);return T(d==="ios").addAnimation([p,h,w])},D=t=>{let o=b(t),a=t.width*(t.isEndSide?-1:1)+"px",d=m().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${a})`);return T(o==="ios").addAnimation(d)},G=()=>{let t=new Map,o=[],a=n=>i(void 0,null,function*(){let e=yield u(n,!0);return e?e.open():!1}),d=n=>i(void 0,null,function*(){let e=yield n!==void 0?u(n,!0):E();return e!==void 0?e.close():!1}),c=n=>i(void 0,null,function*(){let e=yield u(n,!0);return e?e.toggle():!1}),p=(n,e)=>i(void 0,null,function*(){let s=yield u(e);return s&&(s.disabled=!n),s}),h=(n,e)=>i(void 0,null,function*(){let s=yield u(e);return s&&(s.swipeGesture=n),s}),w=n=>i(void 0,null,function*(){if(n!=null){let e=yield u(n);return e!==void 0&&e.isOpen()}else return(yield E())!==void 0}),x=n=>i(void 0,null,function*(){let e=yield u(n);return e?!e.disabled:!1}),u=(n,e=!1)=>i(void 0,null,function*(){if(yield y(),n==="start"||n==="end"){let r=o.filter(f=>f.side===n&&!f.disabled);if(r.length>=1)return r.length>1&&e&&I(`menuController queried for a menu on the "${n}" side, but ${r.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,r.map(f=>f.el)),r[0].el;let l=o.filter(f=>f.side===n);if(l.length>=1)return l.length>1&&e&&I(`menuController queried for a menu on the "${n}" side, but ${l.length} menus were found. The first menu reference will be used. If this is not the behavior you want then pass the ID of the menu instead of its side.`,l.map(f=>f.el)),l[0].el}else if(n!=null)return X(r=>r.menuId===n);let s=X(r=>!r.disabled);return s||(o.length>0?o[0].el:void 0)}),E=()=>i(void 0,null,function*(){return yield y(),O()}),M=()=>i(void 0,null,function*(){return yield y(),P()}),R=()=>i(void 0,null,function*(){return yield y(),_()}),g=(n,e)=>{t.set(n,e)},C=n=>{o.indexOf(n)<0&&o.push(n)},S=n=>{let e=o.indexOf(n);e>-1&&o.splice(e,1)},k=(n,e,s,r)=>i(void 0,null,function*(){if(_())return!1;if(e){let l=yield E();l&&n.el!==l&&(yield l.setOpen(!1,!1))}return n._setOpen(e,s,r)}),B=(n,e)=>{let s=t.get(n);if(!s)throw new Error("animation not registered");return s(e)},O=()=>X(n=>n._isOpen),P=()=>o.map(n=>n.el),_=()=>o.some(n=>n.isAnimating),X=n=>{let e=o.find(n);if(e!==void 0)return e.el},y=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(n=>new Promise(e=>v(n,e))));return g("reveal",D),g("push",U),g("overlay",q),A===null||A===void 0||A.addEventListener("ionBackButton",n=>{let e=O();e&&n.detail.register($,()=>e.close())}),{registerAnimation:g,get:u,getMenus:M,getOpen:E,isEnabled:x,swipeGesture:h,isAnimating:R,isOpen:w,enable:p,toggle:c,close:d,open:a,_getOpenSync:O,_createAnimation:B,_register:C,_unregister:S,_setOpen:k}},z=G();export{z as a};
