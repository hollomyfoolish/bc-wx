setTimeout(function(){},2e3),function(){var e=document.querySelector.bind(document),t={container:e("#homeContainer"),searBtn:e("#searchTab"),lineBtn:e("#lineTab"),findBtn:e("#findTab")};[t.searBtn,t.lineBtn,t.findBtn].forEach(function(n){n.addEventListener("click",function(){t.container.querySelector(".tab-selected").classList.remove("tab-selected"),n.classList.add("tab-selected"),t.container.querySelector(".active").classList.remove("active"),e("#"+n.getAttribute("data-for")).classList.add("active")},!1)})}();