function login() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    var a = document.getElementById("page");
    var log = {'Ninad123': '123', 'ABC123': '123', 'Suyash123': '123'};
    if(log[name] == pass) {
        a.href = "successful.html";
    }
    else {
        a.href = "unsuccess.html"
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}