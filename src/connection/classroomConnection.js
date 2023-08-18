import store from '../store';

export async function GetDesks() {
    const token = store.state.token;
    const lessonTime = store.state.idLessonTime;

    return new Promise((resolve, reject) => {
        const url = 'http://81.95.108.205/teachers-aid-api/View/getTeachingSession.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                //console.log(xhr.responseText);
                const responseData = xhr.responseText;
                resolve(responseData);
            } else {
                console.log(xhr.responseText);
                reject(new Error('Get request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Get request error'));
        };

        console.log(lessonTime);
        xhr.send(JSON.stringify({ token: token, lessonTime: lessonTime }));
    });
}

export async function GetLimitedDesks() {
    const lessonTime = store.state.idLessonTime;
        
    return new Promise((resolve, reject) => {
        const url = 'http://81.95.108.205/teachers-aid-api/View/getSeatSelection.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText);
                const responseData = xhr.responseText;
                resolve(responseData);
            } else {
                console.log(xhr.responseText);
                reject(new Error('Get request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Get request error'));
        };

        console.log(lessonTime);
        xhr.send(JSON.stringify({lessonTime: lessonTime }));
    });
}
