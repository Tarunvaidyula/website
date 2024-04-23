document.addEventListener('DOMContentLoaded', function() {
    var navbarItems = document.querySelectorAll('.navbar li');

    navbarItems.forEach(function(navbarItem) {
        navbarItem.addEventListener('mouseenter', function() {
            var dropdown = this.querySelector('.dropdown');
            var dropdown2 = this.querySelector('.dropdown2');
            var dropdown3 = this.querySelector('.dropdown3');
            var dropdown4 = this.querySelector('.dropdown4'); 
            if (dropdown) {
                dropdown.style.display = 'block';
                dropdown.style.width = navbarItem.offsetWidth + 'px';
            }
            if (dropdown2) {
                dropdown2.style.display = 'block';
                dropdown2.style.width = navbarItem.offsetWidth + 'px';
            }
            if (dropdown3) {
                dropdown3.style.display = 'block';
                dropdown3.style.width = navbarItem.offsetWidth + 'px';
            }
            if (dropdown4){
                dropdown4.style.display = 'block';
                dropdown4.style.width = navbarItem.offsetWidth + 'px';
            }
        });

        navbarItem.addEventListener('mouseleave', function() {
            var dropdown = this.querySelector('.dropdown');
            var dropdown2 = this.querySelector('.dropdown2');
            var dropdown3 = this.querySelector('.dropdown3');
            var dropdown4 = this.querySelector('.dropdown4'); 
            if (dropdown) {
                dropdown.style.display = 'none';
            }
            if (dropdown2) {
                dropdown2.style.display = 'none';
            }
            if (dropdown3) {
                dropdown3.style.display = 'none';
            }
            if (dropdown4) {
                dropdown4.style.display = 'none';
            }
        });
    });
});

let currentIndex = 0;
    const images = document.querySelectorAll('.product-image');

    function showImage(index) {
        images.forEach(image => image.style.display = 'none');
        images[index].style.display = 'block';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function autoSwitchImage() {
        setInterval(nextImage, 8000);
    }
    function goToProduct() {
        console.log("Go to product page");
    }
    showImage(currentIndex);
    autoSwitchImage();