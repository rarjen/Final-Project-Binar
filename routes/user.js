const router = require("express").Router();
const authorize = require("../middlewares/authorize");
const user = require("../controllers/user");
const role = require("../utils/role-based/role")

router.get("/show-bio", authorize(role.buyer), user.showBio);
router.post("/create-bio", authorize(role.buyer), user.createBio);
router.put("/update-bio", authorize(role.buyer), user.updateBio);
router.put("/delete-account", authorize(role.buyer), user.deleteAccount);
router.get("/get-users", authorize(role.admin), user.getAllUser);
router.get("/get-user/:user_id", authorize(role.admin), user.getUser);

module.exports = router;
