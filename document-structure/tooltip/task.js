const tooltips = Array.from(document.querySelectorAll('has-tooltip'));

tooltips.forEach(tooltip => {
    const element = document.createElement('div');
    element.textContent = tooltip.title;

    tooltip.addEventListener('click', (el) => {
        el.preventDefault();
        element.classList.add('tooltip');
        tooltip.insertAdjacentElement("beforebegin", element);
        element.style.position = 'absolute';
        element.style.left = `${tooltip.getBoundingClientRect().left}px`;
        element.style.top = `${tooltip.getBoundingClientRect().bottom}px`;

        const tooltipsActive = Array.from(document.querySelectorAll('.tooltip_active'));
        const findElement = tooltipsActive.find(elem => elem.classList.contains('tooltip_active'));

        if(findElement === undefined || findElement !== elem) {
            elem.classList.add('tooltip_active');
        }
        
        findElement.classList.remove('tooltip_active');
    })
})