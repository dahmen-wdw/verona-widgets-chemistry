# IQB Widgets scripts

This directory contains tooling- and utility-scripts for IQB Widgets.

## distpacker.js

This is a copy of [iqb-dev-components/distpacker.js](https://github.com/iqb-berlin/iqb-dev-components/blob/master/src/distpacker.js).
The main fix applied here is in `replaceUrlInCss`, URLs including `document.baseURI` are also ignored.
This is required for Angular, where a document-relative URL is constructed and should not be replaced.
