const btnMobile = document.getElementById('btn-mobile');
console.log('aaa')
console.log(btnMobile);

function toggleMenu() {
    const nav = document.getElementById('nav');
    console.log('clocou');
    nav.classList.toggle('active');
}

if (btnMobile) {
    console.log('bbb');
    btnMobile.addEventListener('click', toggleMenu);
}