document.addEventListener("DOMContentLoaded",(function(){var t="hostinger_add_new_ai_post",e=wp.i18n.__("Add New with AI","hostinger-ai-assistant");if("undefined"!=typeof hostingerAiAssistant){var n=hostingerAiAssistant.tabUrl;'<a id="'.concat(t,'" class="components-button is-primary" href="').concat(n,'" >').concat(e,"</a>")}var i=document.getElementById("editor");i&&wp.data.subscribe((function(){setTimeout((function(){if(!document.getElementById(t)){var e=i.querySelector(".edit-post-header__toolbar");e instanceof HTMLElement&&"undefined"!=typeof link_html&&e.insertAdjacentHTML("beforeend",link_html)}}),1)}))}));