export default function (input) {
    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours = 0, minutes = 0, seconds = 0, totalSeconds;
    
    if (reptms.test(input)) {
        var matches = reptms.exec(input);
        if (matches[1]) hours = Number(matches[1]);
        if (matches[2]) minutes = Number(matches[2]);
        if (matches[3]) seconds = Number(matches[3]);
        totalSeconds = hours * 3600 + minutes * 60 + seconds;
    }
    if (totalSeconds < 86400) {
        var dt = new Date("01/01/2000 0:00");
        dt.setSeconds(totalSeconds);
        return formatTime(dt);
    } else {
        return null;
    }
    function formatTime(dt) {
        var h = dt.getHours(),
            m = dt.getMinutes(),
            s = dt.getSeconds(),
            r = "";
        if (h > 0) {
            r += (h > 9 ? h.toString() : "0" + h.toString()) + ":";
        }
        r += (m > 9 ? m.toString() : "0" + m.toString()) + ":"
        r += (s > 9 ? s.toString() : "0" + s.toString());
        return r;
    }
}