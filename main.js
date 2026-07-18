document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
 
  // Filière filter tabs (formations page)
  var tabs = document.querySelectorAll('.tab');
  var filiereCards = document.querySelectorAll('[data-level]');
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var target = tab.getAttribute('data-filter');
        filiereCards.forEach(function (card) {
          if (target === 'all' || card.getAttribute('data-level') === target) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
 
  // Contact form — demo only, no backend
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Message envoyé — l\'équipe ISTN vous répond sous 48h.';
        note.classList.add('show');
      }
      form.reset();
    });
  }
});