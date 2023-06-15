//REACT ROUTING DOM V6

//1. React Router là gì

//2. Công dụng
    //React:cung cấp một API có thể khai báo và tổng hợp để thêm vào và cập nhật trạng thái ứng dụng
    //React Router: cung cấp một API có thể khai báo và tổng hợp để thêm vào và cập nhật lịch sử điều hướng của người dùng

//3. Khởi động
    npm install react-router-dom@6



//4. Browser Router (cài đặt trong index.js)
    //1. Định nghĩa:
        //React Router cần phải biết và kiểm soát vị trí ứng dụng của bạn thông qua Brower Router

    //2. Cài đặt:
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import {BrowserRouter} from 'react-router-dom'; 
        import './index.css';
        import App from './App';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>
        );

        //hoặc
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import {BrowserRouter as Router} from 'react-router-dom'; 
        import './index.css';
        import App from './App';

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <React.StrictMode>
            <Router>
            <App />
            </Router>
        </React.StrictMode>
        );
//5. Routes & Route
    //1. Định nghĩa:


    //2. Ví dụ
    //Muốn hiển thị thành phần Dashboard bất cứ khi nào người dùng điều hướng đến đường dẫn /Dashboard
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
    

    //3.


    //4.

//6. Component Link vs NavLink
    //1. Định nghĩa Link:
        //Dùng để thay thể thẻ "a" trong html
        //sẽ giúp chúng ta ngăn chặn việc điều hướng mặc định của thẻ a

    //2. Cấu trúc Link:
    const Header = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        )
    }

    //3. Định nghĩa thẻ NavLink
        //Cách hoạt động giống Component Link
        //Cho phép chỉnh sửa style hoặc class khi URL hiện tại trùng khớp với giá trị to của nó
        import {NavLink} from 'react-router-dom'

        const activeClass = (params) => {
            return params.isActive ? "active-item" : ""
        }
        
        const Header = () => {
            return (
                <ul>
                    <li>
                        <NavLink to="/" className={activeClass}>Home</Link>
                    </li>
                    <li>
                        <NavLink to="/welcome" className={activeClass}>Welcome</Link>
                    </li>
                    <li>
                        <NavLink to="/products" className={activeClass}>Products</Link>
                    </li>
                </ul>
            )
        }


//7. Component Outlet
    //1. Định nghĩa:
        // là một Component được sử dụng để hiển thị nội dung của các Route con 
        // Khi chúng ta sử dụng Outlet, các Route con sẽ được render ra và hiển thị trong Outlet tương ứng, tạo ra một trang hoàn chỉnh.
    //2. Nested Routes
        //1. Nested Routes: để lồng component con vào trong component cha.

        //2. Nested url:
            //Các routes lồng ở trong đó sẽ có đường dẫn với tiền tố /profile ở trước: /courses => /profile/courses

        //3. Nested UI
        //Khi người dùng vào bên trong các đường dẫn con, component Profile sẽ luôn luôn được render. 
        //Sau đó, tuỳ vào URL hiện tại, các components con khác sẽ được render tương ứng.
    //3. Cách sử dụng
    import{ Outlet }from'react-router-dom'
    export default function Products(){
        return(
        <>
            <h1>Products</h1>
            <Outlet/>
        </>
    )}
    //Comments:
    //truy cập vào localhost:3000/products sẽ load component Products
    //truy cập vào localhost:3000/products/laptop sẽ load Products bên trong có component Laptop
    //Tại component cha là Products ta phải sử dụng <Outlet /> để hiển thị vị trí component con khi route trùng khớp


    //4.
//8. Switch



//9. Xử lý “No match” 404
    //tạo ra một Route đặc biệt với giá trị path là *
    import {Routes, Route} from 'react-router-dom'
    const App = () => {
        return (
            <Routes>
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        )
    }

    //Đường dẫn *: 
    //Ý nghĩa: sẽ trùng khớp với bất cứ đường dẫn nào trên trình duyệt. 
    //thường được sử dụng như một “fallback” URL: khi tất cả các đường dẫn khác không trùng khớp => render Route có path="*"