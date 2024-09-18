document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const imageUrl = 'https://www.coremarkmetals.com/files/image/large/STEEL_BEAM_JUNIOR_OMS.jpg';

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
