(function (window, document, $) {

  'use strict';

  $(document).ready(function () {
    $('#main-nav-collapse a, footer a').on('click', function (e) {
      $.scrollTo($(this).attr('href'), 250);
    });
  });

})(window, document, jQuery);
