//1
function isPalindrome(str) {
    let strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}
test = isPalindrome('кот');
test2 = isPalindrome('шалаш');

console.log(test);
console.log(test2);

//2
function min(a, b) {
    if (a < b) {
        return a;
    } else
    {
        return b;
    }
}

//3
function max (a, b) {
    return a > b ? a : b;
}
