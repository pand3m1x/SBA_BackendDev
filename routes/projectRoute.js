import express from 'express';
import Project from '../models/Project.js'
import { authMiddleware } from '../utils/auth.js';

const router = express.Router();

router.use(authMiddleware)


// POST /api/projects creating projects (similiar to notes/labs?)

router.post('/', async (req,res) => {
  try{
    const project = await Project.create({
    ...req.body,
    user:req.user._id

    });

    res.json(project);
    console.log("Ayyeee! Project added!", project)
  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Nothing was made")
  }
});

export default router;