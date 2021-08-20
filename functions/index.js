const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.sendComment = functions.https.onRequest(
    function func(request, response) {
      fetch(request.query.page);

      response.json({result: "OK"});
    }
);
