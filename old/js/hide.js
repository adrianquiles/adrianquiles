$('#bFrankenstein').click(function (e) {

    $('#Frankenstein').css('display', 'block');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'none');


});

$('#bAgua').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'block');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'none');


});

$('#bCorte').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'block');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'none');


});


$('#bMarina').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'block');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'none');


});

$('#bGarfio').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'block');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'none');


});

$('#bMiserables').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'block');
    $('#Moulin').css('display', 'none');


});

$('#bMoulin').click(function (e) {

    $('#Frankenstein').css('display', 'none');
    $('#Agua').css('display', 'none');
    $('#Corte').css('display', 'none');
    $('#Marina').css('display', 'none');
    $('#Garfio').css('display', 'none');
    $('#Miserables').css('display', 'none');
    $('#Moulin').css('display', 'block');


});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }