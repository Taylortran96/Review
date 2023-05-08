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
        // Export: xuất ra các thành phần của module 
        // Import: nạp vào các thư viện hoặc modules khác
            //Ví dụ: Có 2 file JS: "index.js" ; "login.js"
            //File "login.js" muốn lấy 1 hàm/biến/... của "index.js" 
            //- file "index.js" phải export ra
            //- file "login.js" phải import vào 
        //Cú pháp:
        import username from "./index.js"; //username: là 1 biến 
        // lúc này phải biến file "index.js" thành module bằng cách:
        //Thêm type="module" vào html của file "index.js"
        <script src="" type="module"></script>

    //4.3. Cách thức hoạt động
        //Thêm type="module" vào html của Javascript
        <script src="" type="module"></script> //được hiểu là đoạn mã chia nhỏ ra, 
    
        // Có 2 cách
        // Cách 1: Export theo tên (Name)
        export const PI = 3.14159265359;
        export function double(num) {
            return (num * 2);
        }
        export const MY_VARIABLE = 'This is a variable!';

        import { PI, double, MY_VARIABLE } from './Buoi1-module';
        console.log(PI);
        console.log(double(5));
        console.log(MY_VARIABLE);


        // Cách 2: Export mặc định (Default)
        export default function sayHi(name) {
            console.log(`Hello there, ${name}!`);
          }
        
        import sayHiFunction from './Buoi1-module';
