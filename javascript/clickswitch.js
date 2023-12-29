function openmenu() {
    document.getElementById("button-sidenav-left").style.display = "block";
}

function closeBTN() {
    document.getElementById("button-sidenav-left").style.display = "none";
}

function LogOut() {
    window.location.href="/html/login.html";
}


function TongQuan(){
    window.location.href="/admin/admain.html";
}
function DanhMuc(){
    window.location.href="/admin/adcategory.html";
}

function SanPham() {
    window.location.href="/admin/adproduct.html";
}

function HoaDonBan() {
    window.location.href="/admin/adbill.html";
}