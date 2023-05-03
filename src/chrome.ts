'use strict';

import { scriptContainer } from './main';
import { extractScriptAsString, deleteNamespace } from './utils';

chrome.browserAction.onClicked.addListener((_tab: chrome.tabs.Tab) => {
  // @ts-ignore
  chrome.tabs.executeScript(null, {
    code: deleteNamespace(extractScriptAsString(scriptContainer.toString()))
  });
});
