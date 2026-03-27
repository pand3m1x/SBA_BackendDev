import express from 'express';
import Project from '../models/Project.js'
import { authMiddleware } from '../utils/auth.js';

const router = express.Router();

router.use(authMiddleware)

export default router;