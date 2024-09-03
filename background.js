chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "startScrolling") {
      startScrolling();
    } else if (request.action === "stopScrolling") {
      stopScrolling();
    }
  });
  
  let scrollingInterval;
  
  function startScrolling() {
    scrollingInterval = setInterval(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1000); // Adjust the interval as needed
  }
  
  function stopScrolling() {
    clearInterval(scrollingInterval);
  }