'use strict';

import { scriptContainer } from '/src/main';
import { extractScriptAsString, deleteNamespace } from '/src/utils';

browser.browserAction.onClicked.addListener((_tab: browser.tabs.Tab) => {
  browser.tabs.executeScript({
    code: deleteNamespace(extractScriptAsString(scriptContainer.toString()))
  });
});
