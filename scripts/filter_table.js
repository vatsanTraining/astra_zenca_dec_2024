function Student(rollNumber, studentname, mark, branch) {
  this.rollNumber = rollNumber;
  this.studentname = studentname;
  this.mark = mark;
  this.branch = branch;
}

// ================== Filter Example Starts Here =================

var obj = {}; // using object literal syntax a blank object is created

// Attach Event Method takes table Id and Search Field Id and Column Selctor

obj.attachEvent = function (tableId, elementId, selector) {
  let srchFld = document.querySelector(elementId);

  srchFld.addEventListener("keyup", (event) => {
    let valToSrch = event.target.value;
    obj.filterTableData(tableId, valToSrch, selector);
  });
};

// Filtering the Table Data - Takes Table id value to search and the Column Selector

obj.filterTableData = function (tableId, valToSrch, selector) {
  let srch = "#" + tableId;

  let tableBody = document.querySelector(srch).querySelector("tbody");

  let rows = tableBody.querySelectorAll("tr");

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let cols = rows[rowIndex].querySelectorAll(selector);

    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
      console.log(cols[colIndex].textContent.includes(valToSrch.toLowerCase()));

      cols[colIndex].textContent.includes(valToSrch)
        ? (rows[rowIndex].style.display = "table-row")
        : (rows[rowIndex].style.display = "none");
    }
  }
};

// ========= Render Table   =================

obj.renderTable = function (parentId, tableId, className) {
  let customTable = document.createElement("table");

  customTable.setAttribute("id", tableId);
  customTable.className = className;

  document.getElementById(parentId).appendChild(customTable);
};

// == Render Tablde Heading =============

obj.renderHeading = function (tableId, ...colNames) {
  let customTable = document.getElementById(tableId);

  let row = document.createElement("tr");

  let thead = document.createElement("thead");
  customTable.appendChild(thead);

  colNames.forEach((eachColName) => {
    let col = document.createElement("th");
    col.textContent = eachColName.toUpperCase();
    row.appendChild(col);
  });

  document.getElementById(tableId).querySelector("thead").appendChild(row);
};

// ===== Render Body Conent ===============

obj.renderContent = function (tableId, studentList) {
  var row = null;

  let tbodyRef = document.createElement("tbody");
  let customTable = document.getElementById(tableId);

  var tbody = customTable.appendChild(tbodyRef);

  studentList.forEach((eachStudent) => {
    row = document.createElement("tr");

    let propList = Object.getOwnPropertyNames(studentList[0]);

    for (let j = 0; j < propList.length; j++) {
      let col = document.createElement("td");
      col.textContent = eachStudent[propList[j]];
      row.appendChild(col);
    }
    document.getElementById(tableId).querySelector("tbody").appendChild(row);
  });
};

// == Creating Objects =========

let ram = new Student(101, "Ganesh", 95, "B.E");
let shyam = new Student(102, "Shyam", 25, "B.Sc");
let kumar = new Student(103, "Kumar", 85, "M.Sc");

let studentList = [ram, shyam, kumar];

//==== Calling the Methods

obj.renderTable("custom-table", "cust-table", "table-style");

obj.renderHeading("cust-table", "Roll Number", "studentname", "mark", "Branch");

obj.renderContent("cust-table", studentList);

// Attach Event called with table id , search field Id and table data column

obj.attachEvent("first", "#srchByName", "td:nth-child(2)");

obj.attachEvent("cust-table", "#srchByBranch", "td:nth-child(4)");
