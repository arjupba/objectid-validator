var _lodash = require("lodash");
var objectID = require("mongodb").ObjectID;

export const idValidate = (schema = {}, key = Object.keys(schema)[0]) => (
  req,
  res,
  next
) => {
  _lodash.isEmpty(schema)
    ? next()
    : req.body[key]
      ? objectID.isValid(req.body[key])
        ? next()
        : res.status(400).json({
            name: "invalid",
            param: key,
            required: true,
            valid: false,
            message: key + " is invalid"
          })
      : schema[key].required
        ? res.status(400).json({
            name: "required",
            param: key,
            required: true,
            valid: false,
            message: key + " is required"
          })
        : next();
};
