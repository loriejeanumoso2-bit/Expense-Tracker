const SHEET_ID = "1hjsPnm3UBz90Es3CqX_861JKSeDvMzhFrxXhiUQxfEA";

function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Expense Tracker");
}

function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}
