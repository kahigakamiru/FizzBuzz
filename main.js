for (let i = 1; i <= 100; i++) {
    //first we check if the number is divisible by 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }// If the number doesn’t divide by both 3 and 5 but it is divisible by 3 only 
    else if (i % 3 === 0) {
        console.log("Fizz");
    }// If the number doesn’t divide by both 3 and 5 but it is divisible by 5 only 
    else if (i % 5 === 0) {
        console.log("Buzz");
    }//the number doesn’t divide equally by 3 and/or 5, we print the number itself.
    else {
        console.log(i);
    }
}