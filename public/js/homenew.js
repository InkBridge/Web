var width = screen.width;

if (width <= 992) {
    var notifbutton = document.getElementById("notification");
    notifbutton.style.display = 'block';
} else {
    var notifbutton = document.getElementById("notification");
    notifbutton.style.display = 'none';
}

function addfocus(clicked_id)
{
    document.getElementById(clicked_id+"F").focus();
}