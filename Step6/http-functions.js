function getHTML (options, callback) {
  var https = require("https");
  /* Add your code here */
  let buffer = "";
  https.get(options, function(response) {
    response.setEncoding("utf8");
    response.on("data", function(data) {
      buffer += data;
    });

    response.on("end", function() {
      callback(buffer);
    });
  });
}

function printHTML (html) {
  console.log(html);
}


module.exports = {
  getHTML: getHTML,
  printHTML: printHTML
};