let firstNumber;
let secondNumber;
let operator;
let dec = false;
let bOperator =  true;

function allClear(){
	firstNumber =null;
	secondNumber = null;
	operator = null;
	dec = false;
	bOperator = true;	
	document.getElementById("prev_operand").innerHTML = '';
   	document.getElementById("curr_operand").innerHTML = '';
}
function deleteThis(){

	document.getElementById("curr_operand").innerHTML = '';
	dec = false;
	bOperator = false;

}

function getNumber(num){
			if (dec == false ||num != ".") {// document.getElementById("prev_operand").innerHTML = document.getElementById("prev_operand").innerHTML  +  document.getElementById("curr_operand").innerHTM;
			document.getElementById("curr_operand").innerHTML =  document.getElementById("curr_operand").innerHTML + num;
		}
			if(num =="." ){
				dec = true;
			}
			bOperator = false; 
		}


function getOperator(num){
	
		if (bOperator == false ){
		firstNumber = parseFloat(document.getElementById("curr_operand").innerHTML);
		operator = num;
		document.getElementById("prev_operand").innerHTML =  document.getElementById("curr_operand").innerHTML + num;
		document.getElementById("curr_operand").innerHTML = '';
		dec = false;
		bOperator = true;
	}else if(bOperator ==true && num=='-') {
		document.getElementById("curr_operand").innerHTML = num;
	} 
}
function calculate(){
		secondNumber = parseFloat(document.getElementById("curr_operand").innerHTML);
		document.getElementById("prev_operand").innerHTML =  document.getElementById("prev_operand").innerHTML + document.getElementById("curr_operand").innerHTML;
		switch (operator) {
			case '+':
				document.getElementById("curr_operand").innerHTML = firstNumber + secondNumber;
				break;
				case '-':
				document.getElementById("curr_operand").innerHTML = firstNumber - secondNumber;
				break;
				case ('*'):
				document.getElementById("curr_operand").innerHTML = firstNumber * secondNumber;
				break;
				case '/':
				document.getElementById("curr_operand").innerHTML = firstNumber / secondNumber;
				break;
			default:
				// statements_def
				break;
		}
		dec = false;
		bOperator = true;

}