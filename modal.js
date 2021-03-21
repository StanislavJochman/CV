// ***************************************************** MODALS ************************

var m = document.getElementsByClassName("modal");

function close_modal(numM) {dddd
  m[numM].style.display = "none";
}

function open_modal(numM) {
  m[numM].style.display = "block";
}

// **************************************************** MENU ****************************

var mySidebar = document.getElementById("mySidebar");

function menu_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
    sidebar.style.display = "none";
  }
}

function menu_close() {
  mySidebar.style.display = "none";
}
