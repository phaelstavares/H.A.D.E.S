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
const modalDesc = document.getElementById('modal-member-desc');

const membersData = {
  1: {
    name: 'Cassio do Nascimento',
    image: './img/google.png',
    description: `Sou Cassio do Nascimento Costa, tenho 19 anos e estou iniciando minha trajetória na área de Tecnologia da Informação, com foco em Segurança Cibernética. Atualmente, curso Auxiliar Técnico em SOC (Security Operations Center), onde estou desenvolvendo conhecimentos práticos em monitoramento de redes, análise de incidentes e resposta a ameaças. <br><br>

    Possuo conhecimentos básicos em desenvolvimento web adquiridos através do curso “Meu Primeiro Site”, com foco em HTML e CSS, o que me proporcionou uma base sólida para entender estruturas e comportamentos de aplicações web, habilidade essencial no contexto de segurança cibernética. <br><br>

    Estou em busca de oportunidades para aplicar meus conhecimentos e evoluir profissionalmente na área de Segurança da Informação, especialmente em ambientes de SOC.`
  },
  2: {
    name: 'Ian Lima',
    image: './img/google.png',
    description: `Sou Ian Lima, tenho 18 anos e estou em formação na área de Tecnologia da Informação, com foco em Segurança Ofensiva. Atualmente, curso Defesa Cibernética e Auxiliar Técnico em SOC, o que tem me proporcionado uma base sólida em análise de vulnerabilidades, simulações de ataques e estratégias de proteção de sistemas. <br><br>

    Tenho grande interesse em áreas como testes de invasão (pentest), engenharia social e hacking ético, buscando constantemente aprimorar meus conhecimentos em ambientes controlados e de estudo. <br><br>

    Estou em busca da minha primeira oportunidade na área de TI, onde possa aplicar minhas habilidades iniciais, aprender com profissionais experientes e me desenvolver como especialista em segurança ofensiva.`
  },
  3: {
    name: 'Júlia Araújo',
    image: './img/google.png',
    description: `Sou Júlia, tenho 18 anos e estou em formação na área de Tecnologia da Informação, com foco em Segurança da Informação. Atualmente, curso Auxiliar Técnico em SOC (Security Operations Center), onde desenvolvo competências em monitoramento de eventos, triagem de alertas e identificação de comportamentos suspeitos. <br><br>

    Minha trajetória inclui a conclusão do curso de Técnico em Informática, que me proporcionou uma base sólida em redes, sistemas operacionais e suporte técnico. Também possuo formação em Fundamentos de Inteligência Artificial, ampliando minha compreensão sobre como a IA pode ser aplicada na detecção e resposta a ameaças cibernéticas. <br><br>

    Tenho grande interesse por áreas como caça a ameaças (Threat Hunting), análise de logs e investigação de incidentes. Busco minha primeira oportunidade profissional para aplicar esses conhecimentos em ambientes reais de segurança, contribuir com equipes de defesa cibernética e evoluir constantemente na área`
  },
  4: {
    name: 'Maria Julia Pina',
    image: './img/google.png',
    description: `Sou Maria Júlia Pina, tenho 18 anos e estou em formação na área de Tecnologia da Informação, com foco em Segurança Cibernética. Atualmente curso Análise e Desenvolvimento de Sistemas e Auxiliar Técnico em SOC, onde estou desenvolvendo competências em monitoramento de redes, análise de vulnerabilidades e resposta a incidentes de segurança. <br><br>

    Possuo experiências anteriores em desenvolvimento front-end e back-end, o que me proporciona uma visão ampla do funcionamento de aplicações e possíveis brechas de segurança. <br><br>

    Tenho interesse especial em atuar com proteção de sistemas, prevenção de ataques cibernéticos e segurança da informação, buscando constantemente atualização e crescimento profissional no setor.`
  },
  5: {
    name: 'Raphael Tavares',
    image: './img/google.png',
    description: `Sou Raphael Tavares, tenho 20 anos e estou em formação na área de Tecnologia da Informação, com forte interesse nas áreas de Segurança da Informação, Data Science e Compliance. Atualmente, curso Sistemas de Informação, Data Science e Auxiliar Técnico em SOC, ampliando meus conhecimentos em análise de dados, segurança cibernética e governança de TI. <br><br>

    Possuo experiências anteriores em Desenvolvimento Full Stack, API Connect e Inteligência Artificial, o que me proporciona uma visão integrada de sistemas, aplicações e seus riscos. Essa base técnica sólida fortalece minha atuação nas áreas de proteção de dados, conformidade regulatória e tomada de decisões baseada em dados. <br><br>

    Busco oportunidades para aplicar minhas habilidades, com foco em soluções eficientes e em conformidade com normas e boas práticas de TI.`
  },
  6: {
    name: 'Yasmin Rufino',
    image: './img/google.png',
    description: `Profissional em formação na área de Segura cibernética, atualmente cursando Auxiliar Técnico de SOC. Tenho conhecimentos introdutórios em HTML e CSS, adquirido através do curso “Meu Primeiro Site”, o que contribui para uma compreensão mais ampla de estruturas web e suas possíveis vulnerabilidades. <br><br>

    Demonstro interesse e dedicação no aprendizado contínuo de ferramentas e práticas voltadas à detecção e resposta a incidentes de segurança, atuando com foco em ambientes de operações de segurança (SOC). Busco oportunidades para iniciar minha carreira na área de TI, especialmente em funções relacionadas à segurança da informação e proteção de dados.`
  },
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

    modalImg.style.backgroundImage = `url('${data.image}')`;
    modalName.textContent = data.name;
    modalDesc.innerHTML = data.description;

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

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    if (header && footer) {
        const handleScroll = () => {
            const headerHeight = header.offsetHeight;
            const windowHeight = window.innerHeight;
            const footerTop = footer.getBoundingClientRect().top;
            const footerVisibleHeight = windowHeight - footerTop;

            if (footerVisibleHeight > 0) {
                const pushUpAmount = Math.min(footerVisibleHeight, headerHeight);
                header.style.transform = `translateY(-${pushUpAmount}px)`;
            } else {
                header.style.transform = 'translateY(0px)';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }
});