"use strict";

import { Router } from "express";
import {
    createAnnouncement,
    getAnnouncementsForAdmin,
    getAnnouncementDetailsForAdmin,
} from "../controllers/announcement.controller.js";
import { authenticateJwt } from "../middleware/authentication.middleware.js";
import { isAdmin } from "../middleware/authorization.middleware.js";

const router = new Router();

router.use(authenticateJwt);
router.use(isAdmin);

router.post("/", createAnnouncement);
router.get("/", getAnnouncementsForAdmin);
router.get("/:id", getAnnouncementDetailsForAdmin);

export default router;