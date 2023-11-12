function addToCart() { // If it's the first image, change to the second image and the op as well,
    // i did this so when the button is clicked again it return back to empty cart

    var cartIcon = document.querySelector('.cart-icon');
    if (cartIcon.src.endsWith('cart0.PNG')) {
        cartIcon.src = 'cart1.PNG';
    } else {
        cartIcon.src = 'cart0.PNG';
    }
}

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('.loading-container').style.display = 'none';
    }, 5000); // this is 5 seconds only
}
);