"use strict";

// Create the global variable "toggle" to fetch the state of the extension
// and use it in the "toggleOnOff" function
var toggle;

chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log(toggle);
}); 

// This is the function triggered when the user clicks on the icon of the extension
var toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    // Change Icon
    chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "night.js"});
  } else {
    // Change Icon
    chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "day.js"});
  }
};

// We add the event listener for a click in the icon for the extension
chrome.browserAction.onClicked.addListener(toggleOnOff);

/* 👻👻👻 Ghost Code 👻👻👻  */
// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log("lasfjawoeigjaoweifj"); 
// });