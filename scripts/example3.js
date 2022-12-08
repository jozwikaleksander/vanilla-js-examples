const images = ['img/image1.jpg','img/image2.jpg']

const image = document.querySelector('.image');

image.addEventListener('mouseover', () => {
    image.src = images[1];
});
image.addEventListener('mouseout', () => {
    image.src = images[0];
});