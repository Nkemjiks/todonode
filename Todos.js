import Todo from '../models/todo';
const control = {
  getAllTodos (req, res) {
    Todo.find((err, todo) => {
      if (err) {
        throw res.send(err);
      } else {
        res.json(todo);
      }
    });
  },
  addNewTodo (req, res) {
    const todo = new Todo(req.body);
    todo.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Todo created' });
    });
  },
  findOneTodo (req, res) {
    Todo.findById(req.params.id, (err, todo) => {
      if (err) {
        res.send(err);
      } else {
        res.json(todo);
      }
    });
  },
  updateOneTodo (req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json(todo);
    });
  },
  deleteOneTodo (req, res) {
    Todo.remove({_id: req.params.id}, (err, todo) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Todo Deleted!!'});
    });
  }
};
export default control;
