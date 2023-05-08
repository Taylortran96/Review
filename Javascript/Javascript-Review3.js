// 1. Let vs const
    // Let: khai báo các biến có thể gán lại được
    // Const: khai báo các biến không thể gán lại được
    // Phạm vi hoạt động: trong block {} đó, không có tính chất hoisting

// 2. Arrow Function
    // Không có hoisting
    // Không có binding this vs super
    // Không có object constructor
    //TH1:
        // a,b: đầu vào => có thể là tham số hoặc 1 function
        function sum (a,b){
            let x = a;
            let y = b;
            total = x + y;
            return total;    
        }
        const add = (x,y) => {
            return x + y;
        }
    // TH2:
        let n_2 = x => {
            return x*2;
        }
    // TH3:
        const create() => {}

// 3. Template literal: cú pháp mới, thao tác nối chuỗi trên nhiều dòng
    let year = new Date().getFullYear() //Lấy ra năm hiện tại
    let hello = `Hello ${year}`;

//4. Module: Exports & Imports (NoteJS)
    //4.1. Định nghĩa
        // Modules là tập hợp các file Javascript, tách riêng riêng 1 file JS để code riêng 1 chức năng
        // Module có thể chứa các biến, hàm, lớp hoặc các đối tượng khác. 
        // Tái sử dụng mã nguồn
        // Phải dc chạy HTTP
    //4.2. Import/Export
        //Định nghĩa
            // Export: xuất ra các thành phần của module 
            // Import: nạp vào các thư viện hoặc modules khác
        
        //Ví dụ: Có 2 file JS: "math.js" ; "index.js"
            // math.js
            export function add(a, b) {
                return a + b;
            }
            export function subtract(a, b) {
                return a - b;
            }
            export const PI = 3.14159;
            // Comment: dùng `export` để xuất các hàm và biến để chúng có thể được truy cập từ các module khác.
            
            // index.js
            import { add, subtract, PI } from './math.js';

            console.log(add(1, 2)); // Output: 3
            console.log(subtract(3, 1)); // Output: 2
            console.log(PI); // Output: 3.14159
            //Comment: `import` để nhập các hàm và biến từ module `math.js`
        
        //Các cách exports và imports (2 cách)
        // Cách 1: Export/ Import theo tên (Name)
            //Export
            export const PI = 3.14159265359;
            export function double(num) {
                return (num * 2);
            }
            export const MY_VARIABLE = 'This is a variable!';
            
            //Import
            import { PI, double, MY_VARIABLE } from './Buoi1-module';
            console.log(PI);
            console.log(double(5));
            console.log(MY_VARIABLE);

        // Cách 2: Export mặc định (Default)
            //Export
            export default function sayHi(name) {
                console.log(`Hello there, ${name}!`);
            }
            //Import  
            import sayHiFunction from './Buoi1-module';


    //4.3. Cách thức hoạt động
        //Thêm type="module" vào html của Javascript
        <script src="" type="module"></script> //được hiểu là đoạn mã chia nhỏ ra, 
        
        //Cách thêm exports và imports
        //Cách 1: `CommonJS`: Cách này phổ biến trong Node.js, sử dụng từ khóa `require()` để `import`, và `module.exports` để `export`.
            //Ví dụ:
            // math.js
                function add(a, b) {
                    return a + b;
                }
                
                function subtract(a, b) {
                    return a - b;
                }
                
                module.exports = {
                    add,
                    subtract,
                    PI: 3.14159
                };
            // index.js
                const math = require('./math.js');  
                console.log(math.add(1, 2)); // Output: 3
                console.log(math.subtract(3, 1)); // Output: 2
                console.log(math.PI); // Output: 3.14159
        
        //Cách 2: `ES6 Module`: Cách sử dụng `export` và `import` được xây dựng sẵn trong ngôn ngữ JavaScript
            //Ví dụ:
            // math.js
                export function add(a, b) {
                    return a + b;
                }
                
                export function subtract(a, b) {
                    return a - b;
                }
                
                export const PI = 3.14159;
            
            // index.js
                import { add, subtract, PI } from './math.js';
                console.log(add(1, 2)); // Output: 3
                console.log(subtract(3, 1)); // Output: 2
                console.log(PI); // Output: 3.14159
        
        //Cách 3: `AMD (Asynchronous Module Definition)`: Cách này thường được sử dụng trong các ứng dụng web tương tác với các module động.
            //Ví dụ:
            // math.js
                define(function() {
                    function add(a, b) {
                    return a + b;}
                
                    function subtract(a, b) {
                    return a - b;}
                
                    const PI = 3.14159;
                
                    return {add,subtract,PI};
                });
            // index.js
                require(['./math'], function(math) {
                    console.log(math.add(1, 2)); // Output: 3
                    console.log(math.subtract(3, 1)); // Output: 2
                    console.log(math.PI); // Output: 3.14159
                });
                
// 5. Spread & Rest Operator
    // Spread operator: toán tử, giúp cta "trải thẳng" các phần tử trong array, object
    // Thêm bất kỳ thuộc tính và Không cần phải copy lại thuộc tính trong 1 biến cũ,
    // Cú pháp "....[biến]"
    // Ví dụ 1:
        // Lấy các tham số trong một hàm
            const sum = (a, b, ...rest) => {
                let sum = a + b;
                for (let i = 0; i < rest.length; i++) {
                sum += rest[i];
                }
                return sum;
            }
            console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
        // Lấy các phần tử còn lại của một mảng
            const numbers = [1, 2, 3, 4, 5];
            const [first, second, ...rest] = numbers;
            console.log(first); // Output: 1
            console.log(second); // Output: 2
            console.log(rest); // Output: [3, 4, 5]
  
    // Ví dụ 2:
    let car ={
        name: "Honda";
        price: 2000;
        title: "Deon";
        note: "sales"; 
    }
    let red_car = {
        // Copy lại thuộc tính car ở trên
        ...car, 
        // Thêm thuộc tính color:
        color: "red";
    }
    let lightRedCar ={
        ...red_car,
        light: true;
    } 

//6. Destructuring
    //Định nghĩa:
        //cho phép chúng ta trích xuất các giá trị từ các đối tượng (object) hoặc mảng (array) và gán chúng vào các biến riêng lẻ.
    // Ví dụ 1: Object
    const{name,price} = car;
    if (name === "honda" && price >= 2000){
        alert ("Bạn được khuyến mãi")
    }

    // Ví dụ 2: Object
        // Khai báo đối tượng
        const myObject = { name: 'John', age: 30 };

        // Sử dụng destructuring với giá trị mặc định cho thuộc tính job nếu không tồn tại
        const { name, age, job = 'developer' } = myObject;

        // Log kết quả
        console.log(name); // Kết quả: 'John'
        console.log(age); // Kết quả: 30
        console.log(job); // Kết quả: 'developer'

    //Ví dụ 3: Object
        const person = {
            name: 'John Doe',
            age: 30,
            gender: 'male',
            address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zip: 10001
            }
        };
        // Trích xuất các giá trị trong đối tượng
        const { name, age, gender } = person;
        console.log(name); // Output: 'John Doe'
        console.log(age); // Output: 30
        console.log(gender); // Output: 'male'
        
        // Gán giá trị của đối tượng vào các biến khác
        const { street, city, state } = person.address;
        console.log(street); // Output: '123 Main St'
        console.log(city); // Output: 'New York'
        console.log(state); // Output: 'NY'
    
    // Ví dụ 4: Array (theo vị trí)
        let cStudents = [10,20,40,60];
        let [sTeam1, sTeam2, sTeam3,sTeam4] = cStudents;
        if (sTeam1 < 0){
            sTeam1 = 0;
            sTeam2 += 10;
        }
    // Ví dụ 5: Array (theo vị trí)
        // Khai báo mảng
        const myArray = ['apple', 'banana', 'orange', 'pear', 'kiwi'];

        // Sử dụng destructuring kết hợp toán tử rest để lấy 2 phần tử đầu và các phần tử còn lại của mảng
        const [fruit1, fruit2, ...rest] = myArray;

        // Log kết quả
        console.log(fruit1); // Kết quả: 'apple'
        console.log(fruit2); // Kết quả: 'banana'
        console.log(rest); // Kết quả: ['orange', 'pear', 'kiwi']

    //Ví dụ 6: Array
        const numbers = [1, 2, 3];

        // Trích xuất các giá trị trong mảng
        const [a, b, c] = numbers;
        console.log(a); // Output: 1
        console.log(b); // Output: 2
        console.log(c); // Output: 3
