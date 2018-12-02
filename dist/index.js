var _lodash = require('lodash')
var objectID = require('mongoose').Types.ObjectId

Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.idValidate = idValidate
exports.idValidateInParam = idValidateInParam

function idValidate (schema = {}, key = Object.keys(schema)[0]) {
  return function (req, res, next) {
    _lodash.isEmpty(schema)
      ? next()
      : req.body[key]
        ? objectID.isValid(req.body[key])
          ? next()
          : res.status(400).json({
            name: 'invalid',
            param: key,
            required: true,
            valid: false,
            message: key + ' is invalid'
          })
        : schema[key].required
          ? res.status(400).json({
            name: 'required',
            param: key,
            required: true,
            valid: false,
            message: key + ' is required'
          })
          : next()
  }
}

function idValidateInParam (key) {
  return function (req, res, next) {
    _lodash.isEmpty(key)
      ? next()
      : req.params[key]
        ? objectID.isValid(req.params[key])
          ? next()
          : res.status(400).json({
            name: 'invalid',
            param: key,
            required: true,
            valid: false,
            message: key + ' is invalid'
          })
        : res.status(400).json({
          name: 'required',
          param: key,
          required: true,
          valid: false,
          message: key + ' is required'
        })
  }
}

exports.default = {
  idValidate: idValidate,
  idValidateInParam: idValidateInParam
}
