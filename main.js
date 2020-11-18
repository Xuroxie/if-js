let user = "John Doe";

console.log (user);

let student = "Ksenia";

console.log (student);

user = student;

console.log (user); // в консоле будет выведено значение student

test = 1;
test++;
test = test + "1"; //21

console.log (test);

test--; // 20

console.log (test);

let result = 1;
let arr = [2, 3, 5, 8];

for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
}

console.log(result);

arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>5 && arr[i]<10) {
        console.log (arr[i]);
    }
}

arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] !=0 ) {
        console.log (arr[i]);
    }
}
