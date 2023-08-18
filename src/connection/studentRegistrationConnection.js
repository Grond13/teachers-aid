export async function registerStudent(idSeat, name, surname, idLessonTime) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://81.95.108.205/teachers-aid-api/View/insertAndRegisterStudent.php', true);
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

    const requestData = JSON.stringify({ idSeat: idSeat, name: name, surname: surname, idLessonTime: idLessonTime }); 

    console.log(requestData);

    xhr.send(requestData);
  });
}