var button = document.querySelector('button');
var box = document.getElementById('images');
let i = 0;

function prvous() {
    switch(i) {
        case 0:
            box.style.backgroundImage = "url('admin/product detail/img 1.jpg')";
            document.getElementById("itemId").innerHTML = "Product 1";
            document.getElementById("itemPrice").innerHTML = "N$0.01";
            i++;
          break;
        case 1:
            box.style.backgroundImage = "url('admin/product detail/img 2.jpg')";
            document.getElementById("itemId").innerHTML = "Product 2";
            document.getElementById("itemPrice").innerHTML = "N$0.02";
            i++;
          break;
        case 2:
            box.style.backgroundImage = "url('admin/product detail/img 3.jpg')";
            document.getElementById("itemId").innerHTML = "Product 3";
            document.getElementById("itemPrice").innerHTML = "N$0.03";
            i++;
          break;
        case 3:
            box.style.backgroundImage = "url('admin/product detail/img 4.jpg')";
            document.getElementById("itemId").innerHTML = "Product 4";
            document.getElementById("itemPrice").innerHTML = "N$0.04";
            i++;
          break;
        case 4:
            box.style.backgroundImage = "url('admin/product detail/img 5.jpg')";
            document.getElementById("itemId").innerHTML = "Product 5";
            document.getElementById("itemPrice").innerHTML = "N$0.05";
            i++;
          break;
        case 5:
            box.style.backgroundImage = "url('admin/product detail/img 6.jpg')";
            document.getElementById("itemId").innerHTML = "Product 6";
            document.getElementById("itemPrice").innerHTML = "N$0.06";
            i++;
          break;
        case 6:
            box.style.backgroundImage = "url('admin/product detail/img 7.jpg')";
            document.getElementById("itemId").innerHTML = "Product 7";
            document.getElementById("itemPrice").innerHTML = "N$0.07";
            i++;
          break;
        case 7:
            box.style.backgroundImage = "url('admin/product detail/img 8.jpg')";
            document.getElementById("itemId").innerHTML = "Product 8";
            document.getElementById("itemPrice").innerHTML = "N$0.08";
            i++;
          break;
        case 8:
            box.style.backgroundImage = "url('admin/product detail/img 9.jpg')";
            document.getElementById("itemId").innerHTML = "Product 9";
            document.getElementById("itemPrice").innerHTML = "N$0.09";
            i++;
          break;
        case 9:
            i=0;  
          break;
        case -1:
            box.style.backgroundImage = "url('admin/product detail/img 9.jpg')";
            document.getElementById("itemId").innerHTML = "Product 9";
            document.getElementById("itemPrice").innerHTML = "N$0.09";
            i++;
          break;
        case -2:
            box.style.backgroundImage = "url('admin/product detail/img 8.jpg')";
            document.getElementById("itemId").innerHTML = "Product 8";
            document.getElementById("itemPrice").innerHTML = "N$0.08";
            i++;
          break;
        case -3:
            box.style.backgroundImage = "url('admin/product detail/img 7.jpg')";
            document.getElementById("itemId").innerHTML = "Product 7";
            document.getElementById("itemPrice").innerHTML = "N$0.07";
            i++;
          break;
        case -4:
            box.style.backgroundImage = "url('admin/product detail/img 6.jpg')";
            document.getElementById("itemId").innerHTML = "Product 6";
            document.getElementById("itemPrice").innerHTML = "N$0.06";
            i++;
          break;
        case -5:
            box.style.backgroundImage = "url('admin/product detail/img 5.jpg')";
            document.getElementById("itemId").innerHTML = "Product 5";
            document.getElementById("itemPrice").innerHTML = "N$0.05";
            i++;
          break;
        case -6:
            box.style.backgroundImage = "url('admin/product detail/img 4.jpg')";
            document.getElementById("itemId").innerHTML = "Product 4";
            document.getElementById("itemPrice").innerHTML = "N$0.04";
            i++;
          break;
        case -7:
            box.style.backgroundImage = "url('admin/product detail/img 3.jpg')";
            document.getElementById("itemId").innerHTML = "Product 3";
            document.getElementById("itemPrice").innerHTML = "N$0.03";
            i++;
          break;
        case -8:
            box.style.backgroundImage = "url('admin/product detail/img 2.jpg')";
            document.getElementById("itemId").innerHTML = "Product 2";
            document.getElementById("itemPrice").innerHTML = "N$0.02";
            i++;
          break;
        case -9:
            i=0;
        default:
            box.style.backgroundImage = "url('admin/product detail/img 1.jpg')";
            document.getElementById("itemId").innerHTML = "Product 1";
            document.getElementById("itemPrice").innerHTML = "N$0.01";
            i++;
          break;
    }
       
}
function next() {
    switch(i) {
        case 0:
            box.style.backgroundImage = "url('admin/product detail/img 9.jpg')";
            document.getElementById("itemId").innerHTML = "Product 9";
            document.getElementById("itemPrice").innerHTML = "N$0.09";
            i--;
          break;
        case -1:
            box.style.backgroundImage = "url('admin/product detail/img 8.jpg')";
            document.getElementById("itemId").innerHTML = "Product 8";
            document.getElementById("itemPrice").innerHTML = "N$0.08";
            i--;
          break;
        case -2:
            box.style.backgroundImage = "url('admin/product detail/img 7.jpg')";
            document.getElementById("itemId").innerHTML = "Product 7";
            document.getElementById("itemPrice").innerHTML = "N$0.07";
            i--;
          break;
        case -3:
            box.style.backgroundImage = "url('admin/product detail/img 6.jpg')";
            document.getElementById("itemId").innerHTML = "Product 6";
            document.getElementById("itemPrice").innerHTML = "N$0.06";
            i--;
          break;
        case -4:
            box.style.backgroundImage = "url('admin/product detail/img 5.jpg')";
            document.getElementById("itemId").innerHTML = "Product 5";
            document.getElementById("itemPrice").innerHTML = "N$0.05";
            i--;
          break;
        case -5:
            box.style.backgroundImage = "url('admin/product detail/img 4.jpg')";
            document.getElementById("itemId").innerHTML = "Product 4";
            document.getElementById("itemPrice").innerHTML = "N$0.04";
            i--;
          break;
        case -6:
            box.style.backgroundImage = "url('admin/product detail/img 3.jpg')";
            document.getElementById("itemId").innerHTML = "Product 3";
            document.getElementById("itemPrice").innerHTML = "N$0.03";
            i--;
          break;
        case -7:
            box.style.backgroundImage = "url('admin/product detail/img 2.jpg')";
            document.getElementById("itemId").innerHTML = "Product 2";
            document.getElementById("itemPrice").innerHTML = "N$0.02";
            i--;
          break;
        case -8:
            box.style.backgroundImage = "url('admin/product detail/img 1.jpg')";
            document.getElementById("itemId").innerHTML = "Product 1";
            document.getElementById("itemPrice").innerHTML = "N$0.01";
            i--;
          break;
        case -9:
            i=0;
          break;
          case 1:
            box.style.backgroundImage = "url('admin/product detail/img 1.jpg')";
            document.getElementById("itemId").innerHTML = "Product 1";
            document.getElementById("itemPrice").innerHTML = "N$0.01";
            i--;
          break;
        case 2:
            box.style.backgroundImage = "url('admin/product detail/img 2.jpg')";
            document.getElementById("itemId").innerHTML = "Product 2";
            document.getElementById("itemPrice").innerHTML = "N$0.02";
            i--;
          break;
        case 3:
            box.style.backgroundImage = "url('admin/product detail/img 3.jpg')";
            document.getElementById("itemId").innerHTML = "Product 3";
            document.getElementById("itemPrice").innerHTML = "N$0.03";
            i--;
          break;
        case 4:
            box.style.backgroundImage = "url('admin/product detail/img 4.jpg')";
            document.getElementById("itemId").innerHTML = "Product 4";
            document.getElementById("itemPrice").innerHTML = "N$0.04";
            i--;
          break;
        case 5:
            box.style.backgroundImage = "url('admin/product detail/img 5.jpg')";
            document.getElementById("itemId").innerHTML = "Product 5";
            document.getElementById("itemPrice").innerHTML = "N$0.05";
            i--;
          break;
        case 6:
            box.style.backgroundImage = "url('admin/product detail/img 6.jpg')";
            document.getElementById("itemId").innerHTML = "Product 6";
            document.getElementById("itemPrice").innerHTML = "N$0.06";
            i--;
          break;
        case 7:
            box.style.backgroundImage = "url('admin/product detail/img 7.jpg')";
            document.getElementById("itemId").innerHTML = "Product 7";
            document.getElementById("itemPrice").innerHTML = "N$0.07";
            i--;
          break;
        case 8:
            box.style.backgroundImage = "url('admin/product detail/img 8.jpg')";
            document.getElementById("itemId").innerHTML = "Product 8";
            document.getElementById("itemPrice").innerHTML = "N$0.08";
            i--;
          break;
        case 9:
            i=0;  
          break;  
        default:
            box.style.backgroundImage = "url('admin/product detail/img 9.jpg')";
            document.getElementById("itemId").innerHTML = "Product 9";
            document.getElementById("itemPrice").innerHTML = "N$0.09";
            i--;
          break;
    }
}
function log_in() {
    window.open("log_in/logIn.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}