"use strict";
// -------------- Mathematical operation functions --------------
const addition = (num1, num2) => num1 + num2; // addition function
const subtraction = (num1, num2) => num1 - num2; // subtraction function
const multiplication = (num1, num2) => num1 * num2; // multiplication function
const division = (num1, num2) => num1 / num2; // division function

// Function to perform the calculation
const calculate = (event) => {
	// Get the input values and the operator selection
	let num1 = document.getElementById("num1_input").value; // First number/operand
	let num2 = document.getElementById("num2_input").value; // Second number/operand

	const operator = document.getElementById("operator"); // Selected operator
	const resultContainer = document.getElementById("result"); // Container for displaying result

	// Prevent the default reloading on form submission
	event.preventDefault();

	// Try block to handle runtime errors in operations
	try {
		// Check for division by zero
		if (operator.value === "/" && num2 === "0") {
			throw new Error("Can't divide by ZERO");
		}

		// Convert input values to floating-point numbers
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		let result;
		// Perform the operation based on the selected operator
		switch (operator.value) {
			case "+":
				result = addition(num1, num2); // Addition
				break;
			case "-":
				result = subtraction(num1, num2); // Subtraction
				break;
			case "*":
				result = multiplication(num1, num2); // Multiplication
				break;
			case "/":
				result = division(num1, num2); // Division
				break;
			default:
				throw new Error("Invalid Operator"); // Default case , triggered if no operator is selected
		}

		// Check if the result is within the safe integer range
		if (result > Number.MAX_SAFE_INTEGER || result < -Number.MAX_SAFE_INTEGER) {
			throw new Error("Answer is too big to display");
		}

		// Display the result after rounding off to 10 decimal points if it is greater
		resultContainer.innerHTML = `Result: ${result}`;
	} catch (error) {
		// Display error message if any exception occurs
		resultContainer.innerHTML = `Error: ${error.message}`;
	}
};


// Event Listener on form submit

const form = document.getElementById("form");
form.addEventListener("submit", calculate);