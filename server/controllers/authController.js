const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
    // do stuff
})

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    // do stuff
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookies if exist
const logout = (req, res) => {
    // do stuff
}

module.exports = {
    login,
    refresh,
    logout
}
