// Carousel Functionality
class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.slides = carouselElement.querySelectorAll('.carousel-slide');
    this.indicators = carouselElement.querySelectorAll('.indicator');
    this.prevBtn = carouselElement.querySelector('.carousel-prev');
    this.nextBtn = carouselElement.querySelector('.carousel-next');
    this.currentSlide = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 5000; // 5 secondi

    this.init();
  }

  init() {
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());

    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    this.showSlide(0);
    this.startAutoplay();

    // Pause autoplay on hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
  }

  showSlide(index) {
    if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = index;
    }

    // Remove active class from all slides and indicators
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    this.slides[this.currentSlide].classList.add('active');
    this.indicators[this.currentSlide].classList.add('active');
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }

  goToSlide(index) {
    this.showSlide(index);
    this.resetAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
  }

  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }

  resetAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

// Gallery Lightbox
class GalleryLightbox {
  constructor() {
    this.galleryItems = document.querySelectorAll('.gallery-item');
    this.modal = document.getElementById('imageModal');
    this.modalImg = document.getElementById('modalImage');
    this.closeBtn = document.querySelector('.modal-close');

    this.init();
  }

  init() {
    this.galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const img = item.querySelector('img');
        this.openModal(img.src);
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  openModal(src) {
    if (this.modal) {
      this.modal.classList.add('show');
      this.modalImg.src = src;
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize carousels
  const carouselElements = document.querySelectorAll('.carousel-container');
  carouselElements.forEach(carousel => {
    new Carousel(carousel);
  });

  // Initialize gallery lightbox
  if (document.querySelector('.gallery-item')) {
    new GalleryLightbox();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
