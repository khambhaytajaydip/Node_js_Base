const express = require('express');
const router = express.Router();
// const adminRouter = require('./admin.routes');
const adminRouter = require('./admin.routes');

router.use('/master/', adminRouter);
// router.use('/admin/', adminRouter);
module.exports = router;