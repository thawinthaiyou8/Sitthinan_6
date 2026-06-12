document.addEventListener('DOMContentLoaded', function () {
    console.log('Portfolio ของ SITTHINAN พร้อมแล้ว!');

    // ดึงปีปัจจุบัน (ค.ศ.) มาแสดงใน Footer อัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
