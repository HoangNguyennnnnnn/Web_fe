document.getElementById("nav_ac").onclick = function () {
    myFunction()
};
function myFunction() {
    document.getElementById("ac_menu").classList.toggle("show");
}
function editOrder(button) {
    const orderRow = button.closest('tr');
    const statusCell = orderRow.querySelector('.order-status');
    const editButton = button;

    if (editButton.textContent === "Chỉnh sửa") {
        // Lưu trạng thái hiện tại
        const currentStatus = statusCell.textContent;
        // Tạo dropdown
        statusCell.innerHTML = `
            <select class="form-control" style="font-size: 15px">
                <option ${currentStatus === 'Đang xử lý' ? 'selected' : ''}>Đang xử lý</option>
                <option ${currentStatus === 'Đang giao hàng' ? 'selected' : ''}>Đang giao hàng</option>
                <option ${currentStatus === 'Đã giao hàng' ? 'selected' : ''}>Đã giao hàng</option>
            </select>
        `;
        // Đổi nút thành "Lưu"
        editButton.textContent = "Lưu";
        editButton.classList.remove('btn-outline-primary');
        editButton.classList.add('btn-outline-success');
    } else {
        // Lấy trạng thái mới từ dropdown
        const newStatus = statusCell.querySelector('select').value;
        // Cập nhật trạng thái trong bảng
        statusCell.textContent = newStatus;

        // Đổi nút lại thành "Chỉnh sửa"
        editButton.textContent = "Chỉnh sửa";
        editButton.classList.remove('btn-outline-success');
        editButton.classList.add('btn-outline-primary');
    }
}
function detailsOrder(btn) {
    // Hàm lấy ID của Order nếu cần nhé
    // var row = btn.parentNode.parentNode;
    // var IDCell = row.cells[0]; 
    // const orderID = IDCell.innerText.trim(); 

    const url = "orderdetails.html";
    // Chuyển hướng đến trang chi tiết đơn hàng
    window.location.href = url;
}
