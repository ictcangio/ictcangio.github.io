document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('scrolling-text-wrapper');
    const content = wrapper.querySelector('.text-item').parentNode; 
    
    // **Bước 1: Nhân đôi nội dung**
    // Lấy bản sao của nội dung gốc (tất cả các .text-item)
    const clone = content.cloneNode(true);
    
    // Đặt ID tạm thời để CSS không áp dụng animation hai lần, 
    // sau đó đổi tên class của wrapper bên trong để CSS Keyframes hoạt động đúng
    clone.removeAttribute('id'); 
    
    // Thêm bản sao vào cuối container
    wrapper.appendChild(clone);
    
    // **Bước 2 (Tùy chọn): Điều chỉnh Keyframes bằng JS (Nếu bạn không dùng Keyframes đơn giản)**
    // Nếu bạn muốn tính toán chiều cao nội dung động thay vì dùng giá trị -50% cứng
    // Có thể bỏ qua bước này vì Keyframes với nội dung nhân đôi đã hoạt động tốt.
    
    console.log("Nội dung đã được nhân đôi để tạo hiệu ứng cuộn vô hạn.");
});