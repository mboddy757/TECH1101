let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Highway.jpg') {
      myImage.setAttribute ('src','images/IcyLake.jpg');
    } else {
      myImage.setAttribute ('src','images/Highway.jpg');
    }
}