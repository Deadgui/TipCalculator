const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const form = document.getElementById("form-tip");
const hidedDiv = document.getElementById("total-billing-page");
const hideDivTotal = document.getElementById("total-page-container")


submitButton.addEventListener("click", event => {
  calculTotal();
})
resetButton.addEventListener("click", event => {
  form.reset(); 
  if (hidedDiv.classList.contains("animation-slideOut")) {
    hidedDiv.classList.remove("animation-slideOut");
    hidedDiv.classList.add('animation-slideIn');
    setTimeout(event => hidedDiv.style.display = "none", 500);
  }

})

function calculTotal() {
    const billInput = Number(document.getElementById("tip-bill-input").value);
    const peopleAmount = Number(document.getElementById('tip-people-sharing').value)
    const tipPercentage = Number(document.getElementById('tip-service-quality').value);

    if (billInput <= 0) {
      alert("You must fill the the amount of your bill ");
      return;
    }
    else if (peopleAmount < 1) {
      alert("You are not planning on stealing do you ? At least one person must pay");
      return;
    }
    else {
      const tipAmount = billInput * tipPercentage;
      let tipEach = tipAmount / peopleAmount;
      tipEach = Math.round(tipEach * 100) / 100;

      const tipDue = document.getElementById("billing-tip-due-text-1");
      const totalTipBill= document.getElementById("total-billing-due-text");
      tipDue.innerText = `${tipEach}€ each`;
      totalTipBill.innerText = `${billInput + tipAmount}€`;

      if (hidedDiv.classList.contains("animation-slideIn")){
        hidedDiv.classList.remove("animation-slideIn"); 
        hidedDiv.classList.add("animation-slideOut");
        setTimeout(event => hidedDiv.style.display = "flex", 200);

      }
    }
  }
