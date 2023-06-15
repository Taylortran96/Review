// 1. Desctucturing:
    //1. Array
        //Ví dụ 1:
            const vehicles = ['mustang', 'f-150', 'expedition'];

            //Không có destructuring:
            const car = vehicles[0];
            const truck = vehicles[1];
            const suv = vehicles[2];

            // Có destructuring:
            const [car, truck, suv] = vehicles;

        // Ví dụ 2:
            function calculate(a, b) {
                const add = a + b;
                const subtract = a - b;
                const multiply = a * b;
                const divide = a / b;
            
                return [add, subtract, multiply, divide];
            }
            
            const [add, subtract, multiply, divide] = calculate(4, 7);
            document.write("<p>Sum: " + add + "</p>");
            document.write("<p>Difference " + subtract + "</p>");
            document.write("<p>Product: " + multiply + "</p>");
            document.write("<p>Quotient " + divide + "</p>");
    //2. Object
        //Ví dụ 1:
            const vehicleOne = {
                brand: 'Ford',
                model: 'Mustang',
                type: 'car',
                year: 2021, 
                color: 'red'
            }
            
            myVehicle(vehicleOne);
            
            //Không có destructuring:
            function myVehicle(vehicle) {
                const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
            }
            //Có destructuring:
            function myVehicle({type, color, brand, model}) {
                const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
            }
        //Ví dụ 2:
            const vehicleOne = {
                brand: 'Ford',
                model: 'Mustang',
                type: 'car',
                year: 2021, 
                color: 'red',
                registration: {
                city: 'Houston',
                state: 'Texas',
                country: 'USA'
                }
            }
            
            myVehicle(vehicleOne)
            
            function myVehicle({ model, registration: { state } }) {
                const message = 'My ' + model + ' is registered in ' + state + '.';
            }

// 2. Cách check cài node.js và react trên máy tính
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

//3. REACT là gì
    //1. Định nghĩa
        // là một thư viện JavaScript được sử dụng để xây dựng giao diện người dùng (UI). 
        // cho phép bạn tạo ra các thành phần (component) tái sử dụng và hiệu quả trong việc xây dựng các ứng dụng web phức tạp mà yêu cầu nhiều thao tác DOM.

    //2. Cách viết react
        //1. Cách 1: Viết React trực tiếp trong HTML
            //Tạo tệp index.html
            //Nhúng các thư viện React thông qua thẻ Script
            //Insert mã đoạn code này vào html
            <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

        //2. Cách 2: Sử dụng Create-React-App CLI (Phần 1 ở trên)
//4. Props trong React



//5. React Components
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
          


//6. Children trong REACJS
    //1. Child component
        //Component <Dad /> chứa nhiều component <Son /> như này:
        <Dad>
            <Son />
            <Son />
            <Son />
        </Dad>
        // Comment: <Son /> = props.children của component <Dad/>

        //Cách viết vs props
        class Dad extends Component {
            render() {
                return (
                    <div>{this.props.children}</div>
                );
            }
        }
    
    //2. Everything can be a child
        // Children có thể là 1 component hay nhiều component, 1 thẻ h1 hoặc nhiều thẻ h1, 1 chữ hoặc nhiều chữ...
        class Dad extends Component {
            render() {
                return (
                    <div>
                        {this.props.children}
                        <h1>Xin chào viblo</h1>
                        <Son />
                    </div>
                );
            }
        }
        //Comment: Child của <Dad/> là <h1> và <Son/>
    
    // Tham khảo thêm tại: https://viblo.asia/p/tim-hieu-ve-children-trong-react-oOVlYqWol8W

//8. Component tree: Data Down, Event UP
    //1. Định nghĩa:
    //giống với HTML DOM tree
    //được sử dụng để mô hình hoá giao diện ứng dụng

    //2. Các khái niệm liên qua tới cây gồm:
        // Node: các điểm nằm trên cây. Tất cả các component trong hình đều là các node
        // Parent Node: Node cha. Là node nằm ngay trên node hiện tại, chịu trách nhiệm render ra nốt hiện tại và các “sibling” của nó. VD: Settings là parent node của Profile
        // Child Node: Node con. Trái ngược với Parent node. VD: UserMenu là node con của Header
        // Sibling Nodes: Node anh em. Là các node ngang hàng nhau, có cùng cha: VD: Profile và Payments
        // Ancestors: tổ tiên. Là các nodes ở trên node cha, chịu trách nhiệm render ra node cha.
            // VD: DashBoard App là các node ancestors của Settings. Header không phải là ancestor của Settings
        // Descendants: con cháu. Là các node được render từ node hiện tại. VD: Profile Payment là các node descendant của Settings. UserMenuDropdown không phải là descendants của Settings.
        // Sub tree: Cây con. Là tập hợp các node bắt đầu từ node hiện tại. VD: sub tree từ Settings sẽ bao gồm Profile Payments ProfileForm và PaymentForm
    
    //3. “Data down”: Props chính là công cụ để giao tiếp từ node cha xuống node con
        //1. Ví dụ: 
        const App = () => {
            const [people, setPeople] = useState([
                {name: "MindX"}, {name: "React"}
            ])
            return (
                <div>
                    <NameCard name={people[0].name} />
                    <NameCard name={people[1].name} />
                </div>
            )
        }
        
        const NameCard = (props) => {
            return <div>Hello, my name is {props.name}</div>
        }

        //Comment: App có 2 nhánh NameCard (NameCard(1): {name: "MindX"}) và (NameCard(2): {name: "React"})
    
    //4. “Event up”: Props cho phép người dùng có thể truyền các dạng giá trị JS khác nhau từ component cha xuống component con, bao gồm cả các “functions”. 
        // Chúng ta sẽ truyền xuống các function từ phía component cha xuống component con. 
        //Và các component con sẽ thực hiện chạy các function đó khi cần thiết
        //Ví dụ:
        const App = () => {
            const [alice, setAlice] = useState({name: "Alice", age: 10})
            const [bob, setBob] = useState({name: "Bob", age: 10})
        
            const increaseAliceAge = () => {
                setAlice({
                    ...alice,
                    age: alice.age + 1,
                })
            }
        
            const increaseBobAge = () => {
                setBob({
                    ...bob,
                    age: bob.age + 1,
                })
            }
        
            return (
                <div>
                    <NameCard 
                        name={alice.name} 
                        age={alice.age} 
                        onIncreaseAge={increaseAliceAge} 
                    />
                    <NameCard 
                        name={bob.name} 
                        age={alice.age} 
                        onIncreaseAge={increaseBobAge} 
                    />
                </div>
            )
        }
        
        const NameCard = (props) => {
            return (
                <div>
                    <div>Hello, my name is {props.name}. I'm {props.age} years old</div>
                    <button onClick={props.onIncreaseAge}>Increase age</button>
                </div>
            )
        }

//9.Properties (Props) (Hàm khởi tạo) & State (Quản lý dữ liệu ứng dụng)
    //1. Định nghĩa:
    //là hai kiểu dữ liệu React. 

    //2. Khác biệt:
        //A. State: private và chỉ thay đổi bên trong component 
            // dùng để quản lý dữ liệu
            // là các giá trị mà component có thể thay đổi trong quá trình sử dụng
            // giá trị của state sẽ ảnh hưởng đến cách mà giao diện người dùng hiển thị.
            // Giá trị của state được thay đổi, component sẽ được "render" lại.
        //B. Props (hàm khởi tạo): mang tính external, được truyền từ component cao hơn theo phân cấp
            // dùng để truyền dữ liệu
            // là các thuộc tính được sử dụng để truyền dữ liệu từ component cha đến component con. 
            // là đại diện cho các giá trị bắt buộc hoặc tùy chọn mà component cần sử dụng để xây dựng giao diện người dùng. 
            // là tham số được chuyển qua lại giữa các React component 
            // được truyền qua các component với cú pháp tương tự HTML attributes.

    //3.Props
        //1. Định nghĩa:
            //là 1 đối tượng
            //lưu trữ các giá trị của các attribute (thuộc tính) của một thẻ (Tag)
            //dùng để truyền dữ liệu đến các Component
            //được set bởi component cha và truyền vào component con và cố định trong suốt vòng đời
            //dùng props trong trường hợp cần trao đổi data giữa các component

        //2. Ví dụ
            function Welcome(props) {
                return <h1>Hello, {props.name}</h1>;
            }   
            //Comment:
            //Welcome: là component (pure function)
            //name trong {props.name} là properties
            //1 property của Component = 1 attribute của thẻ 
            //giá trị của attribute truyền vào property của component   

        //3.Truyền data với props
            class ParentComponent extends Component {    
                render() {    
                    return (        
                        <ChildComponent name="First Child" />    
                    );  
                }
            }
            
            const ChildComponent = (props) => {    
                return <p>{props.name}</p>; 
            };

            //Xác định dữ liệu từ thành phần cha (ParentComponent) là "name" và gán nó cho thuộc tính “prop” của thành phần con (ChildComponent) ("name" = props)
            const ChildComponent = (props) => {  
                // return <p>{props.name}</p>; 
            };

        //4. React Elements (các thẻ p, html, img, ...)
            // Sử dụng props giống như với attributes của thẻ HTML
            // 2 props: class và for (trong thẻ html) => ClassName, htmlFor (dành cho thẻ label trong html)
            // phải tuân theo quy ước có sẵn
        //5. React Components (function tạo ra component)
            // Sử dụng props giống như đối số của Components
            // Tự đặt tên props: Đặt theo camelCase + có thể bao gồm dấu ngạch ngang
        //6. Children 
            //1. Children elements
                //Mọi thẻ JSX, hoặc các đoạn text bình thường đều là có thể là một “children”.

                //Ví dụ:
                const Picture = (props) => {
                    return (
                    <div>
                        <img src={props.src}/>
                        {props.children}
                    </div>
                    )
                }
            //2. Children Components
                // Các component hay nội dung được lồng bên trong component đều là children.

                // Ví dụ 
                const Avatar = () => {
                    return <img src="/avatar.jpg" alt="" />;
                };
                
                const CommentList = (props) => {
                    return <div>{props.children}</div>;
                };
                
                const Content = () => {
                    return (
                    <>
                        <p>Wiki Tino</p>
                        <p>5.0 Based on 195 reviews</p>
                    </>
                    );
                };
                
                function App() {
                    return (
                    <div className="commentBox">
                        <h1>Comments</h1>
                        <div className="commentBox">
                        <CommentList>
                            <Avatar />
                            <Content />
                        </CommentList>
                        </div>
                    </div>
                    );
                }
                //Comment:Children của "CommentList" component là "Avatar" và "Content" components
            //3. Children với vòng lặp: React.Children.map/props.children.map và React.Children.forEach/props.children.forEach và React.Children.
                //Ví dụ:
                function CommentList(props) {
                    return (
                    <div>
                        {props.children.map((child) => {
                        if (child.type === "h1") return child;
                        return null;
                        })}
                    </div>
                    );
                }   
            //4. React.Children.toArray
                //dùng để tạo mới một mảng children với các key gắn vào các element con. 
                //Nó hữu ích khi muốn sắp xếp, cắt hoặc xử lý các props.children
                //Ví dụ:
                class CommentList extends React.Component {
                    render() {
                    const children = React.Children.toArray(this.props.children);
                    return <p>{children.sort()}</p>;
                    }
                }
            
            //5. Chú ý:
                //Props "key" là prop đặc biệt
                //Props cơ bản là đối số của component => Props có thể là bất kỳ dữ liệu gì
                //Sử dụng destructuring

    //4. State
        //1. Định nghĩa
            //Giống Props
            //lưu trữ thông tin về component (state thay đổi, component dc render lại), nhưng là lưu trữ dữ liệu động của một component.
            //là các thành phần để xây dựng nên một component => chỉ có thể được sử dụng ở trong một component sinh ra nó.
        //2. Cách sử dụng state 
            //1. Không cập nhật trực tiếp giá trị của state
                //Sai
                this.state.viewmore = true;
                //Nơi duy nhất bạn có thể gán this.state là ở hàm khởi tạo (constructor).

                //Đúng
                this.setState({viewmore: true});

            //2. Cập nhật state có thể là bất đồng bộ (Asynchronous)
                //Sai
                this.setState({
                    detail: this.state.title + this.props.author 
                })
                //Đúng: function thường
                this.setState((state,props)=> ({
                    detail: state.detail + props.author
                }))

                //Đúng: arrow function
                this.setState(function (state, props){
                    return (
                        detail: state.title + props.author;
                    )
                })
            //3.State cập nhật những biến độc lập (state là object)
            constructor(props) {
                super(props);
                //State là object quản lý các key-value "comments, tags, author"
                this.state = { 
                comments: [], 
                tags: [], 
                author: '' 
                };
            }
            //Cập nhật giá trị cho key
            this.setState({
                tags: ['react', 'post']
            });

            //4. Chuyển state thành props
                //State được gọi là biến cục bộ và được khép kín trong một component => một component khác muốn truy cập đến state của một component khác là điều không thể.
                //Props: Một component cha có thể truyền state của chính nó xuống một component con

                //Component Con
                function DetailPost() {
                    return <h1>Title: {this.props.title}</h1>;
                }
                
                //Component Cha
                class WikiPost extends React.Component {
                    constructor(props) {
                    super(props);
                    this.state = {
                        title: "",
                    };
                }
                
                render() {
                    return <DetailPost title={this.state.title} />;
                    }
                }

                //Component cha: WikiPost
                //Component con: DetailPost
                //Conclusion: luồng dữ liệu ‘top-down’ hoặc ‘unidirectional
                    // DetailPost sẽ nhận "title" trong props của từ "state" của WikiPost
                    // "title" của state trong WikiPost thay đổi => props của DetailPost sẽ thay đổi 

            //5. Lưu ý: Mỗi khi giá trị của state hoặc props thay đổi thì component sẽ được render lại.

    //5. Tóm tắt
        // Có thể nhận giá trị ban đầu từ component cha	
            // Props: yes	
            // State: yes
        // Có thể thay đổi bởi component cha
            // Props: yes	
            // State: no
        // Có thể set giá trị mặc định bên trong component 
            // Props: yes	
            // State: yes
        // Có thể thay đổi bên trong component	
            // Props: no	
            // State: yes
        // Có thể set giá trị ban đầu cho các component con
            // Props: yes	
            // State: yes
        // Có thể thay đổi trong các component con	
            // Props: yes	
            // State: no


//10. Vòng đời của Component trong React
    //1. constructor(props)
        // Được gọi khi một thể hiện của component được tạo ra.
        // Có thể dùng để khởi tạo state cho component.
        // Cũng có thể dùng để "bind" các hàm của component.
        // Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
        // Nếu không làm gì thì không phải cài đặt hàm này.

    //2. componentWillMount()
        // Được gọi trước khi render().
        // Dùng để đăng ký các sự kiện toàn cục.
        // Dựa vào các props để tính toán và set lại state
        //Được gọi đến trước khi hiển thị component ra ngoài trình duyệt. Quá trình này diễn ra hết sức nhanh chóng, vì vậy không nên làm quá nhiều điều tại đây và hàm này được thực hiện một lần duy nhất (từ phiên bản 16.3 thì hàm này không được khuyến khích dùng và sẽ bị loại bỏ ở bản 17).

    //3. render()
        // Hàm này bắt buộc phải có trong component().
        // Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiển thị hoặc null / false nếu không muốn hiển thị gì.
        // Sẽ return về nội dung mà bạn đã viết, có thể là một component hoặc null hoặc là false (trong trường hợp không muốn render gì cả).
        // Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi => gây ra lặp vô hạn.

    //4.componentDidMount()
        // Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
        // Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
        // Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
        // Được gọi sau khi đã hiển thị component ra ngoài trình duyệt, và hàm này được thực hiện một lần duy nhất.

    //5. componentWillReceiveProps(nextProps)
        // Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
        // Phải gọi setState() nếu muốn render lại.

    //6. shouldComponentUpdate(nextProps, nextState)
        // Được gọi trước render.
        // Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.

    //7. componentWillUpdate(nextProps, nextState)
        // Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
        // Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
        // Hàm render sẽ được gọi ngay sau hàm này.

    //8. componentDidUpdate(prevProps, prevState)
        // Được gọi ngay sau render() từ lần render thứ 2 trở đi.
        // Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.

    //9. componentWillUnmount()
        // Được gọi khi 1 component được loại bỏ khỏi DOM.
        // Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...
    
    //10. Initialization
    // Tương tự hàm khởi tạo (constructor) được gọi đến khi một thể hiện của component được tạo ra

    //11. Mounting: 
        //Là các hàm gắn kết, kết nối các component với nhau.
        //Quy trình: initialization (initial state or default props) >> componentWillUpdate >> render >> componentDidMount
    //12. Updating: 
        //1. Định nghĩa: 
            //Là các vấn đề khi mình update component về props, về state.

        //2. Quy trình cho Props: 
            //componentWillReceiveProps >> shouldComponentUpdate >> (True) componentWillUpdate >> render >> ComponentDidUpdate
            
            //Content.js
            import React, { Component } from 'react';

            class Content extends Component {
                componentWillReceiveProps(nextProps) {
                    console.log('shouldComponentUpdate ' + nextProps.name);
                }

                shouldComponentUpdate(nextProps, nextState) {
                    console.log('shouldComponentUpdate ' + nextProps.name);
                    return true;
                }

                componentWillUpdate(nextProps, nextState) {
                    console.log('componentWillUpdate ' + nextProps.name);

                }

                componentDidUpdate(prevProps, prevState) {
                    console.log('componentDidUpdate ' + prevProps.name);

                }
                render() {
                    return (
                        <div>
                            <div>{this.props.name}</div>
                        </div>
                    );
                }
            }

            export default Content;


            //App.js
            import React, { Component } from 'react';
            import Content from './Content';

            class App extends Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        fullName: 'Tí'
                    }
                }

                updateState = () => {
                    this.setState({
                        fullName: 'Tèo Văn Tí'
                    });
                }

                render() {
                    return (
                        <div className="App">
                            <Content name={this.state.fullName}></Content>
                            <button type="button" className="btn btn-primary" onClick={() => this.updateState()}>Click Me</button>
                        </div>
                    );
                }
            }

            export default App; 




        //3. Quy trình cho state
            //shouldComponentUpdate >> (True) componentWillUpdate >> render >> ComponentDidUpdate
            import React, { Component } from 'react';

            class App extends Component {
                constructor(props) {
                    super(props);
                    console.log('initialization');
                    this.state = {
                        component: 'Component Init'
                    }
                }

                updateState = () => {
                    this.setState({
                        component: 'New State'
                    });
                }

                shouldComponentUpdate(nextProps, nextState) {        
                    console.log('shouldComponentUpdate ' + nextState.component);
                    return true;
                }

                componentWillUpdate(nextProps, nextState) {
                    console.log('componentWillUpdate ' + nextState.component);

                }

                componentDidUpdate(prevProps, prevState) {
                    console.log('componentDidUpdate ' + prevState.component);

                }

                render() {
                    console.log('render');
                    console.log(this.state.component);
                    return (
                        <div className="App">
                            <button type="button" className="btn btn-primary" onClick={() => this.updateState()}>Click Me</button>
                        </div>
                    );
                }
            }

            export default App;


    //13. UnMounting: 
        //Được gọi trước khi một component bị remove khỏi một DOM.
        //Quy trình: componentWillUnmount

//11. 