import Thermometer from "./Thermometer";
import DonorRoll from "./DonorRoll";

function donationStation(config) {
  const { id, goal, current, donors } = config;

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const thermometer = new Thermometer();
  const donorRoll = new DonorRoll();

  thermometer.setProps({
    currencyFormatter,
    goal,
    current,
  });

  donorRoll.setProps({
    currencyFormatter,
    donors,
  });

  const container = document.getElementById(id);

  container.innerHTML = thermometer.render() + donorRoll.render();

  thermometer.mount(container);
  donorRoll.mount(container);
}

window.donationStation = donationStation;
