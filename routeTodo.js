import express from 'express';
import control from '../controllers/Todos';
import path from 'path';

const router = express.Router();

router.use((req, res, next) => {
  console.log(req.body, req.method, req.url);
  next();
});
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.post('/add', control.addNewTodo);
router.get('/getall', control.getAllTodos);
router.get('/task/:id', control.findOneTodo);
router.put('/task/:id', control.updateOneTodo);
router.delete('/task/:id', control.deleteOneTodo);

export default router;
