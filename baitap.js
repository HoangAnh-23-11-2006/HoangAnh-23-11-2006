// 3. Đối tượng và Lớp
// Xây dựng lớp Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info() {
        return `${this.name} is ${this.age} years old.`;
    }
    set newAge(newAge) {
        this.age = newAge;
    }
}

// Xây dựng lớp Rectangle
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get area() {
        return this.width * this.height;
    }
    get perimeter() {
        return 2 * (this.width + this.height);
    }
}
// 5. Xử lý mảng (Array)
// Tìm số lớn thứ hai trong mảng (không dùng sort)
function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

// Đếm số lần xuất hiện của mỗi phần tử trong mảng sử dụng reduce
function countOccurrences(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}
