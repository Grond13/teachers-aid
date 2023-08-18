import store from '../store';

export async function GetTimetable() {
  const token = store.state.token;
  //console.log("sending token: " + token);

  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://81.95.108.205/teachers-aid-api/View/getTimetable.php', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          //console.log(xhr.responseText);
          resolve(xhr.responseText);
        } else {
          reject(new Error(`HTTP error: ${xhr.status}`));
        }
      }
    };

    const requestData = JSON.stringify({ token: token }); 

    xhr.send(requestData);
  });
}
