document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkmode');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('active');
    });
});
