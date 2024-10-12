document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navList = document.getElementById('navList');

    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
