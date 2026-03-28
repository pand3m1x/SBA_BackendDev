import express from 'express';
import 'dotenv/config';
import './config/connection.js'
import userRoutes from './routes/userRoute.js';
import projectRoutes from './routes/projectRoute.js'
import taskRoutes from './routes/taskRoute.js'
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2009;


app.use(express.json())
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/projects', taskRoutes);

app.get('/', ( req, res ) => {
  res.send('Howdy Cow-folks!')
});
app.listen(PORT, () => {
  console.log(`Yee-Haw Server up and runnin': http://localhost:${PORT}`);
})