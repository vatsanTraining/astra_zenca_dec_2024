var obj = {}; // using object literal syntax a blank object is created

obj.attachEvent = function () {
  let srchFld = document.querySelector("#srchByName");

  srchFld.addEventListener("keyup", (event) => {
    let valToSrch = event.target.value;
    obj.filterTableData(valToSrch,"td:nth-child(2)");

  });
};

obj.filterTableData = function (valToSrch,colToSrch) {

  let tableBody = document.querySelector("tbody");

  let rows = tableBody.querySelectorAll("tr");

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let cols = rows[rowIndex].querySelectorAll(colToSrch);

    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
     cols[colIndex].textContent.includes(valToSrch)?rows[rowIndex].style.display='table-row':rows[rowIndex].style.display='none';
    }
  }
};
obj.attachEvent();
