import{h as P,j as R,u as V,w as N,y as z}from"./chunk-BKWKOILY.js";import{G as B,H as D,g as L,j as M,q as T,t as k,u as w,v as O,w as j,z as A}from"./chunk-FYZ4SEYQ.js";import{$ as _,Aa as d,Ia as S,Ja as U,K as f,L as h,Ra as y,T as I,U as m,Ua as C,V as c,Wa as F,X as v,Zb as $,ab as E,da as u,ia as i,ja as n,ka as p,oa as g,pa as b,qa as x,za as l}from"./chunk-C7Y544BQ.js";import"./chunk-A2PWH3LV.js";import"./chunk-7KGURMOZ.js";import"./chunk-2ERDAVOU.js";import"./chunk-S2UWYFTU.js";import"./chunk-7DVLVN3P.js";import"./chunk-G3CV3VGG.js";import"./chunk-PXSONQDE.js";import"./chunk-MS5FDQK3.js";import"./chunk-GCVURZBX.js";import"./chunk-4U6PRYVA.js";import"./chunk-BTS5SJXR.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-OLRFWS6T.js";function G(o,e){if(o&1){let s=g();i(0,"ion-item",2),b("click",function(){let t=f(s).$implicit,a=x();return h(a.startChat(t))}),i(1,"ion-avatar",0),p(2,"img",3),n(),i(3,"ion-label")(4,"h2"),l(5),n(),i(6,"p"),l(7),n()()()}if(o&2){let s=e.$implicit;m(2),u("src",s.photoURL||"assets/default-avatar.png",I),m(3),d(s.displayName),m(2),d(s.email)}}var nt=(()=>{let e=class e{constructor(r,t,a){this.auth=r,this.firestore=t,this.router=a,this.currentUser=null;let H=z(t,"users");this.users$=N(H,{idField:"id"}),R(this.auth).subscribe(q=>{this.currentUser=q})}ngOnInit(){}startChat(r){this.currentUser&&this.router.navigate([`/chat/${this.currentUser.uid}-${r.uid}`])}};e.\u0275fac=function(t){return new(t||e)(c(P),c(V),c(E))},e.\u0275cmp=v({type:e,selectors:[["app-user-list"]],decls:10,vars:3,consts:[["slot","start"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[3,"src"]],template:function(t,a){t&1&&(i(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),p(3,"ion-menu-button"),n(),i(4,"ion-title"),l(5,"Select a User"),n()()(),i(6,"ion-content")(7,"ion-list"),_(8,G,8,3,"ion-item",1),S(9,"async"),n()()),t&2&&(m(8),u("ngForOf",U(9,1,a.users$)))},dependencies:[M,O,L,w,j,T,k,B,D,F,y,C,$,A],encapsulation:2});let o=e;return o})();export{nt as UsersListPage};
