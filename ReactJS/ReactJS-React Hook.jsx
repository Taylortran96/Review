//1. React Hook: useState () 
    //1. Định nghĩa:
    //dùng để thay đổi trạng thái dữ liệu (thay đổi từ giá trị A sang giá trị B)
    //giúp dễ dàng thể hiện thay đổi trạng thái thay đổi dữ liệu trên giao diện màng hình người dùng (dữ liệu thay đổi gì => giao diện thay đổi cái nấy)
    //khi muốn dữ liệu thay đổi, giao diện màng hình auto cập nhật (render lại theo dữ liệu)

    //2. Cách dùng
    import { useEffect, useState } from "react";

    export default function Component (){
        const [state, setState] = useState(initialState); 
        //InitialState: là giá trị khởi tạo (là giá trị chỉ dùng 1 lần vào lần đầu tiên)
        //Nhận giá trị đầu vào là initialState và return về 2 mảng gồm 2 phần tử (State và setState)
            //UseState sẽ lấy initialState gán cho phần tử "state" (initialState =1  => "state" = 1)  
            //setState: là 1 hàm, dùng để set lại "state" (nếu muốn "state" từ 1 thành 2 thì call "setState" = 2 => "state" = 2)   
    }

    //3. Ví dụ
        import { useState } from "react";

        export default function Component (){
            const [counter, setCounter] = useState(1)
            // khởi tạo cho counter = 1
            
            const handleIncrease =() => {
                setCounter (counter + 1)
            }
            return(
                <div className="App">
                    <h1>{counter}</h1>
                    <button onClick={handleIncrease}>Increase</button>
                </div>
            )
            // Nhấn vào nút increase, thì counter + 1 và cứ tiếp tục bấm nút increase, thì sẽ khởi tạo lại "App"
        }
    //4. State vs Callback
        import { useState } from "react";

        export default function Component (){
            const [counter, setCounter] = useState(1)
            // khởi tạo cho counter = 1
            
            const handleIncrease =() => {
                setCounter (prevState => prevState + 1)
                // preState = 1
                setCounter (prevState => prevState + 1)
                setCounter (prevState => prevState + 1)
            }
            return(
                <div className="App">
                    <h1>{counter}</h1>
                    <button onClick={handleIncrease}>Increase</button>
                </div>
            )
            
        }

        // Dùng callback khi phải xử lý 1 vấn đề liên quan tới logic
        import { useState } from "react";

        export default function Component (){
            const [info, setInfo] = useState({
                name:"Nguyen Van A",
                age: 18,
                address:"HCM, VN"
            })

            const handleUpdate =() => {
                setInfo (prev => ({
                    //logic here ...

                    return(
                        ...prev, //bảo lưu dữ liệu cũ, và thêm bio
                        bio: 'Yêu màu hồng'
                    )

                }))
            }
            return(
                <div className="App">
                    <h1>{JSON.stringify(info)}</h1>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )
        }

    //5. InitialState vs Callback
        //Tính tổng đơn hàng
        import { useState } from "react";
        
        const orders = [100,200,300];

        export default function Component (){
            // const total = orders.reduce((total, curr) => total + curr);
            // console.log(total); //return = 600
            
            // Truyền callback cho initialState
            const [counter, setCounter] = useState(()=>{
                const total = orders.reduce((total, curr) => total + curr);
                console.log(total); 
                return total;
            })
            
            const handleIncrease =() => {
                setCounter (prevState => prevState + 1)
                // preState = 1
                setCounter (prevState => prevState + 1)
                setCounter (prevState => prevState + 1)
            }
            return(
                <div className="App">
                    <h1>{counter}</h1>
                    <button onClick={handleIncrease}>Increase</button>
                </div>
            )
            
        }
    //6. Set State là thay thế State bằng giá trị mới
        import { useState } from "react";

        export default function Component (){
            const [info, setInfo] = useState({
                name:"Nguyen Van A",
                age: 18,
                address:"HCM, VN"
            })
            
            const handleUpdate =() => {
                setInfo ({
                    bio: 'Yêu màu hồng'
                })
            }
            return(
                <div className="App">
                    <h1>{JSON.stringify(info)}</h1>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )
            // Nhấn vào nút Update, thì object1 ({"name": "Nguyen Van A", ...) sẽ đổi thành Object2 {"bio": 'Yêu màu hồng'}
        }
    //7. Thêm giá trị Object1 vào Object2
        import { useState } from "react";

        export default function Component (){
            const [info, setInfo] = useState({
                name:"Nguyen Van A",
                age: 18,
                address:"HCM, VN"
            })
        }
            
        // Cách 1:
            // const handleUpdate =() => {
            //     setInfo ({
            //         ...info, //thêm object1 vào object2
            //         bio: 'Yêu màu hồng'
            //     })
            // }
        // Cách 2: dùng callback
            const handleUpdate =() => {
                setInfo (prev => ({
                    ...prev, //bảo lưu dữ liệu cũ, và thêm bio
                    bio: 'Yêu màu hồng'
                }))
            return(
                <div className="App">
                    <h1>{JSON.stringify(info)}</h1>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )
            }
    //8. State cho từng kiểu dữ liệu: Array, Object, String, Boolean, Number
    
//2. React Hook: UseEffect ()
    //1. Định nghĩa:
        //là một nơi quản lý các "side-effect" bên trong một React Components.
        //tập hợp các components
        //Các hiệu ứng trên 1 website
        //quản lý vòng đời của của một component 
        //được sử dụng trong function component thay vì các lifecycle như trước đây trong class component.
        
    //2. Side-effect
        //1. Định nghĩa:    
            //miêu tả các tính toán bên trong một function ảnh hưởng đến các đối tượng bên ngoài KHÔNG thông qua đối số.
            //khi có 1 tác động xảy ra, dẫn tới dữ liệu của chương trình bị thay đổi
        //2. Ví dụ:
            let a = 10;
            function calculate() {
                a++;
            }
            calculate(); // a = 11
            
            // Lúc này a sẽ bằng 11 chứ không phải bằng 10 
            // Khi hàm cal() được invoke, nó đã tác động đến biến bằng cách + lên 1 đơn vị mà không thông qua cách truyền tham số
        
        //3. Các loại:
            // Effects không cần Cleanup
            // Effects cần phải Cleanup

        
    //3. Mục đích sử dụng UseEffect
        // Xử lý HTTP request, response
        // Tương tác với Local Storage, Session Storage.
        // Thực hiện subscribes / unsubscribes các dịch vụ bên ngoài.
        // Tương tác trực tiếp với DOM
        //Ví dụ: 
        // 1. Người dùng tiến hành đăng nhập. Khi click vào button “Login”, tiến hành gửi thông tin user lên server.
        // 2. Nếu người dùng nhập chính xác, tiến hành điều hướng về trang chủ.
        // 3. Nếu người dùng nhập không chính xác, tiến hành hiển thị lỗi yêu cầu người dùng nhập lại.
        
    //4. Làm việc với useEffect
            // Events: Add/Remove event Listener
            // Observer pattern: subscribe/unsubscribe 
            // Closure
            // Timer (`setTimeout`, `setInterval`, `clearInterval`, `clearTimeout `)
            // useState()
            // Mounted/ unmounted
            // Toán tử: strict: ===
            // Call API

    //5. Cú pháp useEffect ()
        // React.useEffect chấp nhận 2 đối số
            useEffect(callback, dependencies);
            //Callback (side-effect function): sẽ được gọi trong useEffect sau khi return thực thi nhiệm vụ kết xuất giao diện của nó.
            //Dependencies (mảng phụ thuộc): Là một mảng chứa các đối số mà useEffect sẽ phụ thuộc vào đó để thực thi. 
        
    //6. Ví dụ cơ bản:
        import React, {useEffect, useState} from 'react';

        export const EffectDemo = () => {
            //Khởi tạo State
            const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
            const [title,setTitle] = useState('useEffect() in Hooks');
        
            //useEffect
            useEffect(() => {
                setFullName({name:'TrungHC',familyName: 'HCT'});
            });
        
            return(
                <div>
                    <h1>Title: {title}</h1>
                    <h3>Name: {fullName.name}</h3>
                    <h3>Family Name: {fullName.familyName}</h3>
                </div>
            );
        };
    
    
    //7. Dependencies trong useEffect()
        //1. Không cung cấp đối số nào, useEffect sẽ được gọi thực thi các tính toán bên trong nó mỗi khi thành phần render.
        function Example() {
            // useEffect sẽ thực thi đặt tiêu đề mỗi lần component re-render
            useEffect(() => {
                document.title = "Tieu De";
            })
        
            return (
                <h1>Example</h1>
            ); 
        }
        //2. Một mảng trống []: 
            //truyền một mảng trống vào, nó sẽ chỉ thực thi một lần duy nhất sau khi thành phần đó render lần đầu tiên
            //cách hoạt động tương tự như componentDidMount của Class Component
        
        function Example() {
            // Chỉ hoạt động lần đầu tiên sau khi return chạy.
            useEffect(() => {
                document.title = "Tieu De";
            }, [])
        
            return (
                <h1>Example</h1>
            ); 
        }

        //3. Khi truyền các Props, State
        //Trong lần render tiếp theo, nó sẽ kiểm tra giá trị của props, state mới với giá trị props, state trước đó
        //Cơ chế này tương tự như sử dụng Life Cycle componentDidUpdate và shouldComponentUpdate của Class Component.

        function Example() {
            const [count, setCount] = useState(0);
    
            // useEffect sẽ thực thi vì hàm này làm count thay đổi giá trị so với trước đó
            const increment = () => {
                setCount(count + 1);
            }
            
            // useEffect sẽ không thực thi khi hàm này được gọi vì nó không thay đổi count
            const nothing = () => {
                setCount(count);
            }
    
            // useEffect callback được gọi khi state thay đổi so với giá trị trước đó
            useEffect(() => {
                console.log("useEffect được gọi");
            }, [count])
        
            return (
                <section>
                    <h1>{count}</h1>
    
                    <button onClick={increment}>Tăng thêm</button>
                    <button onClick={nothing}>Không có gì xảy ra</button>
                </section>
            ); 
        }
    
    //8. React useEffect Hook: 
        //1. Luôn luôn gọi: 
            //chỉ truyền một đối số – là một hàm số. Hàm này sẽ được gọi mọi lúc – bất cứ khi nào component được render để hiển thị (bao gồm cả lúc update hoặc tạo mới component).
    
            const Toggler = ({ toggle, onToggle }) => {
                useEffect(() => {
                console.log('I run on every render: mount + update.'); //khi nào render lại đều hiển thị dòng này
            });
            
            return (
                <div>
                    <button type="button" onClick={onToggle}>
                    Toggle
                    </button>
            
                    {toggle && <div>Hello React</div>}
                </div>
                );
            };

        //2. Chỉ gọi lúc component được mount (lần đầu tiên component hiển thị) (Truyền mảng rỗng vào dependancies) 
            //chỉ cần truyền vào mảng rỗng vào đối số thứ 2 của useEffect
            const Toggler = ({ toggle, onToggle }) => {
                React.useEffect(() => {
                  console.log('I run only on the first render: mount.');
                }, []);
               
                return (
                  <div>
                    <button type="button" onClick={onToggle}>
                      Toggle
                    </button>
               
                    {toggle && <div>Hello React</div>}
                  </div>
                );
              };
        //3. Gọi khi update giá trị điều kiện:
            //chỉ cần truyền 1 hoặc nhiều giá trị vào dependency "toggle và title" tùy vào mục đích sử dụng
            const Toggler = ({ toggle, onToggle }) => {
                const [title, setTitle] = React.useState('Hello React');
                
                useEffect(() => {
                console.log('I run only if toggle changes (and on mount).');
                }, [toggle, title]);
            
                return (
                <div>
                    <button type="button" onClick={onToggle}>
                    Toggle
                    </button>
            
                    {toggle && <div>Hello React</div>}
                </div>
                );
            };
            
            //Comment:
            //console.log("...") sẽ được gọi khi biến toggle thay đổi giá trị
        //4. UnMount
            const App = () => {
                const [timer, setTimer] = React.useState(0);
            
                React.useEffect(() => {
                const interval = setInterval(
                    () => setTimer((currentTimer) => currentTimer + 1),
                    1000
                );
            
                return () => clearInterval(interval);
                }, []);
            
                return <div>{timer}</div>;
            };
            
            export default App;

    //9. Đối chiếu Component lifecycle với useEffect Hook
        //Component lifecycle: componentDidMount(), componentDidUpdate(), componentWillUnmount()

        //1. ComponentDidMount()
            useEffect(() => {
                // Bạn viết code xử lý logic tại đây
            }, []); //truyền mảng rỗng vào dependency
        
        //2. ComponentDidUpdate(): 
            useEffect(() => {
                // Bạn viết code xử lý logic tại đây
            }); //k truyền đối số vào dependency
        
        //3. componentWillUnmount()
            useEffect(() => {  
                // hàm được trả về sẽ được gọi khi component unmount 
                return () => {
                // Bạn viết code xử lý logic tại đây khi component unmount.
                }
            }, [])
    //10. Trường hợp sử dụng useEffect
            //1. Chạy một lần khi mount : tìm nạp data API.
            //2. Chạy khi thay đổi state : thường thì khi validate input đầu vào.
            //3. Chạy khi thay đổi state : filtering trực tiếp.
            //4. Chạy khi thay đổi state : trigger animation trên giá trị của array mới.
            //5. Chạy khi props thay đổi : update lại list đã fetched API khi data update.
            //6. Chạy khi props thay đổi : updateing data API để cập nhật BTC
    
    //11. 5 trường hợp sử dùng useEffect
        // Part A: Giống ComponentDidMount(): Once
            useEffect(() => {
                // Bạn viết code xử lý logic tại đây
            }, []); //truyền mảng rỗng vào dependency

        // Part B: Giống ComponentDidUpdate():on State Change, on Props Change, after every render
            //1. on State Change
            function YourComponent() {
                const [state, setState] = useState()
                useEffect(() => {
                    //code to run when "state" changes
                }, [state]); //k truyền đối số vào dependency
            }
            //2. on Props Change
            function YourComponent({someProps}) {
                useEffect(() => {
                    //code to run when "someProps" changes
                }, [someProps]); //k truyền đối số vào dependency
            }
            //3. after every render
                useEffect(() => {
                    // Bạn viết code xử lý logic tại đây
                }); //k truyền đối số vào dependency

        // Part C: Giống componentWillUnmount(): on unmount
            useEffect(() => {  
                // hàm được trả về sẽ được gọi khi component unmount 
                return () => {
                // Bạn viết code xử lý logic tại đây khi component unmount.
                }
            }, [])
 
    //12. Clean up useEffect
    //cần phải clean-up các side-effect để tránh các vấn đề về hiệu xuất như memory-leak. 

    function Example() {
		// Clean up
		useEffect(() => {
			// Khi bạn gọi các sự kiện cho một component như scroll 
			// Có thể gây leak-memory nếu không clean up
			// Ví dụ, bạn tạo 1 sự kiện scroll ở component A, 
			// Sau đó nhảy qua component B mà chưa remove sự kiện ở component A, 
			// Lúc này, sự kiện ở component A sẽ vẫn hoạt động và cộng dôn với sự kiện ở component B 
			window.addEventListener("scroll", () => {...});

			// Chúng ta sẽ cần clean up nó khi navigate sang các component khác.
			// Tránh memory leak
			return () => {
				window.removeEventListener("scroll", () => {...})
			}
		}, [])
	
		return (
			<section>
				
			</section>
		); 
	}

//3. React Hook: UseContext, Context Provider, Context Consumer
    //1. Định nghĩa:
        //Sử dụng Context để thay thế props để truyền từ trên xuống dưới (cha tới con) và được truyền qua nhiều components
        //Ví dụ: ví dụ như “đa ngôn ngữ” hoặc “giao diện sáng/tối”,truyền từ Cha xuống nhiều component con bên trong ứng dụng cần truy cập vào nó

    //2. Khái niệm
        // 1. Context: Hoạt động giống như một kho dữ liệu, cung cấp dữ liệu cho các thành phần cần tới nó.
        
        
        // 2. Context Provider: một React component, sử dụng để cung cấp dữ liệu từ trong kho dữ liệu tới các component con.
            //Nhiệm vụ của Provider là cho phép các component con được phép nhận sự thay đổi từ trong context.
            //Nhận vào một props là "value"
        
        
        // 3. Context Consumer: một React component, được sử dụng để lấy dữ liệu từ trong kho context.
        //Consumer nhận vào một children props là một function. 
        //Tham số đầu vào của function đó chính là giá trị nằm bên trong Context.
        //Function này trả ra kết quả là một React Node. 
        //Khi giá trị nằm trong Context Provider thay đổi, các nodes nằm bên trong Context consumer này cũng sẽ được tự động cập nhật lại

    //3. Quy trình
        //1. Context:
            import {createContext} from 'react'

            const defaultValue = {theme: "light"}
            const ThemeContext = createContext(defaultValue)
            
            export default ThemeContext
        //2. Context Provider: Khi wrap với App có thể wrap nhiều ComponentContext.Provider
            import ThemeContext from './ThemeContext';

            const App = () => {
                return (
                    <ThemeContext.Provider value={{theme: "light:"}}>
                        ...
                    </ThemeContext.Provider>
                )
            }
        //3. Context Consumer:
        import ThemeContext from "./ThemeContext"

        const Login = () => {
            return (
                <div>
                    <ThemeContext.Consumer>
                        {(themeCtx) => {
                            return (
                                <div 
                                    style={{
                                        backgroundColor: themeCtx.theme === 'light': 'white': 'black'
                                    }}
                                >
                                    <LoginForm />
                                </div>
                            )
                        }}
                    </ThemeContext.Consumer>
                </div>
            )
        }

        export default Login
    //4. Các lưu ý khi sử dụng context:
        // Context Provider không nhất thiết phải nằm ở trên cùng trong cây component. Context Provider cho phép đưa dữ liệu xuống cho các component khi chúng là các ***descendant nodes*** của Provider đó.
        // Có thể có nhiều Context Provider lồng vào nhau. Các consumer sẽ lấy giá trị nằm trong provider gần nó nhất.
        // Nếu như consumer không tìm thấy provider của nó ở trong nhánh hiện tại, giá trị mặc định lúc này của consumer sẽ là giá trị nằm trong function `createContext` được sử dụng để tạo ra context.
    
    //5. Sử dụng useContext (Phiên bản 16.8) thay cho Context 
        //Với context, React có một hook giúp người dùng có thể dễ dàng tạo ra một Context Consumer 
        //không cần sử dụng tới Render props như Context.Consumer
        //Context.Consumer và useContext là 2 cách cho phép component có thể truy cập được vào giá trị bên trong context. Ý nghĩa của chúng cũng sẽ giống nhau.
        //Ví dụ:
        import {useContext} from 'react'
        import ThemeContext from "./ThemeContext"

        const Login = () => {

            const themeCtx = useContext(ThemeContext)

            return (
                <div 
                    style={{
                        backgroundColor: themeCtx.theme === 'light': 'white': 'black'
                    }}
                >
                    <LoginForm />
                </div>
            )
        }

        export default Login

    //6. Ví dụ khác
        //Ví dụ 1:
            //B1: Tạo Food Context
                import React, { createContext, useState } from 'react'
                // Initiate Context
                const FoodContext = createContext();
                // Provide Context
                export const FoodProvider = ({ children }) => {
                const [name, setName] = useState('Trà Xanh');
                const [location, setLocation] = useState('Thái Nguyên');
                return (
                    <FoodContext.Provider value={{ name, location, setName, setLocation }}>
                    {children}
                    </FoodContext.Provider>
                )
                }
                
                export default FoodContext; 


            //B2:Wrap the App component với Context.
                import React from 'react';
                import ReactDOM from 'react-dom';
                import './index.css';
                import App from './App';
                import { FoodProvider } from './FoodContext';
                
                ReactDOM.render(
                <FoodProvider>
                    <App />
                </FoodProvider>,
                document.getElementById('root')
                );
            //B3: Sử dụng name và location trong components.
            //Trong NameComponent.jsx import FoodContext dùng hook useContext.
                import React,{ useContext } from 'react';
                import FoodContext from '../FoodContext';
                
                const NameComponent = () =>{
                //Retrieve context data
                const food = useContext(FoodContext);
                
                return (
                    <div style={{ marginTop: "30px" }}>
                    <h2 className="is-size-4">
                        <strong>Name</strong>: {food.name}
                    </h2>
                    </div>
                )
                }
            //Trong LocationComponent.jsx import FoodContext dùng hook useContext.
                import React, { useContext } from 'react';
                import FoodContext from '../FoodContext';

                const LocationComponent = () => {
                // Retrieve context data
                const food = useContext(FoodContext);

                return (
                    <div style={{ marginTop: "30px", marginLeft: "50px"}}>
                    <h2 className="is-size-4">
                        <strong>Location</strong>: {food.location}
                    </h2>
                    </div>
                )
                }       

            //B4:  Cách update data trong context
            // trong FoodForm.jsxta cũng import FoodContext và sử dụng hook useContext để lấy context data
                import React,{ useContext } from 'react';
                import FoodContext from './FoodContext';

                const FoodForm = () => {
                // Retrieve context data
                const food = useContext(FoodContext);

                return (
                    <div className = "food-form" >
                    <div className="input-item">
                        <label className="label" style={{ marginRight: "28px" }}>Update Name: </label>
                        <input
                        className="input"
                        onChange={e => food.setName(e.target.value)}
                        />
                    </div>

                    <div className="input-item">
                        <label className="label" >Update Location: </label>
                        <input
                        className="input"
                        onChange={e => food.setLocation(e.target.value)}
                        />
                    </div>
                    </div>
                )
                }
                export default FoodForm;

//4. React Hook: UseRef (Reference)
    //1. Định nghĩa:
        //là thuộc tính của 1 tag hoặc là 1 element
        //thay thế cho document.getElementById()

    //2. Cách sử dụng: keywords "element.current.focus"
        //dùng document.getElementById
        const App = () => {

            const handleFocus = () => {
                document.getElementById("myTxt").focus()
            }
        
            return (
                <div>
                    <input id="myTxt" type="text" />
                    <button onClick={handleFocus}>Focus</button>
                </div>
            )
        }

        //dùng useRef thay thế
        import {useRef} from 'react'

        const App = () => {

            const inputRef = useRef(null) //khởi tạo biến cho useRef

            const handleFocus = () => {
                inputRef.current.focus()
            }

            return (
                <div>
                    <input ref={inputRef} type="text" />
                    <button onClick={handleFocus}>Focus</button>
                </div>
            )
        }
    //3. Lưu giữ một biến có thể mutate
        //Cả trong class component và functional component sử dụng hook
        //Có 2 cách để giữ data không bị tạo mới lại giữa các lần re-render:
            //Cách 1: class component
                // Trong state của component: Mỗi lần state thay đổi, component sẽ bị re-render.
                // Trong một biến instance: Biến sẽ tồn tại suốt vòng đời của component. Thay đổi instance của biến sẽ không gây nên re-render.
            //Cách 2: functional component
                //Trong state của component: useState hoặc useReducer. Cập nhật biến state sẽ gây nên re-render component.
                //Trong một ref: Tương đương với các biến instance trong class component. Việc mutate thuộc tính .current sẽ không gây nên re-render.
        //Ví dụ:
        import React, {useRef, useState} from 'react'
        const MessageInputComponent = () => {
            
            const [message, setMessage] = useState("")

            const sentMessage = useRef(0);
            
            const sendMessage = () => {
                if(sentMessage.current === 3){
                return alert("Message Limit Reached")
                }
                
                sentMessage.current += 1
            //code to handle sending message    
        }
        
        return(
        <div>
            <input onChange = {(e) => setMessage(e.target.value)} value={message}/>
            <button onClick={sendMessage}>Send</button>
        </div>
        )
        }
        export default MessageInputComponent

        //Component:
        //Dùng useState và useRef, message là state đại diện cho value của "input" (khi input thay đổi, component re-render và update lại value của input)
        //useRef: sentMessage sẽ đếm số lần dc "message" được gửi đi và  và nó không yêu cầu component re-render khi sentMessage thay đổi.
        //Để thay đổi giá trị, chúng ta chỉ cần thay đổi trực tiếp giá trị được lưu trong thuộc tính current của useRef.
    
    //4. Forward Ref 
        //Chỉ có các thẻ HTML có sẵn của JSX là có thể sử dụng thuộc tính "ref"
        //Để tham chiếu tới một thẻ HTML bên trong của một component tự định nghĩa => “chuyển tiếp ref (Forward Ref)”

        //Ví dụ:
        function FancyButton(props) {
            return (
              <button className="FancyButton">
                {props.children}
              </button>
            );
        }
        //thay thế
        const FancyButton = React.forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton">
              {props.children}
            </button>
        ));
          
        // You can now get a ref directly to the DOM button:
        const ref = React.createRef();
        <FancyButton ref={ref}>Click me!</FancyButton>;

    //5. UseRef lưu trữ các giá trị qua những lần render của component, nhưng không ảnh hưởng tới UI của ứng dụng React. 
    // import {useRef, useState} from 'react';

    // const App = () => {

    //     let count = 0;
    //     const countRef = useRef(0);
    //     const [countState, setCountState] = useState(0);

    //     console.log("count: ", count);
    //     console.log("countRef: ", countRef.current);
    //     console.log("countState", countState);

    //     const increase = () => {
    //         count ++
    //     }

    //     const increaseRef = () => {
    //         countRef.current++
    //     }

    //     const increaseState = () => {
    //         setCountState(countState + 1)
    //     }

    //     return (
    //         <div>
    //             <div>
    //                 {count}
    //                 <button onClick={increase}>Increase Count<button>
    //             </div>
    //             <div>
    //                 {countRef.current}
    //                 <button onClick={increaseRef}>Increase CountRef<button>
    //             </div>
    //             <div>
    //                 {countState}
    //                 <button onClick={increaseState}>Increase CountState<button>
    //             </div>
    //         </div>
    //     )
    // }

    //Comment:
    // - Khi cập nhật `countRef` và `count`, giao diện không được cập nhật
    // - Khi thay đổi giá trị `countState` , giao diện được cập nhật. Giá trị của `count` sẽ trở về 0, giá trị của `countRef` vẫn sẽ được giữ nguyên.
   
    
//5.React Hook: React Memo (Memory) vs useMemo
    //1. React.memo ()
        //1. Định nghĩa:
            //là một higher order component (HOC) - là 1 hàm nhận vào 1 component và trả về 1 component mới.
            //được sử dụng để bọc các component
            //sử dụng React.memo(), React sẽ bỏ qua việc render lại component và sử dụng kết đã render lần cuối cùng nếu component của bạn render cùng kết quả với cùng props.

        //2. Khi nào sử dụng?
            // Trước hết thì component của bạn phải là functional component đã nhé.
            // Component của bạn thường xuyên bị re-render.
            // Nếu component của bạn luôn luôn bị re-render mặc dù prop không thay đổi.
            // Component của bạn chứa một lượng lớn tính toán logic và UI như Chart, Canvas, 3D library….
        
        //3. Khi nào tránh sử dụng
            // 1. Nếu component của bạn không bị re-render mặc dù prop không thay đổi, rất có thể bạn không cần React.memo ().
                // Sử dụng quy tắc ngón tay cái sau: không sử dụng ghi nhớ (memoization) nếu bạn không thể định lượng hiệu suất (performance) đạt được.
            // 2. Các thay đổi liên quan đến hiệu suất được áp dụng không chính xác thậm chí có thể gây hại cho hiệu suất. Sử dụng React.memo () một cách khôn ngoan.
            // 3. Component của bạn là class component
            // 4. Component của bạn đã được memo bởi một HOC khác, ví dụ connect() của Redux    
        //4. Ví dụ 1:
            import { useState, memo } from "react";

            export default function App() {
            const [value, setValue] = useState({ name: "MindX", age: 20 });

            const updateValue = () => {
                setValue({ name: "MindX", age: 20 });
            };

            const updateName = () => {
                setValue({ ...value, name: value.name + "x" });
            };

            const increaseAge = () => {
                setValue({ ...value, age: value.age + 1 });
            };

            return (
                <div>
                <div>Check your console</div>
                <button onClick={updateValue}>Change value</button>
                <button onClick={updateName}>Change name</button>
                <button onClick={increaseAge}>Increase age</button>
                <Normal name={value.name} age={value.age} />
                <Memoized name={value.name} age={value.age} />
                </div>
            );
            }

            const Normal = (props) => {
            console.log("Normal, Re-render");
            return <div>Normal: {props.name + " " + props.age}</div>;
            };

            const Pure = (props) => {
            console.log("Pure, Re-render");
            return <div>Pure: {props.name + " " + props.age}</div>;
            };

            const Memoized = memo(Pure);

            // Click vào button “Increase age” => Không làm cho component "Memoized" được render lại, dẫn đến kết quả hiển thị trên màn hình không thay đổi.
        
        //5. Ví dụ 2:
        //1. Không có React.memo
            //Content.jsx
            function Content() {
                console.log("Content rerender...")
                return (
                <h1>Haposoft</h1>
                )
            }
            export default Content;

            //App.js
            import { useState } from "react"
            import Content from './Content'
            
            function App() {
                const [number, setNumber] = useState(0)
                const handleIncrease = () => setNumber(number => number + 1)
                
                return (
                    <div>
                        <h1>{number}</h1>
                        <button onClick={handleIncrease}>Click me!</button>
                        <Content />
                    </div>
                )   
            }
            
            export default App;

            //KQ:
            //Ngoài lần đầu Content được mounted vào DOM, mỗi lần click vào button "Click me!" của component Content đều bị re-render
            //Nguyên nhân: Content là component con của App nên mỗi khi App được re-render thì Content cũng bị re-render.

        //2. Có React.memo() cho Component "Content"
            import { memo } from "react"
    
            function Content() {
            console.log("Content rerender...")
            return (
                <h1>Haposoft</h1>
            )
            }
            
            export default memo(Content)

            //KQ: Ngoài lần đầu Content được mounted vào DOM, mỗi lần click button "Click me!" của component Content không hề bị re-render nữa.

    //2. useMemo
        //1. Định nghĩa:
            //cho phép chỉ định: lưu lại kết quả của hàm nào và những giá trị nào sẽ làm thay đổi kết quả đó
            //dùng vào việc tránh lặp đi lặp lại các logic tính toán nặng nề.
                //Giá trị của 1 trong dependencies thay đổi => hàm tính toán sẽ được thực thi lại, từ đó trả ra giá trị mới.
                //Giá trị của dependencies không thay đổi => ngay lập tức useMemo trả ra kết quả trước đó mà không hề tính toán lại, từ đó tránh được một khối lượng lớn công việc, giúp ích cho performance.
        //2. Khác với useEffect()

        //3. Ví dụ 1:
        //1. Không có useMemo
        import { useState } from "react"

        function App() {
            const [number, setNumber] = useState("")
            const [numbers, setNumbers] = useState([])
            
            const handleClick = () => {
                setNumbers(prevState => [...prevState, parseInt(number)])
            }
            
            const total = numbers.reduce((number, total) => {
                console.log('re-render...')
                return number + total
            }, 0)
            
            return (
                <div>
                <input
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <button onClick={handleClick}>Click me!</button>
                <h1>Total: {total}</h1>
                <ul>
                    {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                    ))}
                </ul>
                </div>
            )
        }
        
        export default App  


        //2. Có useMemo
        import { useMemo, useState } from "react"

        function App() {
            const [number, setNumber] = useState("")
            const [numbers, setNumbers] = useState([])

            const handleClick = () => {
                setNumbers(prevState => [...prevState, parseInt(number)])
            }

            const total = useMemo(() => {
                console.log('re-render...')
                return numbers.reduce((number, total) => {
                return number + total
                }, 0)
            }, [numbers])

            return (
                <div>
                <input
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                <button onClick={handleClick}>Click me!</button>
                <h1>Total: {total}</h1>
                <ul>
                    {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                    ))}
                </ul>
                </div>
            )
        }

        export default App

        //4. Ví dụ 2:
            import { useState, useMemo, useEffect } from "react";

            export default function App() {
                const [items, setItems] = useState([1, 2, 3]);
                const [visible, setVisible] = useState(true);

                const doubleItems = items.map((item) => item * 2);

                const memoizedDoubleItems = useMemo(() => {
                    return items.map((item) => item * 2);
                }, [items]);

                const changeVisible = () => {
                    setVisible(!visible);
                };
                const addValue = () => {
                    setItems([...items, 1]);
                };

                useEffect(() => {
                    console.log("doubleItems changed");
                }, [doubleItems]);

                useEffect(() => {
                    console.log("memoizedDoubleItems changed");
                }, [memoizedDoubleItems]);

                return (
                    <div>
                    <button onClick={changeVisible}>Change visible</button>
                    <button onClick={addValue}>Add value</button>
                    {visible && (
                        <div>
                        <p>{items}</p>
                        <p>{doubleItems}</p>
                        <p>{memoizedDoubleItems}</p>
                        </div>
                    )}
                    </div>
                );
            }

        //5. Ví dụ 2:
    //3. Khác biệt giữa React.memo() và useMemo()
        //React.memo(): //tránh việc re-render nhiều lần

        //useMemo((): 
            //tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render.
            //bản chất: caching lại giá trị return của function 
                //mỗi lần component re-render nó sẽ kiểm tra giá trị tham số truyền vào function nếu giá trị đó không thay đổi, thì return value đã caching trong memory
                //nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần re-render tiếp theo.

//6. React Hook: useCallback + useMemo
    //1. Định nghĩa
        //giúp mình tạo ra một memoized callback và chỉ tạo ra callback mới khi dependencies thay đổi.

    //2. Bao gồm 2 đối số và return về memoized callback
        //1. Function
        //2. Dependencies
        
        //Dùng useCallback:
            //Chỉ tạo ra function mới khi dependencies thay đổi
            //Dùng empty dependency =>  không bao giờ tạo ra function mới.

    //3. Ví dụ
        //1. K dùng useCallback
            //Content.js
            import { memo } from "react"

            function Content({ onIncrease }) {
                console.log("Content rerender...")
                return (
                    <>
                    <h1>Haposoft</h1>
                    <button onClick={onIncrease}>Click me!</button>
                    </>
                )
            }
            
            export default memo(Content)

            //App.js
            import { useState } from "react"
            import Content from './Content'
            
            function App() {
            
            const [number, setNumber] = useState(0)
            
            const handleIncrease = () => setNumber(number => number + 1)
            
            return (
                <div>
                <h1>{number}</h1>
                <Content onIncrease={handleIncrease} />
                </div>
            )
            }
            
            export default App;

            //KQ: click vào button thì Content bị re-render
            //Tại sao lại vậy, tại sao có React memo rồi mà vẫn bị re-render?
            //Giải thích: 
                //Đây là kiến thức về reference type của JS
                //mỗi lần App.js được re-render thì nó tạo ra các hàm handleIncrease khác nhau. 
                //Khi truyền handleIncrease làm prop của component Content thì React memo sẽ hiểu là các hàm handleIncrease khác nhau và vẫn quyết định re-render. Đây là điều không cần thiết.
    //2. Dùng useCallback
            //App.js
            import { useCallback, useState } from "react"
            import Content from './Content'
            
            function App() {
            
                const [number, setNumber] = useState(0)
                
                const handleIncrease = useCallback(() => {
                    setNumber(number => number + 1)
                }, [])
            
                return (
                    <div>
                    <h1>{number}</h1>
                    <Content onIncrease={handleIncrease} />
                    </div>
                )
                }
            
            export default App;
            //KQ: ngoài lần đầu Content được monnted vào DOM thì mỗi lần click component Content không hề bị re-render nữa.

    //4. Lưu ý:
        // Không nên lạm dụng useCallback
        // Nếu bạn không sử dụng React memo cho component con thì ở component cha bạn không cần phải sử dụng useCallback làm gì cả. Bởi vì không có memo thì mỗi lần component cha re-render thì component con cũng sẽ bị re-render theo.


    //4.

    //5.


//7. React Hook: useReducer

//8. React Hook: useLocalStorage


//9. React Hook: useAsync


//10. React Hook: useHistory