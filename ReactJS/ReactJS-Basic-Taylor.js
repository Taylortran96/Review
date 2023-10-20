// 1. Cách check cài node.js và react trên máy tính
    //1. Cài node.js
        //Download version node.js trên website
        //Cmd node -v và npm -v
        //Nếu chưa có: 
            // Vào "This PC" => Properties hoặc search PC (Edit the system environment variables)
            // Vào Environment variables => Path => Edit => Insert 4 dòng này vào
                // 1. C:\Program Files\nodejs\node_modules\npm\bin
                // 2. C:\Program Files\nodejs\node_modules\npm
                // 3. C:\ProgramData\chocolatey
                // 4. C:\Program Files\nodejs\
    //2. Trong visual studio code: cài "Create-React-App CLI"
        // Ctrl + Shift + ` => chọn folder để insert vào => Terminal
        // Trong Terminal, Nhập đường dẫn đến folder => cd ...
        // Cài đặt tool: npm install -g create-react-app 
        // Tạo ứng dụng React: npx create-react-app my-react-app
        // Chạy ứng dung: cd my-react-app && npm start
        // Muốn xoá trong "my-react-app" folder, xoá trực tiếp trong visual studio code

//2. REACT là gì
    //1. Định nghĩa
    / 4. REACT là gì
    //1. Định nghĩa
        // là một thư viện JavaScript được sử dụng để xây dựng giao diện người dùng (UI). 
        // cho phép bạn tạo ra các thành phần (component) tái sử dụng và hiệu quả trong việc xây dựng các ứng dụng web phức tạp mà yêu cầu nhiều thao tác DOM.

//3. Cách viết react
    //1. Cách 1: Viết React trực tiếp trong HTML
        //Tạo tệp index.html
        //Nhúng các thư viện React thông qua thẻ Script
        //Insert mã đoạn code này vào html
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    //2. Cách 2: Sử dụng Create-React-App CLI (Phần 1 ở trên)

//4. React Components
    //1. Lưu ý:
        // When creating a React component, the component's name MUST start with an upper case letter.

    //2. Định nghĩa:
        //Khi làm việc trong các project lớn, UI có độ phức tạp cao và cần được chia thành các thành phần nhỏ được gọi là component. 

    //3. Các loại components
        //A. Class component 
            //1. Định nghĩa:
                // là một class được kế thừa từ React.Component
                // phải có một method render() trả về một phần tử React.
                // Có thể nhận props (trong hàm khởi tạo) nếu cần.
            
            //2. Câu hàm
            import React from 'react'
            
            class MyComponent extends React.Component {
                // render() {
                //     return <div>Hello, World!</div>;
                // }

                // render() {
                    //  return <div>Hello, {this.props.name}!</div>
                // }
            }  
            //3. Ví dụ:
            class Car extends React.Component {
                render() {
                  return <h2>Hi, I am a Car!</h2>;
                }
            }
            
            
        //B. Function component
            //1. Định nghĩa:
                // là một hàm JavaScript đơn giản có thể nhận các props làm tham số và trả về một phần tử React
                // Có thể nhận props (trong hàm khởi tạo) nếu cần
            //2. Có 2 cách viết
            import React from 'react';

            // Cách 1: Function bth
                function Welcome() {
                    return (<h1>Chào mừng tới React</h1>)
                }
            // Cách 2: Arrow function (ES6)
                const Welcome = () => {
                    return(<h1>Chào mừng tới React</h1>)
                }
            // Ví dụ cách 1:
            //3. Ví dụ:
            // HTML
                <div id="app">
                    <div class = "card">
                        <div>Name: Alice</div>
                        <div>Age: 20</div>
                    </div>
                    <div class = "card">
                        <div>Name: Bob</div>
                        <div>Age: 20</div>
                    </div>
                    <div class = "card">
                        <div>Name: Cris</div>
                        <div>Age: 20</div>
                    </div>
                </div>
            //React: chia nhỏ giao diện và tái sử dụng lại
                // Thư viện có thể tái sử dụng lại
                function Namecard(props) {
                    return (
                        <div className= "card">
                            <div className='name'>Name: {props.name}</div>
                            <div className='age'>Age: {props.age}</div>
                        </div>
                    )
                }
                // render truyền vào 2 giá trị: thẻ <> và <document.getElementById
                ReactDOM.render(<div>
                    <Namecard name="Alice" age="20"/>
                    <Namecard name="Bob" age="20"/>
                    <Namecard name="Cris" age="20"/>
                </div>, document.getElementById('app'))
    //4. Khi nào dùng Class vs Function components
        //1. Ví dụ
        // Class components
        class Header extends React.Component {
            render() {
              return (
                <header>
                  <h1>{this.props.title}</h1>
                </header>
              );
            }
        }
          
        // Function components
        function Header(props) {
            return (
              <header>
                <h1>{props.title}</h1>
              </header>
            );
        }
        //Khi nào dùng: phụ thuộc vào projects
            //Function components: tạo ra một component khá đơn giản và dễ đọc
            //Class components: tạo ra một component phức tạp hơn với nhiều phương thức lifecycle và state
          
//4. Properties (Props) (Hàm khởi tạo) & State (Quản lý dữ liệu ứng dụng)
    //1. Định nghĩa:
    //là hai kiểu dữ liệu React. 

    //2. Khác biệt:
        //A. State: private và chỉ thay đổi bên trong component 
            // là các giá trị mà component có thể thay đổi trong quá trình sử dụng
            // giá trị của state sẽ ảnh hưởng đến cách mà giao diện người dùng hiển thị.
            // Giá trị của state được thay đổi, component sẽ được "render" lại.
        //B. Props (hàm khởi tạo): mang tính external, được truyền từ component cao hơn theo phân cấp
            // là các thuộc tính được sử dụng để truyền dữ liệu từ component cha đến component con. 
            // là đại diện cho các giá trị bắt buộc hoặc tùy chọn mà component cần sử dụng để xây dựng giao diện người dùng. 
            // là tham số được chuyển qua lại giữa các React component 
            // được truyền qua các component với cú pháp tương tự HTML attributes.
// 7. React Hooks


