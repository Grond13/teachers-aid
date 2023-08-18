import store from '../store';

export async function insertSmallGrade(idStudent, isPlus, description) {
  const token = store.state.token;
  const lesson = store.state.idLesson;  

  console.log("inserting new grade");

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://81.95.108.205/teachers-aid-api/View/insertSmallGrade.php', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {   
          console.log(xhr.responseText);
          resolve(xhr.responseText);                    
        } else {
          console.log(xhr.responseText);
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      }
    };

    const requestData = JSON.stringify({ token: token, idLesson: lesson, idStudent: idStudent, isPlus: isPlus, description: description }); 

    xhr.send(requestData);
  });
}

export async function updateRating(idStudent, activityValue) {
  const token = store.state.token;
  const lesson = store.state.idLesson;  

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://81.95.108.205/teachers-aid-api/View/updateStudentRating.php', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          resolve(xhr.responseText);
        } else {
          console.log(xhr.responseText);
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      }
    };

    const requestData = JSON.stringify({ token: token, idLesson: lesson, idStudent: idStudent, activityValue: activityValue }); 

    xhr.send(requestData);
  });
}

export async function updateNote(idStudent, note) {
  const token = store.state.token;
  const lesson = store.state.idLesson;  

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://81.95.108.205/teachers-aid-api/View/updateStudentNote.php', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          resolve(xhr.responseText);
        } else {
          console.log(xhr.responseText);
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      }
    };

    const requestData = JSON.stringify({ token: token, idLesson: lesson, idStudent: idStudent, note: note }); 

    xhr.send(requestData);
  });
}