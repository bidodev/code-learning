
/*
    Addition. Write a program to add up the numbers 1 to 20.
*/

function addUp(number) {
    result = 0;

    for (let i = 0; i < number; i++) {
        result += i;
    }
    return result;
}

console.log(addUp(21));

/*
    Write a program that will output,
    "There are i bottles of beer on the wall." 
    "There is one bottle of beer on the wall."
    "There are two bottles of beer on the wall" up until there are five bottles.
*/
for (let count = 1; count < 6; count++) {
    switch (count) {
        case 1:
            console.log(`There is ${count} beer on the wall`);
            break;

        default:
            console.log(`There are ${count} beers on the wall`);
    }

}

/*
The odd/even reporter. Write a program that will iterate from 0 to 20. 
For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
*/
for (count = 0; count < 21; count++) {
    //check if its even or odd..
    // if the rest from count % 2 is differ 0, then the number is a odd (impar)

    count % 2 != 0 ? console.log(`The number ${count} is a odd`) : console.log(`The number ${count} is a even`);

    /*
    condition ? value if true : value if false
    The Conditional (Ternary) Operator
    */
}


/*
Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, 
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). 
Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

*/

for (count = 0; count < 11; count++){
    mult = 2 * count;
    console.log(` 2 * ${count} = ${mult}`);
    
    for (j = 0; j < 11; j++) {
        result = 1 * j;
        console.log(` 1 * ${j} = ${result}`);
    }
}

/*

Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

*/
for (count = 0; count < 101; count++){
    if (count % 3 == 0){
    console.log (`${count} fizz`);
    }
    if (count % 5 == 0){
        console.log (`${count} Buzz`);
    }
    if (count % 15 == 0){
        console.log (`${count} FizzBuzz`);
    }

}
/*
Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

Bonus

Write programs that produce the following outputs:

100 200 300 400 500 600 700 800 900 1000

1 2 4 8 16 32 64 128

0 2 4 6 8 10

3 6 9 12 15

9 8 7 6 5 4 3 2 1 0

1 1 1 2 2 2 3 3 3 4 4 4

0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
*/