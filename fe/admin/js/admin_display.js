var i = 2;
document.getElementById("nav_ac").onclick = function () {
    myFunction()
};
function myFunction() {
    document.getElementById("ac_menu").classList.toggle("show");
}
function deleteProduct(btn) {
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