import express from "express";
import * as cvController from "../controllers/cv.controller.js";
import validateCv from "../middlewares/validateCv.middleware.js";

const router = express.Router();

router.get("/leer", cvController.readCv);

router.post(
  "/generar",
  validateCv,
  cvController.generateCv
);

export default router;