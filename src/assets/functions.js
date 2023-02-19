export function checkEmail(email){
    var emailTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailTest.test(email);
}

export function checkPassword(password){
    return password.length > 6;
}