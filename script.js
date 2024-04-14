document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("taxForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Validation flags
      let isValidGrossIncome = true;
      let isValidExtraIncome = true;
      let isValidDeductions = true;
      const gross_Error_Icon = document.getElementById("grossErrorIcon");
      const extra_Error_Icon = document.getElementById("extraErrorIcon");
      const deduction_Error_Icon =
        document.getElementById("deductionErrorIcon");
      // Input fields
      const grossIncomeInput = document.getElementById("grossIncome");
      const extraIncomeInput = document.getElementById("extraIncome");
      const deductionsInput = document.getElementById("deductions");

      // Parse input values
      const grossIncome = parseFloat(grossIncomeInput.value);
      const extraIncome = parseFloat(extraIncomeInput.value);
      const deductions = parseFloat(deductionsInput.value);

      // Validate inputs
      if (isNaN(grossIncome) || grossIncome < 0) {
        gross_Error_Icon.classList.remove("hidden");
        showError(grossIncomeInput, "grossTooltip", "grossErrorIcon");
        isValidGrossIncome = false;
      } else {
        hideError("grossTooltip", "grossErrorIcon");
        gross_Error_Icon.classList.add("hidden");
      }
      if (isNaN(extraIncome) || extraIncome < 0) {
        // Handle validation error for extra income
        extra_Error_Icon.classList.remove("hidden");
        showError("error in gross", "extraTooltip", "extraErrorIcon");
        isValidExtraIncome = false;
      } else {
        hideError("extraTooltip", "extraErrorIcon");
        extra_Error_Icon.classList.add("hidden");
      }
      if (isNaN(deductions) || deductions < 0) {
        // Handle validation error for deductions
        deduction_Error_Icon.classList.remove("hidden");
        showError("error in gross", "deductionTooltip", "deductionErrorIcon");
        isValidDeductions = false;
      } else {
        hideError("deductionTooltip", "deductionErrorIcon");
        deduction_Error_Icon.classList.add("hidden");
      }

      // Proceed only if all validations pass
      if (isValidGrossIncome && isValidExtraIncome && isValidDeductions) {
        const ageGroup = document.getElementById("ageGroup").value;
        let taxableIncome = grossIncome + extraIncome - deductions;
        let taxRate = 0;

        if (taxableIncome > 800000) {
          switch (ageGroup) {
            case "under40":
              taxRate = 0.3;
              break;
            case "between40and60":
              taxRate = 0.4;
              break;
            case "over60":
              taxRate = 0.1;
              break;
            default:
              // Handle error for invalid age group
              return; // Exit the function if age group is invalid
          }
          taxableIncome -= 800000; // Deduct the non-taxed portion
          taxableIncome = taxableIncome * taxRate; // Apply tax rate
        } else {
          taxableIncome = 0; // No tax for income under 8 lakhs
        }

        let finalIncome =
          grossIncome + extraIncome - deductions - taxableIncome;

        // Display results in the modal
        document.getElementById("finalIncome").textContent =
          finalIncome.toFixed(2);
        $("#resultModal").modal("show");
      }
    });
});

document.querySelectorAll(".error-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    const tooltipId = this.id.replace("ErrorIcon", "Tooltip");
    const tooltip = document.getElementById(tooltipId);
    tooltip.classList.add("active");
  });

  icon.addEventListener("mouseleave", function () {
    const tooltipId = this.id.replace("ErrorIcon", "Tooltip");
    const tooltip = document.getElementById(tooltipId);
    tooltip.classList.remove("active");
  });
});

function showError(input, tooltipId, iconId) {
  const tooltip = document.getElementById(tooltipId);
  const icon = document.getElementById(iconId);
  tooltip.classList.add("active");
  input.style.border = "1px solid red";
  icon.style.color = "red";
}

function hideError(tooltipId, iconId) {
  const tooltip = document.getElementById(tooltipId);
  const icon = document.getElementById(iconId);
  tooltip.classList.remove("active");
  icon.style.color = "initial";
}

const extraIncomeInput = document.getElementById("extraIncome");
// const extraIncomeInput = document.getElementById("extraIncome");

extraIncomeInput.addEventListener("change", function (e) {
  checkValidInput1(e);
});

function checkValidInput1(e) {
  const extra_Error_Icon = document.getElementById("extraErrorIcon");
  const extraIncome = parseFloat(e.target.value);
  if (isNaN(extraIncome) || extraIncome < 0) {
    // Handle validation error for extra income
    extra_Error_Icon.classList.remove("hidden");
    showError("error in gross", "extraTooltip", "extraErrorIcon");
  } else {
    hideError("extraTooltip", "extraErrorIcon");
    extra_Error_Icon.classList.add("hidden");
  }
}

const grossIncomeInput = document.getElementById("grossIncome");
grossIncomeInput.addEventListener("change", function (e) {
  checkValidInput2(e);
});

function checkValidInput2(e) {
  const gross_Error_Icon = document.getElementById("grossErrorIcon");
  const grossIncome = parseFloat(e.target.value);
  if (isNaN(grossIncome) || grossIncome < 0) {
    gross_Error_Icon.classList.remove("hidden");
    showError("error in gross", "grossTooltip", "grossErrorIcon");
    isValidGrossIncome = false;
  } else {
    hideError("grossTooltip", "grossErrorIcon");
    gross_Error_Icon.classList.add("hidden");
  }
}

const deductionsInput = document.getElementById("deductions");
deductionsInput.addEventListener("change", function (e) {
  checkValidInput3(e);
});

function checkValidInput3(e) {
  const deduction_Error_Icon = document.getElementById("deductionErrorIcon");
  const deductions = parseFloat(e.target.value);
  if (isNaN(deductions) || deductions < 0) {
    deduction_Error_Icon.classList.remove("hidden");
    showError("error in gross", "deductionTooltip", "deductionErrorIcon");
    isValidDeductions = false;
  } else {
    hideError("deductionTooltip", "deductionErrorIcon");
    deduction_Error_Icon.classList.add("hidden");
  }
}
