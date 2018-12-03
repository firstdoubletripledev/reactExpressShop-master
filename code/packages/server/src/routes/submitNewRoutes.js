const express = require('express');
const SubmitNewsModel = require('../models/submitNewsModel.js');

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
  const submitNews = new SubmitNewsModel({
    email,
    ip,
  });
  submitNews.save((err, submitNewsSave) => {
    if (err) {
      return res.status(500).json({
        message: 'Error when creating submitNews',
        error: err,
      });
    }
    return res.status(201).json({ code: 1, msg: 'Success', data: submitNewsSave });
  });
});
module.exports = router;
