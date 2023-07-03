'use strict';

import { scriptContainer } from '/src/main';
import { extractScriptAsString, deleteNamespace } from '/src/utils';

chrome.browserAction.onClicked.addListener((_tab: chrome.tabs.Tab) => {
  // @ts-ignore
  chrome.tabs.executeScript(null, {
    code: deleteNamespace(extractScriptAsString(scriptContainer.toString()))
  });
});
