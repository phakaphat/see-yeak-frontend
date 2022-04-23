const express = require("express");
const router = express.Router();

// ใส่ path ตรงนี้
router.use("/test", require("./test").default);
router.use("/contractPost", require("./contractPost").default);
router.use("/user", require("./user").default);
// ------------

exports.default = router;