
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function () {

        const h3 = this.querySelector('h3');
        h3.classList.toggle('bold');

        const arrow = this.querySelector('.icon-arrow');
        arrow.classList.toggle('rotate');

        const answer = this.nextElementSibling;

        const isExpanded = h3.getAttribute('aria-expanded') === 'true';
        h3.setAttribute('aria-expanded', !isExpanded);

        const isHidden = answer.getAttribute('aria-hidden') === 'true';
        answer.setAttribute('aria-hidden', !isHidden);
        answer.classList.toggle('show');
    });
});

// ...

questions.forEach(question => {
    const answer = question.nextElementSibling.querySelector('.answer');

    answer.classList.add('collapse');

    question.addEventListener('click', function () {
        answer.classList.toggle('show');
    });
});


