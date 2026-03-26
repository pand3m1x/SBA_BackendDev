import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 2009;

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server up and running: ${PORT}`);
})