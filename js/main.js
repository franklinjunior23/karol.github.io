let nav = document.getElementById('nav-content');
window.addEventListener("scroll",function(){
    nav.classList.toggle("header-sticky",window.scrollY>0)
})