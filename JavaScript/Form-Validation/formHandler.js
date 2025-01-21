

// Validate the form information

//0. Add an event listener for form submission
//1. Grab the form from the DOM
//2. Iterate through all the elements and ensure there are no empty fields
//3. Ensure the follwing formats are met:
//    a. Email must include '@' and '.'
//    b. Phone number must be 10 digits
//    c. Zip code must be 6 digits
//    d. Password should have at least 5 characters


let registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(eventObj) {

    eventObj.preventDefault();
    console.dir(eventObj.target)
    let formInputs = eventObj.target.elements;

    //Email Vaidation
    console.dir(formInputs.inputEmail4.value)
    if (formInputs[inputEmail4].includes('@)')||
    !formInputs[inputEmail4].includes('.')) 
    {

        alert("Email needs to have @ and .")
    }

    // Phone Number, password and zip code validation
    
}