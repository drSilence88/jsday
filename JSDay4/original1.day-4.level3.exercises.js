//1.- Write a program which tells the number of days in a month.
let monthDays = prompt('Enter a month').toLowerCase();
switch (monthDays) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "octuber":
    case "december":
        prompt(`${monthDays} has 31 days`);
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        prompt(`${monthDays} has 30 days`);
        break;
    case "february":
        prompt(`${monthDays} has ${dateLeap()} days`);
        break;
    default:
        console.log(`is not a month ${monthDays}`);
        break;
}


//2.- Write a program which tells the number of days in a month, now consider leap year.
function dateLeap(number) {
    let date = new Date();
    let year = date.getFullYear();
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return number = 29;
        }
    } else if (year % 400 === 0) {
        return number = 29;
    } else {
        return number = 28;
    }
}
