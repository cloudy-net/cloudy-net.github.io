(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var M,u,_e,E,q,U={},te=[],de=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function H(e,_){for(var t in _)e[t]=_[t];return e}function ne(e){var _=e.parentNode;_&&_.removeChild(e)}function he(e,_,t){var r,l,o,i={};for(o in _)o=="key"?r=_[o]:o=="ref"?l=_[o]:i[o]=_[o];if(arguments.length>2&&(i.children=arguments.length>3?M.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return w(e,i,r,l,null)}function w(e,_,t,r,l){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++_e:l};return l==null&&u.vnode!=null&&u.vnode(o),o}function x(e){return e.children}function A(e,_){this.props=e,this.context=_}function $(e,_){if(_==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?$(e):null}function oe(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return oe(e)}}function R(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!D.__r++||q!==u.debounceRendering)&&((q=u.debounceRendering)||setTimeout)(D)}function D(){for(var e;D.__r=E.length;)e=E.sort(function(_,t){return _.__v.__b-t.__v.__b}),E=[],e.some(function(_){var t,r,l,o,i,f;_.__d&&(i=(o=(t=_).__v).__e,(f=t.__P)&&(r=[],(l=H({},o)).__v=o.__v+1,I(f,o,l,t.__n,f.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i==null?$(o):i,o.__h),ce(r,o),o.__e!=i&&oe(o)))})}function re(e,_,t,r,l,o,i,f,p,d){var n,h,s,c,a,N,v,m=r&&r.__k||te,k=m.length;for(t.__k=[],n=0;n<_.length;n++)if((c=t.__k[n]=(c=_[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?w(null,c,null,null,c):Array.isArray(c)?w(x,{children:c},null,null,null):c.__b>0?w(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(s=m[n])===null||s&&c.key==s.key&&c.type===s.type)m[n]=void 0;else for(h=0;h<k;h++){if((s=m[h])&&c.key==s.key&&c.type===s.type){m[h]=void 0;break}s=null}I(e,c,s=s||U,l,o,i,f,p,d),a=c.__e,(h=c.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,c),v.push(h,c.__c||a,c)),a!=null?(N==null&&(N=a),typeof c.type=="function"&&c.__k===s.__k?c.__d=p=le(c,p,e):p=ie(e,c,s,m,a,p),typeof t.type=="function"&&(t.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=$(s))}for(t.__e=N,n=k;n--;)m[n]!=null&&(typeof t.type=="function"&&m[n].__e!=null&&m[n].__e==t.__d&&(t.__d=$(r,n+1)),fe(m[n],m[n]));if(v)for(n=0;n<v.length;n++)ue(v[n],v[++n],v[++n])}function le(e,_,t){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,_=typeof r.type=="function"?le(r,_,t):ie(t,r,r,l,r.__e,_));return _}function ie(e,_,t,r,l,o){var i,f,p;if(_.__d!==void 0)i=_.__d,_.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),i=null;else{for(f=o,p=0;(f=f.nextSibling)&&p<r.length;p+=2)if(f==l)break e;e.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function ve(e,_,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in _||F(e,o,null,t[o],r);for(o in _)l&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||F(e,o,_[o],t[o],r)}function B(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||de.test(_)?t:t+"px"}function F(e,_,t,r,l){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||B(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||B(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?G:z,o):e.removeEventListener(_,o?G:z,o);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function z(e){this.l[e.type+!1](u.event?u.event(e):e)}function G(e){this.l[e.type+!0](u.event?u.event(e):e)}function I(e,_,t,r,l,o,i,f,p){var d,n,h,s,c,a,N,v,m,k,C,j,P,g=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,f=_.__e=t.__e,_.__h=null,o=[f]),(d=u.__b)&&d(_);try{e:if(typeof g=="function"){if(v=_.props,m=(d=g.contextType)&&r[d.__c],k=d?m?m.props.value:d.__:r,t.__c?N=(n=_.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?_.__c=n=new g(v,k):(_.__c=n=new A(v,k),n.constructor=g,n.render=me),m&&m.sub(n),n.props=v,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=H({},n.__s)),H(n.__s,g.getDerivedStateFromProps(v,n.__s))),s=n.props,c=n.state,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&v!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,k),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,k)===!1||_.__v===t.__v){n.props=v,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(S){S&&(S.__=_)}),n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,c,a)})}if(n.context=k,n.props=v,n.__v=_,n.__P=e,C=u.__r,j=0,"prototype"in g&&g.prototype.render)n.state=n.__s,n.__d=!1,C&&C(_),d=n.render(n.props,n.state,n.context);else do n.__d=!1,C&&C(_),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++j<25);n.state=n.__s,n.getChildContext!=null&&(r=H(H({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(a=n.getSnapshotBeforeUpdate(s,c)),P=d!=null&&d.type===x&&d.key==null?d.props.children:d,re(e,Array.isArray(P)?P:[P],_,t,r,l,o,i,f,p),n.base=_.__e,_.__h=null,n.__h.length&&i.push(n),N&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=ye(t.__e,_,t,r,l,o,i,p);(d=u.diffed)&&d(_)}catch(S){_.__v=null,(p||o!=null)&&(_.__e=f,_.__h=!!p,o[o.indexOf(f)]=null),u.__e(S,_,t)}}function ce(e,_){u.__c&&u.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function ye(e,_,t,r,l,o,i,f){var p,d,n,h=t.props,s=_.props,c=_.type,a=0;if(c==="svg"&&(l=!0),o!=null){for(;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){e=p,o[a]=null;break}}if(e==null){if(c===null)return document.createTextNode(s);e=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,s.is&&s),o=null,f=!1}if(c===null)h===s||f&&e.data===s||(e.data=s);else{if(o=o&&M.call(e.childNodes),d=(h=t.props||U).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},a=0;a<e.attributes.length;a++)h[e.attributes[a].name]=e.attributes[a].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(ve(e,s,h,l,f),n)_.__k=[];else if(a=_.props.children,re(e,Array.isArray(a)?a:[a],_,t,r,l&&c!=="foreignObject",o,i,o?o[0]:t.__k&&$(t,0),f),o!=null)for(a=o.length;a--;)o[a]!=null&&ne(o[a]);f||("value"in s&&(a=s.value)!==void 0&&(a!==e.value||c==="progress"&&!a||c==="option"&&a!==h.value)&&F(e,"value",a,h.value,!1),"checked"in s&&(a=s.checked)!==void 0&&a!==e.checked&&F(e,"checked",a,h.checked,!1))}return e}function ue(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){u.__e(r,t)}}function fe(e,_,t){var r,l;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ue(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&fe(r[l],_,typeof e.type!="function");t||e.__e==null||ne(e.__e),e.__=e.__e=e.__d=void 0}function me(e,_,t){return this.constructor(e,t)}function ge(e,_,t){var r,l,o;u.__&&u.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],I(_,e=(!r&&t||_).__k=he(x,null,[e]),l||U,U,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?M.call(_.childNodes):null,o,!r&&t?t:l?l.__e:_.firstChild,r),ce(o,e)}M=te.slice,u={__e:function(e,_,t,r){for(var l,o,i;_=_.__;)if((l=_.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(f){e=f}throw e}},_e=0,A.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof e=="function"&&(e=e(H({},t),this.props)),e&&H(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),R(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},A.prototype.render=x,E=[],D.__r=0;var se,y,O,K,V=0,ae=[],L=[],J=u.__b,Q=u.__r,X=u.diffed,Y=u.__c,Z=u.unmount;function ke(e,_){u.__h&&u.__h(y,e,V||_),V=0;var t=y.__H||(y.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:L}),t.__[e]}function be(e){return V=1,He(pe,e)}function He(e,_,t){var r=ke(se++,2);if(r.t=e,!r.__c&&(r.__=[t?t(_):pe(void 0,_),function(o){var i=r.__N?r.__N[0]:r.__[0],f=r.t(i,o);i!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var l=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,i,f){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(n){return n.__c});if(p.every(function(n){return!n.__N}))return!l||l.call(this,o,i,f);var d=!1;return p.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(d=!0)}}),!!d&&(!l||l.call(this,o,i,f))}}return r.__N||r.__}function Ne(){for(var e;e=ae.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(T),e.__H.__h.forEach(W),e.__H.__h=[]}catch(_){e.__H.__h=[],u.__e(_,e.__v)}}u.__b=function(e){typeof e.type!="function"||e.o||e.type===x?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),y=null,J&&J(e)},u.__r=function(e){Q&&Q(e),se=0;var _=(y=e.__c).__H;_&&(O===y?(_.__h=[],y.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=L,t.__N=t.i=void 0})):(_.__h.forEach(T),_.__h.forEach(W),_.__h=[])),O=y},u.diffed=function(e){X&&X(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&(ae.push(_)!==1&&K===u.requestAnimationFrame||((K=u.requestAnimationFrame)||$e)(Ne)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==L&&(t.__=t.__V),t.i=void 0,t.__V=L})),O=y=null},u.__c=function(e,_){_.some(function(t){try{t.__h.forEach(T),t.__h=t.__h.filter(function(r){return!r.__||W(r)})}catch(r){_.some(function(l){l.__h&&(l.__h=[])}),_=[],u.__e(r,t.__v)}}),Y&&Y(e,_)},u.unmount=function(e){Z&&Z(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{T(r)}catch(l){_=l}}),t.__H=void 0,_&&u.__e(_,t.__v))};var ee=typeof requestAnimationFrame=="function";function $e(e){var _,t=function(){clearTimeout(r),ee&&cancelAnimationFrame(_),setTimeout(e)},r=setTimeout(t,100);ee&&(_=requestAnimationFrame(t))}function T(e){var _=y,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),y=_}function W(e){var _=y;e.__c=e.__(),y=_}function pe(e,_){return typeof _=="function"?_(e):_}var xe=0;function b(e,_,t,r,l){var o,i,f={};for(i in _)i=="ref"?o=_[i]:f[i]=_[i];var p={type:e,props:f,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--xe,__source:l,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(i in o)f[i]===void 0&&(f[i]=o[i]);return u.vnode&&u.vnode(p),p}function Ce(){const[e,_]=be(0);return b(x,{children:[b("div",{children:b("a",{href:"https://preactjs.com",target:"_blank",children:b("img",{src:"/images/logo.svg",class:"logo preact",alt:"Preact logo"})})}),b("h1",{children:"Vite + Preact"}),b("div",{class:"card",children:[b("button",{onClick:()=>_(t=>t+1),children:["count is ",e]}),b("p",{children:["Edit ",b("code",{children:"src/app.jsx"})," and save to test HMR"]})]}),b("p",{class:"read-the-docs",children:"Click on the Vite and Preact logos to learn more"})]})}ge(b(Ce,{}),document.getElementById("app"));
