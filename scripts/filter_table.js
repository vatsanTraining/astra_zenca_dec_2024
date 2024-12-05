function Student(rollNumber, studentname, mark, branch) {
  this.rollNumber = rollNumber;
  this.studentname = studentname;
  this.mark = mark;
  this.branch = branch;
}

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
  let row = document.createElement("tr");

  colNames.forEach((eachColName) => {
    let col = document.createElement("th");
    col.textContent = eachColName.toUpperCase();
    row.appendChild(col);
  });

  document.getElementById(tableId).appendChild(row);
};

obj.renderContent = function (tableId, studentList) {
  var row = null;
  studentList.forEach((eachStudent) => {
    row = document.createElement("tr");

    let propList = Object.getOwnPropertyNames(studentList[0]);

    for (let j = 0; j < propList.length; j++) {
      let col = document.createElement("td");
      col.textContent = eachStudent[propList[j]];
      row.appendChild(col);
    }
    document.getElementById(tableId).appendChild(row);
  });
};
obj.renderTable("custom-table", "cust-table", "table-style");

obj.renderHeading("cust-table", "Roll Number", "studentname", "mark", "Branch");

let ram = new Student(101, "Ganesh", 95, "B.E");
let shyam = new Student(102, "Shyam", 25, "B.Sc");
let kumar = new Student(103, "Kumar", 85, "M.Sc");

let studentList = [ram, shyam, kumar];

obj.renderContent("cust-table", studentList);

// obj.renderContent(ram,shyam)  we can make it work with rest operator
