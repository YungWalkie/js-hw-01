const ADMIN_PASSWORD = 'jqueryismyjam';
var message;
var dialogue = prompt("Введіть пароль");
// console.log(dialogue);
if (dialogue == null){
        message = 'Скасовано користувачем!';
        // console.log(message);
        alert(message);
}else{
switch (dialogue){
    case ADMIN_PASSWORD:
        message = 'Ласкаво просимо!'
        // console.log(message);
        alert(message);
        break;
    default:
        message = 'Доступ заборонений, невірний пароль!';
        // console.log(message);
        alert(message);
        break;
}
}