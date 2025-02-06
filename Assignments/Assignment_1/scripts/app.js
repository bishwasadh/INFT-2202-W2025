document.addEventListener("DOMContentLoaded", () => {
    const homeContent = `
        <div class="home-content" style="background-image: url('assets/background.jpg'); height: calc(100vh - 60px); background-size: cover; display: flex; justify-content: center; align-items: center;">
            <h1>Welcome to Our Site!</h1>
        </div>
    `;
    document.getElementById('main-content').insertAdjacentHTML('afterbegin', homeContent);

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

    document.querySelector('.nav-link[href="#Products"]').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('main-content').innerHTML = '';
        document.getElementById('main-content').insertAdjacentHTML('afterbegin', productContent);
    });


});

