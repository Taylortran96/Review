//ARRAY
/*1. Array (mảng):
- Mỗi phần tử trong array có 1 index
- Phần tử đầu tiên có index = 0
- Dùng array liên quan tới danh sách; tập hợp
vd: Tìm số lớn nhất, sắp xếp tăng dần, tính tổng doanh thu, vẽ biểu đồ, tính điểm trung bình
*/

//2. Khai báo array:
    // let array1 = [] // không có phần tử nào >> block
    // let array2 = [<Phần tử 1>, <Phần tử 2>, ...];
    // let array3 = new Array (1,2,3,4);
    
    // ví dụ 1: khai báo array
    let names1 = [
        "IU"
        "Taylor"
        "Swift"
        "John"
        ] console.log(names1)
    
        // ví dụ 2: khai báo array
        const cars = [];
        cars[0]= "Saab";
        cars[1]= "Volvo";
        cars[2]= "BMW";
        
        // ví dụ 3: khai báo array
        const cars = new Array("Saab", "Volvo", "BMW");
    
    //3. Truy cập các phần tử trong Array
        let letters = ["a", "b", "c"];
        console.log(letters[0]); // a
        console.log(letters[1]); // b
        console.log(letters[2]); // c
        console.log(letters[-3]); // undefined
    
    //4. Thay đổi/Thêm phần tử trong Array
      //4.1 Thay đổi
          let letters = ["a", "b", "c"];
          letters[0] = "A"; // thay đổi giá trị của mảng tại chỉ số 0
          console.log(letters[0]); // A
      //4.2 Thêm phần tử
          let letters = ["a", "b", "c"];
          letters[3] = "d"; // thêm phần tử vào mảng tại chỉ số 3
          console.log(letters); // Kq: ["a", "b", "c", "d"]
    
    //5. Kiểm tra dữ liệu của array?
        let array1 = ['a';'b';'c']
        let array2 = ['a';'b';'c']
        let array3=array1;
        console.log (typeof (array1)) //KQ: objective
        console.log (array1 + array2) // a,b, ab // chương trình tự động ép kiểu mảng về string khi thực hiện phép cộng  
        console.log (array1 == array2) //KQ: false
        console.log (array1 == array3) //KQ: True. Tuy nhiên, nguy hiểm không nên dùng
    
    //6. Hoán đổi giá trị của 2 index trong array
        let tmp = names1[0];
        names1 [0] = names1 [3];
        names1 [3] = tmp;
        console.log(names1)
    
    //8. Trả về string chưa các index của array
        let letters = ["a", "b", "c"];
        console.log(letters.toString()); // a,b,c
        let letters = ["a", "b", "c"];
        console.log(letters.toString()); // a,b,c
    
        console.log([1, 2] + 3); // 1,23
    
    //5. PROPERTY CỦA ARRAY: LENGTH (đưa ra độ dài của mảng)
        //Ví dụ 1:
        var foo = [];
        console.log(foo.length) // KQ = 0
    
      //Ví dụ 2:
        var number = [1, 2, 3];
        number[9] = 9;
        number[-3] = 'so am';
        number['string'] = 'String';
        console.log(number.length); // 10
        console.log(number); // [ 1, 2, 3, empty * 6, 9, '-3': 'so am', string: 'String']
    
      //Ví dụ 3: 
      //Giá trị của length bằng chỉ số lớn nhất trong mảng cộng thêm 1 đơn vị
            let arr = [];
            arr[1000] = "a";
            console.log(arr.length); // Kq = 1001
    
      //Ví dụ 4: 
      // Thuộc tính của length is writable => bạn có thể thay đổi giá trị của thuộc tính length.
            let letters = ["a", "b", "c"];
            console.log(letters.length); // 3
    
        // giảm length xuống thành 2
            letters.length = 2;
            console.log(letters); // (2) ['a', 'b']
    
        // tăng length thành 5
            letters.length = 5;
            console.log(letters[2]); // undefined - giá trị cũ là "c"
    
    /*5. Duyệt Array:
      - duyệt qua từng index trong array
      - tiền đề cho các thao tác: tìm kiếm, lọc, biến đổi,
      - dùng vào lặp (loop):
      Loop 1: for (let i=0; i <arr.length, i++)
      Loop 2: for (const item of arr)
      Loop 3: for (let i in arr) [***Không tối ưu cho array, không nên dùng] */
    
      //Ví dụ 1:
        const numbers = [1,7,8,-3,6,10,9]
        // in ra số chẵn trong numbers
        for (let i = 0; i < numbers.length; i++){
            const number = numbers[i]; //khai báo các phần tử trong numbers
            if(number%2 ==0) console.log(number); /// KQ có 8,6,10 : 2 >> có số dư = 0
        }
      // ví dụ 2: tính tổng
        const sum = 0;
        for (let i = 0; i < sum.length; i++){
            const number = numbers [i];
            sum+= number;
        }
        console.log(sum)
    
      // Ví dụ 3: tìm phần tử nhỏ nhất
        const min = numbers [0];
        for (let i = 0; i < numbers.length; i++){
        const number = numbers 
        if ( min > number) min = number;
        }
        console.log(min)
    
    //6. Mảng nhiều chiều
      let matrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ];
        // truy cập phần tử ở hàng 1, cột 1
        console.log(matrix[1][1]); // 5
    
    /*7. Mỗi liên hệ giữa Array vs Object
      - index ở array tương đương key của object. (Truy cập vào index của array arr[index] = object[key])*/
      
      // Ví dụ:
        let letters = ["a", "b", "c"];
        let copied = letters;  // giá trị của copied hoàn toàn giống letters
        console.log(copied); // (3) ['a', 'b', 'c']
    
        // khi thay đổi giá trị của copied
        copied[1] = "new value";
    
        // giá trị của letters cũng thay đổi
        console.log(letters[1]); // new value
    