"use strict";

// We use the chrome.storage API to store, retrieve, and track changes to user data. 
chrome.storage.sync.get("activated", function(obj){

  // Check in the chrome storage if the extension has been activated by clicking
  // the extension icon (obj.activated can only be true or false)
  let initialToggleState;
  console.log("Initial check.");
  initialToggleState = obj.activated;

  // If the extension has been activated (obj.activated is true)
  if (initialToggleState) { 
    // chrome.extension.getURL converts the relative path to nightmode.css
    // (loaded in "web_accessible_resources" in the manifest.json) into a fully-qualified URL.
    let a     = chrome.extension.getURL("nightmode.css"),

    // element.appendChild expects a node. That's why we first create the node,
    // set it's attributes and finally we append it to the website.
        link  = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "nightMessenger";
    link.href = a;

    document.head.appendChild(link);
  } 
});
