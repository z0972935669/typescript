// import {hi} from 'm.js';
console.log('hello');
let a = 10;
// 這是一個註釋
// console.log(hi);
console.log(a);

// a = 'hello';

function fn(a: number, b: number) {
    return a + b;
}

function fn2(this: Window) {
    alert(this);
}

let box1 = document.getElementById('box1');

// if (box1 != null) {
//     box1.addEventListener('click', function() {
//         alert('hello');
//     })
// }

box1?.addEventListener('click', function() {
    alert('hello');
})