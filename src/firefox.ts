'use strict';

import { scriptContainer } from './main';
import { extractScriptAsString, deleteNamespace } from './utils';

browser.browserAction.onClicked.addListener((_tab: browser.tabs.Tab) => {
  browser.tabs.executeScript({
    code: deleteNamespace(extractScriptAsString(scriptContainer.toString()))
  });
});
