"use strict";

const carListOneAPI = "https://67ae22f99e85da2f020c8b73.mockapi.io/car";
const carListTwoAPI = "https://67b905fe51192bd378dc7719.mockapi.io/carTwo";

function fetchCars(url, containerId) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((singleCar) => {
        const container = document.getElementById(containerId);
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <div class="carNameHeader">
          <div class="carName">
            <h3>${singleCar.title}</h3>
            <p>${singleCar.carType}</p>
          </div>
          <div>${
            singleCar.favorite
              ? `<img src="assets/img/svg/fillHearth.svg" alt="" />`
              : `<img src="assets/img/svg/heart.svg" alt="favorite" />`
          }</div>
        </div>
        <div class="carImages"> 
          <img
            class="carPhoto"
            src="${singleCar.img}"
            alt="car"
          />
          <img
            class="shadow"
            src="${singleCar.shadow}"
            alt="decoration"
          />
        </div>
        <div class="carInformation">
          <div class="carDetailInformation">
            <img src="assets/img/svg/gas-station.svg" alt="fuel" />
            <p>${singleCar.fuel}</p>
          </div>
          <div class="carDetailInformation">
            <img src="assets/img/svg/manua.svg" alt="Manual" />
            <p>${singleCar.manual}</p>
          </div>
          <div class="carDetailInformation">
            <img src="assets/img/svg/profile-2user.svg" alt="profile" />
            <p>${singleCar.people}</p>
          </div>
        </div>
        <div class="priceAndPurchase">
        <div class="priceDiv"><p>${singleCar.price}/ <span>${
          singleCar.per
        }</span></p>
          <p class="oldPrice">${
            singleCar.oldPrice
              ? `<p class="oldPrice">${singleCar.oldPrice}</p>`
              : ""
          }</p></div>
          <button>Rent Now</button>
        </div>  
      `;
        container.appendChild(card);
      });
    });
}
fetchCars(carListOneAPI, "firstRentCardContainer");
fetchCars(carListTwoAPI, "secondRentCardContainer");
