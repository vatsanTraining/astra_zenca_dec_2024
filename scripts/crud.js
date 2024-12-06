var crudObj = {};

crudObj.init = function () {
  let frmRef = document.querySelector("#order-form");
  let submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("submit", function (event) {
    
    event.preventDefault();

    crudObj.readFormData(frmRef);
  });

  crudObj.readFormData = function (frmRef) {
    let orderNumber = document.getElementById("orderNumber");
    
    console.log(orderNumber)
  };
};
