export async function GetTimetable() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/teachers-aid-api/View/getTimetable.php', true);
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseText);
            } else {
              reject(new Error(`HTTP error: ${xhr.status}`));
            }
          }
        };
    
        xhr.send();
      });
}