let images = document.querySelectorAll(".inactive_image, .active_image");
const buttons = Array.from(document.getElementsByTagName("button"));

let isAnyImageSelected = false;
let imageIndex = 0;

images.forEach(function (image, index) {
    image.addEventListener("click", function () {
        const isAlreadyActive = this.classList.contains("active_image");

        images.forEach(function (el) {
            el.classList.remove("active_image");
            el.classList.add("inactive_image");
        });

        if (!isAlreadyActive) {
            this.classList.remove("inactive_image");
            this.classList.add("active_image");

            isAnyImageSelected = true;
            imageIndex = index;
        } else {
            isAnyImageSelected = false;
        }
    });
});

function SetImageToActive(index) {
    images[index].classList.remove("inactive_image");
    images[index].classList.add("active_image");
}

function SetImageToInactive(index) {
    images[index].classList.remove("active_image");
    images[index].classList.add("inactive_image");
}

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (this.id === "next_button") {
            images = document.querySelectorAll(".inactive_image, .active_image");

            if (isAnyImageSelected) {
                SetImageToInactive(imageIndex);
                imageIndex = (imageIndex + 1) % images.length;
            } else {
                isAnyImageSelected = true;
            }

            SetImageToActive(imageIndex);
        }
        else {
            images = document.querySelectorAll(".inactive_image, .active_image");

            if (isAnyImageSelected) {
                SetImageToInactive(imageIndex);
                imageIndex = (imageIndex - 1 + images.length) % images.length;
            } else {
                isAnyImageSelected = true;
            }

            SetImageToActive(imageIndex);
        }
    });
});