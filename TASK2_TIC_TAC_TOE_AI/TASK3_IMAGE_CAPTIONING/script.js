const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const caption = document.getElementById("caption");

imageInput.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        caption.innerText = "Click 'Generate Caption'";
    }
});

function generateCaption() {
    if (!imageInput.files.length) {
        caption.innerText = "Please upload an image first!";
        return;
    }

    const captions = [
        "A beautiful natural scenery.",
        "A person smiling at the camera.",
        "A cute pet enjoying the day.",
        "A modern city landscape.",
        "A delicious food item.",
        "An amazing sunset view.",
        "A vehicle on the road.",
        "People enjoying together."
    ];

    const randomCaption = captions[Math.floor(Math.random() * captions.length)];
    caption.innerText = randomCaption;
}