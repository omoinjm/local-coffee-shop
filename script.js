// Navbar toggle
const navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	cart.classList.remove('show');
	searchForm.classList.remove('show');
}

// Cart toggle
const cart = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
	cart.classList.toggle('show');
	navbar.classList.remove('active');
	searchForm.classList.remove('show');
}

// Search form toggle
const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('show');
	navbar.classList.remove('active');
	cart.classList.remove('show');
}

// Close all menus on scroll
window.onscroll = () => {
	navbar.classList.remove('active');
	cart.classList.remove('show');
	searchForm.classList.remove('show');
}

// Add scroll animation for sections
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe all sections except home
document.querySelectorAll('section:not(.home)').forEach(section => {
	section.style.opacity = '0';
	section.style.transform = 'translateY(30px)';
	section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
	observer.observe(section);
});

// Add smooth header background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		header.style.background = 'rgba(10, 10, 10, 0.98)';
		header.style.boxShadow = '0 0.5rem 2rem rgba(0, 0, 0, 0.5)';
	} else {
		header.style.background = 'rgba(10, 10, 10, 0.95)';
		header.style.boxShadow = '0 0.4rem 2rem rgba(0, 0, 0, 0.4)';
	}
});