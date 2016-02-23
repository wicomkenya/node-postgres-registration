var router = require('express').Router();

// TODO
// Browser client route here


// Browser error routes
router.use(function(req, res) {
  res.status(404);
  return res.render('error', {
    errorNumber: 404,
    message: 'We don\'t know what happened, but we\'re working on it :)'
  });
});

module.exports = router;