/**
 * @fileoverview Main application JavaScript file
 * @author Bishwas Adhikari
 * @studentID 100932586
 * @date March 28, 2025
 */

// IIFE - Immediately Invoked Function Expression
(function() {
    /**
     * Function to initialize the application
     */
    function Start() {
        console.log("App started...");
        
        // Call LoadHeader function
        LoadHeader();
        
        // Call LoadFooter function
        LoadFooter();
    }

    /**
     * Function to load the header/navigation on each page
     */
    function LoadHeader() {
        // Navigation links configuration
        const navLinks = [
            { text: "Home", href: "index.html", active: false },
            { text: "Products", href: "product.html", active: false },
            { text: "Services", href: "services.html", active: false },
            { text: "About Us", href: "about.html", active: false },
            { text: "Blog", href: "blog.html", active: false },
            { text: "Contact Us", href: "contact.html", active: false },
            { text: "Login", href: "login.html", active: false }
        ];
        
        // Get current page
        let currentPage = location.pathname.split('/').slice(-1)[0];
        if (currentPage === "" || !currentPage) {
            currentPage = "index.html";
        }
        
        // Mark current page as active
        navLinks.forEach(link => {
            if (link.href === currentPage) {
                link.active = true;
            }
        });
        
        // Create navigation
        const nav = document.createElement("nav");
        nav.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        
        // Create navbar container
        const container = document.createElement("div");
        container.className = "container";
        
        // Create navbar brand
        const brand = document.createElement("a");
        brand.className = "navbar-brand";
        brand.href = "index.html";
        brand.textContent = "WEBD 6201";
        
        // Create toggle button for mobile
        const toggleButton = document.createElement("button");
        toggleButton.className = "navbar-toggler";
        toggleButton.type = "button";
        toggleButton.setAttribute("data-bs-toggle", "collapse");
        toggleButton.setAttribute("data-bs-target", "#navbarNav");
        toggleButton.innerHTML = '<span class="navbar-toggler-icon"></span>';
        
        // Create collapsible navbar
        const navbarCollapse = document.createElement("div");
        navbarCollapse.className = "collapse navbar-collapse";
        navbarCollapse.id = "navbarNav";
        
        // Create unordered list
        const ul = document.createElement("ul");
        ul.className = "navbar-nav ms-auto";
        
        // Add links to navbar
        navLinks.forEach(link => {
            const li = document.createElement("li");
            li.className = "nav-item";
            
            const a = document.createElement("a");
            a.className = link.active ? "nav-link active" : "nav-link";
            a.href = link.href;
            a.textContent = link.text;
            
            if (link.active) {
                a.setAttribute("aria-current", "page");
            }
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        // Assemble navbar
        navbarCollapse.appendChild(ul);
        container.appendChild(brand);
        container.appendChild(toggleButton);
        container.appendChild(navbarCollapse);
        nav.appendChild(container);
        
        // Add navbar to document header
        const header = document.querySelector("header");
        if (header) {
            header.innerHTML = "";
            header.appendChild(nav);
        }
    }

    /**
     * Function to load the footer on each page
     */
    function LoadFooter() {
        const footer = document.querySelector("footer");
        if (footer) {
            const currentYear = new Date().getFullYear();
            footer.innerHTML = `
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <p>&copy; ${currentYear} WEBD 6201 Demo. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // When window loads, start the application
    window.addEventListener("load", Start);
})();