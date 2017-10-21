var options = document.querySelectorAll(".rectangle")
var rdisplay = document.querySelector("#rvalue")
var gdisplay = document.querySelector("#gvalue")
var bdisplay = document.querySelector("#bvalue")
function set_rgb(r,g,b){
	return "rgb("+r+","+g+","+b+")";
}
function get_random_color(){
	return Math.floor((Math.random() * 255) + 1);
}

function get_random(value){
	return Math.floor((Math.random() * value) + 1);
}
// var rvalue=100;
var rvalue = get_random_color();
// var gvalue=80;
var gvalue = get_random_color();
// var bvalue=0;
var bvalue = get_random_color();

rdisplay.textContent = rvalue;
gdisplay.textContent = gvalue;
bdisplay.textContent = bvalue;
correctsq= get_random(6);
// options[0].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);
var gameover = false;
alert(correctsq)
for( var i=0; i< options.length ; i++){
		
		if(i===correctsq){
			options[i].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);
			options[i].addEventListener("click",function(){
				for(var j=0;j< options.length;j++){
					options[j].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);	
				}
				gameover=true;
			})
		} else {
			options[i].style.backgroundColor=set_rgb(
				get_random_color(),
				get_random_color(),
				get_random_color());
			options[i].addEventListener( "click",function(){
			if(!gameover){
				this.style.backgroundColor='white';
			}	
		})
		}
	
}