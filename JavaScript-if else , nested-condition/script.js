// Example No. 01 Day Based Meal Suggestions
let day = prompt("Name today's day");
if(day == "Monday") {
    alert("Today is Biryani.");
}
else if(day == "Tuesday") {
    alert("Today is Nihari.");
}
else if(day == "Wednesday") {
    alert("Today is Pizza.");
}
else if(day == "Thursday") {
    alert("Today is Fried Chicken.");
}
else if(day == "Friday") {
    alert("Today is Beef.");
}
else if(day == "Saturday") {
    alert("Today is Pasta");
}
else if(day == "Sunday") {
    alert("Today is Burger.");
}
else {
    alert("Please enter a valid day name.");
}

//Example No. 02 Weekend vs Weekday Reminder
let reminderDay = prompt("Enter today's day");
if(reminderDay == "Monday" || reminderDay == "Tuesday" || reminderDay == "Wednesday" || reminderDay == "Thursday" || reminderDay == "Friday") {
    alert("Work hard.");
}
else if (reminderDay == "Saturday" || "Sunday") {
    alert("Relax");
}
else {
    alert("Please enter a valid day name.");
}

//Example No. 03 Age-Based Discount Calculation
let age = prompt("Enter your age");
let weekDay = prompt("Enter day's name")
if (age < 18 && (weekDay == "Friday" || weekDay == "Sunday")) {
    alert("Congratulations! You have been given 15% discount.");
}
else if (age >= 18 && (weekDay == "Monday" || weekDay == "Tuesday" || weekDay == "Wednesday" || weekDay == "Thursday")) {
    alert("Congratulations! You have been given 10% discount.");
}
else if (age >= 50 && weekDay == "Sunday") {
    alert("Congratulations! You have been given 20% discount.");
}
else {
    alert("Please valid age and day's name");
}