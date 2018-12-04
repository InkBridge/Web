var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");
 app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
    secret: "Made by InkBridge WebTeam",
    resave: false,
    saveUninitialized: false
}));
app.get("/",(req,res)=>{
	res.render("welcome");
});
app.get("/writersignup",(req,res)=>{
	res.render("wsignup");
});
app.listen(3000,function(){
    console.log("runnninng");
});