let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    let enterName = document.getElementById("enterName").value;
    let enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 100000) {
        alert("Insufficient Balance.");
    } else {
        let findUserBankAccount = enterName + "BankBalance";
        let finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@email.com.`)

        // transaction history 
        let createPTag = document.createElement("li");
        let textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        let element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}