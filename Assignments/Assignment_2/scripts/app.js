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
    }

    // Add event listener for when the window loads
    window.addEventListener("load", Start);

})();