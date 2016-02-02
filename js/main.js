$('.switch').on('click', function () {
  $('body').toggleClass('dark');

      if ($('button').hasClass('on') ) {
          $('button').removeClass('on');
          $('button').addClass('off');
          $('.status').text('Hey, who turn off the lights');
  }
      else {
        $('button').removeClass('off');
        $('button').addClass('on');
        $('.status').text('Its so bright in here');

      }

});
