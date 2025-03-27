import{D as x,H as m,J as B,e as I,k as P}from"./chunk-L7HMGOTT.js";import{b as C}from"./chunk-VFZRLGVJ.js";import{c as N}from"./chunk-Q7SJDITE.js";import{b as f}from"./chunk-MM5QLNJM.js";import{b as O,g as d,h as A,k as L}from"./chunk-NHOGAROI.js";import{b as D,f as b}from"./chunk-72KDLSWN.js";import{g as u}from"./chunk-OLRFWS6T.js";var V=":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",j=V,F=":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}",H=F,Q=(()=>{let g=class{constructor(s){O(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>e==null?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{var e,a,n,t,o;let{datetimeEl:c,datetimePresentation:p}=this;if(!c)return;let{value:_,locale:r,formatOptions:i,hourCycle:$,preferWheel:z,multiple:M,titleSelectedDatesFormatter:v}=c,h=this.getParsedDateValues(_),y=P(h.length>0?h:[B()]);if(!y)return;let l=y[0],k=I(r,$);switch(this.dateText=this.timeText=void 0,p){case"date-time":case"time-date":let T=m(r,l,(e=i==null?void 0:i.date)!==null&&e!==void 0?e:{month:"short",day:"numeric",year:"numeric"}),w=x(r,l,k,i==null?void 0:i.time);z?this.dateText=`${T} ${w}`:(this.dateText=T,this.timeText=w);break;case"date":if(M&&h.length!==1){let E=`${h.length} days`;if(v!==void 0)try{E=v(h)}catch(S){f("Exception in provided `titleSelectedDatesFormatter`: ",S)}this.dateText=E}else this.dateText=m(r,l,(a=i==null?void 0:i.date)!==null&&a!==void 0?a:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=x(r,l,k,i==null?void 0:i.time);break;case"month-year":this.dateText=m(r,l,(n=i==null?void 0:i.date)!==null&&n!==void 0?n:{month:"long",year:"numeric"});break;case"month":this.dateText=m(r,l,(t=i==null?void 0:i.time)!==null&&t!==void 0?t:{month:"long"});break;case"year":this.dateText=m(r,l,(o=i==null?void 0:i.time)!==null&&o!==void 0?o:{year:"numeric"});break}},this.waitForDatetimeChanges=()=>u(this,null,function*(){let{datetimeEl:e}=this;return e?new Promise(a=>{b(e,"ionRender",a,{once:!0})}):Promise.resolve()}),this.handleDateClick=e=>u(this,null,function*(){let{datetimeEl:a,datetimePresentation:n}=this;if(!a)return;let t=!1;switch(n){case"date-time":case"time-date":let o=a.presentation!=="date";!a.preferWheel&&o&&(a.presentation="date",t=!0);break}this.selectedButton="date",this.presentOverlay(e,t,this.dateTargetEl)}),this.handleTimeClick=e=>{let{datetimeEl:a,datetimePresentation:n}=this;if(!a)return;let t=!1;switch(n){case"date-time":case"time-date":a.presentation!=="time"&&(a.presentation="time",t=!0);break}this.selectedButton="time",this.presentOverlay(e,t,this.timeTargetEl)},this.presentOverlay=(e,a,n)=>u(this,null,function*(){let{overlayEl:t}=this;t&&(t.tagName==="ION-POPOVER"?(a&&(yield this.waitForDatetimeChanges()),t.present(Object.assign(Object.assign({},e),{detail:{ionShadowTarget:n}}))):t.present())}),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){return u(this,null,function*(){let{datetime:s}=this;if(!s){f("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el);return}let e=this.datetimeEl=document.getElementById(s);if(!e){f(`No ion-datetime instance found for ID '${s}'.`,this.el);return}if(e.tagName!=="ION-DATETIME"){f(`Expected an ion-datetime instance for ID '${s}' but received '${e.tagName.toLowerCase()}' instead.`,e);return}new IntersectionObserver(t=>{let o=t[0];this.datetimeActive=o.isIntersecting},{threshold:.01}).observe(e);let n=this.overlayEl=e.closest("ion-modal, ion-popover");n&&n.classList.add("ion-datetime-button-overlay"),D(e,()=>{let t=this.datetimePresentation=e.presentation||"date-time";switch(this.setDateTimeText(),b(e,"ionValueChange",this.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":this.selectedButton="date";break;case"time-date":case"time":this.selectedButton="time";break}})})}render(){let{color:s,dateText:e,timeText:a,selectedButton:n,datetimeActive:t,disabled:o}=this,c=N(this);return d(A,{key:"26e606af6f067a5774db37ed41387ffebb941777",class:C(s,{[c]:!0,[`${n}-active`]:t,"datetime-button-disabled":o})},e&&d("button",{key:"6b7aa66a15b4a6d89d411e40586de28a2ac9f343",class:"ion-activatable",id:"date-button","aria-expanded":t?"true":"false",onClick:this.handleDateClick,disabled:o,part:"native",ref:p=>this.dateTargetEl=p},d("slot",{key:"d42f34fd167be34386319e7ea788c2ab03c90b87",name:"date-target"},e),c==="md"&&d("ion-ripple-effect",{key:"47dd34f3c2799064cac7a5fe25440ecc043950f0"})),a&&d("button",{key:"d77424a20fae320654774c7bfc8a8e2369d3afe3",class:"ion-activatable",id:"time-button","aria-expanded":t?"true":"false",onClick:this.handleTimeClick,disabled:o,part:"native",ref:p=>this.timeTargetEl=p},d("slot",{key:"ac088a78141bb53f2efd48dd7745f8954c92378b",name:"time-target"},a),c==="md"&&d("ion-ripple-effect",{key:"b3a58ddfd28b9396e2518ffd62a045ec13d8b9d0"})))}get el(){return L(this)}};return g.style={ios:j,md:H},g})();export{Q as ion_datetime_button};
