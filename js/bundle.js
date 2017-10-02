!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=i(n(1)),a=i(n(7)),s=function(){function e(t,n,i,r,a){o(this,e),this.position=new u.default(t,n),this.velocity=new u.default(0,0),this.acceleration=new u.default(0,0),this.width=i,this.height=r,this.material=a}return r(e,[{key:"setPosition",value:function(e,t){this.x=e,this.y=t}},{key:"getX",value:function(){return this.x}},{key:"setX",value:function(e){this.x=e}},{key:"getY",value:function(){return this.y}},{key:"setY",value:function(e){this.y=e}},{key:"getWidth",value:function(){return this.width}},{key:"setWidth",value:function(e){this.width=e}},{key:"getCollisionBox",value:function(){return new a.default(this.position.x,this.position.y,this.width,this.height)}},{key:"render",value:function(e){e.drawImage(this.material.getSprite(),this.position.x,this.position.y,this.width,this.height)}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,n){i(this,e),this.x=t,this.y=n}return o(e,[{key:"set",value:function(e,t){this.x=e,this.y=t}},{key:"setVector",value:function(e){this.x=e.x,this.y=e.y}},{key:"add",value:function(e){this.x+=e.x,this.y+=e.y}},{key:"sub",value:function(e){this.x-=e.x,this.y-=e.y}},{key:"mult",value:function(e){this.x*=e,this.y*=e}},{key:"div",value:function(e){this.x/=e,this.y/=e}},{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"negative",value:function(){return new e(-this.x,-this.y)}},{key:"normalize",value:function(){var e=this.mag();0!==e&&this.div(e)}},{key:"limit",value:function(e){this.mag()>e&&(this.normalize(),this.mult(e))}},{key:"heading",value:function(){}},{key:"rotate",value:function(){}},{key:"lerp",value:function(){}},{key:"distanceTo",value:function(e){return Math.sqrt(Math.pow(e.x-this.x,2)+Math.pow(e.y-this.y,2))}},{key:"angleBetween",value:function(){}},{key:"dot",value:function(){}},{key:"cross",value:function(){}},{key:"random2D",value:function(){}},{key:"random3D",value:function(){}},{key:"clone",value:function(){return new e(this.x,this.y)}}],[{key:"add",value:function(t,n){return new e(t.x+n.x,t.y+n.y)}},{key:"sub",value:function(t,n){return new e(t.x-n.x,t.y-n.y)}},{key:"mult",value:function(t,n){return new e(t.x*n,t.y*n)}},{key:"div",value:function(t,n){return new e(t.x/n,t.y/n)}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),s=function(e){function t(e,n,r,u,a){i(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r,u,a));return s.solid=!0,s}return r(t,a.default),u(t,[{key:"isSolid",value:function(){return this.solid}},{key:"setSolid",value:function(e){this.solid=e}}]),t}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){i(this,e),this.name=t,this.sprite=null}return o(e,[{key:"setSprite",value:function(e){this.sprite=e}},{key:"getSprite",value:function(){return this.sprite}},{key:"getName",value:function(){return this.name}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){e.clearRect(0,0,t.canvas.width,t.canvas.height),t.update(),t.render(e),window.requestAnimationFrame(function(){return o(e,t)})}function r(){var e=document.getElementById("game");if(e.getContext){var t=e.getContext("2d"),n=new a.default("Player1",100,100,60,60,new d.default("player")),i=new s.default(0,0,e.width,e.height,new d.default("background")),r=[],y=new c.default(i),p=new c.default(i),v=new c.default(i),b=[],g=new l.default,w=new u.default(i,n,g),k=new f.default,m=new h.default(e),x="block",_=null,j=[[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,_,_,_,_,x,x,_,_,_,x],[x,_,_,_,_,_,_,_,_,_,_,_,_,_,x],[x,x,x,x,x,x,x,x,_,_,_,_,_,_,"secret"],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]],O=[[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,x,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,_,_,_,_,x,x,x,x,x,x],[x,_,_,_,_,_,_,_,_,_,_,_,_,_,x],["secret",_,_,_,_,_,x,x,_,_,_,_,_,_,x],[x,x,x,x,x,x,x,x,x,x,x,x,_,_,x]],M=[[x,x,x,x,x,x,x,x,x,x,x,x,_,_,x],[x,_,_,_,_,_,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,_,_,_,_,_,_,_,_,x,x],[x,_,_,_,_,_,_,_,_,_,_,_,x,x,x],[x,x,x,x,x,x,_,_,_,x,x,x,x,x,x],[x,_,_,_,_,_,_,_,_,_,_,_,_,_,x],[x,_,_,_,_,_,x,x,_,_,_,_,_,_,x],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]];n.keyActionsRegister=m.getKeyActionsRegister(),y.right=p,p.left=y,p.bottom=v,v.top=p,y.generateBlocks(j),p.generateBlocks(O),v.generateBlocks(M),r.push(y),r.push(p),r.push(v),w.areas=r,w.current=w.areas[0],w.assetManager=k,w.audioManager.load("ambient","assets/audio/ambient/ambient.mp3",function(){return w.audioManager.playSound("ambient",!0)}),w.audioManager.load("jump","assets/audio/effects/jump.wav",function(){b.push(i),b.push(n),b=b.concat(y.blocks),b=b.concat(p.blocks),b=b.concat(v.blocks),k.queueDownload("background","assets/textures/background.jpg"),k.queueDownload("player","assets/textures/player.png"),k.queueDownload("stone-block","assets/textures/stone-block.jpg"),k.queueDownload("heart","assets/textures/heart.png"),k.downLoadAll(function(){b.forEach(function(e){return e.material.setSprite(k.getAsset(e.material.getName()))}),o(t,w)})})}else document.getElementById("unsupported").textContent="Please update your browser or download another one which supports HTML5"}var u=i(n(5)),a=i(n(6)),s=i(n(8)),c=i(n(9)),l=i(n(10)),f=i(n(11)),h=i(n(12)),d=i(n(3));$(document).ready(function(){return r()})},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,n,o){i(this,e),this.audioManager=o,this.canvas=t,this.player=n,this.running=!1,this.areas=[],this.blocks=[]}return o(e,[{key:"run",value:function(){this.running=!0}},{key:"pause",value:function(){this.running=!1}},{key:"update",value:function(){this.player.move(this),this.player.checkEdges(this)}},{key:"render",value:function(e){this.canvas.render(e),this.player.render(e),this.current.blocks.forEach(function(t){return t.render(e)}),this.player.drawHearts(this,e)}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=i(n(0)),c=i(n(2)),l=i(n(1)),f=function(e){function t(e,n,i,u,a,s){o(this,t);var c=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,i,u,a,s));return c.name=e,c.lives=3,c.speed=3.6,c.running=!1,c.jumping=!1,c.grounded=!1,c.history=[],c.friction=.8,c.gravity=.2,c}return u(t,s.default),a(t,[{key:"move",value:function(e){var t=this;(this.keyActionsRegister.w||this.keyActionsRegister[" "])&&!this.jumping&&this.grounded&&(e.audioManager.playSound("jump"),this.jumping=!0,this.grounded=!1,this.velocity.y=2*-this.speed),this.keyActionsRegister.a&&this.velocity.x>-this.speed&&this.velocity.x--,this.keyActionsRegister.d&&this.velocity.x<this.speed&&this.velocity.x++,this.velocity.x*=this.friction,this.velocity.y+=this.gravity,this.grounded=!1,e.current.blocks.forEach(function(e){var n=t.checkCollision(t,e);"l"===n||"r"===n?(t.velocity.x=0,t.jumping=!1):"b"===n?(t.grounded=!0,t.jumping=!1):"t"===n&&(t.velocity.y*=-1)}),this.grounded&&(this.velocity.y=0),this.position.add(this.velocity)}},{key:"goBack",value:function(){0!==this.history.length&&this.position.set(this.history[this.history.length-1])}},{key:"gainLife",value:function(){this.lives+=1}},{key:"loseLife",value:function(){this.lives-=1}},{key:"toggleRun",value:function(){this.running=!this.running}},{key:"checkCollision",value:function(e,t){if(!(t instanceof c.default)||t.solid){var n=e.position.x+e.width/2-(t.position.x+t.width/2),i=e.position.y+e.height/2-(t.position.y+t.height/2),o=e.width/2+t.width/2,r=e.height/2+t.height/2,u=null;if(Math.abs(n)<o&&Math.abs(i)<r){var a=o-Math.abs(n),s=r-Math.abs(i);a>=s?i>0?(u="t",e.position.y+=s):(u="b",e.position.y-=s,e.jumping=!1):n>0?(u="l",e.position.x+=a):(u="r",e.position.x-=a)}return u}}},{key:"checkEdges",value:function(e){this.position.x>e.canvas.width&&e.current.hasRight()?(e.current=e.current.right,this.position.x=e.current.blocks[0].width):this.position.x<0&&e.current.hasLeft()?(e.current=e.current.left,this.position.x=e.canvas.width-e.current.blocks[0].width):this.position.y>e.canvas.height?(e.current=e.current.bottom,this.position.y=e.current.blocks[0].height):this.position.y<0&&(e.current=e.current.top,this.position.y=e.canvas.height-e.current.blocks[0].height)}},{key:"drawHearts",value:function(e,t){for(var n=new l.default(e.canvas.width-35,5),i=0;i<e.player.lives;i++)t.drawImage(e.assetManager.cache.heart,n.x,n.y,30,30),n.x-=30}}]),t}();t.default=f},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t,n,o,r){i(this,e),this.x=t,this.y=n,this.width=o,this.height=r}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),a=function(e){function t(e,n,r,u,a){i(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r,u,a));return s.name="default",s}return r(t,u.default),t}();t.default=a},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=i(n(3)),a=i(n(2)),s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;o(this,e),this.canvas=t,this.top=n,this.bottom=i,this.left=r,this.right=u,this.blocks=[]}return r(e,[{key:"generateBlocks",value:function(e){for(var t=this.canvas.width/e[0].length,n=this.canvas.height/e.length,i=0,o=0,r=0;r<e.length;r++){for(var s=0;s<e[r].length;s++){if("block"===e[r][s])this.blocks.push(new a.default(i,o,t,n,new u.default("stone-block")));else if("secret"===e[r][s]){var c=new a.default(i,o,t,n,new u.default("stone-block"));c.solid=!1,this.blocks.push(c)}i+=t}o+=n,i=0}}},{key:"hasLeft",value:function(){return null!==this.left}},{key:"hasRight",value:function(){return null!==this.right}}]),e}();t.default=s},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this.bufferCache=[];try{window.AudioContext=window.AudioContext||window.webkitAudioContext,this.context=new AudioContext}catch(e){alert("Web Audio API is not supported in this browser")}}return o(e,[{key:"load",value:function(e,t,n){var i=this,o=new XMLHttpRequest;o.open("GET",t,!0),o.responseType="arraybuffer",o.onload=function(){i.context.decodeAudioData(o.response,function(t){i.bufferCache[e]=t,n()},function(e){return console.log("Failed to load file",e)})},o.send()}},{key:"playSound",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.context.createBufferSource();n.buffer=this.bufferCache[e],n.connect(this.context.destination),t&&(n.loop=t,n.loopEnd=Math.floor(n.buffer.duration)),n.start(0)}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this.downloadQueue=[],this.cache={},this.succesCount=0,this.errorCount=0}return o(e,[{key:"queueDownload",value:function(e,t){this.downloadQueue.push({name:e,path:t})}},{key:"downLoadAll",value:function(e){var t=this;0===this.downloadQueue.length&&e();var n=this;this.downloadQueue.forEach(function(i){var o=new Image;o.addEventListener("load",function(){n.succesCount+=1,n.done()&&e()},!1),o.addEventListener("error",function(){n.errorCount+=1,n.done()&&e()},!1),o.src=i.path,t.cache[i.name]=o})}},{key:"getAsset",value:function(e){return this.cache[e]}},{key:"done",value:function(){return this.downloadQueue.length===this.succesCount+this.errorCount}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t){i(this,e),this.canvas=t,this.initializeKeyHandler(),this.keyActionsRegister=[]}return o(e,[{key:"initializeKeyHandler",value:function(){var e=this;this.canvas.addEventListener("keydown",function(t){e.keyActionsRegister[t.key]=!0}),this.canvas.addEventListener("keyup",function(t){e.keyActionsRegister[t.key]=!1})}},{key:"getKeyActionsRegister",value:function(){return this.keyActionsRegister}}]),e}();t.default=r}]);