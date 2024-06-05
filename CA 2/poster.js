const rotateAnimation = document.getElementById('rotateAnimation');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rotateAnimation.setAttribute('to', '45 1553.47 443.48'); //slight movement
    rotateAnimation.setAttribute('dur', '20s'); // slower rotation for reduced motion
}

const rotateAnimationBig = document.getElementById('rotateAnimationBig');

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rotateAnimationBig.setAttribute('to', '45 1456.2 270.15'); //slight movement
    rotateAnimationBig.setAttribute('dur', '30s'); // slower rotation for reduced motion
}