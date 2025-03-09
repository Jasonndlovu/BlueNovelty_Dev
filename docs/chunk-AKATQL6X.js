import{a as E}from"./chunk-NT5FPG7D.js";import"./chunk-QVI53BAT.js";import"./chunk-WFPGVNJO.js";import"./chunk-KM57FXO5.js";import"./chunk-HC6MZPB3.js";import"./chunk-KBJHOUJC.js";import"./chunk-YMI2B6JE.js";import"./chunk-ES4PRHTQ.js";import"./chunk-FERD25SW.js";import"./chunk-HMTYJH34.js";import"./chunk-VFZRLGVJ.js";import"./chunk-5OMUW5VI.js";import"./chunk-OBXDPQ3V.js";import"./chunk-FUCWU6TH.js";import"./chunk-5BTC72NN.js";import"./chunk-MCRJI3T3.js";import"./chunk-MM5QLNJM.js";import"./chunk-XLMUYDS6.js";import"./chunk-72KDLSWN.js";import{a as v}from"./chunk-FFIFK57Q.js";import"./chunk-MVKRSWIK.js";import{Aa as h,Ba as P,Mb as x,S as d,T as p,Ub as b,V as f,Ya as M,aa as C,fa as e,fb as w,ga as t,ha as s,hb as O,ma as m,mc as S,nb as y,pc as k,wa as i,za as _}from"./chunk-AQGY4TKS.js";import"./chunk-A2PWH3LV.js";import"./chunk-7KGURMOZ.js";import"./chunk-2ERDAVOU.js";import"./chunk-S2UWYFTU.js";import"./chunk-7DVLVN3P.js";import"./chunk-G3CV3VGG.js";import"./chunk-PXSONQDE.js";import"./chunk-MS5FDQK3.js";import"./chunk-GCVURZBX.js";import"./chunk-4U6PRYVA.js";import"./chunk-BTS5SJXR.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import{g}from"./chunk-OLRFWS6T.js";var j=(()=>{let l=class l{constructor(o,a,n){this.authService=o,this.router=a,this.alertController=n,this.email="",this.password=""}loginGoogle(){return g(this,null,function*(){yield this.authService.loginWithGoogle(),this.router.navigate(["/users"])})}loginApple(){return g(this,null,function*(){yield this.authService.loginWithApple(),this.router.navigate(["/users"])})}login(){return g(this,null,function*(){try{yield this.authService.loginWithEmail(this.email,this.password)}catch(o){console.error("Login failed:",o)}})}forgotPassword(){return g(this,null,function*(){if(!this.email){this.showAlert("Error","Please enter your email address.");return}try{yield this.authService.sendPasswordResetEmail(this.email),this.showAlert("Success","Password reset email sent. Please check your inbox.")}catch{this.showAlert("Error","Failed to send password reset email. Please check your email address and try again.")}})}showAlert(o,a){return g(this,null,function*(){yield(yield this.alertController.create({header:o,message:a,buttons:["OK"]})).present()})}};l.\u0275fac=function(a){return new(a||l)(p(v),p(M),p(E))},l.\u0275cmp=f({type:l,selectors:[["app-login"]],decls:34,vars:3,consts:[[1,"signup-page",3,"fullscreen"],[1,"signup-container"],["label","Email Address","labelPlacement","floating","fill","outline","type","email",3,"ngModelChange","ngModel"],["label","Password","labelPlacement","floating","fill","outline","type","password",3,"ngModelChange","ngModel"],[1,"ion-justify-content-center"],["routerLink","/signup"],["expand","block","color","dark",3,"click"],[1,"forgot-password"],[3,"click"],["src","../../../../public/icons/google-logo-search-new-svgrepo-com.svg","alt","Custom Icon"],[1,"or-login"],[1,"social-login"],["expand","full",3,"click"],["name","logo-google","slot","start"],["src","assets/icon/google-logo-search-new-svgrepo-com.svg","alt","Custom Icon"],["expand","full"],["name","logo-facebook","slot","start"],["name","logo-apple","slot","start"]],template:function(a,n){a&1&&(e(0,"ion-content",0)(1,"div",1)(2,"h1"),i(3,"Welcome back! Glad to see you, Again!"),t(),e(4,"ion-textarea",2),P("ngModelChange",function(r){return h(n.email,r)||(n.email=r),r}),t(),e(5,"ion-textarea",3),P("ngModelChange",function(r){return h(n.password,r)||(n.password=r),r}),t(),e(6,"p",4),i(7,"Forgot Password? "),e(8,"a",5),i(9,"Sign Up Now"),t()(),e(10,"ion-button",6),m("click",function(){return n.login()}),i(11,"Login"),t(),e(12,"p",7)(13,"a",8),m("click",function(){return n.forgotPassword()}),i(14,"Forgot Password?"),t()(),s(15,"img",9),e(16,"p",10),i(17,"Or Login with"),t(),e(18,"div",11)(19,"ion-button",12),m("click",function(){return n.loginGoogle()}),s(20,"ion-icon",13),e(21,"ion-content"),s(22,"img",14),t(),i(23," Login with Google "),t(),e(24,"ion-button",15),s(25,"ion-icon",16),i(26," Login with Facebook "),t(),e(27,"ion-button",12),m("click",function(){return n.loginApple()}),s(28,"ion-icon",17),i(29," Login with Apple "),t()(),e(30,"p",4),i(31,"Don't have an account? "),e(32,"a",5),i(33,"Sign Up Now"),t()()()()),a&2&&(C("fullscreen",!0),d(4),_("ngModel",n.email),d(),_("ngModel",n.password))},dependencies:[S,k,x,b,y,w,O],styles:["ion-textarea-md-h[_ngcontent-%COMP%]{--background: #f4f4f4;--color: #333;--placeholder-color: #999;--placeholder-opacity: 1;--border-color: #6200ea}.ion-valid.sc-ion-textarea-md-h[_ngcontent-%COMP%], .ion-valid.sc-ion-textarea-ios-h[_ngcontent-%COMP%]{--highlight-color: #015EEA}.signup-page[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]{margin-top:15%;display:flex;flex-direction:column;align-items:center;text-align:center}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin-bottom:1rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{width:80%;margin-bottom:1rem;text-align:left;font-size:1rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:100px;width:80%;font-size:.8rem;height:50px}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .or-login[_ngcontent-%COMP%]{margin:1rem 0;font-size:.9rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]{display:flex;gap:1rem;margin-bottom:1rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   .social-login[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1rem 0}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-left:.5rem;font-size:.9rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.9rem;margin-top:.5rem}.signup-page[_ngcontent-%COMP%]   .signup-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-weight:700}"]});let u=l;return u})();export{j as LoginPage};
