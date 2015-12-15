

var randomQuotes = (function(window, document, undefined) {

  'use strict';

  var quotes = [
    'When you jump for joy, beware that no one moves the ground from beneath your feet. // Stanislaw J. Lec',
    'Never go to bed mad. Stay up and fight. // Phyllis Diller',
    'Few things are harder to put up with than the annoyance of a good example. // Mark Twain',
    'Wit makes its own welcome, and levels all distinctions. No dignity, no learning, no force of character, can make any stand against good wit. // Ralph Waldo Emerson',
    'The best way to keep one\'s word is not to give it. // Napoleon Bonaparte',
    'Every man is the builder of a temple called his body. // Henry David Thoreau',
    'All people want is someone to listen. // Hugh Elliot',
    'It\'s not enough that we do our best; sometimes we have to do what\'s required. // Sir Winston Churchill',
    'Friendship with oneself is all-important, because without it one cannot be friends with anyone else in the world. // Eleanor Roosevelt',
    'Keeping your clothes well pressed will keep you from looking hard pressed. // Coleman Cox'
  ];
  var currentQuote;


  // cache DOM
  var $el = $('#random-quotes');
  var $quote = $el.find('#quote-container');
  var $button = $el.find('button#next-quote');

  // bind events
  $button.on('click', getNextQuote);

  // render
  function _render () {

  }

  function getNextQuote () {
     currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
     _render();
  }

  return {
    getNextQuote: getNextQuote
  };

})(window, document);
