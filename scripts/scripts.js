// Navbar Mobile
humberger = document.querySelector(".humberger");
humberger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

// navbar secroll
const navE1 = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navE1.classList.add("navscroll");
  } else {
    navE1.classList.add("nav");
  }
});

// /// <!-- Script -->
// const misi = document.querySelectorAll(".mission .misi");
// const myWindow = document.querySelector(".window");

// for (let i = 0; i < misi.length; i++) {
//   misi[i].addEventListener("click", function () {
//     myWindow.style.display = "block";
//   });
// }
// function tutupWindow() {
//   myWindow.style.display = "none";
// }

// <!-- Loader  -->

// Fungsi untuk menampilkan elemen loading
function showLoading() {
  document.querySelector(".loader").style.display = "flex";
}

// Fungsi untuk menyembunyikan elemen loading
function hideLoading() {
  document.querySelector(".loader").style.display = "none";
}

// Event listener untuk menjalankan fungsi showLoading saat halaman dimuat
window.addEventListener("load", showLoading);

// Event listener untuk menjalankan fungsi hideLoading saat halaman selesai dimuat
window.addEventListener("load", function () {
  setTimeout(hideLoading, 1500);
});

// =======================Responsive Navbar===========================
