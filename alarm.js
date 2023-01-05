let countInterval = (function () {
    var seconds = 1500;
    var intervalid = null;
    var round = 0;

    function count() {
        --seconds;
        if ((parseInt(seconds / 60)) < 10) {
            document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
            console.log("1")
        } else
            document.getElementById("min").innerHTML = parseInt(seconds / 60);
        if ((seconds % 60) < 10) {
            document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
            console.log("2")
        } else
            document.getElementById("sec").innerHTML = parseInt(seconds % 60);
        if (seconds <= 0) {
            clearInterval(intervalid);
            intervalid = null;
            document.getElementById('myAudio').play()
            round++;
            if ((round % 8) == 0)
                seconds = 1500;
            if ((round % 8) == 1)
                seconds = 300;
            if ((round % 8) == 2)
                seconds = 1500;
            if ((round % 8) == 3)
                seconds = 300;
            if ((round % 8) == 4)
                seconds = 1500;
            if ((round % 8) == 5)
                seconds = 300;
            if ((round % 8) == 6)
                seconds = 1500;
            if ((round % 8) == 7)
                seconds = 900;
            if ((parseInt(seconds / 60)) < 10) {
                document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
                console.log("3")
            } else
                document.getElementById("min").innerHTML = parseInt(seconds / 60);
            if ((seconds % 60) < 10) {
                document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
            } else
                document.getElementById("sec").innerHTML = parseInt(seconds % 60);
        };

    }

    function start() {
        if (intervalid == null) {
            count();
            intervalid = setInterval(count, 1000)
        }

    }

    function stop() {
        clearInterval(intervalid);
        intervalid = null;
    }

    function five() {
        round = -1;
        stop();
        if ((round % 9) == -1)
            seconds = 300;
        if ((round % 9) == 0)
            seconds = 1500;
        if ((round % 9) == 1)
            seconds = 300;
        if ((round % 9) == 2)
            seconds = 1500;
        if ((round % 9) == 3)
            seconds = 300;
        if ((round % 9) == 4)
            seconds = 1500;
        if ((round % 9) == 5)
            seconds = 300;
        if ((round % 9) == 6)
            seconds = 1500;
        if ((round % 9) == 7)
            seconds = 900;
        if ((parseInt(seconds / 60)) < 10)
            document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
        else
            document.getElementById("min").innerHTML = parseInt(seconds / 60);
        if ((seconds % 60) < 10)
            document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
        else
            document.getElementById("sec").innerHTML = parseInt(seconds % 60);
    }

    function fiveteen() {
        round = -1;
        stop();
        if ((round % 9) == -1)
            seconds = 900;
        if ((round % 9) == 0)
            seconds = 1500;
        if ((round % 9) == 1)
            seconds = 300;
        if ((round % 9) == 2)
            seconds = 1500;
        if ((round % 9) == 3)
            seconds = 300;
        if ((round % 9) == 4)
            seconds = 1500;
        if ((round % 9) == 5)
            seconds = 300;
        if ((round % 9) == 6)
            seconds = 1500;
        if ((round % 9) == 7)
            seconds = 900;
        if ((parseInt(seconds / 60)) < 10)
            document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
        else
            document.getElementById("min").innerHTML = parseInt(seconds / 60);
        if ((seconds % 60) < 10)
            document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
        else
            document.getElementById("sec").innerHTML = parseInt(seconds % 60);
    }

    function resete() {
        round = 0;
        stop();
        if ((round % 8) == 0)
            seconds = 1500;
        if ((round % 8) == 1)
            seconds = 300;
        if ((round % 8) == 2)
            seconds = 1500;
        if ((round % 8) == 3)
            seconds = 300;
        if ((round % 8) == 4)
            seconds = 1500;
        if ((round % 8) == 5)
            seconds = 300;
        if ((round % 8) == 6)
            seconds = 1500;
        if ((round % 8) == 7)
            seconds = 900;
        if ((parseInt(seconds / 60)) < 10)
            document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
        else
            document.getElementById("min").innerHTML = parseInt(seconds / 60);
        if ((seconds % 60) < 10)
            document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
        else
            document.getElementById("sec").innerHTML = parseInt(seconds % 60);
    }

    function reset() {
        round++;
        stop();
        if ((round % 8) == 0)
            seconds = 1500;
        if ((round % 8) == 1)
            seconds = 300;
        if ((round % 8) == 2)
            seconds = 1500;
        if ((round % 8) == 3)
            seconds = 300;
        if ((round % 8) == 4)
            seconds = 1500;
        if ((round % 8) == 5)
            seconds = 300;
        if ((round % 8) == 6)
            seconds = 1500;
        if ((round % 8) == 7)
            seconds = 900;
        if ((parseInt(seconds / 60)) < 10)
            document.getElementById("min").innerHTML = "0" + parseInt(seconds / 60);
        else
            document.getElementById("min").innerHTML = parseInt(seconds / 60);
        if ((seconds % 60) < 10)
            document.getElementById("sec").innerHTML = "0" + parseInt(seconds % 60);
        else
            document.getElementById("sec").innerHTML = parseInt(seconds % 60);
    }
    return {
        startCount: start,
        stopCount: stop,
        resetCount: reset,
        reseteCount: resete,
        fiveCount: five,
        fiveteenCount: fiveteen
    }
})()
//}
//window.addEventListener("load",startTimer,false);
