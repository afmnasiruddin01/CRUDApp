import { Router } from "express";
var router = Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "respond with a resource" });
});

export default router;
