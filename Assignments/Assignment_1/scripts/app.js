document.addEventListener("DOMContentLoaded", () => {
    // Home Page Content
    const homeContent = `
        <div class="home-content" style="background-image: url('assets/background.jpg'); height: 100vh; background-size: cover; display: flex; justify-content: center; align-items: center;">
            <h1>Welcome to Our Site!</h1>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', homeContent);
});