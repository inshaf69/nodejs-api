const {check, validationResult} = require('express-validator');

exports.validateProfilePost = [
    check('status','status is required').not().isEmpty(),
    check('skills','skills is required').not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array() });
      next();
    },
  ];  