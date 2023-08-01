import * as ClassroomDesignerConnection from '../connection/classroomDesignerConnection.js';

export async function InsertClassroom(specs) {
    //console.log(specs);
    
    if (specs.classroomName && specs.rows && specs.columns && specs.deskSize && specs.teachersDeskRow) {
        ClassroomDesignerConnection.InsertClassroom(specs);
    }
    else return "ERROR: Missing specifications."
}