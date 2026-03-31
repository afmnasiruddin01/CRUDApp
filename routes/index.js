import { Router } from "express";
var router = Router();

/* GET API home. */
router.get("/", function (req, res, next) {
  res.json({
    message: "Express API is running",
    title: "Express",
  });
});

export default router;
