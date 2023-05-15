//1. Trong command
    //1. Check node.js có trên máy: Cmd => node -v && nmp -v 
    //2. Đọc các thông tin, tìm hiểu thêm các câu lệnh node.js: cmd => node -h
    //3. 

//2. Cài đặt thư viện
    //1. Icon: FontAwesome
        //A. Cài cmd
            npm install --save @fortawesome/fontawesome-svg-core
            npm install --save @fortawesome/free-solid-svg-icons
            npm install --save @fortawesome/react-fontawesome

        //B.Import
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
            import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
        //C. trong function
            <FontAwesomeIcon icon={faThumbsUp} />
    //2. Icon: ReactIcon
        // A. Cài cmd
            npm install react-icons --save
            npm install @react-icons/all-files --save
        // B.Import
            import { FaBeer } from 'react-icons/fa';
            import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
        //

//3.Trong Visual Studio code : Terminal (Ctrl + Shift + `)
    //1. Cài đặt tool: npm install -g create-react-app 
    //2. Tạo ứng dụng React: npx create-react-app my-react-app (my-react-app là tên folder)
    //3. Chạy ứng dung: cd my-react-app && npm start
    //4. Sửa lỗi khi xoá folder node.js xuất hiện error: "Error: EBUSY: resource busy or locked, rmdir C:\Users\SONY\OneDrive\Documents\GitHub\Class-Code-Intensive\Practices "
        //  Windows + R => Nhập "resmon.exe"
        // click OK to open resource monitor
        // In the monitor, navigate to CPU tab
        // Under Associated Handles in the search box, copy the path to the file or folder in question and paste it in there
            //Vd: tìm path netflix
        // Click on the search icon
        // See all the programs using the file or folder
            //C:\Users\SONY\OneDrive\Documents\GitHub\Class-Code-Intensive\Practices
        // right-click vào link and end-process => Tắt CPU tab
    //5.Lối "ERROR in Plugin "react" was conflicted between "package.json » eslint-config-react-app »..." => Vào "package.JSON" => Ctrl + S
    //6. Cách mở reactjs trên trình duyệt web => terminal => cd tới folder react => Nhập "npm start"
    //7. Cách tạo package.json => npm init -y or npm install express
    //8. Lỗi "Deleting generated file... package.json" => npm i -g create-react-app và npx create-react-app web-design
    //9.
    //10.
    //11.
    //12.
    //13.
    //14.
    //15.
    //16.
    //17.
    //18.
    //19.
    //20.
    //21.
    //22.
    //23.
    //24.
    //25.
    //26.
    //27.
    //28.
    //29.
    //30.
    //31.
    //32.
    //33.
    //34.
    //35.
    //36.
    //37.
    //38.
    //39.
    //40.
    //41.
    //42.
    //43.
    //44.
    //45.