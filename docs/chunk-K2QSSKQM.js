import{A as p,C as h,e as y,m as u,q as A,s as D,t as R,u as a,x as I}from"./chunk-MVKRSWIK.js";import{B as m,m as v,z as g}from"./chunk-AQGY4TKS.js";import{a as w,b as f,g as l}from"./chunk-OLRFWS6T.js";var N=(()=>{let i=class i{constructor(e,t){this.firestore=e,this.auth=t}addReview(e,t,n){return l(this,null,function*(){let o=this.auth.currentUser;if(!o)throw new Error("User not logged in");let s={userId:o.uid,userName:o.displayName||"Anonymous",recipient:"holder",serviceId:e,message:t,stars:n,createdAt:u.now()},r=a(this.firestore,"reviews");try{let c=yield R(r,s);return console.log("Review successfully added with ID:",c.id),c.id}catch(c){throw console.error("Error adding review:",c),new Error("Error adding review: "+c)}})}getServiceReviews(e){let t=a(this.firestore,"reviews"),n=p(t,h("serviceId","==",e));return D(n,{idField:"id"}).pipe(v(o=>o.map(s=>{var r;return f(w({},s),{createdAt:((r=s.createdAt)==null?void 0:r.toDate())||new Date})})))}getUserReviews(e){return l(this,null,function*(){console.log("Fetching reviews for userId:",e);let t=a(this.firestore,"reviews"),n=p(t,h("recipient","==",e)),o=yield I(n);return console.log("Found",o.size,"reviews"),o.docs.map(s=>{let r=s.data();return console.log("Review data:",r),f(w({id:s.id},r),{createdAt:r.createdAt instanceof u?r.createdAt.toDate():new Date})})})}};i.\u0275fac=function(t){return new(t||i)(m(A),m(y))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let d=i;return d})();export{N as a};
