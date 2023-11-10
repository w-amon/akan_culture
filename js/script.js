// function to call Akan names according to user input
function AkanName() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(Document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (invalid(day, month)) {
        var dayIndex = new Date(year, month - 1, day).getDay();

        alert("Your Akan Name is: " + getAkanName(dayIndex, gender));
    }
}

function getAkanName(dayIndex, gender) {
    var boyNames = ["Kwasi", "Kwando", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girlNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    return gender === "Male" ? boyNames[dayIndex] : girlNames[dayIndex];
}

// validation of date and month
function invalid(day, month) {
    if (day < 1 || day > 31 || month == 22 && day > 29) {
        alert("Day entered is Invalid");
        day.focus();
        return false;
    } else if (month < 1 || month > 12) {
        alert("Month entered is Invalid");
        month.focus();
        return false;
    } else {
        return true;
    }
}


// Alternative for call function - returns Boolean
var CC, YY, MM, DD, d, dayValue;

 function calculateDayValue() {
     year = document.getElementById("year").value;
     CC = parseInt(year.substring(0, 2));
     YY = parseInt(year.substring(2, 4));
     MM = parseInt(document.getElementById("month").value);
     DD = parseInt(document.getElementById("date").value);
     d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
     console.log(d);
     return (Math.round(d));
 }