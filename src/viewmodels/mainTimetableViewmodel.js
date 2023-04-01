import * as mainTimetableModel from '../models/mainTimetableModel.js';
const startTimes = ["08:00:00", "08:55:00", "10:00:00", "10:55:00", "11:50:00", "12:45:00", "13:40:00", "14:35:00", "15:30:00"];


export async function GetTimetable() {
    const raw = await mainTimetableModel.GetTimetable();
    var classes = JSON.parse(raw);
    console.log(classes);
    var days = {
        Monday: getClasses(classes.filter(element => element['day'] == 'monday')),
        Tuesday: getClasses(classes.filter(element => element['day'] == 'tuesday')),
        Wednesday: getClasses(classes.filter(element => element['day'] == 'wednesday')),
        Thursday: getClasses(classes.filter(element => element['day'] == 'thursday')),
        Friday: getClasses(classes.filter(element => element['day'] == 'friday'))
    };
    var result = "<tbody>";
    for (const day in days) {
        result += "<tr><td>" + day +"</td>";
        for (const time in days[day]) {
            if (days[day][time] == null) {
                result += "<td></td>";
            }
            else {
                result += `<td>
                <div class="lesson-name">` + days[day][time].name + `</div>
                <div class="lesson-classroom">` + days[day][time].classroom + `</div>`;
                if(days[day][time].note != "")               
                    result += `<div class="lesson-note">` + days[day][time].note + `</div>`;
                
                result += `</td>`;
            }
        }
        result += "</tr>";
    }
    result += "</tbody>";
    return result;
}

function getClasses(items) {
    const result = {};
    for (let i = 0; i < startTimes.length; i++) {
        const startTime = startTimes[i];
        const item = items.find(item => item.start === startTime);
        result[startTime] = item || null;
    }
    return result;
}