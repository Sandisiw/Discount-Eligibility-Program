function checkEligibility() {
  const ageInput = document.getElementById("age");
  const membershipCheckbox = document.getElementById("membership");
  const resultDiv = document.getElementById("result");

  const age = parseInt(ageInput.value, 10);
  const isMember = membershipCheckbox.checked;

  let message = "";

  if (age >= 65) {
    message = "Congratulations! You are eligible for the Senior Discount.";
  } else if (age >= 18 && isMember) {
    message = "Congratulations! You are eligible for the Member Discount.";
  } else {
    message = "Sorry, you are not eligible for any discounts.";
  }

  resultDiv.textContent = message;
}

