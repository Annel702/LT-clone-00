/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
* @version 2.1.0
*/
var Iconify=function(e){"use strict";var n=/^[a-z0-9]+(-[a-z0-9]+)*$/,r=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function t(e){return Object.assign({},r,e)}function i(e,n,i){void 0===i&&(i=!1);var o=function n(t,i){var o,a,c,f;if(void 0!==e.icons[t])return Object.assign({},e.icons[t]);if(i>5)return null;if(void 0!==(null==(o=e.aliases)?void 0:o[t])){var u=null==(a=e.aliases)?void 0:a[t],s=n(u.parent,i+1);return s?function(e,n){var t=Object.assign({},e);for(var i in r){var o=i;if(void 0!==n[o]){var a=n[o];if(void 0===t[o]){t[o]=a;continue}switch(o){case"rotate":t[o]=(t[o]+a)%4;break;case"hFlip":case"vFlip":t[o]=a!==t[o];break;default:t[o]=a}}}return t}(s,u):s}return 0===i&&void 0!==(null==(c=e.chars)?void 0:c[t])?n(null==(f=e.chars)?void 0:f[t],i+1):null}(n,0);if(o)for(var a in r)void 0===o[a]&&void 0!==e[a]&&(o[a]=e[a]);return o&&i?t(o):o}var o=/^[a-f0-9]+(-[a-f0-9]+)*$/;function a(e,n){for(var r in e){var t=r,i=typeof e[t];
    if("undefined"!==i)switch(r){case"body":case"parent":if("string"!==i)return r;
    break;
    case"hFlip":case"vFlip":case"hidden":if("boolean"!==i){if(!n)return r;
        delete e[t]}break;