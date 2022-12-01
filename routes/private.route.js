const express = require("express");
const router = express.Router();

const { isAdmin } = require("../middlewares/functs");
const { isAuth } = require("../middlewares/functs");

const {
  privateAdminPage,
  createTeaCard,
  deleteTeaCard,
  updateTeaCard,
} = require("../controllers/admin.controller");

router
  .route("/admin")
  .get(isAdmin, isAuth, privateAdminPage)
  .post(isAdmin, isAuth, createTeaCard)
  .delete(isAdmin, isAuth, deleteTeaCard)
  .put(isAdmin, isAuth, updateTeaCard);

// router.get("/signout", deleteSession);

module.exports = router;
