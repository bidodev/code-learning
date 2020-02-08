//Array

//let fruits = ['banana', 'orange', 'apple'];

let fruits = new Array('banana', 'apple', 'orange');

console.log(fruits[0]); //print banana index[0]

//fruits[0] = 'pear'; //set pear in index [0]

console.log(fruits.length);
 

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array commn methods
console.log ('to string', fruits.toString());
console.log (fruits.join(' * '));
console.log (fruits.pop(), fruits); //removes last item
console.log (fruits.push('blackberries'), fruits); //appends

fruits[3] = 'kiwi';
console.log (fruits);

fruits.shift(); //remove first element from an array.
console.log (fruits);

fruits.unshift('blackberry');
console.log (fruits);

let vegetables = ['gurken', 'rotkohl', 'zwiebel'];

let allGroceries = fruits.concat(vegetables);
console.log (allGroceries);
/*
for (let i = 0; i < allGroceries.length; i++){
    console.log(allGroceries[i]);
}

let i = 0;

while (i < allGroceries.length){
    console.log(allGroceries[i]);
    i++;
}
*/

console.log(allGroceries.sort()); //sort strings in the array.

let someNumbers = [5, 10, 25, 4, 10, 3, 5, 7, 8, 20, 3];
console.log(someNumbers);


let emptyArray = new Array(); //create a empty array

for (let num = 0; num < 10; num++){
    emptyArray.push(num);
} //fill the array out.

console.log(emptyArray);