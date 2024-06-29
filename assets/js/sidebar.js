document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebarToggle');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
    toggleButton.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const submenu = document.querySelector(this.getAttribute('data-target'));
        if (submenu) {
          submenu.classList.toggle('active');
          this.classList.toggle('active');
        }
      });
    });
  
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
      if (window.innerWidth <= 768) {
        const isClickInside = sidebar.contains(event.target) || toggleButton.contains(event.target);
        if (!isClickInside && sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
        }
      }
    });
  });