// ito naman para sa drop down menu
function toggleDropdown() {
    var dropdown = document.getElementById('dropdownCont');
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "flex" : "none";
}

//ito yung para mag change yung background
function changeBackground(image, event) {
    document.body.style.backgroundImage = "url('" + image + "')";
    document.getElementById('dropdownCont').style.display = 'none'; 
    event.stopPropagation();
}

// ito yung ripple effect na ginawa ko sa last na code ko.
document.body.addEventListener('click', function(e) {

    var ripple = document.createElement('span');
    ripple.classList.add('ripple');

    ripple.style.width = ripple.style.height = '30px';
    ripple.style.left = (e.clientX - 15) + 'px'; 
    ripple.style.top = (e.clientY - 15) + 'px'; 

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// ito yung fuction ng cursor image... paborito
document.addEventListener('mousemove', function(e) {
    var image = document.getElementById('followMe');
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var imageWidth = image.offsetWidth / 2;
    var imageHeight = image.offsetHeight / 2;
    
    image.style.left = (mouseX - imageWidth) + 'px';
    image.style.top = (mouseY - imageHeight) + 'px';
});