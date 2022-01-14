// ****************************Typed.js****************************
// ****************************Typed.js End****************************

var typed = new Typed('.typing', {
    strings: [" Web Devloper", "Web Designer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
    smartBackspace: false,
    delay: 0
});

// ****************************Isotope.js****************************

var $grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

$('.filter button').on("click", function() {
    var value = $(this).attr('data-name');
    $grid.isotope({
        filter: value
    });

})

// ****************************Isotope.js End****************************


// var nav = document.querySelector('nav');

// window.addEventListener('scroll', function() {
//     if (window.pageYOffset > 100) {
//         nav.classList.add('bg-dark', 'shadow');
//     } else {
//         nav.classList.remove('bg-dark', 'shadow');
//     }
// });
