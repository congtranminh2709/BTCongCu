//1/CƠ BẢN
//alert('Hi JavaScript basic!')
 //var fullName = 'Tran Minh Cong';
 //alert(fullName);

 //2.BUILT-IN
 //dùng console để in ra giá trị của biết 
 //console.log(fullName);// log ra fullName
 //console.warn(fullName);//log ra cảnh báo dấu chấm than
 //console.error(fullName);// log ra lỗi đỏ dấu x

 // dùng confirm để xác nhận, đồng ý cái gì đó
 //confirm('xac nhan ban du tuoi');

 //dùng prompt để nhập 1 cái gì đó
//prompt('Xac nhan ban du tuoi');

//dung setTimeout để thực thi đoạn mã lệnh sau 1 khoảng thời gian
// setTimeout(function () {
//    alert('Thong bao')
// }, 1000)

//dùng setInterval giống setTimeout nhưng cách 1 khoảng thời gian lại lặp lại
// setInterval(function () {
//     //alert('Thong bao')
//     console.log('day la log' + Math.random)
//  }, 1000)

//3.CÁC TOÁN TỬ
/**
 * toán tử số học -Arithmetic
 * toán tử gán - Assignment
 * toán tử so sánh - comparison
 * toan tử logic - Logical
 */

// VD toán tử số học
// var a= 1+2;
// console.log(a)

//VD toán tử gán dùng dấu =
// var fullName = 'TMC';
//console.log(fullName);

//VD toan tu so sanh 
// var a = 1;
// var b = 2;
// if(a<b){
//     alert('dung')
// }

// VD toan tử logic dùng dấu &
// var  a= 1;
// var b=2;
// if(a>0 && b>0){
//     alert('đúng')
// }

/*  TOÁN TỬ SỐ HỌC
+    Cộng
-    Trừ
*    Nhân
**   luỹ Thừa
/    Chia
%    chia lấy số dư
++   Tăng 1 giá trị số
--   Giảm 1 giá trị số
*/
// var a = 2
// var b = 6
// console.log(a**b)
 

// var number = 1;

// number--; // dùng làm tiền tố, ++ ở phía trước biến
// console.log(number); // 2

// number--;
// console.log(number); // 3

// function check_number(number)
//     {
//         if (number % 5 == 0){
//             console.log(number + ' chia het cho 5');
//         }
//         else {
//             console.log(number + ' ko chia het cho 5');
//         }

//     }
//     check_number(8);

// function sum(a,b){
//     return a + b;
// }
// var result = sum(2,4)
// console.log(result)

// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
 
//     while (index <= n)
//     {
//             tong += index;
//         index++;
//     }
//     return tong;
// }
 
// var n = parseInt(prompt("Nhập số cần kiểm tra"));
// document.write("Tổng  từ 1 tới " + n + " là: " + tinh_tong(n));

// function getLastElement(Array){// Viết hàm tại đây
//     return Array.splice(0,1);
//     }
    
//     // Ví dụ sử dụng
//     var animals = ['Monkey', 'Tiger', 'Elephant'];
//     var result = getLastElement(animals);
    
//     //console.log(result); // Expected: "Elephant"
//     console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// function getFirstElement(Array)// Viết hàm tại đây
// {
//     return Array.slice(0,1)
// }



// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getFirstElement(animals);

// console.log(result); // Expected: "Monkey"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// function getRandNumbers(min, max, length){
//     var arr = []
//     for(var i = 0; i<length;i++){
//         arr[i] = Math.random() * (max - min) + min;
//     }
//     return arr;
   
// }
// console.log(getRandNumbers(arr))

// function main() {
//     var a = 40, b = 4;
//     while (a != b) {
//         if (a > b) a = a - b;
//         else b = b - a;
//     }
//     return a;
// };
// console.log(main(a));


//   function fibonacci(num) {
//     let f0 = 2;
//     let f1 = 3;
//     let t;
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//       arr.push(f0);
//       t = f1;
//       f1 = f0 + f1;
//       f0 = t;
//     }
 
//     return arr;
//   }
//   console.log(fibonacci(10));

//  function tinh_tong(){
//     var s = 0;
//     for(var i = 0; i<=n; i++){
//         return s= s+1/n;
//     }
//  }




