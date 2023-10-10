// Get DOM elements
const playQualitySelector = document.getElementById('playQualitySelector');
const downloadQualitySelector = document.getElementById('downloadQualitySelector');
const playButton = document.getElementById('playButton');
const downloadButton = document.getElementById('downloadButton');
const vlcButton = document.getElementById('vlcButton');
const mxPlayerFreeButton = document.getElementById('mxPlayerFreeButton');
const mxPlayerProButton = document.getElementById('mxPlayerProButton');
const mobileButtons = document.getElementById('mobileButtons');

// Event listener for the play button (browser)
playButton.addEventListener('click', () => {
    const selectedPlayOption = playQualitySelector.options[playQualitySelector.selectedIndex];
    const videoUrl = selectedPlayOption.getAttribute('data-video-url');
    window.open(videoUrl, '_blank');
});

// Check if the user is on a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Display mobile buttons
    mobileButtons.style.display = 'block';

    // Event listener for the VLC Player button
    vlcButton.addEventListener('click', () => {
        const selectedPlayOption = playQualitySelector.options[playQualitySelector.selectedIndex];
        const videoUrl = selectedPlayOption.getAttribute('data-video-url');
        // Open the video URL in VLC Player (You can replace this with the actual URL)
        window.open('vlc://' + videoUrl);
    });

    // Event listener for MX Player (Free) button
    mxPlayerFreeButton.addEventListener('click', () => {
        const selectedPlayOption = playQualitySelector.options[playQualitySelector.selectedIndex];
        const videoUrl = selectedPlayOption.getAttribute('data-video-url');
        // Open the video URL in MX Player Free (You can replace this with the actual URL)
        window.open('mxplayerfree://' + videoUrl);
    });

    // Event listener for MX Player (Pro) button
    mxPlayerProButton.addEventListener('click', () => {
        const selectedPlayOption = playQualitySelector.options[playQualitySelector.selectedIndex];
        const videoUrl = selectedPlayOption.getAttribute('data-video-url');
        // Open the video URL in MX Player Pro (You can replace this with the actual URL)
        window.open('mxplayerpro://' + videoUrl);
    });
}

// Event listener for the download button
downloadButton.addEventListener('click', () => {
    const selectedDownloadOption = downloadQualitySelector.options[downloadQualitySelector.selectedIndex];
    const videoUrl = selectedDownloadOption.getAttribute('data-video-url');

    // Change the download link's href to the selected video URL
    downloadButton.href = videoUrl;
});
