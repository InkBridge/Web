var flag = false;

function check() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (password1 == (password)) {
        return true;
    } else {
        alert("Passwords didn't match");
        return false;
    }
}

function alterflag() {
    flag = true;
}

function fillcheck() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var fullname = document.getElementById("fullname").value;
    var penname = document.getElementById("penname").value;
    var email = document.getElementById("email").value;
    var f = document.getElementById("next");
    if (flag == true)
        f.style.display = 'none';
    else {
        if (password.length != 0 && password1.length != 0 && fullname.length != 0 && penname.length != 0 &&
            email.length !=
            0) {
            f.style.display = 'block';
        } else {
            f.style.display = 'none';
        }
    }
}

function showafter() {
    document.getElementById('right').style.height = "100%";
    document.getElementById("right").style.borderLeft = "2px solid #000000";
    document.getElementById("LogoAndQuotes").style.borderRight = "0px";
    document.getElementById('next').style.display = "none";
    document.getElementById('after').style.display = "block";
    document.getElementById('extraquotes').style.display = "block";
}

var genreval;

function addgenre() {
    genreval = document.getElementById("genre").value;
    var tabledata = document.createElement("td");
    var buttonadd = document.createElement("button");
    var name = "btn btn-danger marg";
    var arr = buttonadd.className.split(" ");
    if (arr.indexOf(name) == -1) {
        buttonadd.className += " " + name;
    }
    var node = document.createTextNode(genreval);
    buttonadd.appendChild(node);
    if (genreval.length > 0) {
        tabledata.appendChild(buttonadd);
        var element = document.getElementById("frstrw");
        var child = document.getElementById("frstcl");
        element.insertBefore(tabledata, child);
        document.getElementById("genre").value = "";
    }
}

function enabler() {
    var i = 1;
    var check = document.getElementById("regoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById(i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById(i.toString());
            subele.disabled = true;
        }
    }
}

function enabler1() {
    var i = 1;
    var check = document.getElementById("intoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById("lang"+i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 5; i++) {
            var subele = document.getElementById("lang"+i.toString());
            subele.disabled = true;
        }
    }
}
