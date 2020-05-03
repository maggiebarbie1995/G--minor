function wawa() {
    var date = document.getElementById('input_id').value;
    var gender = document.getElementById('gender').value;
    date.toString();
    var centuryDigits;
    var yearDigits;
    var month;
    var dayDay;
    var year;
    centuryDigits = parseInt(date.slice(0, 2));
    yearDigits = parseInt(date.slice(2, 4));
    month = parseInt(date.slice(5, 7));
    dayDay = parseInt(date.slice(8, 10));
    year = parseInt(date.slice(0, 4)); 
    if ((dayDay <= 0 || dayDay > 31) || (month <= 0 || month > 12)) {
        alert("You entered invalid date.");
    }
    var birthWeek = ( ( (centuryDigits/4) -2*centuryDigits-1) + ((5*yearDigits/4) ) + ((26*(month+1)/10)) + dayDay ) % 7;
    var birthWeekTrunc;
    birthWeekTrunc = Math.trunc(birthWeek);
    var days;
    var maleNames;
    var femaleNames;
      