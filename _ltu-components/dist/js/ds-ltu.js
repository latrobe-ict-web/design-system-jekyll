!function(){"use strict";var e,o,i,s,c,d;function t(){var i=0,s=0,c=0,d=0,l=[],e=document.querySelectorAll(".ds-card-set--comparison .ds-card");e.forEach(function(e){var t=e.querySelector(".ds-card__heading"),n=e.querySelector(".ds-card__status-info"),r=e.querySelector(".ds-card__info"),a=e.querySelector(".ds-card__checklist"),e=e.querySelectorAll(".ds-accordion .ds-accordion__trigger");try{t.clientHeight>i&&(i=t.clientHeight)}catch(e){console.log("no card heading")}try{n.clientHeight>c&&(c=n.clientHeight)}catch(e){console.log("no card statuses")}try{r.clientHeight>s&&(s=r.clientHeight)}catch(e){console.log("no card info?")}try{a.clientHeight>d&&(d=a.clientHeight)}catch(e){console.log("no checklists")}try{e.forEach(function(e,t){void 0===l[t]&&50<e.clientHeight&&l.push(e.clientHeight),e.clientHeight>l[t]&&(l[t]=e.clientHeight)})}catch(e){console.log("no accordions")}}),e.forEach(function(e){var t=e.querySelector(".ds-card__heading"),n=e.querySelector(".ds-card__status-info"),r=e.querySelector(".ds-card__info"),a=e.querySelector(".ds-card__checklist"),o=e.querySelectorAll(".ds-accordion .ds-accordion__trigger"),e=e.querySelectorAll(".ds-accordion  .ds-accordion__trigger");try{t.style.height="",t.style.height=i+"px"}catch(e){}try{n.style.height="",n.style.height=c+"px"}catch(e){}try{r.style.height="",r.style.height=s+"px"}catch(e){}try{a.style.height="",a.style.height=d+"px"}catch(e){}try{o.forEach(function(e,t){e.style.height="",e.style.height=l[t]+"px"})}catch(e){}try{e.forEach(function(e,t){try{e.style.height="",e.style.height=l[t]+"px"}catch(e){}})}catch(e){}})}e=window,i=!(o={}),s=[],c={getSelector:function(e,t,n){return(e=[e||""]).push(n.children[t]),e[0].length?e[0]+=":not(.ds-no-js)":e[1].length&&(e[1]+=":not(.ds-no-js)"),e.join(" ")}},d={registerComponent:function(e,t){void 0===o[e]?(o[e]=Object.assign({setup:function(){},eventHandlers:{},helpers:{}},t),Object.freeze(o[e])):console.error("LTUDS : component "+e+" is already registered")},ready:function(e){return i?e():s.push(e)},components:o,getComponentKeys:function(){return Object.keys(o)},setupComponents:function(e,t){n="setup",e=e||d.getComponentKeys(),r=t||{},e.forEach(function(e){var t;return o[e][n]&&(t=o[e])[n].apply(t,[c].concat(r[e]||[]))}),i=!0;var n,r,a,t=new CustomEvent("ltuds:ready",{detail:{LTUDS:d}});for(dispatchEvent(t);a=s.shift();)try{a()}catch(e){console.error(e)}}},e.LTUDS=d,jQuery(document).ready(function(t){var e="accordion",n={container:".ds-accordion",children:{trigger:".ds-accordion__trigger"}};function r(e){t(e).each(function(){"true"==t(this).attr("aria-expanded")&&t(this).parent().next(".ds-accordion__content").show()})}function a(e){"true"==t(this).attr("aria-expanded")?t(this).attr("aria-expanded","false"):t(this).attr("aria-expanded","true"),t(this).parent().next(".ds-accordion__content").slideToggle()}window.LTUDS.registerComponent(e,{eventHandlers:{triggerOnClick:a},helpers:{openAccordionOnLoad:r},setup:function(e){e=(0,e.getSelector)(n.container,"trigger",n);r(e),jQuery(document.body).off("click",e,a).on("click",e,a)}})}),jQuery(document).ready(function(t){var e="alert",n={container:".ds-alert",children:{close:".ds-alert__close"}};function r(e){t(this).parent().remove()}window.LTUDS.registerComponent(e,{eventHandlers:{closeOnClick:r},setup:function(e){e=(0,e.getSelector)(n.container,"close",n);jQuery(document.body).off("click",e,r).on("click",e,r)}})}),$(document).ready(function(){t(),addEventListener("resize",function(e){t()})}),$(document).ready(function(){$(".ds-scroll-left").hide(),$(".ds-card-set--comparison").addClass("ds-card-set--comparison__first")});var l=420;document.querySelectorAll(".ds-card-set--comparison > .ds-card").length;$(".ds-scroll-left").click(function(){var n,r=this.nextElementSibling,a=(r.querySelectorAll(".ds-card").length,42),o=parseInt(r.dataset.currentpos),i=(r.dataset.atlast,0),s=!1;window.requestAnimationFrame(function e(t){n!==t&&("true"==r.dataset.atlast?(console.log("at last is true. go",r.dataset),r.classList.remove("ds-card-set--comparison__last"),$(r.nextElementSibling).show(),r.scrollLeft=r.dataset.currentpos,o=parseInt(r.dataset.currentpos),r.dataset.atlast=!1):(r.classList.remove("ds-card-set--comparison__first"),r.scrollLeft-=a,i+=a,o-=l,r.dataset.currentpos=o),0===r.scrollLeft&&(console.log("first"),$(r.previousElementSibling).hide(),$(r.nextElementSibling).show(),r.classList.add("ds-card-set--comparison__first"),r.classList.remove("ds-card-set--comparison__last"),o=0,r.dataset.currentpos=0,r.dataset.atlast=!1,s=!0),r.scrollLeft!==parseInt(o)-l&&i!==12*a||(s=!0,i=0,o-=l,r.dataset.currentpos=o)),s?window.cancelAnimationFrame(e):window.requestAnimationFrame(e)})}),$(".ds-scroll-right").click(function(){var n,r=this.previousElementSibling,a=parseInt(r.dataset.currentpos),o=28,i=r.querySelectorAll(".ds-card").length,s=(r.dataset.atlast,$(r.previousElementSibling).show(),r.classList.remove("ds-card-set--comparison__first"),!1);window.requestAnimationFrame(function e(t){n!==t&&(r.scrollLeft+=o,r.scrollWidth-r.scrollLeft===r.clientWidth&&(console.log("last"),$(r.nextElementSibling).hide(),r.classList.add("ds-card-set--comparison__last"),a=l*i,r.dataset.currentpos=a,r.dataset.atlast=!0,s=!0),r.scrollLeft===parseInt(a)+l)&&(s=!0,a+=l,r.dataset.currentpos=a),s?window.cancelAnimationFrame(e):window.requestAnimationFrame(e)})}),$(document).ready(function(){document.querySelectorAll(".ds-card-set--comparison").forEach(function(e){3===e.querySelectorAll(".ds-card-set--comparison > .ds-card").length&&(e.classList.add("ds-card-set-comparison--3max"),e.classList.add("ds-card-set--comparison__first"),e.classList.add("ds-card-set--comparison__last"),e.previousElementSibling.style.display="none",e.nextElementSibling.style.display="none")})}),$(document).ready(function(){function e(){var e=$(".ds-page-nav-container").offset().top-$(window).scrollTop();1024<=$(window).width()&&e==t?$(".ds-page-nav-container").addClass("ds-page-nav-container--stuck"):$(".ds-page-nav-container").removeClass("ds-page-nav-container--stuck")}var t;0<$(".ds-page-nav-container").length&&(t=parseInt($(".ds-page-nav-container").css("top"),10),e(),$(window).scroll(function(){e()}),$(window).on("resize",function(){t=parseInt($(".ds-page-nav-container").css("top"),10),e()}))}),jQuery(document).ready(function(a){var e="collapse",t={container:"",children:{trigger:".ds-collapse__trigger"}};function n(e){var t,n=a(e.currentTarget).attr("aria-controls"),r=(r=e.currentTarget,t="",t=r.closest(".ds-modal")?".ds-modal ":t);"false"==a(e.currentTarget).attr("aria-expanded")?(a(e.currentTarget).attr("aria-expanded","true"),a(r+'[id="'+n+'"]').slideDown(function(){a(e.currentTarget).removeAttr("hidden")})):(a(e.currentTarget).attr("aria-expanded","false"),a(r+'[id="'+n+'"]').slideUp(function(){a(e.currentTarget).attr("hidden","hidden")}))}window.LTUDS.registerComponent(e,{eventHandlers:{triggerOnClick:n},setup:function(e){e=(0,e.getSelector)(t.container,"trigger",t);jQuery(document.body).off("click",e,n).on("click",e,n)}})}),$(document).ready(function(){$("#show-course-filters").click(function(){var e=document.querySelector("#show-course-filters"),t=$(".ds-filter-megamenu");"Hide filters"===e.textContent?(e.textContent="Show filters",e.classList.add("ds-btn--ghost"),e.classList.remove("ds-btn--ghost__active"),t.slideUp()):(e.textContent="Hide filters",e.classList.add("ds-btn--ghost__active"),e.classList.remove("ds-btn--ghost"),t.slideDown())}),$(".ds-filter-group__nav__tab, .ds-filter-group__nav__label").click(function(){var e=$(this).attr("aria-controls"),t=$(".ds-filter-megamenu");"false"==$(this).attr("aria-expanded")?($(this).siblings().each(function(){var e=$(this).attr("aria-controls");$("#"+e).hide().attr("hidden","hidden"),$(this).attr("aria-expanded","false")}),$(this).attr("aria-expanded","true"),$("#"+e).slideDown(function(){$(this).removeAttr("hidden")}),t.slideDown()):($(this).attr("aria-expanded","false"),t.slideUp(),$("#"+e).slideUp(function(){$(this).attr("hidden","hidden")}))})}),jQuery(document).ready(function(n){var t={name:"image-gallery",selectors:{container:"",children:{triggers:[[".ds-image-gallery",".ds-image-gallery__image"],[".ds-image-gallery__more","button"]]}}};function r(e){e.preventDefault();var e=e.target,t=n(this).parents(".ds-image-gallery").html();LTUDS.components.modal.helpers.openModal(e,t,"medium")}window.LTUDS.registerComponent(t.name,{eventHandlers:{triggerOnClick:r},setup:function(e){var n=e.getSelector,e=t.selectors.children.triggers.map(function(e){var t=e[0],e=e[1];return n(t,"trigger",{children:{trigger:e}})}).join(", ");jQuery(document.body).off("click",e,r).on("click",e,r)}})}),jQuery(document).ready(function(a){var e="modal",n={container:"",children:{modal:".ds-modal",trigger:"[data-modal-content]"}};function o(e,t,n,r){void 0===n&&(n="800px"),void 0===r&&(r="no"),a(e).attr("data-returnfocus","yes");e=a('<div class="ds-modal overlay" role="dialog" aria-modal="true">\n<div class="ds-modal-dialog">'+t+"</div></div>");a(document.body).append(e).addClass("overlay-open"),e.find(".ds-modal-dialog").css("max-width",n),e.fadeIn(function(){a(this).find('button:visible, [href]:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"]):visible').eq(0).focus(),"yes"==r?a(this).addClass("static-backdrop"):a(this).append('<button id="overlay-close" class="ds-btn-round ds-btn--light ds-icon-x">Close</button>')})}function t(){a(".ds-modal").fadeOut(function(){a(this).remove();a('[data-returnfocus="yes"]').focus().removeAttr("data-returnfocus"),a(document.body).removeClass("overlay-open")})}function r(e){a(this).hasClass("static-backdrop")||!a(e.target).is("#overlay-close")&&!a(e.target).is(".ds-modal")||void 0!==e.keyCode&&13!=e.keyCode&&27!=e.keyCode||(e.preventDefault(),t(a(this)))}function i(e){e.preventDefault();var e=e.target,t=a(e).attr("data-modal-content"),n=a(e).attr("data-modal-width"),n="medium"==n?"1024px":"large"==n?"1280px":"800px",r=a(e).attr("data-static-backdrop");o(e,a("<div/>").append(a("#"+t).clone()).html(),n,r)}window.LTUDS.registerComponent(e,{eventHandlers:{triggerOnClick:i,modalOnClick:r},helpers:{openModal:o,closeModal:t},setup:function(e){var e=e.getSelector,t=e(n.container,"trigger",n),e=e(n.container,"modal",n);jQuery(document.body).off("click",t,i).on("click",t,i),jQuery(document.body).off("click keydown",e,r).on("click keydown",e,r)}})}),$(document).ready(function(){var e,t,n;0<$(".ds-hero-promo__text").length&&0<$("#logo h1 img").length&&(e=$(window).width(),t=$(this).scrollTop(),n=$(".ds-hero-promo__text").offset().top,1023<e&&(n<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")),$(window).scroll(function(){t=$(this).scrollTop(),1023<e&&(n<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)"))}),$(window).resize(function(){!(1023<(e=$(window).width()))||n<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")}))}),jQuery(document).ready(function(o){var e="tab",t={container:".ds-tabs",children:{navTab:".ds-tabs-nav__tab"}},i={end:35,home:36,left:37,up:38,right:39,down:40,delete:46,enter:13,space:32},s={37:-1,38:-1,39:1,40:1};function n(){d(o(this),!1)}function r(e){var t=e.keyCode,n=o(this),r=n.parent();switch(t){case i.end:e.preventDefault(),u(o(r).children());break;case i.home:e.preventDefault(),l(o(r).children());break;case i.up:case i.down:c(r,n,e)}}function a(e){var t=e.keyCode,n=o(this),r=n.parent();switch(t){case i.left:case i.right:c(r,n,e);break;case i.enter:case i.space:d(n)}}function c(e,t,n){var r=n.keyCode,a=!1;"vertical"==e.attr("aria-orientation")?r!==i.up&&r!==i.down||(n.preventDefault(),a=!0):r!==i.left&&r!==i.right||(a=!0),a&&(r=e,a=t,t=(e=n).keyCode,r=o(r).children(),a=r.index(a),s[t])&&(e.target,void 0!==a)&&(r[a+s[t]]?r[a+s[t]].focus():t===i.left||t===i.up?u(r):t!==i.right&&t!=i.down||l(r))}function d(e,t){t=t||!0;var n,r,a=e.attr("id"),a=o('[aria-labelledby="'+a+'"]');r=a,(n=e).attr("tabindex","-1").siblings('[role="tab"]').attr("tabindex","-1"),n.attr("aria-selected","false").siblings(".ds-tabs-nav__tab").attr("aria-selected","false"),r.attr("hidden","hidden").siblings('[role="tabpanel"]').attr("hidden","hidden"),e.removeAttr("tabindex"),e.attr("aria-selected","true"),a.removeAttr("hidden"),t&&e.focus()}function l(e){e.first().focus()}function u(e){e.last().focus()}function h(){var e=document.location.toString();e.match("#")&&(e=document.getElementById(e.split("#")[1]))&&e.click()}window.LTUDS.registerComponent(e,{eventHandlers:{navTabOnClick:n,navTabOnKeyDown:r,navTabOnKeyUp:a},helpers:{activateTabOnLoad:h},setup:function(e){e=(0,e.getSelector)(t.container,"navTab",t);jQuery(document).off("click",e,n).on("click",e,n).off("keydown",e,r).on("keydown",e,r).off("keyup",e,a).on("keyup",e,a),h()}})}),jQuery(document).ready(function(){$("table").each(function(){$(this).parent().hasClass("ds-table-wrapper")||$(this).wrap('<div class="ds-table-wrapper"></div>')})}),jQuery(document).ready(function(n){var e="modal-video",t={container:"",children:{trigger:"a[data-youtube]"}};function r(e){e.preventDefault();var e=e.target,t=n(e).attr("data-youtube");LTUDS.components.modal.helpers.openModal(e,'<div class="ds-video ds-video--fullwidth"><div class="ds-video__wrapper"><iframe id="vid-'+t+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+t+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>',"medium")}window.LTUDS.registerComponent(e,{eventHandlers:{triggerOnClick:r},setup:function(e){e=(0,e.getSelector)(t.container,"trigger",t);jQuery(document.body).off("click",e,r).on("click",e,r)}})}),jQuery(document).ready(function(){LTUDS.setupComponents()})}();
//# sourceMappingURL=ds-ltu.js.map
