let t,e,l,n=0,s=!1,o=!1,r=!1,c=!1;const i=window,a=document,$={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,l,n)=>t.addEventListener(e,l,n),rel:(t,e,l,n)=>t.removeEventListener(e,l,n)},f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,d=t=>u.get(t),m=(t,e)=>u.set(e.s=t,e),p=t=>console.error(t),h=new Map,y=new Map,w=[],b=[],_=[],g=(t,e)=>l=>{t.push(l),s||(s=!0,e&&4&$.t?v(k):$.raf(k))},j=(t,e)=>{let l=0,n=0;for(;l<t.length&&(n=performance.now())<e;)try{t[l++](n)}catch(s){p(s)}l===t.length?t.length=0:0!==l&&t.splice(0,l)},k=()=>{n++,(t=>{for(let l=0;l<t.length;l++)try{t[l](performance.now())}catch(e){p(e)}t.length=0})(w);const t=2==(6&$.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;j(b,t),j(_,t),b.length>0&&(_.push(...b),b.length=0),(s=w.length+b.length+_.length>0)?$.raf(k):n=0},v=t=>Promise.resolve().then(t),S=g(b,!0),M={},R=t=>"object"==(t=typeof t)||"function"===t,x=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_slot("./p-d8631f0b.js").then(()=>{$.o=i.__stencil_cssshim}),U=async()=>{$.o=i.__stencil_cssshim;const t=new RegExp("/slot(\\.esm)?\\.js($|\\?|#)"),e=Array.from(a.querySelectorAll("script")).find(e=>t.test(e.src)||"slot"===e.getAttribute("data-stencil-namespace")),l=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,i.location.href));return L(t.href),window.customElements||await __sc_import_slot("./p-d0882b30.js"),Object.assign(Object.assign({},l),{resourcesUrl:t.href})}},L=t=>{const e=(()=>`__sc_import_${"slot".replace(/\s|-/g,"_")}`)();try{i[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const n=new Map;i[e]=l=>{const s=new URL(l,t).href;let o=n.get(s);if(!o){const t=a.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${e}.m = m;`],{type:"application/javascript"})),o=new Promise(l=>{t.onload=()=>{l(i[e].m),t.remove()}}),n.set(s,o),a.head.appendChild(t)}return o}}},O=new WeakMap,P=t=>"sc-"+t,T=(t,e,...l)=>{let n=null,s=null,o=!1,r=!1,c=[];const i=e=>{for(let l=0;l<e.length;l++)n=e[l],Array.isArray(n)?i(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof t&&!R(n))&&(n=String(n)),o&&r?c[c.length-1].i+=n:c.push(o?C(null,n):n),r=o)};if(i(l),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=C(t,null);return a.$=e,c.length>0&&(a.u=c),a.p=s,a},C=(t,e)=>({t:0,h:t,i:e,_:null,u:null,$:null,p:null}),E={},I=(t,e,l,n,s,o)=>{if(l===n)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,s=F(l),o=F(n);e.remove(...s.filter(t=>t&&!o.includes(t))),e.add(...o.filter(t=>t&&!s.includes(t)))}else{const i=R(n);if((r||i&&null!==n)&&!s)try{if(t.tagName.includes("-"))t[e]=n;else{let s=null==n?"":n;"list"===e?r=!1:null!=l&&t[e]==s||(t[e]=s)}}catch(c){}null==n||!1===n?t.removeAttribute(e):(!r||4&o||s)&&!i&&t.setAttribute(e,n=!0===n?"":n)}},A=/\s/,F=t=>t?t.split(A):[],N=(t,e,l,n)=>{const s=11===e._.nodeType&&e._.host?e._.host:e._,o=t&&t.$||M,r=e.$||M;for(n in o)n in r||I(s,n,o[n],void 0,l,e.t);for(n in r)I(s,n,o[n],r[n],l,e.t)},W=(n,s,r,i)=>{let $,f,u,d=s.u[r],m=0;if(o||(c=!0,"slot"===d.h&&(t&&i.classList.add(t+"-s"),d.t|=d.u?2:1)),1&d.t)$=d._=a.createTextNode("");else if($=d._=a.createElement(2&d.t?"slot-fb":d.h),N(null,d,!1),(t=>null!=t)(t)&&$["s-si"]!==t&&$.classList.add($["s-si"]=t),d.u)for(m=0;m<d.u.length;++m)(f=W(n,d,m,$))&&$.appendChild(f);return $["s-hn"]=l,3&d.t&&($["s-sr"]=!0,$["s-cr"]=e,$["s-sn"]=d.p||"",(u=n&&n.u&&n.u[r])&&u.h===d.h&&n._&&q(n._,!1)),$},q=(t,e)=>{$.t|=1;const n=t.childNodes;for(let s=n.length-1;s>=0;s--){const t=n[s];t["s-hn"]!==l&&t["s-ol"]&&(z(t).insertBefore(t,Y(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&q(t,e)}$.t&=-2},B=(t,e,l,n,s,o)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;s<=o;++s)n[s]&&(r=W(null,l,s,t))&&(n[s]._=r,c.insertBefore(r,Y(e)))},H=(t,e,l,n,s)=>{for(;e<=l;++e)(n=t[e])&&(r=!0,(s=n._)["s-ol"]?s["s-ol"].remove():q(s,!0),s.remove())},V=(t,e)=>t.h===e.h&&("slot"!==t.h||t.p===e.p),Y=t=>t&&t["s-ol"]||t,z=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,D=(t,e)=>{const l=e._=t._,n=t.u,s=e.u;"slot"===e.h||N(t,e,!1),null!==n&&null!==s?((t,e,l,n)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],$=n.length-1,f=n[0],u=n[$];for(;o<=c&&r<=$;)null==i?i=e[++o]:null==a?a=e[--c]:null==f?f=n[++r]:null==u?u=n[--$]:V(i,f)?(D(i,f),i=e[++o],f=n[++r]):V(a,u)?(D(a,u),a=e[--c],u=n[--$]):V(i,u)?("slot"!==i.h&&"slot"!==u.h||q(i._.parentNode,!1),D(i,u),t.insertBefore(i._,a._.nextSibling),i=e[++o],u=n[--$]):V(a,f)?("slot"!==i.h&&"slot"!==u.h||q(a._.parentNode,!1),D(a,f),t.insertBefore(a._,i._),a=e[--c],f=n[++r]):(s=W(e&&e[r],l,r,t),f=n[++r],s&&z(i._).insertBefore(s,Y(i._)));o>c?B(t,null==n[$+1]?null:n[$+1]._,l,n,r,$):r>$&&H(e,o,c)})(l,n,e,s):null!==s?B(l,null,e,s,0,s.length-1):null!==n&&H(n,0,n.length-1)},G=t=>{let e,l,n,s,o,r,c=t.childNodes;for(l=0,n=c.length;l<n;l++)if(1===(e=c[l]).nodeType){if(e["s-sr"])for(o=e["s-sn"],e.hidden=!1,s=0;s<n;s++)if(c[s]["s-hn"]!==e["s-hn"])if(r=c[s].nodeType,""!==o){if(1===r&&o===c[s].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[s].textContent.trim()){e.hidden=!0;break}G(e)}},J=[],K=t=>{let e,l,n,s,o=t.childNodes,c=o.length,i=0,a=0,$=0;for(c=o.length;i<c;i++){if((e=o[i])["s-sr"]&&(l=e["s-cr"]))for(s=e["s-sn"],a=(n=l.parentNode.childNodes).length-1;a>=0;a--)(l=n[a])["s-cn"]||l["s-nr"]||l["s-hn"]===e["s-hn"]||((3===($=l.nodeType)||8===$)&&""===s||1===$&&null===l.getAttribute("slot")&&""===s||1===$&&l.getAttribute("slot")===s)&&(J.some(t=>t.g===l)||(r=!0,l["s-sn"]=s,J.push({j:e,g:l})));1===e.nodeType&&K(e)}},Q=(t,e)=>{e&&!t.k&&e["s-p"].push(new Promise(e=>t.k=e))},X=(t,e,l,n)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const s=e.s,o=()=>Z(t,e,l,s,n);return Q(e,e.v),lt(void 0,()=>S(o))},Z=(n,s,i,f,u)=>{const d=n["s-rc"];u&&((t,e)=>{const l=((t,e)=>{let l=P(e.S),n=y.get(l);if(t=11===t.nodeType?t:a,n)if("string"==typeof n){let e,s=O.get(t=t.head||t);s||O.set(t,s=new Set),s.has(l)||(t.host&&(e=t.firstElementChild)&&"STYLE"===e.tagName?e.innerHTML=n:((e=a.createElement("style")).innerHTML=n,t.insertBefore(e,t.querySelector("link"))),s&&s.add(l))}else t.adoptedStyleSheets.includes(n)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,n]);return l})(t.getRootNode(),e);10&e.t&&(t["s-sc"]=l,t.classList.add(l+"-h"),2&e.t&&t.classList.add(l+"-s"))})(n,i);try{((n,s,i,f)=>{l=n.tagName;const u=s.M||C(null,null),d=(t=>t&&t.h===E)(f)?f:T(null,null,f);if(d.h=null,d.t|=4,s.M=d,d._=u._=n,t=n["s-sc"],e=n["s-cr"],o=!1,r=!1,D(u,d),c){K(d._);for(let t=0;t<J.length;t++){const e=J[t];if(!e.g["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.g,e.g.parentNode.insertBefore(e.g["s-ol"]=t,e.g)}}$.t|=1;for(let t=0;t<J.length;t++){const e=J[t],l=e.j.parentNode;let n=e.j.nextSibling,s=e.g["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.g["s-sn"]&&l===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){n=t;break}}(!n&&l!==e.g.parentNode||e.g.nextSibling!==n)&&e.g!==n&&l.insertBefore(e.g,n)}$.t&=-2}r&&G(d._),J.length=0})(n,s,0,f.render())}catch(m){p(m)}s.t&=-17,s.t|=2,d&&(d.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>tt(n,s,i);0===t.length?e():(Promise.all(t).then(e),s.t|=4,t.length=0)}},tt=(t,e,l)=>{const n=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.R(t),n||et()),e.k&&(e.k(),e.k=void 0),512&e.t&&v(()=>X(t,e,l,!1)),e.t&=-517},et=()=>{a.documentElement.classList.add("hydrated"),$.t|=2},lt=(t,e)=>t&&t.then?t.then(e):e(),nt=(t,e)=>(e.U&&Object.entries(e.U).forEach(([t,[e]])=>{}),t),st=(t,e,l,n,s,o,r)=>{let c,i,a,$;if(1===o.nodeType){for((c=o.getAttribute("c-id"))&&((i=c.split("."))[0]!==r&&"0"!==i[0]||(a={t:0,L:i[0],O:i[1],P:i[2],T:i[3],h:o.tagName.toLowerCase(),_:o,$:null,u:null,C:null,p:null,i:null},e.push(a),o.removeAttribute("c-id"),t.u||(t.u=[]),t.u[a.T]=a,t=a,n&&"0"===a.P&&(n[a.T]=a._))),$=o.childNodes.length-1;$>=0;$--)st(t,e,l,n,s,o.childNodes[$],r);if(o.shadowRoot)for($=o.shadowRoot.childNodes.length-1;$>=0;$--)st(t,e,l,n,s,o.shadowRoot.childNodes[$],r)}else if(8===o.nodeType)(i=o.nodeValue.split("."))[1]!==r&&"0"!==i[1]||(a={t:0,L:i[1],O:i[2],P:i[3],T:i[4],_:o,$:null,u:null,C:null,p:null,h:null,i:null},"t"===(c=i[0])?(a._=o.nextSibling,a._&&3===a._.nodeType&&(a.i=a._.textContent,e.push(a),o.remove(),t.u||(t.u=[]),t.u[a.T]=a,n&&"0"===a.P&&(n[a.T]=a._))):a.L===r&&("s"===c?(a.h="slot",o["s-sn"]=i[5]?a.p=i[5]:"",o["s-sr"]=!0,l.push(a),t.u||(t.u=[]),t.u[a.T]=a):"r"===c&&(s["s-cr"]=o,o["s-cn"]=!0)));else if(t&&"style"===t.h){const e=C(null,o.textContent);e._=o,e.T="0",t.u=[e]}},ot=(t,e)=>{if(1===t.nodeType){let l=0;for(;l<t.childNodes.length;l++)ot(t.childNodes[l],e);if(t.shadowRoot)for(l=0;l<t.shadowRoot.childNodes.length;l++)ot(t.shadowRoot.childNodes[l],e)}else if(8===t.nodeType){const l=t.nodeValue.split(".");"o"===l[0]&&(e.set(l[1]+"."+l[2],t),t.nodeValue="",t["s-sd"]=""===l[3])}},rt=t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},ct=(t,e={})=>{const l=[],n=e.exclude||[],s=a.head,o=i.customElements,r=s.querySelector("meta[charset]"),c=a.createElement("style"),m=[];let w,b=!0;Object.assign($,e),$.l=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&($.t|=4),$.t|=2,t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],S:e[1],U:e[2],I:e[3]};s.U=e[2];const r=s.S,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,A:t,F:new Map};e.N=new Promise(t=>e.R=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this)}connectedCallback(){w&&(clearTimeout(w),w=null),b?m.push(this):$.jmp(()=>((t,e)=>{if(0==(1&$.t)){const l=()=>{},n=d(t);if(!(1&n.t)){let l;n.t|=1,(l=t.getAttribute("s-id"))&&((t,e,l,n)=>{const s=t.shadowRoot,o=[],r=n.M=C(e,null);$.W||ot(a.body,$.W=new Map),t["s-id"]=l,t.removeAttribute("s-id"),st(r,o,[],null,t,t,l),o.forEach(t=>{const l=t.L+"."+t.O,n=$.W.get(l),o=t._;n&&(n["s-sd"]||"0"===t.L)&&n.parentNode.insertBefore(o,n.nextSibling),s||(o["s-hn"]=e,n&&(o["s-ol"]=n,o["s-ol"]["s-nr"]=o)),$.W.delete(l)})})(t,e.S,l,n),l||4&e.t&&rt(t);{let e=t;for(;e=e.parentNode||e.host;)if(1===e.nodeType&&e.hasAttribute("s-id")||e["s-p"]){Q(n,n.v=e);break}}v(()=>(async(t,e,l,n,s)=>{if(0==(32&e.t)){e.t|=32;{if((s=(t=>{const e=t.S.replace(/-/g,"_"),l=t.q,n=h.get(l);return n?n[e]:__sc_import_slot(`./${l}.entry.js`).then(t=>(h.set(l,t),t[e]),p)})(l)).then){const t=()=>{};s=await s,t()}s.isProxied||(nt(s,l),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(c){p(c)}e.t&=-9,t()}const t=P(l.S);if(!y.has(t)&&s.style){const e=()=>{};((t,e,l)=>{let n=y.get(t);f&&l?(n=n||new CSSStyleSheet).replace(e):n=e,y.set(t,n)})(t,s.style,!!(1&l.t)),e()}}const o=e.v,r=()=>X(t,e,l,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(t,n,e))}l()}})(this,s))}disconnectedCallback(){$.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const l=d(t);2==(18&l.t)&&X(t,l,e,!1)}})(this,s)}componentOnReady(){return d(this).N}};s.q=t[0],n.includes(r)||o.get(r)||(l.push(r),o.define(r,nt(c,s)))})),c.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,r?r.nextSibling:s.firstChild),b=!1,m.length>0?m.forEach(t=>t.connectedCallback()):$.jmp(()=>w=setTimeout(et,30,"timeout"))};export{x as a,ct as b,T as h,U as p,m as r};