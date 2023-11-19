const express = require("express");
const router = express.Router();
const {
    contact_index,
    contact_edit,
    contact_add_get,
    contact_detail,
    contact_add_post,
    contact_delete,
    contact_update_put,
} = require("../controllers/contactController");

router.get("/", contact_index);
router.post("/edit", contact_edit);
router.get("/add", contact_add_get);
router.get("/:nama", contact_detail);
router.post("/", contact_add_post);
router.delete("/", contact_delete);
router.put("/", contact_update_put);

module.exports = router;
