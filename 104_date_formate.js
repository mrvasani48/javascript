function today() {
    var date = new Date();
    function dateformate() {
        var date = new Date();
        dat = date.getDate();
        mth = date.getMonth();
        day = date.getDay();
        year = date.getFullYear();
        function mnth(mth) {
            var array = ["january", "february", "march", "April", "may", "june", "july", "august", "september", "octomber", "november", "december"];
            return array[mth];

        };
        function da(day) {
            arr = ["sunday", "monday", "Tuesday", "wednesday", "thursday", "friday", "satureday"];
            return arr[day]
        };
        return da(day) + " " + dat + "-" + mnth(mth) + "-" + year;

    };
    document.write(dateformate(date) + "<br>");

    function formattime(date) {
        hour = date.getHours();
        if (hour < 10) {
            hour = "0" + hour;
        }
        else {
            hour = hour
        };

        min = date.getMinutes();
        if (min < 10) {
            min = "0" + min
        }
        else {
            min = min;
        };

        sec = date.getSeconds();

        if (sec < 10) {
            sec = "0" + sec;
        }
        else {
            sec = sec;
        };
        if (hour > 12) {
            hour = hour - 12;
        }
        else {
            hour = hour;
        };
        return "Time = " + hour + ":" + min + ":" + sec;

    };
    document.write(formattime(date));
};



today();