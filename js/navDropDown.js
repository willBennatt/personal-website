/* Toggle between adding and removing the "responsive"
   class to the nav when the user clicks the drop down icon */
function navDropDown() {
  var x = document.getElementById("topNav");
  if (x.className === "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}
