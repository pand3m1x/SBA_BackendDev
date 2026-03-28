import express from 'express';
import Task from '../models/Task.js';
import Project from '../models/Project.js';
import { authMiddleware } from '../utils/auth.js';

const router = express.Router();

router.use(authMiddleware)

//POST /api/projects/:projectId/tasks 
router.post('/:projectId/tasks', async (req,res) => {

try{
    //find project
    const project = await Project.findById(req.params.projectId)


    // find task
    const task = await Task.create({

    ...req.body,
    user:req.user._id

    });

    console.log("Like magic, a task was added!", task)
    return res.json(project);

  } catch(err) {

    console.log(err.message,"Task couldn't be added :( ")
    return res.json(500).json(err);

  }
});

//GET /api/projects/:projectId/tasks 

router.get('/:projectId/tasks', async (req,res) => {

  try{

   const tasks = await Task.find({ project: req.params.projectId }) 

    res.json(tasks);
    console.log("Here are the tasks!", tasks)

  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Tasks seem to be missing")

  }
});

//PUT /api/tasks/:taskId 


//DELETE /api/tasks/:taskId 

export default router