import './style.css';
import product from './api/product.json';
import { showProductContainer } from './homeProductCards';



showProductContainer(product);
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');

// Open navbar
hamburger.addEventListener('click', () => {
  navbar.classList.add('active');
});

// Close navbar
navClose.addEventListener('click', () => {
  navbar.classList.remove('active');
});

// Optional: close menu when clicking on a link
document.querySelectorAll('.nav-menu li a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
