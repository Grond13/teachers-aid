import store from '../store';

export async function updateClass(updatedClass) {
    const token = store.state.token;
    //console.log("sending token: " + token);

    return new Promise((resolve, reject) => {
        const url = 'http://localhost/teachers-aid-api/View/updateLessonTime.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
       
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText);
                const responseData = xhr.responseText;                
                resolve(responseData);
            } else {
                reject(new Error('Update request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Update request error'));
        };
        

        xhr.send(JSON.stringify({lessonTime: updatedClass, token: token}));
    });

}
