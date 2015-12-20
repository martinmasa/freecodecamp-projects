(function (window) {

  'use strict';

  angular
    .module('app', [])
    .controller('PClockController', PClockController)
    .filter('formatTime', formatTime);

  PClockController.$inject = ['$interval'];

  function PClockController ($interval) {

    var sessionLength = 25 * 60;
    var breakLength = 5 * 60;
    var timer;


    var model = {
      sessionLength: sessionLength,
      breakLength: breakLength,
      sessionTimer: sessionLength,
      breakTimer: breakLength
    };

    function startTimer () {
      if (timer) {
        return;
      }

      timer = $interval(function () {
        if (model.sessionTimer > 0) {
          model.sessionTimer--;
        } else if (model.breakTimer > 0) {
          model.breakTimer--;
        }
        else {
          resetTimer();
        }
      }, 1000);
    }

    function stopTimer () {
      if (angular.isDefined(timer)) {
        $interval.cancel(timer);
        timer = undefined;
      }
    }

    function resetTimer () {
      stopTimer();
      model.sessionTimer = model.sessionLength;
      model.breakTimer = model.breakLength;
    }

    function increaseSessionLength () {
      model.sessionLength += 60;
    }

    function decreaseSessionLength () {
      model.sessionLength -= 60;
    }

    function increaseBreakLength () {
      model.breakLength += 60;
    }

    function decreaseBreakLength () {
      model.breakLength -=60;
    }

    angular.extend(this, {
      model: model,
      startTimer: startTimer,
      stopTimer: stopTimer,
      resetTimer: resetTimer,
      increaseSessionLength: increaseSessionLength,
      decreaseSessionLength: decreaseSessionLength,
      increaseBreakLength: increaseBreakLength,
      decreaseBreakLength: decreaseBreakLength
    });

  }

  function formatTime () {
    return function (timeInSeconds, format) {

      if(isNaN(timeInSeconds)) {
        return;
      }

      var m = Math.floor(timeInSeconds/60);
      var s = timeInSeconds - (m * 60);
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      if (format && format.indexOf('s') < 0) {
        return m;
      }

      return [m, s].join(':');

    };
  }

})(window);
