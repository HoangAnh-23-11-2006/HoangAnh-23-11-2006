1.kiểm tra số nguyên dương bằng toán tử chia lấy dư 
function isPositiveInteger(num) {
    return Number.isInteger(num) && num > 0;
}
console.log(isPositiveInteger(10)); // true
console.log(isPositiveInteger(-5)); // false
console.log(isPositiveInteger(3.5)); // false
2. Kiểm tra số nguyên âm
function isNegativeInteger(num) {
    return Number.isInteger(num) && num < 0;
}
console.log(isNegativeInteger(-10)); // true
console.log(isNegativeInteger(5)); // false
3.tính tổng 2 số 
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 7)); // 12
4.Giải phương trình bậc 1 ax+b=0
function solveLinearEquation(a, b) {
    if (a === 0) {
        return b === 0 ? "Vô số nghiệm" : "Vô nghiệm";
    }
    return -b / a;
}
console.log(solveLinearEquation(2, -4)); // 2
console.log(solveLinearEquation(0, 5)); // "Vô nghiệm"
console.log(solveLinearEquation(0, 0)); // "Vô số nghiệm"
5. Kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
6. Kiểm tra số chính phương
function isPerfectSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}
console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(26)); // false
