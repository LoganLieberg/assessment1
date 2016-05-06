$(document).ready(function () {
  $('#container1').append('<button class="button1">Generate</button>');
  var timesClicked = 1;
  $('.button1').on('click', function () {
    $('body').append('<div id="container2"></div>');
    $('#container2').append('<button class="button2">Delete</button>');
    $('#container2').append('<button class="button3">Change Color</button>');
    $('#container1').append('<p>' + timesClicked + '</p>');
    timesClicked++;
    $('.button2').on('click', function () {
      $('#container2').remove();
    })
    $('.button3').on('click', function () {
      $('#container2').css('background-color', 'red');
      $('#container2').data('background-color', 'red');
      if ($(this).data('background-color') == 'red') {
      $('.button3').on('click', function () {
        $('#container2').css('background-color', 'yellow');
      });
    });
  });

});
