import{a as j}from"./chunk-FSZOH6NM.js";import"./chunk-BTEGK24M.js";import"./chunk-BKWKOILY.js";import{F as N,G as B,H,K as V,b as E,g as T,j as U,t as k,u as w,v as z,w as L,x as F}from"./chunk-FYZ4SEYQ.js";import{$ as _,Aa as x,K as h,L as C,Ra as I,Sa as v,T as u,U as a,V as p,Wa as y,X as M,Zb as b,ab as S,da as c,ia as i,ja as o,ka as g,oa as O,pa as P,qa as f,za as l}from"./chunk-C7Y544BQ.js";import"./chunk-A2PWH3LV.js";import"./chunk-7KGURMOZ.js";import"./chunk-2ERDAVOU.js";import"./chunk-S2UWYFTU.js";import"./chunk-7DVLVN3P.js";import"./chunk-G3CV3VGG.js";import"./chunk-PXSONQDE.js";import"./chunk-MS5FDQK3.js";import"./chunk-GCVURZBX.js";import"./chunk-4U6PRYVA.js";import"./chunk-BTS5SJXR.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{g as d}from"./chunk-OLRFWS6T.js";function A(e,t){if(e&1){let r=O();i(0,"ion-item",8),P("click",function(){let s=h(r).$implicit,m=f(2);return C(m.openChat(s))}),i(1,"ion-avatar",1),g(2,"img",9),o(),i(3,"ion-label")(4,"h2"),l(5),o(),i(6,"p"),l(7,"Tap to chat"),o()()()}if(e&2){let r=t.$implicit;c("detail",!0),a(2),c("src",(r==null?null:r.photo)||"assets/default-avatar.png",u),a(3),x(r==null?null:r.name)}}function D(e,t){if(e&1&&(i(0,"ion-list")(1,"ion-list-header",6),l(2," RECENT CHATS "),o(),_(3,A,8,3,"ion-item",7),o()),e&2){let r=f();a(3),c("ngForOf",r.chatUsers)}}function R(e,t){e&1&&(i(0,"ion-text",10),l(1,` No chats yet. Start a conversation!
`),o())}var X=(()=>{let t=class t{constructor(n,s){this.router=n,this.chatService=s,this.chatUsers=[],this.isLoading=!0}ngOnInit(){return d(this,null,function*(){this.loadChatUsers()})}loadChatUsers(){return d(this,null,function*(){try{this.isLoading=!0,this.chatUsers=yield this.chatService.getUsersChattedWith(),console.log(this.isLoading),console.log(this.chatUsers)}catch(n){console.error("Error loading chat users: ",n)}finally{this.isLoading=!1}})}openChat(n){this.router.navigate(["/","home","chats",n==null?void 0:n.id])}};t.\u0275fac=function(s){return new(s||t)(p(S),p(j))},t.\u0275cmp=M({type:t,selectors:[["app-messenger"]],decls:10,vars:2,consts:[["color","dark"],["slot","start"],["slot","end"],["slot","icon-only","name","information-circle-outline"],[4,"ngIf"],["class","ion-padding",4,"ngIf"],["color","light",1,"ion-padding-bottom"],[3,"detail","click",4,"ngFor","ngForOf"],[3,"click","detail"],[3,"src"],[1,"ion-padding"]],template:function(s,m){s&1&&(i(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),g(3,"ion-back-button"),o(),i(4,"ion-title"),l(5,"Messenger"),o(),i(6,"ion-buttons",2),g(7,"ion-icon",3),o()()(),_(8,D,4,1,"ion-list",4)(9,R,2,0,"ion-text",5)),s&2&&(a(8),c("ngIf",m.chatUsers.length>0),a(),c("ngIf",m.chatUsers.length===0))},dependencies:[F,N,z,T,w,L,E,U,k,B,H,y,I,v,b,V],styles:[".messenger[_ngcontent-%COMP%]{--background: #fff}.messenger[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center;font-weight:700}.messenger[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{font-size:40px;color:#ccc}.messenger[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{margin-left:auto;font-size:.85rem;color:#999}.messenger[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:18px;color:#666}.messenger[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:#000}.messenger[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:#666}.messenger[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{text-align:center;font-size:.85rem;color:#999;padding:12px 0}"]});let e=t;return e})();export{X as MessengerPage};
