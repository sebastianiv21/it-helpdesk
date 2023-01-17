const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// @desc Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  const { nombreUsuario, contrasenha } = req.body;

  if (!nombreUsuario || !contrasenha) {
    return res.status(400).json({ message: 'Todos los campos son requeridos' });
  }

  const foundUser = await Usuario.findOne({ nombreUsuario }).exec();

  if (!foundUser) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  // const match = await bcrypt.compare(contrasenha, foundUser.contrasenha)

  if (contrasenha !== foundUser.contrasenha) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        nombreUsuario: foundUser.nombreUsuario,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' }
  );

  const refreshToken = jwt.sign(
    { nombreUsuario: foundUser.nombreUsuario },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  // Create secure cookie with refresh token
  res.cookie('jwt', refreshToken, {
    httpOnly: true, //accessible only by web server
    secure: true, // https
    sameSite: 'None', // cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry: set to match refresh Token
  });

  // Send accessToken containing nombreUsuario
  res.json({ accessToken });
});

// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: 'No autorizado' });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Prohibido' });

      const foundUser = await Usuario.findOne({
        nombreUsuario: decoded.nombreUsuario,
      });

      if (!foundUser) return res.status(401).json({ message: 'No autorizado' });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            nombreUsuario: foundUser.nombreUsuario,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ accessToken });
    })
  );
};

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookies if exist
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.json({ message: 'Cookie eliminada' });
};

module.exports = {
  login,
  refresh,
  logout,
};
