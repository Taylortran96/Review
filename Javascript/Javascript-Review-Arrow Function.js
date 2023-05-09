// ARROW: 
//1. Định nghĩa:
    /*
    - sử dụng ký tự "=>" 
    - Bỏ qua "return"
    - không định nghĩa giá trị this của riêng nó giống như function.
    - Thường sử dụng kèm với forEach, reduce, ....
    - Không có hoisting
    */
//2. Tính chất Regular Functions vs Arrow Function
    //2.1 Không sử dụng parameter
        //2.1.1. FUNCTION
        let prtLangReg = function () {
        console.log("JavaScript");
        }
        prtLangReg();

        //2.1.2.ARROW
        let prtLangArrow = _ => {console.log("JavaScript");}
        prtLangArrow();

    //2.2 Sử dụng một parameter
        //2.2.1. FUNCTION
        let prtLangReg = function (language) {
        console.log(language);
        }
        prtLangReg("JavaScript");
        
        //1.5.2.2. ARROW
        let prtLangArrow = (language) => { console.log(language); }
        prtLangArrow("JavaScript");

    //2.3 Sử dụng nhiều parameter
        //2.3.1. FUNCTION
        let prtLangReg = function (id, language) {
        console.log(id + ".) " + language);
        }
        prtLangReg(1, "JavaScript");
        
        //2.3.2. ARROW
        let prtLangArrow = (id, language) => { console.log(id + ".) " + language); }
        prtLangArrow(1, "JavaScript");

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