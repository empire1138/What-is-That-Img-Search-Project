const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//.env loaded file
require('dotenv').config();

const User = require('../models/users');

exports.logout = async(req, res, next) => {
    
}