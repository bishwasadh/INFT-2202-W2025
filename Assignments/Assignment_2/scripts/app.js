/**
 * app.js
 * 
 * @author Bishwas Adhikari (100932586)
 * @date March 14, 2025
 * @version 1.0
 */

// IIFE - Immediately Invoked Function Expression
(function(){


    /**
     * User Class for storing user information
     */
    class User {
        // Constructor
        constructor(firstName, lastName, email, password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.username = firstName.toLowerCase() + lastName.toLowerCase();
            this.email = email;
            this.password = password;
        }
    }

    /**
     * Validates a field to ensure it contains at least minLength characters
     * @param {string} fieldValue - The value to check
     * @param {number} minLength - The minimum length required
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateMinLength(fieldValue, minLength) {
        return fieldValue.length >= minLength;
    }

    /**
     * Validates that an email contains @ symbol and is at least 8 characters
     * @param {string} email - The email to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateEmail(email) {
        return email.length >= 8 && email.includes("@");
    }

    /**
     * Validates that passwords match and are at least 6 characters
     * @param {string} password - The password
     * @param {string} confirmPassword - The confirmation password
     * @returns {boolean} - True if valid, false otherwise
     */
    function validatePassword(password, confirmPassword) {
        return password.length >= 6 && password === confirmPassword;
    }

    /**
     * Displays an error message in the ErrorMessage div
     * @param {string} message - The error message to display
     */
    function displayError(message) {
        const errorDiv = $("#ErrorMessage");
        errorDiv.text(message);
        errorDiv.show();
    }

    /**
     * Hides the error message div
     */
    function clearError() {
        $("#ErrorMessage").hide();
    }
    
    /**
     * This function initializes the application
     */
    function Start() {
        console.log("App Started...");

        // Handle login form submission
        $("#loginForm").on("submit", function(event) {
            event.preventDefault();
            
            let username = $("#username").val();
            
            // Insert username between Contact Us and Login links
            let contactLink = $("a.nav-link[href='contact.html']").parent();
            let loginLink = $("a.nav-link[href='login.html']").parent();
            
            // Remove any existing username display
            $(".navbar-text").remove();
            
            // Create and insert username element
            let usernameElement = $("<li class='navbar-text text-white me-3'>Welcome, " + username + "!</li>");
            usernameElement.insertAfter(contactLink);
            
            console.log(`User ${username} logged in`);
        });
        
        // Hide error message when page loads
        clearError();

        // Handle register form validation
        $("#registerForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
            

        // Get form field values
         let firstName = $("#firstName").val();
         let lastName = $("#lastName").val();
         let email = $("#email").val();
         let password = $("#password").val();
         let confirmPassword = $("#confirmPassword").val();
    
         // Reset error state
         clearError();
        

            // Validate first name
            if (!validateMinLength(firstName, 2)) {
                displayError("First Name must be at least 2 characters long");
                return;
            }
    
            // Validate last name
            if (!validateMinLength(lastName, 2)) {
                displayError("Last Name must be at least 2 characters long");
                return;
            }
            
            // Validate email
            if (!validateEmail(email)) {
                displayError("Email must be at least 8 characters long and include @ symbol");
                return;
            }
    
            // Validate password
            if (!validatePassword(password, confirmPassword)) {
                displayError("Passwords must match and be at least 6 characters long");
                return;
            }
            
            // If we reach here, form is valid - create User object
            let user = new User(firstName, lastName, email, password);
            
            // Log the user object to console
            console.log("User Created:");
            console.log(user);
    
            // Clear the form
            this.reset();
                
            console.log("Registration form submitted successfully!");
        });
            
    }

    // Add event listener for when the window loads
    window.addEventListener("load", Start);

})();