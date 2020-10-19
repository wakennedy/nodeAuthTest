const router = require("express").Router();
const User = require("../model/User");
const Item = require("../model/Item");
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.send(req.user);
  //   res.json({
  //     posts: {
  //       title: "my first post",
  //       description: "random data you shouldnt access",
  //     },
  //   });
});
module.exports = router;
