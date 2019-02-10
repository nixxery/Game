var h1 = 300;
var h2 = 300;
var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var winnerblock = document.getElementById("winnerblock");
var winnerblock1 = document.getElementById("winnerblock1");

function rise (event){
	console.log(event.keyCode);
	if (event.keyCode==32)
	{
		h1+=10;
		column1.style.height =h1+"px";
	}
	if (event.keyCode==17)
	{
		h2+=10;
		column2.style.height =h2+"px";
	}
	if (h1>550){
		document.removeEventListener("keyup", rise);
		winnerblock.style.display="inline";
		winnerblock.innerHTML="Blue wins!";
	}
	else if (h2>550){
		document.removeEventListener("keyup", rise);
		winnerblock1.style.display="inline";
		winnerblock1.innerHTML="Yellow wins!";
	}

}   

document.addEventListener("keyup", rise);

function newgame(){
	document.addEventListener("keyup", rise);
	h1 = 300;
	column1.style.height =h1+"px";
	h2 = 300;
	column2.style.height =h2+"px";
	winnerblock.innerHTML="";
	winnerblock.style.display="none";
	winnerblock1.innerHTML="";
	winnerblock1.style.display="none";
}

