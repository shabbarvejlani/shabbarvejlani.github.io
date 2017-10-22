var options = document.querySelectorAll(".rectangle")
var rdisplay = document.querySelector("#rvalue")
var gdisplay = document.querySelector("#gvalue")
var bdisplay = document.querySelector("#bvalue")
var reset = document.querySelector("#reset");
var quiz_r = document.querySelector("#quiz_r");
var quiz_g = document.querySelector("#quiz_g");
var quiz_b = document.querySelector("#quiz_b");
var correctsq;
var rvalue; 
var gvalue;
var bvalue;
function set_rgb(r,g,b){
	return "rgb("+r+","+g+","+b+")";
}
function get_random_color(){
	return Math.floor((Math.random() * 255) + 1);
}

function get_random(value){
	return Math.floor((Math.random() * value) + 0);
}

function setup_listeners(){
	for(var i=0; i <options.length; i++){
		options[i].addEventListener("click",function(){
			//console.log(this.id , correctsq)
			if(this.id==correctsq){
				//console.log("Matched")
				for(var j=0;j< options.length;j++){
					options[j].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);	
				}
				gameover=true;
			} else {
				if(!gameover){
					this.style.backgroundColor='white';
				}			
			}
		})
	}
}

function init(){

	
	//rvalue=100;
	rvalue= get_random_color();
	
	//gvalue=255;
	gvalue = get_random_color();
	
	//bvalue=255;
	bvalue = get_random_color();
	
	rdisplay.textContent = rvalue;
	gdisplay.textContent = gvalue;
	bdisplay.textContent = bvalue;
	quiz_r.style.backgroundColor=set_rgb(rvalue,0,0)
	quiz_g.style.backgroundColor=set_rgb(0,gvalue,0)
	quiz_b.style.backgroundColor=set_rgb(0,0,bvalue)
	correctsq= get_random(6);
	
	gameover=false;

	for( var i=0; i< options.length ; i++){
		if(i===correctsq){
			options[i].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);	

		} else {
			options[i].style.backgroundColor=set_rgb(
				get_random_color(),
				get_random_color(),
				get_random_color());
		}
		options[i].id=i;
	}

}

init()
setup_listeners()

// options[0].style.backgroundColor=set_rgb(rvalue,gvalue,bvalue);

reset.addEventListener("click",function(){
	init()
})


