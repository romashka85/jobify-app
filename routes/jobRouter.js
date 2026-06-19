import { Router } from "express";
const router = Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  showStats,
  updateJob,
} from "../controllers/jobController.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";

// router.get("/", getAllJobs);
// router.post("/", createJob);

router
  .route("/")
  .get(getAllJobs)
  .post(validateJobInput, checkForTestUser, createJob);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateIdParam, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
