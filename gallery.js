const mainDisplayImage = document.getElementById("mainDisplayImage");

document.querySelectorAll(".viewButton").forEach(function (button) {
  button.addEventListener("click", function () {
    const thumbnailImg = button.parentElement.querySelector("img");

    const isOpen = mainDisplayImage.style.display === "block" &&
                   mainDisplayImage.src === thumbnailImg.src;

    if (isOpen) {
      mainDisplayImage.style.display = "none";
    } else {
      mainDisplayImage.src = thumbnailImg.src;
      mainDisplayImage.style.display = "block";
    }
  });
});

const buttonHTML = document.querySelectorAll("button");
                    buttonHTML.forEach((button) => {
                        button.style.display = "none";
                        const thumbnail = button.parentElement;
                        thumbnail.addEventListener("mouseenter", () => {
                            button.style.display = "inline-block";
                        });
                        thumbnail.addEventListener("mouseleave", () => {
                            button.style.display = "none";
                        });
                    });
