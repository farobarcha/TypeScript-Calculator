import inquirer from 'inquirer';
let result = 0;
let resultMessage = '';
const calculator = await inquirer.prompt([
    {
        type: 'list',
        name: 'operations',
        message: 'Select Operation to perform: ',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Square Root', 'Percentage'],
    },
    {
        type: 'input',
        name: 'operand1',
        message: "Enter a Number: ",
        validate(value) {
            if (isNaN(value)) {
                return 'Please enter a valid number';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'operand2',
        message: "Enter a second Number: ",
        when(choices) {
            return ['Addition', 'Subtraction', 'Multiplication', 'Division'].includes(choices.operations);
        },
        validate(value) {
            if (isNaN(value)) {
                return 'Please enter a valid number';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'percentage',
        message: "Enter percentage(%): ",
        when(choices) {
            return choices.operations == 'Percentage';
        },
        validate(value) {
            if (isNaN(value)) {
                return 'Please enter a valid value';
            }
            return true;
        },
    },
]);
switch (calculator.operations) {
    case 'Addition':
        result = parseFloat(calculator.operand1) + parseFloat(calculator.operand2);
        resultMessage = 'Operation: ' + calculator.operand1 + ' + ' + calculator.operand2;
        break;
    case 'Subtraction':
        result = parseFloat(calculator.operand1) - parseFloat(calculator.operand2);
        resultMessage = 'Operation: ' + calculator.operand1 + ' - ' + calculator.operand2;
        break;
    case 'Multiplication':
        result = parseFloat(calculator.operand1) * parseFloat(calculator.operand2);
        resultMessage = 'Operation: ' + calculator.operand1 + ' X ' + calculator.operand2;
        break;
    case 'Division':
        result = parseFloat(calculator.operand1) / parseFloat(calculator.operand2);
        resultMessage = 'Operation: ' + calculator.operand1 + ' / ' + calculator.operand2;
        break;
    case 'Square Root':
        result = parseFloat(calculator.operand1) * parseFloat(calculator.operand1);
        resultMessage = 'Square root of: ' + calculator.operand1;
        break;
    case 'Percentage':
        result = (parseFloat(calculator.percentage) / 100) * parseFloat(calculator.operand1);
        resultMessage = calculator.percentage + ' % of ' + calculator.operand1;
        break;
    default:
        console.log('Please select an valid operation.');
        break;
}
console.log('\n==================================');
console.log(resultMessage);
console.log('Result: ' + result);
console.log('==================================');
