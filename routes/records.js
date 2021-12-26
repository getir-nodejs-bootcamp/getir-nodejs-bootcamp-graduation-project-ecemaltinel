const express = require('express');
const {getAllRecords,getSpecificRecords} = require('../controllers/records')
const {isValid} = require('../middlewares/validate')
const {RequestSchema} = require('../models/request')

const router = express.Router();

router.route('/').get(getAllRecords)
router.route('/').post(isValid(RequestSchema,"body"),getSpecificRecords)

module.exports = router;