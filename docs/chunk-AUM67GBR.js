import{a as T,b as V,d as w,j as O,k as Y,l as B,m as R,n as _,o as j,p as z,q as L,r as $,s as H,u as U,v as k,y as J}from"./chunk-LEEZS73E.js";import"./chunk-36AM222O.js";import"./chunk-7QQQ4XSS.js";import"./chunk-E66F5ZP3.js";import"./chunk-HC6MZPB3.js";import"./chunk-2SDYHWHI.js";import"./chunk-4PGTP63H.js";import"./chunk-FW7FQTSR.js";import"./chunk-FERD25SW.js";import"./chunk-HMTYJH34.js";import"./chunk-VFZRLGVJ.js";import"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-C5FLGXKQ.js";import"./chunk-Q7SJDITE.js";import"./chunk-MCRJI3T3.js";import"./chunk-MM5QLNJM.js";import"./chunk-NHOGAROI.js";import"./chunk-72KDLSWN.js";import{a as G}from"./chunk-BTEGK24M.js";import{a as K}from"./chunk-5WEJFKOJ.js";import{A as P,C as D,F as M,G as A,a as F,z as q}from"./chunk-BKWKOILY.js";import{Nb as o,Ob as S,Pb as v,Sb as g,Tb as I,U as u,Ub as N,V as p,Wa as h,X as c,Xb as E,Yb as x,Zb as C,_b as y,da as s,ia as t,ja as e,ka as l,pa as b,za as i}from"./chunk-C7Y544BQ.js";import"./chunk-2ERDAVOU.js";import"./chunk-S2UWYFTU.js";import"./chunk-7DVLVN3P.js";import"./chunk-G3CV3VGG.js";import"./chunk-PXSONQDE.js";import"./chunk-MS5FDQK3.js";import"./chunk-GCVURZBX.js";import"./chunk-BTS5SJXR.js";import"./chunk-JWIEPCRG.js";import"./chunk-LF5XB4YN.js";import{g as f}from"./chunk-OLRFWS6T.js";var me=(()=>{let a=class a{constructor(r,n){this.fb=r,this.authService=n,this.userId=null;let m=F(K.firebaseConfig);this.firestore=D(m),this.userProfileForm=this.fb.group({firstName:["",[o.required]],surname:["",[o.required]],gender:["",[o.required]],dob:["",[o.required]],phoneNumber:["",[o.required,o.pattern("^[0-9]+$")]],address:["",[o.required]],idNumber:["",[o.required,o.pattern("^[0-9]+$")]]})}ngOnInit(){this.authService.getCurrentUser().subscribe(r=>{r?this.userId=r.uid:alert("No user logged in")})}onSubmit(){return f(this,null,function*(){if(this.userProfileForm.valid&&this.userId)try{let r=q(this.firestore,"users",this.userId);(yield P(r)).exists()?yield A(r,{userProfile:this.userProfileForm.value}):yield M(r,{userProfile:this.userProfileForm.value}),alert("Profile saved successfully!")}catch(r){console.error("Error saving data:",r),alert("Error saving profile. Please try again.")}else alert("Please fill in all required fields.")})}};a.\u0275fac=function(n){return new(n||a)(p(x),p(G))},a.\u0275cmp=c({type:a,selectors:[["app-cleaner-profile"]],decls:48,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"ngSubmit","formGroup"],["position","floating"],["formControlName","firstName","type","text","required",""],["formControlName","surname","type","text","required",""],["formControlName","gender","required",""],["value","Male"],["value","Female"],["value","Other"],["formControlName","dob","displayFormat","MM/DD/YYYY","required",""],["formControlName","phoneNumber","type","tel","required",""],["formControlName","address","type","text","required",""],["formControlName","idNumber","type","text","required",""],["expand","full","type","submit",3,"disabled"]],template:function(n,m){n&1&&(t(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),i(3,"CleanerProfile"),e()()(),t(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),i(8,"Cleaner Profile"),e()()(),t(9,"form",4),b("ngSubmit",function(){return m.onSubmit()}),t(10,"ion-list")(11,"ion-item")(12,"ion-label",5),i(13,"First Name"),e(),l(14,"ion-input",6),e(),t(15,"ion-item")(16,"ion-label",5),i(17,"Surname"),e(),l(18,"ion-input",7),e(),t(19,"ion-item")(20,"ion-label",5),i(21,"Gender"),e(),t(22,"ion-select",8)(23,"ion-select-option",9),i(24,"Male"),e(),t(25,"ion-select-option",10),i(26,"Female"),e(),t(27,"ion-select-option",11),i(28,"Other"),e()()(),t(29,"ion-item")(30,"ion-label",5),i(31,"Date of Birth"),e(),l(32,"ion-datetime",12),e(),t(33,"ion-item")(34,"ion-label",5),i(35,"Phone Number"),e(),l(36,"ion-input",13),e(),t(37,"ion-item")(38,"ion-label",5),i(39,"Address"),e(),l(40,"ion-input",14),e(),t(41,"ion-item")(42,"ion-label",5),i(43,"ID Number"),e(),l(44,"ion-input",15),e()(),t(45,"ion-footer")(46,"ion-button",16),i(47,"Next"),e()()()()),n&2&&(s("translucent",!0),u(4),s("fullscreen",!0),u(5),s("formGroup",m.userProfileForm),u(37),s("disabled",!m.userProfileForm.valid))},dependencies:[J,w,O,Y,B,R,_,j,z,L,$,H,U,k,T,V,h,C,g,S,v,E,y,I,N],encapsulation:2});let d=a;return d})();export{me as CleanerProfilePage};
