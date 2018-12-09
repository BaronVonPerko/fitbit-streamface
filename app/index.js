import document from "document";
import clock from "clock";
import { preferences } from "user-settings";
import { goals, today } from "user-activity";

console.log((goals.steps || 0) + " steps");

let time = document.getElementById("time");
let steps = document.getElementById("steps");
let arc = document.getElementById("arc-fg");
let txtDate = document.getElementById("date");


function update() {
    steps.text = today.local.steps || 0;

    let anglePercentage = (today.local.steps || 0) / (goals.steps || 0);
    let angle = 360 * anglePercentage;
    arc.sweepAngle = angle;
}
update();

setInterval(update, 3000);




let date = new Date();
let month = nameOfMonth(date.getMonth());
let day = date.getDate();



clock.granularity = "minutes";
clock.ontick = (evt) => {
    let hours = evt.date.getHours();
    let minutes = evt.date.getMinutes();

	if(preferences.clockDisplay === "12h" && hours == 12) {
        hours = 12;
    }
	
    else if(preferences.clockDisplay === "12h" && hours > 12) {
        hours = hours - 12;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    time.text = `${hours}:${minutes.toString()}`;
}

txtDate.text = `${month} ${day}`;


function nameOfMonth(i) {
    switch(i) {
      case 0:
        return "JAN";
      case 1:
        return "FEB";
      case 2:
        return "MAR";
      case 3:
        return "APR";
      case 4:
        return "MAY";
      case 5:
        return "JUN";
      case 6:
        return "JUL";
      case 7:
        return "AUG";
      case 8:
        return "SEP";
      case 9:
        return "OCT";
      case 10:
        return "NOV";
      case 11:
        return "DEC";
    }
  }
  