<script>
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-options');

hamburger.addEventListener('click', () => {
    if(menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Optional: hide menu if clicked outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = 'none';
    }
});
</script>
