import{a as E,b as m,c as x,d as w,e as B,f as R,g as k,h as q,i as G,j as T,k as M,l as N}from"./chunk-74WM6R7F.js";import{a as s}from"./chunk-LFUMGORP.js";import{M as y,f as v,g as b}from"./chunk-75K4BYGQ.js";import{Ea as l,Sa as c,Va as f,W as u,Za as d,_ as C,cb as e,db as t,eb as g,hb as h,ob as n,sb as S}from"./chunk-TMVVO5PM.js";import{e as p}from"./chunk-ACKELEN3.js";function L(i,_){i&1&&(e(0,"small"),n(1,"This field is required"),t())}function D(i,_){i&1&&(e(0,"small"),n(1,"Please enter an email direction"),t())}function P(i,_){i&1&&(e(0,"small"),n(1,"This field is required"),t())}var K=(()=>{class i{_formBuilder=u(q);_authService=u(y);_router=u(v);isRequired(o){return T(o,this.form)}hasEmailError(){return M(this.form)}form=this._formBuilder.group({email:this._formBuilder.control("",[m.required,m.email]),password:this._formBuilder.control("",[m.required,m.minLength(6)])});submit(){return p(this,null,function*(){if(!this.form.invalid)try{let{email:o,password:r}=this.form.value;if(!o||!r)return;yield this._authService.signUp({email:o,password:r}),s.success("Usuario creado correctamente"),this._router.navigateByUrl("/home")}catch{s.error("Ha habido un problema")}})}submitWithGoogle(){return p(this,null,function*(){try{yield this._authService.singInwithGoogle(),s.success("Welcome"),this._router.navigateByUrl("/home")}catch{s.error("Ha habido un problema")}})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=C({type:i,selectors:[["app-singin"]],standalone:!0,features:[S],decls:24,vars:5,consts:[[1,"container"],[1,"logInWinCont"],[1,"win","winDark"],[1,"flex"],[1,"logInWin",3,"ngSubmit","formGroup"],[1,"inputContainer"],["type","text","formControlName","email","placeholder","email"],["type","password","formControlName","password","placeholder","password"],["type","submit",1,"logginBtn"],[3,"onClick"],[3,"routerLink"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),n(3,"Linktun"),t(),e(4,"div",2)(5,"div",3)(6,"form",4),h("ngSubmit",function(){return a.submit()}),e(7,"span"),n(8,"Register"),t(),e(9,"div",5),g(10,"input",6),c(11,L,2,0,"small")(12,D,2,0,"small"),t(),e(13,"div",5),g(14,"input",7),c(15,P,2,0,"small"),t(),e(16,"button",8),n(17,"Register"),t(),e(18,"app-google-button",9),h("onClick",function(){return a.submitWithGoogle()}),t(),e(19,"div")(20,"span"),n(21,"Already have an account?"),t(),e(22,"a",10),n(23,"Log In"),t()()()()()()()),r&2&&(l(6),f("formGroup",a.form),l(5),d(a.isRequired("email")?11:-1),l(),d(a.hasEmailError()?12:-1),l(3),d(a.isRequired("password")?15:-1),l(7),f("routerLink","#/auth/log-in"))},dependencies:[G,B,E,x,w,R,k,b,N],styles:[".inputContainer[_ngcontent-%COMP%]{height:56px;display:flex;flex-direction:column}.inputContainer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{position:relative;bottom:0}h2[_ngcontent-%COMP%]{margin-bottom:20px}"]})}return i})();export{K as default};
