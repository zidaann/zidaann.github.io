// 1. tangkap element dengan class menu
const menu = document.querySelector(".nav");
// 2. jika element dengan class menu diklik
menu.addEventListener('click', function(e) {
    // 3. maka ambil element apa yang diklik oleh user
    const targetMenu = e.target;
    // 4. lalu cek, jika element itu adalah link dengan class hover-underline
    if(targetMenu.classList.contains('hover-underline')) {
        // 5. maka ambil menu link yang aktif
        const menuLinkActive = document.querySelector("aside ul li a.active");
        // 6. lalu cek, Jika menu link active ada dan menu yang di klik user adalah menu yang tidak sama dengan menu yang aktif, (cara cek-nya yaitu dengan membandingkan value attribute href-nya)
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
            // 7. maka hapus class active pada menu yang sedang aktif
            menuLinkActive.classList.remove('active');
        }
        // 8. terakhir tambahkan class active pada menu yang di klik oleh user
        targetMenu.classList.add('active');
    }
});