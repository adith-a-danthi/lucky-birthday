const datePicker = document.getElementById("date-picker");
const luckyNumberInput = document.getElementById("lucky-number");

const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result-text");
const resultDiv = document.getElementById("result");
const luckyImg = document.getElementById("lucky-img");
const unluckyImg = document.getElementById("unlucky-img");

const closeBtn = document.getElementById("close-notice");

const errorDiv = document.getElementById("error");
const error = document.getElementById("error-text");

/** Function to display error message
 * @param {string} message - The error message
 */
const showError = (message) => {
	errorDiv.style.display = "block";
	error.innerHTML = message;
};

// Function to hide error message
const hideError = () => {
    errorDiv.style.display = "none";
};


/** Function to check if a birthday is lucky
 * @param {date} dob - The birthday
 * @param {number} luckyNumber - The lucky number
 * @returns {boolean} - True if the birthday is lucky, false otherwise
 */
const checkIfLucky = (dob, luckyNumber) => {
	const dateArr = dob.split("-");
	let sum = 0;
	dateArr.forEach((element) => {
		const num = parseInt(element, 0);
		sum += num;
	});
	return sum % luckyNumber === 0;
};

checkBtn.addEventListener("click", () => {
    hideError();
    resultDiv.style.display = "none";

    const dob = datePicker.value;
	const luckyNumber = luckyNumberInput.value;

	if (!dob && !luckyNumber) {
		showError("Please enter a valid date and lucky number!");
	} else if (!dob) {
		showError("Please enter a valid date!");
	} else if (!luckyNumber) {
		showError("Please enter a valid lucky number!");
	} else {
		resultDiv.style.display = "block";

		if (checkIfLucky(dob, luckyNumber)) {
			luckyImg.style.display = "block";
			unluckyImg.style.display = "none";
			resultText.innerHTML = "Yay! Your birthday is a lucky number!";
		} else {
			luckyImg.style.display = "none";
			unluckyImg.style.display = "block";
			resultText.innerHTML =
				"Oopsie! Your birthday doesn't seem to be a lucky number!";
		}
	}
});

closeBtn.addEventListener("click", () => {
    document.getElementById('alert').style.display = "none";
});