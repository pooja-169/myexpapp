var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/internal_exam', function(req, res, next) {
  res.send('File Uploaded ');
});
module.exports = router;
