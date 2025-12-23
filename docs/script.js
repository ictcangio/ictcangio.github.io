const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

let width, height, particles;

// Cấu hình
const particleCount = 100; // Số lượng hạt
const particleColor = "rgba(0, 242, 255, 0.5)"; // Màu xanh Cyan đồng bộ với logo

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random()
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = particleColor;

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Di chuyển hạt
        p.y += p.speed;
        
        // Nếu hạt rơi hết màn hình, quay lại lên trên
        if (p.y > height) {
            p.y = -10;
            p.x = Math.random() * width;
        }
    });

    requestAnimationFrame(draw);
}

// Xử lý khi thay đổi kích thước trình duyệt
window.addEventListener('resize', init);

// Khởi chạy
init();
draw();

// Get the div element
const myDiv = document.getElementById('clickableDiv');

// Add a click event listener
myDiv.addEventListener('click', function() {
    // Specify the URL to navigate to
    window.location.href = 'https://ictcangio.github.io/page/techblog.html';
});
