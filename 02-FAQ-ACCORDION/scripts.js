document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        answer.classList.toggle('open');

        if (answer.classList.contains('open')) {
            icon.src = 'assets/images/icon-minus.svg';
            button.setAttribute('aria-expanded', 'true');
        } else {
            icon.src = 'assets/images/icon-plus.svg';
            button.setAttribute('aria-expanded', 'false');
        }

    });
});
