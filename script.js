  // Mobile nav
  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Data Entry Modal
  const dataEntryImages = [
    './images/dataentry.png',
    './images/dataentry2.png',
    './images/dataentry3.png'
  ];
  let dei = 0;
  function openDataEntryModal(i) {
    dei = i;
    document.getElementById('dataEntryModalImg').src = dataEntryImages[dei];
    document.getElementById('dataEntryModal').classList.add('open');
  }
  function closeDataEntryModal() { document.getElementById('dataEntryModal').classList.remove('open'); }
  function nextDataEntryImg() { dei = (dei + 1) % dataEntryImages.length; document.getElementById('dataEntryModalImg').src = dataEntryImages[dei]; }
  function prevDataEntryImg() { dei = (dei - 1 + dataEntryImages.length) % dataEntryImages.length; document.getElementById('dataEntryModalImg').src = dataEntryImages[dei]; }
  document.getElementById('dataEntryModal').addEventListener('click', function(e) {
    if (e.target === this) closeDataEntryModal();
  });

  // Email Modal
  const emailImages = [
    './images/email1.png',
    './images/email2.png'
  ];
  let emi = 0;
  function openEmailModal(i) {
    emi = i;
    document.getElementById('emailModalImg').src = emailImages[emi];
    document.getElementById('emailModal').classList.add('open');
  }
  function closeEmailModal() { document.getElementById('emailModal').classList.remove('open'); }
  function nextEmailImg() { emi = (emi + 1) % emailImages.length; document.getElementById('emailModalImg').src = emailImages[emi]; }
  function prevEmailImg() { emi = (emi - 1 + emailImages.length) % emailImages.length; document.getElementById('emailModalImg').src = emailImages[emi]; }
  document.getElementById('emailModal').addEventListener('click', function(e) {
    if (e.target === this) closeEmailModal();
  });

  // Calendar Modal
  const calImages = ['./images/calendar.png', './images/calendar2.png', './images/calendar3.png'];
  let ci = 0;
  function openModal(i) {
    ci = i;
    document.getElementById('modalImg').src = calImages[ci];
    document.getElementById('calModal').classList.add('open');
  }
  function closeModal() { document.getElementById('calModal').classList.remove('open'); }
  function nextImg() { ci = (ci + 1) % calImages.length; document.getElementById('modalImg').src = calImages[ci]; }
  function prevImg() { ci = (ci - 1 + calImages.length) % calImages.length; document.getElementById('modalImg').src = calImages[ci]; }
  document.getElementById('calModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeDataEntryModal(); closeEmailModal(); } });
