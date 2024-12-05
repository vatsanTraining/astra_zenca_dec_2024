var obj = {}; // using object literal syntax a blank object is created

obj.attachEvent = function () {
  let srchFld = document.querySelector("#srchByName");

  srchFld.addEventListener("keyup", (event) => {
    let valToSrch = event.target.value.toLowerCase();
    obj.filterTableData(valToSrch, "td:nth-child(2)");
  });
};

obj.filterTableData = function (valToSrch, colToSrch) {
  let tableBody = document.querySelector("tbody");

  let rows = tableBody.querySelectorAll("tr");

  // tableBody.querySelectorAll("tr").forEach((eachRow)=>{

  // })

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let cols = rows[rowIndex].querySelectorAll(colToSrch);

    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
      cols[colIndex].textContent.includes(valToSrch.toLowerCase())
        ? (rows[rowIndex].style.display = "table-row")
        : (rows[rowIndex].style.display = "none");
    }
  }
};
obj.attachEvent();

obj.renderTable = function (parentId, tableId, className) {

  let customTable = document.createElement("table");
  customTable.setAttribute("id", tableId);
  customTable.className = className;

  document.getElementById(parentId).appendChild(customTable);
};

obj.renderHeading = function (tableId, ...colNames) {
};

obj.renderTable("custom-table", "cust-table", "table-style");

obj.renderHeading("cust-table","slno","studentname","mark")