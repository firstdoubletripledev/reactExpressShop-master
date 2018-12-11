// import express module
import express from 'express';

// import cartController for cartController
import SubmitNewsModel from '../models/submitNewsModel';

// Create new express Router
const router = express.Router();

/*
 * GET
 */
// Router get /:email to save submit info
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

// export router
export default router;
