!function(){"use strict";jQuery(document).ready(function(e){e(".ds-accordion__trigger").each(function(){"true"==e(this).attr("aria-expanded")&&e(this).parent().next(".ds-accordion__content").show()}),e(".ds-accordion__trigger").click(function(){"true"==e(this).attr("aria-expanded")?e(this).attr("aria-expanded","false"):e(this).attr("aria-expanded","true"),e(this).parent().next(".ds-accordion__content").slideToggle()})}),$(document).ready(function(){$(".ds-alert__close").on("click",function(){$(this).parent().remove()})}),$(document).ready(function(){$(".ds-collapse__trigger").click(function(){var e=$(this).attr("aria-controls");"false"==$(this).attr("aria-expanded")?($(this).attr("aria-expanded","true"),$("#"+e).slideDown(function(){$(this).removeAttr("hidden")}),$(this).removeClass("ds-icon-chevron-down").addClass("ds-icon-chevron-up")):($(this).attr("aria-expanded","false"),$("#"+e).slideUp(function(){$(this).attr("hidden","hidden")}),$(this).removeClass("ds-icon-chevron-up").addClass("ds-icon-chevron-down"))}),$(".ds-collapse__close").click(function(){var e=$(this).attr("aria-controls");$('.ds-collapse[aria-controls="'+e+'"]').trigger("click").focus()})}),jQuery(document).ready(function(o){o("body").on("click",".ds-image-gallery__image, .ds-image-gallery__more button",function(e){e.preventDefault();var t=e.target,a=o(this).parents(".ds-image-gallery");a=a.html(),openModal(t,a)})}),window.openModal=function(e,t,a){void 0===a&&(a="1280px"),$(e).attr("data-returnfocus","yes");var o='<div role="dialog" aria-modal="true" class="overlay"><div class="ds-modal">'+t+'</div><button id="overlay-close" class="ds-btn-round ds-btn--light ds-icon-x">Close</button></div>';$("body").append(o).addClass("overlay-open"),$(".ds-modal").css("max-width",a),$('.overlay[role="dialog"]').fadeIn(function(){$(this).find('button:visible, [href]:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"]):visible').eq(0).focus()})},jQuery(document).ready(function(i){i("body").on("click keydown",'#overlay-close, .overlay[role="dialog"]',function(e){void 0!==e.keyCode&&13!=e.keyCode&&27!=e.keyCode||(e.preventDefault(),i('.overlay[role="dialog"]').fadeOut(function(){i('.overlay[role="dialog"]').remove(),i('[data-returnfocus="yes"]').focus().removeAttr("data-returnfocus"),i("body").removeClass("overlay-open")}))}),i("body").on("click","[data-modal-content]",function(e){e.preventDefault();var t,a=e.target,o=i(a).attr("data-modal-content"),n=i(a).attr("data-modal-width");t="medium"==n?"1024px":"large"==n?"1280px":"800px";var r=i("<div/>").append(i("#"+o).clone()).html();openModal(a,r,t)})}),$(document).ready(function(){var e=$(window).width(),t=$(this).scrollTop(),a=$(".ds-hero-promo__text").offset().top;1023<e&&(a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")),$(window).scroll(function(){t=$(this).scrollTop(),1023<e&&(a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)"))}),$(window).resize(function(){!(1023<(e=$(window).width()))||a<t?$("#logo h1 img").css("transform","translateY(0)"):$("#logo h1 img").css("transform","translateY(-100%)")})}),function(){var o,n,r=document.querySelectorAll('[role="tablist"]')[0];function a(){o=document.querySelectorAll('[role="tab"]'),n=document.querySelectorAll('[role="tabpanel"]')}a();var e,i={end:35,home:36,left:37,up:38,right:39,down:40,delete:46,enter:13,space:32},d={37:-1,38:-1,39:1,40:1};for(e=0;e<o.length;++e)t(e);function t(e){o[e].addEventListener("click",s),o[e].addEventListener("keydown",l),o[e].addEventListener("keyup",c),o[e].index=e}function s(e){f(e.target,!1)}function l(e){switch(e.keyCode){case i.end:e.preventDefault(),h();break;case i.home:e.preventDefault(),v();break;case i.up:case i.down:u(e)}}function c(e){var t;switch(e.keyCode){case i.left:case i.right:u(e);break;case i.delete:target=(t=e).target,null!==target.getAttribute("data-deletable")&&(function(e){var t=e.target,a=document.getElementById(t.getAttribute("aria-controls"));t.parentElement.removeChild(t),a.parentElement.removeChild(a)}(t,target),a(),target.index-1<0?f(o[0]):f(o[target.index-1]));break;case i.enter:case i.space:f(e.target)}}function u(e){var t=e.keyCode,a=!1;"vertical"==r.getAttribute("aria-orientation")?t!==i.up&&t!==i.down||(e.preventDefault(),a=!0):t!==i.left&&t!==i.right||(a=!0),a&&function(e){var t=e.keyCode;if(d[t]){var a=e.target;void 0!==a.index&&(o[a.index+d[t]]?o[a.index+d[t]].focus():t===i.left||t===i.up?h():t!==i.right&&t!=i.down||v())}}(e)}function f(e,t){t=t||!0,function(){var e,t;for(e=0;e<o.length;e++)o[e].setAttribute("tabindex","-1"),o[e].setAttribute("aria-selected","false");for(t=0;t<n.length;t++)n[t].setAttribute("hidden","hidden")}(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true");var a=e.getAttribute("aria-controls");document.getElementById(a).removeAttribute("hidden"),t&&e.focus()}function v(){o[0].focus()}function h(){o[o.length-1].focus()}}();var e=document.location.toString();e.match("#")&&document.getElementById(e.split("#")[1]).click();jQuery(document).ready(function(){$("table").each(function(){$(this).parent().hasClass("ds-table-wrapper")||$(this).wrap('<div class="ds-table-wrapper"></div>')})}),$(".tabs-nav li:first-child").addClass("active"),$(".tab-content").hide(),$(".tab-content:first").show(),$(".tabs-nav li").click(function(){$(".tabs-nav li").removeClass("active"),$(this).addClass("active"),$(".tab-content").hide();var e=$(this).find("a").attr("href");return $(e).fadeIn(),!1}),jQuery(document).ready(function(o){o("body").on("click","a[data-youtube]",function(e){e.preventDefault();var t=e.target,a=o(t).attr("data-youtube");openModal(t,'<div class="ds-video ds-video--fullwidth"><div class="ds-video__wrapper"><iframe id="vid-'+a+'" width="560" height="315" type="text/html" src="https://www.youtube.com/embed/'+a+'?rel=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>')})})}();
//# sourceMappingURL=ds-ltu.js.map
