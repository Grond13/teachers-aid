import * as mainModel from '../models/mainModel.js';
import { v4 as uuidv4 } from 'uuid';

const startTimes = ["08:00:00", "08:55:00", "10:00:00", "10:55:00", "11:50:00", "12:45:00", "13:40:00", "14:35:00", "15:30:00"];

export async function submitClass(Class) {
    if (Class.idLessonTime != null)
        if (await mainModel.updateClass(Class) == "SUCCESS: Updated successfully.") {
            return true;
        }
        else return false;
    else {
        //TODO 
        if (await mainModel.createClass(Class) == "SUCCESS: Updated successfully.") {
            return true;
        }
        else return false;
    }
}