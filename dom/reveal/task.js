const block = Array.from(document.querySelectorAll('.reveal'));

function inViewport() {
    block.forEach(reveal => {
        const viewportHeight = window.innerHeight;
        const elementHeight = reveal.getBoundingClientRect().height;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;

        if((elementTop + elementHeight) < viewportHeight && elementBottom > elementHeight) {
            reveal.classList.add('reveal_active');
        };

        if((elementTop + elementHeight) > viewportHeight || elementBottom < elementHeight) {
            reveal.classList.remove('reveal_active');
        };

    });
};

window.addEventListener('scroll', inViewport);