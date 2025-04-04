/* // 1. Counting from 1 to 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
} */

/* // 2. Sum of First 10 Numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum); */

/* // 3. Multiplication Table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
} */

/* // 4. Print Numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
} */

/* // 5. Sum of Odd Numbers between 1 and 10
let oddSum = 0;
for (let i = 1; i <= 10; i += 2) {
    oddSum += i;
}
console.log("Sum of Odd Numbers:", oddSum);
 */
/* // 6. Count Down from 20 to 1
for (let i = 20; i >= 1; i--) {
    console.log(i);
} */

/* // 7. Print First 10 Multiples of 3
for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
} */

/* // 8. Print Squares of Numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`${i}² = ${i * i}`);
} */

/* // 9. Sum of First 100 Numbers
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log("Sum of First 100 Numbers:", sum100); */

/* // 10. Print Cubes of Numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`${i}³ = ${i * i * i}`);
} */

/* // 11. Print Numbers in Reverse Order from 50 to 1
for (let i = 50; i >= 1; i--) {
    console.log(i);
}
 */
/* // 12. Count Down Odd Numbers from 19 to 1
for (let i = 19; i >= 1; i -= 2) {
    console.log(i);
} */

/* // 13. Sum of First 5 Odd Numbers
let sumOdd5 = 0;
for (let i = 1, count = 0; count < 5; i += 2, count++) {
    sumOdd5 += i;
}
console.log("Sum of First 5 Odd Numbers:", sumOdd5); */

/* // 14. Print First 10 Positive Integers
for (let i = 1; i <= 10; i++) {
    console.log(i);
} */

/* // 15. Print Powers of 2 (2^1 to 2^10)
for (let i = 1; i <= 10; i++) {
    console.log(`2^${i} = ${2 ** i}`);
} */

/* // 16. Sum of First 10 Even Numbers
let evenSum = 0;
for (let i = 2; i <= 20; i += 2) {
    evenSum += i;
}
console.log("Sum of First 10 Even Numbers:", evenSum); */

/* // 17. Print First 10 Multiples of 4
for (let i = 1; i <= 10; i++) {
    console.log(4 * i);
} */

// 18. Print First 5 Prime Numbers
let primeCount = 0;
let num = 2;
while (primeCount < 5) {
    let isPrime = true;
    for (let j = 2; j * j <= num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        primeCount++;
    }
    num++;
}

/* // 19. Reverse Counting Even Numbers from 30 to 10
for (let i = 30; i >= 10; i -= 2) {
    console.log(i);
} */
