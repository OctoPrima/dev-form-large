

$(document).ready(function() {
  $('select').niceSelect();
  $('[type=tel]').mask('+00(000)00-00-000');

  $( "[data-calendar]" ).wrap( "<div class='calendar-cotainer'></div>" );

  $( '[data-calendar]' ).datepicker({
    showOn: "button",
    buttonImage: "assets/img/calendar-icon.svg",
    buttonImageObly: true
  });
});


