import express from 'express';

const app = express();

app.use(express.json());


app.post('/users', (req, res) => {
  console.log(req.body);
});

app.listen(3333);