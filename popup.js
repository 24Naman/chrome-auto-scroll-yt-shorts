// Function to get the 'Next' button element
function getNextButton() {
    return document.querySelector(
        "#navigation-button-down > ytd-button-renderer > yt-button-shape"
    );
}

// Function to click the 'Next' button
function skipShort() {
    console.warn("Skipping")
    const button = getNextButton();
    console.warn(button);
    if (button) {
        button.click();
    }
    else {
        console.warn("Couldn't find the YT Shorts down button");
    }
}

// Function to start auto-skipping every 30 seconds
function startAutoSkip() {
    setInterval(() => {
        console.log("Skipping to the next short...");
        skipShort();
    }, 30000); // 30 seconds
}

// Call the startAutoSkip function when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.error("1234");
    startAutoSkip();
});
