var crudObj = {};

crudObj.orderList = [];

crudObj.init = function () {
  let frmRef = document.querySelector("#order-form");
  let submitBtn = document.querySelector("#submitBtn");

  frmRef.addEventListener("submit", function (event) {
    // Prevent the default behaviour the form which is direct to
    // action attributes value - now the form will not submitted
    event.preventDefault();

    crudObj.readFormData(frmRef);
  });

  crudObj.readFormData = function (frmRef) {
    // getElementById give the input control the value property
    // get the value stored in the control

    let orderNumber = document.getElementById("orderNumber").value;
    let customerName = document.getElementById("customerName").value;
    let orderDate = document.getElementById("orderDate").value;
    let orderValue = document.getElementById("orderValue").value;

    let orderObj = {
      orderNumber: orderNumber,
      customerName: customerName,
      orderDate: orderDate,
      orderValue: orderValue,
    };
    console.log(orderObj);
    let actionText = frmRef.querySelector("input[type=submit").value;

    if (actionText === "Add") {
      crudObj.storeOrder(orderObj);
    }

    if (actionText === "Update") {
      crudObj.updateOrder(orderObj);
    }
  };
};

crudObj.storeOrder = function (eachOrder) {
  crudObj.orderList.push(eachOrder);

  console.log(crudObj.orderList);

  // ajax code to send to server side
  localStorage.setItem("orderList", crudObj.orderList);

  crudObj.addToTable(eachOrder);
};
crudObj.addToTable = function (rowData) {
  let tbody = document.querySelector("table>tbody");

  let tableRow = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.textContent = rowData.orderNumber;

  let col2 = document.createElement("td");
  col2.textContent = rowData.customerName;

  let col3 = document.createElement("td");
  col3.textContent = rowData.orderDate;

  let col4 = document.createElement("td");
  col4.textContent = rowData.orderValue;

  let delBtn = document.createElement("button");
  delBtn.setAttribute("id", "delBtn");
  delBtn.setAttribute("data-id", rowData.orderNumber);
  delBtn.textContent = "Delete";

  let col5 = document.createElement("td");
  col5.appendChild(delBtn);

  let editBtn = document.createElement("button");
  editBtn.setAttribute("id", "editBtn");
  editBtn.setAttribute("data-id", rowData.orderNumber);
  editBtn.textContent = "Edit";

  crudObj.attachEditEvent(editBtn, rowData);

  let col6 = document.createElement("td");
  col6.appendChild(editBtn);

  tableRow.appendChild(col1);
  tableRow.appendChild(col2);
  tableRow.appendChild(col3);
  tableRow.appendChild(col4);
  tableRow.appendChild(col5);
  tableRow.appendChild(col6);

  tbody.appendChild(tableRow);

  console.log(tbody);
  crudObj.attachDelEvent(delBtn);

  document.getElementById("order-form").reset();
};

crudObj.updateOrder = function (orderdata) {
  console.log(orderdata);

  const index = crudObj.orderList.findIndex(
    (ord) => ord.orderNumber === orderdata.orderNumber
  );

  if (index !== -1) {
    crudObj.orderList[index] = orderdata;
  }

  console.log(crudObj.orderList);

  rowIndex = editElementRowIndex;

  crudObj.replaceTableRow("table", rowIndex, orderdata);
  document.querySelector("#submitBtn").value = "Add";
  document.getElementById("order-form").reset();
};
crudObj.attachEditEvent = (editBtn, rowData) => {
  editBtn.addEventListener("click", () => {
    editElementRowIndex = editBtn.parentElement.parentElement.rowIndex;

    document.getElementById("orderNumber").value = rowData.orderNumber;

    document.getElementById("customerName").value = rowData.customerName;

    document.getElementById("orderDate").value = rowData.orderDate;

    document.getElementById("orderValue").value = rowData.orderValue;

    document.querySelector("#submitBtn").value = "Update";
    document
      .querySelector("#submitBtn")
      .setAttribute("class", "btn btn-warning");
  });
};

crudObj.replaceTableRow = function (tableId, rowIndex, objectData) {
  const table = document.querySelector(tableId);
  const rowToUpdate = table.rows[rowIndex]; // +1 to account for the header row
  rowToUpdate.cells[0].textContent = objectData.orderNumber;
  rowToUpdate.cells[1].textContent = objectData.customerName;
  rowToUpdate.cells[2].textContent = objectData.orderDate;
};

crudObj.attachDelEvent = (element) => {
  element.addEventListener("click", () => {
    let flag = confirm("Are you sure to Delete");

    if (flag) {
      // updating the view
      element.parentElement.parentElement.remove();
      let orderNumber = element.getAttribute("data-id");

      // updating the array
      let updatedList = crudObj.orderList.filter(
        (e) => e.orderNumber != orderNumber
      );
      // updating the storage
      localStorage.setItem("orderList", updatedList);
    }
  });
};
crudObj.init();
