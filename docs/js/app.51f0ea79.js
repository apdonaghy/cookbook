(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},r=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"3cc4":function(e,t,a){"use strict";var s=a("919e"),i=a.n(s);i.a},"49f4":function(e,t,a){e.exports=a.p+"img/onion.61ead201.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navigation",{attrs:{user:e.user},on:{logout:e.logout}}),a("router-view",{staticClass:"container",attrs:{user:e.user,recipes:e.recipes,error:e.error},on:{logout:e.logout,addRecipe:e.addRecipe,deleterecipe:e.deleterecipe}})],1)},r=[],n=(a("4160"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{class:{overlay:e.isActive},on:{click:e.closeNav}}),a("nav",[a("div",{staticClass:"navbar"},[a("div",{staticClass:"flex space-between navContainer"},[e.user?e._e():a("span",{staticClass:"hamburger black"},[e._v("☰")]),e.user?a("span",{staticClass:"hamburger",staticStyle:{cursor:"pointer"},attrs:{tabindex:"0",role:"button"},on:{click:function(t){return e.openNav()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.openNav()}}},[e._v("☰")]):e._e(),e.user?a("div",{staticClass:"sidenav",class:{activeNav:e.isActive}},[a("font-awesome-icon",{staticClass:"closeBtn",class:{fade:!e.isActive},attrs:{tabindex:"0",role:"button",icon:"times"},on:{click:e.closeNav,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.closeNav(t)}}}),a("router-link",{class:{fade:!e.isActive},attrs:{to:"/"}},[a("span",{attrs:{tabindex:"0"},on:{click:e.closeNav,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.closeNav(t)}}},[e._v("About")])]),a("router-link",{class:{fade:!e.isActive},attrs:{to:"/recipes"}},[a("span",{attrs:{tabindex:"0"},on:{click:e.closeNav,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.closeNav(t)}}},[e._v("My recipes")])]),a("router-link",{class:{fade:!e.isActive},attrs:{to:"/create"}},[a("span",{attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.closeNav(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.closeNav(t)}],click:e.closeNav}},[e._v("Create a recipe")])])],1):e._e(),e.user?a("router-link",{staticClass:"logo userMargin",attrs:{to:"/recipes"}},[e._v("Cookbook")]):e._e(),e.user?e._e():a("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("Cookbook")]),e.user?e._e():a("div",{staticClass:"flex"},[a("router-link",{staticClass:"login",attrs:{to:"/login"}},[e._v("sign in")]),a("p",{staticClass:"padding-sm"}),a("router-link",{staticClass:"login registerMobile",attrs:{to:"/register"}},[e._v("register")])],1),e.user?a("span",{staticClass:"logout",attrs:{tabindex:"0",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("logout")},click:function(t){return e.$emit("logout")}}},[e._v("logout")]):e._e()],1)])])])}),o=[],c=a("ad3d"),l={name:"navigation",data:function(){return{isActive:!1}},methods:{openNav:function(){this.isActive=!0},closeNav:function(){this.isActive=!1}},props:["user"],components:{FontAwesomeIcon:c["a"]}},u=l,p=(a("3cc4"),a("2877")),d=Object(p["a"])(u,n,o,!1,null,"2b2a18b8",null),m=d.exports,f=a("8aa5"),v=a.n(f),h={apiKey:"AIzaSyASND-4U8aDjNDbVB7jzs3QDxOwYwq8jVY",authDomain:"cookbook-fa062.firebaseapp.com",databaseURL:"https://cookbook-fa062.firebaseio.com",projectId:"cookbook-fa062",storageBucket:"cookbook-fa062.appspot.com",messagingSenderId:"983098582230",appId:"1:983098582230:web:b835e4aee11095585a1577",measurementId:"G-BFPQV08YNG"},g=v.a.initializeApp(h),b=g.firestore(),_={name:"App",data:function(){return{user:null,error:null,recipes:[]}},methods:{logout:function(){var e=this;v.a.auth().signOut().then((function(){e.user=null,e.$router.push("/login")}))},addRecipe:function(e){b.collection("users").doc(this.user.uid).collection("recipes").add({recipeName:e.recipeName,ingredients:e.ingredients,recipeInstructions:e.recipeInstructions,imageUrlName:"https://firebasestorage.googleapis.com/v0/b/cookbook-fa062.appspot.com/o/images%2F"+e.imageUrlName+"?alt=media",createdAt:v.a.firestore.FieldValue.serverTimestamp()}),this.$router.push("/recipes")},deleterecipe:function(e){b.collection("users").doc(this.user.uid).collection("recipes").doc(e).delete(),this.$router.push("/recipes")}},mounted:function(){var e=this;v.a.auth().onAuthStateChanged((function(t){t&&(e.user=t,b.collection("users").doc(e.user.uid).collection("recipes").onSnapshot((function(t){var a=[];t.forEach((function(e){a.push({id:e.id,recipeName:e.data().recipeName,recipeInstructions:e.data().recipeInstructions,ingredients:e.data().ingredients,imageUrlName:e.data().imageUrlName})})),e.recipes=a.sort((function(e,t){return e.recipeName.toLowerCase()<t.recipeName.toLowerCase()?-1:1}))})))}))},components:{Navigation:m}},y=_,C=(a("034f"),Object(p["a"])(y,i,r,!1,null,null,null)),k=C.exports,w=a("8c4f"),N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"background"},[s("div",{staticClass:"top-space"}),s("img",{staticClass:"center imageSpace svgImg",attrs:{src:a("49f4"),alt:"illustraion of an onion"}}),s("div",{staticClass:"about-container"},[e.user?s("h3",{staticClass:"text-center"},[e._v(" Hi "),s("span",{staticClass:"font-weight-bold text-info"},[e._v(e._s(e.user.displayName))]),e._v(", ")]):e._e(),e._m(0),e._m(1),e._m(2)])])},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v(" Welcome to "),a("span",{staticClass:"logoTitle"},[e._v("Cookbook")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"largeParagraphText"},[e._v(" This app can help you store all of your recipes and food creations with "),a("a",{staticClass:"underline",attrs:{href:"https://vuejs.org/"}},[e._v("Vue.js")]),e._v(" and "),a("a",{staticClass:"underline",attrs:{href:"https://firebase.google.com"}},[e._v("Firebase")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"largeParagraphText"},[e._v(" Cookbook was created in the summer quarter of 2020 for the "),a("a",{staticClass:"underline",attrs:{href:"https://www.seattleu.edu/ncs/web-development/"}},[e._v("WATS program")]),e._v(" at Seattle University. It uses firebase to store user data and provides a content management system for users to upload and store recipes and access them from any device. The design is hand-coded and was a blast to create. Hope you enjoy it! ")])}],I={name:"home",props:["user"],beforeCreate:function(){document.body.className="brand"}},A=I,E=(a("c4d7"),Object(p["a"])(A,N,x,!1,null,"94c47d10",null)),L=E.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-space"}),a("form",{staticClass:"login-form loginForm",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("h3",[e._v("sign in")]),a("section",{staticClass:"form-group"},[a("label",{class:{showLabel:e.emailLabel},attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{required:"",type:"email",id:"email",placeholder:"Email"},domProps:{value:e.email},on:{focus:e.emailHandler,input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("section",{staticClass:"form-group"},[a("label",{class:{showLabel:e.passLabel},attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Password",id:"password"},domProps:{value:e.password},on:{focus:e.passHandler,input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0),a("p",{staticClass:"createAnAccount"},[e._v(" or "),a("router-link",{attrs:{to:"/register"}},[e._v("Create an account")])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"error"},[e._v(e._s(e.error))])])},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group text-right mb-0"},[a("button",{staticClass:"signInBtn",attrs:{type:"submit"}},[e._v("sign in")])])}],R={data:function(){return{email:"",password:"",error:"",emailLabel:!1,passLabel:!1}},beforeCreate:function(){document.body.className="brand"},methods:{login:function(){var e=this,t={email:this.email,password:this.password};v.a.auth().signInWithEmailAndPassword(t.email,t.password).then((function(){e.$router.push("/recipes")}),(function(t){e.error=t.message}))},emailHandler:function(){this.emailLabel=!0,this.passLabel=!1},passHandler:function(){this.emailLabel=!1,this.passLabel=!0}}},$=R,S=(a("c725"),Object(p["a"])($,O,P,!1,null,"65dec09a",null)),T=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"top-space"}),e._m(0),a("div",{staticClass:"firstRecipe newRecipe"},[a("router-link",{attrs:{to:"/create"}},[e._v(" + "),a("br"),e._v("Create a new recipe ")])],1),a("div",{staticClass:"flex flex-wrap"},e._l(e.recipes,(function(t){return a("div",{key:t.id,staticClass:"thirds margin-bottom"},[a("router-link",{attrs:{to:"/recipe/"+e.user.uid+"/"+t.id}},[a("div",{staticClass:"thumbnailImages",style:{backgroundImage:"url("+t.imageUrlName+")"},attrs:{role:"img","aria-label":""+t.recipeName}}),a("router-link",{staticClass:"recipe-title",attrs:{to:"/recipe/"+e.user.uid+"/"+t.id}},[e._v(e._s(t.recipeName))])],1)],1)})),0)])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stylized-title"},[a("span",[e._v("MY RECIPES")])])}],D={name:"recipes",data:function(){return{showFirstRecipe:!1}},beforeCreate:function(){document.body.className="white"},components:{},props:["user","recipes"]},H=D,B=(a("e904"),Object(p["a"])(H,U,j,!1,null,"2d23986c",null)),F=B.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-space"}),a("div",{staticClass:"container recipeContainer"},[e._m(0),e._l(e.actualRecipe,(function(t){return a("div",{key:t.id},[a("transition",{attrs:{name:"fade"}},[e.show?a("div",{staticClass:"higher",on:{click:function(t){e.show=!e.show}}},[a("button",{staticClass:"delete confirm",attrs:{title:"Confirm Delete"},on:{click:function(a){return e.$emit("deleterecipe",t.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash"}}),e._v("Confirm Delete ")],1)]):e._e()]),a("h2",[e._v(e._s(t.recipeName))]),a("img",{staticClass:"center picSize",attrs:{src:t.imageUrlName,alt:t.recipeName}}),a("h3",{staticClass:"text-left margin-top recipeTags"},[e._v("Ingredients")]),a("ul",{staticClass:"ingredientsList"},e._l(t.ingredients,(function(t,s){return a("li",{key:s},[e._v(e._s(t))])})),0),a("h3",{staticClass:"text-left recipeTags"},[e._v("Recipe")]),a("p",{staticClass:"paragraphStyle recipeText"},[e._v(e._s(t.recipeInstructions))]),a("button",{staticClass:"delete",attrs:{title:"Delete Recipe"},on:{click:e.deleteRecipeOn}},[a("font-awesome-icon",{attrs:{icon:"trash"}}),e._v("Delete Recipe ")],1)],1)}))],2)])},q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stylized-title recipe"},[a("span",[e._v("RECIPE")])])}],z={name:"recipe",data:function(){return{userID:this.$route.params.userID,recipesID:this.$route.params.recipesID,localRecipe:[],actualRecipe:[],show:!1}},beforeCreate:function(){document.body.className="white"},components:{FontAwesomeIcon:c["a"]},methods:{deleteRecipeOn:function(){this.show=!0}},props:["user","recipes"],mounted:function(){var e=this;b.collection("users").doc(this.userID).collection("recipes").onSnapshot((function(t){var a=[];for(var s in t.forEach((function(e){a.push({id:e.id,recipeName:e.data().recipeName,recipeInstructions:e.data().recipeInstructions,ingredients:e.data().ingredients,imageUrlName:e.data().imageUrlName})})),e.localRecipe=a,e.localRecipe)e.localRecipe[s].id===e.recipesID&&e.actualRecipe.push(e.localRecipe[s])}))}},W=z,V=(a("cf38"),Object(p["a"])(W,M,q,!1,null,"1c8dc4bf",null)),G=V.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-space"}),a("form",{staticClass:"login-form register",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("h3",[e._v("create an account")]),a("section",[a("label",{class:{showLabel:e.userLabel},attrs:{for:"displayName"}},[e._v("User Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.displayName,expression:"displayName"}],staticClass:"form-control",attrs:{type:"text",id:"displayName",placeholder:"User Name",name:"displayName",required:""},domProps:{value:e.displayName},on:{focus:e.userHandler,input:function(t){t.target.composing||(e.displayName=t.target.value)}}})]),a("section",[a("label",{class:{showLabel:e.emailLabel},attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email Address",required:"",name:"email"},domProps:{value:e.email},on:{focus:e.emailHandler,input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("section",{},[a("label",{class:{showLabel:e.passLabel},attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passOne,expression:"passOne"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.passOne},on:{focus:e.passHandler,input:function(t){t.target.composing||(e.passOne=t.target.value)}}})]),a("section",{},[a("label",{class:{showLabel:e.passLabel2},attrs:{for:"password2"}},[e._v("Confirm Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passTwo,expression:"passTwo"}],staticClass:"form-control",attrs:{type:"password",id:"password2",required:"",placeholder:"Confirm Password"},domProps:{value:e.passTwo},on:{focus:e.pass2Handler,input:function(t){t.target.composing||(e.passTwo=t.target.value)}}})]),e.error?a("div",[e._v(e._s(e.error))]):e._e(),a("button",{staticClass:"signInBtn",attrs:{type:"submit"}},[e._v("Register")]),a("p",{staticClass:"createAnAccount"},[e._v(" or "),a("router-link",{attrs:{to:"/login"}},[e._v("Sign in")])],1)])])},J=[],Q=(a("ac1f"),a("5319"),{data:function(){return{displayName:null,email:null,passOne:null,passTwo:null,error:null,userLabel:!1,emailLabel:!1,passLabel:!1,passLabel2:!1}},beforeCreate:function(){document.body.className="brand"},methods:{register:function(){var e=this,t={email:this.email,password:this.passOne,displayName:this.displayName};this.error||v.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(a){return a.user.updateProfile({displayName:t.displayName}).then((function(){e.$router.replace("recipes")}))}),(function(t){e.error=t.message}))},userHandler:function(){this.userLabel=!0,this.emailLabel=!1,this.passLabel=!1,this.passLabel2=!1},emailHandler:function(){this.userLabel=!1,this.emailLabel=!0,this.passLabel=!1,this.passLabel2=!1},passHandler:function(){this.userLabel=!1,this.emailLabel=!1,this.passLabel=!0,this.passLabel2=!1},pass2Handler:function(){this.userLabel=!1,this.emailLabel=!1,this.passLabel=!1,this.passLabel2=!0}},watch:{passTwo:function(){""!==this.passOne&&""!==this.passTwo&&this.passTwo!==this.passOne?this.error="passwords must match":this.error=null}}}),K=Q,X=(a("8ebc"),Object(p["a"])(K,Y,J,!1,null,"7ea7245f",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-space"}),a("div",{staticClass:"container createContainer"},[e._m(0),a("div",{staticClass:"mt"},[a("form",{attrs:{id:"createRecipe",autocomplete:"off"}},[a("div",[a("label",{staticStyle:{display:"none"},attrs:{for:"recipeName"}},[e._v("Recipe Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.recipeName,expression:"recipeName"}],ref:"recipeName",staticClass:"block createInput",attrs:{type:"text",name:"recipeName",placeholder:"Recipe title","aria-describedby":"buttonAdd",id:"recipeName"},domProps:{value:e.recipeName},on:{input:function(t){t.target.composing||(e.recipeName=t.target.value)}}}),a("div",{staticClass:"flex"},[a("label",{staticStyle:{display:"none"},attrs:{for:"ingredient"}},[e._v("Ingredient")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ingredient,expression:"ingredient"}],ref:"ingredient",staticClass:"createInput",attrs:{type:"text",name:"ingredient",placeholder:"Ingredient","aria-describedby":"buttonAdd",id:"ingredient"},domProps:{value:e.ingredient},on:{input:function(t){t.target.composing||(e.ingredient=t.target.value)}}}),a("button",{staticClass:"float addBtn addBtnWidth",staticStyle:{cursor:"pointer"},on:{click:function(t){return t.preventDefault(),e.addIngredient(t)}}},[e._v("Add ingredient+")])]),a("ul",{staticClass:"block"},e._l(e.ingredients,(function(t,s){return a("li",{key:s,staticClass:"ingredientLi"},[e._v(" "+e._s(t)+" "),e.ingredients.length>0?a("span",{staticClass:"delete",attrs:{tabindex:"0",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.deleteIngredient(s)},click:function(t){return e.deleteIngredient(s)}}},[e._v("Delete")]):e._e()])})),0),a("div",{staticClass:"mt mb"},[a("button",{staticClass:"upload",attrs:{tabindex:"0",role:"button"},on:{click:function(t){return t.preventDefault(),e.openImage(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.openImage(t))}}},[a("font-awesome-icon",{attrs:{icon:"upload"}}),e._v(" Upload an image or take a pic of your dish")],1),a("label",{staticStyle:{display:"none"},attrs:{for:"imageUpload"}},[e._v("Image Upload")]),a("input",{ref:"recipePic",staticClass:"imgWidth",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*",id:"imageUpload"},on:{change:e.recipePicChosen}}),e.showSpinner&&100===e.localProgressArray[e.localProgressArray.length-1]===!1?a("font-awesome-icon",{staticClass:"fa-spin block spin",attrs:{icon:"spinner"}}):e._e(),100===e.localProgressArray[e.localProgressArray.length-1]?a("img",{staticClass:"block",attrs:{src:e.previewUrl,height:"150px"}}):e._e()],1),a("div",{staticClass:"mt-2"},[e._m(1),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipeInstructions,expression:"recipeInstructions"}],ref:"recipeInstructions",staticClass:"block instructions",attrs:{type:"text",name:"recipeInstructions",placeholder:"Recipe instructions","aria-describedby":"buttonAdd",id:"instructions"},domProps:{value:e.recipeInstructions},on:{input:function(t){t.target.composing||(e.recipeInstructions=t.target.value)}}})]),a("div",{staticClass:"input-group-append float"},[a("button",{staticClass:"signInBtn createRecipeBtn",attrs:{type:"submit",id:"buttonAdd"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleAdd(t)},click:function(t){return t.preventDefault(),e.handleAdd(t)}}},[e._v("Create Recipe")])])])])])])])},te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stylized-title create"},[a("span",[e._v("CREATE A RECIPE")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"instructions"}},[a("h4",[e._v("Recipe")])])}],ae=(a("c975"),a("baa5"),a("b0c0"),{name:"create",data:function(){return{recipeName:"",recipeInstructions:null,previewUrl:"",image:null,ingredient:"",ingredients:[],imageUrlName:"cookbook.svg",localProgressArray:[],showSpinner:!1}},beforeCreate:function(){document.body.className="white"},props:["user","recipes"],components:{FontAwesomeIcon:c["a"]},methods:{addIngredient:function(){""!==this.ingredient?(this.ingredients.push(this.ingredient),this.ingredient=null,this.$refs.ingredient.focus()):console.log("error")},deleteIngredient:function(e){this.$delete(this.ingredients,e)},openImage:function(){this.$refs.recipePic.click()},handleAdd:function(){""!==this.recipeName?(this.$emit("addRecipe",{recipeName:this.recipeName,recipeInstructions:this.recipeInstructions,ingredients:this.ingredients,imageUrlName:this.imageUrlName}),this.recipeName=null,this.recipeInstructions=null,this.$refs.recipeName.focus()):console.log("error")},recipePicChosen:function(e){var t=this;function a(e){return e.indexOf(".jpg")>-1?e.replace(/\.jpg$/,"_700x933.jpg"):e.indexOf(".png")>-1?e.replace(/\.png$/,"_700x933.png"):void console.log("this is probably a svg")}function s(e){return e.replace(/ /g,"_")}this.showSpinner=!0;var i=e.target.files,r=i[0].name;if(r.lastIndexOf(".")<=0)return alert("please add a valid file");var n=new FileReader;n.addEventListener("load",(function(){t.previewUrl=n.result})),n.readAsDataURL(i[0]),this.image=i[0];var o=v.a.storage().ref(),c=o.child("images/".concat(s(this.image.name)));c.put(this.image),this.imageUrlName=a(s(this.image.name));var l=[];this.localProgressArray=l,c.put(this.image).on(v.a.storage.TaskEvent.STATE_CHANGED,(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(l.push(t),e.state){case v.a.storage.TaskState.PAUSED:break;case v.a.storage.TaskState.RUNNING:break}}))}}}),se=ae,ie=(a("6d69"),Object(p["a"])(se,ee,te,!1,null,"fcd37ae0",null)),re=ie.exports;s["a"].use(w["a"]);var ne=new w["a"]({routes:[{path:"/",name:"home",component:L},{path:"/login",name:"login",component:T},{path:"/recipes",name:"recipes",component:F},{path:"/recipe/:userID/:recipesID",name:"recipe",component:G},{path:"/register",name:"register",component:Z},{path:"/create",name:"create",component:re},{path:"*",redirect:"/"}]}),oe=a("0284"),ce=a.n(oe),le=a("ecee"),ue=a("c074");le["c"].add(ue["h"],ue["b"],ue["c"],ue["d"],ue["i"],ue["f"],ue["a"],ue["e"],ue["g"],ue["j"]),s["a"].config.productionTip=!1,s["a"].use(ce.a,{id:"UA-174260847-1",router:ne}),new s["a"]({router:ne,render:function(e){return e(k)}}).$mount("#app")},"6d69":function(e,t,a){"use strict";var s=a("7bed"),i=a.n(s);i.a},"7bed":function(e,t,a){},"85ec":function(e,t,a){},"8ebc":function(e,t,a){"use strict";var s=a("c66b"),i=a.n(s);i.a},"919e":function(e,t,a){},9885:function(e,t,a){},c4d7:function(e,t,a){"use strict";var s=a("e7be"),i=a.n(s);i.a},c66b:function(e,t,a){},c725:function(e,t,a){"use strict";var s=a("cf90"),i=a.n(s);i.a},cf38:function(e,t,a){"use strict";var s=a("9885"),i=a.n(s);i.a},cf90:function(e,t,a){},e7be:function(e,t,a){},e904:function(e,t,a){"use strict";var s=a("fefb"),i=a.n(s);i.a},fefb:function(e,t,a){}});
//# sourceMappingURL=app.51f0ea79.js.map