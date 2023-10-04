// Get references to elements
const qualitySelector = document.getElementById('qualitySelector');
const playButton = document.getElementById('playButton');
const vlcButton = document.getElementById('vlcButton');
const mxPlayerFreeButton = document.getElementById('mxPlayerFreeButton');
const mxPlayerProButton = document.getElementById('mxPlayerProButton');
const mobileButtons = document.getElementById('mobileButtons');

// Event listener for the play button (browser)
playButton.addEventListener('click', () => {
    const selectedOption = qualitySelector.options[qualitySelector.selectedIndex];
    const videoUrl = selectedOption.getAttribute('data-video-url');
    window.open(videoUrl, '_blank');
});

// Check if the user is on a mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Display mobile buttons
    mobileButtons.style.display = 'block';

    // Event listener for the VLC Player button
    vlcButton.addEventListener('click', () => {
        const selectedOption = qualitySelector.options[qualitySelector.selectedIndex];
        const videoUrl = `vlc://${selectedOption.getAttribute('data-video-url')}`;
        window.open(videoUrl, '_system');
    });

    // Event listener for MX Player (Free) button
    mxPlayerFreeButton.addEventListener('click', () => {
        const selectedOption = qualitySelector.options[qualitySelector.selectedIndex];
        const videoUrl = `intent:${selectedOption.getAttribute('data-video-url')}#Intent;package=com.mxtech.videoplayer.ad;S.title=@YashRajPw;end`;
        window.open(videoUrl, '_system');
    });

    // Event listener for MX Player (Pro) button
    mxPlayerProButton.addEventListener('click', () => {
        const selectedOption = qualitySelector.options[qualitySelector.selectedIndex];
        const videoUrl = `intent:${selectedOption.getAttribute('data-video-url')}#Intent;package=com.mxtech.videoplayer.pro;S.title=@YashRajPw;end`;
        window.open(videoUrl, '_system');
    });
}
