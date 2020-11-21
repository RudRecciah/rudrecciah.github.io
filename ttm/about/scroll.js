const doc = document;
const navbar = doc.querySelector(".navbar-container");
    limit = 300  /* scrolltop value when opacity should be 0 */

function(window).on('scroll', function() {
   var st = $(this).scrollTop();

   /* avoid unnecessary call to jQuery function */
   if (st <= limit) {
    navbar.classList.add("navbar-container-opacity");
    console.log("test");
   }
   else {
    navbar.classList.remove("navbar-container-opacity");
    console.log("test2");
   }
});