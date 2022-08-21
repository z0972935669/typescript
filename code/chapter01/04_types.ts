// object表示一個js對象
let a: object;
a = {};
a = function (){};

// {}用來指定對象中可以包含哪些屬性
// 語法:{屬性名: 屬性值, 屬性名: 屬性值,}
// 在屬性名後邊加上?，表示屬性是可選的
let b: {name: string, age?: number};

b = {name: '孫悟空', age: 18};

// [propName: string]: any 表示任意類型的屬性
let c: {name: string, [propName: string]: any};
c = {name: '豬八戒', age:18, gender:'男'}

/**
 * 設置函數結構的類型聲明:
 * 語法:(型參: 類型, 型參: 類型 ...) => 返回值
 *  
 */
let d: (a:number,b:number) => number
// d = function(n1: number , n2: number):number {
//     return n1 + n2;
// }

/**
 * 數組的類型聲明:
 * 類型[]
 * Array<類型>
 */
// string[] 表示字符串數組
let e: string[];
e = ['a', 'b', 'c'];

// number[] 表示數值數組
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/**
 * 元組: 元組就是固定長度的數組
 * 語法: [類型, 類型, 類型];
 */
let h: [string, number];
h = ['hello', 123]

/**
 * enum: 枚舉
 */
enum Gender {
    Male = 0,
    Female = 1
}
let i: {name: string, gender: Gender};
i = {
    name: '孫悟空',
    gender: Gender.Male // 'male'
}

// console.log(i.gender === Gender.Male);
// &表示同時
let j: {name:string} & {age:number};
// j = {name: '孫悟空', age: 18};

// 類型的別名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 5;