/// try catch helps to handle error

const myName = 'ami';
try {
    myName = 'tumi';
} catch (error) {
    console.log('getting error', error)
} finally {

}
console.log(100);
console.log(myName)