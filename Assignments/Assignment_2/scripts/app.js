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
     * This function initializes the application
     */
    function Start() {
        console.log("App Started...");
    }

    // Add event listener for when the window loads
    window.addEventListener("load", Start);

})();