import{$a as ft,Ea as y,Jb as z,Kb as rt,Lb as p,Ma as v,Mb as X,Na as ot,Nb as V,Sa as g,Ua as A,Va as F,W as ct,Xa as $,Ya as D,Za as b,_ as Y,_a as ut,_b as _t,ab as Q,ba as G,bb as Z,bc as J,cb as m,db as x,eb as w,fb as L,gb as j,ha as C,hb as H,ia as T,ib as d,ja as N,jb as it,kb as B,lb as at,mb as st,ob as q,qb as K,sb as U,ta as r,tb as mt,vb as E,wb as P,xb as ht,ya as pt}from"./chunk-TMVVO5PM.js";import{a as f,b as S,c as dt}from"./chunk-ACKELEN3.js";function Ft(e,i){e&1&&(N(),m(0,"svg",0),w(1,"path",2),x())}function Dt(e,i){e&1&&(N(),m(0,"svg",0),w(1,"path",3),x())}function Et(e,i){e&1&&(N(),m(0,"svg",0),w(1,"path",4),x())}function Mt(e,i){e&1&&(N(),m(0,"svg",1),w(1,"path",5)(2,"path",6),x())}function Rt(e,i){e&1&&w(0,"div",2)}var Pt=["toastRef"],yt=[[["","loading-icon",""]],[["","success-icon",""]],[["","error-icon",""]],[["","warning-icon",""]],[["","info-icon",""]]],vt=["[loading-icon]","[success-icon]","[error-icon]","[warning-icon]","[info-icon]"];function Vt(e,i){if(e&1){let t=j();m(0,"button",3),H("click",function(){C(t);let o=d();return T(o.onCloseButtonClick())}),N(),m(1,"svg",4),w(2,"line",5)(3,"line",6),x()()}if(e&2){let t,n=d();D(n.cn(n.classes().closeButton,(t=n.toast().classes)==null?null:t.closeButton)),A("data-disabled",n.disabled())}}function Ot(e,i){e&1&&L(0)}function Nt(e,i){if(e&1&&(g(0,Ot,1,0,"ng-container",7),E(1,"asComponent")),e&2){let t=d();F("ngComponentOutlet",P(1,2,t.toast().component))("ngComponentOutletInputs",t.toast().componentProps)}}function At(e,i){e&1&&B(0)}function jt(e,i){e&1&&L(0)}function Ht(e,i){if(e&1&&(g(0,jt,1,0,"ng-container",7),E(1,"asComponent")),e&2){let t=d(3);F("ngComponentOutlet",P(1,2,t.toast().icon))("ngComponentOutletInputs",t.toast().componentProps)}}function zt(e,i){e&1&&B(0,1)}function Yt(e,i){e&1&&B(0,2)}function $t(e,i){e&1&&B(0,3)}function Lt(e,i){e&1&&B(0,4)}function qt(e,i){if(e&1&&g(0,zt,1,0)(1,Yt,1,0)(2,$t,1,0)(3,Lt,1,0),e&2){let t,n=d(3);b((t=n.toastType())==="success"?0:t==="error"?1:t==="warning"?2:t==="info"?3:-1)}}function Kt(e,i){if(e&1&&(m(0,"div",8),g(1,At,1,0)(2,Ht,2,4,"ng-container")(3,qt,4,1),x()),e&2){let t=d(2);y(),b(t.toastType()==="loading"&&!t.toast().icon?1:-1),y(),b(t.toast().icon?2:3)}}function Ut(e,i){if(e&1&&q(0),e&2){let t=d(3);K(" ",t.toast().title," ")}}function Wt(e,i){e&1&&L(0)}function Gt(e,i){if(e&1&&(g(0,Wt,1,0,"ng-container",7),E(1,"asComponent")),e&2){let t=d(),n=d(2);F("ngComponentOutlet",P(1,2,t))("ngComponentOutletInputs",n.toast().componentProps)}}function Qt(e,i){if(e&1&&(m(0,"div",14),g(1,Ut,1,1),E(2,"isString"),g(3,Gt,2,4,"ng-container"),x()),e&2){let t,n=d(2);D(n.cn(n.classes().title,(t=n.toast().classes)==null?null:t.title)),y(),b(P(2,3,i)?1:3)}}function Zt(e,i){if(e&1&&q(0),e&2){let t=d(3);K(" ",t.toast().description," ")}}function Xt(e,i){e&1&&L(0)}function Jt(e,i){if(e&1&&(g(0,Xt,1,0,"ng-container",7),E(1,"asComponent")),e&2){let t=d(),n=d(2);F("ngComponentOutlet",P(1,2,t))("ngComponentOutletInputs",n.toast().componentProps)}}function te(e,i){if(e&1&&(m(0,"div",15),g(1,Zt,1,1),E(2,"isString"),g(3,Jt,2,4,"ng-container"),x()),e&2){let t,n=d(2);D(n.cn(n.descriptionClass(),n.toastDescriptionClass(),n.classes().description,(t=n.toast().classes)==null?null:t.description)),y(),b(P(2,3,i)?1:3)}}function ee(e,i){if(e&1){let t=j();m(0,"button",16),H("click",function(){C(t);let o=d(2);return T(o.onCancelClick())}),q(1),x()}if(e&2){let t,n,o=d(2);$((t=o.cancelButtonStyle())!==null&&t!==void 0?t:o.toast().cancelButtonStyle),D(o.cn(o.classes().cancelButton,(n=o.toast().classes)==null?null:n.cancelButton)),y(),K(" ",i.label," ")}}function ne(e,i){if(e&1){let t=j();m(0,"button",17),H("click",function(o){C(t);let l=d(2);return T(l.onActionClick(o))}),q(1),x()}if(e&2){let t,n,o=d(2);$((t=o.actionButtonStyle())!==null&&t!==void 0?t:o.toast().actionButtonStyle),D(o.cn(o.classes().actionButton,(n=o.toast().classes)==null?null:n.actionButton)),y(),K(" ",i.label," ")}}function oe(e,i){if(e&1&&(g(0,Kt,4,2,"div",8),m(1,"div",9),g(2,Qt,4,5,"div",10)(3,te,4,5,"div",11),x(),g(4,ee,2,5,"button",12)(5,ne,2,5,"button",13)),e&2){let t,n,o,l,u=d();b(u.toastType()!=="default"||u.toast().icon||u.toast().promise?0:-1),y(2),b((t=u.toast().title)?2:-1,t),y(),b((n=u.toast().description)?3:-1,n),y(),b((o=u.toast().cancel)?4:-1,o),y(),b((l=u.toast().action)?5:-1,l)}}var ie=["listRef"],ae=(e,i)=>i.id,se=()=>({});function re(e,i){if(e&1&&w(0,"ngx-sonner-loader",6),e&2){let t=d().$implicit;F("isVisible",t.type==="loading")}}function le(e,i){e&1&&w(0,"ngx-sonner-icon",7)}function de(e,i){e&1&&w(0,"ngx-sonner-icon",8)}function ce(e,i){e&1&&w(0,"ngx-sonner-icon",9)}function pe(e,i){e&1&&w(0,"ngx-sonner-icon",10)}function ue(e,i){if(e&1&&(m(0,"ngx-sonner-toast",5),B(1,0,["loading-icon",""],re,1,1),B(3,1,["success-icon",""],le,1,0),B(5,2,["error-icon",""],de,1,0),B(7,3,["warning-icon",""],ce,1,0),B(9,4,["info-icon",""],pe,1,0),x()),e&2){let t,n,o,l,u,k=i.$implicit,W=i.$index,_=d(3);D((t=_.toastOptions().class)!==null&&t!==void 0?t:""),F("index",W)("toast",k)("invert",_.invert())("visibleToasts",_.visibleToasts())("closeButton",_.closeButton())("interacting",_.interacting())("position",_.position())("expandByDefault",_.expand())("expanded",_.expanded())("actionButtonStyle",_.toastOptions().actionButtonStyle)("cancelButtonStyle",_.toastOptions().cancelButtonStyle)("descriptionClass",(n=_.toastOptions().descriptionClass)!==null&&n!==void 0?n:"")("classes",(o=_.toastOptions().classes)!==null&&o!==void 0?o:mt(17,se))("duration",(l=_.toastOptions().duration)!==null&&l!==void 0?l:_.duration())("unstyled",(u=_.toastOptions().unstyled)!==null&&u!==void 0?u:!1)}}function fe(e,i){if(e&1){let t=j();m(0,"ol",3,0),H("blur",function(o){C(t);let l=d(2);return T(l.handleBlur(o))})("focus",function(o){C(t);let l=d(2);return T(l.handleFocus(o))})("mouseenter",function(){C(t);let o=d(2);return T(o.expanded.set(!0))})("mousemove",function(){C(t);let o=d(2);return T(o.expanded.set(!0))})("mouseleave",function(){C(t);let o=d(2);return T(o.handleMouseLeave())})("pointerdown",function(o){C(t);let l=d(2);return T(l.handlePointerDown(o))})("pointerup",function(){C(t);let o=d(2);return T(o.interacting.set(!1))}),Q(2,ue,11,18,"ngx-sonner-toast",4,ae),E(4,"toastFilter"),x()}if(e&2){let t=i.$implicit,n=i.$index,o=d(2);$(o.toasterStyles()),D(o._class()),F("tabIndex",-1),A("data-theme",o.actualTheme())("data-rich-colors",o.richColors())("dir",o.dir()==="auto"?o.getDocumentDirection():o.dir())("data-y-position",t.split("-")[0])("data-x-position",t.split("-")[1]),y(2),Z(ht(4,10,o.toasts(),n,t))}}function me(e,i){if(e&1&&(m(0,"section",1),Q(1,fe,5,14,"ol",2,ft),x()),e&2){let t=d();F("tabIndex",-1),A("aria-label","Notifications "+t.hotKeyLabel()),y(),Z(t.possiblePositions())}}var gt=0;function he(){let e=v([]),i=v([]);function t(s){e.update(a=>[s,...a])}function n(s){let lt=s,{message:a}=lt,c=dt(lt,["message"]),M=typeof s?.id=="number"||s.id&&s.id?.length>0?s.id:gt++,R=s.dismissible??!0,I=s.type??"default";return e().find(et=>et.id===M)?e.update(et=>et.map(nt=>nt.id===M?S(f(f({},nt),s),{id:M,title:a,dismissible:R,type:I,updated:!0}):S(f({},nt),{updated:!1}))):t(S(f({},c),{id:M,title:a,dismissible:R,type:I})),M}function o(s){if(s===void 0){e.set([]);return}return e.update(a=>a.filter(c=>c.id!==s)),s}function l(s,a){return n(S(f({},a),{type:"default",message:s}))}function u(s,a){return n(S(f({},a),{type:"error",message:s}))}function k(s,a){return n(S(f({},a),{type:"success",message:s}))}function W(s,a){return n(S(f({},a),{type:"info",message:s}))}function _(s,a){return n(S(f({},a),{type:"warning",message:s}))}function Ct(s,a){return n(S(f({},a),{type:"loading",message:s}))}function Tt(s,a){if(!a)return;let c;a.loading!==void 0&&(c=n(S(f({},a),{promise:s,type:"loading",message:a.loading})));let M=s instanceof Promise?s:s(),R=c!==void 0;return M.then(I=>{if(I&&typeof I.ok=="boolean"&&!I.ok){R=!1;let O=typeof a.error=="function"?a.error(`HTTP error! status: ${I.status}`):a.error;n({id:c,type:"error",message:O})}else if(a.success!==void 0){R=!1;let O=typeof a.success=="function"?a.success(I):a.success;n({id:c,type:"success",message:O})}}).catch(I=>{if(a.error!==void 0){R=!1;let O=typeof a.error=="function"?a.error(I):a.error;n({id:c,type:"error",message:O})}}).finally(()=>{R&&(o(c),c=void 0),a.finally?.()}),c}function wt(s,a){let c=a?.id??gt++;return n(f({component:s,id:c},a)),c}function St(s){i.update(a=>a.filter(c=>c.toastId!==s))}function Bt(s){i.update(a=>[s,...a].sort(kt))}let kt=(s,a)=>e().findIndex(c=>c.id===s.toastId)-e().findIndex(c=>c.id===a.toastId);function It(){e.set([]),i.set([])}return{create:n,addToast:t,dismiss:o,message:l,error:u,success:k,info:W,warning:_,loading:Ct,promise:Tt,custom:wt,removeHeight:St,addHeight:Bt,reset:It,toasts:e.asReadonly(),heights:i.asReadonly()}}var h=he();function _e(e,i){return h.create(f({message:e},i))}var ge=_e,Ne=Object.assign(ge,{success:h.success,info:h.info,warning:h.warning,error:h.error,custom:h.custom,message:h.message,promise:h.promise,dismiss:h.dismiss,loading:h.loading}),xe=(()=>{class e{constructor(){this.type=r("default")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=Y({type:e,selectors:[["ngx-sonner-icon"]],inputs:{type:[1,"type"]},standalone:!0,features:[U],decls:4,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor","height","20","width","20"],["viewBox","0 0 64 64","fill","currentColor","height","20","width","20","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","d","M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule","evenodd"],["fill-rule","evenodd","d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule","evenodd"],["fill-rule","evenodd","d","M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z","clip-rule","evenodd"],["d","M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"],["d","M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"]],template:function(n,o){if(n&1&&g(0,Ft,2,0,":svg:svg",0)(1,Dt,2,0,":svg:svg",0)(2,Et,2,0,":svg:svg",0)(3,Mt,3,0,":svg:svg",1),n&2){let l;b((l=o.type())==="success"?0:l==="error"?1:l==="info"?2:l==="warning"?3:-1)}},encapsulation:2,changeDetection:0})}}return e})(),ye=3,ve="32px",tt=4e3,be=356,bt=14,Ce=20,Te=200,we={toast:"",title:"",description:"",loader:"",closeButton:"",cancelButton:"",actionButton:"",action:"",warning:"",error:"",success:"",default:"",info:"",loading:""},Se=(()=>{class e{constructor(){this.isVisible=r.required({transform:z}),this.bars=Array(12).fill(0)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=Y({type:e,selectors:[["ngx-sonner-loader"]],inputs:{isVisible:[1,"isVisible"]},standalone:!0,features:[U],decls:4,vars:1,consts:[[1,"sonner-loading-wrapper"],[1,"sonner-spinner"],[1,"sonner-loading-bar"]],template:function(n,o){n&1&&(m(0,"div",0)(1,"div",1),Q(2,Rt,1,0,"div",2,ut),x()()),n&2&&(A("data-visible",o.isVisible()),y(2),Z(o.bars))},encapsulation:2,changeDetection:0})}}return e})(),Be=(()=>{class e{transform(t,n,o){return t.filter(l=>!l.position&&n===0||l.position===o)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275pipe=G({name:"toastFilter",type:e,pure:!0,standalone:!0})}}return e})();function xt(...e){return e.filter(Boolean).join(" ")}var ke=(()=>{class e{transform(t){return t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275pipe=G({name:"asComponent",type:e,pure:!0,standalone:!0})}}return e})(),Ie=(()=>{class e{transform(t){return typeof t=="string"}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275pipe=G({name:"isString",type:e,pure:!0,standalone:!0})}}return e})(),Fe=(()=>{class e{constructor(){this.cn=xt,this.toasts=h.toasts,this.heights=h.heights,this.removeHeight=h.removeHeight,this.addHeight=h.addHeight,this.dismiss=h.dismiss,this.toast=r.required(),this.index=r.required(),this.expanded=r.required(),this._invert=r.required({alias:"invert"}),this.position=r.required(),this.visibleToasts=r.required(),this.expandByDefault=r.required(),this._closeButton=r.required({alias:"closeButton"}),this.interacting=r.required(),this.cancelButtonStyle=r(),this.actionButtonStyle=r(),this.duration=r(tt),this.descriptionClass=r(""),this._classes=r({},{alias:"classes"}),this.unstyled=r(!1),this._class=r("",{alias:"class"}),this._style=r({},{alias:"style"}),this.mounted=v(!1),this.removed=v(!1),this.swiping=v(!1),this.swipeOut=v(!1),this.offsetBeforeRemove=v(0),this.initialHeight=v(0),this.toastRef=ot.required("toastRef"),this.classes=p(()=>f(f({},we),this._classes())),this.isFront=p(()=>this.index()===0),this.isVisible=p(()=>this.index()+1<=this.visibleToasts()),this.toastType=p(()=>this.toast().type??"default"),this.toastClass=p(()=>this.toast().class??""),this.toastPosition=p(()=>this.toast().position??this.position()),this.toastDescriptionClass=p(()=>this.toast().descriptionClass??""),this.heightIndex=p(()=>this.heights().findIndex(t=>t.toastId===this.toast().id)),this.offset=v(0),this.closeTimerStartTimeRef=0,this.lastCloseTimerStartTimeRef=0,this.pointerStartRef=null,this.coords=p(()=>this.toastPosition().split("-")),this.toastsHeightBefore=p(()=>this.heights().reduce((t,n,o)=>o>=this.heightIndex()?t:t+n.height,0)),this.invert=p(()=>this.toast().invert??this._invert()),this.closeButton=p(()=>this.toast().closeButton??this._closeButton()),this.disabled=p(()=>this.toastType()==="loading"),this.remainingTime=0,this.isPromiseLoadingOrInfiniteDuration=p(()=>this.toast().promise&&this.toastType()==="loading"||this.toast().duration===Number.POSITIVE_INFINITY),this.toastClasses=p(()=>xt(this._class(),this.toastClass(),this.classes().toast,this.toast().classes?.toast,this.classes()[this.toastType()],this.toast().classes?.[this.toastType()])),this.toastStyle=p(()=>f({"--index":`${this.index()}`,"--toasts-before":`${this.index()}`,"--z-index":`${this.toasts().length-this.index()}`,"--offset":`${this.removed()?this.offsetBeforeRemove():this.offset()}px`,"--initial-height":this.expandByDefault()?"auto":`${this.initialHeight()}px`},this._style())),V(()=>{let t=this.heightIndex(),n=this.toastsHeightBefore();X(()=>this.offset.set(Math.round(t*bt+n)))}),V(()=>{this.toast().updated&&(clearTimeout(this.timeoutId),this.remainingTime=this.toast().duration??this.duration()??tt,this.startTimer())}),V(t=>{this.isPromiseLoadingOrInfiniteDuration()||(this.expanded()||this.interacting()?this.pauseTimer():this.startTimer()),t(()=>clearTimeout(this.timeoutId))}),V(()=>{this.toast().delete&&this.deleteToast()})}ngAfterViewInit(){this.remainingTime=this.toast().duration??this.duration()??tt,this.mounted.set(!0);let t=this.toastRef().nativeElement.getBoundingClientRect().height;this.initialHeight.set(t),this.addHeight({toastId:this.toast().id,height:t})}ngOnDestroy(){clearTimeout(this.timeoutId),this.removeHeight(this.toast().id)}deleteToast(){this.removed.set(!0),this.offsetBeforeRemove.set(this.offset()),this.removeHeight(this.toast().id),setTimeout(()=>{this.dismiss(this.toast().id)},Te)}pauseTimer(){if(this.lastCloseTimerStartTimeRef<this.closeTimerStartTimeRef){let t=new Date().getTime()-this.closeTimerStartTimeRef;this.remainingTime=this.remainingTime-t}this.lastCloseTimerStartTimeRef=new Date().getTime()}startTimer(){this.closeTimerStartTimeRef=new Date().getTime(),this.timeoutId=setTimeout(()=>{this.toast().onAutoClose?.(this.toast()),this.deleteToast()},this.remainingTime)}onPointerDown(t){if(this.disabled()||!this.toast().dismissible)return;this.offsetBeforeRemove.set(this.offset());let n=t.target;n.setPointerCapture(t.pointerId),n.tagName!=="BUTTON"&&(this.swiping.set(!0),this.pointerStartRef={x:t.clientX,y:t.clientY})}onPointerUp(){if(this.swipeOut()||!this.toast().dismissible)return;this.pointerStartRef=null;let t=Number(this.toastRef().nativeElement.style.getPropertyValue("--swipe-amount").replace("px","")||0);if(Math.abs(t)>=Ce){this.offsetBeforeRemove.set(this.offset()),this.toast().onDismiss?.(this.toast()),this.deleteToast(),this.swipeOut.set(!0);return}this.toastRef().nativeElement.style.setProperty("--swipe-amount","0px"),this.swiping.set(!1)}onPointerMove(t){if(!this.pointerStartRef||!this.toast().dismissible)return;let n=t.clientY-this.pointerStartRef.y,o=t.clientX-this.pointerStartRef.x,u=(this.coords()[0]==="top"?Math.min:Math.max)(0,n),k=t.pointerType==="touch"?10:2;Math.abs(u)>k?this.toastRef().nativeElement.style.setProperty("--swipe-amount",`${n}px`):Math.abs(o)>k&&(this.pointerStartRef=null)}onCloseButtonClick(){this.disabled()||!this.toast().dismissible||(this.deleteToast(),this.toast().onDismiss?.(this.toast()))}onCancelClick(){let t=this.toast();t.dismissible&&(this.deleteToast(),t.cancel?.onClick&&t.cancel.onClick())}onActionClick(t){this.toast().action?.onClick(t),!t.defaultPrevented&&this.deleteToast()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=Y({type:e,selectors:[["ngx-sonner-toast"]],viewQuery:function(n,o){n&1&&at(o.toastRef,Pt,5),n&2&&st()},inputs:{toast:[1,"toast"],index:[1,"index"],expanded:[1,"expanded"],_invert:[1,"invert","_invert"],position:[1,"position"],visibleToasts:[1,"visibleToasts"],expandByDefault:[1,"expandByDefault"],_closeButton:[1,"closeButton","_closeButton"],interacting:[1,"interacting"],cancelButtonStyle:[1,"cancelButtonStyle"],actionButtonStyle:[1,"actionButtonStyle"],duration:[1,"duration"],descriptionClass:[1,"descriptionClass"],_classes:[1,"classes","_classes"],unstyled:[1,"unstyled"],_class:[1,"class","_class"],_style:[1,"style","_style"]},standalone:!0,features:[U],ngContentSelectors:vt,decls:5,vars:22,consts:[["toastRef",""],["data-sonner-toast","","aria-atomic","true","role","status","tabindex","0",3,"pointerdown","pointerup","pointermove"],["aria-label","Close toast","data-close-button","",3,"class"],["aria-label","Close toast","data-close-button","",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","12","height","12","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],["x1","18","y1","6","x2","6","y2","18"],["x1","6","y1","6","x2","18","y2","18"],[4,"ngComponentOutlet","ngComponentOutletInputs"],["data-icon",""],["data-content",""],["data-title","",3,"class"],["data-description","",3,"class"],["data-button","","data-cancel","",3,"style","class"],["data-button","",3,"style","class"],["data-title",""],["data-description",""],["data-button","","data-cancel","",3,"click"],["data-button","",3,"click"]],template:function(n,o){if(n&1){let l=j();it(yt),m(0,"li",1,0),H("pointerdown",function(k){return C(l),T(o.onPointerDown(k))})("pointerup",function(){return C(l),T(o.onPointerUp())})("pointermove",function(k){return C(l),T(o.onPointerMove(k))}),g(2,Vt,4,3,"button",2)(3,Nt,2,4,"ng-container")(4,oe,6,5),x()}n&2&&($(o.toastStyle()),D(o.toastClasses()),A("aria-live",o.toast().important?"assertive":"polite")("data-styled",!(o.toast().component||o.toast().unstyled||o.unstyled()))("data-mounted",o.mounted())("data-promise",!!o.toast().promise)("data-removed",o.removed())("data-visible",o.isVisible())("data-y-position",o.coords()[0])("data-x-position",o.coords()[1])("data-index",o.index())("data-front",o.isFront())("data-swiping",o.swiping())("data-dismissible",o.toast().dismissible)("data-type",o.toastType())("data-invert",o.invert())("data-swipe-out",o.swipeOut())("data-expanded",o.expanded()||o.expandByDefault()&&o.mounted()),y(2),b(o.closeButton()&&!o.toast().component?2:-1),y(),b(o.toast().component?3:4))},dependencies:[_t,Ie,ke],encapsulation:2,changeDetection:0})}}return e})(),Ae=(()=>{class e{constructor(){this.platformId=ct(pt),this.toasts=h.toasts,this.heights=h.heights,this.reset=h.reset,this.invert=r(!1,{transform:z}),this.theme=r("light"),this.position=r("bottom-right"),this.hotKey=r(["altKey","KeyT"]),this.richColors=r(!1,{transform:z}),this.expand=r(!1,{transform:z}),this.duration=r(tt,{transform:rt}),this.visibleToasts=r(ye,{transform:rt}),this.closeButton=r(!1,{transform:z}),this.toastOptions=r({}),this.offset=r(null),this.dir=r(this.getDocumentDirection()),this._class=r("",{alias:"class"}),this._style=r({},{alias:"style"}),this.possiblePositions=p(()=>Array.from(new Set([this.position(),...this.toasts().filter(t=>t.position).map(t=>t.position)].filter(Boolean)))),this.expanded=v(!1),this.interacting=v(!1),this.actualTheme=v(this.getActualTheme(this.theme())),this.listRef=ot("listRef"),this.lastFocusedElementRef=v(null),this.isFocusWithinRef=v(!1),this.hotKeyLabel=p(()=>this.hotKey().join("+").replace(/Key/g,"").replace(/Digit/g,"")),this.toasterStyles=p(()=>f({"--front-toast-height":`${this.heights()[0]?.height}px`,"--offset":typeof this.offset()=="number"?`${this.offset()}px`:this.offset()??`${ve}`,"--width":`${be}px`,"--gap":`${bt}px`},this._style())),this.handleKeydown=t=>{let n=this.listRef()?.nativeElement;if(!n)return;this.hotKey().every(l=>t[l]||t.code===l)&&(this.expanded.set(!0),n.focus()),t.code==="Escape"&&(document.activeElement===n||n.contains(document.activeElement))&&this.expanded.set(!1)},this.handleThemePreferenceChange=({matches:t})=>{this.theme()==="system"&&this.actualTheme.set(t?"dark":"light")},this.reset(),J(this.platformId)&&(document.addEventListener("keydown",this.handleKeydown),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.handleThemePreferenceChange)),V(()=>{this.toasts().length>=1&&X(()=>this.expanded.set(!1))}),V(()=>{let t=this.theme();X(()=>this.actualTheme.set(this.getActualTheme(t)))})}ngOnDestroy(){J(this.platformId)&&(document.removeEventListener("keydown",this.handleKeydown),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.handleThemePreferenceChange))}handleBlur(t){this.isFocusWithinRef()&&!t.target.contains(t.relatedTarget)&&(this.isFocusWithinRef.set(!1),this.lastFocusedElementRef()&&(this.lastFocusedElementRef()?.focus({preventScroll:!0}),this.lastFocusedElementRef.set(null)))}handleFocus(t){t.target instanceof HTMLElement&&t.target.dataset.dismissible==="false"||this.isFocusWithinRef()||(this.isFocusWithinRef.set(!0),this.lastFocusedElementRef.set(t.relatedTarget))}handlePointerDown(t){t.target instanceof HTMLElement&&t.target.dataset.dismissible==="false"||this.interacting.set(!0)}handleMouseLeave(){this.interacting()||this.expanded.set(!1)}getActualTheme(t){return t!=="system"?t:J(this.platformId)&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}getDocumentDirection(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=Y({type:e,selectors:[["ngx-sonner-toaster"]],viewQuery:function(n,o){n&1&&at(o.listRef,ie,5),n&2&&st()},inputs:{invert:[1,"invert"],theme:[1,"theme"],position:[1,"position"],hotKey:[1,"hotKey"],richColors:[1,"richColors"],expand:[1,"expand"],duration:[1,"duration"],visibleToasts:[1,"visibleToasts"],closeButton:[1,"closeButton"],toastOptions:[1,"toastOptions"],offset:[1,"offset"],dir:[1,"dir"],_class:[1,"class","_class"],_style:[1,"style","_style"]},standalone:!0,features:[U],ngContentSelectors:vt,decls:1,vars:1,consts:[["listRef",""],[3,"tabIndex"],["data-sonner-toaster","",3,"tabIndex","class","style"],["data-sonner-toaster","",3,"blur","focus","mouseenter","mousemove","mouseleave","pointerdown","pointerup","tabIndex"],[3,"index","toast","invert","visibleToasts","closeButton","interacting","position","expandByDefault","expanded","actionButtonStyle","cancelButtonStyle","class","descriptionClass","classes","duration","unstyled"],[3,"index","toast","invert","visibleToasts","closeButton","interacting","position","expandByDefault","expanded","actionButtonStyle","cancelButtonStyle","descriptionClass","classes","duration","unstyled"],[3,"isVisible"],["type","success"],["type","error"],["type","warning"],["type","info"]],template:function(n,o){n&1&&(it(yt),g(0,me,3,2,"section",1)),n&2&&b(o.toasts().length>0?0:-1)},dependencies:[Fe,Be,xe,Se],styles:[`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:#00000014}[data-sonner-toast][data-theme=dark] [data-cancel]{background:#ffffff4d}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`],encapsulation:2,changeDetection:0})}}return e})();export{Ne as a,Ae as b};
