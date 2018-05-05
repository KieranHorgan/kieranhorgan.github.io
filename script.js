var lvl = 0.0;

var inter = setInterval(function(){
    var r = Math.round(((6.5)+(lvl*(3.5/10)))*(255/10));
    var g = Math.round(((4)+(lvl*(6/10)))*(255/10));
    var b = Math.round(((0)+(lvl*(10./10)))*(255/10));
	document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	var i = Math.round(lvl*10)
	document.getElementsByTagName("body")[0].innerHTML+="<div style='display:inline-block; position:relative;height:100vh; width:12px'></div>";
	document.getElementsByTagName("div")[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
	lvl+=0.1;
	if(lvl > 10.0) clearInterval(inter);
},1000./24);