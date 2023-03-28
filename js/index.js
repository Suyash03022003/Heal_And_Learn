function scroll() {
    var len = 50;
    var nav = document.getElementById('nav');
    if(window.pageYOffset > len) {
        nav.style.backgroundColor = '#E3FFCC';
        nav.classList.add("shadow");
    }
    else {
        nav.style.backgroundColor = 'transparent';
        nav.classList.remove("shadow");
    }
}