const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal-close");

cartButton.addEventListener('click', function (event) {
    modal.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', function (event) {
    modal.classList.remove('is-open');
});

new WOW().init(); // initialisation