const tooltips = [...document.querySelectorAll('.has-tooltip')];

tooltips.forEach((hasTooltip, i) => {
  hasTooltip.insertAdjacentHTML("afterEnd", "<div class='tooltip' style='left: 0; top: 0'></div>");
  const tooltip = document.querySelectorAll('.tooltip')[i];

  hasTooltip.addEventListener('click', (event) => {
    event.preventDefault();
    if (hasTooltip.title === tooltip.textContent) {
      tooltip.classList.toggle('tooltip_active');
      return;
    }

    tooltip.textContent = hasTooltip.title;
    tooltip.classList.add('tooltip_active');
    })
})