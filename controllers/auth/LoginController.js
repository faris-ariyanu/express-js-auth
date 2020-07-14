require('dotenv').config();
const jwt = require("jsonwebtoken");
const User = require('../../database/models').User;
const bcrypt = require('bcrypt');

exports.index = function(req, res) {
    user = User.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result == true) {
                    const token = jwt.sign({ user: user }, process.env.SECRET_KEY);
                    return res
                        .status(200)
                        .json({
                            token: token,
                        })
                } else {
                    return res.status(422).json({
                        message: "Invalid Credential"
                    })
                }
            });
        } else {
            return res.status(422).json({
                message: "Invalid Credential"
            })
        }
    });
}