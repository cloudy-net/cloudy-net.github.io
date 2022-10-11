(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))l(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerpolicy&&(r.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?r.credentials="include":_.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(_){if(_.ep)return;_.ep=!0;const r=n(_);fetch(_.href,r)}})();var D,f,G,S,F,L={},R=[],Q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function j(t){var e=t.parentNode;e&&e.removeChild(t)}function Z(t,e,n){var l,_,r,a={};for(r in e)r=="key"?l=e[r]:r=="ref"?_=e[r]:a[r]=e[r];if(arguments.length>2&&(a.children=arguments.length>3?D.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)a[r]===void 0&&(a[r]=t.defaultProps[r]);return N(t,a,l,_,null)}function N(t,e,n,l,_){var r={type:t,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_==null?++G:_};return _==null&&f.vnode!=null&&f.vnode(r),r}function E(t){return t.children}function T(t,e){this.props=t,this.context=e}function w(t,e){if(e==null)return t.__?w(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?w(t):null}function z(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return z(t)}}function H(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!M.__r++||F!==f.debounceRendering)&&((F=f.debounceRendering)||setTimeout)(M)}function M(){for(var t;M.__r=S.length;)t=S.sort(function(e,n){return e.__v.__b-n.__v.__b}),S=[],t.some(function(e){var n,l,_,r,a,u;e.__d&&(a=(r=(n=e).__v).__e,(u=n.__P)&&(l=[],(_=k({},r)).__v=r.__v+1,I(u,r,_,n.__n,u.ownerSVGElement!==void 0,r.__h!=null?[a]:null,l,a==null?w(r):a,r.__h),q(l,r),r.__e!=a&&z(r)))})}function V(t,e,n,l,_,r,a,u,p,h){var o,v,c,i,d,C,y,m=l&&l.__k||R,b=m.length;for(n.__k=[],o=0;o<e.length;o++)if((i=n.__k[o]=(i=e[o])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?N(null,i,null,null,i):Array.isArray(i)?N(E,{children:i},null,null,null):i.__b>0?N(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=m[o])===null||c&&i.key==c.key&&i.type===c.type)m[o]=void 0;else for(v=0;v<b;v++){if((c=m[v])&&i.key==c.key&&i.type===c.type){m[v]=void 0;break}c=null}I(t,i,c=c||L,_,r,a,u,p,h),d=i.__e,(v=i.ref)&&c.ref!=v&&(y||(y=[]),c.ref&&y.push(c.ref,null,i),y.push(v,i.__c||d,i)),d!=null?(C==null&&(C=d),typeof i.type=="function"&&i.__k===c.__k?i.__d=p=Y(i,p,t):p=K(t,i,c,m,d,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=t&&(p=w(c))}for(n.__e=C,o=b;o--;)m[o]!=null&&(typeof n.type=="function"&&m[o].__e!=null&&m[o].__e==n.__d&&(n.__d=w(l,o+1)),X(m[o],m[o]));if(y)for(o=0;o<y.length;o++)J(y[o],y[++o],y[++o])}function Y(t,e,n){for(var l,_=t.__k,r=0;_&&r<_.length;r++)(l=_[r])&&(l.__=t,e=typeof l.type=="function"?Y(l,e,n):K(n,l,l,_,l.__e,e));return e}function K(t,e,n,l,_,r){var a,u,p;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(n==null||_!=r||_.parentNode==null)e:if(r==null||r.parentNode!==t)t.appendChild(_),a=null;else{for(u=r,p=0;(u=u.nextSibling)&&p<l.length;p+=2)if(u==_)break e;t.insertBefore(_,r),a=r}return a!==void 0?a:_.nextSibling}function ee(t,e,n,l,_){var r;for(r in n)r==="children"||r==="key"||r in e||U(t,r,null,n[r],l);for(r in e)_&&typeof e[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===e[r]||U(t,r,e[r],n[r],l)}function B(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||Q.test(e)?n:n+"px"}function U(t,e,n,l,_){var r;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)n&&e in n||B(t.style,e,"");if(n)for(e in n)l&&n[e]===l[e]||B(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=n,n?l||t.addEventListener(e,r?W:O,r):t.removeEventListener(e,r?W:O,r);else if(e!=="dangerouslySetInnerHTML"){if(_)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function O(t){this.l[t.type+!1](f.event?f.event(t):t)}function W(t){this.l[t.type+!0](f.event?f.event(t):t)}function I(t,e,n,l,_,r,a,u,p){var h,o,v,c,i,d,C,y,m,b,x,$,A,g=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=e.__e=n.__e,e.__h=null,r=[u]),(h=f.__b)&&h(e);try{e:if(typeof g=="function"){if(y=e.props,m=(h=g.contextType)&&l[h.__c],b=h?m?m.props.value:h.__:l,n.__c?C=(o=e.__c=n.__c).__=o.__E:("prototype"in g&&g.prototype.render?e.__c=o=new g(y,b):(e.__c=o=new T(y,b),o.constructor=g,o.render=ne),m&&m.sub(o),o.props=y,o.state||(o.state={}),o.context=b,o.__n=l,v=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,g.getDerivedStateFromProps(y,o.__s))),c=o.props,i=o.state,v)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&y!==c&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(y,b),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(y,o.__s,b)===!1||e.__v===n.__v){o.props=y,o.state=o.__s,e.__v!==n.__v&&(o.__d=!1),o.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(P){P&&(P.__=e)}),o.__h.length&&a.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(y,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(c,i,d)})}if(o.context=b,o.props=y,o.__v=e,o.__P=t,x=f.__r,$=0,"prototype"in g&&g.prototype.render)o.state=o.__s,o.__d=!1,x&&x(e),h=o.render(o.props,o.state,o.context);else do o.__d=!1,x&&x(e),h=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++$<25);o.state=o.__s,o.getChildContext!=null&&(l=k(k({},l),o.getChildContext())),v||o.getSnapshotBeforeUpdate==null||(d=o.getSnapshotBeforeUpdate(c,i)),A=h!=null&&h.type===E&&h.key==null?h.props.children:h,V(t,Array.isArray(A)?A:[A],e,n,l,_,r,a,u,p),o.base=e.__e,e.__h=null,o.__h.length&&a.push(o),C&&(o.__E=o.__=null),o.__e=!1}else r==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=te(n.__e,e,n,l,_,r,a,p);(h=f.diffed)&&h(e)}catch(P){e.__v=null,(p||r!=null)&&(e.__e=u,e.__h=!!p,r[r.indexOf(u)]=null),f.__e(P,e,n)}}function q(t,e){f.__c&&f.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(l){l.call(n)})}catch(l){f.__e(l,n.__v)}})}function te(t,e,n,l,_,r,a,u){var p,h,o,v=n.props,c=e.props,i=e.type,d=0;if(i==="svg"&&(_=!0),r!=null){for(;d<r.length;d++)if((p=r[d])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){t=p,r[d]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=_?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),r=null,u=!1}if(i===null)v===c||u&&t.data===c||(t.data=c);else{if(r=r&&D.call(t.childNodes),h=(v=n.props||L).dangerouslySetInnerHTML,o=c.dangerouslySetInnerHTML,!u){if(r!=null)for(v={},d=0;d<t.attributes.length;d++)v[t.attributes[d].name]=t.attributes[d].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===t.innerHTML)||(t.innerHTML=o&&o.__html||""))}if(ee(t,c,v,_,u),o)e.__k=[];else if(d=e.props.children,V(t,Array.isArray(d)?d:[d],e,n,l,_&&i!=="foreignObject",r,a,r?r[0]:n.__k&&w(n,0),u),r!=null)for(d=r.length;d--;)r[d]!=null&&j(r[d]);u||("value"in c&&(d=c.value)!==void 0&&(d!==t.value||i==="progress"&&!d||i==="option"&&d!==v.value)&&U(t,"value",d,v.value,!1),"checked"in c&&(d=c.checked)!==void 0&&d!==t.checked&&U(t,"checked",d,v.checked,!1))}return t}function J(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(l){f.__e(l,n)}}function X(t,e,n){var l,_;if(f.unmount&&f.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||J(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){f.__e(r,e)}l.base=l.__P=null,t.__c=void 0}if(l=t.__k)for(_=0;_<l.length;_++)l[_]&&X(l[_],e,typeof t.type!="function");n||t.__e==null||j(t.__e),t.__=t.__e=t.__d=void 0}function ne(t,e,n){return this.constructor(t,n)}function re(t,e,n){var l,_,r;f.__&&f.__(t,e),_=(l=typeof n=="function")?null:n&&n.__k||e.__k,r=[],I(e,t=(!l&&n||e).__k=Z(E,null,[t]),_||L,L,e.ownerSVGElement!==void 0,!l&&n?[n]:_?null:e.firstChild?D.call(e.childNodes):null,r,!l&&n?n:_?_.__e:e.firstChild,l),q(r,t)}D=R.slice,f={__e:function(t,e,n,l){for(var _,r,a;e=e.__;)if((_=e.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(t)),a=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(t,l||{}),a=_.__d),a)return _.__E=_}catch(u){t=u}throw t}},G=0,T.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),H(this))},T.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),H(this))},T.prototype.render=E,S=[],M.__r=0;var oe=0;function s(t,e,n,l,_){var r,a,u={};for(a in e)a=="ref"?r=e[a]:u[a]=e[a];var p={type:t,props:u,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--oe,__source:_,__self:l};if(typeof t=="function"&&(r=t.defaultProps))for(a in r)u[a]===void 0&&(u[a]=r[a]);return f.vnode&&f.vnode(p),p}const le=()=>s("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:s("div",{class:"container",children:[s("a",{class:"navbar-brand",href:"#",children:"\u2601 Cloudy CMS"}),s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:s("span",{class:"navbar-toggler-icon"})}),s("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:s("ul",{class:"navbar-nav ms-auto",children:[s("li",{class:"nav-item",children:s("a",{class:"nav-link",href:"https://github.com/cloudy-cms/Cloudy.CMS",children:"Github"})}),s("li",{class:"nav-item",children:s("a",{class:"nav-link",href:"https://twitter.com/cloudydotnet",children:"Twitter"})}),s("li",{class:"nav-item",children:s("a",{class:"nav-link",href:"https://www.youtube.com/channel/UC8BRpzvX5J9n8-2G1KIf5xg",children:"Youtube"})})]})})]})});function _e(){return s(E,{children:[s(le,{}),s("div",{class:"container",children:[s("section",{class:"hero",children:[s("hero-cloud",{children:"\u2601"}),s("h1",{class:"heading",children:"We don't make the CMS - you do."}),s("div",{class:"intro",children:"Create CRUD applications using EF Core as truth"})]}),s("sepa-rator",{}),s("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pbCaz1tnSEs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),s("sepa-rator",{}),s("section",{children:s("ul",{class:"usp-list",children:[s("li",{class:"usp-item",children:[s("h3",{class:"usp-heading",children:"EF Core is the data model"}),s("div",{class:"usp-text",children:"Your data model is stored in your EF Core context - Not in the database."})]}),s("li",{class:"usp-item",children:[s("h3",{class:"usp-heading",children:"Extensible, automatic scaffolding"}),s("div",{class:"usp-text",children:["Using regular Razor partials, UI Hints and ",s("code",{children:"[CustomAttributes]"}),", you extend the scaffolding that the CMS toolkit provides you."]})]})]})}),s("sepa-rator",{}),s("h3",{children:"Pricing tiers"}),s("dl",{children:[s("dt",{children:"Non-commercial or OSS projects use"}),s("dd",{children:"Free"}),s("dt",{children:["Companies/freelancers with revenue ",s("span",{title:"Less than ...",children:"<"})," $100,000/year"]}),s("dd",{children:"$9.95 per month (excl VAT) for unlimited production instances"}),s("dt",{children:["Companies with revenue ",s("span",{title:"Greater than ...",children:">"})," $100,000/year"]}),s("dd",{children:"$99.95 per month (excl VAT) per production instance"})]}),s("sepa-rator",{})]}),s("footer",{class:"site-footer",children:s("div",{class:"container",children:s("div",{class:"legalese",children:["Cloudy CMS is a product by Bjorn Goransson Invest AB. Company ISIN: SE559204344101",s("br",{}),"Contact: +46 (0)76 067 6064 bjorn.a.goransson@gmail.com 2022 \xA9 Bjorn Goransson Invest AB"]})})})]})}re(s(_e,{}),document.getElementById("app"));
