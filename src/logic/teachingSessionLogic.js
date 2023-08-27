import * as teachingSessionConnection from '../connection/teachingSessionConnection.js';


export async function insertSmallGrade(idStudent, isPlus, description) {
    const result = JSON.parse(await teachingSessionConnection.insertSmallGrade(idStudent, isPlus, description));
    
    console.log(result);

    return result;
}

export async function updateRating(idStudent, activityValue){
    console.log(activityValue);

    const result = await teachingSessionConnection.updateRating(idStudent, activityValue);

    return result;
}


export async function updateNote(idStudent, note){
    const result = await teachingSessionConnection.updateNote(idStudent, note);

    return result;
}
