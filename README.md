
# Tax Calculator
A simple tax calculator built with HTML, CSS, and JavaScript. This calculator computes the net income after deducting tax based on the provided details.





# Features
• Gross Annual Income: Input field to enter the gross annual income.

• Extra Income: Input field to enter any additional income.

• Age Group: Dropdown to select the age group which determines the tax rate.

• Deductions: Input field to enter any applicable deductions.

• Submit Button: Calculate the net income after tax deductions.

• Validation: Validates the input fields for non-negative integers.

• Modal Result: Displays the calculated net income after tax deductions in a modal.

# Prerequisites
• Web Browser

• Code Editor (e.g., Visual Studio Code)

## Installation

1.Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
2.Clone the repository:
```bash
git clone https://github.com/your-username/tax-calculator.git
cd tax-calculator
```
3.Open index.html in a web browser to view the application.
## Validation
- Gross Annual Income: Must be a non-negative integer.

- Extra Income: Must be a non-negative integer.

- Deductions: Must be a non-negative integer.

- Age Group: Must select an age group.
## Calculations
The net income is calculated based on the following criteria:
- If the taxable income is greater than 800,000:

  - For age group under 40: Tax rate is 30%.
  - For age group between 40 and 60: Tax rate is 40%.
  - For age group over 60: Tax rate is 10%.
- If the taxable income is less than or equal to 800,000: No tax.
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

