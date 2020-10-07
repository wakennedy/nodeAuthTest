const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};
// //VALIDATE DATA BEFORE WE CREATE
// const { error } = schema.validate(req.body);
// if (error) return res.status(400).send(error.details[0].message);

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
