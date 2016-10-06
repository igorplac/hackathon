// Initialize s-reveal
window.sr = ScrollReveal();

// Options
sr.reveal('.s-reveal', { duration: 900, mobile: false, scale: 1, distance: '15px' });
sr.reveal('.s-reveal-sequence', { duration: 500, delay: 200, mobile: false, scale: 1, distance: '5px' }, 120);

// Parallax settings
var scene = document.getElementsByClassName('js-scene');
for (var i = scene.length - 1; i >= 0; i--) {
    var parallax = new Parallax(scene[i], {
   });
}

