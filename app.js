// getElementById()
// querySelector()
// .innerText
// addEventListener('click', () =>{})
// Number()
// Math.round()
// slice 
// spit 

const calculateButton = document.getElementById('calculate');
const tipAmountText = document.getElementById('tip-amount');
const totalPerPersonText = document.getElementById('total-per-person');
const billAmountInput = document.getElementById('bill-amount');
const numberOfPeopleinput = document.getElementById('number-of-people');

calculateButton.addEventListener('click', function(){
    // const originalBillAmount = billAmountInput.value;
    const originalBillAmount = Number(billAmountInput.value);
    console.log(originalBillAmount);
    const numberOfPeople = Number(numberOfPeopleinput.value);
    console.log(numberOfPeople);
    
    const selectedRadioTip = document.querySelector('input[name="tip"]:checked');
    console.log(selectedRadioTip);

    // const tipPercentage = selectedRadioTip.value.slice(0,-1);

    const tipPercentage = Number(selectedRadioTip.value.slice(0,-1))/100;
    console.log(tipPercentage);

    const totalTip = Math.round(originalBillAmount * tipPercentage * 100)/100;
    console.log(totalTip);

    const totalBill = totalTip + originalBillAmount;

    const perPerson = Math.round(totalBill/numberOfPeople * 100)/100;
    console.log(perPerson);

    // tipAmountText.innerText = totalTip;
    tipAmountText.innerText = formatPrice(totalTip);

    // totalPerPersonText.innerText = perPerson;
    totalPerPersonText.innerText = formatPrice(perPerson);
})



const formatPrice = (price) => {
    console.log(price)
    let retVal = price.toString();
    const parts = retVal.split('.');
    console.log(parts)
    if(parts[1].length ===1){
        retVal +="0"
    }
    if(parts[0].length === 1){
        retVal = "0" + retVal;
    }
    return retVal
}

console.log(!selectedRadioTip)
if(!selectedRadioTip) return;
console.log(!selectedRadioTip)