import * as mainModel from '../models/mainModel.js';

const startTimes = ["08:00:00", "08:55:00", "10:00:00", "10:55:00", "11:50:00", "12:45:00", "13:40:00", "14:35:00", "15:30:00"];

export async function submitClass(Class) {
    if (Class.idLessonTime != null)
        if (await mainModel.updateClass(Class) == "SUCCESS: Updated successfully.") {
            return true;
        }
        else return false;
    else {
        if (await mainModel.createClass(Class) == "SUCCESS: Created successfully.") {
            return true;
        }
        else return false;
    }
}

export async function deleteClass(Class) {
    if (await mainModel.deleteClass(Class) == "SUCCESS: Deleted successfully.") {
        return true;
    }
    else return false;
}


export async function getClassroomNames() {
    return JSON.parse(await mainModel.getClassroomNames());
}

export async function getLessonNames() {
    return JSON.parse(await mainModel.getLessonNames());
}

