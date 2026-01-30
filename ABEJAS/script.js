// Toggle "Leer más" functionality
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const moreText = this.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            this.textContent = 'Leer menos';
        } else {
            moreText.style.display = 'none';
            this.textContent = 'Leer más';
        }
    });
});
