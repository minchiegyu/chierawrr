// Function to open modal
function openModal(modalId) {
  document.querySelector(modalId).style.display = "flex";
}

// Function to close modal
function closeModal(modalId) {
  document.querySelector(modalId).style.display = "none";
}

// Event listeners for "View Project" buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const targetModal = this.getAttribute('data-target');
    openModal(targetModal);
  });
});

// Event listeners for modal close buttons
document.querySelectorAll('.modal__close').forEach(closeButton => {
  closeButton.addEventListener('click', function() {
    const targetModal = this.closest('.modal');
    closeModal('#' + targetModal.id);
  });
});

// Optional: Close modal if clicked outside of the image
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal('#' + modal.id);
    }
  });
});
