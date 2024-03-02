const amount = document.querySelector('#amount');
const guest = document.querySelector('#guest');
const quality = document.querySelector('#quality');
const tipAmount = document.querySelector('#tip-amount');

const calculate = () => {
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = '';
    guest.value = '';
    quality.value = '';
    if(tip === 'NaN'){
        tipAmount.innerText = 'Tip $0 each';
        showTipAmount();
    }else {
        tipAmount.innerText = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

function showTipAmount() {
    let x = tipAmount;
    x.className = 'show';
    setTimeout(() => {
        x.className = x.className.replace('show', '')
    }, 3000);
}