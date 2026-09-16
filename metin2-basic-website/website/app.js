// Metin2 Basic - Cloud Landing Page Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const launchDemoBtn = document.getElementById('launchDemoBtn');

  // Sticky navbar shadow effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Cloud demo launch simulator
  if (launchDemoBtn) {
    launchDemoBtn.addEventListener('click', () => {
      launchDemoBtn.disabled = true;
      const originalText = launchDemoBtn.innerHTML;
      launchDemoBtn.innerHTML = '⏳ Bulut Sunucusuna Bağlanılıyor...';

      setTimeout(() => {
        launchDemoBtn.innerHTML = '⚡ WebRTC Akışı Hazırlanıyor (12ms)...';
      }, 1000);

      setTimeout(() => {
        launchDemoBtn.innerHTML = '🟢 Akış Aktif! (Vagon / Cloud Sunucu Bekleniyor)';
        launchDemoBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
          launchDemoBtn.disabled = false;
          launchDemoBtn.innerHTML = originalText;
          launchDemoBtn.style.background = '';
          alert('Bulut Oyun Demosu: Vagon Streams veya Cloud sunucunuz hazır olduğunda oyun doğrudan bu pencere içerisinde tam ekran olarak oynanabilecektir!');
        }, 2000);
      }, 2500);
    });
  }

  // Smooth active link highlight on scroll
  const sections = document.querySelectorAll('header, section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});
