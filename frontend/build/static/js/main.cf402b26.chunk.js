(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/header-logo.855a8c98.svg"},27:function(e,t,n){e.exports=n(38)},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),i=n(8),u=(n(32),n(1)),l=n(2),s=n(23),p=n.n(s);var _=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:p.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},m=n(26),d=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return o.a.createElement(l.b,null,(function(){return n.loggedIn?o.a.createElement(t,n):o.a.createElement(l.a,{to:"/sign-in"})}))},f=n(9),h=n(10),b="https://auth.nomoreparties.co";var v=function(e){return o.a.createElement("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened")},o.a.createElement("form",{className:"popup__container popup__container_type_".concat(e.name," popup__item"),name:"popup__container_type_".concat(e.name),onSubmit:e.onSubmit,noValidate:!0},o.a.createElement("h2",{className:"popup__heading popup__heading_type_".concat(e.name)},e.title),e.children,o.a.createElement("button",{className:"popup__add-button popup__add-button_type_".concat(e.name),type:"submit"},e.buttonText),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_".concat(e.name),type:"button",onClick:e.onClose})))};var g=function(e){var t=Object(l.g)(),n=Object(a.useState)({email:"",password:""}),r=Object(u.a)(n,2),c=r[0],i=r[1];function s(e){var t=e.target,n=t.name,a=t.value;i(Object(h.a)(Object(h.a)({},c),{},Object(f.a)({},n,a)))}function p(n){var a,o;(n.preventDefault(),c.email&&c.password)&&(a=c.password,o=c.email,fetch("".concat(b,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,email:o})}).then((function(e){return e.json()})).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))).then((function(n){console.log(n),n.token&&(i({email:"",password:""}),e.handleLogin(),t.push("/cards"))})).catch((function(e){return console.log(e)}))}return o.a.createElement("div",{className:"login"},o.a.createElement(v,{name:"dark",title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",isOpen:!0,onSubmit:function(e){return p(e)}},o.a.createElement("input",{className:"popup__input popup__input_dark",name:"email",placeholder:"Email",required:!0,id:"email",type:"text",onChange:function(e){return s(e)}}),o.a.createElement("input",{className:"popup__input popup__input_dark",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password",type:"password",onChange:function(e){return s(e)}})))};var E=function(e){var t=Object(l.g)(),n=Object(a.useState)({email:"",password:""}),r=Object(u.a)(n,2),c=r[0],i=r[1];function s(e){var t=e.target,n=t.name,a=t.value;i(Object(h.a)(Object(h.a)({},c),{},Object(f.a)({},n,a)))}function p(e){var n,a;(e.preventDefault(),c.email&&c.password)?(n=c.password,a=c.email,fetch("".concat(b,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n,email:a})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){e?t.push("/sign-up"):console.log("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")})).catch((function(e){return console.log(e)})):console.log("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435")}return o.a.createElement("div",{className:"register"},o.a.createElement(v,{name:"dark",isOpen:!0,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){return p(e)}},o.a.createElement("input",{className:"popup__input popup__input_dark",name:"email",placeholder:"Email",required:!0,id:"email",type:"text",onChange:function(e){return s(e)}}),o.a.createElement("input",{className:"popup__input popup__input_dark",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password",type:"password",onChange:function(e){return s(e)}})))},y=n(25),O=o.a.createContext();var C=function(e){var t=e.card,n=e.handleCard,a=e.handleCardLike,r=e.handleCardDelete,c=o.a.useContext(O),i=c._id===t.owner._id,u="place__delete-button ".concat(i?"place__delete-button_visible":"place__delete-button_hidden"),l=t.likes.some((function(e){return e._id===c._id})),s="place__like-button ".concat(l&&"place__like-button_active");return o.a.createElement("div",{className:"place"},o.a.createElement("button",{className:"place__image-button",onClick:function(){n(t)}},o.a.createElement("img",{className:"place__image",src:t.link,alt:t.name})),o.a.createElement("div",{className:"place__info"},o.a.createElement("p",{className:"place__heading"},t.name),o.a.createElement("div",{className:"place__buttons"},o.a.createElement("button",{className:s,onClick:function(){return a(t)},"aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",type:"button"}),o.a.createElement("button",{className:"place__sumoflikes-button","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043b\u0430\u0439\u043a\u043e\u0432",type:"button"},t.likes?t.likes.length:0))),o.a.createElement("button",{className:u,onClick:function(){return r(t)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button"}))};var k=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,r=e.onEditAvatar,c=e.onCardClick,i=e.handleCardLike,u=e.handleCardDelete,l=o.a.useContext(O);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"cover"},o.a.createElement("div",{className:"cover__profile"},o.a.createElement("button",{className:"cover__image",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:r}),o.a.createElement("div",{className:"cover__heading-info"},o.a.createElement("h1",{className:"cover__heading"},l.name),o.a.createElement("button",{className:"cover__edit",onClick:n,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button"})),o.a.createElement("p",{className:"cover__subheading"},l.about)),o.a.createElement("button",{className:"cover__add",onClick:a,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",type:"button"})),o.a.createElement("section",{className:"places"},t.map((function(e){return o.a.createElement(C,{key:e._id,card:e,handleCard:c,handleCardLike:function(e){return i(e)},handleCardDelete:function(e){return u(e)}})}))))};var N=function(e){var t=e.card,n=e.onClose;return o.a.createElement("section",{className:"popup popup_type_photo ".concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__image-group popup__item"},o.a.createElement("img",{className:"popup__image",src:t?t.link:"",alt:t?t.name:""}),o.a.createElement("p",{className:"popup__text popup__text_type_photo"},t?t.name:""),o.a.createElement("button",{className:"popup__close-button popup__close-button_type_photo",onClick:n,type:"button"})))};var j=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa92020\xa0Mesto\xa0Russia"))},S=n(14),x=n(15),L=new(function(){function e(t){Object(S.a)(this,e),this._getResponseData=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))},this._url=t.baseUrl,this._headers=t.headers}return Object(x.a)(e,[{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"sendUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLike",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return n._getResponseData(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"d92f283c-c212-4fc6-810d-3af1a30b9902","Content-Type":"application/json"}});var w=function(e){var t=e.isOpen,n=e.onClose,r=e.onUpdateUser,c=e.isLoading,i=Object(a.useState)(""),l=Object(u.a)(i,2),s=l[0],p=l[1],_=Object(a.useState)(""),m=Object(u.a)(_,2),d=m[0],f=m[1],h=o.a.useContext(O);return Object(a.useEffect)((function(){p(h.name),f(h.about)}),[h]),o.a.createElement(v,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault(),r({name:s,about:d,avatar:h.avatar})}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"popup__text popup__text_type_name",name:"popup__text_type_name",placeholder:"\u0418\u043c\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"40",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return f(e.target.value)},type:"text",className:"popup__text popup__text_type_job",name:"popup__text_type_job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044f",minLength:"2",maxLength:"200",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")))};var D=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,r=e.isLoading,c=(o.a.useContext(O),o.a.useRef());return o.a.createElement(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault(),a(c.current.value)}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{ref:c,type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var I=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateCard,r=e.isLoading,c=o.a.useContext(O),i=o.a.useState(""),l=Object(u.a)(i,2),s=l[0],p=l[1],_=o.a.useState(""),m=Object(u.a)(_,2),d=m[0],f=m[1];return o.a.createElement(v,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){return function(e){e.preventDefault();var t={name:s,link:d,owner:{_id:c._id},likes:[]};a(t)}(e)}},o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return p(e.target.value)},type:"text",className:"popup__text popup__text_type_placename",name:"popup__text_type_placename",placeholder:"\u0413\u043e\u0440\u043d\u044b\u0439 \u0410\u043b\u0442\u0430\u0439",minLength:"2",maxLength:"30",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435.")),o.a.createElement("label",{className:"popup__input"},o.a.createElement("input",{onChange:function(e){return f(e.target.value)},type:"url",className:"popup__text popup__text_type_placelink",name:"popup__text_type_placelink",placeholder:"https://unsplash.com/example.jpg",required:!0}),o.a.createElement("span",{className:"popup__input-error"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430.")))};var T=function(e){var t=e.isOpen,n=e.onClose,a=e.onSubmit;function r(e){e.preventDefault(),a(),n()}return o.a.createElement(v,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){return r(e)}})},q=function(){function e(t,n){Object(S.a)(this,e),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(t.inputSelector)),this._button=this._form.querySelector(t.buttonSelector),this._fieldSelector=t.fieldSelector,this._errorSelector=t.errorSelector}return Object(x.a)(e,[{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._toggleSubmitButton(),this._inputList.forEach((function(t){var n=t.closest(e._fieldSelector).querySelector(e._errorSelector);t.addEventListener("input",(function(){e._isValid(t,n),e._toggleSubmitButton()}))}))}},{key:"_isValid",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_showInputError",value:function(e,t){t.classList.add("popup__input-error_active"),e.classList.add("popup__text_type_error"),e&&(t.textContent=e.validationMessage)}},{key:"_hideInputError",value:function(e,t){t.classList.remove("popup__input-error_active"),e.classList.remove("popup__text_type_error"),t.textContent=""}},{key:"formReset",value:function(){var e=this;this._inputList.forEach((function(t){var n=t.closest(e._fieldSelector).querySelector(e._errorSelector);e._hideInputError(t,n),e._form.reset(),e._toggleSubmitButton()}))}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput()?(this._button.classList.add("popup__add-button_inactive"),this._button.setAttribute("disabled",!0)):(this._button.classList.remove("popup__add-button_inactive"),this._button.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}]),e}(),U={formSelector:".popup__container",fieldSelector:".popup__input",inputSelector:".popup__text",errorSelector:".popup__input-error",buttonSelector:".popup__add-button"};var A=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],p=Object(a.useState)(!1),_=Object(u.a)(p,2),m=_[0],d=_[1],f=Object(a.useState)(!1),h=Object(u.a)(f,2),b=h[0],v=h[1],g=Object(a.useState)(),E=Object(u.a)(g,2),C=E[0],S=E[1],x=Object(a.useState)({}),A=Object(u.a)(x,2),R=A[0],P=A[1],J=Object(a.useState)([]),V=Object(u.a)(J,2),B=V[0],M=V[1],H=Object(a.useState)(!1),W=Object(u.a)(H,2),z=W[0],$=W[1],F=Object(a.useState)({}),G=Object(u.a)(F,2),K=G[0],Q=G[1];function X(){r(!1),d(!1),s(!1),v(!1),S(void 0)}return Object(a.useEffect)((function(){Promise.all([L.getUserInfo(),L.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];P(n),M(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=new q(U,document.querySelector(".popup__container_type_place"));return e.enableValidation(),e.formReset()}),[l]),Object(a.useEffect)((function(){var e=new q(U,document.querySelector(".popup__container_type_profile"));return e.enableValidation(),e.formReset()}),[n]),Object(a.useEffect)((function(){var e=new q(U,document.querySelector(".popup__container_type_avatar"));return e.enableValidation(),e.formReset()}),[m]),o.a.createElement("div",{className:"page"},o.a.createElement(O.Provider,{value:R},o.a.createElement(k,{cards:B,handleCardLike:function(e){return function(e){var t=e.likes.some((function(e){return e._id===R._id}));L.changeLike(e._id,!t).then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));M(n)})).catch((function(e){return console.log(e)}))}(e)},handleCardDelete:function(e){return function(e){v(!0),Q(e)}(e)},onEditProfile:function(){r(!0)},onAddPlace:function(){s(!0)},onEditAvatar:function(){d(!0)},onCardClick:function(e){S(e)}}),o.a.createElement(w,{isLoading:z,isOpen:n,onClose:X,onUpdateUser:function(e){return function(e){$(!0),L.sendUserInfo(e).then((function(){X(),P(e)})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))}(e)}}),o.a.createElement(I,{isLoading:z,isOpen:l,onClose:X,onUpdateCard:function(e){return function(e){$(!0),L.postNewCard(e).then((function(e){M([e].concat(Object(y.a)(B))),X()})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))}(e)}}),o.a.createElement(T,{isOpen:b,onClose:X,onSubmit:function(){L.deleteCard(K._id).then((function(){M(B.filter((function(e){return e._id!==K._id})))})).catch((function(e){return console.log(e)}))}}),o.a.createElement(D,{isLoading:z,isOpen:m,onClose:X,onUpdateAvatar:function(e){return function(e){$(!0),L.changeAvatar(e).then((function(){X(),P({name:R.name,about:R.about,avatar:e})})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))}(e)}}),o.a.createElement(N,{card:C,onClose:X}),o.a.createElement(j,null)))};var R=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"page"},o.a.createElement(_,{loggedIn:n}),o.a.createElement("main",{className:"content"},o.a.createElement(l.d,null,o.a.createElement(d,{path:"/cards",loggedIn:n,component:A}),o.a.createElement(l.b,{path:"/sign-in"},o.a.createElement(E,null)),o.a.createElement(l.b,{path:"/sign-up"},o.a.createElement(g,{handleLogin:function(){r(!0)}})),o.a.createElement(l.b,{exact:!0,path:"/"},n?o.a.createElement(l.a,{to:"/cards"}):o.a.createElement(l.a,{to:"/sign-in"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.cf402b26.chunk.js.map