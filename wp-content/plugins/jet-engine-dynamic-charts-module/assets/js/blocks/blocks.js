!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);n.n(r)},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.i18n.__,a=wp.blocks.registerBlockType,c=wp.editor,u=(c.InspectorControls,c.ColorPalette,c.RichText,c.Editable,c.MediaUpload,c.ServerSideRender,wp.components),s=u.SelectControl,p=u.Placeholder,h=(u.Disabled,u.G,u.Path),f=(u.Circle,u.Rect),w=u.SVG,d=wp.element.createElement(w,{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none"},wp.element.createElement(f,{fill:"white",x:"1",y:"5",width:"44",height:"53",rx:"3",stroke:"#162B40",strokeWidth:"2"}),wp.element.createElement(h,{d:"M7 49C7 47.3431 8.34315 46 10 46H21C22.6569 46 24 47.3431 24 49C24 50.6569 22.6569 52 21 52H10C8.34315 52 7 50.6569 7 49Z",fill:"#4AF3BA",stroke:"#162B40",strokeWidth:"2"}),wp.element.createElement(f,{fill:"white",x:"7",y:"33",width:"32",height:"6",rx:"1",stroke:"#162B40",strokeWidth:"2"}),wp.element.createElement(f,{fill:"white",x:"7",y:"23",width:"32",height:"6",rx:"1",stroke:"#162B40",strokeWidth:"2"}),wp.element.createElement(f,{fill:"white",x:"6.5",y:"14.5",width:"18",height:"1",rx:"0.5",stroke:"#162B40"}),wp.element.createElement(f,{fill:"white",x:"6.5",y:"10.5",width:"33",height:"1",rx:"0.5",stroke:"#162B40"})),m=window.JetEngineListingData.atts.dynamicChart;a("jet-engine/dynamic-chart",{title:l("Dynamic Chart"),icon:d,category:"layout",attributes:m,className:"jet-chart",edit:function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=window.JetEngineListingData.chartsList;return[wp.element.createElement(p,{instructions:"Here you can select chart you want to render. Actual chart will be rendered on front-end for better editor performance",label:"Dynamic Chart",isColumnLayout:!0,key:"dynamic-chart-placeholder"},wp.element.createElement("div",null,wp.element.createElement(s,{label:l("Select chart"),value:t.chart_id,options:n,onChange:function(t){e.setAttributes({chart_id:t})}})))]}}]),t}(wp.element.Component),save:function(e){return null}})}]);