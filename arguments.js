// arguments is a array like object, it helps to add unlimited numbers as well as string

function addNumbers(num1, num2) {
    // console.log(arguments[2]);

    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    // const result = num1 + num2;
    return result;
}
const result = addNumbers(23, 34, 43, 50, 122);
console.log(result);

function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Hanif', 'Songket', 'valo', 'manus', 'uray', 'fanus');
console.log(name);