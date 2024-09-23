function getInputValueById(id){
    const inputValue =document.getElementById(id). value;
    const inputNo = parseFloat(inputValue)
    return inputNo;
    
}

function getTextValueById(id){
    const textValue =document.getElementById(id).innerText ;
    const textNo =parseFloat(textValue);
    return textNo;
}

function showSectionById(id){
    document.getElementById('form-add-money').classList.add('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');


}