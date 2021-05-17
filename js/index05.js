let total = 0;
while (true){
    let input = prompt('Число');
    if(input === null){
        alert(`Загальна сума чисел дорівнює ${total}`);
        break;
    }
    input = Number(input);
    if(Number.isNaN(input)===true){
        alert('Це не число напиши ще раз');
        continue;
    }
    total = total + input;
    // total += input;
}