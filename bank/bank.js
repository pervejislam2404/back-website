const deposit = document.getElementById('deposit-balance');
const withdraw = document.getElementById('withdraw-balance');
const total = document.getElementById('total-balance');

const userDeposit = document.getElementById('user-deposit');
const userWithdraw = document.getElementById('user-withdraw');

const dpsBtn = document.getElementById('deposit-button');
const wtdBtn = document.getElementById('withdraw-button')

dpsBtn.addEventListener('click', (e) => {
    if (userDeposit.value === "") {
        alert("Please enter your withdraw amount")
    } else {
        const userDepositValue = parseFloat(userDeposit.value);
        const depositValue = parseFloat(deposit.innerText);
        const withdrawValue = parseFloat(total.innerText);
        total.innerText = withdrawValue + userDepositValue;
        deposit.innerText = userDepositValue + depositValue;
        userDeposit.value = " ";
    }

})

wtdBtn.addEventListener('click', (e) => {
    if (userWithdraw.value == "") {
        alert("Please enter your withdraw amount")
    } else {
        const userWithdrawValue = parseFloat(userWithdraw.value);
        const withdrawValue = parseFloat(total.innerText);
        total.innerText = withdrawValue - userWithdrawValue;
        const totalWithdraw = parseFloat(withdraw.innerText);
        withdraw.innerText = totalWithdraw + userWithdrawValue;
        userWithdraw.value = " ";
    }

})