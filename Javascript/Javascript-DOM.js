//BUỔI 10: DOM & EVENT
//1. Document Object Model (DOM)
    // - thể hiện các phần tử trên trang web dưới dạng các Objects
    // - Document => Root element: <html> =>
    //     + Element: <head>
    //     + Element: <body>

//2. Chức năng của DOM:
    //1.1 Truy xuất phần tử trong trang 
        //Vd: Truy xuất phần tử có id ="..." 
        let $myTitle = document.getElementById ('my-title')
//3. Lưu ý:
    // - Id thì chỉ có 1
    // - Class thì 1 mảng (nhieu phần tử)


//4. Ví dụ: liên quan
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

//----------------------------------------
//VÍ DỤ 1:
const $emailInput = document.getElementById ('my-email');
$emailInput.onchange = function () {
    let email = $emailInput.value; // lấy giá trị nhập vào của ô input
    let emailValid = isEmailValid(email)
    if (!emailValid) alert (`Hãy nhập lại email`) // Nếu không phải email thì hiện "Hãy nhập lại email"
}
//hoặc
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

//Tất cả nhập từ bàn phím đều là string => thêm Number





















//1. Toggle: dùng để thực hiện luân phiên giữa việc hiện & ẩn một phần tử
//2. QuerySelector: trả về phần tử đầu tiên là phần tử con của phần tử mà nó được gọi ra khớp với nhóm bộ chọn được chỉ định.
document.querySelector('.btn') // class name
document.querySelector('#root') // id name
document.querySelector('button') // tag name
document.querySelector('div span') // theo kiểu css

// Ví dụ: tìm phần tử div đầu tiên và cho chữ màu đỏ.
var firstDiv = document.querySelector('div')
firstDiv.style.color = 'red'

//3. queryselectorAll: Trả về tất cả các phần tử bên trong khớp với bộ chọn CSS. Kết quả được trả về dưới dạng một đối tượng NodeList object.
// Ví dụ: tìm tất cả các phần tử p và cho chữ sang màu đỏ
const paragraphs = document.querySelectorAll('p')
for(var p of paragraphs) {
p.style.color = 'red'
}
//Element: classList
// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// 4. element.getElementById	=> tìm phần tử theo "ID"
// 5. element.getElementsByName	=> tìm phần tử theo "Name"
// 6. element.getElementsByTagName => => tìm phần tử theo tag "p" "div"
// 7. element.getElementsByClassName => => tìm phần tử theo "Class"
// 8. element.childNodes : trả về mảng các phần tử con của nó
// 9. element.firstChild : phần tử con đầu tiên
// 10. element.lastChild : phần tử con cuối cùng
// 11. element.hasChildNodes : trả về true nếu có phần tử con, ngược lại là false
// 12. element.nextSibling : phần tử cùng cấp tiếp theo
// 13. element.previousSibling : phần tử cùng cấp trước
// 14. element.parentNode : trả về nút cha


//Ví dụ
const element = document.querySelector('.example');

element.classList.add('new-class'); // thêm lớp CSS mới
element.classList.remove('old-class'); // xoá lớp CSS cũ
element.classList.toggle('active'); // bật hoặc tắt lớp CSS (nếu có)
element.classList.contains('example'); // kiểm tra lớp CSS có trong phần tử hay không
element.classList.replace('old-class', 'new-class'); // thay thế lớp CSS cũ bằng lớp CSS





// 10. CSS Pseudo-Elements (::) vs Pseudo-Class (:)
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