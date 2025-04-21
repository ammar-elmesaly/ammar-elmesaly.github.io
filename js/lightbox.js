document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightBoxContainer = document.querySelector(".lightbox");
    const lightBoxImage = document.querySelector(".lightbox-content img");
    const lightBoxPrev = document.querySelector(".lightbox-prev");
    const lightBoxNext = document.querySelector(".lightbox-next");

    document.body.appendChild(lightBoxContainer);

    let index = 1;
    function showLightBox(n) {
        if (n > galleryItems.length) {
            index = 1;
        } else if (n < 1) {
            index = galleryItems.length;
        }

        let imageLocation = galleryItems[index - 1].children[0].getAttribute("src");
        lightBoxImage.setAttribute("src", imageLocation);
    }

    function currentImage() {
        lightBoxContainer.style.display="flex";
        let imageIndex = parseInt(this.getAttribute("data-index"));
        showLightBox(index = imageIndex);
    }

    for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].addEventListener("click", currentImage);
    }

    function sliderImage(n) {
        showLightBox(index += n);
    }

    function prevImage() {
        sliderImage(-1);
    }

    function nextImage() {
        sliderImage(1);
    }

    lightBoxPrev.addEventListener("click", prevImage);
    lightBoxNext.addEventListener("click", nextImage);

    function closeLightBox(event) {
        if (event.currentTarget === event.target) {
            lightBoxContainer.style.display = "none";
        }
    }
    
    lightBoxContainer.addEventListener("click", closeLightBox);
    
});