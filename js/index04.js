let creditCost;
var countryInput = prompt('Введите название страны, в которую осуществляете доставку');
switch (countryInput){
    case 'Китай':
        creditCost = 100;
        console.log(creditCost);
        // console.log('Доставка в ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        alert('Доставка в государство ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        break;
    case 'Чили':
        creditCost = 250;
        // console.log('Доставка в ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        alert('Доставка в государство ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        break;
    case 'Австралия':
        creditCost = 170;
        // console.log('Доставка в ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        alert('Доставка в государство ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        break;
    case 'Индия':
        creditCost = 80;
        // console.log('Доставка в ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        alert('Доставка в государство ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        break;
    case 'Ямайка':
        creditCost = 120;
        // console.log('Доставка в ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        alert('Доставка в государство ' + countryInput + ' будет стоить ' + creditCost +' кредитов');
        break;
    default:
        alert('В вашей стране доставка не доступна');
}