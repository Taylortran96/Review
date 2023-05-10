//FUNCTION
/*1. FUNCTION + Return
    - Đóng gói 1 đoạn code để tái sử dụng nhiều lần
    - Có thuộc tính hoisting
    - dùng function khi nào?
        + LẬp trình hướng cấu trúc (POP)
        + Chia nhỏ chương trình thành các functions. Mỗi functions có 1 chức năng riêng biệt
    - Các functions sử dụng nhiều lần => nên thực hiện 1 chức năng duy nhất
    - Việc chia functions tuỳ theo kinh nghiệm từng người
    - 1 function không dùng quá 100 dòng
    - Khai báo function: /Nhiều input nhưng ra chỉ có 1 output
        + Tham số (Input)
        + Giá trị trả về (output) 
        + 4 kiểu functions: 
            1/ No input; no output
            2/ 2 inputs; no output
            3/ No input; 1 output
            4/ 2 inputs. 1 output */

  //2. Khai báo hàm - Function declaration
    // - Dùng "function"
    // - Tên hàm
    // - Danh sách các tham số truyền vào hàm, được đặt trong ngoặc đơn và cách nhau bởi dấu phẩy.
    // - Các câu lệnh của JavaScript để tạo ra một hàm, được đặt trong ngoặc nhọn {...}.
  //Ví dụ:
    function add(num1, num2) {
      return num1 + num2;
    }

//3. Biểu thức hàm (Hàm trong biến)-Function expression
  var add = function (num1, num2) {
    return num1 + num2;
  };
  
//4. Gọi hàm
  //Ví dụ 1:
  function sayHello () {
    console.log("Hello World"); //hoặc alert ("Hello World")
  }
  sayHello(); // Gọi hàm
  
  // Ví dụ 2: 
  const myName = "Thy";
  const myName2 = "abc";
  function greeting(name) {
      console.log(`Hello, ${name}`);
  }
  greeting(myName); //KQ: Thy
  greeting(myName2); //Kq: abc
  
//5. Return trong function
  // - hàm sẽ ngừng thực thi và trả về giá trị sau lệnh "return".
  // - phải được đặt trong scope 
  //Ví dụ 1:
    let x = myFunction(4, 3);
    function myFunction(a, b) {
        return a * b;
    } //KQ: 12

  //Ví dụ 2: Nếu x  = 1 => gặp return1 => trả về true; nếu không thì return2 trả về false
  function myFunction(x) {
      if (x == 1){
          return true;
      } else {
          return false;
      }         
  } 

// 6 Function rút gọn (dùng ký hiệu "=>")
  // (1) Không có tham số
  () => { ... }

  //( 2) Có 1 tham số
  param => { ... }
  
  // (3) Dạng tổng quát
  (param1, param2) => { ... }

  Biểu thức hàm thông thường                                                  Sử dụng dạng =>
  1/ 
  let x = function() {                                                        let x = function(a, b) {
     console.log("Xin Chào");                                                   return a + b;
  }                                                                           }
                                                                              
  2/ 
  let x = function() {                                                        let x = a => {
    console.log("Xin Chào");                                                    console.log(a);                                     
  }                                                                           }
  
  3/
  let x = function(a, b) {                                                    let x = (a,b) => {
    return a + b;                                                               let x = (a,b) => {
  }                                                                           }

//7. "Bind()" trong function
  //1. Định nghĩa
    //là một phương thức của một hàm (function)
    //được sử dụng để thiết lập giá trị của `this` tại thời điểm cuộc gọi của hàm đó. 
    //Phương thức này trả về một hàm mới với `this` đã được ràng buộc (bound) tới đối tượng được chỉ định
  
  //2. Ví dụ 1:
    const person = {
      firstName: 'John',
      lastName: 'Doe'
    };

    function greet(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
    }

    const sayHello = greet.bind(person, 'Hello');
    sayHello(); // Hello John Doe

    //Comment:
    //`bind()` để ràng buộc `this` của hàm `greet` với đối tượng `person`
    //Khi gọi hàm mới `sayHello()`, "bind()" sẽ dùng giá trị của "this" ở "greet" và thêm giá trị của đối số `greeting` để in ra kết quả trên console

  //3. Ví dụ 2:
    function greet() {
      console.log(this.firstName + ' ' + this.lastName);
    }
    
    const person = {
      firstName: 'John',
      lastName: 'Doe'
    };
    
    const sayHello = greet.bind(person);
    sayHello(); // John Doe
  
  //3. Ví dụ 3:
    function greet(greeting, punctuation) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName + punctuation);
    }
    
    const person = {
      firstName: 'John',
      lastName: 'Doe'
    };
    
    const sayHello = greet.bind(person, 'Hello', '!');
    sayHello(); // Hello John Doe!
  
  //4. Ví dụ 4:
  //2 đối tượng `person1` và `person2` có cùng các thuộc tính `firstName` và `lastName`
  //Muốn tạo ra một phương thức `fullName()` trong một lớp `Person` để in ra tên đầy đủ của đối tượng đó
  //Thay vì viết lại phương thức `fullName()` cho mỗi đối tượng
  //Chúng ta có thể viết một phương thức chung và sử dụng `bind()` để ràng buộc `this` với từng đối tượng khác nhau

    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //dùng "bind" để ràng buộc "this" với "fullname"
        this.fullName = this.fullName.bind(this);
      }
      //khai báo fullname
      fullName() {
        console.log(this.firstName + ' ' + this.lastName);
      }
    }
    
    const person1 = new Person('John', 'Doe');
    const person2 = new Person('Jane', 'Doe');
    
    person1.fullName(); // John Doe
    person2.fullName(); // Jane Doe
  