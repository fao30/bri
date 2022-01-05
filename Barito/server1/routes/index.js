const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/getlist", controller.getLists);
router.get("/detail/:id", controller.listdetail);
router.post("/addlist/", controller.addlist);
router.patch("/listdone/:id", controller.listdone);
router.get("/search", controller.searchKeyword);

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to Barito, please check API Documentation",
  });
});

module.exports = router;
