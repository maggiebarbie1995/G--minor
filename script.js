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