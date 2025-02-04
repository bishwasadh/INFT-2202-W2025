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
            <h2>Our Favorite Media</h2>
            <div class="row">
                <div class="col-md-4">
                    <img src="assets/media1.jpg" class="img-fluid" alt="Media 1">
                    <p>Media 1 description goes here. This is an interesting piece of media that we highly recommend.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/media2.jpg" class="img-fluid" alt="Media 2">
                    <p>Media 2 description goes here. This is another great piece of media that you should check out.</p>
                </div>
                <div class="col-md-4">
                    <img src="assets/media3.jpg" class="img-fluid" alt="Media 3">
                    <p>Media 3 description goes here. This is a must-see piece of media that you will enjoy.</p>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.nav-link[href="#Products"]').addEventListener('click', () => {
        document.body.innerHTML = productContent;
    });

});