/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */
// Khai báo biến thể hiện họ của anh/chị
const firstName = "Nguyen";
// khai báo biến thể hiện tên của anh/chị 
const lastName = "Thanh Dat";
// Khai báo biến thể hiện tuổi của anh/chị
let myAge = 25;
// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
myAge = myAge + 1;
console.log(myAge);
// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
console.log(`My full name is ${firstName} ${lastName}, I'm ${myAge} years old`);
// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không
let isDeveloper = true;

/* Phần 2: Phép toán */
// Tạo 2 biến a và b là 2 số
let a = 3;
let b = 2;
// Cộng 2 số a và b và in ra kết quả
console.log(`So a: ${a}; So b: ${b}`);
console.log(`a + b = ${a+b}`);
// Lấy số a trừ số b và in ra kết quả
console.log(`a - b = ${a-b}`);
// Bình phương số a và in ra kết quả
console.log(`a ^ 2 = ${a*a}`);
// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
let c = 5;
console.log(`c % 2 = ${c%2}`);
// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
let d = 12;
d += 1;
console.log(`d++ = ${d}`);
// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
let e = 12;
e -= 2;
console.log(`d -= ${e}`);

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
let number1 = 5;
let number2 = "5";
// In ra màn hình kết quả so sánh number1 == number2
console.log(`${number1 == number2}`);
// In ra màn hình kết quả so sánh number1 === number2
console.log(`${number1 === number2}`);
// Giải thích sự khác nhau giữa so sánh == và ===
        // Toán tử == ép kiểu rồi so sánh, toán tử === ko ép kiểu mà so sánh kiểu và giá trị của đối tượng so sánh`);
// Khai báo 2 biến x = true, y = false
let x = true;
let y = false
// In ra màn hình kết quả của logic x && y
console.log(`${x && y}`);
// In ra màn hình kết qủa của logic x || y
console.log(`${x || y}`);
// Giải thích sự khác nhau giữa && và ||
        // Toán tử && chỉ true khi các phần tử của nó đều true, || chỉ false khi các phần tử của nó đều false
// In ra màn hình kết quả của logic x && !y
console.log(`${x && !y}`);
// Giải thích tại sao x && !y lại cho ra kết qủa true
        // ! là phủ định, !y là phủ định của y, phủ định của false là true


// =============================================================================

// Bài 1: tạo biến age với giá trị tuổi của bạn
const myAge = 28;
// Bài 2: tạo biến name với giá trị là tên của bạn
const myName = "Thy";
// Bài 3: tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
const greeting = `Hello, My name is ${myName}, ${myAge} years old!`;
// Bài 4: Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
console.log("check Hello: ", greeting.toLowerCase().includes('HeLlo'.toLowerCase()));

// Bài 5: Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
const sayHi = greeting.replace("Hello", "Hi");
console.log("sayHi: ", sayHi);

/* Bài 6:
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
const mark = 9.7;
console.log(Math.ceil(mark));
console.log(Math.floor(mark));

// Bài 7: Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
const edge = 5;
console.log(edge * edge);

/* Bài 8:
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/
if (myAge >= 18) {
    console.log ("Bạn đã đủ tuổi lái xe")
}
else if (myAge <= 18) {
    console.log ("Bạn chưa đủ tuổi lái xe")
} 

// Bài 9:Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
const numberInput = Number(prompt("Nhập số: "));
switch (numberInput % 2) {
    case 0:
        alert(`${numberInput} là số chẳn`);
        break;
    case 1:
        alert(`${numberInput} là số lẻ`);
        break;
    default:
        alert("Không phải số hoặc không phải là số nguyên");
        break;
}

// Bài 10: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
for (let i = 1; i <= 100; i++) console.log(i); 

// Bài 11: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
for (let j = 100, i >= 1; i--) console.log(j)

// Bài 12: Cho số nguyên n bất kì, in các số chẵn từ 1..n
const n = 10;
for (let i = 1; i <= n; i++) if (i % 2 === 0) console.log(i);

// Bài 13: Cho số nguyên n bất kì, in các số lẻ từ 1..n
const n = 10;
for (let i = 1; i <= n; i++) if (i % 2 !== 0) console.log(i);

// Bài 14: Cho số nguyên n bất kì, tính tổng các số từ 1..n
const n = 4;
let sum = 0;
for (let i = 1; i <= n; i++) sum += i;
console.log(sum);

// Bài 15: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
const n = 4;
let sum = 0;
for (let i = 1; i <= n; i++) sum += i * (i + 1);
console.log(sum);

// Bài 16: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
const n = 2, m = 3;
let result = 1;
for(let i = 0; i < m; i++) result *= n;
console.log(result);

// Bài 17: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
const n = 3;
let result = 1;
for (let i = 1; i <= n; i++) result *= i;
console.log(result);

// Bài 18: Vẽ tam giác có dạng sau:
    //A. Hình 1:
        // *
        // **
        // ***
        // ****
        // *****
        if(number==1 && number == 10) return true;
        function numberOneTriangle(number){
            //in ra số cột (là number) => dòng for để xuống dòng
            for (let i = 1; i<= number;i++){ 
                let str = "";
                //chạy the hàng ngang, theo hướng tăng dần
                for (let j =0; j < i; j++) {
                    str += "*";
                }
            document.write(`<div>${str}</div>`) //tạo div trong html
            }
        }
        numberOneTriangle (11);
        
    //B. Hình 2:
        // *****
        // ****
        // ***
        // **
        // *
    const n = 5;
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n - i; j++) {
            str += '*';
        }
        console.log(str);
    }



// Bài 19: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD:
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>

const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
let guess = Number(prompt('Nhập số: '));
let count = 1;

while (guess !== randomNumber) {
    count++;
    guess = Number(prompt('Bạn đã đoán sai! Thử lại: '));
}

alert(`
Bạn đã đoán đúng!
Số được chọn là: ${randomNumber}
Số lần bạn đoán là: ${count}
`);


//Bài 20: Find the sum of all elements.
const arr1 = [1, 2, 3, 4, 5];

//Bài 21: Remove duplicates from an array.
let arr2 = [1, 2, 2, 4, 5, 5, 6];

//Bài 22: Find the index of a specific element in an array.
const arr3 = ['iOS', 'Android', 'WindowPhone'];

//Bài 22: Reverse an array.
const arr4 = [1, 2, 3, 4, 5, 6];

//Bài 23: Filter out even numbers from an array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Bài 24: Find the maximum and minimum values in an array of numbers.
const arr6 = [1, -3, 99, 120, 50, 15];

//Bài 25: Find the common elements between two arrays.
const arr7 = [1, 2, 3, 5, 9];
const arr8 = [2, 4, 1, 9, 0];

//Bài 26: Map an array of numbers to their squares.
const arr9 = [1, 2, 3, 4, 5];


// ==============================================================================
// ARRAY

/*
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam
    - 4/ Viết function tính tổng tuổi của tất cả developer
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng 
    - 6/ Viết function tìm ra developer có nhiều skills nhất
    - 7/ Viết function tìm ra những developer nào có skill là JS
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS  
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất  
    - 10/ Viết function trả về 1 object có dạng 
    {
        males: [{...}],
        females: [{...}]
    }
    Trong đó:
        + males là mảng tất cả các developers có gender là male
        + females là mảng tất cả các developers có gender là female
    
*/
const developers = [
    {
        name: "Nguyễn Văn Tí",
        age: 22,
        gender: 'male',
        skills: ['JS', 'Java', 'C#', 'HTML', 'CSS']
    },
    {
        name: "Nguyễn Văn Tèo",
        age: 25,
        gender: 'male',
        skills: ['Swift', 'Java', 'Kotlin', 'JS']
    },
    {
        name: "Nguyễn Thị Đào",
        age: 19,
        gender: 'female',
        skills: ['C++', 'Go', 'Rust']
    },
    {
        name: "Nguyễn Thị Hoa",
        age: 21,
        gender: 'female',
        skills: ['JS', 'TS']
    },
    {
        name: "Nguyễn Văn Linh",
        age: 18,
        gender: 'male',
        skills: ['Python', 'SQL']
    },
    {
        name: "Nguyễn Thị Hồng",
        age: 23,
        gender: 'female',
        skills: ['Assembly', 'C', 'C++']
    }
];
//Câu 1:
    //Cách 1:
    function oldestDev() {
        let _oldestDev = developers[0];
        for (let i = 1; i < developers.length; i++)
            if(developers[i]['age'] > _oldestDev['age']) _oldestDev = developers[i];
        console.log(_oldestDev);
    }
    oldestDev();

    //Cách 2:
    function findMaxAgeDeveloper(developers = []) {
        if (!Array.isArray(developers) || !developers.length) return;

        let maxAgeDeveloper = developers[0];
        developers.forEach((developer) => {
            if (developer.age > maxAgeDeveloper.age) maxAgeDeveloper = developer;
        });
        return maxAgeDeveloper;
    }

    //Cách 3:
    function findOldestDeveloper(developers) {
        let oldestDeveloper = developers[0];
        for(let i = 1; i < developers.length; i++) {
          if(developers[i].age > oldestDeveloper.age) {
            oldestDeveloper = developers[i];
          }
        }
        return oldestDeveloper;
      }
      
//Câu 2:
    //Cách 1:
    console.log(developers.sort(function(a,b){return a['age']-b['age'];}));

    //Cách 2:
    function sortDevelopersByAge(developers) {
        return developers.sort(function(a, b) {
          return a.age - b.age;
        });
      }
      
//Câu 3:
    //Cách 1:
    const checkGender = (value)  => {
        return value['gender'] == "male";
        };
        console.log(developers.filter(checkGender));
    
    //Cách 2:
    function findMaleDevelopers(developers) {
        return developers.filter(function(developer) {
          return developer.gender === "male";
        });
      }      

//Câu 4:
    //Cách 1:
    function totalAge() {
        let sum=0;
        for(let i=0; i<developers.length; i++) sum += developers[i]['age'];
        alert(sum);
        }
        totalAge();
    //Cách 2:
    function sumOfDeveloperAges(developers) {
        let totalAge = 0;
        for(let i = 0; i < developers.length; i++) {
          totalAge += developers[i].age;
        }
        return totalAge;
      }
       




//Câu 5:
    //Cách 1:
    function getAllSkills(developers = []) {
        if (!Array.isArray(developers) || !developers.length) return;
    
        const allSkills = developers.reduce((skills, developer) => {
            return skills.concat(developer.skills);
        }, []);
    
        return new Set(allSkills);
    }
    //Cách 2:
    const uniqueSkill = (arr1, arr2) => {
        for(let i=0; i<arr2.length; i++)
            if(!arr1.includes(arr2[i])) arr1.push(arr2[i]);
        return arr1;
        };
        const allSkills = () => {
        let tempArr = [];
        for(let i=0; i<developers.length; i++)
            uniqueSkill(tempArr, developers[i]['skills']);
        console.log(tempArr);
        }
        allSkills();

    //Cách 3:
    function collectAllSkills(developers) {
        let allSkills = [];
        for(let i = 0; i < developers.length; i++) {
          for(let j = 0; j < developers[i].skills.length; j++) {
            if(!allSkills.includes(developers[i].skills[j])) {
              allSkills.push(developers[i].skills[j]);
            }
          }
        }
        return allSkills;
      }
      

//Câu 6:
    //Cách 1:
    function mostSkill() {
        let _mostSkill = developers[0]
        for (let i = 1; i < developers.length; i++)
            if(developers[i]['skills'].length > _mostSkill['skills'].length) _mostSkill = developers[i];
        console.log(_mostSkill);
        }
        mostSkill();
    
    //Cách 2:
    function findDeveloperWithMostSkills(developers) {
        let mostSkillDeveloper = developers[0];
        for(let i = 1; i < developers.length; i++) {
          if(developers[i].skills.length > mostSkillDeveloper.skills.length) {
            mostSkillDeveloper = developers[i];
          }
        }
        return mostSkillDeveloper;
      }
      

//Câu 7:
    //Cách 1:
    const skillJS = (dev) => {
        return dev['skills'].includes("JS");
        };
    console.log(developers.filter(skillJS));

    //Cách 2:
    function findDevelopersWithJSSkills(developers) {
        return developers.filter(function(developer) {
          return developer.skills.includes("JS");
        });
      }
      

//Câu 8:
    //Cách 1:
    const devMaleJS = (dev) => {
        return dev['skills'].includes("JS") && dev['gender'] == "male";
    };
    console.log(developers.filter(devMaleJS));

    //Cách 2:
    function findMaleDevelopersWithJSSkill(developers) {
        return developers.filter(function(developer) {
          return developer.gender === "male" && developer.skills.includes("JS");
        });
      }
      

//Câu 9:
    //Cách 1:
    console.log(developers.sort(function(a,b){return b['skills'].length-a['skills'].length;}));

    //Cách 2:
    function sortDevelopersByNumberOfSkills(developers) {
        return developers.sort(function(a, b) {
          return b.skills.length - a.skills.length;
        });
      }
      

//Câu 10:
    //Cách 1:
    const devMale = (dev) => {
        return dev['gender'] == "male";
    }
    const devFemale = (dev) => {
        return dev['gender'] == "female";
    }
    console.log(developers.filter(devMale));
    console.log(developers.filter(devFemale));

    //Cách 2:
    function getGenderFiltered(developers = []) {
        if (!Array.isArray(developers) || !developers.length) return;

        return developers.reduce((object, developer) => {
            if (developer.gender === 'male') {
                object.males.push(developer);
            } else {
                object.females.push(developer);
            }
            return object;
        }, {
            males: [],
            females: []
        });
    }
    console.log(getGenderFiltered(developers));
