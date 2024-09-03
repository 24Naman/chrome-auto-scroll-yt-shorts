console.log("Content script loaded.");

let isScrollingEnabled = false;

function scrollToNextShort() {
  const nextButton = document.querySelector('button[aria-label="Next"]');
  if (nextButton && isScrollingEnabled) {
    nextButton.click();
  }
}

function startAutoScroll() {
  isScrollingEnabled = true;
  setInterval(scrollToNextShort, 5000); // Adjust time interval as needed
}

function stopAutoScroll() {
  isScrollingEnabled = false;
}

chrome.storage.sync.get(['autoScrollEnabled'], function (result) {
  if (result.autoScrollEnabled) {
    startAutoScroll();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "startScroll") {
      // Start scrolling logic
      startAutoScroll();
      sendResponse({status: "started"});
    } else if (request.action === "stopScroll") {
      // Stop scrolling logic
      stopAutoScroll();
      sendResponse({status: "stopped"});
    }
  });
  
