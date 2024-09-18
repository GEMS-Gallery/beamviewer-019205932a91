document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/I-Beam_002.JPG/440px-I-Beam_002.JPG';

    const img = new Image();
    img.src = imageUrl;
    img.alt = 'Steel Beam';
    img.onload = () => {
        imageContainer.appendChild(img);
    };
    img.onerror = () => {
        imageContainer.innerHTML = 'Error loading image. Please try again later.';
    };
});
