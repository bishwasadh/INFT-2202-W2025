/**
 * Full Name: Bishwas Adhikari
 * Student ID: 100932586
 * Date Completed: Feb 07, 2025
 */

// Function to handle the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    
    /**
     * Function to handle the DOMContentLoaded event.
     * Initializes the content for the home page and sets up event listeners for navigation links.
     */

    // Content for the Home page
    const homeContent = `
        <div class="home-content" style="background-image: url('assets/background.jpg'); height: calc(100vh - 60px); background-size: cover; display: flex; justify-content: center; align-items: center;">
            <h1>Welcome to Our Site!</h1>
        </div>
    `;
    // Insert the home content into the main content area
    document.getElementById('main-content').insertAdjacentHTML('afterbegin', homeContent);

    // Content for the Products, Services, About Us, and Contact Us pages
    const productContent = `
        <div class="container mt-5">
            <h2>Our Favorite Guitars</h2>
            <div class="row">
                <div class="col-md-4">
                    <img src="assets/media1.jpg" class="img-fluid" alt="Guitar 1">
                    <p>This is Guitar 1. It has a unique sound and design that makes it stand out.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/media2.jpg" class="img-fluid" alt="Guitar 2">
                    <p>This is Guitar 2. Known for its versatility and rich tones, it's a favorite among musicians.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/media3.jpg" class="img-fluid" alt="Guitar 3">
                    <p>This is Guitar 3. Its classic design and exceptional build quality make it a must-have.</p>
                </div>
            </div>
        </div>
    `;

    // Content for the Services page
    const servicesContent = `
        <div class="container mt-5">
            <h2>Our Services</h2>
            <div class="row">
                <div class="col-md-4">
                    <img src="assets/service1.jpg" class="img-fluid" alt="Graphic Design">
                    <p>Graphic Design: We create visually appealing designs for your brand.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/service2.jpg" class="img-fluid" alt="Digital Marketing">
                    <p>Digital Marketing: We help you reach a wider audience with effective marketing strategies.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/service3.jpg" class="img-fluid" alt="IT Consulting">
                    <p>IT Consulting: We provide expert advice to optimize your IT infrastructure.</p>
                </div>
            </div>
            <div class="mt-3">
                <a href="assets/resume.pdf" class="btn btn-primary" target="_blank">View My Resume</a>
            </div>
        </div>
    `;
    
    // Content for the About Us page
    const aboutUsContent = `
        <div class="container mt-5">
            <h2>About Us</h2>
            <p>Welcome to our website! We are a team of passionate individuals dedicated to providing the best services to our clients. Our team consists of experts in various fields, including web development, graphic design, and digital marketing. We believe in continuous learning and improvement, and we strive to stay updated with the latest trends and technologies.</p>
            <p>In our free time, we enjoy engaging in various hobbies and activities. Some of us are avid readers, while others love to explore the outdoors. We also believe in giving back to the community and actively participate in volunteer work and community service projects.</p>
            <p>Thank you for visiting our website. We look forward to working with you and helping you achieve your goals.</p>
            <img src="assets/team.jpg" class="img-fluid" alt="Our Team">
        </div>
    `;

    // Content for the Contact Us page
    const contactContent = `
        <div class="container mt-5">
            <h2>Contact Us</h2>
            <form id="contact-form">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                    <label for="contact-number" class="form-label">Contact Number</label>
                    <input type="text" class="form-control" id="contact-number" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    `;
    
    /**
     * Event listener for the Home link.
     * Loads the home content into the main content area.
     */
    document.querySelector('.nav-link[href="#Home"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', homeContent);
    });

    /**
     * Event listener for the Products link.
     * Loads the product content into the main content area.
     */
    document.querySelector('.nav-link[href="#Products"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', productContent);
    });

    /**
     * Event listener for the Services link.
     * Loads the services content into the main content area.
     */
    document.querySelector('.nav-link[href="#Services"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', servicesContent);
    });


    /**
     * Event listener for the About Us link.
     * Loads the about us content into the main content area.
     */
    document.querySelector('.nav-link[href="#AboutUs"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', aboutUsContent);
    });


    /**
     * Event listener for the Contact Us link.
     * Loads the contact content into the main content area and sets up the form submission handler.
     */
    
    document.querySelector('.nav-link[href="#ContactUs"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', contactContent);

        // Form submission handler
        document.getElementById('contact-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const contactNumber = document.getElementById('contact-number').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display the form data in the console
            console.log(`Name: ${name}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);

            // Redirect to Home page after 3 seconds
            setTimeout(() => {
                document.getElementById('main-content').innerHTML = '';
                document.getElementById('main-content').insertAdjacentHTML('afterbegin', homeContent);
            }, 3000);
        });
    });

    // Change the Products link to Interests
    document.querySelector('.nav-link[href="#Products"]').textContent = 'Interests';

    // Create a new list item for the Human Resources link
    let hrListItem = document.createElement('li');
    hrListItem.className = 'nav-item';

    // Create the anchor tag for the Human Resources link
    let hrLink = document.createElement('a');
    hrLink.className = 'nav-link';
    hrLink.href = '#';
    hrLink.innerHTML = '<i class="fa fa-users"></i> Human Resources';

    // Append the anchor tag to the list item
    hrListItem.appendChild(hrLink);

    // Find the About Us link in the navbar
    let aboutUsLink = document.querySelector('a.nav-link[href="#AboutUs"]');

    // Insert the new Human Resources link before the Contact Us link
    aboutUsLink.parentNode.insertAdjacentElement('afterend', hrListItem);

    // Update the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
});

