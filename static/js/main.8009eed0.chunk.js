(this["webpackJsonpreact-counter"]=this["webpackJsonpreact-counter"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(6),r=n.n(o),c=(n(13),n(3)),u=n(7),i=(n(5),l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),l.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))),s=l.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-bootstrap-reboot",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 0 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8zm5.48-.079V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6zm0 3.75V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141z"}));var m=function(t){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,-1)}},"-1"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,-2)}},"-2"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,-3)}},"-3")),l.a.createElement("div",{className:"col-md-4 "},l.a.createElement("button",{onClick:function(){return t.resCounter(t.index)},type:"button",className:"btn btn-outline-success btn-lg ml-2 mr-2"},s),l.a.createElement("span",{className:"h3"},t.count),l.a.createElement("button",{onClick:function(){return t.delCounter(t.index)},type:"button",className:"btn btn-outline-dark btn-lg ml-2 mr-2"},i)),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,3)}},"+3"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,2)}},"+2"),l.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-lg ml-2 mr-2",onClick:function(){return t.plusMinus(t.index,1)}},"+1"))))};n(14);var b=function(){var t=Object(a.useState)([10,3,22]),e=Object(u.a)(t,2),n=e[0],o=e[1],r=function(t,e){var a=Object(c.a)(n);a[t]+=e,o(a)},i=function(t){var e=n.filter((function(e,n){return n!==t}));o(e)},s=function(t){var e=Object(c.a)(n);e[t]=0,o(e)};return l.a.createElement("div",{className:"App"},n.map((function(t,e){return l.a.createElement(m,{count:t,key:e,index:e,plusMinus:r,delCounter:i,resCounter:s})})),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-lg ml-2 mr-2",onClick:function(){var t=Math.round(10*Math.random());o([].concat(Object(c.a)(n),[t]))}},"Add Counter"),l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-lg ml-2 mr-2",onClick:function(){o([])}},"Del All"),l.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-lg ml-2 mr-2",onClick:function(t){var e=n.map((function(t,e){return 0}));o(e)}},"RES"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},5:function(t,e,n){},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8009eed0.chunk.js.map