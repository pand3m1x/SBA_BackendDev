import express from 'express'

const router = express.Router();

import User from '../models/User.js'
import { signToken } from '../utils/auth.js'
 
// POST /api/users/register - Create a new user
router.post('/register', async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.status(201).json({ token, user });

  } catch (err) {

  console.log(err.message,"yeah, didn't work") // use for any and all try catch blocks :)
   return res.status(400).json(err);

  }
});
 
// POST /api/users/login - Authenticate a user and return a token // add try catch
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
 
  try{
  if (!user) {
    return res.status(400).json({ message: "Can't find this user" });
  }
 
  const correctPw = await user.isCorrectPassword(req.body.password);
 
  if (!correctPw) {
    return res.status(400).json({ message: 'Wrong password!' });
  }
  const token = signToken(user);
  res.json({ token, user });
  console.log({ token, user }); 

 }catch(err){
  console.log(err.message)
  return res.status(400).json(err);
  
}
});
 
export default router