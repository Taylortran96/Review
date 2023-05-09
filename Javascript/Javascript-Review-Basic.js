/*1. Các giá trị trong Javascript (8)
Kiểu dữ liệu nguyên thủy (Primitive datatype) 
1. Boolean: True and False
2. Null
null = null => True
3. Undefined
4. Number
5. BigInt
6. String
7. Symbol
Kiểu dữ liệu dạng tham chiếu (Non- primitive datatype)
8. Object
9. NaN 
//NaN == NaN => False */

/*2. THUỘC TÍNH: HOISTING
- di chuyển các khai báo biến lên đầu của đoạn mã, giúp cho chương trình không bị lỗi khi sử dụng biến trước khi khai báo
- Các loại có thuộc tính hoisting và không hoisting:
  1. Biến let và const: 
    - Cả hai không có tính chất hoisting. 
    - Khi sử dụng let hoặc const, phải được khai báo trước khi được sử dụng.
  2. Biến var: 
  - có tính chất hoisting. 
  - Khi khai báo biến var, sẽ tạo một biến mới và kéo lên đầu phạm vi. 
  - Giá trị của biến var này = undefined cho đến khi được gán giá trị.
  3. Khai báo hàm bằng Function declaration: 
  - Các hàm này cũng có tính chất hoisting. 
  - Các hàm có thể được sử dụng trước khi được khai báo.
  4. Khai báo hàm bằng Function expression: 
  - Các hàm này sẽ không có tính chất hoisting.
  5. Khai báo hàm bằng Class Declaration: 
  - Có tính chất hoisting, bởi vì nó được xem như là một loại hàm đặc biệt.
  6. Function generator: 
  - Có tính chất hoisting và có thể được sử dụng trước khi được khai báo.
*/

    //Ví dụ 1:
    console.log(fullName)
    let fullName ="abc"; //Kq: error => bắt buộc phải để khai báo "let" trước

    //Ví dụ 2:
    function show_me(){
    console.log('Money');
    }
    show_me = function(){
    console.log('Diamond');
    }
    function show_me(){
    console.log('Gem');
    } //Kq: Gem

  //2.1 Hoisting trong Javascript
      let x = 20, y = 10;
      
      let result = add(x,y);
      console.log(result);
      
      function add(a, b){
          return a + b;
      }
      /* Comment:
      - Sử dụng hàm add; sau đó mới khai báo mà không bị báo lỗi */
      //Tương đương với: 
      function add(a, b){
      return a + b;
      }
      let x = 20, y = 10;
      let result = add(x,y);
      console.log(result);

      //Tuy nhiên: nếu sử dụng function "add" trước khi khai báo => sẽ báo lỗi
      let x = 20,
          y = 10;
  
      let result = add(x,y);
      console.log(result);
      
      var add = function(x, y) {
          return x + y;
      }

  //2.2 Hoisting trong Arrow
      var function_name = () => bieuthuc;



/*3. Các dấu trong Javascript
  3.1.    ==	    so sánh bằng (và giá trị, không so sánh về kiểu dữ liệu)
  3.2     ===	    so sánh giống nhau (true nếu cùng giá trị và kiểu dữ liệu)
  3.3     !=	    so sánh khác giá trị (dấu khác trong javascript chỉ so sánh và giá trị không xét đến kiểu)
  3.4     !==	    Khác giá trị và khác kiểu
  3.5     &&	    phép và (toán tử && trong javascript) trả về true nếu 2 số hạng là true: a && b
  3.5     ||	    phép hoặc (toán tử hoặc trong javascript) trả về true nếu 1 trong 2 số hạng là true : a || b
  3.6     !	    phủ định (vd: !a trả về giá trị ngược với biểu thức a)
      Lưu ý:
      - a && b >> nếu a hoặc b hoặc a và b đều True => Cả biểu thức True
      - a || b >> nếu a hoặc b là False >> cả biểu thức đều False
  3.7     ??=     phép gán khi null >> x ??= y >> Nếu x bằng null thì giá trị y gán cho x, nếu x đã khác null thì không thay đổi gì 
  */
      //Ví dụ 1 toán tử gán ??=
      let x = 100;
      x ??= 5;
      console.log (x) //* x = 5
      
      //Ví dụ 2 toán tử gán ??=
      let your_name = "XUANTHULAB";
      let your_addr = null;
      const name_default = "KHÔNG TÊN";
      const add_default = "KHÔNG ĐỊA CHỈ";

      your_name ??= name_default;
      console.log(your_name); // "XUANTHULAB"

      your_addr ??= add_default;
      console.log(your_addr); // "KHÔNG ĐỊA CHỈ" (your_addr = null => gán giá trị của "add_default" cho "your_addr")

  // 3.8 Toán tử bậc 3
  // Với điều kiện: một biểu thức để thực thi nếu điều kiện là đúng và một biểu thức để thực thi nếu điều kiện sai
      function checkCharge(charge) {
          return (charge > 0) ? 'Ready for use' : 'Needs to charge' 
      }
      console.log(checkCharge(20)) // => 'Ready for use'
      console.log(checkCharge(0)) // => 'Needs to charge'

  // Toán tử bậc ba có thể được sử dụng để gán biến
      var x = 6
      var x = (x !== null || x !== undefined) ? x : 3
      console.log(x) // => 6

  // Toán tử bậc ba trong PHP (thay thế cho if-else)
      (Conditional statement) ? (Statement_1) : (Statement_2);
      //Conditional statement: Đây là một biểu  thức PHP hợp lệ sẽ được đánh giá để trả về giá trị Boolean
      //Statement_1: Đây là câu lệnh sẽ được thực hiện khi kết quả của điều kiện trả về là true hoặc ở trạng thái true
      //Statement_2: Đây là câu lệnh sẽ được thực hiện khi kết quả điều kiện trả về true hoặc ở trạng false
      
      //Ví dụ:
      <?php
      $result = 62;
      echo ($result >= 40) ? "Passed" : " Failed";
      ?> //KQ = Passed

  //3.9 Tốc ký bậc ba (?:): dc sử dụng bằng cách loại bỏ phần trung tâm của toán tử bậc ba
      expression1 ?: expression2

      //Ví dụ:
      $check = isset($value) && !empty($value) ?: 'default';

  /*3.10 Thứ tự ưu tiên: 
      1. Phủ định (!) 
      2. And (&&)
      3. Or (||) */

  /* 3.11 Truthy & Falsy
  - là những giá trị mà JavaScript khi ép về kiểu Boolean, hoặc trong một ngữ cảnh Boolean, nó sẽ cho ra giá trị true hoặc false.
  - Các giá trị được xem là truthy: 
      + chuỗi khác rỗng, số khác 0 và tất cả các object (Bao gồm cả mảng rỗng [ ] và chuỗi rỗng { }).
  - Các giá trị được xem là falsy: false, 0, -0, 0n, "", null, undefined, and NaN
  */

//4. Prefix (Tiền tố) và Postfix (Hậu tố)
    let a = 6; a++;
    console.log(a) // kq = 7
    let b = 6; ++b;
    console.log(b) // kq = 7
    // Kết quả giống nhau: do kq đưa ra sau khi thực thi a-- và --b;
    //Cách nhớ:
    // i++ >> trả về i rồi mới +1 ở câu lệnh sau. 
    // ++i >> tăng 1 ngay lập tức

  //4.1. Tiền tố
      //Việc 1: +1 cho c >> c = c + 1 => c = 7
      //Việc 2: Trả về c sau khi được + 1
      let c = 6; 
      let output1 = ++c;
      console.log ("output1:", output1)

  //4.2. Hậu tố
    // Ví dụ 1: 
      var d = 6; 
      var output2 = d++;
      console.log("d:",d)
      console.log("output2:",output2)
      //Giải thích:
      //Việc 1: d >> trả kq d = 6;
      //Việc 2: cộng 1 của d >> d = d+1 >> d=7
      //Việc 3: trả về d = 7

    // Ví dụ 2: 
      var number1= 6;
      var number2 = 7;
      output3 = number1++ + --number2;
      //number1++ >> KQ = 7
      // --number >> KQ= 6 
      console.log("number1:",number1)
      console.log("number2:",number2)
      console.log("output3:", output3)

//6. Toán tử: chuỗi
    const surName = "Tran";
    const firstName = "Thy";
    output4 = surName + " " + firstName; hoặc
    output4 = (` My name is ${surName} ${firstName}`)

//7. Điều kiện: If-else if- else
  //If - Else
  if (condition) {
      //  block of code to be executed if the condition is true
    } else {
      //  block of code to be executed if the condition is false
    }
  //If-else if
  if (condition1) {
      //  block of code to be executed if condition1 is true
    } else if (condition2) {
      //  block of code to be executed if the condition1 is false and condition2 is true
    } else {
      //  block of code to be executed if the condition1 is false and condition2 is false
    }

//8. Switch: Trường hợp 1, 2, 3,...
  switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }
  //Ví dụ
  //Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
  const numberInput = prompt("Nhập số: ");
  switch(numberInput%2){
      case 0:
          alert (`${numberInput} là số chẵn`)
          break;
      case 1:
          alert (`${numberInput} là số lẻ`);
          break;
      default:
      alert (`Không phải là số hoặc không phải số nguyên`);
  }
  //Viết cấu trúc switch case số ngày trong tuần //Function: Date().getDay()
  switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }

//9. Loop (Vòng lăp)
  /* 9.1. for 
    - loops through a block of code a number of times 
    - là vòng lặp được sử dụng lặp lại một nhiệm vụ nhất định với số lần lặp cho trước)*/

    // Biểu thức 
      for (expression 1; expression 2; expression 3) {
      // code block to be executed
      }
    /*
    Expression 1 >> Khởi tạo biến lặp: Là khởi tạo một biến để đếm số lần lặp
    Expression 2 >> Biểu thức điều kiện :Là biểu thức kiểm tra số lần lặp (giới hạn)
    Expression 3 >> Cập nhật biến lặp :Là biểu thức kiểm tra số lần lặp (giới hạn)   */

    //Ví dụ:
    // Hãy tính tổng các số từ 1 đến 50
    let sum = 0;
    for (let i1 = 1; i1 <= 50; i1++ ){
        sum = sum + i1; //biến giá trị "sum" theo vòng lặp
    }
    console.log (sum)

  /*9.2. for/in  (object-đối tượng)
    - loops through the properties of an object
    - dùng để lặp qua các thuộc tính của một đối tượng. 
    - Khối lệnh bên trong vòng lặp sẽ được thực thi một lần cho mỗi thuộc tính.
    - được sử dụng để debug bởi vì nó dễ dàng kiểm tra các thuộc tính của một đối tượng (object).*/

    // Biểu thức 
      for (key in object) {
        // code block to be executed
      }
    /*
    Key >> biến Đại Diện: Là khai báo một biến đại diện cho tên thuộc tính của đối tượng
    Object >> tên ĐốiTượnng: Là đối tượng cần được lặp qua */

    //Ví dụ 1:
      // Tạo một đối tượng sinhVien
      const sinhVien = {
        MSSV: "B1704863",
        hoVaTen: "Ngô Minh Trung",
        gioiTinh: "Nam",
      };
      // Lặp qua đối tượng
      for (const x in sinhVien) {
        // In ra giá trị của các thuộc tính
        // có trong đối tượng
        console.log(sinhVien[x]);
      }
      /* Kết quả như sau:
      B1704863 
      Ngô Minh Trung
      Nam*/

    // Ví dụ 2:
      // Lặp qua đối tượng
      for (const x in sinhVien) {
        // In ra cặp key: value của đối tượng
        console.log(`${x}: ${sinhVien[x]}`);
      }
      /*Kết quả như sau:
      MSSV: B1704863
      hoVaTen: Ngô Minh Trung
      gioiTinh: Nam/


  /*9.3. for/of  (Mảng và chuỗi;  Arrays, Strings, Maps, NodeLists...)
    - loops through the values of an iterable object
    - lặp qua các đối tượng có thể lặp lại như mảng và chuỗi */

    // Biểu thức 
      for (variable of iterable) {
        // code block to be executed
      }
      //A/ Lặp qua Array:
      const cars = ["BMW", "Volvo", "Mini"];
      let text = "";
      for (let x of cars) {
      text += x;
      }
      /*Kết quả:
      BMW
      Volvo
      Mini*/

    //B/ Lặp qua String
      let language = "Study";
      let text = "";
      for (let x of language) {
      text += x;
      }
      /*Kết quả:
      S
      T
      U
      D
      Y
      */

/*9.4. while 
  - loops through a block of code while a specified condition is true
  - vòng lặp while sẽ kiểm tra điều kiện trước.
      + Nếu đúng thì thực thi khối lệnh.
      + Nếu sai thì thoát khỏi vòng lặp */

  // Biểu thức 
    while (condition) {
        // code block to be executed
      }
    //Condition >> bieuThucDieuKien: Là biểu thức kiểm tra điều kiện
  
  //Ví dụ: In ra 10 số chia hết cho 8 đầu tiên mà lớn hơn 10.
    let number = 10;
    let count = 0;
    while (count < 10) {
        if (number % 8 == 0) {
            // In ra số thỏa mãn
            console.log(number);
            ++count;
      }
    // Cập nhật số được lặp qua
    ++number;
    }
    console.log(number); 
    //Kết quả: 89
    //Giải thích:
    /*Bởi vì số phải lớn hơn 10 nên khi khởi tạo biến lặp ta sẽ cho nó bằng 10 luôn.
    Sau đó, trong chương trình sẽ kiểm tra xem có chia hết cho 8 không.
    Nếu đúng thì in ra màn hình console, đồng thời cập nhật số lượng số tìm thấy.
    Tiếp tục tăng biến đếm number lên 1 và tiếp tục kiểm tra... */
 
/*9.5. do/while 
  - also loops through a block of code while a specified condition is true*/

  // Biểu thức 
    do {
        // Các câu lệnh cần thực thi
    } while (bieuThucDieuKien);
    //bieuThucDieuKien:  Là biểu thức kiểm soát vòng lặp
    //Ví dụ:
    let i = 0;
    do {
        console.log("i = " + i);
        ++i;
    } while (i <= 5);
    /*Kết quả:
    i = 0;
    i = 1;
    ...
    i = 5; */

//10. CallBack
  //8.1 Định nghĩa
  //giúp đảm bảo rằng một code nhất định sẽ không thực thi trừ khi một code khác hoàn thành thực thi. 
  //synchronous (xử lý đồng bộ) và asynchronous (xử lý không đồng bộ).
  //thường hay dùng chung Indexof, findindex 

  //8.2 Ví dụ:
    //hàm `doHomework` có tham số đầu vào là `subject` và `callback`. 
    // Tham số `callback` là một hàm được gọi khi chức năng `doHomework` đã hoàn thành công việc. 
    // `doHomework` chỉ là gọi hàm callback `submitHomework` khi đã hoàn thành việc làm bài tập.
    
    function doHomework(subject, callback) {
      console.log(`Bắt đầu làm bài tập ${subject}...`);
      callback();
    }
    function submitHomework() {
        console.log("Đã nộp bài tập.");
    }
    
    doHomework("Toán", submitHomework);
    //KQ:
    //"Bắt đầu làm bài tập Toán..." 
    //"Đã nộp bài tập."

//11. Let vs const
    // Let: khai báo các biến có thể gán lại được
    // Const: khai báo các biến không thể gán lại được
    // Phạm vi hoạt động: trong block {} đó, không có tính chất hoisting

//12. Template literal: cú pháp mới, thao tác nối chuỗi trên nhiều dòng
let year = new Date().getFullYear() //Lấy ra năm hiện tại
let hello = `Hello ${year}`;

//13. Module: Exports & Imports (NoteJS)
  //1. Định nghĩa
    // Modules là tập hợp các file Javascript, tách riêng riêng 1 file JS để code riêng 1 chức năng
    // Module có thể chứa các biến, hàm, lớp hoặc các đối tượng khác. 
    // Tái sử dụng mã nguồn
    // Phải dc chạy HTTP
  //2. Import/Export
    //Định nghĩa
      // Export: xuất ra các thành phần của module 
      // Import: nạp vào các thư viện hoặc modules khác
    
    //Ví dụ: Có 2 file JS: "math.js" ; "index.js"
      // math.js
        export function add(a, b) {
            return a + b;
        }
        function subtract(a, b) {
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

      //Cách 2: Export mặc định (Default)
        //Export
        export default function sayHi(name) {
            console.log(`Hello there, ${name}!`);
        }
        //Import  
        import sayHiFunction from './Buoi1-module';

  //3. Cách thức hoạt động
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
            
          module.exports = {add, subtract, PI: 3.14159};
        
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
            
// 14. Spread & Rest Operator
  // Spread operator: toán tử, giúp cta "trải thẳng" các phần tử trong array, object
  // Thêm bất kỳ thuộc tính và Không cần phải copy lại thuộc tính trong 1 biến cũ,
  // Cú pháp "....[biến]" 
  
  //1. Ví dụ 1:
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

  //2. Ví dụ 2:
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

//15. Destructuring
  //1. Định nghĩa:
      //cho phép chúng ta trích xuất các giá trị từ các đối tượng (object) hoặc mảng (array) và gán chúng vào các biến riêng lẻ.

  //2. Ví dụ 1: Object
    const{name,price} = car;
    if (name === "honda" && price >= 2000){
        alert ("Bạn được khuyến mãi")
    }

  //3. Ví dụ 2: Object
    // Khai báo đối tượng
    const myObject = { name: 'John', age: 30 };

    // Sử dụng destructuring với giá trị mặc định cho thuộc tính job nếu không tồn tại
    const { name, age, job = 'developer' } = myObject;

    // Log kết quả
    console.log(name); // Kết quả: 'John'
    console.log(age); // Kết quả: 30
    console.log(job); // Kết quả: 'developer'

  //4. Ví dụ 3: Object
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

  //5.Ví dụ 4: Array (theo vị trí)
    let cStudents = [10,20,40,60];
    let [sTeam1, sTeam2, sTeam3,sTeam4] = cStudents;
    if (sTeam1 < 0){
        sTeam1 = 0;
        sTeam2 += 10;
    }
  
  //6. Ví dụ 5: Array (theo vị trí, sử dụng Spread operator)
    const myArray = ['apple', 'banana', 'orange', 'pear', 'kiwi'];
    const [fruit1, fruit2, ...rest] = myArray;
    console.log(fruit1); // Kết quả: 'apple'
    console.log(fruit2); // Kết quả: 'banana'
    console.log(rest); // Kết quả: ['orange', 'pear', 'kiwi']

  //7. Ví dụ 6: Array (Trích xuất các giá trị trong mảng)
    const numbers = [1, 2, 3];
    const [a, b, c] = numbers;
    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3

  //8. Ví dụ 7: Array (hoán đổi phần tử)
    const x = true;
    const y = false;
    [x,y] = [y, x]
    console.log (x) //KQ: false
    console.log (y) //KQ: true

  //9. Ví dụ 8: Skipping items
    const [ ,b] = [123,'seconds',true];
    console.log(b) //KQ: seconds 

//16. "This" trong Function và Object
    //Cách nhớ: "this" thể hiện đối tượng thể hiện method đó (đối tượng trước dấu ".") 
    
    //1. Function
    //Nếu function được gọi trực tiếp từ global scope, giá trị của "this" sẽ là global object (ví dụ như window trong trình duyệt web)
    //Ví dụ:
      console.log(this === window); // true
      
      function myFunction() {
        console.log(this === window); // true
      }

      myFunction();

    //2. Object
    //Ví dụ:
      const obj = {
        myMethod: function() {
          console.log(this === obj); // true
        }
      };
      
      obj.myMethod();
    

//--------------------------------------------------------------------
//1. PHÂN BIỆT giữa ARRAY >< OBJECT // REGULAR FUNCTION >< ARROW
  //1.1. Array sử dụng number index. Có thể thao tác với mảng qua index(index bắt đầu từ 0)
  const fruits = ["Banana"; "Apple"; "Orange"]
  fruit [6] = "Lemon";
  
  const cars = ["Saab", "Volvo", "BMW"];
  let car = cars[0];
  
    //1.2.Object sử dụng name index. Có thể thao tác với object qua field name của object(ví dụ: fistName, lastName)
  const person ={
    firstName: "John";
    lastName: "Doe";
    id: "0563"
  };
  console.log (person.firstName)
    /*1.3. Function: 
  - Khai báo 1 hàm thông thường
  - Khai báo hàm một lần và sau đó gọi nó ở nhiều nơi khác nhau.
  - Sử dụng từ khoá "Function" 
  - Sử dụng kèm từ khoá "return"*/
  
  //Ví dụ 1:
  function sum(a, b) {
    return a + b;
  }
  sum(5, 6);           // => 11
  ([3, 7]).reduce(sum) // => 10


