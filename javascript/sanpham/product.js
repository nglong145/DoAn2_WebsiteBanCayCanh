const product=[
    {
        id:1,
        image1:'/assets/image/cayvanphong/cay-bang-cam-thach-1.jpg',
        image2:'/assets/image/cayvanphong/bang-cam-thach-2.jpg',
        category:'Cây Ban Công',
        link:'/html/chitietsp/bangcamthach.html',
        name:'Cây Bàng Cẩm Thạch',
        price:'400.000₫'
    },
    {
        id:2,
        image1:'/assets/image/cayvanphong/cu-cai-do-may-man-1.jpg',
        image2:'/assets/image/cayvanphong/cu-cai-do-may-man-1.jpg',
        category:'Cây Cảnh',
        name:'Cây Củ Cải Đỏ',
        price:'100.000₫'
    },
    {
        id:3,
        image1:'/assets/image/cayvanphong/dua-hong-phung-1.jpg',
        image2:'/assets/image/cayvanphong/cay-dua-duoi-phung-2.jpg',
        category:'Cây Cảnh',
        name:'Cây Dứa Đuôi Phụng',
        price:'50.000₫'
    },
    {
        id:4,
        image1:'/assets/image/cayvanphong/cay-da-tam-phuc-300x300.jpg',
        image2:'/assets/image/cayvanphong/cay-da-tam-phuc-300x300.jpg',
        category:'CÂY NGOẠI THẤT',
        name:'Cây Đa Tam Phúc',
        price:'100.000₫'
    },
    {
        id:5,
        image1:'/assets/image/cayvanphong/cay-khuynh-diep-300x300.jpg',
        image2:'/assets/image/cayvanphong/cay-khuynh-diep-300x300.jpg',
        category:'Cây Cảnh',
        name:'Cây Khuynh Diệp',
        price:'150.000₫'
    },
    {
        id:6,
        image1:'/assets/image/cayvanphong/cay-kim-ngan-xoan-1.jpg',
        image2:'/assets/image/cayvanphong/cay-kim-ngan-xoan-5-than-2jpg.jpg',
        category:'Cây Cảnh',
        name:'Cây Kim Ngân Xoắn',
        price:'500.000₫'
    },
    {
        id:7,
        image1:'/assets/image/cayvanphong/cay-sao-sang-1.jpg',
        image2:'/assets/image/cayvanphong/cay-sao-sang-de-ban-2.jpg',
        category:'Cây Cảnh',
        name:'Cây Sao Sáng',
        price:'130.000₫'
    },
    {
        id:8,
        image1:'/assets/image/cayvanphong/cay-thinh-vuong-1.jpg',
        image2:'/assets/image/cayvanphong/cay-thinh-vuong-de-ban-2.jpg',
        category:'Cây Cảnh',
        name:'Cây Thịnh Vượng',
        price:'120.000₫'
    },
    {
        id:9,
        image1:'/assets/image/cayvanphong/hoa-thuy-tien-1.jpg',
        image2:'/assets/image/cayvanphong/cay-hoa-thuy-tien-2.jpg',
        category:'Cây Cảnh',
        name:'Hoa Thủy Tiên',
        price:'60.000₫'
    },
    {
        id:10,
        image1:'/assets/image/cayvanphong/cay-hon-ngoc-vien-dong-247x247.jpg',
        image2:'/assets/image/cayvanphong/cay-hon-ngoc-vien-dong-247x247.jpg',
        category:'Cây Cảnh',
        name:'Cây Hòn Ngọc Viễn Đông',
        price:'100.000₫'
    },
    {
        id:11,
        image1:'/assets/image/cayvanphong/cay-anh-duong-247x247.jpg',
        image2:'/assets/image/cayvanphong/cay-anh-duong-247x247.jpg',
        category:'Cây Cảnh',
        name:'Cây Ánh Dương',
        price:'100.000₫'
    },
    {
        id:12,
        image1:'/assets/image/cayvanphong/truc-dui-ga-247x247.jpg',
        image2:'/assets/image/cayvanphong/truc-dui-ga-247x247.jpg',
        category:'Cây Cảnh',
        name:'Cây Trúc Đùi Gà',
        price:'100.000₫'
    },
];

//ham thao tac voi localstorage
function SaveToLocalStorage (){
    localStorage.setItem("products", JSON.stringify(ProductCart));
}


function renderProduct() {

    
    let data =``;
    product.map(value => {
        data += `
        <div class="product" id="product">
            <div class="product-img">
                <a href="${value.link}">
                    <img src="${value.image1}" alt="" class="img1">
                    <img src="${value.image2}" alt="" class="img2">
                </a>                
            </div>
            <div class="product-info">
                <p>${value.category}</p>
                <a href="${value.link}">${value.name}</a>
                <p>Giá chỉ từ:<span>${value.price}</span></p>
                <button class="addcart" onclick="AddToCart(${value.id})">
                    <i class="fa-solid fa-cart-plus" style="color: #21f00a;"></i>\
                </button>  
            </div>
        </div>
        `;
      });
    document.getElementById('list-product').innerHTML=data;

}

let ProductCart =localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]
//tao mot bien kiem tra localstorage co item ten product chua neu co roi thi chuyen item do thanh json lay ra, nguoc lai khong co tra ra 1 array rong


function AddToCart(id ){
    let checkProduct=ProductCart.some(value=>value.id===id)
    //tao 1 bien kiem tra san pham da co trong gio hang chua thong qua id san pham
    if(!checkProduct) {
        let sanpham=product.find(value =>value.id===id);
        ProductCart.unshift({
            ...sanpham,
            quantity :1
        })
        SaveToLocalStorage();
        SumProduct();
    }
    //neu kiem tra khong co thi them moi san pham roi luu vao localstorae
    else {
        let Index=ProductCart.findIndex(value=>value.id===id)
        //lay ra vi tri san pham trong localstorage
        let Product= ProductCart.find(value=>value.id===id)
        // lay ra san pham trong localstorage
        ProductCart[Index]={
            ...Product,
            quantity: ++Product.quantity
        }
        SaveToLocalStorage();
        SumProduct();   
    }
    //kiem tra neu co san pham trong cart thi lay san pham do ra tang so luong sau do luu lai vao localstorage   
}

function SumProduct(){

    document.getElementById('TotalProduct').innerHTML = ProductCart.length;
}

function LoadCart(){
    SumProduct();
}

function LoadPage() {
    renderProduct();
    LoadCart();
}






//Gio hang
function RenderProductToTable() {
    let datacart =``;
    ProductCart.map((value,Index) => {
        datacart += `
        <tr>
            <td>${value.name}</td>
            <td>
            <img src="${value.image1}" alt="" width="70px" ; height:100px>
            </td>
            <td >
            <div class="change">
            <button onClick="MinusQuantity(${Index}, ${value.quantity})" class="minus">-</button>
            ${value.quantity}
            <button onClick="PlusQuantity(${Index})" class="plus">+</button>
            </div>
            
            </td>
            <td>${value.price.replace(/₫/,'')}</td>
            <td>
            ${(value.quantity * value.price.replace(/₫/,'')).toLocaleString()+'.000'}
            </td>
            <td onClick="DeleteProduct(${Index})"><i class="fa-regular fa-trash-can" style="color: #f10e0e; cursor:pointer"></i></td>
        </tr>
        `;
      });
    document.getElementById('ProductCart').innerHTML=datacart;
}

function CartLoadPage() {
    RenderProductToTable();
    SumProduct();
    ToTal();
}

function PlusQuantity(Index) {
    ProductCart[Index]={
        ...ProductCart[Index],
        quantity: ++ProductCart[Index].quantity
    }
    SaveToLocalStorage();
    RenderProductToTable();
    ToTal();
}

function MinusQuantity(Index,quantity) {
    if (quantity >1)
    {
        ProductCart[Index]={
            ...ProductCart[Index],
            quantity: --ProductCart[Index].quantity
        }
        SaveToLocalStorage();
        RenderProductToTable();
        ToTal();
    }
    else alert("So Luong ban nhap khong hop le");
}

function DeleteProduct(Index) {
    ProductCart.splice(Index,1);
    SaveToLocalStorage();
    RenderProductToTable();
    SumProduct();
    ToTal();
}

function ToTal (){
    document.getElementById('TotalMoney')
    if(ProductCart!=[]){
        let total=0;
        for(let i=0;i<ProductCart.length;i++){
            total+=ProductCart[i].quantity * ProductCart[i].price.replace(/₫/,'').toLocaleString();
        }
        document.getElementById('TotalMoney').innerHTML=total.toLocaleString()+'.000';
    }
}


function GetProduct(Index) {
        let data=`
        <div class="product-name">
                                    <h3>${product[Index].name}</h3>
                                </div>
                                <hr>
                                <div class="product-description-demo">
                                <p>Cây bàng cẩm thạch, còn được gọi là cây cẩm thạch, 
                                    là một loại cây cảnh quý hiếm với vẻ ngoại hình độc đáo và sự thanh lịch.
                                    Với tên gọi khoa học là Ficus elastica, cây bàng cẩm thạch thuộc họ Moraceae
                                    và là một trong những loại cây nội thất phổ biến được ưa 
                                    chuộng trong việc trang trí không gian sống.</p>
                                </div>
                                <div class="product-price">
                                    <h4>Giá chỉ từ:<span>${product[Index].price}</span></h4>
                                </div>
                                <div class="product-operation">
                                    <div class="count">
                                    <button onClick="Minus()" class="minus">-</button>
                                    <input id="amount" value="0" min="0">  
                                    <button onClick="Plus()" class="plus">+</button>
                                    </div>
                                    <div class="addtocart" onclick="AddToCart(${product[Index].id})">
                                        Mua ngay
                                    </div>

                                </div>`;
   

    document.getElementById('product-info-detail').innerHTML=data;
}

function Minus() {
    let amount=document.getElementById('amount');
    let value=parseInt(amount.value);
    amount.value=value-1;
}

function Plus() {
    let amount=document.getElementById('amount');
    let value=parseInt(amount.value);
    amount.value=value+1;
}

function LoadDetailProduct() {
    GetProduct(0);
    LoadCart();
}






var listtree = JSON.parse(localStorage.getItem('Tree')) || [];

            function ThemSanPham() {
                var masanpham = document.getElementById("masanpham").value;
                var tensanpham = document.getElementById("tensanpham").value;
                var anhsp = document.getElementById("imgproduct");
                var newimg="/assets/image/cayvanphong/" + anhsp.value.split("\\").pop();
                var giaban = document.getElementById("giaban").value;
                var danhmuc = document.getElementById("danhmucsp").value;
                var number = /^[0-9]+$/;

                if (masanpham == null || masanpham == "") {
                    var d = new Date();
                    masanpham = Number(d);
                }
                else if (!masanpham.match(number) || masanpham.length != 13) {
                    alert("Mã sản phẩm phải là kiểu số và có độ dài là 13 ký tự! Vui lòng nhập lại!");
                    return false;
                }

                if (danhmuc == "choose") {
                    alert("Vui lòng chọn loại sản phẩm!");
                    return false;
                }
                else if (tensanpham == null || tensanpham == "") {
                    alert("Tên sản phẩm không được để trống! Vui lòng nhập lại!");
                    return false;
                }
                else if (giaban == null || giaban == "") {
                    alert("Giá bán sản phẩm không được để trống! Vui lòng nhập lại!");
                    return false;
                } else if (giaban <= 0) {
                    alert("Giá bán sản phẩm phải lớn hơn 0! Vui lòng nhập lại!");
                    return false;
                }
                else {
                    for (var x of listtree) {
                        if (x.masanpham == masanpham) {
                            alert("Mã sản phẩm đã tồn tại! Vui lòng nhập lại!")
                            return false;
                        }
                    }
                }

                console.log("AddProduct");
                console.log(anhsp);
                if (listtree== null) listtree = [];
                var product = {
                    "danhmucsp": danhmuc,
                    "masanpham": masanpham,
                    "tensanpham": tensanpham,
                    "anhsp": newimg,
                    "giaban": giaban
                };
                listtree.push(product);
                localStorage.setItem("Tree", JSON.stringify(listtree));
                alert("Đã thêm thành công!");
                location.reload();


            }

            function Reset() {
                document.getElementById('danhmucsp').value = 'choose';
                document.getElementById('masanpham').value = '';
                document.getElementById('tensanpham').value = '';
                document.getElementById('viewimg').value = '';
                document.getElementById('imgproduct').value = '';
                document.getElementById('giaban').value = '';
            }

            function LoadData() {
                var str = "";
                var sl = 0;
                listtree.sort();
                for (x of listtree) {
                    sl++;
                    
                    str += `<tr>
                            <td>`+ x.masanpham + `</td>
                            <td>`+ x.tensanpham + `</td>
                            <td style="text-align: center;"><img src="`+ x.anhsp + `" ></td>
                            <td>`+ x.danhmucsp + `</td>
                            <td style="text-align: right;">`+ x.giaban + `</td>
                            <td style="text-align: center;">
                                <i class="fas fa-edit" title="Sửa" onclick="SuaSanPham(`+ x.masanpham + `)"></i>
                                <i class="fas fa-trash-alt" title="Xóa" onclick="XoaSanPham(`+ x.masanpham + `)"></i>
                            </td>
                        </tr>
                    `;
                }
                document.getElementById("listProduct").innerHTML = str;
                $('#soluong').html(sl);
            }
            LoadData();

            function XoaSanPham(masanpham) {
                if (confirm("Bạn chắc chắn muốn xóa!")) {
                    var index = listtree.findIndex(x => x.masanpham == masanpham);
                    if (index >= 0) {
                        listtree.splice(index, 1);
                    }
                    LoadData();
                    localStorage.setItem('Tree', JSON.stringify(listtree));
                }
            }

            function loadFile(event) {
                var image = document.getElementById('viewimg');
                image.src = URL.createObjectURL(event.target.files[0]);
            }

            function SuaSanPham(masanpham) {
                for (x of listtree) {
                    if (x.masanpham == masanpham) {
                        document.getElementById('masanpham').value = x.masanpham;
                        document.getElementById('tensanpham').value = x.tensanpham;   
                        // document.getElementById('imgproduct').value=x.anhsp.replace("/assets/image/cayvanphong/","");                
                        document.getElementById('viewimg').src = x.anhsp;
                        document.getElementById('giaban').value = x.giaban;
                        document.getElementById('danhmucsp').value = x.danhmucsp;
                    }
                }
            }



            function CapNhat() {
                var masanpham = document.getElementById("masanpham").value;
                var tensanpham = document.getElementById("tensanpham").value;
                var anhsp = document.getElementById("imgproduct").value;
                var giaban = document.getElementById("giaban").value;
                var danhmucsp = document.getElementById("danhmucsp").value;
                var anhsp = document.getElementById("imgproduct");
                var newimg="/assets/image/cayvanphong/" + anhsp.value.split("\\").pop();
                var number = /^[0-9]+$/;
                var ok = true;

                if (danhmucsp == "choose") {
                    alert("Vui lòng chọn loại sản phẩm!");
                    return false;
                }
                else if (tensanpham == null || tensanpham == "") {
                    alert("Tên sản phẩm không được để trống! Vui lòng nhập lại!");
                    return false;
                }
                else if (giaban == null || giaban == "") {
                    alert("Giá bán sản phẩm không được để trống! Vui lòng nhập lại!");
                    return false;
                } else if (giaban <= 0) {
                    alert("Giá bán sản phẩm phải lớn hơn 0! Vui lòng nhập lại!");
                    return false;
                }

                for (x of listtree) {
                    if (x.masanpham == masanpham) {
                        x.danhmucsp = danhmucsp;
                        x.masanpham = masanpham;
                        x.tensanpham = tensanpham;
                        x.anhsp = newimg;
                        x.giaban = giaban;
                        ok = false;
                        break;
                    }
                }

                if (ok == false) {
                    alert("Cập nhật thông tin thành công!");
                    localStorage.setItem("Tree", JSON.stringify(listtree));
                    location.reload();
                }
                else {
                    alert("Cập nhật thông tin thất bại!");
                }
            }
