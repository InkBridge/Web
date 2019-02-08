var width = screen.width;

var comments = document.querySelectorAll("#comment");
for(var i = 0;i< sqaures.length;i++)
{
    //add click listeners to squares
    sqaures[i].addEventListener("click",function(){
        //grab color of the clicked sqaure 
        var clickedColor = this.style.background;

        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent="Correct";
        }
        else
        {   
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function remove(n)
{
	var elem = document.getElementById('consign'+n);
    elem.parentNode.removeChild(elem);
    return false;
}
