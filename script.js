document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('sidebar-active');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('sidebar-active');
});
