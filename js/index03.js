let message;
var credits = 23580;
var pricePerDroid = 3000;
var quantityDroid = prompt('Скільки дроїдів хочеш купити?');
var totalPrice = pricePerDroid * quantityDroid;
if (quantityDroid == null){
    message = 'Скасовано користувачем!';
    // console.log(message);
    alert(message);
}else if(totalPrice<credits){
    credits = credits - totalPrice;
    // console.log('Вы купили',quantityDroid,'дроидов, на счету осталось',credits,'кредитов.');
    alert('Вы купили ' + quantityDroid + ' дроидов, на счету осталось ' + credits + ' кредитов.');
} else{
    message ='Недостаточно средств на счету!';
    alert(message);
}