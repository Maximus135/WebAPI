"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

app.use((0, _cookieParser["default"])());
app.get('/', function (req, res) {
  console.log('Cookies: ', req.cookies);

  if (req.cookies.whoisit === 'me') {
    res.status(200).json({
      status: 'Authorized'
    });
  } else {
    res.status(401).json({
      status: 'Unauthorized'
    });
  }
});
app.post('/', function (req, res) {
  if (req.cookies.whoisit === 'me') {
    res.status(200).json({
      status: 'created'
    });
  } else {
    res.status(401).json({
      status: 'Unauthorized'
    });
  }
});
app.put('/', function (req, res) {
  if (req.cookies.whoisit === 'me') {
    res.status(200).json({
      status: "updated"
    });
  } else {
    res.status(401).json({
      status: 'Unauthorized'
    });
  }
});
server.listen(4000, function () {
  console.log("app is listening to port 4000");
});
//# sourceMappingURL=index.js.map