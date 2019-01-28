var news=document.getElementById("news_feed");
var posts=document.getElementById("posts");
var drafts=document.getElementById("drafts");
function Switch(op)
{
	var a=op;
	if(a==1)
	{
		news.style.display = "block";
		posts.style.display = "none";
		drafts.style.display = "none";
	}
	if(a==2)
	{
		news.style.display = "none";
		posts.style.display = "block";
		drafts.style.display = "none";
	}
	if(a==3)
	{
		news.style.display = "none";
		posts.style.display = "none";
		drafts.style.display = "block";
	}
}