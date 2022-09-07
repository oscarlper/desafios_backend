const path = require('path')
const logger = require('./controllers/logger.js')

function getRoot(req, res) {}

function getLogin(req, res) {
  if (req.isAuthenticated()) {
    var user = req.user;
    console.log("user logueado");
    res.render("home.ejs", {
      usuario: user.username,
      nombre: user.firstName,
      apellido: user.lastName,
      email: user.email,
    });
  } else {
    console.log("user NO logueado");
    logger.warn(`timestamp: ${Date.now()} - url: ${req.url} - method: ${req.method} - User no logueado` );
    res.sendFile(__dirname + "/html/login.html");
  }
}

function getSignup(req, res) {
  res.sendFile(__dirname + "/html/signup.html");
}

function postLogin(req, res) {
  var user = req.user;

  res.sendFile(__dirname + "/html/index.html");
}

function postSignup(req, res) {
  var user = req.user;

  res.sendFile(__dirname + "/html/index.html");
}

function getFaillogin(req, res) {

  res.render("login-error.ejs", {})
}

function getFailsignup(req, res) {
  
  res.render("signup-error.ejs", {})
}

function getLogout(req, res) {
  req.logout();
  res.sendFile(__dirname + "/html/home.html");
}

function failRoute(req, res) {
  const { url, method } = req;
  logger.error(`timestamp: ${Date.now()} - url: ${url} - method: ${method} - routing=error`);
  res.status(404).render("routing-error", {});
}

module.exports = {
  getRoot,
  getLogin,
  postLogin,
  getFaillogin,
  getLogout,
  failRoute,
  getSignup,
  postSignup,
  getFailsignup,
};
