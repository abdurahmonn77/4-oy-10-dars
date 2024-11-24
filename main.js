// 1.
// function getNumbers(count, result = []) {
//     if (count === 0) {
//         console.log(result);
//         return result;
//     }
//     let number = prompt(`${6 - count} - raqam kiriting`);
//     result.push(Number(number));
//     return getNumbers(count - 1, result);
// }
// getNumbers(5);


// 2.
// let arr1 = [5,6,true,null,8]
// let arr2 = [0,2,5,false,6]
// let finArr = arr1.concat(arr2)
// let count = 0
// let result = finArr.forEach(value => {
//     count += value
// })
// console.log(count);


// 3.
// let arr = [12, 2, 3, 4, 5, 6, 7];
// let minNum = arr[0]; 
// let minIndex = 0;
// for (let item = 1; item < arr.length; item++) { 
//     if (arr[item] < minNum) { 
//         minNum = arr[item]; 
//         minIndex = item; 
//     }
// }
// console.log(minIndex);


// 5.
// let arr = [5,4,3,6,3,7,1]
// let arr2 = [22,1,42,32,65,34,35,413]
// let finArr = arr.concat(arr2)
// let result = finArr.sort((a,b )=> a - b)
// console.log(result);


// 6.
// let carsArr = [
//     {
//         name: "Lacetti",
//         price: 9000
//     },
//     {
//         name: "Damas",
//         price: 7800
//     },
//     {
//         name: "Cobalt",
//         price: 12500
//     },
//     {
//         name: "Gentra",
//         price: 14000
//     },
//     {
//         name: "Onix",
//         price: 17000
//     }
// ]
// let result =  carsArr.sort((a, b) => a - b)
// console.log(result);
// let result2 = carsArr.sort((a, b) => {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// });

// console.log(result2);

// 7.
// ???????????



// 8.
// let str = "Hello World! Bye World";
// function fn(value) {
//     let reversedStr = str.split('').reverse().join('');
//     console.log(reversedStr);
// }
// fn(str)


//------------------------------------------------TASK -- 2 ------------------------------------------------------------\\

// 1, 2
let employee = [
    {
        id: 1,
        name: "Jonathan",
        age: 19,
        salary: 2000
    },
    {
        id: 2,
        name: "Taximus",
        age: 69,
        salary: 6942
    },
    {
        id: 3,
        name: "Bethany",
        age: 19,
        salary: 2500
    },
    {
        id: 4,
        name: "Ochi",
        age: 27,
        salary: 3700
    },
    {
        id: 5,
        name: "Grand",
        age: 67,
        salary: 21500
    },
]
// let salaryArr = employee.map(slr => slr.salary)
// let total = 0
// let maxPerson = employee[0]
// for (let i = 0; i < employee.length; i++) {
//     total += employee[i].salary;
//     if (employee[i].salary > maxPerson.salary) {
//         maxPerson = employee[i]; 
//     }
// }
// console.log(salaryArr, total, maxPerson.name);


// 3.
// let employee = [
//     {
//         id: 1,
//         name: "Jonathan",
//         age: 19,
//         salary: 2000
//     },
//     {
//         id: 2,
//         name: "Taximus",
//         age: 69,
//         salary: 6942
//     },
//     {
//         id: 3,
//         name: "Bethany",
//         age: 19,
//         salary: 2500
//     },
//     {
//         id: 4,
//         name: "Ochi",
//         age: 27,
//         salary: 3700
//     },
//     {
//         id: 5,
//         name: "Grand",
//         age: 67,
//         salary: 21500
//     },
// ]
// let ask = prompt("Propertyni kiriting:")
// function fn(object) {
//     if(ask == "age") {
//         object.sort((a , b) => a.age - b.age)
//         console.log(object);
//     }
//     if(ask == "salary") {
//         object.sort((a , b) => a.salary - b.salary)
//         console.log(object);
//     }
//     if(ask == "name") {
//         console.log("Hali ism bo'yicha ro'yhat qo'shganimiz yo'q.  - Developer")
//     }
// }
// fn(employee)


// 4.
//let arr = [43,12,76,23,97,28,11]
// let result = arr.sort((a,b) => a - b)
// console.log(result);


// 5.
// let arr = [43,12,76,23,97,28,11]
// let result = Math.min(...arr)
// console.log(result);


// 6.
//??


// 7.
let a = prompt("ID kiriting")
a = Number(a);
for(let i = 0; i < employee.length; i++) {
    if(a === employee[i].id) {
        console.log(i, employee[i]);
    }
}