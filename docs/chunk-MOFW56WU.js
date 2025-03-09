import{a as E}from"./chunk-FFIFK57Q.js";import{A as l,C as x,q as v,s as C,t as S,u as f,v as j,w as q,x as R,z as U}from"./chunk-MVKRSWIK.js";import{B as g,j as w,l as p,z as I}from"./chunk-AQGY4TKS.js";import{a as D,g as d}from"./chunk-OLRFWS6T.js";var k=(()=>{let r=class r{constructor(e,t){this.firestore=e,this.authService=t}sendMessage(e,t,n,o,s){return d(this,null,function*(){let a=yield p(this.authService.getCurrentUser());if(!a){console.error("User not authenticated");return}let i=this.generateChatId(a.uid,o),c=f(this.firestore,`chats/${i}/messages`);yield S(c,{text:e,senderId:t,sender:a.displayName||"Anonymous",senderImage:n||"assets/default-avatar.png",receiverId:o,receiverImage:s||"assets/default-avatar.png",timestamp:new Date,participants:[a.uid,t,o]})})}getMessages(e,t){if(console.log(e),console.log(t),!e||!t)return console.warn("Current user ID or chat partner ID is missing"),w([]);let n=this.generateChatId(e,t),o=f(this.firestore,`chats/${n}/messages`),s=l(o,U("timestamp"));return C(s)}generateChatId(e,t){return[e,t].sort().join("_")}getUsersChattedWith(){return d(this,null,function*(){let e=yield p(this.authService.getCurrentUser());if(!e)return console.log("No user found!"),[];let t=e.uid;console.log("Current User ID:",t);let n=f(this.firestore,"chats"),o=l(n,x("participants","array-contains",t));try{console.log("Running query to fetch chats...");let s=yield R(o);if(s.empty)return console.log("No chats found!"),[];let a=new Set;s.forEach(c=>{(c.data().participants||[]).forEach(y=>{y!==t&&a.add(y)})});let i=[];for(let c of a){let m=j(this.firestore,"users",c),u=yield q(m);u.exists()&&i.push(D({id:u.id},u.data()))}return console.log("Users found:",i),i}catch(s){return console.error("Error fetching chats:",s),[]}})}};r.\u0275fac=function(t){return new(t||r)(g(v),g(E))},r.\u0275prov=I({token:r,factory:r.\u0275fac,providedIn:"root"});let h=r;return h})();export{k as a};
