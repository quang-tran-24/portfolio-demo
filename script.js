<footer id="contact">
        <p>© 2024 Trần Đình Quang. All rights reserved.</p>
    </footer>
    
    <script>
        // Sử dụng IntersectionObserver - Công cụ hiện đại để theo dõi việc cuộn trang
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    // Nếu phần tử xuất hiện trong màn hình, thêm class 'show'
                    entry.target.classList.add('show');
                } else {
                    // (Tùy chọn) Nếu muốn nó ẩn lại khi cuộn đi chỗ khác thì bỏ comment dòng dưới
                    // entry.target.classList.remove('show'); 
                }
            });
        });

        // Chọn tất cả các phần tử có class 'hidden' để theo dõi
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    </script>

    </div> </body>
</html>