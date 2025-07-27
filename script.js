// همه‌ی عنوان‌های منو را انتخاب کن
const headers = document.querySelectorAll('.menu-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    // بستن همه‌ی زیرمنوها به جز مورد کلیک‌شده
    headers.forEach(h => {
      if (h !== header) h.classList.remove('active');
    });

    // باز یا بسته کردن زیرمنوی خودش
    header.classList.toggle('active');
  });
});
