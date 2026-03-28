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

// GET /api/projects
router.get('/', async (req,res) => {

  try{

    const projects = await Project.find({})

    res.json(projects);
    console.log("Here are the projects!", projects)

  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Projects seem to be missing")

  }
});

// GET /api/projects/:id 

router.get('/:id', async (req,res) => {

  try{

    const project = await Project.findById(req.params.id)

    res.json(project);
    console.log("Here is the project!", project)

  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Project not found")

  }
});

// PUT /api/projects/:id for updating

router.put('/:id', async (req,res) => {

  try{

    const newDoc = req.body
    newDoc.user = req.user._id

    const checkProject = await Project.findById(req.params.id)

    if(checkProject.user == req.user._id) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true})

    if (!project) {
      console.log(err.message)
      return res.status(404).json({ message: 'No Project found with this id!' });
    }

    console.log("Project updated!", project)
    return res.json(project)};

    return res.status(403).json({ message: "This project can't be edited by you!" });

  } catch(err) {

    res.json(500).json(err);
    console.log(err.message,"Project not found")

  }
});

// DELETE /api/projects/:id


export default router;