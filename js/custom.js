// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Konami Code JS

$(function(){

  var konamiKeys = [];
  function getKeyDownEvent(e){

      konamiKeys.push(e.keyCode);
      if (konamiKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
          $(this).unbind('keydown', getKeyDownEvent);
          flipImage();
      }
  }
  $(document).keydown(getKeyDownEvent);
});

function flipImage(){
 $('.newsletter-image').addClass('image-flipped');
};
