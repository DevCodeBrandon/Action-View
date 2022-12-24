chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId !== chrome.windows.WINDOW_ID_NONE) {
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, { focused: true });
  }
});
