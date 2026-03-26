import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2009;

app.use(express.json())

app.get('/', ( req, res ) => {
  res.send('Howdy Cow-folks!')
});
app.listen(PORT, () => {
  console.log(`Yee-Haw Server up and runnin': http://localhost:${PORT}`);
})