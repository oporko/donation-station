function render(goal, current) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  const fmGoal = formatter.format(goal);
  const fmCurrent = formatter.format(current);

  return `
<div id="thermometer-wrap">
  <div id="thermometer">
    <span id="thermometer-current" class="current">${fmCurrent}</span>
    <span class="goal">${fmGoal}</span>
    <div class="hilite"></div>
    <div id="thermometer-meter" class="meter"></div>
  </div>
</div>`;
}

function updateHeight(goal, current) {
  const elCurrent = document.getElementById("thermometer-current");
  const elMeter = document.getElementById("thermometer-meter");

  const maxHeight = 225; // overal thermometer height - 50
  const level = maxHeight - (maxHeight * (current / goal));
  const currentTop = level - elCurrent.clientHeight / 2;
  const meterHeight = maxHeight - level;

  elCurrent.style.top = `${currentTop}px`;
  elMeter.style.height = `${meterHeight}px`;

  if (goal == current) {
    const borderRadius = "13px 13px 0 0";
    elMeter.style["-webkit-border-radius"] = borderRadius;
    elMeter.style["-moz-border-raius"] = borderRadius;
    elMeter.style["border-radius"] = borderRadius;
  }
}

function donationStation(config) {
  const { id, goal, current } = config;

  document.getElementById(id).innerHTML = render(goal, current);

  updateHeight(goal, current);
}

window.donationStation = donationStation;
