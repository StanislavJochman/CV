$(document).ready(function() {
    $('.container').click(function() { 
      $('body').css('overflow', 'hidden');
      $('.modal-content').css('overflow', 'auto');
    });
  $('.close_m').click(function() { 
      $('body').css('overflow', 'auto');
      $('.modal-content').css('overflow', 'hidden');
    });
  });