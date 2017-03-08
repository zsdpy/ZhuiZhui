$(document).ready(function() {
  $("a")hover(function() {
    /* Stuff to do when the mouse enters the element */
    $("a").css('color', 'green');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
  });
});
