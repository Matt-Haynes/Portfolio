document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    var img = document.getElementById(modalId.replace('modal', 'img'));
    var modalImg = modal.getElementsByClassName("modal-content")[0];
    var captionText = modal.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
