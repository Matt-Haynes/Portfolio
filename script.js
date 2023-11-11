document.addEventListener("DOMContentLoaded", function() {
    // Update Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal Functionality
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }
});
