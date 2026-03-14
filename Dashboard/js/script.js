let nav = document.getElementById("nav");
let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    // 統一由這個 class 控制顯示/隱藏
    nav.classList.toggle("d-none");
    
    // 如果你在小螢幕想讓它佔滿或佔一半，可以在 CSS 寫
    // 或者這裡補上你需要的特殊 class
    if (window.innerWidth < 768) {
        nav.classList.toggle("col-6");
    }
});
