

$(document).ready(function() {
  $('select').niceSelect();
  $('[type=tel]').mask('+00(000)00-00-000');
  $('[name=index]').mask('00000');

  $( "[data-calendar]" ).wrap( "<div class='calendar-cotainer'></div>" );

  $( '[data-calendar]' ).datepicker({
    showOn: "button",
    buttonImage: "assets/img/calendar-icon.svg",
    buttonImageObly: true
  });
});

document.addEventListener('input', function(event) {
  if (event.target.type === 'number') {
    event.target.value = event.target.value.replace(/[^\d.]/g, '');
  }
});
