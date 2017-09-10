(function(){
UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};

var baidu = window.baidu || {};

window.baidu = baidu;

window.UE = baidu.editor =  {};

UE.plugins = {};

UE.commands = {};

UE.instants = {};

UE.I18N = {};

UE.version = "1.2.6.1";

var dom = UE.dom = {};


///////////////////////////////////////////////////////////////////////////////////////////////
/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

function count_hanzi_len(s) {
	var l = 0;
	var a = s.split("");
	for (var i=0;i<a.length;i++) {
		if (a[i].charCodeAt(0)<299) {
			l++;
		} else {
			l+=2;
		}
	}
	return l;
}
///////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @file
 * @name UE.browser
 * @short Browser
 * @desc UEditor中采用的浏览器判断模块
 */
var browser = UE.browser = function(){
    var agent = navigator.userAgent.toLowerCase(),
        opera = window.opera,
        browser = {
        /**
         * 检测浏览器是否为IE
         * @name ie
         * @grammar UE.browser.ie  => true|false
         */
        ie		: !!window.ActiveXObject,

        /**
         * 检测浏览器是否为Opera
         * @name opera
         * @grammar UE.browser.opera  => true|false
         */
        opera	: ( !!opera && opera.version ),

        /**
         * 检测浏览器是否为webkit内核
         * @name webkit
         * @grammar UE.browser.webkit  => true|false
         */
        webkit	: ( agent.indexOf( ' applewebkit/' ) > -1 ),

        /**
         * 检测浏览器是否为mac系统下的浏览器
         * @name mac
         * @grammar UE.browser.mac  => true|false
         */
        mac	: ( agent.indexOf( 'macintosh' ) > -1 ),

        /**
         * 检测浏览器是否处于怪异模式
         * @name quirks
         * @grammar UE.browser.quirks  => true|false
         */
        quirks : ( document.compatMode == 'BackCompat' )
    };
    /**
     * 检测浏览器是否处为gecko内核
     * @name gecko
     * @grammar UE.browser.gecko  => true|false
     */
    browser.gecko =( navigator.product == 'Gecko' && !browser.webkit && !browser.opera );

    var version = 0;

    // Internet Explorer 6.0+
    if ( browser.ie ){
        version = parseFloat( agent.match( /msie (\d+)/ )[1] );
        /**
         * 检测浏览器是否为 IE9 模式
         * @name ie9Compat
         * @grammar UE.browser.ie9Compat  => true|false
         */
        browser.ie9Compat = document.documentMode == 9;
        /**
         * 检测浏览器是否为 IE8 浏览器
         * @name ie8
         * @grammar     UE.browser.ie8  => true|false
         */
        browser.ie8 = !!document.documentMode;

        /**
         * 检测浏览器是否为 IE8 模式
         * @name ie8Compat
         * @grammar     UE.browser.ie8Compat  => true|false
         */
        browser.ie8Compat = document.documentMode == 8;

        /**
         * 检测浏览器是否运行在 兼容IE7模式
         * @name ie7Compat
         * @grammar     UE.browser.ie7Compat  => true|false
         */
        browser.ie7Compat = ( ( version == 7 && !document.documentMode )
                || document.documentMode == 7 );

        /**
         * 检测浏览器是否IE6模式或怪异模式
         * @name ie6Compat
         * @grammar     UE.browser.ie6Compat  => true|false
         */
        browser.ie6Compat = ( version < 7 || browser.quirks );

    }

    // Gecko.
    if ( browser.gecko ){
        var geckoRelease = agent.match( /rv:([\d\.]+)/ );
        if ( geckoRelease )
        {
            geckoRelease = geckoRelease[1].split( '.' );
            version = geckoRelease[0] * 10000 + ( geckoRelease[1] || 0 ) * 100 + ( geckoRelease[2] || 0 ) * 1;
        }
    }
    /**
     * 检测浏览器是否为chrome
     * @name chrome
     * @grammar     UE.browser.chrome  => true|false
     */
    if (/chrome\/(\d+\.\d)/i.test(agent)) {
        browser.chrome = + RegExp['\x241'];
    }
    /**
     * 检测浏览器是否为safari
     * @name safari
     * @grammar     UE.browser.safari  => true|false
     */
    if(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)){
    	browser.safari = + (RegExp['\x241'] || RegExp['\x242']);
    }


    // Opera 9.50+
    if ( browser.opera )
        version = parseFloat( opera.version() );

    // WebKit 522+ (Safari 3+)
    if ( browser.webkit )
        version = parseFloat( agent.match( / applewebkit\/(\d+)/ )[1] );

    /**
     * 浏览器版本判断
     * IE系列返回值为5,6,7,8,9,10等
     * gecko系列会返回10900，158900等.
     * webkit系列会返回其build号 (如 522等).
     * @name version
     * @grammar     UE.browser.version  => number
     * @example
     * if ( UE.browser.ie && UE.browser.version == 6 ){
     *     alert( "Ouch!居然是万恶的IE6!" );
     * }
     */
    browser.version = version;

    /**
     * 是否是兼容模式的浏览器
     * @name isCompatible
     * @grammar  UE.browser.isCompatible  => true|false
     * @example
     * if ( UE.browser.isCompatible ){
     *     alert( "你的浏览器相当不错哦！" );
     * }
     */
    browser.isCompatible =
        !browser.mobile && (
        ( browser.ie && version >= 6 ) ||
        ( browser.gecko && version >= 10801 ) ||
        ( browser.opera && version >= 9.5 ) ||
        ( browser.air && version >= 1 ) ||
        ( browser.webkit && version >= 522 ) ||
        false );
    return browser;
}();
//快捷方式
var ie = browser.ie,
    webkit = browser.webkit,
    gecko = browser.gecko,
    opera = browser.opera;
/**
 * @file
 * @name UE.Utils
 * @short Utils
 * @desc UEditor封装使用的静态工具函数
 * @import editor.js
 */
var utils = UE.utils = {
    /**
     * 遍历数组，对象，nodeList
     * @name each
     * @grammar UE.utils.each(obj,iterator,[context])
     * @since 1.2.4+
     * @desc
     * * obj 要遍历的对象
     * * iterator 遍历的方法,方法的第一个是遍历的值，第二个是索引，第三个是obj
     * * context  iterator的上下文
     * @example
     * UE.utils.each([1,2],function(v,i){
     *     console.log(v)//值
     *     console.log(i)//索引
     * })
     * UE.utils.each(document.getElementsByTagName('*'),function(n){
     *     console.log(n.tagName)
     * })
     */
    each : function(obj, iterator, context) {
        if (obj == null) return;
        if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                if(iterator.call(context, obj[i], i, obj) === false)
                    return false;
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if(iterator.call(context, obj[key], key, obj) === false)
                        return false;
                }
            }
        }
    },

    makeInstance:function (obj) {
        var noop = new Function();
        noop.prototype = obj;
        obj = new noop;
        noop.prototype = null;
        return obj;
    },
    /**
     * 将source对象中的属性扩展到target对象上
     * @name extend
     * @grammar UE.utils.extend(target,source)  => Object  //覆盖扩展
     * @grammar UE.utils.extend(target,source,true)  ==> Object  //保留扩展
     */
    extend:function (t, s, b) {
        if (s) {
            for (var k in s) {
                if (!b || !t.hasOwnProperty(k)) {
                    t[k] = s[k];
                }
            }
        }
        return t;
    },
    extend2:function (t) {
        var a = arguments;
        for (var i = 1; i < a.length; i++) {
            var x = a[i];
            for (var k in x) {
                if (!t.hasOwnProperty(k)) {
                    t[k] = x[k];
                }
            }
        }
        return t;
    },
    /**
     * 模拟继承机制，subClass继承superClass
     * @name inherits
     * @grammar UE.utils.inherits(subClass,superClass) => subClass
     * @example
     * function SuperClass(){
     *     this.name = "小李";
     * }
     * SuperClass.prototype = {
     *     hello:function(str){
     *         console.log(this.name + str);
     *     }
     * }
     * function SubClass(){
     *     this.name = "小张";
     * }
     * UE.utils.inherits(SubClass,SuperClass);
     * var sub = new SubClass();
     * sub.hello("早上好!"); ==> "小张早上好！"
     */
    inherits:function (subClass, superClass) {
        var oldP = subClass.prototype,
            newP = utils.makeInstance(superClass.prototype);
        utils.extend(newP, oldP, true);
        subClass.prototype = newP;
        return (newP.constructor = subClass);
    },

    /**
     * 用指定的context作为fn上下文，也就是this
     * @name bind
     * @grammar UE.utils.bind(fn,context)  =>  fn
     */
    bind:function (fn, context) {
        return function () {
            return fn.apply(context, arguments);
        };
    },

    /**
     * 创建延迟delay执行的函数fn
     * @name defer
     * @grammar UE.utils.defer(fn,delay)  =>fn   //延迟delay毫秒执行fn，返回fn
     * @grammar UE.utils.defer(fn,delay,exclusion)  =>fn   //延迟delay毫秒执行fn，若exclusion为真，则互斥执行fn
     * @example
     * function test(){
     *     console.log("延迟输出！");
     * }
     * //非互斥延迟执行
     * var testDefer = UE.utils.defer(test,1000);
     * testDefer();   =>  "延迟输出！";
     * testDefer();   =>  "延迟输出！";
     * //互斥延迟执行
     * var testDefer1 = UE.utils.defer(test,1000,true);
     * testDefer1();   =>  //本次不执行
     * testDefer1();   =>  "延迟输出！";
     */
    defer:function (fn, delay, exclusion) {
        var timerID;
        return function () {
            if (exclusion) {
                clearTimeout(timerID);
            }
            timerID = setTimeout(fn, delay);
        };
    },

    /**
     * 查找元素item在数组array中的索引, 若找不到返回-1
     * @name indexOf
     * @grammar UE.utils.indexOf(array,item)  => index|-1  //默认从数组开头部开始搜索
     * @grammar UE.utils.indexOf(array,item,start)  => index|-1  //start指定开始查找的位置
     */
    indexOf:function (array, item, start) {
        var index = -1;
        start = this.isNumber(start) ? start : 0;
        this.each(array, function (v, i) {
            if (i >= start && v === item) {
                index = i;
                return false;
            }
        });
        return index;
    },

    /**
     * 移除数组array中的元素item
     * @name removeItem
     * @grammar UE.utils.removeItem(array,item)
     */
    removeItem:function (array, item) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] === item) {
                array.splice(i, 1);
                i--;
            }
        }
    },

    /**
     * 删除字符串str的首尾空格
     * @name trim
     * @grammar UE.utils.trim(str) => String
     */
    trim:function (str) {
        return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, '');
    },

    /**
     * 将字符串list(以','分隔)或者数组list转成哈希对象
     * @name listToMap
     * @grammar UE.utils.listToMap(list)  => Object  //Object形如{test:1,br:1,textarea:1}
     */
    listToMap:function (list) {
        if (!list)return {};
        list = utils.isArray(list) ? list : list.split(',');
        for (var i = 0, ci, obj = {}; ci = list[i++];) {
            obj[ci.toUpperCase()] = obj[ci] = 1;
        }
        return obj;
    },

    /**
     * 将str中的html符号转义,默认将转义''&<">''四个字符，可自定义reg来确定需要转义的字符
     * @name unhtml
     * @grammar UE.utils.unhtml(str);  => String
     * @grammar UE.utils.unhtml(str,reg)  => String
     * @example
     * var html = '<body>You say:"你好！Baidu & UEditor!"</body>';
     * UE.utils.unhtml(html);   ==>  &lt;body&gt;You say:&quot;你好！Baidu &amp; UEditor!&quot;&lt;/body&gt;
     * UE.utils.unhtml(html,/[<>]/g)  ==>  &lt;body&gt;You say:"你好！Baidu & UEditor!"&lt;/body&gt;
     */
    unhtml:function (str, reg) {
        return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function (a, b) {
            if (b) {
                return a;
            } else {
                return {
                    '<':'&lt;',
                    '&':'&amp;',
                    '"':'&quot;',
                    '>':'&gt;',
                    "'":'&#39;'
                }[a]
            }

        }) : '';
    },
    /**
     * 将str中的转义字符还原成html字符
     * @name html
     * @grammar UE.utils.html(str)  => String   //详细参见<code><a href = '#unhtml'>unhtml</a></code>
     */
    html:function (str) {
        return str ? str.replace(/&((g|l|quo)t|amp|#39);/g, function (m) {
            return {
                '&lt;':'<',
                '&amp;':'&',
                '&quot;':'"',
                '&gt;':'>',
                '&#39;':"'"
            }[m]
        }) : '';
    },
    /**
     * 将css样式转换为驼峰的形式。如font-size => fontSize
     * @name cssStyleToDomStyle
     * @grammar UE.utils.cssStyleToDomStyle(cssName)  => String
     */
    cssStyleToDomStyle:function () {
        var test = document.createElement('div').style,
            cache = {
                'float':test.cssFloat != undefined ? 'cssFloat' : test.styleFloat != undefined ? 'styleFloat' : 'float'
            };

        return function (cssName) {
            return cache[cssName] || (cache[cssName] = cssName.toLowerCase().replace(/-./g, function (match) {
                return match.charAt(1).toUpperCase();
            }));
        };
    }(),
    /**
     * 动态加载文件到doc中，并依据obj来设置属性，加载成功后执行回调函数fn
     * @name loadFile
     * @grammar UE.utils.loadFile(doc,obj)
     * @grammar UE.utils.loadFile(doc,obj,fn)
     * @example
     * //指定加载到当前document中一个script文件，加载成功后执行function
     * utils.loadFile( document, {
     *     src:"test.js",
     *     tag:"script",
     *     type:"text/javascript",
     *     defer:"defer"
     * }, function () {
     *     console.log('加载成功！')
     * });
     */
    loadFile:function () {
        var tmpList = [];

        function getItem(doc, obj) {
            try {
                for (var i = 0, ci; ci = tmpList[i++];) {
                    if (ci.doc === doc && ci.url == (obj.src || obj.href)) {
                        return ci;
                    }
                }
            } catch (e) {
                return null;
            }

        }

        return function (doc, obj, fn) {
            var item = getItem(doc, obj);
            if (item) {
                if (item.ready) {
                    fn && fn();
                } else {
                    item.funs.push(fn)
                }
                return;
            }
            tmpList.push({
                doc:doc,
                url:obj.src || obj.href,
                funs:[fn]
            });
            if (!doc.body) {
                var html = [];
                for (var p in obj) {
                    if (p == 'tag')continue;
                    html.push(p + '="' + obj[p] + '"')
                }
                doc.write('<' + obj.tag + ' ' + html.join(' ') + ' ></' + obj.tag + '>');
                return;
            }
            if (obj.id && doc.getElementById(obj.id)) {
                return;
            }
            var element = doc.createElement(obj.tag);
            delete obj.tag;
            for (var p in obj) {
                element.setAttribute(p, obj[p]);
            }
            element.onload = element.onreadystatechange = function () {
                if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    item = getItem(doc, obj);
                    if (item.funs.length > 0) {
                        item.ready = 1;
                        for (var fi; fi = item.funs.pop();) {
                            fi();
                        }
                    }
                    element.onload = element.onreadystatechange = null;
                }
            };
            element.onerror = function () {
                throw Error('The load ' + (obj.href || obj.src) + ' fails,check the url settings of file ueditor.config.js ')
            };
            doc.getElementsByTagName("head")[0].appendChild(element);
        }
    }(),
    /**
     * 判断obj对象是否为空
     * @name isEmptyObject
     * @grammar UE.utils.isEmptyObject(obj)  => true|false
     * @example
     * UE.utils.isEmptyObject({}) ==>true
     * UE.utils.isEmptyObject([]) ==>true
     * UE.utils.isEmptyObject("") ==>true
     */
    isEmptyObject:function (obj) {
        if (obj == null) return true;
        if (this.isArray(obj) || this.isString(obj)) return obj.length === 0;
        for (var key in obj) if (obj.hasOwnProperty(key)) return false;
        return true;
    },

    /**
     * 统一将颜色值使用16进制形式表示
     * @name fixColor
     * @grammar UE.utils.fixColor(name,value) => value
     * @example
     * rgb(255,255,255)  => "#ffffff"
     */
    fixColor:function (name, value) {
        if (/color/i.test(name) && /rgba?/.test(value)) {
            var array = value.split(",");
            if (array.length > 3)
                return "";
            value = "#";
            for (var i = 0, color; color = array[i++];) {
                color = parseInt(color.replace(/[^\d]/gi, ''), 10).toString(16);
                value += color.length == 1 ? "0" + color : color;
            }
            value = value.toUpperCase();
        }
        return  value;
    },
    /**
     * 只针对border,padding,margin做了处理，因为性能问题
     * @public
     * @function
     * @param {String}    val style字符串
     */
    optCss:function (val) {
        var padding, margin, border;
        val = val.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (str, key, name, val) {
            if (val.split(' ').length == 1) {
                switch (key) {
                    case 'padding':
                        !padding && (padding = {});
                        padding[name] = val;
                        return '';
                    case 'margin':
                        !margin && (margin = {});
                        margin[name] = val;
                        return '';
                    case 'border':
                        return val == 'initial' ? '' : str;
                }
            }
            return str;
        });

        function opt(obj, name) {
            if (!obj) {
                return '';
            }
            var t = obj.top , b = obj.bottom, l = obj.left, r = obj.right, val = '';
            if (!t || !l || !b || !r) {
                for (var p in obj) {
                    val += ';' + name + '-' + p + ':' + obj[p] + ';';
                }
            } else {
                val += ';' + name + ':' +
                    (t == b && b == l && l == r ? t :
                        t == b && l == r ? (t + ' ' + l) :
                            l == r ? (t + ' ' + l + ' ' + b) : (t + ' ' + r + ' ' + b + ' ' + l)) + ';'
            }
            return val;
        }

        val += opt(padding, 'padding') + opt(margin, 'margin');
        return val.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, '').replace(/;([ \n\r\t]+)|\1;/g, ';')
            .replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (a, b) {
                return b ? b + ";;" : ';'
            });
    },
    /**
     * 深度克隆对象，从source到target
     * @name clone
     * @grammar UE.utils.clone(source) => anthorObj 新的对象是完整的source的副本
     * @grammar UE.utils.clone(source,target) => target包含了source的所有内容，重名会覆盖
     */
    clone:function (source, target) {
        var tmp;
        target = target || {};
        for (var i in source) {
            if (source.hasOwnProperty(i)) {
                tmp = source[i];
                if (typeof tmp == 'object') {
                    target[i] = utils.isArray(tmp) ? [] : {};
                    utils.clone(source[i], target[i])
                } else {
                    target[i] = tmp;
                }
            }
        }
        return target;
    },
    /**
     * 转换cm/pt到px
     * @name transUnitToPx
     * @grammar UE.utils.transUnitToPx('20pt') => '27px'
     * @grammar UE.utils.transUnitToPx('0pt') => '0'
     */
    transUnitToPx:function (val) {
        if (!/(pt|cm)/.test(val)) {
            return val
        }
        var unit;
        val.replace(/([\d.]+)(\w+)/, function (str, v, u) {
            val = v;
            unit = u;
        });
        switch (unit) {
            case 'cm':
                val = parseFloat(val) * 25;
                break;
            case 'pt':
                val = Math.round(parseFloat(val) * 96 / 72);
        }
        return val + (val ? 'px' : '');
    },
    /**
     * DomReady方法，回调函数将在dom树ready完成后执行
     * @name domReady
     * @grammar UE.utils.domReady(fn)  => fn  //返回一个延迟执行的方法
     */
    domReady:function () {

        var fnArr = [];

        function doReady(doc) {
            //确保onready只执行一次
            doc.isReady = true;
            for (var ci; ci = fnArr.pop(); ci()) {
            }
        }

        return function (onready, win) {
            win = win || window;
            var doc = win.document;
            onready && fnArr.push(onready);
            if (doc.readyState === "complete") {
                doReady(doc);
            } else {
                doc.isReady && doReady(doc);
                if (browser.ie) {
                    (function () {
                        if (doc.isReady) return;
                        try {
                            doc.documentElement.doScroll("left");
                        } catch (error) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        doReady(doc);
                    })();
                    win.attachEvent('onload', function () {
                        doReady(doc)
                    });
                } else {
                    doc.addEventListener("DOMContentLoaded", function () {
                        doc.removeEventListener("DOMContentLoaded", arguments.callee, false);
                        doReady(doc);
                    }, false);
                    win.addEventListener('load', function () {
                        doReady(doc)
                    }, false);
                }
            }

        }
    }(),
    /**
     * 动态添加css样式
     * @name cssRule
     * @grammar UE.utils.cssRule('添加的样式的节点名称',['样式'，'放到哪个document上'])
     * @grammar UE.utils.cssRule('body','body{background:#ccc}') => null  //给body添加背景颜色
     * @grammar UE.utils.cssRule('body') =>样式的字符串  //取得key值为body的样式的内容,如果没有找到key值先关的样式将返回空，例如刚才那个背景颜色，将返回 body{background:#ccc}
     * @grammar UE.utils.cssRule('body','') =>null //清空给定的key值的背景颜色
     */
    cssRule:browser.ie ? function (key, style, doc) {
        var indexList, index;
        doc = doc || document;
        if (doc.indexList) {
            indexList = doc.indexList;
        } else {
            indexList = doc.indexList = {};
        }
        var sheetStyle;
        if (!indexList[key]) {
            if (style === undefined) {
                return ''
            }
            sheetStyle = doc.createStyleSheet('', index = doc.styleSheets.length);
            indexList[key] = index;
        } else {
            sheetStyle = doc.styleSheets[indexList[key]];
        }
        if (style === undefined) {
            return sheetStyle.cssText
        }
        sheetStyle.cssText = style || ''
    } : function (key, style, doc) {
        doc = doc || document;
        var head = doc.getElementsByTagName('head')[0], node;
        if (!(node = doc.getElementById(key))) {
            if (style === undefined) {
                return ''
            }
            node = doc.createElement('style');
            node.id = key;
            head.appendChild(node)
        }
        if (style === undefined) {
            return node.innerHTML
        }
        if (style !== '') {
            node.innerHTML = style;
        } else {
            head.removeChild(node)
        }
    },
    sort:function(array,compareFn){
        compareFn = compareFn || function(item1, item2){ return item1.localeCompare(item2);};
        for(var i= 0,len = array.length; i<len; i++){
            for(var j = i,length = array.length; j<length; j++){
                if(compareFn(array[i], array[j]) > 0){
                    var t = array[i];
                    array[i] = array[j];
                    array[j] = t;
                }
            }
        }
        return array;
    }

};
/**
 * 判断str是否为字符串
 * @name isString
 * @grammar UE.utils.isString(str) => true|false
 */
/**
 * 判断array是否为数组
 * @name isArray
 * @grammar UE.utils.isArray(obj) => true|false
 */
/**
 * 判断obj对象是否为方法
 * @name isFunction
 * @grammar UE.utils.isFunction(obj)  => true|false
 */
/**
 * 判断obj对象是否为数字
 * @name isNumber
 * @grammar UE.utils.isNumber(obj)  => true|false
 */
utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object'], function (v) {
    UE.utils['is' + v] = function (obj) {
        return Object.prototype.toString.apply(obj) == '[object ' + v + ']';
    }
});
/**
 * @file
 * @name UE.EventBase
 * @short EventBase
 * @import editor.js,core/utils.js
 * @desc UE采用的事件基类，继承此类的对应类将获取addListener,removeListener,fireEvent方法。
 * 在UE中，Editor以及所有ui实例都继承了该类，故可以在对应的ui对象以及editor对象上使用上述方法。
 */
var EventBase = UE.EventBase = function () {};

EventBase.prototype = {
    /**
     * 注册事件监听器
     * @name addListener
     * @grammar editor.addListener(types,fn)  //types为事件名称，多个可用空格分隔
     * @example
     * editor.addListener('selectionchange',function(){
     *      console.log("选区已经变化！");
     * })
     * editor.addListener('beforegetcontent aftergetcontent',function(type){
     *         if(type == 'beforegetcontent'){
     *             //do something
     *         }else{
     *             //do something
     *         }
     *         console.log(this.getContent) // this是注册的事件的编辑器实例
     * })
     */
    addListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            getListener(this, ti, true).push(listener);
        }
    },
    /**
     * 移除事件监听器
     * @name removeListener
     * @grammar editor.removeListener(types,fn)  //types为事件名称，多个可用空格分隔
     * @example
     * //changeCallback为方法体
     * editor.removeListener("selectionchange",changeCallback);
     */
    removeListener:function (types, listener) {
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            utils.removeItem(getListener(this, ti) || [], listener);
        }
    },
    /**
     * 触发事件
     * @name fireEvent
     * @grammar editor.fireEvent(types)  //types为事件名称，多个可用空格分隔
     * @example
     * editor.fireEvent("selectionchange");
     */
    fireEvent:function () {
        var types = arguments[0];
        types = utils.trim(types).split(' ');
        for (var i = 0, ti; ti = types[i++];) {
            var listeners = getListener(this, ti),
                r, t, k;
            if (listeners) {
                k = listeners.length;
                while (k--) {
                    if(!listeners[k])continue;
                    t = listeners[k].apply(this, arguments);
                    if(t === true){
                        return t;
                    }
                    if (t !== undefined) {
                        r = t;
                    }
                }
            }
            if (t = this['on' + ti.toLowerCase()]) {
                r = t.apply(this, arguments);
            }
        }
        return r;
    }
};
/**
 * 获得对象所拥有监听类型的所有监听器
 * @public
 * @function
 * @param {Object} obj  查询监听器的对象
 * @param {String} type 事件类型
 * @param {Boolean} force  为true且当前所有type类型的侦听器不存在时，创建一个空监听器数组
 * @returns {Array} 监听器数组
 */
function getListener(obj, type, force) {
    var allListeners;
    type = type.toLowerCase();
    return ( ( allListeners = ( obj.__allListeners || force && ( obj.__allListeners = {} ) ) )
        && ( allListeners[type] || force && ( allListeners[type] = [] ) ) );
}


///import editor.js
///import core/dom/dom.js
///import core/utils.js
/**
 * dtd html语义化的体现类
 * @constructor
 * @namespace dtd
 */
var dtd = dom.dtd = (function() {
    function _( s ) {
        for (var k in s) {
            s[k.toUpperCase()] = s[k];
        }
        return s;
    }
    var X = utils.extend2;
    var A = _({isindex:1,fieldset:1}),
        B = _({input:1,button:1,select:1,textarea:1,label:1}),
        C = X( _({a:1}), B ),
        D = X( {iframe:1}, C ),
        E = _({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),
        F = _({ins:1,del:1,script:1,style:1}),
        G = X( _({b:1,acronym:1,bdo:1,'var':1,'#':1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}), F ),
        H = X( _({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}), G ),
        I = X( _({p:1}), H ),
        J = X( _({iframe:1}), H, B ),
        K = _({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,'#':1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,'var':1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),

        L = X( _({a:0}), J ),//a不能被切开，所以把他
        M = _({tr:1}),
        N = _({'#':1}),
        O = X( _({param:1}), K ),
        P = X( _({form:1}), A, D, E, I ),
        Q = _({li:1,ol:1,ul:1}),
        R = _({style:1,script:1}),
        S = _({base:1,link:1,meta:1,title:1}),
        T = X( S, R ),
        U = _({head:1,body:1}),
        V = _({html:1});

    var block = _({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),

        empty =  _({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1});

    return  _({

        // $ 表示自定的属性

        // body外的元素列表.
        $nonBodyContent: X( V, U, S ),

        //块结构元素列表
        $block : block,

        //内联元素列表
        $inline : L,

        $inlineWithA : X(_({a:1}),L),

        $body : X( _({script:1,style:1}), block ),

        $cdata : _({script:1,style:1}),

        //自闭和元素
        $empty : empty,

        //不是自闭合，但不能让range选中里边
        $nonChild : _({iframe:1,textarea:1}),
        //列表元素列表
        $listItem : _({dd:1,dt:1,li:1}),

        //列表根元素列表
        $list: _({ul:1,ol:1,dl:1}),

        //不能认为是空的元素
        $isNotEmpty : _({table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),

        //如果没有子节点就可以删除的元素列表，像span,a
        $removeEmpty : _({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,'var':1}),

        $removeEmptyBlock : _({'p':1,'div':1}),

        //在table元素里的元素列表
        $tableContent : _({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),
        //不转换的标签
        $notTransContent : _({pre:1,script:1,style:1,textarea:1}),
        html: U,
        head: T,
        style: N,
        script: N,
        body: P,
        base: {},
        link: {},
        meta: {},
        title: N,
        col : {},
        tr : _({td:1,th:1}),
        img : {},
        embed: {},
        colgroup : _({thead:1,col:1,tbody:1,tr:1,tfoot:1}),
        noscript : P,
        td : P,
        br : {},
        th : P,
        center : P,
        kbd : L,
        button : X( I, E ),
        basefont : {},
        h5 : L,
        h4 : L,
        samp : L,
        h6 : L,
        ol : Q,
        h1 : L,
        h3 : L,
        option : N,
        h2 : L,
        form : X( A, D, E, I ),
        select : _({optgroup:1,option:1}),
        font : L,
        ins : L,
        menu : Q,
        abbr : L,
        label : L,
        table : _({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),
        code : L,
        tfoot : M,
        cite : L,
        li : P,
        input : {},
        iframe : P,
        strong : L,
        textarea : N,
        noframes : P,
        big : L,
        small : L,
        //trace:
        span :_({'#':1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),
        hr : L,
        dt : L,
        sub : L,
        optgroup : _({option:1}),
        param : {},
        bdo : L,
        'var' : L,
        div : P,
        object : O,
        sup : L,
        dd : P,
        strike : L,
        area : {},
        dir : Q,
        map : X( _({area:1,form:1,p:1}), A, F, E ),
        applet : O,
        dl : _({dt:1,dd:1}),
        del : L,
        isindex : {},
        fieldset : X( _({legend:1}), K ),
        thead : M,
        ul : Q,
        acronym : L,
        b : L,
        a : X( _({a:1}), J ),
        blockquote :X(_({td:1,tr:1,tbody:1,li:1}),P),
        caption : L,
        i : L,
        u : L,
        tbody : M,
        s : L,
        address : X( D, I ),
        tt : L,
        legend : L,
        q : L,
        pre : X( G, C ),
        p : X(_({'a':1}),L),
        em :L,
        dfn : L
    });
})();

/**
 * @file
 * @name UE.dom.domUtils
 * @short DomUtils
 * @import editor.js, core/utils.js,core/browser.js,core/dom/dtd.js
 * @desc UEditor封装的底层dom操作库
 */
function getDomNode(node, start, ltr, startFromChild, fn, guard) {
    var tmpNode = startFromChild && node[start],
        parent;
    !tmpNode && (tmpNode = node[ltr]);
    while (!tmpNode && (parent = (parent || node).parentNode)) {
        if (parent.tagName == 'BODY' || guard && !guard(parent)) {
            return null;
        }
        tmpNode = parent[ltr];
    }
    if (tmpNode && fn && !fn(tmpNode)) {
        return  getDomNode(tmpNode, start, ltr, false, fn);
    }
    return tmpNode;
}
var attrFix = ie && browser.version < 9 ? {
        tabindex:"tabIndex",
        readonly:"readOnly",
        "for":"htmlFor",
        "class":"className",
        maxlength:"maxLength",
        cellspacing:"cellSpacing",
        cellpadding:"cellPadding",
        rowspan:"rowSpan",
        colspan:"colSpan",
        usemap:"useMap",
        frameborder:"frameBorder"
    } : {
        tabindex:"tabIndex",
        readonly:"readOnly"
    },
    styleBlock = utils.listToMap([
        '-webkit-box', '-moz-box', 'block' ,
        'list-item' , 'table' , 'table-row-group' ,
        'table-header-group', 'table-footer-group' ,
        'table-row' , 'table-column-group' , 'table-column' ,
        'table-cell' , 'table-caption'
    ]);
var domUtils = dom.domUtils = {
    //节点常量
    NODE_ELEMENT:1,
    NODE_DOCUMENT:9,
    NODE_TEXT:3,
    NODE_COMMENT:8,
    NODE_DOCUMENT_FRAGMENT:11,

    //位置关系
    POSITION_IDENTICAL:0,
    POSITION_DISCONNECTED:1,
    POSITION_FOLLOWING:2,
    POSITION_PRECEDING:4,
    POSITION_IS_CONTAINED:8,
    POSITION_CONTAINS:16,
    //ie6使用其他的会有一段空白出现
    fillChar:ie && browser.version == '6' ? '\ufeff' : '\u200B',
    //-------------------------Node部分--------------------------------
    keys:{
        /*Backspace*/ 8:1, /*Delete*/ 46:1,
        /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
        37:1, 38:1, 39:1, 40:1,
        13:1 /*enter*/
    },
    /**
     * 获取节点A相对于节点B的位置关系
     * @name getPosition
     * @grammar UE.dom.domUtils.getPosition(nodeA,nodeB)  =>  Number
     * @example
     *  switch (returnValue) {
     *      case 0: //相等，同一节点
     *      case 1: //无关，节点不相连
     *      case 2: //跟随，即节点A头部位于节点B头部的后面
     *      case 4: //前置，即节点A头部位于节点B头部的前面
     *      case 8: //被包含，即节点A被节点B包含
     *      case 10://组合类型，即节点A满足跟随节点B且被节点B包含。实际上，如果被包含，必定跟随，所以returnValue事实上不会存在8的情况。
     *      case 16://包含，即节点A包含节点B
     *      case 20://组合类型，即节点A满足前置节点A且包含节点B。同样，如果包含，必定前置，所以returnValue事实上也不会存在16的情况
     *  }
     */
    getPosition:function (nodeA, nodeB) {
        // 如果两个节点是同一个节点
        if (nodeA === nodeB) {
            // domUtils.POSITION_IDENTICAL
            return 0;
        }
        var node,
            parentsA = [nodeA],
            parentsB = [nodeB];
        node = nodeA;
        while (node = node.parentNode) {
            // 如果nodeB是nodeA的祖先节点
            if (node === nodeB) {
                // domUtils.POSITION_IS_CONTAINED + domUtils.POSITION_FOLLOWING
                return 10;
            }
            parentsA.push(node);
        }
        node = nodeB;
        while (node = node.parentNode) {
            // 如果nodeA是nodeB的祖先节点
            if (node === nodeA) {
                // domUtils.POSITION_CONTAINS + domUtils.POSITION_PRECEDING
                return 20;
            }
            parentsB.push(node);
        }
        parentsA.reverse();
        parentsB.reverse();
        if (parentsA[0] !== parentsB[0]) {
            // domUtils.POSITION_DISCONNECTED
            return 1;
        }
        var i = -1;
        while (i++, parentsA[i] === parentsB[i]) {
        }
        nodeA = parentsA[i];
        nodeB = parentsB[i];
        while (nodeA = nodeA.nextSibling) {
            if (nodeA === nodeB) {
                // domUtils.POSITION_PRECEDING
                return 4
            }
        }
        // domUtils.POSITION_FOLLOWING
        return  2;
    },

    /**
     * 返回节点node在父节点中的索引位置
     * @name getNodeIndex
     * @grammar UE.dom.domUtils.getNodeIndex(node)  => Number  //索引值从0开始
     */
    getNodeIndex:function (node, ignoreTextNode) {
        var preNode = node,
            i = 0;
        while (preNode = preNode.previousSibling) {
            if (ignoreTextNode && preNode.nodeType == 3) {
                if(preNode.nodeType != preNode.nextSibling.nodeType ){
                    i++;
                }
                continue;
            }
            i++;
        }
        return i;
    },

    /**
     * 检测节点node是否在节点doc的树上，实质上是检测是否被doc包含
     * @name inDoc
     * @grammar UE.dom.domUtils.inDoc(node,doc)   =>  true|false
     */
    inDoc:function (node, doc) {
        return domUtils.getPosition(node, doc) == 10;
    },
    /**
     * 查找node节点的祖先节点
     * @name findParent
     * @grammar UE.dom.domUtils.findParent(node)  => Element  // 直接返回node节点的父节点
     * @grammar UE.dom.domUtils.findParent(node,filterFn)  => Element  //filterFn为过滤函数，node作为参数，返回true时才会将node作为符合要求的节点返回
     * @grammar UE.dom.domUtils.findParent(node,filterFn,includeSelf)  => Element  //includeSelf指定是否包含自身
     */
    findParent:function (node, filterFn, includeSelf) {
        if (node && !domUtils.isBody(node)) {
            node = includeSelf ? node : node.parentNode;
            while (node) {
                if (!filterFn || filterFn(node) || domUtils.isBody(node)) {
                    return filterFn && !filterFn(node) && domUtils.isBody(node) ? null : node;
                }
                node = node.parentNode;
            }
        }
        return null;
    },
    /**
     * 通过tagName查找node节点的祖先节点
     * @name findParentByTagName
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames)   =>  Element  //tagNames支持数组，区分大小写
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf)   =>  Element  //includeSelf指定是否包含自身
     * @grammar UE.dom.domUtils.findParentByTagName(node,tagNames,includeSelf,excludeFn)   =>  Element  //excludeFn指定例外过滤条件，返回true时忽略该节点
     */
    findParentByTagName:function (node, tagNames, includeSelf, excludeFn) {
        tagNames = utils.listToMap(utils.isArray(tagNames) ? tagNames : [tagNames]);
        return domUtils.findParent(node, function (node) {
            return tagNames[node.tagName] && !(excludeFn && excludeFn(node));
        }, includeSelf);
    },
    /**
     * 查找节点node的祖先节点集合
     * @name findParents
     * @grammar UE.dom.domUtils.findParents(node)  => Array  //返回一个祖先节点数组集合，不包含自身
     * @grammar UE.dom.domUtils.findParents(node,includeSelf)  => Array  //返回一个祖先节点数组集合，includeSelf指定是否包含自身
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn)  => Array  //返回一个祖先节点数组集合，filterFn指定过滤条件，返回true的node将被选取
     * @grammar UE.dom.domUtils.findParents(node,includeSelf,filterFn,closerFirst)  => Array  //返回一个祖先节点数组集合，closerFirst为true的话，node的直接父亲节点是数组的第0个
     */
    findParents:function (node, includeSelf, filterFn, closerFirst) {
        var parents = includeSelf && ( filterFn && filterFn(node) || !filterFn ) ? [node] : [];
        while (node = domUtils.findParent(node, filterFn)) {
            parents.push(node);
        }
        return closerFirst ? parents : parents.reverse();
    },

    /**
     * 在节点node后面插入新节点newNode
     * @name insertAfter
     * @grammar UE.dom.domUtils.insertAfter(node,newNode)  => newNode
     */
    insertAfter:function (node, newNode) {
        return node.parentNode.insertBefore(newNode, node.nextSibling);
    },

    /**
     * 删除节点node，并根据keepChildren指定是否保留子节点
     * @name remove
     * @grammar UE.dom.domUtils.remove(node)  =>  node
     * @grammar UE.dom.domUtils.remove(node,keepChildren)  =>  node
     */
    remove:function (node, keepChildren) {
        var parent = node.parentNode,
            child;
        if (parent) {
            if (keepChildren && node.hasChildNodes()) {
                while (child = node.firstChild) {
                    parent.insertBefore(child, node);
                }
            }
            parent.removeChild(node);
        }
        return node;
    },

    /**
     * 取得node节点在dom树上的下一个节点,即多叉树遍历
     * @name  getNextDomNode
     * @grammar UE.dom.domUtils.getNextDomNode(node)  => Element
     * @example
     */
    getNextDomNode:function (node, startFromChild, filterFn, guard) {
        return getDomNode(node, 'firstChild', 'nextSibling', startFromChild, filterFn, guard);
    },
    /**
     * 检测节点node是否属于bookmark节点
     * @name isBookmarkNode
     * @grammar UE.dom.domUtils.isBookmarkNode(node)  => true|false
     */
    isBookmarkNode:function (node) {
        return node.nodeType == 1 && node.id && /^_baidu_bookmark_/i.test(node.id);
    },
    /**
     * 获取节点node所在的window对象
     * @name  getWindow
     * @grammar UE.dom.domUtils.getWindow(node)  => window对象
     */
    getWindow:function (node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
    },
    /**
     * 得到nodeA与nodeB公共的祖先节点
     * @name  getCommonAncestor
     * @grammar UE.dom.domUtils.getCommonAncestor(nodeA,nodeB)  => Element
     */
    getCommonAncestor:function (nodeA, nodeB) {
        if (nodeA === nodeB)
            return nodeA;
        var parentsA = [nodeA] , parentsB = [nodeB], parent = nodeA, i = -1;
        while (parent = parent.parentNode) {
            if (parent === nodeB) {
                return parent;
            }
            parentsA.push(parent);
        }
        parent = nodeB;
        while (parent = parent.parentNode) {
            if (parent === nodeA)
                return parent;
            parentsB.push(parent);
        }
        parentsA.reverse();
        parentsB.reverse();
        while (i++, parentsA[i] === parentsB[i]) {
        }
        return i == 0 ? null : parentsA[i - 1];

    },
    /**
     * 清除node节点左右兄弟为空的inline节点
     * @name clearEmptySibling
     * @grammar UE.dom.domUtils.clearEmptySibling(node)
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext)  //ignoreNext指定是否忽略右边空节点
     * @grammar UE.dom.domUtils.clearEmptySibling(node,ignoreNext,ignorePre)  //ignorePre指定是否忽略左边空节点
     * @example
     * <b></b><i></i>xxxx<b>bb</b> --> xxxx<b>bb</b>
     */
    clearEmptySibling:function (node, ignoreNext, ignorePre) {
        function clear(next, dir) {
            var tmpNode;
            while (next && !domUtils.isBookmarkNode(next) && (domUtils.isEmptyInlineElement(next)
                //这里不能把空格算进来会吧空格干掉，出现文字间的空格丢掉了
                || !new RegExp('[^\t\n\r' + domUtils.fillChar + ']').test(next.nodeValue) )) {
                tmpNode = next[dir];
                domUtils.remove(next);
                next = tmpNode;
            }
        }
        !ignoreNext && clear(node.nextSibling, 'nextSibling');
        !ignorePre && clear(node.previousSibling, 'previousSibling');
    },
    /**
     * 将一个文本节点node拆分成两个文本节点，offset指定拆分位置
     * @name split
     * @grammar UE.dom.domUtils.split(node,offset)  =>  TextNode  //返回从切分位置开始的后一个文本节点
     */
    split:function (node, offset) {
        var doc = node.ownerDocument;
        if (browser.ie && offset == node.nodeValue.length) {
            var next = doc.createTextNode('');
            return domUtils.insertAfter(node, next);
        }
        var retval = node.splitText(offset);
        //ie8下splitText不会跟新childNodes,我们手动触发他的更新
        if (browser.ie8) {
            var tmpNode = doc.createTextNode('');
            domUtils.insertAfter(retval, tmpNode);
            domUtils.remove(tmpNode);
        }
        return retval;
    },

    /**
     * 检测节点node是否为空节点（包括空格、换行、占位符等字符）
     * @name  isWhitespace
     * @grammar  UE.dom.domUtils.isWhitespace(node)  => true|false
     */
    isWhitespace:function (node) {
        return !new RegExp('[^ \t\n\r' + domUtils.fillChar + ']').test(node.nodeValue);
    },
    /**
     * 获取元素element相对于viewport的位置坐标
     * @name getXY
     * @grammar UE.dom.domUtils.getXY(element)  => Object //返回坐标对象{x:left,y:top}
     */
    getXY:function (element) {
        var x = 0, y = 0;
        while (element.offsetParent) {
            y += element.offsetTop;
            x += element.offsetLeft;
            element = element.offsetParent;
        }
        return { 'x':x, 'y':y};
    },
    /**
     * 为元素element绑定原生DOM事件，type为事件类型，handler为处理函数
     * @name on
     * @grammar UE.dom.domUtils.on(element,type,handler)   //type支持数组传入
     * @example
     * UE.dom.domUtils.on(document.body,"click",function(e){
     *     //e为事件对象，this为被点击元素对戏那个
     * })
     * @example
     * UE.dom.domUtils.on(document.body,["click","mousedown"],function(evt){
     *     //evt为事件对象，this为被点击元素对象
     * })
     */
    on:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else {
                if (!handler._d) {
                    handler._d = {
                        els : []
                    };
                }
                var key = type + handler.toString(),index = utils.indexOf(handler._d.els,element);
                if (!handler._d[key] || index == -1) {
                    if(index == -1){
                        handler._d.els.push(element);
                    }
                    if(!handler._d[key]){
                        handler._d[key] = function (evt) {
                            return handler.call(evt.srcElement, evt || window.event);
                        };
                    }


                    element.attachEvent('on' + type, handler._d[key]);
                }
            }
        }
        element = null;
    },
    /**
     * 解除原生DOM事件绑定
     * @name un
     * @grammar  UE.dom.donUtils.un(element,type,handler)  //参见<code><a href="#on">on</a></code>
     */
    un:function (element, type, handler) {
        var types = utils.isArray(type) ? type : [type],
            k = types.length;
        if (k) while (k--) {
            type = types[k];
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else {
                var key = type + handler.toString();
                try{
                    element.detachEvent('on' + type, handler._d ? handler._d[key] : handler);
                }catch(e){}
                if (handler._d && handler._d[key]) {
                    var index = utils.indexOf(handler._d.els,element);
                    if(index!=-1){
                        handler._d.els.splice(index,1);
                    }
                    handler._d.els.length == 0 && delete handler._d[key];
                }
            }
        }
    },

    /**
     * 比较节点nodeA与节点nodeB是否具有相同的标签名、属性名以及属性值
     * @name  isSameElement
     * @grammar UE.dom.domUtils.isSameElement(nodeA,nodeB) => true|false
     * @example
     * <span  style="font-size:12px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => true
     * <span  style="font-size:13px">ssss</span> and <span style="font-size:12px">bbbbb</span>   => false
     */
    isSameElement:function (nodeA, nodeB) {
        if (nodeA.tagName != nodeB.tagName) {
            return false;
        }
        var thisAttrs = nodeA.attributes,
            otherAttrs = nodeB.attributes;
        if (!ie && thisAttrs.length != otherAttrs.length) {
            return false;
        }
        var attrA, attrB, al = 0, bl = 0;
        for (var i = 0; attrA = thisAttrs[i++];) {
            if (attrA.nodeName == 'style') {
                if (attrA.specified) {
                    al++;
                }
                if (domUtils.isSameStyle(nodeA, nodeB)) {
                    continue;
                } else {
                    return false;
                }
            }
            if (ie) {
                if (attrA.specified) {
                    al++;
                    attrB = otherAttrs.getNamedItem(attrA.nodeName);
                } else {
                    continue;
                }
            } else {
                attrB = nodeB.attributes[attrA.nodeName];
            }
            if (!attrB.specified || attrA.nodeValue != attrB.nodeValue) {
                return false;
            }
        }
        // 有可能attrB的属性包含了attrA的属性之外还有自己的属性
        if (ie) {
            for (i = 0; attrB = otherAttrs[i++];) {
                if (attrB.specified) {
                    bl++;
                }
            }
            if (al != bl) {
                return false;
            }
        }
        return true;
    },

    /**
     * 判断节点nodeA与节点nodeB的元素属性是否一致
     * @name isSameStyle
     * @grammar UE.dom.domUtils.isSameStyle(nodeA,nodeB) => true|false
     */
    isSameStyle:function (nodeA, nodeB) {
        var styleA = nodeA.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':'),
            styleB = nodeB.style.cssText.replace(/( ?; ?)/g, ';').replace(/( ?: ?)/g, ':');
        if (browser.opera) {
            styleA = nodeA.style;
            styleB = nodeB.style;
            if (styleA.length != styleB.length)
                return false;
            for (var p in styleA) {
                if (/^(\d+|csstext)$/i.test(p)) {
                    continue;
                }
                if (styleA[p] != styleB[p]) {
                    return false;
                }
            }
            return true;
        }
        if (!styleA || !styleB) {
            return styleA == styleB;
        }
        styleA = styleA.split(';');
        styleB = styleB.split(';');
        if (styleA.length != styleB.length) {
            return false;
        }
        for (var i = 0, ci; ci = styleA[i++];) {
            if (utils.indexOf(styleB, ci) == -1) {
                return false;
            }
        }
        return true;
    },
    /**
     * 检查节点node是否为块元素
     * @name isBlockElm
     * @grammar UE.dom.domUtils.isBlockElm(node)  => true|false
     */
    isBlockElm:function (node) {
        return node.nodeType == 1 && (dtd.$block[node.tagName] || styleBlock[domUtils.getComputedStyle(node, 'display')]) && !dtd.$nonChild[node.tagName];
    },
    /**
     * 检测node节点是否为body节点
     * @name isBody
     * @grammar UE.dom.domUtils.isBody(node)   => true|false
     */
    isBody:function (node) {
        return  node && node.nodeType == 1 && node.tagName.toLowerCase() == 'body';
    },
    /**
     * 以node节点为中心，将该节点的指定祖先节点parent拆分成2块
     * @name  breakParent
     * @grammar UE.dom.domUtils.breakParent(node,parent) => node
     * @desc
     * <code type="html"><b>ooo</b>是node节点
     * <p>xxxx<b>ooo</b>xxx</p> ==> <p>xxx</p><b>ooo</b><p>xxx</p>
     * <p>xxxxx<span>xxxx<b>ooo</b>xxxxxx</span></p>   =>   <p>xxxxx<span>xxxx</span></p><b>ooo</b><p><span>xxxxxx</span></p></code>
     */
    breakParent:function (node, parent) {
        var tmpNode,
            parentClone = node,
            clone = node,
            leftNodes,
            rightNodes;
        do {
            parentClone = parentClone.parentNode;
            if (leftNodes) {
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(leftNodes);
                leftNodes = tmpNode;
                tmpNode = parentClone.cloneNode(false);
                tmpNode.appendChild(rightNodes);
                rightNodes = tmpNode;
            } else {
                leftNodes = parentClone.cloneNode(false);
                rightNodes = leftNodes.cloneNode(false);
            }
            while (tmpNode = clone.previousSibling) {
                leftNodes.insertBefore(tmpNode, leftNodes.firstChild);
            }
            while (tmpNode = clone.nextSibling) {
                rightNodes.appendChild(tmpNode);
            }
            clone = parentClone;
        } while (parent !== parentClone);
        tmpNode = parent.parentNode;
        tmpNode.insertBefore(leftNodes, parent);
        tmpNode.insertBefore(rightNodes, parent);
        tmpNode.insertBefore(node, rightNodes);
        domUtils.remove(parent);
        return node;
    },
    /**
     * 检查节点node是否是空inline节点
     * @name  isEmptyInlineElement
     * @grammar   UE.dom.domUtils.isEmptyInlineElement(node)  => 1|0
     * @example
     * <b><i></i></b> => 1
     * <b><i></i><u></u></b> => 1
     * <b></b> => 1
     * <b>xx<i></i></b> => 0
     */
    isEmptyInlineElement:function (node) {
        if (node.nodeType != 1 || !dtd.$removeEmpty[ node.tagName ]) {
            return 0;
        }
        node = node.firstChild;
        while (node) {
            //如果是创建的bookmark就跳过
            if (domUtils.isBookmarkNode(node)) {
                return 0;
            }
            if (node.nodeType == 1 && !domUtils.isEmptyInlineElement(node) ||
                node.nodeType == 3 && !domUtils.isWhitespace(node)
                ) {
                return 0;
            }
            node = node.nextSibling;
        }
        return 1;

    },

    /**
     * 删除node节点下的左右空白文本子节点
     * @name trimWhiteTextNode
     * @grammar UE.dom.domUtils.trimWhiteTextNode(node)
     */
    trimWhiteTextNode:function (node) {
        function remove(dir) {
            var child;
            while ((child = node[dir]) && child.nodeType == 3 && domUtils.isWhitespace(child)) {
                node.removeChild(child);
            }
        }
        remove('firstChild');
        remove('lastChild');
    },

    /**
     * 合并node节点下相同的子节点
     * @name mergeChild
     * @desc
     * UE.dom.domUtils.mergeChild(node,tagName) //tagName要合并的子节点的标签
     * @example
     * <p><span style="font-size:12px;">xx<span style="font-size:12px;">aa</span>xx</span></p>
     * ==> UE.dom.domUtils.mergeChild(node,'span')
     * <p><span style="font-size:12px;">xxaaxx</span></p>
     */
    mergeChild:function (node, tagName, attrs) {
        var list = domUtils.getElementsByTagName(node, node.tagName.toLowerCase());
        for (var i = 0, ci; ci = list[i++];) {
            if (!ci.parentNode || domUtils.isBookmarkNode(ci)) {
                continue;
            }
            //span单独处理
            if (ci.tagName.toLowerCase() == 'span') {
                if (node === ci.parentNode) {
                    domUtils.trimWhiteTextNode(node);
                    if (node.childNodes.length == 1) {
                        node.style.cssText = ci.style.cssText + ";" + node.style.cssText;
                        domUtils.remove(ci, true);
                        continue;
                    }
                }
                ci.style.cssText = node.style.cssText + ';' + ci.style.cssText;
                if (attrs) {
                    var style = attrs.style;
                    if (style) {
                        style = style.split(';');
                        for (var j = 0, s; s = style[j++];) {
                            ci.style[utils.cssStyleToDomStyle(s.split(':')[0])] = s.split(':')[1];
                        }
                    }
                }
                if (domUtils.isSameStyle(ci, node)) {
                    domUtils.remove(ci, true);
                }
                continue;
            }
            if (domUtils.isSameElement(node, ci)) {
                domUtils.remove(ci, true);
            }
        }
    },

    /**
     * 原生方法getElementsByTagName的封装
     * @name getElementsByTagName
     * @grammar UE.dom.domUtils.getElementsByTagName(node,tagName)  => Array  //节点集合数组
     */
    getElementsByTagName:function (node, name,filter) {
        if(filter && utils.isString(filter)){
           var className = filter;
           filter =  function(node){return domUtils.hasClass(node,className)}
        }
        name = utils.trim(name).replace(/[ ]{2,}/g,' ').split(' ');
        var arr = [];
        for(var n = 0,ni;ni=name[n++];){
            var list = node.getElementsByTagName(ni);
            for (var i = 0, ci; ci = list[i++];) {
                if(!filter || filter(ci))
                    arr.push(ci);
            }
        }

        return arr;
    },
    /**
     * 将节点node合并到父节点上
     * @name mergeToParent
     * @grammar UE.dom.domUtils.mergeToParent(node)
     * @example
     * <span style="color:#fff"><span style="font-size:12px">xxx</span></span> ==> <span style="color:#fff;font-size:12px">xxx</span>
     */
    mergeToParent:function (node) {
        var parent = node.parentNode;
        while (parent && dtd.$removeEmpty[parent.tagName]) {
            if (parent.tagName == node.tagName || parent.tagName == 'A') {//针对a标签单独处理
                domUtils.trimWhiteTextNode(parent);
                //span需要特殊处理  不处理这样的情况 <span stlye="color:#fff">xxx<span style="color:#ccc">xxx</span>xxx</span>
                if (parent.tagName == 'SPAN' && !domUtils.isSameStyle(parent, node)
                    || (parent.tagName == 'A' && node.tagName == 'SPAN')) {
                    if (parent.childNodes.length > 1 || parent !== node.parentNode) {
                        node.style.cssText = parent.style.cssText + ";" + node.style.cssText;
                        parent = parent.parentNode;
                        continue;
                    } else {
                        parent.style.cssText += ";" + node.style.cssText;
                        //trace:952 a标签要保持下划线
                        if (parent.tagName == 'A') {
                            parent.style.textDecoration = 'underline';
                        }
                    }
                }
                if (parent.tagName != 'A') {
                    parent === node.parentNode && domUtils.remove(node, true);
                    break;
                }
            }
            parent = parent.parentNode;
        }
    },
    /**
     * 合并节点node的左右兄弟节点
     * @name mergeSibling
     * @grammar UE.dom.domUtils.mergeSibling(node)
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre)    //ignorePre指定是否忽略左兄弟
     * @grammar UE.dom.domUtils.mergeSibling(node,ignorePre,ignoreNext)  //ignoreNext指定是否忽略右兄弟
     * @example
     * <b>xxxx</b><b>ooo</b><b>xxxx</b> ==> <b>xxxxoooxxxx</b>
     */
    mergeSibling:function (node, ignorePre, ignoreNext) {
        function merge(rtl, start, node) {
            var next;
            if ((next = node[rtl]) && !domUtils.isBookmarkNode(next) && next.nodeType == 1 && domUtils.isSameElement(node, next)) {
                while (next.firstChild) {
                    if (start == 'firstChild') {
                        node.insertBefore(next.lastChild, node.firstChild);
                    } else {
                        node.appendChild(next.firstChild);
                    }
                }
                domUtils.remove(next);
            }
        }
        !ignorePre && merge('previousSibling', 'firstChild', node);
        !ignoreNext && merge('nextSibling', 'lastChild', node);
    },

    /**
     * 设置节点node及其子节点不会被选中
     * @name unSelectable
     * @grammar UE.dom.domUtils.unSelectable(node)
     */
    unSelectable:ie || browser.opera ? function (node) {
        //for ie9
        node.onselectstart = function () {
            return false;
        };
        node.onclick = node.onkeyup = node.onkeydown = function () {
            return false;
        };
        node.unselectable = 'on';
        node.setAttribute("unselectable", "on");
        for (var i = 0, ci; ci = node.all[i++];) {
            switch (ci.tagName.toLowerCase()) {
                case 'iframe' :
                case 'textarea' :
                case 'input' :
                case 'select' :
                    break;
                default :
                    ci.unselectable = 'on';
                    node.setAttribute("unselectable", "on");
            }
        }
    } : function (node) {
        node.style.MozUserSelect =
            node.style.webkitUserSelect =
                node.style.KhtmlUserSelect = 'none';
    },
    /**
     * 删除节点node上的属性attrNames，attrNames为属性名称数组
     * @name  removeAttributes
     * @grammar UE.dom.domUtils.removeAttributes(node,attrNames)
     * @example
     * //Before remove
     * <span style="font-size:14px;" id="test" name="followMe">xxxxx</span>
     * //Remove
     * UE.dom.domUtils.removeAttributes(node,["id","name"]);
     * //After remove
     * <span style="font-size:14px;">xxxxx</span>
     */
    removeAttributes:function (node, attrNames) {
        attrNames = utils.isArray(attrNames) ? attrNames : utils.trim(attrNames).replace(/[ ]{2,}/g,' ').split(' ');
        for (var i = 0, ci; ci = attrNames[i++];) {
            ci = attrFix[ci] || ci;
            switch (ci) {
                case 'className':
                    node[ci] = '';
                    break;
                case 'style':
                    node.style.cssText = '';
                    !browser.ie && node.removeAttributeNode(node.getAttributeNode('style'))
            }
            node.removeAttribute(ci);
        }
    },
    /**
     * 在doc下创建一个标签名为tag，属性为attrs的元素
     * @name createElement
     * @grammar UE.dom.domUtils.createElement(doc,tag,attrs)  =>  Node  //返回创建的节点
     */
    createElement:function (doc, tag, attrs) {
        return domUtils.setAttributes(doc.createElement(tag), attrs)
    },
    /**
     * 为节点node添加属性attrs，attrs为属性键值对
     * @name setAttributes
     * @grammar UE.dom.domUtils.setAttributes(node,attrs)  => node
     */
    setAttributes:function (node, attrs) {
        for (var attr in attrs) {
            if(attrs.hasOwnProperty(attr)){
                var value = attrs[attr];
                switch (attr) {
                    case 'class':
                        //ie下要这样赋值，setAttribute不起作用
                        node.className = value;
                        break;
                    case 'style' :
                        node.style.cssText = node.style.cssText + ";" + value;
                        break;
                    case 'innerHTML':
                        node[attr] = value;
                        break;
                    case 'value':
                        node.value = value;
                        break;
                    default:
                        node.setAttribute(attrFix[attr] || attr, value);
                }
            }
        }
        return node;
    },

    /**
     * 获取元素element的计算样式
     * @name getComputedStyle
     * @grammar UE.dom.domUtils.getComputedStyle(element,styleName)  => String //返回对应样式名称的样式值
     * @example
     * getComputedStyle(document.body,"font-size")  =>  "15px"
     * getComputedStyle(form,"color")  =>  "#ffccdd"
     */
    getComputedStyle:function (element, styleName) {
        //一下的属性单独处理
        var pros = 'width height top left';

        if(pros.indexOf(styleName) > -1){
            return element['offset' + styleName.replace(/^\w/,function(s){return s.toUpperCase()})] + 'px';
        }
        //忽略文本节点
        if (element.nodeType == 3) {
            element = element.parentNode;
        }
        //ie下font-size若body下定义了font-size，则从currentStyle里会取到这个font-size. 取不到实际值，故此修改.
        if (browser.ie && browser.version < 9 && styleName == 'font-size' && !element.style.fontSize &&
            !dtd.$empty[element.tagName] && !dtd.$nonChild[element.tagName]) {
            var span = element.ownerDocument.createElement('span');
            span.style.cssText = 'padding:0;border:0;font-family:simsun;';
            span.innerHTML = '.';
            element.appendChild(span);
            var result = span.offsetHeight;
            element.removeChild(span);
            span = null;
            return result + 'px';
        }
        try {
            var value = domUtils.getStyle(element, styleName) ||
                (window.getComputedStyle ? domUtils.getWindow(element).getComputedStyle(element, '').getPropertyValue(styleName) :
                    ( element.currentStyle || element.style )[utils.cssStyleToDomStyle(styleName)]);

        } catch (e) {
            return "";
        }
        return utils.transUnitToPx(utils.fixColor(styleName, value));
    },
    /**
     * 在元素element上删除classNames，支持同时删除多个
     * @name removeClasses
     * @grammar UE.dom.domUtils.removeClasses(element,classNames)
     * @example
     * //执行方法前的dom结构
     * <span class="test1 test2 test3">xxx</span>
     * //执行方法
     * UE.dom.domUtils.removeClasses(element,["test1","test3"])
     * //执行方法后的dom结构
     * <span class="test2">xxx</span>
     */
    removeClasses:function (elm, classNames) {
        classNames = utils.isArray(classNames) ? classNames :
            utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            cls = cls.replace(new RegExp('\\b' + ci + '\\b'),'')
        }
        cls = utils.trim(cls).replace(/[ ]{2,}/g,' ');
        if(cls){
            elm.className = cls;
        }else{
            domUtils.removeAttributes(elm,['class']);
        }
    },
    /**
     * 在元素element上增加一个样式类className，支持以空格分开的多个类名
     * 如果相同的类名将不会添加
     * @name addClass
     * @grammar UE.dom.domUtils.addClass(element,classNames)
     */
    addClass:function (elm, classNames) {
        if(!elm)return;
        classNames = utils.trim(classNames).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = elm.className;ci=classNames[i++];){
            if(!new RegExp('\\b' + ci + '\\b').test(cls)){
                elm.className += ' ' + ci;
            }
        }
    },
    /**
     * 判断元素element是否包含样式类名className,支持以空格分开的多个类名,多个类名顺序不同也可以比较
     * @name hasClass
     * @grammar UE.dom.domUtils.hasClass(element,className)  =>true|false
     */
    hasClass:function (element, className) {
        if(utils.isRegExp(className)){
            return className.test(element.className)
        }
        className = utils.trim(className).replace(/[ ]{2,}/g,' ').split(' ');
        for(var i = 0,ci,cls = element.className;ci=className[i++];){
            if(!new RegExp('\\b' + ci + '\\b','i').test(cls)){
                return false;
            }
        }
        return i - 1 == className.length;
    },

    /**
     * 阻止事件默认行为
     * @param {Event} evt    需要组织的事件对象
     */
    preventDefault:function (evt) {
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    },
    /**
     * 删除元素element的样式
     * @grammar UE.dom.domUtils.removeStyle(element,name)        删除的样式名称
     */
    removeStyle:function (element, name) {
        if(browser.ie ){
            //针对color先单独处理一下
            if(name == 'color'){
                name = '(^|;)' + name;
            }
            element.style.cssText = element.style.cssText.replace(new RegExp(name + '[^:]*:[^;]+;?','ig'),'')
        }else{
            if (element.style.removeProperty) {
                element.style.removeProperty (name);
            }else {
                element.style.removeAttribute (utils.cssStyleToDomStyle(name));
            }
        }


        if (!element.style.cssText) {
            domUtils.removeAttributes(element, ['style']);
        }
    },
    /**
     * 获取元素element的某个样式值
     * @name getStyle
     * @grammar UE.dom.domUtils.getStyle(element,name)  => String
     */
    getStyle:function (element, name) {
        var value = element.style[ utils.cssStyleToDomStyle(name) ];
        return utils.fixColor(name, value);
    },
    /**
     * 为元素element设置样式属性值
     * @name setStyle
     * @grammar UE.dom.domUtils.setStyle(element,name,value)
     */
    setStyle:function (element, name, value) {
        element.style[utils.cssStyleToDomStyle(name)] = value;
        if(!utils.trim(element.style.cssText)){
            this.removeAttributes(element,'style')
        }
    },
    /**
     * 为元素element设置样式属性值
     * @name setStyles
     * @grammar UE.dom.domUtils.setStyle(element,styles)  //styles为样式键值对
     */
    setStyles:function (element, styles) {
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                domUtils.setStyle(element, name, styles[name]);
            }
        }
    },
    /**
     * 删除_moz_dirty属性
     * @function
     */
    removeDirtyAttr:function (node) {
        for (var i = 0, ci, nodes = node.getElementsByTagName('*'); ci = nodes[i++];) {
            ci.removeAttribute('_moz_dirty');
        }
        node.removeAttribute('_moz_dirty');
    },
    /**
     * 返回子节点的数量
     * @function
     * @param {Node}    node    父节点
     * @param  {Function}    fn    过滤子节点的规则，若为空，则得到所有子节点的数量
     * @return {Number}    符合条件子节点的数量
     */
    getChildCount:function (node, fn) {
        var count = 0, first = node.firstChild;
        fn = fn || function () {
            return 1;
        };
        while (first) {
            if (fn(first)) {
                count++;
            }
            first = first.nextSibling;
        }
        return count;
    },

    /**
     * 判断是否为空节点
     * @function
     * @param {Node}    node    节点
     * @return {Boolean}    是否为空节点
     */
    isEmptyNode:function (node) {
        return !node.firstChild || domUtils.getChildCount(node, function (node) {
            return  !domUtils.isBr(node) && !domUtils.isBookmarkNode(node) && !domUtils.isWhitespace(node)
        }) == 0
    },
    /**
     * 清空节点所有的className
     * @function
     * @param {Array}    nodes    节点数组
     */
    clearSelectedArr:function (nodes) {
        var node;
        while (node = nodes.pop()) {
            domUtils.removeAttributes(node, ['class']);
        }
    },
    /**
     * 将显示区域滚动到显示节点的位置
     * @function
     * @param    {Node}   node    节点
     * @param    {window}   win      window对象
     * @param    {Number}    offsetTop    距离上方的偏移量
     */
    scrollToView:function (node, win, offsetTop) {
        var getViewPaneSize = function () {
                var doc = win.document,
                    mode = doc.compatMode == 'CSS1Compat';
                return {
                    width:( mode ? doc.documentElement.clientWidth : doc.body.clientWidth ) || 0,
                    height:( mode ? doc.documentElement.clientHeight : doc.body.clientHeight ) || 0
                };
            },
            getScrollPosition = function (win) {
                if ('pageXOffset' in win) {
                    return {
                        x:win.pageXOffset || 0,
                        y:win.pageYOffset || 0
                    };
                }
                else {
                    var doc = win.document;
                    return {
                        x:doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
                        y:doc.documentElement.scrollTop || doc.body.scrollTop || 0
                    };
                }
            };
        var winHeight = getViewPaneSize().height, offset = winHeight * -1 + offsetTop;
        offset += (node.offsetHeight || 0);
        var elementPosition = domUtils.getXY(node);
        offset += elementPosition.y;
        var currentScroll = getScrollPosition(win).y;
        // offset += 50;
        if (offset > currentScroll || offset < currentScroll - winHeight) {
            win.scrollTo(0, offset + (offset < 0 ? -20 : 20));
        }
    },
    /**
     * 判断节点是否为br
     * @function
     * @param {Node}    node   节点
     */
    isBr:function (node) {
        return node.nodeType == 1 && node.tagName == 'BR';
    },
    isFillChar:function (node,isInStart) {
        return node.nodeType == 3 && !node.nodeValue.replace(new RegExp((isInStart ? '^' : '' ) + domUtils.fillChar), '').length
    },
    isStartInblock:function (range) {
        var tmpRange = range.cloneRange(),
            flag = 0,
            start = tmpRange.startContainer,
            tmp;
        if(start.nodeType == 1 && start.childNodes[tmpRange.startOffset]){
            start = start.childNodes[tmpRange.startOffset];
            var pre = start.previousSibling;
            while(pre && domUtils.isFillChar(pre)){
                start = pre;
                pre = pre.previousSibling;
            }
        }
        if(this.isFillChar(start,true) && tmpRange.startOffset == 1){
            tmpRange.setStartBefore(start);
            start = tmpRange.startContainer;
        }

        while (start && domUtils.isFillChar(start)) {
            tmp = start;
            start = start.previousSibling
        }
        if (tmp) {
            tmpRange.setStartBefore(tmp);
            start = tmpRange.startContainer;
        }
        if (start.nodeType == 1 && domUtils.isEmptyNode(start) && tmpRange.startOffset == 1) {
            tmpRange.setStart(start, 0).collapse(true);
        }
        while (!tmpRange.startOffset) {
            start = tmpRange.startContainer;
            if (domUtils.isBlockElm(start) || domUtils.isBody(start)) {
                flag = 1;
                break;
            }
            var pre = tmpRange.startContainer.previousSibling,
                tmpNode;
            if (!pre) {
                tmpRange.setStartBefore(tmpRange.startContainer);
            } else {
                while (pre && domUtils.isFillChar(pre)) {
                    tmpNode = pre;
                    pre = pre.previousSibling;
                }
                if (tmpNode) {
                    tmpRange.setStartBefore(tmpNode);
                } else {
                    tmpRange.setStartBefore(tmpRange.startContainer);
                }
            }
        }
        return flag && !domUtils.isBody(tmpRange.startContainer) ? 1 : 0;
    },
    isEmptyBlock:function (node,reg) {
        if(node.nodeType != 1)
            return 0;
        reg = reg || new RegExp('[ \t\r\n' + domUtils.fillChar + ']', 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').length > 0) {
            return 0;
        }
        for (var n in dtd.$isNotEmpty) {
            if (node.getElementsByTagName(n).length) {
                return 0;
            }
        }
        return 1;
    },

    setViewportOffset:function (element, offset) {
        var left = parseInt(element.style.left) | 0;
        var top = parseInt(element.style.top) | 0;
        var rect = element.getBoundingClientRect();
        var offsetLeft = offset.left - rect.left;
        var offsetTop = offset.top - rect.top;
        if (offsetLeft) {
            element.style.left = left + offsetLeft + 'px';
        }
        if (offsetTop) {
            element.style.top = top + offsetTop + 'px';
        }
    },
    fillNode:function (doc, node) {
        var tmpNode = browser.ie ? doc.createTextNode(domUtils.fillChar) : doc.createElement('br');
        node.innerHTML = '';
        node.appendChild(tmpNode);
    },
    moveChild:function (src, tag, dir) {
        while (src.firstChild) {
            if (dir && tag.firstChild) {
                tag.insertBefore(src.lastChild, tag.firstChild);
            } else {
                tag.appendChild(src.firstChild);
            }
        }
    },
    //判断是否有额外属性
    hasNoAttributes:function (node) {
        return browser.ie ? /^<\w+\s*?>/.test(node.outerHTML) : node.attributes.length == 0;
    },
    //判断是否是编辑器自定义的参数
    isCustomeNode:function (node) {
        return node.nodeType == 1 && node.getAttribute('_ue_custom_node_');
    },
    isTagNode:function (node, tagName) {
        return node.nodeType == 1 && new RegExp('^' + node.tagName + '$','i').test(tagName)
    },
    /**
     * 对于nodelist用filter进行过滤
     * @name filterNodeList
     * @since 1.2.4+
     * @grammar UE.dom.domUtils.filterNodeList(nodelist,filter,onlyFirst)  => 节点
     * @example
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'div p') //返回第一个是div或者p的节点
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),function(n){return n.getAttribute('src')})
     * //返回第一个带src属性的节点
     * UE.dom.domUtils.filterNodeList(document.getElementsByTagName('*'),'i',true) //返回数组，里边都是i节点
     */
    filterNodeList : function(nodelist,filter,forAll){
        var results = [];
        if(!utils .isFunction(filter)){
            var str = filter;
            filter = function(n){
                return utils.indexOf(utils.isArray(str) ? str:str.split(' '), n.tagName.toLowerCase()) != -1
            };
        }
        utils.each(nodelist,function(n){
            filter(n) && results.push(n)
        });
        return results.length  == 0 ? null : results.length == 1 || !forAll ? results[0] : results
    },

    isInNodeEndBoundary : function (rng,node){
        var start = rng.startContainer;
        if(start.nodeType == 3 && rng.startOffset != start.nodeValue.length){
            return 0;
        }
        if(start.nodeType == 1 && rng.startOffset != start.childNodes.length){
            return 0;
        }
        while(start !== node){
            if(start.nextSibling){
                return 0
            };
            start = start.parentNode;
        }
        return 1;
    },
    isBoundaryNode : function (node,dir){
        var tmp;
        while(!domUtils.isBody(node)){
            tmp = node;
            node = node.parentNode;
            if(tmp !== node[dir]){
                return false;
            }
        }
        return true;
    }
};
var fillCharReg = new RegExp(domUtils.fillChar, 'g');
///import editor.js
///import core/utils.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
/**
 * @file
 * @name UE.dom.Range
 * @anthor zhanyi
 * @short Range
 * @import editor.js,core/utils.js,core/browser.js,core/dom/domUtils.js,core/dom/dtd.js
 * @desc Range范围实现类，本类是UEditor底层核心类，统一w3cRange和ieRange之间的差异，包括接口和属性
 */
(function () {
    var guid = 0,
        fillChar = domUtils.fillChar,
        fillData;

    /**
     * 更新range的collapse状态
     * @param  {Range}   range    range对象
     */
    function updateCollapse(range) {
        range.collapsed =
            range.startContainer && range.endContainer &&
                range.startContainer === range.endContainer &&
                range.startOffset == range.endOffset;
    }

    function selectOneNode(rng){
        return !rng.collapsed && rng.startContainer.nodeType == 1 && rng.startContainer === rng.endContainer && rng.endOffset - rng.startOffset == 1
    }
    function setEndPoint(toStart, node, offset, range) {
        //如果node是自闭合标签要处理
        if (node.nodeType == 1 && (dtd.$empty[node.tagName] || dtd.$nonChild[node.tagName])) {
            offset = domUtils.getNodeIndex(node) + (toStart ? 0 : 1);
            node = node.parentNode;
        }
        if (toStart) {
            range.startContainer = node;
            range.startOffset = offset;
            if (!range.endContainer) {
                range.collapse(true);
            }
        } else {
            range.endContainer = node;
            range.endOffset = offset;
            if (!range.startContainer) {
                range.collapse(false);
            }
        }
        updateCollapse(range);
        return range;
    }

    function execContentsAction(range, action) {
        //调整边界
        //range.includeBookmark();
        var start = range.startContainer,
            end = range.endContainer,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            doc = range.document,
            frag = doc.createDocumentFragment(),
            tmpStart, tmpEnd;
        if (start.nodeType == 1) {
            start = start.childNodes[startOffset] || (tmpStart = start.appendChild(doc.createTextNode('')));
        }
        if (end.nodeType == 1) {
            end = end.childNodes[endOffset] || (tmpEnd = end.appendChild(doc.createTextNode('')));
        }
        if (start === end && start.nodeType == 3) {
            frag.appendChild(doc.createTextNode(start.substringData(startOffset, endOffset - startOffset)));
            //is not clone
            if (action) {
                start.deleteData(startOffset, endOffset - startOffset);
                range.collapse(true);
            }
            return frag;
        }
        var current, currentLevel, clone = frag,
            startParents = domUtils.findParents(start, true), endParents = domUtils.findParents(end, true);
        for (var i = 0; startParents[i] == endParents[i];) {
            i++;
        }
        for (var j = i, si; si = startParents[j]; j++) {
            current = si.nextSibling;
            if (si == start) {
                if (!tmpStart) {
                    if (range.startContainer.nodeType == 3) {
                        clone.appendChild(doc.createTextNode(start.nodeValue.slice(startOffset)));
                        //is not clone
                        if (action) {
                            start.deleteData(startOffset, start.nodeValue.length - startOffset);
                        }
                    } else {
                        clone.appendChild(!action ? start.cloneNode(true) : start);
                    }
                }
            } else {
                currentLevel = si.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            while (current) {
                if (current === end || current === endParents[j]) {
                    break;
                }
                si = current.nextSibling;
                clone.appendChild(!action ? current.cloneNode(true) : current);
                current = si;
            }
            clone = currentLevel;
        }
        clone = frag;
        if (!startParents[i]) {
            clone.appendChild(startParents[i - 1].cloneNode(false));
            clone = clone.firstChild;
        }
        for (var j = i, ei; ei = endParents[j]; j++) {
            current = ei.previousSibling;
            if (ei == end) {
                if (!tmpEnd && range.endContainer.nodeType == 3) {
                    clone.appendChild(doc.createTextNode(end.substringData(0, endOffset)));
                    //is not clone
                    if (action) {
                        end.deleteData(0, endOffset);
                    }
                }
            } else {
                currentLevel = ei.cloneNode(false);
                clone.appendChild(currentLevel);
            }
            //如果两端同级，右边第一次已经被开始做了
            if (j != i || !startParents[i]) {
                while (current) {
                    if (current === start) {
                        break;
                    }
                    ei = current.previousSibling;
                    clone.insertBefore(!action ? current.cloneNode(true) : current, clone.firstChild);
                    current = ei;
                }
            }
            clone = currentLevel;
        }
        if (action) {
            range.setStartBefore(!endParents[i] ? endParents[i - 1] : !startParents[i] ? startParents[i - 1] : endParents[i]).collapse(true);
        }
        tmpStart && domUtils.remove(tmpStart);
        tmpEnd && domUtils.remove(tmpEnd);
        return frag;
    }

    /**
     * @name Range
     * @grammar new UE.dom.Range(document)  => Range 实例
     * @desc 创建一个跟document绑定的空的Range实例
     * - ***startContainer*** 开始边界的容器节点,可以是elementNode或者是textNode
     * - ***startOffset*** 容器节点中的偏移量，如果是elementNode就是childNodes中的第几个，如果是textNode就是nodeValue的第几个字符
     * - ***endContainer*** 结束边界的容器节点,可以是elementNode或者是textNode
     * - ***endOffset*** 容器节点中的偏移量，如果是elementNode就是childNodes中的第几个，如果是textNode就是nodeValue的第几个字符
     * - ***document*** 跟range关联的document对象
     * - ***collapsed*** 是否是闭合状态
     */
    var Range = dom.Range = function (document) {
        var me = this;
        me.startContainer =
            me.startOffset =
                me.endContainer =
                    me.endOffset = null;
        me.document = document;
        me.collapsed = true;
    };

    /**
     * 删除fillData
     * @param doc
     * @param excludeNode
     */
    function removeFillData(doc, excludeNode) {
        try {
            if (fillData && domUtils.inDoc(fillData, doc)) {
                if (!fillData.nodeValue.replace(fillCharReg, '').length) {
                    var tmpNode = fillData.parentNode;
                    domUtils.remove(fillData);
                    while (tmpNode && domUtils.isEmptyInlineElement(tmpNode) &&
                        //safari的contains有bug
                        (browser.safari ? !(domUtils.getPosition(tmpNode,excludeNode) & domUtils.POSITION_CONTAINS) : !tmpNode.contains(excludeNode))
                        ) {
                        fillData = tmpNode.parentNode;
                        domUtils.remove(tmpNode);
                        tmpNode = fillData;
                    }
                } else {
                    fillData.nodeValue = fillData.nodeValue.replace(fillCharReg, '');
                }
            }
        } catch (e) {
        }
    }

    /**
     *
     * @param node
     * @param dir
     */
    function mergeSibling(node, dir) {
        var tmpNode;
        node = node[dir];
        while (node && domUtils.isFillChar(node)) {
            tmpNode = node[dir];
            domUtils.remove(node);
            node = tmpNode;
        }
    }

    Range.prototype = {
        /**
         * @name cloneContents
         * @grammar range.cloneContents()  => DocumentFragment
         * @desc 克隆选中的内容到一个fragment里，如果选区是空的将返回null
         */
        cloneContents:function () {
            return this.collapsed ? null : execContentsAction(this, 0);
        },
        /**
         * @name deleteContents
         * @grammar range.deleteContents()  => Range
         * @desc 删除当前选区范围中的所有内容并返回range实例，这时的range已经变成了闭合状态
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //执行方法后
         * <b>x<i>x<i>|x</b>
         * 注意range改变了
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        deleteContents:function () {
            var txt;
            if (!this.collapsed) {
                execContentsAction(this, 1);
            }
            if (browser.webkit) {
                txt = this.startContainer;
                if (txt.nodeType == 3 && !txt.nodeValue.length) {
                    this.setStartBefore(txt).collapse(true);
                    domUtils.remove(txt);
                }
            }
            return this;
        },
        /**
         * @name extractContents
         * @grammar range.extractContents()  => DocumentFragment
         * @desc 将当前的内容放到一个fragment里并返回这个fragment，这时的range已经变成了闭合状态
         * @example
         * DOM Element :
         * <b>x<i>x[x<i>xx]x</b>
         * //执行方法后
         * 返回的fragment里的 dom结构是
         * <i>x<i>xx
         * dom树上的结构是
         * <b>x<i>x<i>|x</b>
         * 注意range改变了
         * range.startContainer => b
         * range.startOffset  => 2
         * range.endContainer => b
         * range.endOffset => 2
         * range.collapsed => true
         */
        extractContents:function () {
            return this.collapsed ? null : execContentsAction(this, 2);
        },
        /**
         * @name  setStart
         * @grammar range.setStart(node,offset)  => Range
         * @desc    设置range的开始位置位于node节点内，偏移量为offset
         * 如果node是elementNode那offset指的是childNodes中的第几个，如果是textNode那offset指的是nodeValue的第几个字符
         */
        setStart:function (node, offset) {
            return setEndPoint(true, node, offset, this);
        },
        /**
         * 设置range的结束位置位于node节点，偏移量为offset
         * 如果node是elementNode那offset指的是childNodes中的第几个，如果是textNode那offset指的是nodeValue的第几个字符
         * @name  setEnd
         * @grammar range.setEnd(node,offset)  => Range
         */
        setEnd:function (node, offset) {
            return setEndPoint(false, node, offset, this);
        },
        /**
         * 将Range开始位置设置到node节点之后
         * @name  setStartAfter
         * @grammar range.setStartAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 执行setStartAfter(i)后
         * range.startContainer =>b
         * range.startOffset =>2
         */
        setStartAfter:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 将Range开始位置设置到node节点之前
         * @name  setStartBefore
         * @grammar range.setStartBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 执行setStartBefore(i)后
         * range.startContainer =>b
         * range.startOffset =>1
         */
        setStartBefore:function (node) {
            return this.setStart(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 将Range结束位置设置到node节点之后
         * @name  setEndAfter
         * @grammar range.setEndAfter(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * setEndAfter(i)后
         * range.endContainer =>b
         * range.endtOffset =>2
         */
        setEndAfter:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node) + 1);
        },
        /**
         * 将Range结束位置设置到node节点之前
         * @name  setEndBefore
         * @grammar range.setEndBefore(node)  => Range
         * @example
         * <b>xx<i>x|x</i>x</b>
         * 执行setEndBefore(i)后
         * range.endContainer =>b
         * range.endtOffset =>1
         */
        setEndBefore:function (node) {
            return this.setEnd(node.parentNode, domUtils.getNodeIndex(node));
        },
        /**
         * 将Range开始位置设置到node节点内的开始位置
         * @name  setStartAtFirst
         * @grammar range.setStartAtFirst(node)  => Range
         */
        setStartAtFirst:function (node) {
            return this.setStart(node, 0);
        },
        /**
         * 将Range开始位置设置到node节点内的结束位置
         * @name  setStartAtLast
         * @grammar range.setStartAtLast(node)  => Range
         */
        setStartAtLast:function (node) {
            return this.setStart(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },
        /**
         * 将Range结束位置设置到node节点内的开始位置
         * @name  setEndAtFirst
         * @grammar range.setEndAtFirst(node)  => Range
         */
        setEndAtFirst:function (node) {
            return this.setEnd(node, 0);
        },
        /**
         * 将Range结束位置设置到node节点内的结束位置
         * @name  setEndAtLast
         * @grammar range.setEndAtLast(node)  => Range
         */
        setEndAtLast:function (node) {
            return this.setEnd(node, node.nodeType == 3 ? node.nodeValue.length : node.childNodes.length);
        },

        /**
         * 选中完整的指定节点,并返回包含该节点的range
         * @name  selectNode
         * @grammar range.selectNode(node)  => Range
         */
        selectNode:function (node) {
            return this.setStartBefore(node).setEndAfter(node);
        },
        /**
         * 选中node内部的所有节点，并返回对应的range
         * @name selectNodeContents
         * @grammar range.selectNodeContents(node)  => Range
         * @example
         * <b>xx[x<i>xxx</i>]xxx</b>
         * 执行后
         * <b>[xxx<i>xxx</i>xxx]</b>
         * range.startContainer =>b
         * range.startOffset =>0
         * range.endContainer =>b
         * range.endOffset =>3
         */
        selectNodeContents:function (node) {
            return this.setStart(node, 0).setEndAtLast(node);
        },

        /**
         * 克隆一个新的range对象
         * @name  cloneRange
         * @grammar range.cloneRange() => Range
         */
        cloneRange:function () {
            var me = this;
            return new Range(me.document).setStart(me.startContainer, me.startOffset).setEnd(me.endContainer, me.endOffset);

        },

        /**
         * 让选区闭合到尾部，若toStart为真，则闭合到头部
         * @name  collapse
         * @grammar range.collapse() => Range
         * @grammar range.collapse(true) => Range   //闭合选区到头部
         */
        collapse:function (toStart) {
            var me = this;
            if (toStart) {
                me.endContainer = me.startContainer;
                me.endOffset = me.startOffset;
            } else {
                me.startContainer = me.endContainer;
                me.startOffset = me.endOffset;
            }
            me.collapsed = true;
            return me;
        },

        /**
         * 调整range的边界，使其"收缩"到最小的位置
         * @name  shrinkBoundary
         * @grammar range.shrinkBoundary()  => Range  //range开始位置和结束位置都调整，参见<code><a href="#adjustmentboundary">adjustmentBoundary</a></code>
         * @grammar range.shrinkBoundary(true)  => Range  //仅调整开始位置，忽略结束位置
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx]</b><i>xxx</i>
         * [<b><i>xxxx</i>xxxxxxx</b>] ==> <b><i>[xxxx</i>xxxxxxx]</b>
         */
        shrinkBoundary:function (ignoreEnd) {
            var me = this, child,
                collapsed = me.collapsed;
            function check(node){
                return node.nodeType == 1 && !domUtils.isBookmarkNode(node) && !dtd.$empty[node.tagName] && !dtd.$nonChild[node.tagName]
            }
            while (me.startContainer.nodeType == 1 //是element
                && (child = me.startContainer.childNodes[me.startOffset]) //子节点也是element
                && check(child)) {
                me.setStart(child, 0);
            }
            if (collapsed) {
                return me.collapse(true);
            }
            if (!ignoreEnd) {
                while (me.endContainer.nodeType == 1//是element
                    && me.endOffset > 0 //如果是空元素就退出 endOffset=0那么endOffst-1为负值，childNodes[endOffset]报错
                    && (child = me.endContainer.childNodes[me.endOffset - 1]) //子节点也是element
                    && check(child)) {
                    me.setEnd(child, child.childNodes.length);
                }
            }
            return me;
        },
        /**
         * 获取当前range所在位置的公共祖先节点，当前range位置可以位于文本节点内，也可以包含整个元素节点，也可以位于两个节点之间
         * @name  getCommonAncestor
         * @grammar range.getCommonAncestor([includeSelf, ignoreTextNode])  => Element
         * @example
         * <b>xx[xx<i>xx]x</i>xxx</b> ==>getCommonAncestor() ==> b
         * <b>[<img/>]</b>
         * range.startContainer ==> b
         * range.startOffset ==> 0
         * range.endContainer ==> b
         * range.endOffset ==> 1
         * range.getCommonAncestor() ==> b
         * range.getCommonAncestor(true) ==> img
         * <b>xxx|xx</b>
         * range.startContainer ==> textNode
         * range.startOffset ==> 3
         * range.endContainer ==> textNode
         * range.endOffset ==> 3
         * range.getCommonAncestor() ==> textNode
         * range.getCommonAncestor(null,true) ==> b
         */
        getCommonAncestor:function (includeSelf, ignoreTextNode) {
            var me = this,
                start = me.startContainer,
                end = me.endContainer;
            if (start === end) {
                if (includeSelf && selectOneNode(this)) {
                    start = start.childNodes[me.startOffset];
                    if(start.nodeType == 1)
                        return start;
                }
                //只有在上来就相等的情况下才会出现是文本的情况
                return ignoreTextNode && start.nodeType == 3 ? start.parentNode : start;
            }
            return domUtils.getCommonAncestor(start, end);
        },
        /**
         * 调整边界容器，如果是textNode,就调整到elementNode上
         * @name trimBoundary
         * @grammar range.trimBoundary([ignoreEnd])  => Range //true忽略结束边界
         * @example
         * DOM Element :
         * <b>|xxx</b>
         * startContainer = xxx; startOffset = 0
         * //执行后本方法后
         * startContainer = <b>;  startOffset = 0
         * @example
         * Dom Element :
         * <b>xx|x</b>
         * startContainer = xxx;  startOffset = 2
         * //执行本方法后，xxx被实实在在地切分成两个TextNode
         * startContainer = <b>; startOffset = 1
         */
        trimBoundary:function (ignoreEnd) {
            this.txtToElmBoundary();
            var start = this.startContainer,
                offset = this.startOffset,
                collapsed = this.collapsed,
                end = this.endContainer;
            if (start.nodeType == 3) {
                if (offset == 0) {
                    this.setStartBefore(start);
                } else {
                    if (offset >= start.nodeValue.length) {
                        this.setStartAfter(start);
                    } else {
                        var textNode = domUtils.split(start, offset);
                        //跟新结束边界
                        if (start === end) {
                            this.setEnd(textNode, this.endOffset - offset);
                        } else if (start.parentNode === end) {
                            this.endOffset += 1;
                        }
                        this.setStartBefore(textNode);
                    }
                }
                if (collapsed) {
                    return this.collapse(true);
                }
            }
            if (!ignoreEnd) {
                offset = this.endOffset;
                end = this.endContainer;
                if (end.nodeType == 3) {
                    if (offset == 0) {
                        this.setEndBefore(end);
                    } else {
                        offset < end.nodeValue.length && domUtils.split(end, offset);
                        this.setEndAfter(end);
                    }
                }
            }
            return this;
        },
        /**
         * 如果选区在文本的边界上，就扩展选区到文本的父节点上
         * @name  txtToElmBoundary
         * @example
         * Dom Element :
         * <b> |xxx</b>
         * startContainer = xxx;  startOffset = 0
         * //本方法执行后
         * startContainer = <b>; startOffset = 0
         * @example
         * Dom Element :
         * <b> xxx| </b>
         * startContainer = xxx; startOffset = 3
         * //本方法执行后
         * startContainer = <b>; startOffset = 1
         */
        txtToElmBoundary:function (ignoreCollapsed) {
            function adjust(r, c) {
                var container = r[c + 'Container'],
                    offset = r[c + 'Offset'];
                if (container.nodeType == 3) {
                    if (!offset) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'Before'](container);
                    } else if (offset >= container.nodeValue.length) {
                        r['set' + c.replace(/(\w)/, function (a) {
                            return a.toUpperCase();
                        }) + 'After' ](container);
                    }
                }
            }

            if (ignoreCollapsed || !this.collapsed) {
                adjust(this, 'start');
                adjust(this, 'end');
            }
            return this;
        },

        /**
         * 在当前选区的开始位置前插入一个节点或者fragment，range的开始位置会在插入节点的前边
         * @name  insertNode
         * @grammar range.insertNode(node)  => Range //node可以是textNode,elementNode,fragment
         * @example
         * Range :
         * xxx[x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         * 待插入Node :
         * <p>ssss</p>
         * 执行本方法后的Range :
         * xxx[<p>ssss</p>x<p>xxxx</p>xxxx]x<p>sdfsdf</p>
         */
        insertNode:function (node) {
            var first = node, length = 1;
            if (node.nodeType == 11) {
                first = node.firstChild;
                length = node.childNodes.length;
            }
            this.trimBoundary(true);
            var start = this.startContainer,
                offset = this.startOffset;
            var nextNode = start.childNodes[ offset ];
            if (nextNode) {
                start.insertBefore(node, nextNode);
            } else {
                start.appendChild(node);
            }
            if (first.parentNode === this.endContainer) {
                this.endOffset = this.endOffset + length;
            }
            return this.setStartBefore(first);
        },
        /**
         * 设置光标闭合位置,toEnd设置为true时光标将闭合到选区的结尾
         * @name  setCursor
         * @grammar range.setCursor([toEnd])  =>  Range   //toEnd为true时，光标闭合到选区的末尾
         */
        setCursor:function (toEnd, noFillData) {
            return this.collapse(!toEnd).select(noFillData);
        },
        /**
         * 创建当前range的一个书签，记录下当前range的位置，方便当dom树改变时，还能找回原来的选区位置
         * @name createBookmark
         * @grammar range.createBookmark([serialize])  => Object  //{start:开始标记,end:结束标记,id:serialize} serialize为真时，开始结束标记是插入节点的id，否则是插入节点的引用
         */
        createBookmark:function (serialize, same) {
            var endNode,
                startNode = this.document.createElement('span');
            startNode.style.cssText = 'display:none;line-height:0px;';
            startNode.appendChild(this.document.createTextNode('\u200D'));
            startNode.id = '_baidu_bookmark_start_' + (same ? '' : guid++);

            if (!this.collapsed) {
                endNode = startNode.cloneNode(true);
                endNode.id = '_baidu_bookmark_end_' + (same ? '' : guid++);
            }
            this.insertNode(startNode);
            if (endNode) {
                this.collapse().insertNode(endNode).setEndBefore(endNode);
            }
            this.setStartAfter(startNode);
            return {
                start:serialize ? startNode.id : startNode,
                end:endNode ? serialize ? endNode.id : endNode : null,
                id:serialize
            }
        },
        /**
         *  移动边界到书签位置，并删除插入的书签节点
         *  @name  moveToBookmark
         *  @grammar range.moveToBookmark(bookmark)  => Range //让当前的range选到给定bookmark的位置,bookmark对象是由range.createBookmark创建的
         */
        moveToBookmark:function (bookmark) {
            var start = bookmark.id ? this.document.getElementById(bookmark.start) : bookmark.start,
                end = bookmark.end && bookmark.id ? this.document.getElementById(bookmark.end) : bookmark.end;
            this.setStartBefore(start);
            domUtils.remove(start);
            if (end) {
                this.setEndBefore(end);
                domUtils.remove(end);
            } else {
                this.collapse(true);
            }
            return this;
        },
        /**
         * 调整range的边界，使其"放大"到最近的父block节点
         * @name  enlarge
         * @grammar range.enlarge()  =>  Range
         * @example
         * <p><span>xxx</span><b>x[x</b>xxxxx]</p><p>xxx</p> ==> [<p><span>xxx</span><b>xx</b>xxxxx</p>]<p>xxx</p>
         */
        enlarge:function (toBlock, stopFn) {
            var isBody = domUtils.isBody,
                pre, node, tmp = this.document.createTextNode('');
            if (toBlock) {
                node = this.startContainer;
                if (node.nodeType == 1) {
                    if (node.childNodes[this.startOffset]) {
                        pre = node = node.childNodes[this.startOffset]
                    } else {
                        node.appendChild(tmp);
                        pre = node = tmp;
                    }
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.previousSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setStartBefore(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                node = this.endContainer;
                if (node.nodeType == 1) {
                    if (pre = node.childNodes[this.endOffset]) {
                        node.insertBefore(tmp, pre);
                    } else {
                        node.appendChild(tmp);
                    }
                    pre = node = tmp;
                } else {
                    pre = node;
                }
                while (1) {
                    if (domUtils.isBlockElm(node)) {
                        node = pre;
                        while ((pre = node.nextSibling) && !domUtils.isBlockElm(pre)) {
                            node = pre;
                        }
                        this.setEndAfter(node);
                        break;
                    }
                    pre = node;
                    node = node.parentNode;
                }
                if (tmp.parentNode === this.endContainer) {
                    this.endOffset--;
                }
                domUtils.remove(tmp);
            }

            // 扩展边界到最大
            if (!this.collapsed) {
                while (this.startOffset == 0) {
                    if (stopFn && stopFn(this.startContainer)) {
                        break;
                    }
                    if (isBody(this.startContainer)) {
                        break;
                    }
                    this.setStartBefore(this.startContainer);
                }
                while (this.endOffset == (this.endContainer.nodeType == 1 ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length)) {
                    if (stopFn && stopFn(this.endContainer)) {
                        break;
                    }
                    if (isBody(this.endContainer)) {
                        break;
                    }
                    this.setEndAfter(this.endContainer);
                }
            }
            return this;
        },
        /**
         * 调整Range的边界，使其"缩小"到最合适的位置
         * @name adjustmentBoundary
         * @grammar range.adjustmentBoundary() => Range   //参见<code><a href="#shrinkboundary">shrinkBoundary</a></code>
         * @example
         * <b>xx[</b>xxxxx] ==> <b>xx</b>[xxxxx]
         * <b>x[xx</b><i>]xxx</i> ==> <b>x[xx</b>]<i>xxx</i>
         */
        adjustmentBoundary:function () {
            if (!this.collapsed) {
                while (!domUtils.isBody(this.startContainer) &&
                    this.startOffset == this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length &&
                    this.startContainer[this.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {

                    this.setStartAfter(this.startContainer);
                }
                while (!domUtils.isBody(this.endContainer) && !this.endOffset &&
                    this.endContainer[this.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                    ) {
                    this.setEndBefore(this.endContainer);
                }
            }
            return this;
        },
        /**
         * 给range选区中的内容添加给定的标签，主要用于inline标签
         * @name applyInlineStyle
         * @grammar range.applyInlineStyle(tagName)        =>  Range    //tagName为需要添加的样式标签名
         * @grammar range.applyInlineStyle(tagName,attrs)  =>  Range    //attrs为属性json对象
         * @desc
         * <code type="html"><p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xxxx[<strong>xxxx</strong>]x</p>
         * <p>xx[dd<strong>yyyy</strong>]x</p>  ==>  range.applyInlineStyle("strong")  ==>  <p>xx[<strong>ddyyyy</strong>]x</p>
         * <p>xxxx[xxxx]x</p>  ==>  range.applyInlineStyle("strong",{"style":"font-size:12px"})  ==>  <p>xxxx[<strong style="font-size:12px">xxxx</strong>]x</p></code>
         */
        applyInlineStyle:function (tagName, attrs, list) {
            if (this.collapsed)return this;
            this.trimBoundary().enlarge(false,
                function (node) {
                    return node.nodeType == 1 && domUtils.isBlockElm(node)
                }).adjustmentBoundary();
            var bookmark = this.createBookmark(),
                end = bookmark.end,
                filterFn = function (node) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
                },
                current = domUtils.getNextDomNode(bookmark.start, false, filterFn),
                node,
                pre,
                range = this.cloneRange();
            while (current && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
                if (current.nodeType == 3 || dtd[tagName][current.tagName]) {
                    range.setStartBefore(current);
                    node = current;
                    while (node && (node.nodeType == 3 || dtd[tagName][node.tagName]) && node !== end) {
                        pre = node;
                        node = domUtils.getNextDomNode(node, node.nodeType == 1, null, function (parent) {
                            return dtd[tagName][parent.tagName];
                        });
                    }
                    var frag = range.setEndAfter(pre).extractContents(), elm;
                    if (list && list.length > 0) {
                        var level, top;
                        top = level = list[0].cloneNode(false);
                        for (var i = 1, ci; ci = list[i++];) {
                            level.appendChild(ci.cloneNode(false));
                            level = level.firstChild;
                        }
                        elm = level;
                    } else {
                        elm = range.document.createElement(tagName);
                    }
                    if (attrs) {
                        domUtils.setAttributes(elm, attrs);
                    }
                    elm.appendChild(frag);
                    range.insertNode(list ? top : elm);
                    //处理下滑线在a上的情况
                    var aNode;
                    if (tagName == 'span' && attrs.style && /text\-decoration/.test(attrs.style) && (aNode = domUtils.findParentByTagName(elm, 'a', true))) {
                        domUtils.setAttributes(aNode, attrs);
                        domUtils.remove(elm, true);
                        elm = aNode;
                    } else {
                        domUtils.mergeSibling(elm);
                        domUtils.clearEmptySibling(elm);
                    }
                    //去除子节点相同的
                    domUtils.mergeChild(elm, attrs);
                    current = domUtils.getNextDomNode(elm, false, filterFn);
                    domUtils.mergeToParent(elm);
                    if (node === end) {
                        break;
                    }
                } else {
                    current = domUtils.getNextDomNode(current, true, filterFn);
                }
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * 对当前range选中的节点，去掉给定的标签节点，但标签中的内容保留，主要用于处理inline元素
         * @name removeInlineStyle
         * @grammar range.removeInlineStyle(tagNames)  => Range  //tagNames 为需要去掉的样式标签名,支持"b"或者["b","i","u"]
         * @desc
         * <code type="html">xx[x<span>xxx<em>yyy</em>zz]z</span>  => range.removeInlineStyle(["em"])  => xx[x<span>xxxyyyzz]z</span></code>
         */
        removeInlineStyle:function (tagNames) {
            if (this.collapsed)return this;
            tagNames = utils.isArray(tagNames) ? tagNames : [tagNames];
            this.shrinkBoundary().adjustmentBoundary();
            var start = this.startContainer, end = this.endContainer;
            while (1) {
                if (start.nodeType == 1) {
                    if (utils.indexOf(tagNames, start.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (start.tagName.toLowerCase() == 'body') {
                        start = null;
                        break;
                    }
                }
                start = start.parentNode;
            }
            while (1) {
                if (end.nodeType == 1) {
                    if (utils.indexOf(tagNames, end.tagName.toLowerCase()) > -1) {
                        break;
                    }
                    if (end.tagName.toLowerCase() == 'body') {
                        end = null;
                        break;
                    }
                }
                end = end.parentNode;
            }
            var bookmark = this.createBookmark(),
                frag,
                tmpRange;
            if (start) {
                tmpRange = this.cloneRange().setEndBefore(bookmark.start).setStartBefore(start);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(start, true);
                start.parentNode.insertBefore(bookmark.start, start);
            }
            if (end) {
                tmpRange = this.cloneRange().setStartAfter(bookmark.end).setEndAfter(end);
                frag = tmpRange.extractContents();
                tmpRange.insertNode(frag);
                domUtils.clearEmptySibling(end, false, true);
                end.parentNode.insertBefore(bookmark.end, end.nextSibling);
            }
            var current = domUtils.getNextDomNode(bookmark.start, false, function (node) {
                return node.nodeType == 1;
            }), next;
            while (current && current !== bookmark.end) {
                next = domUtils.getNextDomNode(current, true, function (node) {
                    return node.nodeType == 1;
                });
                if (utils.indexOf(tagNames, current.tagName.toLowerCase()) > -1) {
                    domUtils.remove(current, true);
                }
                current = next;
            }
            return this.moveToBookmark(bookmark);
        },
        /**
         * 得到一个自闭合的节点,常用于获取自闭和的节点，例如图片节点
         * @name  getClosedNode
         * @grammar range.getClosedNode()  => node|null
         * @example
         * <b>xxxx[<img />]xxx</b>
         */
        getClosedNode:function () {
            var node;
            if (!this.collapsed) {
                var range = this.cloneRange().adjustmentBoundary().shrinkBoundary();
                if (selectOneNode(range)) {
                    var child = range.startContainer.childNodes[range.startOffset];
                    if (child && child.nodeType == 1 && (dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName])) {
                        node = child;
                    }
                }
            }
            return node;
        },
        /**
         * 根据当前range选中内容节点（在页面上表现为反白显示）
         * @name select
         * @grammar range.select();  => Range
         */
        select:browser.ie ? function (noFillData, textRange) {
            var nativeRange;
            if (!this.collapsed)
                this.shrinkBoundary();
            var node = this.getClosedNode();
            if (node && !textRange) {
                try {
                    nativeRange = this.document.body.createControlRange();
                    nativeRange.addElement(node);
                    nativeRange.select();
                } catch (e) {}
                return this;
            }
            var bookmark = this.createBookmark(),
                start = bookmark.start,
                end;
            nativeRange = this.document.body.createTextRange();
            nativeRange.moveToElementText(start);
            nativeRange.moveStart('character', 1);
            if (!this.collapsed) {
                var nativeRangeEnd = this.document.body.createTextRange();
                end = bookmark.end;
                nativeRangeEnd.moveToElementText(end);
                nativeRange.setEndPoint('EndToEnd', nativeRangeEnd);
            } else {
                if (!noFillData && this.startContainer.nodeType != 3) {
                    //使用<span>|x<span>固定住光标
                    var tmpText = this.document.createTextNode(fillChar),
                        tmp = this.document.createElement('span');
                    tmp.appendChild(this.document.createTextNode(fillChar));
                    start.parentNode.insertBefore(tmp, start);
                    start.parentNode.insertBefore(tmpText, start);
                    //当点b,i,u时，不能清除i上边的b
                    removeFillData(this.document, tmpText);
                    fillData = tmpText;
                    mergeSibling(tmp, 'previousSibling');
                    mergeSibling(start, 'nextSibling');
                    nativeRange.moveStart('character', -1);
                    nativeRange.collapse(true);
                }
            }
            this.moveToBookmark(bookmark);
            tmp && domUtils.remove(tmp);
            //IE在隐藏状态下不支持range操作，catch一下
            try {
                nativeRange.select();
            } catch (e) {
            }
            return this;
        } : function (notInsertFillData) {
            function checkOffset(rng){

                function check(node,offset,dir){
                    if(node.nodeType == 3 && node.nodeValue.length < offset){
                        rng[dir + 'Offset'] = node.nodeValue.length
                    }
                }
                check(rng.startContainer,rng.startOffset,'start');
                check(rng.endContainer,rng.endOffset,'end');
            }
            var win = domUtils.getWindow(this.document),
                sel = win.getSelection(),
                txtNode;
            //FF下关闭自动长高时滚动条在关闭dialog时会跳
            //ff下如果不body.focus将不能定位闭合光标到编辑器内
            browser.gecko ? this.document.body.focus() : win.focus();
            if (sel) {
                sel.removeAllRanges();
                // trace:870 chrome/safari后边是br对于闭合得range不能定位 所以去掉了判断
                // this.startContainer.nodeType != 3 &&! ((child = this.startContainer.childNodes[this.startOffset]) && child.nodeType == 1 && child.tagName == 'BR'
                if (this.collapsed && !notInsertFillData) {
//                    //opear如果没有节点接着，原生的不能够定位,不能在body的第一级插入空白节点
//                    if (notInsertFillData && browser.opera && !domUtils.isBody(this.startContainer) && this.startContainer.nodeType == 1) {
//                        var tmp = this.document.createTextNode('');
//                        this.insertNode(tmp).setStart(tmp, 0).collapse(true);
//                    }
//
                    //处理光标落在文本节点的情况
                    //处理以下的情况
                    //<b>|xxxx</b>
                    //<b>xxxx</b>|xxxx
                    //xxxx<b>|</b>
                    var start = this.startContainer,child = start;
                    if(start.nodeType == 1){
                        child = start.childNodes[this.startOffset];

                    }
                    if( !(start.nodeType == 3 && this.startOffset)  &&
                        (child ?
                            (!child.previousSibling || child.previousSibling.nodeType != 3)
                            :
                            (!start.lastChild || start.lastChild.nodeType != 3)
                        )
                    ){
                        txtNode = this.document.createTextNode(fillChar);
                        //跟着前边走
                        this.insertNode(txtNode);
                        removeFillData(this.document, txtNode);
                        mergeSibling(txtNode, 'previousSibling');
                        mergeSibling(txtNode, 'nextSibling');
                        fillData = txtNode;
                        this.setStart(txtNode, browser.webkit ? 1 : 0).collapse(true);
                    }
                }
                var nativeRange = this.document.createRange();
                if(this.collapsed && browser.opera && this.startContainer.nodeType == 1){
                    var child = this.startContainer.childNodes[this.startOffset];
                    if(!child){
                        //往前靠拢
                        child = this.startContainer.lastChild;
                        if( child && domUtils.isBr(child)){
                            this.setStartBefore(child).collapse(true);
                        }
                    }else{
                        //向后靠拢
                        while(child && domUtils.isBlockElm(child)){
                            if(child.nodeType == 1 && child.childNodes[0]){
                                child = child.childNodes[0]
                            }else{
                                break;
                            }
                        }
                        child && this.setStartBefore(child).collapse(true)
                    }

                }
                //是createAddress最后一位算的不准，现在这里进行微调
                checkOffset(this);
                nativeRange.setStart(this.startContainer, this.startOffset);
                nativeRange.setEnd(this.endContainer, this.endOffset);
                sel.addRange(nativeRange);
            }
            return this;
        },
        /**
         * 滚动条跳到当然range开始的位置
         * @name scrollToView
         * @grammar range.scrollToView([win,offset]) => Range //针对window对象，若不指定，将以编辑区域的窗口为准,offset偏移量
         */
        scrollToView:function (win, offset) {
            win = win ? window : domUtils.getWindow(this.document);
            var me = this,
                span = me.document.createElement('span');
            //trace:717
            span.innerHTML = '&nbsp;';
            me.cloneRange().insertNode(span);
            domUtils.scrollToView(span, win, offset);
            domUtils.remove(span);
            return me;
        },
        inFillChar : function(){
            var start = this.startContainer;
            if(this.collapsed && start.nodeType == 3
                && start.nodeValue.replace(new RegExp('^' + domUtils.fillChar),'').length + 1 == start.nodeValue.length
                ){
                return true;
            }
            return false;
        },
        createAddress : function(ignoreEnd,ignoreTxt){
            var addr = {},me = this;

            function getAddress(isStart){
                var node = isStart ? me.startContainer : me.endContainer;
                var parents = domUtils.findParents(node,true,function(node){return !domUtils.isBody(node)}),
                    addrs = [];
                for(var i = 0,ci;ci = parents[i++];){
                    addrs.push(domUtils.getNodeIndex(ci,ignoreTxt));
                }
                var firstIndex = 0;

                if(ignoreTxt){
                    if(node.nodeType == 3){
                        var tmpNode = node.previousSibling;
                        while(tmpNode && tmpNode.nodeType == 3){
                            firstIndex += tmpNode.nodeValue.replace(fillCharReg,'').length;
                            tmpNode = tmpNode.previousSibling;
                        }
                        firstIndex +=  (isStart ? me.startOffset : me.endOffset)// - (fillCharReg.test(node.nodeValue) ? 1 : 0 )
                    }else{
                        node =  node.childNodes[ isStart ? me.startOffset : me.endOffset];
                        if(node){
                            firstIndex = domUtils.getNodeIndex(node,ignoreTxt);
                        }else{
                            node = isStart ? me.startContainer : me.endContainer;
                            var first = node.firstChild;
                            while(first){
                                if(domUtils.isFillChar(first)){
                                    first = first.nextSibling;
                                    continue;
                                }
                                firstIndex++;
                                if(first.nodeType == 3){
                                    while( first && first.nodeType == 3){
                                        first = first.nextSibling;
                                    }
                                }else{
                                    first = first.nextSibling;
                                }
                            }
                        }
                    }

                }else{
                    firstIndex = isStart ? domUtils.isFillChar(node) ? 0 : me.startOffset  : me.endOffset
                }
                if(firstIndex < 0){
                    firstIndex = 0;
                }
                addrs.push(firstIndex);
                return addrs;
            }
            addr.startAddress = getAddress(true);
            if(!ignoreEnd){
                addr.endAddress = me.collapsed ? [].concat(addr.startAddress) : getAddress();
            }
            return addr;
        },
        moveToAddress : function(addr,ignoreEnd){
            var me = this;
            function getNode(address,isStart){
                var tmpNode = me.document.body,
                    parentNode,offset;
                for(var i= 0,ci,l=address.length;i<l;i++){
                    ci = address[i];
                    parentNode = tmpNode;
                    tmpNode = tmpNode.childNodes[ci];
                    if(!tmpNode){
                        offset = ci;
                        break;
                    }
                }
                if(isStart){
                    if(tmpNode){
                        me.setStartBefore(tmpNode)
                    }else{
                        me.setStart(parentNode,offset)
                    }
                }else{
                    if(tmpNode){
                        me.setEndBefore(tmpNode)
                    }else{
                        me.setEnd(parentNode,offset)
                    }
                }
            }
            getNode(addr.startAddress,true);
            !ignoreEnd && addr.endAddress &&  getNode(addr.endAddress);
            return me;
        },
        equals : function(rng){
            for(var p in this){
                if(this.hasOwnProperty(p)){
                    if(this[p] !== rng[p])
                        return false
                }
            }
            return true;

        },
        traversal:function(doFn,filterFn){
            if (this.collapsed)
                return this;
            var bookmark = this.createBookmark(),
                end = bookmark.end,
                current = domUtils.getNextDomNode(bookmark.start, false, filterFn);
            while (current && current !== end && (domUtils.getPosition(current, end) & domUtils.POSITION_PRECEDING)) {
                var tmpNode = domUtils.getNextDomNode(current,false,filterFn);
                doFn(current);
                current = tmpNode;
            }
            return this.moveToBookmark(bookmark);
        }
    };
})();
///import editor.js
///import core/browser.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/dom/domUtils.js
///import core/dom/Range.js
/**
 * @class baidu.editor.dom.Selection    Selection类
 */
(function () {

    function getBoundaryInformation( range, start ) {
        var getIndex = domUtils.getNodeIndex;
        range = range.duplicate();
        range.collapse( start );
        var parent = range.parentElement();
        //如果节点里没有子节点，直接退出
        if ( !parent.hasChildNodes() ) {
            return  {container:parent, offset:0};
        }
        var siblings = parent.children,
            child,
            testRange = range.duplicate(),
            startIndex = 0, endIndex = siblings.length - 1, index = -1,
            distance;
        while ( startIndex <= endIndex ) {
            index = Math.floor( (startIndex + endIndex) / 2 );
            child = siblings[index];
            testRange.moveToElementText( child );
            var position = testRange.compareEndPoints( 'StartToStart', range );
            if ( position > 0 ) {
                endIndex = index - 1;
            } else if ( position < 0 ) {
                startIndex = index + 1;
            } else {
                //trace:1043
                return  {container:parent, offset:getIndex( child )};
            }
        }
        if ( index == -1 ) {
            testRange.moveToElementText( parent );
            testRange.setEndPoint( 'StartToStart', range );
            distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
            siblings = parent.childNodes;
            if ( !distance ) {
                child = siblings[siblings.length - 1];
                return  {container:child, offset:child.nodeValue.length};
            }

            var i = siblings.length;
            while ( distance > 0 ){
                distance -= siblings[ --i ].nodeValue.length;
            }
            return {container:siblings[i], offset:-distance};
        }
        testRange.collapse( position > 0 );
        testRange.setEndPoint( position > 0 ? 'StartToStart' : 'EndToStart', range );
        distance = testRange.text.replace( /(\r\n|\r)/g, '\n' ).length;
        if ( !distance ) {
            return  dtd.$empty[child.tagName] || dtd.$nonChild[child.tagName] ?
            {container:parent, offset:getIndex( child ) + (position > 0 ? 0 : 1)} :
            {container:child, offset:position > 0 ? 0 : child.childNodes.length}
        }
        while ( distance > 0 ) {
            try {
                var pre = child;
                child = child[position > 0 ? 'previousSibling' : 'nextSibling'];
                distance -= child.nodeValue.length;
            } catch ( e ) {
                return {container:parent, offset:getIndex( pre )};
            }
        }
        return  {container:child, offset:position > 0 ? -distance : child.nodeValue.length + distance}
    }

    /**
     * 将ieRange转换为Range对象
     * @param {Range}   ieRange    ieRange对象
     * @param {Range}   range      Range对象
     * @return  {Range}  range       返回转换后的Range对象
     */
    function transformIERangeToRange( ieRange, range ) {
        if ( ieRange.item ) {
            range.selectNode( ieRange.item( 0 ) );
        } else {
            var bi = getBoundaryInformation( ieRange, true );
            range.setStart( bi.container, bi.offset );
            if ( ieRange.compareEndPoints( 'StartToEnd', ieRange ) != 0 ) {
                bi = getBoundaryInformation( ieRange, false );
                range.setEnd( bi.container, bi.offset );
            }
        }
        return range;
    }

    /**
     * 获得ieRange
     * @param {Selection} sel    Selection对象
     * @return {ieRange}    得到ieRange
     */
    function _getIERange( sel ) {
        var ieRange;
        //ie下有可能报错
        try {
            ieRange = sel.getNative().createRange();
        } catch ( e ) {
            return null;
        }
        var el = ieRange.item ? ieRange.item( 0 ) : ieRange.parentElement();
        if ( ( el.ownerDocument || el ) === sel.document ) {
            return ieRange;
        }
        return null;
    }

    var Selection = dom.Selection = function ( doc ) {
        var me = this, iframe;
        me.document = doc;
        if ( ie ) {
            iframe = domUtils.getWindow( doc ).frameElement;
            domUtils.on( iframe, 'beforedeactivate', function () {
                me._bakIERange = me.getIERange();
            } );
            domUtils.on( iframe, 'activate', function () {
                try {
                    if ( !_getIERange( me ) && me._bakIERange ) {
                        me._bakIERange.select();
                    }
                } catch ( ex ) {
                }
                me._bakIERange = null;
            } );
        }
        iframe = doc = null;
    };

    Selection.prototype = {
        /**
         * 获取原生seleciton对象
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getNative
         * @return {Selection}    获得selection对象
         */
        getNative:function () {
            var doc = this.document;
            try {
                return !doc ? null : ie && browser.ie < 9 ? doc.selection : domUtils.getWindow( doc ).getSelection();
            } catch ( e ) {
                return null;
            }
        },
        /**
         * 获得ieRange
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getIERange
         * @return {ieRange}    返回ie原生的Range
         */
        getIERange:function () {
            var ieRange = _getIERange( this );
            if ( !ieRange ) {
                if ( this._bakIERange ) {
                    return this._bakIERange;
                }
            }
            return ieRange;
        },

        /**
         * 缓存当前选区的range和选区的开始节点
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.cache
         */
        cache:function () {
            this.clear();
            this._cachedRange = this.getRange();
            this._cachedStartElement = this.getStart();
            this._cachedStartElementPath = this.getStartElementPath();
        },

        getStartElementPath:function () {
            if ( this._cachedStartElementPath ) {
                return this._cachedStartElementPath;
            }
            var start = this.getStart();
            if ( start ) {
                return domUtils.findParents( start, true, null, true )
            }
            return [];
        },
        /**
         * 清空缓存
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.clear
         */
        clear:function () {
            this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null;
        },
        /**
         * 编辑器是否得到了选区
         */
        isFocus:function () {
            try {
                return browser.ie && _getIERange( this ) || !browser.ie && this.getNative().rangeCount ? true : false;
            } catch ( e ) {
                return false;
            }

        },
        /**
         * 获取选区对应的Range
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getRange
         * @returns {baidu.editor.dom.Range}    得到Range对象
         */
        getRange:function () {
            var me = this;
            function optimze( range ) {
                var child = me.document.body.firstChild,
                    collapsed = range.collapsed;
                while ( child && child.firstChild ) {
                    range.setStart( child, 0 );
                    child = child.firstChild;
                }
                if ( !range.startContainer ) {
                    range.setStart( me.document.body, 0 )
                }
                if ( collapsed ) {
                    range.collapse( true );
                }
            }

            if ( me._cachedRange != null ) {
                return this._cachedRange;
            }
            var range = new baidu.editor.dom.Range( me.document );
            if ( ie && browser.ie < 9 ) {
                var nativeRange = me.getIERange();
                if ( nativeRange ) {
                    //备份的_bakIERange可能已经实效了，dom树发生了变化比如从源码模式切回来，所以try一下，实效就放到body开始位置
                    try{
                        transformIERangeToRange( nativeRange, range );
                    }catch(e){
                        optimze( range );
                    }

                } else {
                    optimze( range );
                }
            } else {
                var sel = me.getNative();
                if ( sel && sel.rangeCount ) {
                    var firstRange = sel.getRangeAt( 0 );
                    var lastRange = sel.getRangeAt( sel.rangeCount - 1 );
                    range.setStart( firstRange.startContainer, firstRange.startOffset ).setEnd( lastRange.endContainer, lastRange.endOffset );
                    if ( range.collapsed && domUtils.isBody( range.startContainer ) && !range.startOffset ) {
                        optimze( range );
                    }
                } else {
                    //trace:1734 有可能已经不在dom树上了，标识的节点
                    if ( this._bakRange && domUtils.inDoc( this._bakRange.startContainer, this.document ) ){
                        return this._bakRange;
                    }
                    optimze( range );
                }
            }
            return this._bakRange = range;
        },

        /**
         * 获取开始元素，用于状态反射
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getStart
         * @return {Element}     获得开始元素
         */
        getStart:function () {
            if ( this._cachedStartElement ) {
                return this._cachedStartElement;
            }
            var range = ie ? this.getIERange() : this.getRange(),
                tmpRange,
                start, tmp, parent;
            if ( ie ) {
                if ( !range ) {
                    //todo 给第一个值可能会有问题
                    return this.document.body.firstChild;
                }
                //control元素
                if ( range.item ){
                    return range.item( 0 );
                }
                tmpRange = range.duplicate();
                //修正ie下<b>x</b>[xx] 闭合后 <b>x|</b>xx
                tmpRange.text.length > 0 && tmpRange.moveStart( 'character', 1 );
                tmpRange.collapse( 1 );
                start = tmpRange.parentElement();
                parent = tmp = range.parentElement();
                while ( tmp = tmp.parentNode ) {
                    if ( tmp == start ) {
                        start = parent;
                        break;
                    }
                }
            } else {
                range.shrinkBoundary();
                start = range.startContainer;
                if ( start.nodeType == 1 && start.hasChildNodes() ){
                    start = start.childNodes[Math.min( start.childNodes.length - 1, range.startOffset )];
                }
                if ( start.nodeType == 3 ){
                    return start.parentNode;
                }
            }
            return start;
        },
        /**
         * 得到选区中的文本
         * @public
         * @function
         * @name    baidu.editor.dom.Selection.getText
         * @return  {String}    选区中包含的文本
         */
        getText:function () {
            var nativeSel, nativeRange;
            if ( this.isFocus() && (nativeSel = this.getNative()) ) {
                nativeRange = browser.ie ? nativeSel.createRange() : nativeSel.getRangeAt( 0 );
                return browser.ie ? nativeRange.text : nativeRange.toString();
            }
            return '';
        },
        clearRange : function(){
            this.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
        }
    };
})();
/**
 * @file
 * @name UE.Editor
 * @short Editor
 * @import editor.js,core/utils.js,core/EventBase.js,core/browser.js,core/dom/dtd.js,core/dom/domUtils.js,core/dom/Range.js,core/dom/Selection.js,plugins/serialize.js
 * @desc 编辑器主类，包含编辑器提供的大部分公用接口
 */
(function () {
    var uid = 0, _selectionChangeTimer;

    /**
     * @private
     * @ignore
     * @param form  编辑器所在的form元素
     * @param editor  编辑器实例对象
     */
    function setValue(form, editor) {
        var textarea;
        if (editor.textarea) {
            if (utils.isString(editor.textarea)) {
                for (var i = 0, ti, tis = domUtils.getElementsByTagName(form, 'textarea'); ti = tis[i++];) {
                    if (ti.id == 'ueditor_textarea_' + editor.options.textarea) {
                        textarea = ti;
                        break;
                    }
                }
            } else {
                textarea = editor.textarea;
            }
        }
        if (!textarea) {
            form.appendChild(textarea = domUtils.createElement(document, 'textarea', {
                'name': editor.options.textarea,
                'id': 'ueditor_textarea_' + editor.options.textarea,
                'style': "display:none"
            }));
            //不要产生多个textarea
            editor.textarea = textarea;
        }
        textarea.value = editor.hasContents() ?
            (editor.options.allHtmlEnabled ? editor.getAllHtml() : editor.getContent(null, null, true)) :
            ''
    }
    function loadPlugins(me){
        //初始化插件
        for (var pi in UE.plugins) {
            UE.plugins[pi].call(me);
        }
        me.langIsReady = true;

        me.fireEvent("langReady");
    }
    function checkCurLang(I18N){
        for(var lang in I18N){
            return lang
        }
    }
    /**
     * UEditor编辑器类
     * @name Editor
     * @desc 创建一个跟编辑器实例
     * - ***container*** 编辑器容器对象
     * - ***iframe*** 编辑区域所在的iframe对象
     * - ***window*** 编辑区域所在的window
     * - ***document*** 编辑区域所在的document对象
     * - ***body*** 编辑区域所在的body对象
     * - ***selection*** 编辑区域的选区对象
     */
    var Editor = UE.Editor = function (options) {
        var me = this;
        me.uid = uid++;
        EventBase.call(me);
        me.commands = {};
        me.options = utils.extend(utils.clone(options || {}), UEDITOR_CONFIG, true);
        me.shortcutkeys = {};
        me.inputRules = [];
        me.outputRules = [];
        //设置默认的常用属性
        me.setOpt({
            isShow: true,
            initialContent: '',
            initialStyle:'',
            autoClearinitialContent: false,
            iframeCssUrl: me.options.UEDITOR_HOME_URL + 'themes/iframe.css',
            textarea: 'editorValue',
            focus: false,
            focusInEnd: true,
            autoClearEmptyNode: true,
            fullscreen: false,
            readonly: false,
            zIndex: 999,
            imagePopup: true,
            enterTag: 'p',
            customDomain: false,
            lang: 'zh-cn',
            langPath: me.options.UEDITOR_HOME_URL + 'lang/',
            theme: 'default',
            themePath: me.options.UEDITOR_HOME_URL + 'themes/',
            allHtmlEnabled: false,
            scaleEnabled: false,
            tableNativeEditInFF: false,
            autoSyncData : true
        });

        if(!utils.isEmptyObject(UE.I18N)){
            //修改默认的语言类型
            me.options.lang = checkCurLang(UE.I18N);
            loadPlugins(me)
        }else{
            utils.loadFile(document, {
                src: me.options.langPath + me.options.lang + "/" + me.options.lang + ".js",
                tag: "script",
                type: "text/javascript",
                defer: "defer"
            }, function () {
                loadPlugins(me)
            });
        }

        UE.instants['ueditorInstant' + me.uid] = me;
    };
    Editor.prototype = {
        /**
         * 当编辑器ready后执行传入的fn,如果编辑器已经完成ready，就马上执行fn，fn的中的this是编辑器实例。
         * 大部分的实例接口都需要放在该方法内部执行，否则在IE下可能会报错。
         * @name ready
         * @grammar editor.ready(fn) fn是当编辑器渲染好后执行的function
         * @example
         * var editor = new UE.ui.Editor();
         * editor.render("myEditor");
         * editor.ready(function(){
         *     editor.setContent("欢迎使用UEditor！");
         * })
         */
        ready: function (fn) {
            var me = this;
            if (fn) {
                me.isReady ? fn.apply(me) : me.addListener('ready', fn);
            }
        },
        /**
         * 为编辑器设置默认参数值。若用户配置为空，则以默认配置为准
         * @grammar editor.setOpt(key,value);      //传入一个键、值对
         * @grammar editor.setOpt({ key:value});   //传入一个json对象
         */
        setOpt: function (key, val) {
            var obj = {};
            if (utils.isString(key)) {
                obj[key] = val
            } else {
                obj = key;
            }
            utils.extend(this.options, obj, true);
        },
        /**
         * 销毁编辑器实例对象
         * @name destroy
         * @grammar editor.destroy();
         */
        destroy: function () {

            var me = this;
            me.fireEvent('destroy');
            var container = me.container.parentNode;
            var textarea = me.textarea;
            if (!textarea) {
                textarea = document.createElement('textarea');
                container.parentNode.insertBefore(textarea, container);
            } else {
                textarea.style.display = ''
            }

            textarea.style.width = me.iframe.offsetWidth + 'px';
            textarea.style.height = me.iframe.offsetHeight + 'px';
            textarea.value = me.getContent();
            textarea.id = me.key;
            container.innerHTML = '';
            domUtils.remove(container);
            var key = me.key;
            //trace:2004
            for (var p in me) {
                if (me.hasOwnProperty(p)) {
                    delete this[p];
                }
            }
            UE.delEditor(key);
        },
        /**
         * 渲染编辑器的DOM到指定容器，必须且只能调用一次
         * @name render
         * @grammar editor.render(containerId);    //可以指定一个容器ID
         * @grammar editor.render(containerDom);   //也可以直接指定容器对象
         */
        render: function (container) {
            var me = this,
                options = me.options,
                getStyleValue=function(attr){
                   return parseInt(domUtils.getComputedStyle(container,attr));
                };
            if (utils.isString(container)) {
                container = document.getElementById(container);
            }
            if (container) {
                if(options.initialFrameWidth){
                    options.minFrameWidth = options.initialFrameWidth
                }else{
                    options.minFrameWidth = options.initialFrameWidth = container.offsetWidth;
                }
                if(options.initialFrameHeight){
                    options.minFrameHeight = options.initialFrameHeight
                }else{
                    options.initialFrameHeight = options.minFrameHeight = container.offsetHeight;
                }

                container.style.width = /%$/.test(options.initialFrameWidth) ?  '100%' : options.initialFrameWidth-
                   getStyleValue("padding-left")- getStyleValue("padding-right") +'px';
                container.style.height = /%$/.test(options.initialFrameHeight) ?  '100%' : options.initialFrameHeight -
                    getStyleValue("padding-top")- getStyleValue("padding-bottom") +'px';

                container.style.zIndex = options.zIndex;

                var html = ( ie && browser.version < 9  ? '' : '<!DOCTYPE html>') +
                        '<html xmlns=\'http://www.w3.org/1999/xhtml\' class=\'view\' ><head>' +
                        '<style type=\'text/css\'>' +
                        //设置四周的留边
                        '.view{padding:0;word-wrap:break-word;cursor:text;height:90%;}\n' +
                        //设置默认字体和字号
                        //font-family不能呢随便改，在safari下fillchar会有解析问题
                        'body{margin:8px;font-family:sans-serif;font-size:16px;}' +
                        //设置段落间距
                        'p{margin:5px 0;}</style>' +
                        ( options.iframeCssUrl ? '<link rel=\'stylesheet\' type=\'text/css\' href=\'' + utils.unhtml(options.iframeCssUrl) + '\'/>' : '' ) +
                        (options.initialStyle ? '<style>' + options.initialStyle + '</style>' : '') +
                        '</head><body class=\'view\' ></body>' +
                        '<script type=\'text/javascript\' ' + (ie ? 'defer=\'defer\'' : '' ) +' id=\'_initialScript\'>' +
                        'setTimeout(function(){window.parent.UE.instants[\'ueditorInstant' + me.uid + '\']._setup(document);},0);' +
                        'var _tmpScript = document.getElementById(\'_initialScript\');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>';
                container.appendChild(domUtils.createElement(document, 'iframe', {
                    id: 'ueditor_' + me.uid,
                    width: "100%",
                    height: "100%",
                    frameborder: "0",
                    src: 'javascript:void(function(){document.open();' + (options.customDomain && document.domain != location.hostname ?  'document.domain="' + document.domain + '";' : '') +
                        'document.write("' + html + '");document.close();}())'
                }));
                container.style.overflow = 'hidden';
                //解决如果是给定的百分比，会导致高度算不对的问题
                setTimeout(function(){
                    if( /%$/.test(options.initialFrameWidth)){
                        options.minFrameWidth = options.initialFrameWidth = container.offsetWidth;
                        container.style.width = options.initialFrameWidth + 'px';
                    }
                    if(/%$/.test(options.initialFrameHeight)){
                        options.minFrameHeight = options.initialFrameHeight = container.offsetHeight;
                        container.style.height = options.initialFrameHeight + 'px';
                    }
                })
            }
        },
        /**
         * 编辑器初始化
         * @private
         * @ignore
         * @param {Element} doc 编辑器Iframe中的文档对象
         */
        _setup: function (doc) {

            var me = this,
                options = me.options;
            if (ie) {
                doc.body.disabled = true;
                doc.body.contentEditable = true;
                doc.body.disabled = false;
            } else {
                doc.body.contentEditable = true;
            }
            doc.body.spellcheck = false;
            me.document = doc;
            me.window = doc.defaultView || doc.parentWindow;
            me.iframe = me.window.frameElement;
            me.body = doc.body;

            me.selection = new dom.Selection(doc);
            //gecko初始化就能得到range,无法判断isFocus了
            var geckoSel;
            if (browser.gecko && (geckoSel = this.selection.getNative())) {
                geckoSel.removeAllRanges();
            }
            this._initEvents();
            //为form提交提供一个隐藏的textarea
            for (var form = this.iframe.parentNode; !domUtils.isBody(form); form = form.parentNode) {
                if (form.tagName == 'FORM') {
                    me.form = form;
                    if(me.options.autoSyncData){
                        domUtils.on(me.window,'blur',function(){
                            setValue(form,me);
                        });
                    }else{
                        domUtils.on(form, 'submit', function () {
                            setValue(this, me);
                        });
                    }
                    break;
                }
            }
            if (options.initialContent) {
                if (options.autoClearinitialContent) {
                    var oldExecCommand = me.execCommand;
                    me.execCommand = function () {
                        me.fireEvent('firstBeforeExecCommand');
                        return oldExecCommand.apply(me, arguments);
                    };
                    this._setDefaultContent(options.initialContent);
                } else
                    this.setContent(options.initialContent, false, true);
            }

            //编辑器不能为空内容

            if (domUtils.isEmptyNode(me.body)) {
                me.body.innerHTML = '<p>' + (browser.ie ? '' : '<br/>') + '</p>';
            }
            //如果要求focus, 就把光标定位到内容开始
            if (options.focus) {
                setTimeout(function () {
                    me.focus(me.options.focusInEnd);
                    //如果自动清除开着，就不需要做selectionchange;
                    !me.options.autoClearinitialContent && me._selectionChange();
                }, 0);
            }
            if (!me.container) {
                me.container = this.iframe.parentNode;
            }
            if (options.fullscreen && me.ui) {
                me.ui.setFullScreen(true);
            }

            try {
                me.document.execCommand('2D-position', false, false);
            } catch (e) {
            }
            try {
                me.document.execCommand('enableInlineTableEditing', false, false);
            } catch (e) {
            }
            try {
                me.document.execCommand('enableObjectResizing', false, false);
            } catch (e) {
//                domUtils.on(me.body,browser.ie ? 'resizestart' : 'resize', function( evt ) {
//                    domUtils.preventDefault(evt)
//                });
            }
            me._bindshortcutKeys();
            me.isReady = 1;
            me.fireEvent('ready');
            options.onready && options.onready.call(me);
            if (!browser.ie) {
                domUtils.on(me.window, ['blur', 'focus'], function (e) {
                    //chrome下会出现alt+tab切换时，导致选区位置不对
                    if (e.type == 'blur') {
                        me._bakRange = me.selection.getRange();
                        try {
                            me._bakNativeRange = me.selection.getNative().getRangeAt(0);
                            me.selection.getNative().removeAllRanges();
                        } catch (e) {
                            me._bakNativeRange = null;
                        }

                    } else {
                        try {
                            me._bakRange && me._bakRange.select();
                        } catch (e) {
                        }
                    }
                });
            }
            //trace:1518 ff3.6body不够寛，会导致点击空白处无法获得焦点
            if (browser.gecko && browser.version <= 10902) {
                //修复ff3.6初始化进来，不能点击获得焦点
                me.body.contentEditable = false;
                setTimeout(function () {
                    me.body.contentEditable = true;
                }, 100);
                setInterval(function () {
                    me.body.style.height = me.iframe.offsetHeight - 20 + 'px'
                }, 100)
            }
            !options.isShow && me.setHide();
            options.readonly && me.setDisabled();
        },
        /**
         * 同步编辑器的数据，为提交数据做准备，主要用于你是手动提交的情况
         * @name sync
         * @grammar editor.sync(); //从编辑器的容器向上查找，如果找到就同步数据
         * @grammar editor.sync(formID); //formID制定一个要同步数据的form的id,编辑器的数据会同步到你指定form下
         * @desc
         * 后台取得数据得键值使用你容器上得''name''属性，如果没有就使用参数传入的''textarea''
         * @example
         * editor.sync();
         * form.sumbit(); //form变量已经指向了form元素
         *
         */
        sync: function (formId) {
            var me = this,
                form = formId ? document.getElementById(formId) :
                    domUtils.findParent(me.iframe.parentNode, function (node) {
                        return node.tagName == 'FORM'
                    }, true);
            form && setValue(form, me);
        },
        /**
         * 设置编辑器高度
         * @name setHeight
         * @grammar editor.setHeight(number);  //纯数值，不带单位
         */
        setHeight: function (height,notSetHeight) {
            if (height !== parseInt(this.iframe.parentNode.style.height)) {
                this.iframe.parentNode.style.height = height + 'px';
            }
            !notSetHeight && (this.options.minFrameHeight = this.options.initialFrameHeight = height);

            this.body.style.height = height + 'px';
        },

        addshortcutkey: function (cmd, keys) {
            var obj = {};
            if (keys) {
                obj[cmd] = keys
            } else {
                obj = cmd;
            }
            utils.extend(this.shortcutkeys, obj)
        },
        _bindshortcutKeys: function () {
            var me = this, shortcutkeys = this.shortcutkeys;
            me.addListener('keydown', function (type, e) {
                var keyCode = e.keyCode || e.which;
                for (var i in shortcutkeys) {
                    var tmp = shortcutkeys[i].split(',');
                    for (var t = 0, ti; ti = tmp[t++];) {
                        ti = ti.split(':');
                        var key = ti[0], param = ti[1];
                        if (/^(ctrl)(\+shift)?\+(\d+)$/.test(key.toLowerCase()) || /^(\d+)$/.test(key)) {
                            if (( (RegExp.$1 == 'ctrl' ? (e.ctrlKey || e.metaKey) : 0)
                                && (RegExp.$2 != "" ? e[RegExp.$2.slice(1) + "Key"] : 1)
                                && keyCode == RegExp.$3
                                ) ||
                                keyCode == RegExp.$1
                                ) {
                                if (me.queryCommandState(i,param) != -1)
                                    me.execCommand(i, param);
                                domUtils.preventDefault(e);
                            }
                        }
                    }

                }
            });
        },
        /**
         * 获取编辑器内容
         * @name getContent
         * @grammar editor.getContent()  => String //若编辑器中只包含字符"&lt;p&gt;&lt;br /&gt;&lt;/p/&gt;"会返回空。
         * @grammar editor.getContent(fn)  => String
         * @example
         * getContent默认是会现调用hasContents来判断编辑器是否为空，如果是，就直接返回空字符串
         * 你也可以传入一个fn来接替hasContents的工作，定制判断的规则
         * editor.getContent(function(){
         *     return false //编辑器没有内容 ，getContent直接返回空
         * })
         */
        getContent: function (cmd, fn,notSetCursor,ignoreBlank,formatter) {
            var me = this;
            if (cmd && utils.isFunction(cmd)) {
                fn = cmd;
                cmd = '';
            }
            if (fn ? !fn() : !this.hasContents()) {
                return '';
            }
            me.fireEvent('beforegetcontent');
            var root = UE.htmlparser(me.body.innerHTML,ignoreBlank);
            me.filterOutputRule(root);
            me.fireEvent('aftergetcontent', cmd);
            return  root.toHtml(formatter);
        },
        /**
         * 取得完整的html代码，可以直接显示成完整的html文档
         * @name getAllHtml
         * @grammar editor.getAllHtml()  => String
         */
        getAllHtml: function () {
            var me = this,
                headHtml = [],
                html = '';
            me.fireEvent('getAllHtml', headHtml);
            if (browser.ie && browser.version > 8) {
                var headHtmlForIE9 = '';
                utils.each(me.document.styleSheets, function (si) {
                    headHtmlForIE9 += ( si.href ? '<link rel="stylesheet" type="text/css" href="' + si.href + '" />' : '<style>' + si.cssText + '</style>');
                });
                utils.each(me.document.getElementsByTagName('script'), function (si) {
                    headHtmlForIE9 += si.outerHTML;
                });

            }
            return '<html><head>' + (me.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + me.options.charset + '"/>' : '')
                + (headHtmlForIE9 || me.document.getElementsByTagName('head')[0].innerHTML) + headHtml.join('\n') + '</head>'
                + '<body ' + (ie && browser.version < 9 ? 'class="view"' : '') + '>' + me.getContent(null, null, true) + '</body></html>';
        },
        /**
         * 得到编辑器的纯文本内容，但会保留段落格式
         * @name getPlainTxt
         * @grammar editor.getPlainTxt()  => String
         */
        getPlainTxt: function () {
            var reg = new RegExp(domUtils.fillChar, 'g'),
                html = this.body.innerHTML.replace(/[\n\r]/g, '');//ie要先去了\n在处理
            html = html.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, '\n')
                .replace(/<br\/?>/gi, '\n')
                .replace(/<[^>/]+>/g, '')
                .replace(/(\n)?<\/([^>]+)>/g, function (a, b, c) {
                    return dtd.$block[c] ? '\n' : b ? b : '';
                });
            //取出来的空格会有c2a0会变成乱码，处理这种情况\u00a0
            return html.replace(reg, '').replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
        },

        /**
         * 获取编辑器中的纯文本内容,没有段落格式
         * @name getContentTxt
         * @grammar editor.getContentTxt()  => String
         */
        getContentTxt: function () {
            var reg = new RegExp(domUtils.fillChar, 'g');
            //取出来的空格会有c2a0会变成乱码，处理这种情况\u00a0
            return this.body[browser.ie ? 'innerText' : 'textContent'].replace(reg, '').replace(/\u00a0/g, ' ');
        },

        /**
         * 将html设置到编辑器中, 如果是用于初始化时给编辑器赋初值，则必须放在ready方法内部执行
         * @name setContent
         * @grammar editor.setContent(html)
         * @example
         * var editor = new UE.ui.Editor()
         * editor.ready(function(){
         *     //需要ready后执行，否则可能报错
         *     editor.setContent("欢迎使用UEditor！");
         * })
         */
        setContent: function (html, isAppendTo, notFireSelectionchange) {
            var me = this;

            me.fireEvent('beforesetcontent', html);
            var root = UE.htmlparser(html);
            me.filterInputRule(root);
            html = root.toHtml();


            me.body.innerHTML = (isAppendTo ? me.body.innerHTML : '') + html;


            function isCdataDiv(node){
                return  node.tagName == 'DIV' && node.getAttribute('cdata_tag');
            }
            //给文本或者inline节点套p标签
            if (me.options.enterTag == 'p') {

                var child = this.body.firstChild, tmpNode;
                if (!child || child.nodeType == 1 &&
                    (dtd.$cdata[child.tagName] || isCdataDiv(child) ||
                        domUtils.isCustomeNode(child)
                        )
                    && child === this.body.lastChild) {
                    this.body.innerHTML = '<p>' + (browser.ie ? '&nbsp;' : '<br/>') + '</p>' + this.body.innerHTML;

                } else {
                    var p = me.document.createElement('p');
                    while (child) {
                        while (child && (child.nodeType == 3 || child.nodeType == 1 && dtd.p[child.tagName] && !dtd.$cdata[child.tagName])) {
                            tmpNode = child.nextSibling;
                            p.appendChild(child);
                            child = tmpNode;
                        }
                        if (p.firstChild) {
                            if (!child) {
                                me.body.appendChild(p);
                                break;
                            } else {
                                child.parentNode.insertBefore(p, child);
                                p = me.document.createElement('p');
                            }
                        }
                        child = child.nextSibling;
                    }
                }
            }
            me.fireEvent('aftersetcontent');
            me.fireEvent('contentchange');

            !notFireSelectionchange && me._selectionChange();
            //清除保存的选区
            me._bakRange = me._bakIERange = me._bakNativeRange = null;
            //trace:1742 setContent后gecko能得到焦点问题
            var geckoSel;
            if (browser.gecko && (geckoSel = this.selection.getNative())) {
                geckoSel.removeAllRanges();
            }
            if(me.options.autoSyncData){
                me.form && setValue(me.form,me);
            }
        },

        /**
         * 让编辑器获得焦点，toEnd确定focus位置
         * @name focus
         * @grammar editor.focus([toEnd])   //默认focus到编辑器头部，toEnd为true时focus到内容尾部
         */
        focus: function (toEnd) {
            try {
                var me = this,
                    rng = me.selection.getRange();
                if (toEnd) {
                    rng.setStartAtLast(me.body.lastChild).setCursor(false, true);
                } else {
                    rng.select(true);
                }
                this.fireEvent('focus');
            } catch (e) {
            }
        },

        /**
         * 初始化UE事件及部分事件代理
         * @private
         * @ignore
         */
        _initEvents: function () {
            var me = this,
                doc = me.document,
                win = me.window;
            me._proxyDomEvent = utils.bind(me._proxyDomEvent, me);
            domUtils.on(doc, ['click', 'contextmenu', 'mousedown', 'keydown', 'keyup', 'keypress', 'mouseup', 'mouseover', 'mouseout', 'selectstart'], me._proxyDomEvent);
            domUtils.on(win, ['focus', 'blur'], me._proxyDomEvent);
            domUtils.on(doc, ['mouseup', 'keydown'], function (evt) {
                //特殊键不触发selectionchange
                if (evt.type == 'keydown' && (evt.ctrlKey || evt.metaKey || evt.shiftKey || evt.altKey)) {
                    return;
                }
                if (evt.button == 2)return;
                me._selectionChange(250, evt);
            });
//            //处理拖拽
//            //ie ff不能从外边拖入
//            //chrome只针对从外边拖入的内容过滤
//            var innerDrag = 0, source = browser.ie ? me.body : me.document, dragoverHandler;
//            domUtils.on(source, 'dragstart', function () {
//                innerDrag = 1;
//            });
//            domUtils.on(source, browser.webkit ? 'dragover' : 'drop', function () {
//                return browser.webkit ?
//                    function () {
//                        clearTimeout(dragoverHandler);
//                        dragoverHandler = setTimeout(function () {
//                            if (!innerDrag) {
//                                var sel = me.selection,
//                                    range = sel.getRange();
//                                if (range) {
//                                    var common = range.getCommonAncestor();
//                                    if (common && me.serialize) {
//                                        var f = me.serialize,
//                                            node =
//                                                f.filter(
//                                                    f.transformInput(
//                                                        f.parseHTML(
//                                                            f.word(common.innerHTML)
//                                                        )
//                                                    )
//                                                );
//                                        common.innerHTML = f.toHTML(node);
//                                    }
//                                }
//                            }
//                            innerDrag = 0;
//                        }, 200);
//                    } :
//                    function (e) {
//                        if (!innerDrag) {
//                            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
//                        }
//                        innerDrag = 0;
//                    }
//            }());
        },
        /**
         * 触发事件代理
         * @private
         * @ignore
         */
        _proxyDomEvent: function (evt) {
            return this.fireEvent(evt.type.replace(/^on/, ''), evt);
        },
        /**
         * 变化选区
         * @private
         * @ignore
         */
        _selectionChange: function (delay, evt) {
            var me = this;
            //有光标才做selectionchange 为了解决未focus时点击source不能触发更改工具栏状态的问题（source命令notNeedUndo=1）
//            if ( !me.selection.isFocus() ){
//                return;
//            }


            var hackForMouseUp = false;
            var mouseX, mouseY;
            if (browser.ie && browser.version < 9 && evt && evt.type == 'mouseup') {
                var range = this.selection.getRange();
                if (!range.collapsed) {
                    hackForMouseUp = true;
                    mouseX = evt.clientX;
                    mouseY = evt.clientY;
                }
            }
            clearTimeout(_selectionChangeTimer);
            _selectionChangeTimer = setTimeout(function () {
                if (!me.selection.getNative()) {
                    return;
                }
                //修复一个IE下的bug: 鼠标点击一段已选择的文本中间时，可能在mouseup后的一段时间内取到的range是在selection的type为None下的错误值.
                //IE下如果用户是拖拽一段已选择文本，则不会触发mouseup事件，所以这里的特殊处理不会对其有影响
                var ieRange;
                if (hackForMouseUp && me.selection.getNative().type == 'None') {
                    ieRange = me.document.body.createTextRange();
                    try {
                        ieRange.moveToPoint(mouseX, mouseY);
                    } catch (ex) {
                        ieRange = null;
                    }
                }
                var bakGetIERange;
                if (ieRange) {
                    bakGetIERange = me.selection.getIERange;
                    me.selection.getIERange = function () {
                        return ieRange;
                    };
                }
                me.selection.cache();
                if (bakGetIERange) {
                    me.selection.getIERange = bakGetIERange;
                }
                if (me.selection._cachedRange && me.selection._cachedStartElement) {
                    me.fireEvent('beforeselectionchange');
                    // 第二个参数causeByUi为true代表由用户交互造成的selectionchange.
                    me.fireEvent('selectionchange', !!evt);
                    me.fireEvent('afterselectionchange');
                    me.selection.clear();
                }
            }, delay || 50);
        },
        _callCmdFn: function (fnName, args) {
            var cmdName = args[0].toLowerCase(),
                cmd, cmdFn;
            cmd = this.commands[cmdName] || UE.commands[cmdName];
            cmdFn = cmd && cmd[fnName];
            //没有querycommandstate或者没有command的都默认返回0
            if ((!cmd || !cmdFn) && fnName == 'queryCommandState') {
                return 0;
            } else if (cmdFn) {
                return cmdFn.apply(this, args);
            }
        },

        /**
         * 执行编辑命令cmdName，完成富文本编辑效果
         * @name execCommand
         * @grammar editor.execCommand(cmdName)   => {*}
         */
        execCommand: function (cmdName) {
            cmdName = cmdName.toLowerCase();
            var me = this,
                result,
                cmd = me.commands[cmdName] || UE.commands[cmdName];
            if (!cmd || !cmd.execCommand) {
                return null;
            }
            if (!cmd.notNeedUndo && !me.__hasEnterExecCommand) {
                me.__hasEnterExecCommand = true;
                if (me.queryCommandState.apply(me,arguments) != -1) {
                    me.fireEvent('beforeexeccommand', cmdName);
                    result = this._callCmdFn('execCommand', arguments);
                    !me._ignoreContentChange && me.fireEvent('contentchange');
                    me.fireEvent('afterexeccommand', cmdName);
                }
                me.__hasEnterExecCommand = false;
            } else {
                result = this._callCmdFn('execCommand', arguments);
                !me._ignoreContentChange && me.fireEvent('contentchange')
            }
            !me._ignoreContentChange && me._selectionChange();
            return result;
        },
        /**
         * 根据传入的command命令，查选编辑器当前的选区，返回命令的状态
         * @name  queryCommandState
         * @grammar editor.queryCommandState(cmdName)  => (-1|0|1)
         * @desc
         * * ''-1'' 当前命令不可用
         * * ''0'' 当前命令可用
         * * ''1'' 当前命令已经执行过了
         */
        queryCommandState: function (cmdName) {
            return this._callCmdFn('queryCommandState', arguments);
        },

        /**
         * 根据传入的command命令，查选编辑器当前的选区，根据命令返回相关的值
         * @name  queryCommandValue
         * @grammar editor.queryCommandValue(cmdName)  =>  {*}
         */
        queryCommandValue: function (cmdName) {
            return this._callCmdFn('queryCommandValue', arguments);
        },
        /**
         * 检查编辑区域中是否有内容，若包含tags中的节点类型，直接返回true
         * @name  hasContents
         * @desc
         * 默认有文本内容，或者有以下节点都不认为是空
         * <code>{table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1}</code>
         * @grammar editor.hasContents()  => (true|false)
         * @grammar editor.hasContents(tags)  =>  (true|false)  //若文档中包含tags数组里对应的tag，直接返回true
         * @example
         * editor.hasContents(['span']) //如果编辑器里有这些，不认为是空
         */
        hasContents: function (tags) {
            if (tags) {
                for (var i = 0, ci; ci = tags[i++];) {
                    if (this.document.getElementsByTagName(ci).length > 0) {
                        return true;
                    }
                }
            }
            if (!domUtils.isEmptyBlock(this.body)) {
                return true
            }
            //随时添加,定义的特殊标签如果存在，不能认为是空
            tags = ['div'];
            for (i = 0; ci = tags[i++];) {
                var nodes = domUtils.getElementsByTagName(this.document, ci);
                for (var n = 0, cn; cn = nodes[n++];) {
                    if (domUtils.isCustomeNode(cn)) {
                        return true;
                    }
                }
            }
            return false;
        },
        /**
         * 重置编辑器，可用来做多个tab使用同一个编辑器实例
         * @name  reset
         * @desc
         * * 清空编辑器内容
         * * 清空回退列表
         * @grammar editor.reset()
         */
        reset: function () {
            this.fireEvent('reset');
        },
        setEnabled: function () {
            var me = this, range;
            if (me.body.contentEditable == 'false') {
                me.body.contentEditable = true;
                range = me.selection.getRange();
                //有可能内容丢失了
                try {
                    range.moveToBookmark(me.lastBk);
                    delete me.lastBk
                } catch (e) {
                    range.setStartAtFirst(me.body).collapse(true)
                }
                range.select(true);
                if (me.bkqueryCommandState) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }
                me.fireEvent('selectionchange');
            }
        },
        /**
         * 设置当前编辑区域可以编辑
         * @name enable
         * @grammar editor.enable()
         */
        enable: function () {
            return this.setEnabled();
        },
        setDisabled: function (except) {
            var me = this;
            except = except ? utils.isArray(except) ? except : [except] : [];
            if (me.body.contentEditable == 'true') {
                if (!me.lastBk) {
                    me.lastBk = me.selection.getRange().createBookmark(true);
                }
                me.body.contentEditable = false;
                me.bkqueryCommandState = me.queryCommandState;
                me.queryCommandState = function (type) {
                    if (utils.indexOf(except, type) != -1) {
                        return me.bkqueryCommandState.apply(me, arguments);
                    }
                    return -1;
                };
                me.fireEvent('selectionchange');
            }
        },
        /** 设置当前编辑区域不可编辑,except中的命令除外
         * @name disable
         * @grammar editor.disable()
         * @grammar editor.disable(except)  //例外的命令，也即即使设置了disable，此处配置的命令仍然可以执行
         * @example
         * //禁用工具栏中除加粗和插入图片之外的所有功能
         * editor.disable(['bold','insertimage']);//可以是单一的String,也可以是Array
         */
        disable: function (except) {
            return this.setDisabled(except);
        },
        /**
         * 设置默认内容
         * @ignore
         * @private
         * @param  {String} cont 要存入的内容
         */
        _setDefaultContent: function () {
            function clear() {
                var me = this;
                if (me.document.getElementById('initContent')) {
                    me.body.innerHTML = '<p>' + (ie ? '' : '<br/>') + '</p>';
                    me.removeListener('firstBeforeExecCommand focus', clear);
                    setTimeout(function () {
                        me.focus();
                        me._selectionChange();
                    }, 0)
                }
            }

            return function (cont) {
                var me = this;
                me.body.innerHTML = '<p id="initContent">' + cont + '</p>';

                me.addListener('firstBeforeExecCommand focus', clear);
            }
        }(),
        /**
         * show方法的兼容版本
         * @private
         * @ignore
         */
        setShow: function () {
            var me = this, range = me.selection.getRange();
            if (me.container.style.display == 'none') {
                //有可能内容丢失了
                try {
                    range.moveToBookmark(me.lastBk);
                    delete me.lastBk
                } catch (e) {
                    range.setStartAtFirst(me.body).collapse(true)
                }
                //ie下focus实效，所以做了个延迟
                setTimeout(function () {
                    range.select(true);
                }, 100);
                me.container.style.display = '';
            }

        },
        /**
         * 显示编辑器
         * @name show
         * @grammar editor.show()
         */
        show: function () {
            return this.setShow();
        },
        /**
         * hide方法的兼容版本
         * @private
         * @ignore
         */
        setHide: function () {
            var me = this;
            if (!me.lastBk) {
                me.lastBk = me.selection.getRange().createBookmark(true);
            }
            me.container.style.display = 'none'
        },
        /**
         * 隐藏编辑器
         * @name hide
         * @grammar editor.hide()
         */
        hide: function () {
            return this.setHide();
        },
        /**
         * 根据制定的路径，获取对应的语言资源
         * @name  getLang
         * @grammar editor.getLang(path)  =>  （JSON|String) 路径根据的是lang目录下的语言文件的路径结构
         * @example
         * editor.getLang('contextMenu.delete') //如果当前是中文，那返回是的是删除
         */
        getLang: function (path) {
            var lang = UE.I18N[this.options.lang];
            //console.log('laylay',lang,path)
            if (!lang) {
                //throw Error("not import language file");
            }
            path = (path || "").split(".");
            for (var i = 0, ci; ci = path[i++];) {
                lang = lang[ci];
                if (!lang)break;
            }
            return lang;
        },
        /**
         * 计算编辑器当前内容的长度
         * @name  getContentLength
         * @grammar editor.getContentLength(ingoneHtml,tagNames)  =>
         * @example
         * editor.getLang(true)
         */
        getContentLength: function (ingoneHtml, tagNames) {
            var count = this.getContent(false,false,true).length;
            if (ingoneHtml) {
                tagNames = (tagNames || []).concat([ 'hr', 'img', 'iframe']);
                count = count_hanzi_len(this.getContentTxt().replace(/[\t\r\n]+/g, ''));
                for (var i = 0, ci; ci = tagNames[i++];) {
                    count += this.document.getElementsByTagName(ci).length;
                }
            }
            return count;
        },
        addInputRule: function (rule) {
            this.inputRules.push(rule);
        },
        filterInputRule: function (root) {
            for (var i = 0, ci; ci = this.inputRules[i++];) {
                ci.call(this, root)
            }
        },
        addOutputRule: function (rule) {
            this.outputRules.push(rule)
        },
        filterOutputRule: function (root) {
            for (var i = 0, ci; ci = this.outputRules[i++];) {
                ci.call(this, root)
            }
        }
        /**
         * 得到dialog实例对象
         * @name getDialog
         * @grammar editor.getDialog(dialogName) => Object
         * @example
         * var dialog = editor.getDialog("insertimage");
         * dialog.open();   //打开dialog
         * dialog.close();  //关闭dialog
         */
    };
    utils.inherits(Editor, EventBase);
})();

/**
 * @file
 * @name UE.ajax
 * @short Ajax
 * @desc UEditor内置的ajax请求模块
 * @import core/utils.js
 * @user: taoqili
 * @date: 11-8-18
 * @time: 下午3:18
 */
UE.ajax = function() {
    /**
     * 创建一个ajaxRequest对象
     */
    var fnStr = 'XMLHttpRequest()';
    try {
        new ActiveXObject("Msxml2.XMLHTTP");
        fnStr = 'ActiveXObject(\'Msxml2.XMLHTTP\')';
    } catch (e) {
        try {
            new ActiveXObject("Microsoft.XMLHTTP");
            fnStr = 'ActiveXObject(\'Microsoft.XMLHTTP\')'
        } catch (e) {
        }
    }
    var creatAjaxRequest = new Function('return new ' + fnStr);


    /**
     * 将json参数转化成适合ajax提交的参数列表
     * @param json
     */
    function json2str(json) {
        var strArr = [];
        for (var i in json) {
            //忽略默认的几个参数
            if(i=="method" || i=="timeout" || i=="async") continue;
            //传递过来的对象和函数不在提交之列
            if (!((typeof json[i]).toLowerCase() == "function" || (typeof json[i]).toLowerCase() == "object")) {
                strArr.push( encodeURIComponent(i) + "="+encodeURIComponent(json[i]) );
            }
        }
        return strArr.join("&");

    }


    return {
		/**
         * @name request
         * @desc 发出ajax请求，ajaxOpt中默认包含method，timeout，async，data，onsuccess以及onerror等六个，支持自定义添加参数
         * @grammar UE.ajax.request(url,ajaxOpt);
         * @example
         * UE.ajax.request('http://www.xxxx.com/test.php',{
         *     //可省略，默认POST
         *     method:'POST',
         *     //可以自定义参数
         *     content:'这里是提交的内容',
         *     //也可以直接传json，但是只能命名为data，否则当做一般字符串处理
         *     data:{
         *         name:'UEditor',
         *         age:'1'
         *     }
         *     onsuccess:function(xhr){
         *         console.log(xhr.responseText);
         *     },
         *     onerror:function(xhr){
         *         console.log(xhr.responseText);
         *     }
         * })
		 * @param ajaxOptions
		 */
		request:function(url, ajaxOptions) {
            var ajaxRequest = creatAjaxRequest(),
                //是否超时
                timeIsOut = false,
                //默认参数
                defaultAjaxOptions = {
                    method:"POST",
                    timeout:5000,
                    async:true,
                    data:{},//需要传递对象的话只能覆盖
                    onsuccess:function() {
                    },
                    onerror:function() {
                    }
                };

			if (typeof url === "object") {
				ajaxOptions = url;
				url = ajaxOptions.url;
			}
			if (!ajaxRequest || !url) return;
			var ajaxOpts = ajaxOptions ? utils.extend(defaultAjaxOptions,ajaxOptions) : defaultAjaxOptions;

			var submitStr = json2str(ajaxOpts);  // { name:"Jim",city:"Beijing" } --> "name=Jim&city=Beijing"
			//如果用户直接通过data参数传递json对象过来，则也要将此json对象转化为字符串
			if (!utils.isEmptyObject(ajaxOpts.data)){
                submitStr += (submitStr? "&":"") + json2str(ajaxOpts.data);
			}
            //超时检测
            var timerID = setTimeout(function() {
                if (ajaxRequest.readyState != 4) {
                    timeIsOut = true;
                    ajaxRequest.abort();
                    clearTimeout(timerID);
                }
            }, ajaxOpts.timeout);

			var method = ajaxOpts.method.toUpperCase();
            var str = url + (url.indexOf("?")==-1?"?":"&") + (method=="POST"?"":submitStr+ "&noCache=" + +new Date);
			ajaxRequest.open(method, str, ajaxOpts.async);
			ajaxRequest.onreadystatechange = function() {
				if (ajaxRequest.readyState == 4) {
					if (!timeIsOut && ajaxRequest.status == 200) {
						ajaxOpts.onsuccess(ajaxRequest);
					} else {
						ajaxOpts.onerror(ajaxRequest);
					}
				}
			};
			if (method == "POST") {
				ajaxRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajaxRequest.send(submitStr);
			} else {
				ajaxRequest.send(null);
			}
		}
	};


}();

/**
 * @file
 * @name UE.filterWord
 * @short filterWord
 * @desc 用来过滤word粘贴过来的字符串
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterWord = UE.filterWord = function () {

    //是否是word过来的内容
    function isWordDocument( str ) {
        return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<v:)/ig.test( str );
    }
    //去掉小数
    function transUnit( v ) {
        v = v.replace( /[\d.]+\w+/g, function ( m ) {
            return utils.transUnitToPx(m);
        } );
        return v;
    }

    function filterPasteWord( str ) {
        return str.replace( /[\t\r\n]+/g, "" )
                .replace( /<!--[\s\S]*?-->/ig, "" )
                //转换图片
                .replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi,function(str){
                    //opera能自己解析出image所这里直接返回空
                    if(browser.opera){
                        return '';
                    }
                    try{
                        var width = str.match(/width:([ \d.]*p[tx])/i)[1],
                            height = str.match(/height:([ \d.]*p[tx])/i)[1],
                            src =  str.match(/src=\s*"([^"]*)"/i)[1];
                        return '<img width="'+ transUnit(width) +'" height="'+transUnit(height) +'" src="' + src + '" />';
                    } catch(e){
                        return '';
                    }
                })
                //针对wps添加的多余标签处理
                .replace(/<\/?div[^>]*>/g,'')
                //去掉多余的属性
                .replace( /v:\w+=(["']?)[^'"]+\1/g, '' )
                .replace( /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "" )
                .replace( /<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>" )
                //去掉多余的属性
                .replace( /\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig, function(str,name,marks,val){
                    //保留list的标示
                    return name == 'class' && val == 'MsoListParagraph' ? str : ''
                })
                //清除多余的font/span不能匹配&nbsp;有可能是空格
                .replace( /<(font|span)[^>]*>\s*<\/\1>/gi, '' )
                //处理style的问题
                .replace( /(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function( str, tag, tmp, style ) {
                    var n = [],
                        s = style.replace( /^\s+|\s+$/, '' )
                            .replace(/&#39;/g,'\'')
                            .replace( /&quot;/gi, "'" )
                            .split( /;\s*/g );

                    for ( var i = 0,v; v = s[i];i++ ) {

                        var name, value,
                            parts = v.split( ":" );

                        if ( parts.length == 2 ) {
                            name = parts[0].toLowerCase();
                            value = parts[1].toLowerCase();
                            if(/^(background)\w*/.test(name) && value.replace(/(initial|\s)/g,'').length == 0
                                ||
                                /^(margin)\w*/.test(name) && /^0\w+$/.test(value)
                            ){
                                continue;
                            }

                            switch ( name ) {
                                case "mso-padding-alt":
                                case "mso-padding-top-alt":
                                case "mso-padding-right-alt":
                                case "mso-padding-bottom-alt":
                                case "mso-padding-left-alt":
                                case "mso-margin-alt":
                                case "mso-margin-top-alt":
                                case "mso-margin-right-alt":
                                case "mso-margin-bottom-alt":
                                case "mso-margin-left-alt":
                                //ie下会出现挤到一起的情况
                               //case "mso-table-layout-alt":
                                case "mso-height":
                                case "mso-width":
                                case "mso-vertical-align-alt":
                                    //trace:1819 ff下会解析出padding在table上
                                    if(!/<table/.test(tag))
                                        n[i] = name.replace( /^mso-|-alt$/g, "" ) + ":" + transUnit( value );
                                    continue;
                                case "horiz-align":
                                    n[i] = "text-align:" + value;
                                    continue;

                                case "vert-align":
                                    n[i] = "vertical-align:" + value;
                                    continue;

                                case "font-color":
                                case "mso-foreground":
                                    n[i] = "color:" + value;
                                    continue;

                                case "mso-background":
                                case "mso-highlight":
                                    n[i] = "background:" + value;
                                    continue;

                                case "mso-default-height":
                                    n[i] = "min-height:" + transUnit( value );
                                    continue;

                                case "mso-default-width":
                                    n[i] = "min-width:" + transUnit( value );
                                    continue;

                                case "mso-padding-between-alt":
                                    n[i] = "border-collapse:separate;border-spacing:" + transUnit( value );
                                    continue;

                                case "text-line-through":
                                    if ( (value == "single") || (value == "double") ) {
                                        n[i] = "text-decoration:line-through";
                                    }
                                    continue;
                                case "mso-zero-height":
                                    if ( value == "yes" ) {
                                        n[i] = "display:none";
                                    }
                                    continue;
                                case 'background':
                                    break;
                                case 'margin':
                                    if ( !/[1-9]/.test( value ) ) {
                                        continue;
                                    }

                            }

                            if ( /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test( name )
                                ||
                                /text\-indent|padding|margin/.test(name) && /\-[\d.]+/.test(value)
                            ) {
                                continue;
                            }

                            n[i] = name + ":" + parts[1];
                        }
                    }
                    return tag + (n.length ? ' style="' + n.join( ';').replace(/;{2,}/g,';') + '"' : '');
                })
            .replace(/[\d.]+(cm|pt)/g,function(str){
                return utils.transUnitToPx(str)
            })

    }

    return function ( html ) {
        return (isWordDocument( html ) ? filterPasteWord( html ) : html);
    };
}();
///import editor.js
///import core/utils.js
///import core/dom/dom.js
///import core/dom/dtd.js
///import core/htmlparser.js
//模拟的节点类
//by zhanyi
(function () {
    var uNode = UE.uNode = function (obj) {
        this.type = obj.type;
        this.data = obj.data;
        this.tagName = obj.tagName;
        this.parentNode = obj.parentNode;
        this.attrs = obj.attrs || {};
        this.children = obj.children;
    };
    var indentChar = '    ',
        breakChar = '\n';

    function insertLine(arr, current, begin) {
        arr.push(breakChar);
        return current + (begin ? 1 : -1);
    }

    function insertIndent(arr, current) {
        //插入缩进
        for (var i = 0; i < current; i++) {
            arr.push(indentChar);
        }
    }

    //创建uNode的静态方法
    //支持标签和html
    uNode.createElement = function (html) {
        if (/[<>]/.test(html)) {
            return UE.htmlparser(html).children[0]
        } else {
            return new uNode({
                type:'element',
                children:[],
                tagName:html
            })
        }
    };
    uNode.createText = function (data) {
        return new UE.uNode({
            type:'text',
            'data':utils.unhtml(data || '')
        })
    };
    function nodeToHtml(node, arr, formatter, current) {
        switch (node.type) {
            case 'root':
                for (var i = 0, ci; ci = node.children[i++];) {
                    //插入新行
                    if (formatter && ci.type == 'element' && !dtd.$inlineWithA[ci.tagName] && i > 1) {
                        insertLine(arr, current, true);
                        insertIndent(arr, current)
                    }
                    nodeToHtml(ci, arr, formatter, current)
                }
                break;
            case 'text':
                isText(node, arr);
                break;
            case 'element':
                isElement(node, arr, formatter, current);
                break;
            case 'comment':
                isComment(node, arr, formatter);
        }
        return arr;
    }

    function isText(node, arr) {
        arr.push(node.parentNode.tagName == 'pre' ? node.data : node.data.replace(/[ ]{2}/g,' &nbsp;'))
    }

    function isElement(node, arr, formatter, current) {
        var attrhtml = '';
        if (node.attrs) {
            attrhtml = [];
            var attrs = node.attrs;
            for (var a in attrs) {
                attrhtml.push(a + (attrs[a] !== undefined ? '="' + utils.unhtml(attrs[a]) + '"' : ''))
            }
            attrhtml = attrhtml.join(' ');
        }
        arr.push('<' + node.tagName +
            (attrhtml ? ' ' + attrhtml  : '') +
            (dtd.$empty[node.tagName] ? '\/' : '' ) + '>'
        );
        //插入新行
        if (formatter  &&  !dtd.$inlineWithA[node.tagName] && node.tagName != 'pre') {
            if(node.children && node.children.length){
                current = insertLine(arr, current, true);
                insertIndent(arr, current)
            }

        }
        if (node.children && node.children.length) {
            for (var i = 0, ci; ci = node.children[i++];) {
                if (formatter && ci.type == 'element' &&  !dtd.$inlineWithA[ci.tagName] && i > 1) {
                    insertLine(arr, current);
                    insertIndent(arr, current)
                }
                nodeToHtml(ci, arr, formatter, current)
            }
        }
        if (!dtd.$empty[node.tagName]) {
            if (formatter && !dtd.$inlineWithA[node.tagName]  && node.tagName != 'pre') {

                if(node.children && node.children.length){
                    current = insertLine(arr, current);
                    insertIndent(arr, current)
                }
            }
            arr.push('<\/' + node.tagName + '>');
        }

    }

    function isComment(node, arr) {
        arr.push('<!--' + node.data + '-->');
    }

    function getNodeById(root, id) {
        var node;
        if (root.type == 'element' && root.getAttr('id') == id) {
            return root;
        }
        if (root.children && root.children.length) {
            for (var i = 0, ci; ci = root.children[i++];) {
                if (node = getNodeById(ci, id)) {
                    return node;
                }
            }
        }
    }

    function getNodesByTagName(node, tagName, arr) {
        if (node.type == 'element' && node.tagName == tagName) {
            arr.push(node);
        }
        if (node.children && node.children.length) {
            for (var i = 0, ci; ci = node.children[i++];) {
                getNodesByTagName(ci, tagName, arr)
            }
        }
    }
    function nodeTraversal(root,fn){
        if(root.children && root.children.length){
            for(var i= 0,ci;ci=root.children[i];){
                nodeTraversal(ci,fn);
                //ci被替换的情况，这里就不再走 fn了
                if(ci.parentNode ){
                    if(ci.children && ci.children.length){
                        fn(ci)
                    }
                    if(ci.parentNode) i++
                }
            }
        }else{
            fn(root)
        }

    }
    uNode.prototype = {
        toHtml:function (formatter) {
            var arr = [];
            nodeToHtml(this, arr, formatter, 0);
            return arr.join('')
        },
        innerHTML:function (htmlstr) {
            if (this.type != 'element' || dtd.$empty[this.tagName]) {
                return this;
            }
            if (utils.isString(htmlstr)) {
                if(this.children){
                    for (var i = 0, ci; ci = this.children[i++];) {
                        ci.parentNode = null;
                    }
                }
                this.children = [];
                var tmpRoot = UE.htmlparser(htmlstr);
                for (var i = 0, ci; ci = tmpRoot.children[i++];) {
                    this.children.push(ci);
                    ci.parentNode = this;
                }
                return this;
            } else {
                var tmpRoot = new UE.uNode({
                    type:'root',
                    children:this.children
                });
                return tmpRoot.toHtml();
            }
        },
        innerText:function (textStr) {
            if (this.type != 'element' || dtd.$empty[this.tagName]) {
                return this;
            }
            if (textStr) {
                if(this.children){
                    for (var i = 0, ci; ci = this.children[i++];) {
                        ci.parentNode = null;
                    }
                }
                this.children = [];
                this.appendChild(uNode.createText(textStr));
                return this;
            } else {
                return this.toHtml().replace(/<[^>]+>/g, '');
            }
        },
        getData:function () {
            if (this.type == 'element')
                return '';
            return this.data
        },
        firstChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName]) {
//                return this;
//            }
            return this.children ? this.children[0] : null;
        },
        lastChild:function () {
//            if (this.type != 'element' || dtd.$empty[this.tagName] ) {
//                return this;
//            }
            return this.children ? this.children[this.children.length - 1] : null;
        },
        previousSibling : function(){
            var parent = this.parentNode;
            for (var i = 0, ci; ci = parent.children[i]; i++) {
                if (ci === this) {
                   return i == 0 ? null : parent.children[i-1];
                }
            }

        },
        nextSibling : function(){
            var parent = this.parentNode;
            for (var i = 0, ci; ci = parent.children[i++];) {
                if (ci === this) {
                    return parent.children[i];
                }
            }
        },
        replaceChild:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i, 1, target);
                        source.parentNode = null;
                        target.parentNode = this;
                        return target;
                    }
                }
            }
        },
        appendChild:function (node) {
            if (this.type == 'root' || (this.type == 'element' && !dtd.$empty[this.tagName])) {
                if (!this.children) {
                    this.children = []
                }
                if(node.parentNode){
                    node.parentNode.removeChild(node);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === node) {
                        this.children.splice(i, 1);
                        break;
                    }
                }
                this.children.push(node);
                node.parentNode = this;
                return node;
            }


        },
        insertBefore:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i, 0, target);
                        target.parentNode = this;
                        return target;
                    }
                }

            }
        },
        insertAfter:function (target, source) {
            if (this.children) {
                if(target.parentNode){
                    target.parentNode.removeChild(target);
                }
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === source) {
                        this.children.splice(i + 1, 0, target);
                        target.parentNode = this;
                        return target;
                    }

                }
            }
        },
        removeChild:function (node,keepChildren) {
            if (this.children) {
                for (var i = 0, ci; ci = this.children[i]; i++) {
                    if (ci === node) {
                        this.children.splice(i, 1);
                        ci.parentNode = null;
                        if(keepChildren && ci.children && ci.children.length){
                            for(var j= 0,cj;cj=ci.children[j];j++){
                                this.children.splice(i+j,0,cj);
                                cj.parentNode = this;

                            }
                        }
                        return ci;
                    }
                }
            }
        },
        getAttr:function (attrName) {
            return this.attrs && this.attrs[attrName.toLowerCase()]
        },
        setAttr:function (attrName, attrVal) {
            if (!attrName) {
                delete this.attrs;
                return;
            }
            if(!this.attrs){
                this.attrs = {};
            }
            if (utils.isObject(attrName)) {
                for (var a in attrName) {
                    if (!attrName[a]) {
                        delete this.attrs[a]
                    } else {
                        this.attrs[a.toLowerCase()] = attrName[a];
                    }
                }
            } else {
                if (!attrVal) {
                    delete this.attrs[attrName]
                } else {
                    this.attrs[attrName.toLowerCase()] = attrVal;
                }

            }
        },
        getIndex:function(){
            var parent = this.parentNode;
            for(var i= 0,ci;ci=parent.children[i];i++){
                if(ci === this){
                    return i;
                }
            }
            return -1;
        },
        getNodeById:function (id) {
            var node;
            if (this.children && this.children.length) {
                for (var i = 0, ci; ci = this.children[i++];) {
                    if (node = getNodeById(ci, id)) {
                        return node;
                    }
                }
            }
        },
        getNodesByTagName:function (tagNames) {
            tagNames = utils.trim(tagNames).replace(/[ ]{2,}/g, ' ').split(' ');
            var arr = [], me = this;
            utils.each(tagNames, function (tagName) {
                if (me.children && me.children.length) {
                    for (var i = 0, ci; ci = me.children[i++];) {
                        getNodesByTagName(ci, tagName, arr)
                    }
                }
            });
            return arr;
        },
        getStyle:function (name) {
            var cssStyle = this.getAttr('style');
            if (!cssStyle) {
                return ''
            }
            var reg = new RegExp(name + ':([^;]+)','i');
            var match = cssStyle.match(reg);
            if (match && match[0]) {
                return match[1]
            }
            return '';
        },
        setStyle:function (name, val) {
            function exec(name, val) {
                var reg = new RegExp(name + ':([^;]+;?)', 'gi');
                cssStyle = cssStyle.replace(reg, '');
                if (val) {
                    cssStyle = name + ':' + utils.unhtml(val) + ';' + cssStyle
                }

            }

            var cssStyle = this.getAttr('style');
            if (!cssStyle) {
                cssStyle = '';
            }
            if (utils.isObject(name)) {
                for (var a in name) {
                    exec(a, name[a])
                }
            } else {
                exec(name, val)
            }
            this.setAttr('style', utils.trim(cssStyle))
        },
        traversal:function(fn){
            if(this.children && this.children.length){
                nodeTraversal(this,fn);
            }
            return this;
        }
    }
})();

//html字符串转换成uNode节点
//by zhanyi
var htmlparser = UE.htmlparser = function (htmlstr,ignoreBlank) {
    var re_tag = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)-->)|(?:([^\s\/>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
        re_attr = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g;

    //ie下取得的html可能会有\n存在，要去掉，在处理replace(/[\t\r\n]*/g,'');代码高量的\n不能去除
    var allowEmptyTags = {
        b:1,code:1,i:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,span:1,
        sub:1,img:1,sup:1,font:1,big:1,small:1,iframe:1,a:1,br:1,pre:1
    };
    htmlstr = htmlstr.replace(new RegExp(domUtils.fillChar, 'g'), '');
    if(!ignoreBlank){
        htmlstr = htmlstr.replace(new RegExp('[\\r\\t\\n'+(ignoreBlank?'':' ')+']*<\/?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n'+(ignoreBlank?'':' ')+']*','g'), function(a,b){
            //br暂时单独处理
            if(b && allowEmptyTags[b.toLowerCase()]){
                return a.replace(/(^[\n\r]+)|([\n\r]+$)/g,'');
            }
            return a.replace(new RegExp('^[\\r\\n'+(ignoreBlank?'':' ')+']+'),'').replace(new RegExp('[\\r\\n'+(ignoreBlank?'':' ')+']+$'),'');
        });
    }



    var uNode = UE.uNode,
        needParentNode = {
            'td':'tr',
            'tr':['tbody','thead','tfoot'],
            'tbody':'table',
            'th':'tr',
            'thead':'table',
            'tfoot':'table',
            'caption':'table',
            'li':['ul', 'ol'],
            'dt':'dl',
            'dd':'dl',
            'option':'select'
        },
        needChild = {
            'ol':'li',
            'ul':'li'
        };

    function text(parent, data) {

        if(needChild[parent.tagName]){
            var tmpNode = uNode.createElement(needChild[parent.tagName]);
            parent.appendChild(tmpNode);
            tmpNode.appendChild(uNode.createText(data));
            parent = tmpNode;
        }else{

            parent.appendChild(uNode.createText(data));
        }
    }

    function element(parent, tagName, htmlattr) {
        var needParentTag;
        if (needParentTag = needParentNode[tagName]) {
            var tmpParent = parent,hasParent;
            while(tmpParent.type != 'root'){
                if(utils.isArray(needParentTag) ? utils.indexOf(needParentTag, tmpParent.tagName) != -1 : needParentTag == tmpParent.tagName){
                    parent = tmpParent;
                    hasParent = true;
                    break;
                }
                tmpParent = tmpParent.parentNode;
            }
            if(!hasParent){
                parent = element(parent, utils.isArray(needParentTag) ? needParentTag[0] : needParentTag)
            }
        }
        //按dtd处理嵌套
//        if(parent.type != 'root' && !dtd[parent.tagName][tagName])
//            parent = parent.parentNode;
        var elm = new uNode({
            parentNode:parent,
            type:'element',
            tagName:tagName.toLowerCase(),
            //是自闭合的处理一下
            children:dtd.$empty[tagName] ? null : []
        });
        //如果属性存在，处理属性
        if (htmlattr) {
            var attrs = {}, match;
            while (match = re_attr.exec(htmlattr)) {
                attrs[match[1].toLowerCase()] = utils.unhtml(match[2] || match[3] || match[4])
            }
            elm.attrs = attrs;
        }

        parent.children.push(elm);
        //如果是自闭合节点返回父亲节点
        return  dtd.$empty[tagName] ? parent : elm
    }

    function comment(parent, data) {
        parent.children.push(new uNode({
            type:'comment',
            data:data,
            parentNode:parent
        }));
    }

    var match, currentIndex = 0, nextIndex = 0;
    //设置根节点
    var root = new uNode({
        type:'root',
        children:[]
    });
    var currentParent = root;
    while (match = re_tag.exec(htmlstr)) {
        currentIndex = match.index;
        try{
            if (currentIndex > nextIndex) {
                //text node
                text(currentParent, htmlstr.slice(nextIndex, currentIndex));
            }
            if (match[3]) {
                //start tag
                currentParent = element(currentParent, match[3].toLowerCase(), match[4]);

            } else if (match[1]) {
                if(currentParent.type != 'root'){
                    var tmpParent = currentParent;
                    while(currentParent.type == 'element' && currentParent.tagName != match[1].toLowerCase()){
                        currentParent = currentParent.parentNode;
                        if(currentParent.type == 'root'){
                            currentParent = tmpParent;
                            throw 'break'
                        }
                    }
                    //end tag
                    currentParent = currentParent.parentNode;
                }

            } else if (match[2]) {
                //comment
                comment(currentParent, match[2])
            }
        }catch(e){}

        nextIndex = re_tag.lastIndex;

    }
    //如果结束是文本，就有可能丢掉，所以这里手动判断一下
    //例如 <li>sdfsdfsdf<li>sdfsdfsdfsdf
    if (nextIndex < htmlstr.length) {
        text(currentParent, htmlstr.slice(nextIndex));
    }
    return root;
};
/**
 * @file
 * @name UE.filterNode
 * @short filterNode
 * @desc 根据给定的规则过滤节点
 * @import editor.js,core/utils.js
 * @anthor zhanyi
 */
var filterNode = UE.filterNode = function () {
    function filterNode(node,rules){
        switch (node.type) {
            case 'text':
                break;
            case 'element':
                var val;
                if(val = rules[node.tagName]){
                   if(val === '-'){
                       node.parentNode.removeChild(node)
                   }else if(utils.isFunction(val)){
                       var parentNode = node.parentNode,
                           index = node.getIndex();
                       val(node);
                       if(node.parentNode){
                           if(node.children){
                               for(var i = 0,ci;ci=node.children[i];){
                                   filterNode(ci,rules);
                                   if(ci.parentNode){
                                       i++;
                                   }
                               }
                           }
                       }else{
                           for(var i = index,ci;ci=parentNode.children[i];){
                               filterNode(ci,rules);
                               if(ci.parentNode){
                                   i++;
                               }
                           }
                       }


                   }else{
                       var attrs = val['$'];
                       if(attrs && node.attrs){
                           var tmpAttrs = {},tmpVal;
                           for(var a in attrs){
                               tmpVal = node.getAttr(a);
                               //todo 只先对style单独处理
                               if(a == 'style' && utils.isArray(attrs[a])){
                                   var tmpCssStyle = [];
                                   utils.each(attrs[a],function(v){
                                       var tmp;
                                       if(tmp = node.getStyle(v)){
                                           tmpCssStyle.push(v + ':' + tmp);
                                       }
                                   });
                                   tmpVal = tmpCssStyle.join(';')
                               }
                               if(tmpVal){
                                   tmpAttrs[a] = tmpVal;
                               }

                           }
                           node.attrs = tmpAttrs;
                       }
                       if(node.children){
                           for(var i = 0,ci;ci=node.children[i];){
                               filterNode(ci,rules);
                               if(ci.parentNode){
                                   i++;
                               }
                           }
                       }
                   }
                }else{
                    //如果不在名单里扣出子节点并删除该节点,cdata除外
                    if(dtd.$cdata[node.tagName]){
                        node.parentNode.removeChild(node)
                    }else{
                        var parentNode = node.parentNode,
                            index = node.getIndex();
                        node.parentNode.removeChild(node,true);
                        for(var i = index,ci;ci=parentNode.children[i];){
                            filterNode(ci,rules);
                            if(ci.parentNode){
                                i++;
                            }
                        }
                    }
                }
                break;
            case 'comment':
                node.parentNode.removeChild(node)
        }

    }
    return function(root,rules){
        if(utils.isEmptyObject(rules)){
            return root;
        }
        var val;
        if(val = rules['-']){
            utils.each(val.split(' '),function(k){
                rules[k] = '-'
            })
        }
        for(var i= 0,ci;ci=root.children[i];){
            filterNode(ci,rules);
            if(ci.parentNode){
               i++;
            }
        }
        return root;
    }
}();
///import core
///plugin 编辑器默认的过滤转换机制

UE.plugins['defaultfilter'] = function () {
    var me = this;
    me.setOpt('allowDivTransToP',true);
    //默认的过滤处理
    //进入编辑器的内容处理
    me.addInputRule(function (root) {
        var allowDivTransToP = this.options.allowDivTransToP;
        var val;
        //进行默认的处理
        root.traversal(function (node) {
            if (node.type == 'element') {
                if (!dtd.$cdata[node.tagName] && me.options.autoClearEmptyNode && dtd.$inline[node.tagName] && !dtd.$empty[node.tagName] && (!node.attrs || utils.isEmptyObject(node.attrs))) {
                    if (!node.firstChild()) node.parentNode.removeChild(node);
                    else if (node.tagName == 'span' && (!node.attrs || utils.isEmptyObject(node.attrs))) {
                        node.parentNode.removeChild(node, true)
                    }
                    return;
                }
                switch (node.tagName) {
                    case 'style':
                    case 'script':
                        node.setAttr({
                            cdata_tag: node.tagName,
                            cdata_data: encodeURIComponent(node.innerText() || '')
                        });
                        node.tagName = 'div';
                        node.removeChild(node.firstChild());
                        break;
                    case 'a':
                        if (val = node.getAttr('href')) {
                            node.setAttr('_href', val)
                        }
                        break;
                    case 'img':
                        //todo base64暂时去掉，后边做远程图片上传后，干掉这个
                        if (val = node.getAttr('src')) {
                            if (/^data:/.test(val)) {
                                node.parentNode.removeChild(node);
                                break;
                            }
                        }
                        node.setAttr('_src', node.getAttr('src'));
                        break;
                    case 'span':
                        if (browser.webkit && (val = node.getStyle('white-space'))) {
                            if (/nowrap|normal/.test(val)) {
                                node.setStyle('white-space', '');
                                if (me.options.autoClearEmptyNode && utils.isEmptyObject(node.attrs)) {
                                    node.parentNode.removeChild(node, true)
                                }
                            }
                        }
                        break;
                    case 'p':
                        if (val = node.getAttr('align')) {
                            node.setAttr('align');
                            node.setStyle('text-align', val)
                        }
                        //trace:3431
//                        var cssStyle = node.getAttr('style');
//                        if (cssStyle) {
//                            cssStyle = cssStyle.replace(/(margin|padding)[^;]+/g, '');
//                            node.setAttr('style', cssStyle)
//
//                        }
                        if (!node.firstChild()) {
                            node.innerHTML(browser.ie ? '&nbsp;' : '<br/>')
                        }
                        break;
                    case 'div':
                        if(node.getAttr('cdata_tag')){
                            break;
                        }
                        //针对代码这里不处理插入代码的div
                        val = node.getAttr('class');
                        if(val && /^line number\d+/.test(val)){
                            break;
                        }
                        if(!allowDivTransToP){
                            break;
                        }
                        var tmpNode, p = UE.uNode.createElement('p');
                        while (tmpNode = node.firstChild()) {
                            if (tmpNode.type == 'text' || !UE.dom.dtd.$block[tmpNode.tagName]) {
                                p.appendChild(tmpNode);
                            } else {
                                if (p.firstChild()) {
                                    node.parentNode.insertBefore(p, node);
                                    p = UE.uNode.createElement('p');
                                } else {
                                    node.parentNode.insertBefore(tmpNode, node);
                                }
                            }
                        }
                        if (p.firstChild()) {
                            node.parentNode.insertBefore(p, node);
                        }
                        node.parentNode.removeChild(node);
                        break;
                    case 'dl':
                        node.tagName = 'ul';
                        break;
                    case 'dt':
                    case 'dd':
                        node.tagName = 'li';
                        break;
                    case 'li':
                        var className = node.getAttr('class');
                        if (!className || !/list\-/.test(className)) {
                            node.setAttr()
                        }
                        var tmpNodes = node.getNodesByTagName('ol ul');
                        UE.utils.each(tmpNodes, function (n) {
                            node.parentNode.insertAfter(n, node);
                        });
                        break;
                    case 'td':
                    case 'th':
                    case 'caption':
                        if(!node.children || !node.children.length){

                            node.appendChild(browser.ie ? UE.uNode.createText(' ') : UE.uNode.createElement('br'))
                        }
                }

            }
            if(node.type == 'comment'){
                node.parentNode.removeChild(node);
            }
        })

    });

    //从编辑器出去的内容处理
    me.addOutputRule(function (root) {

        var val;
        root.traversal(function (node) {
            if (node.type == 'element') {

                if (me.options.autoClearEmptyNode && dtd.$inline[node.tagName] && !dtd.$empty[node.tagName] && (!node.attrs || utils.isEmptyObject(node.attrs))) {

                    if (!node.firstChild()) node.parentNode.removeChild(node);
                    else if (node.tagName == 'span' && (!node.attrs || utils.isEmptyObject(node.attrs))) {
                        node.parentNode.removeChild(node, true)
                    }
                    return;
                }
                switch (node.tagName) {
                    case 'div':
                        if (val = node.getAttr('cdata_tag')) {
                            node.tagName = val;
                            node.appendChild(UE.uNode.createText(node.getAttr('cdata_data')));
                            node.setAttr({cdata_tag: '', cdata_data: ''});
                        }
                        break;
                    case 'a':
                        if (val = node.getAttr('_href')) {
                            node.setAttr({
                                'href': val,
                                '_href': ''
                            })
                        }
                        break;
                    case 'img':
                        if (val = node.getAttr('_src')) {
                            node.setAttr({
                                'src': node.getAttr('_src'),
                                '_src': ''
                            })
                        }


                }
            }

        })


    });
};

///import core
/**
 * @description 插入内容
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     inserthtml插入内容的命令
 * @param   {String}   html                要插入的内容
 * @author zhanyi
 */
UE.commands['inserthtml'] = {
    execCommand: function (command,html,notNeedFilter){
        var me = this,
            range,
            div;
        if(!html){
            return;
        }
        if(me.fireEvent('beforeinserthtml',html) === true){
            return;
        }
        range = me.selection.getRange();
        div = range.document.createElement( 'div' );
        div.style.display = 'inline';

        if (!notNeedFilter) {
            var root = UE.htmlparser(html);
            //如果给了过滤规则就先进行过滤
            if(me.options.filterRules){
                UE.filterNode(root,me.options.filterRules);
            }
            //执行默认的处理
            me.filterInputRule(root);
            html = root.toHtml()
        }
        div.innerHTML = utils.trim( html );

        if ( !range.collapsed ) {
            var tmpNode = range.startContainer;
            if(domUtils.isFillChar(tmpNode)){
                range.setStartBefore(tmpNode)
            }
            tmpNode = range.endContainer;
            if(domUtils.isFillChar(tmpNode)){
                range.setEndAfter(tmpNode)
            }
            range.txtToElmBoundary();
            //结束边界可能放到了br的前边，要把br包含进来
            // x[xxx]<br/>
            if(range.endContainer && range.endContainer.nodeType == 1){
                tmpNode = range.endContainer.childNodes[range.endOffset];
                if(tmpNode && domUtils.isBr(tmpNode)){
                    range.setEndAfter(tmpNode);
                }
            }
            if(range.startOffset == 0){
                tmpNode = range.startContainer;
                if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
                    tmpNode = range.endContainer;
                    if(range.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
                        me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
                        range.setStart(me.body.firstChild,0).collapse(true)

                    }
                }
            }
            !range.collapsed && range.deleteContents();
            if(range.startContainer.nodeType == 1){
                var child = range.startContainer.childNodes[range.startOffset],pre;
                if(child && domUtils.isBlockElm(child) && (pre = child.previousSibling) && domUtils.isBlockElm(pre)){
                    range.setEnd(pre,pre.childNodes.length).collapse();
                    while(child.firstChild){
                        pre.appendChild(child.firstChild);
                    }
                    domUtils.remove(child);
                }
            }

        }


        var child,parent,pre,tmp,hadBreak = 0, nextNode;
        //如果当前位置选中了fillchar要干掉，要不会产生空行
        if(range.inFillChar()){
            child = range.startContainer;
            if(domUtils.isFillChar(child)){
                range.setStartBefore(child).collapse(true);
                domUtils.remove(child);
            }else if(domUtils.isFillChar(child,true)){
                child.nodeValue = child.nodeValue.replace(fillCharReg,'');
                range.startOffset--;
                range.collapsed && range.collapse(true)
            }
        }
        //列表单独处理
        var li = domUtils.findParentByTagName(range.startContainer,'li',true);
        if(li){
            var next,last;
            while(child = div.firstChild){
                //针对hr单独处理一下先
                while(child && (child.nodeType == 3 || !domUtils.isBlockElm(child) || child.tagName=='HR' )){
                    next = child.nextSibling;
                    range.insertNode( child).collapse();
                    last = child;
                    child = next;

                }
                if(child){
                    if(/^(ol|ul)$/i.test(child.tagName)){
                        while(child.firstChild){
                            last = child.firstChild;
                            domUtils.insertAfter(li,child.firstChild);
                            li = li.nextSibling;
                        }
                        domUtils.remove(child)
                    }else{
                        var tmpLi;
                        next = child.nextSibling;
                        tmpLi = me.document.createElement('li');
                        domUtils.insertAfter(li,tmpLi);
                        tmpLi.appendChild(child);
                        last = child;
                        child = next;
                        li = tmpLi;
                    }
                }
            }
            li = domUtils.findParentByTagName(range.startContainer,'li',true);
            if(domUtils.isEmptyBlock(li)){
                domUtils.remove(li)
            }
            if(last){

                range.setStartAfter(last).collapse(true).select(true)
            }
        }else{
            while ( child = div.firstChild ) {
                if(hadBreak){
                    var p = me.document.createElement('p');
                    while(child && (child.nodeType == 3 || !dtd.$block[child.tagName])){
                        nextNode = child.nextSibling;
                        p.appendChild(child);
                        child = nextNode;
                    }
                    if(p.firstChild){

                        child = p
                    }
                }
                range.insertNode( child );
                nextNode = child.nextSibling;
                if ( !hadBreak && child.nodeType == domUtils.NODE_ELEMENT && domUtils.isBlockElm( child ) ){

                    parent = domUtils.findParent( child,function ( node ){ return domUtils.isBlockElm( node ); } );
                    if ( parent && parent.tagName.toLowerCase() != 'body' && !(dtd[parent.tagName][child.nodeName] && child.parentNode === parent)){
                        if(!dtd[parent.tagName][child.nodeName]){
                            pre = parent;
                        }else{
                            tmp = child.parentNode;
                            while (tmp !== parent){
                                pre = tmp;
                                tmp = tmp.parentNode;

                            }
                        }


                        domUtils.breakParent( child, pre || tmp );
                        //去掉break后前一个多余的节点  <p>|<[p> ==> <p></p><div></div><p>|</p>
                        var pre = child.previousSibling;
                        domUtils.trimWhiteTextNode(pre);
                        if(!pre.childNodes.length){
                            domUtils.remove(pre);
                        }
                        //trace:2012,在非ie的情况，切开后剩下的节点有可能不能点入光标添加br占位

                        if(!browser.ie &&
                            (next = child.nextSibling) &&
                            domUtils.isBlockElm(next) &&
                            next.lastChild &&
                            !domUtils.isBr(next.lastChild)){
                            next.appendChild(me.document.createElement('br'));
                        }
                        hadBreak = 1;
                    }
                }
                var next = child.nextSibling;
                if(!div.firstChild && next && domUtils.isBlockElm(next)){

                    range.setStart(next,0).collapse(true);
                    break;
                }
                range.setEndAfter( child ).collapse();

            }

            child = range.startContainer;

            if(nextNode && domUtils.isBr(nextNode)){
                domUtils.remove(nextNode)
            }
            //用chrome可能有空白展位符
            if(domUtils.isBlockElm(child) && domUtils.isEmptyNode(child)){
                if(nextNode = child.nextSibling){
                    domUtils.remove(child);
                    if(nextNode.nodeType == 1 && dtd.$block[nextNode.tagName]){

                        range.setStart(nextNode,0).collapse(true).shrinkBoundary()
                    }
                }else{

                    try{
                        child.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                    }catch(e){
                        range.setStartBefore(child);
                        domUtils.remove(child)
                    }

                }

            }
            //加上true因为在删除表情等时会删两次，第一次是删的fillData
            try{
                range.select(true);
            }catch(e){}

        }



        setTimeout(function(){
            range = me.selection.getRange();
            range.scrollToView(me.autoHeightEnabled,me.autoHeightEnabled ? domUtils.getXY(me.iframe).y:0);
            me.fireEvent('afterinserthtml');
        },200);
    }
};

///import core
///commands 自动排版
///commandsName  autotypeset
///commandsTitle  自动排版
/**
 * 自动排版
 * @function
 * @name baidu.editor.execCommands
 */

UE.plugins['autotypeset'] = function(){

    this.setOpt({'autotypeset':{
        mergeEmptyline : true,          //合并空行
            removeClass : true,            //去掉冗余的class
            removeEmptyline : false,        //去掉空行
            textAlign : "left",             //段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
            imageBlockLine : 'center',      //图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
            pasteFilter : false,             //根据规则过滤没事粘贴进来的内容
            clearFontSize : false,           //去掉所有的内嵌字号，使用编辑器默认的字号
            clearFontFamily : false,         //去掉所有的内嵌字体，使用编辑器默认的字体
            removeEmptyNode : false,         // 去掉空节点
            //可以去掉的标签
            removeTagNames : utils.extend({div:1},dtd.$removeEmpty),
            indent : false,                  // 行首缩进
            indentValue : '2em'             //行首缩进的大小
    }});
    var me = this,
        opt = me.options.autotypeset,
        remainClass = {
            'selectTdClass':1,
            'pagebreak':1,
            'anchorclass':1
        },
        remainTag = {
            'li':1
        },
        tags = {
            div:1,
            p:1,
            //trace:2183 这些也认为是行
            blockquote:1,center:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,
            span:1
        },
        highlightCont;
    //升级了版本，但配置项目里没有autotypeset
    if(!opt){
        return;
    }
    function isLine(node,notEmpty){
        if(!node || node.nodeType == 3)
            return 0;
        if(domUtils.isBr(node))
            return 1;
        if(node && node.parentNode && tags[node.tagName.toLowerCase()]){
            if(highlightCont && highlightCont.contains(node)
                ||
                node.getAttribute('pagebreak')
            ){
                return 0;
            }

            return notEmpty ? !domUtils.isEmptyBlock(node) : domUtils.isEmptyBlock(node,new RegExp('[\\s'+domUtils.fillChar
                +']','g'));
        }
    }

    function removeNotAttributeSpan(node){
        if(!node.style.cssText){
            domUtils.removeAttributes(node,['style']);
            if(node.tagName.toLowerCase() == 'span' && domUtils.hasNoAttributes(node)){
                domUtils.remove(node,true);
            }
        }
    }
    function autotype(type,html){
        var me = this,cont;
        if(html){
            if(!opt.pasteFilter){
                return;
            }
            cont = me.document.createElement('div');
            cont.innerHTML = html.html;
        }else{
            cont = me.document.body;
        }
        var nodes = domUtils.getElementsByTagName(cont,'*');

          // 行首缩进，段落方向，段间距，段内间距
        for(var i=0,ci;ci=nodes[i++];){

            if(me.fireEvent('excludeNodeinautotype',ci) === true){
                continue;
            }
             //font-size
            if(opt.clearFontSize && ci.style.fontSize){
                domUtils.removeStyle(ci,'font-size');

                removeNotAttributeSpan(ci);

            }
            //font-family
            if(opt.clearFontFamily && ci.style.fontFamily){
                domUtils.removeStyle(ci,'font-family');
                removeNotAttributeSpan(ci);
            }

            if(isLine(ci)){
                //合并空行
                if(opt.mergeEmptyline ){
                    var next = ci.nextSibling,tmpNode,isBr = domUtils.isBr(ci);
                    while(isLine(next)){
                        tmpNode = next;
                        next = tmpNode.nextSibling;
                        if(isBr && (!next || next && !domUtils.isBr(next))){
                            break;
                        }
                        domUtils.remove(tmpNode);
                    }

                }
                 //去掉空行，保留占位的空行
                if(opt.removeEmptyline && domUtils.inDoc(ci,cont) && !remainTag[ci.parentNode.tagName.toLowerCase()] ){
                    if(domUtils.isBr(ci)){
                        next = ci.nextSibling;
                        if(next && !domUtils.isBr(next)){
                            continue;
                        }
                    }
                    domUtils.remove(ci);
                    continue;

                }

            }
            if(isLine(ci,true) && ci.tagName != 'SPAN'){
                if(opt.indent){
                    ci.style.textIndent = opt.indentValue;
                }
                if(opt.textAlign){
                    ci.style.textAlign = opt.textAlign;
                }
//                if(opt.lineHeight)
//                    ci.style.lineHeight = opt.lineHeight + 'cm';


            }

            //去掉class,保留的class不去掉
            if(opt.removeClass && ci.className && !remainClass[ci.className.toLowerCase()]){

                if(highlightCont && highlightCont.contains(ci)){
                     continue;
                }
                domUtils.removeAttributes(ci,['class']);
            }

            //表情不处理
            if(opt.imageBlockLine && ci.tagName.toLowerCase() == 'img' && !ci.getAttribute('emotion')){
                if(html){
                    var img = ci;
                    switch (opt.imageBlockLine){
                        case 'left':
                        case 'right':
                        case 'none':
                            var pN = img.parentNode,tmpNode,pre,next;
                            while(dtd.$inline[pN.tagName] || pN.tagName == 'A'){
                                pN = pN.parentNode;
                            }
                            tmpNode = pN;
                            if(tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode,'text-align') == 'center'){
                                if(!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1){
                                    pre = tmpNode.previousSibling;
                                    next = tmpNode.nextSibling;
                                    if(pre && next && pre.nodeType == 1 &&  next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)){
                                        pre.appendChild(tmpNode.firstChild);
                                        while(next.firstChild){
                                            pre.appendChild(next.firstChild);
                                        }
                                        domUtils.remove(tmpNode);
                                        domUtils.remove(next);
                                    }else{
                                        domUtils.setStyle(tmpNode,'text-align','');
                                    }


                                }


                            }
                            domUtils.setStyle(img,'float',opt.imageBlockLine);
                            break;
                        case 'center':
                            if(me.queryCommandValue('imagefloat') != 'center'){
                                pN = img.parentNode;
                                domUtils.setStyle(img,'float','none');
                                tmpNode = img;
                                while(pN && domUtils.getChildCount(pN,function(node){return !domUtils.isBr(node) && !domUtils.isWhitespace(node)}) == 1
                                    && (dtd.$inline[pN.tagName] || pN.tagName == 'A')){
                                    tmpNode = pN;
                                    pN = pN.parentNode;
                                }
                                var pNode = me.document.createElement('p');
                                domUtils.setAttributes(pNode,{

                                    style:'text-align:center'
                                });
                                tmpNode.parentNode.insertBefore(pNode,tmpNode);
                                pNode.appendChild(tmpNode);
                                domUtils.setStyle(tmpNode,'float','');

                            }


                    }
                }else{
                    var range = me.selection.getRange();
                    range.selectNode(ci).select();
                    me.execCommand('imagefloat',opt.imageBlockLine);
                }



            }

            //去掉冗余的标签
            if(opt.removeEmptyNode){
                if(opt.removeTagNames[ci.tagName.toLowerCase()] && domUtils.hasNoAttributes(ci) && domUtils.isEmptyBlock(ci)){
                    domUtils.remove(ci);
                }
            }
        }
        if(html){
            html.html = cont.innerHTML;
        }
    }
    if(opt.pasteFilter){
        me.addListener('beforepaste',autotype);
    }

    me.commands['autotypeset'] = {
        execCommand:function () {
            me.removeListener('beforepaste',autotype);
            if(opt.pasteFilter){
                me.addListener('beforepaste',autotype);
            }
            autotype.call(me)
        }

    };

};


///import core
///commands 自动提交
///commandsName  autosubmit
///commandsTitle  自动提交
UE.plugins['autosubmit'] = function(){
    var me = this;
    me.commands['autosubmit'] = {
        execCommand:function () {
            var me=this,
                form = domUtils.findParentByTagName(me.iframe,"form", false);
            if (form)    {
                if(me.fireEvent("beforesubmit")===false){
                    return;
                }
                me.sync();
                form.submit();
            }
        }
    };
    //快捷键
    me.addshortcutkey({
        "autosubmit" : "ctrl+13" //手动提交
    });
};

///import core
///commands 插入背景
///commandsName  background
///commandsTitle  插入背景
///commandsDialog  dialogs\background
UE.plugins['background'] = function(){
    var me = this;
    me.addListener("getAllHtml",function(type,headHtml){
        var body = this.body,
            su = domUtils.getComputedStyle(body,"background-image"),
            url="";
        if(su.indexOf(me.options.imagePath)>0){
            url =  su.substring(su.indexOf(me.options.imagePath),su.length-1).replace(/"|\(|\)/ig,"");
        }else{
            url =  su!="none" ? su.replace(/url\("?|"?\)/ig,""):"";
        }
        var html = '<style type="text/css">body{';
        var bgObj = {
            "background-color" : domUtils.getComputedStyle(body,"background-color")||"#ffffff",
            'background-image' : url ? 'url('+url+')' : '',
            'background-repeat':domUtils.getComputedStyle(body,"background-repeat")||"",
            'background-position': browser.ie?(domUtils.getComputedStyle(body,"background-position-x")+" "+domUtils.getComputedStyle(body,"background-position-y")):domUtils.getComputedStyle(body,"background-position"),
            'height':domUtils.getComputedStyle(body,"height")
        };
        for ( var name in bgObj ) {
            if ( bgObj.hasOwnProperty( name ) ) {
                html += name+":"+bgObj[name]+";";
            }
        }
        html += '}</style> ';
        headHtml.push(html);
    });
}
///import core
///import plugins\inserthtml.js
///commands 插入图片，操作图片的对齐方式
///commandsName  InsertImage,ImageNone,ImageLeft,ImageRight,ImageCenter
///commandsTitle  图片,默认,居左,居右,居中
///commandsDialog  dialogs\image
/**
 * Created by .
 * User: zhanyi
 * for image
 */

UE.commands['imagefloat'] = {
    execCommand:function (cmd, align) {
        var me = this,
            range = me.selection.getRange();
        if (!range.collapsed) {
            var img = range.getClosedNode();
            if (img && img.tagName == 'IMG') {
                switch (align) {
                    case 'left':
                    case 'right':
                    case 'none':
                        var pN = img.parentNode, tmpNode, pre, next;
                        while (dtd.$inline[pN.tagName] || pN.tagName == 'A') {
                            pN = pN.parentNode;
                        }
                        tmpNode = pN;
                        if (tmpNode.tagName == 'P' && domUtils.getStyle(tmpNode, 'text-align') == 'center') {
                            if (!domUtils.isBody(tmpNode) && domUtils.getChildCount(tmpNode, function (node) {
                                return !domUtils.isBr(node) && !domUtils.isWhitespace(node);
                            }) == 1) {
                                pre = tmpNode.previousSibling;
                                next = tmpNode.nextSibling;
                                if (pre && next && pre.nodeType == 1 && next.nodeType == 1 && pre.tagName == next.tagName && domUtils.isBlockElm(pre)) {
                                    pre.appendChild(tmpNode.firstChild);
                                    while (next.firstChild) {
                                        pre.appendChild(next.firstChild);
                                    }
                                    domUtils.remove(tmpNode);
                                    domUtils.remove(next);
                                } else {
                                    domUtils.setStyle(tmpNode, 'text-align', '');
                                }


                            }

                            range.selectNode(img).select();
                        }
                        domUtils.setStyle(img, 'float', align == 'none' ? '' : align);
                        if(align == 'none'){
                            domUtils.removeAttributes(img,'align');
                        }

                        break;
                    case 'center':
                        if (me.queryCommandValue('imagefloat') != 'center') {
                            pN = img.parentNode;
                            domUtils.setStyle(img, 'float', '');
                            domUtils.removeAttributes(img,'align');
                            tmpNode = img;
                            while (pN && domUtils.getChildCount(pN, function (node) {
                                return !domUtils.isBr(node) && !domUtils.isWhitespace(node);
                            }) == 1
                                && (dtd.$inline[pN.tagName] || pN.tagName == 'A')) {
                                tmpNode = pN;
                                pN = pN.parentNode;
                            }
                            range.setStartBefore(tmpNode).setCursor(false);
                            pN = me.document.createElement('div');
                            pN.appendChild(tmpNode);
                            domUtils.setStyle(tmpNode, 'float', '');

                            me.execCommand('insertHtml', '<p id="_img_parent_tmp" style="text-align:center">' + pN.innerHTML + '</p>');

                            tmpNode = me.document.getElementById('_img_parent_tmp');
                            tmpNode.removeAttribute('id');
                            tmpNode = tmpNode.firstChild;
                            range.selectNode(tmpNode).select();
                            //去掉后边多余的元素
                            next = tmpNode.parentNode.nextSibling;
                            if (next && domUtils.isEmptyNode(next)) {
                                domUtils.remove(next);
                            }

                        }

                        break;
                }

            }
        }
    },
    queryCommandValue:function () {
        var range = this.selection.getRange(),
            startNode, floatStyle;
        if (range.collapsed) {
            return 'none';
        }
        startNode = range.getClosedNode();
        if (startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG') {
            floatStyle = startNode.getAttribute('align')||domUtils.getComputedStyle(startNode, 'float');
            if (floatStyle == 'none') {
                floatStyle = domUtils.getComputedStyle(startNode.parentNode, 'text-align') == 'center' ? 'center' : floatStyle;
            }
            return {
                left:1,
                right:1,
                center:1
            }[floatStyle] ? floatStyle : 'none';
        }
        return 'none';


    },
    queryCommandState:function () {
        var range = this.selection.getRange(),
            startNode;

        if (range.collapsed)  return -1;

        startNode = range.getClosedNode();
        if (startNode && startNode.nodeType == 1 && startNode.tagName == 'IMG') {
            return 0;
        }
        return -1;
    }
};

UE.commands['insertimage'] = {
    execCommand:function (cmd, opt) {

        opt = utils.isArray(opt) ? opt : [opt];
        if (!opt.length) {
            return;
        }
        var me = this,
            range = me.selection.getRange(),
            img = range.getClosedNode();
        if (img && /img/i.test(img.tagName) && img.className != "edui-faked-video" && !img.getAttribute("word_img")) {
            var first = opt.shift();
            var floatStyle = first['floatStyle'];
            delete first['floatStyle'];
////                img.style.border = (first.border||0) +"px solid #000";
////                img.style.margin = (first.margin||0) +"px";
//                img.style.cssText += ';margin:' + (first.margin||0) +"px;" + 'border:' + (first.border||0) +"px solid #000";
            domUtils.setAttributes(img, first);
            me.execCommand('imagefloat', floatStyle);
            if (opt.length > 0) {
                range.setStartAfter(img).setCursor(false, true);
                me.execCommand('insertimage', opt);
            }

        } else {
            var html = [], str = '', ci;
            ci = opt[0];
            if (opt.length == 1) {
                str = '<img src="' + ci.src + '" ' + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                    (ci.width ? 'width="' + ci.width + '" ' : '') +
                    (ci.height ? ' height="' + ci.height + '" ' : '') +
                    (ci['floatStyle'] == 'left' || ci['floatStyle'] == 'right' ? ' style="float:' + ci['floatStyle'] + ';"' : '') +
                    (ci.title && ci.title != "" ? ' title="' + ci.title + '"' : '') +
                    (ci.border && ci.border != "0" ? ' border="' + ci.border + '"' : '') +
                    (ci.alt && ci.alt != "" ? ' alt="' + ci.alt + '"' : '') +
                    (ci.hspace && ci.hspace != "0" ? ' hspace = "' + ci.hspace + '"' : '') +
                    (ci.vspace && ci.vspace != "0" ? ' vspace = "' + ci.vspace + '"' : '') + '/>';
                if (ci['floatStyle'] == 'center') {
                    str = '<p style="text-align: center">' + str + '</p>';
                }
                html.push(str);

            } else {
                for (var i = 0; ci = opt[i++];) {
                    str = '<p ' + (ci['floatStyle'] == 'center' ? 'style="text-align: center" ' : '') + '><img src="' + ci.src + '" ' +
                        (ci.width ? 'width="' + ci.width + '" ' : '') + (ci._src ? ' _src="' + ci._src + '" ' : '') +
                        (ci.height ? ' height="' + ci.height + '" ' : '') +
                        ' style="' + (ci['floatStyle'] && ci['floatStyle'] != 'center' ? 'float:' + ci['floatStyle'] + ';' : '') +
                        (ci.border || '') + '" ' +
                        (ci.title ? ' title="' + ci.title + '"' : '') + ' /></p>';
                    html.push(str);
                }
            }

            me.execCommand('insertHtml', html.join(''));
        }
    }
};
///import core
///commands 段落格式,居左,居右,居中,两端对齐
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  居左对齐,居中对齐,居右对齐,两端对齐
/**
 * @description 居左右中
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     justify执行对齐方式的命令
 * @param   {String}   align               对齐方式：left居左，right居右，center居中，justify两端对齐
 * @author zhanyi
 */
UE.plugins['justify']=function(){
    var me=this,
        block = domUtils.isBlockElm,
        defaultValue = {
            left:1,
            right:1,
            center:1,
            justify:1
        },
        doJustify = function (range, style) {
            var bookmark = range.createBookmark(),
                filterFn = function (node) {
                    return node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' && !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
                };

            range.enlarge(true);
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode(bookmark2.start, false, filterFn),
                tmpRange = range.cloneRange(),
                tmpNode;
            while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {
                if (current.nodeType == 3 || !block(current)) {
                    tmpRange.setStartBefore(current);
                    while (current && current !== bookmark2.end && !block(current)) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode(current, false, null, function (node) {
                            return !block(node);
                        });
                    }
                    tmpRange.setEndAfter(tmpNode);
                    var common = tmpRange.getCommonAncestor();
                    if (!domUtils.isBody(common) && block(common)) {
                        domUtils.setStyles(common, utils.isString(style) ? {'text-align':style} : style);
                        current = common;
                    } else {
                        var p = range.document.createElement('p');
                        domUtils.setStyles(p, utils.isString(style) ? {'text-align':style} : style);
                        var frag = tmpRange.extractContents();
                        p.appendChild(frag);
                        tmpRange.insertNode(p);
                        current = p;
                    }
                    current = domUtils.getNextDomNode(current, false, filterFn);
                } else {
                    current = domUtils.getNextDomNode(current, true, filterFn);
                }
            }
            return range.moveToBookmark(bookmark2).moveToBookmark(bookmark);
        };

    UE.commands['justify'] = {
        execCommand:function (cmdName, align) {
            var range = this.selection.getRange(),
                txt;

            //闭合时单独处理
            if (range.collapsed) {
                txt = this.document.createTextNode('p');
                range.insertNode(txt);
            }
            doJustify(range, align);
            if (txt) {
                range.setStartBefore(txt).collapse(true);
                domUtils.remove(txt);
            }

            range.select();


            return true;
        },
        queryCommandValue:function () {
            var startNode = this.selection.getStart(),
                value = domUtils.getComputedStyle(startNode, 'text-align');
            return defaultValue[value] ? value : 'left';
        },
        queryCommandState:function () {
            var start = this.selection.getStart(),
                cell = start && domUtils.findParentByTagName(start, ["td", "th","caption"], true);

            return cell? -1:0;
        }

    };
};

///import core
///import plugins\removeformat.js
///commands 字体颜色,背景色,字号,字体,下划线,删除线
///commandsName  ForeColor,BackColor,FontSize,FontFamily,Underline,StrikeThrough
///commandsTitle  字体颜色,背景色,字号,字体,下划线,删除线
/**
 * @description 字体
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    执行的功能名称
 * @param {String}    value             传入的值
 */
UE.plugins['font'] = function () {
    var me = this,
        fonts = {
            'forecolor': 'color',
            'backcolor': 'background-color',
            'fontsize': 'font-size',
            'fontfamily': 'font-family',
            'underline': 'text-decoration',
            'strikethrough': 'text-decoration',
            'fontborder': 'border'
        },
        needCmd = {'underline': 1, 'strikethrough': 1, 'fontborder': 1},
        needSetChild = {
            'forecolor': 'color',
            'backcolor': 'background-color',
            'fontsize': 'font-size',
            'fontfamily': 'font-family'

        };
    me.setOpt({
        'fontfamily': [
            { name: 'songti', val: '宋体,SimSun'},
            { name: 'yahei', val: '微软雅黑,Microsoft YaHei'},
            { name: 'kaiti', val: '楷体,楷体_GB2312, SimKai'},
            { name: 'heiti', val: '黑体, SimHei'},
            { name: 'lishu', val: '隶书, SimLi'},
            { name: 'andaleMono', val: 'andale mono'},
            { name: 'arial', val: 'arial, helvetica,sans-serif'},
            { name: 'arialBlack', val: 'arial black,avant garde'},
            { name: 'comicSansMs', val: 'comic sans ms'},
            { name: 'impact', val: 'impact,chicago'},
            { name: 'timesNewRoman', val: 'times new roman'}
        ],
        'fontsize': [10, 11, 12, 14, 16, 18, 20, 24, 36]
    });

    function mergeWithParent(node){
        var parent;
        while(parent = node.parentNode){
            if(parent.tagName == 'SPAN' && domUtils.getChildCount(parent,function(child){
                return !domUtils.isBookmarkNode(child) && !domUtils.isBr(child)
            }) == 1) {
                parent.style.cssText += node.style.cssText;
                domUtils.remove(node,true);
                node = parent;

            }else{
                break;
            }
        }

    }
    function mergeChild(rng,cmdName,value){
        if(needSetChild[cmdName]){
            rng.adjustmentBoundary();
            if(!rng.collapsed && rng.startContainer.nodeType == 1){
                var start = rng.startContainer.childNodes[rng.startOffset];
                if(start && domUtils.isTagNode(start,'span')){
                    var bk = rng.createBookmark();
                    utils.each(domUtils.getElementsByTagName(start, 'span'), function (span) {
                        if (!span.parentNode || domUtils.isBookmarkNode(span))return;
                        if(cmdName == 'backcolor' && domUtils.getComputedStyle(span,'background-color').toLowerCase() === value){
                            return;
                        }
                        domUtils.removeStyle(span,needSetChild[cmdName]);
                        if(span.style.cssText.replace(/^\s+$/,'').length == 0){
                            domUtils.remove(span,true)
                        }
                    });
                    rng.moveToBookmark(bk)
                }
            }
        }

    }
    function mergesibling(rng,cmdName,value) {
        var collapsed = rng.collapsed,
            bk = rng.createBookmark(), common;
        if (collapsed) {
            common = bk.start.parentNode;
            while (dtd.$inline[common.tagName]) {
                common = common.parentNode;
            }
        } else {
            common = domUtils.getCommonAncestor(bk.start, bk.end);
        }
        utils.each(domUtils.getElementsByTagName(common, 'span'), function (span) {
            if (!span.parentNode || domUtils.isBookmarkNode(span))return;
            if (/\s*border\s*:\s*none;?\s*/i.test(span.style.cssText)) {
                if(/^\s*border\s*:\s*none;?\s*$/.test(span.style.cssText)){
                    domUtils.remove(span, true);
                }else{
                    domUtils.removeStyle(span,'border');
                }
                return
            }
            if (/border/i.test(span.style.cssText) && span.parentNode.tagName == 'SPAN' && /border/i.test(span.parentNode.style.cssText)) {
                span.style.cssText = span.style.cssText.replace(/border[^:]*:[^;]+;?/gi, '');
            }
            if(!(cmdName=='fontborder' && value=='none')){
                var next = span.nextSibling;
                while (next && next.nodeType == 1 && next.tagName == 'SPAN' ) {
                    if(domUtils.isBookmarkNode(next) && cmdName == 'fontborder') {
                        span.appendChild(next);
                        next = span.nextSibling;
                        continue;
                    }
                    if (next.style.cssText == span.style.cssText) {
                        domUtils.moveChild(next, span);
                        domUtils.remove(next);
                    }
                    if (span.nextSibling === next)
                        break;
                    next = span.nextSibling;
                }
            }


            mergeWithParent(span);
            if(browser.ie && browser.version > 8 ){
                //拷贝父亲们的特别的属性,这里只做背景颜色的处理
                var parent = domUtils.findParent(span,function(n){return n.tagName == 'SPAN' && /background-color/.test(n.style.cssText)});
                if(parent && !/background-color/.test(span.style.cssText)){
                    span.style.backgroundColor = parent.style.backgroundColor;
                }
            }

        });
        rng.moveToBookmark(bk);
        mergeChild(rng,cmdName,value)
    }

    me.addInputRule(function (root) {
        utils.each(root.getNodesByTagName('u s del font strike'), function (node) {
            if (node.tagName == 'font') {
                var cssStyle = [];
                for (var p in node.attrs) {
                    switch (p) {
                        case 'size':
                            cssStyle.push('font-size:' + node.attrs[p] + 'px');
                            break;
                        case 'color':
                            cssStyle.push('color:' + node.attrs[p]);
                            break;
                        case 'face':
                            cssStyle.push('font-family:' + node.attrs[p]);
                            break;
                        case 'style':
                            cssStyle.push(node.attrs[p]);
                    }
                }
                node.attrs = {
                    'style': cssStyle.join(';')
                };
            } else {
                var val = node.tagName == 'u' ? 'underline' : 'line-through';
                node.attrs = {
                    'style': (node.getAttr('style') || '') + 'text-decoration:' + val + ';'
                }
            }
            node.tagName = 'span';
        });
//        utils.each(root.getNodesByTagName('span'), function (node) {
//            var val;
//            if(val = node.getAttr('class')){
//                if(/fontstrikethrough/.test(val)){
//                    node.setStyle('text-decoration','line-through');
//                    if(node.attrs['class']){
//                        node.attrs['class'] = node.attrs['class'].replace(/fontstrikethrough/,'');
//                    }else{
//                        node.setAttr('class')
//                    }
//                }
//                if(/fontborder/.test(val)){
//                    node.setStyle('border','1px solid #000');
//                    if(node.attrs['class']){
//                        node.attrs['class'] = node.attrs['class'].replace(/fontborder/,'');
//                    }else{
//                        node.setAttr('class')
//                    }
//                }
//            }
//        });
    });
//    me.addOutputRule(function(root){
//        utils.each(root.getNodesByTagName('span'), function (node) {
//            var val;
//            if(val = node.getStyle('text-decoration')){
//                if(/line-through/.test(val)){
//                    if(node.attrs['class']){
//                        node.attrs['class'] += ' fontstrikethrough';
//                    }else{
//                        node.setAttr('class','fontstrikethrough')
//                    }
//                }
//
//                node.setStyle('text-decoration')
//            }
//            if(val = node.getStyle('border')){
//                if(/1px/.test(val) && /solid/.test(val)){
//                    if(node.attrs['class']){
//                        node.attrs['class'] += ' fontborder';
//
//                    }else{
//                        node.setAttr('class','fontborder')
//                    }
//                }
//                node.setStyle('border')
//
//            }
//        });
//    });
    for (var p in fonts) {
        (function (cmd, style) {
            UE.commands[cmd] = {
                execCommand: function (cmdName, value) {
                    value = value || (this.queryCommandState(cmdName) ? 'none' : cmdName == 'underline' ? 'underline' :
                        cmdName == 'fontborder' ? '1px solid #000' :
                            'line-through');
                    var me = this,
                        range = this.selection.getRange(),
                        text;

                    if (value == 'default') {

                        if (range.collapsed) {
                            text = me.document.createTextNode('font');
                            range.insertNode(text).select();

                        }
                        me.execCommand('removeFormat', 'span,a', style);
                        if (text) {
                            range.setStartBefore(text).collapse(true);
                            domUtils.remove(text);
                        }
                        mergesibling(range,cmdName,value);
                        range.select()
                    } else {
                        if (!range.collapsed) {
                            if (needCmd[cmd] && me.queryCommandValue(cmd)) {
                                me.execCommand('removeFormat', 'span,a', style);
                            }
                            range = me.selection.getRange();

                            range.applyInlineStyle('span', {'style': style + ':' + value});
                            mergesibling(range, cmdName,value);
                            range.select();
                        } else {

                            var span = domUtils.findParentByTagName(range.startContainer, 'span', true);
                            text = me.document.createTextNode('font');
                            if (span && !span.children.length && !span[browser.ie ? 'innerText' : 'textContent'].replace(fillCharReg, '').length) {
                                //for ie hack when enter
                                range.insertNode(text);
                                if (needCmd[cmd]) {
                                    range.selectNode(text).select();
                                    me.execCommand('removeFormat', 'span,a', style, null);

                                    span = domUtils.findParentByTagName(text, 'span', true);
                                    range.setStartBefore(text);

                                }
                                span && (span.style.cssText += ';' + style + ':' + value);
                                range.collapse(true).select();


                            } else {
                                range.insertNode(text);
                                range.selectNode(text).select();
                                span = range.document.createElement('span');

                                if (needCmd[cmd]) {
                                    //a标签内的不处理跳过
                                    if (domUtils.findParentByTagName(text, 'a', true)) {
                                        range.setStartBefore(text).setCursor();
                                        domUtils.remove(text);
                                        return;
                                    }
                                    me.execCommand('removeFormat', 'span,a', style);
                                }

                                span.style.cssText = style + ':' + value;


                                text.parentNode.insertBefore(span, text);
                                //修复，span套span 但样式不继承的问题
                                if (!browser.ie || browser.ie && browser.version == 9) {
                                    var spanParent = span.parentNode;
                                    while (!domUtils.isBlockElm(spanParent)) {
                                        if (spanParent.tagName == 'SPAN') {
                                            //opera合并style不会加入";"
                                            span.style.cssText = spanParent.style.cssText + ";" + span.style.cssText;
                                        }
                                        spanParent = spanParent.parentNode;
                                    }
                                }


                                if (opera) {
                                    setTimeout(function () {
                                        range.setStart(span, 0).collapse(true);
                                        mergesibling(range, cmdName,value);
                                        range.select();
                                    });
                                } else {
                                    range.setStart(span, 0).collapse(true);
                                    mergesibling(range,cmdName,value);
                                    range.select();
                                }

                                //trace:981
                                //domUtils.mergeToParent(span)
                            }
                            domUtils.remove(text);
                        }


                    }
                    return true;
                },
                queryCommandValue: function (cmdName) {
                    var startNode = this.selection.getStart();

                    //trace:946
                    if (cmdName == 'underline' || cmdName == 'strikethrough') {
                        var tmpNode = startNode, value;
                        while (tmpNode && !domUtils.isBlockElm(tmpNode) && !domUtils.isBody(tmpNode)) {
                            if (tmpNode.nodeType == 1) {
                                value = domUtils.getComputedStyle(tmpNode, style);

                                if (value != 'none') {
                                    return value;
                                }
                            }

                            tmpNode = tmpNode.parentNode;
                        }
                        return 'none';
                    }
                    if (cmdName == 'fontborder') {
                        var tmp = startNode, val;
                        while (tmp && dtd.$inline[tmp.tagName]) {
                            if (val = domUtils.getComputedStyle(tmp, 'border')) {
                                if (/1px/.test(val) && /solid/.test(val)) {
                                    return val;
                                }
                            }
                            tmp = tmp.parentNode;
                        }
                        return ''
                    }

                    if( cmdName == 'FontSize' ) {
                        var styleVal = domUtils.getComputedStyle(startNode, style),
                            tmp = /^([\d\.]+)(\w+)$/.exec( styleVal );

                        if( tmp ) {

                            return Math.floor( tmp[1] ) + tmp[2];

                        }

                        return styleVal;

                    }

                    return  domUtils.getComputedStyle(startNode, style);
                },
                queryCommandState: function (cmdName) {
                    if (!needCmd[cmdName])
                        return 0;
                    var val = this.queryCommandValue(cmdName);
                    if (cmdName == 'fontborder') {
                        return /1px/.test(val) && /solid/.test(val)
                    } else {
                        return  val == (cmdName == 'underline' ?
                            'underline' : 'line-through');
                    }

                }
            };
        })(p, fonts[p]);
    }
};
///import core
///commands 超链接,取消链接
///commandsName  Link,Unlink
///commandsTitle  超链接,取消链接
///commandsDialog  dialogs\link
/**
 * 超链接
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     link插入超链接
 * @param   {Object}  options         url地址，title标题，target是否打开新页
 * @author zhanyi
 */
/**
 * 取消链接
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     unlink取消链接
 * @author zhanyi
 */

UE.plugins['link'] = function(){
    function optimize( range ) {
        var start = range.startContainer,end = range.endContainer;

        if ( start = domUtils.findParentByTagName( start, 'a', true ) ) {
            range.setStartBefore( start );
        }
        if ( end = domUtils.findParentByTagName( end, 'a', true ) ) {
            range.setEndAfter( end );
        }
    }


    UE.commands['unlink'] = {
        execCommand : function() {
            var range = this.selection.getRange(),
                bookmark;
            if(range.collapsed && !domUtils.findParentByTagName( range.startContainer, 'a', true )){
                return;
            }
            bookmark = range.createBookmark();
            optimize( range );
            range.removeInlineStyle( 'a' ).moveToBookmark( bookmark ).select();
        },
        queryCommandState : function(){
            return !this.highlight && this.queryCommandValue('link') ?  0 : -1;
        }

    };   
    
    function doLink(range,opt,me){
        var rngClone = range.cloneRange(),
            link = me.queryCommandValue('link');
        optimize( range = range.adjustmentBoundary() );
        var start = range.startContainer;
        if(start.nodeType == 1 && link){
            start = start.childNodes[range.startOffset];
            if(start && start.nodeType == 1 && start.tagName == 'A' && /^(?:https?|ftp|file)\s*:\s*\/\//.test(start[browser.ie?'innerText':'textContent'])){
                start[browser.ie ? 'innerText' : 'textContent'] =  utils.html(opt.textValue||opt.href);

            }
        }
        if( !rngClone.collapsed || link){
            range.removeInlineStyle( 'a' );
            rngClone = range.cloneRange();
        }

        if ( rngClone.collapsed ) {
            var a = range.document.createElement( 'a'),
                text = '';
            if(opt.textValue){

                text =   utils.html(opt.textValue);
                delete opt.textValue;
            }else{
                text =   utils.html(opt.href);

            }
            domUtils.setAttributes( a, opt );
            start =  domUtils.findParentByTagName( rngClone.startContainer, 'a', true );
            if(start && domUtils.isInNodeEndBoundary(rngClone,start)){
                range.setStartAfter(start).collapse(true);

            }
            a[browser.ie ? 'innerText' : 'textContent'] = text;
            range.insertNode(a).selectNode( a );
        } else {
            range.applyInlineStyle( 'a', opt );

        }
    }
    UE.commands['link'] = {
        execCommand : function( cmdName, opt ) {
            var range;
            opt._href && (opt._href = utils.unhtml(opt._href,/[<">]/g));
            opt.href && (opt.href = utils.unhtml(opt.href,/[<">]/g));
            opt.textValue && (opt.textValue = utils.unhtml(opt.textValue,/[<">]/g));
            doLink(range=this.selection.getRange(),opt,this);
            //闭合都不加占位符，如果加了会在a后边多个占位符节点，导致a是图片背景组成的列表，出现空白问题
            range.collapse().select(true);

        },
        queryCommandValue : function() {
            var range = this.selection.getRange(),
                node;
            if ( range.collapsed ) {
//                    node = this.selection.getStart();
                //在ie下getstart()取值偏上了
                node = range.startContainer;
                node = node.nodeType == 1 ? node : node.parentNode;

                if ( node && (node = domUtils.findParentByTagName( node, 'a', true )) && ! domUtils.isInNodeEndBoundary(range,node)) {

                    return node;
                }
            } else {
                //trace:1111  如果是<p><a>xx</a></p> startContainer是p就会找不到a
                range.shrinkBoundary();
                var start = range.startContainer.nodeType  == 3 || !range.startContainer.childNodes[range.startOffset] ? range.startContainer : range.startContainer.childNodes[range.startOffset],
                    end =  range.endContainer.nodeType == 3 || range.endOffset == 0 ? range.endContainer : range.endContainer.childNodes[range.endOffset-1],
                    common = range.getCommonAncestor();
                node = domUtils.findParentByTagName( common, 'a', true );
                if ( !node && common.nodeType == 1){

                    var as = common.getElementsByTagName( 'a' ),
                        ps,pe;

                    for ( var i = 0,ci; ci = as[i++]; ) {
                        ps = domUtils.getPosition( ci, start ),pe = domUtils.getPosition( ci,end);
                        if ( (ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                            &&
                            (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                            ) {
                            node = ci;
                            break;
                        }
                    }
                }
                return node;
            }

        },
        queryCommandState : function() {
            //判断如果是视频的话连接不可用
            //fix 853
            var img = this.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return flag ? -1 : 0;
        }
    };
};
///import core
///import plugins\inserthtml.js
///commands 插入框架
///commandsName  InsertFrame
///commandsTitle  插入Iframe
///commandsDialog  dialogs\insertframe

UE.plugins['insertframe'] = function() {
   var me =this;
    function deleteIframe(){
        me._iframe && delete me._iframe;
    }

    me.addListener("selectionchange",function(){
        deleteIframe();
    });

};


///import core
///commands 涂鸦
///commandsName  Scrawl
///commandsTitle  涂鸦
///commandsDialog  dialogs\scrawl
UE.commands['scrawl'] = {
    queryCommandState : function(){
        return ( browser.ie && browser.version  <= 8 ) ? -1 :0;
    }
};

///import core
///commands 清除格式
///commandsName  RemoveFormat
///commandsTitle  清除格式
/**
 * @description 清除格式
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     removeformat清除格式命令
 * @param   {String}   tags                以逗号隔开的标签。如：span,a
 * @param   {String}   style               样式
 * @param   {String}   attrs               属性
 * @param   {String}   notIncluedA    是否把a标签切开
 * @author zhanyi
 */
UE.plugins['removeformat'] = function(){
    var me = this;
    me.setOpt({
       'removeFormatTags': 'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var',
       'removeFormatAttributes':'class,style,lang,width,height,align,hspace,valign'
    });
    me.commands['removeformat'] = {
        execCommand : function( cmdName, tags, style, attrs,notIncludeA ) {

            var tagReg = new RegExp( '^(?:' + (tags || this.options.removeFormatTags).replace( /,/g, '|' ) + ')$', 'i' ) ,
                removeFormatAttributes = style ? [] : (attrs || this.options.removeFormatAttributes).split( ',' ),
                range = new dom.Range( this.document ),
                bookmark,node,parent,
                filter = function( node ) {
                    return node.nodeType == 1;
                };

            function isRedundantSpan (node) {
                if (node.nodeType == 3 || node.tagName.toLowerCase() != 'span'){
                    return 0;
                }
                if (browser.ie) {
                    //ie 下判断实效，所以只能简单用style来判断
                    //return node.style.cssText == '' ? 1 : 0;
                    var attrs = node.attributes;
                    if ( attrs.length ) {
                        for ( var i = 0,l = attrs.length; i<l; i++ ) {
                            if ( attrs[i].specified ) {
                                return 0;
                            }
                        }
                        return 1;
                    }
                }
                return !node.attributes.length;
            }
            function doRemove( range ) {

                var bookmark1 = range.createBookmark();
                if ( range.collapsed ) {
                    range.enlarge( true );
                }

                //不能把a标签切了
                if(!notIncludeA){
                    var aNode = domUtils.findParentByTagName(range.startContainer,'a',true);
                    if(aNode){
                        range.setStartBefore(aNode);
                    }

                    aNode = domUtils.findParentByTagName(range.endContainer,'a',true);
                    if(aNode){
                        range.setEndAfter(aNode);
                    }

                }


                bookmark = range.createBookmark();

                node = bookmark.start;

                //切开始
                while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                    domUtils.breakParent( node, parent );

                    domUtils.clearEmptySibling( node );
                }
                if ( bookmark.end ) {
                    //切结束
                    node = bookmark.end;
                    while ( (parent = node.parentNode) && !domUtils.isBlockElm( parent ) ) {
                        domUtils.breakParent( node, parent );
                        domUtils.clearEmptySibling( node );
                    }

                    //开始去除样式
                    var current = domUtils.getNextDomNode( bookmark.start, false, filter ),
                        next;
                    while ( current ) {
                        if ( current == bookmark.end ) {
                            break;
                        }

                        next = domUtils.getNextDomNode( current, true, filter );

                        if ( !dtd.$empty[current.tagName.toLowerCase()] && !domUtils.isBookmarkNode( current ) ) {
                            if ( tagReg.test( current.tagName ) ) {
                                if ( style ) {
                                    domUtils.removeStyle( current, style );
                                    if ( isRedundantSpan( current ) && style != 'text-decoration'){
                                        domUtils.remove( current, true );
                                    }
                                } else {
                                    domUtils.remove( current, true );
                                }
                            } else {
                                //trace:939  不能把list上的样式去掉
                                if(!dtd.$tableContent[current.tagName] && !dtd.$list[current.tagName]){
                                    domUtils.removeAttributes( current, removeFormatAttributes );
                                    if ( isRedundantSpan( current ) ){
                                        domUtils.remove( current, true );
                                    }
                                }

                            }
                        }
                        current = next;
                    }
                }
                //trace:1035
                //trace:1096 不能把td上的样式去掉，比如边框
                var pN = bookmark.start.parentNode;
                if(domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName] && !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                pN = bookmark.end.parentNode;
                if(bookmark.end && domUtils.isBlockElm(pN) && !dtd.$tableContent[pN.tagName]&& !dtd.$list[pN.tagName]){
                    domUtils.removeAttributes(  pN,removeFormatAttributes );
                }
                range.moveToBookmark( bookmark ).moveToBookmark(bookmark1);
                //清除冗余的代码 <b><bookmark></b>
                var node = range.startContainer,
                    tmp,
                    collapsed = range.collapsed;
                while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                    tmp = node.parentNode;
                    range.setStartBefore(node);
                    //trace:937
                    //更新结束边界
                    if(range.startContainer === range.endContainer){
                        range.endOffset--;
                    }
                    domUtils.remove(node);
                    node = tmp;
                }

                if(!collapsed){
                    node = range.endContainer;
                    while(node.nodeType == 1 && domUtils.isEmptyNode(node) && dtd.$removeEmpty[node.tagName]){
                        tmp = node.parentNode;
                        range.setEndBefore(node);
                        domUtils.remove(node);

                        node = tmp;
                    }


                }
            }



            range = this.selection.getRange();
            doRemove( range );
            range.select();

        }

    };

};

///import core
///commands 引用
///commandsName  BlockQuote
///commandsTitle  引用
/**
 * 
 * 引用模块实现
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     blockquote引用
 */


UE.plugins['blockquote'] = function(){
    var me = this;
    function getObj(editor){
        return domUtils.filterNodeList(editor.selection.getStartElementPath(),'blockquote');
    }
    me.commands['blockquote'] = {
        execCommand : function( cmdName, attrs ) {
            var range = this.selection.getRange(),
                obj = getObj(this),
                blockquote = dtd.blockquote,
                bookmark = range.createBookmark();

            if ( obj ) {

                    var start = range.startContainer,
                        startBlock = domUtils.isBlockElm(start) ? start : domUtils.findParent(start,function(node){return domUtils.isBlockElm(node)}),

                        end = range.endContainer,
                        endBlock = domUtils.isBlockElm(end) ? end :  domUtils.findParent(end,function(node){return domUtils.isBlockElm(node)});

                    //处理一下li
                    startBlock = domUtils.findParentByTagName(startBlock,'li',true) || startBlock;
                    endBlock = domUtils.findParentByTagName(endBlock,'li',true) || endBlock;


                    if(startBlock.tagName == 'LI' || startBlock.tagName == 'TD' || startBlock === obj || domUtils.isBody(startBlock)){
                        domUtils.remove(obj,true);
                    }else{
                        domUtils.breakParent(startBlock,obj);
                    }

                    if(startBlock !== endBlock){
                        obj = domUtils.findParentByTagName(endBlock,'blockquote');
                        if(obj){
                            if(endBlock.tagName == 'LI' || endBlock.tagName == 'TD'|| domUtils.isBody(endBlock)){
                                obj.parentNode && domUtils.remove(obj,true);
                            }else{
                                domUtils.breakParent(endBlock,obj);
                            }

                        }
                    }

                    var blockquotes = domUtils.getElementsByTagName(this.document,'blockquote');
                    for(var i=0,bi;bi=blockquotes[i++];){
                        if(!bi.childNodes.length){
                            domUtils.remove(bi);
                        }else if(domUtils.getPosition(bi,startBlock)&domUtils.POSITION_FOLLOWING && domUtils.getPosition(bi,endBlock)&domUtils.POSITION_PRECEDING){
                            domUtils.remove(bi,true);
                        }
                    }




            } else {

                var tmpRange = range.cloneRange(),
                    node = tmpRange.startContainer.nodeType == 1 ? tmpRange.startContainer : tmpRange.startContainer.parentNode,
                    preNode = node,
                    doEnd = 1;

                //调整开始
                while ( 1 ) {
                    if ( domUtils.isBody(node) ) {
                        if ( preNode !== node ) {
                            if ( range.collapsed ) {
                                tmpRange.selectNode( preNode );
                                doEnd = 0;
                            } else {
                                tmpRange.setStartBefore( preNode );
                            }
                        }else{
                            tmpRange.setStart(node,0);
                        }

                        break;
                    }
                    if ( !blockquote[node.tagName] ) {
                        if ( range.collapsed ) {
                            tmpRange.selectNode( preNode );
                        } else{
                            tmpRange.setStartBefore( preNode);
                        }
                        break;
                    }

                    preNode = node;
                    node = node.parentNode;
                }

                //调整结束
                if ( doEnd ) {
                    preNode = node =  node = tmpRange.endContainer.nodeType == 1 ? tmpRange.endContainer : tmpRange.endContainer.parentNode;
                    while ( 1 ) {

                        if ( domUtils.isBody( node ) ) {
                            if ( preNode !== node ) {

                                tmpRange.setEndAfter( preNode );

                            } else {
                                tmpRange.setEnd( node, node.childNodes.length );
                            }

                            break;
                        }
                        if ( !blockquote[node.tagName] ) {
                            tmpRange.setEndAfter( preNode );
                            break;
                        }

                        preNode = node;
                        node = node.parentNode;
                    }

                }


                node = range.document.createElement( 'blockquote' );
                domUtils.setAttributes( node, attrs );
                node.appendChild( tmpRange.extractContents() );
                tmpRange.insertNode( node );
                //去除重复的
                var childs = domUtils.getElementsByTagName(node,'blockquote');
                for(var i=0,ci;ci=childs[i++];){
                    if(ci.parentNode){
                        domUtils.remove(ci,true);
                    }
                }

            }
            range.moveToBookmark( bookmark ).select();
        },
        queryCommandState : function() {
            return getObj(this) ? 1 : 0;
        }
    };
};


///import core
///commands 大小写转换
///commandsName touppercase,tolowercase
///commandsTitle  大写,小写
/**
 * 大小写转换
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName     cmdName="convertcase"
 */
UE.commands['touppercase'] =
UE.commands['tolowercase'] = {
    execCommand:function (cmd) {
        var me = this;
        var rng = me.selection.getRange();
        if(rng.collapsed){
            return rng;
        }
        var bk = rng.createBookmark(),
            bkEnd = bk.end,
            filterFn = function( node ) {
                return !domUtils.isBr(node) && !domUtils.isWhitespace( node );
            },
            curNode = domUtils.getNextDomNode( bk.start, false, filterFn );
        while ( curNode && (domUtils.getPosition( curNode, bkEnd ) & domUtils.POSITION_PRECEDING) ) {

            if ( curNode.nodeType == 3 ) {
                curNode.nodeValue = curNode.nodeValue[cmd == 'touppercase' ? 'toUpperCase' : 'toLowerCase']();
            }
            curNode = domUtils.getNextDomNode( curNode, true, filterFn );
            if(curNode === bkEnd){
                break;
            }

        }
        rng.moveToBookmark(bk).select();
    }
};


///import core
///import plugins\paragraph.js
///commands 首行缩进
///commandsName  Outdent,Indent
///commandsTitle  取消缩进,首行缩进
/**
 * 首行缩进
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     outdent取消缩进，indent缩进
 */
UE.commands['indent'] = {
    execCommand : function() {
         var me = this,value = me.queryCommandState("indent") ? "0em" : (me.options.indentValue || '2em');
         me.execCommand('Paragraph','p',{style:'text-indent:'+ value});
    },
    queryCommandState : function() {
        var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
        return pN && pN.style.textIndent && parseInt(pN.style.textIndent) ?  1 : 0;
    }

};

///import core
///commands 打印
///commandsName  Print
///commandsTitle  打印
/**
 * @description 打印
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     print打印编辑器内容
 * @author zhanyi
 */
UE.commands['print'] = {
    execCommand : function(){
        this.window.print();
    },
    notNeedUndo : 1
};


///import core
///commands 预览
///commandsName  Preview
///commandsTitle  预览
/**
 * 预览
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     preview预览编辑器内容
 */
UE.commands['preview'] = {
    execCommand : function(){
        var w = window.open('', '_blank', ''),
            d = w.document;
        d.open();
        d.write('<html><head><script src="'+this.options.UEDITOR_HOME_URL+'ueditor.parse.js"></script><script>' +
            "setTimeout(function(){uParse('div',{" +
            "    'highlightJsUrl':'"+this.options.UEDITOR_HOME_URL+"third-party/SyntaxHighlighter/shCore.js'," +
                "    'highlightCssUrl':'"+this.options.UEDITOR_HOME_URL+"third-party/SyntaxHighlighter/shCoreDefault.css'" +
            "})},300)" +
            '</script></head><body><div>'+this.getContent(null,null,true)+'</div></body></html>');
        d.close();
    },
    notNeedUndo : 1
};

///import core
///commands 全选
///commandsName  SelectAll
///commandsTitle  全选
/**
 * 选中所有
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    selectall选中编辑器里的所有内容
 * @author zhanyi
*/
UE.plugins['selectall'] = function(){
    var me = this;
    me.commands['selectall'] = {
        execCommand : function(){
            //去掉了原生的selectAll,因为会出现报错和当内容为空时，不能出现闭合状态的光标
            var me = this,body = me.body,
                range = me.selection.getRange();
            range.selectNodeContents(body);
            if(domUtils.isEmptyBlock(body)){
                //opera不能自动合并到元素的里边，要手动处理一下
                if(browser.opera && body.firstChild && body.firstChild.nodeType == 1){
                    range.setStartAtFirst(body.firstChild);
                }
                range.collapse(true);
            }
            range.select(true);
        },
        notNeedUndo : 1
    };


    //快捷键
    me.addshortcutkey({
         "selectAll" : "ctrl+65"
    });
};

///import core
///commands 格式
///commandsName  Paragraph
///commandsTitle  段落格式
/**
 * 段落样式
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     paragraph插入段落执行命令
 * @param   {String}   style               标签值为：'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
 * @param   {String}   attrs               标签的属性
 * @author zhanyi
 */
UE.plugins['paragraph'] = function() {
    var me = this,
        block = domUtils.isBlockElm,
        notExchange = ['TD','LI','PRE'],

        doParagraph = function(range,style,attrs,sourceCmdName){
            var bookmark = range.createBookmark(),
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' &&  !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace( node );
                },
                para;

            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current && !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    
                    para = range.document.createElement( style );
                    if(attrs){
                        domUtils.setAttributes(para,attrs);
                        if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                            para.style.cssText = attrs.style;
                        }
                    }
                    para.appendChild( tmpRange.extractContents() );
                    //需要内容占位
                    if(domUtils.isEmptyNode(para)){
                        domUtils.fillChar(range.document,para);
                        
                    }

                    tmpRange.insertNode( para );

                    var parent = para.parentNode;
                    //如果para上一级是一个block元素且不是body,td就删除它
                    if ( block( parent ) && !domUtils.isBody( para.parentNode ) && utils.indexOf(notExchange,parent.tagName)==-1) {
                        //存储dir,style
                        if(!(sourceCmdName && sourceCmdName == 'customstyle')){
                            parent.getAttribute('dir') && para.setAttribute('dir',parent.getAttribute('dir'));
                            //trace:1070
                            parent.style.cssText && (para.style.cssText = parent.style.cssText + ';' + para.style.cssText);
                            //trace:1030
                            parent.style.textAlign && !para.style.textAlign && (para.style.textAlign = parent.style.textAlign);
                            parent.style.textIndent && !para.style.textIndent && (para.style.textIndent = parent.style.textIndent);
                            parent.style.padding && !para.style.padding && (para.style.padding = parent.style.padding);
                        }

                        //trace:1706 选择的就是h1-6要删除
                        if(attrs && /h\d/i.test(parent.tagName) && !/h\d/i.test(para.tagName) ){
                            domUtils.setAttributes(parent,attrs);
                            if(sourceCmdName && sourceCmdName == 'customstyle' && attrs.style){
                                parent.style.cssText = attrs.style;
                            }
                            domUtils.remove(para,true);
                            para = parent;
                        }else{
                            domUtils.remove( para.parentNode, true );
                        }

                    }
                    if(  utils.indexOf(notExchange,parent.tagName)!=-1){
                        current = parent;
                    }else{
                       current = para;
                    }


                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    me.setOpt('paragraph',{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''});
    me.commands['paragraph'] = {
        execCommand : function( cmdName, style,attrs,sourceCmdName ) {
            var range = this.selection.getRange();
             //闭合时单独处理
            if(range.collapsed){
                var txt = this.document.createTextNode('p');
                range.insertNode(txt);
                //去掉冗余的fillchar
                if(browser.ie){
                    var node = txt.previousSibling;
                    if(node && domUtils.isWhitespace(node)){
                        domUtils.remove(node);
                    }
                    node = txt.nextSibling;
                    if(node && domUtils.isWhitespace(node)){
                        domUtils.remove(node);
                    }
                }

            }
            range = doParagraph(range,style,attrs,sourceCmdName);
            if(txt){
                range.setStartBefore(txt).collapse(true);
                pN = txt.parentNode;

                domUtils.remove(txt);

                if(domUtils.isBlockElm(pN)&&domUtils.isEmptyNode(pN)){
                    domUtils.fillNode(this.document,pN);
                }

            }

            if(browser.gecko && range.collapsed && range.startContainer.nodeType == 1){
                var child = range.startContainer.childNodes[range.startOffset];
                if(child && child.nodeType == 1 && child.tagName.toLowerCase() == style){
                    range.setStart(child,0).collapse(true);
                }
            }
            //trace:1097 原来有true，原因忘了，但去了就不能清除多余的占位符了
            range.select();


            return true;
        },
        queryCommandValue : function() {
            var node = domUtils.filterNodeList(this.selection.getStartElementPath(),'p h1 h2 h3 h4 h5 h6');
            return node ? node.tagName.toLowerCase() : '';
        }
    };
};

///import core
///commands 输入的方向
///commandsName  DirectionalityLtr,DirectionalityRtl
///commandsTitle  从左向右输入,从右向左输入
/**
 * 输入的方向
 * @function
 * @name baidu.editor.execCommand
 * @param {String}   cmdName    directionality执行函数的参数
 * @param {String}    forward    ltr从左向右输入，rtl从右向左输入
 */
(function() {
    var block = domUtils.isBlockElm ,
        getObj = function(editor){
//            var startNode = editor.selection.getStart(),
//                parents;
//            if ( startNode ) {
//                //查找所有的是block的父亲节点
//                parents = domUtils.findParents( startNode, true, block, true );
//                for ( var i = 0,ci; ci = parents[i++]; ) {
//                    if ( ci.getAttribute( 'dir' ) ) {
//                        return ci;
//                    }
//                }
//            }
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),function(n){return n.getAttribute('dir')});

        },
        doDirectionality = function(range,editor,forward){
            
            var bookmark,
                filterFn = function( node ) {
                    return   node.nodeType == 1 ? !domUtils.isBookmarkNode(node) : !domUtils.isWhitespace(node);
                },

                obj = getObj( editor );

            if ( obj && range.collapsed ) {
                obj.setAttribute( 'dir', forward );
                return range;
            }
            bookmark = range.createBookmark();
            range.enlarge( true );
            var bookmark2 = range.createBookmark(),
                current = domUtils.getNextDomNode( bookmark2.start, false, filterFn ),
                tmpRange = range.cloneRange(),
                tmpNode;
            while ( current &&  !(domUtils.getPosition( current, bookmark2.end ) & domUtils.POSITION_FOLLOWING) ) {
                if ( current.nodeType == 3 || !block( current ) ) {
                    tmpRange.setStartBefore( current );
                    while ( current && current !== bookmark2.end && !block( current ) ) {
                        tmpNode = current;
                        current = domUtils.getNextDomNode( current, false, null, function( node ) {
                            return !block( node );
                        } );
                    }
                    tmpRange.setEndAfter( tmpNode );
                    var common = tmpRange.getCommonAncestor();
                    if ( !domUtils.isBody( common ) && block( common ) ) {
                        //遍历到了block节点
                        common.setAttribute( 'dir', forward );
                        current = common;
                    } else {
                        //没有遍历到，添加一个block节点
                        var p = range.document.createElement( 'p' );
                        p.setAttribute( 'dir', forward );
                        var frag = tmpRange.extractContents();
                        p.appendChild( frag );
                        tmpRange.insertNode( p );
                        current = p;
                    }

                    current = domUtils.getNextDomNode( current, false, filterFn );
                } else {
                    current = domUtils.getNextDomNode( current, true, filterFn );
                }
            }
            return range.moveToBookmark( bookmark2 ).moveToBookmark( bookmark );
        };
    UE.commands['directionality'] = {
        execCommand : function( cmdName,forward ) {
            var range = this.selection.getRange();
            //闭合时单独处理
            if(range.collapsed){
                var txt = this.document.createTextNode('d');
                range.insertNode(txt);
            }
            doDirectionality(range,this,forward);
            if(txt){
                range.setStartBefore(txt).collapse(true);
                domUtils.remove(txt);
            }

            range.select();
            return true;
        },
        queryCommandValue : function() {
            var node = getObj(this);
            return node ? node.getAttribute('dir') : 'ltr';
        }
    };
})();


///import core
///import plugins\inserthtml.js
///commands 分割线
///commandsName  Horizontal
///commandsTitle  分隔线
/**
 * 分割线
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    horizontal插入分割线
 */
UE.plugins['horizontal'] = function(){
    var me = this;
    me.commands['horizontal'] = {
        execCommand : function( cmdName ) {
            var me = this;
            if(me.queryCommandState(cmdName)!==-1){
                me.execCommand('insertHtml','<hr>');
                var range = me.selection.getRange(),
                    start = range.startContainer;
                if(start.nodeType == 1 && !start.childNodes[range.startOffset] ){

                    var tmp;
                    if(tmp = start.childNodes[range.startOffset - 1]){
                        if(tmp.nodeType == 1 && tmp.tagName == 'HR'){
                            if(me.options.enterTag == 'p'){
                                tmp = me.document.createElement('p');
                                range.insertNode(tmp);
                                range.setStart(tmp,0).setCursor();

                            }else{
                                tmp = me.document.createElement('br');
                                range.insertNode(tmp);
                                range.setStartBefore(tmp).setCursor();
                            }
                        }
                    }

                }
                return true;
            }

        },
        //边界在table里不能加分隔线
        queryCommandState : function() {
            return domUtils.filterNodeList(this.selection.getStartElementPath(),'table') ? -1 : 0;
        }
    };
//    me.addListener('delkeyup',function(){
//        var rng = this.selection.getRange();
//        if(browser.ie && browser.version > 8){
//            rng.txtToElmBoundary(true);
//            if(domUtils.isStartInblock(rng)){
//                var tmpNode = rng.startContainer;
//                var pre = tmpNode.previousSibling;
//                if(pre && domUtils.isTagNode(pre,'hr')){
//                    domUtils.remove(pre);
//                    rng.select();
//                    return;
//                }
//            }
//        }
//        if(domUtils.isBody(rng.startContainer)){
//            var hr = rng.startContainer.childNodes[rng.startOffset -1];
//            if(hr && hr.nodeName == 'HR'){
//                var next = hr.nextSibling;
//                if(next){
//                    rng.setStart(next,0)
//                }else if(hr.previousSibling){
//                    rng.setStartAtLast(hr.previousSibling)
//                }else{
//                    var p = this.document.createElement('p');
//                    hr.parentNode.insertBefore(p,hr);
//                    domUtils.fillNode(this.document,p);
//                    rng.setStart(p,0);
//                }
//                domUtils.remove(hr);
//                rng.setCursor(false,true);
//            }
//        }
//    })
    me.addListener('delkeydown',function(name,evt){
        var rng = this.selection.getRange();
        rng.txtToElmBoundary(true);
        if(domUtils.isStartInblock(rng)){
            var tmpNode = rng.startContainer;
            var pre = tmpNode.previousSibling;
            if(pre && domUtils.isTagNode(pre,'hr')){
                domUtils.remove(pre);
                rng.select();
                domUtils.preventDefault(evt);
                return true;

            }
        }

    })
};


///import core
///import plugins\inserthtml.js
///commands 日期,时间
///commandsName  Date,Time
///commandsTitle  日期,时间
/**
 * 插入日期
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    date插入日期
 * @author zhuwenxuan
*/
/**
 * 插入时间
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName    time插入时间
 * @author zhuwenxuan
*/
UE.commands['time'] = UE.commands["date"] = {
    execCommand : function(cmd){
        var date = new Date;
        this.execCommand('insertHtml',cmd == "time" ?
            (date.getHours()+":"+ (date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes())+":"+(date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds())) :
            (date.getFullYear()+"-"+((date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1)+"-"+(date.getDate()<10?"0"+date.getDate():date.getDate())));
    }
};




///import core
///import plugins\paragraph.js
///commands 段间距
///commandsName  RowSpacingBottom,RowSpacingTop
///commandsTitle  段间距
/**
 * @description 设置段前距,段后距
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     rowspacing设置段间距
 * @param   {String}   value              值，以px为单位
 * @param   {String}   dir          top或bottom段前后段后
 * @author zhanyi
 */
UE.plugins['rowspacing'] = function(){
    var me = this;
    me.setOpt({
        'rowspacingtop':['5', '10', '15', '20', '25'],
        'rowspacingbottom':['5', '10', '15', '20', '25']

    });
    me.commands['rowspacing'] =  {
        execCommand : function( cmdName,value,dir ) {
            this.execCommand('paragraph','p',{style:'margin-'+dir+':'+value + 'px'});
            return true;
        },
        queryCommandValue : function(cmdName,dir) {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node) }),
                value;
            //trace:1026
            if(pN){
                value = domUtils.getComputedStyle(pN,'margin-'+dir).replace(/[^\d]/g,'');
                return !value ? 0 : value;
            }
            return 0;

        }
    };
};



///import core
///import plugins\paragraph.js
///commands 行间距
///commandsName  LineHeight
///commandsTitle  行间距
/**
 * @description 设置行内间距
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     lineheight设置行内间距
 * @param   {String}   value              值
 * @author zhuwenxuan
 */
UE.plugins['lineheight'] = function(){
    var me = this;
    me.setOpt({'lineheight':['1', '1.5','1.75','2', '3', '4', '5']});
    me.commands['lineheight'] =  {
        execCommand : function( cmdName,value ) {
            this.execCommand('paragraph','p',{style:'line-height:'+ (value == "1" ? "normal" : value + 'em') });
            return true;
        },
        queryCommandValue : function() {
            var pN = domUtils.filterNodeList(this.selection.getStartElementPath(),function(node){return domUtils.isBlockElm(node)});
            if(pN){
                var value = domUtils.getComputedStyle(pN,'line-height');
                return value == 'normal' ? 1 : value.replace(/[^\d.]*/ig,"");
            }
        }
    };
};



///import core
///import plugins/inserthtml.js
///commands 插入代码
///commandsName  code
///commandsTitle  插入代码
UE.plugins['insertcode'] = function() {
    var me = this;
    me.ready(function(){
        utils.cssRule('pre','pre{margin:.5em 0;padding:.4em .6em;border-radius:8px;background:#f8f8f8;}',
            me.document)
    });
    me.setOpt('insertcode',{
            'as3':'ActionScript3',
            'bash':'Bash/Shell',
            'cpp':'C/C++',
            'css':'Css',
            'cf':'CodeFunction',
            'c#':'C#',
            'delphi':'Delphi',
            'diff':'Diff',
            'erlang':'Erlang',
            'groovy':'Groovy',
            'html':'Html',
            'java':'Java',
            'jfx':'JavaFx',
            'js':'Javascript',
            'pl':'Perl',
            'php':'Php',
            'plain':'Plain Text',
            'ps':'PowerShell',
            'python':'Python',
            'ruby':'Ruby',
            'scala':'Scala',
            'sql':'Sql',
            'vb':'Vb',
            'xml':'Xml'
    });
    me.commands['insertcode'] = {
        execCommand : function(cmd,lang){
            var me = this,
                rng = me.selection.getRange(),
                pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
            if(pre){
                pre.className = 'brush:'+lang+';toolbar:false;';
            }else{
                var code = '';
                if(rng.collapsed){
                    code = browser.ie? (browser.version > 8 ? '' : '&nbsp;'):'<br/>';
                }else{
                    var frag = rng.extractContents();
                    var div = me.document.createElement('div');
                    div.appendChild(frag);

                    utils.each(UE.filterNode(UE.htmlparser(div.innerHTML.replace(/[\r\t]/g,'')),me.options.filterTxtRules).children,function(node){
                        if(browser.ie && browser.version > 8){

                            if(node.type =='element'){
                                if(node.tagName == 'br'){
                                    code += '\n'
                                }else if(!dtd.$empty[node.tagName]){
                                    utils.each(node.children,function(cn){
                                        if(cn.type =='element'){
                                            if(cn.tagName == 'br'){
                                                code += '\n'
                                            }else if(!dtd.$empty[node.tagName]){
                                                code += cn.innerText();
                                            }
                                        }else{
                                            code += cn.data
                                        }
                                    })
                                    if(!/\n$/.test(code)){
                                        code += '\n';
                                    }
                                }
                            }else{
                                code += node.data + '\n'
                            }
                            if(!node.nextSibling() && /\n$/.test(code)){
                                code = code.replace(/\n$/,'');
                            }
                        }else{
                            if(browser.ie){

                                if(node.type =='element'){
                                    if(node.tagName == 'br'){
                                        code += '<br>'
                                    }else if(!dtd.$empty[node.tagName]){
                                        utils.each(node.children,function(cn){
                                            if(cn.type =='element'){
                                                if(cn.tagName == 'br'){
                                                    code += '<br>'
                                                }else if(!dtd.$empty[node.tagName]){
                                                    code += cn.innerText();
                                                }
                                            }else{
                                                code += cn.data
                                            }
                                        });
                                        if(!/br>$/.test(code)){
                                            code += '<br>';
                                        }
                                    }
                                }else{
                                    code += node.data + '<br>'
                                }
                                if(!node.nextSibling() && /<br>$/.test(code)){
                                    code = code.replace(/<br>$/,'');
                                }

                            }else{
                                code += (node.type == 'element' ? (dtd.$empty[node.tagName] ?  '' : node.innerText()) : node.data);
                                if(!/br\/?\s*>$/.test(code)){
                                    if(!node.nextSibling())
                                        return;
                                    code += '<br>'
                                }
                            }

                        }

                    });
                }
                me.execCommand('inserthtml','<pre id="coder"class="brush:'+lang+';toolbar:false">'+code+'</pre>',true);

                pre = me.document.getElementById('coder');
                domUtils.removeAttributes(pre,'id');
                var tmpNode = pre.previousSibling;

                if(tmpNode && (tmpNode.nodeType == 3 && tmpNode.nodeValue.length == 1 && browser.ie && browser.version == 6 ||  domUtils.isEmptyBlock(tmpNode))){

                    domUtils.remove(tmpNode)
                }
                var rng = me.selection.getRange();
                if(domUtils.isEmptyBlock(pre)){
                    rng.setStart(pre,0).setCursor(false,true)
                }else{
                    rng.selectNodeContents(pre).select()
                }
            }



        },
        queryCommandValue : function(){
            var path = this.selection.getStartElementPath();
            var lang = '';
            utils.each(path,function(node){
                if(node.nodeName =='PRE'){
                    var match = node.className.match(/brush:([^;]+)/);
                    lang = match && match[1] ? match[1] : '';
                    return false;
                }
            });
            return lang;
        }
    };

    me.addInputRule(function(root){
       utils.each(root.getNodesByTagName('pre'),function(pre){
           var brs = pre.getNodesByTagName('br');
           if(brs.length){
               browser.ie && browser.version > 8 && utils.each(brs,function(br){
                   var txt = UE.uNode.createText('\n');
                   br.parentNode.insertBefore(txt,br);
                   br.parentNode.removeChild(br);
               });
               return;
            }
           if(browser.ie && browser.version > 8)
                return;
            var code = pre.innerText().split(/\n/);
            pre.innerHTML('');
            utils.each(code,function(c){
                if(c.length){
                    pre.appendChild(UE.uNode.createText(c));
                }
                pre.appendChild(UE.uNode.createElement('br'))
            })
       })
    });
    me.addOutputRule(function(root){
        utils.each(root.getNodesByTagName('pre'),function(pre){
            var code = '';
            utils.each(pre.children,function(n){
               if(n.type == 'text'){
                   //在ie下文本内容有可能末尾带有\n要去掉
                   //trace:3396
                   code += n.data.replace(/[ ]/g,'&nbsp;').replace(/\n$/,'');
               }else{
                   if(n.tagName == 'br'){
                       code  += '\n'
                   }else{
                       code += (!dtd.$empty[n.tagName] ? '' : n.innerText());
                   }

               }

            });

            pre.innerText(code.replace(/(&nbsp;|\n)+$/,''))
        })
    });
    //不需要判断highlight的command列表
    me.notNeedCodeQuery ={
        help:1,
        undo:1,
        redo:1,
        source:1,
        print:1,
        searchreplace:1,
        fullscreen:1,
        preview:1,
        insertparagraph:1,
        elementpath:1,
        highlightcode:1,
        insertcode:1,
        inserthtml:1,
        selectall:1
    };
    //将queyCommamndState重置
    var orgQuery = me.queryCommandState;
    me.queryCommandState = function(cmd){
        var me = this;

        if(!me.notNeedCodeQuery[cmd.toLowerCase()] && me.selection && me.queryCommandValue('insertcode')){
            return -1;
        }
        return UE.Editor.prototype.queryCommandState.apply(this,arguments)
    };
    me.addListener('beforeenterkeydown',function(){
        var rng = me.selection.getRange();
        var pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
        if(pre){
            me.fireEvent('saveScene');
            if(!rng.collapsed){
               rng.deleteContents();
            }
            if(!browser.ie ){
                var tmpNode = me.document.createElement('br'),pre;
                rng.insertNode(tmpNode).setStartAfter(tmpNode).collapse(true);
                var next = tmpNode.nextSibling;
                if(!next){
                    rng.insertNode(tmpNode.cloneNode(false));
                }else{
                    rng.setStartAfter(tmpNode);
                }
                pre = tmpNode.previousSibling;
                var tmp;
                while(pre ){
                    tmp = pre;
                    pre = pre.previousSibling;
                    if(!pre || pre.nodeName == 'BR'){
                        pre = tmp;
                        break;
                    }
                }
                if(pre){
                    var str = '';
                    while(pre && pre.nodeName != 'BR' &&  new RegExp('^[\\s'+domUtils.fillChar+']*$').test(pre.nodeValue)){
                        str += pre.nodeValue;
                        pre = pre.nextSibling;
                    }
                    if(pre.nodeName != 'BR'){
                        var match = pre.nodeValue.match(new RegExp('^([\\s'+domUtils.fillChar+']+)'));
                        if(match && match[1]){
                            str += match[1]
                        }

                    }
                    if(str){
                        str = me.document.createTextNode(str);
                        rng.insertNode(str).setStartAfter(str);
                    }
                }
                rng.collapse(true).select(true);
            }else{
                if(browser.version > 8){

                    var txt = me.document.createTextNode('\n');
                    var start = rng.startContainer;
                    if(rng.startOffset == 0){
                        var preNode = start.previousSibling;
                        if(preNode){
                            rng.insertNode(txt);
                            var fillchar = me.document.createTextNode(' ');
                            rng.setStartAfter(txt).insertNode(fillchar).setStart(fillchar,0).collapse(true).select(true)
                        }
                    }else{
                        rng.insertNode(txt).setStartAfter(txt);
                        var fillchar = me.document.createTextNode(' ');
                        start = rng.startContainer.childNodes[rng.startOffset];
                        if(start && !/^\n/.test(start.nodeValue)){
                            rng.setStartBefore(txt)
                        }
                        rng.insertNode(fillchar).setStart(fillchar,0).collapse(true).select(true)
                    }

                }else{
                    var tmpNode = me.document.createElement('br');
                    rng.insertNode(tmpNode);
                    rng.insertNode(me.document.createTextNode(domUtils.fillChar));
                    rng.setStartAfter(tmpNode);
                    pre = tmpNode.previousSibling;
                    var tmp;
                    while(pre ){
                        tmp = pre;
                        pre = pre.previousSibling;
                        if(!pre || pre.nodeName == 'BR'){
                            pre = tmp;
                            break;
                        }
                    }
                    if(pre){
                        var str = '';
                        while(pre && pre.nodeName != 'BR' &&  new RegExp('^[ '+domUtils.fillChar+']*$').test(pre.nodeValue)){
                            str += pre.nodeValue;
                            pre = pre.nextSibling;
                        }
                        if(pre.nodeName != 'BR'){
                            var match = pre.nodeValue.match(new RegExp('^([ '+domUtils.fillChar+']+)'));
                            if(match && match[1]){
                                str += match[1]
                            }

                        }

                        str = me.document.createTextNode(str);
                        rng.insertNode(str).setStartAfter(str);
                    }
                    rng.collapse(true).select();
                }


            }
            me.fireEvent('saveScene');
            return true;
        }


    });

    me.addListener('tabkeydown',function(cmd,evt){
        var rng = me.selection.getRange();
        var pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
        if(pre){
            me.fireEvent('saveScene');
            if(evt.shiftKey){

//                if(!rng.collapsed){
//                    var bk = rng.createBookmark();
//                    var start = bk.start.previousSibling;
//                    if(start === pre.firstChild){
//                        start.nodeValue = start.nodeValue.replace(/^\s{4}/,'');
//                    }else{
//                        while(start){
//                            if(domUtils.isBr(start)){
//                                start = start.nextSibling;
//                                start.nodeValue = start.nodeValue.replace(/^\s{4}/,'');
//                                break;
//                            }
//                            while(start.previousSibling && start.previousSibling.nodeType == 3){
//                                start.nodeValue = start.previousSibling.nodeValue + start.nodeValue;
//                                domUtils.remove(start.previousSibling)
//                            }
//                            start = start.previousSibling;
//                        }
//                    }
//
//                    var end = bk.end;
//                    start = bk.start.nextSibling;
//
//                    while(start && start !== end){
//                        if(domUtils.isBr(start) && start.nextSibling){
//                            if(start.nextSibling === end){
//                                break;
//                            }
//                            start = start.nextSibling;
//                            while(start.nextSibling && start.nextSibling.nodeType == 3){
//                                start.nodeValue += start.nextSibling.nodeValue;
//                                domUtils.remove(start.nextSibling)
//                            }
//
//                            start.nodeValue = start.nodeValue.replace(/^\s{4}/,'');
//                        }
//
//                        start = start.nextSibling;
//                    }
//                    rng.moveToBookmark(bk).select();
//                }else{
//                    var bk = rng.createBookmark();
//                    var start = bk.start.previousSibling;
//                    if(start === pre.firstChild){
//                        start.nodeValue = start.nodeValue.replace(/^\s{4}/,'');
//                    }else{
//                        while(start){
//                            if(domUtils.isBr(start)){
//                                start = start.nextSibling;
//                                start.nodeValue = start.nodeValue.replace(/^\s{4}/,'');
//                                break;
//                            }
//                            while(start.previousSibling && start.previousSibling.nodeType == 3){
//                                start.nodeValue = start.previousSibling.nodeValue + start.nodeValue;
//                                domUtils.remove(start.previousSibling)
//                            }
//                            start = start.previousSibling;
//                        }
//                    }
//                }
            }else{
                if(!rng.collapsed){
                    var bk = rng.createBookmark();
                    var start = bk.start.previousSibling;

                    while(start){
                        if(pre.firstChild === start && !domUtils.isBr(start)){
                            pre.insertBefore(me.document.createTextNode('    '),start);

                            break;
                        }
                        if(domUtils.isBr(start)){
                            pre.insertBefore(me.document.createTextNode('    '),start.nextSibling);

                            break;
                        }
                        start = start.previousSibling;
                    }
                    var end = bk.end;
                    start = bk.start.nextSibling;
                    if(pre.firstChild === bk.start){
                        pre.insertBefore(me.document.createTextNode('    '),start.nextSibling)

                    }
                    while(start && start !== end){
                        if(domUtils.isBr(start) && start.nextSibling){
                            if(start.nextSibling === end){
                                break;
                            }
                            pre.insertBefore(me.document.createTextNode('    '),start.nextSibling)
                        }

                        start = start.nextSibling;
                    }
                    rng.moveToBookmark(bk).select();
                }else{
                    var tmpNode = me.document.createTextNode('    ');
                    rng.insertNode(tmpNode).setStartAfter(tmpNode).collapse(true).select(true);
                }
            }


            me.fireEvent('saveScene');
            return true;
        }


    });


    me.addListener('beforeinserthtml',function(evtName,html){
        var me = this,
            rng = me.selection.getRange(),
            pre = domUtils.findParentByTagName(rng.startContainer,'pre',true);
        if(pre){
            if(!rng.collapsed){
                rng.deleteContents()
            }
            var htmlstr = '';
            if(browser.ie && browser.version > 8){

                utils.each(UE.filterNode(UE.htmlparser(html),me.options.filterTxtRules).children,function(node){
                    if(node.type =='element'){
                        if(node.tagName == 'br'){
                            htmlstr += '\n'
                        }else if(!dtd.$empty[node.tagName]){
                            utils.each(node.children,function(cn){
                                if(cn.type =='element'){
                                    if(cn.tagName == 'br'){
                                        htmlstr += '\n'
                                    }else if(!dtd.$empty[node.tagName]){
                                        htmlstr += cn.innerText();
                                    }
                                }else{
                                    htmlstr += cn.data
                                }
                            })
                            if(!/\n$/.test(htmlstr)){
                                htmlstr += '\n';
                            }
                        }
                    }else{
                        htmlstr += node.data + '\n'
                    }
                    if(!node.nextSibling() && /\n$/.test(htmlstr)){
                        htmlstr = htmlstr.replace(/\n$/,'');
                    }
                });
                var tmpNode = me.document.createTextNode(utils.html(htmlstr.replace(/&nbsp;/g,' ')));
                rng.insertNode(tmpNode).selectNode(tmpNode).select();
            }else{
                var frag = me.document.createDocumentFragment();

                utils.each(UE.filterNode(UE.htmlparser(html),me.options.filterTxtRules).children,function(node){
                    if(node.type =='element'){
                        if(node.tagName == 'br'){
                            frag.appendChild(me.document.createElement('br'))
                        }else if(!dtd.$empty[node.tagName]){
                            utils.each(node.children,function(cn){
                                if(cn.type =='element'){
                                    if(cn.tagName == 'br'){

                                        frag.appendChild(me.document.createElement('br'))
                                    }else if(!dtd.$empty[node.tagName]){
                                        frag.appendChild(me.document.createTextNode(utils.html(cn.innerText().replace(/&nbsp;/g,' '))));

                                    }
                                }else{
                                    frag.appendChild(me.document.createTextNode(utils.html( cn.data.replace(/&nbsp;/g,' '))));

                                }
                            })
                            if(frag.lastChild.nodeName != 'BR'){
                                frag.appendChild(me.document.createElement('br'))
                            }
                        }
                    }else{
                        frag.appendChild(me.document.createTextNode(utils.html( node.data.replace(/&nbsp;/g,' '))));
                    }
                    if(!node.nextSibling() && frag.lastChild.nodeName == 'BR'){
                       frag.removeChild(frag.lastChild)
                    }


                });
                rng.insertNode(frag).select();

            }

            return true;
        }
    });
    //方向键的处理
    me.addListener('keydown',function(cmd,evt){
        var me = this,keyCode = evt.keyCode || evt.which;
        if(keyCode == 40){
            var rng = me.selection.getRange(),pre,start = rng.startContainer;
            if(rng.collapsed && (pre = domUtils.findParentByTagName(rng.startContainer,'pre',true)) && !pre.nextSibling){
                var last = pre.lastChild
                while(last && last.nodeName == 'BR'){
                    last = last.previousSibling;
                }
                if(last === start || rng.startContainer === pre && rng.startOffset == pre.childNodes.length){
                    me.execCommand('insertparagraph');
                    domUtils.preventDefault(evt)
                }

            }
        }
    });
    //trace:3395
    me.addListener('delkeydown',function(type,evt){
        var rng = this.selection.getRange();
        rng.txtToElmBoundary(true);
        var start = rng.startContainer;
        if(domUtils.isTagNode(start,'pre') && rng.collapsed && domUtils.isStartInblock(rng)){
            var p = me.document.createElement('p');
            domUtils.fillNode(me.document,p);
            start.parentNode.insertBefore(p,start);
            domUtils.remove(start);
            rng.setStart(p,0).setCursor(false,true);
            domUtils.preventDefault(evt);
            return true;
        }
    })
};

///import core
///commands 清空文档
///commandsName  ClearDoc
///commandsTitle  清空文档
/**
 *
 * 清空文档
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     cleardoc清空文档
 */

UE.commands['cleardoc'] = {
    execCommand : function( cmdName) {
        var me = this,
            enterTag = me.options.enterTag,
            range = me.selection.getRange();
        if(enterTag == "br"){
            me.body.innerHTML = "<br/>";
            range.setStart(me.body,0).setCursor();
        }else{
            me.body.innerHTML = "<p>"+(ie ? "" : "<br/>")+"</p>";
            range.setStart(me.body.firstChild,0).setCursor(false,true);
        }
        setTimeout(function(){
            me.fireEvent("clearDoc");
        },0);

    }
};


///import core
///commands 锚点
///commandsName  Anchor
///commandsTitle  锚点
///commandsDialog  dialogs\anchor
/**
 * 锚点
 * @function
 * @name baidu.editor.execCommands
 * @param {String} cmdName     cmdName="anchor"插入锚点
 */
UE.plugins['anchor'] = function (){
    var me = this;

    me.ready(function(){
        utils.cssRule('anchor',
            '.anchorclass{background: url(\''
                + me.options.UEDITOR_HOME_URL +
                'themes/default/images/anchor.gif\') no-repeat scroll left center transparent;border: 1px dotted #0000FF;cursor: auto;display: inline-block;height: 16px;width: 15px;}',
            me.document)
    });
    me.addOutputRule(function(root){
        utils.each(root.getNodesByTagName('img'),function(a){
            var val;
            if(val = a.getAttr('anchorname')){
                a.tagName = 'a';
                a.setAttr({
                    anchorname : '',
                    name : val,
                    'class' : ''
                })
            }
        })
    });
    me.addInputRule(function(root){
        utils.each(root.getNodesByTagName('a'),function(a){
            var val;
            if((val = a.getAttr('name')) && !a.getAttr('href')){
                a.tagName = 'img';
                a.setAttr({
                    anchorname :a.getAttr('name'),
                    'class' : 'anchorclass'
                });
                a.setAttr('name')

            }
        })
    });
    me.commands['anchor'] = {
        execCommand:function (cmd, name) {
            var range = this.selection.getRange(),img = range.getClosedNode();
            if (img && img.getAttribute('anchorname')) {
                if (name) {
                    img.setAttribute('anchorname', name);
                } else {
                    range.setStartBefore(img).setCursor();
                    domUtils.remove(img);
                }
            } else {
                if (name) {
                    //只在选区的开始插入
                    var anchor = this.document.createElement('img');
                    range.collapse(true);
                    domUtils.setAttributes(anchor,{
                        'anchorname':name,
                        'class':'anchorclass'
                    });
                    range.insertNode(anchor).setStartAfter(anchor).setCursor(false,true);
                }
            }
        }

    };


};

///import core
///commands 字数统计
///commandsName  WordCount,wordCount
///commandsTitle  字数统计
/**
 * Created by JetBrains WebStorm.
 * User: taoqili
 * Date: 11-9-7
 * Time: 下午8:18
 * To change this template use File | Settings | File Templates.
 */

UE.plugins['wordcount'] = function(){
    var me = this;
    me.addListener('contentchange',function(){
        me.fireEvent('wordcount');
    });
    var timer;
    me.addListener('ready',function(){
        var me = this;
        domUtils.on(me.body,"keyup",function(evt){
            var code = evt.keyCode||evt.which,
                //忽略的按键,ctr,alt,shift,方向键
                ignores = {"16":1,"18":1,"20":1,"37":1,"38":1,"39":1,"40":1};
            if(code in ignores) return;
            clearTimeout(timer);
            timer = setTimeout(function(){
                me.fireEvent('wordcount');
            },200)
        })
    });
};

///import core
///commands 添加分页功能
///commandsName  PageBreak
///commandsTitle  分页
/**
 * @description 添加分页功能
 * @author zhanyi
 */
UE.plugins['pagebreak'] = function () {
    var me = this,
        notBreakTags = ['td'];
    me.setOpt('pageBreakTag','_ueditor_page_break_tag_');

    function fillNode(node){
        if(domUtils.isEmptyBlock(node)){
            var firstChild = node.firstChild,tmpNode;

            while(firstChild && firstChild.nodeType == 1 && domUtils.isEmptyBlock(firstChild)){
                tmpNode = firstChild;
                firstChild = firstChild.firstChild;
            }
            !tmpNode && (tmpNode = node);
            domUtils.fillNode(me.document,tmpNode);
        }
    }
    //分页符样式添加

    me.ready(function(){
        utils.cssRule('pagebreak','.pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}',me.document);
    });
    function isHr(node){
        return node && node.nodeType == 1 && node.tagName == 'HR' && node.className == 'pagebreak';
    }
    me.addInputRule(function(root){
        root.traversal(function(node){
            if(node.type == 'text' && node.data == me.options.pageBreakTag){
                var hr = UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');
                node.parentNode.insertBefore(hr,node);
                node.parentNode.removeChild(node)
            }
        })
    });
    me.addOutputRule(function(node){
        utils.each(node.getNodesByTagName('hr'),function(n){
            if(n.getAttr('class') == 'pagebreak'){
                var txt = UE.uNode.createText(me.options.pageBreakTag);
                n.parentNode.insertBefore(txt,n);
                n.parentNode.removeChild(n);
            }
        })

    });
    me.commands['pagebreak'] = {
        execCommand:function () {
            var range = me.selection.getRange(),hr = me.document.createElement('hr');
            domUtils.setAttributes(hr,{
                'class' : 'pagebreak',
                noshade:"noshade",
                size:"5"
            });
            domUtils.unSelectable(hr);
            //table单独处理
            var node = domUtils.findParentByTagName(range.startContainer, notBreakTags, true),

                parents = [], pN;
            if (node) {
                switch (node.tagName) {
                    case 'TD':
                        pN = node.parentNode;
                        if (!pN.previousSibling) {
                            var table = domUtils.findParentByTagName(pN, 'table');
//                            var tableWrapDiv = table.parentNode;
//                            if(tableWrapDiv && tableWrapDiv.nodeType == 1
//                                && tableWrapDiv.tagName == 'DIV'
//                                && tableWrapDiv.getAttribute('dropdrag')
//                                ){
//                                domUtils.remove(tableWrapDiv,true);
//                            }
                            table.parentNode.insertBefore(hr, table);
                            parents = domUtils.findParents(hr, true);

                        } else {
                            pN.parentNode.insertBefore(hr, pN);
                            parents = domUtils.findParents(hr);

                        }
                        pN = parents[1];
                        if (hr !== pN) {
                            domUtils.breakParent(hr, pN);

                        }
                        //table要重写绑定一下拖拽
                        me.fireEvent('afteradjusttable',me.document);
                }

            } else {

                if (!range.collapsed) {
                    range.deleteContents();
                    var start = range.startContainer;
                    while ( !domUtils.isBody(start) && domUtils.isBlockElm(start) && domUtils.isEmptyNode(start)) {
                        range.setStartBefore(start).collapse(true);
                        domUtils.remove(start);
                        start = range.startContainer;
                    }

                }
                range.insertNode(hr);

                var pN = hr.parentNode, nextNode;
                while (!domUtils.isBody(pN)) {
                    domUtils.breakParent(hr, pN);
                    nextNode = hr.nextSibling;
                    if (nextNode && domUtils.isEmptyBlock(nextNode)) {
                        domUtils.remove(nextNode);
                    }
                    pN = hr.parentNode;
                }
                nextNode = hr.nextSibling;
                var pre = hr.previousSibling;
                if(isHr(pre)){
                    domUtils.remove(pre);
                }else{
                    pre && fillNode(pre);
                }

                if(!nextNode){
                    var p = me.document.createElement('p');

                    hr.parentNode.appendChild(p);
                    domUtils.fillNode(me.document,p);
                    range.setStart(p,0).collapse(true);
                }else{
                    if(isHr(nextNode)){
                        domUtils.remove(nextNode);
                    }else{
                        fillNode(nextNode);
                    }
                    range.setEndAfter(hr).collapse(false);
                }

                range.select(true);

            }

        }
    };
};
///import core
///commands 本地图片引导上传
///commandsName  WordImage
///commandsTitle  本地图片引导上传
///commandsDialog  dialogs\wordimage


UE.plugins["wordimage"] = function () {
    var me = this,
        images;
    me.addInputRule(function (root) {
        utils.each(root.getNodesByTagName('img'), function (img) {
            var attrs = img.attrs,
                flag = parseInt(attrs.width) < 128 || parseInt(attrs.height) < 43,
                opt = me.options,
                src = opt.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif';
            if (attrs['_src'] && attrs['_src'].indexOf("file:///")!==-1) {
                img.setAttr({
                    width:attrs.width,
                    height:attrs.height,
                    alt:attrs.alt,
                    word_img:attrs._src,
                    src:src,
                    _src:src,
                    'style':'background:url(' + ( flag ? opt.themePath + opt.theme + '/images/word.gif' : opt.langPath + opt.lang + '/images/localimage.png') + ') no-repeat center center;border:1px solid #ddd'
                })
            }
        })
    });
    me.commands['wordimage'] = {
        execCommand:function () {
            images = domUtils.getElementsByTagName(me.document.body, "img");
            var urlList = [];
            for (var i = 0, ci; ci = images[i++];) {
                var url = ci.getAttribute("word_img");
                url && urlList.push(url);
            }
            if (images.length) {
                this["word_img"] = urlList;
            }
        },
        queryCommandState:function () {
            images = domUtils.getElementsByTagName(me.document.body, "img");
            for (var i = 0, ci; ci = images[i++];) {
                if (ci.getAttribute("word_img")) {
                    return 1;
                }
            }
            return -1;
        }
    };

};
UE.plugins['dragdrop'] = function (){

    var me = this;
    me.ready(function(){
        domUtils.on(this.body,'dragend',function(){
            var rng = me.selection.getRange();
            var node = rng.getClosedNode()||me.selection.getStart();

            if(node && node.tagName == 'IMG'){

                var pre = node.previousSibling,next;
                while(next = node.nextSibling){
                    if(next.nodeType == 1 && next.tagName == 'SPAN' && !next.firstChild){
                        domUtils.remove(next)
                    }else{
                        break;
                    }
                }


                if((pre && pre.nodeType == 1 && !domUtils.isEmptyBlock(pre) || !pre) && (!next || next && !domUtils.isEmptyBlock(next))){
                    if(pre && pre.tagName == 'P' && !domUtils.isEmptyBlock(pre)){
                        pre.appendChild(node);
                        domUtils.moveChild(next,pre);
                        domUtils.remove(next);
                    }else  if(next && next.tagName == 'P' && !domUtils.isEmptyBlock(next)){
                        next.insertBefore(node,next.firstChild);
                    }

                    if(pre && pre.tagName == 'P' && domUtils.isEmptyBlock(pre)){
                        domUtils.remove(pre)
                    }
                    if(next && next.tagName == 'P' && domUtils.isEmptyBlock(next)){
                        domUtils.remove(next)
                    }
                    rng.selectNode(node).select();
                    me.fireEvent('saveScene');

                }

            }

        })
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var rng = me.selection.getRange(),node;
            if(node = domUtils.findParentByTagName(rng.startContainer,'p',true)){
                if(domUtils.getComputedStyle(node,'text-align') == 'center'){
                    domUtils.removeStyle(node,'text-align')
                }
            }
        }
    })
};

///import core
///commands 撤销和重做
///commandsName  Undo,Redo
///commandsTitle  撤销,重做
/**
 * @description 回退
 * @author zhanyi
 */

UE.plugins['undo'] = function () {
    var saveSceneTimer;
    var me = this,
        maxUndoCount = me.options.maxUndoCount || 20,
        maxInputCount = me.options.maxInputCount || 20,
        fillchar = new RegExp(domUtils.fillChar + '|<\/hr>', 'gi');// ie会产生多余的</hr>
    var noNeedFillCharTags = {
        ol:1,ul:1,table:1,tbody:1,tr:1,body:1
    };
    var orgState = me.options.autoClearEmptyNode;
    function compareAddr(indexA, indexB) {
        if (indexA.length != indexB.length)
            return 0;
        for (var i = 0, l = indexA.length; i < l; i++) {
            if (indexA[i] != indexB[i])
                return 0
        }
        return 1;
    }

    function compareRangeAddress(rngAddrA, rngAddrB) {
        if (rngAddrA.collapsed != rngAddrB.collapsed) {
            return 0;
        }
        if (!compareAddr(rngAddrA.startAddress, rngAddrB.startAddress) || !compareAddr(rngAddrA.endAddress, rngAddrB.endAddress)) {
            return 0;
        }
        return 1;
    }

    function UndoManager() {
        this.list = [];
        this.index = 0;
        this.hasUndo = false;
        this.hasRedo = false;
        this.undo = function () {
            if (this.hasUndo) {
                if (!this.list[this.index - 1] && this.list.length == 1) {
                    this.reset();
                    return;
                }
                while (this.list[this.index].content == this.list[this.index - 1].content) {
                    this.index--;
                    if (this.index == 0) {
                        return this.restore(0);
                    }
                }
                this.restore(--this.index);
            }
        };
        this.redo = function () {
            if (this.hasRedo) {
                while (this.list[this.index].content == this.list[this.index + 1].content) {
                    this.index++;
                    if (this.index == this.list.length - 1) {
                        return this.restore(this.index);
                    }
                }
                this.restore(++this.index);
            }
        };

        this.restore = function () {
            var me = this.editor;
            var scene = this.list[this.index];
            var root = UE.htmlparser(scene.content.replace(fillchar, ''));
            me.options.autoClearEmptyNode = false;
            me.filterInputRule(root);
            me.options.autoClearEmptyNode = orgState;
            //trace:873
            //去掉展位符
            me.document.body.innerHTML = root.toHtml();
            me.fireEvent('afterscencerestore');
            //处理undo后空格不展位的问题
            if (browser.ie) {
                utils.each(domUtils.getElementsByTagName(me.document,'td th caption p'),function(node){
                    if(domUtils.isEmptyNode(node)){
                        domUtils.fillNode(me.document, node);
                    }
                })
            }

            try{
                var rng = new dom.Range(me.document).moveToAddress(scene.address);
                rng.select(noNeedFillCharTags[rng.startContainer.nodeName.toLowerCase()]);
            }catch(e){}

            this.update();
            this.clearKey();
            //不能把自己reset了
            me.fireEvent('reset', true);
        };

        this.getScene = function () {
            var me = this.editor;
            var rng = me.selection.getRange(),
                rngAddress = rng.createAddress(false,true);
            me.fireEvent('beforegetscene');
            var root = UE.htmlparser(me.body.innerHTML);
            me.options.autoClearEmptyNode = false;
            me.filterOutputRule(root);
            me.options.autoClearEmptyNode = orgState;
            var cont = root.toHtml();
            //trace:3461
            //这个会引起回退时导致空格丢失的情况
//            browser.ie && (cont = cont.replace(/>&nbsp;</g, '><').replace(/\s*</g, '<').replace(/>\s*/g, '>'));
            me.fireEvent('aftergetscene');

            return {
                address:rngAddress,
                content:cont
            }
        };
        this.save = function (notCompareRange,notSetCursor) {
            clearTimeout(saveSceneTimer);
            var currentScene = this.getScene(notSetCursor),
                lastScene = this.list[this.index];
            //内容相同位置相同不存
            if (lastScene && lastScene.content == currentScene.content &&
                ( notCompareRange ? 1 : compareRangeAddress(lastScene.address, currentScene.address) )
                ) {
                return;
            }
            this.list = this.list.slice(0, this.index + 1);
            this.list.push(currentScene);
            //如果大于最大数量了，就把最前的剔除
            if (this.list.length > maxUndoCount) {
                this.list.shift();
            }
            this.index = this.list.length - 1;
            this.clearKey();
            //跟新undo/redo状态
            this.update();

        };
        this.update = function () {
            this.hasRedo = !!this.list[this.index + 1];
            this.hasUndo = !!this.list[this.index - 1];
        };
        this.reset = function () {
            this.list = [];
            this.index = 0;
            this.hasUndo = false;
            this.hasRedo = false;
            this.clearKey();
        };
        this.clearKey = function () {
            keycont = 0;
            lastKeyCode = null;
        };
    }

    me.undoManger = new UndoManager();
    me.undoManger.editor = me;
    function saveScene() {
        this.undoManger.save();
    }

    me.addListener('saveScene', function () {
        var args = Array.prototype.splice.call(arguments,1);
        this.undoManger.save.apply(this.undoManger,args);
    });

    me.addListener('beforeexeccommand', saveScene);
    me.addListener('afterexeccommand', saveScene);

    me.addListener('reset', function (type, exclude) {
        if (!exclude) {
            this.undoManger.reset();
        }
    });
    me.commands['redo'] = me.commands['undo'] = {
        execCommand:function (cmdName) {
            this.undoManger[cmdName]();
        },
        queryCommandState:function (cmdName) {
            return this.undoManger['has' + (cmdName.toLowerCase() == 'undo' ? 'Undo' : 'Redo')] ? 0 : -1;
        },
        notNeedUndo:1
    };

    var keys = {
            //  /*Backspace*/ 8:1, /*Delete*/ 46:1,
            /*Shift*/ 16:1, /*Ctrl*/ 17:1, /*Alt*/ 18:1,
            37:1, 38:1, 39:1, 40:1

        },
        keycont = 0,
        lastKeyCode;
    //输入法状态下不计算字符数
    var inputType = false;
    me.addListener('ready', function () {
        domUtils.on(this.body, 'compositionstart', function () {
            inputType = true;
        });
        domUtils.on(this.body, 'compositionend', function () {
            inputType = false;
        })
    });
    //快捷键
    me.addshortcutkey({
        "Undo":"ctrl+90", //undo
        "Redo":"ctrl+89" //redo

    });
    var isCollapsed = true;
    me.addListener('keydown', function (type, evt) {

        var me = this;
        var keyCode = evt.keyCode || evt.which;
        if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            if (inputType)
                return;

            if(!me.selection.getRange().collapsed){
                me.undoManger.save(false,true);
                isCollapsed = false;
                return;
            }
            if (me.undoManger.list.length == 0) {
                me.undoManger.save(true);
            }
            clearTimeout(saveSceneTimer);
            function save(cont){

                if (cont.selection.getRange().collapsed)
                    cont.fireEvent('contentchange');
                cont.undoManger.save(false,true);
                cont.fireEvent('selectionchange');
            }
            saveSceneTimer = setTimeout(function(){
                if(inputType){
                    var interalTimer = setInterval(function(){
                        if(!inputType){
                            save(me);
                            clearInterval(interalTimer)
                        }
                    },300)
                    return;
                }
                save(me);
            },200);

            lastKeyCode = keyCode;
            keycont++;
            if (keycont >= maxInputCount ) {
                save(me)
            }
        }
    });
    me.addListener('keyup', function (type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (!keys[keyCode] && !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
            if (inputType)
                return;
            if(!isCollapsed){
                this.undoManger.save(false,true);
                isCollapsed = true;
            }
        }
    });

};

///import core
///import plugins/inserthtml.js
///import plugins/undo.js
///import plugins/serialize.js
///commands 粘贴
///commandsName  PastePlain
///commandsTitle  纯文本粘贴模式
/*
 ** @description 粘贴
 * @author zhanyi
 */
UE.plugins['paste'] = function () {
    function getClipboardData(callback) {
        var doc = this.document;
        if (doc.getElementById('baidu_pastebin')) {
            return;
        }
        var range = this.selection.getRange(),
            bk = range.createBookmark(),
        //创建剪贴的容器div
            pastebin = doc.createElement('div');
        pastebin.id = 'baidu_pastebin';
        // Safari 要求div必须有内容，才能粘贴内容进来
        browser.webkit && pastebin.appendChild(doc.createTextNode(domUtils.fillChar + domUtils.fillChar));
        doc.body.appendChild(pastebin);
        //trace:717 隐藏的span不能得到top
        //bk.start.innerHTML = '&nbsp;';
        bk.start.style.display = '';
        pastebin.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" +
            //要在现在光标平行的位置加入，否则会出现跳动的问题
            domUtils.getXY(bk.start).y + 'px';

        range.selectNodeContents(pastebin).select(true);

        setTimeout(function () {
            if (browser.webkit) {
                for (var i = 0, pastebins = doc.querySelectorAll('#baidu_pastebin'), pi; pi = pastebins[i++];) {
                    if (domUtils.isEmptyNode(pi)) {
                        domUtils.remove(pi);
                    } else {
                        pastebin = pi;
                        break;
                    }
                }
            }
            try {
                pastebin.parentNode.removeChild(pastebin);
            } catch (e) {
            }
            range.moveToBookmark(bk).select(true);
            callback(pastebin);
        }, 0);
    }

    var me = this;

    var txtContent, htmlContent, address;

    function filter(div) {
        var html;
        if (div.firstChild) {
            //去掉cut中添加的边界值
            var nodes = domUtils.getElementsByTagName(div, 'span');
            for (var i = 0, ni; ni = nodes[i++];) {
                if (ni.id == '_baidu_cut_start' || ni.id == '_baidu_cut_end') {
                    domUtils.remove(ni);
                }
            }

            if (browser.webkit) {

                var brs = div.querySelectorAll('div br');
                for (var i = 0, bi; bi = brs[i++];) {
                    var pN = bi.parentNode;
                    if (pN.tagName == 'DIV' && pN.childNodes.length == 1) {
                        pN.innerHTML = '<p><br/></p>';
                        domUtils.remove(pN);
                    }
                }
                var divs = div.querySelectorAll('#baidu_pastebin');
                for (var i = 0, di; di = divs[i++];) {
                    var tmpP = me.document.createElement('p');
                    di.parentNode.insertBefore(tmpP, di);
                    while (di.firstChild) {
                        tmpP.appendChild(di.firstChild);
                    }
                    domUtils.remove(di);
                }

                var metas = div.querySelectorAll('meta');
                for (var i = 0, ci; ci = metas[i++];) {
                    domUtils.remove(ci);
                }

                var brs = div.querySelectorAll('br');
                for (i = 0; ci = brs[i++];) {
                    if (/^apple-/i.test(ci.className)) {
                        domUtils.remove(ci);
                    }
                }
            }
            if (browser.gecko) {
                var dirtyNodes = div.querySelectorAll('[_moz_dirty]');
                for (i = 0; ci = dirtyNodes[i++];) {
                    ci.removeAttribute('_moz_dirty');
                }
            }
            if (!browser.ie) {
                var spans = div.querySelectorAll('span.Apple-style-span');
                for (var i = 0, ci; ci = spans[i++];) {
                    domUtils.remove(ci, true);
                }
            }

            //ie下使用innerHTML会产生多余的\r\n字符，也会产生&nbsp;这里过滤掉
            html = div.innerHTML;//.replace(/>(?:(\s|&nbsp;)*?)</g,'><');

            //过滤word粘贴过来的冗余属性
            html = UE.filterWord(html);
            //取消了忽略空白的第二个参数，粘贴过来的有些是有空白的，会被套上相关的标签
            var root = UE.htmlparser(html);
            //如果给了过滤规则就先进行过滤
            if (me.options.filterRules) {
                UE.filterNode(root, me.options.filterRules);
            }
            //执行默认的处理
            me.filterInputRule(root);
            //针对chrome的处理
            if (browser.webkit) {
                var br = root.lastChild();
                if (br && br.type == 'element' && br.tagName == 'br') {
                    root.removeChild(br)
                }
                utils.each(me.body.querySelectorAll('div'), function (node) {
                    if (domUtils.isEmptyBlock(node)) {
                        domUtils.remove(node)
                    }
                })
            }
            html = {'html': root.toHtml()};
            me.fireEvent('beforepaste', html, root);
            //抢了默认的粘贴，那后边的内容就不执行了，比如表格粘贴
            if(!html.html){
                return;
            }
            root = UE.htmlparser(html.html,true);
            //如果开启了纯文本模式
            if (me.queryCommandState('pasteplain') === 1) {
                me.execCommand('insertHtml', UE.filterNode(root, me.options.filterTxtRules).toHtml(), true);
            } else {
                //文本模式
                UE.filterNode(root, me.options.filterTxtRules);
                txtContent = root.toHtml();
                //完全模式
                htmlContent = html.html;

                address = me.selection.getRange().createAddress(true);
                me.execCommand('insertHtml', htmlContent, true);
            }
            me.fireEvent("afterpaste", html);
        }
    }

    me.addListener('pasteTransfer', function (cmd, plainType) {

        if (address && txtContent && htmlContent && txtContent != htmlContent) {
            var range = me.selection.getRange();
            range.moveToAddress(address, true);

            if (!range.collapsed) {

                while (!domUtils.isBody(range.startContainer)
                    ) {
                    var start = range.startContainer;
                    if(start.nodeType == 1){
                        start = start.childNodes[range.startOffset];
                        if(!start){
                            range.setStartBefore(range.startContainer);
                            continue;
                        }
                        var pre = start.previousSibling;

                        if(pre && pre.nodeType == 3 && new RegExp('^[\n\r\t '+domUtils.fillChar+']*$').test(pre.nodeValue)){
                            range.setStartBefore(pre)
                        }
                    }
                    if(range.startOffset == 0){
                        range.setStartBefore(range.startContainer);
                    }else{
                        break;
                    }

                }
                while (!domUtils.isBody(range.endContainer)
                    ) {
                    var end = range.endContainer;
                    if(end.nodeType == 1){
                        end = end.childNodes[range.endOffset];
                        if(!end){
                            range.setEndAfter(range.endContainer);
                            continue;
                        }
                        var next = end.nextSibling;
                        if(next && next.nodeType == 3 && new RegExp('^[\n\r\t'+domUtils.fillChar+']*$').test(next.nodeValue)){
                            range.setEndAfter(next)
                        }
                    }
                    if(range.endOffset == range.endContainer[range.endContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length){
                        range.setEndAfter(range.endContainer);
                    }else{
                        break;
                    }

                }

            }

            range.deleteContents();
            range.select(true);
            me.__hasEnterExecCommand = true;
            var html = htmlContent;
            if (plainType === 2) {
                html = html.replace(/<(\/?)([\w\-]+)([^>]*)>/gi, function (a, b, tagName, attrs) {
                    tagName = tagName.toLowerCase();
                    if ({img: 1}[tagName]) {
                        return a;
                    }
                    attrs = attrs.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi, function (str, atr, val) {
                        if ({
                            'src': 1,
                            'href': 1,
                            'name': 1
                        }[atr.toLowerCase()]) {
                            return atr + '=' + val + ' '
                        }
                        return ''
                    });
                    if ({
                        'span': 1,
                        'div': 1
                    }[tagName]) {
                        return ''
                    } else {

                        return '<' + b + tagName + ' ' + utils.trim(attrs) + '>'
                    }

                });
            } else if (plainType) {
                html = txtContent;
            }
            me.execCommand('inserthtml', html, true);
            me.__hasEnterExecCommand = false;
            var rng = me.selection.getRange();
            while (!domUtils.isBody(rng.startContainer) && !rng.startOffset &&
                rng.startContainer[rng.startContainer.nodeType == 3 ? 'nodeValue' : 'childNodes'].length
                ) {
                rng.setStartBefore(rng.startContainer);
            }
            var tmpAddress = rng.createAddress(true);
            address.endAddress = tmpAddress.startAddress;
        }
    });
    me.addListener('ready', function () {
        domUtils.on(me.body, 'cut', function () {
            var range = me.selection.getRange();
            if (!range.collapsed && me.undoManger) {
                me.undoManger.save();
            }
        });

        //ie下beforepaste在点击右键时也会触发，所以用监控键盘才处理
        domUtils.on(me.body, browser.ie || browser.opera ? 'keydown' : 'paste', function (e) {
            if ((browser.ie || browser.opera) && ((!e.ctrlKey && !e.metaKey) || e.keyCode != '86')) {
                return;
            }
            getClipboardData.call(me, function (div) {
                filter(div);
            });
        });

    });
};


///import core
///commands 有序列表,无序列表
///commandsName  InsertOrderedList,InsertUnorderedList
///commandsTitle  有序列表,无序列表
/**
 * 有序列表
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertorderlist插入有序列表
 * @param   {String}   style               值为：decimal,lower-alpha,lower-roman,upper-alpha,upper-roman
 * @author zhanyi
 */
/**
 * 无序链接
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertunorderlist插入无序列表
 * * @param   {String}   style            值为：circle,disc,square
 * @author zhanyi
 */

UE.plugins['list'] = function () {
    var me = this,
        notExchange = {
            'TD':1,
            'PRE':1,
            'BLOCKQUOTE':1
        };
    var customStyle = {
        'cn' : 'cn-1-',
        'cn1' : 'cn-2-',
        'cn2' : 'cn-3-',
        'num':  'num-1-',
        'num1' : 'num-2-',
        'num2' : 'num-3-',
        'dash'  : 'dash',
        'dot':'dot'
    };

    me.setOpt( {
        'insertorderedlist':{
            'num':'',
            'num1':'',
            'num2':'',
            'cn':'',
            'cn1':'',
            'cn2':'',
            'decimal':'',
            'lower-alpha':'',
            'lower-roman':'',
            'upper-alpha':'',
            'upper-roman':''
        },
        'insertunorderedlist':{
            'circle':'',
            'disc':'',
            'square':'',
            'dash' : '',
            'dot':''
        },
        listDefaultPaddingLeft : '30',
        listiconpath : 'http://bs.baidu.com/listicon/',
        maxListLevel : -1//-1不限制
    } );
    function listToArray(list){
        var arr = [];
        for(var p in list){
            arr.push(p)
        }
        return arr;
    }
    var listStyle = {
        'OL':listToArray(me.options.insertorderedlist),
        'UL':listToArray(me.options.insertunorderedlist)
    };
    var liiconpath = me.options.listiconpath;

    //根据用户配置，调整customStyle
    for(var s in customStyle){
        if(!me.options.insertorderedlist.hasOwnProperty(s) && !me.options.insertunorderedlist.hasOwnProperty(s)){
            delete customStyle[s];
        }
    }

    me.ready(function () {
        var customCss = [];
        for(var p in customStyle){
            if(p == 'dash' || p == 'dot'){
                customCss.push('li.list-' + customStyle[p] + '{background-image:url(' + liiconpath +customStyle[p]+'.gif)}');
                customCss.push('ul.custom_'+p+'{list-style:none;}ul.custom_'+p+' li{background-position:0 3px;background-repeat:no-repeat}');
            }else{
                for(var i= 0;i<99;i++){
                    customCss.push('li.list-' + customStyle[p] + i + '{background-image:url(' + liiconpath + 'list-'+customStyle[p] + i + '.gif)}')
                }
                customCss.push('ol.custom_'+p+'{list-style:none;}ol.custom_'+p+' li{background-position:0 3px;background-repeat:no-repeat}');
            }
            switch(p){
                case 'cn':
                    customCss.push('li.list-'+p+'-paddingleft-1{padding-left:25px}');
                    customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
                    customCss.push('li.list-'+p+'-paddingleft-3{padding-left:55px}');
                    break;
                case 'cn1':
                    customCss.push('li.list-'+p+'-paddingleft-1{padding-left:30px}');
                    customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
                    customCss.push('li.list-'+p+'-paddingleft-3{padding-left:55px}');
                    break;
                case 'cn2':
                    customCss.push('li.list-'+p+'-paddingleft-1{padding-left:40px}');
                    customCss.push('li.list-'+p+'-paddingleft-2{padding-left:55px}');
                    customCss.push('li.list-'+p+'-paddingleft-3{padding-left:68px}');
                    break;
                case 'num':
                case 'num1':
                    customCss.push('li.list-'+p+'-paddingleft-1{padding-left:25px}');
                    break;
                case 'num2':
                    customCss.push('li.list-'+p+'-paddingleft-1{padding-left:35px}');
                    customCss.push('li.list-'+p+'-paddingleft-2{padding-left:40px}');
                    break;
                case 'dash':
                    customCss.push('li.list-'+p+'-paddingleft{padding-left:35px}');
                    break;
                case 'dot':
                    customCss.push('li.list-'+p+'-paddingleft{padding-left:20px}');
            }
        }
        customCss.push('.list-paddingleft-1{padding-left:0}');
        customCss.push('.list-paddingleft-2{padding-left:'+me.options.listDefaultPaddingLeft+'px}');
        customCss.push('.list-paddingleft-3{padding-left:'+me.options.listDefaultPaddingLeft*2+'px}');
        //如果不给宽度会在自定应样式里出现滚动条
        utils.cssRule('list', 'ol,ul{margin:0;pading:0;'+(browser.ie ? '' : 'width:95%')+'}li{clear:both;}'+customCss.join('\n'), me.document);
    });
    //单独处理剪切的问题
    me.ready(function(){
        domUtils.on(me.body,'cut',function(){
            setTimeout(function(){
                var rng = me.selection.getRange(),li;
                //trace:3416
                if(!rng.collapsed){
                    if(li = domUtils.findParentByTagName(rng.startContainer,'li',true)){
                        if(!li.nextSibling && domUtils.isEmptyBlock(li)){
                            var pn = li.parentNode,node;
                            if(node = pn.previousSibling){
                                domUtils.remove(pn);
                                rng.setStartAtLast(node).collapse(true);
                                rng.select(true);
                            }else if(node = pn.nextSibling){
                                domUtils.remove(pn);
                                rng.setStartAtFirst(node).collapse(true);
                                rng.select(true);
                            }else{
                                var tmpNode = me.document.createElement('p');
                                domUtils.fillNode(me.document,tmpNode);
                                pn.parentNode.insertBefore(tmpNode,pn);
                                domUtils.remove(pn);
                                rng.setStart(tmpNode,0).collapse(true);
                                rng.select(true);
                            }
                        }
                    }
                }

            })
        })
    });

    function getStyle(node){
        var cls = node.className;
        if(domUtils.hasClass(node,/custom_/)){
            return cls.match(/custom_(\w+)/)[1]
        }
        return domUtils.getStyle(node, 'list-style-type')

    }

    me.addListener('beforepaste',function(type,html){
        var me = this,
            rng = me.selection.getRange(),li;
        var root = UE.htmlparser(html.html,true);
        if(li = domUtils.findParentByTagName(rng.startContainer,'li',true)){
            var list = li.parentNode,tagName = list.tagName == 'OL' ? 'ul':'ol';
            utils.each(root.getNodesByTagName(tagName),function(n){
                n.tagName = list.tagName;
                n.setAttr();
                if(n.parentNode === root){
                    type = getStyle(list) || (list.tagName == 'OL' ? 'decimal' : 'disc')
                }else{
                    var className = n.parentNode.getAttr('class');
                    if(className && /custom_/.test(className)){
                        type = className.match(/custom_(\w+)/)[1]
                    }else{
                        type = n.parentNode.getStyle('list-style-type');
                    }
                    if(!type){
                        type = list.tagName == 'OL' ? 'decimal' : 'disc';
                    }
                }
                var index = utils.indexOf(listStyle[list.tagName], type);
                if(n.parentNode !== root)
                    index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                var currentStyle = listStyle[list.tagName][index];
                if(customStyle[currentStyle]){
                    n.setAttr('class', 'custom_' + currentStyle)

                }else{
                    n.setStyle('list-style-type',currentStyle)
                }
            })

        }

        html.html = root.toHtml();
    });
    //进入编辑器的li要套p标签
    me.addInputRule(function(root){
        utils.each(root.getNodesByTagName('li'),function(li){
            var tmpP = UE.uNode.createElement('p');
            for(var i= 0,ci;ci=li.children[i];){
                if(ci.type == 'text' || dtd.p[ci.tagName]){
                    tmpP.appendChild(ci);
                }else{
                    if(tmpP.firstChild()){
                        li.insertBefore(tmpP,ci);
                        tmpP = UE.uNode.createElement('p');
                        i = i + 2;
                    }else{
                        i++;
                    }

                }
            }
            if(tmpP.firstChild() && !tmpP.parentNode || !li.firstChild()){
                li.appendChild(tmpP);
            }
            //trace:3357
            //p不能为空
            if (!tmpP.firstChild()) {
                tmpP.innerHTML(browser.ie ? '&nbsp;' : '<br/>')
            }
            //去掉末尾的空白
            var p = li.firstChild();
            var lastChild = p.lastChild();
            if(lastChild && lastChild.type == 'text' && /^\s*$/.test(lastChild.data)){
                p.removeChild(lastChild)
            }
        });
        var orderlisttype = {
                'num1':/^\d+\)/,
                'decimal':/^\d+\./,
                'lower-alpha':/^[a-z]+\)/,
                'upper-alpha':/^[A-Z]+\./,
                'cn':/^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,
                'cn2':/^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/
            },
            unorderlisttype = {
                'square':'n'
            };
        function checkListType(content,container){
            var span = container.firstChild();
            if(span &&  span.type == 'element' && span.tagName == 'span' && /Wingdings|Symbol/.test(span.getStyle('font-family'))){
                for(var p in unorderlisttype){
                    if(unorderlisttype[p] == span.data){
                        return p
                    }
                }
                return 'disc'
            }
            for(var p in orderlisttype){
                if(orderlisttype[p].test(content)){
                    return p;
                }
            }

        }
        utils.each(root.getNodesByTagName('p'),function(node){
            if(node.getAttr('class') != 'MsoListParagraph'){
                return
            }

            //word粘贴过来的会带有margin要去掉,但这样也可能会误命中一些央视
            node.setStyle('margin','');
            node.setStyle('margin-left','');
            node.setAttr('class','');

            function appendLi(list,p,type){
                if(list.tagName == 'ol'){
                    if(browser.ie){
                        var first = p.firstChild();
                        if(first.type =='element' && first.tagName == 'span' && orderlisttype[type].test(first.innerText())){
                            p.removeChild(first);
                        }
                    }else{
                        p.innerHTML(p.innerHTML().replace(orderlisttype[type],''));
                    }
                }else{
                    p.removeChild(p.firstChild())
                }

                var li = UE.uNode.createElement('li');
                li.appendChild(p);
                list.appendChild(li);
            }
            var tmp = node,type,cacheNode = node;

            if(node.parentNode.tagName != 'li' && (type = checkListType(node.innerText(),node))){

                var list = UE.uNode.createElement(me.options.insertorderedlist.hasOwnProperty(type) ? 'ol' : 'ul');
                if(customStyle[type]){
                    list.setAttr('class','custom_'+type)
                }else{
                    list.setStyle('list-style-type',type)
                }
                while(node && node.parentNode.tagName != 'li' && checkListType(node.innerText(),node)){
                    tmp = node.nextSibling();
                    if(!tmp){
                        node.parentNode.insertBefore(list,node)
                    }
                    appendLi(list,node,type);
                    node = tmp;
                }
                if(!list.parentNode && node && node.parentNode){
                    node.parentNode.insertBefore(list,node)
                }
            }
            var span = cacheNode.firstChild();
            if(span && span.type == 'element' && span.tagName == 'span' && /^\s*(&nbsp;)+\s*$/.test(span.innerText())){
                span.parentNode.removeChild(span)
            }
        })
    });

    //调整索引标签
    me.addListener('contentchange',function(){
        adjustListStyle(me.document)
    });

    function adjustListStyle(doc,ignore){
        utils.each(domUtils.getElementsByTagName(doc,'ol ul'),function(node){

            if(!domUtils.inDoc(node,doc))
                return;

            var parent = node.parentNode;
            if(parent.tagName == node.tagName){
                var nodeStyleType = getStyle(node) || (node.tagName == 'OL' ? 'decimal' : 'disc'),
                    parentStyleType = getStyle(parent) || (parent.tagName == 'OL' ? 'decimal' : 'disc');
                if(nodeStyleType == parentStyleType){
                    var styleIndex = utils.indexOf(listStyle[node.tagName], nodeStyleType);
                    styleIndex = styleIndex + 1 == listStyle[node.tagName].length ? 0 : styleIndex + 1;
                    setListStyle(node,listStyle[node.tagName][styleIndex])
                }

            }
            var index = 0,type = 2;
            if( domUtils.hasClass(node,/custom_/)){
                if(!(/[ou]l/i.test(parent.tagName) && domUtils.hasClass(parent,/custom_/))){
                    type = 1;
                }
            }else{
                if(/[ou]l/i.test(parent.tagName) && domUtils.hasClass(parent,/custom_/)){
                    type = 3;
                }
            }

            var style = domUtils.getStyle(node, 'list-style-type');
            style && (node.style.cssText = 'list-style-type:' + style);
            node.className = utils.trim(node.className.replace(/list-paddingleft-\w+/,'')) + ' list-paddingleft-' + type;
            utils.each(domUtils.getElementsByTagName(node,'li'),function(li){
                li.style.cssText && (li.style.cssText = '');
                if(!li.firstChild){
                    domUtils.remove(li);
                    return;
                }
                if(li.parentNode !== node){
                    return;
                }
                index++;
                if(domUtils.hasClass(node,/custom_/) ){
                    var paddingLeft = 1,currentStyle = getStyle(node);
                    if(node.tagName == 'OL'){
                        if(currentStyle){
                            switch(currentStyle){
                                case 'cn' :
                                case 'cn1':
                                case 'cn2':
                                    if(index > 10 && (index % 10 == 0 || index > 10 && index < 20)){
                                        paddingLeft = 2
                                    }else if(index > 20){
                                        paddingLeft = 3
                                    }
                                    break;
                                case 'num2' :
                                    if(index > 9){
                                        paddingLeft = 2
                                    }
                            }
                        }
                        li.className = 'list-'+customStyle[currentStyle]+ index + ' ' + 'list-'+currentStyle+'-paddingleft-' + paddingLeft;
                    }else{
                        li.className = 'list-'+customStyle[currentStyle]  + ' ' + 'list-'+currentStyle+'-paddingleft';
                    }
                }else{
                    li.className = li.className.replace(/list-[\w\-]+/gi,'');
                }
                var className = li.getAttribute('class');
                if(className !== null && !className.replace(/\s/g,'')){
                    domUtils.removeAttributes(li,'class')
                }
            });
            !ignore && adjustList(node,node.tagName.toLowerCase(),getStyle(node)||domUtils.getStyle(node, 'list-style-type'),true);
        })
    }
    function adjustList(list, tag, style,ignoreEmpty) {
        var nextList = list.nextSibling;
        if (nextList && nextList.nodeType == 1 && nextList.tagName.toLowerCase() == tag && (getStyle(nextList) || domUtils.getStyle(nextList, 'list-style-type') || (tag == 'ol' ? 'decimal' : 'disc')) == style) {
            domUtils.moveChild(nextList, list);
            if (nextList.childNodes.length == 0) {
                domUtils.remove(nextList);
            }
        }
        if(nextList && domUtils.isFillChar(nextList)){
            domUtils.remove(nextList);
        }
        var preList = list.previousSibling;
        if (preList && preList.nodeType == 1 && preList.tagName.toLowerCase() == tag && (getStyle(preList) || domUtils.getStyle(preList, 'list-style-type') || (tag == 'ol' ? 'decimal' : 'disc')) == style) {
            domUtils.moveChild(list, preList);
        }
        if(preList && domUtils.isFillChar(preList)){
            domUtils.remove(preList);
        }
        !ignoreEmpty && domUtils.isEmptyBlock(list) && domUtils.remove(list);
        if(getStyle(list)){
            adjustListStyle(list.ownerDocument,true)
        }
    }

    function setListStyle(list,style){
        if(customStyle[style]){
            list.className = 'custom_' + style;
        }
        try{
            domUtils.setStyle(list, 'list-style-type', style);
        }catch(e){}
    }
    function clearEmptySibling(node) {
        var tmpNode = node.previousSibling;
        if (tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove(tmpNode);
        }
        tmpNode = node.nextSibling;
        if (tmpNode && domUtils.isEmptyBlock(tmpNode)) {
            domUtils.remove(tmpNode);
        }
    }

    me.addListener('keydown', function (type, evt) {
        function preventAndSave() {
            evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
            me.fireEvent('contentchange');
            me.undoManger && me.undoManger.save();
        }
        function findList(node,filterFn){
            while(node && !domUtils.isBody(node)){
                if(filterFn(node)){
                    return null
                }
                if(node.nodeType == 1 && /[ou]l/i.test(node.tagName)){
                    return node;
                }
                node = node.parentNode;
            }
            return null;
        }
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13 && !evt.shiftKey) {//回车
            var rng = me.selection.getRange(),
                parent = domUtils.findParent(rng.startContainer,function(node){return domUtils.isBlockElm(node)},true),
                li = domUtils.findParentByTagName(rng.startContainer,'li',true);
            if(parent && parent.tagName != 'PRE' && !li){
                var html = parent.innerHTML.replace(new RegExp(domUtils.fillChar, 'g'),'');
                if(/^\s*1\s*\.[^\d]/.test(html)){
                    parent.innerHTML = html.replace(/^\s*1\s*\./,'');
                    rng.setStartAtLast(parent).collapse(true).select();
                    me.__hasEnterExecCommand = true;
                    me.execCommand('insertorderedlist');
                    me.__hasEnterExecCommand = false;
                }
            }
            var range = me.selection.getRange(),
                start = findList(range.startContainer,function (node) {
                    return node.tagName == 'TABLE';
                }),
                end = range.collapsed ? start : findList(range.endContainer,function (node) {
                    return node.tagName == 'TABLE';
                });

            if (start && end && start === end) {

                if (!range.collapsed) {
                    start = domUtils.findParentByTagName(range.startContainer, 'li', true);
                    end = domUtils.findParentByTagName(range.endContainer, 'li', true);
                    if (start && end && start === end) {
                        range.deleteContents();
                        li = domUtils.findParentByTagName(range.startContainer, 'li', true);
                        if (li && domUtils.isEmptyBlock(li)) {

                            pre = li.previousSibling;
                            next = li.nextSibling;
                            p = me.document.createElement('p');

                            domUtils.fillNode(me.document, p);
                            parentList = li.parentNode;
                            if (pre && next) {
                                range.setStart(next, 0).collapse(true).select(true);
                                domUtils.remove(li);

                            } else {
                                if (!pre && !next || !pre) {

                                    parentList.parentNode.insertBefore(p, parentList);


                                } else {
                                    li.parentNode.parentNode.insertBefore(p, parentList.nextSibling);
                                }
                                domUtils.remove(li);
                                if (!parentList.firstChild) {
                                    domUtils.remove(parentList);
                                }
                                range.setStart(p, 0).setCursor();


                            }
                            preventAndSave();
                            return;

                        }
                    } else {
                        var tmpRange = range.cloneRange(),
                            bk = tmpRange.collapse(false).createBookmark();

                        range.deleteContents();
                        tmpRange.moveToBookmark(bk);
                        var li = domUtils.findParentByTagName(tmpRange.startContainer, 'li', true);

                        clearEmptySibling(li);
                        tmpRange.select();
                        preventAndSave();
                        return;
                    }
                }


                li = domUtils.findParentByTagName(range.startContainer, 'li', true);

                if (li) {
                    if (domUtils.isEmptyBlock(li)) {
                        bk = range.createBookmark();
                        var parentList = li.parentNode;
                        if (li !== parentList.lastChild) {
                            domUtils.breakParent(li, parentList);
                            clearEmptySibling(li);
                        } else {

                            parentList.parentNode.insertBefore(li, parentList.nextSibling);
                            if (domUtils.isEmptyNode(parentList)) {
                                domUtils.remove(parentList);
                            }
                        }
                        //嵌套不处理
                        if (!dtd.$list[li.parentNode.tagName]) {

                            if (!domUtils.isBlockElm(li.firstChild)) {
                                p = me.document.createElement('p');
                                li.parentNode.insertBefore(p, li);
                                while (li.firstChild) {
                                    p.appendChild(li.firstChild);
                                }
                                domUtils.remove(li);
                            } else {
                                domUtils.remove(li, true);
                            }
                        }
                        range.moveToBookmark(bk).select();


                    } else {
                        var first = li.firstChild;
                        if (!first || !domUtils.isBlockElm(first)) {
                            var p = me.document.createElement('p');

                            !li.firstChild && domUtils.fillNode(me.document, p);
                            while (li.firstChild) {

                                p.appendChild(li.firstChild);
                            }
                            li.appendChild(p);
                            first = p;
                        }

                        var span = me.document.createElement('span');

                        range.insertNode(span);
                        domUtils.breakParent(span, li);

                        var nextLi = span.nextSibling;
                        first = nextLi.firstChild;

                        if (!first) {
                            p = me.document.createElement('p');

                            domUtils.fillNode(me.document, p);
                            nextLi.appendChild(p);
                            first = p;
                        }
                        if (domUtils.isEmptyNode(first)) {
                            first.innerHTML = '';
                            domUtils.fillNode(me.document, first);
                        }

                        range.setStart(first, 0).collapse(true).shrinkBoundary().select();
                        domUtils.remove(span);
                        var pre = nextLi.previousSibling;
                        if (pre && domUtils.isEmptyBlock(pre)) {
                            pre.innerHTML = '<p></p>';
                            domUtils.fillNode(me.document, pre.firstChild);
                        }

                    }
//                        }
                    preventAndSave();
                }


            }


        }
        if (keyCode == 8) {
            //修中ie中li下的问题
            range = me.selection.getRange();
            if (range.collapsed && domUtils.isStartInblock(range)) {
                tmpRange = range.cloneRange().trimBoundary();
                li = domUtils.findParentByTagName(range.startContainer, 'li', true);
                //要在li的最左边，才能处理
                if (li && domUtils.isStartInblock(tmpRange)) {
                    start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                    if (start && start !== li.firstChild) {
                        var parentList = domUtils.findParentByTagName(start,['ol','ul']);
                        domUtils.breakParent(start,parentList);
                        clearEmptySibling(start);
                        me.fireEvent('contentchange');
                        range.setStart(start,0).setCursor(false,true);
                        me.fireEvent('saveScene');
                        domUtils.preventDefault(evt);
                        return;
                    }

                    if (li && (pre = li.previousSibling)) {
                        if (keyCode == 46 && li.childNodes.length) {
                            return;
                        }
                        //有可能上边的兄弟节点是个2级菜单，要追加到2级菜单的最后的li
                        if (dtd.$list[pre.tagName]) {
                            pre = pre.lastChild;
                        }
                        me.undoManger && me.undoManger.save();
                        first = li.firstChild;
                        if (domUtils.isBlockElm(first)) {
                            if (domUtils.isEmptyNode(first)) {
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                                pre.appendChild(first);
                                range.setStart(first, 0).setCursor(false, true);
                                //first不是唯一的节点
                                while (li.firstChild) {
                                    pre.appendChild(li.firstChild);
                                }
                            } else {

                                span = me.document.createElement('span');
                                range.insertNode(span);
                                //判断pre是否是空的节点,如果是<p><br/></p>类型的空节点，干掉p标签防止它占位
                                if (domUtils.isEmptyBlock(pre)) {
                                    pre.innerHTML = '';
                                }
                                domUtils.moveChild(li, pre);
                                range.setStartBefore(span).collapse(true).select(true);

                                domUtils.remove(span);

                            }
                        } else {
                            if (domUtils.isEmptyNode(li)) {
                                var p = me.document.createElement('p');
                                pre.appendChild(p);
                                range.setStart(p, 0).setCursor();
//                                    range.setEnd(pre, pre.childNodes.length).shrinkBoundary().collapse().select(true);
                            } else {
                                range.setEnd(pre, pre.childNodes.length).collapse().select(true);
                                while (li.firstChild) {
                                    pre.appendChild(li.firstChild);
                                }
                            }
                        }
                        domUtils.remove(li);
                        me.fireEvent('contentchange');
                        me.fireEvent('saveScene');
                        domUtils.preventDefault(evt);
                        return;

                    }
                    //trace:980

                    if (li && !li.previousSibling) {
                        var parentList = li.parentNode;
                        var bk = range.createBookmark();
                        if(domUtils.isTagNode(parentList.parentNode,'ol ul')){
                            parentList.parentNode.insertBefore(li,parentList);
                            if(domUtils.isEmptyNode(parentList)){
                                domUtils.remove(parentList)
                            }
                        }else{

                            while(li.firstChild){
                                parentList.parentNode.insertBefore(li.firstChild,parentList);
                            }

                            domUtils.remove(li);
                            if(domUtils.isEmptyNode(parentList)){
                                domUtils.remove(parentList)
                            }

                        }
                        range.moveToBookmark(bk).setCursor(false,true);
                        me.fireEvent('contentchange');
                        me.fireEvent('saveScene');
                        domUtils.preventDefault(evt);
                        return;

                    }


                }


            }

        }
    });

    me.addListener('keyup',function(type, evt){
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 8) {
            var rng = me.selection.getRange(),list;
            if(list = domUtils.findParentByTagName(rng.startContainer,['ol', 'ul'],true)){
                adjustList(list,list.tagName.toLowerCase(),getStyle(list)||domUtils.getComputedStyle(list,'list-style-type'),true)
            }
        }
    });
    //处理tab键
    me.addListener('tabkeydown',function(){

        var range = me.selection.getRange();

        //控制级数
        function checkLevel(li){
            if(me.options.maxListLevel != -1){
                var level = li.parentNode,levelNum = 0;
                while(/[ou]l/i.test(level.tagName)){
                    levelNum++;
                    level = level.parentNode;
                }
                if(levelNum >= me.options.maxListLevel){
                    return true;
                }
            }
        }
        //只以开始为准
        //todo 后续改进
        var li = domUtils.findParentByTagName(range.startContainer, 'li', true);
        if(li){

            var bk;
            if(range.collapsed){
                if(checkLevel(li))
                    return true;
                var parentLi = li.parentNode,
                    list = me.document.createElement(parentLi.tagName),
                    index = utils.indexOf(listStyle[list.tagName], getStyle(parentLi)||domUtils.getComputedStyle(parentLi, 'list-style-type'));
                index = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                var currentStyle = listStyle[list.tagName][index];
                setListStyle(list,currentStyle);
                if(domUtils.isStartInblock(range)){
                    me.fireEvent('saveScene');
                    bk = range.createBookmark();
                    parentLi.insertBefore(list, li);
                    list.appendChild(li);
                    adjustList(list,list.tagName.toLowerCase(),currentStyle);
                    me.fireEvent('contentchange');
                    range.moveToBookmark(bk).select(true);
                    return true;
                }
            }else{
                me.fireEvent('saveScene');
                bk = range.createBookmark();
                for(var i= 0,closeList,parents = domUtils.findParents(li),ci;ci=parents[i++];){
                    if(domUtils.isTagNode(ci,'ol ul')){
                        closeList = ci;
                        break;
                    }
                }
                var current = li;
                if(bk.end){
                    while(current && !(domUtils.getPosition(current, bk.end) & domUtils.POSITION_FOLLOWING)){
                        if(checkLevel(current)){
                            current = domUtils.getNextDomNode(current,false,null,function(node){return node !== closeList});
                            continue;
                        }
                        var parentLi = current.parentNode,
                            list = me.document.createElement(parentLi.tagName),
                            index = utils.indexOf(listStyle[list.tagName], getStyle(parentLi)||domUtils.getComputedStyle(parentLi, 'list-style-type'));
                        var currentIndex = index + 1 == listStyle[list.tagName].length ? 0 : index + 1;
                        var currentStyle = listStyle[list.tagName][currentIndex];
                        setListStyle(list,currentStyle);
                        parentLi.insertBefore(list, current);
                        while(current && !(domUtils.getPosition(current, bk.end) & domUtils.POSITION_FOLLOWING)){
                            li = current.nextSibling;
                            list.appendChild(current);
                            if(!li || domUtils.isTagNode(li,'ol ul')){
                                if(li){
                                    while(li = li.firstChild){
                                        if(li.tagName == 'LI'){
                                            break;
                                        }
                                    }
                                }else{
                                    li = domUtils.getNextDomNode(current,false,null,function(node){return node !== closeList});
                                }
                                break;
                            }
                            current = li;
                        }
                        adjustList(list,list.tagName.toLowerCase(),currentStyle);
                        current = li;
                    }
                }
                me.fireEvent('contentchange');
                range.moveToBookmark(bk).select();
                return true;
            }
        }

    });
    function getLi(start){
        while(start && !domUtils.isBody(start)){
            if(start.nodeName == 'TABLE'){
                return null;
            }
            if(start.nodeName == 'LI'){
                return start
            }
            start = start.parentNode;
        }
    }
    me.commands['insertorderedlist'] =
    me.commands['insertunorderedlist'] = {
            execCommand:function (command, style) {

                if (!style) {
                    style = command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc';
                }
                var me = this,
                    range = this.selection.getRange(),
                    filterFn = function (node) {
                        return   node.nodeType == 1 ? node.tagName.toLowerCase() != 'br' : !domUtils.isWhitespace(node);
                    },
                    tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul',
                    frag = me.document.createDocumentFragment();
                //去掉是因为会出现选到末尾，导致adjustmentBoundary缩到ol/ul的位置
                //range.shrinkBoundary();//.adjustmentBoundary();
                range.adjustmentBoundary().shrinkBoundary();
                var bko = range.createBookmark(true),
                    start = getLi(me.document.getElementById(bko.start)),
                    modifyStart = 0,
                    end =  getLi(me.document.getElementById(bko.end)),
                    modifyEnd = 0,
                    startParent, endParent,
                    list, tmp;

                if (start || end) {
                    start && (startParent = start.parentNode);
                    if (!bko.end) {
                        end = start;
                    }
                    end && (endParent = end.parentNode);

                    if (startParent === endParent) {
                        while (start !== end) {
                            tmp = start;
                            start = start.nextSibling;
                            if (!domUtils.isBlockElm(tmp.firstChild)) {
                                var p = me.document.createElement('p');
                                while (tmp.firstChild) {
                                    p.appendChild(tmp.firstChild);
                                }
                                tmp.appendChild(p);
                            }
                            frag.appendChild(tmp);
                        }
                        tmp = me.document.createElement('span');
                        startParent.insertBefore(tmp, end);
                        if (!domUtils.isBlockElm(end.firstChild)) {
                            p = me.document.createElement('p');
                            while (end.firstChild) {
                                p.appendChild(end.firstChild);
                            }
                            end.appendChild(p);
                        }
                        frag.appendChild(end);
                        domUtils.breakParent(tmp, startParent);
                        if (domUtils.isEmptyNode(tmp.previousSibling)) {
                            domUtils.remove(tmp.previousSibling);
                        }
                        if (domUtils.isEmptyNode(tmp.nextSibling)) {
                            domUtils.remove(tmp.nextSibling)
                        }
                        var nodeStyle = getStyle(startParent) || domUtils.getComputedStyle(startParent, 'list-style-type') || (command.toLowerCase() == 'insertorderedlist' ? 'decimal' : 'disc');
                        if (startParent.tagName.toLowerCase() == tag && nodeStyle == style) {
                            for (var i = 0, ci, tmpFrag = me.document.createDocumentFragment(); ci = frag.childNodes[i++];) {
                                if(domUtils.isTagNode(ci,'ol ul')){
                                    utils.each(domUtils.getElementsByTagName(ci,'li'),function(li){
                                        while(li.firstChild){
                                            tmpFrag.appendChild(li.firstChild);
                                        }

                                    });
                                }else{
                                    while (ci.firstChild) {
                                        tmpFrag.appendChild(ci.firstChild);
                                    }
                                }

                            }
                            tmp.parentNode.insertBefore(tmpFrag, tmp);
                        } else {
                            list = me.document.createElement(tag);
                            setListStyle(list,style);
                            list.appendChild(frag);
                            tmp.parentNode.insertBefore(list, tmp);
                        }

                        domUtils.remove(tmp);
                        list && adjustList(list, tag, style);
                        range.moveToBookmark(bko).select();
                        return;
                    }
                    //开始
                    if (start) {
                        while (start) {
                            tmp = start.nextSibling;
                            if (domUtils.isTagNode(start, 'ol ul')) {
                                frag.appendChild(start);
                            } else {
                                var tmpfrag = me.document.createDocumentFragment(),
                                    hasBlock = 0;
                                while (start.firstChild) {
                                    if (domUtils.isBlockElm(start.firstChild)) {
                                        hasBlock = 1;
                                    }
                                    tmpfrag.appendChild(start.firstChild);
                                }
                                if (!hasBlock) {
                                    var tmpP = me.document.createElement('p');
                                    tmpP.appendChild(tmpfrag);
                                    frag.appendChild(tmpP);
                                } else {
                                    frag.appendChild(tmpfrag);
                                }
                                domUtils.remove(start);
                            }

                            start = tmp;
                        }
                        startParent.parentNode.insertBefore(frag, startParent.nextSibling);
                        if (domUtils.isEmptyNode(startParent)) {
                            range.setStartBefore(startParent);
                            domUtils.remove(startParent);
                        } else {
                            range.setStartAfter(startParent);
                        }
                        modifyStart = 1;
                    }

                    if (end && domUtils.inDoc(endParent, me.document)) {
                        //结束
                        start = endParent.firstChild;
                        while (start && start !== end) {
                            tmp = start.nextSibling;
                            if (domUtils.isTagNode(start, 'ol ul')) {
                                frag.appendChild(start);
                            } else {
                                tmpfrag = me.document.createDocumentFragment();
                                hasBlock = 0;
                                while (start.firstChild) {
                                    if (domUtils.isBlockElm(start.firstChild)) {
                                        hasBlock = 1;
                                    }
                                    tmpfrag.appendChild(start.firstChild);
                                }
                                if (!hasBlock) {
                                    tmpP = me.document.createElement('p');
                                    tmpP.appendChild(tmpfrag);
                                    frag.appendChild(tmpP);
                                } else {
                                    frag.appendChild(tmpfrag);
                                }
                                domUtils.remove(start);
                            }
                            start = tmp;
                        }
                        var tmpDiv = domUtils.createElement(me.document, 'div', {
                            'tmpDiv':1
                        });
                        domUtils.moveChild(end, tmpDiv);

                        frag.appendChild(tmpDiv);
                        domUtils.remove(end);
                        endParent.parentNode.insertBefore(frag, endParent);
                        range.setEndBefore(endParent);
                        if (domUtils.isEmptyNode(endParent)) {
                            domUtils.remove(endParent);
                        }

                        modifyEnd = 1;
                    }


                }

                if (!modifyStart) {
                    range.setStartBefore(me.document.getElementById(bko.start));
                }
                if (bko.end && !modifyEnd) {
                    range.setEndAfter(me.document.getElementById(bko.end));
                }
                range.enlarge(true, function (node) {
                    return notExchange[node.tagName];
                });

                frag = me.document.createDocumentFragment();

                var bk = range.createBookmark(),
                    current = domUtils.getNextDomNode(bk.start, false, filterFn),
                    tmpRange = range.cloneRange(),
                    tmpNode,
                    block = domUtils.isBlockElm;

                while (current && current !== bk.end && (domUtils.getPosition(current, bk.end) & domUtils.POSITION_PRECEDING)) {

                    if (current.nodeType == 3 || dtd.li[current.tagName]) {
                        if (current.nodeType == 1 && dtd.$list[current.tagName]) {
                            while (current.firstChild) {
                                frag.appendChild(current.firstChild);
                            }
                            tmpNode = domUtils.getNextDomNode(current, false, filterFn);
                            domUtils.remove(current);
                            current = tmpNode;
                            continue;

                        }
                        tmpNode = current;
                        tmpRange.setStartBefore(current);

                        while (current && current !== bk.end && (!block(current) || domUtils.isBookmarkNode(current) )) {
                            tmpNode = current;
                            current = domUtils.getNextDomNode(current, false, null, function (node) {
                                return !notExchange[node.tagName];
                            });
                        }

                        if (current && block(current)) {
                            tmp = domUtils.getNextDomNode(tmpNode, false, filterFn);
                            if (tmp && domUtils.isBookmarkNode(tmp)) {
                                current = domUtils.getNextDomNode(tmp, false, filterFn);
                                tmpNode = tmp;
                            }
                        }
                        tmpRange.setEndAfter(tmpNode);

                        current = domUtils.getNextDomNode(tmpNode, false, filterFn);

                        var li = range.document.createElement('li');

                        li.appendChild(tmpRange.extractContents());
                        if(domUtils.isEmptyNode(li)){
                            var tmpNode = range.document.createElement('p');
                            while(li.firstChild){
                                tmpNode.appendChild(li.firstChild)
                            }
                            li.appendChild(tmpNode);
                        }
                        frag.appendChild(li);
                    } else {
                        current = domUtils.getNextDomNode(current, true, filterFn);
                    }
                }
                range.moveToBookmark(bk).collapse(true);
                list = me.document.createElement(tag);
                setListStyle(list,style);
                list.appendChild(frag);
                range.insertNode(list);
                //当前list上下看能否合并
                adjustList(list, tag, style);
                //去掉冗余的tmpDiv
                for (var i = 0, ci, tmpDivs = domUtils.getElementsByTagName(list, 'div'); ci = tmpDivs[i++];) {
                    if (ci.getAttribute('tmpDiv')) {
                        domUtils.remove(ci, true)
                    }
                }
                range.moveToBookmark(bko).select();

            },
            queryCommandState:function (command) {
                var tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul';
                var path = this.selection.getStartElementPath();
                for(var i= 0,ci;ci = path[i++];){
                    if(ci.nodeName == 'TABLE'){
                        return 0
                    }
                    if(tag == ci.nodeName.toLowerCase()){
                        return 1
                    };
                }
                return 0;

            },
            queryCommandValue:function (command) {
                var tag = command.toLowerCase() == 'insertorderedlist' ? 'ol' : 'ul';
                var path = this.selection.getStartElementPath(),
                    node;
                for(var i= 0,ci;ci = path[i++];){
                    if(ci.nodeName == 'TABLE'){
                        node = null;
                        break;
                    }
                    if(tag == ci.nodeName.toLowerCase()){
                        node = ci;
                        break;
                    };
                }
                return node ? getStyle(node) || domUtils.getComputedStyle(node, 'list-style-type') : null;
            }
        };
};


///import core
///import plugins/serialize.js
///import plugins/undo.js
///commands 查看源码
///commandsName  Source
///commandsTitle  查看源码
(function (){
    var sourceEditors = {
        textarea: function (editor, holder){
            var textarea = holder.ownerDocument.createElement('textarea');
            textarea.style.cssText = 'position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;';
            // todo: IE下只有onresize属性可用... 很纠结
            if (browser.ie && browser.version < 8) {
                textarea.style.width = holder.offsetWidth + 'px';
                textarea.style.height = holder.offsetHeight + 'px';
                holder.onresize = function (){
                    textarea.style.width = holder.offsetWidth + 'px';
                    textarea.style.height = holder.offsetHeight + 'px';
                };
            }
            holder.appendChild(textarea);
            return {
                setContent: function (content){
                    textarea.value = content;
                },
                getContent: function (){
                    return textarea.value;
                },
                select: function (){
                    var range;
                    if (browser.ie) {
                        range = textarea.createTextRange();
                        range.collapse(true);
                        range.select();
                    } else {
                        //todo: chrome下无法设置焦点
                        textarea.setSelectionRange(0, 0);
                        textarea.focus();
                    }
                },
                dispose: function (){
                    holder.removeChild(textarea);
                    // todo
                    holder.onresize = null;
                    textarea = null;
                    holder = null;
                }
            };
        },
        codemirror: function (editor, holder){

            var codeEditor = window.CodeMirror(holder, {
                mode: "text/html",
                tabMode: "indent",
                lineNumbers: true,
                lineWrapping:true
            });
            var dom = codeEditor.getWrapperElement();
            dom.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
            codeEditor.getScrollerElement().style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;';
            codeEditor.refresh();
            return {
                getCodeMirror:function(){
                    return codeEditor;
                },
                setContent: function (content){
                    codeEditor.setValue(content);
                },
                getContent: function (){
                    return codeEditor.getValue();
                },
                select: function (){
                    codeEditor.focus();
                },
                dispose: function (){
                    holder.removeChild(dom);
                    dom = null;
                    codeEditor = null;
                }
            };
        }
    };

    UE.plugins['source'] = function (){
        var me = this;
        var opt = this.options;
        var sourceMode = false;
        var sourceEditor;

        opt.sourceEditor = browser.ie  ? 'textarea' : (opt.sourceEditor || 'codemirror');

        me.setOpt({
            sourceEditorFirst:false
        });
        function createSourceEditor(holder){
            return sourceEditors[opt.sourceEditor == 'codemirror' && window.CodeMirror ? 'codemirror' : 'textarea'](me, holder);
        }

        var bakCssText;
        //解决在源码模式下getContent不能得到最新的内容问题
        var oldGetContent = me.getContent,
            bakAddress;

        me.commands['source'] = {
            execCommand: function (){

                sourceMode = !sourceMode;
                if (sourceMode) {
                    bakAddress = me.selection.getRange().createAddress(false,true);
                    me.undoManger && me.undoManger.save(true);
                    if(browser.gecko){
                        me.body.contentEditable = false;
                    }

                    bakCssText = me.iframe.style.cssText;
                    me.iframe.style.cssText += 'position:absolute;left:-32768px;top:-32768px;';


                    me.fireEvent('beforegetcontent');
                    var root = UE.htmlparser(me.body.innerHTML);
                    me.filterOutputRule(root);
                    root.traversal(function (node) {
                        if (node.type == 'element') {
                            switch (node.tagName) {
                                case 'td':
                                case 'th':
                                case 'caption':
                                if(node.children && node.children.length == 1){
                                    if(node.firstChild().tagName == 'br' ){
                                        node.removeChild(node.firstChild())
                                    }
                                };
                                break;
                                case 'pre':
                                    node.innerText(node.innerText().replace(/&nbsp;/g,' '))

                            }
                        }
                    });

                    me.fireEvent('aftergetcontent');

                    var content = root.toHtml(true);

                    sourceEditor = createSourceEditor(me.iframe.parentNode);

                    sourceEditor.setContent(content);
                    setTimeout(function (){
                        sourceEditor.select();
                        me.addListener('fullscreenchanged', function(){
                            try{
                                sourceEditor.getCodeMirror().refresh()
                            }catch(e){}
                        });
                    });
                    //重置getContent，源码模式下取值也能是最新的数据
                    me.getContent = function (){
                        return sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    };
                } else {
                    me.iframe.style.cssText = bakCssText;
                    var cont = sourceEditor.getContent() || '<p>' + (browser.ie ? '' : '<br/>')+'</p>';
                    //处理掉block节点前后的空格,有可能会误命中，暂时不考虑
                    cont = cont.replace(new RegExp('[\\r\\t\\n ]*<\/?(\\w+)\\s*(?:[^>]*)>','g'), function(a,b){
                        if(b && !dtd.$inlineWithA[b.toLowerCase()]){
                            return a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g,'');
                        }
                        return a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g,'')
                    });
                    me.setContent(cont);
                    sourceEditor.dispose();
                    sourceEditor = null;
                    //还原getContent方法
                    me.getContent = oldGetContent;
                    var first = me.body.firstChild;
                    //trace:1106 都删除空了，下边会报错，所以补充一个p占位
                    if(!first){
                        me.body.innerHTML = '<p>'+(browser.ie?'':'<br/>')+'</p>';
                        first = me.body.firstChild;
                    }
                    //要在ifm为显示时ff才能取到selection,否则报错
                    //这里不能比较位置了
                    me.undoManger && me.undoManger.save(true);

                    if(browser.gecko){

                        var input = document.createElement('input');
                        input.style.cssText = 'position:absolute;left:0;top:-32768px';

                        document.body.appendChild(input);

                        me.body.contentEditable = false;
                        setTimeout(function(){
                            domUtils.setViewportOffset(input, { left: -32768, top: 0 });
                            input.focus();
                            setTimeout(function(){
                                me.body.contentEditable = true;
                                me.selection.getRange().moveToAddress(bakAddress).select(true);
                                domUtils.remove(input);
                            });

                        });
                    }else{
                        //ie下有可能报错，比如在代码顶头的情况
                        try{
                            me.selection.getRange().moveToAddress(bakAddress).select(true);
                        }catch(e){}

                    }
                }
                this.fireEvent('sourcemodechanged', sourceMode);
            },
            queryCommandState: function (){
                return sourceMode|0;
            },
            notNeedUndo : 1
        };
        var oldQueryCommandState = me.queryCommandState;

        me.queryCommandState = function (cmdName){
            cmdName = cmdName.toLowerCase();
            if (sourceMode) {
                //源码模式下可以开启的命令
                return cmdName in {
                    'source' : 1,
                    'fullscreen' : 1
                } ? 1 : -1
            }
            return oldQueryCommandState.apply(this, arguments);
        };

        if(opt.sourceEditor == "codemirror"){

            me.addListener("ready",function(){
                utils.loadFile(document,{
                    src : opt.codeMirrorJsUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js",
                    tag : "script",
                    type : "text/javascript",
                    defer : "defer"
                },function(){
                    if(opt.sourceEditorFirst){
                        setTimeout(function(){
                            me.execCommand("source");
                        },0);
                    }
                });
                utils.loadFile(document,{
                    tag : "link",
                    rel : "stylesheet",
                    type : "text/css",
                    href : opt.codeMirrorCssUrl || opt.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css"
                });

            });
        }

    };

})();
///import core
///import plugins/undo.js
///commands 设置回车标签p或br
///commandsName  EnterKey
///commandsTitle  设置回车标签p或br
/**
 * @description 处理回车
 * @author zhanyi
 */
UE.plugins['enterkey'] = function() {
    var hTag,
        me = this,
        tag = me.options.enterTag;
    me.addListener('keyup', function(type, evt) {

        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {
            var range = me.selection.getRange(),
                start = range.startContainer,
                doSave;

            //修正在h1-h6里边回车后不能嵌套p的问题
            if (!browser.ie) {

                if (/h\d/i.test(hTag)) {
                    if (browser.gecko) {
                        var h = domUtils.findParentByTagName(start, [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption','table'], true);
                        if (!h) {
                            me.document.execCommand('formatBlock', false, '<p>');
                            doSave = 1;
                        }
                    } else {
                        //chrome remove div
                        if (start.nodeType == 1) {
                            var tmp = me.document.createTextNode(''),div;
                            range.insertNode(tmp);
                            div = domUtils.findParentByTagName(tmp, 'div', true);
                            if (div) {
                                var p = me.document.createElement('p');
                                while (div.firstChild) {
                                    p.appendChild(div.firstChild);
                                }
                                div.parentNode.insertBefore(p, div);
                                domUtils.remove(div);
                                range.setStartBefore(tmp).setCursor();
                                doSave = 1;
                            }
                            domUtils.remove(tmp);

                        }
                    }

                    if (me.undoManger && doSave) {
                        me.undoManger.save();
                    }
                }
                //没有站位符，会出现多行的问题
                browser.opera &&  range.select();
            }else{
                me.fireEvent('saveScene',true,true)
            }
        }
    });

    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;
        if (keyCode == 13) {//回车
            if(me.fireEvent('beforeenterkeydown')){
                domUtils.preventDefault(evt);
                return;
            }
            me.fireEvent('saveScene',true,true);
            hTag = '';


            var range = me.selection.getRange();

            if (!range.collapsed) {
                //跨td不能删
                var start = range.startContainer,
                    end = range.endContainer,
                    startTd = domUtils.findParentByTagName(start, 'td', true),
                    endTd = domUtils.findParentByTagName(end, 'td', true);
                if (startTd && endTd && startTd !== endTd || !startTd && endTd || startTd && !endTd) {
                    evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);
                    return;
                }
            }
            if (tag == 'p') {


                if (!browser.ie) {

                    start = domUtils.findParentByTagName(range.startContainer, ['ol','ul','p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','blockquote','caption'], true);

                    //opera下执行formatblock会在table的场景下有问题，回车在opera原生支持很好，所以暂时在opera去掉调用这个原生的command
                    //trace:2431
                    if (!start && !browser.opera) {

                        me.document.execCommand('formatBlock', false, '<p>');

                        if (browser.gecko) {
                            range = me.selection.getRange();
                            start = domUtils.findParentByTagName(range.startContainer, 'p', true);
                            start && domUtils.removeDirtyAttr(start);
                        }


                    } else {
                        hTag = start.tagName;
                        start.tagName.toLowerCase() == 'p' && browser.gecko && domUtils.removeDirtyAttr(start);
                    }

                }

            } else {
                evt.preventDefault ? evt.preventDefault() : ( evt.returnValue = false);

                if (!range.collapsed) {
                    range.deleteContents();
                    start = range.startContainer;
                    if (start.nodeType == 1 && (start = start.childNodes[range.startOffset])) {
                        while (start.nodeType == 1) {
                            if (dtd.$empty[start.tagName]) {
                                range.setStartBefore(start).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            if (!start.firstChild) {
                                var br = range.document.createElement('br');
                                start.appendChild(br);
                                range.setStart(start, 0).setCursor();
                                if (me.undoManger) {
                                    me.undoManger.save();
                                }
                                return false;
                            }
                            start = start.firstChild;
                        }
                        if (start === range.startContainer.childNodes[range.startOffset]) {
                            br = range.document.createElement('br');
                            range.insertNode(br).setCursor();

                        } else {
                            range.setStart(start, 0).setCursor();
                        }


                    } else {
                        br = range.document.createElement('br');
                        range.insertNode(br).setStartAfter(br).setCursor();
                    }


                } else {
                    br = range.document.createElement('br');
                    range.insertNode(br);
                    var parent = br.parentNode;
                    if (parent.lastChild === br) {
                        br.parentNode.insertBefore(br.cloneNode(true), br);
                        range.setStartBefore(br);
                    } else {
                        range.setStartAfter(br);
                    }
                    range.setCursor();

                }

            }

        }
    });
};

/*
 *   处理特殊键的兼容性问题
 */
UE.plugins['keystrokes'] = function() {
    var me = this;
    var collapsed = true;
    me.addListener('keydown', function(type, evt) {
        var keyCode = evt.keyCode || evt.which,
            rng = me.selection.getRange();

        //处理全选的情况
        if(!rng.collapsed && !(evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) && (keyCode >= 65 && keyCode <=90
            || keyCode >= 48 && keyCode <= 57 ||
            keyCode >= 96 && keyCode <= 111 || {
                    13:1,
                    8:1,
                    46:1
                }[keyCode])
            ){

            var tmpNode = rng.startContainer;
            if(domUtils.isFillChar(tmpNode)){
                rng.setStartBefore(tmpNode)
            }
            tmpNode = rng.endContainer;
            if(domUtils.isFillChar(tmpNode)){
                rng.setEndAfter(tmpNode)
            }
            rng.txtToElmBoundary();
            //结束边界可能放到了br的前边，要把br包含进来
            // x[xxx]<br/>
            if(rng.endContainer && rng.endContainer.nodeType == 1){
                tmpNode = rng.endContainer.childNodes[rng.endOffset];
                if(tmpNode && domUtils.isBr(tmpNode)){
                    rng.setEndAfter(tmpNode);
                }
            }
            if(rng.startOffset == 0){
                tmpNode = rng.startContainer;
                if(domUtils.isBoundaryNode(tmpNode,'firstChild') ){
                    tmpNode = rng.endContainer;
                    if(rng.endOffset == (tmpNode.nodeType == 3 ? tmpNode.nodeValue.length : tmpNode.childNodes.length) && domUtils.isBoundaryNode(tmpNode,'lastChild')){
                        me.fireEvent('saveScene');
                        me.body.innerHTML = '<p>'+(browser.ie ? '' : '<br/>')+'</p>';
                        rng.setStart(me.body.firstChild,0).setCursor(false,true);
                        me._selectionChange();
                        return;
                    }
                }
            }
        }

        //处理backspace
        if (keyCode == 8) {
            rng = me.selection.getRange();
            collapsed = rng.collapsed;
            if(me.fireEvent('delkeydown',evt)){
                return;
            }
            var start,end;
            //避免按两次删除才能生效的问题
            if(rng.collapsed && rng.inFillChar()){
                start = rng.startContainer;

                if(domUtils.isFillChar(start)){
                    rng.setStartBefore(start).shrinkBoundary(true).collapse(true);
                    domUtils.remove(start)
                }else{
                    start.nodeValue = start.nodeValue.replace(new RegExp('^' + domUtils.fillChar ),'');
                    rng.startOffset--;
                    rng.collapse(true).select(true)
                }
            }

            //解决选中control元素不能删除的问题
            if (start = rng.getClosedNode()) {
                me.fireEvent('saveScene');
                rng.setStartBefore(start);
                domUtils.remove(start);
                rng.setCursor();
                me.fireEvent('saveScene');
                domUtils.preventDefault(evt);
                return;
            }
            //阻止在table上的删除
            if (!browser.ie) {
                start = domUtils.findParentByTagName(rng.startContainer, 'table', true);
                end = domUtils.findParentByTagName(rng.endContainer, 'table', true);
                if (start && !end || !start && end || start !== end) {
                    evt.preventDefault();
                    return;
                }
            }

        }
        //处理tab键的逻辑
        if (keyCode == 9) {
            //不处理以下标签
            var excludeTagNameForTabKey = {
                'ol' : 1,
                'ul' : 1,
                'table':1
            };
            //处理组件里的tab按下事件
            if(me.fireEvent('tabkeydown',evt)){
                domUtils.preventDefault(evt);
                return;
            }
            var range = me.selection.getRange();
            me.fireEvent('saveScene');
            for (var i = 0,txt = '',tabSize = me.options.tabSize|| 4,tabNode =  me.options.tabNode || '&nbsp;'; i < tabSize; i++) {
                txt += tabNode;
            }
            var span = me.document.createElement('span');
            span.innerHTML = txt + domUtils.fillChar;
            if (range.collapsed) {
                range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
            } else {
                //普通的情况
                start = domUtils.findParent(range.startContainer, filterFn);
                end = domUtils.findParent(range.endContainer, filterFn);
                if (start && end && start === end) {
                    range.deleteContents();
                    range.insertNode(span.cloneNode(true).firstChild).setCursor(true);
                } else {
                    var bookmark = range.createBookmark(),
                        filterFn = function(node) {
                            return domUtils.isBlockElm(node) && !excludeTagNameForTabKey[node.tagName.toLowerCase()]

                        };
                    range.enlarge(true);
                    var bookmark2 = range.createBookmark(),
                        current = domUtils.getNextDomNode(bookmark2.start, false, filterFn);
                    while (current && !(domUtils.getPosition(current, bookmark2.end) & domUtils.POSITION_FOLLOWING)) {
                        current.insertBefore(span.cloneNode(true).firstChild, current.firstChild);
                        current = domUtils.getNextDomNode(current, false, filterFn);
                    }
                    range.moveToBookmark(bookmark2).moveToBookmark(bookmark).select();
                }
            }
            domUtils.preventDefault(evt)
        }
        //trace:1634
        //ff的del键在容器空的时候，也会删除
        if(browser.gecko && keyCode == 46){
            range = me.selection.getRange();
            if(range.collapsed){
                start = range.startContainer;
                if(domUtils.isEmptyBlock(start)){
                    var parent = start.parentNode;
                    while(domUtils.getChildCount(parent) == 1 && !domUtils.isBody(parent)){
                        start = parent;
                        parent = parent.parentNode;
                    }
                    if(start === parent.lastChild)
                        evt.preventDefault();
                    return;
                }
            }
        }
    });
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which,
            rng,me = this;
        if(keyCode == 8){
            if(me.fireEvent('delkeyup')){
                return;
            }
            rng = me.selection.getRange();
            if(rng.collapsed){
                var tmpNode,
                    autoClearTagName = ['h1','h2','h3','h4','h5','h6'];
                if(tmpNode = domUtils.findParentByTagName(rng.startContainer,autoClearTagName,true)){
                    if(domUtils.isEmptyBlock(tmpNode)){
                        var pre = tmpNode.previousSibling;
                        if(pre && pre.nodeName != 'TABLE'){
                            domUtils.remove(tmpNode);
                            rng.setStartAtLast(pre).setCursor(false,true);
                            return;
                        }else{
                            var next = tmpNode.nextSibling;
                            if(next && next.nodeName != 'TABLE'){
                                domUtils.remove(tmpNode);
                                rng.setStartAtFirst(next).setCursor(false,true);
                                return;
                            }
                        }
                    }
                }
                //处理当删除到body时，要重新给p标签展位
                if(domUtils.isBody(rng.startContainer)){
                    var tmpNode = domUtils.createElement(me.document,'p',{
                        'innerHTML' : browser.ie ? domUtils.fillChar : '<br/>'
                    });
                    rng.insertNode(tmpNode).setStart(tmpNode,0).setCursor(false,true);
                }
            }


            //chrome下如果删除了inline标签，浏览器会有记忆，在输入文字还是会套上刚才删除的标签，所以这里再选一次就不会了
            if( !collapsed && (rng.startContainer.nodeType == 3 || rng.startContainer.nodeType == 1 && domUtils.isEmptyBlock(rng.startContainer))){
                if(browser.ie){
                    var span = rng.document.createElement('span');
                    rng.insertNode(span).setStartBefore(span).collapse(true);
                    rng.select();
                    domUtils.remove(span)
                }else{
                    rng.select()
                }

            }
        }

    })
};
///import core
///commands 修复chrome下图片不能点击的问题
///commandsName  FixImgClick
///commandsTitle  修复chrome下图片不能点击的问题
//修复chrome下图片不能点击的问题
//todo 可以改大小
UE.plugins['fiximgclick'] = function() {
    var me = this;
    if ( browser.webkit ) {
        me.addListener( 'click', function( type, e ) {
            if ( e.target.tagName == 'IMG' ) {
                var range = new dom.Range( me.document );
                range.selectNode( e.target ).select();

            }
        } );
    }
};
///import core
///commands 为非ie浏览器自动添加a标签
///commandsName  AutoLink
///commandsTitle  自动增加链接
/**
 * @description 为非ie浏览器自动添加a标签
 * @author zhanyi
 */
    UE.plugins['autolink'] = function() {
        var cont = 0;
        if (browser.ie) {
            return;
        }
        var me = this;
        me.addListener('reset',function(){
           cont = 0;
        });
        me.addListener('keydown', function(type, evt) {
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 32 || keyCode == 13) {

                var sel = me.selection.getNative(),
                    range = sel.getRangeAt(0).cloneRange(),
                    offset,
                    charCode;

                var start = range.startContainer;
                while (start.nodeType == 1 && range.startOffset > 0) {
                    start = range.startContainer.childNodes[range.startOffset - 1];
                    if (!start){
                        break;
                    }
                    range.setStart(start, start.nodeType == 1 ? start.childNodes.length : start.nodeValue.length);
                    range.collapse(true);
                    start = range.startContainer;
                }

                do{
                    if (range.startOffset == 0) {
                        start = range.startContainer.previousSibling;

                        while (start && start.nodeType == 1) {
                            start = start.lastChild;
                        }
                        if (!start || domUtils.isFillChar(start)){
                            break;
                        }
                        offset = start.nodeValue.length;
                    } else {
                        start = range.startContainer;
                        offset = range.startOffset;
                    }
                    range.setStart(start, offset - 1);
                    charCode = range.toString().charCodeAt(0);
                } while (charCode != 160 && charCode != 32);

                if (range.toString().replace(new RegExp(domUtils.fillChar, 'g'), '').match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                    while(range.toString().length){
                        if(/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(range.toString())){
                            break;
                        }
                        try{
                            range.setStart(range.startContainer,range.startOffset+1);
                        }catch(e){
                            //trace:2121
                            var start = range.startContainer;
                            while(!(next = start.nextSibling)){
                                if(domUtils.isBody(start)){
                                    return;
                                }
                                start = start.parentNode;

                            }
                            range.setStart(next,0);

                        }

                    }
                    //range的开始边界已经在a标签里的不再处理
                    if(domUtils.findParentByTagName(range.startContainer,'a',true)){
                        return;
                    }
                    var a = me.document.createElement('a'),text = me.document.createTextNode(' '),href;

                    me.undoManger && me.undoManger.save();
                    a.appendChild(range.extractContents());
                    a.href = a.innerHTML = a.innerHTML.replace(/<[^>]+>/g,'');
                    href = a.getAttribute("href").replace(new RegExp(domUtils.fillChar,'g'),'');
                    href = /^(?:https?:\/\/)/ig.test(href) ? href : "http://"+ href;
                    a.setAttribute('_src',utils.html(href));
                    a.href = utils.html(href);

                    range.insertNode(a);
                    a.parentNode.insertBefore(text, a.nextSibling);
                    range.setStart(text, 0);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    me.undoManger && me.undoManger.save();
                }
            }
        });
    };

///import core
///commands 当输入内容超过编辑器高度时，编辑器自动增高
///commandsName  AutoHeight,autoHeightEnabled
///commandsTitle  自动增高
/**
 * @description 自动伸展
 * @author zhanyi
 */
UE.plugins['autoheight'] = function () {
    var me = this;
    //提供开关，就算加载也可以关闭
    me.autoHeightEnabled = me.options.autoHeightEnabled !== false;
    if (!me.autoHeightEnabled) {
        return;
    }

    var bakOverflow,
        span, tmpNode,
        lastHeight = 0,
        options = me.options,
        currentHeight,
        timer;

    function adjustHeight() {
        var me = this;
        clearTimeout(timer);
        if(isFullscreen)return;
        timer = setTimeout(function () {
            if (!me.queryCommandState || me.queryCommandState && me.queryCommandState('source') != 1) {
                if (!span) {
                    span = me.document.createElement('span');
                    //trace:1764
                    span.style.cssText = 'display:block;width:0;margin:0;padding:0;border:0;clear:both;';
                    span.innerHTML = '.';
                }
                tmpNode = span.cloneNode(true);
                me.body.appendChild(tmpNode);
                currentHeight = Math.max(domUtils.getXY(tmpNode).y + tmpNode.offsetHeight,Math.max(options.minFrameHeight, options.initialFrameHeight));
                if (currentHeight != lastHeight) {

                    me.setHeight(currentHeight,true);

                    lastHeight = currentHeight;
                }
                domUtils.remove(tmpNode);

            }
        }, 50);
    }
    var isFullscreen;
    me.addListener('fullscreenchanged',function(cmd,f){
        isFullscreen = f
    });
    me.addListener('destroy', function () {
        me.removeListener('contentchange afterinserthtml keyup mouseup',adjustHeight)
    });
    me.enableAutoHeight = function () {
        var me = this;
        if (!me.autoHeightEnabled) {
            return;
        }
        var doc = me.document;
        me.autoHeightEnabled = true;
        bakOverflow = doc.body.style.overflowY;
        doc.body.style.overflowY = 'hidden';
        me.addListener('contentchange afterinserthtml keyup mouseup',adjustHeight);
        //ff不给事件算得不对

        setTimeout(function () {
            adjustHeight.call(me);
        }, browser.gecko ? 100 : 0);
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.disableAutoHeight = function () {

        me.body.style.overflowY = bakOverflow || '';

        me.removeListener('contentchange', adjustHeight);
        me.removeListener('keyup', adjustHeight);
        me.removeListener('mouseup', adjustHeight);
        me.autoHeightEnabled = false;
        me.fireEvent('autoheightchanged', me.autoHeightEnabled);
    };
    me.addListener('ready', function () {
        me.enableAutoHeight();
        //trace:1764
        var timer;
        domUtils.on(browser.ie ? me.body : me.document, browser.webkit ? 'dragover' : 'drop', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                adjustHeight.call(this);
            }, 100);

        });
    });


};


///import core
///commands 悬浮工具栏
///commandsName  AutoFloat,autoFloatEnabled
///commandsTitle  悬浮工具栏
/*
 *  modified by chengchao01
 *
 *  注意： 引入此功能后，在IE6下会将body的背景图片覆盖掉！
 */
    UE.plugins['autofloat'] = function() {
        var me = this,
            lang = me.getLang();
        me.setOpt({
            topOffset : 0
        });
        var optsAutoFloatEnabled = me.options.autoFloatEnabled !== false,
        topOffset = me.options.topOffset;


        //如果不固定toolbar的位置，则直接退出
        if(!optsAutoFloatEnabled){
            return;
        }
        var uiUtils = UE.ui.uiUtils,
       		LteIE6 = browser.ie && browser.version <= 6,
            quirks = browser.quirks;

        function checkHasUI(){
           if(!UE.ui){
              alert(lang.autofloatMsg);
               return 0;
           }
           return 1;
       }
        function fixIE6FixedPos(){
            var docStyle = document.body.style;
           docStyle.backgroundImage = 'url("about:blank")';
           docStyle.backgroundAttachment = 'fixed';
        }
		var	bakCssText,
			placeHolder = document.createElement('div'),
            toolbarBox,orgTop,
            getPosition,
            flag =true;   //ie7模式下需要偏移
		function setFloating(){
			var toobarBoxPos = domUtils.getXY(toolbarBox),
				origalFloat = domUtils.getComputedStyle(toolbarBox,'position'),
                origalLeft = domUtils.getComputedStyle(toolbarBox,'left');
			toolbarBox.style.width = toolbarBox.offsetWidth + 'px';
            toolbarBox.style.zIndex = me.options.zIndex * 1 + 1;
			toolbarBox.parentNode.insertBefore(placeHolder, toolbarBox);
			if (LteIE6 || (quirks && browser.ie)) {
                if(toolbarBox.style.position != 'absolute'){
                    toolbarBox.style.position = 'absolute';
                }
                toolbarBox.style.top = (document.body.scrollTop||document.documentElement.scrollTop) - orgTop + topOffset  + 'px';
			} else {
                if (browser.ie7Compat && flag) {
                    flag = false;
                    toolbarBox.style.left =  domUtils.getXY(toolbarBox).x - document.documentElement.getBoundingClientRect().left+2  + 'px';
                }
                if(toolbarBox.style.position != 'fixed'){
                    toolbarBox.style.position = 'fixed';
                    toolbarBox.style.top = topOffset +"px";
                    ((origalFloat == 'absolute' || origalFloat == 'relative') && parseFloat(origalLeft)) && (toolbarBox.style.left = toobarBoxPos.x + 'px');
                }
			}
		}
		function unsetFloating(){
            flag = true;
            if(placeHolder.parentNode){
                placeHolder.parentNode.removeChild(placeHolder);
            }
			toolbarBox.style.cssText = bakCssText;
		}

        function updateFloating(){
            var rect3 = getPosition(me.container);
            var offset=me.options.toolbarTopOffset||0;
            if (rect3.top < 0 && rect3.bottom - toolbarBox.offsetHeight > offset) {
                setFloating();
            }else{
                unsetFloating();
            }
        }
        var defer_updateFloating = utils.defer(function(){
            updateFloating();
        },browser.ie ? 200 : 100,true);

        me.addListener('destroy',function(){
            domUtils.un(window, ['scroll','resize'], updateFloating);
            me.removeListener('keydown', defer_updateFloating);
        });

        me.addListener('ready', function(){
            if(checkHasUI(me)){

                getPosition = uiUtils.getClientRect;
                toolbarBox = me.ui.getDom('toolbarbox');
                orgTop = getPosition(toolbarBox).top;
                bakCssText = toolbarBox.style.cssText;
                placeHolder.style.height = toolbarBox.offsetHeight + 'px';
                if(LteIE6){
                    fixIE6FixedPos();
                }
                domUtils.on(window, ['scroll','resize'], updateFloating);
                me.addListener('keydown', defer_updateFloating);

                me.addListener('beforefullscreenchange', function (t, enabled){
                    if (enabled) {
                        unsetFloating();
                    }
                });
                me.addListener('fullscreenchanged', function (t, enabled){
                    if (!enabled) {
                        updateFloating();
                    }
                });
                me.addListener('sourcemodechanged', function (t, enabled){
                    setTimeout(function (){
                        updateFloating();
                    },0);
                });
                me.addListener("clearDoc",function(){
                    setTimeout(function(){
                        updateFloating();
                    },0);

                })
            }
        });
	};

/**
 * @description 纯文本粘贴
 * @name puretxtpaste
 * @author zhanyi
 */

UE.plugins['pasteplain'] = function(){
    var me = this;
    me.setOpt({
        'pasteplain':false,
        'filterTxtRules' : function(){
            function transP(node){
                node.tagName = 'p';
                node.setStyle();
            }
            function removeNode(node){
                node.parentNode.removeChild(node,true)
            }
            return {
                //直接删除及其字节点内容
                '-' : 'script style object iframe embed input select',
                'p': {$:{}},
                'br':{$:{}},
                div: function (node) {
                    var tmpNode, p = UE.uNode.createElement('p');
                    while (tmpNode = node.firstChild()) {
                        if (tmpNode.type == 'text' || !UE.dom.dtd.$block[tmpNode.tagName]) {
                            p.appendChild(tmpNode);
                        } else {
                            if (p.firstChild()) {
                                node.parentNode.insertBefore(p, node);
                                p = UE.uNode.createElement('p');
                            } else {
                                node.parentNode.insertBefore(tmpNode, node);
                            }
                        }
                    }
                    if (p.firstChild()) {
                        node.parentNode.insertBefore(p, node);
                    }
                    node.parentNode.removeChild(node);
                },
                ol: removeNode,
                ul: removeNode,
                dl:removeNode,
                dt:removeNode,
                dd:removeNode,
                'li':removeNode,
                'caption':transP,
                'th':transP,
                'tr':transP,
                'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
                'td':function(node){
                        //没有内容的td直接删掉
                        var txt = !!node.innerText();
                        if(txt){
                         node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
                    }
                    node.parentNode.removeChild(node,node.innerText())
                }
            }
        }()
    });
    //暂时这里支持一下老版本的属性
    var pasteplain = me.options.pasteplain;

    me.commands['pasteplain'] = {
        queryCommandState: function (){
            return pasteplain ? 1 : 0;
        },
        execCommand: function (){
            pasteplain = !pasteplain|0;
        },
        notNeedUndo : 1
    };
};
///import core
///import plugins/inserthtml.js
///commands 视频
///commandsName InsertVideo
///commandsTitle  插入视频
///commandsDialog  dialogs\video
UE.plugins['video'] = function (){
    var me =this,
        div;

    /**
     * 创建插入视频字符窜
     * @param url 视频地址
     * @param width 视频宽度
     * @param height 视频高度
     * @param align 视频对齐
     * @param toEmbed 是否以flash代替显示
     * @param addParagraph  是否需要添加P 标签
     */
    function creatInsertStr(url,width,height,id,align,toEmbed){
        return  !toEmbed ?

                '<img ' + (id ? 'id="' + id+'"' : '') + ' width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-video"'  +
                ' src="' + me.options.UEDITOR_HOME_URL+'themes/default/images/spacer.gif" style="background:url('+me.options.UEDITOR_HOME_URL+'themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;'+(align ? 'float:' + align + ';': '')+'" />'

                :
                '<embed type="application/x-shockwave-flash" class="edui-faked-video" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '"'  + (align ? ' style="float:' + align + '"': '') +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(root,img2embed){
        utils.each(root.getNodesByTagName(img2embed ? 'img' : 'embed'),function(node){
            if(node.getAttr('class') == 'edui-faked-video'){

                var html = creatInsertStr( img2embed ? node.getAttr('_url') : node.getAttr('src'),node.getAttr('width'),node.getAttr('height'),null,node.getStyle('float') || '',img2embed);
                node.parentNode.replaceChild(UE.uNode.createElement(html),node)
            }
        })
    }

    me.addOutputRule(function(root){
        switchImgAndEmbed(root,true)
    });
    me.addInputRule(function(root){
        switchImgAndEmbed(root)
    });

    me.commands["insertvideo"] = {
        execCommand: function (cmd, videoObjs){
            videoObjs = utils.isArray(videoObjs)?videoObjs:[videoObjs];
            var html = [],id = 'tmpVedio';
            for(var i=0,vi,len = videoObjs.length;i<len;i++){
                 vi = videoObjs[i];
                 html.push(creatInsertStr( vi.url, vi.width || 420,  vi.height || 280, id + i,null,false));
            }
            me.execCommand("inserthtml",html.join(""),true);
            var rng = this.selection.getRange();
            for(var i= 0,len=videoObjs.length;i<len;i++){
                var img = this.document.getElementById('tmpVedio'+i);
                domUtils.removeAttributes(img,'id');
                rng.selectNode(img).select();
                me.execCommand('imagefloat',videoObjs[i].align)
            }
        },
        queryCommandState : function(){
            var img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-video");
            return flag ? 1 : 0;
        }
    };
};
/**
 * Created with JetBrains WebStorm.
 * User: taoqili
 * Date: 13-1-18
 * Time: 上午11:09
 * To change this template use File | Settings | File Templates.
 */
/**
 * UE表格操作类
 * @param table
 * @constructor
 */
(function () {
    var UETable = UE.UETable = function (table) {
        this.table = table;
        this.indexTable = [];
        this.selectedTds = [];
        this.cellsRange = {};
        this.update(table);
    };

    //===以下为静态工具方法===
    UETable.removeSelectedClass = function (cells) {
        utils.each(cells, function (cell) {
            domUtils.removeClasses(cell, "selectTdClass");
        })
    };
    UETable.addSelectedClass = function (cells) {
        utils.each(cells, function (cell) {
            domUtils.addClass(cell, "selectTdClass");
        })
    };
    UETable.isEmptyBlock = function (node) {
        var reg = new RegExp(domUtils.fillChar, 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(/^\s*$/, '').replace(reg, '').length > 0) {
            return 0;
        }
        for (var i in dtd.$isNotEmpty) if (dtd.$isNotEmpty.hasOwnProperty(i)) {
            if (node.getElementsByTagName(i).length) {
                return 0;
            }
        }
        return 1;
    };
    UETable.getWidth = function (cell) {
        if (!cell)return 0;
        return parseInt(domUtils.getComputedStyle(cell, "width"), 10);
    };

    /**
     * 获取单元格或者单元格组的“对齐”状态。 如果当前的检测对象是一个单元格组， 只有在满足所有单元格的 水平和竖直 对齐属性都相同的
     * 条件时才会返回其状态值，否则将返回null； 如果当前只检测了一个单元格， 则直接返回当前单元格的对齐状态；
     * @param table cell or table cells , 支持单个单元格dom对象 或者 单元格dom对象数组
     * @return { align: 'left' || 'right' || 'center', valign: 'top' || 'middle' || 'bottom' } 或者 null
     */
    UETable.getTableCellAlignState = function ( cells ) {

        !utils.isArray( cells ) && ( cells = [cells] );

        var result = {},
            status = ['align', 'valign'],
            tempStatus = null,
            isSame = true;//状态是否相同

        utils.each( cells, function( cellNode ){

            utils.each( status, function( currentState ){

                tempStatus = cellNode.getAttribute( currentState );

                if( !result[ currentState ] && tempStatus ) {
                    result[ currentState ] = tempStatus;
                } else if( !result[ currentState ] || ( tempStatus !== result[ currentState ] ) ) {
                    isSame = false;
                    return false;
                }

            } );

            return isSame;

        });

        return isSame ? result : null;

    };

    /**
     * 根据当前选区获取相关的table信息
     * @return {Object}
     */
    UETable.getTableItemsByRange = function (editor) {
        var start = editor.selection.getStart();

        //ff下会选中bookmark
        if( start && start.id && start.id.indexOf('_baidu_bookmark_start_') === 0 ) {
            start = start.nextSibling;
        }

        //在table或者td边缘有可能存在选中tr的情况
        var cell = start && domUtils.findParentByTagName(start, ["td", "th"], true),
            tr = cell && cell.parentNode,
            caption = start && domUtils.findParentByTagName(start, 'caption', true),
            table = caption ? caption.parentNode : tr && tr.parentNode.parentNode;

        return {
            cell:cell,
            tr:tr,
            table:table,
            caption:caption
        }
    };
    UETable.getUETableBySelected = function (editor) {
        var table = UETable.getTableItemsByRange(editor).table;
        if (table && table.ueTable && table.ueTable.selectedTds.length) {
            return table.ueTable;
        }
        return null;
    };

    UETable.getDefaultValue = function (editor, table) {
        var borderMap = {
                thin:'0px',
                medium:'1px',
                thick:'2px'
            },
            tableBorder, tdPadding, tdBorder, tmpValue;
        if (!table) {
            table = editor.document.createElement('table');
            table.insertRow(0).insertCell(0).innerHTML = 'xxx';
            editor.body.appendChild(table);
            var td = table.getElementsByTagName('td')[0];
            tmpValue = domUtils.getComputedStyle(table, 'border-left-width');
            tableBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
            tmpValue = domUtils.getComputedStyle(td, 'padding-left');
            tdPadding = parseInt(borderMap[tmpValue] || tmpValue, 10);
            tmpValue = domUtils.getComputedStyle(td, 'border-left-width');
            tdBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
            domUtils.remove(table);
            return {
                tableBorder:tableBorder,
                tdPadding:tdPadding,
                tdBorder:tdBorder
            };
        } else {
            td = table.getElementsByTagName('td')[0];
            tmpValue = domUtils.getComputedStyle(table, 'border-left-width');
            tableBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
            tmpValue = domUtils.getComputedStyle(td, 'padding-left');
            tdPadding = parseInt(borderMap[tmpValue] || tmpValue, 10);
            tmpValue = domUtils.getComputedStyle(td, 'border-left-width');
            tdBorder = parseInt(borderMap[tmpValue] || tmpValue, 10);
            return {
                tableBorder:tableBorder,
                tdPadding:tdPadding,
                tdBorder:tdBorder
            };
        }
    };
    /**
     * 根据当前点击的td或者table获取索引对象
     * @param tdOrTable
     */
    UETable.getUETable = function (tdOrTable) {
        var tag = tdOrTable.tagName.toLowerCase();
        tdOrTable = (tag == "td" || tag == "th" || tag == 'caption') ? domUtils.findParentByTagName(tdOrTable, "table", true) : tdOrTable;
        if (!tdOrTable.ueTable) {
            tdOrTable.ueTable = new UETable(tdOrTable);
        }
        return tdOrTable.ueTable;
    };

    UETable.cloneCell = function(cell,ignoreMerge,keepPro){
        if (!cell || utils.isString(cell)) {
            return this.table.ownerDocument.createElement(cell || 'td');
        }
        var flag = domUtils.hasClass(cell, "selectTdClass");
        flag && domUtils.removeClasses(cell, "selectTdClass");
        var tmpCell = cell.cloneNode(true);
        if (ignoreMerge) {
            tmpCell.rowSpan = tmpCell.colSpan = 1;
        }
        //去掉宽高
        !keepPro && domUtils.removeAttributes(tmpCell,'width height');
        !keepPro && domUtils.removeAttributes(tmpCell,'style');

        tmpCell.style.borderLeftStyle = "";
        tmpCell.style.borderTopStyle = "";
        tmpCell.style.borderLeftColor = cell.style.borderRightColor;
        tmpCell.style.borderLeftWidth = cell.style.borderRightWidth;
        tmpCell.style.borderTopColor = cell.style.borderBottomColor;
        tmpCell.style.borderTopWidth = cell.style.borderBottomWidth;
        flag && domUtils.addClass(cell, "selectTdClass");
        return tmpCell;
    }

    UETable.prototype = {
        getMaxRows:function () {
            var rows = this.table.rows, maxLen = 1;
            for (var i = 0, row; row = rows[i]; i++) {
                var currentMax = 1;
                for (var j = 0, cj; cj = row.cells[j++];) {
                    currentMax = Math.max(cj.rowSpan || 1, currentMax);
                }
                maxLen = Math.max(currentMax + i, maxLen);
            }
            return maxLen;
        },
        /**
         * 获取当前表格的最大列数
         */
        getMaxCols:function () {
            var rows = this.table.rows, maxLen = 0, cellRows = {};
            for (var i = 0, row; row = rows[i]; i++) {
                var cellsNum = 0;
                for (var j = 0, cj; cj = row.cells[j++];) {
                    cellsNum += (cj.colSpan || 1);
                    if (cj.rowSpan && cj.rowSpan > 1) {
                        for (var k = 1; k < cj.rowSpan; k++) {
                            if (!cellRows['row_' + (i + k)]) {
                                cellRows['row_' + (i + k)] = (cj.colSpan || 1);
                            } else {
                                cellRows['row_' + (i + k)]++
                            }
                        }

                    }
                }
                cellsNum += cellRows['row_' + i] || 0;
                maxLen = Math.max(cellsNum, maxLen);
            }
            return maxLen;
        },
        getCellColIndex:function (cell) {

        },
        /**
         * 获取当前cell旁边的单元格，
         * @param cell
         * @param right
         */
        getHSideCell:function (cell, right) {
            try {
                var cellInfo = this.getCellInfo(cell),
                    previewRowIndex, previewColIndex;
                var len = this.selectedTds.length,
                    range = this.cellsRange;
                //首行或者首列没有前置单元格
                if ((!right && (!len ? !cellInfo.colIndex : !range.beginColIndex)) || (right && (!len ? (cellInfo.colIndex == (this.colsNum - 1)) : (range.endColIndex == this.colsNum - 1)))) return null;

                previewRowIndex = !len ? cellInfo.rowIndex : range.beginRowIndex;
                previewColIndex = !right ? ( !len ? (cellInfo.colIndex < 1 ? 0 : (cellInfo.colIndex - 1)) : range.beginColIndex - 1)
                    : ( !len ? cellInfo.colIndex + 1 : range.endColIndex + 1);
                return this.getCell(this.indexTable[previewRowIndex][previewColIndex].rowIndex, this.indexTable[previewRowIndex][previewColIndex].cellIndex);
            } catch (e) {
                showError(e);
            }
        },
        getTabNextCell:function (cell, preRowIndex) {
            var cellInfo = this.getCellInfo(cell),
                rowIndex = preRowIndex || cellInfo.rowIndex,
                colIndex = cellInfo.colIndex + 1 + (cellInfo.colSpan - 1),
                nextCell;
            try {
                nextCell = this.getCell(this.indexTable[rowIndex][colIndex].rowIndex, this.indexTable[rowIndex][colIndex].cellIndex);
            } catch (e) {
                try {
                    rowIndex = rowIndex * 1 + 1;
                    colIndex = 0;
                    nextCell = this.getCell(this.indexTable[rowIndex][colIndex].rowIndex, this.indexTable[rowIndex][colIndex].cellIndex);
                } catch (e) {
                }
            }
            return nextCell;

        },
        /**
         * 获取视觉上的后置单元格
         * @param cell
         * @param bottom
         */
        getVSideCell:function (cell, bottom, ignoreRange) {
            try {
                var cellInfo = this.getCellInfo(cell),
                    nextRowIndex, nextColIndex;
                var len = this.selectedTds.length && !ignoreRange,
                    range = this.cellsRange;
                //末行或者末列没有后置单元格
                if ((!bottom && (cellInfo.rowIndex == 0)) || (bottom && (!len ? (cellInfo.rowIndex + cellInfo.rowSpan > this.rowsNum - 1) : (range.endRowIndex == this.rowsNum - 1)))) return null;

                nextRowIndex = !bottom ? ( !len ? cellInfo.rowIndex - 1 : range.beginRowIndex - 1)
                    : ( !len ? (cellInfo.rowIndex + cellInfo.rowSpan) : range.endRowIndex + 1);
                nextColIndex = !len ? cellInfo.colIndex : range.beginColIndex;
                return this.getCell(this.indexTable[nextRowIndex][nextColIndex].rowIndex, this.indexTable[nextRowIndex][nextColIndex].cellIndex);
            } catch (e) {
                showError(e);
            }
        },
        /**
         * 获取相同结束位置的单元格，xOrY指代了是获取x轴相同还是y轴相同
         */
        getSameEndPosCells:function (cell, xOrY) {
            try {
                var flag = (xOrY.toLowerCase() === "x"),
                    end = domUtils.getXY(cell)[flag ? 'x' : 'y'] + cell["offset" + (flag ? 'Width' : 'Height')],
                    rows = this.table.rows,
                    cells = null, returns = [];
                for (var i = 0; i < this.rowsNum; i++) {
                    cells = rows[i].cells;
                    for (var j = 0, tmpCell; tmpCell = cells[j++];) {
                        var tmpEnd = domUtils.getXY(tmpCell)[flag ? 'x' : 'y'] + tmpCell["offset" + (flag ? 'Width' : 'Height')];
                        //对应行的td已经被上面行rowSpan了
                        if (tmpEnd > end && flag) break;
                        if (cell == tmpCell || end == tmpEnd) {
                            //只获取单一的单元格
                            //todo 仅获取单一单元格在特定情况下会造成returns为空，从而影响后续的拖拽实现，修正这个。需考虑性能
                            if (tmpCell[flag ? "colSpan" : "rowSpan"] == 1) {
                                returns.push(tmpCell);
                            }
                            if (flag) break;
                        }
                    }
                }
                return returns;
            } catch (e) {
                showError(e);
            }
        },
        setCellContent:function (cell, content) {
            cell.innerHTML = content || (browser.ie ? domUtils.fillChar : "<br />");
        },
        cloneCell:UETable.cloneCell,
        /**
         * 获取跟当前单元格的右边竖线为左边的所有未合并单元格
         */
        getSameStartPosXCells:function (cell) {
            try {
                var start = domUtils.getXY(cell).x + cell.offsetWidth,
                    rows = this.table.rows, cells , returns = [];
                for (var i = 0; i < this.rowsNum; i++) {
                    cells = rows[i].cells;
                    for (var j = 0, tmpCell; tmpCell = cells[j++];) {
                        var tmpStart = domUtils.getXY(tmpCell).x;
                        if (tmpStart > start) break;
                        if (tmpStart == start && tmpCell.colSpan == 1) {
                            returns.push(tmpCell);
                            break;
                        }
                    }
                }
                return returns;
            } catch (e) {
                showError(e);
            }
        },
        /**
         * 更新table对应的索引表
         */
        update:function (table) {
            this.table = table || this.table;
            this.selectedTds = [];
            this.cellsRange = {};
            this.indexTable = [];
            var rows = this.table.rows,
                rowsNum = this.getMaxRows(),
                dNum = rowsNum - rows.length,
                colsNum = this.getMaxCols();
            while (dNum--) {
                this.table.insertRow(rows.length);
            }
            this.rowsNum = rowsNum;
            this.colsNum = colsNum;
            for (var i = 0, len = rows.length; i < len; i++) {
                this.indexTable[i] = new Array(colsNum);
            }
            //填充索引表
            for (var rowIndex = 0, row; row = rows[rowIndex]; rowIndex++) {
                for (var cellIndex = 0, cell, cells = row.cells; cell = cells[cellIndex]; cellIndex++) {
                    //修正整行被rowSpan时导致的行数计算错误
                    if (cell.rowSpan > rowsNum) {
                        cell.rowSpan = rowsNum;
                    }
                    var colIndex = cellIndex,
                        rowSpan = cell.rowSpan || 1,
                        colSpan = cell.colSpan || 1;
                    //当已经被上一行rowSpan或者被前一列colSpan了，则跳到下一个单元格进行
                    while (this.indexTable[rowIndex][colIndex]) colIndex++;
                    for (var j = 0; j < rowSpan; j++) {
                        for (var k = 0; k < colSpan; k++) {
                            this.indexTable[rowIndex + j][colIndex + k] = {
                                rowIndex:rowIndex,
                                cellIndex:cellIndex,
                                colIndex:colIndex,
                                rowSpan:rowSpan,
                                colSpan:colSpan
                            }
                        }
                    }
                }
            }
            //修复残缺td
            for (j = 0; j < rowsNum; j++) {
                for (k = 0; k < colsNum; k++) {
                    if (this.indexTable[j][k] === undefined) {
                        row = rows[j];
                        cell = row.cells[row.cells.length - 1];
                        cell = cell ? cell.cloneNode(true) : this.table.ownerDocument.createElement("td");
                        this.setCellContent(cell);
                        if (cell.colSpan !== 1)cell.colSpan = 1;
                        if (cell.rowSpan !== 1)cell.rowSpan = 1;
                        row.appendChild(cell);
                        this.indexTable[j][k] = {
                            rowIndex:j,
                            cellIndex:cell.cellIndex,
                            colIndex:k,
                            rowSpan:1,
                            colSpan:1
                        }
                    }
                }
            }
            //当框选后删除行或者列后撤销，需要重建选区。
            var tds = domUtils.getElementsByTagName(this.table, "td"),
                selectTds = [];
            utils.each(tds, function (td) {
                if (domUtils.hasClass(td, "selectTdClass")) {
                    selectTds.push(td);
                }
            });
            if (selectTds.length) {
                var start = selectTds[0],
                    end = selectTds[selectTds.length - 1],
                    startInfo = this.getCellInfo(start),
                    endInfo = this.getCellInfo(end);
                this.selectedTds = selectTds;
                this.cellsRange = {
                    beginRowIndex:startInfo.rowIndex,
                    beginColIndex:startInfo.colIndex,
                    endRowIndex:endInfo.rowIndex + endInfo.rowSpan - 1,
                    endColIndex:endInfo.colIndex + endInfo.colSpan - 1
                };
            }

        },
        /**
         * 获取单元格的索引信息
         */
        getCellInfo:function (cell) {
            if (!cell) return;
            var cellIndex = cell.cellIndex,
                rowIndex = cell.parentNode.rowIndex,
                rowInfo = this.indexTable[rowIndex],
                numCols = this.colsNum;
            for (var colIndex = cellIndex; colIndex < numCols; colIndex++) {
                var cellInfo = rowInfo[colIndex];
                if (cellInfo.rowIndex === rowIndex && cellInfo.cellIndex === cellIndex) {
                    return cellInfo;
                }
            }
        },
        /**
         * 根据行列号获取单元格
         */
        getCell:function (rowIndex, cellIndex) {
            return rowIndex < this.rowsNum && this.table.rows[rowIndex].cells[cellIndex] || null;
        },
        /**
         * 删除单元格
         */
        deleteCell:function (cell, rowIndex) {
            rowIndex = typeof rowIndex == 'number' ? rowIndex : cell.parentNode.rowIndex;
            var row = this.table.rows[rowIndex];
            row.deleteCell(cell.cellIndex);
        },
        /**
         * 根据始末两个单元格获取被框选的所有单元格范围
         */
        getCellsRange:function (cellA, cellB) {
            function checkRange(beginRowIndex, beginColIndex, endRowIndex, endColIndex) {
                var tmpBeginRowIndex = beginRowIndex,
                    tmpBeginColIndex = beginColIndex,
                    tmpEndRowIndex = endRowIndex,
                    tmpEndColIndex = endColIndex,
                    cellInfo, colIndex, rowIndex;
                // 通过indexTable检查是否存在超出TableRange上边界的情况
                if (beginRowIndex > 0) {
                    for (colIndex = beginColIndex; colIndex < endColIndex; colIndex++) {
                        cellInfo = me.indexTable[beginRowIndex][colIndex];
                        rowIndex = cellInfo.rowIndex;
                        if (rowIndex < beginRowIndex) {
                            tmpBeginRowIndex = Math.min(rowIndex, tmpBeginRowIndex);
                        }
                    }
                }
                // 通过indexTable检查是否存在超出TableRange右边界的情况
                if (endColIndex < me.colsNum) {
                    for (rowIndex = beginRowIndex; rowIndex < endRowIndex; rowIndex++) {
                        cellInfo = me.indexTable[rowIndex][endColIndex];
                        colIndex = cellInfo.colIndex + cellInfo.colSpan - 1;
                        if (colIndex > endColIndex) {
                            tmpEndColIndex = Math.max(colIndex, tmpEndColIndex);
                        }
                    }
                }
                // 检查是否有超出TableRange下边界的情况
                if (endRowIndex < me.rowsNum) {
                    for (colIndex = beginColIndex; colIndex < endColIndex; colIndex++) {
                        cellInfo = me.indexTable[endRowIndex][colIndex];
                        rowIndex = cellInfo.rowIndex + cellInfo.rowSpan - 1;
                        if (rowIndex > endRowIndex) {
                            tmpEndRowIndex = Math.max(rowIndex, tmpEndRowIndex);
                        }
                    }
                }
                // 检查是否有超出TableRange左边界的情况
                if (beginColIndex > 0) {
                    for (rowIndex = beginRowIndex; rowIndex < endRowIndex; rowIndex++) {
                        cellInfo = me.indexTable[rowIndex][beginColIndex];
                        colIndex = cellInfo.colIndex;
                        if (colIndex < beginColIndex) {
                            tmpBeginColIndex = Math.min(cellInfo.colIndex, tmpBeginColIndex);
                        }
                    }
                }
                //递归调用直至所有完成所有框选单元格的扩展
                if (tmpBeginRowIndex != beginRowIndex || tmpBeginColIndex != beginColIndex || tmpEndRowIndex != endRowIndex || tmpEndColIndex != endColIndex) {
                    return checkRange(tmpBeginRowIndex, tmpBeginColIndex, tmpEndRowIndex, tmpEndColIndex);
                } else {
                    // 不需要扩展TableRange的情况
                    return {
                        beginRowIndex:beginRowIndex,
                        beginColIndex:beginColIndex,
                        endRowIndex:endRowIndex,
                        endColIndex:endColIndex
                    };
                }
            }

            try {
                var me = this,
                    cellAInfo = me.getCellInfo(cellA);
                if (cellA === cellB) {
                    return {
                        beginRowIndex:cellAInfo.rowIndex,
                        beginColIndex:cellAInfo.colIndex,
                        endRowIndex:cellAInfo.rowIndex + cellAInfo.rowSpan - 1,
                        endColIndex:cellAInfo.colIndex + cellAInfo.colSpan - 1
                    };
                }
                var cellBInfo = me.getCellInfo(cellB);
                // 计算TableRange的四个边
                var beginRowIndex = Math.min(cellAInfo.rowIndex, cellBInfo.rowIndex),
                    beginColIndex = Math.min(cellAInfo.colIndex, cellBInfo.colIndex),
                    endRowIndex = Math.max(cellAInfo.rowIndex + cellAInfo.rowSpan - 1, cellBInfo.rowIndex + cellBInfo.rowSpan - 1),
                    endColIndex = Math.max(cellAInfo.colIndex + cellAInfo.colSpan - 1, cellBInfo.colIndex + cellBInfo.colSpan - 1);

                return checkRange(beginRowIndex, beginColIndex, endRowIndex, endColIndex);
            } catch (e) {
                //throw e;
            }
        },
        /**
         * 依据cellsRange获取对应的单元格集合
         */
        getCells:function (range) {
            //每次获取cells之前必须先清除上次的选择，否则会对后续获取操作造成影响
            this.clearSelected();
            var beginRowIndex = range.beginRowIndex,
                beginColIndex = range.beginColIndex,
                endRowIndex = range.endRowIndex,
                endColIndex = range.endColIndex,
                cellInfo, rowIndex, colIndex, tdHash = {}, returnTds = [];
            for (var i = beginRowIndex; i <= endRowIndex; i++) {
                for (var j = beginColIndex; j <= endColIndex; j++) {
                    cellInfo = this.indexTable[i][j];
                    rowIndex = cellInfo.rowIndex;
                    colIndex = cellInfo.colIndex;
                    // 如果Cells里已经包含了此Cell则跳过
                    var key = rowIndex + '|' + colIndex;
                    if (tdHash[key]) continue;
                    tdHash[key] = 1;
                    if (rowIndex < i || colIndex < j || rowIndex + cellInfo.rowSpan - 1 > endRowIndex || colIndex + cellInfo.colSpan - 1 > endColIndex) {
                        return null;
                    }
                    returnTds.push(this.getCell(rowIndex, cellInfo.cellIndex));
                }
            }
            return returnTds;
        },
        /**
         * 清理已经选中的单元格
         */
        clearSelected:function () {
            UETable.removeSelectedClass(this.selectedTds);
            this.selectedTds = [];
            this.cellsRange = {};
        },
        /**
         * 根据range设置已经选中的单元格
         */
        setSelected:function (range) {
            var cells = this.getCells(range);
            UETable.addSelectedClass(cells);
            this.selectedTds = cells;
            this.cellsRange = range;
        },
        isFullRow:function () {
            var range = this.cellsRange;
            return (range.endColIndex - range.beginColIndex + 1) == this.colsNum;
        },
        isFullCol:function () {
            var range = this.cellsRange,
                table = this.table,
                ths = table.getElementsByTagName("th"),
                rows = range.endRowIndex - range.beginRowIndex + 1;
            return  !ths.length ? rows == this.rowsNum : rows == this.rowsNum || (rows == this.rowsNum - 1);

        },
        /**
         * 获取视觉上的前置单元格，默认是左边，top传入时
         * @param cell
         * @param top
         */
        getNextCell:function (cell, bottom, ignoreRange) {
            try {
                var cellInfo = this.getCellInfo(cell),
                    nextRowIndex, nextColIndex;
                var len = this.selectedTds.length && !ignoreRange,
                    range = this.cellsRange;
                //末行或者末列没有后置单元格
                if ((!bottom && (cellInfo.rowIndex == 0)) || (bottom && (!len ? (cellInfo.rowIndex + cellInfo.rowSpan > this.rowsNum - 1) : (range.endRowIndex == this.rowsNum - 1)))) return null;

                nextRowIndex = !bottom ? ( !len ? cellInfo.rowIndex - 1 : range.beginRowIndex - 1)
                    : ( !len ? (cellInfo.rowIndex + cellInfo.rowSpan) : range.endRowIndex + 1);
                nextColIndex = !len ? cellInfo.colIndex : range.beginColIndex;
                return this.getCell(this.indexTable[nextRowIndex][nextColIndex].rowIndex, this.indexTable[nextRowIndex][nextColIndex].cellIndex);
            } catch (e) {
                showError(e);
            }
        },
        getPreviewCell:function (cell, top) {
            try {
                var cellInfo = this.getCellInfo(cell),
                    previewRowIndex, previewColIndex;
                var len = this.selectedTds.length,
                    range = this.cellsRange;
                //首行或者首列没有前置单元格
                if ((!top && (!len ? !cellInfo.colIndex : !range.beginColIndex)) || (top && (!len ? (cellInfo.rowIndex > (this.colsNum - 1)) : (range.endColIndex == this.colsNum - 1)))) return null;

                previewRowIndex = !top ? ( !len ? cellInfo.rowIndex : range.beginRowIndex )
                    : ( !len ? (cellInfo.rowIndex < 1 ? 0 : (cellInfo.rowIndex - 1)) : range.beginRowIndex);
                previewColIndex = !top ? ( !len ? (cellInfo.colIndex < 1 ? 0 : (cellInfo.colIndex - 1)) : range.beginColIndex - 1)
                    : ( !len ? cellInfo.colIndex : range.endColIndex + 1);
                return this.getCell(this.indexTable[previewRowIndex][previewColIndex].rowIndex, this.indexTable[previewRowIndex][previewColIndex].cellIndex);
            } catch (e) {
                showError(e);
            }
        },
        /**
         * 移动单元格中的内容
         */
        moveContent:function (cellTo, cellFrom) {
            if (UETable.isEmptyBlock(cellFrom)) return;
            if (UETable.isEmptyBlock(cellTo)) {
                cellTo.innerHTML = cellFrom.innerHTML;
                return;
            }
            var child = cellTo.lastChild;
            if (child.nodeType == 3 || !dtd.$block[child.tagName]) {
                cellTo.appendChild(cellTo.ownerDocument.createElement('br'))
            }
            while (child = cellFrom.firstChild) {
                cellTo.appendChild(child);
            }
        },
        /**
         * 向右合并单元格
         */
        mergeRight:function (cell) {
            var cellInfo = this.getCellInfo(cell),
                rightColIndex = cellInfo.colIndex + cellInfo.colSpan,
                rightCellInfo = this.indexTable[cellInfo.rowIndex][rightColIndex],
                rightCell = this.getCell(rightCellInfo.rowIndex, rightCellInfo.cellIndex);
            //合并
            cell.colSpan = cellInfo.colSpan + rightCellInfo.colSpan;
            //被合并的单元格不应存在宽度属性
            cell.removeAttribute("width");
            //移动内容
            this.moveContent(cell, rightCell);
            //删掉被合并的Cell
            this.deleteCell(rightCell, rightCellInfo.rowIndex);
            this.update();
        },
        /**
         * 向下合并单元格
         */
        mergeDown:function (cell) {
            var cellInfo = this.getCellInfo(cell),
                downRowIndex = cellInfo.rowIndex + cellInfo.rowSpan,
                downCellInfo = this.indexTable[downRowIndex][cellInfo.colIndex],
                downCell = this.getCell(downCellInfo.rowIndex, downCellInfo.cellIndex);
            cell.rowSpan = cellInfo.rowSpan + downCellInfo.rowSpan;
            cell.removeAttribute("height");
            this.moveContent(cell, downCell);
            this.deleteCell(downCell, downCellInfo.rowIndex);
            this.update();
        },
        /**
         * 合并整个range中的内容
         */
        mergeRange:function () {
            //由于合并操作可以在任意时刻进行，所以无法通过鼠标位置等信息实时生成range，只能通过缓存实例中的cellsRange对象来访问
            var range = this.cellsRange,
                leftTopCell = this.getCell(range.beginRowIndex, this.indexTable[range.beginRowIndex][range.beginColIndex].cellIndex);

            if (leftTopCell.tagName == "TH" && range.endRowIndex !== range.beginRowIndex) {
                var index = this.indexTable,
                    info = this.getCellInfo(leftTopCell);
                leftTopCell = this.getCell(1, index[1][info.colIndex].cellIndex);
                range = this.getCellsRange(leftTopCell, this.getCell(index[this.rowsNum - 1][info.colIndex].rowIndex, index[this.rowsNum - 1][info.colIndex].cellIndex));
            }

            // 删除剩余的Cells
            var cells = this.getCells(range);
            for(var i= 0,ci;ci=cells[i++];){
                if (ci !== leftTopCell) {
                    this.moveContent(leftTopCell, ci);
                    this.deleteCell(ci);
                }
            }
            // 修改左上角Cell的rowSpan和colSpan，并调整宽度属性设置
            leftTopCell.rowSpan = range.endRowIndex - range.beginRowIndex + 1;
            leftTopCell.rowSpan > 1 && leftTopCell.removeAttribute("height");
            leftTopCell.colSpan = range.endColIndex - range.beginColIndex + 1;
            leftTopCell.colSpan > 1 && leftTopCell.removeAttribute("width");
            if (leftTopCell.rowSpan == this.rowsNum && leftTopCell.colSpan != 1) {
                leftTopCell.colSpan = 1;
            }

            if (leftTopCell.colSpan == this.colsNum && leftTopCell.rowSpan != 1) {
                var rowIndex = leftTopCell.parentNode.rowIndex;
                //解决IE下的表格操作问题
                if( this.table.deleteRow ) {
                    for (var i = rowIndex+ 1, curIndex=rowIndex+ 1, len=leftTopCell.rowSpan; i < len; i++) {
                        this.table.deleteRow(curIndex);
                    }
                } else {
                    for (var i = 0, len=leftTopCell.rowSpan - 1; i < len; i++) {
                        var row = this.table.rows[rowIndex + 1];
                        row.parentNode.removeChild(row);
                    }
                }
                leftTopCell.rowSpan = 1;
            }
            this.update();
        },
        /**
         * 插入一行单元格
         */
        insertRow:function (rowIndex, sourceCell) {
            var numCols = this.colsNum,
                table = this.table,
                row = table.insertRow(rowIndex), cell,
                width = parseInt((table.offsetWidth - numCols * 20 - numCols - 1) / numCols, 10);
            //首行直接插入,无需考虑部分单元格被rowspan的情况
            if (rowIndex == 0 || rowIndex == this.rowsNum) {
                for (var colIndex = 0; colIndex < numCols; colIndex++) {
                    cell = this.cloneCell(sourceCell, true);
                    this.setCellContent(cell);
                    cell.getAttribute('vAlign') && cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
                    row.appendChild(cell);
                }
            } else {
                var infoRow = this.indexTable[rowIndex],
                    cellIndex = 0;
                for (colIndex = 0; colIndex < numCols; colIndex++) {
                    var cellInfo = infoRow[colIndex];
                    //如果存在某个单元格的rowspan穿过待插入行的位置，则修改该单元格的rowspan即可，无需插入单元格
                    if (cellInfo.rowIndex < rowIndex) {
                        cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
                        cell.rowSpan = cellInfo.rowSpan + 1;
                    } else {
                        cell = this.cloneCell(sourceCell, true);
                        this.setCellContent(cell);
                        row.appendChild(cell);
                    }
                }
            }
            //框选时插入不触发contentchange，需要手动更新索引。
            this.update();
            return row;
        },
        /**
         * 删除一行单元格
         * @param rowIndex
         */
        deleteRow:function (rowIndex) {
            var row = this.table.rows[rowIndex],
                infoRow = this.indexTable[rowIndex],
                colsNum = this.colsNum,
                count = 0;     //处理计数
            for (var colIndex = 0; colIndex < colsNum;) {
                var cellInfo = infoRow[colIndex],
                    cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
                if (cell.rowSpan > 1) {
                    if (cellInfo.rowIndex == rowIndex) {
                        var clone = cell.cloneNode(true);
                        clone.rowSpan = cell.rowSpan - 1;
                        clone.innerHTML = "";
                        cell.rowSpan = 1;
                        var nextRowIndex = rowIndex + 1,
                            nextRow = this.table.rows[nextRowIndex],
                            insertCellIndex,
                            preMerged = this.getPreviewMergedCellsNum(nextRowIndex, colIndex) - count;
                        if (preMerged < colIndex) {
                            insertCellIndex = colIndex - preMerged - 1;
                            //nextRow.insertCell(insertCellIndex);
                            domUtils.insertAfter(nextRow.cells[insertCellIndex], clone);
                        } else {
                            if (nextRow.cells.length) nextRow.insertBefore(clone, nextRow.cells[0])
                        }
                        count += 1;
                        //cell.parentNode.removeChild(cell);
                    }
                }
                colIndex += cell.colSpan || 1;
            }
            var deleteTds = [], cacheMap = {};
            for (colIndex = 0; colIndex < colsNum; colIndex++) {
                var tmpRowIndex = infoRow[colIndex].rowIndex,
                    tmpCellIndex = infoRow[colIndex].cellIndex,
                    key = tmpRowIndex + "_" + tmpCellIndex;
                if (cacheMap[key])continue;
                cacheMap[key] = 1;
                cell = this.getCell(tmpRowIndex, tmpCellIndex);
                deleteTds.push(cell);
            }
            var mergeTds = [];
            utils.each(deleteTds, function (td) {
                if (td.rowSpan == 1) {
                    td.parentNode.removeChild(td);
                } else {
                    mergeTds.push(td);
                }
            });
            utils.each(mergeTds, function (td) {
                td.rowSpan--;
            });
            row.parentNode.removeChild(row);
            //浏览器方法本身存在bug,采用自定义方法删除
            //this.table.deleteRow(rowIndex);
            this.update();
        },
        insertCol:function (colIndex, sourceCell, defaultValue) {
            var rowsNum = this.rowsNum,
                rowIndex = 0,
                tableRow, cell,
                backWidth = parseInt((this.table.offsetWidth - (this.colsNum + 1) * 20 - (this.colsNum + 1)) / (this.colsNum + 1), 10);

            function replaceTdToTh(rowIndex, cell, tableRow) {
                if (rowIndex == 0) {
                    var th = cell.nextSibling || cell.previousSibling;
                    if (th.tagName == 'TH') {
                        th = cell.ownerDocument.createElement("th");
                        th.appendChild(cell.firstChild);
                        tableRow.insertBefore(th, cell);
                        domUtils.remove(cell)
                    }
                }else{
                    if (cell.tagName == 'TH') {
                        var td = cell.ownerDocument.createElement("td");
                        td.appendChild(cell.firstChild);
                        tableRow.insertBefore(td, cell);
                        domUtils.remove(cell)
                    }
                }
            }

            var preCell;
            if (colIndex == 0 || colIndex == this.colsNum) {
                for (; rowIndex < rowsNum; rowIndex++) {
                    tableRow = this.table.rows[rowIndex];
                    preCell = tableRow.cells[colIndex == 0 ? colIndex : tableRow.cells.length];
                    cell = this.cloneCell(sourceCell, true); //tableRow.insertCell(colIndex == 0 ? colIndex : tableRow.cells.length);
                    this.setCellContent(cell);
                    cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
                    preCell && cell.setAttribute('width', preCell.getAttribute('width'));
                    if (!colIndex) {
                        tableRow.insertBefore(cell, tableRow.cells[0]);
                    } else {
                        domUtils.insertAfter(tableRow.cells[tableRow.cells.length - 1], cell);
                    }
                    replaceTdToTh(rowIndex, cell, tableRow)
                }
            } else {
                for (; rowIndex < rowsNum; rowIndex++) {
                    var cellInfo = this.indexTable[rowIndex][colIndex];
                    if (cellInfo.colIndex < colIndex) {
                        cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
                        cell.colSpan = cellInfo.colSpan + 1;
                    } else {
                        tableRow = this.table.rows[rowIndex];
                        preCell = tableRow.cells[cellInfo.cellIndex];

                        cell = this.cloneCell(sourceCell, true);//tableRow.insertCell(cellInfo.cellIndex);
                        this.setCellContent(cell);
                        cell.setAttribute('vAlign', cell.getAttribute('vAlign'));
                        preCell && cell.setAttribute('width', preCell.getAttribute('width'));
                        //防止IE下报错
                        preCell ? tableRow.insertBefore(cell, preCell) : tableRow.appendChild(cell);
                    }
                    replaceTdToTh(rowIndex, cell, tableRow);
                }
            }
            //框选时插入不触发contentchange，需要手动更新索引
            this.update();
            this.updateWidth(backWidth, defaultValue || {tdPadding:10, tdBorder:1});
        },
        updateWidth:function (width, defaultValue) {
            var table = this.table,
                tmpWidth = UETable.getWidth(table) - defaultValue.tdPadding * 2 - defaultValue.tdBorder + width;
            if (tmpWidth < table.ownerDocument.body.offsetWidth) {
                table.setAttribute("width", tmpWidth);
                return;
            }
            var tds = domUtils.getElementsByTagName(this.table, "td");
            utils.each(tds, function (td) {
                td.setAttribute("width", width);
            })
        },
        deleteCol:function (colIndex) {
            var indexTable = this.indexTable,
                tableRows = this.table.rows,
                backTableWidth = this.table.getAttribute("width"),
                backTdWidth = 0,
                rowsNum = this.rowsNum,
                cacheMap = {};
            for (var rowIndex = 0; rowIndex < rowsNum;) {
                var infoRow = indexTable[rowIndex],
                    cellInfo = infoRow[colIndex],
                    key = cellInfo.rowIndex + '_' + cellInfo.colIndex;
                // 跳过已经处理过的Cell
                if (cacheMap[key])continue;
                cacheMap[key] = 1;
                var cell = this.getCell(cellInfo.rowIndex, cellInfo.cellIndex);
                if (!backTdWidth) backTdWidth = cell && parseInt(cell.offsetWidth / cell.colSpan, 10).toFixed(0);
                // 如果Cell的colSpan大于1, 就修改colSpan, 否则就删掉这个Cell
                if (cell.colSpan > 1) {
                    cell.colSpan--;
                } else {
                    tableRows[rowIndex].deleteCell(cellInfo.cellIndex);
                }
                rowIndex += cellInfo.rowSpan || 1;
            }
            this.table.setAttribute("width", backTableWidth - backTdWidth);
            this.update();
        },
        splitToCells:function (cell) {
            var me = this,
                cells = this.splitToRows(cell);
            utils.each(cells, function (cell) {
                me.splitToCols(cell);
            })
        },
        splitToRows:function (cell) {
            var cellInfo = this.getCellInfo(cell),
                rowIndex = cellInfo.rowIndex,
                colIndex = cellInfo.colIndex,
                results = [];
            // 修改Cell的rowSpan
            cell.rowSpan = 1;
            results.push(cell);
            // 补齐单元格
            for (var i = rowIndex, endRow = rowIndex + cellInfo.rowSpan; i < endRow; i++) {
                if (i == rowIndex)continue;
                var tableRow = this.table.rows[i],
                    tmpCell = tableRow.insertCell(colIndex - this.getPreviewMergedCellsNum(i, colIndex));
                tmpCell.colSpan = cellInfo.colSpan;
                this.setCellContent(tmpCell);
                tmpCell.setAttribute('vAlign', cell.getAttribute('vAlign'));
                tmpCell.setAttribute('align', cell.getAttribute('align'));
                if (cell.style.cssText) {
                    tmpCell.style.cssText = cell.style.cssText;
                }
                results.push(tmpCell);
            }
            this.update();
            return results;
        },
        getPreviewMergedCellsNum:function (rowIndex, colIndex) {
            var indexRow = this.indexTable[rowIndex],
                num = 0;
            for (var i = 0; i < colIndex;) {
                var colSpan = indexRow[i].colSpan,
                    tmpRowIndex = indexRow[i].rowIndex;
                num += (colSpan - (tmpRowIndex == rowIndex ? 1 : 0));
                i += colSpan;
            }
            return num;
        },
        splitToCols:function (cell) {
            var backWidth = (cell.offsetWidth / cell.colSpan - 22).toFixed(0),

                cellInfo = this.getCellInfo(cell),
                rowIndex = cellInfo.rowIndex,
                colIndex = cellInfo.colIndex,
                results = [];
            // 修改Cell的rowSpan
            cell.colSpan = 1;
            cell.setAttribute("width", backWidth);
            results.push(cell);
            // 补齐单元格
            for (var j = colIndex, endCol = colIndex + cellInfo.colSpan; j < endCol; j++) {
                if (j == colIndex)continue;
                var tableRow = this.table.rows[rowIndex],
                    tmpCell = tableRow.insertCell(this.indexTable[rowIndex][j].cellIndex + 1);
                tmpCell.rowSpan = cellInfo.rowSpan;
                this.setCellContent(tmpCell);
                tmpCell.setAttribute('vAlign', cell.getAttribute('vAlign'));
                tmpCell.setAttribute('align', cell.getAttribute('align'));
                tmpCell.setAttribute('width', backWidth);
                if (cell.style.cssText) {
                    tmpCell.style.cssText = cell.style.cssText;
                }
                //处理th的情况
                if (cell.tagName == 'TH') {
                    var th = cell.ownerDocument.createElement('th');
                    th.appendChild(tmpCell.firstChild);
                    th.setAttribute('vAlign', cell.getAttribute('vAlign'));
                    th.rowSpan = tmpCell.rowSpan;
                    tableRow.insertBefore(th, tmpCell);
                    domUtils.remove(tmpCell);
                }
                results.push(tmpCell);
            }
            this.update();
            return results;
        },
        isLastCell:function (cell, rowsNum, colsNum) {
            rowsNum = rowsNum || this.rowsNum;
            colsNum = colsNum || this.colsNum;
            var cellInfo = this.getCellInfo(cell);
            return ((cellInfo.rowIndex + cellInfo.rowSpan) == rowsNum) &&
                ((cellInfo.colIndex + cellInfo.colSpan) == colsNum);
        },
        getLastCell:function (cells) {
            cells = cells || this.table.getElementsByTagName("td");
            var firstInfo = this.getCellInfo(cells[0]);
            var me = this, last = cells[0],
                tr = last.parentNode,
                cellsNum = 0, cols = 0, rows;
            utils.each(cells, function (cell) {
                if (cell.parentNode == tr)cols += cell.colSpan || 1;
                cellsNum += cell.rowSpan * cell.colSpan || 1;
            });
            rows = cellsNum / cols;
            utils.each(cells, function (cell) {
                if (me.isLastCell(cell, rows, cols)) {
                    last = cell;
                    return false;
                }
            });
            return last;

        },
        selectRow:function (rowIndex) {
            var indexRow = this.indexTable[rowIndex],
                start = this.getCell(indexRow[0].rowIndex, indexRow[0].cellIndex),
                end = this.getCell(indexRow[this.colsNum - 1].rowIndex, indexRow[this.colsNum - 1].cellIndex),
                range = this.getCellsRange(start, end);
            this.setSelected(range);
        },
        selectTable:function () {
            var tds = this.table.getElementsByTagName("td"),
                range = this.getCellsRange(tds[0], tds[tds.length - 1]);
            this.setSelected(range);
        },
        sortTable:function (sortByCellIndex, compareFn) {
            var table = this.table,
                rows = table.rows,
                trArray = [],
                flag = rows[0].cells[0].tagName === "TH",
                lastRowIndex = 0;
            if(this.selectedTds.length){
                var range = this.cellsRange,
                    len = range.endRowIndex + 1;
                for (var i = range.beginRowIndex; i < len; i++) {
                    trArray[i] = rows[i];
                }
                trArray.splice(0,range.beginRowIndex);
                lastRowIndex = (range.endRowIndex +1) === this.rowsNum ? 0 : range.endRowIndex +1;
            }else{
                for (var i = 0,len = rows.length; i < len; i++) {
                    trArray[i] = rows[i];
                }
            }
            //th不参与排序
            flag && trArray.splice(0, 1);
            trArray = utils.sort(trArray,function (tr1, tr2) {
                var txt = function(node){
                    return node.innerText||node.textContent;
                };
                return compareFn ? (typeof compareFn === "number" ? compareFn : compareFn.call(this, tr1.cells[sortByCellIndex], tr2.cells[sortByCellIndex])) : function () {
                    var value1 = txt(tr1.cells[sortByCellIndex]),
                        value2 = txt(tr2.cells[sortByCellIndex]);
                    return value1.localeCompare(value2);
                }();
            });
            var fragment = table.ownerDocument.createDocumentFragment();
            for (var j = 0, len = trArray.length; j < len; j++) {
                fragment.appendChild(trArray[j]);
            }
            var tbody = table.getElementsByTagName("tbody")[0];
            if(!lastRowIndex){
                tbody.appendChild(fragment);
            }else{
                tbody.insertBefore(fragment,rows[lastRowIndex- range.endRowIndex + range.beginRowIndex - 1])
            }
        },
        setBackground:function (cells, value) {
            if (typeof value === "string") {
                utils.each(cells, function (cell) {
                    cell.style.backgroundColor = value;
                })
            } else if (typeof value === "object") {
                value = utils.extend({
                    repeat:true,
                    colorList:["#ddd", "#fff"]
                }, value);
                var rowIndex = this.getCellInfo(cells[0]).rowIndex,
                    count = 0,
                    colors = value.colorList,
                    getColor = function (list, index, repeat) {
                        return list[index] ? list[index] : repeat ? list[index % list.length] : "";
                    };
                for (var i = 0, cell; cell = cells[i++];) {
                    var cellInfo = this.getCellInfo(cell);
                    cell.style.backgroundColor = getColor(colors, ((rowIndex + count) == cellInfo.rowIndex) ? count : ++count, value.repeat);
                }
            }
        },
        removeBackground:function (cells) {
            utils.each(cells, function (cell) {
                cell.style.backgroundColor = "";
            })
        }


    };
    function showError(e) {
    }
})();
/**
 * Created with JetBrains PhpStorm.
 * User: taoqili
 * Date: 13-2-20
 * Time: 下午6:25
 * To change this template use File | Settings | File Templates.
 */
;
(function () {
    var UT = UE.UETable,
        getTableItemsByRange = function (editor) {
            return UT.getTableItemsByRange(editor);
        },
        getUETableBySelected = function (editor) {
            return UT.getUETableBySelected(editor)
        },
        getDefaultValue = function (editor, table) {
            return UT.getDefaultValue(editor, table);
        },
        getUETable = function (tdOrTable) {
            return UT.getUETable(tdOrTable);
        };


    UE.commands['inserttable'] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).table ? -1 : 0;
        },
        execCommand: function (cmd, opt) {
            function createTable(opt, tdWidth) {
                var html = [],
                    rowsNum = opt.numRows,
                    colsNum = opt.numCols;
                for (var r = 0; r < rowsNum; r++) {
                    html.push('<tr>');
                    for (var c = 0; c < colsNum; c++) {
                        html.push('<td width="' + tdWidth + '"  vAlign="' + opt.tdvalign + '" >' + (browser.ie ? domUtils.fillChar : '<br/>') + '</td>')
                    }
                    html.push('</tr>')
                }
                //禁止指定table-width
                return '<table><tbody>' + html.join('') + '</tbody></table>'
            }

            if (!opt) {
                opt = utils.extend({}, {
                    numCols: this.options.defaultCols,
                    numRows: this.options.defaultRows,
                    tdvalign: this.options.tdvalign
                })
            }
            var me = this;
            var range = this.selection.getRange(),
                start = range.startContainer,
                firstParentBlock = domUtils.findParent(start, function (node) {
                    return domUtils.isBlockElm(node);
                }, true) || me.body;

            var defaultValue = getDefaultValue(me),
                tableWidth = firstParentBlock.offsetWidth,
                tdWidth = Math.floor(tableWidth / opt.numCols - defaultValue.tdPadding * 2 - defaultValue.tdBorder);

            //todo其他属性
            !opt.tdvalign && (opt.tdvalign = me.options.tdvalign);
            me.execCommand("inserthtml", createTable(opt, tdWidth));
        }
    };

    UE.commands['insertparagraphbeforetable'] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).cell ? 0 : -1;
        },
        execCommand: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                var p = this.document.createElement("p");
                p.innerHTML = browser.ie ? '&nbsp;' : '<br />';
                table.parentNode.insertBefore(p, table);
                this.selection.getRange().setStart(p, 0).setCursor();
            }
        }
    };

    UE.commands['deletetable'] = {
        queryCommandState: function () {
            var rng = this.selection.getRange();
            return domUtils.findParentByTagName(rng.startContainer, 'table', true) ? 0 : -1;
        },
        execCommand: function (cmd, table) {
            var rng = this.selection.getRange();
            table = table || domUtils.findParentByTagName(rng.startContainer, 'table', true);
            if (table) {
                var next = table.nextSibling;
                if (!next) {
                    next = domUtils.createElement(this.document, 'p', {
                        'innerHTML': browser.ie ? domUtils.fillChar : '<br/>'
                    });
                    table.parentNode.insertBefore(next, table);
                }
                domUtils.remove(table);
                rng = this.selection.getRange();
                if (next.nodeType == 3) {
                    rng.setStartBefore(next)
                } else {
                    rng.setStart(next, 0)
                }
                rng.setCursor(false, true)
                this.fireEvent("tablehasdeleted")

            }

        }
    };
    UE.commands['cellalign'] = {
        queryCommandState: function () {
            return getSelectedArr(this).length ? 0 : -1
        },
        execCommand: function (cmd, align) {
            var selectedTds = getSelectedArr(this);
            if (selectedTds.length) {
                for (var i = 0, ci; ci = selectedTds[i++];) {
                    ci.setAttribute('align', align);
                }
            }
        }
    };
    UE.commands['cellvalign'] = {
        queryCommandState: function () {
            return getSelectedArr(this).length ? 0 : -1;
        },
        execCommand: function (cmd, valign) {
            var selectedTds = getSelectedArr(this);
            if (selectedTds.length) {
                for (var i = 0, ci; ci = selectedTds[i++];) {
                    ci.setAttribute('vAlign', valign);
                }
            }
        }
    };
    UE.commands['insertcaption'] = {
        queryCommandState: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                return table.getElementsByTagName('caption').length == 0 ? 1 : -1;
            }
            return -1;
        },
        execCommand: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                var caption = this.document.createElement('caption');
                caption.innerHTML = browser.ie ? domUtils.fillChar : '<br/>';
                table.insertBefore(caption, table.firstChild);
                var range = this.selection.getRange();
                range.setStart(caption, 0).setCursor();
            }

        }
    };
    UE.commands['deletecaption'] = {
        queryCommandState: function () {
            var rng = this.selection.getRange(),
                table = domUtils.findParentByTagName(rng.startContainer, 'table');
            if (table) {
                return table.getElementsByTagName('caption').length == 0 ? -1 : 1;
            }
            return -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                table = domUtils.findParentByTagName(rng.startContainer, 'table');
            if (table) {
                domUtils.remove(table.getElementsByTagName('caption')[0]);
                var range = this.selection.getRange();
                range.setStart(table.rows[0].cells[0], 0).setCursor();
            }

        }
    };
    UE.commands['inserttitle'] = {
        queryCommandState: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                var firstRow = table.rows[0];
                return firstRow.getElementsByTagName('th').length == 0 ? 0 : -1
            }
            return -1;
        },
        execCommand: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                getUETable(table).insertRow(0, 'th');
            }
            var th = table.getElementsByTagName('th')[0];
            this.selection.getRange().setStart(th, 0).setCursor(false, true);
        }
    };
    UE.commands['deletetitle'] = {
        queryCommandState: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                var firstRow = table.rows[0];
                return firstRow.getElementsByTagName('th').length ? 0 : -1
            }
            return -1;
        },
        execCommand: function () {
            var table = getTableItemsByRange(this).table;
            if (table) {
                domUtils.remove(table.rows[0])
            }
            var td = table.getElementsByTagName('td')[0];
            this.selection.getRange().setStart(td, 0).setCursor(false, true);
        }
    };

    UE.commands["mergeright"] = {
        queryCommandState: function (cmd) {
            var tableItems = getTableItemsByRange(this);
            if (!tableItems.cell) return -1;
            var ut = getUETable(tableItems.table);
            if (ut.selectedTds.length) return -1;
            var cellInfo = ut.getCellInfo(tableItems.cell),
                rightColIndex = cellInfo.colIndex + cellInfo.colSpan;
            if (rightColIndex >= ut.colsNum) return -1;
            var rightCellInfo = ut.indexTable[cellInfo.rowIndex][rightColIndex];
            return (rightCellInfo.rowIndex == cellInfo.rowIndex
                && rightCellInfo.rowSpan == cellInfo.rowSpan) ? 0 : -1;
        },
        execCommand: function (cmd) {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell);
            ut.mergeRight(cell);
            rng.moveToBookmark(bk).select();
        }
    };
    UE.commands["mergedown"] = {
        queryCommandState: function (cmd) {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            if (!cell || cell.tagName == "TH") return -1;
            var ut = getUETable(tableItems.table);
            if (ut.selectedTds.length)return -1;
            var cellInfo = ut.getCellInfo(tableItems.cell),
                downRowIndex = cellInfo.rowIndex + cellInfo.rowSpan;
            // 如果处于最下边则不能f向右合并
            if (downRowIndex >= ut.rowsNum) return -1;
            var downCellInfo = ut.indexTable[downRowIndex][cellInfo.colIndex];
            // 当且仅当两个Cell的开始列号和结束列号一致时能进行合并
            return (downCellInfo.colIndex == cellInfo.colIndex
                && downCellInfo.colSpan == cellInfo.colSpan) && tableItems.cell.tagName !== 'TH' ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell);
            ut.mergeDown(cell);
            rng.moveToBookmark(bk).select();
        }
    };
    UE.commands["mergecells"] = {
        queryCommandState: function () {
            return getUETableBySelected(this) ? 0 : -1;
        },
        execCommand: function () {
            var ut = getUETableBySelected(this);
            if (ut && ut.selectedTds.length) {
                var cell = ut.selectedTds[0];
                ut.mergeRange();
                var rng = this.selection.getRange();
                if (domUtils.isEmptyBlock(cell)) {
                    rng.setStart(cell, 0).collapse(true)
                } else {
                    rng.selectNodeContents(cell)
                }
                rng.select();
            }


        }
    };
    UE.commands["insertrow"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            return cell && cell.tagName == "TD" && getUETable(tableItems.table).rowsNum < this.options.maxRowNum ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell,
                table = tableItems.table,
                ut = getUETable(table),
                cellInfo = ut.getCellInfo(cell);
            //ut.insertRow(!ut.selectedTds.length ? cellInfo.rowIndex:ut.cellsRange.beginRowIndex,'');
            if (!ut.selectedTds.length) {
                ut.insertRow(cellInfo.rowIndex, cell);
            } else {
                var range = ut.cellsRange;
                for (var i = 0, len = range.endRowIndex - range.beginRowIndex + 1; i < len; i++) {
                    ut.insertRow(range.beginRowIndex, cell);
                }
            }
            rng.moveToBookmark(bk).select();
            if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
        }
    };
    //后插入行
    UE.commands["insertrownext"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            return cell && (cell.tagName == "TD") && getUETable(tableItems.table).rowsNum < this.options.maxRowNum ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell,
                table = tableItems.table,
                ut = getUETable(table),
                cellInfo = ut.getCellInfo(cell);
            //ut.insertRow(!ut.selectedTds.length? cellInfo.rowIndex + cellInfo.rowSpan : ut.cellsRange.endRowIndex + 1,'');
            if (!ut.selectedTds.length) {
                ut.insertRow(cellInfo.rowIndex + cellInfo.rowSpan, cell);
            } else {
                var range = ut.cellsRange;
                for (var i = 0, len = range.endRowIndex - range.beginRowIndex + 1; i < len; i++) {
                    ut.insertRow(range.endRowIndex + 1, cell);
                }
            }
            rng.moveToBookmark(bk).select();
            if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
        }
    };
    UE.commands["deleterow"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this);
            if (!tableItems.cell) {
                return -1;
            }
        },
        execCommand: function () {
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell),
                cellsRange = ut.cellsRange,
                cellInfo = ut.getCellInfo(cell),
                preCell = ut.getVSideCell(cell),
                nextCell = ut.getVSideCell(cell, true),
                rng = this.selection.getRange();
            if (utils.isEmptyObject(cellsRange)) {
                ut.deleteRow(cellInfo.rowIndex);
            } else {
                for (var i = cellsRange.beginRowIndex; i < cellsRange.endRowIndex + 1; i++) {
                    ut.deleteRow(cellsRange.beginRowIndex);
                }
            }
            var table = ut.table;
            if (!table.getElementsByTagName('td').length) {
                var nextSibling = table.nextSibling;
                domUtils.remove(table);
                if (nextSibling) {
                    rng.setStart(nextSibling, 0).setCursor(false, true);
                }
            } else {
                if (cellInfo.rowSpan == 1 || cellInfo.rowSpan == cellsRange.endRowIndex - cellsRange.beginRowIndex + 1) {
                    if (nextCell || preCell) rng.selectNodeContents(nextCell || preCell).setCursor(false, true);
                } else {
                    var newCell = ut.getCell(cellInfo.rowIndex, ut.indexTable[cellInfo.rowIndex][cellInfo.colIndex].cellIndex);
                    if (newCell) rng.selectNodeContents(newCell).setCursor(false, true);
                }
            }
            if (table.getAttribute("interlaced") === "enabled")this.fireEvent("interlacetable", table);
        }
    };
    UE.commands["insertcol"] = {
        queryCommandState: function (cmd) {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            return cell && (cell.tagName == "TD" || cell.tagName == 'TH') && getUETable(tableItems.table).colsNum < this.options.maxColNum ? 0 : -1;
        },
        execCommand: function (cmd) {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            if (this.queryCommandState(cmd) == -1)return;
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell),
                cellInfo = ut.getCellInfo(cell);

            //ut.insertCol(!ut.selectedTds.length ? cellInfo.colIndex:ut.cellsRange.beginColIndex);
            if (!ut.selectedTds.length) {
                ut.insertCol(cellInfo.colIndex, cell);
            } else {
                var range = ut.cellsRange;
                for (var i = 0, len = range.endColIndex - range.beginColIndex + 1; i < len; i++) {
                    ut.insertCol(range.beginColIndex, cell);
                }
            }
            rng.moveToBookmark(bk).select(true);
        }
    };
    UE.commands["insertcolnext"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            return cell && getUETable(tableItems.table).colsNum < this.options.maxColNum ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell),
                cellInfo = ut.getCellInfo(cell);
            //ut.insertCol(!ut.selectedTds.length ? cellInfo.colIndex + cellInfo.colSpan:ut.cellsRange.endColIndex +1);
            if (!ut.selectedTds.length) {
                ut.insertCol(cellInfo.colIndex + cellInfo.colSpan, cell);
            } else {
                var range = ut.cellsRange;
                for (var i = 0, len = range.endColIndex - range.beginColIndex + 1; i < len; i++) {
                    ut.insertCol(range.endColIndex + 1, cell);
                }
            }
            rng.moveToBookmark(bk).select();
        }
    };

    UE.commands["deletecol"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this);
            if (!tableItems.cell) return -1;
        },
        execCommand: function () {
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell),
                range = ut.cellsRange,
                cellInfo = ut.getCellInfo(cell),
                preCell = ut.getHSideCell(cell),
                nextCell = ut.getHSideCell(cell, true);
            if (utils.isEmptyObject(range)) {
                ut.deleteCol(cellInfo.colIndex);
            } else {
                for (var i = range.beginColIndex; i < range.endColIndex + 1; i++) {
                    ut.deleteCol(range.beginColIndex);
                }
            }
            var table = ut.table,
                rng = this.selection.getRange();

            if (!table.getElementsByTagName('td').length) {
                var nextSibling = table.nextSibling;
                domUtils.remove(table);
                if (nextSibling) {
                    rng.setStart(nextSibling, 0).setCursor(false, true);
                }
            } else {
                if (domUtils.inDoc(cell, this.document)) {
                    rng.setStart(cell, 0).setCursor(false, true);
                } else {
                    if (nextCell && domUtils.inDoc(nextCell, this.document)) {
                        rng.selectNodeContents(nextCell).setCursor(false, true);
                    } else {
                        if (preCell && domUtils.inDoc(preCell, this.document)) {
                            rng.selectNodeContents(preCell).setCursor(true, true);
                        }
                    }
                }
            }
        }
    };
    UE.commands["splittocells"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            if (!cell) return -1;
            var ut = getUETable(tableItems.table);
            if (ut.selectedTds.length > 0) return -1;
            return cell && (cell.colSpan > 1 || cell.rowSpan > 1) ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell);
            ut.splitToCells(cell);
            rng.moveToBookmark(bk).select();
        }
    };
    UE.commands["splittorows"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            if (!cell) return -1;
            var ut = getUETable(tableItems.table);
            if (ut.selectedTds.length > 0) return -1;
            return cell && cell.rowSpan > 1 ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell);
            ut.splitToRows(cell);
            rng.moveToBookmark(bk).select();
        }
    };
    UE.commands["splittocols"] = {
        queryCommandState: function () {
            var tableItems = getTableItemsByRange(this),
                cell = tableItems.cell;
            if (!cell) return -1;
            var ut = getUETable(tableItems.table);
            if (ut.selectedTds.length > 0) return -1;
            return cell && cell.colSpan > 1 ? 0 : -1;
        },
        execCommand: function () {
            var rng = this.selection.getRange(),
                bk = rng.createBookmark(true);
            var cell = getTableItemsByRange(this).cell,
                ut = getUETable(cell);
            ut.splitToCols(cell);
            rng.moveToBookmark(bk).select();

        }
    };

    UE.commands["adaptbytext"] =
        UE.commands["adaptbywindow"] = {
            queryCommandState: function () {
                return getTableItemsByRange(this).table ? 0 : -1
            },
            execCommand: function (cmd) {
                var tableItems = getTableItemsByRange(this),
                    table = tableItems.table;
                if (table) {
                    if (cmd == 'adaptbywindow') {
                        resetTdWidth(table, this);
                    } else {
                        var cells = domUtils.getElementsByTagName(table, "td th");
                        utils.each(cells, function (cell) {
                            cell.removeAttribute("width");
                        });
                        table.removeAttribute("width");
                    }
                }
            }
        };

    //平均分配各列
    UE.commands['averagedistributecol'] = {
        queryCommandState: function () {
            var ut = getUETableBySelected(this);
            if (!ut) return -1;
            return ut.isFullRow() || ut.isFullCol() ? 0 : -1;
        },
        execCommand: function (cmd) {
            var me = this,
                ut = getUETableBySelected(me);

            function getAverageWidth() {
                var tb = ut.table,
                    averageWidth, sumWidth = 0, colsNum = 0,
                    tbAttr = getDefaultValue(me, tb);

                if (ut.isFullRow()) {
                    sumWidth = tb.offsetWidth;
                    colsNum = ut.colsNum;
                } else {
                    var begin = ut.cellsRange.beginColIndex,
                        end = ut.cellsRange.endColIndex,
                        node;
                    for (var i = begin; i <= end;) {
                        node = ut.selectedTds[i];
                        sumWidth += node.offsetWidth;
                        i += node.colSpan;
                        colsNum += 1;
                    }
                }
                averageWidth = Math.ceil(sumWidth / colsNum) - tbAttr.tdBorder * 2 - tbAttr.tdPadding * 2;
                return averageWidth;
            }

            function setAverageWidth(averageWidth) {
                utils.each(domUtils.getElementsByTagName(ut.table, "th"), function (node) {
                    node.setAttribute("width", "");
                });
                var cells = ut.isFullRow() ? domUtils.getElementsByTagName(ut.table, "td") : ut.selectedTds;

                utils.each(cells, function (node) {
                    if (node.colSpan == 1) {
                        node.setAttribute("width", averageWidth);
                    }
                });
            }

            if (ut && ut.selectedTds.length) {
                setAverageWidth(getAverageWidth());
            }
        }
    };
    //平均分配各行
    UE.commands['averagedistributerow'] = {
        queryCommandState: function () {
            var ut = getUETableBySelected(this);
            if (!ut) return -1;
            if (ut.selectedTds && /th/ig.test(ut.selectedTds[0].tagName)) return -1;
            return ut.isFullRow() || ut.isFullCol() ? 0 : -1;
        },
        execCommand: function (cmd) {
            var me = this,
                ut = getUETableBySelected(me);

            function getAverageHeight() {
                var averageHeight, rowNum, sumHeight = 0,
                    tb = ut.table,
                    tbAttr = getDefaultValue(me, tb),
                    tdpadding = parseInt(domUtils.getComputedStyle(tb.getElementsByTagName('td')[0], "padding-top"));

                if (ut.isFullCol()) {
                    var captionArr = domUtils.getElementsByTagName(tb, "caption"),
                        thArr = domUtils.getElementsByTagName(tb, "th"),
                        captionHeight, thHeight;

                    if (captionArr.length > 0) {
                        captionHeight = captionArr[0].offsetHeight;
                    }
                    if (thArr.length > 0) {
                        thHeight = thArr[0].offsetHeight;
                    }

                    sumHeight = tb.offsetHeight - (captionHeight || 0) - (thHeight || 0);
                    rowNum = thArr.length == 0 ? ut.rowsNum : (ut.rowsNum - 1);
                } else {
                    var begin = ut.cellsRange.beginRowIndex,
                        end = ut.cellsRange.endRowIndex,
                        count = 0,
                        trs = domUtils.getElementsByTagName(tb, "tr");
                    for (var i = begin; i <= end; i++) {
                        sumHeight += trs[i].offsetHeight;
                        count += 1;
                    }
                    rowNum = count;
                }
                //ie8下是混杂模式
                if (browser.ie && browser.version < 9) {
                    averageHeight = Math.ceil(sumHeight / rowNum);
                } else {
                    averageHeight = Math.ceil(sumHeight / rowNum) - tbAttr.tdBorder * 2 - tdpadding * 2;
                }
                return averageHeight;
            }

            function setAverageHeight(averageHeight) {
                var cells = ut.isFullCol() ? domUtils.getElementsByTagName(ut.table, "td") : ut.selectedTds;
                utils.each(cells, function (node) {
                    if (node.rowSpan == 1) {
                        node.setAttribute("height", averageHeight);
                    }
                });
            }

            if (ut && ut.selectedTds.length) {
                setAverageHeight(getAverageHeight());
            }
        }
    };

    //单元格对齐方式
    UE.commands['cellalignment'] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).table ? 0 : -1
        },
        execCommand: function (cmd, data) {
            var me = this,
                ut = getUETableBySelected(me);

            if (!ut) {
                var start = me.selection.getStart(),
                    cell = start && domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
                if (!/caption/ig.test(cell.tagName)) {
                    domUtils.setAttributes(cell, data);
                } else {
                    cell.style.textAlign = data.align;
                    cell.style.verticalAlign = data.vAlign;
                }
                me.selection.getRange().setCursor(true);
            } else {
                utils.each(ut.selectedTds, function (cell) {
                    domUtils.setAttributes(cell, data);
                });
            }
        },
        /**
         * 查询当前点击的单元格的对齐状态， 如果当前已经选择了多个单元格， 则会返回所有单元格经过统一协调过后的状态
         * @see UE.UETable.getTableCellAlignState
         */
        queryCommandValue: function (cmd) {

            var activeMenuCell = getTableItemsByRange( this).cell;

            if( !activeMenuCell ) {
                activeMenuCell = getSelectedArr(this)[0];
            }

            if (!activeMenuCell) {

                return null;

            } else {

                //获取同时选中的其他单元格
                var cells = UE.UETable.getUETable(activeMenuCell).selectedTds;

                !cells.length && ( cells = activeMenuCell );

                return UE.UETable.getTableCellAlignState(cells);

            }

        }
    };
    //表格对齐方式
    UE.commands['tablealignment'] = {
        queryCommandState: function () {
            if (browser.ie && browser.version < 8) {
                return -1;
            }
            return getTableItemsByRange(this).table ? 0 : -1
        },
        execCommand: function (cmd, value) {
            var me = this,
                start = me.selection.getStart(),
                table = start && domUtils.findParentByTagName(start, ["table"], true);

            if (table) {
                table.setAttribute("align",value);
            }
        }
    };

    //表格属性
    UE.commands['edittable'] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).table ? 0 : -1
        },
        execCommand: function (cmd, color) {
            var rng = this.selection.getRange(),
                table = domUtils.findParentByTagName(rng.startContainer, 'table');
            if (table) {
                var arr = domUtils.getElementsByTagName(table, "td").concat(
                    domUtils.getElementsByTagName(table, "th"),
                    domUtils.getElementsByTagName(table, "caption")
                );
                utils.each(arr, function (node) {
                    node.style.borderColor = color;
                });
            }
        }
    };
    //单元格属性
    UE.commands['edittd'] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).table ? 0 : -1
        },
        execCommand: function (cmd, bkColor) {
            var me = this,
                ut = getUETableBySelected(me);

            if (!ut) {
                var start = me.selection.getStart(),
                    cell = start && domUtils.findParentByTagName(start, ["td", "th", "caption"], true);
                if (cell) {
                    cell.style.backgroundColor = bkColor;
                }
            } else {
                utils.each(ut.selectedTds, function (cell) {
                    cell.style.backgroundColor = bkColor;
                });
            }
        }
    };
    UE.commands['sorttable'] = {
        queryCommandState: function () {
            var me = this,
                tableItems = getTableItemsByRange(me);
            if (!tableItems.cell) return -1;
            var table = tableItems.table,
                cells = table.getElementsByTagName("td");
            for (var i = 0, cell; cell = cells[i++];) {
                if (cell.rowSpan != 1 || cell.colSpan != 1) return -1;
            }
            return 0;
        },
        execCommand: function (cmd, fn) {
            var me = this,
                range = me.selection.getRange(),
                bk = range.createBookmark(true),
                tableItems = getTableItemsByRange(me),
                cell = tableItems.cell,
                ut = getUETable(tableItems.table),
                cellInfo = ut.getCellInfo(cell);
            ut.sortTable(cellInfo.cellIndex, fn);
            range.moveToBookmark(bk).select();
        }
    };

    UE.commands["enablesort"] = UE.commands["disablesort"] = {
        queryCommandState: function () {
            return getTableItemsByRange(this).table ? 0 : -1;
        },
        execCommand: function (cmd) {
            var table = getTableItemsByRange(this).table;
            table.setAttribute("data-sort", cmd == "enablesort" ? "sortEnabled" : "sortDisabled");
        }
    };
    UE.commands["settablebackground"] = {
        queryCommandState: function () {
            return getSelectedArr(this).length > 1 ? 0 : -1;
        },
        execCommand: function (cmd, value) {
            var table, cells, ut;
            cells = getSelectedArr(this);
            ut = getUETable(cells[0]);
            ut.setBackground(cells, value);
        }
    };

    UE.commands["cleartablebackground"] = {
        queryCommandState: function () {
            var cells = getSelectedArr(this);
            if (!cells.length)return -1;
            for (var i = 0, cell; cell = cells[i++];) {
                if (cell.style.backgroundColor !== "") return 0;
            }
            return -1;
        },
        execCommand: function () {
            var cells = getSelectedArr(this),
                ut = getUETable(cells[0]);
            ut.removeBackground(cells);
        }
    };

    UE.commands["interlacetable"] = UE.commands["uninterlacetable"] = {
        queryCommandState: function (cmd) {
            var table = getTableItemsByRange(this).table;
            if (!table) return -1;
            var interlaced = table.getAttribute("interlaced");
            if (cmd == "interlacetable") {
                //TODO 待定
                //是否需要待定，如果设置，则命令只能单次执行成功，但反射具备toggle效果；否则可以覆盖前次命令，但反射将不存在toggle效果
                return (interlaced === "enabled") ? -1 : 0;
            } else {
                return (!interlaced || interlaced === "disabled") ? -1 : 0;
            }
        },
        execCommand: function (cmd, classList) {
            var table = getTableItemsByRange(this).table;
            if (cmd == "interlacetable") {
                table.setAttribute("interlaced", "enabled");
                this.fireEvent("interlacetable", table, classList);
            } else {
                table.setAttribute("interlaced", "disabled");
                this.fireEvent("uninterlacetable", table);
            }
        }
    };

    function resetTdWidth(table, editor) {
        var tds = table.getElementsByTagName("td");
        utils.each(tds, function (td) {
            td.removeAttribute("width");
        });
        table.setAttribute('width', getTableWidth(editor, true, getDefaultValue(editor, table)));
        setTimeout(function () {
            utils.each(tds, function (td) {
                (td.colSpan == 1) && td.setAttribute("width", td.offsetWidth + "");
            })
        }, 0);
    }

    function getTableWidth(editor, needIEHack, defaultValue) {
        var body = editor.body;
        return body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (editor.options.offsetWidth || 0);
    }

    function getSelectedArr(editor) {
        var cell = getTableItemsByRange(editor).cell;
        if (cell) {
            var ut = getUETable(cell);
            return ut.selectedTds.length ? ut.selectedTds : [cell];
        } else {
            return [];
        }
    }
})();
/**
 * Created with JetBrains PhpStorm.
 * User: taoqili
 * Date: 12-10-12
 * Time: 上午10:05
 * To change this template use File | Settings | File Templates.
 */
UE.plugins['table'] = function () {
    var me = this,
        tabTimer = null,
        //拖动计时器
        tableDragTimer = null,
        //双击计时器
        tableResizeTimer = null,
        //单元格最小宽度
        cellMinWidth = 5,
        isInResizeBuffer = false,
        //单元格边框大小
        cellBorderWidth = 5,
        //鼠标偏移距离
        offsetOfTableCell = 10,
        //记录在有限时间内的点击状态， 共有3个取值， 0, 1, 2。 0代表未初始化， 1代表单击了1次，2代表2次
        singleClickState = 0,
        userActionStatus = null,
        //双击允许的时间范围
        dblclickTime = 360,
        UT = UE.UETable,
        getUETable = function (tdOrTable) {
            return UT.getUETable(tdOrTable);
        },
        getUETableBySelected = function (editor) {
            return UT.getUETableBySelected(editor);
        },
        getDefaultValue = function (editor, table) {
            return UT.getDefaultValue(editor, table);
        },
        removeSelectedClass = function (cells) {
            return UT.removeSelectedClass(cells);
        };

    function showError(e) {
//        throw e;
    }
    me.ready(function(){
        var me = this;
        var orgGetText = me.selection.getText;
        me.selection.getText = function(){
            var table = getUETableBySelected(me);
            if(table){
                var str = '';
                utils.each(table.selectedTds,function(td){
                    str += td[browser.ie?'innerText':'textContent'];
                })
                return str;
            }else{
                return orgGetText.call(me.selection)
            }

        }
    })

    //处理拖动及框选相关方法
    var startTd = null, //鼠标按下时的锚点td
        currentTd = null, //当前鼠标经过时的td
        onDrag = "", //指示当前拖动状态，其值可为"","h","v" ,分别表示未拖动状态，横向拖动状态，纵向拖动状态，用于鼠标移动过程中的判断
        onBorder = false, //检测鼠标按下时是否处在单元格边缘位置
        dragButton = null,
        dragOver = false,
        dragLine = null, //模拟的拖动线
        dragTd = null;    //发生拖动的目标td

    var mousedown = false,
    //todo 判断混乱模式
        needIEHack = true;

    me.setOpt({
        'maxColNum':20,
        'maxRowNum':100,
        'defaultCols':5,
        'defaultRows':5,
        'tdvalign':'top',
        'cursorpath':me.options.UEDITOR_HOME_URL + "themes/default/images/cursor_",
        'tableDragable':false,
        'classList':["ue-table-interlace-color-single","ue-table-interlace-color-double"]
    });
    me.getUETable = getUETable;
    var commands = {
        'deletetable':1,
        'inserttable':1,
        'cellvalign':1,
        'insertcaption':1,
        'deletecaption':1,
        'inserttitle':1,
        'deletetitle':1,
        "mergeright":1,
        "mergedown":1,
        "mergecells":1,
        "insertrow":1,
        "insertrownext":1,
        "deleterow":1,
        "insertcol":1,
        "insertcolnext":1,
        "deletecol":1,
        "splittocells":1,
        "splittorows":1,
        "splittocols":1,
        "adaptbytext":1,
        "adaptbywindow":1,
        "adaptbycustomer":1,
        "insertparagraph":1,
        "insertparagraphbeforetable":1,
        "averagedistributecol":1,
        "averagedistributerow":1
    };
    me.ready(function () {
        utils.cssRule('table',
            //选中的td上的样式
            '.selectTdClass{background-color:#edf5fa !important}' +
                'table.noBorderTable td,table.noBorderTable th,table.noBorderTable caption{border:1px dashed #ddd !important}' +
                //插入的表格的默认样式
                'table{margin-bottom:10px;border-collapse:collapse;display:table;}' +
                'td,th{padding: 5px 10px;border: 1px solid #DDD;}' +
                'caption{border:1px dashed #DDD;border-bottom:0;padding:3px;text-align:center;}' +
                'th{border-top:2px solid #BBB;background:#F7F7F7;}' +
                '.ue-table-interlace-color-single{ background-color: #fcfcfc; } .ue-table-interlace-color-double{ background-color: #f7faff; }' +
                'td p{margin:0;padding:0;}', me.document);

        var tableCopyList, isFullCol, isFullRow;
        //注册del/backspace事件
        me.addListener('keydown', function (cmd, evt) {
            var me = this;
            var keyCode = evt.keyCode || evt.which;

            if (keyCode == 8) {

                var ut = getUETableBySelected(me);
                if (ut && ut.selectedTds.length) {

                    if (ut.isFullCol()) {
                        me.execCommand('deletecol')
                    } else if (ut.isFullRow()) {
                        me.execCommand('deleterow')
                    } else {
                        me.fireEvent('delcells');
                    }
                    domUtils.preventDefault(evt);
                }

                var caption = domUtils.findParentByTagName(me.selection.getStart(), 'caption', true),
                    range = me.selection.getRange();
                if (range.collapsed && caption && isEmptyBlock(caption)) {
                    me.fireEvent('saveScene');
                    var table = caption.parentNode;
                    domUtils.remove(caption);
                    if (table) {
                        range.setStart(table.rows[0].cells[0], 0).setCursor(false, true);
                    }
                    me.fireEvent('saveScene');
                }

            }

            if (keyCode == 46) {

                ut = getUETableBySelected(me);
                if (ut) {
                    me.fireEvent('saveScene');
                    for (var i = 0, ci; ci = ut.selectedTds[i++];) {
                        domUtils.fillNode(me.document, ci)
                    }
                    me.fireEvent('saveScene');
                    domUtils.preventDefault(evt);

                }

            }
            if (keyCode == 13) {

                var rng = me.selection.getRange(),
                    caption = domUtils.findParentByTagName(rng.startContainer, 'caption', true);
                if (caption) {
                    var table = domUtils.findParentByTagName(caption, 'table');
                    if (!rng.collapsed) {

                        rng.deleteContents();
                        me.fireEvent('saveScene');
                    } else {
                        if (caption) {
                            rng.setStart(table.rows[0].cells[0], 0).setCursor(false, true);
                        }
                    }
                    domUtils.preventDefault(evt);
                    return;
                }
                if (rng.collapsed) {
                    var table = domUtils.findParentByTagName(rng.startContainer, 'table');
                    if (table) {
                        var cell = table.rows[0].cells[0],
                            start = domUtils.findParentByTagName(me.selection.getStart(), ['td', 'th'], true),
                            preNode = table.previousSibling;
                        if (cell === start && (!preNode || preNode.nodeType == 1 && preNode.tagName == 'TABLE' ) && domUtils.isStartInblock(rng)) {
                            var first = domUtils.findParent(me.selection.getStart(), function(n){return domUtils.isBlockElm(n)}, true);
                            if(first && ( /t(h|d)/i.test(first.tagName) || first ===  start.firstChild )){
                                me.execCommand('insertparagraphbeforetable');
                                domUtils.preventDefault(evt);
                            }

                        }
                    }
                }
            }

            if ((evt.ctrlKey || evt.metaKey) && evt.keyCode == '67') {
                tableCopyList = null;
                var ut = getUETableBySelected(me);
                if (ut) {
                    var tds = ut.selectedTds;
                    isFullCol = ut.isFullCol();
                    isFullRow = ut.isFullRow();
                    tableCopyList = [
                        [ut.cloneCell(tds[0],null,true)]
                    ];
                    for (var i = 1, ci; ci = tds[i]; i++) {
                        if (ci.parentNode !== tds[i - 1].parentNode) {
                            tableCopyList.push([ut.cloneCell(ci,null,true)]);
                        } else {
                            tableCopyList[tableCopyList.length - 1].push(ut.cloneCell(ci,null,true));
                        }

                    }
                }
            }
        });
        me.addListener("tablehasdeleted",function(){
            toggleDraggableState(this, false, "", null);
            if (dragButton)domUtils.remove(dragButton);
        });

        me.addListener('beforepaste', function (cmd, html) {
            var me = this;
            var rng = me.selection.getRange();
            if (domUtils.findParentByTagName(rng.startContainer, 'caption', true)) {
                var div = me.document.createElement("div");
                div.innerHTML = html.html;
                html.html = div[browser.ie ? 'innerText' : 'textContent'];
                return;
            }
            var table = getUETableBySelected(me);
            if (tableCopyList) {
                me.fireEvent('saveScene');
                var rng = me.selection.getRange();
                var td = domUtils.findParentByTagName(rng.startContainer, ['td', 'th'], true), tmpNode, preNode;
                if (td) {
                    var ut = getUETable(td);
                    if (isFullRow) {
                        var rowIndex = ut.getCellInfo(td).rowIndex;
                        if (td.tagName == 'TH') {
                            rowIndex++;
                        }
                        for (var i = 0, ci; ci = tableCopyList[i++];) {
                            var tr = ut.insertRow(rowIndex++, "td");
                            for (var j = 0, cj; cj = ci[j]; j++) {
                                var cell = tr.cells[j];
                                if (!cell) {
                                    cell = tr.insertCell(j)
                                }
                                cell.innerHTML = cj.innerHTML;
                                cj.getAttribute('width') && cell.setAttribute('width', cj.getAttribute('width'));
                                cj.getAttribute('vAlign') && cell.setAttribute('vAlign', cj.getAttribute('vAlign'));
                                cj.getAttribute('align') && cell.setAttribute('align', cj.getAttribute('align'));
                                cj.style.cssText && (cell.style.cssText = cj.style.cssText)
                            }
                            for (var j = 0, cj; cj = tr.cells[j]; j++) {
                                if (!ci[j])
                                    break;
                                cj.innerHTML = ci[j].innerHTML;
                                ci[j].getAttribute('width') && cj.setAttribute('width', ci[j].getAttribute('width'));
                                ci[j].getAttribute('vAlign') && cj.setAttribute('vAlign', ci[j].getAttribute('vAlign'));
                                ci[j].getAttribute('align') && cj.setAttribute('align', ci[j].getAttribute('align'));
                                ci[j].style.cssText && (cj.style.cssText = ci[j].style.cssText)
                            }
                        }
                    } else {
                        if (isFullCol) {
                            cellInfo = ut.getCellInfo(td);
                            var maxColNum = 0;
                            for (var j = 0, ci = tableCopyList[0], cj; cj = ci[j++];) {
                                maxColNum += cj.colSpan || 1;
                            }
                            me.__hasEnterExecCommand = true;
                            for (i = 0; i < maxColNum; i++) {
                                me.execCommand('insertcol');
                            }
                            me.__hasEnterExecCommand = false;
                            td = ut.table.rows[0].cells[cellInfo.cellIndex];
                            if (td.tagName == 'TH') {
                                td = ut.table.rows[1].cells[cellInfo.cellIndex];
                            }
                        }
                        for (var i = 0, ci; ci = tableCopyList[i++];) {
                            tmpNode = td;
                            for (var j = 0, cj; cj = ci[j++];) {
                                if (td) {
                                    td.innerHTML = cj.innerHTML;
                                    //todo 定制处理
                                    cj.getAttribute('width') && td.setAttribute('width', cj.getAttribute('width'));
                                    cj.getAttribute('vAlign') && td.setAttribute('vAlign', cj.getAttribute('vAlign'));
                                    cj.getAttribute('align') && td.setAttribute('align', cj.getAttribute('align'));
                                    cj.style.cssText && (td.style.cssText = cj.style.cssText);
                                    preNode = td;
                                    td = td.nextSibling;
                                } else {
                                    var cloneTd = cj.cloneNode(true);
                                    domUtils.removeAttributes(cloneTd, ['class', 'rowSpan', 'colSpan']);

                                    preNode.parentNode.appendChild(cloneTd)
                                }
                            }
                            td = ut.getNextCell(tmpNode, true, true);
                            if (!tableCopyList[i])
                                break;
                            if (!td) {
                                var cellInfo = ut.getCellInfo(tmpNode);
                                ut.table.insertRow(ut.table.rows.length);
                                ut.update();
                                td = ut.getVSideCell(tmpNode, true);
                            }
                        }
                    }
                    ut.update();
                } else {
                    table = me.document.createElement('table');
                    for (var i = 0, ci; ci = tableCopyList[i++];) {
                        var tr = table.insertRow(table.rows.length);
                        for (var j = 0, cj; cj = ci[j++];) {
                            cloneTd = UT.cloneCell(cj,null,true);
                            domUtils.removeAttributes(cloneTd, ['class']);
                            tr.appendChild(cloneTd)
                        }
                        if (j == 2 && cloneTd.rowSpan > 1) {
                            cloneTd.rowSpan = 1;
                        }
                    }

                    var defaultValue = getDefaultValue(me),
                        width = me.body.offsetWidth -
                            (needIEHack ? parseInt(domUtils.getComputedStyle(me.body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (me.options.offsetWidth || 0);
                    me.execCommand('insertHTML', '<table  ' +
                        ( isFullCol && isFullRow ? 'width="' + width + '"' : '') +
                        '>' + table.innerHTML.replace(/>\s*</g, '><').replace(/\bth\b/gi, "td") + '</table>')
                }
                me.fireEvent('contentchange');
                me.fireEvent('saveScene');
                html.html = '';
                return true;
            } else {
                var div = me.document.createElement("div"), tables;
                div.innerHTML = html.html;
                tables = div.getElementsByTagName("table");
                if (domUtils.findParentByTagName(me.selection.getStart(), 'table')) {
                    utils.each(tables, function (t) {
                        domUtils.remove(t)
                    });
                    if (domUtils.findParentByTagName(me.selection.getStart(), 'caption', true)) {
                        div.innerHTML = div[browser.ie ? 'innerText' : 'textContent'];
                    }
                } else {
                    utils.each(tables, function (table) {
                        removeStyleSize(table, true);
                        domUtils.removeAttributes(table, ['style', 'border']);
                        utils.each(domUtils.getElementsByTagName(table, "td"), function (td) {
                            if (isEmptyBlock(td)) {
                                domUtils.fillNode(me.document, td);
                            }
                            removeStyleSize(td, true);
//                            domUtils.removeAttributes(td, ['style'])
                        });
                    });
                }
                html.html = div.innerHTML;
            }
        });

        me.addListener('afterpaste', function () {
            utils.each(domUtils.getElementsByTagName(me.body, "table"), function (table) {
                if (table.offsetWidth > me.body.offsetWidth) {
                    var defaultValue = getDefaultValue(me, table);
                    table.style.width = me.body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(me.body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (me.options.offsetWidth || 0) + 'px'
                }
            })
        });
        me.addListener('blur', function () {
            tableCopyList = null;
        });
        var timer;
        me.addListener('keydown', function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var rng = me.selection.getRange(),
                    cell = domUtils.findParentByTagName(rng.startContainer, ['th', 'td'], true);
                if (cell) {
                    var table = cell.parentNode.parentNode.parentNode;
                    if (table.offsetWidth > table.getAttribute("width")) {
                        cell.style.wordBreak = "break-all";
                    }
                }

            }, 100);
        });
        me.addListener("selectionchange", function () {
            toggleDraggableState(me, false, "", null);
        });


        //内容变化时触发索引更新
        //todo 可否考虑标记检测，如果不涉及表格的变化就不进行索引重建和更新
        me.addListener("contentchange", function () {
            var me = this;
            //尽可能排除一些不需要更新的状况
            hideDragLine(me);
            if (getUETableBySelected(me))return;
            var rng = me.selection.getRange();
            var start = rng.startContainer;
            start = domUtils.findParentByTagName(start, ['td', 'th'], true);
            utils.each(domUtils.getElementsByTagName(me.document, 'table'), function (table) {
                if (me.fireEvent("excludetable", table) === true) return;
                table.ueTable = new UT(table);
                utils.each(domUtils.getElementsByTagName(me.document, 'td'), function (td) {

                    if (domUtils.isEmptyBlock(td) && td !== start) {
                        domUtils.fillNode(me.document, td);
                        if (browser.ie && browser.version == 6) {
                            td.innerHTML = '&nbsp;'
                        }
                    }
                });
                utils.each(domUtils.getElementsByTagName(me.document, 'th'), function (th) {
                    if (domUtils.isEmptyBlock(th) && th !== start) {
                        domUtils.fillNode(me.document, th);
                        if (browser.ie && browser.version == 6) {
                            th.innerHTML = '&nbsp;'
                        }
                    }
                });
                table.onmouseover = function () {
                    me.fireEvent('tablemouseover', table);
                };
                table.onmousemove = function () {
                    me.fireEvent('tablemousemove', table);
                    me.options.tableDragable && toggleDragButton(true, this, me);
                };
                table.onmouseout = function () {
                    me.fireEvent('tablemouseout', table);
                    toggleDraggableState(me, false, "", null);
                    hideDragLine(me);
                };
                table.onclick = function (evt) {
                    evt = me.window.event || evt;
                    var target = getParentTdOrTh(evt.target || evt.srcElement);
                    if (!target)return;
                    var ut = getUETable(target),
                        table = ut.table,
                        cellInfo = ut.getCellInfo(target),
                        cellsRange,
                        rng = me.selection.getRange();
//                    if ("topLeft" == inPosition(table, mouseCoords(evt))) {
//                        cellsRange = ut.getCellsRange(ut.table.rows[0].cells[0], ut.getLastCell());
//                        ut.setSelected(cellsRange);
//                        return;
//                    }
//                    if ("bottomRight" == inPosition(table, mouseCoords(evt))) {
//
//                        return;
//                    }
                    if (inTableSide(table, target, evt, true)) {
                        var endTdCol = ut.getCell(ut.indexTable[ut.rowsNum - 1][cellInfo.colIndex].rowIndex, ut.indexTable[ut.rowsNum - 1][cellInfo.colIndex].cellIndex);
                        if (evt.shiftKey && ut.selectedTds.length) {
                            if (ut.selectedTds[0] !== endTdCol) {
                                cellsRange = ut.getCellsRange(ut.selectedTds[0], endTdCol);
                                ut.setSelected(cellsRange);
                            } else {
                                rng && rng.selectNodeContents(endTdCol).select();
                            }
                        } else {
                            if (target !== endTdCol) {
                                cellsRange = ut.getCellsRange(target, endTdCol);
                                ut.setSelected(cellsRange);
                            } else {
                                rng && rng.selectNodeContents(endTdCol).select();
                            }
                        }
                        return;
                    }
                    if (inTableSide(table, target, evt)) {
                        var endTdRow = ut.getCell(ut.indexTable[cellInfo.rowIndex][ut.colsNum - 1].rowIndex, ut.indexTable[cellInfo.rowIndex][ut.colsNum - 1].cellIndex);
                        if (evt.shiftKey && ut.selectedTds.length) {
                            if (ut.selectedTds[0] !== endTdRow) {
                                cellsRange = ut.getCellsRange(ut.selectedTds[0], endTdRow);
                                ut.setSelected(cellsRange);
                            } else {
                                rng && rng.selectNodeContents(endTdRow).select();
                            }
                        } else {
                            if (target !== endTdRow) {
                                cellsRange = ut.getCellsRange(target, endTdRow);
                                ut.setSelected(cellsRange);
                            } else {
                                rng && rng.selectNodeContents(endTdRow).select();
                            }
                        }
                    }
                };
            });

            switchBorderColor(me, true);
        });

        domUtils.on(me.document, "mousemove", mouseMoveEvent);

        domUtils.on(me.document, "mouseout", function (evt) {
            var target = evt.target || evt.srcElement;
            if (target.tagName == "TABLE") {
                toggleDraggableState(me, false, "", null);
            }
        });
        /**
         * 表格隔行变色
         */
        me.addListener("interlacetable",function(type,table,classList){
            if(!table) return;
            var me = this,
                rows = table.rows,
                len = rows.length,
                getClass = function(list,index,repeat){
                    return list[index] ? list[index] : repeat ? list[index % list.length]: "";
                };
            for(var i = 0;i<len;i++){
                rows[i].className = getClass( classList|| me.options.classList,i,true);
            }
        });
        me.addListener("uninterlacetable",function(type,table){
            if(!table) return;
            var me = this,
                rows = table.rows,
                classList = me.options.classList,
                len = rows.length;
            for(var i = 0;i<len;i++){
                domUtils.removeClasses( rows[i], classList );
            }
        });

        me.addListener("mousedown", mouseDownEvent);
        me.addListener("mouseup", mouseUpEvent);
        //拖动的时候不出发mouseup
        domUtils.on( me.body, 'dragstart', function( evt ){
            mouseUpEvent.call( me, 'dragstart', evt );
        });

        var currentRowIndex = 0;
        me.addListener("mousedown", function () {
            currentRowIndex = 0;
        });
        me.addListener('tabkeydown', function () {
            var range = this.selection.getRange(),
                common = range.getCommonAncestor(true, true),
                table = domUtils.findParentByTagName(common, 'table');
            if (table) {
                if (domUtils.findParentByTagName(common, 'caption', true)) {
                    var cell = domUtils.getElementsByTagName(table, 'th td');
                    if (cell && cell.length) {
                        range.setStart(cell[0], 0).setCursor(false, true)
                    }
                } else {
                    var cell = domUtils.findParentByTagName(common, ['td', 'th'], true),
                        ua = getUETable(cell);
                    currentRowIndex = cell.rowSpan > 1 ? currentRowIndex : ua.getCellInfo(cell).rowIndex;
                    var nextCell = ua.getTabNextCell(cell, currentRowIndex);
                    if (nextCell) {
                        if (isEmptyBlock(nextCell)) {
                            range.setStart(nextCell, 0).setCursor(false, true)
                        } else {
                            range.selectNodeContents(nextCell).select()
                        }
                    } else {
                        me.fireEvent('saveScene');
                        me.__hasEnterExecCommand = true;
                        this.execCommand('insertrownext');
                        me.__hasEnterExecCommand = false;
                        range = this.selection.getRange();
                        range.setStart(table.rows[table.rows.length - 1].cells[0], 0).setCursor();
                        me.fireEvent('saveScene');
                    }
                }
                return true;
            }

        });
        browser.ie && me.addListener('selectionchange', function () {
            toggleDraggableState(this, false, "", null);
        });
        me.addListener("keydown", function (type, evt) {
            var me = this;
            //处理在表格的最后一个输入tab产生新的表格
            var keyCode = evt.keyCode || evt.which;
            if (keyCode == 8 || keyCode == 46) {
                return;
            }
            var notCtrlKey = !evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey;
            notCtrlKey && removeSelectedClass(domUtils.getElementsByTagName(me.body, "td"));
            var ut = getUETableBySelected(me);
            if (!ut) return;
            notCtrlKey && ut.clearSelected();
        });

        me.addListener("beforegetcontent", function () {
            switchBorderColor(this, false);
            browser.ie && utils.each(this.document.getElementsByTagName('caption'), function (ci) {
                if (domUtils.isEmptyNode(ci)) {
                    ci.innerHTML = '&nbsp;'
                }
            });
        });
        me.addListener("aftergetcontent", function () {
            switchBorderColor(this, true);
        });
        me.addListener("getAllHtml", function () {
            removeSelectedClass(me.document.getElementsByTagName("td"));
        });
        //修正全屏状态下插入的表格宽度在非全屏状态下撑开编辑器的情况
        me.addListener("fullscreenchanged", function (type, fullscreen) {
            if (!fullscreen) {
                var ratio = this.body.offsetWidth / document.body.offsetWidth,
                    tables = domUtils.getElementsByTagName(this.body, "table");
                utils.each(tables, function (table) {
                    if (table.offsetWidth < me.body.offsetWidth) return false;
                    var tds = domUtils.getElementsByTagName(table, "td"),
                        backWidths = [];
                    utils.each(tds, function (td) {
                        backWidths.push(td.offsetWidth);
                    });
                    for (var i = 0, td; td = tds[i]; i++) {
                        td.setAttribute("width", Math.floor(backWidths[i] * ratio));
                    }
                    table.setAttribute("width", Math.floor(getTableWidth(me, needIEHack, getDefaultValue(me))))
                });
            }
        });

        //重写execCommand命令，用于处理框选时的处理
        var oldExecCommand = me.execCommand;
        me.execCommand = function (cmd, datatat) {

            var me = this,
                args = arguments;

            cmd = cmd.toLowerCase();
            var ut = getUETableBySelected(me), tds,
                range = new dom.Range(me.document),
                cmdFun = me.commands[cmd] || UE.commands[cmd],
                result;
            if (!cmdFun) return;
            if (ut && !commands[cmd] && !cmdFun.notNeedUndo && !me.__hasEnterExecCommand) {
                me.__hasEnterExecCommand = true;
                me.fireEvent("beforeexeccommand", cmd);
                tds = ut.selectedTds;
                var lastState = -2, lastValue = -2, value, state;
                for (var i = 0, td; td = tds[i]; i++) {
                    if (isEmptyBlock(td)) {
                        range.setStart(td, 0).setCursor(false, true)
                    } else {
                        range.selectNode(td).select(true);
                    }
                    state = me.queryCommandState(cmd);
                    value = me.queryCommandValue(cmd);
                    if (state != -1) {
                        if (lastState !== state || lastValue !== value) {
                            me._ignoreContentChange = true;
                            result = oldExecCommand.apply(me, arguments);
                            me._ignoreContentChange = false;

                        }
                        lastState = me.queryCommandState(cmd);
                        lastValue = me.queryCommandValue(cmd);
                        if (domUtils.isEmptyBlock(td)) {
                            domUtils.fillNode(me.document, td)
                        }
                    }
                }
                range.setStart(tds[0], 0).shrinkBoundary(true).setCursor(false, true);
                me.fireEvent('contentchange');
                me.fireEvent("afterexeccommand", cmd);
                me.__hasEnterExecCommand = false;
                me._selectionChange();
            } else {
                result = oldExecCommand.apply(me, arguments);
            }
            return result;
        };


    });
    /**
     * 删除obj的宽高style，改成属性宽高
     * @param obj
     * @param replaceToProperty
     */
    function removeStyleSize(obj, replaceToProperty) {
        removeStyle(obj, "width", true);
        removeStyle(obj, "height", true);
    }

    function removeStyle(obj, styleName, replaceToProperty) {
        if (obj.style[styleName]) {
            replaceToProperty && obj.setAttribute(styleName, parseInt(obj.style[styleName], 10));
            obj.style[styleName] = "";
        }
    }

    function getParentTdOrTh(ele) {
        if (ele.tagName == "TD" || ele.tagName == "TH") return ele;
        var td;
        if (td = domUtils.findParentByTagName(ele, "td", true) || domUtils.findParentByTagName(ele, "th", true)) return td;
        return null;
    }

    function isEmptyBlock(node) {
        var reg = new RegExp(domUtils.fillChar, 'g');
        if (node[browser.ie ? 'innerText' : 'textContent'].replace(/^\s*$/, '').replace(reg, '').length > 0) {
            return 0;
        }
        for (var n in dtd.$isNotEmpty) {
            if (node.getElementsByTagName(n).length) {
                return 0;
            }
        }
        return 1;
    }


    function mouseCoords(evt) {
        if (evt.pageX || evt.pageY) {
            return { x:evt.pageX, y:evt.pageY };
        }
        return {
            x:evt.clientX + me.document.body.scrollLeft - me.document.body.clientLeft,
            y:evt.clientY + me.document.body.scrollTop - me.document.body.clientTop
        };
    }

    function mouseMoveEvent(evt) {

        if( isEditorDisabled() ) {
            return;
        }

        try {

            //普通状态下鼠标移动
            var target = getParentTdOrTh(evt.target || evt.srcElement),
                pos;

            //区分用户的行为是拖动还是双击
            if( isInResizeBuffer  ) {

                me.body.style.webkitUserSelect = 'none';

                if( Math.abs( userActionStatus.x - evt.clientX ) > offsetOfTableCell || Math.abs( userActionStatus.y - evt.clientY ) > offsetOfTableCell ) {
                    clearTableDragTimer();
                    isInResizeBuffer = false;
                    singleClickState = 0;
                    //drag action
                    tableBorderDrag(evt);
                }
            }

            //修改单元格大小时的鼠标移动
            if (onDrag && dragTd) {
                singleClickState = 0;
                me.body.style.webkitUserSelect = 'none';
                me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
                pos = mouseCoords(evt);
                toggleDraggableState(me, true, onDrag, pos, target);
                if (onDrag == "h") {
                    dragLine.style.left = getPermissionX(dragTd, evt) + "px";
                } else if (onDrag == "v") {
                    dragLine.style.top = getPermissionY(dragTd, evt) + "px";
                }
                return;
            }
            //当鼠标处于table上时，修改移动过程中的光标状态
            if (target) {
                //针对使用table作为容器的组件不触发拖拽效果
                if (me.fireEvent('excludetable', target) === true)
                    return;
                pos = mouseCoords(evt);
                var state = getRelation(target, pos),
                    table = domUtils.findParentByTagName(target, "table", true);

                if (inTableSide(table, target, evt, true)) {
                    if (me.fireEvent("excludetable", table) === true) return;
                    me.body.style.cursor = "url(" + me.options.cursorpath + "h.png),pointer";
                } else if (inTableSide(table, target, evt)) {
                    if (me.fireEvent("excludetable", table) === true) return;
                    me.body.style.cursor = "url(" + me.options.cursorpath + "v.png),pointer";
                } else {
                    me.body.style.cursor = "text";
                    var curCell = target;
                    if (/\d/.test(state)) {
                        state = state.replace(/\d/, '');
                        target = getUETable(target).getPreviewCell(target, state == "v");
                    }
                    //位于第一行的顶部或者第一列的左边时不可拖动
                    toggleDraggableState(me, target ? !!state : false, target ? state : '', pos, target);

                }
            } else {
                toggleDragButton(false, table, me);
            }

        } catch (e) {
            showError(e);
        }
    }

    var dragButtonTimer;

    function toggleDragButton(show, table, editor) {
        if (!show) {
            if (dragOver)return;
            dragButtonTimer = setTimeout(function () {
                !dragOver && dragButton && dragButton.parentNode && dragButton.parentNode.removeChild(dragButton);
            }, 2000);
        } else {
            createDragButton(table, editor);
        }
    }

    function createDragButton(table, editor) {
        var pos = domUtils.getXY(table),
            doc = table.ownerDocument;
        if (dragButton && dragButton.parentNode)return dragButton;
        dragButton = doc.createElement("div");
        dragButton.contentEditable = false;
        dragButton.innerHTML = "";
        dragButton.style.cssText = "width:15px;height:15px;background-image:url(" + editor.options.UEDITOR_HOME_URL + "dialogs/table/dragicon.png);position: absolute;cursor:move;top:" + (pos.y - 15) + "px;left:" + (pos.x) + "px;";
        domUtils.unSelectable(dragButton);
        dragButton.onmouseover = function (evt) {
            dragOver = true;
        };
        dragButton.onmouseout = function (evt) {
            dragOver = false;
        };
        domUtils.on(dragButton, 'click', function (type, evt) {
            doClick(evt, this);
        });
        domUtils.on(dragButton, 'dblclick', function (type, evt) {
            doDblClick(evt);
        });
        domUtils.on(dragButton, 'dragstart', function (type, evt) {
            domUtils.preventDefault(evt);
        });
        var timer;

        function doClick(evt, button) {
            // 部分浏览器下需要清理
            clearTimeout(timer);
            timer = setTimeout(function () {
                editor.fireEvent("tableClicked", table, button);
            }, 300);
        }

        function doDblClick(evt) {
            clearTimeout(timer);
            var ut = getUETable(table),
                start = table.rows[0].cells[0],
                end = ut.getLastCell(),
                range = ut.getCellsRange(start, end);
            editor.selection.getRange().setStart(start, 0).setCursor(false, true);
            ut.setSelected(range);
        }

        doc.body.appendChild(dragButton);
    }


//    function inPosition(table, pos) {
//        var tablePos = domUtils.getXY(table),
//            width = table.offsetWidth,
//            height = table.offsetHeight;
//        if (pos.x - tablePos.x < 5 && pos.y - tablePos.y < 5) {
//            return "topLeft";
//        } else if (tablePos.x + width - pos.x < 5 && tablePos.y + height - pos.y < 5) {
//            return "bottomRight";
//        }
//    }

    function inTableSide(table, cell, evt, top) {
        var pos = mouseCoords(evt),
            state = getRelation(cell, pos);

        if (top) {
            var caption = table.getElementsByTagName("caption")[0],
                capHeight = caption ? caption.offsetHeight : 0;
            return (state == "v1") && ((pos.y - domUtils.getXY(table).y - capHeight) < 8);
        } else {
            return (state == "h1") && ((pos.x - domUtils.getXY(table).x) < 8);
        }
    }

    /**
     * 获取拖动时允许的X轴坐标
     * @param dragTd
     * @param evt
     */
    function getPermissionX(dragTd, evt) {
        var ut = getUETable(dragTd);
        if (ut) {
            var preTd = ut.getSameEndPosCells(dragTd, "x")[0],
                nextTd = ut.getSameStartPosXCells(dragTd)[0],
                mouseX = mouseCoords(evt).x,
                left = (preTd ? domUtils.getXY(preTd).x : domUtils.getXY(ut.table).x) + 20 ,
                right = nextTd ? domUtils.getXY(nextTd).x + nextTd.offsetWidth - 20 : (me.body.offsetWidth + 5 || parseInt(domUtils.getComputedStyle(me.body, "width"), 10));

            left += cellMinWidth;
            right -= cellMinWidth;

            return mouseX < left ? left : mouseX > right ? right : mouseX;
        }
    }

    /**
     * 获取拖动时允许的Y轴坐标
     */
    function getPermissionY(dragTd, evt) {
        try {
            var top = domUtils.getXY(dragTd).y,
                mousePosY = mouseCoords(evt).y;
            return mousePosY < top ? top : mousePosY;
        } catch (e) {
            showError(e);
        }
    }

    /**
     * 移动状态切换
     */
    function toggleDraggableState(editor, draggable, dir, mousePos, cell) {
        try {
            editor.body.style.cursor = dir == "h" ? "col-resize" : dir == "v" ? "row-resize" : "text";
            if (browser.ie) {
                if (dir && !mousedown && !getUETableBySelected(editor)) {
                    getDragLine(editor, editor.document);
                    showDragLineAt(dir, cell);
                } else {
                    hideDragLine(editor)
                }
            }
            onBorder = draggable;
        } catch (e) {
            showError(e);
        }
    }

    /**
     * 获取与UETable相关的resize line
     * @param uetable UETable对象
     */
    function getResizeLineByUETable() {

        var lineId = '_UETableResizeLine',
            line = this.document.getElementById( lineId );

        if( !line ) {
            line = this.document.createElement("div");
            line.id = lineId;
            line.contnetEditable = false;
            line.setAttribute("unselectable", "on");

            var styles = {
                width: 2*cellBorderWidth + 1 + 'px',
                position: 'absolute',
                'z-index': 100000,
                cursor: 'col-resize',
                background: 'red',
                display: 'none'
            };

            //切换状态
            line.onmouseout = function(){
                this.style.display = 'none';
            };

            utils.extend( line.style, styles );

            this.document.body.appendChild( line );

        }

        return line;

    }

    /**
     * 更新resize-line
     */
    function updateResizeLine( cell, uetable ) {

        var line = getResizeLineByUETable.call( this ),
            table = uetable.table,
            styles = {
                top: domUtils.getXY( table ).y + 'px',
                left: domUtils.getXY( cell).x + cell.offsetWidth - cellBorderWidth + 'px',
                display: 'block',
                height: table.offsetHeight + 'px'
            };

        utils.extend( line.style, styles );

    }

    /**
     * 显示resize-line
     */
    function showResizeLine( cell ) {

        var uetable = getUETable( cell );

        updateResizeLine.call( this, cell, uetable );

    }

    /**
     * 获取鼠标与当前单元格的相对位置
     * @param ele
     * @param mousePos
     */
    function getRelation(ele, mousePos) {
        var elePos = domUtils.getXY(ele);

        if( !elePos ) {
            return '';
        }

        if (elePos.x + ele.offsetWidth - mousePos.x < cellBorderWidth) {
            return "h";
        }
        if (mousePos.x - elePos.x < cellBorderWidth) {
            return 'h1'
        }
        if (elePos.y + ele.offsetHeight - mousePos.y < cellBorderWidth) {
            return "v";
        }
        if (mousePos.y - elePos.y < cellBorderWidth) {
            return 'v1'
        }
        return '';
    }

    function mouseDownEvent(type, evt) {

        if( isEditorDisabled() ) {
            return ;
        }

        userActionStatus = {
            x: evt.clientX,
            y: evt.clientY
        };

        //右键菜单单独处理
        if (evt.button == 2) {
            var ut = getUETableBySelected(me),
                flag = false;

            if (ut) {
                var td = getTargetTd(me, evt);
                utils.each(ut.selectedTds, function (ti) {
                    if (ti === td) {
                        flag = true;
                    }
                });
                if (!flag) {
                    removeSelectedClass(domUtils.getElementsByTagName(me.body, "th td"));
                    ut.clearSelected()
                } else {
                    td = ut.selectedTds[0];
                    setTimeout(function () {
                        me.selection.getRange().setStart(td, 0).setCursor(false, true);
                    }, 0);

                }
            }
        } else {
            tableClickHander( evt );
        }

    }

    //清除表格的计时器
    function clearTableTimer() {
        tabTimer && clearTimeout( tabTimer );
        tabTimer = null;
    }

    //双击收缩
    function tableDbclickHandler(evt) {
        singleClickState = 0;
        evt = evt || me.window.event;
        var target = getParentTdOrTh(evt.target || evt.srcElement);
        if (target) {
            var h;
            if (h = getRelation(target, mouseCoords(evt))) {

                hideDragLine( me );

                if (h == 'h1') {
                    h = 'h';
                    if (inTableSide(domUtils.findParentByTagName(target, "table"), target, evt)) {
                        me.execCommand('adaptbywindow');
                    } else {
                        target = getUETable(target).getPreviewCell(target);
                        if (target) {
                            var rng = me.selection.getRange();
                            rng.selectNodeContents(target).setCursor(true, true)
                        }
                    }
                }
                if (h == 'h') {
                    var ut = getUETable(target),
                        table = ut.table,
                        cells = getCellsByMoveBorder( target, table, true );

                    cells = extractArray( cells, 'left' );

                    ut.width = ut.offsetWidth;

                    var oldWidth = [],
                        newWidth = [];

                    utils.each( cells, function( cell ){

                        oldWidth.push( cell.offsetWidth );

                    } );

                    utils.each( cells, function( cell ){

                        cell.removeAttribute("width");

                    } );

                    window.setTimeout( function(){

                        //是否允许改变
                        var changeable = true;

                        utils.each( cells, function( cell, index ){

                            var width = cell.offsetWidth;

                            if( width > oldWidth[index] ) {
                                changeable = false;
                                return false;
                            }

                            newWidth.push( width );

                        } );

                        var change = changeable ? newWidth : oldWidth;

                        utils.each( cells, function( cell, index ){

                            cell.width = change[index] - getTabcellSpace();

                        } );


                    }, 0 );

//                    minWidth -= cellMinWidth;
//
//                    table.removeAttribute("width");
//                    utils.each(cells, function (cell) {
//                        cell.style.width = "";
//                        cell.width -= minWidth;
//                    });

                }
            }
        }
    }

    function tableClickHander( evt ) {

        removeSelectedClass(domUtils.getElementsByTagName(me.body, "td th"));
        //trace:3113
        //选中单元格，点击table外部，不会清掉table上挂的ueTable,会引起getUETableBySelected方法返回值
        utils.each(me.document.getElementsByTagName('table'), function (t) {
            t.ueTable = null;
        });
        startTd = getTargetTd(me, evt);
        if( !startTd ) return;
        var table = domUtils.findParentByTagName(startTd, "table", true);
        ut = getUETable(table);
        ut && ut.clearSelected();

        //判断当前鼠标状态
        if (!onBorder) {
            me.document.body.style.webkitUserSelect = '';
            mousedown = true;
            me.addListener('mouseover', mouseOverEvent);
        } else {
            //边框上的动作处理
            borderActionHandler( evt );
        }


    }

    //处理表格边框上的动作, 这里做延时处理，避免两种动作互相影响
    function borderActionHandler( evt ) {

        if ( browser.ie ) {
            evt = reconstruct(evt );
        }

        clearTableDragTimer();

        //是否正在等待resize的缓冲中
        isInResizeBuffer = true;

        tableDragTimer = setTimeout(function(){
            tableBorderDrag( evt );
        }, dblclickTime);

    }

    function extractArray( originArr, key ) {

        var result = [],
            tmp = null;

        for( var i = 0, len = originArr.length; i<len; i++ ) {

            tmp = originArr[ i ][ key ];

            if( tmp ) {
                result.push( tmp );
            }

        }

        return result;

    }

    function clearTableDragTimer() {
        tableDragTimer && clearTimeout(tableDragTimer);
        tableDragTimer = null;
    }

    function reconstruct( obj ) {

        var attrs = ['pageX', 'pageY', 'clientX', 'clientY', 'srcElement', 'target'],
            newObj = {};

        if( obj ) {

            for( var i = 0, key, val; key = attrs[i]; i++ ) {
                val=obj[ key ];
                val && (newObj[ key ] = val);
            }

        }

        return newObj;

    }

    //边框拖动
    function tableBorderDrag( evt ) {

        isInResizeBuffer = false;

        if( !startTd ) return;
        var state = Math.abs( userActionStatus.x - evt.clientX ) >= Math.abs( userActionStatus.y - evt.clientY ) ? 'h' : 'v';
//        var state = getRelation(startTd, mouseCoords(evt));
        if (/\d/.test(state)) {
            state = state.replace(/\d/, '');
            startTd = getUETable(startTd).getPreviewCell(startTd, state == 'v');
        }
        hideDragLine(me);
        getDragLine(me, me.document);
        me.fireEvent('saveScene');
        showDragLineAt(state, startTd);
        mousedown = true;
        //拖动开始
        onDrag = state;
        dragTd = startTd;
    }

    function mouseUpEvent(type, evt) {

        if( isEditorDisabled() ) {
            return ;
        }

        clearTableDragTimer();

        isInResizeBuffer = false;

        if( onBorder ) {
            singleClickState = ++singleClickState % 3;

            userActionStatus = {
                x: evt.clientX,
                y: evt.clientY
            };

            tableResizeTimer = setTimeout(function(){
                singleClickState > 0 && singleClickState--;
            }, dblclickTime );

            if( singleClickState === 2 ) {

                singleClickState = 0;
                tableDbclickHandler(evt);
                return;

            }

        }

        if (evt.button == 2)return;
        var me = this;
        //清除表格上原生跨选问题
        var range = me.selection.getRange(),
            start = domUtils.findParentByTagName(range.startContainer, 'table', true),
            end = domUtils.findParentByTagName(range.endContainer, 'table', true);

        if (start || end) {
            if (start === end) {
                start = domUtils.findParentByTagName(range.startContainer, ['td', 'th', 'caption'], true);
                end = domUtils.findParentByTagName(range.endContainer, ['td', 'th', 'caption'], true);
                if (start !== end) {
                    me.selection.clearRange()
                }
            } else {
                me.selection.clearRange()
            }
        }
        mousedown = false;
        me.document.body.style.webkitUserSelect = '';
        //拖拽状态下的mouseUP
        if ( onDrag && dragTd ) {

            me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();

            singleClickState = 0;
            dragLine = me.document.getElementById('ue_tableDragLine');

            var dragTdPos = domUtils.getXY(dragTd),
                dragLinePos = domUtils.getXY(dragLine);

            switch (onDrag) {
                case "h":
                    changeColWidth(dragTd, dragLinePos.x - dragTdPos.x);
                    break;
                case "v":
                    changeRowHeight(dragTd, dragLinePos.y - dragTdPos.y - dragTd.offsetHeight);
                    break;
                default:
            }
            onDrag = "";
            dragTd = null;

            hideDragLine(me);
            me.fireEvent('saveScene');
            return;
        }
        //正常状态下的mouseup
        if (!startTd) {
            var target = domUtils.findParentByTagName(evt.target || evt.srcElement, "td", true);
            if (!target) target = domUtils.findParentByTagName(evt.target || evt.srcElement, "th", true);
            if (target && (target.tagName == "TD" || target.tagName == "TH")) {
                if (me.fireEvent("excludetable", target) === true) return;
                range = new dom.Range(me.document);
                range.setStart(target, 0).setCursor(false, true);
            }
        } else {
            var ut = getUETable(startTd),
                cell = ut ? ut.selectedTds[0] : null;
            if (cell) {
                range = new dom.Range(me.document);
                if (domUtils.isEmptyBlock(cell)) {
                    range.setStart(cell, 0).setCursor(false, true);
                } else {
                    range.selectNodeContents(cell).shrinkBoundary().setCursor(false, true);
                }
            } else {
                range = me.selection.getRange().shrinkBoundary();
                if (!range.collapsed) {
                    var start = domUtils.findParentByTagName(range.startContainer, ['td', 'th'], true),
                        end = domUtils.findParentByTagName(range.endContainer, ['td', 'th'], true);
                    //在table里边的不能清除
                    if (start && !end || !start && end || start && end && start !== end) {
                        range.setCursor(false, true);
                    }
                }
            }
            startTd = null;
            me.removeListener('mouseover', mouseOverEvent);
        }
        me._selectionChange(250, evt);
    }

    function mouseOverEvent(type, evt) {

        if( isEditorDisabled() ) {
            return;
        }

        var me = this,
            tar = evt.target || evt.srcElement;
        currentTd = domUtils.findParentByTagName(tar, "td", true) || domUtils.findParentByTagName(tar, "th", true);
        //需要判断两个TD是否位于同一个表格内
        if (startTd && currentTd &&
            ((startTd.tagName == "TD" && currentTd.tagName == "TD") || (startTd.tagName == "TH" && currentTd.tagName == "TH")) &&
            domUtils.findParentByTagName(startTd, 'table') == domUtils.findParentByTagName(currentTd, 'table')) {
            var ut = getUETable(currentTd);
            if (startTd != currentTd) {
                me.document.body.style.webkitUserSelect = 'none';
                me.selection.getNative()[browser.ie ? 'empty' : 'removeAllRanges']();
                var range = ut.getCellsRange(startTd, currentTd);
                ut.setSelected(range);
            } else {
                me.document.body.style.webkitUserSelect = '';
                ut.clearSelected();
            }

        }
        evt.preventDefault ? evt.preventDefault() : (evt.returnValue = false);
    }

    function setCellHeight(cell, height, backHeight) {
        var lineHight = parseInt(domUtils.getComputedStyle(cell, "line-height"), 10),
            tmpHeight = backHeight + height;
        height = tmpHeight < lineHight ? lineHight : tmpHeight;
        if (cell.style.height) cell.style.height = "";
        cell.rowSpan == 1 ? cell.setAttribute("height", height) : (cell.removeAttribute && cell.removeAttribute("height"));
    }

    function getWidth(cell) {
        if (!cell)return 0;
        return parseInt(domUtils.getComputedStyle(cell, "width"), 10);
    }

    function changeColWidth(cell, changeValue) {

        var ut = getUETable(cell);
        if (ut) {

            //根据当前移动的边框获取相关的单元格
            var table = ut.table,
                cells = getCellsByMoveBorder( cell, table );

            table.style.width = "";
            table.removeAttribute("width");

            //修正改变量
            changeValue = correctChangeValue( changeValue, cell, cells );

            if (cell.nextSibling) {

                var i=0;

                utils.each( cells, function( cellGroup ){

                    cellGroup.left.width = (+cellGroup.left.width)+changeValue;
                    cellGroup.right && ( cellGroup.right.width = (+cellGroup.right.width)-changeValue );

                } );

            } else {

                utils.each( cells, function( cellGroup ){
                    cellGroup.left.width -= -changeValue;
                } );

            }
        }

    }

    function isEditorDisabled() {
        return me.body.contentEditable === "false";
    }

    function changeRowHeight(td, changeValue) {
        if (Math.abs(changeValue) < 10) return;
        var ut = getUETable(td);
        if (ut) {
            var cells = ut.getSameEndPosCells(td, "y"),
            //备份需要连带变化的td的原始高度，否则后期无法获取正确的值
                backHeight = cells[0] ? cells[0].offsetHeight : 0;
            for (var i = 0, cell; cell = cells[i++];) {
                setCellHeight(cell, changeValue, backHeight);
            }
        }

    }

    /**
     * 获取调整单元格大小的相关单元格
     * @isContainMergeCell 返回的结果中是否包含发生合并后的单元格
     */
    function getCellsByMoveBorder( cell, table, isContainMergeCell ) {

        if( !table ) {
            table = domUtils.findParentByTagName( cell, 'table' );
        }

        if( !table ) {
            return null;
        }

        //获取到该单元格所在行的序列号
        var index = domUtils.getNodeIndex( cell ),
            temp = cell,
            rows = table.rows,
            colIndex = 0;

        while( temp ) {
            //获取到当前单元格在未发生单元格合并时的序列
            if( temp.nodeType === 1 ) {
                colIndex += (temp.colSpan || 1);
            }
            temp = temp.previousSibling;
        }

        temp = null;

        //记录想关的单元格
        var borderCells = [];

        utils.each(rows, function( tabRow ){

            var cells = tabRow.cells,
                currIndex = 0;

            utils.each( cells, function( tabCell ){

                currIndex += (tabCell.colSpan || 1);

                if( currIndex === colIndex ) {

                    borderCells.push({
                        left: tabCell,
                        right: tabCell.nextSibling || null
                    });

                    return false;

                } else if( currIndex > colIndex ) {

                    if( isContainMergeCell ) {
                        borderCells.push({
                            left: tabCell
                        });
                    }

                    return false;
                }


            } );

        });

        return borderCells;

    }


    /**
     * 通过给定的单元格集合获取最小的单元格width
     */
    function getMinWidthByTableCells( cells ) {

        var minWidth = Number.MAX_VALUE;

        for( var i = 0, curCell; curCell = cells[ i ] ; i++ ) {

            minWidth = Math.min( minWidth, curCell.width || getTableCellWidth( curCell ) );

        }

        return minWidth;

    }

    function correctChangeValue( changeValue, relatedCell, cells ) {

        //为单元格的paading预留空间
        changeValue -= getTabcellSpace();

        if( changeValue < 0 ) {
            return 0;
        }

        changeValue -= getTableCellWidth( relatedCell );

        //确定方向
        var direction = changeValue < 0 ? 'left':'right';

        changeValue = Math.abs(changeValue);

        //只关心非最后一个单元格就可以
        utils.each( cells, function( cellGroup ){

            var curCell = cellGroup[direction];

            //为单元格保留最小空间
            if( curCell ) {
                changeValue = Math.min( changeValue, getTableCellWidth( curCell )-cellMinWidth );
            }


        } );


        //修正越界
        changeValue = changeValue < 0 ? 0 : changeValue;

        return direction === 'left' ? -changeValue : changeValue;

    }

    function getTableCellWidth( cell ) {

        var width = 0,
            //偏移纠正量
            offset = 0,
            width = cell.offsetWidth - getTabcellSpace();

        //最后一个节点纠正一下
        if( !cell.nextSibling ) {

            width -= getTableCellOffset( cell );

        }

        width = width < 0 ? 0 : width;

        try {
            cell.width = width;
        } catch(e) {
        }

        return width;

    }

    /**
     * 获取单元格所在表格的最末单元格的偏移量
     */
    function getTableCellOffset( cell ) {

        tab = domUtils.findParentByTagName( cell, "table", false);

        if( tab.offsetVal === undefined ) {

            var prev = cell.previousSibling;

            if( prev ) {

                //最后一个单元格和前一个单元格的width diff结果 如果恰好为一个border width， 则条件成立
                tab.offsetVal = cell.offsetWidth - prev.offsetWidth === UT.borderWidth ? UT.borderWidth : 0;

            } else {
                tab.offsetVal = 0;
            }

        }

        return tab.offsetVal;

    }

    function getTabcellSpace() {

        if( UT.tabcellSpace === undefined ) {

            var cell = null,
                tab = me.document.createElement("table"),
                tbody = me.document.createElement("tbody"),
                trow = me.document.createElement("tr"),
                tabcell = me.document.createElement("td"),
                mirror = null;

            tabcell.style.cssText = 'border: 0;';
            tabcell.width = 1;

            trow.appendChild( tabcell );
            trow.appendChild( mirror = tabcell.cloneNode( false ) );

            tbody.appendChild( trow );

            tab.appendChild( tbody );

            tab.style.cssText = "visibility: hidden;";

            me.body.appendChild( tab );

            UT.paddingSpace = tabcell.offsetWidth - 1;

            var tmpTabWidth = tab.offsetWidth;

            tabcell.style.cssText = '';
            mirror.style.cssText = '';

            UT.borderWidth = ( tab.offsetWidth - tmpTabWidth ) / 3;

            UT.tabcellSpace = UT.paddingSpace + UT.borderWidth;

            me.body.removeChild( tab );

        }

        getTabcellSpace = function(){ return UT.tabcellSpace; };

        return UT.tabcellSpace;

    }

    function getDragLine(editor, doc) {
        if (mousedown)return;
        dragLine = editor.document.createElement("div");
        domUtils.setAttributes(dragLine, {
            id:"ue_tableDragLine",
            unselectable:'on',
            contenteditable:false,
            'onresizestart':'return false',
            'ondragstart':'return false',
            'onselectstart':'return false',
            style:"background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"
        });
        editor.body.appendChild(dragLine);
    }

    function hideDragLine(editor) {
        if (mousedown)return;
        var line;
        while (line = editor.document.getElementById('ue_tableDragLine')) {
            domUtils.remove(line)
        }
    }

    /**
     * 依据state（v|h）在cell位置显示横线
     * @param state
     * @param cell
     */
    function showDragLineAt(state, cell) {
        if (!cell) return;
        var table = domUtils.findParentByTagName(cell, "table"),
            caption = table.getElementsByTagName('caption'),
            width = table.offsetWidth,
            height = table.offsetHeight - (caption.length > 0 ? caption[0].offsetHeight : 0),
            tablePos = domUtils.getXY(table),
            cellPos = domUtils.getXY(cell), css;
        switch (state) {
            case "h":
                css = 'height:' + height + 'px;top:' + (tablePos.y + (caption.length > 0 ? caption[0].offsetHeight : 0)) + 'px;left:' + (cellPos.x + cell.offsetWidth);
                dragLine.style.cssText = css + 'px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)';
                break;
            case "v":
                css = 'width:' + width + 'px;left:' + tablePos.x + 'px;top:' + (cellPos.y + cell.offsetHeight );
                //必须加上border:0和color:blue，否则低版ie不支持背景色显示
                dragLine.style.cssText = css + 'px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)';
                break;
            default:
        }
    }

    /**
     * 当表格边框颜色为白色时设置为虚线,true为添加虚线
     * @param editor
     * @param flag
     */
    function switchBorderColor(editor, flag) {
        var tableArr = domUtils.getElementsByTagName(editor.body, "table"), color;
        for (var i = 0, node; node = tableArr[i++];) {
            var td = domUtils.getElementsByTagName(node, "td");
            if (td[0]) {
                if (flag) {
                    color = (td[0].style.borderColor).replace(/\s/g, "");
                    if (/(#ffffff)|(rgb\(255,f55,255\))/ig.test(color))
                        domUtils.addClass(node, "noBorderTable")
                } else {
                    domUtils.removeClasses(node, "noBorderTable")
                }
            }

        }
    }

    function getTableWidth(editor, needIEHack, defaultValue) {
        var body = editor.body;
        return body.offsetWidth - (needIEHack ? parseInt(domUtils.getComputedStyle(body, 'margin-left'), 10) * 2 : 0) - defaultValue.tableBorder * 2 - (editor.options.offsetWidth || 0);
    }

    /**
     * 获取当前拖动的单元格
     */
    function getTargetTd(editor, evt) {

        var target = domUtils.findParentByTagName(evt.target || evt.srcElement, ["td", "th"], true),
            dir = null;

        if( !target ) {
            return null;
        }

        dir = getRelation( target, mouseCoords( evt ) );

        //如果有前一个节点， 需要做一个修正， 否则可能会得到一个错误的td

        if( !target ) {
            return null;
        }

        if( dir === 'h1' && target.previousSibling ) {

            var position = domUtils.getXY( target),
                cellWidth = target.offsetWidth;

            if( Math.abs( position.x + cellWidth - evt.clientX ) > cellWidth / 3 ) {
                target = target.previousSibling;
            }

        } else if( dir === 'v1' && target.parentNode.previousSibling ) {

            var position = domUtils.getXY( target),
                cellHeight = target.offsetHeight;

            if( Math.abs( position.y + cellHeight - evt.clientY ) > cellHeight / 3 ) {
                target = target.parentNode.previousSibling.firstChild;
            }

        }


        //排除了非td内部以及用于代码高亮部分的td
        return target && !(editor.fireEvent("excludetable", target) === true) ? target : null;
    }

};

///import core
///commands 右键菜单
///commandsName  ContextMenu
///commandsTitle  右键菜单
/**
 * 右键菜单
 * @function
 * @name baidu.editor.plugins.contextmenu
 * @author zhanyi
 */

UE.plugins['contextmenu'] = function () {
    var me = this,
            lang = me.getLang( "contextMenu" ),
            menu,
            items = me.options.contextMenu || [
                {label:lang['selectall'], cmdName:'selectall'},
                {
                    label:lang.deletecode,
                    cmdName:'highlightcode',
                    icon:'deletehighlightcode'
                },
                {
                    label:lang.cleardoc,
                    cmdName:'cleardoc',
                    exec:function () {
                        if ( confirm( lang.confirmclear ) ) {
                            this.execCommand( 'cleardoc' );
                        }
                    }
                },
                '-',
                {
                    label:lang.unlink,
                    cmdName:'unlink'
                },
                '-',
                {
                    group:lang.paragraph,
                    icon:'justifyjustify',
                    subMenu:[
                        {
                            label:lang.justifyleft,
                            cmdName:'justify',
                            value:'left'
                        },
                        {
                            label:lang.justifyright,
                            cmdName:'justify',
                            value:'right'
                        },
                        {
                            label:lang.justifycenter,
                            cmdName:'justify',
                            value:'center'
                        },
                        {
                            label:lang.justifyjustify,
                            cmdName:'justify',
                            value:'justify'
                        }
                    ]
                },
                '-',
                {
                    group:lang.table,
                    icon:'table',
                    subMenu:[
                        {
                            label:lang.inserttable,
                            cmdName:'inserttable'
                        },
                        {
                            label:lang.deletetable,
                            cmdName:'deletetable'
                        },
                        '-',
                        {
                            label:lang.deleterow,
                            cmdName:'deleterow'
                        },
                        {
                            label:lang.deletecol,
                            cmdName:'deletecol'
                        },
                        {
                            label:lang.insertcol,
                            cmdName:'insertcol'
                        },
                        {
                            label:lang.insertcolnext,
                            cmdName:'insertcolnext'
                        },
                        {
                            label:lang.insertrow,
                            cmdName:'insertrow'
                        },
                        {
                            label:lang.insertrownext,
                            cmdName:'insertrownext'
                        },
                        '-',
                        {
                            label:lang.insertcaption,
                            cmdName:'insertcaption'
                        },
                        {
                            label:lang.deletecaption,
                            cmdName:'deletecaption'
                        },
                        {
                            label:lang.inserttitle,
                            cmdName:'inserttitle'
                        },
                        {
                            label:lang.deletetitle,
                            cmdName:'deletetitle'
                        },
                        '-',
                        {
                            label:lang.mergecells,
                            cmdName:'mergecells'
                        },
                        {
                            label:lang.mergeright,
                            cmdName:'mergeright'
                        },
                        {
                            label:lang.mergedown,
                            cmdName:'mergedown'
                        },
                        '-',
                        {
                            label:lang.splittorows,
                            cmdName:'splittorows'
                        },
                        {
                            label:lang.splittocols,
                            cmdName:'splittocols'
                        },
                        {
                            label:lang.splittocells,
                            cmdName:'splittocells'
                        },
                        '-',
                        {
                            label:lang.averageDiseRow,
                            cmdName:'averagedistributerow'
                        },
                        {
                            label:lang.averageDisCol,
                            cmdName:'averagedistributecol'
                        },
                        '-',
                        {
                            label:lang.edittd,
                            cmdName:'edittd',
                            exec:function () {
                                if ( UE.ui['edittd'] ) {
                                    new UE.ui['edittd']( this );
                                }
                                this.getDialog('edittd').open();
                            }
                        },
                        {
                            label:lang.edittable,
                            cmdName:'edittable',
                            exec:function () {
                                if ( UE.ui['edittable'] ) {
                                    new UE.ui['edittable']( this );
                                }
                                this.getDialog('edittable').open();
                            }
                        }
                    ]
                },
                {
                    group:lang.tablesort,
                    icon:'tablesort',
                    subMenu:[
                        {
                            label:lang.reversecurrent,
                            cmdName:'sorttable',
                            value:1
                        },
                        {
                            label:lang.orderbyasc,
                            cmdName:'sorttable'
                        },
                        {
                            label:lang.reversebyasc,
                            cmdName:'sorttable',
                            exec:function(){
                                this.execCommand("sorttable",function(td1,td2){
                                    var value1 = td1.innerHTML,
                                        value2 = td2.innerHTML;
                                    return value2.localeCompare(value1);
                                });
                            }
                        },
                        {
                            label:lang.orderbynum,
                            cmdName:'sorttable',
                            exec:function(){
                                this.execCommand("sorttable",function(td1,td2){
                                    var value1 = td1[browser.ie ? 'innerText':'textContent'].match(/\d+/),
                                        value2 = td2[browser.ie ? 'innerText':'textContent'].match(/\d+/);
                                    if(value1) value1 = +value1[0];
                                    if(value2) value2 = +value2[0];
                                    return (value1||0) - (value2||0);
                                });
                            }
                        },
                        {
                            label:lang.reversebynum,
                            cmdName:'sorttable',
                            exec:function(){
                                this.execCommand("sorttable",function(td1,td2){
                                    var value1 = td1[browser.ie ? 'innerText':'textContent'].match(/\d+/),
                                        value2 = td2[browser.ie ? 'innerText':'textContent'].match(/\d+/);
                                    if(value1) value1 = +value1[0];
                                    if(value2) value2 = +value2[0];
                                    return (value2||0) - (value1||0);
                                });
                            }
                        }
                    ]
                },
                {
                    group:lang.borderbk,
                    icon:'borderBack',
                    subMenu:[
                        {
                            label:lang.setcolor,
                            cmdName:"interlacetable",
                            exec:function(){
                                this.execCommand("interlacetable");
                            }
                        },
                        {
                            label:lang.unsetcolor,
                            cmdName:"uninterlacetable",
                            exec:function(){
                                this.execCommand("uninterlacetable");
                            }
                        },
                        {
                            label:lang.setbackground,
                            cmdName:"settablebackground",
                            exec:function(){
                                this.execCommand("settablebackground",{repeat:true,colorList:["#bbb","#ccc"]});
                            }
                        },
                        {
                            label:lang.unsetbackground,
                            cmdName:"cleartablebackground",
                            exec:function(){
                                this.execCommand("cleartablebackground");
                            }
                        },
                        {
                            label:lang.redandblue,
                            cmdName:"settablebackground",
                            exec:function(){
                                this.execCommand("settablebackground",{repeat:true,colorList:["red","blue"]});
                            }
                        },
                        {
                            label:lang.threecolorgradient,
                            cmdName:"settablebackground",
                            exec:function(){
                                this.execCommand("settablebackground",{repeat:true,colorList:["#aaa","#bbb","#ccc"]});
                            }
                        }
                    ]
                },
                {
                    group:lang.aligntd,
                    icon:'aligntd',
                    subMenu:[
                        {
                            cmdName:'cellalignment',
                            value:{align:'left',vAlign:'top'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'center',vAlign:'top'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'right',vAlign:'top'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'left',vAlign:'middle'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'center',vAlign:'middle'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'right',vAlign:'middle'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'left',vAlign:'bottom'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'center',vAlign:'bottom'}
                        },
                        {
                            cmdName:'cellalignment',
                            value:{align:'right',vAlign:'bottom'}
                        }
                    ]
                },
                {
                    group:lang.aligntable,
                    icon:'aligntable',
                    subMenu:[
                        {
                            cmdName:'tablealignment',
                            className: 'left',
                            label:lang.tableleft,
                            value:"left"
                        },
                        {
                            cmdName:'tablealignment',
                            className: 'center',
                            label:lang.tablecenter,
                            value:"center"
                        },
                        {
                            cmdName:'tablealignment',
                            className: 'right',
                            label:lang.tableright,
                            value:"right"
                        }
                    ]
                },
                '-',
                {
                    label:lang.insertparagraphbefore,
                    cmdName:'insertparagraph',
                    value:true
                },
                {
                    label:lang.insertparagraphafter,
                    cmdName:'insertparagraph'
                },
                {
                    label:lang['copy'],
                    cmdName:'copy',
                    exec:function () {
                        alert( lang.copymsg );
                    },
                    query:function () {
                        return 0;
                    }
                },
                {
                    label:lang['paste'],
                    cmdName:'paste',
                    exec:function () {
                        alert( lang.pastemsg );
                    },
                    query:function () {
                        return 0;
                    }
                },{
                    label:lang['highlightcode'],
                    cmdName:'highlightcode',
                    exec:function () {
                        if ( UE.ui['highlightcode'] ) {
                            new UE.ui['highlightcode']( this );
                        }
                        this.ui._dialogs['highlightcodeDialog'].open();
                    }
                }
            ];
    if ( !items.length ) {
        return;
    }
    var uiUtils = UE.ui.uiUtils;

    me.addListener( 'contextmenu', function ( type, evt ) {

        var offset = uiUtils.getViewportOffsetByEvent( evt );
        me.fireEvent( 'beforeselectionchange' );
        if ( menu ) {
            menu.destroy();
        }
        for ( var i = 0, ti, contextItems = []; ti = items[i]; i++ ) {
            var last;
            (function ( item ) {
                if ( item == '-' ) {
                    if ( (last = contextItems[contextItems.length - 1 ] ) && last !== '-' ) {
                        contextItems.push( '-' );
                    }
                } else if ( item.hasOwnProperty( "group" ) ) {
                    for ( var j = 0, cj, subMenu = []; cj = item.subMenu[j]; j++ ) {
                        (function ( subItem ) {
                            if ( subItem == '-' ) {
                                if ( (last = subMenu[subMenu.length - 1 ] ) && last !== '-' ) {
                                    subMenu.push( '-' );
                                }else{
                                    subMenu.splice(subMenu.length-1);
                                }
                            } else {
                                if ( (me.commands[subItem.cmdName] || UE.commands[subItem.cmdName] || subItem.query) &&
                                        (subItem.query ? subItem.query() : me.queryCommandState( subItem.cmdName )) > -1 ) {
                                    subMenu.push( {
                                        'label':subItem.label || me.getLang( "contextMenu." + subItem.cmdName + (subItem.value || '') )||"",
                                        'className':'edui-for-' +subItem.cmdName + ( subItem.className ? ( ' edui-for-' + subItem.cmdName + '-' + subItem.className ) : '' ),
                                        onclick:subItem.exec ? function () {
                                                subItem.exec.call( me );
                                        } : function () {
                                            me.execCommand( subItem.cmdName, subItem.value );
                                        }
                                    } );
                                }
                            }
                        })( cj );
                    }
                    if ( subMenu.length ) {
                        function getLabel(){
                            switch (item.icon){
                                case "table":
                                    return me.getLang( "contextMenu.table" );
                                case "justifyjustify":
                                    return me.getLang( "contextMenu.paragraph" );
                                case "aligntd":
                                    return me.getLang("contextMenu.aligntd");
                                case "aligntable":
                                    return me.getLang("contextMenu.aligntable");
                                case "tablesort":
                                    return lang.tablesort;
                                case "borderBack":
                                    return lang.borderbk;
                                default :
                                    return '';
                            }
                        }
                        contextItems.push( {
                            //todo 修正成自动获取方式
                            'label':getLabel(),
                            className:'edui-for-' + item.icon,
                            'subMenu':{
                                items:subMenu,
                                editor:me
                            }
                        } );
                    }

                } else {
                    //有可能commmand没有加载右键不能出来，或者没有command也想能展示出来添加query方法
                    if ( (me.commands[item.cmdName] || UE.commands[item.cmdName] || item.query) &&
                            (item.query ? item.query.call(me) : me.queryCommandState( item.cmdName )) > -1 ) {
                        //highlight todo
                        if ( item.cmdName == 'highlightcode' ) {
                            if(me.queryCommandState( item.cmdName ) == 1 && item.icon != 'deletehighlightcode'){
                                return;
                            }
                            if(me.queryCommandState( item.cmdName ) != 1 && item.icon == 'deletehighlightcode'){
                                return;
                            }
                        }
                        contextItems.push( {
                            'label':item.label || me.getLang( "contextMenu." + item.cmdName ),
                            className:'edui-for-' + (item.icon ? item.icon : item.cmdName + (item.value || '')),
                            onclick:item.exec ? function () {
                                item.exec.call( me );
                            } : function () {
                                me.execCommand( item.cmdName, item.value );
                            }
                        } );
                    }

                }

            })( ti );
        }
        if ( contextItems[contextItems.length - 1] == '-' ) {
            contextItems.pop();
        }

        menu = new UE.ui.Menu( {
            items:contextItems,
            className:"edui-contextmenu",
            editor:me
        } );
        menu.render();
        menu.showAt( offset );

        me.fireEvent("aftershowcontextmenu",menu);

        domUtils.preventDefault( evt );
        if ( browser.ie ) {
            var ieRange;
            try {
                ieRange = me.selection.getNative().createRange();
            } catch ( e ) {
                return;
            }
            if ( ieRange.item ) {
                var range = new dom.Range( me.document );
                range.selectNode( ieRange.item( 0 ) ).select( true, true );

            }
        }
    } );
};



///import core
///commands       弹出菜单
// commandsName  popupmenu
///commandsTitle  弹出菜单
/**
 * 弹出菜单
 * @function
 * @name baidu.editor.plugins.popupmenu
 * @author xuheng
 */

UE.plugins['shortcutmenu'] = function () {
    var me = this,
        menu,
        items = me.options.shortcutMenu || [];

    if (!items.length) {
        return;
    }

    me.addListener ('contextmenu mouseup' , function (type , e) {
        var me = this,
            customEvt = {
                type : type ,
                target : e.target || e.srcElement ,
                screenX : e.screenX ,
                screenY : e.screenY ,
                clientX : e.clientX ,
                clientY : e.clientY
            };

        setTimeout (function () {
            var rng = me.selection.getRange ();
            if (rng.collapsed === false || type == "contextmenu") {

                if (!menu) {
                    menu = new baidu.editor.ui.ShortCutMenu ({
                        editor : me ,
                        items : items ,
                        theme : me.options.theme ,
                        className : 'edui-shortcutmenu'
                    });

                    menu.render ();
                    me.fireEvent ("afterrendershortcutmenu" , menu);
                }

                menu.show (customEvt , !!UE.plugins['contextmenu']);
            }
        });

        if (type == 'contextmenu') {
            domUtils.preventDefault (e);
            if (browser.ie) {
                var ieRange;
                try {
                    ieRange = me.selection.getNative ().createRange ();
                } catch (e) {
                    return;
                }
                if (ieRange.item) {
                    var range = new dom.Range (me.document);
                    range.selectNode (ieRange.item (0)).select (true , true);

                }
            }
        }

        if (type == "keydown") {
            menu && !menu.isHidden && menu.hide ();
        }
    });

    me.addListener ('keydown' , function (type) {
        if (type == "keydown") {
            menu && !menu.isHidden && menu.hide ();
        }

    });

};



///import core
///commands 加粗,斜体,上标,下标
///commandsName  Bold,Italic,Subscript,Superscript
///commandsTitle  加粗,加斜,下标,上标
/**
 * b u i等基础功能实现
 * @function
 * @name baidu.editor.execCommands
 * @param    {String}    cmdName    bold加粗。italic斜体。subscript上标。superscript下标。
*/
UE.plugins['basestyle'] = function(){

    var basestyles = {
            'bold':['strong','b'],
            'italic':['em','i'],
            'subscript':['sub'],
            'superscript':['sup']
        },
        getObj = function(editor,tagNames){
            return domUtils.filterNodeList(editor.selection.getStartElementPath(),tagNames);
        },
        me = this;
    //添加快捷键
    me.addshortcutkey({
        "Bold" : "ctrl+66",//^B
        "Italic" : "ctrl+73", //^I
        "Underline" : "ctrl+85"//^U
    });
    me.addInputRule(function(root){
        utils.each(root.getNodesByTagName('b i'),function(node){
            switch (node.tagName){
                case 'b':
                    node.tagName = 'strong';
                    break;
                case 'i':
                    node.tagName = 'em';
            }
        });
    });
    for ( var style in basestyles ) {
        (function( cmd, tagNames ) {
            me.commands[cmd] = {
                execCommand : function( cmdName ) {
                    var range = me.selection.getRange(),obj = getObj(this,tagNames);
                    if ( range.collapsed ) {
                        if ( obj ) {
                            var tmpText =  me.document.createTextNode('');
                            range.insertNode( tmpText ).removeInlineStyle( tagNames );
                            range.setStartBefore(tmpText);
                            domUtils.remove(tmpText);
                        } else {
                            var tmpNode = range.document.createElement( tagNames[0] );
                            if(cmdName == 'superscript' || cmdName == 'subscript'){
                                tmpText = me.document.createTextNode('');
                                range.insertNode(tmpText)
                                    .removeInlineStyle(['sub','sup'])
                                    .setStartBefore(tmpText)
                                    .collapse(true);
                            }
                            range.insertNode( tmpNode ).setStart( tmpNode, 0 );
                        }
                        range.collapse( true );
                    } else {
                        if(cmdName == 'superscript' || cmdName == 'subscript'){
                            if(!obj || obj.tagName.toLowerCase() != cmdName){
                                range.removeInlineStyle(['sub','sup']);
                            }
                        }
                        obj ? range.removeInlineStyle( tagNames ) : range.applyInlineStyle( tagNames[0] );
                    }
                    range.select();
                },
                queryCommandState : function() {
                   return getObj(this,tagNames) ? 1 : 0;
                }
            };
        })( style, basestyles[style] );
    }
};


///import core
///commands 选区路径
///commandsName  ElementPath,elementPathEnabled
///commandsTitle  选区路径
/**
 * 选区路径
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName     elementpath选区路径
 */
UE.plugins['elementpath'] = function(){
    var currentLevel,
        tagNames,
        me = this;
    me.setOpt('elementPathEnabled',true);
    if(!me.options.elementPathEnabled){
        return;
    }
    me.commands['elementpath'] = {
        execCommand : function( cmdName, level ) {
            var start = tagNames[level],
                range = me.selection.getRange();
            currentLevel = level*1;
            range.selectNode(start).select();
        },
        queryCommandValue : function() {
            //产生一个副本，不能修改原来的startElementPath;
            var parents = [].concat(this.selection.getStartElementPath()).reverse(),
                names = [];
            tagNames = parents;
            for(var i=0,ci;ci=parents[i];i++){
                if(ci.nodeType == 3) {
                    continue;
                }
                var name = ci.tagName.toLowerCase();
                if(name == 'img' && ci.getAttribute('anchorname')){
                    name = 'anchor';
                }
                names[i] = name;
                if(currentLevel == i){
                   currentLevel = -1;
                    break;
                }
            }
            return names;
        }
    };
};


///import core
///import plugins\removeformat.js
///commands 格式刷
///commandsName  FormatMatch
///commandsTitle  格式刷
/**
 * 格式刷，只格式inline的
 * @function
 * @name baidu.editor.execCommand
 * @param {String}     cmdName    formatmatch执行格式刷
 */
UE.plugins['formatmatch'] = function(){

    var me = this,
        list = [],img,
        flag = 0;

     me.addListener('reset',function(){
         list = [];
         flag = 0;
     });

    function addList(type,evt){
        
        if(browser.webkit){
            var target = evt.target.tagName == 'IMG' ? evt.target : null;
        }

        function addFormat(range){

            if(text){
                range.selectNode(text);
            }
            return range.applyInlineStyle(list[list.length-1].tagName,null,list);

        }

        me.undoManger && me.undoManger.save();

        var range = me.selection.getRange(),
            imgT = target || range.getClosedNode();
        if(img && imgT && imgT.tagName == 'IMG'){
            //trace:964

            imgT.style.cssText += ';float:' + (img.style.cssFloat || img.style.styleFloat ||'none') + ';display:' + (img.style.display||'inline');

            img = null;
        }else{
            if(!img){
                var collapsed = range.collapsed;
                if(collapsed){
                    var text = me.document.createTextNode('match');
                    range.insertNode(text).select();


                }
                me.__hasEnterExecCommand = true;
                //不能把block上的属性干掉
                //trace:1553
                var removeFormatAttributes = me.options.removeFormatAttributes;
                me.options.removeFormatAttributes = '';
                me.execCommand('removeformat');
                me.options.removeFormatAttributes = removeFormatAttributes;
                me.__hasEnterExecCommand = false;
                //trace:969
                range = me.selection.getRange();
                if(list.length){
                    addFormat(range);
                }
                if(text){
                    range.setStartBefore(text).collapse(true);

                }
                range.select();
                text && domUtils.remove(text);
            }

        }




        me.undoManger && me.undoManger.save();
        me.removeListener('mouseup',addList);
        flag = 0;
    }

    me.commands['formatmatch'] = {
        execCommand : function( cmdName ) {
          
            if(flag){
                flag = 0;
                list = [];
                 me.removeListener('mouseup',addList);
                return;
            }


              
            var range = me.selection.getRange();
            img = range.getClosedNode();
            if(!img || img.tagName != 'IMG'){
               range.collapse(true).shrinkBoundary();
               var start = range.startContainer;
               list = domUtils.findParents(start,true,function(node){
                   return !domUtils.isBlockElm(node) && node.nodeType == 1;
               });
               //a不能加入格式刷, 并且克隆节点
               for(var i=0,ci;ci=list[i];i++){
                   if(ci.tagName == 'A'){
                       list.splice(i,1);
                       break;
                   }
               }

            }

            me.addListener('mouseup',addList);
            flag = 1;


        },
        queryCommandState : function() {
            return flag;
        },
        notNeedUndo : 1
    };
};


///import core
///commands 查找替换
///commandsName  SearchReplace
///commandsTitle  查询替换
///commandsDialog  dialogs\searchreplace
/**
 * @description 查找替换
 * @author zhanyi
 */
UE.plugins['searchreplace'] = function(){

    var currentRange,
        first,
        me = this;
    me.addListener('reset',function(){
        currentRange = null;
        first = null;
    });
    me.commands['searchreplace'] = {
        execCommand : function(cmdName,opt){
            var me = this,
                sel = me.selection,
                range,
                nativeRange,
                num = 0,
                opt = utils.extend(opt,{
                    all : false,
                    casesensitive : false,
                    dir : 1
                },true);
            var searchStr = opt.searchStr;
            if(browser.ie){
                me.focus();
                while(1){
                    var tmpRange;

                    nativeRange = me.document.selection.createRange();
                    tmpRange = nativeRange.duplicate();
                    tmpRange.moveToElementText(me.document.body);
                    if(opt.all){
                        first = 0;
                        opt.dir = 1;
                        if(currentRange){
                            tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',currentRange);
                        }else{
                            tmpRange.moveToElementText(me.document.body);
                        }

                    }else{
                        tmpRange.setEndPoint(opt.dir == -1 ? 'EndToStart' : 'StartToEnd',nativeRange);
                        if(opt.hasOwnProperty("replaceStr")){
                            tmpRange.setEndPoint(opt.dir == -1 ? 'StartToEnd' : 'EndToStart',nativeRange);
                        }
                    }
                    nativeRange = tmpRange.duplicate();

                    if(/^\/[^/]+\/\w*$/.test(opt.searchStr)){
                        var str = tmpRange.text,
                            reg = new RegExp(opt.searchStr.replace(/^\/|\/\w*$/g,''),'g' + (opt.casesensitive ? '':'i'));
                        var match = str.match(reg);
                        if(match && match.length){
                            searchStr = opt.dir < 0 ? match[match.length -1] : match[0];
                        }else{
                            currentRange = null;
                            return num;
                        }
                    }
                    if(!tmpRange.findText(searchStr,opt.dir,opt.casesensitive ? 4 : 0)){
                        currentRange = null;
                        tmpRange = me.document.selection.createRange();
                        tmpRange.scrollIntoView();
                        currentRange = null;
                        return num;
                    }
                    tmpRange.select();
                    //替换
                    if(opt.hasOwnProperty("replaceStr")){
                        range = sel.getRange();
                        range.deleteContents().insertNode(range.document.createTextNode(opt.replaceStr)).select();
                        currentRange = sel.getNative().createRange();

                    }
                    num++;
                    if(!opt.all){
                        break;
                    }
                }
            }else{

                var w = me.window,nativeSel = sel.getNative();
                while(1){
                    if(opt.all){
                        if(currentRange){
                            currentRange.collapse(false);
                            nativeRange = currentRange;
                        }else{
                            nativeRange  = me.document.createRange();
                            nativeRange.setStart(me.document.body,0);
                            nativeRange.collapse(true);
                        }

                        nativeSel.removeAllRanges();
                        nativeSel.addRange( nativeRange );
                        first = 0;
                        opt.dir = 1;
                    }else{
                        //safari弹出层，原生已经找不到range了，所以需要先选回来，再取原生
                        if(browser.safari){
                            me.selection.getRange().select();

                        }
                        var nativeSel = w.getSelection();
                        if(!nativeSel.rangeCount){
                            nativeRange = currentRange || me._bakNativeRange;
                        }else{
                            nativeRange = nativeSel.getRangeAt(0);
                        }

                        if(opt.hasOwnProperty("replaceStr")){
                            nativeRange.collapse(opt.dir == 1 ? true : false);
                        }
                    }

                    //如果是第一次并且海选中了内容那就要清除，为find做准备

                    if(!first){
                        nativeRange.collapse( opt.dir <0 ? true : false);
                        nativeSel.removeAllRanges();
                        nativeSel.addRange( nativeRange );
                    }else{
                        nativeSel.removeAllRanges();
                    }
                    //是正则查找

                    if(/^\/[^/]+\/\w*$/.test(opt.searchStr)){
                        var tmpRange = nativeRange.cloneRange();
                        //向前查找
                        if(opt.dir < 0 ){
                            nativeRange.collapse(true);
                            nativeRange.setStart(me.body,0);
                        }else{
                            nativeRange.setEnd(me.body,me.body.childNodes.length);
                        }
                        var str = nativeRange + '',
                            reg = new RegExp(opt.searchStr.replace(/^\/|\/\w*$/g,''),'g' + (opt.casesensitive ? '':'i'));
                        var match = str.match(reg);
                        if(match && match.length){
                            searchStr = opt.dir < 0 ? match[match.length -1] : match[0];
                        }else{
                            currentRange = null;
                            return num;
                        }
                        nativeSel.removeAllRanges();
                        nativeRange = tmpRange;
                        nativeSel.addRange(nativeRange);
                    }
                    if(!w.find(searchStr,opt.casesensitive,opt.dir < 0 ? true : false) ) {
                        currentRange = null;
                        nativeSel.removeAllRanges();
                        return num;
                    }
                    first = 0;
                    range = w.getSelection().getRangeAt(0);
                    if(!range.collapsed){

                        if(opt.hasOwnProperty("replaceStr")){
                            range.deleteContents();
                            var text = w.document.createTextNode(opt.replaceStr);
                            range.insertNode(text);
                            range.selectNode(text);
                            nativeSel.addRange(range);

                        }
                        currentRange = range.cloneRange();
                    }
                    num++;
                    if(!opt.all){
                        break;
                    }
                }

            }
            return true;
        }
    };

};
///import core
///commands 自定义样式
///commandsName  CustomStyle
///commandsTitle  自定义样式
UE.plugins['customstyle'] = function() {
    var me = this;
    me.setOpt({ 'customstyle':[
        {tag:'h1',name:'tc', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
        {tag:'h1',name:'tl', style:'font-size:32px;font-weight:bold;border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:left;margin:0 0 10px 0;'},
        {tag:'span',name:'im', style:'font-size:16px;font-style:italic;font-weight:bold;line-height:18px;'},
        {tag:'span',name:'hi', style:'font-size:16px;font-style:italic;font-weight:bold;color:rgb(51, 153, 204);line-height:18px;'}
    ]});
    me.commands['customstyle'] = {
        execCommand : function(cmdName, obj) {
            var me = this,
                    tagName = obj.tag,
                    node = domUtils.findParent(me.selection.getStart(), function(node) {
                        return node.getAttribute('label');
                    }, true),
                    range,bk,tmpObj = {};
            for (var p in obj) {
               if(obj[p]!==undefined)
                    tmpObj[p] = obj[p];
            }
            delete tmpObj.tag;
            if (node && node.getAttribute('label') == obj.label) {
                range = this.selection.getRange();
                bk = range.createBookmark();
                if (range.collapsed) {
                    //trace:1732 删掉自定义标签，要有p来回填站位
                    if(dtd.$block[node.tagName]){
                        var fillNode = me.document.createElement('p');
                        domUtils.moveChild(node, fillNode);
                        node.parentNode.insertBefore(fillNode, node);
                        domUtils.remove(node);
                    }else{
                        domUtils.remove(node,true);
                    }

                } else {

                    var common = domUtils.getCommonAncestor(bk.start, bk.end),
                            nodes = domUtils.getElementsByTagName(common, tagName);
                    if(new RegExp(tagName,'i').test(common.tagName)){
                        nodes.push(common);
                    }
                    for (var i = 0,ni; ni = nodes[i++];) {
                        if (ni.getAttribute('label') == obj.label) {
                            var ps = domUtils.getPosition(ni, bk.start),pe = domUtils.getPosition(ni, bk.end);
                            if ((ps & domUtils.POSITION_FOLLOWING || ps & domUtils.POSITION_CONTAINS)
                                    &&
                                    (pe & domUtils.POSITION_PRECEDING || pe & domUtils.POSITION_CONTAINS)
                                    )
                                if (dtd.$block[tagName]) {
                                    var fillNode = me.document.createElement('p');
                                    domUtils.moveChild(ni, fillNode);
                                    ni.parentNode.insertBefore(fillNode, ni);
                                }
                            domUtils.remove(ni, true);
                        }
                    }
                    node = domUtils.findParent(common, function(node) {
                        return node.getAttribute('label') == obj.label;
                    }, true);
                    if (node) {

                        domUtils.remove(node, true);

                    }

                }
                range.moveToBookmark(bk).select();
            } else {
                if (dtd.$block[tagName]) {
                    this.execCommand('paragraph', tagName, tmpObj,'customstyle');
                    range = me.selection.getRange();
                    if (!range.collapsed) {
                        range.collapse();
                        node = domUtils.findParent(me.selection.getStart(), function(node) {
                            return node.getAttribute('label') == obj.label;
                        }, true);
                        var pNode = me.document.createElement('p');
                        domUtils.insertAfter(node, pNode);
                        domUtils.fillNode(me.document, pNode);
                        range.setStart(pNode, 0).setCursor();
                    }
                } else {

                    range = me.selection.getRange();
                    if (range.collapsed) {
                        node = me.document.createElement(tagName);
                        domUtils.setAttributes(node, tmpObj);
                        range.insertNode(node).setStart(node, 0).setCursor();

                        return;
                    }

                    bk = range.createBookmark();
                    range.applyInlineStyle(tagName, tmpObj).moveToBookmark(bk).select();
                }
            }

        },
        queryCommandValue : function() {
            var parent = domUtils.filterNodeList(
                this.selection.getStartElementPath(),
                function(node){return node.getAttribute('label')}
            );
            return  parent ? parent.getAttribute('label') : '';
        }
    };
    //当去掉customstyle是，如果是块元素，用p代替
    me.addListener('keyup', function(type, evt) {
        var keyCode = evt.keyCode || evt.which;

        if (keyCode == 32 || keyCode == 13) {
            var range = me.selection.getRange();
            if (range.collapsed) {
                var node = domUtils.findParent(me.selection.getStart(), function(node) {
                    return node.getAttribute('label');
                }, true);
                if (node && dtd.$block[node.tagName] && domUtils.isEmptyNode(node)) {
                        var p = me.document.createElement('p');
                        domUtils.insertAfter(node, p);
                        domUtils.fillNode(me.document, p);
                        domUtils.remove(node);
                        range.setStart(p, 0).setCursor();


                }
            }
        }
    });
};
///import core
///commands 远程图片抓取
///commandsName  catchRemoteImage,catchremoteimageenable
///commandsTitle  远程图片抓取
/**
 * 远程图片抓取,当开启本插件时所有不符合本地域名的图片都将被抓取成为本地服务器上的图片
 *
 */
UE.plugins['catchremoteimage'] = function () {
    if (this.options.catchRemoteImageEnable===false){
        return;
    }
    var me = this;
    this.setOpt({
        localDomain:["127.0.0.1","localhost","img.baidu.com"],
        separater:'ue_separate_ue',
        catchFieldName:"upfile",
        catchRemoteImageEnable:true
    });
    var ajax = UE.ajax,
        localDomain = me.options.localDomain ,
        catcherUrl = me.options.catcherUrl,
        separater = me.options.separater;
    function catchremoteimage(imgs, callbacks) {
        var submitStr = imgs.join(separater);
        var tmpOption = {
            timeout:60000, //单位：毫秒，回调请求超时设置。目标用户如果网速不是很快的话此处建议设置一个较大的数值
            onsuccess:callbacks["success"],
            onerror:callbacks["error"]
        };
        tmpOption[me.options.catchFieldName] = submitStr;
        ajax.request(catcherUrl, tmpOption);
    }

    me.addListener("afterpaste", function () {
        me.fireEvent("catchRemoteImage");
    });

    me.addListener("catchRemoteImage", function () {
        var remoteImages = [];
        var imgs = domUtils.getElementsByTagName(me.document, "img");
        var test = function (src,urls) {
            for (var j = 0, url; url = urls[j++];) {
                if (src.indexOf(url) !== -1) {
                    return true;
                }
            }
            return false;
        };
        for (var i = 0, ci; ci = imgs[i++];) {
            if (ci.getAttribute("word_img")){
                continue;
            }
            var src = ci.getAttribute("_src") || ci.src || "";
            if (/^(https?|ftp):/i.test(src) && !test(src,localDomain)) {
                remoteImages.push(src);
            }
        }
        if (remoteImages.length) {
            catchremoteimage(remoteImages, {
                //成功抓取
                success:function (xhr) {
                    try {
                        var info = eval("(" + xhr.responseText + ")");
                    } catch (e) {
                        return;
                    }
                    var srcUrls = info.srcUrl.split(separater),
                        urls = info.url.split(separater);
                    for (var i = 0, ci; ci = imgs[i++];) {
                        var src = ci.getAttribute("_src") || ci.src || "";
                        for (var j = 0, cj; cj = srcUrls[j++];) {
                            var url = urls[j - 1];
                            if (src == cj && url != "error") {  //抓取失败时不做替换处理
                                //地址修正
                                var newSrc = me.options.catcherPath + url;
                                domUtils.setAttributes(ci, {
                                    "src":newSrc,
                                    "_src":newSrc
                                });
                                break;
                            }
                        }
                    }
                    me.fireEvent('catchremotesuccess')
                },
                //回调失败，本次请求超时
                error:function () {
                    me.fireEvent("catchremoteerror");
                }
            });
        }

    });
};
///import core
///import plugins\inserthtml.js
///import plugins\image.js
///commandsName  snapscreen
///commandsTitle  截屏
/**
 * 截屏插件
 */
UE.plugins['snapscreen'] = function(){
    var me = this,
        doc,
        snapplugin;

    me.setOpt({
        snapscreenServerPort: location.port                                    //屏幕截图的server端端口
        ,snapscreenImgAlign: ''                                //截图的图片默认的排版方式
        ,snapscreenHost: location.hostname                                 //屏幕截图的server端文件所在的网站地址或者ip，请不要加http://

    });
    me.commands['snapscreen'] = {
        execCommand: function(){
            var me = this,lang = me.getLang("snapScreen_plugin");
            if(!snapplugin){
                var container = me.container;
                doc = container.ownerDocument || container.document;
                snapplugin = doc.createElement("object");
                try{snapplugin.type = "application/x-pluginbaidusnap";}catch(e){
                    return;
                }
                snapplugin.style.cssText = "position:absolute;left:-9999px;";
                snapplugin.setAttribute("width","0");
                snapplugin.setAttribute("height","0");
                container.appendChild(snapplugin);
            }


           var editorOptions = me.options;

            var onSuccess = function(rs){
                try{
                    rs = eval("("+ rs +")");
                }catch(e){
                    alert(lang.callBackErrorMsg);
                    return;
                }

                if(rs.state != 'SUCCESS'){
                    alert(rs.state);
                    return;
                }
                me.execCommand('insertimage', {
                    src: editorOptions.snapscreenPath + rs.url,
                    floatStyle: editorOptions.snapscreenImgAlign,
                    _src:editorOptions.snapscreenPath + rs.url
                });
            };
            var onStartUpload = function(){
                //开始截图上传
            };
            var onError = function(){
                alert(lang.uploadErrorMsg);
            };
            try{
                var port = editorOptions.snapscreenServerPort + '';
                editorOptions.snapscreenServerUrl = editorOptions.snapscreenServerUrl.split( editorOptions.snapscreenHost );
                editorOptions.snapscreenServerUrl = editorOptions.snapscreenServerUrl[1] || editorOptions.snapscreenServerUrl[0];
                if( editorOptions.snapscreenServerUrl.indexOf(":"+port) === 0 ) {
                    editorOptions.snapscreenServerUrl = editorOptions.snapscreenServerUrl.substring( port.length+1 );
                }
                var ret =snapplugin.saveSnapshot(editorOptions.snapscreenHost, editorOptions.snapscreenServerUrl, port);
                onSuccess(ret);
            }catch(e){
                me.ui._dialogs['snapscreenDialog'].open();
            }
        }
    };
}

UE.commands['formula'] = {
	execCommand : function() {
		dialog = new editorui.Dialog(utils.extend({
			iframeUrl : editor.ui.mapUrl(iframeUrl),
			editor : editor,
			className : 'edui-for-' + cmd,
			title : title,
			holdScroll : cmd === 'insertimage',
			closeDialog : editor.getLang("closeDialog")
		}, type == 'ok' ? {
			buttons : [{
				className : 'edui-okbutton',
				label : editor.getLang("ok"),
				editor : editor,
				onclick : function() {
					dialog.close(true);
				}
			}, {
				className : 'edui-cancelbutton',
				label : editor.getLang("cancel"),
				editor : editor,
				onclick : function() {
					dialog.close(false);
				}
			}]
		} : {}));
		editor.ui._dialogs[cmd + "Dialog"] = dialog;
	}
};

///import core
///commands 插入空行
///commandsName  insertparagraph
///commandsTitle  插入空行
/**
 * 插入空行
 * @function
 * @name baidu.editor.execCommand
 * @param   {String}   cmdName     insertparagraph
 */

UE.commands['insertparagraph'] = {
    execCommand : function( cmdName,front) {
        var me = this,
            range = me.selection.getRange(),
            start = range.startContainer,tmpNode;
        while(start ){
            if(domUtils.isBody(start)){
                break;
            }
            tmpNode = start;
            start = start.parentNode;
        }
        if(tmpNode){
            var p = me.document.createElement('p');
            if(front){
                tmpNode.parentNode.insertBefore(p,tmpNode)
            }else{
                tmpNode.parentNode.insertBefore(p,tmpNode.nextSibling)
            }
            domUtils.fillNode(me.document,p);
            range.setStart(p,0).setCursor(false,true);
        }
    }
};


///import core
///import plugins/inserthtml.js
///commands 百度应用
///commandsName webapp
///commandsTitle  百度应用
///commandsDialog  dialogs\webapp
UE.plugins['webapp'] = function () {
    var me = this;
    function createInsertStr( obj, toIframe, addParagraph ) {
        return !toIframe ?
                (addParagraph ? '<p>' : '') + '<img title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"' +
                        ' src="' + me.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" style="background:url(' + obj.logo+') no-repeat center center; border:1px solid gray;" class="edui-faked-webapp" _url="' + obj.url + '" />' +
                        (addParagraph ? '</p>' : '')
                :
                '<iframe class="edui-faked-webapp" title="'+obj.title+'" width="' + obj.width + '" height="' + obj.height + '"  scrolling="no" frameborder="0" src="' + obj.url + '" logo_url = '+obj.logo+'></iframe>';
    }

    function switchImgAndIframe( img2frame ) {
        var tmpdiv,
                nodes = domUtils.getElementsByTagName( me.document, !img2frame ? "iframe" : "img" );
        for ( var i = 0, node; node = nodes[i++]; ) {
            if ( node.className != "edui-faked-webapp" ){
                continue;
            }
            tmpdiv = me.document.createElement( "div" );
            tmpdiv.innerHTML = createInsertStr( img2frame ? {url:node.getAttribute( "_url" ), width:node.width, height:node.height,title:node.title,logo:node.style.backgroundImage.replace("url(","").replace(")","")} : {url:node.getAttribute( "src", 2 ),title:node.title, width:node.width, height:node.height,logo:node.getAttribute("logo_url")}, img2frame ? true : false,false );
            node.parentNode.replaceChild( tmpdiv.firstChild, node );
        }
    }

    me.addListener( "beforegetcontent", function () {
        switchImgAndIframe( true );
    } );
    me.addListener( 'aftersetcontent', function () {
        switchImgAndIframe( false );
    } );
    me.addListener( 'aftergetcontent', function ( cmdName ) {
        if ( cmdName == 'aftergetcontent' && me.queryCommandState( 'source' ) ){
            return;
        }
        switchImgAndIframe( false );
    } );

    me.commands['webapp'] = {
        execCommand:function ( cmd, obj ) {
            me.execCommand( "inserthtml", createInsertStr( obj, false,true ) );
        }
    };
};

///import core
///import plugins\inserthtml.js
///import plugins\cleardoc.js
///commands 模板
///commandsName  template
///commandsTitle  模板
///commandsDialog  dialogs\template
UE.plugins['template'] = function () {
    UE.commands['template'] = {
        execCommand:function (cmd, obj) {
            obj.html && this.execCommand("inserthtml", obj.html);
        }
    };
    this.addListener("click", function (type, evt) {
        var el = evt.target || evt.srcElement,
            range = this.selection.getRange();
        var tnode = domUtils.findParent(el, function (node) {
            if (node.className && domUtils.hasClass(node, "ue_t")) {
                return node;
            }
        }, true);
        tnode && range.selectNode(tnode).shrinkBoundary().select();
    });
    this.addListener("keydown", function (type, evt) {
        var range = this.selection.getRange();
        if (!range.collapsed) {
            if (!evt.ctrlKey && !evt.metaKey && !evt.shiftKey && !evt.altKey) {
                var tnode = domUtils.findParent(range.startContainer, function (node) {
                    if (node.className && domUtils.hasClass(node, "ue_t")) {
                        return node;
                    }
                }, true);
                if (tnode) {
                    domUtils.removeClasses(tnode, ["ue_t"]);
                }
            }
        }
    });
};

///import core
///import plugins/inserthtml.js
///commands 音乐
///commandsName Music
///commandsTitle  插入音乐
///commandsDialog  dialogs\music
UE.plugins['music'] = function () {
    var me = this,
        div;

    /**
     * 创建插入音乐字符窜
     * @param url 音乐地址
     * @param width 音乐宽度
     * @param height 音乐高度
     * @param align 阴雨对齐
     * @param toEmbed 是否以flash代替显示
     * @param addParagraph  是否需要添加P标签
     */
    function creatInsertStr(url,width,height,align,toEmbed,addParagraph){
        return  !toEmbed ?
            (addParagraph? ('<p '+ (align !="none" ? ( align == "center"? ' style="text-align:center;" ':' style="float:"'+ align ) : '') + '>'): '') +
                '<img align="'+align+'" width="'+ width +'" height="' + height + '" _url="'+url+'" class="edui-faked-music"' +
                ' src="'+me.options.langPath+me.options.lang+'/images/music.png" />' +
                (addParagraph?'</p>':'')
            :
            '<embed type="application/x-shockwave-flash" class="edui-faked-music" pluginspage="http://www.macromedia.com/go/getflashplayer"' +
                ' src="' + url + '" width="' + width  + '" height="' + height  + '" align="' + align + '"' +
                ( align !="none" ? ' style= "'+ ( align == "center"? "display:block;":" float: "+ align )  + '"' :'' ) +
                ' wmode="transparent" play="true" loop="false" menu="false" allowscriptaccess="never" allowfullscreen="true" >';
    }

    function switchImgAndEmbed(img2embed) {
        var tmpdiv,
            nodes = domUtils.getElementsByTagName(me.document, !img2embed ? "embed" : "img");
        for (var i = 0, node; node = nodes[i++];) {
            if (node.className != "edui-faked-music") {
                continue;
            }
            tmpdiv = me.document.createElement("div");
            //先看float在看align,浮动有的是时候是在float上定义的
            var align = domUtils.getComputedStyle(node,'float');
            align = align == 'none' ? (node.getAttribute('align') || '') : align;
            tmpdiv.innerHTML = creatInsertStr(img2embed ? node.getAttribute("_url") : node.getAttribute("src"), node.width, node.height, align, img2embed);
            node.parentNode.replaceChild(tmpdiv.firstChild, node);
        }
    }

    me.addListener("beforegetcontent", function () {
        switchImgAndEmbed(true);
    });
    me.addListener('aftersetcontent', function () {
        switchImgAndEmbed(false);
    });
    me.addListener('aftergetcontent', function (cmdName) {
        if (cmdName == 'aftergetcontent' && me.queryCommandState('source')) {
            return;
        }
        switchImgAndEmbed(false);
    });

    me.commands["music"] = {
        execCommand:function (cmd, musicObj) {
            var me = this,
                str = creatInsertStr(musicObj.url, musicObj.width || 400, musicObj.height || 95, "none", false, true);
            me.execCommand("inserthtml",str);
        },
        queryCommandState:function () {
            var me = this,
                img = me.selection.getRange().getClosedNode(),
                flag = img && (img.className == "edui-faked-music");
            return flag ? 1 : 0;
        }
    };
};
var baidu = baidu || {};
baidu.editor = baidu.editor || {};
baidu.editor.ui = {};
(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils;

    var magic = '$EDITORUI';
    var root = window[magic] = {};
    var uidMagic = 'ID' + magic;
    var uidCount = 0;

    var uiUtils = baidu.editor.ui.uiUtils = {
        uid: function (obj){
            return (obj ? obj[uidMagic] || (obj[uidMagic] = ++ uidCount) : ++ uidCount);
        },
        hook: function ( fn, callback ) {
            var dg;
            if (fn && fn._callbacks) {
                dg = fn;
            } else {
                dg = function (){
                    var q;
                    if (fn) {
                        q = fn.apply(this, arguments);
                    }
                    var callbacks = dg._callbacks;
                    var k = callbacks.length;
                    while (k --) {
                        var r = callbacks[k].apply(this, arguments);
                        if (q === undefined) {
                            q = r;
                        }
                    }
                    return q;
                };
                dg._callbacks = [];
            }
            dg._callbacks.push(callback);
            return dg;
        },
        createElementByHtml: function (html){
            var el = document.createElement('div');
            el.innerHTML = html;
            el = el.firstChild;
            el.parentNode.removeChild(el);
            return el;
        },
        getViewportElement: function (){
            return (browser.ie && browser.quirks) ?
                document.body : document.documentElement;
        },
        getClientRect: function (element){
            var bcr;
            //trace  IE6下在控制编辑器显隐时可能会报错，catch一下
            try{
                bcr = element.getBoundingClientRect();
            }catch(e){
                bcr={left:0,top:0,height:0,width:0}
            }
            var rect = {
                left: Math.round(bcr.left),
                top: Math.round(bcr.top),
                height: Math.round(bcr.bottom - bcr.top),
                width: Math.round(bcr.right - bcr.left)
            };
            var doc;
            while ((doc = element.ownerDocument) !== document &&
                (element = domUtils.getWindow(doc).frameElement)) {
                bcr = element.getBoundingClientRect();
                rect.left += bcr.left;
                rect.top += bcr.top;
            }
            rect.bottom = rect.top + rect.height;
            rect.right = rect.left + rect.width;
            return rect;
        },
        getViewportRect: function (){
            var viewportEl = uiUtils.getViewportElement();
            var width = (window.innerWidth || viewportEl.clientWidth) | 0;
            var height = (window.innerHeight ||viewportEl.clientHeight) | 0;
            return {
                left: 0,
                top: 0,
                height: height,
                width: width,
                bottom: height,
                right: width
            };
        },
        setViewportOffset: function (element, offset){
            var rect;
            var fixedLayer = uiUtils.getFixedLayer();
            if (element.parentNode === fixedLayer) {
                element.style.left = offset.left + 'px';
                element.style.top = offset.top + 'px';
            } else {
                domUtils.setViewportOffset(element, offset);
            }
        },
        getEventOffset: function (evt){
            var el = evt.target || evt.srcElement;
            var rect = uiUtils.getClientRect(el);
            var offset = uiUtils.getViewportOffsetByEvent(evt);
            return {
                left: offset.left - rect.left,
                top: offset.top - rect.top
            };
        },
        getViewportOffsetByEvent: function (evt){
            var el = evt.target || evt.srcElement;
            var frameEl = domUtils.getWindow(el).frameElement;
            var offset = {
                left: evt.clientX,
                top: evt.clientY
            };
            if (frameEl && el.ownerDocument !== document) {
                var rect = uiUtils.getClientRect(frameEl);
                offset.left += rect.left;
                offset.top += rect.top;
            }
            return offset;
        },
        setGlobal: function (id, obj){
            root[id] = obj;
            return magic + '["' + id  + '"]';
        },
        unsetGlobal: function (id){
            delete root[id];
        },
        copyAttributes: function (tgt, src){
            var attributes = src.attributes;
            var k = attributes.length;
            while (k --) {
                var attrNode = attributes[k];
                if ( attrNode.nodeName != 'style' && attrNode.nodeName != 'class' && (!browser.ie || attrNode.specified) ) {
                    tgt.setAttribute(attrNode.nodeName, attrNode.nodeValue);
                }
            }
            if (src.className) {
                domUtils.addClass(tgt,src.className);
            }
            if (src.style.cssText) {
                tgt.style.cssText += ';' + src.style.cssText;
            }
        },
        removeStyle: function (el, styleName){
            if (el.style.removeProperty) {
                el.style.removeProperty(styleName);
            } else if (el.style.removeAttribute) {
                el.style.removeAttribute(styleName);
            } else throw '';
        },
        contains: function (elA, elB){
            return elA && elB && (elA === elB ? false : (
                elA.contains ? elA.contains(elB) :
                    elA.compareDocumentPosition(elB) & 16
                ));
        },
        startDrag: function (evt, callbacks,doc){
            var doc = doc || document;
            var startX = evt.clientX;
            var startY = evt.clientY;
            function handleMouseMove(evt){
                var x = evt.clientX - startX;
                var y = evt.clientY - startY;
                callbacks.ondragmove(x, y,evt);
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = true;
                }
            }
            if (doc.addEventListener) {
                function handleMouseUp(evt){
                    doc.removeEventListener('mousemove', handleMouseMove, true);
                    doc.removeEventListener('mouseup', handleMouseUp, true);
                    window.removeEventListener('mouseup', handleMouseUp, true);
                    callbacks.ondragstop();
                }
                doc.addEventListener('mousemove', handleMouseMove, true);
                doc.addEventListener('mouseup', handleMouseUp, true);
                window.addEventListener('mouseup', handleMouseUp, true);

                evt.preventDefault();
            } else {
                var elm = evt.srcElement;
                elm.setCapture();
                function releaseCaptrue(){
                    elm.releaseCapture();
                    elm.detachEvent('onmousemove', handleMouseMove);
                    elm.detachEvent('onmouseup', releaseCaptrue);
                    elm.detachEvent('onlosecaptrue', releaseCaptrue);
                    callbacks.ondragstop();
                }
                elm.attachEvent('onmousemove', handleMouseMove);
                elm.attachEvent('onmouseup', releaseCaptrue);
                elm.attachEvent('onlosecaptrue', releaseCaptrue);
                evt.returnValue = false;
            }
            callbacks.ondragstart();
        },
        getFixedLayer: function (){
            var layer = document.getElementById('edui_fixedlayer');
            if (layer == null) {
                layer = document.createElement('div');
                layer.id = 'edui_fixedlayer';
                document.body.appendChild(layer);
                if (browser.ie && browser.version <= 8) {
                    layer.style.position = 'absolute';
                    bindFixedLayer();
                    setTimeout(updateFixedOffset);
                } else {
                    layer.style.position = 'fixed';
                }
                layer.style.left = '0';
                layer.style.top = '0';
                layer.style.width = '0';
                layer.style.height = '0';
            }
            return layer;
        },
        makeUnselectable: function (element){
            if (browser.opera || (browser.ie && browser.version < 9)) {
                element.unselectable = 'on';
                if (element.hasChildNodes()) {
                    for (var i=0; i<element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType == 1) {
                            uiUtils.makeUnselectable(element.childNodes[i]);
                        }
                    }
                }
            } else {
                if (element.style.MozUserSelect !== undefined) {
                    element.style.MozUserSelect = 'none';
                } else if (element.style.WebkitUserSelect !== undefined) {
                    element.style.WebkitUserSelect = 'none';
                } else if (element.style.KhtmlUserSelect !== undefined) {
                    element.style.KhtmlUserSelect = 'none';
                }
            }
        }
    };
    function updateFixedOffset(){
        var layer = document.getElementById('edui_fixedlayer');
        uiUtils.setViewportOffset(layer, {
            left: 0,
            top: 0
        });
//        layer.style.display = 'none';
//        layer.style.display = 'block';

        //#trace: 1354
//        setTimeout(updateFixedOffset);
    }
    function bindFixedLayer(adjOffset){
        domUtils.on(window, 'scroll', updateFixedOffset);
        domUtils.on(window, 'resize', baidu.editor.utils.defer(updateFixedOffset, 0, true));
    }
})();

(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        EventBase = baidu.editor.EventBase,
        UIBase = baidu.editor.ui.UIBase = function () {
        };

    UIBase.prototype = {
        className:'',
        uiName:'',
        initOptions:function (options) {
            var me = this;
            for (var k in options) {
                me[k] = options[k];
            }
            this.id = this.id || 'edui' + uiUtils.uid();
        },
        initUIBase:function () {
            this._globalKey = utils.unhtml(uiUtils.setGlobal(this.id, this));
        },
        render:function (holder) {
            var html = this.renderHtml();
            var el = uiUtils.createElementByHtml(html);

            //by xuheng 给每个node添加class
            var list = domUtils.getElementsByTagName(el, "*");
            var theme = "edui-" + (this.theme || this.editor.options.theme);
            var layer = document.getElementById('edui_fixedlayer');
            for (var i = 0, node; node = list[i++];) {
                domUtils.addClass(node, theme);
            }
            domUtils.addClass(el, theme);
            if(layer){
                layer.className="";
                domUtils.addClass(layer,theme);
            }

            var seatEl = this.getDom();
            if (seatEl != null) {
                seatEl.parentNode.replaceChild(el, seatEl);
                uiUtils.copyAttributes(el, seatEl);
            } else {
                if (typeof holder == 'string') {
                    holder = document.getElementById(holder);
                }
                holder = holder || uiUtils.getFixedLayer();
                domUtils.addClass(holder, theme);
                holder.appendChild(el);
            }
            this.postRender();
        },
        getDom:function (name) {
            if (!name) {
                return document.getElementById(this.id);
            } else {
                return document.getElementById(this.id + '_' + name);
            }
        },
        postRender:function () {
            this.fireEvent('postrender');
        },
        getHtmlTpl:function () {
            return '';
        },
        formatHtml:function (tpl) {
            var prefix = 'edui-' + this.uiName;
            return (tpl
                .replace(/##/g, this.id)
                .replace(/%%-/g, this.uiName ? prefix + '-' : '')
                .replace(/%%/g, (this.uiName ? prefix : '') + ' ' + this.className)
                .replace(/\$\$/g, this._globalKey));
        },
        renderHtml:function () {
            return this.formatHtml(this.getHtmlTpl());
        },
        dispose:function () {
            var box = this.getDom();
            if (box) baidu.editor.dom.domUtils.remove(box);
            uiUtils.unsetGlobal(this.id);
        }
    };
    utils.inherits(UIBase, EventBase);
})();

(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Separator = baidu.editor.ui.Separator = function (options){
            this.initOptions(options);
            this.initSeparator();
        };
    Separator.prototype = {
        uiName: 'separator',
        initSeparator: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%"></div>';
        }
    };
    utils.inherits(Separator, UIBase);

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var Mask = baidu.editor.ui.Mask = function (options){
        this.initOptions(options);
        this.initUIBase();
    };
    Mask.prototype = {
        getHtmlTpl: function (){
            return '<div id="##" class="edui-mask %%" onmousedown="return $$._onMouseDown(event, this);"></div>';
        },
        postRender: function (){
            var me = this;
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me._fill();
                    }
                });
            });
        },
        show: function (zIndex){
            this._fill();
            this.getDom().style.display = '';
            this.getDom().style.zIndex = zIndex;
        },
        hide: function (){
            this.getDom().style.display = 'none';
            this.getDom().style.zIndex = '';
        },
        isHidden: function (){
            return this.getDom().style.display == 'none';
        },
        _onMouseDown: function (){
            return false;
        },
        _fill: function (){
            var el = this.getDom();
            var vpRect = uiUtils.getViewportRect();
            el.style.width = vpRect.width + 'px';
            el.style.height = vpRect.height + 'px';
        }
    };
    utils.inherits(Mask, UIBase);
})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup = function (options){
            this.initOptions(options);
            this.initPopup();
        };

    var allPopups = [];
    function closeAllPopup( evt,el ){
        for ( var i = 0; i < allPopups.length; i++ ) {
            var pop = allPopups[i];
            if (!pop.isHidden()) {
                if (pop.queryAutoHide(el) !== false) {
                    if(evt&&/scroll/ig.test(evt.type)&&pop.className=="edui-wordpastepop")   return;
                    pop.hide();
                }
            }
        }

        if(allPopups.length)
            pop.editor.fireEvent("afterhidepop");
    }

    Popup.postHide = closeAllPopup;

    var ANCHOR_CLASSES = ['edui-anchor-topleft','edui-anchor-topright',
        'edui-anchor-bottomleft','edui-anchor-bottomright'];
    Popup.prototype = {
        SHADOW_RADIUS: 5,
        content: null,
        _hidden: false,
        autoRender: true,
        canSideLeft: true,
        canSideUp: true,
        initPopup: function (){
            this.initUIBase();
            allPopups.push( this );
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-popup %%" onmousedown="return false;">' +
                ' <div id="##_body" class="edui-popup-body">' +
                ' <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe>' +
                ' <div class="edui-shadow"></div>' +
                ' <div id="##_content" class="edui-popup-content">' +
                this.getContentHtmlTpl() +
                '  </div>' +
                ' </div>' +
                '</div>';
        },
        getContentHtmlTpl: function (){
            if(this.content){
                if (typeof this.content == 'string') {
                    return this.content;
                }
                return this.content.renderHtml();
            }else{
                return ''
            }

        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){


            if (this.content instanceof UIBase) {
                this.content.postRender();
            }

            //捕获鼠标滚轮
            if( this.captureWheel && !this.captured ) {

                this.captured = true;

                var winHeight = ( document.documentElement.clientHeight || document.body.clientHeight )  - 80,
                    _height = this.getDom().offsetHeight,
                    _top = domUtils.getXY( this.combox.getDom() ).y,
                    content = this.getDom('content'),
                    me = this;

                while( _top + _height > winHeight ) {
                    _height -= 30;
                    content.style.height = _height + 'px';
                }

                //阻止在combox上的鼠标滚轮事件, 防止用户的正常操作被误解
                if( window.XMLHttpRequest ) {

                    domUtils.on( content, ( 'onmousewheel' in document.body ) ? 'mousewheel' :'DOMMouseScroll' , function(e){

                        if(e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }

                        if( e.wheelDelta ) {

                            content.scrollTop -= ( e.wheelDelta / 120 )*60;

                        } else {

                            content.scrollTop -= ( e.detail / -3 )*60;

                        }

                    });

                } else {

                    //ie6
                    domUtils.on( this.getDom(), 'mousewheel' , function(e){

                        e.returnValue = false;

                        me.getDom('content').scrollTop -= ( e.wheelDelta / 120 )*60;

                    });

                }

            }
            this.fireEvent('postRenderAfter');
            this.hide(true);
            this._UIBase_postRender();
        },
        _doAutoRender: function (){
            if (!this.getDom() && this.autoRender) {
                this.render();
            }
        },
        mesureSize: function (){
            var box = this.getDom('content');
            return uiUtils.getClientRect(box);
        },
        fitSize: function (){
            if( this.captureWheel && this.sized ) {
                return this.__size;
            }
            this.sized = true;
            var popBodyEl = this.getDom('body');
            popBodyEl.style.width = '';
            popBodyEl.style.height = '';
            var size = this.mesureSize();
            if( this.captureWheel ) {
                popBodyEl.style.width =  -(-20 -size.width) + 'px';
            } else {
                popBodyEl.style.width =  size.width + 'px';
            }
            popBodyEl.style.height = size.height + 'px';
            this.__size = size;
            this.captureWheel && (this.getDom('content').style.overflow = 'auto');
            return size;
        },
        showAnchor: function ( element, hoz ){
            this.showAnchorRect( uiUtils.getClientRect( element ), hoz );
        },
        showAnchorRect: function ( rect, hoz, adj ){
            this._doAutoRender();
            var vpRect = uiUtils.getViewportRect();
            this._show();
            var popSize = this.fitSize();

            var sideLeft, sideUp, left, top;
            if (hoz) {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.left - popSize.width : rect.right);
                top = (sideUp ? rect.bottom - popSize.height : rect.top);
            } else {
                sideLeft = this.canSideLeft && (rect.right + popSize.width > vpRect.right && rect.left > popSize.width);
                sideUp = this.canSideUp && (rect.top + popSize.height > vpRect.bottom && rect.bottom > popSize.height);
                left = (sideLeft ? rect.right - popSize.width : rect.left);
                top = (sideUp ? rect.top - popSize.height : rect.bottom);
            }

            var popEl = this.getDom();
            uiUtils.setViewportOffset(popEl, {
                left: left,
                top: top
            });
            domUtils.removeClasses(popEl, ANCHOR_CLASSES);
            popEl.className += ' ' + ANCHOR_CLASSES[(sideUp ? 1 : 0) * 2 + (sideLeft ? 1 : 0)];
            if(this.editor){
                popEl.style.zIndex = this.editor.container.style.zIndex * 1 + 10;
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = popEl.style.zIndex - 1;
            }

        },
        showAt: function (offset) {
            var left = offset.left;
            var top = offset.top;
            var rect = {
                left: left,
                top: top,
                right: left,
                bottom: top,
                height: 0,
                width: 0
            };
            this.showAnchorRect(rect, false, true);
        },
        _show: function (){
            if (this._hidden) {
                var box = this.getDom();
                box.style.display = '';
                this._hidden = false;
//                if (box.setActive) {
//                    box.setActive();
//                }
                this.fireEvent('show');
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        show: function (){
            this._doAutoRender();
            this._show();
        },
        hide: function (notNofity){
            if (!this._hidden && this.getDom()) {
                this.getDom().style.display = 'none';
                this._hidden = true;
                if (!notNofity) {
                    this.fireEvent('hide');
                }
            }
        },
        queryAutoHide: function (el){
            return !el || !uiUtils.contains(this.getDom(), el);
        }
    };
    utils.inherits(Popup, UIBase);
    
    domUtils.on( document, 'mousedown', function ( evt ) {
        var el = evt.target || evt.srcElement;
        closeAllPopup( evt,el );
    } );
    domUtils.on( window, 'scroll', function (evt,el) {
        closeAllPopup( evt,el );
    } );

})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        ColorPicker = baidu.editor.ui.ColorPicker = function (options){
            this.initOptions(options);
            this.noColorText = this.noColorText || this.editor.getLang("clearColor");
            this.initUIBase();
        };

    ColorPicker.prototype = {
        getHtmlTpl: function (){
            return genColorPicker(this.noColorText,this.editor);
        },
        _onTableClick: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.fireEvent('pickcolor', color);
            }
        },
        _onTableOver: function (evt){
            var tgt = evt.target || evt.srcElement;
            var color = tgt.getAttribute('data-color');
            if (color) {
                this.getDom('preview').style.backgroundColor = color;
            }
        },
        _onTableOut: function (){
            this.getDom('preview').style.backgroundColor = '';
        },
        _onPickNoColor: function (){
            this.fireEvent('picknocolor');
        }
    };
    utils.inherits(ColorPicker, UIBase);

    var COLORS = (
        'ffffff,000000,eeece1,1f497d,4f81bd,c0504d,9bbb59,8064a2,4bacc6,f79646,' +
            'f2f2f2,7f7f7f,ddd9c3,c6d9f0,dbe5f1,f2dcdb,ebf1dd,e5e0ec,dbeef3,fdeada,' +
            'd8d8d8,595959,c4bd97,8db3e2,b8cce4,e5b9b7,d7e3bc,ccc1d9,b7dde8,fbd5b5,' +
            'bfbfbf,3f3f3f,938953,548dd4,95b3d7,d99694,c3d69b,b2a2c7,92cddc,fac08f,' +
            'a5a5a5,262626,494429,17365d,366092,953734,76923c,5f497a,31859b,e36c09,' +
            '7f7f7f,0c0c0c,1d1b10,0f243e,244061,632423,4f6128,3f3151,205867,974806,' +
            'c00000,ff0000,ffc000,ffff00,92d050,00b050,00b0f0,0070c0,002060,7030a0,').split(',');

    function genColorPicker(noColorText,editor){
        var html = '<div id="##" class="edui-colorpicker %%">' +
            '<div class="edui-colorpicker-topbar edui-clearfix">' +
            '<div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div>' +
            '<div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">'+ noColorText +'</div>' +
            '</div>' +
            '<table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0">' +
            '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;padding-top: 2px"><td colspan="10">'+editor.getLang("themeColor")+'</td> </tr>'+
            '<tr class="edui-colorpicker-tablefirstrow" >';
        for (var i=0; i<COLORS.length; i++) {
            if (i && i%10 === 0) {
                html += '</tr>'+(i==60?'<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#39C;"><td colspan="10">'+editor.getLang("standardColor")+'</td></tr>':'')+'<tr'+(i==60?' class="edui-colorpicker-tablefirstrow"':'')+'>';
            }
            html += i<70 ? '<td style="padding: 0 2px;"><a hidefocus title="'+COLORS[i]+'" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell"' +
                ' data-color="#'+ COLORS[i] +'"'+
                ' style="background-color:#'+ COLORS[i] +';border:solid #ccc;'+
                (i<10 || i>=60?'border-width:1px;':
                    i>=10&&i<20?'border-width:1px 1px 0 1px;':

                        'border-width:0 1px 0 1px;')+
                '"' +
                '></a></td>':'';
        }
        html += '</tr></table></div>';
        return html;
    }
})();

///import core
///import uicore
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;
    
    var TablePicker = baidu.editor.ui.TablePicker = function (options){
        this.initOptions(options);
        this.initTablePicker();
    };
    TablePicker.prototype = {
        defaultNumRows: 10,
        defaultNumCols: 10,
        maxNumRows: 20,
        maxNumCols: 20,
        numRows: 10,
        numCols: 10,
        lengthOfCellSide: 22,
        initTablePicker: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            var me = this;
            return '<div id="##" class="edui-tablepicker %%">' +
                 '<div class="edui-tablepicker-body">' +
                  '<div class="edui-infoarea">' +
                   '<span id="##_label" class="edui-label"></span>' +
                  '</div>' +
                  '<div class="edui-pickarea"' +
                   ' onmousemove="$$._onMouseMove(event, this);"' +
                   ' onmouseover="$$._onMouseOver(event, this);"' +
                   ' onmouseout="$$._onMouseOut(event, this);"' +
                   ' onclick="$$._onClick(event, this);"' +
                  '>' +
                    '<div id="##_overlay" class="edui-overlay"></div>' +
                  '</div>' +
                 '</div>' +
                '</div>';
        },
        _UIBase_render: UIBase.prototype.render,
        render: function (holder){
            this._UIBase_render(holder);
            this.getDom('label').innerHTML = '0'+this.editor.getLang("t_row")+' x 0'+this.editor.getLang("t_col");
        },
        _track: function (numCols, numRows){
            var style = this.getDom('overlay').style;
            var sideLen = this.lengthOfCellSide;
            style.width = numCols * sideLen + 'px';
            style.height = numRows * sideLen + 'px';
            var label = this.getDom('label');
            label.innerHTML = numCols +this.editor.getLang("t_col")+' x ' + numRows + this.editor.getLang("t_row");
            this.numCols = numCols;
            this.numRows = numRows;
        },
        _onMouseOver: function (evt, el){
            var rel = evt.relatedTarget || evt.fromElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = '';
            }
        },
        _onMouseOut: function (evt, el){
            var rel = evt.relatedTarget || evt.toElement;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.getDom('label').innerHTML = '0'+this.editor.getLang("t_col")+' x 0'+this.editor.getLang("t_row");
                this.getDom('overlay').style.visibility = 'hidden';
            }
        },
        _onMouseMove: function (evt, el){
            var style = this.getDom('overlay').style;
            var offset = uiUtils.getEventOffset(evt);
            var sideLen = this.lengthOfCellSide;
            var numCols = Math.ceil(offset.left / sideLen);
            var numRows = Math.ceil(offset.top / sideLen);
            this._track(numCols, numRows);
        },
        _onClick: function (){
            this.fireEvent('picktable', this.numCols, this.numRows);
        }
    };
    utils.inherits(TablePicker, UIBase);
})();

(function (){
    var browser = baidu.editor.browser,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils;
    
    var TPL_STATEFUL = 'onmousedown="$$.Stateful_onMouseDown(event, this);"' +
        ' onmouseup="$$.Stateful_onMouseUp(event, this);"' +
        ( browser.ie ? (
        ' onmouseenter="$$.Stateful_onMouseEnter(event, this);"' +
        ' onmouseleave="$$.Stateful_onMouseLeave(event, this);"' )
        : (
        ' onmouseover="$$.Stateful_onMouseOver(event, this);"' +
        ' onmouseout="$$.Stateful_onMouseOut(event, this);"' ));
    
    baidu.editor.ui.Stateful = {
        alwalysHoverable: false,
        target:null,//目标元素和this指向dom不一样
        Stateful_init: function (){
            this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
            this.getHtmlTpl = this.Stateful_getHtmlTpl;
        },
        Stateful_getHtmlTpl: function (){
            var tpl = this._Stateful_dGetHtmlTpl();
            // 使用function避免$转义
            return tpl.replace(/stateful/g, function (){ return TPL_STATEFUL; });
        },
        Stateful_onMouseEnter: function (evt, el){
            this.target=el;
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.addState('hover');
                this.fireEvent('over');
            }
        },
        Stateful_onMouseLeave: function (evt, el){
            if (!this.isDisabled() || this.alwalysHoverable) {
                this.removeState('hover');
                this.removeState('active');
                this.fireEvent('out');
            }
        },
        Stateful_onMouseOver: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseEnter(evt, el);
            }
        },
        Stateful_onMouseOut: function (evt, el){
            var rel = evt.relatedTarget;
            if (!uiUtils.contains(el, rel) && el !== rel) {
                this.Stateful_onMouseLeave(evt, el);
            }
        },
        Stateful_onMouseDown: function (evt, el){
            if (!this.isDisabled()) {
                this.addState('active');
            }
        },
        Stateful_onMouseUp: function (evt, el){
            if (!this.isDisabled()) {
                this.removeState('active');
            }
        },
        Stateful_postRender: function (){
            if (this.disabled && !this.hasState('disabled')) {
                this.addState('disabled');
            }
        },
        hasState: function (state){
            return domUtils.hasClass(this.getStateDom(), 'edui-state-' + state);
        },
        addState: function (state){
            if (!this.hasState(state)) {
                this.getStateDom().className += ' edui-state-' + state;
            }
        },
        removeState: function (state){
            if (this.hasState(state)) {
                domUtils.removeClasses(this.getStateDom(), ['edui-state-' + state]);
            }
        },
        getStateDom: function (){
            return this.getDom('state');
        },
        isChecked: function (){
            return this.hasState('checked');
        },
        setChecked: function (checked){
            if (!this.isDisabled() && checked) {
                this.addState('checked');
            } else {
                this.removeState('checked');
            }
        },
        isDisabled: function (){
            return this.hasState('disabled');
        },
        setDisabled: function (disabled){
            if (disabled) {
                this.removeState('hover');
                this.removeState('checked');
                this.removeState('active');
                this.addState('disabled');
            } else {
                this.removeState('disabled');
            }
        }
    };
})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        Button = baidu.editor.ui.Button = function (options){
            this.initOptions(options);
            this.initButton();
        };
    Button.prototype = {
        uiName: 'button',
        label: '',
        title: '',
        showIcon: true,
        showText: true,
        initButton: function (){
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div id="##_state" stateful>' +
                 '<div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : '') +
                 ' class="%%-body" onmousedown="return false;" onclick="return $$._onClick();">' +
                  (this.showIcon ? '<div class="edui-box edui-icon"></div>' : '') +
                  (this.showText ? '<div class="edui-box edui-label">' + this.label + '</div>' : '') +
                 '</div>' +
                '</div>' +
                '</div></div>';
        },
        postRender: function (){
            this.Stateful_postRender();
            this.setDisabled(this.disabled)
        },
        _onClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('click');
            }
        }
    };
    utils.inherits(Button, UIBase);
    utils.extend(Button.prototype, Stateful);

})();

///import core
///import uicore
///import ui/stateful.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        domUtils = baidu.editor.dom.domUtils,
        UIBase = baidu.editor.ui.UIBase,
        Stateful = baidu.editor.ui.Stateful,
        SplitButton = baidu.editor.ui.SplitButton = function (options){
            this.initOptions(options);
            this.initSplitButton();
        };
    SplitButton.prototype = {
        popup: null,
        uiName: 'splitbutton',
        title: '',
        initSplitButton: function (){
            this.initUIBase();
            this.Stateful_init();
            var me = this;
            if (this.popup != null) {
                var popup = this.popup;
                this.popup = null;
                this.setPopup(popup);
            }
        },
        _UIBase_postRender: UIBase.prototype.postRender,
        postRender: function (){
            this.Stateful_postRender();
            this._UIBase_postRender();
        },
        setPopup: function (popup){
            if (this.popup === popup) return;
            if (this.popup != null) {
                this.popup.dispose();
            }
            popup.addListener('show', utils.bind(this._onPopupShow, this));
            popup.addListener('hide', utils.bind(this._onPopupHide, this));
            popup.addListener('postrender', utils.bind(function (){
                popup.getDom('body').appendChild(
                    uiUtils.createElementByHtml('<div id="' +
                        this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' +
                        (uiUtils.getClientRect(this.getDom()).width + 20) + 'px"></div>')
                    );
                popup.getDom().className += ' ' + this.className;
            }, this));
            this.popup = popup;
        },
        _onPopupShow: function (){
            this.addState('opened');
        },
        _onPopupHide: function (){
            this.removeState('opened');
        },
        getHtmlTpl: function (){
            return '<div id="##" class="edui-box %%">' +
                '<div '+ (this.title ? 'title="' + this.title + '"' : '') +' id="##_state" stateful><div class="%%-body">' +
                '<div id="##_button_body" class="edui-box edui-button-body" onclick="$$._onButtonClick(event, this);">' +
                '<div class="edui-box edui-icon"></div>' +
                '</div>' +
                '<div class="edui-box edui-splitborder"></div>' +
                '<div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div>' +
                '</div></div></div>';
        },
        showPopup: function (){
            // 当popup往上弹出的时候，做特殊处理
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top -= this.popup.SHADOW_RADIUS;
            rect.height += this.popup.SHADOW_RADIUS;
            this.popup.showAnchorRect(rect);
        },
        _onArrowClick: function (event, el){
            if (!this.isDisabled()) {
                this.showPopup();
            }
        },
        _onButtonClick: function (){
            if (!this.isDisabled()) {
                this.fireEvent('buttonclick');
            }
        }
    };
    utils.inherits(SplitButton, UIBase);
    utils.extend(SplitButton.prototype, Stateful, true);

})();

///import core
///import uicore
///import ui/colorpicker.js
///import ui/popup.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        ColorPicker = baidu.editor.ui.ColorPicker,
        Popup = baidu.editor.ui.Popup,
        SplitButton = baidu.editor.ui.SplitButton,
        ColorButton = baidu.editor.ui.ColorButton = function (options){
            this.initOptions(options);
            this.initColorButton();
        };
    ColorButton.prototype = {
        initColorButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new ColorPicker({
                    noColorText: me.editor.getLang("clearColor"),
                    editor:me.editor,
                    onpickcolor: function (t, color){
                        me._onPickColor(color);
                    },
                    onpicknocolor: function (t, color){
                        me._onPickNoColor(color);
                    }
                }),
                editor:me.editor
            });
            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.getDom('button_body').appendChild(
                uiUtils.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>')
            );
            this.getDom().className += ' edui-colorbutton';
        },
        setColor: function (color){
            this.getDom('colorlump').style.backgroundColor = color;
            this.color = color;
        },
        _onPickColor: function (color){
            if (this.fireEvent('pickcolor', color) !== false) {
                this.setColor(color);
                this.popup.hide();
            }
        },
        _onPickNoColor: function (color){
            if (this.fireEvent('picknocolor') !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(ColorButton, SplitButton);

})();

///import core
///import uicore
///import ui/popup.js
///import ui/tablepicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        TablePicker = baidu.editor.ui.TablePicker,
        SplitButton = baidu.editor.ui.SplitButton,
        TableButton = baidu.editor.ui.TableButton = function (options){
            this.initOptions(options);
            this.initTableButton();
        };
    TableButton.prototype = {
        initTableButton: function (){
            var me = this;
            this.popup = new Popup({
                content: new TablePicker({
                    editor:me.editor,
                    onpicktable: function (t, numCols, numRows){
                        me._onPickTable(numCols, numRows);
                    }
                }),
                'editor':me.editor
            });
            this.initSplitButton();
        },
        _onPickTable: function (numCols, numRows){
            if (this.fireEvent('picktable', numCols, numRows) !== false) {
                this.popup.hide();
            }
        }
    };
    utils.inherits(TableButton, SplitButton);

})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase;

    var AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker = function (options) {
        this.initOptions(options);
        this.initAutoTypeSetPicker();
    };
    AutoTypeSetPicker.prototype = {
        initAutoTypeSetPicker:function () {
            this.initUIBase();
        },
        getHtmlTpl:function () {
            var me = this.editor,
                opt = me.options.autotypeset,
                lang = me.getLang("autoTypeSet");

            var textAlignInputName = 'textAlignValue' + me.uid,
                imageBlockInputName = 'imageBlockLineValue' + me.uid;

            return '<div id="##" class="edui-autotypesetpicker %%">' +
                '<div class="edui-autotypesetpicker-body">' +
                '<table >' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="mergeEmptyline" ' + (opt["mergeEmptyline"] ? "checked" : "" ) + '>' + lang.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (opt["removeEmptyline"] ? "checked" : "" ) + '>' + lang.delLine + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="removeClass" ' + (opt["removeClass"] ? "checked" : "" ) + '>' + lang.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (opt["indent"] ? "checked" : "" ) + '>' + lang.indent + '</td></tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="textAlign" ' + (opt["textAlign"] ? "checked" : "" ) + '>' + lang.alignment + '</td><td colspan="2" id="' + textAlignInputName + '"><input type="radio" name="'+ textAlignInputName +'" value="left" ' + ((opt["textAlign"] && opt["textAlign"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") + '<input type="radio" name="'+ textAlignInputName +'" value="center" ' + ((opt["textAlign"] && opt["textAlign"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") + '<input type="radio" name="'+ textAlignInputName +'" value="right" ' + ((opt["textAlign"] && opt["textAlign"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + ' </tr>' +
                '<tr><td nowrap colspan="2"><input type="checkbox" name="imageBlockLine" ' + (opt["imageBlockLine"] ? "checked" : "" ) + '>' + lang.imageFloat + '</td>' +
                '<td nowrap colspan="2" id="'+ imageBlockInputName +'">' +
                '<input type="radio" name="'+ imageBlockInputName +'" value="none" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "none") ? "checked" : "") + '>' + me.getLang("default") +
                '<input type="radio" name="'+ imageBlockInputName +'" value="left" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "left") ? "checked" : "") + '>' + me.getLang("justifyleft") +
                '<input type="radio" name="'+ imageBlockInputName +'" value="center" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "center") ? "checked" : "") + '>' + me.getLang("justifycenter") +
                '<input type="radio" name="'+ imageBlockInputName +'" value="right" ' + ((opt["imageBlockLine"] && opt["imageBlockLine"] == "right") ? "checked" : "") + '>' + me.getLang("justifyright") + '</tr>' +

                '<tr><td nowrap colspan="2"><input type="checkbox" name="clearFontSize" ' + (opt["clearFontSize"] ? "checked" : "" ) + '>' + lang.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (opt["clearFontFamily"] ? "checked" : "" ) + '>' + lang.removeFontFamily + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="removeEmptyNode" ' + (opt["removeEmptyNode"] ? "checked" : "" ) + '>' + lang.removeHtml + '</td></tr>' +
                '<tr><td nowrap colspan="4"><input type="checkbox" name="pasteFilter" ' + (opt["pasteFilter"] ? "checked" : "" ) + '>' + lang.pasteFilter + '</td></tr>' +
                '<tr><td nowrap colspan="4" align="right"><button >' + lang.run + '</button></td></tr>' +
                '</table>' +
                '</div>' +
                '</div>';


        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(AutoTypeSetPicker, UIBase);
})();

///import core
///import uicore
///import ui/popup.js
///import ui/autotypesetpicker.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        AutoTypeSetPicker = baidu.editor.ui.AutoTypeSetPicker,
        SplitButton = baidu.editor.ui.SplitButton,
        AutoTypeSetButton = baidu.editor.ui.AutoTypeSetButton = function (options){
            this.initOptions(options);
            this.initAutoTypeSetButton();
        };
    function getPara(me){
        var opt = me.editor.options.autotypeset,
            cont = me.getDom(),
            editorId = me.editor.uid,
            inputType = null,
            attrName = null,
            ipts = domUtils.getElementsByTagName(cont,"input");
        for(var i=ipts.length-1,ipt;ipt=ipts[i--];){

            inputType = ipt.getAttribute("type");

            if(inputType=="checkbox"){
                attrName = ipt.getAttribute("name");
                opt[attrName] && delete opt[attrName];
                if(ipt.checked){
                    var attrValue = document.getElementById( attrName+"Value" + editorId );
                    if(attrValue){
                        if(/input/ig.test(attrValue.tagName)){
                            opt[attrName] = attrValue.value;
                        }else{
                            var iptChilds = attrValue.getElementsByTagName("input");
                            for(var j=iptChilds.length-1,iptchild;iptchild=iptChilds[j--];){
                                if(iptchild.checked){
                                    opt[attrName] = iptchild.value;
                                    break;
                                }
                            }
                        }
                    }else{
                        opt[attrName] = true;
                    }
                }
            }
        }
        var selects = domUtils.getElementsByTagName(cont,"select");
        for(var i=0,si;si=selects[i++];){
            var attr = si.getAttribute('name');
            opt[attr] = opt[attr] ? si.value : '';
        }

        me.editor.options.autotypeset = opt;
    }
    AutoTypeSetButton.prototype = {
        initAutoTypeSetButton: function (){
            var me = this;
            this.popup = new Popup({
                //传入配置参数
                content: new AutoTypeSetPicker({editor:me.editor}),
                'editor':me.editor,
                hide : function(){

                    if (!this._hidden && this.getDom()) {
                        getPara(this);
                        this.getDom().style.display = 'none';
                        this._hidden = true;
                        this.fireEvent('hide');
                    }
                }
            });
            var flag = 0;
            this.popup.addListener('postRenderAfter',function(){
                var popupUI = this;
                if(flag)return;
                var cont = this.getDom(),
                    btn = cont.getElementsByTagName('button')[0];

                btn.onclick = function(){
                    getPara(popupUI);
                    me.editor.execCommand('autotypeset');
                    popupUI.hide()
                };
                flag = 1;
            });
            this.initSplitButton();
        }
    };
    utils.inherits(AutoTypeSetButton, SplitButton);

})();

///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        UIBase = baidu.editor.ui.UIBase;

    /**
     * 该参数将新增一个参数： selected， 参数类型为一个Object， 形如{ 'align': 'center', 'valign': 'top' }， 表示单元格的初始
     * 对齐状态为： 竖直居上，水平居中; 其中 align的取值为：'center', 'left', 'right'; valign的取值为: 'top', 'middle', 'bottom'
     * @update 2013/4/2 hancong03@baidu.com
     */
    var CellAlignPicker = baidu.editor.ui.CellAlignPicker = function (options) {
        this.initOptions(options);
        this.initSelected();
        this.initCellAlignPicker();
    };
    CellAlignPicker.prototype = {
        //初始化选中状态， 该方法将根据传递进来的参数获取到应该选中的对齐方式图标的索引
        initSelected: function(){

            var status = {

                valign: {
                    top: 0,
                    middle: 1,
                    bottom: 2
                },
                align: {
                    left: 0,
                    center: 1,
                    right: 2
                },
                count: 3

                },
                result = -1;

            if( this.selected ) {
                this.selectedIndex = status.valign[ this.selected.valign ] * status.count + status.align[ this.selected.align ];
            }

        },
        initCellAlignPicker:function () {
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl:function () {

            var alignType = [ 'left', 'center', 'right' ],
                COUNT = 9,
                tempClassName = null,
                tempIndex = -1,
                tmpl = [];


            for( var i= 0; i<COUNT; i++ ) {

                tempClassName = this.selectedIndex === i ? ' class="edui-cellalign-selected" ' : '';
                tempIndex = i % 3;

                tempIndex === 0 && tmpl.push('<tr>');

                tmpl.push( '<td index="'+ i +'" ' + tempClassName + ' stateful><div class="edui-icon edui-'+ alignType[ tempIndex ] +'"></div></td>' );

                tempIndex === 2 && tmpl.push('</tr>');

            }

            return '<div id="##" class="edui-cellalignpicker %%">' +
                '<div class="edui-cellalignpicker-body">' +
                '<table onclick="$$._onClick(event);">' +
                tmpl.join('') +
                '</table>' +
                '</div>' +
                '</div>';
        },
        getStateDom: function (){
            return this.target;
        },
        _onClick: function (evt){
            var target= evt.target || evt.srcElement;
            if(/icon/.test(target.className)){
                this.items[target.parentNode.getAttribute("index")].onclick();
                Popup.postHide(evt);
            }
        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(CellAlignPicker, UIBase);
    utils.extend(CellAlignPicker.prototype, Stateful,true);
})();




///import core
///import uicore
(function () {
    var utils = baidu.editor.utils,
        Stateful = baidu.editor.ui.Stateful,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase;

    var PastePicker = baidu.editor.ui.PastePicker = function (options) {
        this.initOptions(options);
        this.initPastePicker();
    };
    PastePicker.prototype = {
        initPastePicker:function () {
            this.initUIBase();
            this.Stateful_init();
        },
        getHtmlTpl:function () {
            return '<div class="edui-pasteicon" onclick="$$._onClick(this)"></div>' +
                '<div class="edui-pastecontainer">' +
                '<div class="edui-title">' + this.editor.getLang("pasteOpt") + '</div>' +
                '<div class="edui-button">' +
                '<div title="' + this.editor.getLang("pasteSourceFormat") + '" onclick="$$.format(false)" stateful>' +
                '<div class="edui-richtxticon"></div></div>' +
                '<div title="' + this.editor.getLang("tagFormat") + '" onclick="$$.format(2)" stateful>' +
                '<div class="edui-tagicon"></div></div>' +
                '<div title="' + this.editor.getLang("pasteTextFormat") + '" onclick="$$.format(true)" stateful>' +
                '<div class="edui-plaintxticon"></div></div>' +
                '</div>' +
                '</div>' +
                '</div>'
        },
        getStateDom:function () {
            return this.target;
        },
        format:function (param) {
            this.editor.ui._isTransfer = true;
            this.editor.fireEvent('pasteTransfer', param);
        },
        _onClick:function (cur) {
            var node = domUtils.getNextDomNode(cur),
                screenHt = uiUtils.getViewportRect().height,
                subPop = uiUtils.getClientRect(node);

            if ((subPop.top + subPop.height) > screenHt)
                node.style.top = (-subPop.height - cur.offsetHeight) + "px";
            else
                node.style.top = "";

            if (/hidden/ig.test(domUtils.getComputedStyle(node, "visibility"))) {
                node.style.visibility = "visible";
                domUtils.addClass(cur, "edui-state-opened");
            } else {
                node.style.visibility = "hidden";
                domUtils.removeClasses(cur, "edui-state-opened")
            }
        },
        _UIBase_render:UIBase.prototype.render
    };
    utils.inherits(PastePicker, UIBase);
    utils.extend(PastePicker.prototype, Stateful, true);
})();





(function (){
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Toolbar = baidu.editor.ui.Toolbar = function (options){
            this.initOptions(options);
            this.initToolbar();
        };
    Toolbar.prototype = {
        items: null,
        initToolbar: function (){
            this.items = this.items || [];
            this.initUIBase();
        },
        add: function (item){
            this.items.push(item);
        },
        getHtmlTpl: function (){
            var buff = [];
            for (var i=0; i<this.items.length; i++) {
                buff[i] = this.items[i].renderHtml();
            }
            return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' +
                buff.join('') +
                '</div>'
        },
        postRender: function (){
            var box = this.getDom();
            for (var i=0; i<this.items.length; i++) {
                this.items[i].postRender();
            }
            uiUtils.makeUnselectable(box);
        },
        _onMouseDown: function (){
            return false;
        }
    };
    utils.inherits(Toolbar, UIBase);

})();

///import core
///import uicore
///import ui\popup.js
///import ui\stateful.js
(function () {
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        Popup = baidu.editor.ui.Popup,
        Stateful = baidu.editor.ui.Stateful,
        CellAlignPicker = baidu.editor.ui.CellAlignPicker,

        Menu = baidu.editor.ui.Menu = function (options) {
            this.initOptions(options);
            this.initMenu();
        };

    var menuSeparator = {
        renderHtml:function () {
            return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>';
        },
        postRender:function () {
        },
        queryAutoHide:function () {
            return true;
        }
    };
    Menu.prototype = {
        items:null,
        uiName:'menu',
        initMenu:function () {
            this.items = this.items || [];
            this.initPopup();
            this.initItems();
        },
        initItems:function () {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item == '-') {
                    this.items[i] = this.getSeparator();
                } else if (!(item instanceof MenuItem)) {
                    item.editor = this.editor;
                    item.theme = this.editor.options.theme;
                    this.items[i] = this.createItem(item);
                }
            }
        },
        getSeparator:function () {
            return menuSeparator;
        },
        createItem:function (item) {
            //新增一个参数menu, 该参数存储了menuItem所对应的menu引用
            item.menu = this;
            return new MenuItem(item);
        },
        _Popup_getContentHtmlTpl:Popup.prototype.getContentHtmlTpl,
        getContentHtmlTpl:function () {
            if (this.items.length == 0) {
                return this._Popup_getContentHtmlTpl();
            }
            var buff = [];
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                buff[i] = item.renderHtml();
            }
            return ('<div class="%%-body">' + buff.join('') + '</div>');
        },
        _Popup_postRender:Popup.prototype.postRender,
        postRender:function () {
            var me = this;
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                item.ownerMenu = this;
                item.postRender();
            }
            domUtils.on(this.getDom(), 'mouseover', function (evt) {
                evt = evt || event;
                var rel = evt.relatedTarget || evt.fromElement;
                var el = me.getDom();
                if (!uiUtils.contains(el, rel) && el !== rel) {
                    me.fireEvent('over');
                }
            });
            this._Popup_postRender();
        },
        queryAutoHide:function (el) {
            if (el) {
                if (uiUtils.contains(this.getDom(), el)) {
                    return false;
                }
                for (var i = 0; i < this.items.length; i++) {
                    var item = this.items[i];
                    if (item.queryAutoHide(el) === false) {
                        return false;
                    }
                }
            }
        },
        clearItems:function () {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                clearTimeout(item._showingTimer);
                clearTimeout(item._closingTimer);
                if (item.subMenu) {
                    item.subMenu.destroy();
                }
            }
            this.items = [];
        },
        destroy:function () {
            if (this.getDom()) {
                domUtils.remove(this.getDom());
            }
            this.clearItems();
        },
        dispose:function () {
            this.destroy();
        }
    };
    utils.inherits(Menu, Popup);

    /**
     * @update 2013/04/03 hancong03 新增一个参数menu, 该参数存储了menuItem所对应的menu引用
     * @type {Function}
     */
    var MenuItem = baidu.editor.ui.MenuItem = function (options) {
        this.initOptions(options);
        this.initUIBase();
        this.Stateful_init();
        if (this.subMenu && !(this.subMenu instanceof Menu)) {
            if (options.className && options.className.indexOf("aligntd") != -1) {
                var me = this;

                //获取单元格对齐初始状态
                this.subMenu.selected = this.editor.queryCommandValue( 'cellalignment' );

                this.subMenu = new Popup({
                    content:new CellAlignPicker(this.subMenu),
                    parentMenu:me,
                    editor:me.editor,
                    destroy:function () {
                        if (this.getDom()) {
                            domUtils.remove(this.getDom());
                        }
                    }
                });
                this.subMenu.addListener("postRenderAfter", function () {
                    domUtils.on(this.getDom(), "mouseover", function () {
                        me.addState('opened');
                    });
                });
            } else {
                this.subMenu = new Menu(this.subMenu);
            }
        }
    };
    MenuItem.prototype = {
        label:'',
        subMenu:null,
        ownerMenu:null,
        uiName:'menuitem',
        alwalysHoverable:true,
        getHtmlTpl:function () {
            return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);">' +
                '<div class="%%-body">' +
                this.renderLabelHtml() +
                '</div>' +
                '</div>';
        },
        postRender:function () {
            var me = this;
            this.addListener('over', function () {
                me.ownerMenu.fireEvent('submenuover', me);
                if (me.subMenu) {
                    me.delayShowSubMenu();
                }
            });
            if (this.subMenu) {
                this.getDom().className += ' edui-hassubmenu';
                this.subMenu.render();
                this.addListener('out', function () {
                    me.delayHideSubMenu();
                });
                this.subMenu.addListener('over', function () {
                    clearTimeout(me._closingTimer);
                    me._closingTimer = null;
                    me.addState('opened');
                });
                this.ownerMenu.addListener('hide', function () {
                    me.hideSubMenu();
                });
                this.ownerMenu.addListener('submenuover', function (t, subMenu) {
                    if (subMenu !== me) {
                        me.delayHideSubMenu();
                    }
                });
                this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide;
                this.subMenu.queryAutoHide = function (el) {
                    if (el && uiUtils.contains(me.getDom(), el)) {
                        return false;
                    }
                    return this._bakQueryAutoHide(el);
                };
            }
            this.getDom().style.tabIndex = '-1';
            uiUtils.makeUnselectable(this.getDom());
            this.Stateful_postRender();
        },
        delayShowSubMenu:function () {
            var me = this;
            if (!me.isDisabled()) {
                me.addState('opened');
                clearTimeout(me._showingTimer);
                clearTimeout(me._closingTimer);
                me._closingTimer = null;
                me._showingTimer = setTimeout(function () {
                    me.showSubMenu();
                }, 250);
            }
        },
        delayHideSubMenu:function () {
            var me = this;
            if (!me.isDisabled()) {
                me.removeState('opened');
                clearTimeout(me._showingTimer);
                if (!me._closingTimer) {
                    me._closingTimer = setTimeout(function () {
                        if (!me.hasState('opened')) {
                            me.hideSubMenu();
                        }
                        me._closingTimer = null;
                    }, 400);
                }
            }
        },
        renderLabelHtml:function () {
            return '<div class="edui-arrow"></div>' +
                '<div class="edui-box edui-icon"></div>' +
                '<div class="edui-box edui-label %%-label">' + (this.label || '') + '</div>';
        },
        getStateDom:function () {
            return this.getDom();
        },
        queryAutoHide:function (el) {
            if (this.subMenu && this.hasState('opened')) {
                return this.subMenu.queryAutoHide(el);
            }
        },
        _onClick:function (event, this_) {
            if (this.hasState('disabled')) return;
            if (this.fireEvent('click', event, this_) !== false) {
                if (this.subMenu) {
                    this.showSubMenu();
                } else {
                    Popup.postHide(event);
                }
            }
        },
        showSubMenu:function () {
            var rect = uiUtils.getClientRect(this.getDom());
            rect.right -= 5;
            rect.left += 2;
            rect.width -= 7;
            rect.top -= 4;
            rect.bottom += 4;
            rect.height += 8;
            this.subMenu.showAnchorRect(rect, true, true);
        },
        hideSubMenu:function () {
            this.subMenu.hide();
        }
    };
    utils.inherits(MenuItem, UIBase);
    utils.extend(MenuItem.prototype, Stateful, true);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    // todo: menu和item提成通用list
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        Combox = baidu.editor.ui.Combox = function (options){
            this.initOptions(options);
            this.initCombox();
        };
    Combox.prototype = {
        uiName: 'combox',
        initCombox: function (){
            var me = this;
            this.items = this.items || [];
            for (var i=0; i<this.items.length; i++) {
                var item = this.items[i];
                item.uiName = 'listitem';
                item.index = i;
                item.onclick = function (){
                    me.selectByIndex(this.index);
                };
            }
            this.popup = new Menu({
                items: this.items,
                uiName: 'list',
                editor:this.editor,
                captureWheel: true,
                combox: this
            });

            this.initSplitButton();
        },
        _SplitButton_postRender: SplitButton.prototype.postRender,
        postRender: function (){
            this._SplitButton_postRender();
            this.setLabel(this.label || '');
            this.setValue(this.initValue || '');
        },
        showPopup: function (){
            var rect = uiUtils.getClientRect(this.getDom());
            rect.top += 1;
            rect.bottom -= 1;
            rect.height -= 2;
            this.popup.showAnchorRect(rect);
        },
        getValue: function (){
            return this.value;
        },
        setValue: function (value){
            var index = this.indexByValue(value);
            if (index != -1) {
                this.selectedIndex = index;
                this.setLabel(this.items[index].label);
                this.value = this.items[index].value;
            } else {
                this.selectedIndex = -1;
                this.setLabel(this.getLabelForUnknowValue(value));
                this.value = value;
            }
        },
        setLabel: function (label){
            this.getDom('button_body').innerHTML = label;
            this.label = label;
        },
        getLabelForUnknowValue: function (value){
            return value;
        },
        indexByValue: function (value){
            for (var i=0; i<this.items.length; i++) {
                if (value == this.items[i].value) {
                    return i;
                }
            }
            return -1;
        },
        getItem: function (index){
            return this.items[index];
        },
        selectByIndex: function (index){
            if (index < this.items.length && this.fireEvent('select', index) !== false) {
                this.selectedIndex = index;
                this.value = this.items[index].value;
                this.setLabel(this.items[index].label);
            }
        }
    };
    utils.inherits(Combox, SplitButton);
})();

///import core
///import uicore
///import ui/mask.js
///import ui/button.js
(function (){
    var utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils,
        uiUtils = baidu.editor.ui.uiUtils,
        Mask = baidu.editor.ui.Mask,
        UIBase = baidu.editor.ui.UIBase,
        Button = baidu.editor.ui.Button,
        Dialog = baidu.editor.ui.Dialog = function (options){
            this.initOptions(utils.extend({
                autoReset: true,
                draggable: true,
                onok: function (){},
                oncancel: function (){},
                onclose: function (t, ok){
                    return ok ? this.onok() : this.oncancel();
                },
                //是否控制dialog中的scroll事件， 默认为不阻止
                holdScroll: false
            },options));
            this.initDialog();
        };
    var modalMask;
    var dragMask;
    Dialog.prototype = {
        draggable: false,
        uiName: 'dialog',
        initDialog: function (){
            var me = this,
                theme=this.editor.options.theme;
            this.initUIBase();
            this.modalMask = (modalMask || (modalMask = new Mask({
                className: 'edui-dialog-modalmask',
                theme:theme
            })));
            this.dragMask = (dragMask || (dragMask = new Mask({
                className: 'edui-dialog-dragmask',
                theme:theme
            })));
            this.closeButton = new Button({
                className: 'edui-dialog-closebutton',
                title: me.closeDialog,
                theme:theme,
                onclick: function (){
                    me.close(false);
                }
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    if (!(this.buttons[i] instanceof Button)) {
                        this.buttons[i] = new Button(this.buttons[i]);
                    }
                }
            }
        },
        fitSize: function (){
            var popBodyEl = this.getDom('body');
//            if (!(baidu.editor.browser.ie && baidu.editor.browser.version == 7)) {
//                uiUtils.removeStyle(popBodyEl, 'width');
//                uiUtils.removeStyle(popBodyEl, 'height');
//            }
            var size = this.mesureSize();
            popBodyEl.style.width = size.width + 'px';
            popBodyEl.style.height = size.height + 'px';
            return size;
        },
        safeSetOffset: function (offset){
            var me = this;
            var el = me.getDom();
            var vpRect = uiUtils.getViewportRect();
            var rect = uiUtils.getClientRect(el);
            var left = offset.left;
            if (left + rect.width > vpRect.right) {
                left = vpRect.right - rect.width;
            }
            var top = offset.top;
            if (top + rect.height > vpRect.bottom) {
                top = vpRect.bottom - rect.height;
            }
            el.style.left = Math.max(left, 0) + 'px';
            el.style.top = Math.max(top, 0) + 'px';
        },
        showAtCenter: function (){
            this.getDom().style.display = '';
            var vpRect = uiUtils.getViewportRect();
            var popSize = this.fitSize();
            var titleHeight = this.getDom('titlebar').offsetHeight | 0;
            var left = vpRect.width / 2 - popSize.width / 2;
            var top = vpRect.height / 2 - (popSize.height - titleHeight) / 2 - titleHeight;
            var popEl = this.getDom();
            this.safeSetOffset({
                left: Math.max(left | 0, 0),
                top: Math.max(top | 0, 0)
            });
            if (!domUtils.hasClass(popEl, 'edui-state-centered')) {
                popEl.className += ' edui-state-centered';
            }
            this._show();
        },
        getContentHtml: function (){
            var contentHtml = '';
            if (typeof this.content == 'string') {
                contentHtml = this.content;
            } else if (this.iframeUrl) {
                contentHtml = '<span id="'+ this.id +'_contmask" class="dialogcontmask"></span><iframe id="'+ this.id +
                    '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="'+ this.iframeUrl +'"></iframe>';
            }
            return contentHtml;
        },
        getHtmlTpl: function (){
            var footHtml = '';

            if (this.buttons) {
                var buff = [];
                for (var i=0; i<this.buttons.length; i++) {
                    buff[i] = this.buttons[i].renderHtml();
                }
                footHtml = '<div class="%%-foot">' +
                     '<div id="##_buttons" class="%%-buttons">' + buff.join('') + '</div>' +
                    '</div>';
            }

            return '<div id="##" class="%%"><div class="%%-wrap"><div id="##_body" class="%%-body">' +
                '<div class="%%-shadow"></div>' +
                '<div id="##_titlebar" class="%%-titlebar">' +
                '<div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);">' +
                 '<span class="%%-caption">' + (this.title || '') + '</span>' +
                '</div>' +
                this.closeButton.renderHtml() +
                '</div>' +
                '<div id="##_content" class="%%-content">'+ ( this.autoReset ? '' : this.getContentHtml()) +'</div>' +
                footHtml +
                '</div></div></div>';
        },
        postRender: function (){
            // todo: 保持居中/记住上次关闭位置选项
            if (!this.modalMask.getDom()) {
                this.modalMask.render();
                this.modalMask.hide();
            }
            if (!this.dragMask.getDom()) {
                this.dragMask.render();
                this.dragMask.hide();
            }
            var me = this;
            this.addListener('show', function (){
                me.modalMask.show(this.getDom().style.zIndex - 2);
            });
            this.addListener('hide', function (){
                me.modalMask.hide();
            });
            if (this.buttons) {
                for (var i=0; i<this.buttons.length; i++) {
                    this.buttons[i].postRender();
                }
            }
            domUtils.on(window, 'resize', function (){
                setTimeout(function (){
                    if (!me.isHidden()) {
                        me.safeSetOffset(uiUtils.getClientRect(me.getDom()));
                    }
                });
            });

            //hold住scroll事件，防止dialog的滚动影响页面
            if( this.holdScroll ) {

                if( !me.iframeUrl ) {
                    domUtils.on( document.getElementById( me.id + "_iframe"), !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
                        domUtils.preventDefault(e);
                    } );
                } else {
                    me.addListener('dialogafterreset', function(){
                        window.setTimeout(function(){
                            var iframeWindow = document.getElementById( me.id + "_iframe").contentWindow;

                            if( browser.ie ) {

                                var timer = window.setInterval(function(){

                                    if( iframeWindow.document && iframeWindow.document.body ) {
                                        window.clearInterval( timer );
                                        timer = null;
                                        domUtils.on( iframeWindow.document.body, !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
                                            domUtils.preventDefault(e);
                                        } );
                                    }

                                }, 100);

                            } else {
                                domUtils.on( iframeWindow, !browser.gecko ? "mousewheel" : "DOMMouseScroll", function(e){
                                    domUtils.preventDefault(e);
                                } );
                            }

                        }, 1);
                    });
                }

            }
            this._hide();
        },
        mesureSize: function (){
            var body = this.getDom('body');
            var width = uiUtils.getClientRect(this.getDom('content')).width;
            var dialogBodyStyle = body.style;
            dialogBodyStyle.width = width;
            return uiUtils.getClientRect(body);
        },
        _onTitlebarMouseDown: function (evt, el){
            if (this.draggable) {
                var rect;
                var vpRect = uiUtils.getViewportRect();
                var me = this;
                uiUtils.startDrag(evt, {
                    ondragstart: function (){
                        rect = uiUtils.getClientRect(me.getDom());
                        me.getDom('contmask').style.visibility = 'visible';
                        me.dragMask.show(me.getDom().style.zIndex - 1);
                    },
                    ondragmove: function (x, y){
                        var left = rect.left + x;
                        var top = rect.top + y;
                        me.safeSetOffset({
                            left: left,
                            top: top
                        });
                    },
                    ondragstop: function (){
                        me.getDom('contmask').style.visibility = 'hidden';
                        domUtils.removeClasses(me.getDom(), ['edui-state-centered']);
                        me.dragMask.hide();
                    }
                });
            }
        },
        reset: function (){
            this.getDom('content').innerHTML = this.getContentHtml();
            this.fireEvent('dialogafterreset');
        },
        _show: function (){
            if (this._hidden) {
                this.getDom().style.display = '';

                //要高过编辑器的zindxe
                this.editor.container.style.zIndex && (this.getDom().style.zIndex = this.editor.container.style.zIndex * 1 + 10);
                this._hidden = false;
                this.fireEvent('show');
                baidu.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4;
            }
        },
        isHidden: function (){
            return this._hidden;
        },
        _hide: function (){
            if (!this._hidden) {
                this.getDom().style.display = 'none';
                this.getDom().style.zIndex = '';
                this._hidden = true;
                this.fireEvent('hide');
            }
        },
        open: function (){
            if (this.autoReset) {
                //有可能还没有渲染
                try{
                    this.reset();
                }catch(e){
                    this.render();
                    this.open()
                }
            }
            this.showAtCenter();
            if (this.iframeUrl) {
                try {
                    this.getDom('iframe').focus();
                } catch(ex){}
            }
        },
        _onCloseButtonClick: function (evt, el){
            this.close(false);
        },
        close: function (ok){
            if (this.fireEvent('close', ok) !== false) {
                this._hide();
            }
        }
    };
    utils.inherits(Dialog, UIBase);
})();

///import core
///import uicore
///import ui/menu.js
///import ui/splitbutton.js
(function (){
    var utils = baidu.editor.utils,
        Menu = baidu.editor.ui.Menu,
        SplitButton = baidu.editor.ui.SplitButton,
        MenuButton = baidu.editor.ui.MenuButton = function (options){
            this.initOptions(options);
            this.initMenuButton();
        };
    MenuButton.prototype = {
        initMenuButton: function (){
            var me = this;
            this.uiName = "menubutton";
            this.popup = new Menu({
                items: me.items,
                className: me.className,
                editor:me.editor
            });
            this.popup.addListener('show', function (){
                var list = this;
                for (var i=0; i<list.items.length; i++) {
                    list.items[i].removeState('checked');
                    if (list.items[i].value == me._value) {
                        list.items[i].addState('checked');
                        this.value = me._value;
                    }
                }
            });
            this.initSplitButton();
        },
        setValue : function(value){
            this._value = value;
        }
        
    };
    utils.inherits(MenuButton, SplitButton);
})();
//ui跟编辑器的适配層
//那个按钮弹出是dialog，是下拉筐等都是在这个js中配置
//自己写的ui也要在这里配置，放到baidu.editor.ui下边，当编辑器实例化的时候会根据ueditor.config中的toolbars找到相应的进行实例化
(function () {
    var utils = baidu.editor.utils;
    var editorui = baidu.editor.ui;
    var _Dialog = editorui.Dialog;
    editorui.buttons = {};

    editorui.Dialog = function (options) {
        var dialog = new _Dialog(options);
        dialog.addListener('hide', function () {

            if (dialog.editor) {
                var editor = dialog.editor;
                try {
                    if (browser.gecko) {
                        var y = editor.window.scrollY,
                            x = editor.window.scrollX;
                        editor.body.focus();
                        editor.window.scrollTo(x, y);
                    } else {
                        editor.focus();
                    }


                } catch (ex) {
                }
            }
        });
        return dialog;
    };

    var iframeUrlMap = {
        'anchor':'~/dialogs/anchor/anchor.html',
        'insertimage':'~/dialogs/image/image.html',
        'link':'~/dialogs/link/link.html',
        'spechars':'~/dialogs/spechars/spechars.html',
        'searchreplace':'~/dialogs/searchreplace/searchreplace.html',
        'map':'~/dialogs/map/map.html',
        'gmap':'~/dialogs/gmap/gmap.html',
        'insertvideo':'~/dialogs/video/video.html',
        'help':'~/dialogs/help/help.html',
       //'highlightcode':'~/dialogs/highlightcode/highlightcode.html',
        'emotion':'~/dialogs/emotion/emotion.html',
        'wordimage':'~/dialogs/wordimage/wordimage.html',
        'attachment':'~/dialogs/attachment/attachment.html',
        'insertframe':'~/dialogs/insertframe/insertframe.html',
        'edittip':'~/dialogs/table/edittip.html',
        'edittable':'~/dialogs/table/edittable.html',
        'edittd':'~/dialogs/table/edittd.html',
        'webapp':'~/dialogs/webapp/webapp.html',
        'snapscreen':'~/dialogs/snapscreen/snapscreen.html',
        'scrawl':'~/dialogs/scrawl/scrawl.html',
        'music':'~/dialogs/music/music.html',
        'template':'~/dialogs/template/template.html',
        'background':'~/dialogs/background/background.html',
        'formula':'~/dialogs/formula/formula.html'
    };
    //为工具栏添加按钮，以下都是统一的按钮触发命令，所以写在一起
    var btnCmds = ['undo', 'redo', 'formatmatch',
        'bold', 'italic', 'underline', 'fontborder', 'touppercase', 'tolowercase',
        'strikethrough', 'subscript', 'superscript', 'source', 'indent', 'outdent',
        'blockquote', 'pasteplain', 'pagebreak',
        'selectall', 'print', 'preview', 'horizontal', 'removeformat', 'time', 'date', 'unlink',
        'insertparagraphbeforetable', 'insertrow', 'insertcol', 'mergeright', 'mergedown', 'deleterow',
        'deletecol', 'splittorows', 'splittocols', 'splittocells', 'mergecells', 'deletetable','formula'];

    for (var i = 0, ci; ci = btnCmds[i++];) {
        ci = ci.toLowerCase();
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.Button({
                    className:'edui-for-' + cmd,
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    onclick:function () {
                        editor.execCommand(cmd);
                    },
                    theme:editor.options.theme,
                    showText:false
                });
                editorui.buttons[cmd] = ui;
                editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                        ui.setChecked(false);
                    } else {
                        if (!uiReady) {
                            ui.setDisabled(false);
                            ui.setChecked(state);
                        }
                    }
                });
                return ui;
            };
        }(ci);
    }

    //清除文档
    editorui.cleardoc = function (editor) {
        var ui = new editorui.Button({
            className:'edui-for-cleardoc',
            title:editor.options.labelMap.cleardoc || editor.getLang("labelMap.cleardoc") || '',
            theme:editor.options.theme,
            onclick:function () {
                if (confirm(editor.getLang("confirmClear"))) {
                    editor.execCommand('cleardoc');
                }
            }
        });
        editorui.buttons["cleardoc"] = ui;
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('cleardoc') == -1);
        });
        return ui;
    };

    //排版，图片排版，文字方向
    var typeset = {
        'justify':['left', 'right', 'center', 'justify'],
        'imagefloat':['none', 'left', 'center', 'right'],
        'directionality':['ltr', 'rtl']
    };

    for (var p in typeset) {

        (function (cmd, val) {
            for (var i = 0, ci; ci = val[i++];) {
                (function (cmd2) {
                    editorui[cmd.replace('float', '') + cmd2] = function (editor) {
                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd.replace('float', '') + cmd2,
                            title:editor.options.labelMap[cmd.replace('float', '') + cmd2] || editor.getLang("labelMap." + cmd.replace('float', '') + cmd2) || '',
                            theme:editor.options.theme,
                            onclick:function () {
                                editor.execCommand(cmd, cmd2);
                            }
                        });
                        editorui.buttons[cmd] = ui;
                        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
                            ui.setDisabled(editor.queryCommandState(cmd) == -1);
                            ui.setChecked(editor.queryCommandValue(cmd) == cmd2 && !uiReady);
                        });
                        return ui;
                    };
                })(ci)
            }
        })(p, typeset[p])
    }

    //字体颜色和背景颜色
    for (var i = 0, ci; ci = ['backcolor', 'forecolor'][i++];) {
        editorui[ci] = function (cmd) {
            return function (editor) {
                var ui = new editorui.ColorButton({
                    className:'edui-for-' + cmd,
                    color:'default',
                    title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '',
                    editor:editor,
                    onpickcolor:function (t, color) {
                        editor.execCommand(cmd, color);
                    },
                    onpicknocolor:function () {
                        editor.execCommand(cmd, 'default');
                        this.setColor('transparent');
                        this.color = 'default';
                    },
                    onbuttonclick:function () {
                        editor.execCommand(cmd, this.color);
                    }
                });
                editorui.buttons[cmd] = ui;
                editor.addListener('selectionchange', function () {
                    ui.setDisabled(editor.queryCommandState(cmd) == -1);
                });
                return ui;
            };
        }(ci);
    }


    var dialogBtns = {
        noOk:['searchreplace', 'help', 'spechars', 'webapp'],
        ok:['attachment', 'anchor', 'link', 'insertimage', 'map', 'gmap', 'insertframe', 'wordimage',
            'insertvideo', 'insertframe', 'edittip', 'edittable', 'edittd', 'scrawl', 'template', 'music', 'background','formula']

    };

    for (var p in dialogBtns) {
        (function (type, vals) {
            for (var i = 0, ci; ci = vals[i++];) {
                //todo opera下存在问题
                if (browser.opera && ci === "searchreplace") {
                    continue;
                }
                (function (cmd) {
                    editorui[cmd] = function (editor, iframeUrl, title) {
                        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd];
                        title = editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd) || '';

                        var dialog;
                        //没有iframeUrl不创建dialog
                        if (iframeUrl) {
                            dialog = new editorui.Dialog(utils.extend({
                                iframeUrl:editor.ui.mapUrl(iframeUrl),
                                editor:editor,
                                className:'edui-for-' + cmd,
                                title:title,
                                holdScroll: cmd === 'insertimage',
                                closeDialog:editor.getLang("closeDialog")
                            }, type == 'ok' ? {
                                buttons:[
                                    {
                                        className:'edui-okbutton',
                                        label:editor.getLang("ok"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(true);
                                        }
                                    },
                                    {
                                        className:'edui-cancelbutton',
                                        label:editor.getLang("cancel"),
                                        editor:editor,
                                        onclick:function () {
                                            dialog.close(false);
                                        }
                                    }
                                ]
                            } : {}));

                            editor.ui._dialogs[cmd + "Dialog"] = dialog;
                        }

                        var ui = new editorui.Button({
                            className:'edui-for-' + cmd,
                            title:title,
                            onclick:function () {
                                if (dialog) {
                                    switch (cmd) {
                                        case "wordimage":
                                            editor.execCommand("wordimage", "word_img");
                                            if (editor.word_img) {
                                                dialog.render();
                                                dialog.open();
                                            }
                                            break;
                                        case "scrawl":
                                            if (editor.queryCommandState("scrawl") != -1) {
                                                dialog.render();
                                                dialog.open();
                                            }

                                            break;
                                        default:
                                            dialog.render();
                                            dialog.open();
                                    }
                                }
                            },
                            theme:editor.options.theme,
                            disabled:cmd == 'scrawl' && editor.queryCommandState("scrawl") == -1
                        });
                        editorui.buttons[cmd] = ui;
                        editor.addListener('selectionchange', function () {
                            //只存在于右键菜单而无工具栏按钮的ui不需要检测状态
                            var unNeedCheckState = {'edittable':1};
                            if (cmd in unNeedCheckState)return;

                            var state = editor.queryCommandState(cmd);
                            if (ui.getDom()) {
                                ui.setDisabled(state == -1);
                                ui.setChecked(state);
                            }

                        });

                        return ui;
                    };
                })(ci.toLowerCase())
            }
        })(p, dialogBtns[p])
    }

    editorui.snapscreen = function (editor, iframeUrl, title) {
        title = editor.options.labelMap['snapscreen'] || editor.getLang("labelMap.snapscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-snapscreen',
            title:title,
            onclick:function () {
                editor.execCommand("snapscreen");
            },
            theme:editor.options.theme

        });
        editorui.buttons['snapscreen'] = ui;
        iframeUrl = iframeUrl || (editor.options.iframeUrlMap || {})["snapscreen"] || iframeUrlMap["snapscreen"];
        if (iframeUrl) {
            var dialog = new editorui.Dialog({
                iframeUrl:editor.ui.mapUrl(iframeUrl),
                editor:editor,
                className:'edui-for-snapscreen',
                title:title,
                buttons:[
                    {
                        className:'edui-okbutton',
                        label:editor.getLang("ok"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(true);
                        }
                    },
                    {
                        className:'edui-cancelbutton',
                        label:editor.getLang("cancel"),
                        editor:editor,
                        onclick:function () {
                            dialog.close(false);
                        }
                    }
                ]

            });
            dialog.render();
            editor.ui._dialogs["snapscreenDialog"] = dialog;
        }
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('snapscreen') == -1);
        });
        return ui;
    };

    editorui.insertcode = function (editor, list, title) {
        list = editor.options['insertcode'] || [];
        title = editor.options.labelMap['insertcode'] || editor.getLang("labelMap.insertcode") || '';
       // if (!list.length) return;
        var items = [];
        utils.each(list,function(key,val){
            items.push({
                label:key,
                value:val,
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label" >' + (this.label || '') + '</div>';
                }
            });
        });

        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            onselect:function (t, index) {
                editor.execCommand('insertcode', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            title:title,
            initValue:title,
            className:'edui-for-insertcode',
            indexByValue:function (value) {
                if (value) {
                    for (var i = 0, ci; ci = this.items[i]; i++) {
                        if (ci.value.indexOf(value) != -1)
                            return i;
                    }
                }

                return -1;
            }
        });
        editorui.buttons['insertcode'] = ui;
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('insertcode');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('insertcode');
                    if(!value){
                        ui.setValue(title);
                        return;
                    }
                    //trace:1871 ie下从源码模式切换回来时，字体会带单引号，而且会有逗号
                    value && (value = value.replace(/['"]/g, '').split(',')[0]);
                    ui.setValue(value);

                }
            }

        });
        return ui;
    };
    editorui.fontfamily = function (editor, list, title) {

        list = editor.options['fontfamily'] || [];
        title = editor.options.labelMap['fontfamily'] || editor.getLang("labelMap.fontfamily") || '';
        if (!list.length) return;
        for (var i = 0, ci, items = []; ci = list[i]; i++) {
            var langLabel = editor.getLang('fontfamily')[ci.name] || "";
            (function (key, val) {
                items.push({
                    label:key,
                    value:val,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label" style="font-family:' +
                            utils.unhtml(this.value) + '">' + (this.label || '') + '</div>';
                    }
                });
            })(ci.label || langLabel, ci.val)
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            onselect:function (t, index) {
                editor.execCommand('FontFamily', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            title:title,
            initValue:title,
            className:'edui-for-fontfamily',
            indexByValue:function (value) {
                if (value) {
                    for (var i = 0, ci; ci = this.items[i]; i++) {
                        if (ci.value.indexOf(value) != -1)
                            return i;
                    }
                }

                return -1;
            }
        });
        editorui.buttons['fontfamily'] = ui;
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontFamily');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('FontFamily');
                    //trace:1871 ie下从源码模式切换回来时，字体会带单引号，而且会有逗号
                    value && (value = value.replace(/['"]/g, '').split(',')[0]);
                    ui.setValue(value);

                }
            }

        });
        return ui;
    };

    editorui.fontsize = function (editor, list, title) {
        title = editor.options.labelMap['fontsize'] || editor.getLang("labelMap.fontsize") || '';
        list = list || editor.options['fontsize'] || [];
        if (!list.length) return;
        var items = [];
        for (var i = 0; i < list.length; i++) {
            var size = list[i] + 'px';
            items.push({
                label:size,
                value:size,
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label" style="line-height:1;font-size:' +
                        this.value + '">' + (this.label || '') + '</div>';
                }
            });
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            onselect:function (t, index) {
                editor.execCommand('FontSize', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            className:'edui-for-fontsize'
        });
        editorui.buttons['fontsize'] = ui;
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('FontSize');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    ui.setValue(editor.queryCommandValue('FontSize'));
                }
            }

        });
        return ui;
    };

    editorui.paragraph = function (editor, list, title) {
        title = editor.options.labelMap['paragraph'] || editor.getLang("labelMap.paragraph") || '';
        list = editor.options['paragraph'] || [];
        if (utils.isEmptyObject(list)) return;
        var items = [];
        for (var i in list) {
            items.push({
                value:i,
                label:list[i] || editor.getLang("paragraph")[i],
                theme:editor.options.theme,
                renderLabelHtml:function () {
                    return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || '') + '</span></div>';
                }
            })
        }
        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-paragraph',
            onselect:function (t, index) {
                editor.execCommand('Paragraph', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            }
        });
        editorui.buttons['paragraph'] = ui;
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('Paragraph');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('Paragraph');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };


    //自定义标题
    editorui.customstyle = function (editor) {
        var list = editor.options['customstyle'] || [],
            title = editor.options.labelMap['customstyle'] || editor.getLang("labelMap.customstyle") || '';
        if (!list.length)return;
        var langCs = editor.getLang('customstyle');
        for (var i = 0, items = [], t; t = list[i++];) {
            (function (t) {
                var ck = {};
                ck.label = t.label ? t.label : langCs[t.name];
                ck.style = t.style;
                ck.className = t.className;
                ck.tag = t.tag;
                items.push({
                    label:ck.label,
                    value:ck,
                    theme:editor.options.theme,
                    renderLabelHtml:function () {
                        return '<div class="edui-label %%-label">' + '<' + ck.tag + ' ' + (ck.className ? ' class="' + ck.className + '"' : "")
                            + (ck.style ? ' style="' + ck.style + '"' : "") + '>' + ck.label + "<\/" + ck.tag + ">"
                            + '</div>';
                    }
                });
            })(t);
        }

        var ui = new editorui.Combox({
            editor:editor,
            items:items,
            title:title,
            initValue:title,
            className:'edui-for-customstyle',
            onselect:function (t, index) {
                editor.execCommand('customstyle', this.items[index].value);
            },
            onbuttonclick:function () {
                this.showPopup();
            },
            indexByValue:function (value) {
                for (var i = 0, ti; ti = this.items[i++];) {
                    if (ti.label == value) {
                        return i - 1
                    }
                }
                return -1;
            }
        });
        editorui.buttons['customstyle'] = ui;
        editor.addListener('selectionchange', function (type, causeByUi, uiReady) {
            if (!uiReady) {
                var state = editor.queryCommandState('customstyle');
                if (state == -1) {
                    ui.setDisabled(true);
                } else {
                    ui.setDisabled(false);
                    var value = editor.queryCommandValue('customstyle');
                    var index = ui.indexByValue(value);
                    if (index != -1) {
                        ui.setValue(value);
                    } else {
                        ui.setValue(ui.initValue);
                    }
                }
            }

        });
        return ui;
    };
    editorui.inserttable = function (editor, iframeUrl, title) {
        title = editor.options.labelMap['inserttable'] || editor.getLang("labelMap.inserttable") || '';
        var ui = new editorui.TableButton({
            editor:editor,
            title:title,
            className:'edui-for-inserttable',
            onpicktable:function (t, numCols, numRows) {
                editor.execCommand('InsertTable', {numRows:numRows, numCols:numCols, border:1});
            },
            onbuttonclick:function () {
                this.showPopup();
            }
        });
        editorui.buttons['inserttable'] = ui;
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('inserttable') == -1);
        });
        return ui;
    };

    editorui.lineheight = function (editor) {
        var val = editor.options.lineheight || [];
        if (!val.length)return;
        for (var i = 0, ci, items = []; ci = val[i++];) {
            items.push({
                //todo:写死了
                label:ci,
                value:ci,
                theme:editor.options.theme,
                onclick:function () {
                    editor.execCommand("lineheight", this.value);
                }
            })
        }
        var ui = new editorui.MenuButton({
            editor:editor,
            className:'edui-for-lineheight',
            title:editor.options.labelMap['lineheight'] || editor.getLang("labelMap.lineheight") || '',
            items:items,
            onbuttonclick:function () {
                var value = editor.queryCommandValue('LineHeight') || this.value;
                editor.execCommand("LineHeight", value);
            }
        });
        editorui.buttons['lineheight'] = ui;
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('LineHeight');
            if (state == -1) {
                ui.setDisabled(true);
            } else {
                ui.setDisabled(false);
                var value = editor.queryCommandValue('LineHeight');
                value && ui.setValue((value + '').replace(/cm/, ''));
                ui.setChecked(state)
            }
        });
        return ui;
    };

    var rowspacings = ['top', 'bottom'];
    for (var r = 0, ri; ri = rowspacings[r++];) {
        (function (cmd) {
            editorui['rowspacing' + cmd] = function (editor) {
                var val = editor.options['rowspacing' + cmd] || [];
                if (!val.length) return null;
                for (var i = 0, ci, items = []; ci = val[i++];) {
                    items.push({
                        label:ci,
                        value:ci,
                        theme:editor.options.theme,
                        onclick:function () {
                            editor.execCommand("rowspacing", this.value, cmd);
                        }
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-rowspacing' + cmd,
                    title:editor.options.labelMap['rowspacing' + cmd] || editor.getLang("labelMap.rowspacing" + cmd) || '',
                    items:items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue('rowspacing', cmd) || this.value;
                        editor.execCommand("rowspacing", value, cmd);
                    }
                });
                editorui.buttons[cmd] = ui;
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState('rowspacing', cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue('rowspacing', cmd);
                        value && ui.setValue((value + '').replace(/%/, ''));
                        ui.setChecked(state)
                    }
                });
                return ui;
            }
        })(ri)
    }
    //有序，无序列表
    var lists = ['insertorderedlist', 'insertunorderedlist'];
    for (var l = 0, cl; cl = lists[l++];) {
        (function (cmd) {
            editorui[cmd] = function (editor) {
                var vals = editor.options[cmd],
                    _onMenuClick = function () {
                        editor.execCommand(cmd, this.value);
                    }, items = [];
                for (var i in vals) {
                    items.push({
                        label:vals[i] || editor.getLang()[cmd][i] || "",
                        value:i,
                        theme:editor.options.theme,
                        onclick:_onMenuClick
                    })
                }
                var ui = new editorui.MenuButton({
                    editor:editor,
                    className:'edui-for-' + cmd,
                    title:editor.getLang("labelMap." + cmd) || '',
                    'items':items,
                    onbuttonclick:function () {
                        var value = editor.queryCommandValue(cmd) || this.value;
                        editor.execCommand(cmd, value);
                    }
                });
                editorui.buttons[cmd] = ui;
                editor.addListener('selectionchange', function () {
                    var state = editor.queryCommandState(cmd);
                    if (state == -1) {
                        ui.setDisabled(true);
                    } else {
                        ui.setDisabled(false);
                        var value = editor.queryCommandValue(cmd);
                        ui.setValue(value);
                        ui.setChecked(state)
                    }
                });
                return ui;
            };
        })(cl)
    }

    editorui.fullscreen = function (editor, title) {
        title = editor.options.labelMap['fullscreen'] || editor.getLang("labelMap.fullscreen") || '';
        var ui = new editorui.Button({
            className:'edui-for-fullscreen',
            title:title,
            theme:editor.options.theme,
            onclick:function () {
                if (editor.ui) {
                    editor.ui.setFullScreen(!editor.ui.isFullScreen());
                }
                this.setChecked(editor.ui.isFullScreen());
            }
        });
        editorui.buttons['fullscreen'] = ui;
        editor.addListener('selectionchange', function () {
            var state = editor.queryCommandState('fullscreen');
            ui.setDisabled(state == -1);
            ui.setChecked(editor.ui.isFullScreen());
        });
        return ui;
    };

    // 表情
    editorui["emotion"] = function (editor, iframeUrl) {
        var cmd = "emotion";
        var ui = new editorui.MultiMenuPop({
            title:editor.options.labelMap[cmd] || editor.getLang("labelMap." + cmd + "") || '',
            editor:editor,
            className:'edui-for-' + cmd,
            iframeUrl:editor.ui.mapUrl(iframeUrl || (editor.options.iframeUrlMap || {})[cmd] || iframeUrlMap[cmd])
        });
        editorui.buttons[cmd] = ui;

        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState(cmd) == -1)
        });
        return ui;
    };

    editorui.autotypeset = function (editor) {
        var ui = new editorui.AutoTypeSetButton({
            editor:editor,
            title:editor.options.labelMap['autotypeset'] || editor.getLang("labelMap.autotypeset") || '',
            className:'edui-for-autotypeset',
            onbuttonclick:function () {
                editor.execCommand('autotypeset')
            }
        });
        editorui.buttons['autotypeset'] = ui;
        editor.addListener('selectionchange', function () {
            ui.setDisabled(editor.queryCommandState('autotypeset') == -1);
        });
        return ui;
    };

})();

///import core
///commands 全屏
///commandsName FullScreen
///commandsTitle  全屏
(function () {
    var utils = baidu.editor.utils,
        uiUtils = baidu.editor.ui.uiUtils,
        UIBase = baidu.editor.ui.UIBase,
        domUtils = baidu.editor.dom.domUtils;
    var nodeStack = [];

    function EditorUI(options) {
        this.initOptions(options);
        this.initEditorUI();
    }

    EditorUI.prototype = {
        uiName:'editor',
        initEditorUI:function () {
            this.editor.ui = this;
            this._dialogs = {};
            this.initUIBase();
            this._initToolbars();
            var editor = this.editor,
                me = this;

            editor.addListener('ready', function () {
                //提供getDialog方法
                editor.getDialog = function (name) {
                    return editor.ui._dialogs[name + "Dialog"];
                };
                domUtils.on(editor.window, 'scroll', function (evt) {
                    baidu.editor.ui.Popup.postHide(evt);
                });
                //提供编辑器实时宽高(全屏时宽高不变化)
                editor.ui._actualFrameWidth = editor.options.initialFrameWidth;

                //display bottom-bar label based on config
                if (editor.options.elementPathEnabled) {
                    editor.ui.getDom('elementpath').innerHTML = '<div class="edui-editor-breadcrumb">' + editor.getLang("elementPathTip") + ':</div>';
                }
                if (editor.options.wordCount) {
                    function countFn() {
                        setCount(editor,me);
                        domUtils.un(editor.document, "click", arguments.callee);
                    }
                    domUtils.on(editor.document, "click", countFn);
                    editor.ui.getDom('wordcount').innerHTML = editor.getLang("wordCountTip");
                }
                editor.ui._scale();
                if (editor.options.scaleEnabled) {
                    if (editor.autoHeightEnabled) {
                        editor.disableAutoHeight();
                    }
                    me.enableScale();
                } else {
                    me.disableScale();
                }
                if (!editor.options.elementPathEnabled && !editor.options.wordCount && !editor.options.scaleEnabled) {
                    editor.ui.getDom('elementpath').style.display = "none";
                    editor.ui.getDom('wordcount').style.display = "none";
                    editor.ui.getDom('scale').style.display = "none";
                }

                if (!editor.selection.isFocus())return;
                editor.fireEvent('selectionchange', false, true);


            });
/**
 * @author bh-lay
 * 
 * bind some event
 */

(function(){
	//formula tool panel
	function formula_tool(global,callFn){
		var tool_tpl = ['<div class="formula_tool">',
			'<a class="for_to_edit" title="编辑" href="javascript:void(0)"></a>',
			'<a class="for_to_del" title="删除" href="javascript:void(0)">×</a>',
		'</div>'].join('');
		var style = ['<style>',
			'.formula_tool{border:2px solid #f60;position:absolute;z-index:10000;}',
			'.for_to_edit{position:absolute;top:0px;left:0px;width:100%;height:100%;}',
			'.for_to_del{position:absolute;top:0px;right:0px;width:12px;height:12px;line-height:12px;text-align:center;background:#f60;font-size:12px;color:#fff;text-decoration:none;}',
			'.for_to_del:hover{color:#c00}',
		'</style>'].join('');
		
		var callFn = callFn||{},
			 editFn = callFn.edit||null,
			 delFn = callFn.del||null;
		var for_tool = $(tool_tpl).hide();
		
		for_tool.on('mouseleave',function(){
			close()
		}).on('click','.for_to_edit',function(){
			editFn&&editFn();
			editor.ui._dialogs.formulaDialog.open();
			close();
		}).on('click','.for_to_del',function(){
			delFn&&delFn();
			close();
		});
		
		global.find('body').append(for_tool);
		global.find('head').append(style);
		
		function close(){
			for_tool.hide();
		}
		function show(css){
			for_tool.css(css).show();
		}
		return {
			close : close,
			show : show,
			dom : for_tool
		}
	}
//main method
	function init(){
		var global = $(document); 
		var this_iframe = $(editor.iframe);
		var doc = $(editor.document);
		
		var this_formula = null;
		
		var tool = formula_tool(global,{'edit':function(){
			doc.find('.formula_cnt').removeClass('formula_cnt_active');
			this_formula.addClass('formula_cnt_active');
		},'del':function(){
			this_formula.remove();
		}});
		
			
		doc.on('mouseenter','.formula_cnt',function(){
			
			this_formula = $(this)
			var top = this_formula.offset().top + this_iframe.offset().top;
			var left = this_formula.offset().left + this_iframe.offset().left;
			tool.show({
				width:(this_formula.width()+20),
				height:(this_formula.height()+10),
				top:(top-2),
				left:(left-2)
			});
		});
	}
	
//start check iframe create
	$(function(){
		//console.log('bind','start');
		var timer = setInterval(function(){
		//	console.log('bind','try to bind event !');
			if(editor.document){
				clearInterval(timer);
				init();
			}
		},2);
	});
})();
/*
	
	
*/
            editor.addListener('mousedown', function (t, evt) {
                var el = evt.target || evt.srcElement;
                baidu.editor.ui.Popup.postHide(evt, el);
                baidu.editor.ui.ShortCutMenu.postHide(evt);
            });
            editor.addListener("delcells", function () {
                if (UE.ui['edittip']) {
                    new UE.ui['edittip'](editor);
                }
                editor.getDialog('edittip').open();
            });

            var pastePop, isPaste = false, timer;
            editor.addListener("afterpaste", function () {
                if(editor.queryCommandState('pasteplain'))
                    return;
                if(baidu.editor.ui.PastePicker){
                    pastePop = new baidu.editor.ui.Popup({
                        content:new baidu.editor.ui.PastePicker({editor:editor}),
                        editor:editor,
                        className:'edui-wordpastepop'
                    });
                    pastePop.render();
                }
                isPaste = true;
            });

            editor.addListener("afterinserthtml", function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    if (pastePop && (isPaste || editor.ui._isTransfer)) {
                        if(pastePop.isHidden()){
                            var span = domUtils.createElement(editor.document, 'span', {
                                    'style':"line-height:0px;",
                                    'innerHTML':'\ufeff'
                                }),
                                range = editor.selection.getRange();
                            range.insertNode(span);
                            var tmp= getDomNode(span, 'firstChild', 'previousSibling');
                            pastePop.showAnchor(tmp.nodeType == 3 ? tmp.parentNode : tmp);
                            domUtils.remove(span);

                        }else{
                            pastePop.show();
                        }
                        delete editor.ui._isTransfer;
                        isPaste = false;
                    }
                }, 200)
            });
            editor.addListener('contextmenu', function (t, evt) {
                baidu.editor.ui.Popup.postHide(evt);
            });
            editor.addListener('keydown', function (t, evt) {
                if (pastePop)    pastePop.dispose(evt);
                var keyCode = evt.keyCode || evt.which;
                if(evt.altKey&&keyCode==90){
                    UE.ui.buttons['fullscreen'].onclick();
                }
            });
            editor.addListener('wordcount', function (type) {
                setCount(this,me);
            });
            function setCount(editor,ui) {
                editor.setOpt({
                    wordCount:true,
                    maximumWords:5000,
                    wordCountMsg:editor.options.wordCountMsg || editor.getLang("wordCountMsg"),
                    wordOverFlowMsg:editor.options.wordOverFlowMsg || editor.getLang("wordOverFlowMsg")
                });
                var opt = editor.options,
                    max = opt.maximumWords,
                    //msg = opt.wordCountMsg ,
                    errMsg = '字数超限，请限制字数为' + max + '以下！',
                    msg = '',
                  //  errMsg = opt.wordOverFlowMsg,
                    countDom = ui.getDom('wordcount');
                if (!opt.wordCount) {
                    return;
                }
                var count = editor.getContentLength(true);
                if (count > max) {
                    countDom.innerHTML = errMsg;
                    editor.fireEvent("wordcountoverflow");
                    me.editor.overflow = true;
                } else {
                  //  countDom.innerHTML = msg.replace("{#leave}", max - count).replace("{#count}", count);
                    countDom.innerHTML = '';
                    me.editor.overflow = false;
                }
            }

            editor.addListener('selectionchange', function () {
                if (editor.options.elementPathEnabled) {
                    me[(editor.queryCommandState('elementpath') == -1 ? 'dis' : 'en') + 'ableElementPath']()
                }
                if (editor.options.scaleEnabled) {
                    me[(editor.queryCommandState('scale') == -1 ? 'dis' : 'en') + 'ableScale']();

                }
            });
            var popup = new baidu.editor.ui.Popup({
                editor:editor,
                content:'',
                className:'edui-bubble',
                _onEditButtonClick:function () {
                    this.hide();
                    editor.ui._dialogs.linkDialog.open();
                },
                _onImgEditButtonClick:function (name) {
                    this.hide();
                    editor.ui._dialogs[name] && editor.ui._dialogs[name].open();

                },
                _onImgSetFloat:function (value) {
                    this.hide();
                    editor.execCommand("imagefloat", value);

                },
                _setIframeAlign:function (value) {
                    var frame = popup.anchorEl;
                    var newFrame = frame.cloneNode(true);
                    switch (value) {
                        case -2:
                            newFrame.setAttribute("align", "");
                            break;
                        case -1:
                            newFrame.setAttribute("align", "left");
                            break;
                        case 1:
                            newFrame.setAttribute("align", "right");
                            break;
                    }
                    frame.parentNode.insertBefore(newFrame, frame);
                    domUtils.remove(frame);
                    popup.anchorEl = newFrame;
                    popup.showAnchor(popup.anchorEl);
                },
                _updateIframe:function () {
                    editor._iframe = popup.anchorEl;
                    editor.ui._dialogs.insertframeDialog.open();
                    popup.hide();
                },
                _onRemoveButtonClick:function (cmdName) {
                    editor.execCommand(cmdName);
                    this.hide();
                },
                queryAutoHide:function (el) {
                    if (el && el.ownerDocument == editor.document) {
                        if (el.tagName.toLowerCase() == 'img' || domUtils.findParentByTagName(el, 'a', true)) {
                            return el !== popup.anchorEl;
                        }
                    }
                    return baidu.editor.ui.Popup.prototype.queryAutoHide.call(this, el);
                }
            });
            popup.render();
            if (editor.options.imagePopup) {
                editor.addListener('mouseover', function (t, evt) {
                    evt = evt || window.event;
                    var el = evt.target || evt.srcElement;
                    if (editor.ui._dialogs.insertframeDialog && /iframe/ig.test(el.tagName)) {
                        var html = popup.formatHtml(
                            '<nobr>' + editor.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                                ' <span onclick="$$._updateIframe( this);" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>');
                        if (html) {
                            popup.getDom('content').innerHTML = html;
                            popup.anchorEl = el;
                            popup.showAnchor(popup.anchorEl);
                        } else {
                            popup.hide();
                        }
                    }
                });
                editor.addListener('selectionchange', function (t, causeByUi) {
                    if (!causeByUi) return;
                    var html = '', str = "",
                        img = editor.selection.getRange().getClosedNode(),
                        dialogs = editor.ui._dialogs;
                    if (img && img.tagName == 'IMG') {
                        var dialogName = 'insertimageDialog';
                        if (img.className.indexOf("edui-faked-video") != -1) {
                            dialogName = "insertvideoDialog"
                        }
                        if (img.className.indexOf("edui-faked-webapp") != -1) {
                            dialogName = "webappDialog"
                        }
                        if (img.src.indexOf("http://api.map.baidu.com") != -1) {
                            dialogName = "mapDialog"
                        }
                        if (img.className.indexOf("edui-faked-music") != -1) {
                            dialogName = "musicDialog"
                        }
                        if (img.src.indexOf("http://maps.google.com/maps/api/staticmap") != -1) {
                            dialogName = "gmapDialog"
                        }
                        if (img.getAttribute("anchorname")) {
                            dialogName = "anchorDialog";
                            html = popup.formatHtml(
                                '<nobr>' + editor.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + editor.getLang("modify") + '</span>&nbsp;&nbsp;' +
                                    '<span onclick=$$._onRemoveButtonClick(\'anchor\') class="edui-clickable">' + editor.getLang("delete") + '</span></nobr>');
                        }
                        if (img.getAttribute("word_img")) {
                            //todo 放到dialog去做查询
                            editor.word_img = [img.getAttribute("word_img")];
                            dialogName = "wordimageDialog"
                        }
                        if (!dialogs[dialogName]) {
                            return;
                        }
                        str = '<nobr>' + editor.getLang("property") + ': '+
                            '<span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + editor.getLang("default") + '</span>&nbsp;&nbsp;' +
                            '<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + editor.getLang("justifyleft") + '</span>&nbsp;&nbsp;' +
                            '<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + editor.getLang("justifyright") + '</span>&nbsp;&nbsp;' +
                            '<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + editor.getLang("justifycenter") + '</span>&nbsp;&nbsp;'+
                            '<span onclick="$$._onImgEditButtonClick(\'' + dialogName + '\');" class="edui-clickable">' + editor.getLang("modify") + '</span></nobr>';

                        !html && (html = popup.formatHtml(str))

                    }
                    if (editor.ui._dialogs.linkDialog) {
                        var link = editor.queryCommandValue('link');
                        var url;
                        if (link && (url = (link.getAttribute('_href') || link.getAttribute('href', 2)))) {
                            var txt = url;
                            if (url.length > 30) {
                                txt = url.substring(0, 20) + "...";
                            }
                            if (html) {
                                html += '<div style="height:5px;"></div>'
                            }
                            html += popup.formatHtml(
                                '<nobr>' + editor.getLang("anthorMsg") + ': <a target="_blank" href="' + url + '" title="' + url + '" >' + txt + '</a>' +
                                    ' <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + editor.getLang("modify") + '</span>' +
                                    ' <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + editor.getLang("clear") + '</span></nobr>');
                            popup.showAnchor(link);
                        }
                    }

                    if (html) {
                        popup.getDom('content').innerHTML = html;
                        popup.anchorEl = img || link;
                        popup.showAnchor(popup.anchorEl);
                    } else {
                        popup.hide();
                    }
                });
            }

        },
        _initToolbars:function () {
            var editor = this.editor;
            var toolbars = this.toolbars || [];
            var toolbarUis = [];
            for (var i = 0; i < toolbars.length; i++) {
                var toolbar = toolbars[i];
                var toolbarUi = new baidu.editor.ui.Toolbar({theme:editor.options.theme});
                for (var j = 0; j < toolbar.length; j++) {
                    var toolbarItem = toolbar[j];
                    var toolbarItemUi = null;
                    if (typeof toolbarItem == 'string') {
                        toolbarItem = toolbarItem.toLowerCase();
                        if (toolbarItem == '|') {
                            toolbarItem = 'Separator';
                        }
                        if(toolbarItem == '||'){
                            toolbarItem = 'Breakline';
                        }
                        if (baidu.editor.ui[toolbarItem]) {
                            toolbarItemUi = new baidu.editor.ui[toolbarItem](editor);
                        }

                        //fullscreen这里单独处理一下，放到首行去
                        if (toolbarItem == 'fullscreen') {
                            if (toolbarUis && toolbarUis[0]) {
                                toolbarUis[0].items.splice(0, 0, toolbarItemUi);
                            } else {
                                toolbarItemUi && toolbarUi.items.splice(0, 0, toolbarItemUi);
                            }

                            continue;


                        }
                    } else {
                        toolbarItemUi = toolbarItem;
                    }
                    if (toolbarItemUi && toolbarItemUi.id) {

                        toolbarUi.add(toolbarItemUi);
                    }
                }
                toolbarUis[i] = toolbarUi;
            }
            this.toolbars = toolbarUis;
        },
        getHtmlTpl:function () {
            return '<div id="##" class="%%">' +
                '<div id="##_toolbarbox" class="%%-toolbarbox">' +
                (this.toolbars.length ?
                    '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' +
                        this.renderToolbarBoxHtml() +
                        '</div></div>' : '') +
                '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">' +
                '<div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div>' +
                '<div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>' +
                '<div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>' +
                '<div style="height:0;overflow:hidden;clear:both;"></div>' +
                '</div>' +
                '</div>' +
                '<div id="##_iframeholder" class="%%-iframeholder"></div>' +
                //modify wdcount by matao
                '<div id="##_bottombar" class="%%-bottomContainer"><table><tr>' +
                '<td id="##_elementpath" class="%%-bottombar"></td>' +
                '<td id="##_wordcount" class="%%-wordcount"></td>' +
                '<td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>' +
                '</tr></table></div>' +
                '<div id="##_scalelayer"></div>' +
                '</div>';
        },
        showWordImageDialog:function () {
            this.editor.execCommand("wordimage", "word_img");
            this._dialogs['wordimageDialog'].open();
        },
        renderToolbarBoxHtml:function () {
            var buff = [];
            for (var i = 0; i < this.toolbars.length; i++) {
                buff.push(this.toolbars[i].renderHtml());
            }
            return buff.join('');
        },
        setFullScreen:function (fullscreen) {

            var editor = this.editor,
                container = editor.container.parentNode.parentNode;
            if (this._fullscreen != fullscreen) {
                this._fullscreen = fullscreen;
                this.editor.fireEvent('beforefullscreenchange', fullscreen);
                if (baidu.editor.browser.gecko) {
                    var bk = editor.selection.getRange().createBookmark();
                }
                if (fullscreen) {
                    while (container.tagName != "BODY") {
                        var position = baidu.editor.dom.domUtils.getComputedStyle(container, "position");
                        nodeStack.push(position);
                        container.style.position = "static";
                        container = container.parentNode;
                    }
                    this._bakHtmlOverflow = document.documentElement.style.overflow;
                    this._bakBodyOverflow = document.body.style.overflow;
                    this._bakAutoHeight = this.editor.autoHeightEnabled;
                    this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

                    this._bakEditorContaninerWidth = editor.iframe.parentNode.offsetWidth;
                    if (this._bakAutoHeight) {
                        //当全屏时不能执行自动长高
                        editor.autoHeightEnabled = false;
                        this.editor.disableAutoHeight();
                    }

                    document.documentElement.style.overflow = 'hidden';
                    document.body.style.overflow = 'hidden';
                    this._bakCssText = this.getDom().style.cssText;
                    this._bakCssText1 = this.getDom('iframeholder').style.cssText;
                    editor.iframe.parentNode.style.width = '';
                    this._updateFullScreen();
                } else {
                    while (container.tagName != "BODY") {
                        container.style.position = nodeStack.shift();
                        container = container.parentNode;
                    }
                    this.getDom().style.cssText = this._bakCssText;
                    this.getDom('iframeholder').style.cssText = this._bakCssText1;
                    if (this._bakAutoHeight) {
                        editor.autoHeightEnabled = true;
                        this.editor.enableAutoHeight();
                    }

                    document.documentElement.style.overflow = this._bakHtmlOverflow;
                    document.body.style.overflow = this._bakBodyOverflow;
                    editor.iframe.parentNode.style.width = this._bakEditorContaninerWidth + 'px';
                    window.scrollTo(0, this._bakScrollTop);
                }
                if (browser.gecko && editor.body.contentEditable === 'true') {
                    var input = document.createElement('input');
                    document.body.appendChild(input);
                    editor.body.contentEditable = false;
                    setTimeout(function () {
                        input.focus();
                        setTimeout(function () {
                            editor.body.contentEditable = true;
                            editor.fireEvent('fullscreenchanged', fullscreen);
                            editor.selection.getRange().moveToBookmark(bk).select(true);
                            baidu.editor.dom.domUtils.remove(input);
                            fullscreen && window.scroll(0, 0);
                        }, 0)
                    }, 0)
                }

                if(editor.body.contentEditable === 'true'){
                    this.editor.fireEvent('fullscreenchanged', fullscreen);
                    this.triggerLayout();
                }

            }
        },
        _updateFullScreen:function () {
            if (this._fullscreen) {
                var vpRect = uiUtils.getViewportRect();
                this.getDom().style.cssText = 'border:0;position:absolute;left:0;top:' + (this.editor.options.topOffset || 0) + 'px;width:' + vpRect.width + 'px;height:' + vpRect.height + 'px;z-index:' + (this.getDom().style.zIndex * 1 + 100);
                uiUtils.setViewportOffset(this.getDom(), { left:0, top:this.editor.options.topOffset || 0 });
                this.editor.setHeight(vpRect.height - this.getDom('toolbarbox').offsetHeight - this.getDom('bottombar').offsetHeight - (this.editor.options.topOffset || 0));
                //不手动调一下，会导致全屏失效
                if(browser.gecko){
                    try{
                        window.onresize();
                    }catch(e){

                    }

                }
            }
        },
        _updateElementPath:function () {
            var bottom = this.getDom('elementpath'), list;
            if (this.elementPathEnabled && (list = this.editor.queryCommandValue('elementpath'))) {

                var buff = [];
                for (var i = 0, ci; ci = list[i]; i++) {
                    buff[i] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + i + '&quot;);">' + ci + '</span>');
                }
                bottom.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ': ' + buff.join(' &gt; ') + '</div>';

            } else {
                bottom.style.display = 'none'
            }
        },
        disableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.innerHTML = '';
            bottom.style.display = 'none';
            this.elementPathEnabled = false;

        },
        enableElementPath:function () {
            var bottom = this.getDom('elementpath');
            bottom.style.display = '';
            this.elementPathEnabled = true;
            this._updateElementPath();
        },
        _scale:function () {
            var doc = document,
                editor = this.editor,
                editorHolder = editor.container,
                editorDocument = editor.document,
                toolbarBox = this.getDom("toolbarbox"),
                bottombar = this.getDom("bottombar"),
                scale = this.getDom("scale"),
                scalelayer = this.getDom("scalelayer");

            var isMouseMove = false,
                position = null,
                minEditorHeight = 0,
                minEditorWidth = editor.options.minFrameWidth,
                pageX = 0,
                pageY = 0,
                scaleWidth = 0,
                scaleHeight = 0;

            function down() {
                position = domUtils.getXY(editorHolder);

                if (!minEditorHeight) {
                    minEditorHeight = editor.options.minFrameHeight + toolbarBox.offsetHeight + bottombar.offsetHeight;
                }

                scalelayer.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + editorHolder.offsetWidth + "px;height:"
                    + editorHolder.offsetHeight + "px;z-index:" + (editor.options.zIndex + 1);

                domUtils.on(doc, "mousemove", move);
                domUtils.on(editorDocument, "mouseup", up);
                domUtils.on(doc, "mouseup", up);
            }

            var me = this;
            //by xuheng 全屏时关掉缩放
            this.editor.addListener('fullscreenchanged', function (e, fullScreen) {
                if (fullScreen) {
                    me.disableScale();

                } else {
                    if (me.editor.options.scaleEnabled) {
                        me.enableScale();
                        var tmpNode = me.editor.document.createElement('span');
                        me.editor.body.appendChild(tmpNode);
                        me.editor.body.style.height = Math.max(domUtils.getXY(tmpNode).y, me.editor.iframe.offsetHeight - 20) + 'px';
                        domUtils.remove(tmpNode)
                    }
                }
            });
            function move(event) {
                clearSelection();
                var e = event || window.event;
                pageX = e.pageX || (doc.documentElement.scrollLeft + e.clientX);
                pageY = e.pageY || (doc.documentElement.scrollTop + e.clientY);
                scaleWidth = pageX - position.x;
                scaleHeight = pageY - position.y;

                if (scaleWidth >= minEditorWidth) {
                    isMouseMove = true;
                    scalelayer.style.width = scaleWidth + 'px';
                }
                if (scaleHeight >= minEditorHeight) {
                    isMouseMove = true;
                    scalelayer.style.height = scaleHeight + "px";
                }
            }

            function up() {
                if (isMouseMove) {
                    isMouseMove = false;
                    editor.ui._actualFrameWidth = scalelayer.offsetWidth - 2;
                    editorHolder.style.width = editor.ui._actualFrameWidth + 'px';

                    editor.setHeight(scalelayer.offsetHeight - bottombar.offsetHeight - toolbarBox.offsetHeight - 2);
                }
                if (scalelayer) {
                    scalelayer.style.display = "none";
                }
                clearSelection();
                domUtils.un(doc, "mousemove", move);
                domUtils.un(editorDocument, "mouseup", up);
                domUtils.un(doc, "mouseup", up);
            }

            function clearSelection() {
                if (browser.ie)
                    doc.selection.clear();
                else
                    window.getSelection().removeAllRanges();
            }

            this.enableScale = function () {
                //trace:2868
                if (editor.queryCommandState("source") == 1)    return;
                scale.style.display = "";
                this.scaleEnabled = true;
                domUtils.on(scale, "mousedown", down);
            };
            this.disableScale = function () {
                scale.style.display = "none";
                this.scaleEnabled = false;
                domUtils.un(scale, "mousedown", down);
            };
        },
        isFullScreen:function () {
            return this._fullscreen;
        },
        postRender:function () {
            UIBase.prototype.postRender.call(this);
            for (var i = 0; i < this.toolbars.length; i++) {
                this.toolbars[i].postRender();
            }
            var me = this;
            var timerId,
                domUtils = baidu.editor.dom.domUtils,
                updateFullScreenTime = function () {
                    clearTimeout(timerId);
                    timerId = setTimeout(function () {
                        me._updateFullScreen();
                    });
                };
            domUtils.on(window, 'resize', updateFullScreenTime);

            me.addListener('destroy', function () {
                domUtils.un(window, 'resize', updateFullScreenTime);
                clearTimeout(timerId);
            })
        },
        showToolbarMsg:function (msg, flag) {
            this.getDom('toolbarmsg_label').innerHTML = msg;
            this.getDom('toolbarmsg').style.display = '';
            //
            if (!flag) {
                var w = this.getDom('upload_dialog');
                w.style.display = 'none';
            }
        },
        hideToolbarMsg:function () {
            this.getDom('toolbarmsg').style.display = 'none';
        },
        mapUrl:function (url) {
            return url ? url.replace('~/', this.editor.options.UEDITOR_HOME_URL || '') : ''
        },
        triggerLayout:function () {
            var dom = this.getDom();
            if (dom.style.zoom == '1') {
                dom.style.zoom = '100%';
            } else {
                dom.style.zoom = '1';
            }
        }
    };
    utils.inherits(EditorUI, baidu.editor.ui.UIBase);


    var instances = {};


    UE.ui.Editor = function (options) {
        var editor = new UE.Editor(options);
        editor.options.editor = editor;
        utils.loadFile(document, {
            href:editor.options.themePath + editor.options.theme + "/css/ueditor.css",
            tag:"link",
            type:"text/css",
            rel:"stylesheet"
        });

        var oldRender = editor.render;
        editor.render = function (holder) {
            if (holder.constructor === String) {
                editor.key = holder;
                instances[holder] = editor;
            }
            utils.domReady(function () {
                editor.langIsReady ? renderUI() : editor.addListener("langReady", renderUI);
                function renderUI() {
                    editor.setOpt({
                        labelMap:editor.options.labelMap || editor.getLang('labelMap')
                    });
                    new EditorUI(editor.options);
                    if (holder) {
                        if (holder.constructor === String) {
                            holder = document.getElementById(holder);
                        }
                        holder && holder.getAttribute('name') && ( editor.options.textarea = holder.getAttribute('name'));
                        if (holder && /script|textarea/ig.test(holder.tagName)) {
                            var newDiv = document.createElement('div');
                            holder.parentNode.insertBefore(newDiv, holder);
                            var cont = holder.value || holder.innerHTML;
                            editor.options.initialContent = /^[\t\r\n ]*$/.test(cont) ? editor.options.initialContent :
                                cont.replace(/>[\n\r\t]+([ ]{4})+/g, '>')
                                    .replace(/[\n\r\t]+([ ]{4})+</g, '<')
                                    .replace(/>[\n\r\t]+</g, '><');
                            holder.className && (newDiv.className = holder.className);
                            holder.style.cssText && (newDiv.style.cssText = holder.style.cssText);
                            if (/textarea/i.test(holder.tagName)) {
                                editor.textarea = holder;
                                editor.textarea.style.display = 'none';

                            } else {
                                holder.parentNode.removeChild(holder);
                                holder.id && (newDiv.id = holder.id);
                            }
                            holder = newDiv;
                            holder.innerHTML = '';
                        }

                    }
                    domUtils.addClass(holder, "edui-" + editor.options.theme);
                    editor.ui.render(holder);
                    var opt = editor.options;
                    //给实例添加一个编辑器的容器引用
                    editor.container = editor.ui.getDom();
                    var parents = domUtils.findParents(holder,true);
                    var displays = [];
                    for(var i = 0 ,ci;ci=parents[i];i++){
                        displays[i] = ci.style.display;
                        ci.style.display = 'block'
                    }
                    if (opt.initialFrameWidth) {
                        opt.minFrameWidth = opt.initialFrameWidth;
                    } else {
                        opt.minFrameWidth = opt.initialFrameWidth = holder.offsetWidth;
                    }
                    if (opt.initialFrameHeight) {
                        opt.minFrameHeight = opt.initialFrameHeight;
                    } else {
                        opt.initialFrameHeight = opt.minFrameHeight = holder.offsetHeight;
                    }
                    for(var i = 0 ,ci;ci=parents[i];i++){
                        ci.style.display =  displays[i]
                    }
                    //编辑器最外容器设置了高度，会导致，编辑器不占位
                    //todo 先去掉，没有找到原因
                    if(holder.style.height){
                        holder.style.height = ''
                    }
                    editor.container.style.width = opt.initialFrameWidth + (/%$/.test(opt.initialFrameWidth) ? '' : 'px');
                    editor.container.style.zIndex = opt.zIndex;
                    oldRender.call(editor, editor.ui.getDom('iframeholder'));

                }
            })
        };
        return editor;
    };


    /**
     * @file
     * @name UE
     * @short UE
     * @desc UEditor的顶部命名空间
     */
    /**
     * @name getEditor
     * @since 1.2.4+
     * @grammar UE.getEditor(id,[opt])  =>  Editor实例
     * @desc 提供一个全局的方法得到编辑器实例
     *
     * * ''id''  放置编辑器的容器id, 如果容器下的编辑器已经存在，就直接返回
     * * ''opt'' 编辑器的可选参数
     * @example
     *  UE.getEditor('containerId',{onready:function(){//创建一个编辑器实例
     *      this.setContent('hello')
     *  }});
     *  UE.getEditor('containerId'); //返回刚创建的实例
     *
     */
    UE.getEditor = function (id, opt) {
        var editor = instances[id];
        if (!editor) {
            editor = instances[id] = new UE.ui.Editor(opt);
            editor.render(id);
        }
        return editor;
    };


    UE.delEditor = function (id) {
        var editor;
        if (editor = instances[id]) {
            editor.key && editor.destroy();
            delete instances[id]
        }
    }
})();

(function () {
    var UI = baidu.editor.ui,
        UIBase = UI.UIBase,
        uiUtils = UI.uiUtils,
        utils = baidu.editor.utils,
        domUtils = baidu.editor.dom.domUtils;

    var allMenus = [],//存储所有快捷菜单
        timeID,
        isSubMenuShow = false;//是否有子pop显示

    var ShortCutMenu = UI.ShortCutMenu = function (options) {
        this.initOptions (options);
        this.initShortCutMenu ();
    };

    ShortCutMenu.postHide = hideAllMenu;

    ShortCutMenu.prototype = {
        isHidden : true ,
        SPACE : 5 ,
        initShortCutMenu : function () {
            this.items = this.items || [];
            this.initUIBase ();
            this.initItems ();
            this.initEvent ();
            allMenus.push (this);
        } ,
        initEvent : function () {
            var me = this,
                doc = me.editor.document;

            domUtils.on (doc , "mousemove" , function (e) {
                if (me.isHidden === false) {
                    //有pop显示就不隐藏快捷菜单
                    if (me.getSubMenuMark () || me.eventType == "contextmenu")   return;


                    var flag = true,
                        el = me.getDom (),
                        wt = el.offsetWidth,
                        ht = el.offsetHeight,
                        distanceX = wt / 2 + me.SPACE,//距离中心X标准
                        distanceY = ht / 2,//距离中心Y标准
                        x = Math.abs (e.screenX - me.left),//离中心距离横坐标
                        y = Math.abs (e.screenY - me.top);//离中心距离纵坐标

                    clearTimeout (timeID);
                    timeID = setTimeout (function () {
                        if (y > 0 && y < distanceY) {
                            me.setOpacity (el , "1");
                        } else if (y > distanceY && y < distanceY + 70) {
                            me.setOpacity (el , "0.5");
                            flag = false;
                        } else if (y > distanceY + 70 && y < distanceY + 140) {
                            me.hide ();
                        }

                        if (flag && x > 0 && x < distanceX) {
                            me.setOpacity (el , "1")
                        } else if (x > distanceX && x < distanceX + 70) {
                            me.setOpacity (el , "0.5")
                        } else if (x > distanceX + 70 && x < distanceX + 140) {
                            me.hide ();
                        }
                    });
                }
            });

            //ie\ff下 mouseout不准
            if (browser.chrome) {
                domUtils.on (doc , "mouseout" , function (e) {
                    var relatedTgt = e.relatedTarget || e.toElement;

                    if (relatedTgt == null || relatedTgt.tagName == "HTML") {
                        me.hide ();
                    }
                });
            }

            me.editor.addListener ("afterhidepop" , function () {
                if (!me.isHidden) {
                    isSubMenuShow = true;
                }
            });

        } ,
        initItems : function () {
            if (utils.isArray (this.items)) {
                for (var i = 0, len = this.items.length ; i < len ; i++) {
                    var item = this.items[i].toLowerCase ();

                    if (UI[item]) {
                        this.items[i] = new UI[item] (this.editor);
                        this.items[i].className += " edui-shortcutsubmenu ";
                    }
                }
            }
        } ,
        setOpacity : function (el , value) {
            if (browser.ie && browser.version < 9) {
                el.style.filter = "alpha(opacity = " + parseFloat (value) * 100 + ");"
            } else {
                el.style.opacity = value;
            }
        } ,
        getSubMenuMark : function () {
            isSubMenuShow = false;
            var layerEle = uiUtils.getFixedLayer ();
            var list = domUtils.getElementsByTagName (layerEle , "div" , function (node) {
                return domUtils.hasClass (node , "edui-shortcutsubmenu edui-popup")
            });

            for (var i = 0, node ; node = list[i++] ;) {
                if (node.style.display != "none") {
                    isSubMenuShow = true;
                }
            }
            return isSubMenuShow;
        } ,
        show : function (e , hasContextmenu) {
            var me = this,
                offset = {},
                el = this.getDom (),
                fixedlayer = uiUtils.getFixedLayer ();

            function setPos (offset) {
                if (offset.left < 0) {
                    offset.left = 0;
                }
                if (offset.top < 0) {
                    offset.top = 0;
                }
                el.style.cssText = "position:absolute;left:" + offset.left + "px;top:" + offset.top + "px;";
            }

            function setPosByCxtMenu (menu) {
                if (!menu.tagName) {
                    menu = menu.getDom ();
                }
                offset.left = parseInt (menu.style.left);
                offset.top = parseInt (menu.style.top);
                offset.top -= el.offsetHeight + 15;
                setPos (offset);
            }


            me.eventType = e.type;
            el.style.cssText = "display:block;left:-9999px";

            if (e.type == "contextmenu" && hasContextmenu) {
                var menu = domUtils.getElementsByTagName (fixedlayer , "div" , "edui-contextmenu")[0];
                if (menu) {
                    setPosByCxtMenu (menu)
                } else {
                    me.editor.addListener ("aftershowcontextmenu" , function (type , menu) {
                        setPosByCxtMenu (menu);
                    });
                }
            } else {
                offset = uiUtils.getViewportOffsetByEvent (e);
                offset.top -= el.offsetHeight + me.SPACE;
                offset.left += me.SPACE + 20;
                setPos (offset);
                me.setOpacity (el , 0.2);
            }


            me.isHidden = false;
            me.left = e.screenX + el.offsetWidth / 2 - me.SPACE;
            me.top = e.screenY - (el.offsetHeight / 2) - me.SPACE;

            if (me.editor) {
                el.style.zIndex = me.editor.container.style.zIndex * 1 + 10;
                fixedlayer.style.zIndex = el.style.zIndex - 1;
            }
        } ,
        hide : function () {
            if (this.getDom ()) {
                this.getDom ().style.display = "none";
            }
            this.isHidden = true;
        } ,
        postRender : function () {
            if (utils.isArray (this.items)) {
                for (var i = 0, item ; item = this.items[i++] ;) {
                    item.postRender ();
                }
            }
        } ,
        getHtmlTpl : function () {
            var buff;
            if (utils.isArray (this.items)) {
                buff = [];
                for (var i = 0 ; i < this.items.length ; i++) {
                    buff[i] = this.items[i].renderHtml ();
                }
                buff = buff.join ("");
            } else {
                buff = this.items;
            }

            return '<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >' +
                buff +
                '</div>';
        }
    };

    utils.inherits (ShortCutMenu , UIBase);

    function hideAllMenu (e) {
        var tgt = e.target || e.srcElement,
            cur = domUtils.findParent (tgt , function (node) {
                return domUtils.hasClass (node , "edui-shortcutmenu") || domUtils.hasClass (node , "edui-popup");
            } , true);

        if (!cur) {
            for (var i = 0, menu ; menu = allMenus[i++] ;) {
                menu.hide ()
            }
        }
    }

    domUtils.on (document , 'mousedown' , function (e) {
        hideAllMenu (e);
    });

    domUtils.on (window , 'scroll' , function (e) {
        hideAllMenu (e);
    });

}) ();

(function (){
    var utils = baidu.editor.utils,
        UIBase = baidu.editor.ui.UIBase,
        Breakline = baidu.editor.ui.Breakline = function (options){
            this.initOptions(options);
            this.initSeparator();
        };
    Breakline.prototype = {
        uiName: 'Breakline',
        initSeparator: function (){
            this.initUIBase();
        },
        getHtmlTpl: function (){
            return '<br/>';
        }
    };
    utils.inherits(Breakline, UIBase);

})();
})();