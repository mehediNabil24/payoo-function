document.getElementById('btn-add-amount').addEventListener('click',function(event)
{
    event.preventDefault();
    const addMoney =getInputValueById('input-add-money');
    const getPin =getInputValueById('input-pin-no')
    console.log(addMoney, getPin)

    if(isNaN(addMoney)){
        alert("Failed to add Money");
        return;
    }

    if(getPin ===1234){
        const balance =getTextValueById('account-balance');
        console.log(balance);
        const newBalance = addMoney + balance;
        document.getElementById('account-balance').innerText = newBalance;

        // trnasaction history 
        const p =document.createElement('p');
        p.innerText =`Added: ${addMoney} Tk. New Balance: ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);


    }
    else{
        alert("SOmething is wrong");
    }

})

