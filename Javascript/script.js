
 const sidebar = document.getElementById("sidebar");

    function toggleSidebar() {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle("show");
      } else {
        sidebar.classList.toggle("closed");
      }
    }