const site = {
  instagram: 'https://www.instagram.com/fumaca.grill/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Fumaca%20Grill%20Parrilla%20Burguer%20Olinda',
  cardapio: 'https://app.cardapioweb.com/fumaca_grill',
  ifood: 'https://www.ifood.com.br/delivery/olinda-pe/fumaca-grill---hamburguer-na-parrilha-jardim-atlantico/1e67b941-a0d5-4a47-a960-6825f44abc48',
  whatsapp: 'https://wa.me/5581994164526'
};

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile');
  document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('mobile');
    document.body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelector('#year').textContent = new Date().getFullYear();

// Pequena interação: brilho de cursor no card hero.
const hero = document.querySelector('.hero-visual');
hero?.addEventListener('pointermove', (event) => {
  const rect = hero.getBoundingClientRect();
  hero.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  hero.style.setProperty('--my', `${event.clientY - rect.top}px`);
});
