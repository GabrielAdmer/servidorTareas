//rutas para auttenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers.js');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//INiciar un usuario
//api/auth
router.post(
  '/',
  // check('email', 'Agrega un email valido').isEmail(),
  // check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6 }),
  authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get('/', auth, authController.usuarioAutenticado);

module.exports = router;
