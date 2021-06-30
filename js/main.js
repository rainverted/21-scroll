const backToTopDOM = document.querySelector('.back-to-top');
const stickyDOM = document.querySelector('header')

//naudojamas ivykio tipas - scroll
//sukuriame ivyki visai narsyklei(window), kuris nurodys elemento pozicija joje
addEventListener('scroll', () => {
    // window.scrollY/window.scrollX nurodo pozicija narsykleje
    if (window.scrollY > 500) {
        backToTopDOM.classList.remove('hide')

    } else {
        backToTopDOM.classList.add('hide');
    }
    if (window.scrollY > 150) {
        stickyDOM.classList.add('sticky');
    } else {
        stickyDOM.classList.remove('sticky');
    }

})




