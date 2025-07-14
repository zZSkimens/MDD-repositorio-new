"use strict";
import { Router } from "express";
import authRoutes from "./auth.routes.js"
import userRoutes from "./user.routes.js";
import announcementRoutes from './announcement.routes.js';
import recipientRoutes from "./recipient.routes.js";

const router = new Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/announcements", announcementRoutes); 
router.use("/recipients", recipientRoutes);

export default router;