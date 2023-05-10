// ARROW: 
//1. Định nghĩa:
    /*
    - sử dụng ký tự "=>" 
    - Bỏ qua "return"
    - không định nghĩa giá trị this của riêng nó giống như function.
    - Thường sử dụng kèm với forEach, reduce, ....
    - Không có hoisting
    */
//2. Tính chất Regular Functions vs Arrow Function
    //2.1 Không sử dụng parameter
        //2.1.1. FUNCTION
        let prtLangReg = function () {
        console.log("JavaScript");
        }
        prtLangReg();

        //2.1.2.ARROW
        let prtLangArrow = _ => {console.log("JavaScript");}
        prtLangArrow();

    //2.2 Sử dụng một parameter
        //2.2.1. FUNCTION
        let prtLangReg = function (language) {
        console.log(language);
        }
        prtLangReg("JavaScript");
        
        //1.5.2.2. ARROW
        let prtLangArrow = (language) => { console.log(language); }
        prtLangArrow("JavaScript");

    //2.3 Sử dụng nhiều parameter
        //2.3.1. FUNCTION
        let prtLangReg = function (id, language) {
        console.log(id + ".) " + language);
        }
        prtLangReg(1, "JavaScript");
        
        //2.3.2. ARROW
        let prtLangArrow = (id, language) => { console.log(id + ".) " + language); }
        prtLangArrow(1, "JavaScript");

// 2. Arrow Function
    // là cú pháp viết ngắn gọn của function trong JavaScript
    // Không có hoisting
    // Không có binding this vs super
    // Không có object constructor
    
    //1. Arrow function có một tham số "name"
    const hello = name => {
        console.log("Hello " + name + "!");
        };
      
    //2. Arrow function không có tham số:
    const sayHello = () => {
        console.log("Hello world!");
      };      

    //3. Arrow function có nhiều hơn một tham số:
    const sum = (a, b) => {
        return a + b;
      };
      
    //4.Arrow function với phương thức `map()`;`filter()`; `reduce()` trong mảng:
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map(number => number * 2);
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

//3. Khác với Function
// 1. Khác với function thông thường, 'this' trong arrow function được quyết định bởi ngữ cảnh thực thi của nó (lexical binding) chứ không phải bởi ngữ cảnh gọi của nó như function thông thường.\
// 2. Arrow function không có từ khóa `arguments`, nếu muốn truy cập các tham số truyền vào, ta cần sử dụng rest parameters.
// 3. Arrow function không có thuộc tính `prototype`, nên không thể tạo mới một object từ arrow function bằng từ khóa `new`.
// 4. Arrow function không thể sử dụng làm phương thức (`method`) của object, vì 'this' trong arrow function sẽ không trỏ tới object đó.
// 5. Arrow function không thể sử dụng recursion (đệ quy) vô hạn bởi vì nó không thể tham chiếu đến chính nó.
    //Ví dụ 1:
    // function thông thường
    function square(x) {
        return x * x;
    }
    console.log(square(2)); // 4

    // arrow function tương đương (return = "=>" )
    const square = (x) => x * x;
    console.log(square(2)); // 4
  
    //Ví dụ 2:
    // function thông thường
    function sum() {
        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        }
        return total;
    }
    console.log(sum(1, 2, 3, 4)); // 10
    
    // arrow function tương đương (dùng spread operator)
    const sum = (...args) => {
        return args.reduce((accumulator, currentValue) => accumulator + currentValue);
    };
    console.log(sum(1, 2, 3, 4)); // 10
  
    //Ví dụ 3: Đệ quy
    // function thông thường
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function() {
        console.log("Hello, my name is " + this.name);
    };
    const person = new Person("John");
    person.sayHello(); // Hello, my name is John
    
    // arrow function không thể tạo object
    const Person = (name) => {
        this.name = name;
    };
    Person.prototype.sayHello = () => {
        console.log("Hello, my name is " + this.name);
    };
    const person = new Person("John"); // lỗi TypeError
    
    //Ví dụ 4:
    // Đệ quy với function thông thường
    function factorial(n) {
        if (n === 0) {
        return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(5)); // 120
    
    // Không sử dụng được đệ quy với arrow function
    const factorial = (n) => {
        if (n === 0) {
        return 1;
        }
        return n * factorial(n - 1); // Lỗi: factorial is not defined
    }
  