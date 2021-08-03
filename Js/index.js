let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com",
    "Rafshan", "ashan@example.com", true, false];

let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

let testData3 = [{
    "name": "Vasya",
    "email": "vasya@example.com",
    "age": 20,
    "skills": {"php": 0, "js": -1, "madness": 10, "rage": 10}
}, {
    "name": "Dima",
    "email": "dima@example.com",
    "age": 34,
    "skills": {"php": 5, "js": 7, "madness": 3, "rage": 2}
}, {
    "name": "Colya",
    "email": "colya@example.com",
    "age": 46,
    "skills": {"php": 8, "js": -2, "madness": 1, "rage": 4}
}, {
    "name": "Misha",
    "email": "misha@example.com",
    "age": 16,
    "skills": {"php": 6, "js": 6, "madness": 5, "rage": 2}
}, {
    "name": "Ashan",
    "email": "ashan@example.com",
    "age": 99,
    "skills": {"php": 0, "js": 10, "madness": 10, "rage": 1}
}, {
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11,
    "skills": {"php": 0, "js": 0, "madness": 0, "rage": 10}
}]

let testData4 = [{"name": "Vasya", "email": "vasya@example.com", "age": 20}, {
    "name": "Dima",
    "email": "dima@example.com",
    "age": 34
}, {"name": "Colya", "email": "colya@example.com", "age": 46}, {
    "name": "Misha",
    "email": "misha@example.com",
    "age": 16
}, {"name": "Ashan", "email": "ashan@example.com", "age": 99}, {
    "name": "Rafshan",
    "email": "rafshan@example.com",
    "age": 11
}, 1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com",
    true, false, [[[[1, 2, 1990, 85, 24,
        "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{
            "name": "Rafshan", "email": "rafshan@example.com", "age": 11
        }]]]]]]
/*-----------------------------------------------------------------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------test1--------------------------------------------------------*/
function test1(arr) {
    const newObj = {};

    for (let x = 0; x < arr.length; x++) {
        newObj[x] = arr[x]
    }
    return newObj
}

//console.log(test1(testData))
/*----------------------------test2--------------------------------------------------------*/
const arrays = [[1, 2, 3], [4, 5], [6]];
const test2 = (arr) => arr.reduce((x, y) => x.concat(y))

//console.log(test2(arrays))
/*----------------------------test3--------------------------------------------------------*/
function MultiplicatorUnitFailure() {
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    let result;

    for (let x = 0; x < 1; x++) {
        result = primitiveMultiply(a, b)
        const res = typeof result
        if (res === "number") break
        else x--
    }
    return result
}

// console.log(reliableMultiply(8, 8));
/*----------------------------test4--------------------------------------------------------*/
function test4(arr1, arr2) {
    return [...arr1, ...arr2]
}

const test4_arr1 = [11, 22, 33, 44, 55]
const test4_arr2 = [1, 2, 3, 4, 5]

const test4_newArr = test4(test4_arr1, test4_arr2)

//console.log(newArr)
/*----------------------------test5--------------------------------------------------------*/
const arr3 = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];

function test5(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

//test5(arr3)
/*----------------------------test6--------------------------------------------------------*/
let a1 = function (one, two) {
    return one + two
}
let b1 = function () {
    return false;
}

function paralell(arr, fun) {
    const [[a, [b, c]], [d]] = arr
    const sum = [a(b, c), d()]
    fun(sum)
}

// paralell([[a1, [1, 2]], [b1]], function (results) {
//     console.log(results)
// });
/*----------------------------test7--------------------------------------------------------*/
function array_find(arr, search) {
    return arr.filter(data => {
        return new RegExp(search).test(data.toString());
    });
}

// let result = array_find(testData, /^raf.*/i)
// let result2 = array_find(testData, "Vasya")

// console.log(result)
// console.log(result2)
/*----------------------------test8--------------------------------------------------------*/
const array_skip_until = (arr, val) => {
    const i = arr.indexOf(val)
        if (typeof val === "number") {
            return [...arr.splice(i)]
        } else {
            return i === -1 ? [] : [...arr.splice(i)]
        }

}
/*--//---#Тестировать по очереди ставить блочные коментарии перед индификаторами#---//--*/

// let result = array_skip_until(testData, 2)
// let result2 = array_skip_until(testData, "Rafshan")
// let result3 = array_skip_until(testData, "asd")

// console.log(result)
// console.log(result2)
// console.log(result3)
/*----------------------------test9--------------------------------------------------------*/

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

/*----------------------------test10--------------------------------------------------------*/
function array_unique(arr) {
    let newArr = [];

    for (let str of arr) {
        if (!newArr.includes(str)) {
            newArr.push(str);
        }
    }

    return newArr.sort();
}

//let result = array_unique(testData.concat(testData2))

//console.log(result)
/*----------------------------test11--------------------------------------------------------*/
function array_pluck(arr, path) {
    const idx = path.indexOf('.')
    const newArr = []

    if (idx === -1) {
        for (let a = 0; a < arr.length; a++) {
            newArr.push(arr[a][path])
        }
    } else {
        const x1 = path.slice(0, idx)
        const x2 = path.slice(idx + 1)

        for (let a = 0; a < arr.length; a++) {
            newArr.push(arr[a][x1][x2])
        }
    }
    return newArr;
}

// let result = array_pluck(testData3, 'name')
// let result2 = array_pluck(testData3, 'skills.php')

// console.log(result)
// console.log(result2)
/*----------------------------test12--------------------------------------------------------*/
function array_combine(key_arr, arr2) {
    const newObj = {}

    for (let x = 0; x < key_arr.length; x++) {
        if(typeof key_arr[x] !== 'boolean'){
            newObj[key_arr[x]] = arr2[x]
        }else break
    }
    return newObj
}

// let result = array_combine(testData, testData2)
// console.log(result)

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
