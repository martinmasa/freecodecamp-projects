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

    function displayTime (seconds) {
      var m = Math.floor(seconds/60);
      var s = seconds - (m * 60);
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      return [m, s].join(':');
    }

    function startTimer () {
      if (timer) {
        return;
      }

      timer = $interval(function () {
        if (model.sessionTimer > 0) {
          model.sessionTimer--;
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
      model.sessionTimer = sessionLength;
      model.breakTimer = breakLength;
    }

    function increaseSessionLength () {
      model.sessionLength++;
    }

    function decreaseSessionLength () {
      model.sessionLength--;
    }

    function increaseBreakLength () {
      model.breakLength++;
    }

    function decreaseBreakLength () {
      model.breakLength--;
    }

    angular.extend(this, {
      model: model,
      startTimer: startTimer,
      stopTimer: stopTimer,
      resetTimer: resetTimer
    });

  }

  function formatTime () {
    return function (timeInSeconds) {

      if(isNaN(timeInSeconds)) {
        return;
      }

      var m = Math.floor(timeInSeconds/60);
      var s = timeInSeconds - (m * 60);
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;

      return [m, s].join(':');

    };
  }

})(window);
