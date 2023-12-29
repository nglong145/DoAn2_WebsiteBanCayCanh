//bien luu trang hien tai
let CurrentPage=1;
//bien luu so san pham trong mot trang
let PerPage=2;
// bien luu tong so page = Tong so san pham / PerPage
let TotalPage= product.length / 2
// mang chua so san pham sau khi phan trang
let PerProduct=[]

function getProduct(){
    product=
    PerProduct=product.slice(
        (CurrentPage-1)*PerPage,
        (CurrentPage-1)*PerPage+PerPage
    )
    renderProduct();
}



 