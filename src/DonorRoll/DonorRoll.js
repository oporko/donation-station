export class DonorRoll {
  setProps(props) {
    this.currencyFormatter = props.currencyFormatter;
    this.donors = props.donors;
  }

  render() {
    var liDonors = this.donors.map(({ name, amount }) => {
      const fmAmount = this.currencyFormatter.format(amount);
      return `<li>${name} - ${fmAmount}</li>`;
    });

    return `
  <div id="donor-roll">
    <ul>${liDonors.join("")}</ul>
  </div>`;
  }

  mount(container) {
    const elDonorRoll = container.querySelector("#donor-roll");
    const elList = elDonorRoll.querySelector("ul");
    let top = 0;

    setInterval((_) => {
      top -= 1;
      elList.style.top = `${top}px`;
      // detect when elements are under top fold and move them to bottom
      // detect end loop and reset top
    }, 100);
  }
}
