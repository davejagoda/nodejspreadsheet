var Spreadsheet = require('edit-google-spreadsheet');
 
Spreadsheet.load({
  debug: true,
  spreadsheetName: process.env.SPREADSHEET,
  worksheetName: process.env.WORKSHEET,
  oauth : {
    email: process.env.EMAIL,
    keyFile: process.env.KEYFILE
  },
}, function sheetReady(err, spreadsheet) {
  console.log(process.env.EMAIL);
  console.log(process.env.KEYFILE);
  console.log(process.env.SPREADSHEET);
  console.log(process.env.WORKSHEET);
  if(err) throw err;

  spreadsheet.receive(function(err, rows, info) {
    if(err) throw err;
    console.log('found rows:', rows);
  });
});
