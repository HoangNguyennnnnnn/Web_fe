document.addEventListener('DOMContentLoaded', function() {
    // Các đoạn mã JavaScript của bạn ở đây
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage(); // Gọi slideImage() sau khi imgId đã được cập nhật
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);
});
$(".qtyminus").on("click",function(){
    var now = $(".qty").val();
    if ($.isNumeric(now) && parseInt(now) > 1) {
        $(".qty").val(parseInt(now) - 1);
    }
});

$(".qtyplus").on("click",function(){
    var now = $(".qty").val();
    if ($.isNumeric(now)) {
        $(".qty").val(parseInt(now) + 1);
    }
});
document.getElementById("nav_ac").onclick = function() {myFunction()};
    
    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    function myFunction() {
      document.getElementById("ac_menu").classList.toggle("show");
    }


