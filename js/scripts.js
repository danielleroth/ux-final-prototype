// My Scripts
var limit = 3;
var randNum = Math.floor(Math.random() + limit);

console.log(randNum);

//Array of Images
var img = ['img/one.jpg', 'img/two.jpg', 'img/three.jpeg'];

//Get Images via attr method
$('#banner').attr( 'src', img[randNum] );


$("figure").lightGallery(); 