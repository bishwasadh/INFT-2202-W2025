document.addEventListener("DOMContentLoaded", () => {
    const homeContent = `
        <div class="home-content" style="background-image: url('assets/background.jpg'); height: calc(100vh - 60px); background-size: cover; display: flex; justify-content: center; align-items: center;">
            <h1>Welcome to Our Site!</h1>
        </div>
    `;
    document.getElementById('main-content').insertAdjacentHTML('afterbegin', homeContent);
});