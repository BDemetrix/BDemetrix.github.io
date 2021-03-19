/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
;
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(a.jBox=b(c));});}else{if(typeof module==="object"&&module.exports){module.exports=(a.jBox=b(require("jquery")));
}else{a.jBox=b(a.jQuery);}}}(this,function(b){var a=function a(d,c){this.options={id:null,width:"auto",height:"auto",minWidth:null,minHeight:null,maxWidth:null,maxHeight:null,responsiveWidth:true,responsiveHeight:true,responsiveMinWidth:100,responsiveMinHeight:100,attach:null,trigger:"click",preventDefault:false,content:null,getContent:null,title:null,getTitle:null,footer:null,isolateScroll:true,ajax:{url:null,data:"",reload:false,getURL:"data-url",getData:"data-ajax",setContent:true,spinner:true,spinnerDelay:300,spinnerReposition:true},followMouse:false,target:null,position:{x:"center",y:"center"},outside:null,offset:0,attributes:{x:"left",y:"top"},fixed:false,adjustPosition:true,adjustTracker:false,adjustDistance:5,reposition:true,repositionOnOpen:true,repositionOnContent:true,pointer:false,pointTo:"target",fade:180,animation:null,theme:"Default",addClass:null,overlay:false,zIndex:10000,delayOpen:0,delayClose:0,closeOnEsc:false,closeOnClick:false,closeOnMouseleave:false,closeButton:false,appendTo:b("body"),createOnInit:false,blockScroll:false,draggable:false,dragOver:true,autoClose:false,delayOnHover:false,showCountdown:false,preloadAudio:true,audio:null,volume:100,onInit:null,onAttach:null,onPosition:null,onCreated:null,onOpen:null,onClose:null,onCloseComplete:null};
this._pluginOptions={Tooltip:{getContent:"title",trigger:"mouseenter",position:{x:"center",y:"top"},outside:"y",pointer:true},Mouse:{responsiveWidth:false,responsiveHeight:false,adjustPosition:"flip",target:"mouse",trigger:"mouseenter",position:{x:"right",y:"bottom"},outside:"xy",offset:5},Modal:{target:b(window),fixed:true,blockScroll:true,closeOnEsc:true,closeOnClick:"overlay",closeButton:true,overlay:true,animation:"zoomIn"},};
this.options=b.extend(true,this.options,this._pluginOptions[d]?this._pluginOptions[d]:a._pluginOptions[d],c);b.type(d)=="string"&&(this.type=d);this._fireEvent=function(f,e){this.options["_"+f]&&(this.options["_"+f].bind(this))(e);
this.options[f]&&(this.options[f].bind(this))(e);};this.options.id===null&&(this.options.id="jBox"+a._getUniqueID());this.id=this.options.id;((this.options.position.x=="center"&&this.options.outside=="x")||(this.options.position.y=="center"&&this.options.outside=="y"))&&(this.options.outside=null);
this.options.pointTo=="target"&&(!this.options.outside||this.options.outside=="xy")&&(this.options.pointer=false);b.type(this.options.offset)!="object"?(this.options.offset={x:this.options.offset,y:this.options.offset}):(this.options.offset=b.extend({x:0,y:0},this.options.offset));
b.type(this.options.adjustDistance)!="object"?(this.options.adjustDistance={top:this.options.adjustDistance,right:this.options.adjustDistance,bottom:this.options.adjustDistance,left:this.options.adjustDistance}):(this.options.adjustDistance=b.extend({top:5,left:5,right:5,bottom:5},this.options.adjustDistance));
this.outside=this.options.outside&&this.options.outside!="xy"?this.options.position[this.options.outside]:false;this.align=this.outside?this.outside:(this.options.position.y!="center"&&b.type(this.options.position.y)!="number"?this.options.position.x:(this.options.position.x!="center"&&b.type(this.options.position.x)!="number"?this.options.position.y:this.options.attributes.x));
this._getOpp=function(e){return{left:"right",right:"left",top:"bottom",bottom:"top",x:"y",y:"x"}[e];};this._getXY=function(e){return{left:"x",right:"x",top:"y",bottom:"y",center:"x"}[e];
};this._getTL=function(e){return{left:"left",right:"left",top:"top",bottom:"top",center:"left",x:"left",y:"top"}[e];};this._getInt=function(e,f){if(e=="auto"){return"auto";
}if(e&&b.type(e)=="string"&&e.slice(-1)=="%"){return b(window)[f=="height"?"innerHeight":"innerWidth"]()*parseInt(e.replace("%",""))/100;}return e;};this._createSVG=function(g,f){var e=document.createElementNS("http://www.w3.org/2000/svg",g);
b.each(f,function(h,i){e.setAttribute(i[0],(i[1]||""));});return e;};this._isolateScroll=function(e){if(!e||!e.length){return;}e.on("DOMMouseScroll.jBoxIsolateScroll mousewheel.jBoxIsolateScroll",function(h){var i=h.wheelDelta||(h.originalEvent&&h.originalEvent.wheelDelta)||-h.detail;
var g=this.scrollTop+e.outerHeight()-this.scrollHeight>=0;var f=this.scrollTop<=0;((i<0&&g)||(i>0&&f))&&h.preventDefault();});};this._setTitleWidth=function(){if(!this.titleContainer||(this.content[0].style.width=="auto"&&!this.content[0].style.maxWidth)){return null;
}if(this.wrapper.css("display")=="none"){this.wrapper.css("display","block");var e=this.content.outerWidth();this.wrapper.css("display","none");}else{var e=this.content.outerWidth();
}this.titleContainer.css({maxWidth:(Math.max(e,parseInt(this.content[0].style.maxWidth))||null)});};this._draggable=function(){if(!this.options.draggable){return false;
}var e=this.options.draggable=="title"?this.titleContainer:(this.options.draggable instanceof b?this.options.draggable:(b.type(this.options.draggable)=="string"?b(this.options.draggable):this.wrapper));
if(!e||!(e instanceof b)||!e.length||e.data("jBox-draggable")){return false;}e.addClass("jBox-draggable").data("jBox-draggable",true).on("mousedown",function(i){if(i.button==2||b(i.target).hasClass("jBox-noDrag")||b(i.target).parents(".jBox-noDrag").length){return;
}if(this.options.dragOver&&this.wrapper.css("zIndex")<=a.zIndexMax){a.zIndexMax+=1;this.wrapper.css("zIndex",a.zIndexMax);}var j=this.wrapper.outerHeight();
var h=this.wrapper.outerWidth();var f=this.wrapper.offset().top+j-i.pageY;var g=this.wrapper.offset().left+h-i.pageX;b(document).on("mousemove.jBox-draggable-"+this.id,function(k){this.wrapper.offset({top:k.pageY+f-j,left:k.pageX+g-h});
}.bind(this));i.preventDefault();}.bind(this)).on("mouseup",function(){b(document).off("mousemove.jBox-draggable-"+this.id);}.bind(this));a.zIndexMax=!a.zIndexMax?this.options.zIndex:Math.max(a.zIndexMax,this.options.zIndex);
return this;};this._create=function(){if(this.wrapper){return;}this.wrapper=b("<div/>",{id:this.id,"class":"jBox-wrapper"+(this.type?" jBox-"+this.type:"")+(this.options.theme?" jBox-"+this.options.theme:"")+(this.options.addClass?" "+this.options.addClass:"")}).css({position:(this.options.fixed?"fixed":"absolute"),display:"none",opacity:0,zIndex:this.options.zIndex}).data("jBox",this);
this.options.closeOnMouseleave&&this.wrapper.on("mouseleave",function(g){!this.source||!(g.relatedTarget==this.source[0]||b.inArray(this.source[0],b(g.relatedTarget).parents("*"))!==-1)&&this.close();
}.bind(this));(this.options.closeOnClick=="box")&&this.wrapper.on("touchend click",function(){this.close({ignoreDelay:true});}.bind(this));this.container=b('<div class="jBox-container"/>').appendTo(this.wrapper);
this.content=b('<div class="jBox-content"/>').appendTo(this.container);this.options.footer&&(this.footer=b('<div class="jBox-footer"/>').append(this.options.footer).appendTo(this.container));
this.options.isolateScroll&&this._isolateScroll(this.content);if(this.options.closeButton){var f=this._createSVG("svg",[["viewBox","0 0 24 24"]]);f.appendChild(this._createSVG("path",[["d","M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]]));
this.closeButton=b('<div class="jBox-closeButton jBox-noDrag"/>').on("touchend click",function(g){this.close({ignoreDelay:true});}.bind(this)).append(f);
if(this.options.closeButton=="box"||(this.options.closeButton===true&&!this.options.overlay&&!this.options.title&&!this.options.getTitle)){this.wrapper.addClass("jBox-closeButton-box");
this.closeButton.appendTo(this.container);}}this.wrapper.appendTo(this.options.appendTo);this.wrapper.find(".jBox-closeButton").length&&b.each(["top","right","bottom","left"],function(g,h){this.wrapper.find(".jBox-closeButton").css(h)&&this.wrapper.find(".jBox-closeButton").css(h)!="auto"&&(this.options.adjustDistance[h]=Math.max(this.options.adjustDistance[h],this.options.adjustDistance[h]+(((parseInt(this.wrapper.find(".jBox-closeButton").css(h))||0)+(parseInt(this.container.css("border-"+h+"-width"))||0))*-1)));
}.bind(this));if(this.options.pointer){this.pointer={position:(this.options.pointTo!="target")?this.options.pointTo:this._getOpp(this.outside),xy:(this.options.pointTo!="target")?this._getXY(this.options.pointTo):this._getXY(this.outside),align:"center",offset:0};
this.pointer.element=b('<div class="jBox-pointer jBox-pointer-'+this.pointer.position+'"/>').appendTo(this.wrapper);this.pointer.dimensions={x:this.pointer.element.outerWidth(),y:this.pointer.element.outerHeight()};
if(b.type(this.options.pointer)=="string"){var e=this.options.pointer.split(":");e[0]&&(this.pointer.align=e[0]);e[1]&&(this.pointer.offset=parseInt(e[1]));
}this.pointer.alignAttribute=(this.pointer.xy=="x"?(this.pointer.align=="bottom"?"bottom":"top"):(this.pointer.align=="right"?"right":"left"));this.wrapper.css("padding-"+this.pointer.position,this.pointer.dimensions[this.pointer.xy]);
this.pointer.element.css(this.pointer.alignAttribute,(this.pointer.align=="center"?"50%":0)).css("margin-"+this.pointer.alignAttribute,this.pointer.offset);
this.pointer.margin={};this.pointer.margin["margin-"+this.pointer.alignAttribute]=this.pointer.offset;(this.pointer.align=="center")&&this.pointer.element.css("transform","translate("+(this.pointer.xy=="y"?(this.pointer.dimensions.x*-0.5+"px"):0)+", "+(this.pointer.xy=="x"?(this.pointer.dimensions.y*-0.5+"px"):0)+")");
this.pointer.element.css((this.pointer.xy=="x"?"width":"height"),parseInt(this.pointer.dimensions[this.pointer.xy])+parseInt(this.container.css("border-"+this.pointer.alignAttribute+"-width")));
this.wrapper.addClass("jBox-pointerPosition-"+this.pointer.position);}this.setContent(this.options.content,true);this.setTitle(this.options.title,true);
this.options.draggable&&this._draggable();this._fireEvent("onCreated");};this.options.createOnInit&&this._create();this.options.attach&&this.attach();this._attachEvents=function(){this.options.closeOnEsc&&b(document).on("keyup.jBox-"+this.id,function(e){if(e.keyCode==27){this.close({ignoreDelay:true});
}}.bind(this));if(this.options.closeOnClick===true||this.options.closeOnClick=="body"){b(document).on("touchend.jBox-"+this.id+" click.jBox-"+this.id,function(e){if(this.blockBodyClick||(this.options.closeOnClick=="body"&&(e.target==this.wrapper[0]||this.wrapper.has(e.target).length))){return;
}this.close({ignoreDelay:true});}.bind(this));}this.options.delayOnHover&&b("#"+this.id).on("mouseenter",function(e){this.isHovered=true;}.bind(this));
this.options.delayOnHover&&b("#"+this.id).on("mouseleave",function(e){this.isHovered=false;}.bind(this));if((this.options.adjustPosition||this.options.reposition)&&!this.fixed&&this.outside){this.options.adjustTracker&&b(window).on("scroll.jBox-"+this.id,function(e){this.position();
}.bind(this));(this.options.adjustPosition||this.options.reposition)&&b(window).on("resize.jBox-"+this.id,function(e){this.position();}.bind(this));}this.options.target=="mouse"&&b("body").on("mousemove.jBox-"+this.id,function(e){this.position({mouseTarget:{top:e.pageY,left:e.pageX}});
}.bind(this));};this._detachEvents=function(){this.options.closeOnEsc&&b(document).off("keyup.jBox-"+this.id);(this.options.closeOnClick===true||this.options.closeOnClick=="body")&&b(document).off("touchend.jBox-"+this.id+" click.jBox-"+this.id);
this.options.adjustTracker&&b(window).off("scroll.jBox-"+this.id);(this.options.adjustPosition||this.options.reposition)&&b(window).off("resize.jBox-"+this.id);
this.options.target=="mouse"&&b("body").off("mousemove.jBox-"+this.id);};this._showOverlay=function(){if(!this.overlay){this.overlay=b('<div id="'+this.id+'-overlay"/>').addClass("jBox-overlay"+(this.type?" jBox-overlay-"+this.type:"")).css({display:"none",opacity:0,zIndex:this.options.zIndex-1}).appendTo(this.options.appendTo);
(this.options.closeButton=="overlay"||this.options.closeButton===true)&&this.overlay.append(this.closeButton);this.options.closeOnClick=="overlay"&&this.overlay.on("touchend click",function(){this.close({ignoreDelay:true});
}.bind(this));b("#"+this.id+"-overlay .jBox-closeButton").length&&(this.options.adjustDistance.top=Math.max(b("#"+this.id+"-overlay .jBox-closeButton").outerHeight(),this.options.adjustDistance.top));
}if(this.overlay.css("display")=="block"){return;}this.options.fade?(this.overlay.stop()&&this.overlay.animate({opacity:1},{queue:false,duration:this.options.fade,start:function(){this.overlay.css({display:"block"});
}.bind(this)})):this.overlay.css({display:"block",opacity:1});};this._hideOverlay=function(){if(!this.overlay){return;}this.options.fade?(this.overlay.stop()&&this.overlay.animate({opacity:0},{queue:false,duration:this.options.fade,complete:function(){this.overlay.css({display:"none"});
}.bind(this)})):this.overlay.css({display:"none",opacity:0});};this._exposeDimensions=function(){this.wrapper.css({top:-10000,left:-10000,right:"auto",bottom:"auto"});
var e={x:this.wrapper.outerWidth(),y:this.wrapper.outerHeight()};this.wrapper.css({top:"auto",left:"auto"});return e;};this._generateAnimationCSS=function(){(b.type(this.options.animation)!="object")&&(this.options.animation={pulse:{open:"pulse",close:"zoomOut"},zoomIn:{open:"zoomIn",close:"zoomIn"},zoomOut:{open:"zoomOut",close:"zoomOut"},move:{open:"move",close:"move"},slide:{open:"slide",close:"slide"},flip:{open:"flip",close:"flip"},tada:{open:"tada",close:"zoomOut"}}[this.options.animation]);
if(!this.options.animation){return null;}this.options.animation.open&&(this.options.animation.open=this.options.animation.open.split(":"));this.options.animation.close&&(this.options.animation.close=this.options.animation.close.split(":"));
this.options.animation.openDirection=this.options.animation.open[1]?this.options.animation.open[1]:null;this.options.animation.closeDirection=this.options.animation.close[1]?this.options.animation.close[1]:null;
this.options.animation.open&&(this.options.animation.open=this.options.animation.open[0]);this.options.animation.close&&(this.options.animation.close=this.options.animation.close[0]);
this.options.animation.open&&(this.options.animation.open+="Open");this.options.animation.close&&(this.options.animation.close+="Close");var f={pulse:{duration:350,css:[["0%","scale(1)"],["50%","scale(1.1)"],["100%","scale(1)"]]},zoomInOpen:{duration:(this.options.fade||180),css:[["0%","scale(0.9)"],["100%","scale(1)"]]},zoomInClose:{duration:(this.options.fade||180),css:[["0%","scale(1)"],["100%","scale(0.9)"]]},zoomOutOpen:{duration:(this.options.fade||180),css:[["0%","scale(1.1)"],["100%","scale(1)"]]},zoomOutClose:{duration:(this.options.fade||180),css:[["0%","scale(1)"],["100%","scale(1.1)"]]},moveOpen:{duration:(this.options.fade||180),positions:{top:{"0%":-12},right:{"0%":12},bottom:{"0%":12},left:{"0%":-12}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},moveClose:{duration:(this.options.fade||180),timing:"ease-in",positions:{top:{"100%":-12},right:{"100%":12},bottom:{"100%":12},left:{"100%":-12}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},slideOpen:{duration:400,positions:{top:{"0%":-400},right:{"0%":400},bottom:{"0%":400},left:{"0%":-400}},css:[["0%","translate%XY(%Vpx)"],["100%","translate%XY(0px)"]]},slideClose:{duration:400,timing:"ease-in",positions:{top:{"100%":-400},right:{"100%":400},bottom:{"100%":400},left:{"100%":-400}},css:[["0%","translate%XY(0px)"],["100%","translate%XY(%Vpx)"]]},flipOpen:{duration:600,css:[["0%","perspective(400px) rotateX(90deg)"],["40%","perspective(400px) rotateX(-15deg)"],["70%","perspective(400px) rotateX(15deg)"],["100%","perspective(400px) rotateX(0deg)"]]},flipClose:{duration:(this.options.fade||300),css:[["0%","perspective(400px) rotateX(0deg)"],["100%","perspective(400px) rotateX(90deg)"]]},tada:{duration:800,css:[["0%","scale(1)"],["10%, 20%","scale(0.9) rotate(-3deg)"],["30%, 50%, 70%, 90%","scale(1.1) rotate(3deg)"],["40%, 60%, 80%","scale(1.1) rotate(-3deg)"],["100%","scale(1) rotate(0)"]]}};
b.each(["pulse","tada"],function(g,h){f[h+"Open"]=f[h+"Close"]=f[h];});var e=function(h,g){keyframe_css="@keyframes jBox-"+this.id+"-animation-"+this.options.animation[h]+"-"+h+(g?"-"+g:"")+" {";
b.each(f[this.options.animation[h]].css,function(i,j){var k=g?j[1].replace("%XY",this._getXY(g).toUpperCase()):j[1];f[this.options.animation[h]].positions&&(k=k.replace("%V",f[this.options.animation[h]].positions[g][j[0]]));
keyframe_css+=j[0]+" {transform:"+k+";}";}.bind(this));keyframe_css+="}";keyframe_css+=".jBox-"+this.id+"-animation-"+this.options.animation[h]+"-"+h+(g?"-"+g:"")+" {";
keyframe_css+="animation-duration: "+f[this.options.animation[h]].duration+"ms;";keyframe_css+="animation-name: jBox-"+this.id+"-animation-"+this.options.animation[h]+"-"+h+(g?"-"+g:"")+";";
keyframe_css+=f[this.options.animation[h]].timing?("animation-timing-function: "+f[this.options.animation[h]].timing+";"):"";keyframe_css+="}";return keyframe_css;
}.bind(this);this._animationCSS="";b.each(["open","close"],function(g,h){if(!this.options.animation[h]||!f[this.options.animation[h]]||(h=="close"&&!this.options.fade)){return"";
}f[this.options.animation[h]].positions?b.each(["top","right","bottom","left"],function(j,i){this._animationCSS+=e(h,i);}.bind(this)):this._animationCSS+=e(h);
}.bind(this));};this.options.animation&&this._generateAnimationCSS();this._blockBodyClick=function(){this.blockBodyClick=true;setTimeout(function(){this.blockBodyClick=false;
}.bind(this),10);};this._animate=function(g){!g&&(g=this.isOpen?"open":"close");if(!this.options.fade&&g=="close"){return null;}var e=(this.options.animation[g+"Direction"]||((this.align!="center")?this.align:this.options.attributes.x));
this.flipped&&this._getXY(e)==(this._getXY(this.align))&&(e=this._getOpp(e));var f="jBox-"+this.id+"-animation-"+this.options.animation[g]+"-"+g+" jBox-"+this.id+"-animation-"+this.options.animation[g]+"-"+g+"-"+e;
this.wrapper.addClass(f);var h=parseFloat(this.wrapper.css("animation-duration"))*1000;g=="close"&&(h=Math.min(h,this.options.fade));setTimeout(function(){this.wrapper.removeClass(f);
}.bind(this),h);};this._abortAnimation=function(){var e=this.wrapper.attr("class").split(" ").filter(function(f){return f.lastIndexOf("jBox-"+this.id+"-animation",0)!==0;
}.bind(this));this.wrapper.attr("class",e.join(" "));};if(this.options.responsiveWidth||this.options.responsiveHeight){b(window).on("resize.responsivejBox-"+this.id,function(e){if(this.isOpen){this.position();
}}.bind(this));}b.type(this.options.preloadAudio)==="string"&&(this.options.preloadAudio=[this.options.preloadAudio]);b.type(this.options.audio)==="string"&&(this.options.audio={open:this.options.audio});
b.type(this.options.volume)==="number"&&(this.options.volume={open:this.options.volume,close:this.options.volume});if(this.options.preloadAudio===true&&this.options.audio){this.options.preloadAudio=[];
b.each(this.options.audio,function(f,e){this.options.preloadAudio.push(e+".mp3");this.options.preloadAudio.push(e+".ogg");}.bind(this));}this.options.preloadAudio.length&&b.each(this.options.preloadAudio,function(f,e){var g=new Audio();
g.src=e;g.preload="auto";});if(this.options.followMouse){b(document).on("mousemove",function(e){this.mouse={x:e.pageX,y:e.pageY};}.bind(this));}this._fireEvent("onInit");
return this;};a.prototype.attach=function(d,c){!d&&(d=this.options.attach);b.type(d)=="string"&&(d=b(d));!c&&(c=this.options.trigger);d&&d.length&&b.each(d,function(e,f){f=b(f);
if(!f.data("jBox-attached-"+this.id)){(this.options.getContent=="title"&&f.attr("title")!=undefined)&&f.data("jBox-getContent",f.attr("title")).removeAttr("title");
this.attachedElements||(this.attachedElements=[]);this.attachedElements.push(f[0]);f.on(c+".jBox-attach-"+this.id,function(h){this.timer&&clearTimeout(this.timer);
if(c=="mouseenter"&&this.isOpen&&this.source[0]==f[0]){return;}if(this.isOpen&&this.source&&this.source[0]!=f[0]){var g=true;}this.source=f;!this.options.target&&(this.target=f);
c=="click"&&this.options.preventDefault&&h.preventDefault();this[c=="click"&&!g?"toggle":"open"]();}.bind(this));(this.options.trigger=="mouseenter")&&f.on("mouseleave",function(g){if(!this.wrapper){return null;
}if(!this.options.closeOnMouseleave||!(g.relatedTarget==this.wrapper[0]||b(g.relatedTarget).parents("#"+this.id).length)){this.close();}}.bind(this));f.data("jBox-attached-"+this.id,c);
this._fireEvent("onAttach",f);}}.bind(this));return this;};a.prototype.detach=function(c){!c&&(c=this.attachedElements||[]);c&&c.length&&b.each(c,function(d,e){e=b(e);
if(e.data("jBox-attached-"+this.id)){e.off(e.data("jBox-attached-"+this.id)+".jBox-attach-"+this.id);e.data("jBox-attached-"+this.id,null);}this.attachedElements=b.grep(this.attachedElements,function(f){return f!=e[0];
});}.bind(this));return this;};a.prototype.setTitle=function(f,c){if(f==null||f==undefined){return this;}!this.wrapper&&this._create();var e=this.wrapper.outerHeight();
var d=this.wrapper.outerWidth();if(!this.title){this.titleContainer=b('<div class="jBox-title"/>');this.title=b("<div/>").appendTo(this.titleContainer);
this.wrapper.addClass("jBox-hasTitle");if(this.options.closeButton=="title"||(this.options.closeButton===true&&!this.options.overlay)){this.wrapper.addClass("jBox-closeButton-title");
this.closeButton.appendTo(this.titleContainer);}this.titleContainer.insertBefore(this.content);this._setTitleWidth();}this.title.html(f);d!=this.wrapper.outerWidth()&&this._setTitleWidth();
this.options.draggable&&this._draggable();!c&&this.options.repositionOnContent&&(e!=this.wrapper.outerHeight()||d!=this.wrapper.outerWidth())&&this.position();
return this;};a.prototype.setContent=function(e,c){if(e==null||e==undefined){return this;}!this.wrapper&&this._create();var f=this.wrapper.outerHeight();
var d=this.wrapper.outerWidth();this.content.children("[data-jbox-content-appended]").appendTo("body").css({display:"none"});switch(b.type(e)){case"string":this.content.html(e);
break;case"object":this.content.html("");e.attr("data-jbox-content-appended",1).appendTo(this.content).css({display:"block"});break;}d!=this.wrapper.outerWidth()&&this._setTitleWidth();
this.options.draggable&&this._draggable();!c&&this.options.repositionOnContent&&(f!=this.wrapper.outerHeight()||d!=this.wrapper.outerWidth())&&this.position();
return this;};a.prototype.setDimensions=function(c,d,e){!this.wrapper&&this._create();d==undefined&&(d="auto");this.content.css(c,this._getInt(d));c=="width"&&this._setTitleWidth();
(e==undefined||e)&&this.position();};a.prototype.setWidth=function(c,d){this.setDimensions("width",c,d);};a.prototype.setHeight=function(c,d){this.setDimensions("height",c,d);
};a.prototype.position=function(h){!h&&(h={});h=b.extend(true,this.options,h);this.target=h.target||this.target||b(window);!(this.target instanceof b||this.target=="mouse")&&(this.target=b(this.target));
if(!this.target.length){return this;}this.content.css({width:this._getInt(h.width,"width"),height:this._getInt(h.height,"height"),minWidth:this._getInt(h.minWidth,"width"),minHeight:this._getInt(h.minHeight,"height"),maxWidth:this._getInt(h.maxWidth,"width"),maxHeight:this._getInt(h.maxHeight,"height"),});
this._setTitleWidth();var f=this._exposeDimensions();this.target!="mouse"&&!this.target.data("jBox-"+this.id+"-fixed")&&this.target.data("jBox-"+this.id+"-fixed",(this.target[0]!=b(window)[0]&&(this.target.css("position")=="fixed"||this.target.parents().filter(function(){return b(this).css("position")=="fixed";
}).length>0))?"fixed":"static");var r={x:b(window).outerWidth(),y:b(window).outerHeight(),top:(h.fixed&&this.target.data("jBox-"+this.id+"-fixed")?0:b(window).scrollTop()),left:(h.fixed&&this.target.data("jBox-"+this.id+"-fixed")?0:b(window).scrollLeft())};
r.bottom=r.top+r.y;r.right=r.left+r.x;try{var A=this.target.offset();}catch(x){var A={top:0,left:0};}if(this.target!="mouse"&&this.target.data("jBox-"+this.id+"-fixed")=="fixed"&&h.fixed){A.top=A.top-b(window).scrollTop();
A.left=A.left-b(window).scrollLeft();}var q={x:this.target=="mouse"?12:this.target.outerWidth(),y:this.target=="mouse"?20:this.target.outerHeight(),top:this.target=="mouse"&&h.mouseTarget?h.mouseTarget.top:(A?A.top:0),left:this.target=="mouse"&&h.mouseTarget?h.mouseTarget.left:(A?A.left:0)};
var z=h.outside&&!(h.position.x=="center"&&h.position.y=="center");var k={x:r.x-h.adjustDistance.left-h.adjustDistance.right,y:r.y-h.adjustDistance.top-h.adjustDistance.bottom,left:!z?0:(q.left-b(window).scrollLeft()-h.adjustDistance.left),right:!z?0:(r.x-q.left+b(window).scrollLeft()-q.x-h.adjustDistance.right),top:!z?0:(q.top-b(window).scrollTop()-this.options.adjustDistance.top),bottom:!z?0:(r.y-q.top+b(window).scrollTop()-q.y-h.adjustDistance.bottom),};
var s={x:(h.outside=="x"||h.outside=="xy")&&b.type(h.position.x)!="number"?h.position.x:null,y:(h.outside=="y"||h.outside=="xy")&&b.type(h.position.y)!="number"?h.position.y:null};
var n={x:false,y:false};(s.x&&f.x>k[s.x]&&k[this._getOpp(s.x)]>k[s.x])&&(s.x=this._getOpp(s.x))&&(n.x=true);(s.y&&f.y>k[s.y]&&k[this._getOpp(s.y)]>k[s.y])&&(s.y=this._getOpp(s.y))&&(n.y=true);
if(h.responsiveWidth||h.responsiveHeight){var p=function(){if(h.responsiveWidth&&f.x>k[s.x||"x"]){var e=k[s.x||"x"]-(this.pointer&&z&&h.outside=="x"?this.pointer.dimensions.x:0)-parseInt(this.container.css("border-left-width"))-parseInt(this.container.css("border-right-width"));
this.content.css({width:e>this.options.responsiveMinWidth?e:null,minWidth:e<parseInt(this.content.css("minWidth"))?0:null});this._setTitleWidth();}f=this._exposeDimensions();
}.bind(this);h.responsiveWidth&&p();h.responsiveWidth&&!n.y&&(s.y&&f.y>k[s.y]&&k[this._getOpp(s.y)]>k[s.y])&&(s.y=this._getOpp(s.y))&&(n.y=true);var c=function(){if(h.responsiveHeight&&f.y>k[s.y||"y"]){var e=function(){if(!this.titleContainer&&!this.footer){return 0;
}if(this.wrapper.css("display")=="none"){this.wrapper.css("display","block");var D=(this.titleContainer?this.titleContainer.outerHeight():0)+(this.footer?this.footer.outerHeight():0);
this.wrapper.css("display","none");}else{var D=(this.titleContainer?this.titleContainer.outerHeight():0)+(this.footer?this.footer.outerHeight():0);}return D||0;
}.bind(this);var C=k[s.y||"y"]-(this.pointer&&z&&h.outside=="y"?this.pointer.dimensions.y:0)-e()-parseInt(this.container.css("border-top-width"))-parseInt(this.container.css("border-bottom-width"));
this.content.css({height:C>this.options.responsiveMinHeight?C:null});this._setTitleWidth();}f=this._exposeDimensions();}.bind(this);h.responsiveHeight&&c();
h.responsiveHeight&&!n.x&&(s.x&&f.x>k[s.x]&&k[this._getOpp(s.x)]>k[s.x])&&(s.x=this._getOpp(s.x))&&(n.x=true);if(h.adjustPosition&&h.adjustPosition!="move"){n.x&&p();
n.y&&c();}}var m={};var g=function(C){if(b.type(h.position[C])=="number"){m[h.attributes[C]]=h.position[C];return;}var e=h.attributes[C]=(C=="x"?"left":"top");
m[e]=q[e];if(h.position[C]=="center"){if(h.followMouse){m[e]=Math.ceil(this.mouse[C]-f[C]/2);}else{m[e]+=Math.ceil((q[C]-f[C])/2);}(this.target!="mouse"&&this.target[0]&&this.target[0]==b(window)[0])&&(m[e]+=(h.adjustDistance[e]-h.adjustDistance[this._getOpp(e)])*0.5);
return;}if(h.followMouse){m[e]=this.mouse[C];}else{(e!=h.position[C])&&(m[e]+=q[C]-f[C]);(h.outside==C||h.outside=="xy")&&(m[e]+=f[C]*(e!=h.position[C]?1:-1));
}}.bind(this);g("x");g("y");if(this.pointer&&h.pointTo=="target"&&b.type(h.position.x)!="number"&&b.type(h.position.y)!="number"){var j=0;switch(this.pointer.align){case"center":if(h.position[this._getOpp(h.outside)]!="center"){j+=(f[this._getOpp(h.outside)]/2);
}break;default:switch(h.position[this._getOpp(h.outside)]){case"center":j+=((f[this._getOpp(h.outside)]/2)-(this.pointer.dimensions[this._getOpp(h.outside)]/2))*(this.pointer.align==this._getTL(this.pointer.align)?1:-1);
break;default:j+=(this.pointer.align!=h.position[this._getOpp(h.outside)])?(this.dimensions[this._getOpp(h.outside)]*(b.inArray(this.pointer.align,["top","left"])!==-1?1:-1))+((this.pointer.dimensions[this._getOpp(h.outside)]/2)*(b.inArray(this.pointer.align,["top","left"])!==-1?-1:1)):(this.pointer.dimensions[this._getOpp(h.outside)]/2)*(b.inArray(this.pointer.align,["top","left"])!==-1?1:-1);
break;}break;}j*=(h.position[this._getOpp(h.outside)]==this.pointer.alignAttribute?-1:1);j+=this.pointer.offset*(this.pointer.align==this._getOpp(this._getTL(this.pointer.align))?1:-1);
m[this._getTL(this._getOpp(this.pointer.xy))]+=j;}m[h.attributes.x]+=h.offset.x;m[h.attributes.y]+=h.offset.y;this.wrapper.css(m);if(h.adjustPosition){if(this.positionAdjusted){this.pointer&&this.wrapper.css("padding",0).css("padding-"+this._getOpp(this.outside),this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-"+this.pointer.position);
this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+this._getOpp(this.outside)).css(this.pointer.margin);this.positionAdjusted=false;
this.flipped=false;}var t=(r.top>m.top-(h.adjustDistance.top||0)),l=(r.right<m.left+f.x+(h.adjustDistance.right||0)),B=(r.bottom<m.top+f.y+(h.adjustDistance.bottom||0)),o=(r.left>m.left-(h.adjustDistance.left||0)),y=o?"left":(l?"right":null),w=t?"top":(B?"bottom":null),v=y||w;
if(v){var i=function(e){if(h.followMouse){this.wrapper.css(this._getTL(e),m[this._getTL(e)]+((f[this._getXY(e)]+(h.offset[this._getXY(e)]*(e=="top"||e=="left"?-2:2)))*(e=="top"||e=="left"?1:-1)));
}else{this.wrapper.css(this._getTL(e),m[this._getTL(e)]+((f[this._getXY(e)]+(h.offset[this._getXY(e)]*(e=="top"||e=="left"?-2:2))+q[this._getXY(e)])*(e=="top"||e=="left"?1:-1)));
}this.pointer&&this.wrapper.removeClass("jBox-pointerPosition-"+this.pointer.position).addClass("jBox-pointerPosition-"+this._getOpp(this.pointer.position)).css("padding",0).css("padding-"+e,this.pointer.dimensions[this._getXY(e)]);
this.pointer&&this.pointer.element.attr("class","jBox-pointer jBox-pointer-"+e);this.positionAdjusted=true;this.flipped=true;}.bind(this);n.x&&i(this.options.position.x);
n.y&&i(this.options.position.y);var u=(this._getXY(this.outside)=="x")?w:y;if(this.pointer&&h.pointTo=="target"&&h.adjustPosition!="flip"&&this._getXY(u)==this._getOpp(this._getXY(this.outside))){if(this.pointer.align=="center"){var d=(f[this._getXY(u)]/2)-(this.pointer.dimensions[this._getOpp(this.pointer.xy)]/2)-(parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))*(u!=this._getTL(u)?-1:1));
}else{var d=(u==this.pointer.alignAttribute)?parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute)):f[this._getXY(u)]-parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-this.pointer.dimensions[this._getXY(u)];
}spaceDiff=(u==this._getTL(u))?r[this._getTL(u)]-m[this._getTL(u)]+h.adjustDistance[u]:(r[this._getOpp(this._getTL(u))]-m[this._getTL(u)]-h.adjustDistance[u]-f[this._getXY(u)])*-1;
if(u==this._getOpp(this._getTL(u))&&m[this._getTL(u)]-spaceDiff<r[this._getTL(u)]+h.adjustDistance[this._getTL(u)]){spaceDiff-=r[this._getTL(u)]+h.adjustDistance[this._getTL(u)]-(this.pos[this._getTL(u)]-spaceDiff);
}spaceDiff=Math.min(spaceDiff,d);if(spaceDiff<=d&&spaceDiff>0){this.pointer.element.css("margin-"+this.pointer.alignAttribute,parseInt(this.pointer.element.css("margin-"+this.pointer.alignAttribute))-(spaceDiff*(u!=this.pointer.alignAttribute?-1:1)));
this.wrapper.css(this._getTL(u),m[this._getTL(u)]+(spaceDiff*(u!=this._getTL(u)?-1:1)));this.positionAdjusted=true;}}}}this._fireEvent("onPosition");return this;
};a.prototype.open=function(d){!d&&(d={});if(this.isDestroyed){return false;}!this.wrapper&&this._create();!this._styles&&(this._styles=b("<style/>").append(this._animationCSS).appendTo(b("head")));
this.timer&&clearTimeout(this.timer);this._blockBodyClick();if(this.isDisabled){return this;}var c=function(){this.source&&this.options.getTitle&&(this.source.attr(this.options.getTitle)&&this.setTitle(this.source.attr(this.options.getTitle)),true);
this.source&&this.options.getContent&&(this.source.data("jBox-getContent")?this.setContent(this.source.data("jBox-getContent"),true):(this.source.attr(this.options.getContent)?this.setContent(this.source.attr(this.options.getContent),true):(this.options.getContent=="html"?this.setContent(this.source.html(),true):null)));
this._fireEvent("onOpen");if((this.options.ajax&&(this.options.ajax.url||(this.source&&this.source.attr(this.options.ajax.getURL)))&&(!this.ajaxLoaded||this.options.ajax.reload))||(d.ajax&&(d.ajax.url||d.ajax.data))){(this.options.ajax.reload!="strict"&&this.source&&this.source.data("jBox-ajax-data")&&!(d.ajax&&(d.ajax.url||d.ajax.data)))?this.setContent(this.source.data("jBox-ajax-data")):this.ajax((d.ajax||null),true);
}(!this.positionedOnOpen||this.options.repositionOnOpen)&&this.position(d)&&(this.positionedOnOpen=true);this.isClosing&&this._abortAnimation();if(!this.isOpen){this.isOpen=true;
this.options.autoClose&&(this.options.delayClose=this.options.autoClose)&&this.close();this._attachEvents();this.options.blockScroll&&b("body").addClass("jBox-blockScroll-"+this.id);
this.options.overlay&&this._showOverlay();this.options.animation&&!this.isClosing&&this._animate("open");this.options.audio&&this.options.audio.open&&this.audio(this.options.audio.open,this.options.volume.open);
if(this.options.fade){this.wrapper.stop().animate({opacity:1},{queue:false,duration:this.options.fade,start:function(){this.isOpening=true;this.wrapper.css({display:"block"});
}.bind(this),always:function(){this.isOpening=false;setTimeout(function(){this.positionOnFadeComplete&&this.position()&&(this.positionOnFadeComplete=false);
}.bind(this),10);}.bind(this)});}else{this.wrapper.css({display:"block",opacity:1});this.positionOnFadeComplete&&this.position()&&(this.positionOnFadeComplete=false);
}}}.bind(this);this.options.delayOpen&&!this.isOpen&&!this.isClosing&&!d.ignoreDelay?(this.timer=setTimeout(c,this.options.delayOpen)):c();return this;
};a.prototype.close=function(d){d||(d={});if(this.isDestroyed||this.isClosing){return false;}this.timer&&clearTimeout(this.timer);this._blockBodyClick();
if(this.isDisabled){return this;}var g=function(){this._fireEvent("onClose");if(this.isOpen){this.isOpen=false;this._detachEvents();this.options.blockScroll&&b("body").removeClass("jBox-blockScroll-"+this.id);
this.options.overlay&&this._hideOverlay();this.options.animation&&!this.isOpening&&this._animate("close");this.options.audio&&this.options.audio.close&&this.audio(this.options.audio.close,this.options.volume.close);
if(this.options.fade){this.wrapper.stop().animate({opacity:0},{queue:false,duration:this.options.fade,start:function(){this.isClosing=true;}.bind(this),complete:function(){this.wrapper.css({display:"none"});
this._fireEvent("onCloseComplete");}.bind(this),always:function(){this.isClosing=false;}.bind(this)});}else{this.wrapper.css({display:"none",opacity:0});
this._fireEvent("onCloseComplete");}}}.bind(this);if(d.ignoreDelay){g();}else{if((this.options.delayOnHover||this.options.showCountdown)&&this.options.delayClose>10){var c=this;
var f=this.options.delayClose;var h=Date.now();if(this.options.showCountdown&&!this.inner){var e=b('<div class="jBox-countdown"></div>');this.inner=b('<div class="jBox-countdown_inner"></div>');
e.prepend(this.inner);b("#"+this.id).append(e);}this.countdown=function(){var i=Date.now();if(!c.isHovered){f-=i-h;}h=i;if(f>0){if(c.options.showCountdown){c.inner.css("width",(f*100/c.options.delayClose)+"%");
}window.requestAnimationFrame(c.countdown);}else{g();}};window.requestAnimationFrame(this.countdown);}else{this.timer=setTimeout(g,Math.max(this.options.delayClose,10));
}}return this;};a.prototype.toggle=function(c){this[this.isOpen?"close":"open"](c);return this;};a.prototype.disable=function(){this.isDisabled=true;return this;
};a.prototype.enable=function(){this.isDisabled=false;return this;};a.prototype.hide=function(){this.disable();this.wrapper&&this.wrapper.css({display:"none"});
return this;};a.prototype.show=function(){this.enable();this.wrapper&&this.wrapper.css({display:"block"});return this;};a.prototype.ajax=function(g,c){g||(g={});
b.each([["getData","data"],["getURL","url"]],function(k,l){(this.options.ajax[l[0]]&&!g[l[1]]&&this.source&&this.source.attr(this.options.ajax[l[0]])!=undefined)&&(g[l[1]]=this.source.attr(this.options.ajax[l[0]])||"");
}.bind(this));var e=b.extend(true,{},this.options.ajax);this.ajaxRequest&&this.ajaxRequest.abort();var h=g.beforeSend||e.beforeSend||function(){};var d=g.complete||e.complete||function(){};
var j=g.success||e.success||function(){};var f=g.error||e.error||function(){};var i=b.extend(true,e,g);i.beforeSend=function(){this.wrapper.addClass("jBox-loading");
i.spinner&&(this.spinnerDelay=setTimeout(function(){this.wrapper.addClass("jBox-loading-spinner");i.spinnerReposition&&(c?(this.positionOnFadeComplete=true):this.position());
this.spinner=b(i.spinner!==true?i.spinner:'<div class="jBox-spinner"></div>').appendTo(this.container);this.titleContainer&&this.spinner.css("position")=="absolute"&&this.spinner.css({transform:"translateY("+(this.titleContainer.outerHeight()*0.5)+"px)"});
}.bind(this),(this.content.html()==""?0:(i.spinnerDelay||0))));(h.bind(this))();}.bind(this);i.complete=function(k){this.spinnerDelay&&clearTimeout(this.spinnerDelay);
this.wrapper.removeClass("jBox-loading jBox-loading-spinner jBox-loading-spinner-delay");this.spinner&&this.spinner.length&&this.spinner.remove()&&i.spinnerReposition&&(c?(this.positionOnFadeComplete=true):this.position());
this.ajaxLoaded=true;(d.bind(this))(k);}.bind(this);i.success=function(k){i.setContent&&this.setContent(k,true)&&(c?(this.positionOnFadeComplete=true):this.position());
i.setContent&&this.source&&this.source.data("jBox-ajax-data",k);(j.bind(this))(k);}.bind(this);i.error=function(k){(f.bind(this))(k);}.bind(this);this.ajaxRequest=b.ajax(i);
return this;};a.prototype.audio=function(c,f){if(!c){return this;}!a._audio&&(a._audio={});if(!a._audio[c]){var d=b("<audio/>");b("<source/>",{src:c+".mp3"}).appendTo(d);
b("<source/>",{src:c+".ogg"}).appendTo(d);a._audio[c]=d[0];}a._audio[c].volume=Math.min(((f!=undefined?f:100)/100),1);try{a._audio[c].pause();a._audio[c].currentTime=0;
}catch(g){}a._audio[c].play();return this;};a._animationSpeeds={tada:1000,tadaSmall:1000,flash:500,shake:400,pulseUp:250,pulseDown:250,popIn:250,popOut:250,fadeIn:200,fadeOut:200,slideUp:400,slideRight:400,slideLeft:400,slideDown:400};
a.prototype.animate=function(d,c){!c&&(c={});!this.animationTimeout&&(this.animationTimeout={});!c.element&&(c.element=this.wrapper);!c.element.data("jBox-animating-id")&&c.element.data("jBox-animating-id",a._getUniqueElementID());
if(c.element.data("jBox-animating")){c.element.removeClass(c.element.data("jBox-animating")).data("jBox-animating",null);this.animationTimeout[c.element.data("jBox-animating-id")]&&clearTimeout(this.animationTimeout[c.element.data("jBox-animating-id")]);
}c.element.addClass("jBox-animated-"+d).data("jBox-animating","jBox-animated-"+d);this.animationTimeout[c.element.data("jBox-animating-id")]=setTimeout((function(){c.element.removeClass(c.element.data("jBox-animating")).data("jBox-animating",null);
c.complete&&c.complete();}),a._animationSpeeds[d]);};a.prototype.destroy=function(){this.detach();this.isOpen&&this.close({ignoreDelay:true});this.wrapper&&this.wrapper.remove();
this.overlay&&this.overlay.remove();this._styles&&this._styles.remove();this.isDestroyed=true;return this;};a._getUniqueID=(function(){var c=1;return function(){return c++;
};}());a._getUniqueElementID=(function(){var c=1;return function(){return c++;};}());a._pluginOptions={};a.plugin=function(d,c){a._pluginOptions[d]=c;};
b.fn.jBox=function(d,c){!d&&(d={});!c&&(c={});return new a(d,b.extend(c,{attach:this}));};return a;}));
jQuery(document).ready(function(){new jBox.plugin("Confirm",{confirmButton:"Submit",cancelButton:"Cancel",confirm:null,cancel:null,closeOnConfirm:!0,target:window,addClass:"jBox-Modal",fixed:!0,attach:"[data-confirm]",getContent:"data-confirm",content:"Do you really want to do this?",minWidth:360,maxWidth:500,blockScroll:!0,closeOnEsc:!0,closeOnClick:!1,closeButton:!1,overlay:!0,animation:"zoomIn",preventDefault:!0,_onAttach:function(t){if(!this.options.confirm){var o=t.attr("onclick")?t.attr("onclick"):t.attr("href")?t.attr("target")?'window.open("'+t.attr("href")+'", "'+t.attr("target")+'");':'window.location.href = "'+t.attr("href")+'";':"";t.prop("onclick",null).data("jBox-Confirm-submit",o)}},_onCreated:function(){this.footer=jQuery('<div class="jBox-Confirm-footer"/>'),jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).click(function(){this.options.cancel&&this.options.cancel(),this.close()}.bind(this)).appendTo(this.footer),this.submitButton=jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer),this.footer.appendTo(this.container)},_onOpen:function(){this.submitButton.off("click.jBox-Confirm"+this.id).on("click.jBox-Confirm"+this.id,function(){this.options.confirm?this.options.confirm():eval(this.source.data("jBox-Confirm-submit")),this.options.closeOnConfirm&&this.close()}.bind(this))}})});
jQuery(document).ready(function(){new jBox.plugin("Image",{src:"href",gallery:"data-jbox-image",imageLabel:"title",imageFade:360,imageSize:"contain",imageCounter:false,imageCounterSeparator:"/",target:window,attach:"[data-jbox-image]",fixed:true,blockScroll:true,closeOnEsc:true,closeOnClick:"button",closeButton:true,overlay:true,animation:"zoomIn",preventDefault:true,width:"100%",height:"100%",adjustDistance:{top:40,right:5,bottom:40,left:5},_onAttach:function(b){this.images=this.images||{};
if(b.data("jBox-image-gallery")){return;}var a=b.attr(this.options.gallery)||"default";!this.images[a]&&(this.images[a]=[]);this.images[a].push({src:b.attr(this.options.src),label:(b.attr(this.options.imageLabel)||"")});
this.options.imageLabel=="title"&&b.removeAttr("title");b.data("jBox-image-gallery",a);b.data("jBox-image-id",(this.images[a].length-1));},_onInit:function(){this.currentImage={};
this.imageZIndex=1;var b=function(d,j,g,f,e,h,c){if(jQuery("#jBox-image-"+d+"-"+j).length){return;}var i=jQuery("<div/>",{id:"jBox-image-"+d+"-"+j,"class":"jBox-image-container"+(e?" jBox-image-not-found":"")+(!f&&!g?" jBox-image-"+d+"-current":""),"data-width":h,"data-height":c}).css({backgroundImage:e?"":'url("'+this.images[d][j].src+'")',backgroundSize:this.options.imageSize,opacity:(f?1:0),zIndex:(g?0:this.imageZIndex++)}).appendTo(this.content);
jQuery("<div/>",{id:"jBox-image-label-"+d+"-"+j,"class":"jBox-image-label"+(f?" active":"")}).html(this.images[d][j].label).click(function(){$(this).toggleClass("expanded");
}).appendTo(this.imageLabel);!f&&!g&&i.animate({opacity:1},this.options.imageFade);}.bind(this);var a=function(c,d){jQuery(".jBox-image-label.active").removeClass("active expanded");
jQuery("#jBox-image-label-"+c+"-"+d).addClass("active");};this.checkSize=function(c){if((this.content.width()<=c.data("width"))||(this.content.height()<=c.data("height"))){c.css("backgroundSize","contain");
}else{c.css("backgroundSize","auto");}};this.showImage=function(d){if(d!="open"){var c=this.currentImage.gallery;var f=this.currentImage.id+(1*(d=="prev")?-1:1);
f=f>(this.images[c].length-1)?0:(f<0?(this.images[c].length-1):f);}else{var c=this.source.data("jBox-image-gallery");var f=this.source.data("jBox-image-id");
jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({display:(this.images[c].length>1?"block":"none")});}if(jQuery(".jBox-image-"+c+"-current").length){jQuery(".jBox-image-"+c+"-current").removeClass("jBox-image-"+c+"-current").animate({opacity:0},(d=="open")?0:this.options.imageFade);
}this.currentImage={gallery:c,id:f};if(jQuery("#jBox-image-"+c+"-"+f).length){jQuery("#jBox-image-"+c+"-"+f).addClass("jBox-image-"+c+"-current").css({zIndex:this.imageZIndex++,opacity:0}).animate({opacity:1},(d=="open")?0:this.options.imageFade);
this.checkSize(jQuery("#jBox-image-"+c+"-"+f));a(c,f);}else{this.wrapper.addClass("jBox-image-loading");jQuery('<img src="'+this.images[c][f].src+'"/>').each(function(){var g=new Image();
g.onload=function(){b(c,f,false,null,false,g.width,g.height);this.checkSize(jQuery("#jBox-image-"+c+"-"+f));a(c,f);this.wrapper.removeClass("jBox-image-loading");
}.bind(this);g.onerror=function(){b(c,f,false,null,true,g.width,g.height);a(c,f);this.wrapper.removeClass("jBox-image-loading");}.bind(this);g.src=this.images[c][f].src;
}.bind(this));}if(this.imageCounter){if(this.images[c].length>1){this.wrapper.addClass("jBox-image-has-counter");this.imageCounter.find(".jBox-image-counter-all").html(this.images[c].length);
this.imageCounter.find(".jBox-image-counter-current").html(f+1);}else{this.wrapper.removeClass("jBox-image-has-counter");}}if(this.images[c].length>1){var e=f+1;
e=e>(this.images[c].length-1)?0:(e<0?(this.images[c].length-1):e);(!jQuery("#jBox-image-"+c+"-"+e).length)&&jQuery('<img src="'+this.images[c][e].src+'"/>').each(function(){var g=new Image();
g.onload=function(){b(c,e,true,null,false,g.width,g.height);}.bind(this);g.onerror=function(){b(c,e,true,null,true,g.width,g.height);}.bind(this);g.src=this.images[c][e].src;
}.bind(this));}};},_onCreated:function(){this.imageLabel=jQuery("<div/>",{"class":"jBox-image-label-container"}).appendTo(this.wrapper);this.imageLabel.append(jQuery("<div/>",{"class":"jBox-image-pointer-prev",click:function(){this.showImage("prev");
}.bind(this)})).append(jQuery("<div/>",{"class":"jBox-image-pointer-next",click:function(){this.showImage("next");}.bind(this)}));if(this.options.imageCounter){this.imageCounter=jQuery("<div/>",{"class":"jBox-image-counter-container"}).appendTo(this.wrapper);
this.imageCounter.append(jQuery("<span/>",{"class":"jBox-image-counter-current"})).append(jQuery("<span/>").html(this.options.imageCounterSeparator)).append(jQuery("<span/>",{"class":"jBox-image-counter-all"}));
}},_onOpen:function(){jQuery(document).on("keyup.jBox-Image-"+this.id,function(a){(a.keyCode==37)&&this.showImage("prev");(a.keyCode==39)&&this.showImage("next");
}.bind(this));this.showImage("open");},_onClose:function(){jQuery(document).off("keyup.jBox-Image-"+this.id);},_onCloseComplete:function(){this.wrapper.find(".jBox-image-container").css("opacity",0);
}});});
jQuery(document).ready(function(){new jBox.plugin("Notice",{color:null,stack:!0,stackSpacing:10,autoClose:6e3,attributes:{x:"right",y:"top"},position:{x:15,y:15},responsivePositions:{500:{x:5,y:5},768:{x:10,y:10}},target:window,fixed:!0,animation:"zoomIn",closeOnClick:"box",zIndex:12e3,_onInit:function(){this.defaultNoticePosition=jQuery.extend({},this.options.position),this._adjustNoticePositon=function(){var t=jQuery(window),i={x:t.width(),y:t.height()};this.options.position=jQuery.extend({},this.defaultNoticePosition),jQuery.each(this.options.responsivePositions,function(t,o){if(i.x<=t)return this.options.position=o,!1}.bind(this)),this.options.adjustDistance={top:this.options.position.y,right:this.options.position.x,bottom:this.options.position.y,left:this.options.position.x}},this.options.content instanceof jQuery&&(this.options.content=this.options.content.clone().attr("id","")),jQuery(window).on("resize.responsivejBoxNotice-"+this.id,function(t){this.isOpen&&this._adjustNoticePositon()}.bind(this)),this.open()},_onCreated:function(){this.wrapper.addClass("jBox-Notice-color jBox-Notice-"+(this.options.color||"gray")),this.wrapper.data("jBox-Notice-position",this.options.attributes.x+"-"+this.options.attributes.y)},_onOpen:function(){this._adjustNoticePositon(),jQuery.each(jQuery(".jBox-Notice"),function(t,i){if(i=jQuery(i),i.attr("id")!=this.id&&i.data("jBox-Notice-position")==this.options.attributes.x+"-"+this.options.attributes.y){if(!this.options.stack)return void i.data("jBox").close({ignoreDelay:!0});var o=(i.data("jBoxNoticeMargin")?parseInt(i.data("jBoxNoticeMargin")):parseInt(i.css("margin-"+this.options.attributes.y)))+this.wrapper.outerHeight()+this.options.stackSpacing;i.data("jBoxNoticeMargin",o),i.css("margin-"+this.options.attributes.y,o)}}.bind(this))},_onCloseComplete:function(){this.destroy()}})});
// основано на jBox
window.msgErrorBox = {

	alert : function(title, message)
	{
		var options = {
			animation: {open: 'flip', close: 'zoomIn'},
			position: {
				x: 16,
				y: 16
			},
			color: 'red',
			zIndex: 12000,
			width: 250
		};

		if (title)
		{
			options['title'] = title;
		} else
		{
			options['title'] = 'Ошибка!';
		}
		if (message) options['content'] = message;
		new jBox('Notice', options);
	}
};

window.msgNoticeBox = {
	alert : function(title, message)
	{
		var options = {
			animation: {open: 'flip', close: 'zoomIn'},
			position: {
				x: 16,
				y: 16
			},
			color: 'green',
			zIndex: 12000,
			width: 250
		};

		if (title)
		{
			options['title'] = title;
		} else
		{
			options['title'] = 'Внимание!';
		}
		if (message) options['content'] = message;
		new jBox('Notice', options);
	}
};
/**
*  Ajax Autocomplete for jQuery, version 1.2.27
*  (c) 2014 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=a.noop,f=this,g={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:e,onSearchComplete:e,onSearchError:e,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(b){return"string"==typeof b?a.parseJSON(b):b},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};f.element=c,f.el=a(c),f.suggestions=[],f.badQueries=[],f.selectedIndex=-1,f.currentValue=f.element.value,f.intervalId=0,f.cachedResponse={},f.onChangeInterval=null,f.onChange=null,f.isLocal=!1,f.suggestionsContainer=null,f.noSuggestionsContainer=null,f.options=a.extend({},g,d),f.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},f.hint=null,f.hintValue="",f.selection=null,f.initialize(),f.setOptions(d)}var c=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),d={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};b.utils=c,a.Autocomplete=b,b.formatResult=function(a,b){if(!b)return a.value;var d="("+c.escapeRegExChars(b)+")";return a.value.replace(new RegExp(d,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")},b.prototype={killerFn:null,initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.killerFn=function(b){a(b.target).closest("."+d.options.containerClass).length||(d.killSuggestions(),d.disableKillerFn())},d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){return d.select(a(this).data("index")),!1}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){this.enableKillerFn()},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=c.options;a.extend(d,b),c.isLocal=a.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearInterval(a.onChangeInterval),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},enableKillerFn:function(){var b=this;a(document).on("click.autocomplete",b.killerFn)},disableKillerFn:function(){var b=this;a(document).off("click.autocomplete",b.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions(),a.intervalId=window.setInterval(function(){a.visible&&(a.options.preserveInput||a.el.val(a.currentValue),a.hide()),a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===d.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case d.ESC:b.el.val(b.currentValue),b.hide();break;case d.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case d.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case d.RETURN:if(-1===b.selectedIndex)return void b.hide();b.select(b.selectedIndex);break;case d.UP:b.moveUp();break;case d.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case d.UP:case d.DOWN:return}clearInterval(b.onChangeInterval),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearInterval(b.onChangeInterval),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,d=h.ignoreParams?null:h.params,h.onSearchStart.call(g.element,h.params)!==!1){if(a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&a.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearInterval(b.onChangeInterval),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var d=a.data[e];return b===d?"":(b=d,'<div class="autocomplete-group"><strong>'+b+"</strong></div>")};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=a(b.suggestionsContainer),d=a(b.noSuggestionsContainer);this.adjustContainerWidth(),d.detach(),c.empty(),c.append(d),b.fixPosition(),c.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width&&(b=c.el.outerWidth(),e.css("width",b>0?b:300))},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a),b.disableKillerFn()},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),b.disableKillerFn(),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.autocomplete=a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)}});
(function(j,f){var c=j(window);function n(){return new Date(Date.UTC.apply(Date,arguments));}function g(){var q=new Date();return n(q.getFullYear(),q.getMonth(),q.getDate());
}function l(q){return function(){return this[q].apply(this,arguments);};}var e=(function(){var q={get:function(r){return this.slice(r)[0];},contains:function(u){var t=u&&u.valueOf();
for(var s=0,r=this.length;s<r;s++){if(this[s].valueOf()===t){return s;}}return -1;},remove:function(r){this.splice(r,1);},replace:function(r){if(!r){return;
}if(!j.isArray(r)){r=[r];}this.clear();this.push.apply(this,r);},clear:function(){this.splice(0);},copy:function(){var r=new e();r.replace(this);return r;
}};return function(){var r=[];r.push.apply(r,arguments);j.extend(r,q);return r;};})();var k=function(r,q){this.dates=new e();this.viewDate=g();this.focusDate=null;
this._process_options(q);this.element=j(r);this.isInline=false;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .input-group-addon, .btn"):false;
this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false;}this.picker=j(m.template);
this._buildEvents();this._attachEvents();if(this.isInline){this.picker.addClass("datepicker-inline").appendTo(this.element);}else{this.picker.addClass("datepicker-dropdown dropdown-menu");
}if(this.o.rtl){this.picker.addClass("datepicker-rtl");}this.viewMode=this.o.startView;if(this.o.calendarWeeks){this.picker.find("tfoot th.today").attr("colspan",function(s,t){return parseInt(t)+1;
});}this._allow_update=false;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
this.fillDow();this.fillMonths();this._allow_update=true;this.update();this.showMode();if(this.isInline){this.show();}};k.prototype={constructor:k,_process_options:function(q){this._o=j.extend({},this._o,q);
var u=this.o=j.extend({},this._o);var t=u.language;if(!b[t]){t=t.split("-")[0];if(!b[t]){t=h.language;}}u.language=t;switch(u.startView){case 2:case"decade":u.startView=2;
break;case 1:case"year":u.startView=1;break;default:u.startView=0;}switch(u.minViewMode){case 1:case"months":u.minViewMode=1;break;case 2:case"years":u.minViewMode=2;
break;default:u.minViewMode=0;}u.startView=Math.max(u.startView,u.minViewMode);if(u.multidate!==true){u.multidate=Number(u.multidate)||false;if(u.multidate!==false){u.multidate=Math.max(0,u.multidate);
}else{u.multidate=1;}}u.multidateSeparator=String(u.multidateSeparator);u.weekStart%=7;u.weekEnd=((u.weekStart+6)%7);var r=m.parseFormat(u.format);if(u.startDate!==-Infinity){if(!!u.startDate){if(u.startDate instanceof Date){u.startDate=this._local_to_utc(this._zero_time(u.startDate));
}else{u.startDate=m.parseDate(u.startDate,r,u.language);}}else{u.startDate=-Infinity;}}if(u.endDate!==Infinity){if(!!u.endDate){if(u.endDate instanceof Date){u.endDate=this._local_to_utc(this._zero_time(u.endDate));
}else{u.endDate=m.parseDate(u.endDate,r,u.language);}}else{u.endDate=Infinity;}}u.daysOfWeekDisabled=u.daysOfWeekDisabled||[];if(!j.isArray(u.daysOfWeekDisabled)){u.daysOfWeekDisabled=u.daysOfWeekDisabled.split(/[,\s]*/);
}u.daysOfWeekDisabled=j.map(u.daysOfWeekDisabled,function(w){return parseInt(w,10);});var s=String(u.orientation).toLowerCase().split(/\s+/g),v=u.orientation.toLowerCase();
s=j.grep(s,function(w){return(/^auto|left|right|top|bottom$/).test(w);});u.orientation={x:"auto",y:"auto"};if(!v||v==="auto"){}else{if(s.length===1){switch(s[0]){case"top":case"bottom":u.orientation.y=s[0];
break;case"left":case"right":u.orientation.x=s[0];break;}}else{v=j.grep(s,function(w){return(/^left|right$/).test(w);});u.orientation.x=v[0]||"auto";v=j.grep(s,function(w){return(/^top|bottom$/).test(w);
});u.orientation.y=v[0]||"auto";}}},_events:[],_secondaryEvents:[],_applyEvents:function(q){for(var r=0,t,s,u;r<q.length;r++){t=q[r][0];if(q[r].length===2){s=f;
u=q[r][1];}else{if(q[r].length===3){s=q[r][1];u=q[r][2];}}t.on(u,s);}},_unapplyEvents:function(q){for(var r=0,t,u,s;r<q.length;r++){t=q[r][0];if(q[r].length===2){s=f;
u=q[r][1];}else{if(q[r].length===3){s=q[r][1];u=q[r][2];}}t.off(u,s);}},_buildEvents:function(){if(this.isInput){this._events=[[this.element,{focus:j.proxy(this.show,this),keyup:j.proxy(function(q){if(j.inArray(q.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update();
}},this),keydown:j.proxy(this.keydown,this)}]];}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:j.proxy(this.show,this),keyup:j.proxy(function(q){if(j.inArray(q.keyCode,[27,37,39,38,40,32,13,9])===-1){this.update();
}},this),keydown:j.proxy(this.keydown,this)}],[this.component,{click:j.proxy(this.show,this)}]];}else{if(this.element.is("div")){this.isInline=true;}else{this._events=[[this.element,{click:j.proxy(this.show,this)}]];
}}}this._events.push([this.element,"*",{blur:j.proxy(function(q){this._focused_from=q.target;},this)}],[this.element,{blur:j.proxy(function(q){this._focused_from=q.target;
},this)}]);this._secondaryEvents=[[this.picker,{click:j.proxy(this.click,this)}],[j(window),{resize:j.proxy(this.place,this)}],[j(document),{"mousedown touchstart":j.proxy(function(q){if(!(this.element.is(q.target)||this.element.find(q.target).length||this.picker.is(q.target)||this.picker.find(q.target).length)){this.hide();
}},this)}]];},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events);},_detachEvents:function(){this._unapplyEvents(this._events);
},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents);},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents);
},_trigger:function(s,t){var r=t||this.dates.get(-1),q=this._utc_to_local(r);this.element.trigger({type:s,date:q,dates:j.map(this.dates,this._utc_to_local),format:j.proxy(function(u,w){if(arguments.length===0){u=this.dates.length-1;
w=this.o.format;}else{if(typeof u==="string"){w=u;u=this.dates.length-1;}}w=w||this.o.format;var v=this.dates.get(u);return m.formatDate(v,w,this.o.language);
},this)});},show:function(){if(!this.isInline){this.picker.appendTo("body");}this.picker.show();this.place();this._attachSecondaryEvents();this._trigger("show");
},hide:function(){if(this.isInline){return;}if(!this.picker.is(":visible")){return;}this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();
this.viewMode=this.o.startView;this.showMode();if(this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue();
}this._trigger("hide");},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;
if(!this.isInput){delete this.element.data().date;}},_utc_to_local:function(q){return q&&new Date(q.getTime()+(q.getTimezoneOffset()*60000));},_local_to_utc:function(q){return q&&new Date(q.getTime()-(q.getTimezoneOffset()*60000));
},_zero_time:function(q){return q&&new Date(q.getFullYear(),q.getMonth(),q.getDate());},_zero_utc_time:function(q){return q&&new Date(Date.UTC(q.getUTCFullYear(),q.getUTCMonth(),q.getUTCDate()));
},getDates:function(){return j.map(this.dates,this._utc_to_local);},getUTCDates:function(){return j.map(this.dates,function(q){return new Date(q);});},getDate:function(){return this._utc_to_local(this.getUTCDate());
},getUTCDate:function(){return new Date(this.dates.get(-1));},setDates:function(){var q=j.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,q);
this._trigger("changeDate");this.setValue();},setUTCDates:function(){var q=j.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,j.map(q,this._utc_to_local));
this._trigger("changeDate");this.setValue();},setDate:l("setDates"),setUTCDate:l("setUTCDates"),setValue:function(){var q=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(q).change();
}}else{this.element.val(q).change();}},getFormattedDate:function(q){if(q===f){q=this.o.format;}var r=this.o.language;return j.map(this.dates,function(s){return m.formatDate(s,q,r);
}).join(this.o.multidateSeparator);},setStartDate:function(q){this._process_options({startDate:q});this.update();this.updateNavArrows();},setEndDate:function(q){this._process_options({endDate:q});
this.update();this.updateNavArrows();},setDaysOfWeekDisabled:function(q){this._process_options({daysOfWeekDisabled:q});this.update();this.updateNavArrows();
},place:function(){if(this.isInline){return;}var E=this.picker.outerWidth(),A=this.picker.outerHeight(),u=10,w=c.width(),r=c.height(),v=c.scrollTop();var C=parseInt(this.element.parents().filter(function(){return j(this).css("z-index")!=="auto";
}).first().css("z-index"))+10;var z=this.component?this.component.parent().offset():this.element.offset();var D=this.component?this.component.outerHeight(true):this.element.outerHeight(false);
var t=this.component?this.component.outerWidth(true):this.element.outerWidth(false);var y=z.left,B=z.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");
if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);if(this.o.orientation.x==="right"){y-=E-t;}}else{this.picker.addClass("datepicker-orient-left");
if(z.left<0){y-=z.left-u;}else{if(z.left+E>w){y=w-E-u;}}}var q=this.o.orientation.y,s,x;if(q==="auto"){s=-v+z.top-A;x=v+r-(z.top+D+A);if(Math.max(s,x)===x){q="top";
}else{q="bottom";}}this.picker.addClass("datepicker-orient-"+q);if(q==="top"){B+=D;}else{B-=A+parseInt(this.picker.css("padding-top"));}this.picker.css({top:B,left:y,zIndex:C});
},_allow_update:true,update:function(){if(!this._allow_update){return;}var r=this.dates.copy(),s=[],q=false;if(arguments.length){j.each(arguments,j.proxy(function(u,t){if(t instanceof Date){t=this._local_to_utc(t);
}s.push(t);},this));q=true;}else{s=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();if(s&&this.o.multidate){s=s.split(this.o.multidateSeparator);
}else{s=[s];}delete this.element.data().date;}s=j.map(s,j.proxy(function(t){return m.parseDate(t,this.o.format,this.o.language);},this));s=j.grep(s,j.proxy(function(t){return(t<this.o.startDate||t>this.o.endDate||!t);
},this),true);this.dates.replace(s);if(this.dates.length){this.viewDate=new Date(this.dates.get(-1));}else{if(this.viewDate<this.o.startDate){this.viewDate=new Date(this.o.startDate);
}else{if(this.viewDate>this.o.endDate){this.viewDate=new Date(this.o.endDate);}}}if(q){this.setValue();}else{if(s.length){if(String(r)!==String(this.dates)){this._trigger("changeDate");
}}}if(!this.dates.length&&r.length){this._trigger("clearDate");}this.fill();},fillDow:function(){var r=this.o.weekStart,s="<tr>";if(this.o.calendarWeeks){var q='<th class="cw">&nbsp;</th>';
s+=q;this.picker.find(".datepicker-days thead tr:first-child").prepend(q);}while(r<this.o.weekStart+7){s+='<th class="dow">'+b[this.o.language].daysMin[(r++)%7]+"</th>";
}s+="</tr>";this.picker.find(".datepicker-days thead").append(s);},fillMonths:function(){var r="",q=0;while(q<12){r+='<span class="month">'+b[this.o.language].monthsShort[q++]+"</span>";
}this.picker.find(".datepicker-months td").html(r);},setRange:function(q){if(!q||!q.length){delete this.range;}else{this.range=j.map(q,function(r){return r.valueOf();
});}this.fill();},getClassNames:function(s){var q=[],t=this.viewDate.getUTCFullYear(),u=this.viewDate.getUTCMonth(),r=new Date();if(s.getUTCFullYear()<t||(s.getUTCFullYear()===t&&s.getUTCMonth()<u)){q.push("old");
}else{if(s.getUTCFullYear()>t||(s.getUTCFullYear()===t&&s.getUTCMonth()>u)){q.push("new");}}if(this.focusDate&&s.valueOf()===this.focusDate.valueOf()){q.push("focused");
}if(this.o.todayHighlight&&s.getUTCFullYear()===r.getFullYear()&&s.getUTCMonth()===r.getMonth()&&s.getUTCDate()===r.getDate()){q.push("today");}if(this.dates.contains(s)!==-1){q.push("active");
}if(s.valueOf()<this.o.startDate||s.valueOf()>this.o.endDate||j.inArray(s.getUTCDay(),this.o.daysOfWeekDisabled)!==-1){q.push("disabled");}if(this.range){if(s>this.range[0]&&s<this.range[this.range.length-1]){q.push("range");
}if(j.inArray(s.valueOf(),this.range)!==-1){q.push("selected");}}return q;},fill:function(){var L=new Date(this.viewDate),A=L.getUTCFullYear(),M=L.getUTCMonth(),F=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,J=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,x=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,G=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,y=b[this.o.language].today||b.en.today||"",s=b[this.o.language].clear||b.en.clear||"",u;
this.picker.find(".datepicker-days thead th.datepicker-switch").text(b[this.o.language].months[M]+" "+A);this.picker.find("tfoot th.today").text(y).toggle(this.o.todayBtn!==false);
this.picker.find("tfoot th.clear").text(s).toggle(this.o.clearBtn!==false);this.updateNavArrows();this.fillMonths();var O=n(A,M-1,28),I=m.getDaysInMonth(O.getUTCFullYear(),O.getUTCMonth());
O.setUTCDate(I);O.setUTCDate(I-(O.getUTCDay()-this.o.weekStart+7)%7);var q=new Date(O);q.setUTCDate(q.getUTCDate()+42);q=q.valueOf();var z=[];var D;while(O.valueOf()<q){if(O.getUTCDay()===this.o.weekStart){z.push("<tr>");
if(this.o.calendarWeeks){var r=new Date(+O+(this.o.weekStart-O.getUTCDay()-7)%7*86400000),v=new Date(Number(r)+(7+4-r.getUTCDay())%7*86400000),t=new Date(Number(t=n(v.getUTCFullYear(),0,1))+(7+4-t.getUTCDay())%7*86400000),B=(v-t)/86400000/7+1;
z.push('<td class="cw">'+B+"</td>");}}D=this.getClassNames(O);D.push("day");if(this.o.beforeShowDay!==j.noop){var C=this.o.beforeShowDay(this._utc_to_local(O));
if(C===f){C={};}else{if(typeof(C)==="boolean"){C={enabled:C};}else{if(typeof(C)==="string"){C={classes:C};}}}if(C.enabled===false){D.push("disabled");}if(C.classes){D=D.concat(C.classes.split(/\s+/));
}if(C.tooltip){u=C.tooltip;}}D=j.unique(D);z.push('<td class="'+D.join(" ")+'"'+(u?' title="'+u+'"':"")+">"+O.getUTCDate()+"</td>");if(O.getUTCDay()===this.o.weekEnd){z.push("</tr>");
}O.setUTCDate(O.getUTCDate()+1);}this.picker.find(".datepicker-days tbody").empty().append(z.join(""));var w=this.picker.find(".datepicker-months").find("th:eq(1)").text(A).end().find("span").removeClass("active");
j.each(this.dates,function(P,Q){if(Q.getUTCFullYear()===A){w.eq(Q.getUTCMonth()).addClass("active");}});if(A<F||A>x){w.addClass("disabled");}if(A===F){w.slice(0,J).addClass("disabled");
}if(A===x){w.slice(G+1).addClass("disabled");}z="";A=parseInt(A/10,10)*10;var N=this.picker.find(".datepicker-years").find("th:eq(1)").text(A+"-"+(A+9)).end().find("td");
A-=1;var E=j.map(this.dates,function(P){return P.getUTCFullYear();}),K;for(var H=-1;H<11;H++){K=["year"];if(H===-1){K.push("old");}else{if(H===10){K.push("new");
}}if(j.inArray(A,E)!==-1){K.push("active");}if(A<F||A>x){K.push("disabled");}z+='<span class="'+K.join(" ")+'">'+A+"</span>";A+=1;}N.html(z);},updateNavArrows:function(){if(!this._allow_update){return;
}var s=new Date(this.viewDate),q=s.getUTCFullYear(),r=s.getUTCMonth();switch(this.viewMode){case 0:if(this.o.startDate!==-Infinity&&q<=this.o.startDate.getUTCFullYear()&&r<=this.o.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"});
}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.o.endDate!==Infinity&&q>=this.o.endDate.getUTCFullYear()&&r>=this.o.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"});
}else{this.picker.find(".next").css({visibility:"visible"});}break;case 1:case 2:if(this.o.startDate!==-Infinity&&q<=this.o.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"});
}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.o.endDate!==Infinity&&q>=this.o.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"});
}else{this.picker.find(".next").css({visibility:"visible"});}break;}},click:function(u){u.preventDefault();var v=j(u.target).closest("span, td, th"),x,w,y;
if(v.length===1){switch(v[0].nodeName.toLowerCase()){case"th":switch(v[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var q=m.modes[this.viewMode].navStep*(v[0].className==="prev"?-1:1);
switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,q);this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,q);
if(this.viewMode===1){this._trigger("changeYear",this.viewDate);}break;}this.fill();break;case"today":var r=new Date();r=n(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0);
this.showMode(-2);var s=this.o.todayBtn==="linked"?null:"view";this._setDate(r,s);break;case"clear":var t;if(this.isInput){t=this.element;}else{if(this.component){t=this.element.find("input");
}}if(t){t.val("").change();}this.update();this._trigger("changeDate");if(this.o.autoclose){this.hide();}break;}break;case"span":if(!v.is(".disabled")){this.viewDate.setUTCDate(1);
if(v.is(".month")){y=1;w=v.parent().find("span").index(v);x=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(w);this._trigger("changeMonth",this.viewDate);
if(this.o.minViewMode===1){this._setDate(n(x,w,y));}}else{y=1;w=0;x=parseInt(v.text(),10)||0;this.viewDate.setUTCFullYear(x);this._trigger("changeYear",this.viewDate);
if(this.o.minViewMode===2){this._setDate(n(x,w,y));}}this.showMode(-1);this.fill();}break;case"td":if(v.is(".day")&&!v.is(".disabled")){y=parseInt(v.text(),10)||1;
x=this.viewDate.getUTCFullYear();w=this.viewDate.getUTCMonth();if(v.is(".old")){if(w===0){w=11;x-=1;}else{w-=1;}}else{if(v.is(".new")){if(w===11){w=0;x+=1;
}else{w+=1;}}}this._setDate(n(x,w,y));}break;}}if(this.picker.is(":visible")&&this._focused_from){j(this._focused_from).focus();}delete this._focused_from;
},_toggle_multidate:function(r){var q=this.dates.contains(r);if(!r){this.dates.clear();}else{if(q!==-1){this.dates.remove(q);}else{this.dates.push(r);}}if(typeof this.o.multidate==="number"){while(this.dates.length>this.o.multidate){this.dates.remove(0);
}}},_setDate:function(q,s){if(!s||s==="date"){this._toggle_multidate(q&&new Date(q));}if(!s||s==="view"){this.viewDate=q&&new Date(q);}this.fill();this.setValue();
this._trigger("changeDate");var r;if(this.isInput){r=this.element;}else{if(this.component){r=this.element.find("input");}}if(r){r.change();}if(this.o.autoclose&&(!s||s==="date")){this.hide();
}},moveMonth:function(q,r){if(!q){return f;}if(!r){return q;}var u=new Date(q.valueOf()),y=u.getUTCDate(),v=u.getUTCMonth(),t=Math.abs(r),x,w;r=r>0?1:-1;
if(t===1){w=r===-1?function(){return u.getUTCMonth()===v;}:function(){return u.getUTCMonth()!==x;};x=v+r;u.setUTCMonth(x);if(x<0||x>11){x=(x+12)%12;}}else{for(var s=0;
s<t;s++){u=this.moveMonth(u,r);}x=u.getUTCMonth();u.setUTCDate(y);w=function(){return x!==u.getUTCMonth();};}while(w()){u.setUTCDate(--y);u.setUTCMonth(x);
}return u;},moveYear:function(r,q){return this.moveMonth(r,q*12);},dateWithinRange:function(q){return q>=this.o.startDate&&q<=this.o.endDate;},keydown:function(w){if(this.picker.is(":not(:visible)")){if(w.keyCode===27){this.show();
}return;}var s=false,r,q,u,v=this.focusDate||this.viewDate;switch(w.keyCode){case 27:if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;
this.fill();}else{this.hide();}w.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation){break;}r=w.keyCode===37?-1:1;if(w.ctrlKey){q=this.moveYear(this.dates.get(-1)||g(),r);
u=this.moveYear(v,r);this._trigger("changeYear",this.viewDate);}else{if(w.shiftKey){q=this.moveMonth(this.dates.get(-1)||g(),r);u=this.moveMonth(v,r);this._trigger("changeMonth",this.viewDate);
}else{q=new Date(this.dates.get(-1)||g());q.setUTCDate(q.getUTCDate()+r);u=new Date(v);u.setUTCDate(v.getUTCDate()+r);}}if(this.dateWithinRange(q)){this.focusDate=this.viewDate=u;
this.setValue();this.fill();w.preventDefault();}break;case 38:case 40:if(!this.o.keyboardNavigation){break;}r=w.keyCode===38?-1:1;if(w.ctrlKey){q=this.moveYear(this.dates.get(-1)||g(),r);
u=this.moveYear(v,r);this._trigger("changeYear",this.viewDate);}else{if(w.shiftKey){q=this.moveMonth(this.dates.get(-1)||g(),r);u=this.moveMonth(v,r);this._trigger("changeMonth",this.viewDate);
}else{q=new Date(this.dates.get(-1)||g());q.setUTCDate(q.getUTCDate()+r*7);u=new Date(v);u.setUTCDate(v.getUTCDate()+r*7);}}if(this.dateWithinRange(q)){this.focusDate=this.viewDate=u;
this.setValue();this.fill();w.preventDefault();}break;case 32:break;case 13:v=this.focusDate||this.dates.get(-1)||this.viewDate;this._toggle_multidate(v);
s=true;this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(":visible")){w.preventDefault();
if(this.o.autoclose){this.hide();}}break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide();break;}if(s){if(this.dates.length){this._trigger("changeDate");
}else{this._trigger("clearDate");}var t;if(this.isInput){t=this.element;}else{if(this.component){t=this.element.find("input");}}if(t){t.change();}}},showMode:function(q){if(q){this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+q));
}this.picker.find(">div").hide().filter(".datepicker-"+m.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows();}};var p=function(r,q){this.element=j(r);
this.inputs=j.map(q.inputs,function(s){return s.jquery?s[0]:s;});delete q.inputs;j(this.inputs).datepicker(q).bind("changeDate",j.proxy(this.dateUpdated,this));
this.pickers=j.map(this.inputs,function(s){return j(s).data("datepicker");});this.updateDates();};p.prototype={updateDates:function(){this.dates=j.map(this.pickers,function(q){return q.getUTCDate();
});this.updateRanges();},updateRanges:function(){var q=j.map(this.dates,function(r){return r.valueOf();});j.each(this.pickers,function(r,s){s.setRange(q);
});},dateUpdated:function(t){if(this.updating){return;}this.updating=true;var u=j(t.target).data("datepicker"),s=u.getUTCDate(),r=j.inArray(t.target,this.inputs),q=this.inputs.length;
if(r===-1){return;}j.each(this.pickers,function(v,w){if(!w.getUTCDate()){w.setUTCDate(s);}});if(s<this.dates[r]){while(r>=0&&s<this.dates[r]){this.pickers[r--].setUTCDate(s);
}}else{if(s>this.dates[r]){while(r<q&&s>this.dates[r]){this.pickers[r++].setUTCDate(s);}}}this.updateDates();delete this.updating;},remove:function(){j.map(this.pickers,function(q){q.remove();
});delete this.element.data().datepicker;}};function i(t,w){var v=j(t).data(),q={},u,s=new RegExp("^"+w.toLowerCase()+"([A-Z])");w=new RegExp("^"+w.toLowerCase());
function x(z,y){return y.toLowerCase();}for(var r in v){if(w.test(r)){u=r.replace(s,x);q[u]=v[r];}}return q;}function a(s){var q={};if(!b[s]){s=s.split("-")[0];
if(!b[s]){return;}}var r=b[s];j.each(o,function(u,t){if(t in r){q[t]=r[t];}});return q;}var d=j.fn.datepicker;j.fn.datepicker=function(s){var q=Array.apply(null,arguments);
q.shift();var r;this.each(function(){var A=j(this),y=A.data("datepicker"),u=typeof s==="object"&&s;if(!y){var w=i(this,"date"),t=j.extend({},h,w,u),v=a(t.language),x=j.extend({},h,v,w,u);
if(A.is(".input-daterange")||x.inputs){var z={inputs:x.inputs||A.find("input").toArray()};A.data("datepicker",(y=new p(this,j.extend(x,z))));}else{A.data("datepicker",(y=new k(this,x)));
}}if(typeof s==="string"&&typeof y[s]==="function"){r=y[s].apply(y,q);if(r!==f){return false;}}});if(r!==f){return r;}else{return this;}};var h=j.fn.datepicker.defaults={autoclose:false,beforeShowDay:j.noop,calendarWeeks:false,clearBtn:false,daysOfWeekDisabled:[],endDate:Infinity,forceParse:true,format:"mm/dd/yyyy",keyboardNavigation:true,language:"en",minViewMode:0,multidate:false,multidateSeparator:",",orientation:"auto",rtl:false,startDate:-Infinity,startView:0,todayBtn:false,todayHighlight:false,weekStart:0};
var o=j.fn.datepicker.locale_opts=["format","rtl","weekStart"];j.fn.datepicker.Constructor=k;var b=j.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}};
var m={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(q){return(((q%4===0)&&(q%100!==0))||(q%400===0));
},getDaysInMonth:function(q,r){return[31,(m.isLeapYear(q)?29:28),31,30,31,30,31,31,30,31,30,31][r];},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(s){var q=s.replace(this.validParts,"\0").split("\0"),r=s.match(this.validParts);
if(!q||!q.length||!r||r.length===0){throw new Error("Invalid date format.");}return{separators:q,parts:r};},parseDate:function(H,E,B){if(!H){return f;}if(H instanceof Date){return H;
}if(typeof E==="string"){E=m.parseFormat(E);}var t=/([\-+]\d+)([dmwy])/,z=H.match(/([\-+]\d+)([dmwy])/g),A,y,D;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(H)){H=new Date();
for(D=0;D<z.length;D++){A=t.exec(z[D]);y=parseInt(A[1]);switch(A[2]){case"d":H.setUTCDate(H.getUTCDate()+y);break;case"m":H=k.prototype.moveMonth.call(k.prototype,H,y);
break;case"w":H.setUTCDate(H.getUTCDate()+y*7);break;case"y":H=k.prototype.moveYear.call(k.prototype,H,y);break;}}return n(H.getUTCFullYear(),H.getUTCMonth(),H.getUTCDate(),0,0,0);
}z=H&&H.match(this.nonpunctuation)||[];H=new Date();var u={},F=["yyyy","yy","M","MM","m","mm","d","dd"],x={yyyy:function(J,s){return J.setUTCFullYear(s);
},yy:function(J,s){return J.setUTCFullYear(2000+s);},m:function(J,s){if(isNaN(J)){return J;}s-=1;while(s<0){s+=12;}s%=12;J.setUTCMonth(s);while(J.getUTCMonth()!==s){J.setUTCDate(J.getUTCDate()-1);
}return J;},d:function(J,s){return J.setUTCDate(s);}},I,r;x.M=x.MM=x.mm=x.m;x.dd=x.d;H=n(H.getFullYear(),H.getMonth(),H.getDate(),0,0,0);var q=E.parts.slice();
if(z.length!==q.length){q=j(q).filter(function(s,J){return j.inArray(J,F)!==-1;}).toArray();}function G(){var s=this.slice(0,z[D].length),J=z[D].slice(0,s.length);
return s===J;}if(z.length===q.length){var C;for(D=0,C=q.length;D<C;D++){I=parseInt(z[D],10);A=q[D];if(isNaN(I)){switch(A){case"MM":r=j(b[B].months).filter(G);
I=j.inArray(r[0],b[B].months)+1;break;case"M":r=j(b[B].monthsShort).filter(G);I=j.inArray(r[0],b[B].monthsShort)+1;break;}}u[A]=I;}var v,w;for(D=0;D<F.length;
D++){w=F[D];if(w in u&&!isNaN(u[w])){v=new Date(H);x[w](v,u[w]);if(!isNaN(v)){H=v;}}}}return H;},formatDate:function(q,u,w){if(!q){return"";}if(typeof u==="string"){u=m.parseFormat(u);
}var v={d:q.getUTCDate(),D:b[w].daysShort[q.getUTCDay()],DD:b[w].days[q.getUTCDay()],m:q.getUTCMonth()+1,M:b[w].monthsShort[q.getUTCMonth()],MM:b[w].months[q.getUTCMonth()],yy:q.getUTCFullYear().toString().substring(2),yyyy:q.getUTCFullYear()};
v.dd=(v.d<10?"0":"")+v.d;v.mm=(v.m<10?"0":"")+v.m;q=[];var t=j.extend([],u.separators);for(var s=0,r=u.parts.length;s<=r;s++){if(t.length){q.push(t.shift());
}q.push(v[u.parts[s]]);}return q.join("");},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};
m.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+m.headTemplate+"<tbody></tbody>"+m.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+m.headTemplate+m.contTemplate+m.footTemplate+"</table></div></div>";
j.fn.datepicker.DPGlobal=m;j.fn.datepicker.noConflict=function(){j.fn.datepicker=d;return this;};j(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(r){var q=j(this);
if(q.data("datepicker")){return;}r.preventDefault();q.datepicker("show");});j(function(){j('[data-provide="datepicker-inline"]').datepicker();});}(window.jQuery));
;
(function(a){a.fn.datepicker.dates.ru={days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"],daysShort:["Вск","Пнд","Втр","Срд","Чтв","Птн","Суб","Вск"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб","Вс"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Убрать дату",weekStart:1};
a.fn.datepicker.defaults.format="dd.mm.yyyy";a.fn.datepicker.defaults.language="ru";a.fn.datepicker.defaults.autoclose=true;}(jQuery));
(function(d,c,b,e){function a(g,f){this.settings=null;this.options=d.extend({},a.Defaults,f);this.$element=d(g);this._handlers={};this._plugins={};this._supress={};
this._current=null;this._speed=null;this._coordinates=[];this._breakpoint=null;this._width=null;this._items=[];this._clones=[];this._mergers=[];this._widths=[];
this._invalidated={};this._pipe=[];this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null};this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}};
d.each(["onResize","onThrottledResize"],d.proxy(function(h,j){this._handlers[j]=d.proxy(this[j],this);},this));d.each(a.Plugins,d.proxy(function(h,i){this._plugins[h.charAt(0).toLowerCase()+h.slice(1)]=new i(this);
},this));d.each(a.Workers,d.proxy(function(h,i){this._pipe.push({filter:i.filter,run:d.proxy(i.run,this)});},this));this.setup();this.initialize();}a.Defaults={items:3,loop:false,center:false,rewind:false,checkVisibility:true,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:c,fallbackEasing:"swing",slideTransition:"",info:false,nestedItemSelector:false,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"};
a.Width={Default:"default",Inner:"inner",Outer:"outer"};a.Type={Event:"event",State:"state"};a.Plugins={};a.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width();
}},{filter:["width","items","settings"],run:function(f){f.current=this._items&&this._items[this.relative(this._current)];}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove();
}},{filter:["width","items","settings"],run:function(f){var i=this.settings.margin||"",h=!this.settings.autoWidth,j=this.settings.rtl,g={width:"auto","margin-left":j?i:"","margin-right":j?"":i};
!h&&this.$stage.children().css(g);f.css=g;}},{filter:["width","items","settings"],run:function(f){var i=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,k=null,h=this._items.length,g=!this.settings.autoWidth,j=[];
f.items={merge:false,width:i};while(h--){k=this._mergers[h];k=this.settings.mergeFit&&Math.min(k,this.settings.items)||k;f.items.merge=k>1||f.items.merge;
j[h]=!g?this._items[h].width():i*k;}this._widths=j;}},{filter:["items","settings"],run:function(){var m=[],i=this._items,k=this.settings,g=Math.max(k.items*2,4),j=Math.ceil(i.length/2)*2,l=k.loop&&i.length?k.rewind?g:Math.max(g,j):0,f="",h="";
l/=2;while(l>0){m.push(this.normalize(m.length/2,true));f=f+i[m[m.length-1]][0].outerHTML;m.push(this.normalize(i.length-1-(m.length-1)/2,true));h=i[m[m.length-1]][0].outerHTML+h;
l-=1;}this._clones=m;d(f).addClass("cloned").appendTo(this.$stage);d(h).addClass("cloned").prependTo(this.$stage);}},{filter:["width","items","settings"],run:function(){var j=this.settings.rtl?1:-1,f=this._clones.length+this._items.length,g=-1,h=0,i=0,k=[];
while(++g<f){h=k[g-1]||0;i=this._widths[this.relative(g)]+this.settings.margin;k.push(h+i*j);}this._coordinates=k;}},{filter:["width","items","settings"],run:function(){var g=this.settings.stagePadding,h=this._coordinates,f={width:Math.ceil(Math.abs(h[h.length-1]))+g*2,"padding-left":g||"","padding-right":g||""};
this.$stage.css(f);}},{filter:["width","items","settings"],run:function(g){var i=this._coordinates.length,h=!this.settings.autoWidth,f=this.$stage.children();
if(h&&g.items.merge){while(i--){g.css.width=this._widths[this.relative(i)];f.eq(i).css(g.css);}}else{if(h){g.css.width=g.items.width;f.css(g.css);}}}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style");
}},{filter:["width","items","settings"],run:function(f){f.current=f.current?this.$stage.children().index(f.current):0;f.current=Math.max(this.minimum(),Math.min(this.maximum(),f.current));
this.reset(f.current);}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current));}},{filter:["width","position","items","settings"],run:function(){var l=this.settings.rtl?1:-1,m=this.settings.stagePadding*2,g=this.coordinates(this.current())+m,h=g+this.width()*l,p,o,k=[],j,f;
for(j=0,f=this._coordinates.length;j<f;j++){p=this._coordinates[j-1]||0;o=Math.abs(this._coordinates[j])+m*l;if((this.op(p,"<=",g)&&(this.op(p,">",h)))||(this.op(o,"<",g)&&this.op(o,">",h))){k.push(j);
}}this.$stage.children(".active").removeClass("active");this.$stage.children(":eq("+k.join("), :eq(")+")").addClass("active");this.$stage.children(".center").removeClass("center");
if(this.settings.center){this.$stage.children().eq(this.current()).addClass("center");}}}];a.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass);
if(this.$stage.length){return;}this.$element.addClass(this.options.loadingClass);this.$stage=d("<"+this.settings.stageElement+">",{"class":this.settings.stageClass}).wrap(d("<div/>",{"class":this.settings.stageOuterClass}));
this.$element.append(this.$stage.parent());};a.prototype.initializeItems=function(){var f=this.$element.find(".owl-item");if(f.length){this._items=f.get().map(function(g){return d(g);
});this._mergers=this._items.map(function(){return 1;});this.refresh();return;}this.replace(this.$element.children().not(this.$stage.parent()));if(this.isVisible()){this.refresh();
}else{this.invalidate("width");}this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);};a.prototype.initialize=function(){this.enter("initializing");
this.trigger("initialize");this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl);if(this.settings.autoWidth&&!this.is("pre-loading")){var h,g,f;
h=this.$element.find("img");g=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:e;f=this.$element.children(g).width();if(h.length&&f<=0){this.preloadAutoWidthImages(h);
}}this.initializeStage();this.initializeItems();this.registerEventHandlers();this.leave("initializing");this.trigger("initialized");};a.prototype.isVisible=function(){return this.settings.checkVisibility?this.$element.is(":visible"):true;
};a.prototype.setup=function(){var f=this.viewport(),h=this.options.responsive,g=-1,i=null;if(!h){i=d.extend({},this.options);}else{d.each(h,function(j){if(j<=f&&j>g){g=Number(j);
}});i=d.extend({},this.options,h[g]);if(typeof i.stagePadding==="function"){i.stagePadding=i.stagePadding();}delete i.responsive;if(i.responsiveClass){this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+g));
}}this.trigger("change",{property:{name:"settings",value:i}});this._breakpoint=g;this.settings=i;this.invalidate("settings");this.trigger("changed",{property:{name:"settings",value:this.settings}});
};a.prototype.optionsLogic=function(){if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false;}};a.prototype.prepare=function(g){var f=this.trigger("prepare",{content:g});
if(!f.data){f.data=d("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(g);}this.trigger("prepared",{content:f.data});return f.data;
};a.prototype.update=function(){var g=0,j=this._pipe.length,h=d.proxy(function(i){return this[i];},this._invalidated),f={};while(g<j){if(this._invalidated.all||d.grep(this._pipe[g].filter,h).length>0){this._pipe[g].run(f);
}g++;}this._invalidated={};!this.is("valid")&&this.enter("valid");};a.prototype.width=function(f){f=f||a.Width.Default;switch(f){case a.Width.Inner:case a.Width.Outer:return this._width;
default:return this._width-this.settings.stagePadding*2+this.settings.margin;}};a.prototype.refresh=function(){this.enter("refreshing");this.trigger("refresh");
this.setup();this.optionsLogic();this.$element.addClass(this.options.refreshClass);this.update();this.$element.removeClass(this.options.refreshClass);this.leave("refreshing");
this.trigger("refreshed");};a.prototype.onThrottledResize=function(){c.clearTimeout(this.resizeTimer);this.resizeTimer=c.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate);
};a.prototype.onResize=function(){if(!this._items.length){return false;}if(this._width===this.$element.width()){return false;}if(!this.isVisible()){return false;
}this.enter("resizing");if(this.trigger("resize").isDefaultPrevented()){this.leave("resizing");return false;}this.invalidate("width");this.refresh();this.leave("resizing");
this.trigger("resized");};a.prototype.registerEventHandlers=function(){if(d.support.transition){this.$stage.on(d.support.transition.end+".owl.core",d.proxy(this.onTransitionEnd,this));
}if(this.settings.responsive!==false){this.on(c,"resize",this._handlers.onThrottledResize);}if(this.settings.mouseDrag){this.$element.addClass(this.options.dragClass);
this.$stage.on("mousedown.owl.core",d.proxy(this.onDragStart,this));this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return false;});
}if(this.settings.touchDrag){this.$stage.on("touchstart.owl.core",d.proxy(this.onDragStart,this));this.$stage.on("touchcancel.owl.core",d.proxy(this.onDragEnd,this));
}};a.prototype.onDragStart=function(g){var f=null;if(g.which===3){return;}if(d.support.transform){f=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(",");
f={x:f[f.length===16?12:4],y:f[f.length===16?13:5]};}else{f=this.$stage.position();f={x:this.settings.rtl?f.left+this.$stage.width()-this.width()+this.settings.margin:f.left,y:f.top};
}if(this.is("animating")){d.support.transform?this.animate(f.x):this.$stage.stop();this.invalidate("position");}this.$element.toggleClass(this.options.grabClass,g.type==="mousedown");
this.speed(0);this._drag.time=new Date().getTime();this._drag.target=d(g.target);this._drag.stage.start=f;this._drag.stage.current=f;this._drag.pointer=this.pointer(g);
d(b).on("mouseup.owl.core touchend.owl.core",d.proxy(this.onDragEnd,this));d(b).one("mousemove.owl.core touchmove.owl.core",d.proxy(function(h){var i=this.difference(this._drag.pointer,this.pointer(h));
d(b).on("mousemove.owl.core touchmove.owl.core",d.proxy(this.onDragMove,this));if(Math.abs(i.x)<Math.abs(i.y)&&this.is("valid")){return;}h.preventDefault();
this.enter("dragging");this.trigger("drag");},this));};a.prototype.onDragMove=function(g){var i=null,j=null,h=null,k=this.difference(this._drag.pointer,this.pointer(g)),f=this.difference(this._drag.stage.start,k);
if(!this.is("dragging")){return;}g.preventDefault();if(this.settings.loop){i=this.coordinates(this.minimum());j=this.coordinates(this.maximum()+1)-i;f.x=(((f.x-i)%j+j)%j)+i;
}else{i=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());j=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());
h=this.settings.pullDrag?-1*k.x/5:0;f.x=Math.max(Math.min(f.x,i+h),j+h);}this._drag.stage.current=f;this.animate(f.x);};a.prototype.onDragEnd=function(g){var i=this.difference(this._drag.pointer,this.pointer(g)),f=this._drag.stage.current,h=i.x>0^this.settings.rtl?"left":"right";
d(b).off(".owl.core");this.$element.removeClass(this.options.grabClass);if(i.x!==0&&this.is("dragging")||!this.is("valid")){this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);
this.current(this.closest(f.x,i.x!==0?h:this._drag.direction));this.invalidate("position");this.update();this._drag.direction=h;if(Math.abs(i.x)>3||new Date().getTime()-this._drag.time>300){this._drag.target.one("click.owl.core",function(){return false;
});}}if(!this.is("dragging")){return;}this.leave("dragging");this.trigger("dragged");};a.prototype.closest=function(k,i){var f=-1,h=30,g=this.width(),j=this.coordinates();
if(!this.settings.freeDrag){d.each(j,d.proxy(function(l,m){if(i==="left"&&k>m-h&&k<m+h){f=l;}else{if(i==="right"&&k>m-g-h&&k<m-g+h){f=l+1;}else{if(this.op(k,"<",m)&&this.op(k,">",j[l+1]!==e?j[l+1]:m-g)){f=i==="left"?l+1:l;
}}}return f===-1;},this));}if(!this.settings.loop){if(this.op(k,">",j[this.minimum()])){f=k=this.minimum();}else{if(this.op(k,"<",j[this.maximum()])){f=k=this.maximum();
}}}return f;};a.prototype.animate=function(g){var f=this.speed()>0;this.is("animating")&&this.onTransitionEnd();if(f){this.enter("animating");this.trigger("translate");
}if(d.support.transform3d&&d.support.transition){this.$stage.css({transform:"translate3d("+g+"px,0px,0px)",transition:(this.speed()/1000)+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")});
}else{if(f){this.$stage.animate({left:g+"px"},this.speed(),this.settings.fallbackEasing,d.proxy(this.onTransitionEnd,this));}else{this.$stage.css({left:g+"px"});
}}};a.prototype.is=function(f){return this._states.current[f]&&this._states.current[f]>0;};a.prototype.current=function(f){if(f===e){return this._current;
}if(this._items.length===0){return e;}f=this.normalize(f);if(this._current!==f){var g=this.trigger("change",{property:{name:"position",value:f}});if(g.data!==e){f=this.normalize(g.data);
}this._current=f;this.invalidate("position");this.trigger("changed",{property:{name:"position",value:this._current}});}return this._current;};a.prototype.invalidate=function(f){if(d.type(f)==="string"){this._invalidated[f]=true;
this.is("valid")&&this.leave("valid");}return d.map(this._invalidated,function(g,h){return h;});};a.prototype.reset=function(f){f=this.normalize(f);if(f===e){return;
}this._speed=0;this._current=f;this.suppress(["translate","translated"]);this.animate(this.coordinates(f));this.release(["translate","translated"]);};a.prototype.normalize=function(g,h){var i=this._items.length,f=h?0:this._clones.length;
if(!this.isNumeric(g)||i<1){g=e;}else{if(g<0||g>=i+f){g=((g-f/2)%i+i)%i+f/2;}}return g;};a.prototype.relative=function(f){f-=this._clones.length/2;return this.normalize(f,true);
};a.prototype.maximum=function(j){var g=this.settings,k=this._coordinates.length,f,i,h;if(g.loop){k=this._clones.length/2+this._items.length-1;}else{if(g.autoWidth||g.merge){f=this._items.length;
if(f){i=this._items[--f].width();h=this.$element.width();while(f--){i+=this._items[f].width()+this.settings.margin;if(i>h){break;}}}k=f+1;}else{if(g.center){k=this._items.length-1;
}else{k=this._items.length-g.items;}}}if(j){k-=this._clones.length/2;}return Math.max(k,0);};a.prototype.minimum=function(f){return f?0:this._clones.length/2;
};a.prototype.items=function(f){if(f===e){return this._items.slice();}f=this.normalize(f,true);return this._items[f];};a.prototype.mergers=function(f){if(f===e){return this._mergers.slice();
}f=this.normalize(f,true);return this._mergers[f];};a.prototype.clones=function(f){var g=this._clones.length/2,i=g+this._items.length,h=function(j){return j%2===0?i+j/2:g-(j+1)/2;
};if(f===e){return d.map(this._clones,function(j,k){return h(k);});}return d.map(this._clones,function(j,k){return j===f?h(k):null;});};a.prototype.speed=function(f){if(f!==e){this._speed=f;
}return this._speed;};a.prototype.coordinates=function(f){var i=1,g=f-1,h;if(f===e){return d.map(this._coordinates,d.proxy(function(k,j){return this.coordinates(j);
},this));}if(this.settings.center){if(this.settings.rtl){i=-1;g=f+1;}h=this._coordinates[f];h+=(this.width()-h+(this._coordinates[g]||0))/2*i;}else{h=this._coordinates[g]||0;
}h=Math.ceil(h);return h;};a.prototype.duration=function(h,g,f){if(f===0){return 0;}return Math.min(Math.max(Math.abs(g-h),1),6)*Math.abs((f||this.settings.smartSpeed));
};a.prototype.to=function(i,g){var j=this.current(),m=null,f=i-this.relative(j),n=(f>0)-(f<0),l=this._items.length,k=this.minimum(),h=this.maximum();if(this.settings.loop){if(!this.settings.rewind&&Math.abs(f)>l/2){f+=n*-1*l;
}i=j+f;m=((i-k)%l+l)%l+k;if(m!==i&&m-f<=h&&m-f>0){j=m-f;i=m;this.reset(j);}}else{if(this.settings.rewind){h+=1;i=(i%h+h)%h;}else{i=Math.max(k,Math.min(h,i));
}}this.speed(this.duration(j,i,g));this.current(i);if(this.isVisible()){this.update();}};a.prototype.next=function(f){f=f||false;this.to(this.relative(this.current())+1,f);
};a.prototype.prev=function(f){f=f||false;this.to(this.relative(this.current())-1,f);};a.prototype.onTransitionEnd=function(f){if(f!==e){f.stopPropagation();
if((f.target||f.srcElement||f.originalTarget)!==this.$stage.get(0)){return false;}}this.leave("animating");this.trigger("translated");};a.prototype.viewport=function(){var f;
if(this.options.responsiveBaseElement!==c){f=d(this.options.responsiveBaseElement).width();}else{if(c.innerWidth){f=c.innerWidth;}else{if(b.documentElement&&b.documentElement.clientWidth){f=b.documentElement.clientWidth;
}else{console.warn("Can not detect viewport width.");}}}return f;};a.prototype.replace=function(f){this.$stage.empty();this._items=[];if(f){f=(f instanceof jQuery)?f:d(f);
}if(this.settings.nestedItemSelector){f=f.find("."+this.settings.nestedItemSelector);}f.filter(function(){return this.nodeType===1;}).each(d.proxy(function(g,h){h=this.prepare(h);
this.$stage.append(h);this._items.push(h);this._mergers.push(h.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1);},this));this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);
this.invalidate("items");};a.prototype.add=function(g,f){var h=this.relative(this._current);f=f===e?this._items.length:this.normalize(f,true);g=g instanceof jQuery?g:d(g);
this.trigger("add",{content:g,position:f});g=this.prepare(g);if(this._items.length===0||f===this._items.length){this._items.length===0&&this.$stage.append(g);
this._items.length!==0&&this._items[f-1].after(g);this._items.push(g);this._mergers.push(g.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1);
}else{this._items[f].before(g);this._items.splice(f,0,g);this._mergers.splice(f,0,g.find("[data-merge]").addBack("[data-merge]").attr("data-merge")*1||1);
}this._items[h]&&this.reset(this._items[h].index());this.invalidate("items");this.trigger("added",{content:g,position:f});};a.prototype.remove=function(f){f=this.normalize(f,true);
if(f===e){return;}this.trigger("remove",{content:this._items[f],position:f});this._items[f].remove();this._items.splice(f,1);this._mergers.splice(f,1);
this.invalidate("items");this.trigger("removed",{content:null,position:f});};a.prototype.preloadAutoWidthImages=function(f){f.each(d.proxy(function(h,g){this.enter("pre-loading");
g=d(g);d(new Image()).one("load",d.proxy(function(i){g.attr("src",i.target.src);g.css("opacity",1);this.leave("pre-loading");!this.is("pre-loading")&&!this.is("initializing")&&this.refresh();
},this)).attr("src",g.attr("src")||g.attr("data-src")||g.attr("data-src-retina"));},this));};a.prototype.destroy=function(){this.$element.off(".owl.core");
this.$stage.off(".owl.core");d(b).off(".owl.core");if(this.settings.responsive!==false){c.clearTimeout(this.resizeTimer);this.off(c,"resize",this._handlers.onThrottledResize);
}for(var f in this._plugins){this._plugins[f].destroy();}this.$stage.children(".cloned").remove();this.$stage.unwrap();this.$stage.children().contents().unwrap();
this.$stage.children().unwrap();this.$stage.remove();this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel");
};a.prototype.op=function(g,i,f){var h=this.settings.rtl;switch(i){case"<":return h?g>f:g<f;case">":return h?g<f:g>f;case">=":return h?g<=f:g>=f;case"<=":return h?g>=f:g<=f;
default:break;}};a.prototype.on=function(g,h,i,f){if(g.addEventListener){g.addEventListener(h,i,f);}else{if(g.attachEvent){g.attachEvent("on"+h,i);}}};
a.prototype.off=function(g,h,i,f){if(g.removeEventListener){g.removeEventListener(h,i,f);}else{if(g.detachEvent){g.detachEvent("on"+h,i);}}};a.prototype.trigger=function(g,l,i,k,m){var f={item:{count:this._items.length,index:this.current()}},h=d.camelCase(d.grep(["on",g,i],function(n){return n;
}).join("-").toLowerCase()),j=d.Event([g,"owl",i||"carousel"].join(".").toLowerCase(),d.extend({relatedTarget:this},f,l));if(!this._supress[g]){d.each(this._plugins,function(n,o){if(o.onTrigger){o.onTrigger(j);
}});this.register({type:a.Type.Event,name:g});this.$element.trigger(j);if(this.settings&&typeof this.settings[h]==="function"){this.settings[h].call(this,j);
}}return j;};a.prototype.enter=function(f){d.each([f].concat(this._states.tags[f]||[]),d.proxy(function(h,g){if(this._states.current[g]===e){this._states.current[g]=0;
}this._states.current[g]++;},this));};a.prototype.leave=function(f){d.each([f].concat(this._states.tags[f]||[]),d.proxy(function(h,g){this._states.current[g]--;
},this));};a.prototype.register=function(g){if(g.type===a.Type.Event){if(!d.event.special[g.name]){d.event.special[g.name]={};}if(!d.event.special[g.name].owl){var f=d.event.special[g.name]._default;
d.event.special[g.name]._default=function(h){if(f&&f.apply&&(!h.namespace||h.namespace.indexOf("owl")===-1)){return f.apply(this,arguments);}return h.namespace&&h.namespace.indexOf("owl")>-1;
};d.event.special[g.name].owl=true;}}else{if(g.type===a.Type.State){if(!this._states.tags[g.name]){this._states.tags[g.name]=g.tags;}else{this._states.tags[g.name]=this._states.tags[g.name].concat(g.tags);
}this._states.tags[g.name]=d.grep(this._states.tags[g.name],d.proxy(function(h,j){return d.inArray(h,this._states.tags[g.name])===j;},this));}}};a.prototype.suppress=function(f){d.each(f,d.proxy(function(g,h){this._supress[h]=true;
},this));};a.prototype.release=function(f){d.each(f,d.proxy(function(g,h){delete this._supress[h];},this));};a.prototype.pointer=function(g){var f={x:null,y:null};
g=g.originalEvent||g||c.event;g=g.touches&&g.touches.length?g.touches[0]:g.changedTouches&&g.changedTouches.length?g.changedTouches[0]:g;if(g.pageX){f.x=g.pageX;
f.y=g.pageY;}else{f.x=g.clientX;f.y=g.clientY;}return f;};a.prototype.isNumeric=function(f){return !isNaN(parseFloat(f));};a.prototype.difference=function(g,f){return{x:g.x-f.x,y:g.y-f.y};
};d.fn.owlCarousel=function(g){var f=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=d(this),h=i.data("owl.carousel");if(!h){h=new a(this,typeof g=="object"&&g);
i.data("owl.carousel",h);d.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(j,k){h.register({type:a.Type.Event,name:k});
h.$element.on(k+".owl.carousel.core",d.proxy(function(l){if(l.namespace&&l.relatedTarget!==this){this.suppress([k]);h[k].apply(this,[].slice.call(arguments,1));
this.release([k]);}},h));});}if(typeof g=="string"&&g.charAt(0)!=="_"){h[g].apply(h,f);}});};d.fn.owlCarousel.Constructor=a;})(window.Zepto||window.jQuery,window,document);
(function(d,c,a,e){var b=function(f){this._core=f;this._interval=null;this._visible=null;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.autoRefresh){this.watch();
}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this._core.$element.on(this._handlers);};b.Defaults={autoRefresh:true,autoRefreshInterval:500};
b.prototype.watch=function(){if(this._interval){return;}this._visible=this._core.isVisible();this._interval=c.setInterval(d.proxy(this.refresh,this),this._core.settings.autoRefreshInterval);
};b.prototype.refresh=function(){if(this._core.isVisible()===this._visible){return;}this._visible=!this._visible;this._core.$element.toggleClass("owl-hidden",!this._visible);
this._visible&&(this._core.invalidate("width")&&this._core.refresh());};b.prototype.destroy=function(){var f,g;c.clearInterval(this._interval);for(f in this._handlers){this._core.$element.off(f,this._handlers[f]);
}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);}};d.fn.owlCarousel.Constructor.Plugins.AutoRefresh=b;})(window.Zepto||window.jQuery,window,document);
(function(d,c,a,e){var b=function(f){this._core=f;this._loaded=[];this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":d.proxy(function(m){if(!m.namespace){return;
}if(!this._core.settings||!this._core.settings.lazyLoad){return;}if((m.property&&m.property.name=="position")||m.type=="initialized"){var j=this._core.settings,o=(j.center&&Math.ceil(j.items/2)||j.items),h=((j.center&&o*-1)||0),g=(m.property&&m.property.value!==e?m.property.value:this._core.current())+h,l=this._core.clones().length,k=d.proxy(function(p,n){this.load(n);
},this);if(j.lazyLoadEager>0){o+=j.lazyLoadEager;if(j.loop){g-=j.lazyLoadEager;o++;}}while(h++<o){this.load(l/2+this._core.relative(g));l&&d.each(this._core.clones(this._core.relative(g)),k);
g++;}}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this._core.$element.on(this._handlers);};b.Defaults={lazyLoad:false,lazyLoadEager:0};
b.prototype.load=function(f){var g=this._core.$stage.children().eq(f),h=g&&g.find(".owl-lazy");if(!h||d.inArray(g.get(0),this._loaded)>-1){return;}h.each(d.proxy(function(k,l){var i=d(l),m,j=(c.devicePixelRatio>1&&i.attr("data-src-retina"))||i.attr("data-src")||i.attr("data-srcset");
this._core.trigger("load",{element:i,url:j},"lazy");if(i.is("img")){i.one("load.owl.lazy",d.proxy(function(){i.css("opacity",1);this._core.trigger("loaded",{element:i,url:j},"lazy");
},this)).attr("src",j);}else{if(i.is("source")){i.one("load.owl.lazy",d.proxy(function(){this._core.trigger("loaded",{element:i,url:j},"lazy");},this)).attr("srcset",j);
}else{m=new Image();m.onload=d.proxy(function(){i.css({"background-image":'url("'+j+'")',opacity:"1"});this._core.trigger("loaded",{element:i,url:j},"lazy");
},this);m.src=j;}}},this));this._loaded.push(g.get(0));};b.prototype.destroy=function(){var f,g;for(f in this.handlers){this._core.$element.off(f,this.handlers[f]);
}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);}};d.fn.owlCarousel.Constructor.Plugins.Lazy=b;})(window.Zepto||window.jQuery,window,document);
(function(c,b,a,d){var e=function(g){this._core=g;this._previousHeight=null;this._handlers={"initialized.owl.carousel refreshed.owl.carousel":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight){this.update();
}},this),"changed.owl.carousel":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight&&h.property.name==="position"){this.update();}},this),"loaded.owl.lazy":c.proxy(function(h){if(h.namespace&&this._core.settings.autoHeight&&h.element.closest("."+this._core.settings.itemClass).index()===this._core.current()){this.update();
}},this)};this._core.options=c.extend({},e.Defaults,this._core.options);this._core.$element.on(this._handlers);this._intervalId=null;var f=this;c(b).on("load",function(){if(f._core.settings.autoHeight){f.update();
}});c(b).resize(function(){if(f._core.settings.autoHeight){if(f._intervalId!=null){clearTimeout(f._intervalId);}f._intervalId=setTimeout(function(){f.update();
},250);}});};e.Defaults={autoHeight:false,autoHeightClass:"owl-height"};e.prototype.update=function(){var k=this._core._current,f=k+this._core.settings.items,g=this._core.settings.lazyLoad,j=this._core.$stage.children().toArray().slice(k,f),h=[],i=0;
c.each(j,function(l,m){h.push(c(m).height());});i=Math.max.apply(null,h);if(i<=1&&g&&this._previousHeight){i=this._previousHeight;}this._previousHeight=i;
this._core.$stage.parent().height(i).addClass(this._core.settings.autoHeightClass);};e.prototype.destroy=function(){var f,g;for(f in this._handlers){this._core.$element.off(f,this._handlers[f]);
}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!=="function"&&(this[g]=null);}};c.fn.owlCarousel.Constructor.Plugins.AutoHeight=e;})(window.Zepto||window.jQuery,window,document);
(function(d,c,a,e){var b=function(f){this._core=f;this._videos={};this._playing=null;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace){this._core.register({type:"state",name:"playing",tags:["interacting"]});
}},this),"resize.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.video&&this.isInFullScreen()){g.preventDefault();}},this),"refreshed.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.is("resizing")){this._core.$stage.find(".cloned .owl-video-frame").remove();
}},this),"changed.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name==="position"&&this._playing){this.stop();}},this),"prepared.owl.carousel":d.proxy(function(h){if(!h.namespace){return;
}var g=d(h.content).find(".owl-video");if(g.length){g.css("display","none");this.fetch(g,d(h.content));}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);
this._core.$element.on(this._handlers);this._core.$element.on("click.owl.video",".owl-video-play-icon",d.proxy(function(g){this.play(g);},this));};b.Defaults={video:false,videoHeight:false,videoWidth:false};
b.prototype.fetch=function(k,j){var i=(function(){if(k.attr("data-vimeo-id")){return"vimeo";}else{if(k.attr("data-vzaar-id")){return"vzaar";}else{return"youtube";
}}})(),l=k.attr("data-vimeo-id")||k.attr("data-youtube-id")||k.attr("data-vzaar-id"),h=k.attr("data-width")||this._core.settings.videoWidth,f=k.attr("data-height")||this._core.settings.videoHeight,g=k.attr("href");
if(g){l=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
if(l[3].indexOf("youtu")>-1){i="youtube";}else{if(l[3].indexOf("vimeo")>-1){i="vimeo";}else{if(l[3].indexOf("vzaar")>-1){i="vzaar";}else{throw new Error("Video URL not supported.");
}}}l=l[6];}else{throw new Error("Missing video URL.");}this._videos[g]={type:i,id:l,width:h,height:f};j.attr("data-video",g);this.thumbnail(k,this._videos[g]);
};b.prototype.thumbnail=function(l,h){var g,n,p,f=h.width&&h.height?"width:"+h.width+"px;height:"+h.height+"px;":"",m=l.find("img"),o="src",k="",i=this._core.settings,j=function(q){n='<div class="owl-video-play-icon"></div>';
if(i.lazyLoad){g=d("<div/>",{"class":"owl-video-tn "+k,srcType:q});}else{g=d("<div/>",{"class":"owl-video-tn",style:"opacity:1;background-image:url("+q+")"});
}l.after(g);l.after(n);};l.wrap(d("<div/>",{"class":"owl-video-wrapper",style:f}));if(this._core.settings.lazyLoad){o="data-src";k="owl-lazy";}if(m.length){j(m.attr(o));
m.remove();return false;}if(h.type==="youtube"){p="//img.youtube.com/vi/"+h.id+"/hqdefault.jpg";j(p);}else{if(h.type==="vimeo"){d.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+h.id+".json",jsonp:"callback",dataType:"jsonp",success:function(q){p=q[0].thumbnail_large;
j(p);}});}else{if(h.type==="vzaar"){d.ajax({type:"GET",url:"//vzaar.com/api/videos/"+h.id+".json",jsonp:"callback",dataType:"jsonp",success:function(q){p=q.framegrab_url;
j(p);}});}}}};b.prototype.stop=function(){this._core.trigger("stop",null,"video");this._playing.find(".owl-video-frame").remove();this._playing.removeClass("owl-video-playing");
this._playing=null;this._core.leave("playing");this._core.trigger("stopped",null,"video");};b.prototype.play=function(l){var m=d(l.target),k=m.closest("."+this._core.settings.itemClass),j=this._videos[k.attr("data-video")],i=j.width||"100%",f=j.height||this._core.$stage.height(),g,h;
if(this._playing){return;}this._core.enter("playing");this._core.trigger("play",null,"video");k=this._core.items(this._core.relative(k.index()));this._core.reset(k.index());
g=d('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');g.attr("height",f);g.attr("width",i);if(j.type==="youtube"){g.attr("src","//www.youtube.com/embed/"+j.id+"?autoplay=1&rel=0&v="+j.id);
}else{if(j.type==="vimeo"){g.attr("src","//player.vimeo.com/video/"+j.id+"?autoplay=1");}else{if(j.type==="vzaar"){g.attr("src","//view.vzaar.com/"+j.id+"/player?autoplay=true");
}}}h=d(g).wrap('<div class="owl-video-frame" />').insertAfter(k.find(".owl-video"));this._playing=k.addClass("owl-video-playing");};b.prototype.isInFullScreen=function(){var f=a.fullscreenElement||a.mozFullScreenElement||a.webkitFullscreenElement;
return f&&d(f).parent().hasClass("owl-video-frame");};b.prototype.destroy=function(){var f,g;this._core.$element.off("click.owl.video");for(f in this._handlers){this._core.$element.off(f,this._handlers[f]);
}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);}};d.fn.owlCarousel.Constructor.Plugins.Video=b;})(window.Zepto||window.jQuery,window,document);
(function(d,c,b,e){var a=function(f){this.core=f;this.core.options=d.extend({},a.Defaults,this.core.options);this.swapping=true;this.previous=e;this.next=e;
this.handlers={"change.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name=="position"){this.previous=this.core.current();this.next=g.property.value;
}},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":d.proxy(function(g){if(g.namespace){this.swapping=g.type=="translated";}},this),"translate.owl.carousel":d.proxy(function(g){if(g.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap();
}},this)};this.core.$element.on(this.handlers);};a.Defaults={animateOut:false,animateIn:false};a.prototype.swap=function(){if(this.core.settings.items!==1){return;
}if(!d.support.animation||!d.support.transition){return;}this.core.speed(0);var k,f=d.proxy(this.clear,this),j=this.core.$stage.children().eq(this.previous),i=this.core.$stage.children().eq(this.next),g=this.core.settings.animateIn,h=this.core.settings.animateOut;
if(this.core.current()===this.previous){return;}if(h){k=this.core.coordinates(this.previous)-this.core.coordinates(this.next);j.one(d.support.animation.end,f).css({left:k+"px"}).addClass("animated owl-animated-out").addClass(h);
}if(g){i.one(d.support.animation.end,f).addClass("animated owl-animated-in").addClass(g);}};a.prototype.clear=function(f){d(f.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
this.core.onTransitionEnd();};a.prototype.destroy=function(){var f,g;for(f in this.handlers){this.core.$element.off(f,this.handlers[f]);}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);
}};d.fn.owlCarousel.Constructor.Plugins.Animate=a;})(window.Zepto||window.jQuery,window,document);(function(c,b,a,e){var d=function(f){this._core=f;this._call=null;
this._time=0;this._timeout=0;this._paused=true;this._handlers={"changed.owl.carousel":c.proxy(function(g){if(g.namespace&&g.property.name==="settings"){if(this._core.settings.autoplay){this.play();
}else{this.stop();}}else{if(g.namespace&&g.property.name==="position"&&this._paused){this._time=0;}}},this),"initialized.owl.carousel":c.proxy(function(g){if(g.namespace&&this._core.settings.autoplay){this.play();
}},this),"play.owl.autoplay":c.proxy(function(i,g,h){if(i.namespace){this.play(g,h);}},this),"stop.owl.autoplay":c.proxy(function(g){if(g.namespace){this.stop();
}},this),"mouseover.owl.autoplay":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.pause();}},this),"mouseleave.owl.autoplay":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.play();
}},this),"touchstart.owl.core":c.proxy(function(){if(this._core.settings.autoplayHoverPause&&this._core.is("rotating")){this.pause();}},this),"touchend.owl.core":c.proxy(function(){if(this._core.settings.autoplayHoverPause){this.play();
}},this)};this._core.$element.on(this._handlers);this._core.options=c.extend({},d.Defaults,this._core.options);};d.Defaults={autoplay:false,autoplayTimeout:5000,autoplayHoverPause:false,autoplaySpeed:false};
d.prototype._next=function(f){this._call=b.setTimeout(c.proxy(this._next,this,f),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read());if(this._core.is("interacting")||a.hidden){return;
}this._core.next(f||this._core.settings.autoplaySpeed);};d.prototype.read=function(){return new Date().getTime()-this._time;};d.prototype.play=function(h,g){var f;
if(!this._core.is("rotating")){this._core.enter("rotating");}h=h||this._core.settings.autoplayTimeout;f=Math.min(this._time%(this._timeout||h),h);if(this._paused){this._time=this.read();
this._paused=false;}else{b.clearTimeout(this._call);}this._time+=this.read()%h-f;this._timeout=h;this._call=b.setTimeout(c.proxy(this._next,this,g),h-f);
};d.prototype.stop=function(){if(this._core.is("rotating")){this._time=0;this._paused=true;b.clearTimeout(this._call);this._core.leave("rotating");}};d.prototype.pause=function(){if(this._core.is("rotating")&&!this._paused){this._time=this.read();
this._paused=true;b.clearTimeout(this._call);}};d.prototype.destroy=function(){var f,g;this.stop();for(f in this._handlers){this._core.$element.off(f,this._handlers[f]);
}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);}};c.fn.owlCarousel.Constructor.Plugins.autoplay=d;})(window.Zepto||window.jQuery,window,document);
(function(d,b,a,e){var c=function(f){this._core=f;this._initialized=false;this._pages=[];this._controls={};this._templates=[];this.$element=this._core.$element;
this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};this._handlers={"prepared.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.push('<div class="'+this._core.settings.dotClass+'">'+d(g.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>");
}},this),"added.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.splice(g.position,0,this._templates.pop());
}},this),"remove.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.dotsData){this._templates.splice(g.position,1);}},this),"changed.owl.carousel":d.proxy(function(g){if(g.namespace&&g.property.name=="position"){this.draw();
}},this),"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&!this._initialized){this._core.trigger("initialize",null,"navigation");this.initialize();
this.update();this.draw();this._initialized=true;this._core.trigger("initialized",null,"navigation");}},this),"refreshed.owl.carousel":d.proxy(function(g){if(g.namespace&&this._initialized){this._core.trigger("refresh",null,"navigation");
this.update();this.draw();this._core.trigger("refreshed",null,"navigation");}},this)};this._core.options=d.extend({},c.Defaults,this._core.options);this.$element.on(this._handlers);
};c.Defaults={nav:false,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:false,navElement:'button type="button" role="presentation"',navContainer:false,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:true,dotsEach:false,dotsData:false,dotsSpeed:false,dotsContainer:false};
c.prototype.initialize=function(){var f,g=this._core.settings;this._controls.$relative=(g.navContainer?d(g.navContainer):d("<div>").addClass(g.navContainerClass).appendTo(this.$element)).addClass("disabled");
this._controls.$previous=d("<"+g.navElement+">").addClass(g.navClass[0]).html(g.navText[0]).prependTo(this._controls.$relative).on("click",d.proxy(function(h){this.prev(g.navSpeed);
},this));this._controls.$next=d("<"+g.navElement+">").addClass(g.navClass[1]).html(g.navText[1]).appendTo(this._controls.$relative).on("click",d.proxy(function(h){this.next(g.navSpeed);
},this));if(!g.dotsData){this._templates=[d('<button role="button">').addClass(g.dotClass).append(d("<span>")).prop("outerHTML")];}this._controls.$absolute=(g.dotsContainer?d(g.dotsContainer):d("<div>").addClass(g.dotsClass).appendTo(this.$element)).addClass("disabled");
this._controls.$absolute.on("click","button",d.proxy(function(i){var h=d(i.target).parent().is(this._controls.$absolute)?d(i.target).index():d(i.target).parent().index();
i.preventDefault();this.to(h,g.dotsSpeed);},this));for(f in this._overrides){this._core[f]=d.proxy(this[f],this);}};c.prototype.destroy=function(){var h,j,i,f,g;
g=this._core.settings;for(h in this._handlers){this.$element.off(h,this._handlers[h]);}for(j in this._controls){if(j==="$relative"&&g.navContainer){this._controls[j].html("");
}else{this._controls[j].remove();}}for(f in this.overides){this._core[f]=this._overrides[f];}for(i in Object.getOwnPropertyNames(this)){typeof this[i]!="function"&&(this[i]=null);
}};c.prototype.update=function(){var m,h,f,g=this._core.clones().length/2,o=g+this._core.items().length,p=this._core.maximum(true),n=this._core.settings,l=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;
if(n.slideBy!=="page"){n.slideBy=Math.min(n.slideBy,n.items);}if(n.dots||n.slideBy=="page"){this._pages=[];for(m=g,h=0,f=0;m<o;m++){if(h>=l||h===0){this._pages.push({start:Math.min(p,m-g),end:m-g+l-1});
if(Math.min(p,m-g)===p){break;}h=0,++f;}h+=this._core.mergers(this._core.relative(m));}}};c.prototype.draw=function(){var j,i=this._core.settings,h=this._core.items().length<=i.items,g=this._core.relative(this._core.current()),f=i.loop||i.rewind;
this._controls.$relative.toggleClass("disabled",!i.nav||h);if(i.nav){this._controls.$previous.toggleClass("disabled",!f&&g<=this._core.minimum(true));this._controls.$next.toggleClass("disabled",!f&&g>=this._core.maximum(true));
}this._controls.$absolute.toggleClass("disabled",!i.dots||h);if(i.dots){j=this._pages.length-this._controls.$absolute.children().length;if(i.dotsData&&j!==0){this._controls.$absolute.html(this._templates.join(""));
}else{if(j>0){this._controls.$absolute.append(new Array(j+1).join(this._templates[0]));}else{if(j<0){this._controls.$absolute.children().slice(j).remove();
}}}this._controls.$absolute.find(".active").removeClass("active");this._controls.$absolute.children().eq(d.inArray(this.current(),this._pages)).addClass("active");
}};c.prototype.onTrigger=function(g){var f=this._core.settings;g.page={index:d.inArray(this.current(),this._pages),count:this._pages.length,size:f&&(f.center||f.autoWidth||f.dotsData?1:f.dotsEach||f.items)};
};c.prototype.current=function(){var f=this._core.relative(this._core.current());return d.grep(this._pages,d.proxy(function(h,g){return h.start<=f&&h.end>=f;
},this)).pop();};c.prototype.getPosition=function(g){var f,i,h=this._core.settings;if(h.slideBy=="page"){f=d.inArray(this.current(),this._pages);i=this._pages.length;
g?++f:--f;f=this._pages[((f%i)+i)%i].start;}else{f=this._core.relative(this._core.current());i=this._core.items().length;g?f+=h.slideBy:f-=h.slideBy;}return f;
};c.prototype.next=function(f){d.proxy(this._overrides.to,this._core)(this.getPosition(true),f);};c.prototype.prev=function(f){d.proxy(this._overrides.to,this._core)(this.getPosition(false),f);
};c.prototype.to=function(f,i,g){var h;if(!g&&this._pages.length){h=this._pages.length;d.proxy(this._overrides.to,this._core)(this._pages[((f%h)+h)%h].start,i);
}else{d.proxy(this._overrides.to,this._core)(f,i);}};d.fn.owlCarousel.Constructor.Plugins.Navigation=c;})(window.Zepto||window.jQuery,window,document);
(function(d,c,a,e){var b=function(f){this._core=f;this._hashes={};this.$element=this._core.$element;this._handlers={"initialized.owl.carousel":d.proxy(function(g){if(g.namespace&&this._core.settings.startPosition==="URLHash"){d(c).trigger("hashchange.owl.navigation");
}},this),"prepared.owl.carousel":d.proxy(function(h){if(h.namespace){var g=d(h.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!g){return;
}this._hashes[g]=h.content;}},this),"changed.owl.carousel":d.proxy(function(i){if(i.namespace&&i.property.name==="position"){var h=this._core.items(this._core.relative(this._core.current())),g=d.map(this._hashes,function(j,k){return j===h?k:null;
}).join();if(!g||c.location.hash.slice(1)===g){return;}c.location.hash=g;}},this)};this._core.options=d.extend({},b.Defaults,this._core.options);this.$element.on(this._handlers);
d(c).on("hashchange.owl.navigation",d.proxy(function(j){var i=c.location.hash.substring(1),h=this._core.$stage.children(),g=this._hashes[i]&&h.index(this._hashes[i]);
if(g===e||g===this._core.current()){return;}this._core.to(this._core.relative(g),false,true);},this));};b.Defaults={URLhashListener:false};b.prototype.destroy=function(){var f,g;
d(c).off("hashchange.owl.navigation");for(f in this._handlers){this._core.$element.off(f,this._handlers[f]);}for(g in Object.getOwnPropertyNames(this)){typeof this[g]!="function"&&(this[g]=null);
}};d.fn.owlCarousel.Constructor.Plugins.Hash=b;})(window.Zepto||window.jQuery,window,document);(function(e,g,i,d){var b=e("<support>").get(0).style,f="Webkit Moz O ms".split(" "),j={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c={csstransforms:function(){return !!h("transform");
},csstransforms3d:function(){return !!h("perspective");},csstransitions:function(){return !!h("transition");},cssanimations:function(){return !!h("animation");
}};function h(n,l){var k=false,m=n.charAt(0).toUpperCase()+n.slice(1);e.each((n+" "+f.join(m+" ")+m).split(" "),function(o,p){if(b[p]!==d){k=l?p:true;return false;
}});return k;}function a(k){return h(k,true);}if(c.csstransitions()){e.support.transition=new String(a("transition"));e.support.transition.end=j.transition.end[e.support.transition];
}if(c.cssanimations()){e.support.animation=new String(a("animation"));e.support.animation.end=j.animation.end[e.support.animation];}if(c.csstransforms()){e.support.transform=new String(a("transform"));
e.support.transform3d=c.csstransforms3d();}})(window.Zepto||window.jQuery,window,document);
/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
/**
 * Thumbs Plugin
 * @version 2.0.0
 * @author Gijs RogÃ©
 * @license The MIT License (MIT)
 */
(function ($, window, document, undefined) {
    'use strict';

    /**
     * Creates the thumbs plugin.
     * @class The thumbs Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Thumbs = function (carousel) {


        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this.owl = carousel;


        /**
         * All DOM elements for thumbnails
         * @protected
         * @type {Object}
         */
        this._thumbcontent = [];


        /**
         * Instance identiefier
         * @type {number}
         * @private
         */
        this._identifier = 0;


        /**
         * Return current item regardless of clones
         * @protected
         * @type {Object}
         */
        this.owl_currentitem = this.owl.options.startPosition;


        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this.owl.$element;


        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.owl.options.thumbs && !this.owl.options.thumbImage && !this.owl.options.thumbsPrerendered && !this.owl.options.thumbImage) {
                    if ($(e.content).find('[data-thumb]').attr('data-thumb') !== undefined) {
                        this._thumbcontent.push($(e.content).find('[data-thumb]').attr('data-thumb'));
                    }
                } else if (e.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                    var innerImage = $(e.content).find('img');
                    this._thumbcontent.push(innerImage);
                }
            }, this),

            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.owl.options.thumbs) {
                    this.render();
                    this.listen();
                    this._identifier = this.owl.$element.data('slider-id');
                    this.setActive();
                }
            }, this),

            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position' && this.owl.options.thumbs) {
                    this._identifier = this.owl.$element.data('slider-id');
                    this.setActive();
                }
            }, this)
        };

        // set default options
        this.owl.options = $.extend({}, Thumbs.Defaults, this.owl.options);

        // register the event handlers
        this.owl.$element.on(this._handlers);
    };


    /**
     * Default options.
     * @public
     */
    Thumbs.Defaults = {
        thumbs: true,
        thumbImage: false,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        moveThumbsInside: false
    };


    /**
     * Listen for thumbnail click
     * @protected
     */
    Thumbs.prototype.listen = function () {

        //set default options
        var options = this.owl.options;

        if (options.thumbsPrerendered) {
            this._thumbcontent._thumbcontainer = $('.' + options.thumbContainerClass);
        }
        //let sctoll_to = $('.today_inner__slider')
        //check what thumbitem has been clicked and move slider to that item
        $(this._thumbcontent._thumbcontainer).on('click', this._thumbcontent._thumbcontainer.children(), $.proxy(function (e) {

            // find relative slider
            this._identifier = $(e.target).closest('.' + options.thumbContainerClass).data('slider-id');

            // get index of clicked thumbnail
            var index = $(e.target).parent().is(this._thumbcontent._thumbcontainer) ? $(e.target).index() : $(e.target).closest('.'+options.thumbItemClass).index();

            if (options.thumbsPrerendered) {
                // slide to slide :)
                $('[data-slider-id=' + this._identifier + ']').trigger('to.owl.carousel', [index, options.dotsSpeed, true]);
            } else {
                this.owl.to(index, options.dotsSpeed);
            }
            //$('html, body').animate({
            //    scrollTop: sctoll_to.offset().top - 20
            //}, 1000);
            //e.preventDefault();
        }, this));
    };


    /**
     * Builds thumbnails
     * @protected
     */
    Thumbs.prototype.render = function () {

        //set default options
        var options = this.owl.options;

        //create thumbcontainer
        if (!options.thumbsPrerendered) {
            this._thumbcontent._thumbcontainer = $('<div>').addClass(options.thumbContainerClass).appendTo(this.$element);
        } else {
            this._thumbcontent._thumbcontainer = $('.' + options.thumbContainerClass + '');
            if(options.moveThumbsInside){
                this._thumbcontent._thumbcontainer.appendTo(this.$element);
            }
        }

        //create thumb items
        var i;
        if (!options.thumbImage) {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append('<button class=' + options.thumbItemClass + '>' + this._thumbcontent[i] + '</button>');
            }
        } else {
            for (i = 0; i < this._thumbcontent.length; ++i) {
                this._thumbcontent._thumbcontainer.append('<button class=' + options.thumbItemClass + '><img src="' + this._thumbcontent[i].attr('src') + '" alt="' + this._thumbcontent[i].attr('alt') + '" /></button>');
            }
        }
    };


    /**
     * Updates active class on thumbnails
     * @protected
     */
    Thumbs.prototype.setActive = function () {
        let list = $('.owl-thumbs-2')
        // get startslide
        this.owl_currentitem = this.owl._current - (this.owl._clones.length / 2);
        if (this.owl_currentitem === this.owl._items.length) {
            this.owl_currentitem = 0;
        }

        //set default options
        var options = this.owl.options;

        // set relative thumbnail container
        var thumbContainer = options.thumbsPrerendered ? $('.' + options.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
        thumbContainer.children().filter('.active').removeClass('active');
        list.children().filter('.active').removeClass('active');
        thumbContainer.children().eq(this.owl_currentitem).addClass('active');
        list.children().eq(this.owl_currentitem).addClass('active');

        // if (list.children().eq(this.owl_currentitem).length) list.children().eq(this.owl_currentitem)[0].scrollIntoView("start", "center");
        // if (thumbContainer.children().eq(this.owl_currentitem).length) thumbContainer.children().eq(this.owl_currentitem)[0].scrollIntoView("start", "center");

        let topListScroll = list && list[0] ? list[0].scrollWidth : false;
        let bottomListScroll = thumbContainer && thumbContainer[0] ? thumbContainer[0].scrollWidth : false;

        if(window.innerWidth < topListScroll) {
            list.children().eq(this.owl_currentitem)[0].scrollIntoView("start", "center");
        }
        if(window.innerWidth < bottomListScroll) {
            thumbContainer.children().eq(this.owl_currentitem)[0].scrollIntoView("start", "center");
        }       

    };


    /**
     * Destroys the plugin.
     * @public
     */
    Thumbs.prototype.destroy = function () {
        var handler, property;
        for (handler in this._handlers) {
            this.owl.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Thumbs = Thumbs;

})(window.Zepto || window.jQuery, window, document);
;
var ls = ls || {};
ls.plugin = ls.plugin || {};

ls.plugin.autoopenid =( function ($) {

	var that=this;

	this.goServiceLogin = function(service)
	{
		var sBackUrl = window.location.href;

		$.each(document.cookie.split(';'), function(i, el)
		{
			var aCookie = $.trim(el).split('=');
			if (aCookie[0] == 'openidreferal')
			{
				sBackUrl = decodeURIComponent(aCookie[1]);
				return false;
			}
		});

		var data = { service: service, referal: sBackUrl};
		if (window.LIVESTREET_SECURITY_KEY) data['security_ls_key'] = LIVESTREET_SECURITY_KEY;

		$.ajax({

			url: DIR_WEB_ROOT + '/login/autoopenid/login-oauth' + '?JsHttpRequest=' + (new Date()).getTime() + '-xml',
			type: 'POST',
			data: data

		}).then(function(result)
		{
			try
			{
				result = JSON.parse(result);
				if (!result.js.bStateError)
				{
					window.location.href=result.js.sUrl;

				} else
				{
					msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
				}

			} catch (e) {

				msgErrorBox.alert(null, 'Вход через '+service+' временно не работает.');
			}
		});
	};

	this.removeService = function(type,id)
	{
		var data = { type: type, id: id };
		if (window.LIVESTREET_SECURITY_KEY) data['security_ls_key'] = LIVESTREET_SECURITY_KEY;

 		
		$.ajax({

			url: DIR_WEB_ROOT + '/login/autoopenid/service-remove' + '?JsHttpRequest=' + (new Date()).getTime() + '-xml',
			type: 'POST',
			data: data

		}).then(function(result)
		{
			try
			{
				result = JSON.parse(result);
				if (!result.js.bStateError)
				{
					$('#autoopenid-service-connect-item-'+res.id).remove();

				} else
				{
					msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
				}

			} catch (e) {

				msgErrorBox.alert(null, 'Вход через '+service+' временно не работает.');
			}
		});
	};

	this.showFormData = function() {
		$('#aoid-form-mail').hide();
		$('#aoid-form-data').show();
		$('#aoid-toggle-data').addClass('active');
		$('#aoid-toggle-mail').removeClass('active');
	};

	this.showFormMail = function() {
		$('#aoid-form-mail').show();
		$('#aoid-form-data').hide();
		$('#aoid-toggle-data').removeClass('active');
		$('#aoid-toggle-mail').addClass('active');
	};

	this.toggleFieldMail = function() {
		$('#aoid-field-mail').toggle();
	};

	$(function()
	{
		$(document).on('click', '.js-autoopenid-auth', function (e)
		{
			that.goServiceLogin($(this).data('service'));
			return false;
		});
		$(document).on('click', '.js-autoopenid-remove', function (e)
		{
			that.removeService($(this).data('serviceType'),$(this).attr('data-service-id'));
			return false;
		});
	}.bind(this));

	return this;

}).call(ls.plugin.autoopenid || {},jQuery);
jQuery.cachedScript = function( url, options )
{
	// Allow user to set any option except for dataType, cache, and url
	options = $.extend( options || {},
	{
		dataType: "script",
		cache: true,
		url: url
	});
	// Use $.ajax() since it is more flexible than $.getScript
	// Return the jqXHR object so we can chain callbacks
	return jQuery.ajax( options );
};


function insertTextAtCursor(el, text, offset) {
	var val = el.value, endIndex, range, doc = el.ownerDocument;
	if ((typeof el.selectionStart == 'number') && (typeof el.selectionEnd == 'number'))
	{
		endIndex = el.selectionEnd;
		el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
		el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
	} else if (doc.selection != undefined && doc.selection.createRange)
	{
		el.focus();
		range = doc.selection.createRange();
		range.collapse(false);
		range.text = text;
		range.select();
	}
}

function initImageLoader(textArea, inutFile)
{
	var isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i)?true:false;
	var isIE10 = document.all;
	
	var aScripts = []; //['exif.js'];
	if (isIE10) aScripts.unshift('lie.polyfill.min.js');
	aScripts.push(isIOS ? 'megapix-image.js' : 'pica.min.js');

	var promise = $.when();
	$.each(aScripts, function(i,v)
	{
		promise = promise.then(function()
		{
			return $.cachedScript('/plugins/mobile/templates/skin/default/actions/ActionMobile/js/' + v);
		});
	});

	promise.then(function()
	{
		jQuery.resize2Blob = function(file, callback, maxWidth)
		{
			if (typeof(maxWidth) === 'undefined') maxWidth = 1024;

			var img = new Image();
			img.onload = function()
			{
				var w = img.width;
				var h = img.height;
				if (w > h)
				{
					if (w > maxWidth)
					{
						h *= maxWidth / w;
						w = maxWidth;
					}

				} else
				{
					if (h > maxWidth)
					{
						w *= maxWidth / h;
						h = maxWidth;
					}
				}

				w = Math.round(w);
				h = Math.round(h);

				var canvas = document.createElement('canvas');
				canvas.width = w;
				canvas.height = h;

				function onRender()
				{
					URL.revokeObjectURL(img.src);
					img.src = 'about:blank';
					img = null;
					canvas.toBlob(callback, file.type, 0.67);
					canvas.width = 1;
					canvas.height = 1;
					canvas = null;
				}

				if (isIOS)
				{
					var mpx = new MegaPixImage(img);
					mpx.render(canvas, { width: w, height: h, quality: 0.67 }, onRender);

				} else
				{
					var resizer = window.pica({ features: ['js', 'wasm', 'ww'] }); // 'cib',
					resizer.resize(img, canvas,
					{
						quality: 3,
						alpha: true,
						unsharpAmount: 80,
						unsharpRadius: 0.6,
						unsharpThreshold: 2,
						transferable: true

					}).then(onRender);
				}
			};
			img.src = URL.createObjectURL(file);
		};
		


		inutFile.on('change', function()
		{
			var files = $(this)[0].files;
			if (!files.length) return;
			var promise = $.when();

			$.each(files, function(i,file)
			{
				promise = promise.then(function()
				{
					$.resize2Blob(file, function(blob)
					{
						var data = new FormData();
						data.append('img_file', blob);
						data.append('type_add', 'preview');
						data.append('preview_size', 'large');
						data.append('security_ls_key', LIVESTREET_SECURITY_KEY);
						
						$.ajax({
							url: '/include/ajax/uploadImg.php?JsHttpRequest=' + (new Date()).getTime() + '-form',
							data: data,
							cache: false,
							contentType: false,
							processData: false,
							type: 'POST'
						}).then(function(result)
						{
							try
							{
								result = result.match(/top\.JsHttpRequestGlobal\.dataReady\((.+)\)/); // ебаное гавно с JsHttpRequest
								if (result != null) result = JSON.parse(result[1]);

							} catch (e) { result = null; }

							if (result == null)
							{
								msgErrorBox.alert('Ошибка', 'Серверу сплохело на загрузке фотографии.');
								return;
							}

							if (result.js.bStateError)
							{
								msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
							} else
							{
								if (textArea.length)
								{
									insertTextAtCursor(textArea.get(0), '<br />' + result.js.sText);
									textArea.focus();
								}
							}
						});
					});
				});
			});
			$(this).val('');
		});
	});
}

function adr_quotes($)
{
	var symbols = [];
	function success(data)
	{
		var tr = $('.trades-table tr[tkr="' + data.pro_name.replace(':','.') + '"]');
		if (tr.length)
		{
			var chg = (Math.round(parseFloat(data.change_percent) * 10) / 10);
			var val = (Math.round(parseFloat(data.last_price) * 100) / 100);
			var vol = (Math.round(parseFloat(data.volume) * 100) / 100);

			$($('td', tr)[4]).text(val.toString().replace('.', ','));
			$($('td', tr)[5]).text(((chg > 0) ? '+' : '') + chg.toString().replace('.', ',') + '%');
			if (chg < 0)
			{
				$($('td', tr)[5]).removeClass('up').addClass('down');

			} else
			{
				if (chg > 0)
				{
					$($('td', tr)[5]).removeClass('down').addClass('up');
				} else
				{
					$($('td', tr)[5]).removeClass('down').removeClass('up');
				}
			}
			$($('td', tr)[6]).text(vol.toString().replace('.', ','));				
		}
	}

	$('.trades-table tr').each(function(i, el)
	{
		if ($(el).attr('tkr'))
		{
			symbols.push({'symbol' : $(el).attr('tkr').replace('.',':'), success: success, error : function(){}});
		}
	});

	if (symbols.length)
	{
		new TradingView.QuotesProvider({container_id: 'hif', symbols:symbols});
	}
}

function wrld_quotes($)
{
	var symbols = [];
	function success(data)
	{
		var tr = $('#mobile_wrld tr[tkr="' + data.original_name.replace(':', '.') + '"]');
		if (tr.length)
		{
			var chg = (Math.round(parseFloat(data.change_percent) * 10) / 10);
			var val = data.last_price.toString().replace('.', ',');

			switch (data.original_name)
			{
				case 'TVC:DXY':
				case 'FX_IDC:USDRUB':
				case 'FX:EURUSD':
				case 'FX_IDC:GBPUSD':
				case 'FX_IDC:USDJPY':
				case 'FX_IDC:USDCAD':
				case 'FX_IDC:AUDUSD':
				case 'FX_IDC:EURCHF':
				case 'FX_IDC:USDTRY':
				case 'BITSTAMP:BTCUSD':
				{
					val = val.substr(0, val.indexOf(',') + 5);
					break;
				}

				case 'FX_IDC:USDBRO':
				case 'FX_IDC:XAUUSD':
				case 'OANDA:XPTUSD':
				case 'OANDA:DE30EUR':
				{
					val = val.substr(0, val.indexOf(',') + 3);
					break;
				}

				case 'FX_IDC:XAGUSD':
				{
					val = val.substr(0, val.indexOf(',') + 4);
					break;
				}

				case 'OANDA:XCUUSD':
				{
					val = val.substr(0, val.indexOf(',') + 6);
					break;
				}
			}

			tr.each(function()
			{
				$($('td', $(this))[2]).text(val);
				$($('td', $(this))[3]).text(((chg > 0) ? '+' : '') + chg.toString().replace('.', ',') + '%');
				if (chg < 0)
				{
					$($('td', $(this))[3]).addClass('down');

				} else
				{
					$($('td', $(this))[3]).removeClass('down');
				}
			});
		}
	}

	$('#mobile_wrld tr').each(function(i, el)
	{
		if ($(el).attr('tkr'))
		{
			symbols.push({'symbol' : $(el).attr('tkr').replace('.', ':'), success: success, error : function(){}});
		}
	});

	$('#mobile_wrld').on('click', function(e)
	{
		if (e.target.nodeName == "TD")
		{
			var sTicker = $(e.target).parents('tr').attr('tkr');
			if (sTicker)
			{
				document.location.href = "/gr/" + encodeURIComponent(sTicker);
			}
		}
	});

	if (symbols.length)
	{
		new TradingView.QuotesProvider({container_id: 'hif', symbols:symbols});
	};
}

function top_quotes($)
{
	var tq = $('#top-quotes');
	function success(data)
	{
		var tds = tq.find('td[ticker="' + data.original_name.replace(':', '.') + '"]');
		if (tds.length)
		{
			var chg = (Math.round(parseFloat(data.change_percent) * 10) / 10);
			var chgt = ((chg > 0) ? '+' : '') + chg.toString().replace('.', ',');
			chgt = chgt.substr(0, chgt.indexOf(',') + 2) + '%';

			var val = data.last_price;
			var valt = val.toString().replace('.', ',');
			if (valt.indexOf(',') != - 1) valt = valt.substr(0, valt.indexOf(',') + 2);

			if (('CME_MINI_DL:ES1!' == data.original_name) && (valt.indexOf(',') != -1)) valt = valt.substr(0, valt.indexOf(','));

			var chgd = $(tds.get(1));
			if (chg < 0)
			{
				chgd.text(chgt).removeClass('q-green').addClass('q-red');
				$(tds.get(0)).text(valt).removeClass('q-green').addClass('q-red');

			} else
			{
				chgd.text(chgt).addClass('q-green').removeClass('q-red');
				$(tds.get(0)).text(valt).addClass('q-green').removeClass('q-red');
			}
		}
	}

	new TradingView.QuotesProvider({container_id: 'hif', symbols:
	[
		{symbol: 'FX_IDC:USDBRO', success: success, error: function(){}},
		{symbol: 'FX_IDC:USDRUB', success: success, error: function(){}},
		{symbol: 'CME_MINI_DL:ES1!', success: success, error: function(){}}
	]});

}


jQuery(document).ready(function($)
{
	var isAndroid = /(android)/i.test(navigator.userAgent);
	if (isAndroid) $('body').addClass('android');

	if ($('#mobile_statistics').length) $.cachedScript('/plugins/mobile/templates/skin/default/actions/ActionMobile/js/stat.js');
	
	$.cachedScript('https://dwq4do82y8xi7.cloudfront.net/static/js/tv.js').done(function()
	{
		if ($('#mobile_adr tr').length) adr_quotes($);
		if ($('#mobile_wrld tr').length) wrld_quotes($);
		if ($('#top-quotes').length) top_quotes($)
	});

	if ($('#trading_view_container').length && $('#trading_view_container').attr('ticker'))
	{
		$.cachedScript('https://d33t3vvu2t2yu5.cloudfront.net/tv.js').done(function()
		{
			new TradingView.widget({
				'customer': 'smartlab',
				'autosize': true,
				'symbol': $('#trading_view_container').attr('ticker'),
				'interval': $('#trading_view_container').attr('interval'),
				'timezone': 'Etc/UTC',
				'theme': 'White',
				'style': '1',
				'locale': 'ru',
				'toolbar_bg': '#f1f3f6',
				'enable_publishing': false,
				'save_image': false,
				'hideideas': true,
				'referral_id': '1339',
				'container_id' : 'trading_view_container'
			});
		});
	}
	
	if ('topicView' in window)
	{
		new Image().src = '/cgi-bin/scn.fcgi?list=' + window.topicView.post + '&r='+Math.random();

		var vf = 'func' + Math.floor(Math.random() * 10000);
		window[vf] = function(tid, count)
		{
			var vt = $('.post_show .meta');
			if (vt.length)
			{
				if (typeof(count) == 'string') count = parseInt(count);
				if (typeof(count) != 'number') return;

				var cv = count;
				if (cv > 1000)
				{
					cv /= 100;
					cv = (Math.floor(cv) / 10) + 'К';
				};

				vt.append($('<span class="views-span" title="Просмотрели ' + count + '">' + cv + '</span>'));
			}
		};

		$.getScript('/cgi-bin/gcn.fcgi?list=' + window.topicView.post + '&func=' + vf).done(function()
		{
			delete window[vf];
		});
	}

	if ($('.awards').length) $('.awards').owlCarousel({ nav:true });

	$(document).on('click', '.accordion .trigger_btn', function(e)
	{
		e.preventDefault();

		var bOpened = ($(this).parent('.accordion').hasClass('opened'));
		$('.accordion').removeClass('opened');

		if (!bOpened)
		{
			if ($(this).attr('type'))
			{
				var btn = $(this);
				$.get('/profile/ajax' + btn.attr('type') + 'list/', {'JsHttpRequest' : (new Date()).getTime(), 'login': btn.attr('user')}, function(result, errors)
				{
					var res = result.match(/^JsHttpRequest\.dataReady\((.+)\)/);
					if (res != null) res = JSON.parse(res[1]);

					if (!res.js)
					{
						msgErrorBox.alert('Error','Please try again later');
					}
					if (res.js.bStateError)
					{
						msgErrorBox.alert(res.js.sMsgTitle,res.js.sMsg);
					} else
					{
						var c = btn.parent('.accordion').find('.content-inner');
						c.empty();
						$.each(res.js.aUsersList, function(i,a)
						{
							$('<a></a>').attr('href', '/profile/' + a.user_login + '/').text(a.user_profile_name).appendTo(c);
						});
						
						btn.parent('.accordion').addClass('opened');
						btn.removeAttr('type user');
					}
				});

			} else
			{
				$(this).parent('.accordion').addClass('opened');
			}
		}
		return false;
	});


	$('.quotation__slider').owlCarousel({
		items: 1,
		dots: true,
		nav: false,
		autoHeight: true,
		thumbs: true,
		thumbsPrerendered: true
	});


	$('.scrollable').on('scroll', function()
	{
		var block = $(this);
		var blockWithShadow = block.parents('.needShadow');
		var result = block.get(0).scrollLeft + block.get(0).clientWidth;

		if(result >= block.get(0).scrollWidth - 10)
		{
			blockWithShadow.addClass('left_shadow').removeClass('right_shadow');
		} else
		{
			blockWithShadow.removeClass('left_shadow').addClass('right_shadow');
		}
	});

	$('.extrasFilters').on('click', 'span', function()
	{
		$(this).toggleClass('selected');
		var h = document.location.href;
		var e = encodeURIComponent('extra[]') + '=' + encodeURIComponent($(this).attr('extra_id'));
		if ($(this).hasClass('selected'))
		{
			if (h.indexOf(e) == -1)
			{
				h += (h.indexOf('?') != -1) ? '&' : '?';
				h += e;
			}

		} else
		{
			h = h.replace('&' + e, '').replace('?' + e + '&', '?').replace('?' + e, '');
		}

		location.replace(h);
	});


	if ($('#search').length)
	{
		$('#search').autocomplete({
			containerClass: 'autocomplete-suggestions more_companies',
			//orientation: 'top',
			width: 'calc(100% - 35px)',
			serviceUrl: '/q/ajax-stocks-search/',
			type: 'POST',
			dataType: 'json',
			paramName: 'value',
			params: {'json': 1, 'urls': 1},
			preventBadQueries: false,
			transformResult: function(response)
			{
				return { suggestions: response['results'] };
			},
			onSelect: function (suggestion)
			{
				document.location.href = suggestion.data;
			}
		});
	}



	// $(document).on('copy', function(e)
	// {
	// 	var selection;
	// 	window.getSelection ? selection = window.getSelection() : document.getSelection ? selection = document.getSelection() : document.selection && (selection = document.selection.createRange());

	// 	var hiddenDiv = $('<div></div>').css({position:'absolute', 'left': '-99999px'}).html(selection.toString().replace(/(?:\r\n|\r|\n)/g, '<br />') + '<br /><br />источник: <a href="' + document.location.href + '">' + document.location.href + '</a>');
	// 	$('body').append(hiddenDiv);

	// 	selection.selectAllChildren(hiddenDiv[0]);
		
	// 	setTimeout(function()
	// 	{
	// 	 	hiddenDiv.remove(hiddenDiv);

	// 	}, 0);
	// });


	$('#content .text > blockquote').each(function()
	{
		$(this).has('blockquote').addClass('bq_many');
		$(this).has('blockquote').children('blockquote').hide();
	});

	$('#content .text blockquote.bq_many').click(function()
	{
		$(this).children('blockquote').toggle();
		$(this).children('blockquote').toggleClass('bq_many_collapsed');
	});

	$(document).on('click', '.button-dropdown .dropdown-toggle', function(e)
	{
		if ($(this).hasClass('dropdown-toggle'))
		{
			$(this).toggleClass('active');
			if ($(this).hasClass('active'))
			{
				$(this).next('.dropdown-menu').show();
			} else
			{
				$(this).next('.dropdown-menu').hide();
			}
		}
	});

	var datepickerChange = function(e)
	{
		var sCurrentPath = '';
		var aPathParts = document.location.pathname.replace(/\/+/g, '/').replace(/^\//, '').replace(/\/$/, '').split('/');

		if (!((aPathParts.length > 1) && (aPathParts[1] == 'calendar'))) return;
		if (aPathParts.length == 2) aPathParts.push('index');

		for (var i = 0, j = aPathParts.length; i<j; i++)
		{
			if (aPathParts[i].match(/^(from_|page)/) && ($(e.target).is('#date_from'))) break;
			if (aPathParts[i].match(/^(to_|page)/) && ($(e.target).is('#date_to'))) break;
			sCurrentPath+= '/' + aPathParts[i];
		}

		if (('date' in e) && (e.format(0, 'yyyy-mm-dd')))
		{
			sCurrentPath += $('#date_from').val() ? '/from_' + $('#date_from').datepicker('getFormattedDate', 'dd.mm.yyyy') : '';
			sCurrentPath += $('#date_to').val() ? '/to_' + $('#date_to').datepicker('getFormattedDate', 'dd.mm.yyyy') : '';
		}
		document.location.href = document.location.origin + sCurrentPath;
	};

	$('#date_from').datepicker({

		'toDisplay': 'dd.mm.yy',
		'toValue' : 'yyyy-mm-dd'

	}).on('hide', function(e)
	{
		e.preventDefault();
	}).on('changeDate', datepickerChange);

	$('#date_to').datepicker({

		'toDisplay': 'dd.mm.yy',
		'toValue' : 'yyyy-mm-dd'

	}).on('hide', function(e)
	{
		e.preventDefault();
	}).on('changeDate', datepickerChange);




	var allVideos = $('.text.text_html iframe, .text.text_html object');
	var fluidEl = $('.text.text_html');
 
	allVideos.each(function()
	{
		$(this).data('aspectRatio', this.height / this.width).removeAttr('height').removeAttr('width');
	});

	$(window).resize(function()
	{
		var newWidth = fluidEl.width();
		allVideos.each(function()
		{
			var el = $(this);
			el.width(newWidth).height(newWidth * el.data('aspectRatio'));  
		});

	}).resize();

	$(document).on('click', '.toggle_sidebar', function()
	{
		$('body').toggleClass('sidebar_open');
		//$('html,body').css('overflow',$('body').hasClass('sidebar_open') ? 'hidden' : 'auto');
		return false
	});

	$(document).on('click touchstart', '#sidebar_overlay', function(e)
	{
		$('body').removeClass('sidebar_open');
		//$('html,body').css('overflow',$('body').hasClass('sidebar_open') ? 'hidden' : 'auto');
	});


	var ctd = new ForumTagsDialog();
	$(document).on('click', '.extratags a', function(e)
	{
		var aLink = $(this);
		e.preventDefault();
		if (aLink.hasClass('more'))
		{
			var et = aLink.parents('.extratags');
			ctd.open(et.data('id'));
		} else
		{
			aLink.toggleClass('enabled');

			var aTopicExtraTags = {};
			var et = aLink.parents('.extratags');
			et.find('.enabled').each(function(i, el)
			{
				aTopicExtraTags[$(el).data('tag')] = 1;
			});

			$.post('/topic/ajax_edit_extratags/' + '?JsHttpRequest=' + (new Date()).getTime(), {topicId: et.data('id'), aTopicExtraTags: aTopicExtraTags, bIgnoreForumTags: true, bIgnoreSmm: true, security_ls_key: LIVESTREET_SECURITY_KEY}).done(function(resp)
			{
				// do nothing loop
			});
		}
		return false;
	});


	$(document).on('click', '.topicconttols a', function(e)
	{
		var aLink = $(this);
		if (aLink.attr('href') != '#') return;

		e.preventDefault();
		var topicId = aLink.parents('.topicconttols').data('id');
		var type = aLink.data('type');
		switch (type)
		{
			case 'X':
			{
				e.preventDefault();
				$.ajax({
					url: '/topic/ajax_topic_ban_dialog/',
					type: 'POST',
					data: {topic_id: topicId, security_ls_key: LIVESTREET_SECURITY_KEY}
				}).then(function(result)
				{
					if (!result.bStateError)
					{
						if ($('#topic_ban_dialog_tpl').length) $('#topic_ban_dialog_tpl').remove();
						$('body').append($(result.sHtml));
						tbd = $('#topic_ban_dialog');

						topicBanDialog(topicId, 'offtopic').then(function(sMsgTitle, sMsg)
						{
							// do nothing loop
							aLink.toggleClass('enabled');
							msgNoticeBox.alert(sMsgTitle, sMsg);

						}, function(sMsgTitle, sMsg)
						{
							msgErrorBox.alert(sMsgTitle, sMsg);
						});

					} else
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);
					}
				});
				break;
			}
			case 'Y':
			{
				var sAction = aLink.hasClass('enabled') ? 'index_default' : 'index_hide';
				$.post('/topic/' + sAction + '/' + topicId + '/' + '?JsHttpRequest=' + (new Date()).getTime(), {ajax:1, security_ls_key: LIVESTREET_SECURITY_KEY}).done(function(resp)
				{
					aLink.toggleClass('enabled');
					if (aLink.hasClass('enabled'))
					{
						aLink.parents('.topicconttols').find('[data-type="Z"]').removeClass('enabled');
					}
				});
				break;
			}
			case 'Z':
			{
				var sAction = aLink.hasClass('enabled') ? 'index_default' : 'index_show';
				$.post('/topic/' + sAction + '/' + topicId + '/' + '?JsHttpRequest=' + (new Date()).getTime(), {ajax:1, security_ls_key: LIVESTREET_SECURITY_KEY}).done(function(resp)
				{
					aLink.toggleClass('enabled');
					if (aLink.hasClass('enabled'))
					{
						aLink.parents('.topicconttols').find('[data-type="Y"]').removeClass('enabled');
					}
				});
				break;
			}

			case 'DEL':
			{
				// (new jBox('Confirm',
				// {
				// 	content: 'Вы действительно хотите удалить топик?',
				// 	confirmButton: 'Удаляем',
				// 	cancelButton: 'Отмена',
				// 	confirm: function()
				// 	{
				// 		var data = {topic_id: topicId, action: 'delete', additional_action: 'nothing', security_ls_key: LIVESTREET_SECURITY_KEY};
				// 		$.post('/topic/admin/' + topicId + '/' + '?JsHttpRequest=' + (new Date()).getTime(), data).done(function(resp)
				// 		{
				// 			history.back();
				// 		});
				// 	},
				// 	cancel: function(){}
				//  })).open();

				e.preventDefault();
				$.ajax({
					url: '/topic/ajax_topic_ban_dialog/',
					type: 'POST',
					data: {topic_id: topicId, security_ls_key: LIVESTREET_SECURITY_KEY}
				}).then(function(result)
				{
					if (!result.bStateError)
					{
						if ($('#topic_ban_dialog_tpl').length) $('#topic_ban_dialog_tpl').remove();
						$('body').append($(result.sHtml));
						tbd = $('#topic_ban_dialog');

						topicBanDialog(topicId, 'delete').then(function(sMsgTitle, sMsg)
						{
							msgNoticeBox.alert(sMsgTitle, sMsg);
							history.back();

						}, function(sMsgTitle, sMsg)
						{
							msgErrorBox.alert(sMsgTitle, sMsg);
						});

					} else
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);
					}
				});
				break;
			}

			case 'SMM':
			{
				$.post('/topic/ajax_edit_extratags/' + '?JsHttpRequest=' + (new Date()).getTime(), {topicId: topicId, bIgnoreExtraTags: true, bIgnoreForumTags: true, bSmm: aLink.hasClass('enabled') ? 0 : 1, security_ls_key: LIVESTREET_SECURITY_KEY}).done(function(resp)
				{
					aLink.toggleClass('enabled');
				});
				break;
			}
		}
	});
	

	$(document).on('click', '.favorite', function()
	{
		var self = $(this);
		var url = '';
		var data = {};

		switch (self.data('type'))
		{
			case 'topic':
			default:
			{
				if (typeof(CURRENT_USER_ID) == 'undefined')
				{
					return msgErrorBox.alert('Ошибка', 'Для добавления топика в избранное необходимо <a href="/mobile/login/">авторизоваться</a>');

				} else
				{
					url = '/include/ajax/topicFavourite.php';
					data = {
						type: self.hasClass('favorited') ? 0 : 1,
						idTopic : self.data('id'),
						security_ls_key: LIVESTREET_SECURITY_KEY
					};
				}
				break;
			}
		}

		$.post(url, data).done(function()
		{
			if (data.type == 1)
			{
				self.addClass('favorited');
			} else
			{
				self.removeClass('favorited')
			}
		});
		return false
	}).on('click', '.reading', function()
	{
		var self = $(this);
		var url = '';
		var data = {};

		switch (self.data('type'))
		{
			case 'user':
			default:
			{
				if (typeof(CURRENT_USER_ID) == 'undefined')
				{
					return msgErrorBox.alert('Ошибка', 'Для добавления пользователя в читаемые необходимо <a href="/mobile/login/">авторизоваться</a>');

				} else
				{
					url = '/friends/ajax_user_subscribe/';
					data = {
						subscribe: self.hasClass('favorited') ? 0 : 1,
						login : self.data('login'),
						m: 1,
						security_ls_key: LIVESTREET_SECURITY_KEY
					};
				}
				break;
			}
		}

		$.post(url + '?JsHttpRequest=' + (new Date()).getTime() + '-xml', data).done(function(result)
		{
			result = JSON.parse(result);
			if (!result.js.bStateError)
			{
				if (data.subscribe == 1)
				{
					self.addClass('favorited');
				} else
				{
					self.removeClass('favorited')
				}

				msgNoticeBox.alert(result.js.sMsgTitle, result.js.sMsg);
			} else
			{
				msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
			}
		});
		return false
	})

	$(document).on('click', '.btn-vote', function()
	{
		var self = $(this);
		if (self.attr('disabled')) return false;

		if (typeof(CURRENT_USER_ID) == 'undefined')
		{
			document.location.href = '/mobile/login/';
			return;
		}

		var url = '';
		var data = {security_ls_key : LIVESTREET_SECURITY_KEY, value: 1};
		var bVoteCount = false;

		switch (self.data('type'))
		{
			case 'vopros':
			case 'topic':
			{
				url = '/include/ajax/voteTopic.php';
				data['idTopic'] = self.data('id');
				bVoteCount = true;
				break;
			}

			case 'forum':
			case 'article':
			{
				url = '/finansoviy-slovar/vote/';
				data['idArticle'] = self.data('id');
				break;
			}

			case 'broker':
			{
				url = '/brokers-rating/vote/';
				data['idBroker'] = self.data('id');
				break;
			}

			default:
			{
				break;
			}			
		}

		if (url)
		{
			$.post(url + '?JsHttpRequest=' + (new Date()).getTime(), data).done(function(resp)
			{
				try
				{
					var res = resp.match(/^JsHttpRequest\.dataReady\((.+)\)/);
					if (res != null) res = JSON.parse(res[1]);

					if (!res.js.bStateError)
					{
						var t = self.text();
						if (bVoteCount)
						{
							self.text(t.replace(/\([\+\-0123456789]+\)/, '(' + (res.js.iCountVote > 0 ? '+' : '') + res.js.iCountVote + ')'));
							$('.score').text((res.js.iCountVote > 0 ? '+' : '') + res.js.iCountVote).addClass(res.js.iCountVote > 0 ? 'positive' : 'negative');

						} else
						{
							self.text(t.replace(/\([\+\-0123456789]+\)/, '(' + (res.js.iRating > 0 ? '+' : '') + res.js.iRating + ')'));
							$('.score').text((res.js.iRating > 0 ? '+' : '') + res.js.iRating).addClass(res.js.iRating > 0 ? 'positive' : 'negative');
						}

					} else
					{
						self.css('backgroundColor', '#f15a5c');
						self.text(res.js.sMsg);
					}
					self.attr('disabled', true);

				} catch (e) {}
			});
		}
		return false

	}).on('click', '.vote .vote_item', function()
	{
		if (typeof(CURRENT_USER_ID) == 'undefined')
		{
			document.location.href = '/mobile/login/';
			return;
		}

		var nVote = $(this).parents('.vote');
		if (nVote.find('.vote_options').hasClass('disable_vote')) return;
		
		var sVoteTargetType = nVote.attr('target-type');
		var iVoteTargetId = nVote.attr('target-id');
		var iVoteValue = $(this).attr('vote-value');

		$.post('/include/ajax/questionVoteNew.php?JsHttpRequest=' + (new Date()).getTime() + '-xml', { targetId: iVoteTargetId, targetType: sVoteTargetType, idAnswer: iVoteValue, security_ls_key: LIVESTREET_SECURITY_KEY }).done(function(result)
		{
			result = JSON.parse(result);
			if (!result.js.bStateError)
			{
				nVote.find('.vote_options').addClass('disable_vote');

				$.each(result.js.aResult.answers, function(i,v)
				{
					var item = nVote.find('.vote_item[vote-value="' + i + '"]');
					if ('top' in v) item.addClass('selected');
					item.find('.vote_value').attr('title', v['count']).text(v['percent'] + '%');
					item.find('.vote_indicator').css('width', v['percent'] + '%');
				});

				$('#total_users').text(result.js.aResult.total);
				msgNoticeBox.alert(result.js.sMsgTitle, result.js.sMsg);
			} else
			{
				msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
			}
		}, 'json');
	});


	$('.block-fixed-comment-wrap a.block').on('click', function()
	{
		var button = $(this);
		var value = button.attr('vote');
		var commentId = button.parents('.block-fixed-comment').attr('comment_id');
		var url = '/include/ajax/voteComment.php';
		var data = {security_ls_key : LIVESTREET_SECURITY_KEY, value: value, idComment: commentId};
		

		$.post(url + '?JsHttpRequest=' + (new Date()).getTime() + '-xml', data).done(function(result)
		{
			result = JSON.parse(result);
			if (!result.js.bStateError)
			{
				button.addClass('active');
				var node = $('#comment' + commentId).find('.score');
				node.text((result.js.iRating > 0 ? '+' : '') + result.js.iRating).removeClass('positive').removeClass('negative');
				node.addClass(result.js.iRating > 0 ? 'positive' : 'negative');

				msgNoticeBox.alert(result.js.sMsgTitle, result.js.sMsg);
			} else
			{
				msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
			}

		}, 'json');
		return false
	})



	var item, comment_id;

	$('body').on('focus', '[name="comment_text"]', function()
	{
		if ($('.block-fixed-comment').is(':visible')) $('.block-fixed-comment').hide();
	});


	$('.block-fixed-comment-comment').on('click', function()
	{
		$('.block-fixed-comment').toggle('fast');
		
		if ($('.comment_form.edit').length)
		{
			$('.comment_form.edit').remove();
			$('.comment_form').show();
		}

		item.after($('.comment_form'));
		$('#comment_form').find('[name="comment_text"]').val(item.find('.meta .username').text() + ', ').focus();

		if ($('#comment_form').hasClass('chat') && comment_id)
		{
			$('#comment_form').find('[name="cmt_target_id"]').val(item.attr('tid'));
			$('#comment_form').parent().show();
			$('#comment_form').find('[name="comment_text"]').focus();
		}

		$('html, body').animate({ scrollTop: $('[name="comment_text"]').offset().top - 300}, 500);
		return false;
	});

	$('.block-fixed-comment-edit').on('click', function()
	{
		$('.block-fixed-comment').toggle('fast');
		$('.comment_form.edit').remove();
		
		var edit_from = $('.comment_form').hide().clone();
		edit_from.addClass('edit');
		edit_from.find('form').attr('id', 'edit_comment_form');
		edit_from.find('input[type="hidden"]').not('[name="security_ls_key"]').remove();
		edit_from.find('[name="security_ls_key"]').after($('<input/>').attr({'type':'hidden','name':'commentId','value':comment_id}));
		edit_from.find('[type="submit"]').val('Сохранить');

		$.ajax({
			type: 'GET',
			url: '/topic/ajax_edit_comment/' + '?commentId=' + comment_id + '&security_ls_key=' + LIVESTREET_SECURITY_KEY + '&JsHttpRequest=' + (new Date()).getTime() + '-xml',
			data: {},
			cache: false
			
		}).then(function(result)
		{
			result = JSON.parse(result);
			if (!result.js.bStateError)
			{
				edit_from.find('[name="comment_text"]').val(result.js.sComment.replace(/\r?\n/g, '').replace(/<br\s?\/?>/g, "\r\n"));
				item.after(edit_from);
				edit_from.show();
				edit_from.find('[name="comment_text"]').focus();

				$('html, body').animate({ scrollTop: edit_from.find('[name="comment_text"]').offset().top - 300}, 500);
			} else
			{
				msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
				edit_from.remove();
				$('.comment_form').show();
			}

		}, function()
		{
			edit_from.remove();
			$('.comment_form').show();
		});
		return false;
	});

	$('.block-fixed-comment-delete, .remove_comment_btn').on('click', function()
	{
		$('.block-fixed-comment').toggle('fast');
		
		$.ajax({
			type: 'POST',
			url: '/include/ajax/commentToggle.php?JsHttpRequest=' + (new Date()).getTime() + '-xml',
			data: {'idComment': comment_id, 'security_ls_key': LIVESTREET_SECURITY_KEY},
			cache: false
			
		}).then(function(result)
		{
			result = JSON.parse(result);
			if (!result.js.bStateError)
			{
				var nCommentItem = $('#comment' + comment_id);
				if (nCommentItem.length) nCommentItem.remove();

				msgNoticeBox.alert(result.js.sMsgTitle, result.js.sMsg);
			} else
			{
				msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
			}

		});
		return false;
	});

	$('#report_open_btn').on('click', function()
	{
		$('#report_menu').find('.success_send_report').hide();
		$('#report_menu').find('#report_form').show();
		$('#report_menu').find('[name="report_comment"]').val('');
		$('#report_menu').show();

	});

	$('#report_open_close, #cancel_report_btn').on('click', function(e)
	{
		e.preventDefault();
		$('#report_menu').hide();

	});

	$('#report_open_submit').on('click',function(e)
	{
		e.preventDefault();

		var data = {targetId: comment_id, targetType: 'comment', security_ls_key: LIVESTREET_SECURITY_KEY};
		data['text'] = $('#report_menu').find('[name="report_comment"]').val();

		$.ajax({
			url: '/abuse/abuse_ajax/',
			data: data,
			cache: false,
			type: 'POST'
		}).then(function(result)
		{
			if (typeof(result) != 'object')
			{
				try
				{
					result = JSON.parse(result);
				} catch (e)
				{
					msgErrorBox.alert('Внимание!', 'Неизвестная ошибка');
					return;
				}
			}			

			if (result.bStateError)
			{
				msgErrorBox.alert(result.sMsgTitle, result.sMsg);
			} else
			{
				$('#report_menu').find('#report_form').hide().next().fadeIn('fast');
			}
		});
		return false;
	});	

	$(document).on('click', '.text_html', function(e)
	{
		if ($('#comment_form').length)
		{
			if ((e.target.nodeName == 'A') || ($(e.target).parents('a').length > 0)) return;
			var bActive = $(this).hasClass('active');

			$('.text_html').removeClass('active');
			$('.block-fixed-comment').hide('fast');
			$('.block-fixed-comment').find('.block-fixed-comment-wrap').addClass('hide');
			$('.block-fixed-comment').removeAttr('comment_id');
			$('#comment_form').find('[name="reply"]').val(0);

			if (bActive) return false;

			item = $(this).parents('.comment_item');
			comment_id = item.attr('id').match(/^comment(\d+)$/);
			if (comment_id != null) comment_id = comment_id[1];
			if (comment_id) $('#comment_form').find('[name="reply"]').val(comment_id);

			$(this).addClass('active');
			$('.block-fixed-comment').find('.block.active').removeClass('active');
			$('.block-fixed-comment').attr('comment_id', comment_id);

			if (item.hasClass('self'))
			{
				$('.block-fixed-comment').find('.block-fixed-comment-wrap.self').removeClass('hide');

			} else
			{
				$('.block-fixed-comment').find('.block-fixed-comment-wrap.user').removeClass('hide');
			}

			$('.block-fixed-comment').show('fast');
			return false;			
		}
	});

	var lockForm = function(lock)
	{
		if (lock)
		{
			$('#comment_form, #edit_comment_form').find('[name="comment_text"]').attr('disabled', true);
			$('#comment_form, #edit_comment_form').find('[type="submit"]').attr('disabled', true);
			$('#comment_form, #edit_comment_form').find('.loader').show();

		} else
		{
			$('#comment_form, #edit_comment_form').find('[name="comment_text"]').removeAttr('disabled');
			$('#comment_form, #edit_comment_form').find('[type="submit"]').removeAttr('disabled');
			$('#comment_form, #edit_comment_form').find('.loader').hide();
		}
	};


	$(document).on('submit', '#comment_form', function(e)
	{
		e.preventDefault();

		$('#comment_form').find('.field-error').remove();
		lockForm(true);

		var data = {security_ls_key: LIVESTREET_SECURITY_KEY, reply: '', comment_text: '', cmt_target_id: 0};
		data['comment_text'] = $('#comment_form').find('[name="comment_text"]').val();
		data['reply'] = $('#comment_form').find('[name="reply"]').val();
		data['cmt_target_id'] = $('#comment_form').find('[name="cmt_target_id"]').val();

		var url = '';
		var urp = document.location.href.split('/');
		switch (urp[4])
		{
			case 'reply-to':
			case 'vopros':
			case 'allcomments':
			case 'topic':
			{
				data['cmt_target_type'] = 'topic';
				url = '/mobile/ajaxaddcomment/';
				break;
			}

			case 'forum-reply-to':
			case 'forum':
			case 'article':
			{
				data['cmt_target_type'] = 'article';
				url = '/mobile/ajaxaddcomment/';
				break;
			}

			default:
			{
				break;
			}
		}

		if (url)
		{
			$.post(url + '?JsHttpRequest=' + (new Date()).getTime() + '-form', data).done(function(resp)
			{
				try
				{
					var res = resp.match(/top\.JsHttpRequestGlobal\.dataReady\((.+)\)/);
					if (res != null) res = JSON.parse(res[1]);

					if (!res.js.bStateError)
					{
						if ('redirectURL' in res.js)
						{
							document.location.href=res.js.redirectURL;
							lockForm(false);
							return;
						}

						var yourCommentId = res.js.sCommentId;

						var lastCommentId = null;
						$('.comments_list').find('.comment_item').each(function(i, el)
						{
							var m = $(el).attr('id').match(/^comment(\d+)$/);
							if (m != null)
							{
								m = m[1];
								lastCommentId = (lastCommentId === null) ? m : Math.max(lastCommentId, m);
							}
						});

						$.post('/mobile/lastcomment/' + '?JsHttpRequest=' + (new Date()).getTime(), {security_ls_key: LIVESTREET_SECURITY_KEY, targetId: data['cmt_target_id'], targetType: urp[4], lastCommentId: lastCommentId}).done(function(resp)
						{
							var res = resp.match(/^JsHttpRequest\.dataReady\((.+)\)/);
							if (res != null) res = JSON.parse(res[1]);

							if (!res.js.bStateError)
							{
								if (urp[4] != 'forum')
								{
									$('.comments_list').append(res.js.sComments);
								} else
								{
									$('.comments_list').prepend(res.js.sComments);
								}
							}

							var yourComment = $('.comments_list').find('#comment' + yourCommentId);
							if (yourComment.length)
							{
								$('.comments_list > *').removeClass('your_last_comment');
								
								yourComment.addClass('your_last_comment');
								$('.comments_list').find('#comment' + data['reply']).after(yourComment);
							}
							


							$('#comment_form').find('[name="comment_text"]').val('');
							$('#comment_form').find('[name="reply"]').val('');
							lockForm(false);

							$('.comments_list').append($('.comment_form'));
							$('.text_html').removeClass('active');


							if ($('#comment_form').hasClass('chat')) $('#comment_form').parent().hide();
						});

					} else
					{
						$('#comment_form').find('[name="comment_text"]').after('<span class="field-error">' + res.js.sMsg + '</span>');
						lockForm(false);
					}

				} catch (e)
				{
					lockForm(false);
				}
			});
		}
	}).on('submit', '#edit_comment_form', function(e)
	{
		e.preventDefault();

		$('#edit_comment_form').find('.field-error').remove();
		lockForm(true);

		var data = {security_ls_key: LIVESTREET_SECURITY_KEY, commentId: null, comment_text: null};
		data['comment_text'] = $('#edit_comment_form').find('[name="comment_text"]').val().replace(/\r?\n/g, "<br/>");
		data['commentId'] = $('#edit_comment_form').find('[name="commentId"]').val();

		$.ajax({

			type: 'POST',
			url: '/topic/ajax_edit_comment/?JsHttpRequest=' + (new Date()).getTime() + '-form',
			data: data,
			cache: false
		}).then(function(resp)
		{
			var res = null;
			try
			{
				var res = resp.match(/top\.JsHttpRequestGlobal\.dataReady\((.+)\)/);
				if (res != null) res = JSON.parse(res[1]);
			
			} catch (e)
			{
				lockForm(false);
				return;
			}				

			if (!res.js.bStateError)
			{
				var sCommment = res.js.sComment;
				var dDate = new Date(res.js.sDate);
				var iVoted = parseInt(res.js.sVoted);

				var nCommentItem = $('#comment' + data['commentId']);
				if (nCommentItem.length)
				{
					var nVote = nCommentItem.find('.meta .score');
					if (nVote.length)
					{
						nVote.text((iVoted > 0 ? '+' : '') + iVoted).removeClass('positive negative');
						if (iVoted != 0) nVote.addClass((iVoted > 0) ? 'positive' : 'negative');
					}
					
					var nComment = nCommentItem.find('> .text');
					if (nComment.length) nComment.html(sCommment);

					var nData = nCommentItem.find('.meta .time');
					nData.text(dDate.toLocaleString('ru', {
						year: 'numeric',
						month: 'numeric',
						day: 'numeric',
						timezone: 'UTC',
						hour: 'numeric',
						minute: 'numeric'
					}));
				}


				lockForm(false);
				$('.comment_form.edit').remove();
				$('.comments_list').append($('.comment_form'));
				$('.comment_form').show();
				$('.text_html').removeClass('active');

				if ($('#comment_form').hasClass('chat')) $('#comment_form').parent().hide();

			} else
			{
				$('#edit_comment_form').find('[name="comment_text"]').after('<span class="field-error">' + res.js.sMsg + '</span>');
				lockForm(false);
			}
			
		}, function()
		{
			lockForm(false);
		});

	}).on('click', '#more_comments input:button', function(e)
	{
		var urp = document.location.href.split('/');

		if (urp[4] == 'forum')
		{
			var lastCommentId = null;
			$('.comments_list').find('.comment_item').each(function(i, el)
			{
				var m = $(el).attr('id').match(/^comment(\d+)$/);
				if (m != null)
				{
					m = m[1];
					lastCommentId = (lastCommentId === null) ? m : Math.min(lastCommentId, m);
				}
			});

			$('#more_comments').find('.loader').show();
			$.post('/mobile/' + urp[4] + '/' + urp[5] + '/comments_ajax?JsHttpRequest=' + (new Date()).getTime(), {before: lastCommentId}).done(function(resp)
			{
				$('#more_comments').find('.loader').hide();
				if (!resp.bStateError)
				{
					$('.comments_list').append(resp.sComments);
					if (!parseInt(resp.iCount)) $('#more_comments input:button').hide();
				}
			});
		}
	}).on('click', '#more_topics input:button', function(e)
	{
		var urp = document.location.href.split('/');
		if ((urp.length == 4) || (urp[4] == ''))
		{
			var posts = $('#more_topics').prevAll('.posts');
			var aTopicDates = $('.post span.time', posts).map(function()
			{
				if ($(this).attr('date'))
				{
					return $(this).attr('date');	
				}
				return null;

			}).get().filter(function(i)
			{
				return (i !== null);

			}).sort();

			var sDateBefore = aTopicDates.shift();

			$('#more_topics').find('.loader').show();
			$.post('/mobile/index_ajax?JsHttpRequest=' + (new Date()).getTime(), {before: sDateBefore}).done(function(resp)
			{
				$('#more_topics').find('.loader').hide();
				if (!resp.bStateError)
				{
					posts.append(resp.sTopics);
					if (!parseInt(resp.iCount)) $('#more_topics input:button').hide();
				}
			});
		}
	}).on('click', '#more_forum_comments input:button', function(e)
	{
		var posts = $('#more_forum_comments').prev('.posts');
		var iSkip = posts.find('.post').length;

		$('#more_forum_comments').find('.loader').show();
		$.post('/mobile/index_forum_ajax?JsHttpRequest=' + (new Date()).getTime(), {skip: iSkip}).done(function(resp)
		{
			$('#more_forum_comments').find('.loader').hide();
			if (!resp.bStateError)
			{
				posts.append(resp.sTopics);
				if (!parseInt(resp.iCount)) $('#more_forum_comments input:button').hide();
			}
		});

	}).on('click', '.users__more--button', function(e)
	{
		var page = parseInt($(this).attr('page'));
		$.get('/mobile/users_ajax?JsHttpRequest=' + (new Date()).getTime(), {page: page + 1}).done(function(resp)
		{
			if (!resp.bStateError)
			{
				page++;
				$(this).attr('page', page);
				if ('sUsers' in resp)
				{
					$(this).before(resp.sUsers);
				}
			}

		}.bind(this));
	}).on('click', '#more_users input:button', function(e)
	{
		$('#more_users').find('.loader').show();
		var page = parseInt($(this).attr('page'));
		var perPage = parseInt($(this).attr('per_page'));
		$.get('/mobile/users_ajax?JsHttpRequest=' + (new Date()).getTime(), {page: page + 1, per_page: perPage}).done(function(resp)
		{
			$('#more_users').find('.loader').hide();
			if (!resp.bStateError)
			{
				page++;
				$(this).attr('page', page);
				if ('sUsers' in resp)
				{
					$('.users').append(resp.sUsers);
				}
			}

		}.bind(this));
	}).on('click', '.user__button button', function(e)
	{
		if (typeof(CURRENT_USER_ID) == 'undefined')
		{
			msgErrorBox.alert('Ошибка', 'Для добавления пользователя в читаемые необходимо <a href="/mobile/login/">авторизоваться</a>');

		} else
		{
			var btn = $(this);
			var	data = {
				subscribe: btn.hasClass('user__plus') ? 1 : 0,
				login : btn.data('login'),
				m: 1,
				security_ls_key: LIVESTREET_SECURITY_KEY
			};

			$.post('/friends/ajax_user_subscribe/?JsHttpRequest=' + (new Date()).getTime() + '-xml', data).done(function(result)
			{
				result = JSON.parse(result);
				if (!result.js.bStateError)
				{
					if (data.subscribe == 1)
					{
						btn.removeClass('user__plus').addClass('user__minus');
						
					} else
					{
						btn.removeClass('user__minus').addClass('user__plus');
					}

					msgNoticeBox.alert(result.js.sMsgTitle, result.js.sMsg);
				} else
				{
					msgErrorBox.alert(result.js.sMsgTitle, result.js.sMsg);
				}
			});
		}
	}).on('click', '.btn-list', function(e)
	{
		e.preventDefault();

		var visibility = false;

		var list = $(this).next();

		if(list.length > 0) {
			if(list.css('display') !== 'none') {
				visibility = true;
			}

			if(visibility) {
				$(this).removeClass('active');

				list.slideUp();
			} else {
				$(this).addClass('active');

				list.slideDown();
			}
		}
		return false;

	}).on('click', 'ul.my_nav li:not(.active)', function()
	{
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab-content').find('div.tab-pane').removeClass('active').eq($(this).index()).addClass('active');
	}).on('click', '#promo_open_account_btn', function()
	{
		$('#promo_open_account_menu').show();

	}).on('click', '#promo_open_account_close', function()
	{
		$('#promo_open_account_menu').hide();
	});

	var portfolioForm = $('#menu1').find('form');
	if (portfolioForm.length)
	{
		if (typeof(CURRENT_USER_ID) == 'undefined')
		{
			portfolioForm.find('input, select, button').prop('disabled', true);

		} else
		{
			var action = 'buy';
			portfolioForm.find('[name="symbol"]').autocomplete({
				serviceUrl: '/q/portfolio-autocomplete-ajax/',
				type: 'POST',
				dataType: 'json',
				paramName: 'value',
				params: {'json': 1},
				preventBadQueries: false,
				zIndex: 99999,
				transformResult: function(response)
				{
					return { suggestions: response };
				},
				onSelect: function (suggestion)
				{
					portfolioForm.find('input[name="symbol"]').val(suggestion.symbol);
					portfolioForm.find('input[name="sec_type"]').val(suggestion.sec_type);
					portfolioForm.find('input[name="price"]').val(suggestion.last);
				}
			});

			portfolioForm.find('input[name="quantity"]').val(0).on('keypress', function(e)
			{
				var digits = '1234567890';
				if (digits.indexOf(e.key) == -1) e.preventDefault();
			});

			portfolioForm.find('input[name="price"]').on('keypress', function(e)
			{
				var digits = '1234567890,.';
				if (digits.indexOf(e.key) == -1) e.preventDefault();
				if ((e.key == ',') || (e.key == '.'))
				{
					if (($(this).val().indexOf('.') !== -1) || ($(this).val().indexOf(',') !== -1)) e.preventDefault();
				}
			});

			portfolioForm.find('input:radio[value="' + action + '"]').prop('checked', true);
			portfolioForm.find('input:radio[value="' + action + '"]').trigger('change');
			portfolioForm.find('input:radio').on('change', function()
			{
				action = $(this).val();
			});

			portfolioForm.on('submit', function(e)
			{
				e.preventDefault();

				var data = {
					action:action,
					symbol: portfolioForm.find('input[name="symbol"]').val(),
					sec_type: portfolioForm.find('input[name="sec_type"]').val(),
					quantity: portfolioForm.find('input[name="quantity"]').val(),
					price: portfolioForm.find('input[name="price"]').val(),
					portfolio_id: portfolioForm.find('select[name="portfolio_id"]').val(),
					security_ls_key: LIVESTREET_SECURITY_KEY
				};

				$.post('/q/portfolio-ajax/', data, function(result)
				{
					if (!result)
					{
						msgErrorBox.alert('Error', 'Please try again later');
					}

					if (result.bStateError)
					{
						msgErrorBox.alert(result.sMsgTitle, result.sMsg);

					} else
					{
						msgNoticeBox.alert(result.sMsgTitle, result.sMsg);
						if (document.location.pathname.match(/^\/mobile\/portfolio\/?/))
						{
							portfolioForm.find('input[name="symbol"]').val('');
							portfolioForm.find('input[name="sec_type"]').val('');
							portfolioForm.find('input[name="quantity"]').val('');
							portfolioForm.find('input[name="price"]').val('');

							setTimeout(function(e)
							{
								$($('.nav.my_nav').find('li')[0]).trigger('click');
								document.location.reload();

							}, 1000);
						}
					}
				});

				return false;
			});
		}
	}


	var tbd = $('#topic_ban_dialog');
	function topicBanDialog(topicId, action)
	{
		var d = $.Deferred();

		var text = {'delete' : 'Удалить топик', 'offtopic' : 'Переместить топик в оффтопик'};
		text = (action in text) ? text[action] : 'Что-то творим с топиком';

		var banDialog = new jBox('Confirm', 
		{
			id: 'topicBanDialog',
			title: text,
			confirmButton: 'ОК',
			cancelButton: 'Отмена',
			content: tbd,
			confirm: function()
			{
				var self = this;
				var data = {topic_id: topicId, action: action, security_ls_key: LIVESTREET_SECURITY_KEY};

				var ett = tbd.find('select[name="topic_action"]');
				data['action'] = ett.val();

				var additional_action = 'nothing';
				var eta = tbd.find('input[name="additional_action"]');
				eta.each(function(index, radio)
				{
					if (radio.checked) additional_action = $(radio).val();
				});

				if (additional_action != 'nothing')
				{
					var re = tbd.find('input[name="reason"]');
					re.each(function(index, radio)
					{
						if (radio.checked) data['reason'] = radio.value;
					});

					var br = tbd.find('input[name="reason_value"]');
					if (br.length) data['reason_value'] = br.val();

					if (additional_action == 'ban')
					{
						var ti = tbd.find('input[name="time"]');
						ti.each(function(index, radio)
						{
							if (ti.length > 1)
							{
								if (radio.checked) data['time'] = radio.value;
							} else
							{
								// если элемент один то это input:hidden иначе это input:radio
								data['time'] = radio.value;
							}
						});


						var br = tbd.find('input[name="time_value"]');
						br.each(function(index, radio)
						{
							if (br.length > 1)
							{
								if (radio.checked) data['time_value'] = radio.value;

							} else
							{
								// если элемент один то это input:text иначе это input:radio
								data['time_value'] = radio.value;
							}
						});
					}
				}

				data['additional_action'] = additional_action;


				$.ajax({
					type: 'POST',
					url: '/topic/admin/' + data['topic_id'] + '/?JsHttpRequest=' + (new Date()).getTime() + '-xml',
					data: data,
					cache: false
					
				}).then(function(result)
				{
					result = JSON.parse(result);
					if (!result.js.bStateError)
					{
						d.resolve(result.js.sMsgTitle, result.js.sMsg);
					} else
					{
						d.reject(result.js.sMsgTitle, result.js.sMsg);
					}
				});
			},

			onOpen: function()
			{
				var ett = tbd.find('select[name="topic_action"]');
				if (ett.find('option[value="' + action + '"]').length) ett.val(action);

				var eta = tbd.find('input[name="additional_action"]');
				eta.each(function(index, radio)
				{
					radio.checked = false;
				});

				eta[0].checked = true;

				var rsn = tbd.find('input[name="reason"]');
				rsn.each(function(index, radio)
				{
					radio.checked = false;
				});
				rsn[10].checked = true;
				
				var tv = tbd.find('input[type="radio"][name="time_value"]');
				if (tv.length)
				{
					tv.each(function(index, radio)
					{
						radio.checked = false;
					});
					tv[0].checked = true;
				} else
				{
					var tv = tbd.find('input[type="radio"][name="time"]');
					if (tv.length)
					{
						tv.each(function(index, radio)
						{
							radio.checked = false;
						});
						tv[0].checked = true;
					}
				}


				tbd.on('click', function(e)
				{
					var additional_action = 'nothing';
					var eta = tbd.find('input[name="additional_action"]');
					eta.each(function(index, radio)
					{
						if (radio.checked) additional_action = $(radio).val();
					});

					var to_disable = ['radio', 'text'];
					tbd.find('fieldset.ban_reason input').each(function(index, node)
					{
						if (to_disable.indexOf($(node).attr('type')) != -1) node.disabled = (additional_action == 'nothing');
					});

					tbd.find('fieldset.ban_time input').each(function(index, node)
					{
						if (to_disable.indexOf($(node).attr('type')) != -1) node.disabled = (additional_action != 'ban');
					});

					if (additional_action != 'nothing')
					{
						var re = tbd.find('input[name="reason"]');
						re.each(function(index, radio)
						{
							if (radio.checked)
							{
								var br = tbd.find('input[name="reason_value"]');
								if (br.length) br[0].disabled = (radio.value != '0');
							}
						});

						if (additional_action == 'ban')
						{
							var ti = tbd.find('input[name="time"]');
							ti.each(function(index, radio)
							{
								if (radio.checked)
								{
									var br = tbd.find('input[name="time_value"]');
									if (br.length) br[0].disabled = (radio.value != 'limited');
								}
							});
						}
					}

					if (($(e.target).attr('name') == 'additional_action') && ($(e.target).val() == 'warn'))
					{
						tbd.find('fieldset.ban_reason input[value="0"]').each(function(index, node)
						{
							node.checked = true;
						});
					}
				});

				tbd.click();


			},
			
			onCloseComplete: function()
			{
				this.destroy();
			}
		});
		
		banDialog.open();
		return d;
	}





	function ForumTagsDialog()
	{
		this.dialog = null;
		this.open = function(iTopicId)
		{
			if (this.dialog) this.close();

			this.iTopicId = iTopicId;
			if ($('body').hasClass('sidebar_open')) $('body').toggleClass('sidebar_open');
			if (this.makeDialog())
			{
				$('body').append(this.dialog);
				$('body').addClass('modal_dialog');
			}
		};

		this.close = function()
		{
			if (this.dialog)
			{
				$('body').removeClass('modal_dialog');
				$('.forum_tags').remove();
				this.destroyDialog();
			}
		};

		this.makeDialog = function()
		{
			var that = this;
			this.dialog = $('<div><div class="dialogclosebtn"></div><span class="dialogtitle">Компании для топика:</span><div class="dialogcontent"></div><div class="dialogcontrols"><input type="button" value="Применить" id="forumTagApply" /></div></div>').addClass('forum_tags');
			this.dialog.find('.dialogclosebtn').on('click', function(e)
			{
				e.preventDefault();
				that.close.call(that);
			});

			this.dialog.find('#forumTagApply').on('click', function(e)
			{
				e.preventDefault();


				var aTopicForumTags = {};
				that.dialog.find('input:checkbox[name^="forum_tags"]').each(function(i, el)
				{
					if (el.checked) aTopicForumTags[$(el).val()] = true;
				});								

				$.post('/topic/ajax_edit_extratags/?JsHttpRequest=' + (new Date()).getTime(), {topicId: that.iTopicId, aTopicForumTags: aTopicForumTags, bIgnoreExtraTags: true, bIgnoreSmm: true,  security_ls_key: LIVESTREET_SECURITY_KEY}, function(result, errors)
				{
				});

				that.close.call(that);
			});

			$.get('/topic/ajax_edit_extratags' + '?JsHttpRequest=' + (new Date()).getTime() + '&topicId=' + this.iTopicId + '&security_ls_key='+LIVESTREET_SECURITY_KEY).done(function(resp)
			{
				try
				{
					var res = resp.match(/^JsHttpRequest\.dataReady\((.+)\)/);
					if (res != null) res = JSON.parse(res[1]);
					if (!res.js.bStateError)
					{
						if (('bAvailableForumTags' in res.js) && (res.js.bAvailableForumTags))
						{
							var ct = that.dialog.find('.dialogcontent');
							if ('aAvailableForumTags' in res.js)
							{
								for (var i in res.js.aAvailableForumTags)
								{
									ct.append($('<label><input type="checkbox" name="forum_tags[' + i + ']" value="' + i + '" checked />' + res.js.aAvailableForumTags[i]['title'] + '</label>'));
								}
							}
							ct.append($('<div class="autocomplete_wrapper"><input type="text" id="forumTagAutocomplete" /></div>'));

							that.dialog.find('#forumTagAutocomplete').autocomplete({
								containerClass: 'autocomplete-suggestions more_companies',
								orientation: 'top',
								serviceUrl: '/forum/ajax_forum_tags/',
								type: 'POST',
								dataType: 'json',
								paramName: 'value',
								params: {'json': 1},
								preventBadQueries: false,
								transformResult: function(response)
								{
									return { suggestions: response };
								},
								onSelect: function (suggestion)
								{
									that.dialog.find('.autocomplete_wrapper').before($('<label><input type="checkbox" name="forum_tags[' + suggestion.data + ']" value="' + suggestion.data + '" checked />' + suggestion.value + '</label>'));
									that.dialog.find('#forumTagAutocomplete').val('');
								}
							});
						}

					} else
					{
						// error
					}
					// self.attr('disabled', true);

				} catch (e) {}
			});
	
			return true;
		};

		this.destroyDialog = function()
		{
			this.dialog.find('.dialogclosebtn').off('click');
			this.dialog.find('#forumTagApply').off('click');
			this.dialog = null;
			return true;
		};
	};

	if ($('#topic_text').length && $('#image').length) initImageLoader($('#topic_text'), $('#image'));
	if ($('#comment_text').length && $('#image').length) initImageLoader($('#comment_text'), $('#image'));



	if ($('.fixed-block').length)
	{
		var disableScroll = false;
		var bottomSlide = function()
		{
			if($(window).scrollTop() + $(window).height() >= $(document).height()-88)
			{
				$('.fixed-block').slideUp(350);
			} else if (!disableScroll)
			{
				$('.fixed-block').slideDown(350);
			}
		};

		$('.fixed-block-close').on('click', function()
		{
			if (typeof(CURRENT_USER_ID) === 'undefined')
			{
				(new jBox('Modal', {
				
					id : 'regReqDialog',
					width: 300,
					title: 'Необходимо зарегистрироваться',
					content: 'Чтобы скрыть блок<br /><a href="/mobile/login/">войдите</a> на сайт<br />или <a href="/registration/?utm_source=mob_slider">зарегистрируйтесь</a>',
					closeButton: 'title'
				
				})).open();

			} else
			{
				disableScroll = true;
				$('.fixed-block').slideUp(350, function()
				{
					$('.fixed-block').remove();
					$(window).off('scroll', bottomSlide);
					document.cookie = 'nofixedblock=1; path=/mobile; max-age=31536000';
				});
			}
		});

		if ((typeof(CURRENT_USER_ID) === 'undefined') || (document.cookie.indexOf('nofixedblock=') === -1))
		{
			var timeout = setTimeout(function()
			{
				$('.fixed-block').slideDown(350);

				clearTimeout(timeout);
				$(window).on('scroll', bottomSlide);

			}, 3000);
		}
	}



	var l = document.location;
	if (typeof l.hash != 'undefined' && /#comment(s|\d+)/.test(l.hash))
	{
		var comment = $(l.hash);
		if (comment.length)
		{
			comment.addClass('highlighted');
			setTimeout(function() {
				comment.removeClass('highlighted')
			}, 666);
		} else
		{
			if (!$('.comments_list').length)
			{
				var url = l.pathname;
				if (/^\/mobile\/topic\/\d+\/$/.test(url))
				{
					url+= 'comments/' + l.hash;
					document.location.href = url;
				}
			}
		}
	}
});
