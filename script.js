document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("emailForm").classList.remove("hide");
});

// Lấy các phần tử cần thao tác
var form = document.getElementById("emailForm");
var emailInput = document.getElementById("emailInput");
var errorMsg = document.getElementById("error");
var personalInfo = document.getElementById("personalInfo");
var backButton = document.getElementById("backButton");

// Định nghĩa Regex kiểm tra định dạng email

var emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Xử lý sự kiện submit của form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var email = emailInput.value.trim();

  if (emailRegex.test(email)) {
    errorMsg.classList.add("hide"); // Ẩn thông báo lỗi
    form.classList.add("hide"); // Ẩn form email
    personalInfo.classList.remove("hide");
    setTimeout(() => {
      personalInfo.classList.add("active");
    }, 10); // Delay nhỏ để đảm bảo transition hoạt động
  } else {
    errorMsg.classList.remove("hide"); // Hiển thị thông báo lỗi
    errorMsg.textContent = "Vui lòng nhập email hợp lệ. "; // Sửa lỗi chính tả
  }
});

// Xử lý sự kiện click cho nút "Quay lại"
backButton.addEventListener("click", function () {
  personalInfo.classList.add("hide"); // Ẩn phần thông tin cá nhân
  personalInfo.classList.remove("active"); // Xóa hiệu ứng active
  form.classList.remove("hide"); // Hiển thị lại form email
  errorMsg.classList.add("hide"); // Ẩn thông báo lỗi
  emailInput.value = ""; // Xóa giá trị email đã nhập
});

/*==============================================
Xử lý ẩn hiện Button Viewmore

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".grid-upper");
  
  sections.forEach((section) => {
    const viewButton = section.querySelector(".view-button");
    const content = section.querySelector(".grid-below");
    
    viewButton.addEventListener("click", () => {
      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "inline";
        viewButton.textContent = "View Less";
      } else {
        content.style.display = "none";
      viewButton.textContent = "View More";
    }
  });
});
});
============================================== */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".grid-upper");

  sections.forEach((section) => {
    const viewButton = section.querySelector(".view-button");
    const content = section.querySelector(".grid-below");

    section.classList.add("collapsed");

    viewButton.addEventListener("click", () => {
      if (section.classList.contains("collapsed")) {
        section.classList.remove("collapsed");
        section.classList.add("expanded");
        content.classList.add("visible");
        viewButton.textContent = "View Less";
      } else {
        section.classList.remove("expanded");
        section.classList.add("collapsed");
        content.classList.remove("visible");
        viewButton.textContent = "View More";
      }
    });
  });
});
