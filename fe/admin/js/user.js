var i = 2;
document.getElementById("nav_ac").onclick = function () {
    myFunction()
};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("ac_menu").classList.toggle("show");
}
function editUser(btn) {
    var row = btn.parentNode.parentNode;
    var roleCell = row.cells[7]; // Cột vai trò của người dùng
    var currentRole = roleCell.innerText.trim(); // Lấy vai trò hiện tại của người dùng

    // Tạo một dropdown để chọn vai trò mới
    var selectRole = document.createElement('select');
    selectRole.classList.add('form-select'); // Thêm lớp để xác định kích thước chữ
    selectRole.style.fontSize = '15px'; // Đặt kích thước chữ cho dropdown

    // Tạo các tùy chọn cho dropdown (user và admin)
    var optionUser = document.createElement('option');
    optionUser.value = 'User';
    optionUser.text = 'User';
    var optionAdmin = document.createElement('option');
    optionAdmin.value = 'Admin';
    optionAdmin.text = 'Admin';

    // Chọn tùy chọn hiện tại dựa trên vai trò của người dùng
    if (currentRole === 'User') {
        optionUser.selected = true;
    } else if (currentRole === 'Admin') {
        optionAdmin.selected = true;
    }

    // Thêm các tùy chọn vào dropdown
    selectRole.add(optionUser);
    selectRole.add(optionAdmin);

    // Xóa nội dung hiện tại của ô vai trò
    roleCell.innerHTML = '';

    // Thêm dropdown vào ô vai trò
    roleCell.appendChild(selectRole);

    // Thay đổi nút chỉnh sửa thành "Xác nhận"
    var editButton = row.querySelector('.btn-primary');
    editButton.innerText = 'Xác nhận';
    editButton.setAttribute('onclick', 'confirmEdit(this)');
}

function confirmEdit(btn) {
    var row = btn.parentNode.parentNode;
    var roleCell = row.cells[7]; // Cột vai trò của người dùng
    var selectRole = roleCell.querySelector('select');

    // Lấy vai trò mới từ dropdown
    var newRole = selectRole.value;

    // Cập nhật vai trò của người dùng
    roleCell.innerText = newRole;

    // Thay đổi nút "Xác nhận" thành "Chỉnh sửa" và gán lại hàm chỉnh sửa
    btn.innerText = 'Chỉnh sửa';
    btn.setAttribute('onclick', 'editUser(this)');
}


function deleteUser(btn) {
    var row = btn.parentNode.parentNode;
    var table = row.parentNode;

    // Lấy ID của sản phẩm sẽ bị xóa
    var deletedProductId = parseInt(row.cells[0].innerText);

    // Xóa hàng
    table.removeChild(row);

    // Cập nhật ID của các sản phẩm dưới
    var rows = table.rows;
    for (var i = 0; i < rows.length; i++) {
        var currentProductId = parseInt(rows[i].cells[0].innerText);
        if (currentProductId > deletedProductId) {
            rows[i].cells[0].innerText = currentProductId - 1;
        }
    }
}