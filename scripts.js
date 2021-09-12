var is_first = 0;
var prev_value = 0;
var current_operator;
var current_value='0';

document.getElementById('result').value = '0';


function set_value(value){

	if (value === '0' || value=== '1' || value=== '2' || value=== '3' || value=== '4' || value=== '5' || value=== '6' || value=== '7' || value=== '8' || value === '9'){
		if(current_value == 0 || current_value == '0' || current_value == ''){
			current_value = '' + value;
		}
		else{
			current_value += value;
		}

		document.getElementById('result').value = current_value;
	}

	else if (value === '-' || value === '+' || value === '*' || value === '/' || value === '%'){

		if (current_operator){
			equation = prev_value + current_operator + current_value;
			console.log(equation);
			res = eval(equation);
			document.getElementById('result').value = res;
			prev_value = res;
			current_value = '0';
			current_operator = value;
		}
		else{
			prev_value = current_value;
			current_value = '0'
			current_operator = value;
			document.getElementById('result').value = prev_value;
		}
	}
}

function delete_value(){
	current_value = document.getElementById('result').value;
	new_val = current_value.slice(0, -1);
	if(new_val === ''){
		new_val = '0';
	}
	document.getElementById('result').value = new_val;
}

function make_result(){
	value = document.getElementById('result').value;
	try{
		document.getElementById('result').value = eval(value);
	}	
	catch (error){
		document.getElementById('result').value = 'Invalid Input'
	}
	
}

function all_delete() {
	document.getElementById('result').value = '0';
	current_value = '0';
	prev_value = '0';
}

function equal(){
	if (prev_value && current_value && current_operator){
		document.getElementById('result').value = eval(prev_value + current_operator + current_value);
	}
	else{
		document.getElementById('result').value = current_value;
	}
	
}