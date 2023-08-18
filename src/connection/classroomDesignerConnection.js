import store from '../store';

export async function InsertClassroom(specs) {
    const token = store.state.token;

    return new Promise((resolve, reject) => {
        const url = 'http://81.95.108.205/teachers-aid-api/View/insertClassroom.php';
        const xhr = new XMLHttpRequest();

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.responseText);
                const responseData = xhr.responseText;
                resolve(responseData);
            } else {
                reject(new Error('Insert request failed'));
            }
        };

        xhr.onerror = function () {
            reject(new Error('Insert request error'));
        };

        console.log(specs);
        xhr.send(JSON.stringify({ specs: specs, token: token }));
    });
}