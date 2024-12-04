var capital = {};

capital.asia = ["New Delhi", "Colombo", "Thimpu", "Bangkok"];

capital.addToPage = function () {
  for (let i = 0; i < capital.asia.length; i++) {
    capital.addListItem(capital.asia[i]);
  }
};

capital.toggle = function (value) {
  let paraToHide = document.getElementById("para");

  paraToHide.style.display = value;
};

capital.addListItem = function (value) {
  let listItem = document.createElement("li");

  listItem.textContent = value;

  let ordList = document.querySelector("ol");

  ordList.setAttribute("class", "list-style");

  ordList.appendChild(listItem);
};

capital.addEvent = function () {
  let btn = document.querySelector("#hideBtn");

  btn.addEventListener("click", () => {
    if (btn.textContent.toLowerCase() == "hide") {
      capital.toggle("none");
      btn.textContent = "Show";
    } else {
      capital.toggle("block");
      btn.textContent = "Hide";
    }
  });
};
capital.addToPage();

capital.addEvent();

capital.on = function (element, eventName, handler) {
  element.addEventListener(eventName, handler);
};

capital.on(document.querySelector("#addCityBtn"), "click", () => {
  capital.addListItem("Pune");
});

