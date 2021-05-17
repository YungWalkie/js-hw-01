let message;
let credits = 23580;
let pricePerDroid = 3000;
const quantityDroid = prompt('Скільки дроїдів хочеш купити?');
const totalPrice = pricePerDroid * quantityDroid;
if (quantityDroid == null){
    message = 'Скасовано користувачем!';
    // console.log(message);
    alert(message);
}else if(totalPrice<credits){
    credits = credits - totalPrice;
    // console.log('Вы купили',quantityDroid,'дроидов, на счету осталось',credits,'кредитов.');
    alert('Вы купили ' + quantityDroid + ' дроидов, на счету осталось ' + credits + ' кредитов.');
    // alert(`Вы купили ${quantityDroid} дроидов, на счету осталось ${credits} кредитов.`);
} else{
    message ='Недостаточно средств на счету!';
    alert(message);
}