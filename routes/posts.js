const router = require("express").Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get("/",(req,res)=>res.send(`User Route`));


module.exports = router