function sum(number1, number2) {
	return number1 + number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

let cache = "";
let firstNumber;
let secondNumber;
let operator;
let result;
let firstHalfOfScreen;

function writeToCache(number) {
	cache = cache + number;
}

function writeToScreen(result) {
	let screen = document.querySelector("#screen");
	if (result != undefined) {
		screen.innerHTML = result;
	} else {
		if (operator != undefined) {
			screen.innerHTML = firstHalfOfScreen + cache;
		} else {
			screen.innerHTML = cache;
		}
	}
}
function writeOperatorToScreen() {
	let screen = document.querySelector("#screen");
	screen.innerHTML = screen.innerHTML + operator;
	firstHalfOfScreen = screen.innerHTML;
}

function sendNumber(number) {
	writeToCache(number);
	writeToScreen();
}

function cleanCache() {
	cache = "";
}

function sendOperator(op) {
	if (firstNumber != undefined) {
		secondNumber = parseInt(cache);
		if (operator == "+") {
			result = sum(firstNumber, secondNumber);
		} else if (operator == "-") {
			result = subtract(firstNumber, secondNumber);
		} else if (operator == "*") {
			result = multiply(firstNumber, secondNumber);
		} else if (operator == "/") {
			result = divide(firstNumber, secondNumber);
		}
		operator = op;
		firstNumber = result;
	} else {
		operator = op;
		if (cache == "") {
			if (result != undefined) {
				firstNumber = result;
			} else {
				firstNumber = 0;
			}
		} else {
			firstNumber = parseInt(cache);
		}
	}
	cleanCache();
	writeOperatorToScreen();
}

function calculate() {
	secondNumber = parseInt(cache);
	if (operator == "+") {
		result = sum(firstNumber, secondNumber);
	} else if (operator == "-") {
		result = subtract(firstNumber, secondNumber);
	} else if (operator == "*") {
		result = multiply(firstNumber, secondNumber);
	} else if (operator == "/") {
		result = divide(firstNumber, secondNumber);
	}

	cleanCache();
	writeToScreen(result);
	clearAll(false);
}
function clearAll(clearScreen) {
	cleanCache();
	firstNumber = undefined;
	secondNumber = undefined;
	operator = undefined;
	firstHalfOfScreen = undefined;
	if (clearScreen) {
		writeToScreen(0);
	}
}
