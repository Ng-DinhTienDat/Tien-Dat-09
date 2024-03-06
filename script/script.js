document.getElementById("menu-logo").addEventListener("click", function() {
    window.location.href = "index.html";
});

var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Định nghĩa hàm tự động chuyển slide sau một khoảng thời gian
function autoSlide() {
  plusDivs(1); // Chuyển đến slide tiếp theo
}

// Đặt thời gian chuyển đổi giữa các slide (miligiây)
var slideInterval = setInterval(autoSlide, 2500); // Ví dụ: chuyển đổi slide mỗi 5 giây

// Dừng tự động chuyển slide khi người dùng tương tác với các nút chuyển đổi slide
function pauseSlide() {
  clearInterval(slideInterval); // Dừng chuyển đổi tự động
}

// Gọi hàm pauseSlide() khi người dùng nhấp vào nút chuyển đổi slide
document.querySelectorAll('.button_left, .button_right').forEach(function(element) {
  element.addEventListener('click', pauseSlide);
});

