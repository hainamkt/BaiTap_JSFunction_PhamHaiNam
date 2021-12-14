/** Bài tập: Quản lí tuyển sinh
 * Khối 1: Input
 * khuVuc
 * diemKhuVuc
 * doiTuong
 * diemDoiTuong
 * diemUuTien
 * diemMon (diemMon1, diemMon2, diemMon3)
 * diemChuan
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: kiểm tra khu vực -> có diemKhuVuc
 * B3: kiểm tra đối tượng -> có diemDoiTuong
 * B4: tính toán
 *     diemUuTien = diemKhuVuc + diemDoiTuong
 *     total = diemMon1 + diemMon2 + diemMon3 + diemUuTien
 * B5: so sánh
 *     if diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0
 *      -> bị liệt môn -> rớt
 *     else
 *          if diemChuan <= total -> đậu
 *          else -> rớt
 * 
 * Khối 3: Output
 * xuất kết quả đậu hay rớt
 * 
 */

function tinhKetQua() {
    var khuVuc = document.getElementById('chonKhuVuc').value;
    var khuVucA = document.getElementById('inpA').value;
    var khuVucB = document.getElementById('inpB').value;
    var khuVucC = document.getElementById('inpC').value;

    var doiTuong = document.getElementById('chonDoiTuong').value;
    var doiTuong1 = document.getElementById('inp1').value;
    var doiTuong2 = document.getElementById('inp2').value;
    var doiTuong3 = document.getElementById('inp3').value;

    var diemMon1 = Number(document.getElementById('inpDiem1').value);
    var diemMon2 = Number(document.getElementById('inpDiem2').value);
    var diemMon3 = Number(document.getElementById('inpDiem3').value);

    var diemChuan = document.getElementById('inpDiemChuan').value;

    var diemKhuVuc = tinhKhuVuc(khuVuc, khuVucA, khuVucB, khuVucC);
    var diemDoiTuong = tinhDoiTuong(doiTuong, doiTuong1, doiTuong2, doiTuong3);
    var diemUuTien = diemKhuVuc + diemDoiTuong;
    var total = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
        document.getElementById('txtKetQua').innerHTML = 'Bạn đã rớt. Do có điểm môn nhỏ hơn hoặc bằng 0';
    }
    else {
        if (diemChuan <= total) {
            document.getElementById('txtKetQua').innerHTML = 'Bạn đã đậu. ' + 'Tổng điểm là: ' + total;
        }
        else {
            document.getElementById('txtKetQua').innerHTML = 'Bạn đã rớt. ' + 'Tổng điểm là: ' + total;
        }
    }
}

function tinhKhuVuc(khuVuc, diemA, diemB, diemC) {
    if (khuVuc == diemA) {
        return 2;
    } else if (khuVuc == diemB) {
        return 1;
    } else if (khuVuc == diemC) {
        return 0.5;
    } else {
        return 0;
    }
}

function tinhDoiTuong(doiTuong, diem1, diem2, diem3) {
    if (doiTuong == diem1) {
        return 2.5;
    } else if (doiTuong == diem2) {
        return 1.5;
    } else if (doiTuong == diem3) {
        return 1;
    } else {
        return 0;
    }
}

document.getElementById('btnKetQua').onclick = tinhKetQua;


/** Bài tập: Tính tiền điện
 * Khối 1: Input
 * hoTen
 * soDien
 * 
 * Khối 2:
 * B1: lấy giá trị từ form
 * B2: kiểm tra số điện -> tính tổng tiền điện dựa theo mốc giá điện
 *  - 0   < soDien <= 50  -> soDien * 500
 *  - 50  < soDien <= 100 -> 50 * 500 + (soDien - 50) * 650
 *  - 100 < soDien <= 200 -> 50 * 500 + 50 * 650 + (soDien - 100) * 850
 *  - 200 < soDien <= 350 -> 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100
 *  - 350 < soDien -> 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300
 * 
 * Khối 3: Output
 * xuất tổng tiền điện
 */

function tinhTienDien() {
    var hoTen = document.getElementById('inpHoTen').value;
    var soDien = Number(document.getElementById('inpSoDien').value);
    var tinhTien = ktSoDien(soDien);

    document.getElementById('txtTienDien').innerHTML = 'Họ tên: ' + hoTen + ', Tiền điện: ' + tinhTien + 'd';
}

function ktSoDien(soDien) {
    if (0 < soDien && soDien <= 50) {
        return soDien * 500;
    } else if (50 < soDien && soDien <= 100) {
        return 50 * 500 + (soDien - 50) * 650;
    } else if (100 < soDien && soDien <= 200) {
        return 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    } else if (200 < soDien && soDien <= 350) {
        return 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
    } else if (350 < soDien) {
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
    } else {
        alert('Số Kw điện không hợp lệ');
        return 0;
    }
}

document.getElementById('btnTinhTien').onclick = tinhTienDien;