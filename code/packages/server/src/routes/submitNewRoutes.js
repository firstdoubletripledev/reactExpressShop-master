const express = require('express');
const submitNewsModel = require('../models/submitNewsModel.js');

const router = express.Router();

/*
 * GET
 */
router.get('/:email', (req, res) => {
  const { email = null } = req.params;
  const ip = req.headers['x-forwarded-for'];

  if (email === null) {
    return res.json({ code: 0, msg: 'False' });
  }
  const submitNews = new submitNewsModel({
    email,
    ip,
  });
  submitNews.save((err, submitNews) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when creating submitNews',
        error: err,
      });
    }
    return res.status(201).json({ code: 1, msg: 'Success', data: submitNews });
  });
});
module.exports = router;
