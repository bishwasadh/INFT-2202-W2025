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
     * This function initializes the application
     */
    function Start() {
        console.log("App Started...");
    }

    // Add event listener for when the window loads
    window.addEventListener("load", Start);

})();