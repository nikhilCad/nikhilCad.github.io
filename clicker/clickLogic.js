var money=0;
var cursors=0;

function moneyClick(num){
 money=money+num; 
 document.getElementById("moneyText").innerHTML=money
};

function buyCursor(){
	var cursorCost=Math.floor(10*Math.pow(1.1,cursors));
	if (money>=cursorCost){
			money-=cursorCost;
			document.getElementById("moneyText").innerHTML=money;
			cursors+=1;
			document.getElementById("cursorCount").innerHTML=cursors;	
	};
	var cursorCost=Math.floor(10*Math.pow(1.1,cursors));
	document.getElementById("cursorCost").innerHTML=cursorCost;		
};

window.setInterval(function(){
	moneyClick(cursors);
},1000);
