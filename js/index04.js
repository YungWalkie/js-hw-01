const countryInput = prompt('Введите название страны, в которую осуществляете доставку');
const countryCapitalized = countryInput.charAt(0).toUpperCase() + countryInput.slice(1).toLowerCase();
const countryTemp = countryCapitalized;
function getCreditCost(price){
    return alert('Доставка в государство ' + countryCapitalized + ' будет стоить ' + price +' кредитов');
}
switch (countryTemp){
    case 'Китай':
        getCreditCost(100);
        break;
        case 'Чили':
            getCreditCost(80);
            break;
            case 'Австралия':
        break;
        case 'Индия':
            getCreditCost(300);
            break;
            case 'Ямайка':
            getCreditCost(120);
        break;
        default:
            alert('В вашей стране доставка не доступна');
        }
        