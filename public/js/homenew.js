var width = screen.width;

function addfocus(clicked_id)
{
    var e=document.getElementById(clicked_id+"B");
    if(e.style.display == 'none')
        e.style.display = 'block';
    else if(e.style.display == 'block')
        e.style.display = 'none';
    document.getElementById(clicked_id+"F").focus();
}
function remove(n)
{
	var elem = document.getElementById('consign'+n);
    elem.parentNode.removeChild(elem);
    return false;
}
