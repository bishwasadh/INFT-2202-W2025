console.log("jQueryFormHandler.js is connected")

let registrationForm= $("#registrationForm")
registrationForm.on("submit", handleFormSubmit)

function handleFormSubmit(eventObj) {
    eventObj.preventDefault();
    let isFormValid = true
    let formInputs = eventObj.target.elements
    console.log([...formInputs])

    // Email
    let inputEmail = formInputs.inputEmail4.value

    // Phone Number
    let inputPhone = formInputs.inputPhone.value

    // Password
    let passwordOne = formInputs.inputPassword4.value
    let passwordTwo = formInputs.inputPassword5.value

    // ZIP Code
    let inputZip = formInputs.inputZip.value
    // isFormValid = validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip)
    if (isFormValid =validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip)) {
        confirmDetails([...formInputs])
    }
}

function confirmDetails(inputArr) {
    let form = $("#registrationForm")
    // Hide the form using jQuery
    form.hide();

    let registrationContainer = $(".registration-container")

    $(".title").html("Confirmation Page")

    inputArr.forEach(function(inputElement) {
        registrationContainer.append(`<p>${inputElement.value}</p>`)

    })
    registrationContainer.append(`<button id="confirmationBtn">Confirm Details</button>`)
    $("#confirmationBtn").on("click", submitRegistration)
    
    function submitRegistration() {
        alert("Registration Complete")
    }
}

// Validator functions below
function validateForm(inputEmail, inputPhone, passwordOne, passwordTwo, inputZip) {
    // Email
   return validateEmail(inputEmail) && validatePhoneNumber(inputPhone) && validatePassword(passwordOne, passwordTwo) && validateZip(inputZip)
    }
    // Phone Number
function validateZip(inputZip) {
    if (inputZip.length !== 6) {
        alert("ZIP Code must be 6 characters")
        return false
    }
}
