const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { email, fullName, password } = req.body;
    const hash = await bcrypt.hash(password, 10)
    const newUser = new User({ email, fullName, password: hash });

    newUser.save((error, user) => {
        if (error) {
            res.status(500).json(error)
        }
        else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN)
            res.status(200).json({ message: "User created", user, token })
        }
    })
}
exports.login = (req, res) => {
    User.findOne({ email: req.body.email },
        (err, user) => {
            if (err) {
                res.status(500).json(err)
            }
            else if (user == null) {
                res.status(406).json({ message: "Email not found" })
            }
            else {
                bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                    if (err) {
                        res.status(500).json(err)
                    }
                    else if (!isMatch) {
                        res.status(406).json({ message: "wrong password" })
                    }
                    else {
                        const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
                        res.status(200).json({ message: "Welcome", user, token })
                    }
                })
            }
        })
}


// exports.verify=(req, res)=>{
//     jwt.verify("uifftyfityfyify", process.env.JWT_TOKEN)

// }