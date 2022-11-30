const express = require("express");
const router = express.Router();
// const { isAdmin } = require("../middlewares/functs");

const {
  //   createUserAndSession,
  checkAdminAndCreateSession,
  // checkUserAndCreateSession,
  renderSignInForm,
  deleteSession,
} = require("../controllers/auth.controller");

router
  .route("/signin")
  .get(renderSignInForm) // Страница аутентификации пользователя
  .post(checkAdminAndCreateSession); // Аутентификация пользователя

router.get("/signout", deleteSession);

module.exports = router;
