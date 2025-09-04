const blur = document.querySelector('.cursor-blur');
let timer;

window.addEventListener('mousemove', e => {
    blur.style.display = 'block';
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';


    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //     blur.style.display = 'none';
    // }, 1000);
});