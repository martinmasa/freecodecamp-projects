(function($) {

  'use strict';

  $(document).ready(function() {

    var $container = $('#calculator-container');
    var $display = $container.find('input.calc-monitor');
    var $numberButtons = $container.find('button.calc-number');
    var $operationsButtons = $container.find('button.calc-op');
    var $clearButton = $container.find('button.calc-clear');
    var $evalButton = $container.find('button.evaluate');
    var calculation = '';
    var result = '';

    $numberButtons.on('click', append);
    $operationsButtons.on('click', append);
    $clearButton.on('click', clear);
    $evalButton.on('click', evaluate);

    render();

    function render () {
      $display.val(calculation);
    }

    function renderWithResult () {
      $display.val([calculation, result].join('='));
    }

    function clear () {
      reset();
      render();
    }

    function reset () {
      calculation = '';
      result = '';
    }

    function append (event) {

      if (result) {
        if (result === 'ERROR') {
          reset();
        }
        else {
          calculation = result;
          result = '';
        }
      }

      calculation += $(event.target).data('calc-value');
      render();
    }

    function evaluate () {
      try {
        result = eval(calculation);
      } catch (e) {
        result = 'ERROR';
      }

      renderWithResult();
    }


  });

})(jQuery);
