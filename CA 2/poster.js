document.addEventListener('DOMContentLoaded', () => {
    const rotateAnimation = document.getElementById('rotateAnimation');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rotateAnimation.setAttribute('to', '45 1553.47 443.48'); //slight movement
    rotateAnimation.setAttribute('dur', '10s'); // slower rotation for reduced motion
}
});

document.addEventListener('DOMContentLoaded', () => {
    const rotateAnimationBig = document.getElementById('rotateAnimationBig');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        rotateAnimationBig.setAttribute('to', '45 1456.2 270.15');
        rotateAnimationBig.setAttribute('dur', '10s'); // slower rotation for reduced motion
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const moonline = document.getElementById('moonline');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    moonline.setAttribute('dur', '20s');
    moonline.setAttribute('repeatCount', '1');
}
});
