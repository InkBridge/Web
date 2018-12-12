var width = screen.width;

if (width <= 992) {
    var notifbutton = document.getElementById("notification");
    notifbutton.style.display = 'block';
} else {
    var notifbutton = document.getElementById("notification");
    notifbutton.style.display = 'none';
}

function shownotif() {
    var prewidth = screen.width;
    if (prewidth <= 992) {
        var notifshow = document.getElementById("notif-top");
        if(notifshow.style.display == 'block')
            notifshow.style.display = 'none';
        else
            notifshow.style.display = 'block'
    }
}