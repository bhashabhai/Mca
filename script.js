// Function to handle tab navigation and redirection
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

// Function to clear active classes
function clearActiveClasses() {
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
}

// Event listeners for tab navigation
tabLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        clearActiveClasses();
        const targetTab = document.querySelector(event.target.getAttribute('href'));
        event.target.classList.add('active');
        targetTab.classList.add('active');
    });
});

// Optional: Auto-highlight the first tab as active by default
document.querySelector('.tab-link').classList.add('active');
document.querySelector('.tab-content').classList.add('active');
