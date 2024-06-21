document.addEventListener("DOMContentLoaded", function() {
    // Get the modal element
    var modal = document.getElementById("modal");

    // Get the button that opens the modal
    var openModalBtn = document.getElementById("openModalBtn");

    // Get the close button (x) element
    var closeModalBtn = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    openModalBtn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on the close button (x), close the modal
    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
