var obj = {};

obj.addHeading = function (headingText) {
  var heading = document.getElementById("maj-heading");

  heading.innerHTML = headingText;

  heading.style.color = "white";

  heading.className = "centerText";
};

obj.hightLight = function () {
  var links = document.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function () {
      this.style.borderBottom = "3px solid white";
    });
  }
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseout", function () {
      this.style.borderBottom = "";
    });
  }
};

obj.underStandJS = function () {
  var header = document.querySelector("h1");

  //   header.addEventListener("click", function () {
  //     alert("hi");
  //   });

  // should not write obj.callBack() - in that case function will invoked
  // even before the event is fired
  header.addEventListener("click", obj.callBack("hello"));
};

obj.callBack = function (text) {
  return function () {
    console.log("click event fired");
  };
};

obj.addHeading("Java Script Ninja");
obj.hightLight();
obj.underStandJS();
