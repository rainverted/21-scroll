const backToTopDOM = document.querySelector('.back-to-top');
const stickyDOM = document.querySelector('header')
let wasStickyAtLeastOcne = false;
let notStickyTimer = null;
let lastScrollYPosition = window.scrollY;
let currentScrollYPosition = 0;


function contentScroll() {
    currentScrollYPosition = window.scrollY;
    console.log(currentScrollYPosition);

    // back to top
    if (currentScrollYPosition > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }

    // kai leidziame i apacia
    if (currentScrollYPosition > 150 && currentScrollYPosition >= lastScrollYPosition) {
        wasStickyAtLeastOnce = true;
        headerDOM.classList.add('sticky');
        stickyDOM.classList.remove('not-sticky');
    }

    // kai kylame i virsiu
    if (currentScrollYPosition < 250 && currentScrollYPosition < lastScrollYPosition) {
        stickyDOM.classList.remove('sticky');
        if (wasStickyAtLeastOnce) {
            stickyDOM.classList.add('not-sticky');

            notStickyTimer = setTimeout(() => {
                stickyDOM.classList.remove('not-sticky');
                wasStickyAtLeastOnce = false;
            }, 400)
        }
    }

    lastScrollYPosition = currentScrollYPosition;
}

window.addEventListener('scroll', () => {
    contentScroll();
})

contentScroll();

//     // back to top
//     if (currentScrollYPosition > 500) {

// //naudojamas ivykio tipas - scroll
// //sukuriame ivyki visai narsyklei(window), kuris nurodys elemento pozicija joje
// addEventListener('scroll', () => {
//     // window.scrollY/window.scrollX nurodo pozicija narsykleje
//     if (window.scrollY > 500) {
//         backToTopDOM.classList.remove('hide')






