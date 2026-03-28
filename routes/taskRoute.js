import express from 'express';
import Task from '../models/Task.js';
import { authMiddleware } from '../utils/auth.js';

const router = express.Router();

router.use(authMiddleware)

//POST /api/projects/:projectId/tasks 
router.post('/:projectId/tasks', async (req,res) => {
try{

    const task = await task.create({
    ...req.body,
    user:req.user._id

    });

    res.json(project);
    console.log("Like magic, a task was added!", task)

  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Task couldn't be added :( ")

  }
})

//GET /api/projects/:projectId/tasks 


//PUT /api/tasks/:taskId 


//DELETE /api/tasks/:taskId 

