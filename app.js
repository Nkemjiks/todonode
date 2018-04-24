import express from 'express';
import router from './routes/routeTodo';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/todo-list');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
