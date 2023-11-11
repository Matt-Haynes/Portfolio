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
$(document).ready(function(){
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
                enabled:true
            },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
    });