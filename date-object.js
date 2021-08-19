const myFavDate = new Date('1971-12-16');
console.log(myFavDate)

// time and date in js is made of two styles

const anotherDate = new Date(1971, 2, 23, 11, 22, 34, 56)
console.log(anotherDate)

if (myFavDate.getTime() < anotherDate.getTime()) {
    console.log('coming')
}