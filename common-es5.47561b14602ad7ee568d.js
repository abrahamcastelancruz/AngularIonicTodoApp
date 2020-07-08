function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function asyncGeneratorStep(t,e,n,r,i,o,c){try{var a=t[o](c),s=a.value}catch(u){return void n(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function c(t){asyncGeneratorStep(o,r,i,c,a,"next",t)}function a(t){asyncGeneratorStep(o,r,i,c,a,"throw",t)}c(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return a}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},s=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},HGan:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),c=n("fXoL"),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,o.B]]}),t}()},NKIX:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("QX1p"),i=n("ItpF"),o=n("2c9M"),c=function(t,e){var n,c,a=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),s(o,i)):u()}},s=function(t,e){n=t,c||(c=n);var i=n;Object(r.n)((function(){return i.classList.add("ion-activated")})),e()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.n)((function(){return e.classList.remove("ion-activated")})),t&&c!==n&&n.click(),n=void 0}};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,o.a)},onMove:function(t){return a(t.currentX,t.currentY,o.b)},onEnd:function(){u(!0),Object(o.e)(),c=void 0}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r,i,o){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return c.classList.add(t)})),o&&Object.assign(c,o),n.appendChild(c),t.t0=c.componentOnReady,!t.t0){t.next=12;break}return t.next=12,c.componentOnReady();case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),i=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},UC3L:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r,i=n("mrSG"),o=n("TEn/"),c=n("fXoL"),a=n("vf8s"),s=n("tyNb"),u=n("ofXK"),l=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.filter((function(t){return t.completed==e}))}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275pipe=c.Ib({name:"completedFilter",type:r,pure:!1}),r);function f(t,e){if(1&t){var n=c.Nb();c.Mb(0,"ion-item-sliding"),c.Mb(1,"ion-item",2),c.Ub("click",(function(){c.dc(n);var t=e.$implicit;return c.Wb().goList(t)})),c.Mb(2,"ion-label"),c.hc(3),c.Lb(),c.Mb(4,"ion-note",3),c.hc(5),c.Lb(),c.Lb(),c.Mb(6,"ion-item-options",4),c.Mb(7,"ion-item-option",5),c.Ub("click",(function(){c.dc(n);var t=e.$implicit;return c.Wb().deleteList(t)})),c.hc(8,"Delete "),c.Kb(9,"ion-icon",6),c.Lb(),c.Mb(10,"ion-item-option",7),c.Ub("click",(function(){c.dc(n);var t=e.$implicit;return c.Wb().editList(t)})),c.hc(11," Edit "),c.Kb(12,"ion-icon",8),c.Lb(),c.Lb(),c.Lb()}if(2&t){var r=e.$implicit;c.zb(3),c.ic(r.title),c.zb(2),c.ic(r.tasks.length)}}var d,p=((d=function(){function t(e,n,r){_classCallCheck(this,t),this.todosService=e,this.router=n,this.alertController=r,this.completed=!0}return _createClass(t,[{key:"goList",value:function(t){var e=t.id;this.router.navigateByUrl(!0===this.completed?"/tabs/tab2/add/"+e:"/tabs/tab1/add/"+e)}},{key:"deleteList",value:function(t){this.todosService.deleteList(t)}},{key:"editList",value:function(t){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.alertController.create({cssClass:"my-custom-class",header:"Edit List Name",inputs:[{name:"title",type:"text",value:""+t.title}],buttons:[{text:"Save",handler:function(e){0!==e.title.length&&(t.title=e.title,r.todosService.save(),r.list.closeSlidingItems())}},{text:"Cancel",role:"cancel",handler:function(){r.list.closeSlidingItems()}}]});case 3:return n=e.sent,e.next=6,n.present();case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||d)(c.Jb(a.a),c.Jb(s.g),c.Jb(o.a))},d.\u0275cmp=c.Db({type:d,selectors:[["app-lists"]],viewQuery:function(t,e){var n;1&t&&c.jc(o.s,!0),2&t&&c.cc(n=c.Vb())&&(e.list=n.first)},inputs:{completed:"completed"},decls:3,vars:4,consts:[["color","dark"],[4,"ngFor","ngForOf"],["detail","","color","dark",3,"click"],["slot","end","color","success"],["side","start"],["color","danger",3,"click"],["name","trash-outline"],["color","warning",3,"click"],["name","create-outline"]],template:function(t,e){1&t&&(c.Mb(0,"ion-list",0),c.gc(1,f,13,2,"ion-item-sliding",1),c.Xb(2,"completedFilter"),c.Lb()),2&t&&(c.zb(1),c.bc("ngForOf",c.Yb(2,1,e.todosService.list,e.completed)))},directives:[o.s,u.h,o.q,o.n,o.r,o.u,o.p,o.o,o.l],pipes:[l],styles:[""]}),d)},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));var r=function(t,e){return null!==e.closest(t)},i=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-"+t,!0):void 0},o=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r,i){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||c.test(e)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),o.push(e,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,i){return t.apply(this,arguments)}}()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,i,o=n("fXoL"),c=((r=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:r}),r.\u0275inj=o.Gb({factory:function(t){return new(t||r)}}),r),a=n("TEn/"),s=n("ofXK"),u=((i=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:i}),i.\u0275inj=o.Gb({factory:function(t){return new(t||i)},imports:[[s.b,a.B,c]]}),i)},vf8s:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i=function t(e){_classCallCheck(this,t),this.title=e,this.createdOn=new Date,this.completed=!1,this.tasks=[],this.id=(new Date).getTime()},o=n("fXoL"),c=((r=function(){function t(){_classCallCheck(this,t),this.list=[],this.load()}return _createClass(t,[{key:"createList",value:function(t){var e=new i(t);return this.list.push(e),this.save(),e.id}},{key:"save",value:function(){localStorage.setItem("data",JSON.stringify(this.list))}},{key:"load",value:function(){localStorage.getItem("data")&&(this.list=JSON.parse(localStorage.getItem("data")))}},{key:"getList",value:function(t){return t=Number(t),this.list.find((function(e){return e.id==t}))}},{key:"deleteList",value:function(t){this.list=this.list.filter((function(e){return e.id!==t.id})),this.save()}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275prov=o.Fb({token:r,factory:r.\u0275fac,providedIn:"root"}),r)}}]);