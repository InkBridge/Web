var news=document.getElementById("news_feed");
var posts=document.getElementById("posts");
var drafts=document.getElementById("drafts");

var news_btn=document.getElementById("news_btn");
var posts_btn=document.getElementById("post_btn");
var drafts_btn=document.getElementById("draft_btn");

function Switch(op,e)
{

	news_btn.style.backgroundColor='#ECF0F1';
	post_btn.style.backgroundColor='#ECF0F1';
	draft_btn.style.backgroundColor='#ECF0F1';
	
	var a=op;
	//changing the colour of clicked button
	var x=document.getElementById(e);
	x.style.backgroundColor='#B3B6B7';

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

hover_out(){
	document.getElementById('tags1').style.display = 'none';
	document.getElementById('content1').style.opacity = '1';
}

hover_in(){
	document.getElementById('tags1').style.display = 'block';
	document.getElementById('content1').style.opacity = '0.4';
}