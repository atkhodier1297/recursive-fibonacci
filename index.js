// Recursion is when a function call itself
// It's great to simplify your solutions.
// Very useful when breaking down your problem into smaller versions of the same problem.

// Every recursive solution must have a base case -- a condition to terminate the recursion.
// Recursion might simplify a problem but it does not always make it a faster solution.


// Problem: Fib seq with recursion

// Tips for Recursion
// Figure out how to breakdown problem
// Identify the base case

function recursiveFib(n){
    if (n < 2) {
        return n
    }
    return recursiveFib(n-1) + recursiveFib(n-2)
}

console.log(recursiveFib(0))
console.log(recursiveFib(1))
console.log(recursiveFib(6))