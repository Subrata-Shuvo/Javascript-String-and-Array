// using isArray to find out array element

function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['soni', 'robi', 'som', 'mongol'];
const myBigF = megaFriend(friends)
    // console.log(myBigF)


// checking a specific item in array

// way 1 -- indexOf
if (friends.indexOf('fox') !== -1) {
    console.log('soni is there')
} else {
    console.log('nai')
}

// way 2 - includes

if (friends.includes('soni')) {
    console.log('ha ache')
}


//  concating array

const first = [1, 2, 3];
const second = [4, 5, 6];
const add = first.concat(second);
console.log(add)