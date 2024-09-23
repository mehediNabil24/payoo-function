document.getElementById('btn-cash-out').addEventListener('click',function(event)
{
    event.preventDefault();

    const cashMoney= getInputValueById('cash-out');
    const getPin =getInputValueById('input-cash-pin-no');
    console.log(cashMoney,getPin);

    if(isNaN(cashMoney)){
        alert('Failed to cash out');
        return;
    }
    if(getPin ===  1234){
        const balance =getTextValueById('account-balance');
        if(cashMoney> balance){
            alert('You do not have enough Money');
            return;
        }
        const newBalance = balance - cashMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history 
        const div =document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class="text-2xl font-bold"> Cash Out</h4>
        <p>${cashMoney} withdraw. New Balance: ${newBalance} </p>;
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert("it's fail");
    }
})