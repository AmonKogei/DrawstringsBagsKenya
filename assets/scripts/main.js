// Function to show a specific page
function showPage(pageName) {
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
      page.style.display = 'none';
  });

  var selectedPage = document.getElementById(pageName);
  if (selectedPage) {
      selectedPage.style.display = 'block';
  } else {
      console.error('Page not found:', pageName);
  }
}

// Show the home page by default
showPage('page1');

// Function to open modal with specific image, title, and price
function openModal(imageSrc, title, price) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-price').innerText = `KES ${price.toFixed(2)}`;

  // Set the minimum value for the quantity input
  var quantityInput = document.getElementById('quantity');
  quantityInput.min = 10;
  quantityInput.value = 10;

  // Blur background
  document.querySelector('.products').style.filter = 'blur(5px)';
}
//Prevents values less than 10 in the input field
document.getElementById('quantity').addEventListener('input', function() {
  if (this.value < 10) {
      this.value = 10;
  }
});
// Function to close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';

  // Unblur background
  document.querySelector('.products').style.filter = 'none';
}

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
  if (event.target === document.getElementById('modal')) {
      closeModal();
  }
}

document.getElementById('contact-button').addEventListener('click', function() {
  const phoneNumber = '254706890007'; // Replace with your phone number
  const message = 'Hello, tell me more about drawstring bags';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
});
// to track social media clicks on these links for analytics purposes
document.addEventListener('DOMContentLoaded', () => {
  const socialIcons = document.querySelectorAll('.social-icon');

  socialIcons.forEach(icon => {
      icon.addEventListener('click', () => {
          console.log(`Navigating to: ${icon.href}`);
          // You can add more code here for analytics or other purposes
      });
  });
});

