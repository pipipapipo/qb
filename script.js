// Mobile nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Scroll reveal
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '-60px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();

// Hero coordinate tracker
(function () {
  var hero = document.querySelector('.hero');
  var coords = document.querySelector('.hero .coords');
  if (!hero || !coords) return;
  hero.addEventListener('mousemove', function (e) {
    var r = hero.getBoundingClientRect();
    var x = Math.round(e.clientX - r.left);
    var y = Math.round(e.clientY - r.top);
    coords.textContent = 'X:' + String(x).padStart(4, '0') + ' / Y:' + String(y).padStart(4, '0');
  });
})();

// Project lightbox
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var lbImg = document.getElementById('lbImg');
  var lbCat = document.getElementById('lbCat');
  var lbTitle = document.getElementById('lbTitle');
  var lbMeta = document.getElementById('lbMeta');
  var lbDesc = document.getElementById('lbDesc');

  document.querySelectorAll('.proj').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = b.dataset;
      if (lbImg) lbImg.src = d.img;
      if (lbImg) lbImg.alt = d.title;
      if (lbCat) lbCat.textContent = (d.cat || '').toUpperCase();
      if (lbTitle) lbTitle.textContent = d.title;
      if (lbMeta) lbMeta.textContent = d.year + ' / ' + (d.loc || '').toUpperCase();
      if (lbDesc) lbDesc.textContent = d.desc;
      lb.classList.add('open');
    });
  });
  var close = lb.querySelector('.close');
  if (close) close.addEventListener('click', function () { lb.classList.remove('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('open'); });
})();

// Contact form (static — no backend)
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('formStatus');
    if (status) status.style.display = 'block';
    form.reset();
    setTimeout(function () { if (status) status.style.display = 'none'; }, 4000);
  });
})();
