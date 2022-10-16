const router = require("express").Router()
const Todo = require("../models/Todo");

// routes
router.post("/app/todo", (req, res) => {
    const {todo} = req.body;
    const newTodo = Todo({todo})

    // save the todo
    newTodo.save()
      .then(() => {
        console.log("Sucessfully added todo.")
        res.redirect("/")
      })
      .catch((err) => {
        console.log(err);
      });

router.get("/delete/todo/:_id", (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
          .then(() => {
            console.log("Sucessfully delete");
            res.redirect("/");
          })
          .catch((err) => {
            console.log(err);
          })
      })
})

module.exports = router;