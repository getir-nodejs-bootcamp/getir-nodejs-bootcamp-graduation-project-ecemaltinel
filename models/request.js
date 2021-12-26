const Joi = require('joi')

const RequestSchema = Joi.object({
    startDate: Joi.string().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,'YYYY-MM-DD').required(),
    endDate: Joi.string().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,'YYYY-MM-DD').required(),
    minCount: Joi.number().required().min(0),
    maxCount: Joi.number().required().min(1)
  });

  
  module.exports = {
    RequestSchema
  }
