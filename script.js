document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-btn");
    const categories = document.querySelectorAll(".menu-category");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");

            // تغییر دکمه فعال
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // نمایش دسته‌بندی مربوطه
            categories.forEach(cat => cat.classList.remove("active"));
            document.getElementById(target).classList.add("active");
        });
    });
});