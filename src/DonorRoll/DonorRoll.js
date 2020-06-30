function getSpeed(speed) {
  switch (speed) {
    case "slow":
      return 100;
    case "medium":
      return 50;
    case "fast":
      return 25;
    default:
      throw new Exception("Invalid speed, must be slow, medium or fast");
  }
}

export class DonorRoll {
  setProps(props) {
    this.currencyFormatter = props.currencyFormatter;
    this.donors = props.donors;
    this.speed = props.speed;
  }

  render() {
    var liDonors = this.donors
      .map(({ name, amount }) => {
        const fmAmount = this.currencyFormatter.format(amount);
        return `<li>${name} - ${fmAmount}</li>`;
      })
      .join("");

    return `
      <div id="donor-roll">
        <ul>${liDonors}</ul>
      </div>
    `;
  }

  mount(container) {
    const elDonorRoll = container.querySelector("#donor-roll");
    const elList = elDonorRoll.querySelector("ul");

    setInterval((_) => {
      let top = parseInt(elList.style.top, 10);
      if (isNaN(top)) {
        top = 0;
      }
      top -= 1;

      // detect when elements are under top fold and move them to bottom
      const firstChild = elList.children[0];
      if (firstChild.clientHeight + top <= 0) {
        firstChild.remove();
        elList.append(firstChild);
        top += firstChild.clientHeight;
      }

      elList.style.top = `${top}px`;
    }, getSpeed(this.speed));
  }
}
