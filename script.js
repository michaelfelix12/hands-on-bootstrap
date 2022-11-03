let menu = document.getElementById('menu');

menu.style.display='none';

function onToggleMenu() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'; 
    } else {
        menu.style.display = 'none';
    }
}