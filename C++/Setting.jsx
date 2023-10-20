//Bước 1: Mở Terminal, cd đường dẫn vào file 
//Bước 2: Tạo folder, 
    // mkdir projects
    // cd projects
    // mkdir helloworld ((tạo folder hello world)
    // cd helloworld
    // code .
//Nếu đúng, sẽ hiển thị 3 files:
    //1. tasks.json (build instructions)
    //2. launch.json (debugger settings)
    //3. c_cpp_properties.json (compiler path and IntelliSense settings)

//Bước 3: Tạo file C++ (helloworld.cpp) trong folder Hello World
    // #include <iostream>
    // #include <vector>
    // #include <string>

    // using namespace std;

    // int main()
    // {
    //     vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};

    //     for (const string& word : msg)
    //     {
    //         cout << word << " ";
    //     }
    //     cout << endl;
    // }
//Run helloworld.cpp
    //1. Mở file helloworld.cpp => Bấm Mũi tên next to Run button bên góc phải => Chọn Run C++ file => C/C++: g++.exe build and debug active file
    //2. Mở terminal => sẽ thấy đang chạy, thành công thì sẽ thấy dòng "Hello C++ World from VScode and C++ Extensions"

//Sửa lỗi trong HelloWorld.cpp
    //Bấm Mũi tên next to Run button bên góc phải => Debug C++ file => C/C++: g++.exe build and debug active file