(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{451:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(452),l=n(446);function c(t,e){Object(l.a)(2,arguments);var n=Object(r.a)(t),c=Object(r.a)(e);return n.getTime()===c.getTime()}},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(447),l=n(446);function c(t){Object(l.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}},459:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(447),l=n(446);function c(t){return Object(l.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},462:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(451),l=n(446);function c(t){return Object(l.a)(1,arguments),Object(r.a)(t,Date.now())}},478:function(t,e,n){"use strict";n.r(e);var r=n(31),l=n(459),c=n(481),o=n(462),f=n(525),d=Object(r.b)({props:{milestone:{type:Object,required:!0}},setup:function(t){var e=Object(r.a)((function(){return Object(l.a)(Object(c.a)(t.milestone.deadline))||Object(o.a)(Object(c.a)(t.milestone.deadline))}));return{format:f.a,isFutureMilestone:e}}}),m=n(15),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:t.isFutureMilestone?"text-pink-600":"text-gray-300",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!t.isFutureMilestone}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/milestone/"+t.milestone.slug}},[t._v(t._s(t.milestone.title))])],1),t._v(" "),n("p",[t._v("Due "+t._s(t.format(new Date(t.milestone.deadline),"MMM d")))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(149).default})},481:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(450),l=n(446),c=36e5,o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,m=/^([+-])(\d{2})(?::?(\d{2}))?$/;function v(t,e){Object(l.a)(1,arguments);var n=e||{},c=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==c&&1!==c&&0!==c)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,f=D(t);if(f.date){var d=w(f.date,c);o=N(d.restDateString,d.year)}if(isNaN(o)||!o)return new Date(NaN);var m,v=o.getTime(),time=0;if(f.time&&(time=T(f.time),isNaN(time)||null===time))return new Date(NaN);if(!f.timezone){var j=new Date(v+time),O=new Date(0);return O.setFullYear(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate()),O.setHours(j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),j.getUTCMilliseconds()),O}return m=C(f.timezone),isNaN(m)?new Date(NaN):new Date(v+time+m)}function D(t){var e,n={},r=t.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=t.split(o.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var l=o.timezone.exec(e);l?(n.time=e.replace(l[1],""),n.timezone=l[1]):n.time=e}return n}function w(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var l=r[1]&&parseInt(r[1]),c=r[2]&&parseInt(r[2]);return{year:null==c?l:100*c,restDateString:t.slice((r[1]||r[2]).length)}}function N(t,e){if(null===e)return null;var n=t.match(f);if(!n)return null;var r=!!n[4],l=j(n[1]),c=j(n[2])-1,o=j(n[3]),d=j(n[4]),m=j(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,d,m)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var l=r.getUTCDay()||7,c=7*(e-1)+n+1-l;return r.setUTCDate(r.getUTCDate()+c),r}(e,d,m):new Date(NaN);var v=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(h[e]||(x(t)?29:28))}(e,c,o)&&function(t,e){return e>=1&&e<=(x(t)?366:365)}(e,l)?(v.setUTCFullYear(e,c,Math.max(l,o)),v):new Date(NaN)}function j(t){return t?parseInt(t):1}function T(t){var e=t.match(d);if(!e)return null;var n=O(e[1]),r=O(e[2]),l=O(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,l)?n*c+6e4*r+1e3*l:NaN}function O(t){return t&&parseFloat(t.replace(",","."))||0}function C(t){if("Z"===t)return 0;var e=t.match(m);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),l=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,l)?n*(r*c+6e4*l):NaN}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function x(t){return t%400==0||t%4==0&&t%100}}}]);