const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

const menuLinks = document.querySelectorAll('.header-menu a'); 
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

const teamMembers = document.querySelectorAll('.team-member');
const modal = document.getElementById('member-modal');
const modalCloseButton = document.querySelector('.close-button');
const modalImg = document.getElementById('modal-member-img');
const modalName = document.getElementById('modal-member-name');
const modalRole = document.getElementById('modal-member-role');
const modalDesc = document.getElementById('modal-member-desc');

const membersData = {
  1: {
    name: 'Cassio',
    role: 'Equipe',
    image: './img/google.png'
  },
  2: {
    name: 'Ian',
    role: 'Equipe',
    image: './img/google.png'
  },
  3: {
    name: 'Júlia',
    role: 'Equipe',
    image: './img/google.png'
  },
  4: {
    name: 'Maria Julia',
    role: 'Equipe',
    image: './img/google.png'
  },
  5: {
    name: 'Raphael',
    role: 'Equipe',
    image: './img/google.png'
  },
  6: {
    name: 'Yasmin',
    role: 'Equipe',
    image: './img/google.png'
  },
  7: {
    name: 'Kainan',
    role: 'Colaborador',
    image: './img/google.png'
  },
  8: {
    name: 'Victor',
    role: 'Colaborador',
    image: './img/google.png'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  teamMembers.forEach(member => {
    const memberId = member.getAttribute('data-member');
    if (membersData[memberId] && membersData[memberId].image) {
      member.style.backgroundImage = `url('${membersData[memberId].image}')`;
    }
  });
});

teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    const memberId = member.getAttribute('data-member');
    const data = membersData[memberId];

    const description = member.getAttribute('data-description');

    modalImg.style.backgroundImage = `url('${data.image}')`;
    modalName.textContent = data.name;
    modalRole.textContent = data.role;
    modalDesc.textContent = description;

    if (data.role === 'Equipe') {
      modalImg.style.backgroundColor = '#00054A';
    } else if (data.role === 'Colaborador') {
      modalImg.style.backgroundColor = '#000000';
    }

    modal.classList.add('active');
    body.classList.add('modal-open');
  });
});

const closeModal = () => {
  modal.classList.remove('active');
  body.classList.remove('modal-open');
};

modalCloseButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button--right');
    const prevButton = document.querySelector('.carousel-button--left');
    const dotsNav = document.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);
    const carouselContainer = document.querySelector('.carousel-container');

    const getSlidesToShow = () => {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 1024) {
            return 2;
        }
        return 3;
    };

    let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;

    const setupCarousel = () => {
        slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
        const currentSlide = track.querySelector('.current-slide');
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        
        track.style.transition = 'none';
        track.style.transform = 'translateX(-' + (slideWidth * currentIndex) + 'px)';
        track.offsetHeight; 
        track.style.transition = 'transform 0.5s ease-in-out';
    };

    window.addEventListener('resize', setupCarousel);
    
    const moveToSlide = (targetIndex) => {
        const targetSlide = slides[targetIndex];
        track.style.transform = 'translateX(-' + (slideWidth * targetIndex) + 'px)';

        const currentSlide = track.querySelector('.current-slide');
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        
        const currentDot = dotsNav.querySelector('.current-slide');
        currentDot.classList.remove('current-slide');
        dots[targetIndex].classList.add('current-slide');
    };

    const updateArrows = (targetIndex) => {
        const slidesToShow = getSlidesToShow();
        prevButton.classList.toggle('is-hidden', targetIndex === 0);
        nextButton.classList.toggle('is-hidden', targetIndex >= slides.length - slidesToShow);
    };

    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const nextIndex = currentIndex + 1;

        moveToSlide(nextIndex);
        updateArrows(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.current-slide');
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const prevIndex = currentIndex - 1;

        moveToSlide(prevIndex);
        updateArrows(prevIndex);
    });

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button.carousel-indicator');
        if (!targetDot) return;
        
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        
        moveToSlide(targetIndex);
        updateArrows(targetIndex);
    });

    updateArrows(0);

    const startAutoplay = () => {
        return setInterval(() => {
            const currentSlide = track.querySelector('.current-slide');
            const currentIndex = slides.findIndex(slide => slide === currentSlide);
            const slidesToShow = getSlidesToShow();
            
            let nextIndex = currentIndex + 1;
            if (nextIndex > slides.length - slidesToShow) {
                nextIndex = 0;
            }
            moveToSlide(nextIndex);
            updateArrows(nextIndex);
        }, 5000);
    }
    
    let autoplay = startAutoplay();

    carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
    carouselContainer.addEventListener('mouseleave', () => autoplay = startAutoplay());
});


document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.inicio-text, .inicio-image, .software-text, .software-video, .carousel-title, .carousel-container, .about-text, .team-container, .download-content');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});