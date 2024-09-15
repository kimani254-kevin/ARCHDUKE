  // script.js

  document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.getElementById('navbarToggler');
    var content = document.getElementById('navbarContent');

    toggler.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('videoThumbnail');

    playButton.addEventListener('click', function() {
        // Hide the thumbnail image
        thumbnail.style.display = 'none';
        
        // Show the video and start playing it
        video.style.display = 'block';
        video.play();
    });
});
    function showPopup() {
        alert("No content");
    }
