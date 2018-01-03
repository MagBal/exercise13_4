var os = require('os');

function changeTimeShowing() {
    var time = os.uptime();
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = Math.floor(time - (hours * 3600) - (minutes * 60)).toFixed(0);

    return (hours + ' hours ' + minutes + ' min ' + seconds + ' sec');
}

exports.print = changeTimeShowing;