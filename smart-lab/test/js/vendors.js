!function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():window.wNumb=e()}(function(){"use strict";var o=["decimals","thousand","mark","prefix","suffix","encoder","decoder","negativeBefore","negative","edit","undo"];function w(e){return e.split("").reverse().join("")}function h(e,t){return e.substring(0,t.length)===t}function f(e,t,n){if((e[t]||e[n])&&e[t]===e[n])throw new Error(t)}function x(e){return"number"==typeof e&&isFinite(e)}function n(e,t,n,r,i,o,f,u,s,c,a,p){var d,l,h,g=p,v="",m="";return o&&(p=o(p)),!!x(p)&&(!1!==e&&0===parseFloat(p.toFixed(e))&&(p=0),p<0&&(d=!0,p=Math.abs(p)),!1!==e&&(p=function(e,t){return e=e.toString().split("e"),(+((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+t:t)))).toString().split("e"))[0]+"e"+(e[1]?e[1]-t:-t))).toFixed(t)}(p,e)),-1!==(p=p.toString()).indexOf(".")?(h=(l=p.split("."))[0],n&&(v=n+l[1])):h=p,t&&(h=w((h=w(h).match(/.{1,3}/g)).join(w(t)))),d&&u&&(m+=u),r&&(m+=r),d&&s&&(m+=s),m+=h,m+=v,i&&(m+=i),c&&(m=c(m,g)),m)}function r(e,t,n,r,i,o,f,u,s,c,a,p){var d,l="";return a&&(p=a(p)),!(!p||"string"!=typeof p)&&(u&&h(p,u)&&(p=p.replace(u,""),d=!0),r&&h(p,r)&&(p=p.replace(r,"")),s&&h(p,s)&&(p=p.replace(s,""),d=!0),i&&function(e,t){return e.slice(-1*t.length)===t}(p,i)&&(p=p.slice(0,-1*i.length)),t&&(p=p.split(t).join("")),n&&(p=p.replace(n,".")),d&&(l+="-"),""!==(l=(l+=p).replace(/[^0-9\.\-.]/g,""))&&(l=Number(l),f&&(l=f(l)),!!x(l)&&l))}function i(e,t,n){var r,i=[];for(r=0;r<o.length;r+=1)i.push(e[o[r]]);return i.push(n),t.apply("",i)}return function e(t){if(!(this instanceof e))return new e(t);"object"==typeof t&&(t=function(e){var t,n,r,i={};for(void 0===e.suffix&&(e.suffix=e.postfix),t=0;t<o.length;t+=1)if(void 0===(r=e[n=o[t]]))"negative"!==n||i.negativeBefore?"mark"===n&&"."!==i.thousand?i[n]=".":i[n]=!1:i[n]="-";else if("decimals"===n){if(!(0<=r&&r<8))throw new Error(n);i[n]=r}else if("encoder"===n||"decoder"===n||"edit"===n||"undo"===n){if("function"!=typeof r)throw new Error(n);i[n]=r}else{if("string"!=typeof r)throw new Error(n);i[n]=r}return f(i,"mark","thousand"),f(i,"prefix","negative"),f(i,"prefix","negativeBefore"),i}(t),this.to=function(e){return i(t,n,e)},this.from=function(e){return i(t,r,e)})}});
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/**
*  Ajax Autocomplete for jQuery, version %version%
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/

/*jslint  browser: true, white: true, single: true, this: true, multivar: true */
/*global define, window, document, jQuery, exports, require */

// Expose plugin as an AMD module if AMD loader is present:
(function (factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object' && typeof require === 'function') {
    // Browserify
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  'use strict';

  var
    utils = (function () {
      return {
        escapeRegExChars: function (value) {
          return value.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
        },
        createNode: function (containerClass) {
          var div = document.createElement('div');
          div.className = containerClass;
          //div.style.position = 'absolute';
          div.style.display = 'none';
          return div;
        }
      };
    }()),

    keys = {
      ESC: 27,
      TAB: 9,
      RETURN: 13,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },

    noop = $.noop;

  function Autocomplete(el, options) {
    var that = this;

    // Shared variables:
    that.element = el;
    that.el = $(el);
    that.suggestions = [];
    that.badQueries = [];
    that.selectedIndex = -1;
    that.currentValue = that.element.value;
    that.timeoutId = null;
    that.cachedResponse = {};
    that.onChangeTimeout = null;
    that.onChange = null;
    that.isLocal = false;
    that.suggestionsContainer = null;
    that.noSuggestionsContainer = null;
    that.options = $.extend(true, {}, Autocomplete.defaults, options);
    that.classes = {
      selected: 'autocomplete-selected',
      suggestion: 'autocomplete-suggestion'
    };
    that.hint = null;
    that.hintValue = '';
    that.selection = null;

    // Initialize and set options:
    that.initialize();
    that.setOptions(options);
  }

  Autocomplete.utils = utils;

  $.Autocomplete = Autocomplete;

  Autocomplete.defaults = {
    ajaxSettings: {},
    autoSelectFirst: false,
    appendTo: 'body',
    serviceUrl: null,
    lookup: null,
    onSelect: null,
    onHint: null,
    width: 'auto',
    minChars: 1,
    maxHeight: 300,
    deferRequestBy: 0,
    params: {},
    formatResult: _formatResult,
    formatGroup: _formatGroup,
    delimiter: null,
    zIndex: 9999,
    type: 'GET',
    noCache: false,
    onSearchStart: noop,
    onSearchComplete: noop,
    onSearchError: noop,
    preserveInput: false,
    containerClass: 'autocomplete-suggestions',
    tabDisabled: false,
    dataType: 'text',
    currentRequest: null,
    triggerSelectOnValidInput: true,
    preventBadQueries: true,
    lookupFilter: _lookupFilter,
    paramName: 'query',
    transformResult: _transformResult,
    showNoSuggestionNotice: false,
    noSuggestionNotice: 'No results',
    orientation: 'bottom',
    forceFixPosition: false
  };

  function _lookupFilter(suggestion, originalQuery, queryLowerCase) {
    return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
  };

  function _transformResult(response) {
    return typeof response === 'string' ? $.parseJSON(response) : response;
  };

  function _formatResult(suggestion, currentValue) {
    // Do not replace anything if the current value is empty
    if (!currentValue) {
      return suggestion.value;
    }

    var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';

    return suggestion.value
      .replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/&lt;(\/?strong)&gt;/g, '<$1>');
  };

  function _formatGroup(suggestion, category) {
    return '<div class="autocomplete-group">' + category + '</div>';
  };

  Autocomplete.prototype = {

    initialize: function () {
      var that = this,
        suggestionSelector = '.' + that.classes.suggestion,
        selected = that.classes.selected,
        options = that.options,
        container;

      that.element.setAttribute('autocomplete', 'off');

      // html() deals with many types: htmlString or Element or Array or jQuery
      that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>')
        .html(this.options.noSuggestionNotice).get(0);

      that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);

      container = $(that.suggestionsContainer);

      container.appendTo(options.appendTo || 'body');

      // Only set width if it was provided:
      if (options.width !== 'auto') {
        container.css('width', options.width);
      }

      // Listen for mouse over event on suggestions list:
      container.on('mouseover.autocomplete', suggestionSelector, function () {
        that.activate($(this).data('index'));
      });

      // Deselect active element when mouse leaves suggestions container:
      container.on('mouseout.autocomplete', function () {
        that.selectedIndex = -1;
        container.children('.' + selected).removeClass(selected);
      });

      // Listen for click event on suggestions list:
      container.on('click.autocomplete', suggestionSelector, function () {
        that.select($(this).data('index'));
      });

      container.on('click.autocomplete', function () {
        clearTimeout(that.blurTimeoutId);
      })

      that.fixPositionCapture = function () {
        if (that.visible) {
          that.fixPosition();
        }
      };

      $(window).on('resize.autocomplete', that.fixPositionCapture);

      that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
      that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
      that.el.on('blur.autocomplete', function () { that.onBlur(); });
      that.el.on('focus.autocomplete', function () { that.onFocus(); });
      that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
      that.el.on('input.autocomplete', function (e) { that.onKeyUp(e); });
    },

    onFocus: function () {
      var that = this;

      if (that.disabled) {
        return;
      }

      that.fixPosition();

      if (that.el.val().length >= that.options.minChars) {
        that.onValueChange();
      }
    },

    onBlur: function () {
      var that = this,
        options = that.options,
        value = that.el.val(),
        query = that.getQuery(value);

      // If user clicked on a suggestion, hide() will
      // be canceled, otherwise close suggestions
      that.blurTimeoutId = setTimeout(function () {
        that.hide();

        if (that.selection && that.currentValue !== query) {
          (options.onInvalidateSelection || $.noop).call(that.element);
        }
      }, 200);
    },

    abortAjax: function () {
      var that = this;
      if (that.currentRequest) {
        that.currentRequest.abort();
        that.currentRequest = null;
      }
    },

    setOptions: function (suppliedOptions) {
      var that = this,
        options = $.extend({}, that.options, suppliedOptions);

      that.isLocal = Array.isArray(options.lookup);

      if (that.isLocal) {
        options.lookup = that.verifySuggestionsFormat(options.lookup);
      }

      options.orientation = that.validateOrientation(options.orientation, 'bottom');

      // Adjust height, width and z-index:
      $(that.suggestionsContainer).css({
        'max-height': options.maxHeight + 'px',
        'width': options.width + 'px',
        'z-index': options.zIndex
      });

      this.options = options;
    },


    clearCache: function () {
      this.cachedResponse = {};
      this.badQueries = [];
    },

    clear: function () {
      this.clearCache();
      this.currentValue = '';
      this.suggestions = [];
    },

    disable: function () {
      var that = this;
      that.disabled = true;
      clearTimeout(that.onChangeTimeout);
      that.abortAjax();
    },

    enable: function () {
      this.disabled = false;
    },

    fixPosition: function () {
      // Use only when container has already its content

      var that = this,
        $container = $(that.suggestionsContainer),
        containerParent = $container.parent().get(0);
      // Fix position automatically when appended to body.
      // In other cases force parameter must be given.
      if (containerParent !== document.body && !that.options.forceFixPosition) {
        return;
      }

      // Choose orientation
      var orientation = that.options.orientation,
        containerHeight = $container.outerHeight(),
        height = that.el.outerHeight(),
        offset = that.el.offset(),
        styles = { 'top': offset.top, 'left': offset.left };

      if (orientation === 'auto') {
        var viewPortHeight = $(window).height(),
          scrollTop = $(window).scrollTop(),
          topOverflow = -scrollTop + offset.top - containerHeight,
          bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);

        orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow) ? 'top' : 'bottom';
      }

      if (orientation === 'top') {
        styles.top += -containerHeight;
      } else {
        styles.top += height;
      }

      // If container is not positioned to body,
      // correct its position using offset parent offset
      if (containerParent !== document.body) {
        var opacity = $container.css('opacity'),
          parentOffsetDiff;

        if (!that.visible) {
          $container.css('opacity', 0).show();
        }

        parentOffsetDiff = $container.offsetParent().offset();
        styles.top -= parentOffsetDiff.top;
        styles.top += containerParent.scrollTop;
        styles.left -= parentOffsetDiff.left;

        if (!that.visible) {
          $container.css('opacity', opacity).hide();
        }
      }

      if (that.options.width === 'auto') {
        styles.width = that.el.outerWidth() + 'px';
      }

      $container.css(styles);
    },

    isCursorAtEnd: function () {
      var that = this,
        valLength = that.el.val().length,
        selectionStart = that.element.selectionStart,
        range;

      if (typeof selectionStart === 'number') {
        return selectionStart === valLength;
      }
      if (document.selection) {
        range = document.selection.createRange();
        range.moveStart('character', -valLength);
        return valLength === range.text.length;
      }
      return true;
    },

    onKeyPress: function (e) {
      var that = this;

      // If suggestions are hidden and user presses arrow down, display suggestions:
      if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
        that.suggest();
        return;
      }

      if (that.disabled || !that.visible) {
        return;
      }

      switch (e.which) {
        case keys.ESC:
          that.el.val(that.currentValue);
          that.hide();
          break;
        case keys.RIGHT:
          if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
            that.selectHint();
            break;
          }
          return;
        case keys.TAB:
          if (that.hint && that.options.onHint) {
            that.selectHint();
            return;
          }
          if (that.selectedIndex === -1) {
            that.hide();
            return;
          }
          that.select(that.selectedIndex);
          if (that.options.tabDisabled === false) {
            return;
          }
          break;
        case keys.RETURN:
          if (that.selectedIndex === -1) {
            that.hide();
            return;
          }
          that.select(that.selectedIndex);
          break;
        case keys.UP:
          that.moveUp();
          break;
        case keys.DOWN:
          that.moveDown();
          break;
        default:
          return;
      }

      // Cancel event if function did not return:
      e.stopImmediatePropagation();
      e.preventDefault();
    },

    onKeyUp: function (e) {
      var that = this;

      if (that.disabled) {
        return;
      }

      switch (e.which) {
        case keys.UP:
        case keys.DOWN:
          return;
      }

      clearTimeout(that.onChangeTimeout);

      if (that.currentValue !== that.el.val()) {
        that.findBestHint();
        if (that.options.deferRequestBy > 0) {
          // Defer lookup in case when value changes very quickly:
          that.onChangeTimeout = setTimeout(function () {
            that.onValueChange();
          }, that.options.deferRequestBy);
        } else {
          that.onValueChange();
        }
      }
    },

    onValueChange: function () {
      if (this.ignoreValueChange) {
        this.ignoreValueChange = false;
        return;
      }

      var that = this,
        options = that.options,
        value = that.el.val(),
        query = that.getQuery(value);

      if (that.selection && that.currentValue !== query) {
        that.selection = null;
        (options.onInvalidateSelection || $.noop).call(that.element);
      }

      clearTimeout(that.onChangeTimeout);
      that.currentValue = value;
      that.selectedIndex = -1;

      // Check existing suggestion for the match before proceeding:
      if (options.triggerSelectOnValidInput && that.isExactMatch(query)) {
        that.select(0);
        return;
      }

      if (query.length < options.minChars) {
        that.hide();
      } else {
        that.getSuggestions(query);
      }
    },

    isExactMatch: function (query) {
      var suggestions = this.suggestions;

      return (suggestions.length === 1 && suggestions[0].value.toLowerCase() === query.toLowerCase());
    },

    getQuery: function (value) {
      var delimiter = this.options.delimiter,
        parts;

      if (!delimiter) {
        return value;
      }
      parts = value.split(delimiter);
      return $.trim(parts[parts.length - 1]);
    },

    getSuggestionsLocal: function (query) {
      var that = this,
        options = that.options,
        queryLowerCase = query.toLowerCase(),
        filter = options.lookupFilter,
        limit = parseInt(options.lookupLimit, 10),
        data;

      data = {
        suggestions: $.grep(options.lookup, function (suggestion) {
          return filter(suggestion, query, queryLowerCase);
        })
      };

      if (limit && data.suggestions.length > limit) {
        data.suggestions = data.suggestions.slice(0, limit);
      }

      return data;
    },

    getSuggestions: function (q) {
      var response,
        that = this,
        options = that.options,
        serviceUrl = options.serviceUrl,
        params,
        cacheKey,
        ajaxSettings;

      options.params[options.paramName] = q;

      if (options.onSearchStart.call(that.element, options.params) === false) {
        return;
      }

      params = options.ignoreParams ? null : options.params;

      if ($.isFunction(options.lookup)) {
        options.lookup(q, function (data) {
          that.suggestions = data.suggestions;
          that.suggest();
          options.onSearchComplete.call(that.element, q, data.suggestions);
        });
        return;
      }

      if (that.isLocal) {
        response = that.getSuggestionsLocal(q);
      } else {
        if ($.isFunction(serviceUrl)) {
          serviceUrl = serviceUrl.call(that.element, q);
        }
        cacheKey = serviceUrl + '?' + $.param(params || {});
        response = that.cachedResponse[cacheKey];
      }

      if (response && Array.isArray(response.suggestions)) {
        that.suggestions = response.suggestions;
        that.suggest();
        options.onSearchComplete.call(that.element, q, response.suggestions);
      } else if (!that.isBadQuery(q)) {
        that.abortAjax();

        ajaxSettings = {
          url: serviceUrl,
          data: params,
          type: options.type,
          dataType: options.dataType
        };

        $.extend(ajaxSettings, options.ajaxSettings);

        that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
          var result;
          that.currentRequest = null;
          result = options.transformResult(data, q);
          that.processResponse(result, q, cacheKey);
          options.onSearchComplete.call(that.element, q, result.suggestions);
        }).fail(function (jqXHR, textStatus, errorThrown) {
          options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
        });
      } else {
        options.onSearchComplete.call(that.element, q, []);
      }
    },

    isBadQuery: function (q) {
      if (!this.options.preventBadQueries) {
        return false;
      }

      var badQueries = this.badQueries,
        i = badQueries.length;

      while (i--) {
        if (q.indexOf(badQueries[i]) === 0) {
          return true;
        }
      }

      return false;
    },

    hide: function () {
      var that = this,
        container = $(that.suggestionsContainer);

      if ($.isFunction(that.options.onHide) && that.visible) {
        that.options.onHide.call(that.element, container);
      }

      that.visible = false;
      that.selectedIndex = -1;
      clearTimeout(that.onChangeTimeout);
      $(that.suggestionsContainer).hide();
      that.onHint(null);
    },

    suggest: function () {
      if (!this.suggestions.length) {
        if (this.options.showNoSuggestionNotice) {
          this.noSuggestions();
        } else {
          this.hide();
        }
        return;
      }

      var that = this,
        options = that.options,
        groupBy = options.groupBy,
        formatResult = options.formatResult,
        value = that.getQuery(that.currentValue),
        className = that.classes.suggestion,
        classSelected = that.classes.selected,
        container = $(that.suggestionsContainer),
        noSuggestionsContainer = $(that.noSuggestionsContainer),
        beforeRender = options.beforeRender,
        html = '',
        category,
        formatGroup = function (suggestion, index) {
          var currentCategory = suggestion.data[groupBy];

          if (category === currentCategory) {
            return '';
          }

          category = currentCategory;

          return options.formatGroup(suggestion, category);
        };

      if (options.triggerSelectOnValidInput && that.isExactMatch(value)) {
        that.select(0);
        return;
      }

      // Build suggestions inner HTML:
      $.each(that.suggestions, function (i, suggestion) {
        if (groupBy) {
          html += formatGroup(suggestion, value, i);
        }

        html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value, i) + '</div>';
      });

      this.adjustContainerWidth();

      noSuggestionsContainer.detach();
      container.html(html);

      if ($.isFunction(beforeRender)) {
        beforeRender.call(that.element, container, that.suggestions);
      }

      that.fixPosition();
      container.show();

      // Select first value by default:
      if (options.autoSelectFirst) {
        that.selectedIndex = 0;
        container.scrollTop(0);
        container.children('.' + className).first().addClass(classSelected);
      }

      that.visible = true;
      that.findBestHint();
    },

    noSuggestions: function () {
      var that = this,
        beforeRender = that.options.beforeRender,
        container = $(that.suggestionsContainer),
        noSuggestionsContainer = $(that.noSuggestionsContainer);

      this.adjustContainerWidth();

      // Some explicit steps. Be careful here as it easy to get
      // noSuggestionsContainer removed from DOM if not detached properly.
      noSuggestionsContainer.detach();

      // clean suggestions if any
      container.empty();
      container.append(noSuggestionsContainer);

      if ($.isFunction(beforeRender)) {
        beforeRender.call(that.element, container, that.suggestions);
      }

      that.fixPosition();

      container.show();
      that.visible = true;
    },

    adjustContainerWidth: function () {
      var that = this,
        options = that.options,
        width,
        container = $(that.suggestionsContainer);

      // If width is auto, adjust width before displaying suggestions,
      // because if instance was created before input had width, it will be zero.
      // Also it adjusts if input width has changed.
      if (options.width === 'auto') {
        width = that.el.outerWidth();
        container.css('width', width > 0 ? width : 300);
      } else if (options.width === 'flex') {
        // Trust the source! Unset the width property so it will be the max length
        // the containing elements.
        container.css('width', '');
      }
    },

    findBestHint: function () {
      var that = this,
        value = that.el.val().toLowerCase(),
        bestMatch = null;

      if (!value) {
        return;
      }

      $.each(that.suggestions, function (i, suggestion) {
        var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
        if (foundMatch) {
          bestMatch = suggestion;
        }
        return !foundMatch;
      });

      that.onHint(bestMatch);
    },

    onHint: function (suggestion) {
      var that = this,
        onHintCallback = that.options.onHint,
        hintValue = '';

      if (suggestion) {
        hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
      }
      if (that.hintValue !== hintValue) {
        that.hintValue = hintValue;
        that.hint = suggestion;
        if ($.isFunction(onHintCallback)) {
          onHintCallback.call(that.element, hintValue);
        }
      }
    },

    verifySuggestionsFormat: function (suggestions) {
      // If suggestions is string array, convert them to supported format:
      if (suggestions.length && typeof suggestions[0] === 'string') {
        return $.map(suggestions, function (value) {
          return { value: value, data: null };
        });
      }

      return suggestions;
    },

    validateOrientation: function (orientation, fallback) {
      orientation = $.trim(orientation || '').toLowerCase();

      if ($.inArray(orientation, ['auto', 'bottom', 'top']) === -1) {
        orientation = fallback;
      }

      return orientation;
    },

    processResponse: function (result, originalQuery, cacheKey) {
      var that = this,
        options = that.options;

      result.suggestions = that.verifySuggestionsFormat(result.suggestions);

      // Cache results if cache is not disabled:
      if (!options.noCache) {
        that.cachedResponse[cacheKey] = result;
        if (options.preventBadQueries && !result.suggestions.length) {
          that.badQueries.push(originalQuery);
        }
      }

      // Return if originalQuery is not matching current query:
      if (originalQuery !== that.getQuery(that.currentValue)) {
        return;
      }

      that.suggestions = result.suggestions;
      that.suggest();
    },

    activate: function (index) {
      var that = this,
        activeItem,
        selected = that.classes.selected,
        container = $(that.suggestionsContainer),
        children = container.find('.' + that.classes.suggestion);

      container.find('.' + selected).removeClass(selected);

      that.selectedIndex = index;

      if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
        activeItem = children.get(that.selectedIndex);
        $(activeItem).addClass(selected);
        return activeItem;
      }

      return null;
    },

    selectHint: function () {
      var that = this,
        i = $.inArray(that.hint, that.suggestions);

      that.select(i);
    },

    select: function (i) {
      var that = this;
      that.hide();
      that.onSelect(i);
    },

    moveUp: function () {
      var that = this;

      if (that.selectedIndex === -1) {
        return;
      }

      if (that.selectedIndex === 0) {
        $(that.suggestionsContainer).children('.' + that.classes.suggestion).first().removeClass(that.classes.selected);
        that.selectedIndex = -1;
        that.ignoreValueChange = false;
        that.el.val(that.currentValue);
        that.findBestHint();
        return;
      }

      that.adjustScroll(that.selectedIndex - 1);
    },

    moveDown: function () {
      var that = this;

      if (that.selectedIndex === (that.suggestions.length - 1)) {
        return;
      }

      that.adjustScroll(that.selectedIndex + 1);
    },

    adjustScroll: function (index) {
      var that = this,
        activeItem = that.activate(index);

      if (!activeItem) {
        return;
      }

      var offsetTop,
        upperBound,
        lowerBound,
        heightDelta = $(activeItem).outerHeight();

      offsetTop = activeItem.offsetTop;
      upperBound = $(that.suggestionsContainer).scrollTop();
      lowerBound = upperBound + that.options.maxHeight - heightDelta;

      if (offsetTop < upperBound) {
        $(that.suggestionsContainer).scrollTop(offsetTop);
      } else if (offsetTop > lowerBound) {
        $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
      }

      if (!that.options.preserveInput) {
        // During onBlur event, browser will trigger "change" event,
        // because value has changed, to avoid side effect ignore,
        // that event, so that correct suggestion can be selected
        // when clicking on suggestion with a mouse
        that.ignoreValueChange = true;
        that.el.val(that.getValue(that.suggestions[index].value));
      }

      that.onHint(null);
    },

    onSelect: function (index) {
      var that = this,
        onSelectCallback = that.options.onSelect,
        suggestion = that.suggestions[index];

      that.currentValue = that.getValue(suggestion.value);

      if (that.currentValue !== that.el.val() && !that.options.preserveInput) {
        that.el.val(that.currentValue);
      }

      that.onHint(null);
      that.suggestions = [];
      that.selection = suggestion;

      if ($.isFunction(onSelectCallback)) {
        onSelectCallback.call(that.element, suggestion);
      }
    },

    getValue: function (value) {
      var that = this,
        delimiter = that.options.delimiter,
        currentValue,
        parts;

      if (!delimiter) {
        return value;
      }

      currentValue = that.currentValue;
      parts = currentValue.split(delimiter);

      if (parts.length === 1) {
        return value;
      }

      return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
    },

    dispose: function () {
      var that = this;
      that.el.off('.autocomplete').removeData('autocomplete');
      $(window).off('resize.autocomplete', that.fixPositionCapture);
      $(that.suggestionsContainer).remove();
    }
  };

  // Create chainable jQuery plugin:
  $.fn.devbridgeAutocomplete = function (options, args) {
    var dataKey = 'autocomplete';
    // If function invoked without argument return
    // instance of the first matched element:
    if (!arguments.length) {
      return this.first().data(dataKey);
    }

    return this.each(function () {
      var inputElement = $(this),
        instance = inputElement.data(dataKey);

      if (typeof options === 'string') {
        if (instance && typeof instance[options] === 'function') {
          instance[options](args);
        }
      } else {
        // If instance already exists, destroy it:
        if (instance && instance.dispose) {
          instance.dispose();
        }
        instance = new Autocomplete(this, options);
        inputElement.data(dataKey, instance);
      }
    });
  };

  // Don't overwrite if it already exists
  if (!$.fn.autocomplete) {
    $.fn.autocomplete = $.fn.devbridgeAutocomplete;
  }
}));
/*global jQuery, define, module, require*/
/*!
 * jquery.sumoselect
 * http://hemantnegi.github.io/jquery.sumoselect
 * 2016-12-12
 *
 * Copyright 2015 Hemant Negi
 * Email : hemant.frnz@gmail.com
 * Compressor http://refresh-sf.com/
 */

(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

})(($) => {

  'namespace sumo';
  $.fn.SumoSelect = function (options) {
    // Extra check for IE compatibility
    const dispatchEvent = (target, eventName) => {
      let event;
      if(typeof(Event) === 'function') {
          event = new Event(eventName);
      }else{
          event = document.createEvent('Event');
          event.initEvent(eventName, true, true);
      }

      target.dispatchEvent(event);
    };

    // missing forEach on NodeList for IE11
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    // This is the easiest way to have default options.
    const defaultOptions = {
      placeholder: 'Select Here',   // Dont change it here.
      csvDispCount: 3,              // display no. of items in multiselect. 0 to display all.
      captionFormat: '{0} Selected', // format of caption text. you can set your locale.
      captionFormatAllSelected: '{0} all selected!', // format of caption text when all elements are selected. set null to use captionFormat. It will not work if there are disabled elements in select.
      floatWidth: 400,              // Screen width of device at which the list is rendered in floating popup fashion.
      forceCustomRendering: false,  // force the custom modal on all devices below floatWidth resolution.
      nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'], //
      outputAsCSV: false,           // true to POST data as csv ( false for Html control array ie. default select )
      csvSepChar: ',',              // separation char in csv mode
      okCancelInMulti: false,       // display ok cancel buttons in desktop mode multiselect also.
      isClickAwayOk: false,         // for okCancelInMulti=true. sets whether click outside will trigger Ok or Cancel (default is cancel).
      triggerChangeCombined: true,  // im multi select mode whether to trigger change event on individual selection or combined selection.
      selectAll: false,             // to display select all button in multiselect mode.|| also select all will not be available on mobile devices.

      search: false,                // to display input for filtering content. selectAlltext will be input text placeholder
      searchText: 'Search...',      // placeholder for search input
      searchFn (haystack, needle) { // search function
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) < 0;
      },
      noMatch: 'No matches for "{0}"',
      prefix: '',                   // some prefix usually the field name. eg. '<b>Hello</b>'
      locale: ['OK', 'Cancel', 'Select All'],  // all text that is used. don't change the index.
      up: false,                    // set true to open upside.
      showTitle: true,              // set to false to prevent title (tooltip) from appearing
      max: null,                    // Maximum number of options selected (when multiple)
      // eslint-disable-next-line no-unused-vars
      renderLi: (li, _originalOption) => li          // Custom <li> item renderer
    };

    const ret = this.each(function () {
      const selObj = this; // the original select object.
      if (this.sumo || !$(this).is('select')) return; //already initialized

      const settings = $.extend({}, defaultOptions, options, $(this).data());

      this.sumo = {
        E: $(selObj),   //the jquery object of original select element.
        is_multi: $(selObj).attr('multiple'),  //if its a multiple select
        select: '',
        caption: '',
        placeholder: '',
        optDiv: '',
        CaptionCont: '',
        ul: '',
        is_floating: false,
        is_opened: false,
        //backdrop: '',
        mob: false, // if to open device default select
        Pstate: [],
        lastUnselected: null,
        selectedCount: 0,

        createElems () {
          const O = this;
          const selectedOptions = O.E.find('option:checked');
          O.E.wrap('<div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">');
          selectedOptions.each((_, selectedOption) => { // Fix for IE resetting index to 0 when -1
            selectedOption.selected = true;
          });
          O.select = O.E.parent();
          O.caption = $('<span>');
          O.CaptionCont = $(`<p class="CaptionCont SelectBox ${O.E.attr('class')}" ><label><i></i></label></p>`)
            .attr('style', O.E.attr('style'))
            .prepend(O.caption);
          O.select.append(O.CaptionCont);

          // default turn off if no multiselect
          if (!O.is_multi) settings.okCancelInMulti = false;

          if (O.E.attr('disabled'))
            O.select.addClass('disabled').removeAttr('tabindex');

          //if output as csv and is a multiselect.
          if (settings.outputAsCSV && O.is_multi && O.E.attr('name')) {
            //create a hidden field to store csv value.
            O.select.append($('<input class="HEMANT123" type="hidden" />').attr('name', O.E.attr('name')).val(O.getSelStr()));

            // so it can not post the original select.
            O.E.removeAttr('name');
          }

          //break for mobile rendring.. if forceCustomRendering is false
          if (O.isMobile() && !settings.forceCustomRendering) {
            O.setNativeMobile();
            return;
          }

          // if there is a name attr in select add a class to container div
          if (O.E.attr('name')) O.select.addClass(`sumo_${O.E.attr('name').replace(/\[\]/, '')}`);

          //hide original select
          O.E.addClass('SumoUnder').attr('tabindex', '-1');

          //## Creating the list...
          O.optDiv = $(`<div class="optWrapper ${settings.up ? 'up' : ''}">`);

          //branch for floating list in low res devices.
          O.floatingList();

          //Creating the markup for the available options
          O.ul = $('<ul class="options">');
          O.optDiv.append(O.ul);

          // Select all functionality
          if (settings.selectAll && O.is_multi && !settings.max) O.SelAll();

          // search functionality
          if (settings.search) O.Search();

          O.ul.append(O.prepItems(O.E.children()));

          //if multiple then add the class multiple and add OK / CANCEL button
          if (O.is_multi) O.multiSelelect();

          O.select.append(O.optDiv);
          O._handleMax();
          O.basicEvents();
          O.selAllState();
        },

        prepItems (opts, d) {
          const lis = [], O = this;
          $(opts).each((i, opt) => {       // parsing options to li
            const $opt = $(opt);
            lis.push($opt.is('optgroup') ?
              $(`<li class="group ${opt.disabled ? 'disabled' : ''}"><label></label><ul></ul></li>`)
                .find('label')
                .text($opt.attr('label'))
                .end()
                .find('ul')
                .append(O.prepItems($opt.children(), opt.disabled))
                .end()
              :
              O.createLi($opt, d)
            );
          });
          return lis;
        },

        //## Creates a LI element from a given option and binds events to it
        //## returns the jquery instance of li (not inserted in dom)
        createLi (opt, d) {
          const O = this;

          if (!opt.attr('value')) opt.attr('value', opt.val());
          const li = $(`<li class="opt"><label>${opt.html()}</label></li>`);

          li.data('opt', opt);    // store a direct reference to option.
          opt.data('li', li);    // store a direct reference to list item.
          if (O.is_multi) li.prepend('<span><i></i></span>');

          if (opt[0].disabled || d)
            li.addClass('disabled');

          O.onOptClick(li);

          if (opt[0].selected) {
            li.addClass('selected');
            O.selectedCount++;
          }

          if (opt.attr('class'))
            li.addClass(opt.attr('class'));

          if (opt.attr('title'))
            li.attr('title', opt.attr('title'));

          return settings.renderLi(li, opt);
        },

        //## Returns the selected items as string in a Multiselect.
        getSelStr () {
          // get the pre selected items.
          const sopt = [];
          this.E.find('option:checked').each(function () { sopt.push($(this).val()); });
          return sopt.join(settings.csvSepChar);
        },

        //## THOSE OK/CANCEL BUTTONS ON MULTIPLE SELECT.
        multiSelelect () {
          const O = this;
          O.optDiv.addClass('multiple');
          O.okbtn = $('<p tabindex="0" class="btnOk"></p>').click(() => {
            //if combined change event is set.
            O._okbtn();
            O.hideOpts();
          });
          [O.okbtn[0].innerText] = settings.locale;

          O.cancelBtn = $('<p tabindex="0" class="btnCancel"></p>').click(() => {
            O._cnbtn();
            O.hideOpts();
          });
          [, O.cancelBtn[0].innerText] = settings.locale;

          const btns = O.okbtn.add(O.cancelBtn);
          O.optDiv.append($('<div class="MultiControls">').append(btns));

          // handling keyboard navigation on ok cancel buttons.
          btns.on('keydown.sumo', function (e) {
            const el = $(this);
            switch (e.which) {
              case 32: // space
              case 13: // enter
                el.trigger('click');
                break;

              case 9:  //tab
                if (el.hasClass('btnOk')) return;
                break;
              case 27: // esc
                O._cnbtn();
                O.hideOpts();
                return;
              default:
                break;
            }
            e.stopPropagation();
            e.preventDefault();
          });
        },

        _okbtn () {
          const O = this;
          let cg = 0;
          //if combined change event is set.
          if (settings.triggerChangeCombined) {
            //check for a change in the selection.
            if (O.E.find('option:checked').length !== O.Pstate.length) {
              cg = 1;
            }
            else {
              O.E.find('option').each((i, e) => {
                if (e.selected && O.Pstate.indexOf(i) < 0) cg = 1;
              });
            }

            if (cg) {
              O.callChange();
              O.setText();
            }
          }
        },
        _cnbtn () {
          const O = this;
          //remove all selections
          O.E.find('option:checked').each(function () { this.selected = false; });
          O.optDiv.find('li.selected').removeClass('selected');

          //restore selections from saved state.
          for (let i = 0; i < O.Pstate.length; i++) {
            O.E.find('option')[O.Pstate[i]].selected = true;
            O.ul.find('li.opt').eq(O.Pstate[i]).addClass('selected');
          }
          O.selAllState();
        },

        _handleMax () {
          // Disable options if max reached
          if (settings.max) {
            if (this.selectedCount >= +settings.max) {
              this.optDiv.find('li.opt').not('.hidden').each((ix, e) => {
                if (!$(e).hasClass('selected')) {
                  $(e).addClass('temporary-disabled disabled');
                }
              });
            } else {
              // Enable options back
              this.optDiv.find('li.opt').not('.hidden').each((ix, e) => {
                if ($(e).hasClass('temporary-disabled')) {
                  $(e).removeClass('temporary-disabled disabled');
                }
              });
            }
          }
        },

        SelAll () {
          const O = this;
          if (!O.is_multi) return;
          O.selAll = $('<p class="select-all"><span><i></i></span><label></label></p>');
          [, , O.selAll.find('label')[0].innerText] = settings.locale;
          O.optDiv.addClass('selall');
          O.selAll.on('click', () => {
            O.selAll.toggleClass('selected');
            O.toggSelAll(O.selAll.hasClass('selected'), 1);
            //O.selAllState();
          });

          O.optDiv.prepend(O.selAll);
        },

        // search module (can be removed if not required.)
        Search () {
          const O = this,
            cc = O.CaptionCont.addClass('search'),
            P = $('<p class="no-match">'),
            fn = (options.searchFn && typeof options.searchFn === 'function') ? options.searchFn : settings.searchFn;

          O.ftxt = $('<input type="text" class="search-txt" value="" autocomplete="off">')
            .on('click', (e) => {
              e.stopPropagation();
            });
          O.ftxt.placeholder = settings.searchText;
          cc.append(O.ftxt);
          O.optDiv.children('ul').after(P);

          O.ftxt.on('keyup.sumo', () => {
            const hid = O.optDiv.find('ul.options li.opt').each((ix, e) => {
              const el = $(e),
                {0: opt} = el.data('opt');
              opt.hidden = fn(el.text(), O.ftxt.val());
              el.toggleClass('hidden', opt.hidden);
            }).not('.hidden');

            // Hide opt-groups with no options matched
            O.optDiv[0].querySelectorAll('li.group').forEach(optGroup => {
              if (optGroup.querySelector('li:not(.hidden)')) {
                optGroup.classList.remove('hidden');
              } else {
                optGroup.classList.add('hidden');
              }
            });

            P.html(settings.noMatch.replace(/\{0\}/g, '<em></em>')).toggle(!hid.length);
            P.find('em').text(O.ftxt.val());
            O.selAllState();
          });
        },

        selAllState () {
          const O = this;
          if (settings.selectAll && O.is_multi) {
            let sc = 0, vc = 0;
            O.optDiv.find('li.opt').not('.hidden .disabled').each((ix, e) => {
              if ($(e).hasClass('selected')) sc++;
              vc++;
            });
            //select all checkbox state change.
            if (sc === vc) O.selAll.removeClass('partial').addClass('selected');
            else if (sc === 0) O.selAll.removeClass('selected partial');
            else O.selAll.addClass('partial');//.removeClass('selected');
          }
        },

        showOpts () {
          const O = this;
          if (O.E.attr('disabled')) return; // if select is disabled then retrun
          O.E.trigger('sumo:opening', O);
          O.is_opened = true;
          O.select.addClass('open').attr('aria-expanded', 'true');
          O.E.trigger('sumo:opened', O);

          if (O.ftxt) O.ftxt.focus();
          else O.select.focus();

          // hide options on click outside.
          $(document).on('click.sumo', (e) => {
            if (!O.select.is(e.target)                  // if the target of the click isn't the container...
              && O.select.has(e.target).length === 0) { // ... nor a descendant of the container
              if (!O.is_opened) return;
              O.hideOpts();
              if (settings.okCancelInMulti) {
                if (settings.isClickAwayOk)
                  O._okbtn();
                else
                  O._cnbtn();
              }
            }
          });

          if (O.is_floating) {
            let H = O.optDiv.children('ul').outerHeight() + 2;  // +2 is clear fix
            if (O.is_multi) H = H + +O.optDiv.css('padding-bottom');
            O.optDiv.css('height', H);
            $('body').addClass('sumoStopScroll');
          }

          O.setPstate();
        },

        //maintain state when ok/cancel buttons are available storing the indexes.
        setPstate () {
          const O = this;
          if (O.is_multi && (O.is_floating || settings.okCancelInMulti)) {
            O.Pstate = [];
            // assuming that find returns elements in tree order
            O.E.find('option').each((i, e) => { if (e.selected) O.Pstate.push(i); });
          }
        },

        callChange () {
          this.E.get().forEach(e => {
            dispatchEvent(e, 'change');
            dispatchEvent(e, 'click');
          });
        },

        hideOpts () {
          const O = this;
          if (O.is_opened) {
            O.E.trigger('sumo:closing', O);
            O.is_opened = false;
            O.select.removeClass('open').attr('aria-expanded', 'false').find('ul li.sel').removeClass('sel');
            O.E.trigger('sumo:closed', O);
            $(document).off('click.sumo');
            $('body').removeClass('sumoStopScroll');

            // clear the search
            if (settings.search) {
              O.ftxt.val('');
              O.ftxt.trigger('keyup.sumo');
            }
          }
        },
        setOnOpen () {
          const O = this;
          let li = O.optDiv.find('li.opt:not(.hidden)').eq(settings.search ? 0 : O.E[0].selectedIndex);
          if (li.hasClass('disabled')) {
            li = li.next(':not(disabled)');
            if (!li.length) return;
          }
          O.optDiv.find('li.sel').removeClass('sel');
          li.addClass('sel');
          O.showOpts();
        },
        nav (up) {
          const O = this;
          let c = null, sel = O.ul.find('li.opt.sel:not(.hidden)');
          const
            s = O.ul.find('li.opt:not(.disabled):not(.hidden)'),
            idx = s.index(sel);
          if (O.is_opened && sel.length) {
            if (up && idx > 0)
              c = s.eq(idx - 1);
            else if (!up && idx < s.length - 1 && idx > -1)
              c = s.eq(idx + 1);
            else return; // if no items before or after

            sel.removeClass('sel');
            sel = c.addClass('sel');

            // setting sel item to visible view.
            const { ul } = O,
              st = ul.scrollTop(),
              t = sel.position().top + st;
            if (t >= st + ul.height() - sel.outerHeight())
              ul.scrollTop(t - ul.height() + sel.outerHeight());
            if (t < st)
              ul.scrollTop(t);

          }
          else
            O.setOnOpen();
        },

        basicEvents () {
          const O = this;
          O.CaptionCont.click((evt) => {
            O.E.trigger('click');
            if (O.is_opened) O.hideOpts(); else O.showOpts();
            evt.stopPropagation();
          });

          O.select.on('keydown.sumo', (e) => {
            switch (e.which) {
              case 38: // up
                O.nav(true);
                break;

              case 40: // down
                O.nav(false);
                break;

              case 65: // shortcut ctrl + a to select all and ctrl + shift + a to unselect all.
                if (O.is_multi && !settings.max && e.ctrlKey) {
                  O.toggSelAll(!e.shiftKey, 1);
                  break;
                }
                else
                  return;

              case 32: // space
                if (settings.search && O.ftxt.is(e.target)) return;
                break;
              case 13: // enter
                if (O.is_opened)
                  O.optDiv.find('ul li.sel').trigger('click');
                else
                  O.setOnOpen();
                break;
              case 9:	 //tab
                if (!settings.okCancelInMulti)
                  O.hideOpts();
                return;
              case 27: // esc
                if (settings.okCancelInMulti) O._cnbtn();
                O.hideOpts();
                return;

              default:
                return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
          });

          $(window).on('resize.sumo', () => {
            O.floatingList();
          });
        },

        onOptClick (li) {
          const O = this;
          li.click(function () {
            const $li = $(this);
            if ($li.hasClass('disabled')) return;
            if (O.is_multi) {
              $li.toggleClass('selected');
              $li.data('opt')[0].selected = $li.hasClass('selected');
              if ($li.data('opt')[0].selected === false) {
                O.lastUnselected = $li.data('opt')[0].textContent;
                O.selectedCount--;
              } else {
                O.selectedCount++;
              }

              if (settings.max) {
                O._handleMax();
              }

              O.selAllState();
            }
            else {
              $li.parent().find('li.selected').removeClass('selected'); //if not multiselect then remove all selections from this list
              $li.toggleClass('selected');
              $li.data('opt')[0].selected = true;
              O.selectedCount = 1;
            }

            //branch for combined change event.
            if (!(O.is_multi && settings.triggerChangeCombined && (O.is_floating || settings.okCancelInMulti))) {
              O.setText();
              O.callChange();
            }

            if (!O.is_multi) O.hideOpts(); //if its not a multiselect then hide on single select.
          });
        },

        // fixed some variables that were not explicitly typed (michc)
        setText () {
          const O = this;
          O.placeholder = "";
          if (O.is_multi) {
            const sels = O.E.find(':checked').not(':disabled'); //selected options.

            if (settings.csvDispCount && sels.length > settings.csvDispCount) {
              if (sels.length === O.E.find('option').length && settings.captionFormatAllSelected) {
                O.placeholder = settings.captionFormatAllSelected.replace(/\{0\}/g, sels.length);
              }
              else {
                O.placeholder = settings.captionFormat.replace(/\{0\}/g, sels.length);
              }
            }
            else {
              O.placeholder = sels.toArray().map(selected => selected.innerText).join(', ');
            }
          }
          else {
            O.placeholder = O.E.find(':checked').not(':disabled').text();
          }

          let is_placeholder = false;

          if (!O.placeholder) {

            is_placeholder = true;

            O.placeholder = O.E.attr('placeholder');
            if (!O.placeholder)                  //if placeholder is there then set it
              O.placeholder = O.E.find('option:disabled:checked').text();
          }

          O.placeholder = O.placeholder ? (`${settings.prefix} ${O.placeholder}`) : settings.placeholder;

          //set display text
          O.caption.text(O.placeholder);
          if (settings.showTitle) O.CaptionCont.attr('title', O.placeholder);

          //set the hidden field if post as csv is true.
          const csvField = O.select.find('input.HEMANT123');
          if (csvField.length) csvField.val(O.getSelStr());

          //add class placeholder if its a placeholder text.
          if (is_placeholder) O.caption.addClass('placeholder'); else O.caption.removeClass('placeholder');
          return O.placeholder;
        },

        isMobile () {

          // Adapted from http://www.detectmobilebrowsers.com
          const ua = navigator.userAgent || navigator.vendor || window.opera;

          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          for (let i = 0; i < settings.nativeOnDevice.length; i++) if (ua.toString().toLowerCase().indexOf(settings.nativeOnDevice[i].toLowerCase()) > 0) return settings.nativeOnDevice[i];
          return false;
        },

        setNativeMobile () {
          const O = this;
          O.E.addClass('SelectClass');//.css('height', O.select.outerHeight());
          O.mob = true;
          O.E.change(() => {
            O.setText();
          });
        },

        floatingList () {
          const O = this;
          //called on init and also on resize.
          //O.is_floating = true if window width is < specified float width
          O.is_floating = $(window).width() <= settings.floatWidth;

          //set class isFloating
          O.optDiv.toggleClass('isFloating', O.is_floating);

          //remove height if not floating
          if (!O.is_floating) O.optDiv.css('height', '');

          //toggle class according to okCancelInMulti flag only when it is not floating
          O.optDiv.toggleClass('okCancelInMulti', settings.okCancelInMulti && !O.is_floating);
        },

        //HELPERS FOR OUTSIDERS
        // validates range of given item operations
        vRange (i) {
          const O = this;
          const opts = O.E.find('option');
          if (opts.length <= i || i < 0) throw new Error("index out of bounds");
          return O;
        },

        //toggles selection on c as boolean.
        toggSel (c, i) {
          const O = this;
          let opt = null;
          if (typeof (i) === "number") {
            O.vRange(i);
            opt = O.E.find('option')[i];
          }
          else {
            opt = O.E.find(`option[value="${i}"]`)[0] || 0;
          }
          if (!opt || opt.disabled)
            return;

          if (opt.selected !== c) {
            if ((settings.max && !opt.selected && O.selectedCount < settings.max) || opt.selected || (!settings.max && !opt.selected)) {
              opt.selected = c;
              if (!O.mob) $(opt).data('li').toggleClass('selected', c);

              O.callChange();
              O.setPstate();
              O.setText();
              O.selAllState();
            }
          }
        },

        //toggles disabled on c as boolean.
        toggDis (c, i) {
          const O = this.vRange(i);
          O.E.find('option')[i].disabled = c;
          if (c) O.E.find('option')[i].selected = false;
          if (!O.mob) O.optDiv.find('ul.options li.opt').eq(i).toggleClass('disabled', c).removeClass('selected');
          O.setText();
        },

        // toggle disable/enable on complete select control
        toggSumo (val) {
          const O = this;
          O.enabled = val;
          O.select.toggleClass('disabled', val);

          if (val) {
            O.E.attr('disabled', 'disabled');
            O.select.removeAttr('tabindex');
          }
          else {
            O.E.removeAttr('disabled');
            O.select.attr('tabindex', '0');
          }

          return O;
        },

        // toggles all option on c as boolean.
        // set direct=false/0 bypasses okCancelInMulti behaviour.
        toggSelAll (c, direct) {
          const O = this;
          const cloneOriginalEvents = $.extend(true, {}, $._data(O.E.get(0), "events")); // clone original select elements events
          O.E.off(); // unbind original select elements events because we do not want the following clicks to trigger change on it

          if (O.is_multi) {
            // Select all
            if (c) {
              O.E.find('option:not(:checked):not(:disabled):not(:hidden)').toArray().forEach(option => {
                if (!$(option).data('li').hasClass('hidden')) {
                  option.selected = true;
                  $(option).data('li').toggleClass('selected', true);
                }
              });
            } else {
              // Unselect all
              O.E.find('option:checked:not(:disabled):not(:hidden)').toArray().forEach(option => {
                if (!$(option).data('li').hasClass('hidden')) {
                  option.selected = false;
                  $(option).data('li').toggleClass('selected', false);
                }
              });
            }
          } else {
            if (!c) O.E[0].selectedIndex = -1;
            else console.warn('You called `SelectAll` on a non-multiple select');
          }

          // rebind original select elements events
          $.each(cloneOriginalEvents, (_, e) => {
            $.each(e, (__, ev) => {
              O.E.on(ev.type, ev.handler);
            });
          });

          O.callChange(); // call change on original select element

          if (!direct) {
            if (!O.mob && O.selAll) O.selAll.removeClass('partial').toggleClass('selected', !!c);
            O.setText();
            O.setPstate();
          }
        },

        /* outside accessibility options
          which can be accessed from the element instance.
         */
        reload () {
          const elm = this.unload();
          return $(elm).SumoSelect(settings);
        },

        unload () {
          const O = this;
          O.select.before(O.E);
          O.E.show();
          O.E[0].classList.remove('SumoUnder');

          if (settings.outputAsCSV && O.is_multi && O.select.find('input.HEMANT123').length) {
            O.E.attr('name', O.select.find('input.HEMANT123').attr('name')); // restore the name;
          }
          O.select.remove();
          delete selObj.sumo;
          O.E.trigger('sumo:unloaded', O);
          return selObj;
        },

        //## add a new option to select at a given index.
        add (val, txt, i, attr) {
          if (typeof val === "undefined") throw new Error("No value to add");

          const O = this;
          const opts = O.E.find('option');
          let 
            value = val,
            text = txt,
            index = i;
          if (typeof txt === "number") { // .add('xxx', 2) shorthand
            index = txt;
            text = val;
          } else if (typeof txt === "undefined") { // .add('xxx') shorthand
            text = val;
          }

          const opt = $("<option></option>").val(value).html(text);

          if (attr && typeof attr === "object") {
            $.each(attr, (j, v) => {
              opt.attr(j, v);
            });
          }

          if (opts.length < index) throw new Error("index out of bounds");

          if (typeof index === "undefined" || opts.length === index) { // add it to the last if given index is last no or no index provides.
            O.E.append(opt);
            if (!O.mob) O.ul.append(O.createLi(opt));
          }
          else {
            opts.eq(index).before(opt);
            if (!O.mob) O.ul.find('li.opt').eq(index).before(O.createLi(opt));
          }

          return selObj;
        },

        //## removes an item at a given index.
        remove (i) {
          const O = this.vRange(i);
          O.E.find('option').eq(i).remove();
          if (!O.mob) O.optDiv.find('ul.options li.opt').eq(i).remove();
          O.setText();
        },

        // removes all but the selected one
        removeAll () {
          const O = this;
          const optionList = O.E.find('option');

          for (let x = (optionList.length - 1); x >= 0; x--) {
            if (optionList[x].selected !== true) {
              O.remove(x);
            }
          }

        },


        find (val) {
          const O = this;
          const optionList = O.E.find('option');
          for (let x in optionList) {
            if (optionList[x].value === val) {
              return +x;
            }
          }

          return -1;

        },

        //## Select an item at a given index.
        selectItem (i) { this.toggSel(true, i); },

        //## UnSelect an iten at a given index.
        unSelectItem (i) { this.toggSel(false, i); },

        //## Select all items  of the select.
        selectAll () { this.toggSelAll(true); },

        //## UnSelect all items of the select.
        unSelectAll () { this.toggSelAll(false); },

        //## Disable an iten at a given index.
        disableItem (i) { this.toggDis(true, i); },

        //## Removes disabled an iten at a given index.
        enableItem (i) { this.toggDis(false, i); },

        //## New simple methods as getter and setter are not working fine in ie8-
        //## variable to check state of control if enabled or disabled.
        enabled: true,
        //## Enables the control
        enable () { return this.toggSumo(false); },

        //## Disables the control
        disable () { return this.toggSumo(true); },


        init () {
          const O = this;
          O.createElems();
          O.setText();
          O.E.trigger('sumo:initialized', O);
          return O;
        }

      };

      selObj.sumo.init();
    });

    return ret.length === 1 ? ret[0] : ret;
  };


});

function jBoxWrapper(j) {
  function h(t, i) {
    return this.options = {
      id: null,
      width: "auto",
      height: "auto",
      minWidth: null,
      minHeight: null,
      maxWidth: null,
      maxHeight: null,
      responsiveWidth: !0,
      responsiveHeight: !0,
      responsiveMinWidth: 100,
      responsiveMinHeight: 100,
      attach: null,
      trigger: "click",
      preventDefault: !1,
      content: null,
      getContent: null,
      title: null,
      getTitle: null,
      footer: null,
      isolateScroll: !0,
      ajax: {
        url: null,
        data: "",
        reload: !1,
        getURL: "data-url",
        getData: "data-ajax",
        setContent: !0,
        loadingClass: !0,
        spinner: !0,
        spinnerDelay: 300,
        spinnerReposition: !0
      },
      cancelAjaxOnClose: !0,
      target: null,
      position: {
        x: "center",
        y: "center"
      },
      outside: null,
      offset: 0,
      attributes: {
        x: "left",
        y: "top"
      },
      fixed: !1,
      adjustPosition: !0,
      adjustTracker: !1,
      adjustDistance: 5,
      reposition: !0,
      repositionOnOpen: !0,
      repositionOnContent: !0,
      holdPosition: !0,
      pointer: !1,
      pointTo: "target",
      fade: 180,
      animation: null,
      theme: "Default",
      addClass: null,
      overlay: !1,
      overlayClass: null,
      zIndex: 1e4,
      delayOpen: 0,
      delayClose: 0,
      closeOnEsc: !1,
      closeOnClick: !1,
      closeOnMouseleave: !1,
      closeButton: !1,
      appendTo: j("body"),
      createOnInit: !1,
      blockScroll: !1,
      blockScrollAdjust: !0,
      draggable: !1,
      dragOver: !0,
      autoClose: !1,
      delayOnHover: !1,
      showCountdown: !1,
      preloadAudio: !0,
      audio: null,
      volume: 100,
      onInit: null,
      onAttach: null,
      onPosition: null,
      onCreated: null,
      onOpen: null,
      onOpenComplete: null,
      onClose: null,
      onCloseComplete: null,
      onDragStart: null,
      onDragEnd: null
    }, this._pluginOptions = {
      Tooltip: {
        getContent: "title",
        trigger: "mouseenter",
        position: {
          x: "center",
          y: "top"
        },
        outside: "y",
        pointer: !0
      },
      Mouse: {
        responsiveWidth: !1,
        responsiveHeight: !1,
        adjustPosition: "flip",
        target: "mouse",
        trigger: "mouseenter",
        position: {
          x: "right",
          y: "bottom"
        },
        outside: "xy",
        offset: 5
      },
      Modal: {
        target: j(window),
        fixed: !0,
        blockScroll: !0,
        closeOnEsc: !0,
        closeOnClick: "overlay",
        closeButton: !0,
        overlay: !0,
        animation: "zoomIn"
      }
    }, this.options = j.extend(!0, this.options, this._pluginOptions[t] || h._pluginOptions[t], i), "string" == j.type(t) && (this.type = t), this.isTouchDevice = function () {
      var t = " -webkit- -moz- -o- -ms- ".split(" ");
      if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) return !0;
      var i, t = ["(", t.join("touch-enabled),("), "heartz", ")"].join("");
      return i = t, window.matchMedia(i).matches
    }(), this.isTouchDevice && "mouseenter" === this.options.trigger && !1 === this.options.closeOnClick && (this.options.closeOnClick = "body"), this._fireEvent = function (t, i) {
      this.options["_" + t] && this.options["_" + t].bind(this)(i), this.options[t] && this.options[t].bind(this)(i)
    }, null === this.options.id && (this.options.id = "jBox" + h._getUniqueID()), this.id = this.options.id, ("center" == this.options.position.x && "x" == this.options.outside || "center" == this.options.position.y && "y" == this.options.outside) && (this.options.outside = null), "target" != this.options.pointTo || this.options.outside && "xy" != this.options.outside || (this.options.pointer = !1), "object" != j.type(this.options.offset) ? this.options.offset = {
      x: this.options.offset,
      y: this.options.offset
    } : this.options.offset = j.extend({
      x: 0,
      y: 0
    }, this.options.offset), "object" != j.type(this.options.adjustDistance) ? this.options.adjustDistance = {
      top: this.options.adjustDistance,
      right: this.options.adjustDistance,
      bottom: this.options.adjustDistance,
      left: this.options.adjustDistance
    } : this.options.adjustDistance = j.extend({
      top: 5,
      left: 5,
      right: 5,
      bottom: 5
    }, this.options.adjustDistance), this.outside = !(!this.options.outside || "xy" == this.options.outside) && this.options.position[this.options.outside], this.align = this.outside || ("center" != this.options.position.y && "number" != j.type(this.options.position.y) ? this.options.position.x : "center" != this.options.position.x && "number" != j.type(this.options.position.x) ? this.options.position.y : this.options.attributes.x), h.zIndexMax = Math.max(h.zIndexMax || 0, "auto" === this.options.zIndex ? 1e4 : this.options.zIndex), "auto" === this.options.zIndex && (this.adjustZIndexOnOpen = !0, this.options.zIndex = h.zIndexMax += 2, this.trueModal = this.options.overlay), this._getOpp = function (t) {
      return {
        left: "right",
        right: "left",
        top: "bottom",
        bottom: "top",
        x: "y",
        y: "x"
      }[t]
    }, this._getXY = function (t) {
      return {
        left: "x",
        right: "x",
        top: "y",
        bottom: "y",
        center: "x"
      }[t]
    }, this._getTL = function (t) {
      return {
        left: "left",
        right: "left",
        top: "top",
        bottom: "top",
        center: "left",
        x: "left",
        y: "top"
      }[t]
    }, this._getInt = function (t, i) {
      return "auto" == t ? "auto" : t && "string" == j.type(t) && "%" == t.slice(-1) ? j(window)["height" == i ? "innerHeight" : "innerWidth"]() * parseInt(t.replace("%", "")) / 100 : t
    }, this._createSVG = function (t, i) {
      var o = document.createElementNS("http://www.w3.org/2000/svg", t);
      return j.each(i, function (t, i) {
        o.setAttribute(i[0], i[1] || "")
      }), o
    }, this._isolateScroll = function (e) {
      e && e.length && e.on("DOMMouseScroll.jBoxIsolateScroll mousewheel.jBoxIsolateScroll", function (t) {
        var i = t.wheelDelta || t.originalEvent && t.originalEvent.wheelDelta || -t.detail,
          o = 0 <= this.scrollTop + e.outerHeight() - this.scrollHeight,
          s = this.scrollTop <= 0;
        (i < 0 && o || 0 < i && s) && t.preventDefault()
      })
    }, this._setTitleWidth = function () {
      if (!this.titleContainer || "auto" == this.content[0].style.width && !this.content[0].style.maxWidth) return null;
      var t;
      "none" == this.wrapper.css("display") ? (this.wrapper.css("display", "block"), t = this.content.outerWidth(), this.wrapper.css("display", "none")) : t = this.content.outerWidth(), this.titleContainer.css({
        maxWidth: Math.max(t, parseInt(this.content[0].style.maxWidth)) || null
      })
    }, this._draggable = function () {
      if (!this.options.draggable) return !1;
      var t = "title" == this.options.draggable ? this.titleContainer : this.options.draggable instanceof j ? this.options.draggable : "string" == j.type(this.options.draggable) ? j(this.options.draggable) : this.wrapper;
      return !(!(t && t instanceof j && t.length) || t.data("jBox-draggable")) && (t.addClass("jBox-draggable").data("jBox-draggable", !0).on("touchstart mousedown", function (t) {
        var i, o, s, e, n, a;
        2 == t.button || j(t.target).hasClass("jBox-noDrag") || j(t.target).parents(".jBox-noDrag").length ? "touchstart" == t.type && (j(t.target).hasClass("jBox-closeButton") || j(t.target).parents(".jBox-closeButton").length) && this.close({
          ignoreDelay: !0
        }) : (o = "touchstart" == t.type && t.touches && t.touches[0] ? (i = t.touches[0].pageX, t.touches[0].pageY) : (i = t.pageX, t.pageY), this.draggingStartX = i, this.draggingStartY = o, this.options.dragOver && !this.trueModal && parseInt(this.wrapper.css("zIndex"), 10) <= h.zIndexMaxDragover && (h.zIndexMaxDragover += 1, this.wrapper.css("zIndex", h.zIndexMaxDragover)), s = this.wrapper.outerHeight(), e = this.wrapper.outerWidth(), n = this.wrapper.offset().top + s - o, a = this.wrapper.offset().left + e - i, j(document).on("touchmove.jBox-draggable-" + this.id + " mousemove.jBox-draggable-" + this.id, function (t) {
          var i, t = "touchmove" == t.type && t.touches && t.touches[0] ? (i = t.touches[0].pageX, t.touches[0].pageY) : (i = t.pageX, t.pageY);
          this.dragging || this.draggingStartX == i || this.draggingStartY == t || (this._fireEvent("onDragStart"), this.dragging = !0), this.wrapper.offset({
            top: t + n - s,
            left: i + a - e
          })
        }.bind(this)), t.preventDefault())
      }.bind(this)).on("touchend mouseup", function () {
        var t;
        j(document).off("touchmove.jBox-draggable-" + this.id + " mousemove.jBox-draggable-" + this.id), this.dragging && this._fireEvent("onDragEnd"), this.dragging = !1, "Modal" != this.type && "Confirm" != this.type || !this.options.holdPosition || (t = {
          x: (t = j("#" + this.id).offset()).left - j(document).scrollLeft(),
          y: t.top - j(document).scrollTop()
        }, this.position({
          position: t,
          offset: {
            x: 0,
            y: 0
          }
        }))
      }.bind(this)), this.trueModal || (h.zIndexMaxDragover = h.zIndexMaxDragover ? Math.max(h.zIndexMaxDragover, this.options.zIndex) : this.options.zIndex), this)
    }, this._create = function () {
      var t;
      this.wrapper || (this.wrapper = j("<div/>", {
        id: this.id,
        class: "jBox-wrapper" + (this.type ? " jBox-" + this.type : "") + (this.options.theme ? " jBox-" + this.options.theme : "") + (this.options.addClass ? " " + this.options.addClass : "")
      }).css({
        position: this.options.fixed ? "fixed" : "absolute",
        display: "none",
        opacity: 0,
        zIndex: this.options.zIndex
      }).data("jBox", this), this.options.closeOnMouseleave && this.wrapper.on("mouseleave", function (t) {
        !this.source || t.relatedTarget != this.source[0] && -1 === j.inArray(this.source[0], j(t.relatedTarget).parents("*")) && this.close()
      }.bind(this)), "box" == this.options.closeOnClick && this.wrapper.on("click tap", function () {
        this.close({
          ignoreDelay: !0
        })
      }.bind(this)), this.container = j('<div class="jBox-container"/>').appendTo(this.wrapper), this.content = j('<div class="jBox-content"/>').appendTo(this.container), this.options.footer && (this.footer = j('<div class="jBox-footer"/>').append(this.options.footer).appendTo(this.container)), this.options.isolateScroll && this._isolateScroll(this.content), this.options.closeButton && ((t = this._createSVG("svg", [
        ["viewBox", "0 0 24 24"]
      ])).appendChild(this._createSVG("path", [
        ["d", "M22.2,4c0,0,0.5,0.6,0,1.1l-6.8,6.8l6.9,6.9c0.5,0.5,0,1.1,0,1.1L20,22.3c0,0-0.6,0.5-1.1,0L12,15.4l-6.9,6.9c-0.5,0.5-1.1,0-1.1,0L1.7,20c0,0-0.5-0.6,0-1.1L8.6,12L1.7,5.1C1.2,4.6,1.7,4,1.7,4L4,1.7c0,0,0.6-0.5,1.1,0L12,8.5l6.8-6.8c0.5-0.5,1.1,0,1.1,0L22.2,4z"]
      ])), this.closeButton = j('<div class="jBox-closeButton jBox-noDrag"/>').on("click tap", function (t) {
        this.close({
          ignoreDelay: !0
        })
      }.bind(this)).append(t), "box" != this.options.closeButton && (!0 !== this.options.closeButton || this.options.overlay || this.options.title || this.options.getTitle) || (this.wrapper.addClass("jBox-closeButton-box"), this.closeButton.appendTo(this.container))), this.wrapper.appendTo(this.options.appendTo), this.wrapper.find(".jBox-closeButton").length && j.each(["top", "right", "bottom", "left"], function (t, i) {
        this.wrapper.find(".jBox-closeButton").css(i) && "auto" != this.wrapper.find(".jBox-closeButton").css(i) && (this.options.adjustDistance[i] = Math.max(this.options.adjustDistance[i], this.options.adjustDistance[i] + -1 * ((parseInt(this.wrapper.find(".jBox-closeButton").css(i)) || 0) + (parseInt(this.container.css("border-" + i + "-width")) || 0))))
      }.bind(this)), this.options.pointer && (this.pointer = {
        position: "target" != this.options.pointTo ? this.options.pointTo : this._getOpp(this.outside),
        xy: "target" != this.options.pointTo ? this._getXY(this.options.pointTo) : this._getXY(this.outside),
        align: "center",
        offset: 0
      }, this.pointer.element = j('<div class="jBox-pointer jBox-pointer-' + this.pointer.position + '"/>').appendTo(this.wrapper), this.pointer.dimensions = {
        x: this.pointer.element.outerWidth(),
        y: this.pointer.element.outerHeight()
      }, "string" == j.type(this.options.pointer) && ((t = this.options.pointer.split(":"))[0] && (this.pointer.align = t[0]), t[1] && (this.pointer.offset = parseInt(t[1]))), this.pointer.alignAttribute = "x" == this.pointer.xy ? "bottom" == this.pointer.align ? "bottom" : "top" : "right" == this.pointer.align ? "right" : "left", this.wrapper.css("padding-" + this.pointer.position, this.pointer.dimensions[this.pointer.xy]), this.pointer.element.css(this.pointer.alignAttribute, "center" == this.pointer.align ? "50%" : 0).css("margin-" + this.pointer.alignAttribute, this.pointer.offset), this.pointer.margin = {}, this.pointer.margin["margin-" + this.pointer.alignAttribute] = this.pointer.offset, "center" == this.pointer.align && this.pointer.element.css("transform", "translate(" + ("y" == this.pointer.xy ? -.5 * this.pointer.dimensions.x + "px" : 0) + ", " + ("x" == this.pointer.xy ? -.5 * this.pointer.dimensions.y + "px" : 0) + ")"), this.pointer.element.css("x" == this.pointer.xy ? "width" : "height", parseInt(this.pointer.dimensions[this.pointer.xy]) + parseInt(this.container.css("border-" + this.pointer.alignAttribute + "-width"))), this.wrapper.addClass("jBox-pointerPosition-" + this.pointer.position)), this.setContent(this.options.content, !0), this.setTitle(this.options.title, !0), this.options.draggable && this._draggable(), this._fireEvent("onCreated"))
    }, this.options.createOnInit && this._create(), this.options.attach && this.attach(), this._attachEvents = function () {
      this.options.delayOnHover && j("#" + this.id).on("mouseenter", function (t) {
        this.isHovered = !0
      }.bind(this)), this.options.delayOnHover && j("#" + this.id).on("mouseleave", function (t) {
        this.isHovered = !1
      }.bind(this)), (this.options.adjustPosition || this.options.reposition) && !this.fixed && this.outside && (this.options.adjustTracker && j(window).on("scroll.jBox-" + this.id, function (t) {
        this.position()
      }.bind(this)), (this.options.adjustPosition || this.options.reposition) && j(window).on("resize.jBox-" + this.id, function (t) {
        this.position()
      }.bind(this))), "mouse" == this.options.target && j("body").on("mousemove.jBox-" + this.id, function (t) {
        this.position({
          mouseTarget: {
            top: t.pageY,
            left: t.pageX
          }
        })
      }.bind(this))
    }, this._detachEvents = function () {
      this.options.closeOnEsc && j(document).off("keyup.jBox-" + this.id), !0 !== this.options.closeOnClick && "body" != this.options.closeOnClick || j(document).off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.options.adjustTracker && j(window).off("scroll.jBox-" + this.id), (this.options.adjustPosition || this.options.reposition) && j(window).off("resize.jBox-" + this.id), "mouse" == this.options.target && j("body").off("mousemove.jBox-" + this.id)
    }, this._showOverlay = function () {
      this.overlay || (this.overlay = j('<div id="' + this.id + '-overlay"/>').addClass("jBox-overlay" + (this.type ? " jBox-overlay-" + this.type : "")).css({
        display: "none",
        opacity: 0,
        zIndex: this.options.zIndex - 1
      }).appendTo(this.options.appendTo), this.options.overlayClass && this.overlay.addClass(this.options.overlayClass), "overlay" != this.options.closeButton && !0 !== this.options.closeButton || this.overlay.append(this.closeButton), "overlay" == this.options.closeOnClick && this.overlay.on("click tap", function () {
        this.close({
          ignoreDelay: !0
        })
      }.bind(this)), j("#" + this.id + "-overlay .jBox-closeButton").length && (this.options.adjustDistance.top = Math.max(j("#" + this.id + "-overlay .jBox-closeButton").outerHeight(), this.options.adjustDistance.top))), !0 === this.adjustZIndexOnOpen && this.overlay.css("zIndex", parseInt(this.wrapper.css("zIndex"), 10) - 1), "block" != this.overlay.css("display") && (this.options.fade ? this.overlay.stop() && this.overlay.animate({
        opacity: 1
      }, {
        queue: !1,
        duration: this.options.fade,
        start: function () {
          this.overlay.css({
            display: "block"
          })
        }.bind(this)
      }) : this.overlay.css({
        display: "block",
        opacity: 1
      }))
    }, this._hideOverlay = function () {
      this.overlay && (this.options.fade ? this.overlay.stop() && this.overlay.animate({
        opacity: 0
      }, {
        queue: !1,
        duration: this.options.fade,
        complete: function () {
          this.overlay.css({
            display: "none"
          })
        }.bind(this)
      }) : this.overlay.css({
        display: "none",
        opacity: 0
      }))
    }, this._exposeDimensions = function () {
      this.wrapper.css({
        top: -1e4,
        left: -1e4,
        right: "auto",
        bottom: "auto"
      });
      var t = {
        x: this.wrapper.outerWidth(),
        y: this.wrapper.outerHeight()
      };
      return this.wrapper.css({
        top: "auto",
        left: "auto"
      }), t
    }, this._generateAnimationCSS = function () {
      if ("object" != j.type(this.options.animation) && (this.options.animation = {
        pulse: {
          open: "pulse",
          close: "zoomOut"
        },
        zoomIn: {
          open: "zoomIn",
          close: "zoomIn"
        },
        zoomOut: {
          open: "zoomOut",
          close: "zoomOut"
        },
        move: {
          open: "move",
          close: "move"
        },
        slide: {
          open: "slide",
          close: "slide"
        },
        flip: {
          open: "flip",
          close: "flip"
        },
        tada: {
          open: "tada",
          close: "zoomOut"
        }
      }[this.options.animation]), !this.options.animation) return null;
      this.options.animation.open && (this.options.animation.open = this.options.animation.open.split(":")), this.options.animation.close && (this.options.animation.close = this.options.animation.close.split(":")), this.options.animation.openDirection = this.options.animation.open[1] || null, this.options.animation.closeDirection = this.options.animation.close[1] || null, this.options.animation.open && (this.options.animation.open = this.options.animation.open[0]), this.options.animation.close && (this.options.animation.close = this.options.animation.close[0]), this.options.animation.open && (this.options.animation.open += "Open"), this.options.animation.close && (this.options.animation.close += "Close");
      var a = {
        pulse: {
          duration: 350,
          css: [
            ["0%", "scale(1)"],
            ["50%", "scale(1.1)"],
            ["100%", "scale(1)"]
          ]
        },
        zoomInOpen: {
          duration: this.options.fade || 180,
          css: [
            ["0%", "scale(0.9)"],
            ["100%", "scale(1)"]
          ]
        },
        zoomInClose: {
          duration: this.options.fade || 180,
          css: [
            ["0%", "scale(1)"],
            ["100%", "scale(0.9)"]
          ]
        },
        zoomOutOpen: {
          duration: this.options.fade || 180,
          css: [
            ["0%", "scale(1.1)"],
            ["100%", "scale(1)"]
          ]
        },
        zoomOutClose: {
          duration: this.options.fade || 180,
          css: [
            ["0%", "scale(1)"],
            ["100%", "scale(1.1)"]
          ]
        },
        moveOpen: {
          duration: this.options.fade || 180,
          positions: {
            top: {
              "0%": -12
            },
            right: {
              "0%": 12
            },
            bottom: {
              "0%": 12
            },
            left: {
              "0%": -12
            }
          },
          css: [
            ["0%", "translate%XY(%Vpx)"],
            ["100%", "translate%XY(0px)"]
          ]
        },
        moveClose: {
          duration: this.options.fade || 180,
          timing: "ease-in",
          positions: {
            top: {
              "100%": -12
            },
            right: {
              "100%": 12
            },
            bottom: {
              "100%": 12
            },
            left: {
              "100%": -12
            }
          },
          css: [
            ["0%", "translate%XY(0px)"],
            ["100%", "translate%XY(%Vpx)"]
          ]
        },
        slideOpen: {
          duration: 400,
          positions: {
            top: {
              "0%": -400
            },
            right: {
              "0%": 400
            },
            bottom: {
              "0%": 400
            },
            left: {
              "0%": -400
            }
          },
          css: [
            ["0%", "translate%XY(%Vpx)"],
            ["100%", "translate%XY(0px)"]
          ]
        },
        slideClose: {
          duration: 400,
          timing: "ease-in",
          positions: {
            top: {
              "100%": -400
            },
            right: {
              "100%": 400
            },
            bottom: {
              "100%": 400
            },
            left: {
              "100%": -400
            }
          },
          css: [
            ["0%", "translate%XY(0px)"],
            ["100%", "translate%XY(%Vpx)"]
          ]
        },
        flipOpen: {
          duration: 600,
          css: [
            ["0%", "perspective(400px) rotateX(90deg)"],
            ["40%", "perspective(400px) rotateX(-15deg)"],
            ["70%", "perspective(400px) rotateX(15deg)"],
            ["100%", "perspective(400px) rotateX(0deg)"]
          ]
        },
        flipClose: {
          duration: this.options.fade || 300,
          css: [
            ["0%", "perspective(400px) rotateX(0deg)"],
            ["100%", "perspective(400px) rotateX(90deg)"]
          ]
        },
        tada: {
          duration: 800,
          css: [
            ["0%", "scale(1)"],
            ["10%, 20%", "scale(0.9) rotate(-3deg)"],
            ["30%, 50%, 70%, 90%", "scale(1.1) rotate(3deg)"],
            ["40%, 60%, 80%", "scale(1.1) rotate(-3deg)"],
            ["100%", "scale(1) rotate(0)"]
          ]
        }
      };
      j.each(["pulse", "tada"], function (t, i) {
        a[i + "Open"] = a[i + "Close"] = a[i]
      });
      var s = function (s, e) {
        var n = "@keyframes jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + " {";
        return j.each(a[this.options.animation[s]].css, function (t, i) {
          var o = e ? i[1].replace("%XY", this._getXY(e).toUpperCase()) : i[1];
          a[this.options.animation[s]].positions && (o = o.replace("%V", a[this.options.animation[s]].positions[e][i[0]])), n += i[0] + " {transform:" + o + ";}"
        }.bind(this)), n += "}", n += ".jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + " {", n += "animation-duration: " + a[this.options.animation[s]].duration + "ms;", n += "animation-name: jBox-" + this.id + "-animation-" + this.options.animation[s] + "-" + s + (e ? "-" + e : "") + ";", n += a[this.options.animation[s]].timing ? "animation-timing-function: " + a[this.options.animation[s]].timing + ";" : "", n += "}"
      }.bind(this);
      this._animationCSS = "", j.each(["open", "close"], function (t, o) {
        if (!this.options.animation[o] || !a[this.options.animation[o]] || "close" == o && !this.options.fade) return "";
        a[this.options.animation[o]].positions ? j.each(["top", "right", "bottom", "left"], function (t, i) {
          this._animationCSS += s(o, i)
        }.bind(this)) : this._animationCSS += s(o)
      }.bind(this))
    }, this.options.animation && this._generateAnimationCSS(), this._blockBodyClick = function () {
      this.blockBodyClick = !0, setTimeout(function () {
        this.blockBodyClick = !1
      }.bind(this), 10)
    }, this._animate = function (t) {
      if (t = t || (this.isOpen ? "open" : "close"), !this.options.fade && "close" == t) return null;
      var i = this.options.animation[t + "Direction"] || ("center" != this.align ? this.align : this.options.attributes.x);
      this.flipped && this._getXY(i) == this._getXY(this.align) && (i = this._getOpp(i));
      var o = "jBox-" + this.id + "-animation-" + this.options.animation[t] + "-" + t + " jBox-" + this.id + "-animation-" + this.options.animation[t] + "-" + t + "-" + i;
      this.wrapper.addClass(o);
      i = 1e3 * parseFloat(this.wrapper.css("animation-duration"));
      "close" == t && (i = Math.min(i, this.options.fade)), setTimeout(function () {
        this.wrapper && this.wrapper.removeClass(o)
      }.bind(this), i)
    }, this._abortAnimation = function () {
      var t = this.wrapper.attr("class").split(" ").filter(function (t) {
        return 0 !== t.lastIndexOf("jBox-" + this.id + "-animation", 0)
      }.bind(this));
      this.wrapper.attr("class", t.join(" "))
    }, (this.options.responsiveWidth || this.options.responsiveHeight) && j(window).on("resize.responsivejBox-" + this.id, function (t) {
      this.isOpen && this.position()
    }.bind(this)), "string" === j.type(this.options.preloadAudio) && (this.options.preloadAudio = [this.options.preloadAudio]), "string" === j.type(this.options.audio) && (this.options.audio = {
      open: this.options.audio
    }), "number" === j.type(this.options.volume) && (this.options.volume = {
      open: this.options.volume,
      close: this.options.volume
    }), !0 === this.options.preloadAudio && this.options.audio && (this.options.preloadAudio = [], j.each(this.options.audio, function (t, i) {
      this.options.preloadAudio.push(i + ".mp3"), this.options.preloadAudio.push(i + ".ogg")
    }.bind(this))), this.options.preloadAudio.length && j.each(this.options.preloadAudio, function (t, i) {
      var o = new Audio;
      o.src = i, o.preload = "auto"
    }), this._fireEvent("onInit"), this
  }
  var t, i;
  return h.prototype.attach = function (t, s) {
    return t = t || this.options.attach, "string" == j.type(t) && (t = j(t)), s = s || this.options.trigger, t && t.length && j.each(t, function (t, o) {
      (o = j(o)).data("jBox-attached-" + this.id) || ("title" == this.options.getContent && null != o.attr("title") && o.data("jBox-getContent", o.attr("title")).removeAttr("title"), this.attachedElements || (this.attachedElements = []), this.attachedElements.push(o[0]), o.on(s + ".jBox-attach-" + this.id, function (t) {
        var i;
        this.timer && clearTimeout(this.timer), "mouseenter" == s && this.isOpen && this.source[0] == o[0] || (this.isOpen && this.source && this.source[0] != o[0] && (i = !0), this.source = o, this.options.target || (this.target = o), "click" == s && this.options.preventDefault && t.preventDefault(), this["click" != s || i ? "open" : "toggle"]())
      }.bind(this)), "mouseenter" == this.options.trigger && o.on("mouseleave", function (t) {
        if (!this.wrapper) return null;
        this.options.closeOnMouseleave && (t.relatedTarget == this.wrapper[0] || j(t.relatedTarget).parents("#" + this.id).length) || this.close()
      }.bind(this)), o.data("jBox-attached-" + this.id, s), this._fireEvent("onAttach", o))
    }.bind(this)), this
  }, h.prototype.detach = function (t) {
    return (t = t || (this.attachedElements || [])) && t.length && j.each(t, function (t, i) {
      (i = j(i)).data("jBox-attached-" + this.id) && (i.off(i.data("jBox-attached-" + this.id) + ".jBox-attach-" + this.id), i.data("jBox-attached-" + this.id, null)), this.attachedElements = j.grep(this.attachedElements, function (t) {
        return t != i[0]
      })
    }.bind(this)), this
  }, h.prototype.setTitle = function (t, i) {
    if (null == t || null == t) return this;
    this.wrapper || this._create();
    var o = this.wrapper.outerHeight(),
      s = this.wrapper.outerWidth();
    return this.title || (this.titleContainer = j('<div class="jBox-title"/>'), this.title = j("<div/>").appendTo(this.titleContainer), "title" != this.options.closeButton && (!0 !== this.options.closeButton || this.options.overlay) || (this.wrapper.addClass("jBox-closeButton-title"), this.closeButton.appendTo(this.titleContainer)), this.titleContainer.insertBefore(this.content), this._setTitleWidth()), this.wrapper[t ? "addClass" : "removeClass"]("jBox-hasTitle"), this.title.html(t), s != this.wrapper.outerWidth() && this._setTitleWidth(), this.options.draggable && this._draggable(), i || !this.options.repositionOnContent || o == this.wrapper.outerHeight() && s == this.wrapper.outerWidth() || this.position(), this
  }, h.prototype.setContent = function (t, i) {
    if (null == t || null == t) return this;
    this.wrapper || this._create();
    var o = this.wrapper.outerHeight(),
      s = this.wrapper.outerWidth();
    switch (this.content.children("[data-jbox-content-appended]").appendTo("body").css({
      display: "none"
    }), j.type(t)) {
      case "string":
        this.content.html(t);
        break;
      case "object":
        t && (t instanceof j || t.constructor.prototype.jquery) ? (this.content.html(""), t.attr("data-jbox-content-appended", 1).appendTo(this.content).css({
          display: "block"
        })) : this.content.html(JSON.stringify(t))
    }
    return s != this.wrapper.outerWidth() && this._setTitleWidth(), this.options.draggable && this._draggable(), i || !this.options.repositionOnContent || o == this.wrapper.outerHeight() && s == this.wrapper.outerWidth() || this.position(), this
  }, h.prototype.setDimensions = function (t, i, o) {
    this.wrapper || this._create(), this.content.css(t, this._getInt(i = null == i ? "auto" : i)), "width" == t && this._setTitleWidth(), this.options[t] = i, null != o && !o || this.position()
  }, h.prototype.setWidth = function (t, i) {
    this.setDimensions("width", t, i)
  }, h.prototype.setHeight = function (t, i) {
    this.setDimensions("height", t, i)
  }, h.prototype.position = function (o) {
    if (o = j.extend(!0, this.options, o = o || {}), this.target = o.target || this.target || j(window), this.target instanceof j || "mouse" == this.target || (this.target = j(this.target)), !this.target.length) return this;
    this.content.css({
      width: this._getInt(o.width, "width"),
      height: this._getInt(o.height, "height"),
      minWidth: this._getInt(o.minWidth, "width"),
      minHeight: this._getInt(o.minHeight, "height"),
      maxWidth: this._getInt(o.maxWidth, "width"),
      maxHeight: this._getInt(o.maxHeight, "height")
    }), this._setTitleWidth();
    var s = this._exposeDimensions();
    "mouse" == this.target || this.target.data("jBox-" + this.id + "-fixed") || this.target.data("jBox-" + this.id + "-fixed", this.target[0] != j(window)[0] && ("fixed" == this.target.css("position") || 0 < this.target.parents().filter(function () {
      return "fixed" == j(this).css("position")
    }).length) ? "fixed" : "static");
    var t = {
      x: j(window).outerWidth(),
      y: j(window).outerHeight(),
      top: o.fixed && this.target.data("jBox-" + this.id + "-fixed") ? 0 : j(window).scrollTop(),
      left: o.fixed && this.target.data("jBox-" + this.id + "-fixed") ? 0 : j(window).scrollLeft()
    };
    t.bottom = t.top + t.y, t.right = t.left + t.x;
    try {
      var i = this.target.offset()
    } catch (t) {
      i = {
        top: 0,
        left: 0
      }
    }
    "mouse" != this.target && "fixed" == this.target.data("jBox-" + this.id + "-fixed") && o.fixed && (i.top = i.top - j(window).scrollTop(), i.left = i.left - j(window).scrollLeft());
    var e = {
      x: "mouse" == this.target ? 12 : this.target.outerWidth(),
      y: "mouse" == this.target ? 20 : this.target.outerHeight(),
      top: "mouse" == this.target && o.mouseTarget ? o.mouseTarget.top : i ? i.top : 0,
      left: "mouse" == this.target && o.mouseTarget ? o.mouseTarget.left : i ? i.left : 0
    },
      n = o.outside && !("center" == o.position.x && "center" == o.position.y),
      a = {
        x: t.x - o.adjustDistance.left - o.adjustDistance.right,
        y: t.y - o.adjustDistance.top - o.adjustDistance.bottom,
        left: n ? e.left - j(window).scrollLeft() - o.adjustDistance.left : 0,
        right: n ? t.x - e.left + j(window).scrollLeft() - e.x - o.adjustDistance.right : 0,
        top: n ? e.top - j(window).scrollTop() - this.options.adjustDistance.top : 0,
        bottom: n ? t.y - e.top + j(window).scrollTop() - e.y - o.adjustDistance.bottom : 0
      },
      h = {
        x: "x" != o.outside && "xy" != o.outside || "number" == j.type(o.position.x) ? null : o.position.x,
        y: "y" != o.outside && "xy" != o.outside || "number" == j.type(o.position.y) ? null : o.position.y
      },
      r = {
        x: !1,
        y: !1
      };
    h.x && s.x > a[h.x] && a[this._getOpp(h.x)] > a[h.x] && (h.x = this._getOpp(h.x)) && (r.x = !0), h.y && s.y > a[h.y] && a[this._getOpp(h.y)] > a[h.y] && (h.y = this._getOpp(h.y)) && (r.y = !0), (o.responsiveWidth || o.responsiveHeight) && (m = function () {
      var t;
      o.responsiveWidth && s.x > a[h.x || "x"] && (t = a[h.x || "x"] - (this.pointer && n && "x" == o.outside ? this.pointer.dimensions.x : 0) - parseInt(this.container.css("border-left-width")) - parseInt(this.container.css("border-right-width")), this.content.css({
        width: t > this.options.responsiveMinWidth ? t : null,
        minWidth: t < parseInt(this.content.css("minWidth")) ? 0 : null
      }), this._setTitleWidth()), s = this._exposeDimensions()
    }.bind(this), o.responsiveWidth && m(), o.responsiveWidth && !r.y && h.y && s.y > a[h.y] && a[this._getOpp(h.y)] > a[h.y] && (h.y = this._getOpp(h.y)) && (r.y = !0), f = function () {
      var t;
      o.responsiveHeight && s.y > a[h.y || "y"] && (t = function () {
        return this.titleContainer || this.footer ? ("none" == this.wrapper.css("display") ? (this.wrapper.css("display", "block"), t = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0), this.wrapper.css("display", "none")) : t = (this.titleContainer ? this.titleContainer.outerHeight() : 0) + (this.footer ? this.footer.outerHeight() : 0), t || 0) : 0;
        var t
      }.bind(this), t = a[h.y || "y"] - (this.pointer && n && "y" == o.outside ? this.pointer.dimensions.y : 0) - t() - parseInt(this.container.css("border-top-width")) - parseInt(this.container.css("border-bottom-width")), this.content.css({
        height: t > this.options.responsiveMinHeight ? t : null
      }), this._setTitleWidth()), s = this._exposeDimensions()
    }.bind(this), o.responsiveHeight && f(), o.responsiveHeight && !r.x && h.x && s.x > a[h.x] && a[this._getOpp(h.x)] > a[h.x] && (h.x = this._getOpp(h.x)) && (r.x = !0), o.adjustPosition && "move" != o.adjustPosition && (r.x && m(), r.y && f()));
    var p = {},
      l = function (t) {
        if ("number" != j.type(o.position[t])) {
          var i = o.attributes[t] = "x" == t ? "left" : "top";
          if (p[i] = e[i], "center" == o.position[t]) return p[i] += Math.ceil((e[t] - s[t]) / 2), void ("mouse" != this.target && this.target[0] && this.target[0] == j(window)[0] && (p[i] += .5 * (o.adjustDistance[i] - o.adjustDistance[this._getOpp(i)])));
          i != o.position[t] && (p[i] += e[t] - s[t]), o.outside != t && "xy" != o.outside || (p[i] += s[t] * (i != o.position[t] ? 1 : -1))
        } else p[o.attributes[t]] = o.position[t]
      }.bind(this);
    if (l("x"), l("y"), this.pointer && "target" == o.pointTo && "number" != j.type(o.position.x) && "number" != j.type(o.position.y) && (x = 0, "center" === this.pointer.align ? "center" != o.position[this._getOpp(o.outside)] && (x += s[this._getOpp(o.outside)] / 2) : "center" === o.position[this._getOpp(o.outside)] ? x += (s[this._getOpp(o.outside)] / 2 - this.pointer.dimensions[this._getOpp(o.outside)] / 2) * (this.pointer.align == this._getTL(this.pointer.align) ? 1 : -1) : x += this.pointer.align != o.position[this._getOpp(o.outside)] ? s[this._getOpp(o.outside)] * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1) + this.pointer.dimensions[this._getOpp(o.outside)] / 2 * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? -1 : 1) : this.pointer.dimensions[this._getOpp(o.outside)] / 2 * (-1 !== j.inArray(this.pointer.align, ["top", "left"]) ? 1 : -1), x *= o.position[this._getOpp(o.outside)] == this.pointer.alignAttribute ? -1 : 1, x += this.pointer.offset * (this.pointer.align == this._getOpp(this._getTL(this.pointer.align)) ? 1 : -1), p[this._getTL(this._getOpp(this.pointer.xy))] += x), p[o.attributes.x] += o.offset.x, p[o.attributes.y] += o.offset.y, this.wrapper.css(p), o.adjustPosition) {
      this.positionAdjusted && (this.pointer && this.wrapper.css("padding", 0).css("padding-" + this._getOpp(this.outside), this.pointer.dimensions[this._getXY(this.outside)]).removeClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).addClass("jBox-pointerPosition-" + this.pointer.position), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + this._getOpp(this.outside)).css(this.pointer.margin), this.positionAdjusted = !1, this.flipped = !1);
      var d = t.top > p.top - (o.adjustDistance.top || 0),
        c = t.right < p.left + s.x + (o.adjustDistance.right || 0),
        u = t.bottom < p.top + s.y + (o.adjustDistance.bottom || 0),
        g = t.left > p.left - (o.adjustDistance.left || 0),
        i = g ? "left" : c ? "right" : null,
        m = d ? "top" : u ? "bottom" : null;
      if (i || m) {
        if (("Modal" == this.type || "Confirm" == this.type) && "number" == j.type(this.options.position.x) && "number" == j.type(this.options.position.y)) {
          var f = 0,
            x = 0;
          return this.options.holdPosition && (g ? f = t.left - (p.left - (o.adjustDistance.left || 0)) : c && (f = t.right - (p.left + s.x + (o.adjustDistance.right || 0))), d ? x = t.top - (p.top - (o.adjustDistance.top || 0)) : u && (x = t.bottom - (p.top + s.y + (o.adjustDistance.bottom || 0))), this.options.position.x = Math.max(t.top, this.options.position.x + f), this.options.position.y = Math.max(t.left, this.options.position.y + x), l("x"), l("y"), this.wrapper.css(p)), this._fireEvent("onPosition"), this
        } !0 !== o.adjustPosition && "flip" !== o.adjustPosition || (y = function (t) {
          this.wrapper.css(this._getTL(t), p[this._getTL(t)] + (s[this._getXY(t)] + o.offset[this._getXY(t)] * ("top" == t || "left" == t ? -2 : 2) + e[this._getXY(t)]) * ("top" == t || "left" == t ? 1 : -1)), this.pointer && this.wrapper.removeClass("jBox-pointerPosition-" + this.pointer.position).addClass("jBox-pointerPosition-" + this._getOpp(this.pointer.position)).css("padding", 0).css("padding-" + t, this.pointer.dimensions[this._getXY(t)]), this.pointer && this.pointer.element.attr("class", "jBox-pointer jBox-pointer-" + t), this.positionAdjusted = !0, this.flipped = !0
        }.bind(this), r.x && y(this.options.position.x), r.y && y(this.options.position.y));
        var y = "x" == this._getXY(this.outside) ? m : i;
        this.pointer && "target" == o.pointTo && "flip" != o.adjustPosition && this._getXY(y) == this._getOpp(this._getXY(this.outside)) && (m = "center" == this.pointer.align ? s[this._getXY(y)] / 2 - this.pointer.dimensions[this._getOpp(this.pointer.xy)] / 2 - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) * (y != this._getTL(y) ? -1 : 1) : y == this.pointer.alignAttribute ? parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) : s[this._getXY(y)] - parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - this.pointer.dimensions[this._getXY(y)], i = y == this._getTL(y) ? t[this._getTL(y)] - p[this._getTL(y)] + o.adjustDistance[y] : -1 * (t[this._getOpp(this._getTL(y))] - p[this._getTL(y)] - o.adjustDistance[y] - s[this._getXY(y)]), y == this._getOpp(this._getTL(y)) && p[this._getTL(y)] - i < t[this._getTL(y)] + o.adjustDistance[this._getTL(y)] && (i -= t[this._getTL(y)] + o.adjustDistance[this._getTL(y)] - (p[this._getTL(y)] - i)), (i = Math.min(i, m)) <= m && 0 < i && (this.pointer.element.css("margin-" + this.pointer.alignAttribute, parseInt(this.pointer.element.css("margin-" + this.pointer.alignAttribute)) - i * (y != this.pointer.alignAttribute ? -1 : 1)), this.wrapper.css(this._getTL(y), p[this._getTL(y)] + i * (y != this._getTL(y) ? -1 : 1)), this.positionAdjusted = !0))
      }
    }
    return this._fireEvent("onPosition"), this
  }, (h.prototype.unscroll = function (t) {
    if (this.set = function (t, i) {
      window.unscrollStore || (window.unscrollStore = {}), window.unscrollStore[t] = i
    }, this.get = function (t) {
      return window.unscrollStore ? window.unscrollStore[t] : null
    }, this.getScrollbarWidth = function () {
      if (this.get("scrollbarWidth")) return this.get("scrollbarWidth") + "px";
      var t = document.createElement("div");
      t.style.width = "100px", t.style.height = "100px", t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-10000", document.body.appendChild(t);
      var i = t.offsetWidth - t.clientWidth;
      return document.body.removeChild(t), this.set("scrollbarWidth", i), i + "px"
    }, this.getElementsToAdjust = function (o) {
      (o = "string" == typeof (o = o || []) ? [
        [o, "padding-right"]
      ] : o).forEach(function (t, i) {
        "string" == typeof t && (o[i] = [t, "padding-right"])
      });
      for (var t = !1, i = 0; i < o.length; i++) - 1 !== o[i][0].indexOf("body") && (t = !0);
      return !1 === t && o.push(["body", "padding-right"]), o
    }, this.pageHasScrollbar = function () {
      return this.getScrollbarWidth() && document.body.offsetHeight > window.innerHeight
    }, this.pageHasScrollbar()) {
      t = this.getElementsToAdjust(t);
      for (var i = 0; i < t.length; i++)
        for (var o = document.querySelectorAll(t[i][0]), s = 0; s < o.length; s++) {
          if (o[s].getAttribute("data-unscroll")) return;
          var e = t[i][1],
            n = window.getComputedStyle(o[s]).getPropertyValue(e);
          o[s].setAttribute("data-unscroll", e), o[s].style[e] = "calc(" + (n = n || "0px") + " " + ("padding-right" == e || "right" == e ? "+" : "-") + " " + this.getScrollbarWidth() + ")"
        }
    }
    var a, h;
    document.getElementById("unscroll-class-name") || (a = document.head || document.getElementsByTagName("head")[0], (h = document.createElement("style")).type = "text/css", h.setAttribute("id", "unscroll-class-name"), h.appendChild(document.createTextNode(".unscrollable { overflow: hidden !important; }")), a.appendChild(h)), document.body.classList.add("unscrollable")
  }).reset = function () {
    for (var t = document.querySelectorAll("[data-unscroll]"), i = 0; i < t.length; i++) {
      var o = t[i].getAttribute("data-unscroll");
      t[i].style[o] = null, t[i].removeAttribute("data-unscroll")
    }
    document.body.classList.remove("unscrollable")
  }, h.prototype.open = function (t) {
    if (t = t || {}, this.isDestroyed) return this;
    if (this.wrapper || this._create(), this._styles || (this._styles = j("<style/>").append(this._animationCSS).appendTo(j("head"))), this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
    this.options.closeOnEsc && j(document).on("keyup.jBox-" + this.id, function (t) {
      27 == t.keyCode && this.close({
        ignoreDelay: !0
      })
    }.bind(this)), !0 !== this.options.closeOnClick && "body" !== this.options.closeOnClick || (j("body").on("click.jBox-" + this.id + " tap.jBox-" + this.id, function (t) {
      this.blockBodyClick || "body" == this.options.closeOnClick && (t.target == this.wrapper[0] || this.wrapper.has(t.target).length) || this.close({
        ignoreDelay: !0
      })
    }.bind(this)), this.isTouchDevice && j("body > *").on("click.jBox-" + this.id + " tap.jBox-" + this.id, function () {
      return !0
    }));
    var i = function () {
      !0 === this.adjustZIndexOnOpen && (h.zIndexMax = Math.max(parseInt(this.wrapper.css("zIndex"), 10), this.options.zIndex, h.zIndexMax || 0, h.zIndexMaxDragover || 0) + 2, this.wrapper.css("zIndex", h.zIndexMax), this.options.zIndex = h.zIndexMax), this.source && this.options.getTitle && this.source.attr(this.options.getTitle) && this.setTitle(this.source.attr(this.options.getTitle), !0), this.source && this.options.getContent && (this.source.data("jBox-getContent") ? this.setContent(this.source.data("jBox-getContent"), !0) : this.source.attr(this.options.getContent) ? this.setContent(this.source.attr(this.options.getContent), !0) : "html" == this.options.getContent && this.setContent(this.source.html(), !0)), this._fireEvent("onOpen"), (this.options.ajax && (this.options.ajax.url || this.source && this.source.attr(this.options.ajax.getURL)) && (!this.ajaxLoaded || this.options.ajax.reload) || t.ajax && (t.ajax.url || t.ajax.data)) && ("strict" == this.options.ajax.reload || !this.source || !this.source.data("jBox-ajax-data") || t.ajax && (t.ajax.url || t.ajax.data) ? this.ajax(t.ajax || null, !0) : this.setContent(this.source.data("jBox-ajax-data"))), this.positionedOnOpen && !this.options.repositionOnOpen || !this.position(t) || (this.positionedOnOpen = !0), this.isClosing && this._abortAnimation(), this.isOpen || (this.isOpen = !0, this.options.autoClose && (this.options.delayClose = this.options.autoClose) && this.close(), this._attachEvents(), this.options.blockScroll && (this.options.blockScrollAdjust ? h.blockScrollScopes ? h.blockScrollScopes++ : (h.blockScrollScopes = 1, this.unscroll(Array.isArray(this.options.blockScrollAdjust) || "string" == typeof this.options.blockScrollAdjust ? this.options.blockScrollAdjust : null)) : j("body").addClass("jBox-blockScroll-" + this.id)), this.options.overlay && (this._showOverlay(), this.position()), this.options.animation && !this.isClosing && this._animate("open"), this.options.audio && this.options.audio.open && this.audio(this.options.audio.open, this.options.volume.open), this.options.fade ? this.wrapper.stop().animate({
        opacity: 1
      }, {
        queue: !1,
        duration: this.options.fade,
        start: function () {
          this.isOpening = !0, this.wrapper.css({
            display: "block"
          })
        }.bind(this),
        complete: function () {
          this._fireEvent("onOpenComplete")
        }.bind(this),
        always: function () {
          this.isOpening = !1, setTimeout(function () {
            this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = !1)
          }.bind(this), 10)
        }.bind(this)
      }) : (this.wrapper.css({
        display: "block",
        opacity: 1
      }), this.positionOnFadeComplete && this.position() && (this.positionOnFadeComplete = !1), this._fireEvent("onOpenComplete")))
    }.bind(this);
    return !this.options.delayOpen || this.isOpen || this.isClosing || t.ignoreDelay ? i() : this.timer = setTimeout(i, this.options.delayOpen), this
  }, h.prototype.close = function (t) {
    if (t = t || {}, j("body").off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.isTouchDevice && j("body > *").off("click.jBox-" + this.id + " tap.jBox-" + this.id), this.isDestroyed || this.isClosing) return this;
    if (this.timer && clearTimeout(this.timer), this._blockBodyClick(), this.isDisabled) return this;
    var i, o, s, e = function () {
      var t;
      this._fireEvent("onClose"), this.options.cancelAjaxOnClose && this.cancelAjax(), this.isOpen && (this.isOpen = !1, this._detachEvents(), this.options.blockScroll && (this.options.blockScrollAdjust ? (h.blockScrollScopes = h.blockScrollScopes ? --h.blockScrollScopes : 0) || this.unscroll.reset() : j("body").removeClass("jBox-blockScroll-" + this.id)), this.options.overlay && this._hideOverlay(), this.options.animation && !this.isOpening && this._animate("close"), this.options.audio && this.options.audio.close && this.audio(this.options.audio.close, this.options.volume.close), (t = this.isTouchDevice && "mouse" == this.options.target ? 0 : this.options.fade) ? this.wrapper.stop().animate({
        opacity: 0
      }, {
        queue: !1,
        duration: t,
        start: function () {
          this.isClosing = !0
        }.bind(this),
        complete: function () {
          this.wrapper.css({
            display: "none"
          }), this._fireEvent("onCloseComplete")
        }.bind(this),
        always: function () {
          this.isClosing = !1
        }.bind(this)
      }) : (this.wrapper.css({
        display: "none",
        opacity: 0
      }), this._fireEvent("onCloseComplete")))
    }.bind(this);
    return t.ignoreDelay || this.isTouchDevice && "mouse" == this.options.target ? e() : (this.options.delayOnHover || this.options.showCountdown) && 10 < this.options.delayClose ? (o = (i = this).options.delayClose, s = Date.now(), this.options.showCountdown && !this.inner && (t = j('<div class="jBox-countdown" />'), this.inner = j('<div class="jBox-countdown-inner" />'), t.prepend(this.inner), j("#" + this.id).append(t)), this.countdown = function () {
      var t = Date.now();
      i.isHovered || (o -= t - s), s = t, 0 < o ? (i.options.showCountdown && i.inner.css("width", 100 * o / i.options.delayClose + "%"), window.requestAnimationFrame(i.countdown)) : e()
    }, window.requestAnimationFrame(this.countdown)) : this.timer = setTimeout(e, Math.max(this.options.delayClose, 10)), this
  }, h.prototype.toggle = function (t) {
    return this[this.isOpen ? "close" : "open"](t), this
  }, h.prototype.disable = function () {
    return this.isDisabled = !0, this
  }, h.prototype.enable = function () {
    return this.isDisabled = !1, this
  }, h.prototype.hide = function () {
    return this.disable(), this.wrapper && (this.cacheWrapperDisplay = this.wrapper.css("display"), this.wrapper.css({
      display: "none"
    })), this.overlay && (this.cacheOverlayDisplay = this.overlay.css("display"), this.overlay.css({
      display: "none"
    })), this
  }, h.prototype.show = function () {
    return this.enable(), this.wrapper && this.cacheWrapperDisplay && (this.wrapper.css({
      display: this.cacheWrapperDisplay
    }), this.cacheWrapperDisplay = null), this.overlay && this.cacheOverlayDisplay && (this.overlay.css({
      display: this.cacheOverlayDisplay
    }), this.cacheOverlayDisplay = null), this
  }, h.prototype.ajax = function (o, i) {
    o = o || {}, j.each([
      ["getData", "data"],
      ["getURL", "url"]
    ], function (t, i) {
      this.options.ajax[i[0]] && !o[i[1]] && this.source && null != this.source.attr(this.options.ajax[i[0]]) && (o[i[1]] = this.source.attr(this.options.ajax[i[0]]) || "")
    }.bind(this));
    var t = j.extend(!0, {}, this.options.ajax);
    this.cancelAjax();
    var s = o.beforeSend || t.beforeSend || function () { },
      e = o.complete || t.complete || function () { },
      n = o.success || t.success || function () { },
      a = o.error || t.error || function () { },
      h = j.extend(!0, t, o);
    return h.beforeSend = function (t) {
      h.loadingClass && this.wrapper.addClass(!0 === h.loadingClass ? "jBox-loading" : h.loadingClass), h.spinner && (this.spinnerDelay = setTimeout(function () {
        this.wrapper.addClass("jBox-loading-spinner"), h.spinnerReposition && (i ? this.positionOnFadeComplete = !0 : this.position()), this.spinner = j(!0 !== h.spinner ? h.spinner : '<div class="jBox-spinner"></div>').appendTo(this.container), this.titleContainer && "absolute" == this.spinner.css("position") && this.spinner.css({
          transform: "translateY(" + .5 * this.titleContainer.outerHeight() + "px)"
        })
      }.bind(this), "" != this.content.html() && h.spinnerDelay || 0)), s.bind(this)(t)
    }.bind(this), h.complete = function (t) {
      this.spinnerDelay && clearTimeout(this.spinnerDelay), this.wrapper.removeClass("jBox-loading jBox-loading-spinner jBox-loading-spinner-delay"), this.spinner && this.spinner.length && this.spinner.remove() && h.spinnerReposition && (i ? this.positionOnFadeComplete = !0 : this.position()), this.ajaxLoaded = !0, e.bind(this)(t)
    }.bind(this), h.success = function (t) {
      h.setContent && this.setContent(t, !0) && (i ? this.positionOnFadeComplete = !0 : this.position()), h.setContent && this.source && this.source.data("jBox-ajax-data", t), n.bind(this)(t)
    }.bind(this), h.error = function (t) {
      a.bind(this)(t)
    }.bind(this), this.ajaxRequest = j.ajax(h), this
  }, h.prototype.cancelAjax = function () {
    this.ajaxRequest && (this.ajaxRequest.abort(), this.ajaxLoaded = !1)
  }, h.prototype.audio = function (t, i) {
    if (!t) return this;
    var o;
    (h._audio = !h._audio ? {} : h._audio)[t] || (o = j("<audio/>"), j("<source/>", {
      src: t + ".mp3"
    }).appendTo(o), j("<source/>", {
      src: t + ".ogg"
    }).appendTo(o), h._audio[t] = o[0]), h._audio[t].volume = Math.min((null != i ? i : 100) / 100, 1);
    try {
      h._audio[t].pause(), h._audio[t].currentTime = 0
    } catch (t) { }
    return h._audio[t].play(), this
  }, h._animationSpeeds = {
    tada: 1e3,
    tadaSmall: 1e3,
    flash: 500,
    shake: 400,
    pulseUp: 250,
    pulseDown: 250,
    popIn: 250,
    popOut: 250,
    fadeIn: 200,
    fadeOut: 200,
    slideUp: 400,
    slideRight: 400,
    slideLeft: 400,
    slideDown: 400
  }, h.prototype.animate = function (t, i) {
    i = i || {}, this.animationTimeout || (this.animationTimeout = {}), i.element || (i.element = this.wrapper), i.element.data("jBox-animating-id") || i.element.data("jBox-animating-id", h._getUniqueElementID()), i.element.data("jBox-animating") && (i.element.removeClass(i.element.data("jBox-animating")).data("jBox-animating", null), this.animationTimeout[i.element.data("jBox-animating-id")] && clearTimeout(this.animationTimeout[i.element.data("jBox-animating-id")])), i.element.addClass("jBox-animated-" + t).data("jBox-animating", "jBox-animated-" + t), this.animationTimeout[i.element.data("jBox-animating-id")] = setTimeout(function () {
      i.element.removeClass(i.element.data("jBox-animating")).data("jBox-animating", null), i.complete && i.complete()
    }, h._animationSpeeds[t])
  }, h.prototype.swipeDetector = function (i, o) {
    var s = 0,
      e = 0,
      n = 0,
      a = 0,
      h = 0;

    function t(t) {
      o.useOnlyTouch && !t.originalEvent.touches || (t.originalEvent.touches && (t = t.originalEvent.touches[0]), 0 === s && (s = 1, e = t.clientX, n = t.clientY))
    }

    function r(t) {
      2 === s && (s = 0, Math.abs(a) > Math.abs(h) && Math.abs(a) > o.swipeThreshold ? a < 0 ? i.trigger(j.Event("swipeLeft.sd")) : i.trigger(j.Event("swipeRight.sd")) : Math.abs(h) > o.swipeThreshold && (h < 0 ? i.trigger(j.Event("swipeUp.sd")) : i.trigger(j.Event("swipeDown.sd"))))
    }

    function p(t) {
      var i;
      1 === s && (i = (t = t.originalEvent.touches ? t.originalEvent.touches[0] : t).clientX - e, t = t.clientY - n, (Math.abs(i) > o.swipeThreshold || Math.abs(t) > o.swipeThreshold) && (s = 2, a = i, h = t))
    }
    return o = j.extend({
      swipeThreshold: 70,
      useOnlyTouch: !1
    }, o), i.on("mousedown touchstart", t), j("html").on("mouseup touchend", r), j("html").on("mousemove touchmove", p), i
  }, h.prototype.destroy = function () {
    return this.detach(), this.isOpen && this.close({
      ignoreDelay: !0
    }), this.wrapper && this.wrapper.remove(), this.overlay && this.overlay.remove(), this._styles && this._styles.remove(), this.isDestroyed = !0, this
  }, h._getUniqueID = (t = 1, function () {
    return t++
  }), h._getUniqueElementID = (i = 1, function () {
    return i++
  }), h._pluginOptions = {}, h.plugin = function (t, i) {
    h._pluginOptions[t] = i
  }, j.fn.jBox = function (t, i) {
    return new h(t = t || {}, j.extend(i = i || {}, {
      attach: this
    }))
  }, h
}

function jBoxConfirmWrapper(jBox, jQuery) {
  new jBox.plugin("Confirm", {
    confirmButton: "Submit",
    cancelButton: "Cancel",
    confirm: null,
    cancel: null,
    closeOnConfirm: !0,
    target: window,
    fixed: !0,
    attach: "[data-confirm]",
    getContent: "data-confirm",
    content: "Do you really want to do this?",
    minWidth: 360,
    maxWidth: 500,
    blockScroll: !0,
    closeOnEsc: !0,
    closeOnClick: !1,
    closeButton: !1,
    overlay: !0,
    animation: "zoomIn",
    preventDefault: !0,
    _onAttach: function (t) {
      var i;
      this.options.confirm || (i = t.attr("onclick") ? t.attr("onclick") : t.attr("href") ? t.attr("target") ? 'window.open("' + t.attr("href") + '", "' + t.attr("target") + '");' : 'window.location.href = "' + t.attr("href") + '";' : "", t.prop("onclick", null).data("jBox-Confirm-submit", i))
    },
    _onCreated: function () {
      this.wrapper.addClass("jBox-Modal"), this.footer = jQuery('<div class="jBox-Confirm-footer"/>'), jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-cancel"/>').html(this.options.cancelButton).on("click tap", function () {
        this.options.cancel && this.options.cancel(this.source), this.close()
      }.bind(this)).appendTo(this.footer), this.submitButton = jQuery('<div class="jBox-Confirm-button jBox-Confirm-button-submit"/>').html(this.options.confirmButton).appendTo(this.footer), this.footer.appendTo(this.container)
    },
    _onOpen: function () {
      this.submitButton.off("click.jBox-Confirm" + this.id + " tap.jBox-Confirm" + this.id).on("click.jBox-Confirm" + this.id + " tap.jBox-Confirm" + this.id, function () {
        this.options.confirm ? this.options.confirm(this.source) : eval(this.source.data("jBox-Confirm-submit")), this.options.closeOnConfirm && this.close()
      }.bind(this))
    }
  })
}

function jBoxImageWrapper(t, a) {
  new t.plugin("Image", {
    src: "href",
    gallery: "data-jbox-image",
    imageLabel: "title",
    imageFade: 360,
    imageSize: "contain",
    imageCounter: !1,
    imageCounterSeparator: "/",
    downloadButton: !1,
    downloadButtonText: null,
    downloadButtonUrl: null,
    mobileImageAttr: null,
    mobileImageBreakpoint: null,
    preloadFirstImage: !1,
    target: window,
    attach: "[data-jbox-image]",
    fixed: !0,
    blockScroll: !0,
    closeOnEsc: !0,
    closeOnClick: "button",
    closeButton: !0,
    overlay: !0,
    animation: "zoomIn",
    preventDefault: !0,
    width: "100%",
    height: "100%",
    adjustDistance: {
      top: 40,
      right: 0,
      bottom: 40,
      left: 0
    },
    _onInit: function () {
      this.images = this.currentImage = {}, this.imageZIndex = 1, this.initImage = function (t) {
        var i, o;
        (t = a(t)).data("jBox-image-gallery") || (i = t.attr(this.options.src), this.options.mobileImageAttr && this.options.mobileImageBreakpoint && t.attr(this.options.mobileImageAttr) && a(window).width() <= this.options.mobileImageBreakpoint && (i = t.attr(this.options.mobileImageAttr)), o = t.attr(this.options.gallery) || "default", this.images[o] || (this.images[o] = []), this.images[o].push({
          src: i,
          label: t.attr(this.options.imageLabel) || "",
          downloadUrl: this.options.downloadButtonUrl && t.attr(this.options.downloadButtonUrl) ? t.attr(this.options.downloadButtonUrl) : null
        }), "title" == this.options.imageLabel && t.removeAttr("title"), t.data("jBox-image-gallery", o), t.data("jBox-image-id", this.images[o].length - 1))
      }.bind(this), this.attachedElements && this.attachedElements.length && a.each(this.attachedElements, function (t, i) {
        this.initImage(i)
      }.bind(this));
      var n = function (t, i, o, s) {
        if (!a("#jBox-image-" + t + "-" + i).length) {
          var e = a("<div/>", {
            id: "jBox-image-" + t + "-" + i,
            class: "jBox-image-container" + (o ? " jBox-image-" + t + "-current" : "")
          }).css({
            backgroundSize: this.options.imageSize,
            opacity: s ? 1 : 0,
            zIndex: o ? this.imageZIndex++ : 0
          }).appendTo(this.content);
          return this.swipeDetector(e).on("swipeLeft.sd swipeRight.sd", function (t) {
            "swipeLeft" === t.type ? this.showImage("next") : "swipeRight" === t.type && this.showImage("prev")
          }.bind(this)), a("<div/>", {
            id: "jBox-image-label-" + t + "-" + i,
            class: "jBox-image-label" + (o ? " active" : "")
          }).html(this.images[t][i].label).on("click tap", function () {
            a(this).toggleClass("expanded")
          }).appendTo(this.imageLabelContainer), o && e.animate({
            opacity: 1
          }, s ? 0 : this.options.imageFade), e
        }
      }.bind(this);
      this.downloadImage = function (t) {
        var i = document.createElement("a");
        i.href = t, i.setAttribute("download", t.substring(t.lastIndexOf("/") + 1)), document.body.appendChild(i), i.click()
      };
      var e = function (i, o, t, s) {
        var e = n(i, o, t, s);
        e.addClass("jBox-image-loading"), a('<img src="' + this.images[i][o].src + '" />').each(function () {
          var t = new Image;
          t.onload = function () {
            e.removeClass("jBox-image-loading"), e.css({
              backgroundImage: 'url("' + this.images[i][o].src + '")'
            })
          }.bind(this), t.onerror = function () {
            e.removeClass("jBox-image-loading"), e.addClass("jBox-image-not-found")
          }.bind(this), t.src = this.images[i][o].src
        }.bind(this))
      }.bind(this);
      this.showImage = function (t) {
        var i, o, s;
        if ("open" != t) i = this.currentImage.gallery, s = (s = this.currentImage.id + (+("prev" == t) ? -1 : 1)) > this.images[i].length - 1 ? 0 : s < 0 ? this.images[i].length - 1 : s;
        else {
          if (this.source) i = this.source.data("jBox-image-gallery"), s = this.source.data("jBox-image-id");
          else {
            if (!this.attachedElements || !this.attachedElements.length) return;
            i = a(this.attachedElements[0]).data("jBox-image-gallery"), s = a(this.attachedElements[0]).data("jBox-image-id")
          }
          this.images && this.images[i] && a(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({
            display: 1 < this.images[i].length ? "block" : "none"
          })
        }
        a(".jBox-image-" + i + "-current").length && a(".jBox-image-" + i + "-current").removeClass("jBox-image-" + i + "-current").animate({
          opacity: 0
        }, "open" == t ? 0 : this.options.imageFade), this.currentImage = {
          gallery: i,
          id: s
        }, a("#jBox-image-" + i + "-" + s).length ? a("#jBox-image-" + i + "-" + s).addClass("jBox-image-" + i + "-current").css({
          zIndex: this.imageZIndex++,
          opacity: 0
        }).animate({
          opacity: 1
        }, "open" == t ? 0 : this.options.imageFade) : e(i, s, !0, "open" === t), o = i, t = s, a(".jBox-image-label.active").removeClass("active expanded"), a("#jBox-image-label-" + o + "-" + t).addClass("active"), this.imageCounter && (this.images[i] && 1 < this.images[i].length ? (this.wrapper.addClass("jBox-image-has-counter"), this.imageCounter.find(".jBox-image-counter-all").html(this.images[i].length), this.imageCounter.find(".jBox-image-counter-current").html(s + 1)) : this.wrapper.removeClass("jBox-image-has-counter")), this.images[i] && this.images[i].length - 1 && (s = (s = s + 1) > this.images[i].length - 1 ? 0 : s < 0 ? this.images[i].length - 1 : s, a("#jBox-image-" + i + "-" + s).length || e(i, s, !1, !1))
      }, this.options.preloadFirstImage && a(window).on("load", function () {
        this.showImage("open")
      }.bind(this))
    },
    _onAttach: function (t) {
      this.initImage && this.initImage(t)
    },
    _onCreated: function () {
      this.imageLabelWrapper = a('<div class="jBox-image-label-wrapper"/>').appendTo(this.wrapper), this.imagePrevButton = a('<div class="jBox-image-pointer-prev"/>').on("click tap", function () {
        this.showImage("prev")
      }.bind(this)), this.imageNextButton = a('<div class="jBox-image-pointer-next"/>').on("click tap", function () {
        this.showImage("next")
      }.bind(this)), this.imageLabelContainer = a('<div class="jBox-image-label-container"/>'), this.imageLabelWrapper.append(this.imagePrevButton).append(this.imageLabelContainer).append(this.imageNextButton), this.options.downloadButton && (this.downloadButton = a("<div/>", {
        class: "jBox-image-download-button-wrapper"
      }).appendTo(this.wrapper).append(this.options.downloadButtonText ? a("<div/>", {
        class: "jBox-image-download-button-text"
      }).html(this.options.downloadButtonText) : null).append(a("<div/>", {
        class: "jBox-image-download-button-icon"
      })).on("click tap", function () {
        var t;
        t = this.images[this.currentImage.gallery][this.currentImage.id].downloadUrl || this.wrapper.find(".jBox-image-" + this.currentImage.gallery + "-current")[0].style.backgroundImage.slice(4, -1).replace(/["']/g, ""), this.downloadImage(t)
      }.bind(this))), this.options.imageCounter && (this.imageCounter = a("<div/>", {
        class: "jBox-image-counter-container"
      }).insertAfter(this.imageLabelContainer), this.imageCounter.append(a("<span/>", {
        class: "jBox-image-counter-current"
      })).append(a("<span/>").html(this.options.imageCounterSeparator)).append(a("<span/>", {
        class: "jBox-image-counter-all"
      })))
    },
    _onOpen: function () {
      a(document).on("keyup.jBox-Image-" + this.id, function (t) {
        37 == t.keyCode && this.showImage("prev"), 39 == t.keyCode && this.showImage("next")
      }.bind(this)), this.showImage("open")
    },
    _onClose: function () {
      a(document).off("keyup.jBox-Image-" + this.id)
    },
    _onCloseComplete: function () {
      this.wrapper.find(".jBox-image-container").css("opacity", 0)
    }
  })
}

function jBoxNoticeWrapper(t, a) {
  new t.plugin("Notice", {
    color: null,
    stack: !0,
    stackSpacing: 10,
    autoClose: 6e3,
    attributes: {
      x: "right",
      y: "top"
    },
    position: {
      x: 15,
      y: 15
    },
    responsivePositions: {
      500: {
        x: 5,
        y: 5
      },
      768: {
        x: 10,
        y: 10
      }
    },
    target: window,
    fixed: !0,
    animation: "zoomIn",
    closeOnClick: "box",
    zIndex: 12e3,
    _onInit: function () {
      this.defaultNoticePosition = a.extend({}, this.options.position), this._adjustNoticePositon = function () {
        var t = a(window),
          o = t.width();
        t.height();
        this.options.position = a.extend({}, this.defaultNoticePosition), a.each(this.options.responsivePositions, function (t, i) {
          if (o <= t) return this.options.position = i, !1
        }.bind(this)), this.options.adjustDistance = {
          top: this.options.position.y,
          right: this.options.position.x,
          bottom: this.options.position.y,
          left: this.options.position.x
        }
      }, this.options.content instanceof a && (this.options.content = this.options.content.clone().attr("id", "")), a(window).on("resize.responsivejBoxNotice-" + this.id, function (t) {
        this.isOpen && this._adjustNoticePositon()
      }.bind(this)), this.open()
    },
    _onCreated: function () {
      this.wrapper.addClass("jBox-Notice-color jBox-Notice-" + (this.options.color || "gray")), this.wrapper.data("jBox-Notice-position", this.options.attributes.x + "-" + this.options.attributes.y)
    },
    _onOpen: function () {
      this.options.stack || (this._adjustNoticePositon(), a.each(a(".jBox-Notice"), function (t, i) {
        (i = a(i)).attr("id") != this.id && i.data("jBox-Notice-position") == this.options.attributes.x + "-" + this.options.attributes.y && (this.options.stack || i.data("jBox").close({
          ignoreDelay: !0
        }))
      }.bind(this)))
    },
    _onPosition: function () {
      var t, s = {};
      for (t in a.each(a(".jBox-Notice"), function (t, i) {
        var o = (i = a(i)).data("jBox-Notice-position");
        s[o] || (s[o] = []), s[o].push(i)
      }), s) {
        var i = t.split("-")[1];
        s[t].reverse();
        var o, e = 0;
        for (o in s[t]) {
          var n = a(s[t][o]);
          n.css("margin-" + i, e), e += n.outerHeight() + this.options.stackSpacing
        }
      }
    },
    _onCloseComplete: function () {
      this.destroy(), this.options._onPosition.bind(this).call()
    }
  })
} ! function (i, o) {
  "function" == typeof define && define.amd ? define(["jquery"], function (t) {
    return i.jBox = o(t)
  }) : "object" == typeof module && module.exports ? module.exports = i.jBox = o(require("jquery")) : i.jBox = o(i.jQuery)
}(this, function (t) {
  var i = jBoxWrapper(t);
  try {
    void 0 !== jBoxConfirmWrapper && jBoxConfirmWrapper && jBoxConfirmWrapper(i, t)
  } catch (t) {
    console.error(t)
  }
  try {
    void 0 !== jBoxImageWrapper && jBoxImageWrapper && jBoxImageWrapper(i, t)
  } catch (t) {
    console.error(t)
  }
  try {
    void 0 !== jBoxNoticeWrapper && jBoxNoticeWrapper && jBoxNoticeWrapper(i, t)
  } catch (t) {
    console.error(t)
  }
  return i
});
/**
 * SimpleBar.js - v5.1.0
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e() }(this, (function () { "use strict"; var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}; function e(t, e) { return t(e = { exports: {} }, e.exports), e.exports } var r, n, i, o = "object", s = function (t) { return t && t.Math == Math && t }, a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(), c = function (t) { try { return !!t() } catch (t) { return !0 } }, l = !c((function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a })), u = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, h = { f: f && !u.call({ 1: 2 }, 1) ? function (t) { var e = f(this, t); return !!e && e.enumerable } : u }, d = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } }, p = {}.toString, v = function (t) { return p.call(t).slice(8, -1) }, g = "".split, y = c((function () { return !Object("z").propertyIsEnumerable(0) })) ? function (t) { return "String" == v(t) ? g.call(t, "") : Object(t) } : Object, b = function (t) { if (null == t) throw TypeError("Can't call method on " + t); return t }, m = function (t) { return y(b(t)) }, x = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t }, E = function (t, e) { if (!x(t)) return t; var r, n; if (e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n; if ("function" == typeof (r = t.valueOf) && !x(n = r.call(t))) return n; if (!e && "function" == typeof (r = t.toString) && !x(n = r.call(t))) return n; throw TypeError("Can't convert object to primitive value") }, w = {}.hasOwnProperty, O = function (t, e) { return w.call(t, e) }, _ = a.document, S = x(_) && x(_.createElement), A = function (t) { return S ? _.createElement(t) : {} }, k = !l && !c((function () { return 7 != Object.defineProperty(A("div"), "a", { get: function () { return 7 } }).a })), L = Object.getOwnPropertyDescriptor, M = { f: l ? L : function (t, e) { if (t = m(t), e = E(e, !0), k) try { return L(t, e) } catch (t) { } if (O(t, e)) return d(!h.f.call(t, e), t[e]) } }, T = function (t) { if (!x(t)) throw TypeError(String(t) + " is not an object"); return t }, j = Object.defineProperty, R = { f: l ? j : function (t, e, r) { if (T(t), e = E(e, !0), T(r), k) try { return j(t, e, r) } catch (t) { } if ("get" in r || "set" in r) throw TypeError("Accessors not supported"); return "value" in r && (t[e] = r.value), t } }, W = l ? function (t, e, r) { return R.f(t, e, d(1, r)) } : function (t, e, r) { return t[e] = r, t }, z = function (t, e) { try { W(a, t, e) } catch (r) { a[t] = e } return e }, C = e((function (t) { var e = a["__core-js_shared__"] || z("__core-js_shared__", {}); (t.exports = function (t, r) { return e[t] || (e[t] = void 0 !== r ? r : {}) })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) })), N = C("native-function-to-string", Function.toString), I = a.WeakMap, D = "function" == typeof I && /native code/.test(N.call(I)), P = 0, V = Math.random(), F = function (t) { return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36) }, B = C("keys"), H = function (t) { return B[t] || (B[t] = F(t)) }, q = {}, $ = a.WeakMap; if (D) { var X = new $, Y = X.get, G = X.has, U = X.set; r = function (t, e) { return U.call(X, t, e), e }, n = function (t) { return Y.call(X, t) || {} }, i = function (t) { return G.call(X, t) } } else { var Q = H("state"); q[Q] = !0, r = function (t, e) { return W(t, Q, e), e }, n = function (t) { return O(t, Q) ? t[Q] : {} }, i = function (t) { return O(t, Q) } } var K = { set: r, get: n, has: i, enforce: function (t) { return i(t) ? n(t) : r(t, {}) }, getterFor: function (t) { return function (e) { var r; if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required"); return r } } }, J = e((function (t) { var e = K.get, r = K.enforce, n = String(N).split("toString"); C("inspectSource", (function (t) { return N.call(t) })), (t.exports = function (t, e, i, o) { var s = !!o && !!o.unsafe, c = !!o && !!o.enumerable, l = !!o && !!o.noTargetGet; "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i) })(Function.prototype, "toString", (function () { return "function" == typeof this && e(this).source || N.call(this) })) })), Z = a, tt = function (t) { return "function" == typeof t ? t : void 0 }, et = function (t, e) { return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e] }, rt = Math.ceil, nt = Math.floor, it = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t) }, ot = Math.min, st = function (t) { return t > 0 ? ot(it(t), 9007199254740991) : 0 }, at = Math.max, ct = Math.min, lt = function (t) { return function (e, r, n) { var i, o = m(e), s = st(o.length), a = function (t, e) { var r = it(t); return r < 0 ? at(r + e, 0) : ct(r, e) }(n, s); if (t && r != r) { for (; s > a;)if ((i = o[a++]) != i) return !0 } else for (; s > a; a++)if ((t || a in o) && o[a] === r) return t || a || 0; return !t && -1 } }, ut = { includes: lt(!0), indexOf: lt(!1) }.indexOf, ft = function (t, e) { var r, n = m(t), i = 0, o = []; for (r in n) !O(q, r) && O(n, r) && o.push(r); for (; e.length > i;)O(n, r = e[i++]) && (~ut(o, r) || o.push(r)); return o }, ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], dt = ht.concat("length", "prototype"), pt = { f: Object.getOwnPropertyNames || function (t) { return ft(t, dt) } }, vt = { f: Object.getOwnPropertySymbols }, gt = et("Reflect", "ownKeys") || function (t) { var e = pt.f(T(t)), r = vt.f; return r ? e.concat(r(t)) : e }, yt = function (t, e) { for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) { var s = r[o]; O(t, s) || n(t, s, i(e, s)) } }, bt = /#|\.prototype\./, mt = function (t, e) { var r = Et[xt(t)]; return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e) }, xt = mt.normalize = function (t) { return String(t).replace(bt, ".").toLowerCase() }, Et = mt.data = {}, wt = mt.NATIVE = "N", Ot = mt.POLYFILL = "P", _t = mt, St = M.f, At = function (t, e) { var r, n, i, o, s, c = t.target, l = t.global, u = t.stat; if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype) for (n in e) { if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) { if (typeof o == typeof i) continue; yt(o, i) } (t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t) } }, kt = function (t) { if ("function" != typeof t) throw TypeError(String(t) + " is not a function"); return t }, Lt = function (t, e, r) { if (kt(t), void 0 === e) return t; switch (r) { case 0: return function () { return t.call(e) }; case 1: return function (r) { return t.call(e, r) }; case 2: return function (r, n) { return t.call(e, r, n) }; case 3: return function (r, n, i) { return t.call(e, r, n, i) } }return function () { return t.apply(e, arguments) } }, Mt = function (t) { return Object(b(t)) }, Tt = Array.isArray || function (t) { return "Array" == v(t) }, jt = !!Object.getOwnPropertySymbols && !c((function () { return !String(Symbol()) })), Rt = a.Symbol, Wt = C("wks"), zt = function (t) { return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t)) }, Ct = zt("species"), Nt = function (t, e) { var r; return Tt(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === e ? 0 : e) }, It = [].push, Dt = function (t) { var e = 1 == t, r = 2 == t, n = 3 == t, i = 4 == t, o = 6 == t, s = 5 == t || o; return function (a, c, l, u) { for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)if ((s || b in p) && (h = v(f = p[b], b, d), t)) if (e) x[b] = h; else if (h) switch (t) { case 3: return !0; case 5: return f; case 6: return b; case 2: It.call(x, f) } else if (i) return !1; return o ? -1 : n || i ? i : x } }, Pt = { forEach: Dt(0), map: Dt(1), filter: Dt(2), some: Dt(3), every: Dt(4), find: Dt(5), findIndex: Dt(6) }, Vt = function (t, e) { var r = [][t]; return !r || !c((function () { r.call(null, e || function () { throw 1 }, 1) })) }, Ft = Pt.forEach, Bt = Vt("forEach") ? function (t) { return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0) } : [].forEach; At({ target: "Array", proto: !0, forced: [].forEach != Bt }, { forEach: Bt }); var Ht = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }; for (var qt in Ht) { var $t = a[qt], Xt = $t && $t.prototype; if (Xt && Xt.forEach !== Bt) try { W(Xt, "forEach", Bt) } catch (t) { Xt.forEach = Bt } } var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement), Gt = zt("species"), Ut = Pt.filter; At({ target: "Array", proto: !0, forced: !function (t) { return !c((function () { var e = []; return (e.constructor = {})[Gt] = function () { return { foo: 1 } }, 1 !== e[t](Boolean).foo })) }("filter") }, { filter: function (t) { return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0) } }); var Qt = Object.keys || function (t) { return ft(t, ht) }, Kt = l ? Object.defineProperties : function (t, e) { T(t); for (var r, n = Qt(e), i = n.length, o = 0; i > o;)R.f(t, r = n[o++], e[r]); return t }, Jt = et("document", "documentElement"), Zt = H("IE_PROTO"), te = function () { }, ee = function () { var t, e = A("iframe"), r = ht.length; for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), ee = t.F; r--;)delete ee.prototype[ht[r]]; return ee() }, re = Object.create || function (t, e) { var r; return null !== t ? (te.prototype = T(t), r = new te, te.prototype = null, r[Zt] = t) : r = ee(), void 0 === e ? r : Kt(r, e) }; q[Zt] = !0; var ne = zt("unscopables"), ie = Array.prototype; null == ie[ne] && W(ie, ne, re(null)); var oe, se, ae, ce = function (t) { ie[ne][t] = !0 }, le = {}, ue = !c((function () { function t() { } return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype })), fe = H("IE_PROTO"), he = Object.prototype, de = ue ? Object.getPrototypeOf : function (t) { return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null }, pe = zt("iterator"), ve = !1;[].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, (function () { return this })); var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve }, ye = R.f, be = zt("toStringTag"), me = function (t, e, r) { t && !O(t = r ? t : t.prototype, be) && ye(t, be, { configurable: !0, value: e }) }, xe = ge.IteratorPrototype, Ee = function () { return this }, we = Object.setPrototypeOf || ("__proto__" in {} ? function () { var t, e = !1, r = {}; try { (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array } catch (t) { } return function (r, n) { return T(r), function (t) { if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype") }(n), e ? t.call(r, n) : r.__proto__ = n, r } }() : void 0), Oe = ge.IteratorPrototype, _e = ge.BUGGY_SAFARI_ITERATORS, Se = zt("iterator"), Ae = function () { return this }, ke = function (t, e, r, n, i, o, s) { !function (t, e, r) { var n = e + " Iterator"; t.prototype = re(xe, { next: d(1, r) }), me(t, n, !1), le[n] = Ee }(r, e, n); var a, c, l, u = function (t) { if (t === i && g) return g; if (!_e && t in p) return p[t]; switch (t) { case "keys": case "values": case "entries": return function () { return new r(this, t) } }return function () { return new r(this) } }, f = e + " Iterator", h = !1, p = t.prototype, v = p[Se] || p["@@iterator"] || i && p[i], g = !_e && v || u(i), y = "Array" == e && p.entries || v; if (y && (a = de(y.call(new t)), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function () { return v.call(this) }), p[Se] !== g && W(p, Se, g), le[e] = g, i) if (c = { values: u("values"), keys: o ? g : u("keys"), entries: u("entries") }, s) for (l in c) !_e && !h && l in p || J(p, l, c[l]); else At({ target: e, proto: !0, forced: _e || h }, c); return c }, Le = K.set, Me = K.getterFor("Array Iterator"), Te = ke(Array, "Array", (function (t, e) { Le(this, { type: "Array Iterator", target: m(t), index: 0, kind: e }) }), (function () { var t = Me(this), e = t.target, r = t.kind, n = t.index++; return !e || n >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: n, done: !1 } : "values" == r ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 } }), "values"); le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries"); var je = Object.assign, Re = !je || c((function () { var t = {}, e = {}, r = Symbol(); return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) { e[t] = t })), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("") })) ? function (t, e) { for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;)for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;)a = u[d++], l && !s.call(c, a) || (r[a] = c[a]); return r } : je; At({ target: "Object", stat: !0, forced: Object.assign !== Re }, { assign: Re }); var We = zt("toStringTag"), ze = "Arguments" == v(function () { return arguments }()), Ce = function (t) { var e, r, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) { try { return t[e] } catch (t) { } }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n }, Ne = {}; Ne[zt("toStringTag")] = "z"; var Ie = "[object z]" !== String(Ne) ? function () { return "[object " + Ce(this) + "]" } : Ne.toString, De = Object.prototype; Ie !== De.toString && J(De, "toString", Ie, { unsafe: !0 }); var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff", Ve = "[" + Pe + "]", Fe = RegExp("^" + Ve + Ve + "*"), Be = RegExp(Ve + Ve + "*$"), He = function (t) { return function (e) { var r = String(b(e)); return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r } }, qe = { start: He(1), end: He(2), trim: He(3) }.trim, $e = a.parseInt, Xe = /^[+-]?0[Xx]/, Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function (t, e) { var r = qe(String(t)); return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10)) } : $e; At({ global: !0, forced: parseInt != Ye }, { parseInt: Ye }); var Ge = function (t) { return function (e, r) { var n, i, o = String(b(e)), s = it(r), a = o.length; return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536 } }, Ue = { codeAt: Ge(!1), charAt: Ge(!0) }, Qe = Ue.charAt, Ke = K.set, Je = K.getterFor("String Iterator"); ke(String, "String", (function (t) { Ke(this, { type: "String Iterator", string: String(t), index: 0 }) }), (function () { var t, e = Je(this), r = e.string, n = e.index; return n >= r.length ? { value: void 0, done: !0 } : (t = Qe(r, n), e.index += t.length, { value: t, done: !1 }) })); var Ze = function (t, e, r) { for (var n in e) J(t, n, e[n], r); return t }, tr = !c((function () { return Object.isExtensible(Object.preventExtensions({})) })), er = e((function (t) { var e = R.f, r = F("meta"), n = 0, i = Object.isExtensible || function () { return !0 }, o = function (t) { e(t, r, { value: { objectID: "O" + ++n, weakData: {} } }) }, s = t.exports = { REQUIRED: !1, fastKey: function (t, e) { if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!O(t, r)) { if (!i(t)) return "F"; if (!e) return "E"; o(t) } return t[r].objectID }, getWeakData: function (t, e) { if (!O(t, r)) { if (!i(t)) return !0; if (!e) return !1; o(t) } return t[r].weakData }, onFreeze: function (t) { return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t } }; q[r] = !0 })), rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")), nr = Array.prototype, ir = zt("iterator"), or = function (t, e, r, n) { try { return n ? e(T(r)[0], r[1]) : e(r) } catch (e) { var i = t.return; throw void 0 !== i && T(i.call(t)), e } }, sr = e((function (t) { var e = function (t, e) { this.stopped = t, this.result = e }; (t.exports = function (t, r, n, i, o) { var s, a, c, l, u, f, h, d = Lt(r, n, i ? 2 : 1); if (o) s = t; else { if ("function" != typeof (a = function (t) { if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)] }(t))) throw TypeError("Target is not iterable"); if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) { for (c = 0, l = st(t.length); l > c; c++)if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u; return new e(!1) } s = a.call(t) } for (; !(f = s.next()).done;)if ((u = or(s, d, f.value, i)) && u instanceof e) return u; return new e(!1) }).stop = function (t) { return new e(!0, t) } })), ar = function (t, e, r) { if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation"); return t }, cr = zt("iterator"), lr = !1; try { var ur = 0, fr = { next: function () { return { done: !!ur++ } }, return: function () { lr = !0 } }; fr[cr] = function () { return this }, Array.from(fr, (function () { throw 2 })) } catch (t) { } var hr = function (t, e, r, n, i) { var o = a[t], s = o && o.prototype, l = o, u = n ? "set" : "add", f = {}, h = function (t) { var e = s[t]; J(s, t, "add" == t ? function (t) { return e.call(this, 0 === t ? 0 : t), this } : "delete" == t ? function (t) { return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t) } : "get" == t ? function (t) { return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t) } : "has" == t ? function (t) { return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t) } : function (t, r) { return e.call(this, 0 === t ? 0 : t, r), this }) }; if (_t(t, "function" != typeof o || !(i || s.forEach && !c((function () { (new o).entries().next() }))))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0; else if (_t(t, !0)) { var d = new l, p = d[u](i ? {} : -0, 1) != d, v = c((function () { d.has(1) })), g = function (t, e) { if (!e && !lr) return !1; var r = !1; try { var n = {}; n[cr] = function () { return { next: function () { return { done: r = !0 } } } }, t(n) } catch (t) { } return r }((function (t) { new o(t) })), y = !i && c((function () { for (var t = new o, e = 5; e--;)t[u](e, e); return !t.has(-0) })); g || ((l = e((function (e, r) { ar(e, l, t); var i = function (t, e, r) { var n, i; return we && "function" == typeof (n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t }(new o, e, l); return null != r && sr(r, i[u], i, n), i }))).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear } return f[t] = l, At({ global: !0, forced: l != o }, f), me(l, t), i || r.setStrong(l, t, n), l }, dr = er.getWeakData, pr = K.set, vr = K.getterFor, gr = Pt.find, yr = Pt.findIndex, br = 0, mr = function (t) { return t.frozen || (t.frozen = new xr) }, xr = function () { this.entries = [] }, Er = function (t, e) { return gr(t.entries, (function (t) { return t[0] === e })) }; xr.prototype = { get: function (t) { var e = Er(this, t); if (e) return e[1] }, has: function (t) { return !!Er(this, t) }, set: function (t, e) { var r = Er(this, t); r ? r[1] = e : this.entries.push([t, e]) }, delete: function (t) { var e = yr(this.entries, (function (e) { return e[0] === t })); return ~e && this.entries.splice(e, 1), !!~e } }; var wr = { getConstructor: function (t, e, r, n) { var i = t((function (t, o) { ar(t, i, e), pr(t, { type: e, id: br++, frozen: void 0 }), null != o && sr(o, t[n], t, r) })), o = vr(e), s = function (t, e, r) { var n = o(t), i = dr(T(e), !0); return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t }; return Ze(i.prototype, { delete: function (t) { var e = o(this); if (!x(t)) return !1; var r = dr(t); return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id] }, has: function (t) { var e = o(this); if (!x(t)) return !1; var r = dr(t); return !0 === r ? mr(e).has(t) : r && O(r, e.id) } }), Ze(i.prototype, r ? { get: function (t) { var e = o(this); if (x(t)) { var r = dr(t); return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0 } }, set: function (t, e) { return s(this, t, e) } } : { add: function (t) { return s(this, t, !0) } }), i } }, Or = (e((function (t) { var e, r = K.enforce, n = !a.ActiveXObject && "ActiveXObject" in a, i = Object.isExtensible, o = function (t) { return function () { return t(this, arguments.length ? arguments[0] : void 0) } }, s = t.exports = hr("WeakMap", o, wr, !0, !0); if (D && n) { e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0; var c = s.prototype, l = c.delete, u = c.has, f = c.get, h = c.set; Ze(c, { delete: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.delete(t) } return l.call(this, t) }, has: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), u.call(this, t) || n.frozen.has(t) } return u.call(this, t) }, get: function (t) { if (x(t) && !i(t)) { var n = r(this); return n.frozen || (n.frozen = new e), u.call(this, t) ? f.call(this, t) : n.frozen.get(t) } return f.call(this, t) }, set: function (t, n) { if (x(t) && !i(t)) { var o = r(this); o.frozen || (o.frozen = new e), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n) } else h.call(this, t, n); return this } }) } })), zt("iterator")), _r = zt("toStringTag"), Sr = Te.values; for (var Ar in Ht) { var kr = a[Ar], Lr = kr && kr.prototype; if (Lr) { if (Lr[Or] !== Sr) try { W(Lr, Or, Sr) } catch (t) { Lr[Or] = Sr } if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar]) for (var Mr in Te) if (Lr[Mr] !== Te[Mr]) try { W(Lr, Mr, Te[Mr]) } catch (t) { Lr[Mr] = Te[Mr] } } } var Tr = "Expected a function", jr = NaN, Rr = "[object Symbol]", Wr = /^\s+|\s+$/g, zr = /^[-+]0x[0-9a-f]+$/i, Cr = /^0b[01]+$/i, Nr = /^0o[0-7]+$/i, Ir = parseInt, Dr = "object" == typeof t && t && t.Object === Object && t, Pr = "object" == typeof self && self && self.Object === Object && self, Vr = Dr || Pr || Function("return this")(), Fr = Object.prototype.toString, Br = Math.max, Hr = Math.min, qr = function () { return Vr.Date.now() }; function $r(t, e, r) { var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0; if ("function" != typeof t) throw new TypeError(Tr); function d(e) { var r = n, o = i; return n = i = void 0, l = e, s = t.apply(o, r) } function p(t) { var r = t - c; return void 0 === c || r >= e || r < 0 || f && t - l >= o } function v() { var t = qr(); if (p(t)) return g(t); a = setTimeout(v, function (t) { var r = e - (t - c); return f ? Hr(r, o - (t - l)) : r }(t)) } function g(t) { return a = void 0, h && n ? d(t) : (n = i = void 0, s) } function y() { var t = qr(), r = p(t); if (n = arguments, i = this, c = t, r) { if (void 0 === a) return function (t) { return l = t, a = setTimeout(v, e), u ? d(t) : s }(c); if (f) return a = setTimeout(v, e), d(c) } return void 0 === a && (a = setTimeout(v, e)), s } return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () { void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0 }, y.flush = function () { return void 0 === a ? s : g(qr()) }, y } function Xr(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function Yr(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && Fr.call(t) == Rr }(t)) return jr; if (Xr(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = Xr(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(Wr, ""); var r = Cr.test(t); return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t } var Gr = function (t, e, r) { var n = !0, i = !0; if ("function" != typeof t) throw new TypeError(Tr); return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, { leading: n, maxWait: e, trailing: i }) }, Ur = "Expected a function", Qr = NaN, Kr = "[object Symbol]", Jr = /^\s+|\s+$/g, Zr = /^[-+]0x[0-9a-f]+$/i, tn = /^0b[01]+$/i, en = /^0o[0-7]+$/i, rn = parseInt, nn = "object" == typeof t && t && t.Object === Object && t, on = "object" == typeof self && self && self.Object === Object && self, sn = nn || on || Function("return this")(), an = Object.prototype.toString, cn = Math.max, ln = Math.min, un = function () { return sn.Date.now() }; function fn(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } function hn(t) { if ("number" == typeof t) return t; if (function (t) { return "symbol" == typeof t || function (t) { return !!t && "object" == typeof t }(t) && an.call(t) == Kr }(t)) return Qr; if (fn(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t; t = fn(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t; t = t.replace(Jr, ""); var r = tn.test(t); return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t } var dn = function (t, e, r) { var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0; if ("function" != typeof t) throw new TypeError(Ur); function d(e) { var r = n, o = i; return n = i = void 0, l = e, s = t.apply(o, r) } function p(t) { var r = t - c; return void 0 === c || r >= e || r < 0 || f && t - l >= o } function v() { var t = un(); if (p(t)) return g(t); a = setTimeout(v, function (t) { var r = e - (t - c); return f ? ln(r, o - (t - l)) : r }(t)) } function g(t) { return a = void 0, h && n ? d(t) : (n = i = void 0, s) } function y() { var t = un(), r = p(t); if (n = arguments, i = this, c = t, r) { if (void 0 === a) return function (t) { return l = t, a = setTimeout(v, e), u ? d(t) : s }(c); if (f) return a = setTimeout(v, e), d(c) } return void 0 === a && (a = setTimeout(v, e)), s } return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () { void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0 }, y.flush = function () { return void 0 === a ? s : g(un()) }, y }, pn = "Expected a function", vn = "__lodash_hash_undefined__", gn = "[object Function]", yn = "[object GeneratorFunction]", bn = /^\[object .+?Constructor\]$/, mn = "object" == typeof t && t && t.Object === Object && t, xn = "object" == typeof self && self && self.Object === Object && self, En = mn || xn || Function("return this")(); var wn = Array.prototype, On = Function.prototype, _n = Object.prototype, Sn = En["__core-js_shared__"], An = function () { var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }(), kn = On.toString, Ln = _n.hasOwnProperty, Mn = _n.toString, Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jn = wn.splice, Rn = Vn(En, "Map"), Wn = Vn(Object, "create"); function zn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function Cn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function Nn(t) { var e = -1, r = t ? t.length : 0; for (this.clear(); ++e < r;) { var n = t[e]; this.set(n[0], n[1]) } } function In(t, e) { for (var r, n, i = t.length; i--;)if ((r = t[i][0]) === (n = e) || r != r && n != n) return i; return -1 } function Dn(t) { return !(!Bn(t) || (e = t, An && An in e)) && (function (t) { var e = Bn(t) ? Mn.call(t) : ""; return e == gn || e == yn }(t) || function (t) { var e = !1; if (null != t && "function" != typeof t.toString) try { e = !!(t + "") } catch (t) { } return e }(t) ? Tn : bn).test(function (t) { if (null != t) { try { return kn.call(t) } catch (t) { } try { return t + "" } catch (t) { } } return "" }(t)); var e } function Pn(t, e) { var r, n, i = t.__data__; return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map } function Vn(t, e) { var r = function (t, e) { return null == t ? void 0 : t[e] }(t, e); return Dn(r) ? r : void 0 } function Fn(t, e) { if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn); var r = function () { var n = arguments, i = e ? e.apply(this, n) : n[0], o = r.cache; if (o.has(i)) return o.get(i); var s = t.apply(this, n); return r.cache = o.set(i, s), s }; return r.cache = new (Fn.Cache || Nn), r } function Bn(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) } zn.prototype.clear = function () { this.__data__ = Wn ? Wn(null) : {} }, zn.prototype.delete = function (t) { return this.has(t) && delete this.__data__[t] }, zn.prototype.get = function (t) { var e = this.__data__; if (Wn) { var r = e[t]; return r === vn ? void 0 : r } return Ln.call(e, t) ? e[t] : void 0 }, zn.prototype.has = function (t) { var e = this.__data__; return Wn ? void 0 !== e[t] : Ln.call(e, t) }, zn.prototype.set = function (t, e) { return this.__data__[t] = Wn && void 0 === e ? vn : e, this }, Cn.prototype.clear = function () { this.__data__ = [] }, Cn.prototype.delete = function (t) { var e = this.__data__, r = In(e, t); return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0) }, Cn.prototype.get = function (t) { var e = this.__data__, r = In(e, t); return r < 0 ? void 0 : e[r][1] }, Cn.prototype.has = function (t) { return In(this.__data__, t) > -1 }, Cn.prototype.set = function (t, e) { var r = this.__data__, n = In(r, t); return n < 0 ? r.push([t, e]) : r[n][1] = e, this }, Nn.prototype.clear = function () { this.__data__ = { hash: new zn, map: new (Rn || Cn), string: new zn } }, Nn.prototype.delete = function (t) { return Pn(this, t).delete(t) }, Nn.prototype.get = function (t) { return Pn(this, t).get(t) }, Nn.prototype.has = function (t) { return Pn(this, t).has(t) }, Nn.prototype.set = function (t, e) { return Pn(this, t).set(t, e), this }, Fn.Cache = Nn; var Hn = Fn, qn = function () { if ("undefined" != typeof Map) return Map; function t(t, e) { var r = -1; return t.some((function (t, n) { return t[0] === e && (r = n, !0) })), r } return function () { function e() { this.__entries__ = [] } return Object.defineProperty(e.prototype, "size", { get: function () { return this.__entries__.length }, enumerable: !0, configurable: !0 }), e.prototype.get = function (e) { var r = t(this.__entries__, e), n = this.__entries__[r]; return n && n[1] }, e.prototype.set = function (e, r) { var n = t(this.__entries__, e); ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r]) }, e.prototype.delete = function (e) { var r = this.__entries__, n = t(r, e); ~n && r.splice(n, 1) }, e.prototype.has = function (e) { return !!~t(this.__entries__, e) }, e.prototype.clear = function () { this.__entries__.splice(0) }, e.prototype.forEach = function (t, e) { void 0 === e && (e = null); for (var r = 0, n = this.__entries__; r < n.length; r++) { var i = n[r]; t.call(e, i[1], i[0]) } }, e }() }(), $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document, Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function (t) { return setTimeout((function () { return t(Date.now()) }), 1e3 / 60) }, Gn = 2; var Un = 20, Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Kn = "undefined" != typeof MutationObserver, Jn = function () { function t() { this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function (t, e) { var r = !1, n = !1, i = 0; function o() { r && (r = !1, t()), n && a() } function s() { Yn(o) } function a() { var t = Date.now(); if (r) { if (t - i < Gn) return; n = !0 } else r = !0, n = !1, setTimeout(s, e); i = t } return a }(this.refresh.bind(this), Un) } return t.prototype.addObserver = function (t) { ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_() }, t.prototype.removeObserver = function (t) { var e = this.observers_, r = e.indexOf(t); ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_() }, t.prototype.refresh = function () { this.updateObservers_() && this.refresh() }, t.prototype.updateObservers_ = function () { var t = this.observers_.filter((function (t) { return t.gatherActive(), t.hasActive() })); return t.forEach((function (t) { return t.broadcastActive() })), t.length > 0 }, t.prototype.connect_ = function () { $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0) }, t.prototype.disconnect_ = function () { $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1) }, t.prototype.onTransitionEnd_ = function (t) { var e = t.propertyName, r = void 0 === e ? "" : e; Qn.some((function (t) { return !!~r.indexOf(t) })) && this.refresh() }, t.getInstance = function () { return this.instance_ || (this.instance_ = new t), this.instance_ }, t.instance_ = null, t }(), Zn = function (t, e) { for (var r = 0, n = Object.keys(e); r < n.length; r++) { var i = n[r]; Object.defineProperty(t, i, { value: e[i], enumerable: !1, writable: !1, configurable: !0 }) } return t }, ti = function (t) { return t && t.ownerDocument && t.ownerDocument.defaultView || Xn }, ei = ai(0, 0, 0, 0); function ri(t) { return parseFloat(t) || 0 } function ni(t) { for (var e = [], r = 1; r < arguments.length; r++)e[r - 1] = arguments[r]; return e.reduce((function (e, r) { return e + ri(t["border-" + r + "-width"]) }), 0) } function ii(t) { var e = t.clientWidth, r = t.clientHeight; if (!e && !r) return ei; var n = ti(t).getComputedStyle(t), i = function (t) { for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) { var i = n[r], o = t["padding-" + i]; e[i] = ri(o) } return e }(n), o = i.left + i.right, s = i.top + i.bottom, a = ri(n.width), c = ri(n.height); if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)), !function (t) { return t === ti(t).document.documentElement }(t)) { var l = Math.round(a + o) - e, u = Math.round(c + s) - r; 1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u) } return ai(i.left, i.top, a, c) } var oi = "undefined" != typeof SVGGraphicsElement ? function (t) { return t instanceof ti(t).SVGGraphicsElement } : function (t) { return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox }; function si(t) { return $n ? oi(t) ? function (t) { var e = t.getBBox(); return ai(0, 0, e.width, e.height) }(t) : ii(t) : ei } function ai(t, e, r, n) { return { x: t, y: e, width: r, height: n } } var ci = function () { function t(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t } return t.prototype.isActive = function () { var t = si(this.target); return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight }, t.prototype.broadcastRect = function () { var t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t }, t }(), li = function (t, e) { var r, n, i, o, s, a, c, l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), Zn(c, { x: n, y: i, width: o, height: s, top: i, right: n + o, bottom: s + i, left: n }), c); Zn(this, { target: t, contentRect: l }) }, ui = function () { function t(t, e, r) { if (this.activeObservations_ = [], this.observations_ = new qn, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function."); this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r } return t.prototype.observe = function (t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" != typeof Element && Element instanceof Object) { if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_; e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh()) } }, t.prototype.unobserve = function (t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" != typeof Element && Element instanceof Object) { if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_; e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this)) } }, t.prototype.disconnect = function () { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this) }, t.prototype.gatherActive = function () { var t = this; this.clearActive(), this.observations_.forEach((function (e) { e.isActive() && t.activeObservations_.push(e) })) }, t.prototype.broadcastActive = function () { if (this.hasActive()) { var t = this.callbackCtx_, e = this.activeObservations_.map((function (t) { return new li(t.target, t.broadcastRect()) })); this.callback_.call(t, e, t), this.clearActive() } }, t.prototype.clearActive = function () { this.activeObservations_.splice(0) }, t.prototype.hasActive = function () { return this.activeObservations_.length > 0 }, t }(), fi = "undefined" != typeof WeakMap ? new WeakMap : new qn, hi = function t(e) { if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function."); if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); var r = Jn.getInstance(), n = new ui(e, r, this); fi.set(this, n) };["observe", "unobserve", "disconnect"].forEach((function (t) { hi.prototype[t] = function () { var e; return (e = fi.get(this))[t].apply(e, arguments) } })); var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi, pi = null, vi = null; function gi() { if (null === pi) { if ("undefined" == typeof document) return pi = 0; var t = document.body, e = document.createElement("div"); e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e); var r = e.getBoundingClientRect().right; t.removeChild(e), pi = r } return pi } Yt && window.addEventListener("resize", (function () { vi !== window.devicePixelRatio && (vi = window.devicePixelRatio, pi = null) })); var yi = function (t) { return function (e, r, n, i) { kt(r); var o = Mt(e), s = y(o), a = st(o.length), c = t ? a - 1 : 0, l = t ? -1 : 1; if (n < 2) for (; ;) { if (c in s) { i = s[c], c += l; break } if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value") } for (; t ? c >= 0 : a > c; c += l)c in s && (i = r(i, s[c], c, o)); return i } }, bi = { left: yi(!1), right: yi(!0) }.left; At({ target: "Array", proto: !0, forced: Vt("reduce") }, { reduce: function (t) { return bi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0) } }); var mi = R.f, xi = Function.prototype, Ei = xi.toString, wi = /^\s*function ([^ (]*)/; !l || "name" in xi || mi(xi, "name", { configurable: !0, get: function () { try { return Ei.call(this).match(wi)[1] } catch (t) { return "" } } }); var Oi, _i, Si = function () { var t = T(this), e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e }, Ai = RegExp.prototype.exec, ki = String.prototype.replace, Li = Ai, Mi = (Oi = /a/, _i = /b*/g, Ai.call(Oi, "a"), Ai.call(_i, "a"), 0 !== Oi.lastIndex || 0 !== _i.lastIndex), Ti = void 0 !== /()??/.exec("")[1]; (Mi || Ti) && (Li = function (t) { var e, r, n, i, o = this; return Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))), Mi && (e = o.lastIndex), n = Ai.call(o, t), Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Ti && n && n.length > 1 && ki.call(n[0], r, (function () { for (i = 1; i < arguments.length - 2; i++)void 0 === arguments[i] && (n[i] = void 0) })), n }); var ji = Li; At({ target: "RegExp", proto: !0, forced: /./.exec !== ji }, { exec: ji }); var Ri = zt("species"), Wi = !c((function () { var t = /./; return t.exec = function () { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") })), zi = !c((function () { var t = /(?:)/, e = t.exec; t.exec = function () { return e.apply(this, arguments) }; var r = "ab".split(t); return 2 !== r.length || "a" !== r[0] || "b" !== r[1] })), Ci = function (t, e, r, n) { var i = zt(t), o = !c((function () { var e = {}; return e[i] = function () { return 7 }, 7 != ""[t](e) })), s = o && !c((function () { var e = !1, r = /a/; return r.exec = function () { return e = !0, null }, "split" === t && (r.constructor = {}, r.constructor[Ri] = function () { return r }), r[i](""), !e })); if (!o || !s || "replace" === t && !Wi || "split" === t && !zi) { var a = /./[i], l = r(i, ""[t], (function (t, e, r, n, i) { return e.exec === ji ? o && !i ? { done: !0, value: a.call(e, r, n) } : { done: !0, value: t.call(r, e, n) } : { done: !1 } })), u = l[0], f = l[1]; J(String.prototype, t, u), J(RegExp.prototype, i, 2 == e ? function (t, e) { return f.call(t, this, e) } : function (t) { return f.call(t, this) }), n && W(RegExp.prototype[i], "sham", !0) } }, Ni = Ue.charAt, Ii = function (t, e, r) { return e + (r ? Ni(t, e).length : 1) }, Di = function (t, e) { var r = t.exec; if ("function" == typeof r) { var n = r.call(t, e); if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null"); return n } if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver"); return ji.call(t, e) }; Ci("match", 1, (function (t, e, r) { return [function (e) { var r = b(this), n = null == e ? void 0 : e[t]; return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r)) }, function (t) { var n = r(e, t, this); if (n.done) return n.value; var i = T(t), o = String(this); if (!i.global) return Di(i, o); var s = i.unicode; i.lastIndex = 0; for (var a, c = [], l = 0; null !== (a = Di(i, o));) { var u = String(a[0]); c[l] = u, "" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)), l++ } return 0 === l ? null : c }] })); var Pi = Math.max, Vi = Math.min, Fi = Math.floor, Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g, Hi = /\$([$&'`]|\d\d?)/g; Ci("replace", 2, (function (t, e, r) { return [function (r, n) { var i = b(this), o = null == r ? void 0 : r[t]; return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n) }, function (t, i) { var o = r(e, t, this, i); if (o.done) return o.value; var s = T(t), a = String(this), c = "function" == typeof i; c || (i = String(i)); var l = s.global; if (l) { var u = s.unicode; s.lastIndex = 0 } for (var f = []; ;) { var h = Di(s, a); if (null === h) break; if (f.push(h), !l) break; "" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u)) } for (var d, p = "", v = 0, g = 0; g < f.length; g++) { h = f[g]; for (var y = String(h[0]), b = Pi(Vi(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++)m.push(void 0 === (d = h[x]) ? d : String(d)); var E = h.groups; if (c) { var w = [y].concat(m, b, a); void 0 !== E && w.push(E); var O = String(i.apply(void 0, w)) } else O = n(y, a, b, m, E, i); b >= v && (p += a.slice(v, b) + O, v = b + y.length) } return p + a.slice(v) }]; function n(t, r, n, i, o, s) { var a = n + t.length, c = i.length, l = Hi; return void 0 !== o && (o = Mt(o), l = Bi), e.call(s, l, (function (e, s) { var l; switch (s.charAt(0)) { case "$": return "$"; case "&": return t; case "`": return r.slice(0, n); case "'": return r.slice(a); case "<": l = o[s.slice(1, -1)]; break; default: var u = +s; if (0 === u) return e; if (u > c) { var f = Fi(u / 10); return 0 === f ? e : f <= c ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e } l = i[u - 1] }return void 0 === l ? "" : l })) } })); var qi = function (t) { return Array.prototype.reduce.call(t, (function (t, e) { var r = e.name.match(/data-simplebar-(.+)/); if (r) { var n = r[1].replace(/\W+(.)/g, (function (t, e) { return e.toUpperCase() })); switch (e.value) { case "true": t[n] = !0; break; case "false": t[n] = !1; break; case void 0: t[n] = !0; break; default: t[n] = e.value } } return t }), {}) }; function $i(t) { return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window } function Xi(t) { return t && t.ownerDocument ? t.ownerDocument : document } var Yi = function () { function t(e, r) { var n = this; this.onScroll = function () { var t = $i(n.el); n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0) }, this.scrollX = function () { n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1 }, this.scrollY = function () { n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1 }, this.onMouseEnter = function () { n.showScrollbar("x"), n.showScrollbar("y") }, this.onMouseMove = function (t) { n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y") }, this.onMouseLeave = function () { n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1 }, this.onWindowResize = function () { n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar() }, this.hideScrollbars = function () { n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1) }, this.onPointerEvent = function (t) { var e, r; n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y")))) }, this.drag = function (e) { var r = n.axis[n.draggedAxis].track, i = r.rect[n.axis[n.draggedAxis].sizeAttr], o = n.axis[n.draggedAxis].scrollbar, s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr], a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10); e.preventDefault(), e.stopPropagation(); var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a); "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c }, this.onEndDrag = function (t) { var e = Xi(n.el), r = $i(n.el); t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function () { e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null })) }, this.preventClick = function (t) { t.preventDefault(), t.stopPropagation() }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: !0, isVisible: !1, forceVisible: !1, track: {}, scrollbar: {} } }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, { leading: !0 }), t.getRtlHelpers = Hn(t.getRtlHelpers), this.init()) } t.getRtlHelpers = function () { var e = document.createElement("div"); e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>'; var r = e.firstElementChild; document.body.appendChild(r); var n = r.firstElementChild; r.scrollLeft = 0; var i = t.getOffset(r), o = t.getOffset(n); r.scrollLeft = 999; var s = t.getOffset(n); return { isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0, isRtlScrollbarInverted: i.left !== o.left } }, t.getOffset = function (t) { var e = t.getBoundingClientRect(), r = Xi(t), n = $i(t); return { top: e.top + (n.pageYOffset || r.documentElement.scrollTop), left: e.left + (n.pageXOffset || r.documentElement.scrollLeft) } }; var e = t.prototype; return e.init = function () { t.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners()) }, e.initDOM = function () { var t = this; Xi(this.el); if (Array.prototype.filter.call(this.el.children, (function (e) { return e.classList.contains(t.classNames.wrapper) })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical); else { for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild); this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl) } if (!this.axis.x.track.el || !this.axis.y.track.el) { var e = document.createElement("div"), r = document.createElement("div"); e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el) } this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init") }, e.initListeners = function () { var t = this, e = $i(this.el); this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) { t.el.addEventListener(e, t.onPointerEvent, !0) })), ["touchstart", "touchend", "touchmove"].forEach((function (e) { t.el.addEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 }) })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize); var r = !1, n = e.ResizeObserver || di; this.resizeObserver = new n((function () { r && t.recalculate() })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function () { r = !0 })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 }) }, e.recalculate = function () { var t = $i(this.el); this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction; var e = this.heightAutoObserverEl.offsetHeight <= 1, r = this.heightAutoObserverEl.offsetWidth <= 1, n = this.contentEl.offsetWidth, i = this.contentWrapperEl.offsetWidth, o = this.elStyles.overflowX, s = this.elStyles.overflowY; this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft; var a = this.contentEl.scrollHeight, c = this.contentEl.scrollWidth; this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px"; var l = this.contentWrapperEl.offsetHeight; this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar(); var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0; this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y") }, e.getScrollbarSize = function (t) { if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0; var e, r = this.contentEl[this.axis[t].scrollSizeAttr], n = this.axis[t].track.el[this.axis[t].offsetSizeAttr], i = n / r; return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e }, e.positionScrollbar = function (e) { if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) { var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr], n = this.axis[e].track.el[this.axis[e].offsetSizeAttr], i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), o = this.axis[e].scrollbar, s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr], a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i), c = ~~((n - o.size) * a); c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)" } }, e.toggleTrackVisibility = function (t) { void 0 === t && (t = "y"); var e = this.axis[t].track.el, r = this.axis[t].scrollbar.el; this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none" }, e.hideNativeScrollbar = function () { this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0 }, e.onMouseMoveForAxis = function (t) { void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover) }, e.onMouseLeaveForAxis = function (t) { void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover) }, e.showScrollbar = function (t) { void 0 === t && (t = "y"); var e = this.axis[t].scrollbar.el; this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars() }, e.onDragStart = function (t, e) { void 0 === e && (e = "y"); var r = Xi(this.el), n = $i(this.el), i = this.axis[e].scrollbar, o = "y" === e ? t.pageY : t.pageX; this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null) }, e.onTrackClick = function (t, e) { var r = this; if (void 0 === e && (e = "y"), this.options.clickOnTrack) { var n = $i(this.el); this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(); var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr], o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr], a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1, c = -1 === a ? s - o : s + o; !function t() { var i, o; -1 === a ? s > c && (s -= 40, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += 40, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t)) }() } }, e.getContentElement = function () { return this.contentEl }, e.getScrollElement = function () { return this.contentWrapperEl }, e.getScrollbarWidth = function () { try { return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : gi() } catch (t) { return gi() } }, e.removeListeners = function () { var t = this, e = $i(this.el); this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) { t.el.removeEventListener(e, t.onPointerEvent, !0) })), ["touchstart", "touchend", "touchmove"].forEach((function (e) { t.el.removeEventListener(e, t.onPointerEvent, { capture: !0, passive: !0 }) })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel() }, e.unMount = function () { this.removeListeners(), t.instances.delete(this.el) }, e.isWithinBounds = function (t) { return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height }, e.findChild = function (t, e) { var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; return Array.prototype.filter.call(t.children, (function (t) { return r.call(t, e) }))[0] }, t }(); return Yi.defaultOptions = { autoHide: !0, forceVisible: !1, clickOnTrack: !0, classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging" }, scrollbarMinSize: 25, scrollbarMaxSize: 0, timeout: 1e3 }, Yi.instances = new WeakMap, Yi.initDOMLoadedElements = function () { document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (t) { Yi.instances.has(t) || new Yi(t, qi(t.attributes)) })) }, Yi.removeObserver = function () { this.globalObserver.disconnect() }, Yi.initHtmlApi = function () { this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, { childList: !0, subtree: !0 })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements)) }, Yi.handleMutations = function (t) { t.forEach((function (t) { Array.prototype.forEach.call(t.addedNodes, (function (t) { 1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (t) { !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) }))) })), Array.prototype.forEach.call(t.removedNodes, (function (t) { 1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t) && Yi.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function (t) { Yi.instances.has(t) && Yi.instances.get(t).unMount() }))) })) })) }, Yi.getOptions = qi, Yt && Yi.initHtmlApi(), Yi }));

/**
 * Swiper 5.3.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 29, 2020
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Swiper=t()}(this,(function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s]&&void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter((function(e,t){return t>0})),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},filter:function(e){for(var t=[],s=0;s<this.length;s+=1)e.call(this[s],s,this[s])&&t.push(this[s]);return new i(t)},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach((function(e){s.fn[e]=s.fn[e]||r[e]}));var n={deleteProps:function(e){var t=e;Object.keys(t).forEach((function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map((function(e){return e.replace(",",".")})).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter((function(e){return""!==e}))).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(null!=a)for(var r=Object.keys(Object(a)),o=0,l=r.length;o<l;o+=1){var d=r[o],h=Object.getOwnPropertyDescriptor(a,d);void 0!==h&&h.enumerable&&(n.isObject(i[d])&&n.isObject(a[d])?n.extend(i[d],a[d]):!n.isObject(i[d])&&n.isObject(a[d])?(i[d]={},n.extend(i[d],a[d])):i[d]=a[d])}}return i}},o={touch:t.Modernizr&&!0===t.Modernizr.touch||!!(t.navigator.maxTouchPoints>0||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!!t.PointerEvent&&"maxTouchPoints"in t.navigator&&t.navigator.maxTouchPoints>0,observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t},l=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach((function(e){t.on(e,t.params.on[e])}))},d={components:{configurable:!0}};l.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach((function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)})),s},l.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;function a(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];s.off(e,a),a.f7proxy&&delete a.f7proxy,t.apply(s,i)}return a.f7proxy=t,s.on(e,a,i)},l.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach((function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].length&&i.eventsListeners[e].forEach((function(s,a){(s===t||s.f7proxy&&s.f7proxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},l.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r);var n=Array.isArray(i)?i:i.split(" ");return n.forEach((function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach((function(e){t.push(e)})),t.forEach((function(e){e.apply(a,s)}))}})),r},l.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i];s.params&&n.extend(e,s.params)}))},l.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach((function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach((function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i})),s.on&&t.on&&Object.keys(s.on).forEach((function(e){t.on(e,s.on[e])})),s.create&&s.create.bind(t)(a)}))},d.components.set=function(e){this.use&&this.use(e)},l.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+n.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach((function(t){s.prototype[t]=e.proto[t]})),e.static&&Object.keys(e.static).forEach((function(t){s[t]=e.static[t]})),e.install&&e.install.apply(s,t),s},l.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach((function(e){return s.installModule(e)})),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(l,d);var h={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),n.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,o=this.virtual&&e.virtual.enabled,l=o?this.virtual.slides.length:this.slides.length,d=i.children("."+this.params.slideClass),h=o?this.virtual.slides.length:d.length,p=[],c=[],u=[];function v(t){return!e.cssMode||t!==d.length-1}var f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,T=0;if(void 0!==s){var E,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?d.css({marginLeft:"",marginTop:""}):d.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(E=Math.floor(h/e.slidesPerColumn)===h/this.params.slidesPerColumn?h:Math.ceil(h/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(E=Math.max(E,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,P=E/M,z=Math.floor(h/e.slidesPerColumn),k=0;k<h;k+=1){S=0;var $=d.eq(k);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;if("row"===e.slidesPerColumnFill&&e.slidesPerGroup>1){var O=Math.floor(k/(e.slidesPerGroup*e.slidesPerColumn)),A=k-e.slidesPerColumn*e.slidesPerGroup*O,G=0===O?e.slidesPerGroup:Math.min(Math.ceil((h-O*M*e.slidesPerGroup)/M),e.slidesPerGroup);L=(I=A-(D=Math.floor(A/G))*G+O*e.slidesPerGroup)+D*E/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})}else"column"===e.slidesPerColumnFill?(D=k-(I=Math.floor(k/M))*M,(I>z||I===z&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1)):I=k-(D=Math.floor(k/P))*P;$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px")}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var H=t.getComputedStyle($[0],null),B=$[0].style.transform,N=$[0].style.webkitTransform;if(B&&($[0].style.transform="none"),N&&($[0].style.webkitTransform="none"),e.roundLengths)S=this.isHorizontal()?$.outerWidth(!0):$.outerHeight(!0);else if(this.isHorizontal()){var X=parseFloat(H.getPropertyValue("width")),V=parseFloat(H.getPropertyValue("padding-left")),Y=parseFloat(H.getPropertyValue("padding-right")),F=parseFloat(H.getPropertyValue("margin-left")),W=parseFloat(H.getPropertyValue("margin-right")),R=H.getPropertyValue("box-sizing");S=R&&"border-box"===R?X+F+W:X+V+Y+F+W}else{var q=parseFloat(H.getPropertyValue("height")),j=parseFloat(H.getPropertyValue("padding-top")),K=parseFloat(H.getPropertyValue("padding-bottom")),U=parseFloat(H.getPropertyValue("margin-top")),_=parseFloat(H.getPropertyValue("margin-bottom")),Z=H.getPropertyValue("box-sizing");S=Z&&"border-box"===Z?q+U+_:q+j+K+U+_}B&&($[0].style.transform=B),N&&($[0].style.webkitTransform=N),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),d[k]&&(this.isHorizontal()?d[k].style.width=S+"px":d[k].style.height=S+"px");d[k]&&(d[k].swiperSlideSize=S),u.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==k&&(y=y-s/2-w),0===k&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),T%e.slidesPerGroup==0&&p.push(y),c.push(y)):(e.roundLengths&&(y=Math.floor(y)),(T-Math.min(this.params.slidesPerGroupSkip,T))%this.params.slidesPerGroup==0&&p.push(y),c.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,T+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),e.setWrapperSize&&(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*E,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var Q=0;Q<p.length;Q+=1){var J=p[Q];e.roundLengths&&(J=Math.floor(J)),p[Q]<this.virtualSize+p[0]&&C.push(J)}p=C}if(!e.centeredSlides){C=[];for(var ee=0;ee<p.length;ee+=1){var te=p[ee];e.roundLengths&&(te=Math.floor(te)),p[ee]<=this.virtualSize-s&&C.push(te)}p=C,Math.floor(this.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(this.virtualSize-s)}if(0===p.length&&(p=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?d.filter(v).css({marginLeft:w+"px"}):d.filter(v).css({marginRight:w+"px"}):d.filter(v).css({marginBottom:w+"px"})),e.centeredSlides&&e.centeredSlidesBounds){var ie=0;u.forEach((function(t){ie+=t+(e.spaceBetween?e.spaceBetween:0)}));var se=(ie-=e.spaceBetween)-s;p=p.map((function(e){return e<0?-f:e>se?se+m:e}))}if(e.centerInsufficientSlides){var ae=0;if(u.forEach((function(t){ae+=t+(e.spaceBetween?e.spaceBetween:0)})),(ae-=e.spaceBetween)<s){var re=(s-ae)/2;p.forEach((function(e,t){p[t]=e-re})),c.forEach((function(e,t){c[t]=e+re}))}}n.extend(this,{slides:d,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),h!==l&&this.emit("slidesLengthChange"),p.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),c.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)if(this.params.centeredSlides)i.push.apply(i,this.visibleSlides);else for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,a=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var r=-e;a&&(r=e),i.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(t.centeredSlides?this.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility||t.centeredSlides&&t.autoHeight){var d=-(r-o.swiperSlideOffset),h=d+this.slidesSizesGrid[n];(d>=0&&d<this.size-1||h>1&&h<=this.size||d<=0&&h>=this.size)&&(this.visibleSlides.push(o),this.visibleSlidesIndexes.push(n),i.eq(n).addClass(t.slideVisibleClass))}o.progress=a?-l:l}this.visibleSlides=s(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;e=this&&this.translate&&this.translate*t||0}var i=this.params,s=this.maxTranslate()-this.minTranslate(),a=this.progress,r=this.isBeginning,o=this.isEnd,l=r,d=o;0===s?(a=0,r=!0,o=!0):(r=(a=(e-this.minTranslate())/s)<=0,o=a>=1),n.extend(this,{progress:a,isBeginning:r,isEnd:o}),(i.watchSlidesProgress||i.watchSlidesVisibility||i.centeredSlides&&i.autoHeight)&&this.updateSlidesProgress(e),r&&!l&&this.emit("reachBeginning toEdge"),o&&!d&&this.emit("reachEnd toEdge"),(l&&!r||d&&!o)&&this.emit("fromEdge"),this.emit("progress",a)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,o=this.activeIndex,l=this.realIndex,d=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if(a.indexOf(i)>=0)t=a.indexOf(i);else{var c=Math.min(r.slidesPerGroupSkip,h);t=c+Math.floor((h-c)/r.slidesPerGroup)}if(t>=a.length&&(t=a.length-1),h!==o){var u=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);n.extend(this,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),l!==u&&this.emit("realIndexChange"),(this.initialized||this.runCallbacksOnInit)&&this.emit("slideChange")}else t!==d&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var p={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;if(t.cssMode)return s;var r=n.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.wrapperEl,n=this.progress,o=0,l=0;this.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.cssMode?r[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-o:-l:s.virtualTranslate||a.transform("translate3d("+o+"px, "+l+"px, 0px)"),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?o:l;var d=this.maxTranslate()-this.minTranslate();(0===d?0:(e-this.minTranslate())/d)!==n&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,i,s,a){var r;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0),void 0===s&&(s=!0);var n=this,o=n.params,l=n.wrapperEl;if(n.animating&&o.preventInteractionOnTransition)return!1;var d,h=n.minTranslate(),p=n.maxTranslate();if(d=s&&e>h?h:s&&e<p?p:e,n.updateProgress(d),o.cssMode){var c=n.isHorizontal();return 0===t?l[c?"scrollLeft":"scrollTop"]=-d:l.scrollTo?l.scrollTo(((r={})[c?"left":"top"]=-d,r.behavior="smooth",r)):l[c?"scrollLeft":"scrollTop"]=-d,!0}return 0===t?(n.setTransition(0),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),i&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(e){n&&!n.destroyed&&e.target===this&&(n.$wrapperEl[0].removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].removeEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,i&&n.emit("transitionEnd"))}),n.$wrapperEl[0].addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.$wrapperEl[0].addEventListener("webkitTransitionEnd",n.onTranslateToWrapperTransitionEnd))),!0}};var c={setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;if(!s.cssMode){s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex,a=this.params;if(this.animating=!1,!a.cssMode){this.setTransition(0);var r=t;if(r||(r=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===r?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}}};var u={slideTo:function(e,t,i,s){var a;void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var r=this,n=e;n<0&&(n=0);var o=r.params,l=r.snapGrid,d=r.slidesGrid,h=r.previousIndex,p=r.activeIndex,c=r.rtlTranslate,u=r.wrapperEl;if(r.animating&&o.preventInteractionOnTransition)return!1;var v=Math.min(r.params.slidesPerGroupSkip,n),f=v+Math.floor((n-v)/r.params.slidesPerGroup);f>=l.length&&(f=l.length-1),(p||o.initialSlide||0)===(h||0)&&i&&r.emit("beforeSlideChangeStart");var m,g=-l[f];if(r.updateProgress(g),o.normalizeSlideIndex)for(var b=0;b<d.length;b+=1)-Math.floor(100*g)>=Math.floor(100*d[b])&&(n=b);if(r.initialized&&n!==p){if(!r.allowSlideNext&&g<r.translate&&g<r.minTranslate())return!1;if(!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(p||0)!==n)return!1}if(m=n>p?"next":n<p?"prev":"reset",c&&-g===r.translate||!c&&g===r.translate)return r.updateActiveIndex(n),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(g),"reset"!==m&&(r.transitionStart(i,m),r.transitionEnd(i,m)),!1;if(o.cssMode){var w=r.isHorizontal();return 0===t?u[w?"scrollLeft":"scrollTop"]=-g:u.scrollTo?u.scrollTo(((a={})[w?"left":"top"]=-g,a.behavior="smooth",a)):u[w?"scrollLeft":"scrollTop"]=-g,!0}return 0===t?(r.setTransition(0),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.transitionEnd(i,m)):(r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,s),r.transitionStart(i,m),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,m))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.activeIndex<s.slidesPerGroupSkip?1:s.slidesPerGroup;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return this.slideTo(this.activeIndex+r,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map((function(e){return l(e)})),c=(n.map((function(e){return l(e)})),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0===c&&s.cssMode&&r.forEach((function(e){!c&&h>=e&&(c=e)})),void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===s&&(s=.5);var a=this.activeIndex,r=Math.min(this.params.slidesPerGroupSkip,a),n=r+Math.floor((a-r)/this.params.slidesPerGroup),o=this.rtlTranslate?this.translate:-this.translate;if(o>=this.snapGrid[n]){var l=this.snapGrid[n];o-l>(this.snapGrid[n+1]-l)*s&&(a+=this.params.slidesPerGroup)}else{var d=this.snapGrid[n-1];o-d<=(this.snapGrid[n]-d)*s&&(a-=this.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,this.slidesGrid.length-1),this.slideTo(a,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,o=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),n.nextTick((function(){t.slideTo(o)}))):t.slideTo(o)}else t.slideTo(o)}};var v={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each((function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)}));for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,i=this.slides,s=this.loopedSlides,a=this.allowSlidePrev,r=this.allowSlideNext,n=this.snapGrid,o=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-n[t]-this.getTranslate();if(t<s)e=i.length-3*s+t,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l);else if(t>=i.length-s){e=-i.length+t+s,e+=s,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((o?-this.translate:this.translate)-l)}this.allowSlidePrev=a,this.allowSlideNext=r,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass+",."+t.slideClass+"."+t.slideBlankClass).remove(),i.removeAttr("data-swiper-slide-index")}};var f={setGrabCursor:function(e){if(!(o.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){o.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this.el.style.cursor="")}};var m,g,b,w,y,x,T,E,S,C,M,P,z,k,$,L={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&o.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,l=[],d=r-1;d>=e;d-=1){var h=this.slides.eq(d);h.remove(),l.unshift(h)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<l.length;c+=1)i.append(l[c]);s.loop&&this.loopCreate(),s.observer&&o.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&o.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},I=(m=t.navigator.platform,g=t.navigator.userAgent,b={ios:!1,android:!1,androidChrome:!1,desktop:!1,iphone:!1,ipod:!1,ipad:!1,edge:!1,ie:!1,firefox:!1,macos:!1,windows:!1,cordova:!(!t.cordova&&!t.phonegap),phonegap:!(!t.cordova&&!t.phonegap),electron:!1},w=t.screen.width,y=t.screen.height,x=g.match(/(Android);?[\s\/]+([\d.]+)?/),T=g.match(/(iPad).*OS\s([\d_]+)/),E=g.match(/(iPod)(.*OS\s([\d_]+))?/),S=!T&&g.match(/(iPhone\sOS|iOS)\s([\d_]+)/),C=g.indexOf("MSIE ")>=0||g.indexOf("Trident/")>=0,M=g.indexOf("Edge/")>=0,P=g.indexOf("Gecko/")>=0&&g.indexOf("Firefox/")>=0,z="Win32"===m,k=g.toLowerCase().indexOf("electron")>=0,$="MacIntel"===m,!T&&$&&o.touch&&(1024===w&&1366===y||834===w&&1194===y||834===w&&1112===y||768===w&&1024===y)&&(T=g.match(/(Version)\/([\d.]+)/),$=!1),b.ie=C,b.edge=M,b.firefox=P,x&&!z&&(b.os="android",b.osVersion=x[2],b.android=!0,b.androidChrome=g.toLowerCase().indexOf("chrome")>=0),(T||S||E)&&(b.os="ios",b.ios=!0),S&&!E&&(b.osVersion=S[2].replace(/_/g,"."),b.iphone=!0),T&&(b.osVersion=T[2].replace(/_/g,"."),b.ipad=!0),E&&(b.osVersion=E[3]?E[3].replace(/_/g,"."):null,b.ipod=!0),b.ios&&b.osVersion&&g.indexOf("Version/")>=0&&"10"===b.osVersion.split(".")[0]&&(b.osVersion=g.toLowerCase().split("version/")[1].split(" ")[0]),b.webView=!(!(S||T||E)||!g.match(/.*AppleWebKit(?!.*Safari)/i)&&!t.navigator.standalone)||t.matchMedia&&t.matchMedia("(display-mode: standalone)").matches,b.webview=b.webView,b.standalone=b.webView,b.desktop=!(b.ios||b.android)||k,b.desktop&&(b.electron=k,b.macos=$,b.windows=z,b.macos&&(b.os="macos"),b.windows&&(b.os="windows")),b.pixelRatio=t.devicePixelRatio||1,b);function D(i){var a=this.touchEventsData,r=this.params,o=this.touches;if(!this.animating||!r.preventInteractionOnTransition){var l=i;l.originalEvent&&(l=l.originalEvent);var d=s(l.target);if(("wrapper"!==r.touchEventsTarget||d.closest(this.wrapperEl).length)&&(a.isTouchEvent="touchstart"===l.type,(a.isTouchEvent||!("which"in l)||3!==l.which)&&!(!a.isTouchEvent&&"button"in l&&l.button>0||a.isTouched&&a.isMoved)))if(r.noSwiping&&d.closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||d.closest(r.swipeHandler)[0]){o.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,o.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;var h=o.currentX,p=o.currentY,c=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,u=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(!c||!(h<=u||h>=t.screen.width-u)){if(n.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=h,o.startY=p,a.touchStartTime=n.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){var v=!0;d.is(a.formElements)&&(v=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==d[0]&&e.activeElement.blur();var f=v&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||f)&&l.preventDefault()}this.emit("touchStart",l)}}}}function O(t){var i=this.touchEventsData,a=this.params,r=this.touches,o=this.rtlTranslate,l=t;if(l.originalEvent&&(l=l.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==l.type){var d="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),h="touchmove"===l.type?d.pageX:l.pageX,p="touchmove"===l.type?d.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=p);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(n.extend(r,{startX:h,startY:p,currentX:h,currentY:p}),i.touchStartTime=n.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(p<r.startY&&this.translate<=this.maxTranslate()||p>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&this.translate<=this.maxTranslate()||h>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&l.target===e.activeElement&&s(l.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",l),!(l.targetTouches&&l.targetTouches.length>1)){r.currentX=h,r.currentY=p;var c=r.currentX-r.startX,u=r.currentY-r.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(c,2)+Math.pow(u,2))<this.params.threshold)){var v;if(void 0===i.isScrolling)this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(v=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?v>a.touchAngle:90-v>a.touchAngle);if(i.isScrolling&&this.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,a.cssMode||l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",l)),this.emit("sliderMove",l),i.isMoved=!0;var f=this.isHorizontal()?c:u;r.diff=f,f*=a.touchRatio,o&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&i.currentTranslate>this.minTranslate()?(m=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,g))):f<0&&i.currentTranslate<this.maxTranslate()&&(m=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,g))),m&&(l.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:n.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",l)}function A(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,o=t.$wrapperEl,l=t.slidesGrid,d=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=n.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap click",h),u<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",h)),i.lastClickTime=n.now(),n.nextTick((function(){t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,!s.cssMode)if(s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||n.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,T,E=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),E=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(T=!0);else if(s.freeModeSticky){for(var C,M=0;M<d.length;M+=1)if(d[M]>-y){C=M;break}y=-(y=Math.abs(d[C]-y)<Math.abs(d[C-1]-y)||"next"===t.swipeDirection?d[C]:d[C-1])}if(T&&t.once("transitionEnd",(function(){t.loopFix()})),0!==t.velocity){if(b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity),s.freeModeSticky){var P=Math.abs((r?-y:y)-t.translate),z=t.slidesSizesGrid[t.activeIndex];b=P<z?s.speed:P<2*z?1.5*s.speed:2.5*s.speed}}else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&E?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))}))):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,o.transitionEnd((function(){t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var k=0,$=t.slidesSizesGrid[0],L=0;L<l.length;L+=L<s.slidesPerGroupSkip?1:s.slidesPerGroup){var I=L<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==l[L+I]?p>=l[L]&&p<l[L+I]&&(k=L,$=l[L+I]-l[L]):p>=l[L]&&(k=L,$=l[l.length-1]-l[l.length-2])}var D=(p-l[k])/$,O=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(D>=s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k)),"prev"===t.swipeDirection&&(D>1-s.longSwipesRatio?t.slideTo(k+O):t.slideTo(k))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(h.target===t.navigation.nextEl||h.target===t.navigation.prevEl)?h.target===t.navigation.nextEl?t.slideTo(k+O):t.slideTo(k):("next"===t.swipeDirection&&t.slideTo(k+O),"prev"===t.swipeDirection&&t.slideTo(k))}}}function G(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}function H(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function B(){var e=this.wrapperEl;this.previousTranslate=this.translate,this.translate=this.isHorizontal()?-e.scrollLeft:-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var t=this.maxTranslate()-this.minTranslate();(0===t?0:(this.translate-this.minTranslate())/t)!==this.progress&&this.updateProgress(this.translate),this.emit("setTranslate",this.translate,!1)}var N=!1;function X(){}var V={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,slidesPerGroupSkip:0,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},Y={update:h,translate:p,transition:c,slide:u,loop:v,grabCursor:f,manipulation:L,events:{attachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl;this.onTouchStart=D.bind(this),this.onTouchMove=O.bind(this),this.onTouchEnd=A.bind(this),t.cssMode&&(this.onScroll=B.bind(this)),this.onClick=H.bind(this);var r=!!t.nested;if(!o.touch&&o.pointerEvents)s.addEventListener(i.start,this.onTouchStart,!1),e.addEventListener(i.move,this.onTouchMove,r),e.addEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("touchstart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.addEventListener(i.start,this.onTouchStart,n),s.addEventListener(i.move,this.onTouchMove,o.passiveListener?{passive:!1,capture:r}:r),s.addEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.addEventListener(i.cancel,this.onTouchEnd,n),N||(e.addEventListener("touchstart",X),N=!0)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,r),e.addEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.addEventListener("click",this.onClick,!0),t.cssMode&&a.addEventListener("scroll",this.onScroll),t.updateOnWindowResize?this.on(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G,!0):this.on("observerUpdate",G,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r=!!t.nested;if(!o.touch&&o.pointerEvents)s.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,r),e.removeEventListener(i.end,this.onTouchEnd,!1);else{if(o.touch){var n=!("onTouchStart"!==i.start||!o.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};s.removeEventListener(i.start,this.onTouchStart,n),s.removeEventListener(i.move,this.onTouchMove,r),s.removeEventListener(i.end,this.onTouchEnd,n),i.cancel&&s.removeEventListener(i.cancel,this.onTouchEnd,n)}(t.simulateTouch&&!I.ios&&!I.android||t.simulateTouch&&!o.touch&&I.ios)&&(s.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,r),e.removeEventListener("mouseup",this.onTouchEnd,!1))}(t.preventClicks||t.preventClicksPropagation)&&s.removeEventListener("click",this.onClick,!0),t.cssMode&&a.removeEventListener("scroll",this.onScroll),this.off(I.ios||I.android?"resize orientationchange observerUpdate":"resize observerUpdate",G)}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=this.$el,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var o=this.getBreakpoint(r);if(o&&this.currentBreakpoint!==o){var l=o in r?r[o]:void 0;l&&["slidesPerView","spaceBetween","slidesPerGroup","slidesPerGroupSkip","slidesPerColumn"].forEach((function(e){var t=l[e];void 0!==t&&(l[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")}));var d=l||this.originalParams,h=s.slidesPerColumn>1,p=d.slidesPerColumn>1;h&&!p?a.removeClass(s.containerModifierClass+"multirow "+s.containerModifierClass+"multirow-column"):!h&&p&&(a.addClass(s.containerModifierClass+"multirow"),"column"===d.slidesPerColumnFill&&a.addClass(s.containerModifierClass+"multirow-column"));var c=d.direction&&d.direction!==s.direction,u=s.loop&&(d.slidesPerView!==s.slidesPerView||c);c&&t&&this.changeDirection(),n.extend(this.params,d),n.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=o,u&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",d)}}},getBreakpoint:function(e){if(e){var i=!1,s=Object.keys(e).map((function(e){if("string"==typeof e&&0===e.indexOf("@")){var i=parseFloat(e.substr(1));return{value:t.innerHeight*i,point:e}}return{value:e,point:e}}));s.sort((function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)}));for(var a=0;a<s.length;a+=1){var r=s[a],n=r.point;r.value<=t.innerWidth&&(i=n)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.params,t=this.isLocked,i=this.slides.length>0&&e.slidesOffsetBefore+e.spaceBetween*(this.slides.length-1)+this.slides[0].offsetWidth*this.slides.length;e.slidesOffsetBefore&&e.slidesOffsetAfter&&i?this.isLocked=i<=this.size:this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,t!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),t&&t!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push("initialized"),a.push(t.direction),t.freeMode&&a.push("free-mode"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&(a.push("multirow"),"column"===t.slidesPerColumnFill&&a.push("multirow-column")),I.android&&a.push("android"),I.ios&&a.push("ios"),t.cssMode&&a.push("css-mode"),a.forEach((function(i){e.push(t.containerModifierClass+i)})),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},F={},W=function(e){function t(){for(var i,a,r,l=[],d=arguments.length;d--;)l[d]=arguments[d];1===l.length&&l[0].constructor&&l[0].constructor===Object?r=l[0]:(a=(i=l)[0],r=i[1]),r||(r={}),r=n.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(Y).forEach((function(e){Object.keys(Y[e]).forEach((function(i){t.prototype[i]||(t.prototype[i]=Y[e][i])}))}));var h=this;void 0===h.modules&&(h.modules={}),Object.keys(h.modules).forEach((function(e){var t=h.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s||null===s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}}));var p=n.extend({},V);h.useModulesParams(p),h.params=n.extend({},p,F,r),h.originalParams=n.extend({},h.params),h.passedParams=n.extend({},r),h.$=s;var c=s(h.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each((function(e,i){var s=n.extend({},r,{el:i});u.push(new t(s))})),u}var v,f,m;return a.swiper=h,c.data("swiper",h),a&&a.shadowRoot&&a.shadowRoot.querySelector?(v=s(a.shadowRoot.querySelector("."+h.params.wrapperClass))).children=function(e){return c.children(e)}:v=c.children("."+h.params.wrapperClass),n.extend(h,{$el:c,el:a,$wrapperEl:v,wrapperEl:v[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===h.params.direction},isVertical:function(){return"vertical"===h.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===h.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===v.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:h.params.allowSlideNext,allowSlidePrev:h.params.allowSlidePrev,touchEvents:(f=["touchstart","touchmove","touchend","touchcancel"],m=["mousedown","mousemove","mouseup"],o.pointerEvents&&(m=["pointerdown","pointermove","pointerup"]),h.touchEventsTouch={start:f[0],move:f[1],end:f[2],cancel:f[3]},h.touchEventsDesktop={start:m[0],move:m[1],end:m[2]},o.touch||!h.params.simulateTouch?h.touchEventsTouch:h.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video, label",lastClickTime:n.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:h.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),h.useModules(),h.params.init&&h.init(),h}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.changeDirection=function(e,t){void 0===t&&(t=!0);var i=this.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?this:(this.$el.removeClass(""+this.params.containerModifierClass+i).addClass(""+this.params.containerModifierClass+e),this.params.direction=e,this.slides.each((function(t,i){"vertical"===e?i.style.width="":i.style.height=""})),this.emit("changeDirection"),t&&this.update(),this)},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,o=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),o&&o.length&&o.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((function(e){i.off(e)})),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),n.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){n.extend(F,e)},i.extendedDefaults.get=function(){return F},i.defaults.get=function(){return V},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(l),R={name:"device",proto:{device:I},static:{device:I}},q={name:"support",proto:{support:o},static:{support:o}},j={isEdge:!!t.navigator.userAgent.match(/Edge/g),isSafari:function(){var e=t.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)},K={name:"browser",proto:{browser:j},static:{browser:j}},U={name:"resize",create:function(){var e=this;n.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},_={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,i){void 0===i&&(i={});var s=this,a=new(0,_.func)((function(e){if(1!==e.length){var i=function(){s.emit("observerUpdate",e[0])};t.requestAnimationFrame?t.requestAnimationFrame(i):t.setTimeout(i,0)}else s.emit("observerUpdate",e[0])}));a.observe(e,{attributes:void 0===i.attributes||i.attributes,childList:void 0===i.childList||i.childList,characterData:void 0===i.characterData||i.characterData}),s.observer.observers.push(a)},init:function(){if(o.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:this.params.observeSlideChildren}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach((function(e){e.disconnect()})),this.observer.observers=[]}},Z={name:"observer",params:{observer:!1,observeParents:!1,observeSlideChildren:!1},create:function(){n.extend(this,{observer:{init:_.init.bind(this),attach:_.attach.bind(this),destroy:_.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},Q={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,o=t.params.virtual,l=o.addSlidesBefore,d=o.addSlidesAfter,h=t.virtual,p=h.from,c=h.to,u=h.slides,v=h.slidesGrid,f=h.renderSlide,m=h.offset;t.updateActiveIndex();var g,b,w,y=t.activeIndex||0;g=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(b=Math.floor(s/2)+a+l,w=Math.floor(s/2)+a+d):(b=s+(a-1)+l,w=a+d);var x=Math.max((y||0)-w,0),T=Math.min((y||0)+b,u.length-1),E=(t.slidesGrid[x]||0)-(t.slidesGrid[0]||0);function S(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(n.extend(t.virtual,{from:x,to:T,offset:E,slidesGrid:t.slidesGrid}),p===x&&c===T&&!e)return t.slidesGrid!==v&&E!==m&&t.slides.css(g,E+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:E,from:x,to:T,slides:function(){for(var e=[],t=x;t<=T;t+=1)e.push(u[t]);return e}()}),void S();var C=[],M=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var P=p;P<=c;P+=1)(P<x||P>T)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+P+'"]').remove();for(var z=0;z<u.length;z+=1)z>=x&&z<=T&&(void 0===c||e?M.push(z):(z>c&&M.push(z),z<p&&C.push(z)));M.forEach((function(e){t.$wrapperEl.append(f(u[e],e))})),C.sort((function(e,t){return t-e})).forEach((function(e){t.$wrapperEl.prepend(f(u[e],e))})),t.$wrapperEl.children(".swiper-slide").css(g,E+"px"),S()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){if("object"==typeof e&&"length"in e)for(var t=0;t<e.length;t+=1)e[t]&&this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);this.virtual.update(!0)},prependSlide:function(e){var t=this.activeIndex,i=t+1,s=1;if(Array.isArray(e)){for(var a=0;a<e.length;a+=1)e[a]&&this.virtual.slides.unshift(e[a]);i=t+e.length,s=e.length}else this.virtual.slides.unshift(e);if(this.params.virtual.cache){var r=this.virtual.cache,n={};Object.keys(r).forEach((function(e){var t=r[e],i=t.attr("data-swiper-slide-index");i&&t.attr("data-swiper-slide-index",parseInt(i,10)+1),n[parseInt(e,10)+s]=t})),this.virtual.cache=n}this.virtual.update(!0),this.slideTo(i,0)},removeSlide:function(e){if(null!=e){var t=this.activeIndex;if(Array.isArray(e))for(var i=e.length-1;i>=0;i-=1)this.virtual.slides.splice(e[i],1),this.params.virtual.cache&&delete this.virtual.cache[e[i]],e[i]<t&&(t-=1),t=Math.max(t,0);else this.virtual.slides.splice(e,1),this.params.virtual.cache&&delete this.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);this.virtual.update(!0),this.slideTo(t,0)}},removeAllSlides:function(){this.virtual.slides=[],this.params.virtual.cache&&(this.virtual.cache={}),this.virtual.update(!0),this.slideTo(0,0)}},J={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){n.extend(this,{virtual:{update:Q.update.bind(this),appendSlide:Q.appendSlide.bind(this),prependSlide:Q.prependSlide.bind(this),removeSlide:Q.removeSlide.bind(this),removeAllSlides:Q.removeAllSlides.bind(this),renderSlide:Q.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};n.extend(this.params,e),n.extend(this.originalParams,e),this.params.initialSlide||this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},ee={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r||34===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r||33===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(33===r||34===r||37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(33!==r&&34!==r&&37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(34!==r&&39!==r||s)&&(33!==r&&37!==r||!s)||this.slideNext(),(33!==r&&37!==r||s)&&(34!==r&&39!==r||!s)||this.slidePrev()):(33!==r&&34!==r&&38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),34!==r&&40!==r||this.slideNext(),33!==r&&38!==r||this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},te={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){n.extend(this,{keyboard:{enabled:!1,enable:ee.enable.bind(this),disable:ee.disable.bind(this),handle:ee.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var ie={lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[],event:function(){return t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel"},normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),e.shiftKey&&!s&&(s=a,a=0),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,i=this,a=i.params.mousewheel;i.params.cssMode&&t.preventDefault();var r=i.$el;if("container"!==i.params.mousewheel.eventsTarged&&(r=s(i.params.mousewheel.eventsTarged)),!i.mouseEntered&&!r[0].contains(t.target)&&!a.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var o=0,l=i.rtlTranslate?-1:1,d=ie.normalize(t);if(a.forceToAxis)if(i.isHorizontal()){if(!(Math.abs(d.pixelX)>Math.abs(d.pixelY)))return!0;o=d.pixelX*l}else{if(!(Math.abs(d.pixelY)>Math.abs(d.pixelX)))return!0;o=d.pixelY}else o=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*l:-d.pixelY;if(0===o)return!0;if(a.invert&&(o=-o),i.params.freeMode){var h={time:n.now(),delta:Math.abs(o),direction:Math.sign(o)},p=i.mousewheel.lastEventBeforeSnap,c=p&&h.time<p.time+500&&h.delta<=p.delta&&h.direction===p.direction;if(!c){i.mousewheel.lastEventBeforeSnap=void 0,i.params.loop&&i.loopFix();var u=i.getTranslate()+o*a.sensitivity,v=i.isBeginning,f=i.isEnd;if(u>=i.minTranslate()&&(u=i.minTranslate()),u<=i.maxTranslate()&&(u=i.maxTranslate()),i.setTransition(0),i.setTranslate(u),i.updateProgress(),i.updateActiveIndex(),i.updateSlidesClasses(),(!v&&i.isBeginning||!f&&i.isEnd)&&i.updateSlidesClasses(),i.params.freeModeSticky){clearTimeout(i.mousewheel.timeout),i.mousewheel.timeout=void 0;var m=i.mousewheel.recentWheelEvents;m.length>=15&&m.shift();var g=m.length?m[m.length-1]:void 0,b=m[0];if(m.push(h),g&&(h.delta>g.delta||h.direction!==g.direction))m.splice(0);else if(m.length>=15&&h.time-b.time<500&&b.delta-h.delta>=1&&h.delta<=6){var w=o>0?.8:.2;i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.mousewheel.timeout=n.nextTick((function(){i.slideToClosest(i.params.speed,!0,void 0,w)}),0)}i.mousewheel.timeout||(i.mousewheel.timeout=n.nextTick((function(){i.mousewheel.lastEventBeforeSnap=h,m.splice(0),i.slideToClosest(i.params.speed,!0,void 0,.5)}),500))}if(c||i.emit("scroll",t),i.params.autoplay&&i.params.autoplayDisableOnInteraction&&i.autoplay.stop(),u===i.minTranslate()||u===i.maxTranslate())return!0}}else{var y={time:n.now(),delta:Math.abs(o),direction:Math.sign(o),raw:e},x=i.mousewheel.recentWheelEvents;x.length>=2&&x.shift();var T=x.length?x[x.length-1]:void 0;if(x.push(y),T?(y.direction!==T.direction||y.delta>T.delta)&&i.mousewheel.animateSlider(y):i.mousewheel.animateSlider(y),i.mousewheel.releaseScroll(y))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},animateSlider:function(e){return e.delta>=6&&n.now()-this.mousewheel.lastScrollTime<60||(e.direction<0?this.isEnd&&!this.params.loop||this.animating||(this.slideNext(),this.emit("scroll",e.raw)):this.isBeginning&&!this.params.loop||this.animating||(this.slidePrev(),this.emit("scroll",e.raw)),this.mousewheel.lastScrollTime=(new t.Date).getTime(),!1)},releaseScroll:function(e){var t=this.params.mousewheel;if(e.direction<0){if(this.isEnd&&!this.params.loop&&t.releaseOnEdges)return!0}else if(this.isBeginning&&!this.params.loop&&t.releaseOnEdges)return!0;return!1},enable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.removeEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.on("mouseenter",this.mousewheel.handleMouseEnter),t.on("mouseleave",this.mousewheel.handleMouseLeave),t.on(e,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){var e=ie.event();if(this.params.cssMode)return this.wrapperEl.addEventListener(e,this.mousewheel.handle),!0;if(!e)return!1;if(!this.mousewheel.enabled)return!1;var t=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(t=s(this.params.mousewheel.eventsTarged)),t.off(e,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},se={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,i=this.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=s(i.nextEl),this.params.uniqueNavElements&&"string"==typeof i.nextEl&&e.length>1&&1===this.$el.find(i.nextEl).length&&(e=this.$el.find(i.nextEl))),i.prevEl&&(t=s(i.prevEl),this.params.uniqueNavElements&&"string"==typeof i.prevEl&&t.length>1&&1===this.$el.find(i.prevEl).length&&(t=this.$el.find(i.prevEl))),e&&e.length>0&&e.on("click",this.navigation.onNextClick),t&&t.length>0&&t.on("click",this.navigation.onPrevClick),n.extend(this.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click",this.navigation.onNextClick),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click",this.navigation.onPrevClick),i.removeClass(this.params.navigation.disabledClass))}},ae={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each((function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))}));else{var p=h.eq(i),c=p.index();if(p.addClass(t.bulletActiveClass),t.dynamicBullets){for(var u=h.eq(o),v=h.eq(l),f=o;f<=l;f+=1)h.eq(f).addClass(t.bulletActiveClass+"-main");if(this.params.loop)if(c>=h.length-t.dynamicMainBullets){for(var m=t.dynamicMainBullets;m>=0;m-=1)h.eq(h.length-m).addClass(t.bulletActiveClass+"-main");h.eq(h.length-t.dynamicMainBullets-1).addClass(t.bulletActiveClass+"-prev")}else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next");else u.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),v.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}}if(t.dynamicBullets){var g=Math.min(h.length,t.dynamicMainBullets+4),b=(this.pagination.bulletSize*g-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,w=e?"right":"left";h.css(this.isHorizontal()?w:"top",b+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var y;y=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var x=(i+1)/n,T=1,E=1;"horizontal"===y?T=x:E=x,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+T+") scaleY("+E+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,(function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),n.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},re={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(r.transform("translate3d("+d+"px, 0, 0)"),r[0].style.width=l+"px"):(r.transform("translate3d(0px, "+d+"px, 0)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout((function(){n[0].style.opacity=0,n.transition(400)}),1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,o=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbar.hide&&(i[0].style.opacity=0),n.extend(e,{trackSize:a,divider:r,moveDivider:o,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},getPointerPosition:function(e){return this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize,o=i.dragStartPos;t=(i.getPointerPosition(e)-a.offset()[this.isHorizontal()?"left":"top"]-(null!==o?o:r/2))/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(l),this.setTranslate(l),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,this.scrollbar.dragStartPos=e.target===r[0]||e.target===r?i.getPointerPosition(e)-e.target.getBoundingClientRect()[this.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.params.cssMode&&this.$wrapperEl.css("scroll-snap-type","none"),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,this.params.cssMode&&(this.$wrapperEl.css("scroll-snap-type",""),s.transition("")),t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=n.nextTick((function(){a.css("opacity",0),a.transition(400)}),1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,l))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEventsTouch,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!o.passiveListener||!a.passiveListeners)&&{passive:!1,capture:!1},l=!(!o.passiveListener||!a.passiveListeners)&&{passive:!0,capture:!1};o.touch?(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,l)):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,l))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),n.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},ne={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",null!=h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(null==d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,a)})),i.each((function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){e.parallax.setTransform(i,n)}))}))},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)}))}},oe={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!o.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=oe.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest("."+this.params.slideClass),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=oe.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(o.gestures?i.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!o.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!I.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(I.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=n.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=n.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,o=s.height*t.scale;if(!(r<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,e.currentScale=1,t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,s,a,r,n,o,l,d,h,p,c,u,v,f,m,g=this.zoom,b=this.params.zoom,w=g.gesture,y=g.image;(w.$slideEl||(w.$slideEl=this.slides.eq(this.activeIndex),w.$imageEl=w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),w.$imageWrapEl=w.$imageEl.parent("."+b.containerClass)),w.$imageEl&&0!==w.$imageEl.length)&&(w.$slideEl.addClass(""+b.zoomedSlideClass),void 0===y.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=y.touchesStart.x,i=y.touchesStart.y),g.scale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,g.currentScale=w.$imageWrapEl.attr("data-swiper-zoom")||b.maxRatio,e?(f=w.$slideEl[0].offsetWidth,m=w.$slideEl[0].offsetHeight,s=w.$slideEl.offset().left+f/2-t,a=w.$slideEl.offset().top+m/2-i,o=w.$imageEl[0].offsetWidth,l=w.$imageEl[0].offsetHeight,d=o*g.scale,h=l*g.scale,u=-(p=Math.min(f/2-d/2,0)),v=-(c=Math.min(m/2-h/2,0)),(r=s*g.scale)<p&&(r=p),r>u&&(r=u),(n=a*g.scale)<c&&(n=c),n>v&&(n=v)):(r=0,n=0),w.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),w.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+g.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.on("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.on("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.on("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.on(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.on(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!o.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1},i=!o.passiveListener||{passive:!1,capture:!0},s="."+this.params.slideClass;o.gestures?(this.$wrapperEl.off("gesturestart",s,e.onGestureStart,t),this.$wrapperEl.off("gesturechange",s,e.onGestureChange,t),this.$wrapperEl.off("gestureend",s,e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,s,e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,s,e.onGestureChange,i),this.$wrapperEl.off(this.touchEvents.end,s,e.onGestureEnd,t),this.touchEvents.cancel&&this.$wrapperEl.off(this.touchEvents.cancel,s,e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove,i)}}},le={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each((function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,(function(){if(null!=i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0]),i.params.autoHeight&&i.updateAutoHeight()}})),i.emit("lazyImageLoad",r[0],o[0])}))}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each((function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)}));else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},de={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new de.LinearSpline(this.slidesGrid,e.slidesGrid):new de.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof W&&n(r[o]);else r instanceof W&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.params.autoHeight&&n.nextTick((function(){t.updateAutoHeight()})),t.$wrapperEl.transitionEnd((function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())})))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof W&&r(a[i]);else a instanceof W&&t!==a&&r(a)}},he={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop&&this.navigation){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each((function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))}))},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},pe={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=pe.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=pe.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter((function(e){return""!==e})),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=pe.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(pe.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},ce={onHashCange:function(){var t=e.location.hash.replace("#","");if(t!==this.slides.eq(this.activeIndex).attr("data-hash")){var i=this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===i)return;this.slideTo(i)}},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},ue={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(e.autoplay.timeout),e.autoplay.timeout=n.nextTick((function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")),e.params.cssMode&&e.autoplay.running&&e.autoplay.run()}),i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},ve={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd((function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}}))}}},fe={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var T="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(T),d.slideShadows){var E=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(c)-90*Math.floor(Math.abs(c)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),P=d.shadowScale,z=d.shadowScale/M,k=d.shadowOffset;e.transform("scale3d("+P+", 1, "+z+") translate3d(0px, "+(n/2+k)+"px, "+-n/2/z+"px) rotateX(-90deg)")}var $=j.isSafari||j.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},me={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd((function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}}))}}},ge={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,l=this.isHorizontal(),d=this.translate,h=l?e/2-d:t/2-d,p=l?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(h-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=l?p*g:0,w=l?0:p*g,y=-c*Math.abs(g),x=n.stretch;"string"==typeof x&&-1!==x.indexOf("%")&&(x=parseFloat(n.stretch)/100*m);var T=l?0:x*g,E=l?x*g:0;Math.abs(E)<.001&&(E=0),Math.abs(T)<.001&&(T=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var S="translate3d("+E+"px,"+T+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(S),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var C=l?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),M=l?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(l?"left":"top")+'"></div>'),f.append(C)),0===M.length&&(M=s('<div class="swiper-slide-shadow-'+(l?"right":"bottom")+'"></div>'),f.append(M)),C.length&&(C[0].style.opacity=g>0?g:0),M.length&&(M[0].style.opacity=-g>0?-g:0)}}(o.pointerEvents||o.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=h+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},be={init:function(){var e=this.params.thumbs,t=this.constructor;e.swiper instanceof t?(this.thumbs.swiper=e.swiper,n.extend(this.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),n.extend(this.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):n.isObject(e.swiper)&&(this.thumbs.swiper=new t(n.extend({},e.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),this.thumbs.swiperCreated=!0),this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),this.thumbs.swiper.on("tap",this.thumbs.onThumbClick)},onThumbClick:function(){var e=this.thumbs.swiper;if(e){var t=e.clickedIndex,i=e.clickedSlide;if(!(i&&s(i).hasClass(this.params.thumbs.slideThumbActiveClass)||null==t)){var a;if(a=e.params.loop?parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"),10):t,this.params.loop){var r=this.activeIndex;this.slides.eq(r).hasClass(this.params.slideDuplicateClass)&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,r=this.activeIndex);var n=this.slides.eq(r).prevAll('[data-swiper-slide-index="'+a+'"]').eq(0).index(),o=this.slides.eq(r).nextAll('[data-swiper-slide-index="'+a+'"]').eq(0).index();a=void 0===n?o:void 0===o?n:o-r<r-n?o:n}this.slideTo(a)}}},update:function(e){var t=this.thumbs.swiper;if(t){var i="auto"===t.params.slidesPerView?t.slidesPerViewDynamic():t.params.slidesPerView;if(this.realIndex!==t.realIndex){var s,a=t.activeIndex;if(t.params.loop){t.slides.eq(a).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,a=t.activeIndex);var r=t.slides.eq(a).prevAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index(),n=t.slides.eq(a).nextAll('[data-swiper-slide-index="'+this.realIndex+'"]').eq(0).index();s=void 0===r?n:void 0===n?r:n-a==a-r?a:n-a<a-r?n:r}else s=this.realIndex;t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(s)<0&&(t.params.centeredSlides?s=s>a?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:s>a&&(s=s-i+1),t.slideTo(s,e?0:void 0))}var o=1,l=this.params.thumbs.slideThumbActiveClass;if(this.params.slidesPerView>1&&!this.params.centeredSlides&&(o=this.params.slidesPerView),this.params.thumbs.multipleActiveThumbs||(o=1),o=Math.floor(o),t.slides.removeClass(l),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(var d=0;d<o;d+=1)t.$wrapperEl.children('[data-swiper-slide-index="'+(this.realIndex+d)+'"]').addClass(l);else for(var h=0;h<o;h+=1)t.slides.eq(this.realIndex+h).addClass(l)}}},we=[R,q,K,U,Z,J,te,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){n.extend(this,{mousewheel:{enabled:!1,enable:ie.enable.bind(this),disable:ie.disable.bind(this),handle:ie.handle.bind(this),handleMouseEnter:ie.handleMouseEnter.bind(this),handleMouseLeave:ie.handleMouseLeave.bind(this),animateSlider:ie.animateSlider.bind(this),releaseScroll:ie.releaseScroll.bind(this),lastScrollTime:n.now(),lastEventBeforeSnap:void 0,recentWheelEvents:[]}})},on:{init:function(){!this.params.mousewheel.enabled&&this.params.cssMode&&this.mousewheel.disable(),this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.params.cssMode&&this.mousewheel.enable(),this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){n.extend(this,{navigation:{init:se.init.bind(this),update:se.update.bind(this),destroy:se.destroy.bind(this),onNextClick:se.onNextClick.bind(this),onPrevClick:se.onPrevClick.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t,i=this.navigation,a=i.$nextEl,r=i.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(r)||s(e.target).is(a)||(a?t=a.hasClass(this.params.navigation.hiddenClass):r&&(t=r.hasClass(this.params.navigation.hiddenClass)),!0===t?this.emit("navigationShow",this):this.emit("navigationHide",this),a&&a.toggleClass(this.params.navigation.hiddenClass),r&&r.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){n.extend(this,{pagination:{init:ae.init.bind(this),render:ae.render.bind(this),update:ae.update.bind(this),destroy:ae.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&(!0===this.pagination.$el.hasClass(this.params.pagination.hiddenClass)?this.emit("paginationShow",this):this.emit("paginationHide",this),this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){n.extend(this,{scrollbar:{init:re.init.bind(this),destroy:re.destroy.bind(this),updateSize:re.updateSize.bind(this),setTranslate:re.setTranslate.bind(this),setTransition:re.setTransition.bind(this),enableDraggable:re.enableDraggable.bind(this),disableDraggable:re.disableDraggable.bind(this),setDragPosition:re.setDragPosition.bind(this),getPointerPosition:re.getPointerPosition.bind(this),onDragStart:re.onDragStart.bind(this),onDragMove:re.onDragMove.bind(this),onDragEnd:re.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){n.extend(this,{parallax:{setTransform:ne.setTransform.bind(this),setTranslate:ne.setTranslate.bind(this),setTransition:ne.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax.enabled&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax.enabled&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i){t[i]=oe[i].bind(e)})),n.extend(e,{zoom:t});var i=1;Object.defineProperty(e.zoom,"scale",{get:function(){return i},set:function(t){if(i!==t){var s=e.zoom.gesture.$imageEl?e.zoom.gesture.$imageEl[0]:void 0,a=e.zoom.gesture.$slideEl?e.zoom.gesture.$slideEl[0]:void 0;e.emit("zoomChange",t,s,a)}i=t}})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()},slideChange:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.params.cssMode&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){n.extend(this,{lazy:{initialImageLoaded:!1,load:le.load.bind(this),loadInSlide:le.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()},slideChange:function(){this.params.lazy.enabled&&this.params.cssMode&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){n.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:de.getInterpolateFunction.bind(this),setTranslate:de.setTranslate.bind(this),setTransition:de.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;n.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(he).forEach((function(t){e.a11y[t]=he[t].bind(e)}))},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){n.extend(this,{history:{init:pe.init.bind(this),setHistory:pe.setHistory.bind(this),setHistoryPopState:pe.setHistoryPopState.bind(this),scrollToSlide:pe.scrollToSlide.bind(this),destroy:pe.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)},slideChange:function(){this.history.initialized&&this.params.cssMode&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){n.extend(this,{hashNavigation:{initialized:!1,init:ce.init.bind(this),destroy:ce.destroy.bind(this),setHash:ce.setHash.bind(this),onHashCange:ce.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()},slideChange:function(){this.hashNavigation.initialized&&this.params.cssMode&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;n.extend(e,{autoplay:{running:!1,paused:!1,run:ue.run.bind(e),start:ue.start.bind(e),stop:ue.stop.bind(e),pause:ue.pause.bind(e),onVisibilityChange:function(){"hidden"===document.visibilityState&&e.autoplay.running&&e.autoplay.pause(),"visible"===document.visibilityState&&e.autoplay.paused&&(e.autoplay.run(),e.autoplay.paused=!1)},onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&(this.autoplay.start(),document.addEventListener("visibilitychange",this.autoplay.onVisibilityChange))},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},touchEnd:function(){this.params.cssMode&&this.autoplay.paused&&!this.params.autoplay.disableOnInteraction&&this.autoplay.run()},destroy:function(){this.autoplay.running&&this.autoplay.stop(),document.removeEventListener("visibilitychange",this.autoplay.onVisibilityChange)}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){n.extend(this,{fadeEffect:{setTranslate:ve.setTranslate.bind(this),setTransition:ve.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){n.extend(this,{cubeEffect:{setTranslate:fe.setTranslate.bind(this),setTransition:fe.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){n.extend(this,{flipEffect:{setTranslate:me.setTranslate.bind(this),setTransition:me.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};n.extend(this.params,e),n.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){n.extend(this,{coverflowEffect:{setTranslate:ge.setTranslate.bind(this),setTransition:ge.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{multipleActiveThumbs:!0,swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){n.extend(this,{thumbs:{swiper:null,init:be.init.bind(this),update:be.update.bind(this),onThumbClick:be.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===W.use&&(W.use=W.Class.use,W.installModule=W.Class.installModule),W.use(we),W}));
//# sourceMappingURL=swiper.min.js.map
! function () {
  "use strict";

  function e(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }

  function t(e) {
    return e[e.length - 1]
  }

  function i(e, ...t) {
    return t.forEach(t => {
      e.includes(t) || e.push(t)
    }), e
  }

  function s(e, t) {
    return e ? e.split(t) : []
  }

  function a(e, t, i) {
    return (void 0 === t || e >= t) && (void 0 === i || e <= i)
  }

  function n(e, t, i) {
    return e < t ? t : e > i ? i : e
  }

  function r(e, t, i = {}, s = 0, a = "") {
    a += `<${Object.keys(i).reduce((e, t) => { let a = i[t]; return "function" == typeof a && (a = a(s)), `${e} ${t}="${a}"` }, e)}></${e}>`;
    const n = s + 1;
    return n < t ? r(e, t, i, n, a) : a
  }

  function d(e) {
    return e.replace(/>\s+/g, ">").replace(/\s+</, "<")
  }

  function o(e) {
    return new Date(e).setHours(0, 0, 0, 0)
  }

  function c() {
    return (new Date).setHours(0, 0, 0, 0)
  }

  function l(...e) {
    switch (e.length) {
      case 0:
        return c();
      case 1:
        return o(e[0])
    }
    const t = new Date(0);
    return t.setFullYear(...e), t.setHours(0, 0, 0, 0)
  }

  function h(e, t) {
    const i = new Date(e);
    return i.setDate(i.getDate() + t)
  }

  function u(e, t) {
    const i = new Date(e),
      s = i.getMonth() + t;
    let a = s % 12;
    a < 0 && (a += 12);
    const n = i.setMonth(s);
    return i.getMonth() !== a ? i.setDate(0) : n
  }

  function f(e, t) {
    const i = new Date(e),
      s = i.getMonth(),
      a = i.setFullYear(i.getFullYear() + t);
    return 1 === s && 2 === i.getMonth() ? i.setDate(0) : a
  }

  function p(e, t) {
    return (e - t + 7) % 7
  }

  function g(e, t, i = 0) {
    const s = new Date(e).getDay();
    return h(e, p(t, i) - p(s, i))
  }

  function m(e, t) {
    const i = new Date(e).getFullYear();
    return Math.floor(i / t) * t
  }
  const w = /dd?|DD?|mm?|MM?|yy?(?:yy)?/,
    y = /[\s!-/:-@[-`{-~年月日]+/;
  let k = {};
  const D = {
    y: (e, t) => new Date(e).setFullYear(parseInt(t, 10)),
    m(e, t, i) {
      const s = new Date(e);
      let a = parseInt(t, 10) - 1;
      if (isNaN(a)) {
        if (!t) return NaN;
        const e = t.toLowerCase(),
          s = t => t.toLowerCase().startsWith(e);
        if ((a = i.monthsShort.findIndex(s)) < 0 && (a = i.months.findIndex(s)), a < 0) return NaN
      }
      return s.setMonth(a), s.getMonth() !== function e(t) {
        return t > -1 ? t % 12 : e(t + 12)
      }(a) ? s.setDate(0) : s.getTime()
    },
    d: (e, t) => new Date(e).setDate(parseInt(t, 10))
  },
    v = {
      d: e => e.getDate(),
      dd: e => b(e.getDate(), 2),
      D: (e, t) => t.daysShort[e.getDay()],
      DD: (e, t) => t.days[e.getDay()],
      m: e => e.getMonth() + 1,
      mm: e => b(e.getMonth() + 1, 2),
      M: (e, t) => t.monthsShort[e.getMonth()],
      MM: (e, t) => t.months[e.getMonth()],
      y: e => e.getFullYear(),
      yy: e => b(e.getFullYear(), 2).slice(-2),
      yyyy: e => b(e.getFullYear(), 4)
    };

  function b(e, t) {
    return e.toString().padStart(t, "0")
  }

  function x(e) {
    if ("string" != typeof e) throw new Error("Invalid date format.");
    if (e in k) return k[e];
    const i = e.split(w),
      s = e.match(new RegExp(w, "g"));
    if (0 === i.length || !s) throw new Error("Invalid date format.");
    const a = s.map(e => v[e]),
      n = Object.keys(D).reduce((e, t) => {
        return s.find(e => "D" !== e[0] && e[0].toLowerCase() === t) && e.push(t), e
      }, []);
    return k[e] = {
      parser(e, t) {
        const i = e.split(y).reduce((e, t, i) => {
          if (t.length > 0 && s[i]) {
            const a = s[i][0];
            "M" === a ? e.m = t : "D" !== a && (e[a] = t)
          }
          return e
        }, {});
        return n.reduce((e, s) => {
          const a = D[s](e, i[s], t);
          return isNaN(a) ? e : a
        }, c())
      },
      formatter: (e, s) => a.reduce((t, a, n) => t + `${i[n]}${a(e, s)}`, "") + t(i)
    }
  }

  function M(e, t, i) {
    if (e instanceof Date || "number" == typeof e) {
      const t = o(e);
      return isNaN(t) ? void 0 : t
    }
    if (e) {
      if ("today" === e) return c();
      if (t && t.toValue) {
        const s = t.toValue(e, t, i);
        return isNaN(s) ? void 0 : o(s)
      }
      return x(t).parser(e, i)
    }
  }

  function S(e, t, i) {
    if (isNaN(e) || !e && 0 !== e) return "";
    const s = "number" == typeof e ? new Date(e) : e;
    return t.toDisplay ? t.toDisplay(s, t, i) : x(t).formatter(s, i)
  }
  const O = new WeakMap,
    {
      addEventListener: C,
      removeEventListener: E
    } = EventTarget.prototype;

  function F(e, t) {
    let i = O.get(e);
    i || (i = [], O.set(e, i)), t.forEach(e => {
      C.call(...e), i.push(e)
    })
  }

  function V(e) {
    let t = O.get(e);
    t && (t.forEach(e => {
      E.call(...e)
    }), O.delete(e))
  }
  if (!Event.prototype.composedPath) {
    const e = (t, i = []) => {
      let s;
      return i.push(t), t.parentNode ? s = t.parentNode : t.host ? s = t.host : t.defaultView && (s = t.defaultView), s ? e(s, i) : i
    };
    Event.prototype.composedPath = function () {
      return e(this.target)
    }
  }

  function N(e, t) {
    const i = "function" == typeof t ? t : e => e.matches(t);
    return function e(t, i, s, a = 0) {
      const n = t[a];
      return i(n) ? n : n !== s && n.parentElement ? e(t, i, s, a + 1) : void 0
    }(e.composedPath(), i, e.currentTarget)
  }
  const L = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear",
      titleFormat: "MM y"
    }
  },
    B = {
      autohide: !1,
      beforeShowDay: null,
      beforeShowDecade: null,
      beforeShowMonth: null,
      beforeShowYear: null,
      calendarWeeks: !1,
      clearBtn: !1,
      dateDelimiter: ",",
      datesDisabled: [],
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      defaultViewDate: void 0,
      disableTouchKeyboard: !1,
      format: "mm/dd/yyyy",
      language: "en",
      maxDate: null,
      maxNumberOfDates: 1,
      maxView: 3,
      minDate: null,
      nextArrow: "»",
      orientation: "auto",
      pickLevel: 0,
      prevArrow: "«",
      showDaysOfWeek: !0,
      showOnClick: !0,
      showOnFocus: !0,
      startView: 0,
      title: "",
      todayBtn: !1,
      todayBtnMode: 0,
      todayHighlight: !1,
      updateOnBlur: !0,
      weekStart: 0
    },
    A = document.createRange();

  function Y(e) {
    return A.createContextualFragment(e)
  }

  function W(e) {
    "none" !== e.style.display && (e.style.display && (e.dataset.styleDisplay = e.style.display), e.style.display = "none")
  }

  function _(e) {
    "none" === e.style.display && (e.dataset.styleDisplay ? (e.style.display = e.dataset.styleDisplay, delete e.dataset.styleDisplay) : e.style.display = "")
  }

  function K(e) {
    e.firstChild && (e.removeChild(e.firstChild), K(e))
  }
  const {
    language: T,
    format: j,
    weekStart: H
  } = B;

  function $(e, t) {
    return e.length < 6 && t >= 0 && t < 7 ? i(e, t) : e
  }

  function P(e) {
    return (e + 6) % 7
  }

  function R(e, t, i, s) {
    const a = M(e, t, i);
    return void 0 !== a ? a : s
  }

  function I(e, t, i = 3) {
    const s = parseInt(e, 10);
    return s >= 0 && s <= i ? s : t
  }

  function q(t, s) {
    const a = Object.assign({}, t),
      n = {},
      r = s.constructor.locales;
    let {
      format: d,
      language: o,
      locale: c,
      maxDate: h,
      maxView: u,
      minDate: f,
      pickLevel: p,
      startView: g,
      weekStart: m
    } = s.config || {};
    if (a.language) {
      let e;
      if (a.language !== o && (r[a.language] ? e = a.language : void 0 === r[e = a.language.split("-")[0]] && (e = !1)), delete a.language, e) {
        o = n.language = e;
        const t = c || r[T];
        c = Object.assign({
          format: j,
          weekStart: H
        }, r[T]), o !== T && Object.assign(c, r[o]), n.locale = c, d === t.format && (d = n.format = c.format), m === t.weekStart && (m = n.weekStart = c.weekStart, n.weekEnd = P(c.weekStart))
      }
    }
    if (a.format) {
      const e = "function" == typeof a.format.toDisplay,
        t = "function" == typeof a.format.toValue,
        i = w.test(a.format);
      (e && t || i) && (d = n.format = a.format), delete a.format
    }
    let y = f,
      k = h;
    if (void 0 !== a.minDate && (y = null === a.minDate ? l(0, 0, 1) : R(a.minDate, d, c, y), delete a.minDate), void 0 !== a.maxDate && (k = null === a.maxDate ? void 0 : R(a.maxDate, d, c, k), delete a.maxDate), k < y ? (f = n.minDate = k, h = n.maxDate = y) : (f !== y && (f = n.minDate = y), h !== k && (h = n.maxDate = k)), a.datesDisabled && (n.datesDisabled = a.datesDisabled.reduce((e, t) => {
      const s = M(t, d, c);
      return void 0 !== s ? i(e, s) : e
    }, []), delete a.datesDisabled), void 0 !== a.defaultViewDate) {
      const e = M(a.defaultViewDate, d, c);
      void 0 !== e && (n.defaultViewDate = e), delete a.defaultViewDate
    }
    if (void 0 !== a.weekStart) {
      const e = Number(a.weekStart) % 7;
      isNaN(e) || (m = n.weekStart = e, n.weekEnd = P(e)), delete a.weekStart
    }
    if (a.daysOfWeekDisabled && (n.daysOfWeekDisabled = a.daysOfWeekDisabled.reduce($, []), delete a.daysOfWeekDisabled), a.daysOfWeekHighlighted && (n.daysOfWeekHighlighted = a.daysOfWeekHighlighted.reduce($, []), delete a.daysOfWeekHighlighted), void 0 !== a.maxNumberOfDates) {
      const e = parseInt(a.maxNumberOfDates, 10);
      e >= 0 && (n.maxNumberOfDates = e, n.multidate = 1 !== e), delete a.maxNumberOfDates
    }
    a.dateDelimiter && (n.dateDelimiter = String(a.dateDelimiter), delete a.dateDelimiter);
    let D = p;
    void 0 !== a.pickLevel && (D = I(a.pickLevel, 2), delete a.pickLevel), D !== p && (p = n.pickLevel = D);
    let v = u;
    void 0 !== a.maxView && (v = I(a.maxView, u), delete a.maxView), (v = p > v ? p : v) !== u && (u = n.maxView = v);
    let b = g;
    if (void 0 !== a.startView && (b = I(a.startView, b), delete a.startView), b < p ? b = p : b > u && (b = u), b !== g && (n.startView = b), a.prevArrow) {
      const e = Y(a.prevArrow);
      e.childNodes.length > 0 && (n.prevArrow = e.childNodes), delete a.prevArrow
    }
    if (a.nextArrow) {
      const e = Y(a.nextArrow);
      e.childNodes.length > 0 && (n.nextArrow = e.childNodes), delete a.nextArrow
    }
    if (void 0 !== a.disableTouchKeyboard && (n.disableTouchKeyboard = "ontouchstart" in document && !!a.disableTouchKeyboard, delete a.disableTouchKeyboard), a.orientation) {
      const e = a.orientation.toLowerCase().split(/\s+/g);
      n.orientation = {
        x: e.find(e => "left" === e || "right" === e) || "auto",
        y: e.find(e => "top" === e || "bottom" === e) || "auto"
      }, delete a.orientation
    }
    if (void 0 !== a.todayBtnMode) {
      switch (a.todayBtnMode) {
        case 0:
        case 1:
          n.todayBtnMode = a.todayBtnMode
      }
      delete a.todayBtnMode
    }
    return Object.keys(a).forEach(t => {
      void 0 !== a[t] && e(B, t) && (n[t] = a[t])
    }), n
  }
  const J = d('<div class="datepicker">\n  <div class="datepicker-picker">\n    <div class="datepicker-header">\n      <div class="datepicker-title"></div>\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% prev-btn"></button>\n        <button type="button" class="%buttonClass% view-switch"></button>\n        <button type="button" class="%buttonClass% next-btn"></button>\n      </div>\n    </div>\n    <div class="datepicker-main"></div>\n    <div class="datepicker-footer">\n      <div class="datepicker-controls">\n        <button type="button" class="%buttonClass% today-btn"></button>\n        <button type="button" class="%buttonClass% clear-btn"></button>\n      </div>\n    </div>\n  </div>\n</div>'),
    U = d(`<div class="days">\n  <div class="days-of-week">${r("span", 7, { class: "dow" })}</div>\n  <div class="datepicker-grid">${r("span", 42)}</div>\n</div>`),
    z = d(`<div class="calendar-weeks">\n  <div class="days-of-week"><span class="dow"></span></div>\n  <div class="weeks">${r("span", 6, { class: "week" })}</div>\n</div>`);
  class X {
    constructor(e, t) {
      Object.assign(this, t, {
        picker: e,
        element: Y('<div class="datepicker-view"></div>').firstChild,
        selected: []
      }), this.init(this.picker.datepicker.config)
    }
    init(e) {
      void 0 !== e.pickLevel && (this.isMinView = this.id === e.pickLevel), this.setOptions(e), this.updateFocus(), this.updateSelection()
    }
    performBeforeHook(e, t, s) {
      let a = this.beforeShow(new Date(s));
      switch (typeof a) {
        case "boolean":
          a = {
            enabled: a
          };
          break;
        case "string":
          a = {
            classes: a
          }
      }
      if (a) {
        if (!1 === a.enabled && (e.classList.add("disabled"), i(this.disabled, t)), a.classes) {
          const s = a.classes.split(/\s+/);
          e.classList.add(...s), s.includes("disabled") && i(this.disabled, t)
        }
        a.content && function (e, t) {
          K(e), t instanceof DocumentFragment ? e.appendChild(t) : "string" == typeof t ? e.appendChild(Y(t)) : "function" == typeof t.forEach && t.forEach(t => {
            e.appendChild(t)
          })
        }(e, a.content)
      }
    }
  }
  class G extends X {
    constructor(e) {
      super(e, {
        id: 0,
        name: "days",
        cellClass: "day"
      })
    }
    init(e, t = !0) {
      if (t) {
        const e = Y(U).firstChild;
        this.dow = e.firstChild, this.grid = e.lastChild, this.element.appendChild(e)
      }
      super.init(e)
    }
    setOptions(t) {
      let i;
      if (e(t, "minDate") && (this.minDate = t.minDate), e(t, "maxDate") && (this.maxDate = t.maxDate), t.datesDisabled && (this.datesDisabled = t.datesDisabled), t.daysOfWeekDisabled && (this.daysOfWeekDisabled = t.daysOfWeekDisabled, i = !0), t.daysOfWeekHighlighted && (this.daysOfWeekHighlighted = t.daysOfWeekHighlighted), void 0 !== t.todayHighlight && (this.todayHighlight = t.todayHighlight), void 0 !== t.weekStart && (this.weekStart = t.weekStart, this.weekEnd = t.weekEnd, i = !0), t.locale) {
        const e = this.locale = t.locale;
        this.dayNames = e.daysMin, this.switchLabelFormat = e.titleFormat, i = !0
      }
      if (void 0 !== t.beforeShowDay && (this.beforeShow = "function" == typeof t.beforeShowDay ? t.beforeShowDay : void 0), void 0 !== t.calendarWeeks)
        if (t.calendarWeeks && !this.calendarWeeks) {
          const e = Y(z).firstChild;
          this.calendarWeeks = {
            element: e,
            dow: e.firstChild,
            weeks: e.lastChild
          }, this.element.insertBefore(e, this.element.firstChild)
        } else this.calendarWeeks && !t.calendarWeeks && (this.element.removeChild(this.calendarWeeks.element), this.calendarWeeks = null);
      void 0 !== t.showDaysOfWeek && (t.showDaysOfWeek ? (_(this.dow), this.calendarWeeks && _(this.calendarWeeks.dow)) : (W(this.dow), this.calendarWeeks && W(this.calendarWeeks.dow))), i && Array.from(this.dow.children).forEach((e, t) => {
        const i = (this.weekStart + t) % 7;
        e.textContent = this.dayNames[i], e.className = this.daysOfWeekDisabled.includes(i) ? "dow disabled" : "dow"
      })
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate),
        t = e.getFullYear(),
        i = e.getMonth(),
        s = l(t, i, 1),
        a = g(s, this.weekStart, this.weekStart);
      this.first = s, this.last = l(t, i + 1, 0), this.start = a, this.focused = this.picker.viewDate
    }
    updateSelection() {
      const {
        dates: e,
        rangepicker: t
      } = this.picker.datepicker;
      this.selected = e, t && (this.range = t.dates)
    }
    render() {
      this.today = this.todayHighlight ? c() : void 0, this.disabled = [...this.datesDisabled];
      const e = S(this.focused, this.switchLabelFormat, this.locale);
      if (this.picker.setViewSwitchLabel(e), this.picker.setPrevBtnDisabled(this.first <= this.minDate), this.picker.setNextBtnDisabled(this.last >= this.maxDate), this.calendarWeeks) {
        const e = g(this.first, 1, 1);
        Array.from(this.calendarWeeks.weeks.children).forEach((t, i) => {
          t.textContent = function (e) {
            const t = g(e, 4, 1),
              i = g(new Date(t).setMonth(0, 4), 4, 1);
            return Math.round((t - i) / 6048e5) + 1
          }(h(e, 7 * i))
        })
      }
      Array.from(this.grid.children).forEach((e, t) => {
        const s = e.classList,
          a = h(this.start, t),
          n = new Date(a),
          r = n.getDay();
        if (e.className = `datepicker-cell ${this.cellClass}`, e.dataset.date = a, e.textContent = n.getDate(), a < this.first ? s.add("prev") : a > this.last && s.add("next"), this.today === a && s.add("today"), (a < this.minDate || a > this.maxDate || this.disabled.includes(a)) && s.add("disabled"), this.daysOfWeekDisabled.includes(r) && (s.add("disabled"), i(this.disabled, a)), this.daysOfWeekHighlighted.includes(r) && s.add("highlighted"), this.range) {
          const [e, t] = this.range;
          a > e && a < t && s.add("range"), a === e && s.add("range-start"), a === t && s.add("range-end")
        }
        this.selected.includes(a) && s.add("selected"), a === this.focused && s.add("focused"), this.beforeShow && this.performBeforeHook(e, a, a)
      })
    }
    refresh() {
      const [e, t] = this.range || [];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
        e.classList.remove("range", "range-start", "range-end", "selected", "focused")
      }), Array.from(this.grid.children).forEach(i => {
        const s = Number(i.dataset.date),
          a = i.classList;
        s > e && s < t && a.add("range"), s === e && a.add("range-start"), s === t && a.add("range-end"), this.selected.includes(s) && a.add("selected"), s === this.focused && a.add("focused")
      })
    }
    refreshFocus() {
      const e = Math.round((this.focused - this.start) / 864e5);
      this.grid.querySelectorAll(".focused").forEach(e => {
        e.classList.remove("focused")
      }), this.grid.children[e].classList.add("focused")
    }
  }

  function Q(e, t) {
    if (!e || !e[0] || !e[1]) return;
    const [
      [i, s],
      [a, n]
    ] = e;
    return i > t || a < t ? void 0 : [i === t ? s : -1, a === t ? n : 12]
  }
  class Z extends X {
    constructor(e) {
      super(e, {
        id: 1,
        name: "months",
        cellClass: "month"
      })
    }
    init(e, t = !0) {
      t && (this.grid = this.element, this.element.classList.add("months", "datepicker-grid"), this.grid.appendChild(Y(r("span", 12, {
        "data-month": e => e
      })))), super.init(e)
    }
    setOptions(t) {
      if (t.locale && (this.monthNames = t.locale.monthsShort), e(t, "minDate"))
        if (void 0 === t.minDate) this.minYear = this.minMonth = this.minDate = void 0;
        else {
          const e = new Date(t.minDate);
          this.minYear = e.getFullYear(), this.minMonth = e.getMonth(), this.minDate = e.setDate(1)
        }
      if (e(t, "maxDate"))
        if (void 0 === t.maxDate) this.maxYear = this.maxMonth = this.maxDate = void 0;
        else {
          const e = new Date(t.maxDate);
          this.maxYear = e.getFullYear(), this.maxMonth = e.getMonth(), this.maxDate = l(this.maxYear, this.maxMonth + 1, 0)
        }
      void 0 !== t.beforeShowMonth && (this.beforeShow = "function" == typeof t.beforeShowMonth ? t.beforeShowMonth : void 0)
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate);
      this.year = e.getFullYear(), this.focused = e.getMonth()
    }
    updateSelection() {
      const {
        dates: e,
        rangepicker: t
      } = this.picker.datepicker;
      this.selected = e.reduce((e, t) => {
        const s = new Date(t),
          a = s.getFullYear(),
          n = s.getMonth();
        return void 0 === e[a] ? e[a] = [n] : i(e[a], n), e
      }, {}), t && t.dates && (this.range = t.dates.map(e => {
        const t = new Date(e);
        return isNaN(t) ? void 0 : [t.getFullYear(), t.getMonth()]
      }))
    }
    render() {
      this.disabled = [], this.picker.setViewSwitchLabel(this.year), this.picker.setPrevBtnDisabled(this.year <= this.minYear), this.picker.setNextBtnDisabled(this.year >= this.maxYear);
      const e = this.selected[this.year] || [],
        t = this.year < this.minYear || this.year > this.maxYear,
        i = this.year === this.minYear,
        s = this.year === this.maxYear,
        a = Q(this.range, this.year);
      Array.from(this.grid.children).forEach((n, r) => {
        const d = n.classList,
          o = l(this.year, r, 1);
        if (n.className = `datepicker-cell ${this.cellClass}`, this.isMinView && (n.dataset.date = o), n.textContent = this.monthNames[r], (t || i && r < this.minMonth || s && r > this.maxMonth) && d.add("disabled"), a) {
          const [e, t] = a;
          r > e && r < t && d.add("range"), r === e && d.add("range-start"), r === t && d.add("range-end")
        }
        e.includes(r) && d.add("selected"), r === this.focused && d.add("focused"), this.beforeShow && this.performBeforeHook(n, r, o)
      })
    }
    refresh() {
      const e = this.selected[this.year] || [],
        [t, i] = Q(this.range, this.year) || [];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
        e.classList.remove("range", "range-start", "range-end", "selected", "focused")
      }), Array.from(this.grid.children).forEach((s, a) => {
        const n = s.classList;
        a > t && a < i && n.add("range"), a === t && n.add("range-start"), a === i && n.add("range-end"), e.includes(a) && n.add("selected"), a === this.focused && n.add("focused")
      })
    }
    refreshFocus() {
      this.grid.querySelectorAll(".focused").forEach(e => {
        e.classList.remove("focused")
      }), this.grid.children[this.focused].classList.add("focused")
    }
  }
  class ee extends X {
    constructor(e, t) {
      super(e, t)
    }
    init(e, t = !0) {
      var i;
      t && (this.navStep = 10 * this.step, this.beforeShowOption = `beforeShow${i = this.cellClass, [...i].reduce((e, t, i) => e += i ? t : t.toUpperCase(), "")}`, this.grid = this.element, this.element.classList.add(this.name, "datepicker-grid"), this.grid.appendChild(Y(r("span", 12)))), super.init(e)
    }
    setOptions(t) {
      if (e(t, "minDate") && (void 0 === t.minDate ? this.minYear = this.minDate = void 0 : (this.minYear = m(t.minDate, this.step), this.minDate = l(this.minYear, 0, 1))), e(t, "maxDate") && (void 0 === t.maxDate ? this.maxYear = this.maxDate = void 0 : (this.maxYear = m(t.maxDate, this.step), this.maxDate = l(this.maxYear, 11, 31))), void 0 !== t[this.beforeShowOption]) {
        const e = t[this.beforeShowOption];
        this.beforeShow = "function" == typeof e ? e : void 0
      }
    }
    updateFocus() {
      const e = new Date(this.picker.viewDate),
        t = m(e, this.navStep),
        i = t + 9 * this.step;
      this.first = t, this.last = i, this.start = t - this.step, this.focused = m(e, this.step)
    }
    updateSelection() {
      const {
        dates: e,
        rangepicker: t
      } = this.picker.datepicker;
      this.selected = e.reduce((e, t) => i(e, m(t, this.step)), []), t && t.dates && (this.range = t.dates.map(e => {
        if (void 0 !== e) return m(e, this.step)
      }))
    }
    render() {
      this.disabled = [], this.picker.setViewSwitchLabel(`${this.first}-${this.last}`), this.picker.setPrevBtnDisabled(this.first <= this.minYear), this.picker.setNextBtnDisabled(this.last >= this.maxYear), Array.from(this.grid.children).forEach((e, t) => {
        const i = e.classList,
          s = this.start + t * this.step,
          a = l(s, 0, 1);
        if (e.className = `datepicker-cell ${this.cellClass}`, this.isMinView && (e.dataset.date = a), e.textContent = e.dataset.year = s, 0 === t ? i.add("prev") : 11 === t && i.add("next"), (s < this.minYear || s > this.maxYear) && i.add("disabled"), this.range) {
          const [e, t] = this.range;
          s > e && s < t && i.add("range"), s === e && i.add("range-start"), s === t && i.add("range-end")
        }
        this.selected.includes(s) && i.add("selected"), s === this.focused && i.add("focused"), this.beforeShow && this.performBeforeHook(e, s, a)
      })
    }
    refresh() {
      const [e, t] = this.range || [];
      this.grid.querySelectorAll(".range, .range-start, .range-end, .selected, .focused").forEach(e => {
        e.classList.remove("range", "range-start", "range-end", "selected", "focused")
      }), Array.from(this.grid.children).forEach(i => {
        const s = Number(i.textContent),
          a = i.classList;
        s > e && s < t && a.add("range"), s === e && a.add("range-start"), s === t && a.add("range-end"), this.selected.includes(s) && a.add("selected"), s === this.focused && a.add("focused")
      })
    }
    refreshFocus() {
      const e = Math.round((this.focused - this.start) / this.step);
      this.grid.querySelectorAll(".focused").forEach(e => {
        e.classList.remove("focused")
      }), this.grid.children[e].classList.add("focused")
    }
  }

  function te(e, t) {
    const i = {
      date: e.getDate(),
      viewDate: new Date(e.picker.viewDate),
      viewId: e.picker.currentView.id,
      datepicker: e
    };
    e.element.dispatchEvent(new CustomEvent(t, {
      detail: i
    }))
  }

  function ie(e, t) {
    const {
      minDate: i,
      maxDate: s
    } = e.config, {
      currentView: a,
      viewDate: r
    } = e.picker;
    let d;
    switch (a.id) {
      case 0:
        d = u(r, t);
        break;
      case 1:
        d = f(r, t);
        break;
      default:
        d = f(r, t * a.navStep)
    }
    d = n(d, i, s), e.picker.changeFocus(d).render()
  }

  function se(e) {
    const t = e.picker.currentView.id;
    t !== e.config.maxView && e.picker.changeView(t + 1).render()
  }

  function ae(e) {
    e.config.updateOnBlur ? e.update({
      autohide: !0
    }) : (e.refresh("input"), e.hide())
  }

  function ne(e, t) {
    const i = e.picker,
      s = new Date(i.viewDate),
      a = i.currentView.id,
      n = 1 === a ? u(s, t - s.getMonth()) : f(s, t - s.getFullYear());
    i.changeFocus(n).changeView(a - 1).render()
  }

  function re(t, i) {
    if (void 0 !== i.title && (i.title ? (t.controls.title.textContent = i.title, _(t.controls.title)) : (t.controls.title.textContent = "", W(t.controls.title))), i.prevArrow) {
      const e = t.controls.prevBtn;
      K(e), i.prevArrow.forEach(t => {
        e.appendChild(t.cloneNode(!0))
      })
    }
    if (i.nextArrow) {
      const e = t.controls.nextBtn;
      K(e), i.nextArrow.forEach(t => {
        e.appendChild(t.cloneNode(!0))
      })
    }
    if (i.locale && (t.controls.todayBtn.textContent = i.locale.today, t.controls.clearBtn.textContent = i.locale.clear), void 0 !== i.todayBtn && (i.todayBtn ? _(t.controls.todayBtn) : W(t.controls.todayBtn)), e(i, "minDate") || e(i, "maxDate")) {
      const {
        minDate: e,
        maxDate: i
      } = t.datepicker.config;
      t.controls.todayBtn.disabled = !a(c(), e, i)
    }
    void 0 !== i.clearBtn && (i.clearBtn ? _(t.controls.clearBtn) : W(t.controls.clearBtn))
  }

  function de(e) {
    const {
      dates: i,
      config: s
    } = e;
    return n(i.length > 0 ? t(i) : s.defaultViewDate, s.minDate, s.maxDate)
  }

  function oe(e, t) {
    const i = new Date(e.viewDate),
      s = new Date(t),
      {
        id: a,
        year: n,
        first: r,
        last: d
      } = e.currentView,
      o = s.getFullYear();
    switch (e.viewDate = t, o !== i.getFullYear() && te(e.datepicker, "changeYear"), s.getMonth() !== i.getMonth() && te(e.datepicker, "changeMonth"), a) {
      case 0:
        return t < r || t > d;
      case 1:
        return o !== n;
      default:
        return o < r || o > d
    }
  }

  function ce(e) {
    return window.getComputedStyle(e).direction
  }
  class le {
    constructor(e) {
      this.datepicker = e;
      const t = J.replace(/%buttonClass%/g, e.config.buttonClass),
        i = this.element = Y(t).firstChild,
        [s, a, n] = i.firstChild.children,
        r = s.firstElementChild,
        [d, o, l] = s.lastElementChild.children,
        [h, u] = n.firstChild.children,
        f = {
          title: r,
          prevBtn: d,
          viewSwitch: o,
          nextBtn: l,
          todayBtn: h,
          clearBtn: u
        };
      this.main = a, this.controls = f;
      const p = e.inline ? "inline" : "dropdown";
      i.classList.add(`datepicker-${p}`), re(this, e.config), this.viewDate = de(e), F(e, [
        [i, "click", function (e) {
          e.inline || e.config.disableTouchKeyboard || e.inputField.focus()
        }.bind(null, e), {
            capture: !0
          }],
        [a, "click", function (e, t) {
          const i = N(t, ".datepicker-cell");
          if (!i || i.classList.contains("disabled")) return;
          const {
            id: s,
            isMinView: a
          } = e.picker.currentView;
          a ? e.setDate(Number(i.dataset.date)) : ne(e, 1 === s ? Number(i.dataset.month) : Number(i.dataset.year))
        }.bind(null, e)],
        [f.viewSwitch, "click", function (e) {
          se(e)
        }.bind(null, e)],
        [f.prevBtn, "click", function (e) {
          ie(e, -1)
        }.bind(null, e)],
        [f.nextBtn, "click", function (e) {
          ie(e, 1)
        }.bind(null, e)],
        [f.todayBtn, "click", function (e) {
          const t = e.picker,
            i = c();
          if (1 === e.config.todayBtnMode) {
            if (e.config.autohide) return void e.setDate(i);
            e.setDate(i, {
              render: !1
            }), t.update()
          }
          t.viewDate !== i && t.changeFocus(i), t.changeView(0).render()
        }.bind(null, e)],
        [f.clearBtn, "click", function (e) {
          e.setDate({
            clear: !0
          })
        }.bind(null, e)]
      ]), this.views = [new G(this), new Z(this), new ee(this, {
        id: 2,
        name: "years",
        cellClass: "year",
        step: 1
      }), new ee(this, {
        id: 3,
        name: "decades",
        cellClass: "decade",
        step: 10
      })], this.currentView = this.views[e.config.startView], this.currentView.render(), this.main.appendChild(this.currentView.element), e.config.container.appendChild(this.element)
    }
    setOptions(e) {
      re(this, e), this.views.forEach(t => {
        t.init(e, !1)
      }), this.currentView.render()
    }
    detach() {
      this.datepicker.config.container.removeChild(this.element)
    }
    show() {
      if (this.active) return;
      this.element.classList.add("active"), this.active = !0;
      const e = this.datepicker;
      if (!e.inline) {
        const t = ce(e.inputField);
        t !== ce(e.config.container) ? this.element.dir = t : this.element.dir && this.element.removeAttribute("dir"), this.place(), e.config.disableTouchKeyboard && e.inputField.blur()
      }
      te(e, "show")
    }
    hide() {
      this.active && (this.datepicker.exitEditMode(), this.element.classList.remove("active"), this.active = !1, te(this.datepicker, "hide"))
    }
    place() {
      const {
        classList: e,
        style: t
      } = this.element, {
        config: i,
        inputField: s
      } = this.datepicker, a = i.container, {
        width: n,
        height: r
      } = this.element.getBoundingClientRect(), {
        left: d,
        top: o,
        width: c
      } = a.getBoundingClientRect(), {
        left: l,
        top: h,
        width: u,
        height: f
      } = s.getBoundingClientRect();
      let p, g, m, {
        x: w,
        y: y
      } = i.orientation;
      a === document.body ? (p = window.scrollY, g = l + window.scrollX, m = h + p) : (g = l - d, m = h - o + (p = a.scrollTop)), "auto" === w && (g < 0 ? (w = "left", g = 10) : w = g + n > c ? "right" : "rtl" === ce(s) ? "right" : "left"), "right" === w && (g -= n - u), "auto" === y && (y = m - r < p ? "bottom" : "top"), "top" === y ? m -= r : m += f, e.remove("datepicker-orient-top", "datepicker-orient-bottom", "datepicker-orient-right", "datepicker-orient-left"), e.add(`datepicker-orient-${y}`, `datepicker-orient-${w}`), t.top = m ? `${m}px` : m, t.left = g ? `${g}px` : g
    }
    setViewSwitchLabel(e) {
      this.controls.viewSwitch.textContent = e
    }
    setPrevBtnDisabled(e) {
      this.controls.prevBtn.disabled = e
    }
    setNextBtnDisabled(e) {
      this.controls.nextBtn.disabled = e
    }
    changeView(e) {
      const t = this.currentView,
        i = this.views[e];
      return i.id !== t.id && (this.currentView = i, this._renderMethod = "render", te(this.datepicker, "changeView"), this.main.replaceChild(i.element, t.element)), this
    }
    changeFocus(e) {
      return this._renderMethod = oe(this, e) ? "render" : "refreshFocus", this.views.forEach(e => {
        e.updateFocus()
      }), this
    }
    update() {
      const e = de(this.datepicker);
      return this._renderMethod = oe(this, e) ? "render" : "refresh", this.views.forEach(e => {
        e.updateFocus(), e.updateSelection()
      }), this
    }
    render(e = !0) {
      const t = e && this._renderMethod || "render";
      delete this._renderMethod, this.currentView[t]()
    }
  }

  function he(e, t, i, s) {
    const n = e.picker,
      r = n.currentView,
      d = r.step || 1;
    let o, c, l = n.viewDate;
    switch (r.id) {
      case 0:
        l = s ? h(l, 7 * i) : t.ctrlKey || t.metaKey ? f(l, i) : h(l, i), o = h, c = (e => r.disabled.includes(e));
        break;
      case 1:
        l = u(l, s ? 4 * i : i), o = u, c = (e => {
          const t = new Date(e),
            {
              year: i,
              disabled: s
            } = r;
          return t.getFullYear() === i && s.includes(t.getMonth())
        });
        break;
      default:
        l = f(l, i * (s ? 4 : 1) * d), o = f, c = (e => r.disabled.includes(m(e, d)))
    }
    void 0 !== (l = function e(t, i, s, n, r, d) {
      if (a(t, r, d)) return n(t) ? e(i(t, s), i, s, n, r, d) : t
    }(l, o, i < 0 ? -d : d, c, r.minDate, r.maxDate)) && n.changeFocus(l).render()
  }

  function ue(e, t) {
    return e.map(e => S(e, t.format, t.locale)).join(t.dateDelimiter)
  }

  function fe(e, t, i = !1) {
    const {
      config: s,
      dates: n,
      rangepicker: r
    } = e;
    if (0 === t.length) return i ? [] : void 0;
    const d = r && e === r.datepickers[1];
    let o = t.reduce((e, t) => {
      let i = M(t, s.format, s.locale);
      if (void 0 === i) return e;
      if (s.pickLevel > 0) {
        const e = new Date(i);
        i = 1 === s.pickLevel ? d ? e.setMonth(e.getMonth() + 1, 0) : e.setDate(1) : d ? e.setFullYear(e.getFullYear() + 1, 0, 0) : e.setMonth(0, 1)
      }
      return !a(i, s.minDate, s.maxDate) || e.includes(i) || s.datesDisabled.includes(i) || s.daysOfWeekDisabled.includes(new Date(i).getDay()) || e.push(i), e
    }, []);
    return 0 !== o.length ? (s.multidate && !i && (o = o.reduce((e, t) => (n.includes(t) || e.push(t), e), n.filter(e => !o.includes(e)))), s.maxNumberOfDates && o.length > s.maxNumberOfDates ? o.slice(-1 * s.maxNumberOfDates) : o) : void 0
  }

  function pe(e, t = 3, i = !0) {
    const {
      config: s,
      picker: a,
      inputField: n
    } = e;
    if (2 & t) {
      const e = a.active ? s.pickLevel : s.startView;
      a.update().changeView(e).render(i)
    }
    1 & t && n && (n.value = ue(e.dates, s))
  }

  function ge(e, t, i) {
    let {
      clear: s,
      render: a,
      autohide: n
    } = i;
    void 0 === a && (a = !0), a ? void 0 === n && (n = e.config.autohide) : n = !1;
    const r = fe(e, t, s);
    r && (r.toString() !== e.dates.toString() ? (e.dates = r, pe(e, a ? 3 : 1), te(e, "changeDate")) : pe(e, 1), n && e.hide())
  }
  class me {
    constructor(e, t = {}, i) {
      e.datepicker = this, this.element = e;
      const a = this.config = Object.assign({
        buttonClass: t.buttonClass && String(t.buttonClass) || "button",
        container: document.body,
        defaultViewDate: c(),
        maxDate: void 0,
        minDate: void 0
      }, q(B, this));
      this._options = t, Object.assign(a, q(t, this));
      const n = this.inline = "INPUT" !== e.tagName;
      let r, d;
      if (n) a.container = e, d = s(e.dataset.date, a.dateDelimiter), delete e.dataset.date;
      else {
        const i = t.container ? document.querySelector(t.container) : null;
        i && (a.container = i), (r = this.inputField = e).classList.add("datepicker-input"), d = s(r.value, a.dateDelimiter)
      }
      if (i) {
        const e = i.inputs.indexOf(r),
          t = i.datepickers;
        if (e < 0 || e > 1 || !Array.isArray(t)) throw Error("Invalid rangepicker object.");
        t[e] = this, Object.defineProperty(this, "rangepicker", {
          get: () => i
        })
      }
      this.dates = [];
      const o = fe(this, d);
      o && o.length > 0 && (this.dates = o), r && (r.value = ue(this.dates, a));
      const l = this.picker = new le(this);
      if (n) this.show();
      else {
        const e = function (e, t) {
          const i = e.element;
          if (i !== document.activeElement) return;
          const s = e.picker.element;
          N(t, e => e === i || e === s) || ae(e)
        }.bind(null, this);
        F(this, [
          [r, "keydown", function (e, t) {
            if ("Tab" === t.key) return void ae(e);
            const i = e.picker,
              {
                id: s,
                isMinView: a
              } = i.currentView;
            if (i.active)
              if (e.editMode) switch (t.key) {
                case "Escape":
                  i.hide();
                  break;
                case "Enter":
                  e.exitEditMode({
                    update: !0,
                    autohide: e.config.autohide
                  });
                  break;
                default:
                  return
              } else switch (t.key) {
                case "Escape":
                  i.hide();
                  break;
                case "ArrowLeft":
                  if (t.ctrlKey || t.metaKey) ie(e, -1);
                  else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, -1, !1)
                  }
                  break;
                case "ArrowRight":
                  if (t.ctrlKey || t.metaKey) ie(e, 1);
                  else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, 1, !1)
                  }
                  break;
                case "ArrowUp":
                  if (t.ctrlKey || t.metaKey) se(e);
                  else {
                    if (t.shiftKey) return void e.enterEditMode();
                    he(e, t, -1, !0)
                  }
                  break;
                case "ArrowDown":
                  if (t.shiftKey && !t.ctrlKey && !t.metaKey) return void e.enterEditMode();
                  he(e, t, 1, !0);
                  break;
                case "Enter":
                  a ? e.setDate(i.viewDate) : i.changeView(s - 1).render();
                  break;
                case "Backspace":
                case "Delete":
                  return void e.enterEditMode();
                default:
                  return void (1 !== t.key.length || t.ctrlKey || t.metaKey || e.enterEditMode())
              } else switch (t.key) {
                case "ArrowDown":
                case "Escape":
                  i.show();
                  break;
                case "Enter":
                  e.update();
                  break;
                default:
                  return
              }
            t.preventDefault(), t.stopPropagation()
          }.bind(null, this)],
          [r, "focus", function (e) {
            e.config.showOnFocus && !e._showing && e.show()
          }.bind(null, this)],
          [r, "mousedown", function (e, t) {
            const i = t.target;
            (e.picker.active || e.config.showOnClick) && (i._active = i === document.activeElement, i._clicking = setTimeout(() => {
              delete i._active, delete i._clicking
            }, 2e3))
          }.bind(null, this)],
          [r, "click", function (e, t) {
            const i = t.target;
            i._clicking && (clearTimeout(i._clicking), delete i._clicking, i._active && e.enterEditMode(), delete i._active, e.config.showOnClick && e.show())
          }.bind(null, this)],
          [r, "paste", function (e, t) {
            t.clipboardData.types.includes("text/plain") && e.enterEditMode()
          }.bind(null, this)],
          [document, "mousedown", e],
          [document, "touchstart", e],
          [window, "resize", l.place.bind(l)]
        ])
      }
    }
    static formatDate(e, t, i) {
      return S(e, t, i && L[i] || L.en)
    }
    static parseDate(e, t, i) {
      return M(e, t, i && L[i] || L.en)
    }
    static get locales() {
      return L
    }
    get active() {
      return !(!this.picker || !this.picker.active)
    }
    get pickerElement() {
      return this.picker ? this.picker.element : void 0
    }
    setOptions(e) {
      const t = this.picker,
        i = q(e, this);
      Object.assign(this._options, e), Object.assign(this.config, i), t.setOptions(i), pe(this, 3)
    }
    show() {
      if (this.inputField) {
        if (this.inputField.disabled) return;
        this.inputField !== document.activeElement && (this._showing = !0, this.inputField.focus(), delete this._showing)
      }
      this.picker.show()
    }
    hide() {
      this.inline || (this.picker.hide(), this.picker.update().changeView(this.config.startView).render())
    }
    destroy() {
      return this.hide(), V(this), this.picker.detach(), this.inline || this.inputField.classList.remove("datepicker-input"), delete this.element.datepicker, this
    }
    getDate(e) {
      const t = e ? t => S(t, e, this.config.locale) : e => new Date(e);
      return this.config.multidate ? this.dates.map(t) : this.dates.length > 0 ? t(this.dates[0]) : void 0
    }
    setDate(...e) {
      const i = [...e],
        s = {},
        a = t(e);
      "object" != typeof a || Array.isArray(a) || a instanceof Date || !a || Object.assign(s, i.pop()), ge(this, Array.isArray(i[0]) ? i[0] : i, s)
    }
    update(e) {
      if (this.inline) return;
      const t = {
        clear: !0,
        autohide: !(!e || !e.autohide)
      };
      ge(this, s(this.inputField.value, this.config.dateDelimiter), t)
    }
    refresh(e, t = !1) {
      let i;
      e && "string" != typeof e && (t = e, e = void 0), pe(this, i = "picker" === e ? 2 : "input" === e ? 1 : 3, !t)
    }
    enterEditMode() {
      this.inline || !this.picker.active || this.editMode || (this.editMode = !0, this.inputField.classList.add("in-edit"))
    }
    exitEditMode(e) {
      if (this.inline || !this.editMode) return;
      const t = Object.assign({
        update: !1
      }, e);
      delete this.editMode, this.inputField.classList.remove("in-edit"), t.update && this.update(t)
    }
  }

  function we(e) {
    const t = Object.assign({}, e);
    return delete t.inputs, delete t.allowOneSidedRange, delete t.maxNumberOfDates, t
  }

  function ye(e, t, i, s) {
    F(e, [
      [i, "changeDate", t]
    ]), new me(i, s, e)
  }

  function ke(e, t) {
    if (e._updating) return;
    e._updating = !0;
    const i = t.target;
    if (void 0 === i.datepicker) return;
    const s = e.datepickers,
      a = {
        render: !1
      },
      n = e.inputs.indexOf(i),
      r = 0 === n ? 1 : 0,
      d = s[n].dates[0],
      o = s[r].dates[0];
    void 0 !== d && void 0 !== o ? 0 === n && d > o ? (s[0].setDate(o, a), s[1].setDate(d, a)) : 1 === n && d < o && (s[0].setDate(d, a), s[1].setDate(o, a)) : e.allowOneSidedRange || void 0 === d && void 0 === o || (a.clear = !0, s[r].setDate(s[n].dates, a)), s[0].picker.update().render(), s[1].picker.update().render(), delete e._updating
  }
  window.Datepicker = me, window.DateRangePicker = class {
    constructor(e, t = {}) {
      const i = Array.isArray(t.inputs) ? t.inputs : Array.from(e.querySelectorAll("input"));
      if (i.length < 2) return;
      e.rangepicker = this, this.element = e, this.inputs = i.slice(0, 2), this.allowOneSidedRange = !!t.allowOneSidedRange;
      const s = ke.bind(null, this),
        a = we(t),
        n = [];
      Object.defineProperty(this, "datepickers", {
        get: () => n
      }), ye(this, s, this.inputs[0], a), ye(this, s, this.inputs[1], a), Object.freeze(n), n[0].dates.length > 0 ? ke(this, {
        target: this.inputs[0]
      }) : n[1].dates.length > 0 && ke(this, {
        target: this.inputs[1]
      })
    }
    get dates() {
      return 2 === this.datepickers.length ? [this.datepickers[0].dates[0], this.datepickers[1].dates[0]] : void 0
    }
    setOptions(e) {
      this.allowOneSidedRange = !!e.allowOneSidedRange;
      const t = we(e);
      this.datepickers[0].setOptions(t), this.datepickers[1].setOptions(t)
    }
    destroy() {
      this.datepickers[0].destroy(), this.datepickers[1].destroy(), V(this), delete this.element.rangepicker
    }
    getDates(e) {
      const t = e ? t => S(t, e, this.datepickers[0].config.locale) : e => new Date(e);
      return this.dates.map(e => void 0 === e ? e : t(e))
    }
    setDates(e, t) {
      const [i, s] = this.datepickers, a = this.dates;
      this._updating = !0, i.setDate(e), s.setDate(t), delete this._updating, s.dates[0] !== a[1] ? ke(this, {
        target: this.inputs[1]
      }) : i.dates[0] !== a[0] && ke(this, {
        target: this.inputs[0]
      })
    }
  }
}();
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.noUiSlider = factory();
    }
})(function() {
    "use strict";

    var VERSION = "%%REPLACE_THIS_WITH_VERSION%%";

    //region Helper Methods

    function isValidFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
        el.parentElement.removeChild(el);
    }

    function isSet(value) {
        return value !== null && value !== undefined;
    }

    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }

    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function(a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }

        return orientation
            ? rect.top + pageOffset.y - docElem.clientTop
            : rect.left + pageOffset.x - docElem.clientLeft;
    }

    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function() {
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(
                new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                " "
            );
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList
            ? el.classList.contains(className)
            : new RegExp("\\b" + className + "\\b").test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                  start: "pointerdown",
                  move: "pointermove",
                  end: "pointerup"
              }
            : window.navigator.msPointerEnabled
                ? {
                      start: "MSPointerDown",
                      move: "MSPointerMove",
                      end: "MSPointerUp"
                  }
                : {
                      start: "mousedown touchstart",
                      move: "mousemove touchmove",
                      end: "mouseup touchend"
                  };
    }

    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;

        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassive = true;
                }
            });

            window.addEventListener("test", null, opts);
        } catch (e) {}
        /* eslint-enable */

        return supportsPassive;
    }

    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }

    //endregion

    //region Range Calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }

    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }

    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }

    function getJ(value, arr) {
        var j = 1;

        while (value >= arr[j]) {
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }

        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }

        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }

        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];

        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }

            return a;
        }

        if (!xSteps[j - 1]) {
            return value;
        }

        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
        var percentage;

        // Wrap numerical input in an array.
        if (typeof value === "number") {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if (!Array.isArray(value)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        } else if (index === "max") {
            percentage = 100;
        } else {
            percentage = parseFloat(index);
        }

        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push(percentage);
        that.xVal.push(value[0]);

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value[1])) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push(isNaN(value[1]) ? false : value[1]);
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }

        // Step over zero-length ranges (#948);
        if (that.xVal[i] === that.xVal[i + 1]) {
            that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];

            return;
        }

        // Factor to range ratio
        that.xSteps[i] =
            fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);

        var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + that.xNumSteps[i] * highestStep;

        that.xHighestCompleteStep[i] = step;
    }

    //endregion

    //region Spectrum

    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.xHighestCompleteStep = [];

        this.snap = snap;

        var index;
        var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']

        // Map the object keys to an array.
        for (index in entry) {
            if (entry.hasOwnProperty(index)) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if (ordered.length && typeof ordered[0][0] === "object") {
            ordered.sort(function(a, b) {
                return a[0][0] - b[0][0];
            });
        } else {
            ordered.sort(function(a, b) {
                return a[0] - b[0];
            });
        }

        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getDistance = function(value) {
        var index;
        var distances = [];

        for (index = 0; index < this.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            var step = this.xNumSteps[index];

            if (step && (value / step) % 1 !== 0) {
                throw new Error(
                    "noUiSlider (" +
                        VERSION +
                        "): 'limit', 'margin' and 'padding' of " +
                        this.xPct[index] +
                        "% range must be divisible by step."
                );
            }

            // Calculate percentual distance in current range of limit, margin or padding
            distances[index] = fromPercentage(this.xVal, value, index);
        }

        return distances;
    };

    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
        var xPct_index = 0;

        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        } else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }

        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }

        var start_factor;
        var rest_factor = 1;

        var rest_rel_distance = distances[xPct_index];

        var range_pct = 0;

        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;

        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        } else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }

        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];

            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            } else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }

            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            } else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }

            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }

        return value + abs_distance_counter;
    };

    Spectrum.prototype.toStepping = function(value) {
        value = toStepping(this.xVal, this.xPct, value);

        return value;
    };

    Spectrum.prototype.fromStepping = function(value) {
        return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function(value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);

        return value;
    };

    Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
        var j = getJ(value, this.xPct);

        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }

        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function(value) {
        var j = getJ(value, this.xPct);

        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2]
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1]
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j]
            }
        };
    };

    Spectrum.prototype.countStepDecimals = function() {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function(value) {
        return this.getStep(this.toStepping(value));
    };

    //endregion

    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */

    //region Defaults

    var defaultFormatter = {
        to: function(value) {
            return value !== undefined && value.toFixed(2);
        },
        from: Number
    };

    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };

    //endregion

    function validateFormat(entry) {
        // Any object with a to and from method is supported.
        if (isValidFormatter(entry)) {
            return true;
        }

        throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
        }

        parsed.keyboardPageMultiplier = entry;
    }

    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
        }

        parsed.keyboardDefaultStep = entry;
    }

    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
        }

        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
        }
    }

    function testAnimate(parsed, entry) {
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration(parsed, entry) {
        parsed.animationDuration = entry;

        if (typeof entry !== "number") {
            throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
        }
    }

    function testConnect(parsed, entry) {
        var connect = [false];
        var i;

        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        } else if (entry === "upper") {
            entry = [false, true];
        }

        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }

            connect.push(false);
        }

        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
        }
    }

    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
        }

        // Issue #582
        if (entry === 0) {
            return;
        }

        parsed.margin = parsed.spectrum.getDistance(entry);
    }

    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getDistance(entry);

        if (!parsed.limit || parsed.handles < 2) {
            throw new Error(
                "noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles."
            );
        }
    }

    function testPadding(parsed, entry) {
        var index;

        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers."
            );
        }

        if (entry === 0) {
            return;
        }

        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }

        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
            }
        }

        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
        }
    }

    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
        }
    }

    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;

        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error(
                "noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit"
            );
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }

    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }

        if (entry === true) {
            parsed.tooltips = [];

            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(true);
            }
        } else {
            parsed.tooltips = asArray(entry);

            if (parsed.tooltips.length !== parsed.handles) {
                throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter) {
                if (
                    typeof formatter !== "boolean" &&
                    (typeof formatter !== "object" || typeof formatter.to !== "function")
                ) {
                    throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testAriaFormat(parsed, entry) {
        parsed.ariaFormat = entry;
        validateFormat(entry);
    }

    function testFormat(parsed, entry) {
        parsed.format = entry;
        validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
        parsed.keyboardSupport = entry;

        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
        }
    }

    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
        }

        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};

            for (var key in entry) {
                if (!entry.hasOwnProperty(key)) {
                    continue;
                }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            padding: 0,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };

        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };

        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardDefaultStep: 10
        };

        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function(name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });

        // Forward pips options
        parsed.pips = options.pips;

        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;

        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";

        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];

        parsed.style = styles[parsed.dir][parsed.ort];

        return parsed;
    }

    //endregion

    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();

        // All variables local to 'scope' are prefixed with 'scope_'

        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;

        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};

        // Exposed API
        var scope_Self;

        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;

        // Pips constants
        var PIPS_NONE = -1;
        var PIPS_NO_VALUE = 0;
        var PIPS_LARGE_VALUE = 1;
        var PIPS_SMALL_VALUE = 2;

        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;

        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");

            if (className) {
                addClass(div, className);
            }

            addTarget.appendChild(div);

            return div;
        }

        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);

            addNodeTo(handle, options.cssClasses.touchArea);

            handle.setAttribute("data-handle", handleNumber);

            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function(event) {
                    return eventKeydown(event, handleNumber);
                });
            }

            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            } else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }

            return origin;
        }

        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(connectBase, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);

            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            } else {
                addClass(addTarget, options.cssClasses.rtl);
            }

            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            } else {
                addClass(addTarget, options.cssClasses.vertical);
            }

            var textDirection = getComputedStyle(addTarget).direction;

            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            } else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }

            return addNodeTo(addTarget, options.cssClasses.base);
        }

        function addTooltip(handle, handleNumber) {
            if (!options.tooltips[handleNumber]) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }

        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }

        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update.tooltips");
                scope_Tooltips.forEach(function(tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();

            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);

            bindEvent("update.tooltips", function(values, handleNumber, unencoded) {
                if (!scope_Tooltips[handleNumber]) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }

        function aria() {
            bindEvent("update", function(values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function(index) {
                    var handle = scope_Handles[index];

                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);

                    var now = positions[index];

                    // Formatted value for display
                    var text = options.ariaFormat.to(unencoded[index]);

                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);

                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }

        function getGroup(mode, values, stepped) {
            // Use the range.
            if (mode === "range" || mode === "steps") {
                return scope_Spectrum.xVal;
            }

            if (mode === "count") {
                if (values < 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                }

                // Divide 0 - 100 in 'count' parts.
                var interval = values - 1;
                var spread = 100 / interval;

                values = [];

                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }

                values.push(100);

                mode = "positions";
            }

            if (mode === "positions") {
                // Map all percentages to on-range values.
                return values.map(function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                });
            }

            if (mode === "values") {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (stepped) {
                    return values.map(function(value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread(density, mode, group) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(
                group.slice().sort(function(a, b) {
                    return a - b;
                })
            );

            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function(current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = mode === "steps";

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }

                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if (low === false || high === undefined) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }

                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }

                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking(spread, filterFunc, formatter) {
            var element = scope_Document.createElement("div");

            var valueSizeClasses = [];
            valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
            valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
            valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;

            var markerSizeClasses = [];
            markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
            markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
            markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;

            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }

            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;

                if (type === PIPS_NONE) {
                    return;
                }

                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";

                // Values are only appended for points marked '1' or '2'.
                if (type > PIPS_NO_VALUE) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", value);
                    node.style[options.style] = offset + "%";
                    node.innerHTML = formatter.to(value);
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });

            return element;
        }

        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }

        function pips(grid) {
            // Fix #669
            removePips();

            var mode = grid.mode;
            var density = grid.density || 1;
            var filter = grid.filter || false;
            var values = grid.values || false;
            var stepped = grid.stepped || false;
            var group = getGroup(mode, values, stepped);
            var spread = generateSpread(density, mode, group);
            var format = grid.format || {
                to: Math.round
            };

            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));

            return scope_Pips;
        }

        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = "offset" + ["Width", "Height"][options.ort];
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }

        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function(e) {
                e = fixEvent(e, data.pageOffset, data.target || element);

                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }

                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }

                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }

                e.calcPoint = e.points[options.ort];

                // Call the event handler with the event [ and additional data ].
                callback(e, data);
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function(eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;

            var x;
            var y;

            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }

            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function(checkTouch) {
                    return (
                        checkTouch.target === eventTarget ||
                        eventTarget.contains(checkTouch.target) ||
                        (checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget))
                    );
                };

                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);

                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }

                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                } else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);

                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }

                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }

            pageOffset = pageOffset || getPageOffset(scope_Document);

            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435

            return e;
        }

        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();

            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);

            return options.dir ? 100 - proposal : proposal;
        }

        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }

                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);

                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;

                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });

            return handleNumber;
        }

        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }

            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function(c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });

            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();

                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return false;
            }

            var handle;

            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];

                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;

                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Record the event listeners.
            var listeners = [];

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });

            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }

            data.handleNumbers.forEach(function(handleNumber) {
                fireEvent("start", handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap(event) {
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore tap
            // events that have no touches or buttons associated with them.
            if (!event.buttons && !event.touches) {
                return false;
            }

            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);

            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function(targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }

        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }

            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];

            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            } else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }

            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");

            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];

            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }

            event.preventDefault();

            var to;

            if (isUp || isDown) {
                var multiplier = options.keyboardPageMultiplier;
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];

                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }

                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(
                        scope_Locations[handleNumber],
                        isDown,
                        options.keyboardDefaultStep
                    );
                }

                if (isLargeUp || isLargeDown) {
                    step *= multiplier;
                }

                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);

                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;

                to = scope_Values[handleNumber] + step;
            } else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            } else {
                // Home key
                to = options.spectrum.xVal[0];
            }

            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);

            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);

            return false;
        }

        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function(handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }

            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function(a, index) {
                    fireEvent("update", index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function(bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);

                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    delete scope_Events[bind];
                }
            });
        }

        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function(targetEvent) {
                var eventType = targetEvent.split(".")[0];

                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function(callback) {
                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Un-formatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice(),
                            // add the slider public API to an accessible parameter when this is unavailable
                            scope_Self
                        );
                    });
                }
            });
        }

        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;

            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
                    to = Math.max(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
                    to = Math.min(to, distance);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
                    to = Math.min(to, distance);
                }

                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
                    to = Math.max(to, distance);
                }
            }

            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
                    to = Math.max(to, distance);
                }

                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
                    to = Math.min(to, distance);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }

            return to;
        }

        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers) {
            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function(handleNumber, o) {
                    var to = checkHandlePosition(
                        proposals,
                        handleNumber,
                        proposals[handleNumber] + proposal,
                        b[o],
                        f[o],
                        false
                    );

                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function(handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
            }
        }

        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";

            scope_Handles[handleNumber].style[options.transformRule] = translateRule;

            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }

        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function(handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle(handleNumber, to, lookBackward, lookForward) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);

            if (to === false) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }

            var l = 0;
            var h = 100;

            if (index !== 0) {
                l = scope_Locations[index - 1];
            }

            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }

            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";

            scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
        }

        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }

            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }

            to = options.format.from(to);
            to = scope_Spectrum.toStepping(to);

            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }

            return to;
        }

        // Set the slider value.
        function valueSet(input, fireSetEvent) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function(handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
            });

            var i = scope_HandleNumbers.length === 1 ? 0 : 1;

            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true);
                });
            }

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber) {
                fireEvent("update", handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }

        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }

        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);

            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
            }

            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true);

            fireEvent("update", handleNumber);

            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }

        // Get the slider value.
        function valueGet() {
            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy() {
            for (var key in options.cssClasses) {
                if (!options.cssClasses.hasOwnProperty(key)) {
                    continue;
                }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;

            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }

            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }

            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            } else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }

            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }

            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            } else if (location === 0) {
                decrement = null;
            }

            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();

            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }

            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }

            return [decrement, increment];
        }

        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }

        // Updateable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });

            scope_Spectrum = newOptions.spectrum;

            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;

            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            } else {
                removePips();
            }

            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            } else {
                removeTooltips();
            }

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);

            addElements(options.connect, scope_Base);

            // Attach user events.
            bindSliderEvents(options.events);

            // Use the public value method to set the start values.
            valueSet(options.start);

            if (options.pips) {
                pips(options.pips);
            }

            if (options.tooltips) {
                tooltips();
            }

            aria();
        }

        setupSlider();

        // noinspection JSUnusedGlobalSymbols
        scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) {
                moveHandles(a, b, scope_Locations, c);
            },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            removePips: removePips,
            removeTooltips: removeTooltips,
            getTooltips: function() {
                return scope_Tooltips;
            },
            getOrigins: function() {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };

        return scope_Self;
    }

    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
        }

        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
        }

        // Test the options and create the slider environment;
        var options = testOptions(originalOptions, target);
        var api = scope(target, options, originalOptions);

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expandability;
    return {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        version: VERSION,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };
});

// Flex Table v.1
// HTML data-flextable="rows, cols, col, colAfter, simpleBar"
// rows – number of fixed rows,
// cols – the number of fixed rows,
// col – the number of the column that is being rearranged,
// colAfter - the number of the column after which the rearranged column is placed.
// default: data-flextable="1,2,0,0,true" - optional attribute
// Bogdanov Dmitry 2021

//===============================================================================================================================================

class FlexTable {
  constructor (tableWrap) {
    this.options = {
      rows: 1,
      cols: 2,
      col: 0,
      colAfter: 0,
      simpleBar: true
    }

    this.run(tableWrap);
  }

  getDefaultOptions() {
  return options = {
    rows: 1,
    cols: 2,
    col: 0,
    colAfter: 0,
    simpleBar: true
  }
  }
  initOptions() {
    let optionsArr = this.wrap.dataset.flextable;
    if (optionsArr) {
      optionsArr = optionsArr.split(',')
    optionsArr = optionsArr.map(el => { return (el.trim()) });
    this.options.rows = parseInt(optionsArr[0]) || this.options.rows;
    this.options.cols = parseInt(optionsArr[1]) || this.options.cols;
    this.options.col = parseInt(optionsArr[2]) || this.options.col;
    this.options.colAfter = parseInt(optionsArr[3]) || this.options.colAfter;
    this.options.simpleBar = (optionsArr[4] == 'false') ? false : this.options.simpleBar;
    }
  }
  initShell() {

    this.inner.classList.add('_hidden');

    this.inner.leftBox = this.wrap.querySelector('.flex-table__l-box');
    this.inner.rightBox = this.wrap.querySelector('.flex-table__r-box');

    this.inner.leftTable = this.wrap.querySelector('.flex-table__l-table');
    this.inner.leftTHead = this.wrap.querySelector('.flex-table__l-thead');
    this.inner.leftTBody = this.wrap.querySelector('.flex-table__l-tbody');

    this.inner.rightHeaderWrap = this.wrap.querySelector('.flex-table__r-header-wrap');
    this.inner.rightTableWrap = this.wrap.querySelector('.flex-table__r-table-wrap');

    this.inner.rightHeaderInner = this.wrap.querySelector('.flex-table__r-header-inner');
    this.inner.rightHeaderTable = this.wrap.querySelector('.flex-table__r-header-table');
    this.inner.rightHeaderTHead = this.wrap.querySelector('.flex-table__r-table-thead');

    this.inner.rightTable = this.wrap.querySelector('.flex-table__r-table');
    this.inner.rightTBody = this.wrap.querySelector('.flex-table__r-tbody');
  }
  createShell() {
    let inner;
    inner = document.createElement('div');
    inner.leftBox = document.createElement('div');
    inner.rightBox = document.createElement('div');

    inner.classList.add('flex-table__inner', '_hidden');
    inner.leftBox.className = 'flex-table__l-box';
    inner.rightBox.className = 'flex-table__r-box';
    inner.append(inner.leftBox);
    inner.append(inner.rightBox);

    inner.leftTable = document.createElement('table');
    inner.leftTHead = document.createElement('thead');
    inner.leftTBody = document.createElement('tbody');
    inner.leftTable.className = 'flex-table__l-table';
    inner.leftTHead.className = 'flex-table__l-thead';
    inner.leftTBody.className = 'flex-table__l-tbody';
    inner.leftBox.append(inner.leftTable);
    inner.leftTable.append(inner.leftTHead)
    inner.leftTable.append(inner.leftTBody);

    inner.rightHeaderWrap = document.createElement('div');
    inner.rightTableWrap = document.createElement('div');
    inner.rightHeaderWrap.className = 'flex-table__r-header-wrap';
    inner.rightTableWrap.className = 'flex-table__r-table-wrap';
    inner.rightBox.append(inner.rightHeaderWrap);
    inner.rightBox.append(inner.rightTableWrap);

    inner.rightHeaderInner = document.createElement('div');
    inner.rightHeaderTable = document.createElement('table');
    inner.rightHeaderTHead = document.createElement('thead');
    inner.rightHeaderInner.className = 'flex-table__r-header-inner';
    inner.rightHeaderTable.className = 'flex-table__r-header-table';
    inner.rightHeaderTHead.className = 'flex-table__r-table-thead';
    inner.rightHeaderWrap.append(inner.rightHeaderInner);
    inner.rightHeaderInner.append(inner.rightHeaderTable);
    inner.rightHeaderTable.append(inner.rightHeaderTHead);

    inner.rightTable = document.createElement('table');
    inner.rightTBody = document.createElement('tbody');
    inner.rightTable.className = 'flex-table__r-table';
    inner.rightTBody.className = 'flex-table__r-tbody';
    inner.rightTableWrap.append(inner.rightTable);
    inner.rightTable.append(inner.rightTBody);

    this.inner = inner;
    return inner;
  }
  swapColumns() {
    if (this.options.col1 >= 0 && this.options.col2 >= 0 &&
        this.options.col1 != this.options.col2 ) {
      
      let max = Math.max(this.options.col1, this.options.col2);
      let min = Math.min(this.options.col1, this.options.col2);
      let col1 = min, col2 = max;
      let trs = this.sourceTable.querySelectorAll('tr');
      if (trs.length > 0) {
        trs.forEach(tr => {
          let tds = tr.querySelectorAll('th, td');
          if (tds.length > max) {
            tds[col1].before(tds[col2]);
            tds[col2 - 1].after(tds[col1]);
          }
        })
      }
    }    
  }
  moveColumn() {
    if (this.options.col >= 0 && this.options.colAfter >= 0 &&
      this.options.col != this.options.colAfter) {

      let max = Math.max(this.options.col, this.options.colAfter);
      let min = Math.min(this.options.col, this.options.colAfter);
      let col = min, colAfter = max;
      let trs = this.sourceTable.querySelectorAll('tr');
      if (trs.length > 0) {
        trs.forEach(tr => {
          let tds = tr.querySelectorAll('th, td');
          if (tds.length > max) {
            tds[colAfter].after(tds[col]);
          }
        })
      }
    }
  }
  rebuild()  {
    const row = this.options.rows;
    const col = this.options.cols;
    let tops = [];
    let margin = 0;
    let offset = 0;
    tops.push(0)
    this.sourceTable.before(this.inner);

    let trs = this.sourceTable.querySelectorAll('tr');
    if (trs.length > row) {
      let height;
      for (let i = 0; i < row; i++) {
        height = trs[i].querySelectorAll('td, th')[0].getBoundingClientRect().height;
        if (i > 0) {
          tops.push(tops[i - 1] + height);
        }
        margin += height;
      }
    }
    else {
      alert('В таблице недостаточно строк');
      return null;
    }
    for (let i = 0; i < row; i++) {
      let tds = trs[i].querySelectorAll('td, th');
      if (tds.length > 1) {
        let newLeftTHeadTr = document.createElement('tr');
        let newRightTHeadTr = document.createElement('tr');
        for (let j = 0; j < col; j++) {
          tds[j].style.top = tops[i] - offset + 'px';
          newLeftTHeadTr.append(tds[j])
        }
        if (tds[col]) {
          for (let j = col; j < tds.length; j++) {
            tds[j].style.top = tops[i] - offset + 'px';
            newRightTHeadTr.append(tds[j]);
          }

        } else {
          let td = document.createElement('td');
          td.style.top = tops[i] + 'px';
          newRightTHeadTr.append(document.createElement('td'));
        }
        this.inner.leftTHead.append(newLeftTHeadTr);
        this.inner.rightHeaderTHead.append(newRightTHeadTr);
      }
      this.inner.rightTableWrap.style.marginTop = margin - offset + 'px';
    }

    if (trs[row]) {
      for (let i = row; i < trs.length; i++) {
        let tds = trs[i].querySelectorAll('td, th');
        let newLeftTBodyTr = document.createElement('tr');
        let newRightTBodyTr = document.createElement('tr');
        if (tds.length > 1) {

          for (let j = 0; j < col; j++) {
            newLeftTBodyTr.append(tds[j])
          }
          if (tds[col]) {
            for (let j = col; j < tds.length; j++) {
              newRightTBodyTr.append(tds[j]);
            }
          } else {
            let td = document.createElement('td');
            newRightTBodyTr.append(td);
          }
          this.inner.leftTBody.append(newLeftTBodyTr);
          this.inner.rightTBody.append(newRightTBodyTr)
        }
        if (tds.length == 1) {
          const marketHTML = `<td style="overflow: visible;"><div class="flex-table__ad-wrap"><div class="flex-table__ad-text">${tds[0].innerHTML}</div></div></td>`;
          newRightTBodyTr.innerHTML = marketHTML;
          newRightTBodyTr.className = 'flex-table__ad';
          this.inner.rightTBody.append(newRightTBodyTr);

          for (let i = 0; i < col; i++) {
            let td = document.createElement('td');
            td.innerHTML = '&nbsp';
            newLeftTBodyTr.append(td);
          }
          newLeftTBodyTr.className = 'flex-table__ad';
          this.inner.leftTBody.append(newLeftTBodyTr);
        }
      }
    }
    this.sourceTable.remove();
  }
  setupParameters() {
    let inner = this.inner;
    let wrap = this.wrap;
    this.adTextEls = wrap.querySelectorAll('.flex-table__ad-text');
    inner.rightHeaderInner.style.width = '';
    inner.rightTableWrap.style.maxWidth = '';
    inner.rightTableWrap.style.width = '';
    inner.rightTableWrap.style.marginTop = '';
    inner.style.width = '';
    inner.leftBox.style.width = '';
    inner.rightBox.style.width = '';

    inner.rightTableWrap.style.marginTop = inner.rightHeaderInner.getBoundingClientRect().height + 'px';
    let leftTableWidth = inner.leftTable.getBoundingClientRect().width;
    let rightTableWidth = inner.rightTable.getBoundingClientRect().width;
    let wrapW = wrap.clientWidth;
    let leftBoxHeight = inner.leftBox.clientHeight;

    this.overflowX = (leftTableWidth + rightTableWidth) > wrapW;
    this.overflowY = leftBoxHeight < (inner.leftTable.getBoundingClientRect().height);

    let rightBoxWidth;
    if (this.overflowX) {
      wrap.classList.add('_overflow');
      inner.rightBox.classList.add('_overflow');
      rightBoxWidth = Math.floor(wrapW - leftTableWidth);
      if (rightBoxWidth < 1) {
        rightBoxWidth = 0;
      }
      inner.rightHeaderInner.style.width = rightBoxWidth + 'px';
      inner.rightTableWrap.style.maxWidth = rightBoxWidth + 'px';
      inner.rightTableWrap.style.width = rightBoxWidth + 'px';
    }
    else {
      rightBoxWidth = rightTableWidth;
      wrap.classList.remove('_overflow');
      inner.rightBox.classList.remove('_overflow');
      inner.rightHeaderInner.style.width = rightBoxWidth + 'px';
      inner.rightTableWrap.style.maxWidth = rightBoxWidth + 'px';
      inner.rightTableWrap.style.width = rightBoxWidth + 'px';
    }

    if (this.adTextEls) {
      if (this.overflowX) {
        this.adTextEls.forEach(adText => {
          adText.style.width = rightBoxWidth + 'px';
          adText.style.left = '0px';
        });
      }
      else{
        this.adTextEls.forEach(adText => {
          adText.style.width = inner.clientWidth + 'px';
          adText.style.left = rightBoxWidth - inner.clientWidth + 'px';
        });
      }
    }
  }
  translateHeader() {
    let wrapX = this.inner.rightBox.getBoundingClientRect().left;
    let rightTableX = this.inner.rightTable.getBoundingClientRect().left;
    this.inner.rightHeaderTable.style.transform = `translate(${((rightTableX - wrapX) + "px")}, 0)`;
  }
  translateAdTextEls() {
    let wrapX = this.inner.rightBox.getBoundingClientRect().left;
    let rightTableX = this.inner.rightTable.getBoundingClientRect().left;
    let wrapR = this.inner.rightBox.getBoundingClientRect().right;
    let rightTableR = this.inner.rightTable.getBoundingClientRect().right;

    this.adTextEls.forEach(adText => {
      if (wrapR <= rightTableR) {
        adText.style.transform = `translate(${(-(rightTableX - wrapX) + "px")}, 0)`;
      }
    });
  }
  defineScrollBar() {
    if (this.options.simpleBar) {
      try {
        this.simpleBar = new SimpleBar(this.inner.rightTableWrap);
        if (this.simpleBar) {
          this.scroller = this.inner.rightBox.querySelector(".simplebar-content-wrapper");
          if (this.scroller) {
            let sBSHTrack = this.inner.rightBox.querySelector(".simplebar-track.simplebar-horizontal");
            sBSHTrack = sBSHTrack.getBoundingClientRect().height;
            this.inner.rightTableWrap.style.marginBottom = -sBSHTrack + 'px';
          }
        }
      }
      catch {
        this.inner.rightTableWrap.style.overflowX = 'auto'
        this.scroller = this.wrap;
      }
    }
    else {
      this.inner.rightTableWrap.style.overflowX = 'auto'
      this.scroller = this.wrap;
    }
  }
  scroll() {
    this.scroller = this.scroller || this.inner.rightTableWrap;
    this.translateX = this.translateHeader.bind(this);
    this.scroller.addEventListener('scroll', this.translateX);

    if (this.adTextEls.length > 0) {
      this.translateAdText = this.translateAdTextEls.bind(this);
      this.scroller.addEventListener('scroll', this.translateAdText);
    }
    
  }
  hover() {
    let table = this.inner;
    let leftTable = table.leftTable;
    let rightTable = table.rightTable;
    if (leftTable && rightTable) {
      let leftTrs = leftTable.querySelectorAll('tbody>tr');
      let rightTrs = rightTable.querySelectorAll('tr');

      leftTrs.forEach((tr) => addHover(tr));
      rightTrs.forEach((tr) => addHover(tr));
      leftTrs.forEach((tr) => removeHover(tr));
      rightTrs.forEach((tr) => removeHover(tr));

      function addHover(tr) {
        tr.addEventListener('mouseenter', () => {
          const curentTBody = tr.parentElement;//closest('tbody');
          //const table = tr.closest('.flex-table');
          const curentTrs = curentTBody.querySelectorAll('tr');
          let targetTBody;
          if (curentTBody === table.rightTBody/* .classList.contains('flex-table__l-tbody') */) {
            targetTBody = table.leftTBody;
          }
          else {
            targetTBody = table.rightTBody;
          }
          const targetTrs = targetTBody.querySelectorAll('tr');

          for (let i = 0; i < curentTrs.length; i++) {
            if (curentTrs[i] == tr) {
              targetTrs[i].classList.add('_hover');
              break;
            }
          }
        });
      }
      function removeHover(tr) {
        tr.addEventListener('mouseleave', () => {
          const curentTBody = tr.parentElement;//closest('tbody');
          //const table = tr.closest('.flex-table');
          const curentTrs = curentTBody.querySelectorAll('tr');
          let targetTBody;
          if (curentTBody === table.rightTBody/* .classList.contains('flex-table__l-tbody') */) {
            targetTBody = table.leftTBody;
          }
          else {
            targetTBody = table.rightTBody;
          }
          const targetTrs = targetTBody.querySelectorAll('tr');
          for (let i = 0; i < targetTrs.length; i++) {
            targetTrs[i].classList.remove('_hover');
          }
        });
      }
    }
  }
  resize() {
    this.windowResize = this.setupParameters.bind(this);
    window.addEventListener('resize', this.windowResize);
  }
  handler() {
    this.setupParameters();
    this.defineScrollBar();
    this.scroll();
    this.hover();
    this.resize();
  }
  clearClassList() {
    this.wrap.classList.remove('_loading');
    this.inner.classList.remove('_hidden');
  }
  run(tableWrap) {

    if (typeof tableWrap === 'string') {
      this.wrap = document.querySelector(tableWrap);
    }
    else if (typeof tableWrap === 'object') {
      this.wrap = tableWrap;
    }
    if (!this.wrap) {
      return;
    }
    
    this.wrap.classList.add('flex-table', '_loading');
    this.initOptions();

    this.inner = this.wrap.querySelector('.flex-table__inner');

    if (this.inner) {
      this.initShell();
      this.handler();
    }
    else {
      this.sourceTable = this.wrap.querySelector('table');
      this.sourceTable.classList.add('_hidden');
      this.moveColumn();
      this.createShell();
      this.rebuild();
      this.handler();
    }
    this.clearClassList();
  }
}

function getFlaxTableShell() {
  let wrap = document.createElement('div');
  wrap.classList.add('flex-table', '_loading');
  let inner = document.createElement('div');
  inner.classList.add('flex-table__inner', '_hidden');

  inner.leftBox = document.createElement('div');
  inner.rightBox = document.createElement('div');

  inner.leftBox.className = 'flex-table__l-box';
  inner.rightBox.className = 'flex-table__r-box';
  inner.append(inner.leftBox);
  inner.append(inner.rightBox);

  inner.leftTable = document.createElement('table');
  inner.leftTHead = document.createElement('thead');
  inner.leftTBody = document.createElement('tbody');
  inner.leftTable.className = 'flex-table__l-table';
  inner.leftTHead.className = 'flex-table__l-thead';
  inner.leftTBody.className = 'flex-table__l-tbody';
  inner.leftBox.append(inner.leftTable);
  inner.leftTable.append(inner.leftTHead)
  inner.leftTable.append(inner.leftTBody);

  inner.rightHeaderWrap = document.createElement('div');
  inner.rightTableWrap = document.createElement('div');
  inner.rightHeaderWrap.className = 'flex-table__r-header-wrap';
  inner.rightTableWrap.className = 'flex-table__r-table-wrap';
  inner.rightBox.append(inner.rightHeaderWrap);
  inner.rightBox.append(inner.rightTableWrap);

  inner.rightHeaderInner = document.createElement('div');
  inner.rightHeaderTable = document.createElement('table');
  inner.rightHeaderTHead = document.createElement('thead');
  inner.rightHeaderInner.className = 'flex-table__r-header-inner';
  inner.rightHeaderTable.className = 'flex-table__r-header-table';
  inner.rightHeaderTHead.className = 'flex-table__r-table-thead';
  inner.rightHeaderWrap.append(inner.rightHeaderInner);
  inner.rightHeaderInner.append(inner.rightHeaderTable);
  inner.rightHeaderTable.append(inner.rightHeaderTHead);

  inner.rightTable = document.createElement('table');
  inner.rightTBody = document.createElement('tbody');
  inner.rightTable.className = 'flex-table__r-table';
  inner.rightTBody.className = 'flex-table__r-tbody';
  inner.rightTableWrap.append(inner.rightTable);
  inner.rightTable.append(inner.rightTBody);

  wrap.append(inner);
  return wrap;
}
