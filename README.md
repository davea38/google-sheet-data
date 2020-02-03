
# Google Sheet Data

A simple library to go fetch data from Google Sheets without having to use OAuth or any configuration other than having made the sheet public.

## Getting Started

```javascript
const googleSheetData = require('./index');

const data = await googleSheetData({
  // https://developers.google.com/sheets/api/guides/concepts
  sheetId: [google sheet id],
  // json, csv, html 
  format: 'json', 
  // >= 0
  sheetNumber: 0,
});
```

### Installing

Requires request-promise library

```bash
npm i request-promise
```
### Prereqs

- Make the sheet public
- Record the sheetId
- *_Doesn't require OAuth or any other authentication._*
- Profit!


