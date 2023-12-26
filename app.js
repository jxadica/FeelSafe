let h1 = document.querySelector("h1");

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
 
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
        h1.style.display = h1.style.display === 'none' ? 'block' : 'none';
    });
};

showMenu('nav-toggle', 'nav-menu');
