// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all portfolio items
var portfolioItems = document.querySelectorAll('.portfolio-item');

// Add click event to each portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        var title = this.getAttribute('data-title');
        var description = this.getAttribute('data-description');
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;

        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
