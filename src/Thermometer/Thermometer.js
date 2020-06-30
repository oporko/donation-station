export class Thermometer {
  setProps(props) {
    this.currencyFormatter = props.currencyFormatter;
    this.goal = props.goal;
    this.current = props.current;
  }

  render() {
    const fmGoal = this.currencyFormatter.format(this.goal);
    const fmCurrent = this.currencyFormatter.format(this.current);

    return `
      <div id="thermometer">
        <span class="current">${fmCurrent}</span>
        <span class="goal">${fmGoal}</span>
        <div class="hilite"></div>
        <div class="meter"></div>
      </div>
    `;
  }

  mount(container) {
    const elCurrent = container.querySelector(".current");
    const elMeter = container.querySelector(".meter");

    const maxHeight = 225; // overall thermometer height - 50
    const level = maxHeight - maxHeight * (this.current / this.goal);
    const currentTop = level - elCurrent.clientHeight / 2;
    const meterHeight = maxHeight - level;

    elCurrent.style.top = `${currentTop}px`;
    elMeter.style.height = `${meterHeight}px`;

    if (this.goal == this.current) {
      const borderRadius = "13px 13px 0 0";
      elMeter.style["-webkit-border-radius"] = borderRadius;
      elMeter.style["-moz-border-raius"] = borderRadius;
      elMeter.style["border-radius"] = borderRadius;
    }

    // TODO extend right margin depending on width of current element
  }
}
