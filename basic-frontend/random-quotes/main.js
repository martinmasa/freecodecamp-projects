(function() {

  'use strict';

  var quotes = [
    {
      text: 'When you jump for joy, beware that no one moves the ground from beneath your feet.',
      author: 'Stanislaw J. Lec',
    },
    {
      text: 'Never go to bed mad. Stay up and fight.',
      author: 'Phyllis Diller',
    },
    {
      text: 'Few things are harder to put up with than the annoyance of a good example.',
      author: 'Mark Twain',
    },
    {
      text: 'Wit makes its own welcome, and levels all distinctions. No dignity, no learning, no force of character, can make any stand against good wit.',
      author: 'Ralph Waldo Emerson'
    },
    {
      text: 'The best way to keep one\'s word is not to give it.',
      author: 'Napoleon Bonaparte',
    },
    {
      text: 'Every man is the builder of a temple called his body.',
      author: 'Henry David Thoreau',
    },
    {
      text: 'All people want is someone to listen.',
      author: 'Hugh Elliot',
    },
    {
      text: 'It\'s not enough that we do our best; sometimes we have to do what\'s required.',
      author: 'Sir Winston Churchill',
    },
    {
      text: 'Friendship with oneself is all-important, because without it one cannot be friends with anyone else in the world.',
      author: 'Eleanor Roosevelt'},
    {
      text: 'Keeping your clothes well pressed will keep you from looking hard pressed.',
      author: 'Coleman Cox'
    }
  ];

  var currentQuote;

  var $el = $('#random-quotes');
  var $quote = $el.find('blockquote p.quote-text ');
  var $author = $el.find('cite');
  var $button = $el.find('button#next-quote');
  var $tweetBtn = $el.find('a#tweet-quote');
  var tweetIntentUrl = 'https://twitter.com/intent/tweet?text=';

  $button.on('click', getNextQuote);

  getNextQuote();

  function _render () {
    $quote.text(currentQuote.text);
    $author.text(currentQuote.author);
    var tweetQuoteUrl = [tweetIntentUrl, '"', currentQuote.text, '" - ', currentQuote.author];
    $tweetBtn.attr('href', tweetQuoteUrl.join('') );
  }

  function getNextQuote () {
     currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
     _render();
  }

})();
