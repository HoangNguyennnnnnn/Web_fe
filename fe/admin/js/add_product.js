document.getElementById("nav_ac").onclick = function () {
    myFunction()
};
function myFunction() {
    document.getElementById("ac_menu").classList.toggle("show");
}
// Hàm để hiển thị các hình ảnh đã chọn
function previewImages(event) {
    const imageFiles = event.target.files;
    const previewImagesContainer = document.getElementById('previewImages');
    previewImagesContainer.innerHTML = ''; // Xóa các hình ảnh hiện tại

    for (const file of imageFiles) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(file);
        imageElement.style.maxWidth = '200px';
        imageElement.style.maxHeight = '200px';
        imageElement.style.marginRight = '10px';
        imageElement.style.marginBottom = '10px';
        previewImagesContainer.appendChild(imageElement);
    }
}