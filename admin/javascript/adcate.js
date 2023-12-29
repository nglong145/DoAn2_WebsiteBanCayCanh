var list = JSON.parse(localStorage.getItem('Category')) || [];

function ThemDanhMuc() {
    var number = /^[0-9]+$/;
    var madm = document.getElementById("madanhmuc").value;
    var tendm = document.getElementById("tendanhmuc").value;

    if (madm == null || madm == "") {
        var d = new Date();
        madm = Number(d);
    }
    else if (!madm.match(number) || madm.length != 13) {
        alert("Mã loại phải là kiểu số và có độ dài là 13 ký tự! Vui lòng nhập lại!");
        return false;
    }

    if (tendm == null || tendm == "") {
        alert("Tên loại không được để trống! Vui lòng nhập lại!");
        return false;
    }
    else {
        for (var x of list) {
            if (x.madm == madm) {
                alert("Mã loại đã tồn tại! Vui lòng nhập lại!")
                return false;
            }
        }
    }

    console.log("AddCategory");
    if (list == null) list = [];
    var category = {
        "madanhmuc": madm,
        "tendanhmuc": tendm
    };
    list.push(category);
    localStorage.setItem("Category", JSON.stringify(list));
    alert("Đã thêm thành công!");
    location.reload();
}

function NhapMoi() {
    document.getElementById('madanhmuc').value = '';
    document.getElementById('tendanhmuc').value = '';
}

function LoadData() {
    var str = "";
    var sl = 0;
    list.sort();
    for (x of list) {
        sl++;
        str += `<tr>
            
                <td>`+ x.madanhmuc + `</td>
                <td>`+ x.tendanhmuc + `</td>
                <td style="text-align: center;">
                    <i class="fas fa-edit" title="Sửa" onclick="SuaDanhMuc(`+ x.madanhmuc + `)"></i>
                    <i class="fas fa-trash-alt" title="Xóa" onclick="XoaDanhMuc(`+ x.madanhmuc + `)"></i>
                </td>
            </tr>
        `;
    }
    document.getElementById("listCategory").innerHTML = str;
    $('#soluong').html(sl);
}
LoadData();

function XoaDanhMuc(madanhmuc) {
    if (confirm("Bạn chắc chắn muốn xóa!")) {
        var index = list.findIndex(x => x.madanhmuc == madanhmuc);
        if (index >= 0) {
            list.splice(index, 1);
        }
        LoadData();
        localStorage.setItem('Category', JSON.stringify(list));
    }
}


function SuaDanhMuc(madanhmuc) {
    for (x of list) {
        if (x.madanhmuc == madanhmuc) {
            document.getElementById('madanhmuc').value = x.madanhmuc;
            document.getElementById('tendanhmuc').value = x.tendanhmuc;
        }
    }
}

function CapNhat() {
    var madm = document.getElementById("madanhmuc").value;
    var tendm = document.getElementById("tendanhmuc").value;
    var ok = true;

    if (tendm == null || tendm == "") {
        alert("Tên loại không được để trống! Vui lòng nhập lại!");
        return false;
    }

    for (x of list) {
        if (x.madanhmuc == madm) {
            x.tendanhmuc = tendm;
            ok = false;
            break;
        }
    }

    if (ok == false) {
        alert("Cập nhật thông tin thành công!");
        localStorage.setItem("Category", JSON.stringify(list));
        location.reload();
    }
    else {
        alert("Cập nhật thông tin thất bại!");
    }
}