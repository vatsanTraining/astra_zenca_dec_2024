var utilityObj = {};

utilityObj.nameList = ["Ram", "Shyam", "Shiv", "Ravi"];

var ObjAnotherWay = {
  nameList: ["Ram", "Shyam", "Shiv", "Ravi"],
};

var arrCopy = utilityObj.nameList.slice(-3);

// console.log(utilityObj.nameList);
// console.log(arrCopy);

let afterSplice = utilityObj.nameList.splice(2, 2, "added1", "added2");

// console.log(utilityObj);
// console.log(afterSplice);

// Rest Operation
function usingRest(...items) {
  console.log(items);

  items.forEach((val) => {
    console.log(val);
  });
}
usingRest("Reka", "Shilpa", "Uma", "Gowri");

function usingSpread(name1, name2, name3, name4) {
  console.log(name1 + ":" + name2);
}

usingSpread(...utilityObj.nameList);
