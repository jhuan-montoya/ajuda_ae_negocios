(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3342ba4d"],{"0eed":function(e,t,n){},"606d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-box",domProps:{innerHTML:e._s(e.data.content)},on:{click:e.handleClick}})},i=[],s=n("f3f3"),c=n("2f62"),r={name:"GridTextBox",props:{data:{type:Object,required:!0}},computed:Object(s["a"])({},Object(c["e"])(["website"])),methods:{handleClick:function(e){var t,n=e.target.closest("[data-internal-link]");if(n){e.preventDefault();var a=this.website.pages,i=n.dataset.internalLink,s=null===(t=a[i])||void 0===t?void 0:t.path;s&&this.$router.push(s)}}}},d=r,o=(n("d491"),n("2877")),l=Object(o["a"])(d,a,i,!1,null,"7bee0ff6",null);t["default"]=l.exports},d491:function(e,t,n){"use strict";var a=n("0eed"),i=n.n(a);i.a}}]);