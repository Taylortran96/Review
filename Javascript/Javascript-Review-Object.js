//OBJECT
//1. Định nghĩa
    //Thành phần: Thuộc tính (Properties), Phương thức (Methods) 
    // trong Object: sẽ có các key-value

//2. Khởi tạo
    //Cách 1: dùng {}
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        hobbies: ['reading', 'music']
    }; 
    //Cách 2: Object ()
    let person = new Object();
    person.firstName = 'John';
    person.lastName = 'Doe';
    person.age = 25;
    person.hobbies = ['reading', 'music'];

//3. Truy cập vào thuộc tính:
    //Cách 1: dùng `.`
    console.log(person.firstName);  // John

    //Cách 2: dùng `[]`
    console.log(person['age']);     // 25

//4. Phương thức dùng trong Objects: `Object.assign()`, `Object.keys()`, `Object.values()`, `Object.entries()`,...
    //Ví dụ
    let person = {
        firstName: 'John',
        lastName: 'Doe',
        fullName: function() {
        return this.firstName + ' ' + this.lastName;
        }
    };
    
    console.log(person.fullName()); // John Doe   
//5. Lưu ý trong Objects
    //1.Thuộc tính của object có thể là một giá trị bất kỳ, không chỉ là một chuỗi nhưng tên của thuộc tính phải là một chuỗi.
    //2.Tránh sử dụng các từ khóa trong JavaScript (ví dụ như `while`, `for`, `return`, `this`,...) để đặt tên thuộc tính của object.
    //3.Khi truy cập một thuộc tính của object, sử dụng cú pháp dấu chấm (.) hoặc cú pháp ngoặc đơn ([]) để truy cập đến thuộc tính đó.
    //4.Đối với object chứa nhiều phần tử, nên sử dụng một số phương thức built-in của JavaScript để thao tác với object một cách hiệu quả hơn, chẳng hạn như Object.keys(), Object.values(), Object.entries(),...
    //5.Khi tạo một object mới, hãy chắc chắn rằng tên thuộc tính được phân biệt hoàn toàn, và không đụng độ với các thuộc tính của object khác.
    //6.Khi so sánh các object, chúng ta cần chú ý rằng các object có thể giống nhau về cấu trúc nhưng không được coi là giống nhau về toán tử so sánh (`==` hoặc `===`) vì chúng có địa chỉ bộ nhớ khác nhau.

//6. "This" dành cho objects
    // - ám chỉ đối tượng hiện tại đang được sử dụng hoặc đang truy cập tới
    //Cách nhớ: "this" thể hiện đối tượng thể hiện method đó (đối tượng trước dấu ".") 
    
    //2. Ví dụ 1:
    const person = {
        name: "John",
        age: 30,
        sayHello: function () {
          console.log("Hello, my name is " + this.name);
        }
      };
      
    person.sayHello(); // "Hello, my name is John"
      
    //3. Ví dụ 2:
        const iphone7 = {
        //Property: thuộc tính
            name: 'iphone7'
            color: 'Pink'
            weight: 300;
            takePhoto () { //Phương thức: Method
                console.log(this)
            };
            objChild: {
                methodChild(){
                console.log (this)
                }
            }
            }
            iphone7.takePhoto(); //KQ: "this" thể hiện object "iphone 7"
            iphone7.objChild.methodChild (); //KQ: "this" thể hiện "objchild" 

    //3. Ví dụ 3: "this" tham chiếu tới đối tượng "global"
        function myFunction () {
            console.log (this)
            }
            myFunction(); //unidentified
            window.myFunction () //"this" thể hiện window
    
    //4. Ví dụ 4: Hàm tạo - "this" trong hàm tạo là đại diện đối tượng sẽ được tạo
        function Car (name, color){
            this.name = name;
            this.color = color;
            this.run = function (){
                console.log (this);
            }
        }
        const Porsche = new Car ("Porsche", "yellow")
        console.log (Porsche)
            /*KQ: 
            [object Object] {
            color: "yellow",
            name: "Porsche"
            } */
        console.log (Porsche.name) //KQ: Porsche
        console.log (Porsche.run()); //KQ: sẽ trả về object- Porsche


//6. 


//7.


//8.





/* 







//Ví dụ 6: Arrow
const person = {
  name:'hue',
  getName: function(){
      return this.name
   }
}
person.getName() // "this" thể hiện object - person => KQ: 'hue'

const getNamePerson = person.getName()
getNamePerson() // sai -> not function -> this trỏ tới object window 

// Cách giải quyết nó : dùng "Bind"
const getNamePerson = person.getName.bind(person) // KQ = hue
