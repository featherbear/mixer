(this.webpackJsonpmixer=this.webpackJsonpmixer||[]).push([[0],{16:function(e,n,t){e.exports=t(24)},21:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(8),c=t.n(l),i=(t(21),t(9)),u=t(10),o=t(15),s=t(14),d=t(1),m=t(4),E=t(2);function f(){var e=Object(d.a)(["\n  cursor: pointer;\n\n  margin: 2px auto;\n  padding: 8px;\n\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n\n  line-height: 14px;\n  border-radius: 5px;\n\n  background-color: rgba(0, 255, 255, 0.5);\n"]);return f=function(){return e},e}var p={small:{width:"50px",height:"20px"},medium:{width:"60px",height:"24px"},large:{width:"70px",height:"28px"}},v=E.a.div(f()),g=function(e){return r.a.createElement(v,{style:Object(m.a)({},p[e.size]||p.small,{},e.style)},e.children)};function h(){var e=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    justify-items: center;\n    grid-column-gap: 5px;\n    padding: 0 5px;\n    // gridRowGap: 5px;\n  "]);return h=function(){return e},e}var b=function(e){var n=E.a.div(h(),e.cols||1);return r.a.createElement(n,{style:Object(m.a)({},e.style)},e.children)};function x(){var e=Object(d.a)(["\n    text-align: center;\n    color: ",";\n    background-color: ",";\n  "]);return x=function(){return e},e}var y=function(e){var n=E.a.div(x(),e.color||"#FFF",e.backgroundColor||"#000");return r.a.createElement(n,null,e.children)},A={$firstGridArea:"1 / 1 / 2 / 2",$secondGridArea:"2 / 1 / 5 / 2",$thirdGridArea:"5 / 1 / 11 / 2",$fourthGridArea:"11 / 1 / 12 / 2"};function S(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-rows: repeat(11, 1fr);\n  height: 100%;\n\n  .PageSelect {\n    grid-area: ",";\n  }\n\n  .Bank_Main {\n    grid-area: ",";\n  }\n\n  .AuxSubMatrix {\n    grid-area: ",";\n  }\n\n  .Label {\n    grid-area: ",";\n  }\n"]);return S=function(){return e},e}var k=E.a.div(S(),A.firstGridArea,A.secondGridArea,A.thirdGridArea,A.fourthGridArea);var w=function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"PageSelect"},r.a.createElement(b,{cols:"2"},r.a.createElement(g,null,"Prev"),r.a.createElement(g,null,"Next"))),r.a.createElement("div",{className:"Bank_Main"},r.a.createElement(b,{cols:"2"},r.a.createElement(g,null,"Inputs"),r.a.createElement(g,null,"DCA Groups"),r.a.createElement(g,null,"Mix/FX Masters"),r.a.createElement(g,null,"User")),r.a.createElement(y,null,"BANK"),r.a.createElement(g,{size:"large"},"Main Mix")),r.a.createElement("div",{className:"AuxSubMatrix"},r.a.createElement(y,null,"Aux/Sub/Matrix"),function(){for(var e=[],n=1;n<=16;n++)e.push(r.a.createElement(g,{key:n},"Mix ",n));return r.a.createElement(b,{cols:2},e)}(),r.a.createElement(b,{cols:"2"},r.a.createElement(g,null,"FX A"),r.a.createElement(g,null,"FX B"),r.a.createElement(g,null,"FX C"),r.a.createElement(g,null,"FX D"))),r.a.createElement("div",{className:""},r.a.createElement(y,null,"MIX SELECT")))},M=function(){return r.a.createElement("div",null)},N=function(){return r.a.createElement("div",null)},j=function(){return r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(N,null))};function G(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return G=function(){return e},e}var C=E.a.div(G()),O=function(e){for(var n=[],t=0;t<(e.bars||0);t++)n.push(r.a.createElement("button",{key:t+1}));return r.a.createElement(C,null,n)};function F(){var e=Object(d.a)(["\n  width: 66px;\n  height: 70px;\n  border-radius: 5px;\n  background-color: black;\n"]);return F=function(){return e},e}var B=E.a.canvas(F()),$=function(e){return r.a.createElement(B,null)};function X(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-rows: repeat(11, 1fr);\n  height: 100%;\n  text-align: center;\n\n  .Header {\n    grid-area: ",";\n  }\n\n  .Controls {\n    grid-area: ",";\n  }\n\n  .Fader {\n    grid-area: ",";\n  }\n\n  .Label {\n    grid-area: ",";\n  }\n"]);return X=function(){return e},e}var L=E.a.div(X(),A.$firstGridArea,A.secondGridArea,A.$thirdGridArea,A.$fourthGridArea),z=function(e){return r.a.createElement(L,{style:e.style},r.a.createElement("div",{className:"Header"},r.a.createElement($,null)),r.a.createElement("div",{className:"Controls"},r.a.createElement(g,null,"Select"),r.a.createElement(g,null,"Solo"),r.a.createElement(g,null,"Mute"),r.a.createElement(O,{bars:"3"})),r.a.createElement("div",{className:"Fader"},r.a.createElement(j,null)),r.a.createElement("div",{className:"Label"},r.a.createElement(y,null,e.label)))},H=function(e){return r.a.createElement(L,{style:e.style},r.a.createElement("div",{className:"Header"},r.a.createElement(g,{size:"medium"},"Talk")),r.a.createElement("div",{className:"Controls"},r.a.createElement(g,null,"Select"),r.a.createElement(g,null,"GEQ"),r.a.createElement(g,null,"Mute")),r.a.createElement("div",{className:"Fader"},r.a.createElement(j,null)),r.a.createElement("div",{className:"Label"},r.a.createElement(y,null,"MASTER")))};function I(){var e=Object(d.a)(["\n  height: 100%;\n  width: 100%;\n  display: grid;\n  // grid-template-columns: repeat(8, 1fr);\n  // grid-template-columns: repeat(9, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  user-select: none;\n\n  .Buttons {\n    grid-area: 1 / 1 / 4 / 2;\n  }\n\n  .Channel-Strip {\n    grid-area: 1 / 2 / 4 / 9;\n  }\n\n  .Master {\n    grid-area: 1 / 9 / 4 / 10;\n  }\n"]);return I=function(){return e},e}var P=E.a.div(I()),T={channelStripContainer:{display:"flex",backgroundColor:"green",height:"100%"},channelStrip:{flexGrow:1}},D=function(e){Object(o.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={},a}return Object(u.a)(t,[{key:"renderChannelStrips",value:function(){for(var e=[],n=1;n<=16;n++)e.push(r.a.createElement(z,{style:T.channelStrip,key:n,label:n}));return e}},{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement("div",{className:"Buttons"},r.a.createElement(w,null)),r.a.createElement("div",{className:"Channel-Strip"},r.a.createElement("div",{style:T.channelStripContainer},this.renderChannelStrips())),r.a.createElement("div",{className:"Master"},r.a.createElement(H,null)))}}]),t}(r.a.Component);var J=function(){return r.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c9466d8.chunk.js.map