'use strict';

import { scriptContainer } from './main';
import { extractScriptAsString } from './utils';

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    code : extractScriptAsString(scriptContainer.toString())
  });
});
