document.getElementById('btn-withdrow').addEventListener('click', function () {
    const WithdrowFild = document.getElementById('Withdrow-fild');
    const newWithdrowAmountString = WithdrowFild.value;
    const nweWithdrowAmount = parseFloat(newWithdrowAmountString);

    const withdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    withdrowTotalElement.innerText = nweWithdrowAmount;
    const currentWithdrowAmount = previousWithdrowTotal + nweWithdrowAmount;
    withdrowTotalElement.innerText = currentWithdrowAmount;

    const balanceFild = document.getElementById('balance-total');
    const newBalanceAmountString = balanceFild.innerText;
    const newBalanceAmount = parseFloat(newBalanceAmountString);
    const currentBalancAmount = newBalanceAmount - nweWithdrowAmount;
    balanceFild.innerText = currentBalancAmount;

    WithdrowFild.value = '';

})