const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//.env loaded file
require('dotenv').config();

const User = require('../models/users');

exports.signup = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) return;

    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;

    // This should check for used email and throw an error 
    const [[compareFindUser]] = await User.find(email);
    if (compareFindUser) {
        res.json({
            data: null,
            error: true,
            msg: 'Email All Ready in use'
        });
        throw error; 
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const userDetails = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashedPassword,
        };

        const result = await User.save(userDetails);

        res.status(201).json({ message: 'User registered!' });


    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }

};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        // Look to check for user email
        const [[storedUser]] = await User.find(email);
        if (!storedUser) {
            res.json({
                data: null,
                error: true,
                msg: 'Email not found'
            });
        }
        const savedPassword = `${storedUser.passWord}`;

        const isEqual = await bcrypt.compare(password, savedPassword);

        if (isEqual) {
            const userPayLoad = {
                lastName: storedUser.lastName,
                firstName: storedUser.firstName,
                email: storedUser.email,
                userId: storedUser.id
            }

            const encodedUser = jwt.sign(userPayLoad, process.env.JWT_KEY)
            res.status(200).json(encodedUser);
        } else {
            res.status(403).json({
                data: null,
                error: true,
                msg: 'Password not found'
            })
            const error = new Error('Wrong Password!');
            error.statusCode = 403;
            throw error;
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        res.json({
            data: null,
            error: true,
            msg: 'Error Logging In'
        });
        next(error);
    }
};