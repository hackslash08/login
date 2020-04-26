const validate = require("validate.js");

var constraints = {
    "create": {
        "name": {
            "presence": true
        },
        "action": {
            "presence": true
        },
        "method": {
            "presence": true
        },
        "type": {
            "presence": true
        },
        "formFields": {
            "presence": true
        }
    },
    "get": {
        "name": {
            "presence": true
        }
    },
    "update": {
        "name": {
            "presence": true
        },
        "update": {
            "presence": true
        },
    }
};

module.exports.createValidate = function (body) {
    return validate.async(body, constraints.create)
};

module.exports.getValidate = function (body) {
    return validate.async(body, constraints.get)
};

module.exports.updateValidate = function (body) {
    return validate.async(body, constraints.update)
};