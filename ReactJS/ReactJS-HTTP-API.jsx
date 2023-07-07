//HTTP 

//1. Định nghĩa HTTP

//2. HTTP API
    //1. API (Application Programming Interface): là những gì được phơi ra bên ngoài, được truyền vào từ bên ngoài để thực hiện một số tác vụ nhất định ngh
    
    //2. HTTP API: là các đường dẫn mà máy chủ cung cấp ra bên ngoài để các ứng dụng phía client có thể gọi tới và sử dụng dụng dữ liệu

    //3. Ví dụ: 
    // PokeAPI cung cấp một loại các đường dẫn 
    // Khi ứng dụng client gửi request tới các đường dẫn đó, PokeAPI tiến hành trả về các kết quả theo một format nhất định
    // https://pokeapi.co/api/v2/pokemon => Get list of pokemons
    // https://pokeapi.co/api/v2/pokemon/ditto => Pokemon Ditto
    // https://pokeapi.co/api/v2/pokemon/pikachu => Pokemon Pikachu

//4. The Fetch API
    //1. Định nghĩa
        //giúp tạo HTTP Request cho ứng dụng Frontend
        //fetch nhận vào tham số là đường dẫn tới API URL (fetch ('https://....)), trả về kết quả là một "Promise" (sau then())
    
    //2. Promise
        //là tính năng của Javascript, kp Reactjs
        //Promise được tạo ra để giải quyết vấn đề: Gửi HTTP request qua mạng là một tác vụ bất đồng bộ. Do đó, kết quả trả về sẽ không tới ngay lập tức.
        //cung cấp "then" function, giúp chúng ta thực hiện các câu lệnh tiếp theo sau khi tác vụ bất đồng bộ hoàn thành

    //3. Ví dụ cơ bản:
        fetch('url')
        .then(response => {
            //handle response            
            console.log(response);
        })
        .then(data => {
            //handle data
            console.log(data);
        })
        .catch(error => {
            //handle error
        });

    //4. Ví dụ 1:
        import {useState} from 'react'

        const App = () => {

            const [pokemons, setPokemons] = useState([])
            
            const handleFetchPokemon = () => {
                fetch('https://pokeapi.co/api/v2/pokemon')
                    .then((response) => {
                        return response.json()
                    }).then((data) => {
                        console.log(data)
                        setPokemons(data.result)
                    })
            }	

            return (
                <div>
                    <button onClick={handleFetchPokemon}>Fetch Pokemon</button>
                    <ul>
                        {pokemons.map(pokemon => {
                            return <li key={pokemon.url}>{pokemon.name}</li>
                        })}
                    </ul>
                </div>
            )
        }

    //5. Ví dụ 2: với Json
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {
	    console.log(data)
    });

    //6. Syntax
        // 1. Method (Phương thức): The request method is either GET or POST.
        // 2. Headers
        // 3. Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().
        // 4. Mode
        // 5. Credentials
        // 6. Cache

    //8. Handling Errors
        //là một phương thức để bắt lỗi của server đó là catch()
        //không bắt được tất cả các trường hợp lỗi
        //chỉ bắt dc các case như network error hay invalid host address etc

        //Ví dụ 1:
            fetch('https://invalid-host-address/posts')
                .then((res) => res.json())
                .then(data => console.log(data))
                .catch(error => console.log('Error:', error));
            // Error: TypeError: Failed to fetch

        //Ví dụ 2: Trường hợp lỗi invalid URL (404)

            fetch('https://jsonplaceholder.typicode.com/no-such-page')
            .then((res) => { 
                console.log(res.status); // 404
                return res.json();
            })
            .then(data => console.log('Success:', data))
            .catch(error => console.log('Error:', error));

            Kết quả vẫn là success  
            // Success: {}
        
        //Ví dụ 3: Nếu muốn Handle được những lỗi mà catch() không bắt được thì bạn cần xử lý thêm
            fetch('https://jsonplaceholder.typicode.com/no-such-page')
            .then((res) => { 
                if(!res.ok) {
                    throw new Error('An Error Occured');
                }
                return res.json();
            })
            .then(data => console.log('Success:', data))
            .catch(error => console.log('Failed:', error));
        
//5. Axios Library
    //1. Định nghĩa
        //là thư viện để xử lý HTTP request / response với JS.
        //cung cấp thêm các tính năng nâng cao như interceptors, cancel request, bảo vệ khỏi tấn công xsrf từ client..

    //2. Cài đặt
        //npm install axios

    //3. Ví dụ 1:
        import axios from 'axios'
        ...

        const handleFetchPokemon = async () => {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                console.log(response);
        }

    //4. 

    


//6. Async-Await syntax syntax
    //1. Định nghĩa
        //được dùng để thay thế  then() trong Fetch API
        //là tính năng của Javascript, kp Reactjs
        // 
    //2. Ví dụ:
    const handleFetchPokemon = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		const data = await response.json();
		console.log(data);
		setPokemons(data.result)
    }

    //3. Handling error trong async/await: try - catch
    async function fethHandler() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let posts = await response.json();
            if(!response.ok) {
            const error = new Error('An Error Occured');
            error.details = posts;
            throw error;
            }
            console.log(posts);
        } catch(e) {
            console.log(e.message); // An Error Occurred
            console.log(e.details); // prints response got from server
        }
    }
        
    fethHandler();


//6. Xử lý trạng thái “Loading” và xử lý lỗi khi gọi dữ liệu API




//7.  