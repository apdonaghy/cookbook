(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},i=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navigation",{attrs:{user:e.user},on:{logout:e.logout}}),r("router-view",{staticClass:"container",attrs:{user:e.user,recipes:e.recipes,error:e.error},on:{logout:e.logout,addRecipe:e.addRecipe,deleterecipe:e.deleterecipe}})],1)},i=[],n=(r("4160"),r("159b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",{staticClass:"site-nav navbar navbar-expand bg-primary navbar-dark"},[r("div",{staticClass:"container-fluid"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Cookbook")]),r("div",{staticClass:"navbar-nav ml-auto"},[e.user?r("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/recipes"}},[e._v("recipes")]):e._e(),e.user?r("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/create"}},[e._v("Create a recipe")]):e._e(),e.user?e._e():r("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/login"}},[e._v("log in")]),e.user?e._e():r("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/register"}},[e._v("register")]),e.user?r("button",{staticClass:"nav-item nav-link btn btn-link",on:{click:function(t){return e.$emit("logout")}}},[e._v(" logout ")]):e._e()],1)],1)])])}),o=[],c={name:"navigation",props:["user"]},l=c,u=r("2877"),p=Object(u["a"])(l,n,o,!1,null,null,null),d=p.exports,m=r("8aa5"),f=r.n(m),v={apiKey:"AIzaSyASND-4U8aDjNDbVB7jzs3QDxOwYwq8jVY",authDomain:"cookbook-fa062.firebaseapp.com",databaseURL:"https://cookbook-fa062.firebaseio.com",projectId:"cookbook-fa062",storageBucket:"cookbook-fa062.appspot.com",messagingSenderId:"983098582230",appId:"1:983098582230:web:b835e4aee11095585a1577",measurementId:"G-BFPQV08YNG"},g=f.a.initializeApp(v),h=g.firestore(),b={name:"App",data:function(){return{user:null,error:null,recipes:[]}},methods:{logout:function(){var e=this;f.a.auth().signOut().then((function(){e.user=null,e.$router.push("login")}))},addRecipe:function(e){h.collection("users").doc(this.user.uid).collection("recipes").add({recipeName:e.recipeName,ingredients:e.ingredients,recipeInstructions:e.recipeInstructions,imageUrlName:"https://firebasestorage.googleapis.com/v0/b/cookbook-fa062.appspot.com/o/images%2F"+e.imageUrlName+"?alt=media",createdAt:f.a.firestore.FieldValue.serverTimestamp()}),this.$router.push("/recipes")},deleterecipe:function(e){h.collection("users").doc(this.user.uid).collection("recipes").doc(e).delete(),this.$router.push("/recipes")}},mounted:function(){var e=this;f.a.auth().onAuthStateChanged((function(t){t&&(e.user=t,h.collection("users").doc(e.user.uid).collection("recipes").onSnapshot((function(t){var r=[];t.forEach((function(e){r.push({id:e.id,recipeName:e.data().recipeName,recipeInstructions:e.data().recipeInstructions,ingredients:e.data().ingredients,imageUrlName:e.data().imageUrlName})})),e.recipes=r.sort((function(e,t){return e.recipeName.toLowerCase()<t.recipeName.toLowerCase()?-1:1}))})))}))},components:{Navigation:d}},_=b,C=(r("5c0b"),Object(u["a"])(_,s,i,!1,null,null,null)),y=C.exports,w=r("8c4f"),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-3"},[r("div",{staticClass:"text-secondary text-center"},[e.user?r("div",{staticClass:"text-center"},[e._v(" Welcome back "),r("span",{staticClass:"font-weight-bold text-info"},[e._v(e._s(e.user.displayName))]),e._v(", "),r("a",{staticClass:"text-primary",attrs:{href:"#",role:"button"},on:{click:function(t){return e.$emit("logout")}}},[e._v("logout")])]):e._e()]),r("div",{staticClass:"container text-center"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-10 col-md-10 col-lg-8 col-xl-7"},[r("h4",{staticClass:"display-4 text-primary mb-2"},[e._v("Welcome")]),e._m(0),e.user?e._e():r("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{to:"/register"}},[e._v("Register")]),e.user?e._e():r("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{to:"/login"}},[e._v("Log In")]),e.user?r("router-link",{staticClass:"btn btn-primary",attrs:{to:"/recipes"}},[e._v("Recipes")]):e._e()],1)])])])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"lead"},[e._v(" This app can help you store all of your favorite recipes with "),r("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and "),r("a",{attrs:{href:"https://firebase.google.com"}},[e._v("Firebase")]),e._v(". ")])}],x={name:"home",props:["user"]},I=x,P=Object(u["a"])(I,N,k,!1,null,null,null),O=P.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card bg-light"},[r("div",{staticClass:"card-body"},[r("h3",{staticClass:"font-weight-light mb-3"},[e._v("Log in")]),r("section",{staticClass:"form-group"},[e.error?r("div",{staticClass:"col-12 alert alert-danger px-3"},[e._v(e._s(e.error))]):e._e(),r("label",{staticClass:"form-control-label sr-only",attrs:{for:"Email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{required:"",type:"email",id:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("section",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])])])])])]),r("p",{staticClass:"text-center mt-2"},[e._v(" or "),r("router-link",{attrs:{to:"/register"}},[e._v("register")])],1)])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group text-right mb-0"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Log in")])])}],j={data:function(){return{email:"",password:"",error:""}},methods:{login:function(){var e=this,t={email:this.email,password:this.password};f.a.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){e.$router.push("meetings")}),(function(t){e.error=t.message}))}}},$=j,E=Object(u["a"])($,A,R,!1,null,null,null),D=E.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mt-4"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-11 col-md-8 col-lg-6"},[r("div",{staticClass:"card border-top-0 rounded-0"},[e._m(0),r("div",{staticClass:"list-group list-group-flush"},[0===e.recipes.length?r("router-link",{attrs:{to:"/create"}},[e._v("Create a recipe")]):e._e(),e._l(e.recipes,(function(t){return r("div",{key:t.id,staticClass:"list-group-item d-flex"},[r("router-link",{attrs:{to:"/recipe/"+e.user.uid+"/"+t.id}},[r("div",{staticClass:"thumbnailImages",style:{backgroundImage:"url("+t.imageUrlName+")"},attrs:{role:"img","aria-label":""+t.recipeName}}),r("router-link",{staticClass:"pl-3 text-left align-self-center",attrs:{to:"/recipe/"+e.user.uid+"/"+t.id}},[e._v(e._s(t.recipeName))])],1)],1)}))],2)])])])])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-body py-2"},[r("h4",{staticClass:"card-title m-0 text-center"},[e._v("Your Recipes")])])}],T={name:"recipes",data:function(){return{}},components:{},props:["user","recipes"]},L=T,F=(r("d3fd"),Object(u["a"])(L,U,S,!1,null,"1bcf01aa",null)),q=F.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("div",e._l(e.actualRecipe,(function(t){return r("div",{key:t.id},[r("h2",[e._v(e._s(t.recipeName))]),r("img",{attrs:{src:t.imageUrlName}}),r("h3",[e._v("Ingredients")]),r("ul",e._l(t.ingredients,(function(t,a){return r("li",{key:a},[e._v(e._s(t))])})),0),r("h3",[e._v("Recipe")]),r("p",{staticClass:"paragraphStyle"},[e._v(e._s(t.recipeInstructions))]),r("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{title:"Delete Meeting"},on:{click:function(r){return e.$emit("deleterecipe",t.id)}}},[r("font-awesome-icon",{attrs:{icon:"trash"}})],1)])})),0):e._e()},V=[],B=r("ad3d"),G={name:"recipe",data:function(){return{userID:this.$route.params.userID,recipesID:this.$route.params.recipesID,localRecipe:[],actualRecipe:[]}},components:{FontAwesomeIcon:B["a"]},props:["user","recipes"],mounted:function(){var e=this;h.collection("users").doc(this.userID).collection("recipes").onSnapshot((function(t){var r=[];for(var a in t.forEach((function(e){r.push({id:e.id,recipeName:e.data().recipeName,recipeInstructions:e.data().recipeInstructions,ingredients:e.data().ingredients,imageUrlName:e.data().imageUrlName})})),e.localRecipe=r,e.localRecipe)e.localRecipe[a].id===e.recipesID&&e.actualRecipe.push(e.localRecipe[a])}))}},W=G,Y=(r("9d98"),Object(u["a"])(W,M,V,!1,null,"2ed448f9",null)),z=Y.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-8"},[r("div",{staticClass:"card bg-light"},[r("div",{staticClass:"card-body"},[r("h3",{staticClass:"font-weight-light mb-3"},[e._v("Register")]),r("div",{staticClass:"form-row"},[e.error?r("div",{staticClass:"col-12 alert alert-danger px-3"},[e._v(e._s(e.error))]):e._e(),r("section",{staticClass:"col-sm-12 form-group"},[r("label",{staticClass:"form-control-label sr-only",attrs:{for:"displayName"}},[e._v("Display Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.displayName,expression:"displayName"}],staticClass:"form-control",attrs:{type:"text",id:"displayName",placeholder:"Display Name",name:"displayName",required:""},domProps:{value:e.displayName},on:{input:function(t){t.target.composing||(e.displayName=t.target.value)}}})])]),r("section",{staticClass:"form-group"},[r("label",{staticClass:"form-control-label sr-only",attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email Address",required:"",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-row"},[r("section",{staticClass:"col-sm-6 form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.passOne,expression:"passOne"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.passOne},on:{input:function(t){t.target.composing||(e.passOne=t.target.value)}}})]),r("section",{staticClass:"col-sm-6 form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.passTwo,expression:"passTwo"}],staticClass:"form-control",attrs:{type:"password",required:"",placeholder:"Repeat Password"},domProps:{value:e.passTwo},on:{input:function(t){t.target.composing||(e.passTwo=t.target.value)}}})])]),e._m(0)])])])])])]),r("p",{staticClass:"text-center mt-2"},[e._v(" or "),r("router-link",{attrs:{to:"/login"}},[e._v("login")])],1)])},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group text-right mb-0"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Register")])])}],H=(r("ac1f"),r("5319"),{data:function(){return{displayName:null,email:null,passOne:null,passTwo:null,error:null}},methods:{register:function(){var e=this,t={email:this.email,password:this.passOne,displayName:this.displayName};this.error||f.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(r){return r.user.updateProfile({displayName:t.displayName}).then((function(){e.$router.replace("recipes")}))}),(function(t){e.error=t.message}))}},watch:{passTwo:function(){""!==this.passOne&&""!==this.passTwo&&this.passTwo!==this.passOne?this.error="passwords must match":this.error=null}}}),K=H,X=Object(u["a"])(K,J,Q,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container centered"},[r("h1",{staticClass:"text-center"},[e._v("Create Recipe")]),r("form",{attrs:{id:"createRecipe"}},[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeName,expression:"recipeName"}],ref:"recipeName",staticClass:"form-control block",attrs:{type:"text",name:"recipeName",placeholder:"Recipe title","aria-describedby":"buttonAdd"},domProps:{value:e.recipeName},on:{input:function(t){t.target.composing||(e.recipeName=t.target.value)}}}),r("p",[e._v("Upload an image of your dish")]),r("input",{ref:"recipePic",attrs:{type:"file",accept:"image/*"},on:{change:e.recipePicChosen}}),e.showSpinner&&100===e.localProgressArray[e.localProgressArray.length-1]===!1?r("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"spinner"}}):e._e(),100===e.localProgressArray[e.localProgressArray.length-1]?r("img",{attrs:{src:e.previewUrl,height:"150px"}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredient,expression:"ingredient"}],ref:"ingredient",staticClass:"form-control mt-4",attrs:{type:"text",name:"ingredient",placeholder:"Ingredient","aria-describedby":"buttonAdd"},domProps:{value:e.ingredient},on:{input:function(t){t.target.composing||(e.ingredient=t.target.value)}}}),r("button",{staticClass:"btn btn-sm btn-info float mb-4",staticStyle:{cursor:"pointer"},attrs:{role:"button"},on:{click:function(t){return t.preventDefault(),e.addIngredient(t)}}},[e._v("Add ingredient+")]),r("ul",{staticClass:"block"},e._l(e.ingredients,(function(t,a){return r("li",{key:a},[e._v(" "+e._s(t)+" "),e.ingredients.length>0?r("span",{staticClass:"delete",attrs:{role:"button"},on:{click:function(t){return e.deleteIngredient(a)}}},[e._v("Delete item")]):e._e()])})),0),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipeInstructions,expression:"recipeInstructions"}],ref:"recipeInstructions",staticClass:"form-control block",attrs:{type:"text",name:"recipeInstructions",placeholder:"Recipe instructions","aria-describedby":"buttonAdd"},domProps:{value:e.recipeInstructions},on:{input:function(t){t.target.composing||(e.recipeInstructions=t.target.value)}}}),r("div",{staticClass:"input-group-append float"},[r("button",{staticClass:"btn btn-lg btn-info",attrs:{type:"submit",id:"buttonAdd"},on:{click:function(t){return t.preventDefault(),e.handleAdd(t)}}},[e._v("Create Recipe")])])],1)])])},te=[],re=(r("baa5"),r("b0c0"),{name:"create",data:function(){return{recipeName:"",recipeInstructions:null,previewUrl:"",image:null,ingredient:"",ingredients:[],imageUrlName:"cookbook.svg",localProgressArray:[],showSpinner:!1}},props:["user","recipes"],components:{FontAwesomeIcon:B["a"]},methods:{addIngredient:function(){""!==this.ingredient?(this.ingredients.push(this.ingredient),this.ingredient=null,this.$refs.ingredient.focus()):console.log("error")},deleteIngredient:function(e){this.$delete(this.ingredients,e)},handleAdd:function(){""!==this.recipeName?(this.$emit("addRecipe",{recipeName:this.recipeName,recipeInstructions:this.recipeInstructions,ingredients:this.ingredients,imageUrlName:this.imageUrlName}),this.recipeName=null,this.recipeInstructions=null,this.$refs.recipeName.focus()):console.log("error")},recipePicChosen:function(e){var t=this;function r(e){return e.replace(/ /g,"_")}this.showSpinner=!0;var a=e.target.files,s=a[0].name;if(s.lastIndexOf(".")<=0)return alert("please add a valid file");var i=new FileReader;i.addEventListener("load",(function(){t.previewUrl=i.result})),i.readAsDataURL(a[0]),this.image=a[0];var n=f.a.storage().ref(),o=n.child("images/".concat(r(this.image.name)));o.put(this.image),this.imageUrlName=r(this.image.name);var c=[];this.localProgressArray=c,o.put(this.image).on(f.a.storage.TaskEvent.STATE_CHANGED,(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(c.push(t),e.state){case f.a.storage.TaskState.PAUSED:break;case f.a.storage.TaskState.RUNNING:break}}))}}}),ae=re,se=(r("81e0"),Object(u["a"])(ae,ee,te,!1,null,"fc2e5e90",null)),ie=se.exports;a["a"].use(w["a"]);var ne=new w["a"]({routes:[{path:"/",name:"home",component:O},{path:"/login",name:"login",component:D},{path:"/recipes",name:"recipes",component:q},{path:"/recipe/:userID/:recipesID",name:"recipe",component:z},{path:"/register",name:"register",component:Z},{path:"/create",name:"create",component:ie},{path:"*",redirect:"/"}]}),oe=r("ecee"),ce=r("c074");oe["c"].add(ce["g"],ce["b"],ce["c"],ce["d"],ce["h"],ce["f"],ce["a"],ce["e"]),a["a"].config.productionTip=!1,new a["a"]({router:ne,render:function(e){return e(y)}}).$mount("#app")},"5a93":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),s=r.n(a);s.a},"81e0":function(e,t,r){"use strict";var a=r("e8e6"),s=r.n(a);s.a},9253:function(e,t,r){},"9c0c":function(e,t,r){},"9d98":function(e,t,r){"use strict";var a=r("5a93"),s=r.n(a);s.a},d3fd:function(e,t,r){"use strict";var a=r("9253"),s=r.n(a);s.a},e8e6:function(e,t,r){}});
//# sourceMappingURL=app.1a6a4234.js.map