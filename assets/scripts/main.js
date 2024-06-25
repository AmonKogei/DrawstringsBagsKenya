function showPage(pageName) {
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.style.display = 'none';
    });
  
    // Show the selected page
    var selectedPage = document.getElementById(pageName);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    } else {
      console.error('Page not found:', pageName);
    }
  }
// Show the home page by default
showPage('page1');

window.onload = function() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  container1.style.display = 'block'; // Show the first container initially

  const toggleContainers = () => {
      if (container1.style.display === 'block') {
          container1.style.display = 'none';
          container2.style.display = 'block';
      } else {
          container1.style.display = 'block';
          container2.style.display = 'none';
      }
  };

  setInterval(toggleContainers, 15000); // 15 seconds

  container1.addEventListener('click', toggleContainers);
  container2.addEventListener('click', toggleContainers);
};

// scripts.js

function openModal(imageSrc, title, price) {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-image').src = imageSrc;
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-price').innerText = `KES ${price.toFixed(2)}`;

  // Reset form and show product info
  document.getElementById('product-info').style.display = 'block';
  document.getElementById('user-form').style.display = 'none';

  // Blur background
  document.querySelector('.products').style.filter = 'blur(5px)';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

  // Unblur background
  document.querySelector('.products').style.filter = 'none';
}

// Function to show the form and hide product info
function showForm() {
  const quantity = document.getElementById('quantity').value;
  const productTitle = document.getElementById('modal-title').innerText;
  const productPrice = parseFloat(document.getElementById('modal-price').innerText.replace('KES ', ''));

  document.getElementById('product-info').style.display = 'none';
  document.getElementById('user-form').style.display = 'block';
  document.getElementById('product-summary').innerText = `You have selected ${quantity} pieces of ${productTitle} at KES ${productPrice.toFixed(2)} each. Total: KES ${(productPrice * quantity).toFixed(2)}`;
}

// Handle form submission
document.getElementById('details-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const userName = document.getElementById('user-name').value;
  const userPhone = document.getElementById('user-phone').value;
  const productTitle = document.getElementById('modal-title').innerText;
  const quantity = document.getElementById('quantity').value;
  const productPrice = parseFloat(document.getElementById('modal-price').innerText.replace('KES ', ''));
  const totalPrice = productPrice * quantity;

  const whatsappMessage = `My name is ${userName}, my phone number is ${userPhone} and I am interested in ${quantity} pieces of ${productTitle} at KES ${productPrice.toFixed(2)} each. Total amount: KES ${totalPrice.toFixed(2)}.`;
  
  const whatsappURL = `https://wa.me/254706326482?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappURL, '_blank');
});


document.getElementById('contact-button').addEventListener('click', function() {
  const phoneNumber = '254706326482'; // Replace with your phone number
  const message = 'Hello, tell me more about drawstring bags';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappUrl;
});
