// Function to open pages with smooth scroll and animation
function openPage(page) {
    // Display a loading animation or effect
    document.body.style.pointerEvents = 'none';  // Disable user interaction during transition
    document.body.classList.add('loading');

    // Simulate a delay to show animation (if needed)
    setTimeout(function() {
        window.location.href = page; // Open the respective page
    }, 800);  // 800ms delay
}

// Optional: Adding a page loading animation
document.addEventListener('DOMContentLoaded', function () {
    const loadingEffect = document.createElement('div');
    loadingEffect.classList.add('loading-screen');
    document.body.appendChild(loadingEffect);
    setTimeout(function () {
        loadingEffect.style.opacity = 0;
        setTimeout(() => loadingEffect.remove(), 500);
    }, 100);
});
