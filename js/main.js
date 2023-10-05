const emailInput = document.getElementById("address")
const submitBtn = document.getElementById("submit-btn")
const emailValidationStatus = document.getElementById("status")
const colorCode = "hsl(354, 100%, 66%)"

// Validate the email address
const regex = /\S+@\S+\.\S+/

const validate = () => {
	if (regex.test(emailInput.value)) {
		// This code is executed, because the email passes.
		emailInput.classList.remove("error")
		emailInput.classList.add("success")
		emailValidationStatus.style.display = "block"
		emailValidationStatus.innerText = "Email validated! Thank you."
		emailValidationStatus.style.color = "green"
	} else {
		// The code is executed because the email does not pass.
		emailInput.classList.remove("success")
		emailInput.classList.add("error")
		emailValidationStatus.style.display = "block"
		emailValidationStatus.innerText = "Please provide a valid email address"
		emailValidationStatus.style.color = colorCode
	}
}

submitBtn.addEventListener("click", validate)


