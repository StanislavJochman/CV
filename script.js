var m = document.getElementsByClassName("modal");
//var span = document.getElementsByClassName("close")[0];

function close_modal(numM) {
  m[numM].style.display = "none";
  //console.log("close")
}

//window.onclick = function(event) {
//  if (event.target == modal) {
//    modal.style.display = "none";
//  }
//}

function open_modal(numM) {
  m[numM].style.display = "block";
  //console.log("open")
}
