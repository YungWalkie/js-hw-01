const total = 100;
let ordered = 50;
let messageNotEnough = '"На складе недостаточно твоаров!"';
let messageEnough = '"Заказ оформлен, с вами свяжется менеджер"';
ordered>total ? console.log(messageNotEnough) : console.log(messageEnough)
// console.log(ordered>total ? messageNotEnough : messageEnough);
ordered = 20;
ordered>total ? console.log(messageNotEnough) : console.log(messageEnough)
ordered = 80;
ordered>total ? console.log(messageNotEnough) : console.log(messageEnough)
ordered = 130;
ordered>total ? console.log(messageNotEnough) : console.log(messageEnough)