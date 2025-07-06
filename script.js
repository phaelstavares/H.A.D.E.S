const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

const navLinks = document.querySelectorAll('.header-menu .nav-links a');
navLinks.forEach(link => {
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
      modalImg.style.backgroundColor = '#007bff';
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