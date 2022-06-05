const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src)
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}

const chickenPics = document.querySelectorAll('img');


// Manipulates chicken pictures to all look the same
// for (let img of chickenPics) {
//     img.src = 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'
// }