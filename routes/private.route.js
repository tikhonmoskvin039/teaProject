const express = require("express");
const router = express.Router();

const { isAdmin } = require("../middlewares/functs");


const {
  privateAdminPage,
  createTeaCard,
  deleteTeaCard,
  updateTeaCard,
} = require("../controllers/admin.controller");

router
  .route("/admin")
  .get(isAdmin, privateAdminPage)
  .post(isAdmin, createTeaCard)
  .delete(isAdmin, deleteTeaCard)
  .put(isAdmin,updateTeaCard);

// router.get("/signout", deleteSession);

module.exports = router;
