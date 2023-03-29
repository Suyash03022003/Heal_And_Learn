function scroll() {
    var len = 25;
    var nav = document.getElementById('nav');
    var drawer = document.getElementById('drawer');
    if (window.pageYOffset > len) {
        nav.style.backgroundColor = '#E3FFCC';
        nav.classList.add("shadow");
        drawer.src = 'images/drawer.png';
    }
    else {
        nav.style.backgroundColor = 'transparent';
        nav.classList.remove("shadow");
        drawer.src = 'images/drawer_light.png';
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}