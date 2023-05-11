//BUỔI 10: DOM & EVENT
//1. Document Object Model (DOM)
    // - thể hiện các phần tử trên trang web dưới dạng các Objects
    // - Document => Root element: <html> =>
    //     + Element: <head>
    //     + Element: <body>

//2. Chức năng của DOM:
    //1. Tìm kiếm và truy xuất các phần tử trong tài liệu HTML hoặc XML, 
        //các phương thức như `getElementById`, `getElementsByClassName`, `getElementsByName`, `getElementsByTagName`, and `querySelectorAll`.

    //2. Thay đổi nội dung và cấu trúc của các phần tử trong tài liệu HTML hoặc XML
    //Ví dụ: thêm, sửa đổi hoặc xoá các phần tử hoặc các nội dung bên trong các phần tử 
        //Các phương thức như `createElement`, `appendChild`, `removeChild`, và `replaceChild`.

    //3. Thao tác với các thuộc tính của các phần tử 
    // Vd: 
    //- Sửa đổi kiểu dáng của các phần tử bằng cách thêm hoặc xoá các lớp CSS hoặc các thuộc tính CSS
    //- Thay đổi các thuộc tính khác như thuộc tính `title`, 
    //- Xử lí các sự kiện như sự kiện click hoặc submit 
        //Các phương thức lắng nghe sự kiện như `addEventListener`.

    //4.Thao tác với cấu trúc tài liệu
    //Ví dụ:
    //- Tạo ra các nút DOM một cách động, cấu trúc tài liệu một cách động dựa trên dữ liệu nhận được từ máy chủ
    //- Tạo ra các tài liệu mới hoàn toàn từ các đối tượng DOM.

//3. Phương thức phổ biến trong DOM
    //1. getElementById(id): Lấy phần tử với giá trị ID cụ thể.
        const element = document.getElementById('myId');

    //2. getElementsByClassName(className): Lấy danh sách các phần tử chứa lớp CSS cụ thể.
        const elements = document.getElementsByClassName('myClass');

    //3. getElementsByTagName(tagName): Lấy danh sách các phần tử với tên thẻ cụ thể.
        const elements = document.getElementsByTagName('div');

    //4. querySelector(selector): Lấy phần tử đầu tiên được chọn bằng cách sử dụng CSS hoặc kiểu chọn.
        const element = document.querySelector('.myClass');

    //5. querySelectorAll(selector): Lấy danh sách các phần tử được chọn bằng cách sử dụng CSS hoặc kiểu chọn.
        const elements = document.querySelectorAll('div.myClass');

    //6. createElement(tagName): Tạo một phần tử với tên thẻ cụ thể.
        const element = document.createElement('div');  

    //7. appendChild(childElement): Thêm một phần tử con vào phần tử hiện tại.
        const parent = document.getElementById('parent');
        const child = document.createElement('div');
        parent.appendChild(child);

    //8. removeChild(childElement): Xoá phần tử con khỏi phần tử hiện tại.
        const parent = document.getElementById('parent');
        const child = document.getElementById('child');
        parent.removeChild(child);

    //9. setAttribute(attributeName, value): Thiết lập giá trị thuộc tính cho phần tử cụ thể.
        const element = document.getElementById('myId');
        element.setAttribute('class', 'myClass');
    
    //10. getAttribute(attributeName): Lấy giá trị của thuộc tính cụ thể cho phần tử.
        const element = document.getElementById('myId');
        const classNames = element.getAttribute('class');
    
    //11. addEventListener(event, function): Thêm một trình xử lý sự kiện cho phần tử.
        const button = document.getElementById('myButton');
        button.addEventListener('click', function() {
        // Code xử lý sự kiện
        });
    //12. createElement (`tagname`): Tạo ra 1 phần tử HTML mới (vd: tagname (li, span,...))
        const newDiv = document.createElement('div'); // Tạo ra 1 thẻ div mới
        newDiv.setAttribute('class', 'box'); //Thêm thuộc tính: "class"; giá trị: "box"
        newDiv.textContent = 'This is a new div element.'; //Thêm nội dung phần tử
        //KQ trong HTML: <div class= "box"> This is a new div element. </div>

        //Thêm  id = "container" vào phần tử "newDiv" => appendchild
        const container = document.getElementById('container');
        container.appendChild(newDiv);



//4. Truy xuất phần tử của id, class
    // a/ Truy xuất phần tử thông qua id (document.getElementById)
        window.onload = function () { //khi window chạy thì load những dòng 'big-title'
            const $title = document.getElementById ('big-title')
            console.log ($title)
        }
        // Lưu ý: trong html khi console.log ra null => trong html, để <script></script> cuối cùng trước khi kết thúc chương trình

    // b/Truy xuất phần tử thông qua class (document.getElementsByClassName)
        const $paragraphs = document.getElementsByClassName ('red-paragraph');
        for (const $paragraphs of $paragraphs) {
            console.log ($paragraphs); } //làm tương tự như for (let i = 0;...
        
        //Lấy phần tử bên trong 'red-paragraph':
        for (const $paragraphs of $paragraphs) {
            console.log ($paragraphs.children);
        } 
        console.log ($paragraphs); //nhiều class => paragraphs

    // c/ Truy xuất phần tử thông qua tên thẻ (document.getElementsByTagName)
        const $images = document.getElementsByTagName ('img');
        console.log ($images) //trả về html collection img

//5. Thay đổi phần tử: nội dụng, thuộc tính, định dạng
    //a/ lấy ra nội dung của phần tử:
    let titleContent =$title.innerHTML;
    console.log (titleContent)

    //b/ Thay đổi nội dung:
    $title.innerHTML = "Nội dung mới"; //không cần console.log (gán giá trị cho 1 thuộc tính)

    //c/ Lấy ra thuộc tính của 1 phần tử => $title.getAttribute ('Tên thuộc tính')
    let titleAttributeValue = $title.getAttribute ('data-hello');
    console.log (titleAttributeValue)

    //d/ Thay đổi/thêm mới thuộc tính của 1 phần tử => $title.setAttribute
    $title.setAttribute('data-goodbye', 'this is goodbye')
    $title.setAttribute ('data-hello', 'This is hello')

    //e/ Xoá thuộc tính của 1 phần tử => $title.revmoveAttribute()
    $title.removeAttribute ('data-goodbye')

    //f/ Thay đổi định dạng: thêm $title.style.color/display/....
    $title.style.color = "red";
    $title.style.backgroundColor = 'black';
    $title.style.display = "flex";
        //hoặc
    $title.setAttribute('style','color:red, background-color:blue')
        //hoặc
    for (const $p of $paragraphs) {
        $p.style.color = 'red'; //không trỏ vào html collection
    }
        //hoặc
    $paragraphs[0].style.color = "blue";

// 6. Thêm/Xoá phần tử trên trang web
    //a/ Thêm phần tử:
        //Bước 1: tạo
        const $link = document.createElement ('a');
        $link.innerHTML = "This is link to somewhere";
        $link.setAttribute ('href', 'https://www.google.com.vn/')
        //Bước 2:
        document.body.append ($link) //append: thêm vào cuối
        document.body.prepend ($link) //prepend: thêm vào đầu

        $title.append ($link) //thêm vào đầu thẻ h1
        $title.after ($link) //thêm $link vào sau $title
        $title.before($link) //thêm $link vào trước $title
        $title.append($link) //thêm $link vào trong $title

    //b/ Xoá phần tử:
        $title.parentElement.remove(); //xoá hết body
        $title.remove ();

//7. Xử lý sự kiện xảy ra trên trang web (vd: click chuột, kéo thả chuột,...) 
    //1. EVENT: Là sự kiện xảy ra trên trang Web */

    /*2. LISTENERS
    - Các function được xảy ra khi 1 event nào đó xuất hiện:
        + Khi click vào nút "hello" => Thông báo "Bạn đã click vào hello button"
        + Khi di chuột vào ảnh => Phóng to ảnh lên
    */ 
    //3. Thao tác Event và Listeners
        /*Cách 1: 
        - sử dụng thuộc tính: onclick trong html
        - (khi nhập trên bàn phím thì alert) this thể hiện giá trị vừa nhập trên bàn phím */

        // Cách 2:
        $title.onclick = function (){
            console.log (`Vừa click vào title`)
        }
        //hoặc
        function handleClickTitle (){
            console.log (`Vừa click vào title`)
        }
        //hoặc
        $title.onclick = handleClickTitle1;
        $title.onclick = handleClickTitle2;
        function handleClickTitle1 (){
            console.log (`Vừa click vào title`)
        }
        function handleClickTitle2 (){
            console.log (`Hello`)
        }
        KQ: Hello => ghi đè (handleClickTitle2 đè lên handleClickTitle1)

        //Cách 3: không phải ghi đè
        $title.addEventListener ('click',handleClickTitle1);
        $title.addEventListener ('click',handleClickTitle2);
        function handleClickTitle1 (){
            console.log (`Vừa click vào title`)
        }
        function handleClickTitle2 (){
            console.log (`Hello`)
        }
        //Không ghi đè => thể hiện cả 2 thuộc tính

//8. Ví dụ chung cho getElementbyID; addEventListener; onclick
    //VÍ DỤ 1:
    //Cách 1:
        const $emailInput = document.getElementById ('my-email');
        $emailInput.onchange = function () {
            let email = $emailInput.value; // lấy giá trị nhập vào của ô input
            let emailValid = isEmailValid(email)
            if (!emailValid) alert (`Hãy nhập lại email`) // Nếu không phải email thì hiện "Hãy nhập lại email"
        }
    //Cách 2
        $emailInput.addEventListener ('change', function(){
        });

        function isEmailValid (email) {
            return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }

    //VÍ DỤ 2:
    const $numberA = document.getElementById('number-a')
    const $numberB = document.getElementById('number-b')
    const $plusbutton = document.getElementById('plus-btn')
    const $minusbutton = document.getElementById('minus-btn')

    $plusbutton.onclick = function () {
        let a = Number( $numberA.value);
        let b = Number ( $numberB.value);
    }
    $minusbuttonus.onclick = function () {
        let a = Number($numberA.value);
        let b = Number ($numberB.value);
    }   
//THUỘC TÍNH CỦA DOM
//10. Thuộc tính của DOM- QuerySelector: 
    //1.Định nghĩa:
    //trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.

    //2. Các loại QuerySelector:
    document.querySelector('.btn') // class name
    document.querySelector('#root') // id name
    document.querySelector('button') // tag name
    document.querySelector('div span') // theo kiểu css

    //3. Ví dụ: tìm phần tử div đầu tiên và cho chữ màu đỏ.
    var firstDiv = document.querySelector('div')
    firstDiv.style.color = 'red'

//11.Thuộc tính của DOM- QueryselectorAll:
    //1.Định nghĩa: 
    //Trả về tất cả các phần tử bên trong khớp với bộ chọn CSS. Kết quả được trả về dưới dạng một đối tượng NodeList object.
    
    //2. Ví dụ: tìm tất cả các phần tử p và cho chữ sang màu đỏ
    const paragraphs = document.querySelectorAll('p')
    for(var p of paragraphs) {
    p.style.color = 'red'
    }
//12. Thuộc tính của DOM- Element.ClassList.remove/.add/.....
    //1. Định nghĩa:
    // cung cấp các phương thức để thao tác với các lớp (class) của phần tử HTML đó.

    //2. Ví dụ:
    <div id="myDiv" class="one two three"></div> //HTML
        //a. `add(className)`: Thêm một lớp mới vào phần tử.
            const myDiv = document.getElementById('myDiv');
            myDiv.classList.add('four');
            // <div id="myDiv" class="one two three four"></div>

        //b. `remove(className)`: Xoá một lớp hiện có khỏi phần tử.
            const myDiv = document.getElementById('myDiv');
            myDiv.classList.remove('two');
            // <div id="myDiv" class="one three"></div>
        
        //c. `toggle(className)`: 
            //- Nếu lớp `className` hiện tại không tồn tại trên phần tử, thì thêm lớp đó vào
            //- Nếu lớp `className` đã tồn tại trên phần tử thì xoá lớp đó đi.
            const myDiv = document.getElementById('myDiv');
            
            myDiv.classList.toggle('two'); // Xoá lớp "two" ra khỏi phần tử
            // <div id="myDiv" class="one three"></div>
            
            myDiv.classList.toggle('two'); // Thêm lớp "two" vào phần tử
            // <div id="myDiv" class="one three two"></div>

        //d. `contains(className)`: Kiểm tra xem lớp `className` có tồn tại trên phần tử hay không.
            const myDiv = document.getElementById('myDiv');
            if (myDiv.classList.contains('one')) {
            console.log('myDiv has class "one"');
            }


//================================================================================================
//Tóm tắt thuộc tính của DOM
// 1. element.getElementById	=> tìm phần tử theo "ID"
// 2. element.getElementsByName	=> tìm phần tử theo "Name"
// 3. element.getElementsByTagName => => tìm phần tử theo tag "p" "div"
// 4. element.getElementsByClassName => => tìm phần tử theo "Class"
// 5. element.childNodes : trả về mảng các phần tử con của nó
// 6. element.firstChild : phần tử con đầu tiên
// 7. element.lastChild : phần tử con cuối cùng
// 8. element.hasChildNodes : trả về true nếu có phần tử con, ngược lại là false
// 9. element.nextSibling : phần tử cùng cấp tiếp theo
// 10. element.previousSibling : phần tử cùng cấp trước
// 11. element.parentNode : trả về nút cha

// 12. CSS Pseudo-Elements (::) vs Pseudo-Class (:)
    /* A. CSS Pseudo-Class (":")
        - selector:hover{}: di chuyển chuột vào đường dẫn
        - selector:link{}: dường dẫn khi chưa click 
        - selector:active{}: đường dẫn đã chọn
        - selector:first-child{}: kết nối một phần tử “đầu tiên” của phần tử khác.
        - selector:visited{}: Chọn tất cả liên kết đã truy cập
        - selector:lang{}: cho phép bạn định nghĩa một quy tắc đặc biệt cho các ngôn ngữ khác.
        - selector:root{}: Chọn phần tử gốc của tài liệu

    B. CSS Pseudo-Elements ("::")
        - selector::before{}:  sử dụng để thêm text, hình ảnh hay bất kỳ nội dung gì phía trước nội dung của phần tử được chọn
        - selector::after{}: được sử dụng để thêm nội dung nhưng là vào phía sau phần tử được chọn.
        - selector::selection{}: dùng để style cho một vùng văn bản được người dùng chọn (hay còn gọi là "bôi đen"). [Thuộc tính css khả dụng: color, background, curso, và outline]
        - selector::first-line{}: dùng để style cho dòng đầu tiên của phần tử được chọn
        - selector::first-letter{}: dùng để thêm style đặc biệt vào chữ cái đầu tiên của văn bản.
    */