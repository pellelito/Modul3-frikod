var x ='', y='';
var z = false;
function reply_click(num) {
			x = x + num;
			document.getElementById("curr_operand").innerHTML = x;
		}
	
  function reply_compute(num) {
  	if (z===true) {
  		//	console.log(z);
		if (y==='+') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) + parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
 
			z=false;
		}
		else if (y==='-') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) - parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		else if (y==='*') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) * parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		else if (y==='/') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) / parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		
	}
	else {
     	document.getElementById("prev_operand").innerHTML = x;
     	document.getElementById("curr_operand").innerHTML = num;
     	y=num;
     	z = true;
     	x='';
     	}
     }
     function allClear(){
     	document.getElementById("prev_operand").innerHTML = '';
     	document.getElementById("curr_operand").innerHTML = '';
     	x='';
     	z=false;
     	y='';
     }
     function delThis(){
     	//document.getElementById("prev_operand").innerHTML = '';
     	document.getElementById("curr_operand").innerHTML = '';
     	 x='';
     	//z=false;
     	 //y='';
     }
     function equal(){
     	if (z===true) {
  		console.log(z);
		if (y==='+') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) + parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		else if (y==='-') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) - parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		else if (y==='*') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) * parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		else if (y==='/') {
			document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML + y + x ;
			x = parseFloat(document.getElementById("prev_operand").innerHTML) / parseFloat(x);
			document.getElementById("curr_operand").innerHTML = x;
			z=false;
		}
		
	}
	else {
     	document.getElementById("prev_operand").innerHTML = x;
     	document.getElementById("curr_operand").innerHTML = num;
     	y=num;
     	z = true;
     	x='';
     	}
     }