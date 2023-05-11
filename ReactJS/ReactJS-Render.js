// REACT RENDER HTML 

// 1. Định nghĩa:
    //là quá trình chuyển đổi một component React thành các thẻ HTML trong DOM

// 2. Các phương Thức (Function)
    //1. CreateRoot ()
    //to define the HTML element where a React component should be displayed.
    
    //2. Render(): phải truyền vào 2 giá trị
        //là một phương thức của ReactJS 
        //dùng để hiển thị các thành phần trên trình duyệt hoặc nơi khác trên ứng dụng.
        //dùng để hiển thị một thành phần React ở một vị trí cụ thể trên trang web (HTML) hoặc nơi khác
        //Hàm render sẽ trả về một phần tử React được biểu diễn bằng cú pháp JSX. 
        //Các thành phần có thể chứa bất kỳ loại tài liệu, chẳng hạn như đoạn văn bản, hình ảnh hoặc các thành phần React khác.
    
    //3. CreateRoot + Render 
        import React from 'react';
        import ReactDOM from 'react-dom';
        
        //A. Ví dụ 1: Tạo ra thẻ <div id="root"></div>
            const container = document.getElementById('root');
            const root = ReactDOM.createRoot(container);
            root.render(<p>Hello</p>); //Screen sẽ hiển thị Hello
                //KQ:
                <body>
                    <div id="root"></div>
                </body>

        //B. Ví dụ 2: Tạo ra thẻ <header id="sandy"></header>
            const container = document.getElementById('sandy');
            const root = ReactDOM.createRoot(container);
            root.render(<p>Hallo</p>);

        //C. Ví dụ 3: Tạo ra table
            const myelement = (
                <table>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <td>John</td>
                </tr>
                <tr>
                    <td>Elsa</td>
                </tr>
                </table>
            );
            
            const container = document.getElementById('root');
            const root = ReactDOM.createRoot(container);
            root.render(myelement);
        
        //D. Ví dụ 4: In ra màn hình <h1>Hello World</h1> (dùng function())

            function App() {
                return <h1>Hello, world!</h1>;
            }
            // Cách 1: viết 2 dòng
            const rootElement = document.getElementById('root');
            createRoot(rootElement).render(<App />);
        
            // Cách 2: gộp thành 1 dòng
            ReactDOM.render(<App />, document.getElementById('root')); 



    //4. Ví dụ 3:
        <body>
            <div id="root"></div>
            <script type ="text/babel">
                const element = <h1>Hello React</h1>
                console.log(element)
                ReactDOM.render(element, document.getElementById('root'));
            </script>
        </body>


