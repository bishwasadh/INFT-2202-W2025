document.addEventListener("DOMContentLoaded", () => {
    // Home Page Content
    const homeContent = `
        <div class="home-content" style="background-image: url('assets/background.jpg'); height: 100vh; background-size: cover; display: flex; justify-content: center; align-items: center;">
            <h1>Welcome to Our Site!</h1>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', homeContent);

    // Products Page Content
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
    
    // Services Page Content
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
    


    // Event Listener for Products Link
    document.querySelector('.nav-link[href="#Products"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.body.innerHTML = ''; // Clear the existing content
        document.body.insertAdjacentHTML('afterbegin', productContent);
    });

    // Event Listener for Services Link
    document.querySelector('.nav-link[href="#Services"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.body.innerHTML = ''; // Clear the existing content
        document.body.insertAdjacentHTML('afterbegin', servicesContent); // Insert the services content
    });

});