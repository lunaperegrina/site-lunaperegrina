const bntMobile = document.getElementById('bnt-mobile');
console.log('aaa')

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

if (bntMobile) {
    bntMobile.addEventListener('click', toggleMenu);
}