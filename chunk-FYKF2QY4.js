import{a as y,b as m,c as L,d as k,e as w,f as x,g as B,h as T,i as q,j as G,k as I,l as N}from"./chunk-74WM6R7F.js";import{a as s}from"./chunk-LFUMGORP.js";import{a as M}from"./chunk-A5XE4AUN.js";import{f as b,g as E}from"./chunk-AOLNICQB.js";import{Ea as l,Sa as f,Va as g,W as u,Za as p,_ as v,cb as e,db as t,eb as _,hb as d,ob as n,sb as S}from"./chunk-TMVVO5PM.js";import{e as c}from"./chunk-ACKELEN3.js";function R(i,h){i&1&&(e(0,"small"),n(1,"This field is required"),t())}function D(i,h){i&1&&(e(0,"small"),n(1,"Please enter an email direction"),t())}function F(i,h){i&1&&(e(0,"small"),n(1,"This field is required"),t())}var K=(()=>{class i{_formBuilder=u(T);_authService=u(M);_router=u(b);isRequired(o){return G(o,this.form)}hasEmailError(){return I(this.form)}form=this._formBuilder.group({email:this._formBuilder.control("",[m.required,m.email]),password:this._formBuilder.control("",[m.required,m.minLength(6)])});submit(){return c(this,null,function*(){if(!this.form.invalid)try{let{email:o,password:r}=this.form.value;if(!o||!r)return;yield this._authService.logIn({email:o,password:r}),s.success("Welcome back"),this._router.navigateByUrl("/home")}catch{s.error("Ha habido un problema")}})}submitWithGoogle(){return c(this,null,function*(){try{yield this._authService.singInwithGoogle(),s.success("Welcome"),this._router.navigateByUrl("/home")}catch{s.error("Ha habido un problema")}})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=v({type:i,selectors:[["app-login"]],standalone:!0,features:[S],decls:24,vars:5,consts:[[1,"container"],[1,"logInWinCont"],[1,"win","winDark"],[1,"flex"],[1,"logInWin",3,"ngSubmit","formGroup"],[1,"inputContainer"],["type","text","formControlName","email","placeholder","email"],["type","password","formControlName","password","placeholder","password"],["type","submit",1,"logginBtn",3,"onClick"],[3,"onClick"],[3,"routerLink"]],template:function(r,a){r&1&&(e(0,"div",0)(1,"div",1)(2,"h2"),n(3,"Linktun"),t(),e(4,"div",2)(5,"div",3)(6,"form",4),d("ngSubmit",function(){return a.submit()}),e(7,"span"),n(8,"Log In"),t(),e(9,"div",5),_(10,"input",6),f(11,R,2,0,"small")(12,D,2,0,"small"),t(),e(13,"div",5),_(14,"input",7),f(15,F,2,0,"small"),t(),e(16,"button",8),d("onClick",function(){return a.submit()}),n(17,"Log In"),t(),e(18,"app-google-button",9),d("onClick",function(){return a.submitWithGoogle()}),t(),e(19,"div")(20,"span"),n(21,"Don't have an account? "),t(),e(22,"a",10),n(23,"Sign In"),t()()()()()()()),r&2&&(l(6),g("formGroup",a.form),l(5),p(a.isRequired("email")?11:-1),l(),p(a.hasEmailError()?12:-1),l(3),p(a.isRequired("password")?15:-1),l(7),g("routerLink","/auth/sign-in"))},dependencies:[q,w,y,L,k,x,B,E,N],styles:[".inputContainer[_ngcontent-%COMP%]{height:56px;display:flex;flex-direction:column}.inputContainer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{position:relative;bottom:0}h2[_ngcontent-%COMP%]{margin-bottom:20px}"]})}return i})();export{K as default};