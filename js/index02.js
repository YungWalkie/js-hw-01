const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let dialogue = prompt("Введіть пароль");
dialogue = dialogue.toLocaleLowerCase();
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