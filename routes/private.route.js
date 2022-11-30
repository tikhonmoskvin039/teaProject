const express = require("express");
const router = express.Router();

const {
  privateAdminPage,
  createTeaCard,
  deleteTeaCard,
  updateTeaCard,
} = require("../controllers/admin.controller");

router.route("/admin")
.get(privateAdminPage)
.post(createTeaCard)
.delete(deleteTeaCard)
.put(updateTeaCard)

// router.get("/signout", deleteSession);

module.exports = router;
