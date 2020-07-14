const User = require('../../database/models').User;

exports.index = function(req, res) {
    user = User.findOne({
        where: {
            id: req.auth.user.id
        }
    }).then((user) => {
        if (user) {
            return res.json(user);
        } else {
            return res.status(422).json({
                message: "User not found"
            })
        }
    });
}