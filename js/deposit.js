document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFild = document.getElementById('deposit-fild');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDepositAmount;
    const currentDepositAmount = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositAmount;

    const balancefild = document.getElementById('balance-total');
    const newBalanceAmountString = balancefild.innerText;
    const newBalanceAmount = parseFloat(newBalanceAmountString);
    const currentBalancAmount = newDepositAmount + newBalanceAmount;
    balancefild.innerText = currentBalancAmount;
    
    depositFild.value = '';
})