const searchProperties = () => {
    const query = document.getElementById("seaarch").ariaValueMax.toLowerCase();
    //code to filter propertwies based on query
};

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentURL = window.location.href;
  
    navLinks.forEach(link => {
      if (link.href === currentURL) {
        link.style.fontWeight = 'bold';
        link.style.color = '#ff6600'; // Highlight color
      }
    });
  });

  document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(Thank you, ${name}! Your message has been sent successfully.);
      document.querySelector('.contact-form').reset(); // Reset form fields
    } else {
      alert('Please fill out all fields.');
    }
  });

  document.querySelector('.search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchInput = document.getElementById('search').value.toLowerCase();
    const propertyCards = document.querySelectorAll('.property-card');
  
    propertyCards.forEach(card => {
      const location = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
      if (location.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  const scrollToTopBtn = document.getElementById('scrollToTop');

// Show button when scrolled down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const feedback = document.querySelectorAll('.feedback');
let currentFeedback = 0;

function showTestimonial(index) {
  feedback.forEach((feedback, i) => {
    feedback.style.display = i === index ? 'block' : 'none';
  });
}

function nextTestimonial() {
  currentFeedback = (currentFeedback + 1) % feedback.length;
  showFeedback(currentFeedback);
}

// Automatically rotate feedbacks every 5 seconds
setInterval(nextFeedback, 5000);

// Initialize the first testimonial
showFeedback(currentFeedback);

