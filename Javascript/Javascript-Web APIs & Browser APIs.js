// Web APIs & Browser APIs

//1. HTML Web Storage
    //1.1 Cách mở:
    //F12 >> Application >> Local / Session Storage

    // 1.2 Định nghĩa:
    /*Local storage:
        - giúp website lưu trữ dữ liệu vĩnh viễn trên trình duyệt 
        - Lưu cặp data: <key> + <value>
        - truyền dữ liệu là string
        - array, preference không phải string => convert về string
    */
    /*Session storage (~ Local storage)
        - Lưu cặp data: <key> + <value> 
        - Cho phép lưu trữ nhiều data(khoảng 10MB).
        - Mất dữ liệu khi đóng tab hoặc trình duyệt
    */    

    // 1.3 Thao tác lưu dữ liệu vào local Storage / session storage
        //Lưu dữ liệu: <key> + <value>
        localStorage.setItem ("name", "thy");
        localStorage.setItem ("address", "TPHCM");
        localStorage.setItem ("weight", "55")
        
        //Thay đổi => ghi đè lên
        localStorage.setItem ('Name'; "Hiếu")
        
        // Lấy dữ liệu ra => gọi hàm
        const value = localStorage.getItem ("address")
        console.log (value +10) //kiểu dữ liệu trả về string| null
        
        //xoá dữ liệu
        LocalStorage.clear()  //Xoá tất cả  
        LocalStorage.removeItem(‘name’) //xoá phần tử tên name
        
        //Kiểu dữ liệu
        localStorage.setItem ('favorites', ['a','b','c','d']) //k có lưu trực tiếp array ['a','b','c','d']; chỉ lưu favorites
        const favorites = localStorage.setItem ('favorites');
        console.log (favorites)

        localStorage.setItem ('pet', {type: 'cat', tên: 'kitty', age: "2" }) //lưu kiểu preference sẽ ra kết quả [Object Object]

//2. Javascript Objective Notation (JSON)
    /* 1. Định nghĩa
    - Là 1 string, khi phân tích (parse) => mảng || object
    - Công dụng:
        + Lưu trữ mảng, object dưới dạng 1 string
        + Dùng trong việc trao đổi data trong máy tính */
    
    //2. Ví dụ
        const favorites = ['money', 'sleeping', ' girl']
        const pet = {type: 'cat', name: 'Bob', age: 2};
        const users = [
            {id: 1, name: 'A', username: "user_a", password: '123456' }
            {id: 2, name: 'B', username: "user_b", password: '564123' }
        ]
        //a. biến đổi object | Array => String
        const favoritesJSON = JSON.stringify (favorites);
        console.log (favoritesJSON); // trả về kết quả là String, kp Object
        
        const petJSON = JSON.stringify (pet);
        console.log (petJSON); // trả về kết quả là String, kp Object

        const usersJSON = JSON.stringify (users);
        console.log(usersJSON); // trả về kết quả là String, được hiện thị theo dạng Array

        //b. biến đổi string (JSON) => object | Array
        const newPet = JSON.parse (petJSON)
        console.log (newPet) //KQ là object => có thể lấy các phần tử trong object đó

        const newFavorites = JSON.parse (favoritesJSON);
        console.log (newFavorites);

        //c. lưu "users" vào trong Local storage
        //biến đổi "users" => JSON
        const usersJSON = JSON.stringify (users);
        localStorage.setItem ('users', usersJSON);
        console.log(usersJSON);

        //d.lấy users từ local storage
        const value = localStorage.getItem ('users');
        const newUsers = JSON.parse (value);
        console.log (newUsers)

//3. Location và History  
    //1. Location.href //Lấy địa chỉ hiện tại của ứng dụng.
    //2. Location.hostname // Lấy tên miền của ứng dụng hiện tại.
    //3. Location.pathname //Lấy tên miền của ứng dụng (không bao gồm tên miền)
    //4. Location.assign(<new_web_url>) //Đi đến 1 trang mới
    //5. History: lưu trong trình duyệt, tắt trình duyệt => auto clear
    //6. History.forward ()//bấm vào nút forward
    //7. History.back () // bấm vào nút back

//4. Timer: setTimeOut và setInterval
    const $starTimerbtn = document.getElementById ('startTimerbtn')
    const $pauseTimerbtn = document.getElementById ('pauseTimerbtn')
    const $resetTimerbtn = document.getElementById ('resetTimerbtn')
    let timer = null;
    $starTimerbtn.onclick = function () {
        setInterval ( () => {
            let value = $seconds.innerHTML;
            $seconds.innerHTML = value - 1; //value--1 thì vô nghĩa
            //hoặc $seconds.innerHTML = value--; 
        }, 1000);
    }

    $starTimerbtn.onclick = function () {
        timer.setInterval ( () => {
            let value = $seconds.innerHTML;
            value = value - 1; 
            $seconds.innerHTML === value;
        }, 1000);
        if( value === 0) {
            clearInterval (timer)
        }
    }
    $pauseTimerbtn.onclick = function (){
        clearInterval (timer)
    }
    $resetTimerbtn.onclick = function () {
        clearInterval (timer)
        $seconds.innerHTML = 10;
    }