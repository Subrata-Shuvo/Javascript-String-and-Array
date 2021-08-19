const products = [
    'dell laptop', 'hp Laptop', 'dell iphone', 'yellow Laptop', 'Yoga laptop', 'dell htc phone', 'samsung phone'
];

const searching = 'phone';

// indexOf --  we can find out the the array item using indexOf like below

const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

/* we should change the item toLoweCase in which array we are searching the item and which item is about to be changes should also be changed toLowerCase */

// includes --  we can find out the array item including a specific word using includes like below.. includes is also case sensitive like indexOf

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}

console.log(output);


// startsWith - is used to find the array item which is starting with a specific keyword


for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        // output.push(product)
    }
}
console.log(output)


// endsWith - is used to find the array item which is ending with a specific keyword

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)