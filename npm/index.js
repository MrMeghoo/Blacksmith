// const express = require('express')

// const app = express()

// let todos= [];

// app.use(express.json()) // for parsing application/json

// //Returns an entire todo list
// app.get('/todo', function (req, res) {
//   res.json({todos});
// })

// //Adds a single task to the todolist
// app.post('/todo',function(req,res){
//     todos.push({id:number_of_todos, todo: req.body.todo});
//     res.json({todos:[todos.length -1]});
// })


// // Delete a task 
// app.delete('/todo/:index', function  (req, res) {
//     let index = req.params.id -1;
//     let tempValue= todos [index];
//     todos.splice(index,1);
//     res.json(todos[index])
// })     
      
  
    


// // Update a task 
// app.put('/todo/:id', function (req, res) {
//     let index= req.params.id -1;
//     todos[index].todo=req.params.body;    
//     res.json('todo ' + req.params.update)
//       })
    
    
      

//     //Adding a new task 
//     app.post('/todo', function (req, res) {
//       const newTask = req.body.task;
//       todos.push(newTask);
//       res.json({ message: 'Task ', newTask });
//     });

//     //Adding multiple tasks at a time
    
//     app.listen(3000, () => {
//       console.log("server is running on port 3000");
//   });
    

//Imports express from the node_modules folder
const express = require('express')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json

let todos = [];
let number_of_todos = 1;
let completedTasksHistory = [];


// Will have the history of completed tasks
app.get('/todo/history', (req, res) => {
  res.json({ completedTasksHistory });
});


// Returns entire todolist
app.get('/todo', function (req, res) {
  res.json({todos});
})

// Adds a single task to the todolist
app.post('/todo', function(req, res) {
    //console.log(req.body.list.length);
    //Check if there is an array called list
        if(req.body.list == undefined){
            // Add a single todo
            todos.push({id: number_of_todos++, todo: req.body.todo});
            res.json({todo: todos[-1]});
        } else if(req.body.list.length > 0){
            for(let i=0; i < req.body.list.length; i++){
                todos.push({id: number_of_todos++, todo: req.body.list[i].todo});
            }
            res.json("Bulk Insert");
    }
    
})

// Updates a todo task
app.put('/todo/:id', (req, res)=> {
    let index = req.params.id - 1;
    todos[index].todo = req.body.todo;
    res.json(todos[index]);
})
pwd
//Deletes a task from the todolist
// One person is looking for how to get a parameter from the client
app.delete('/todo/:id', (req, res)=> {
    let index = req.params.id - 1;
    let tempValue = todos[index];
    todos.splice(index, 1);
    res.json({todo: tempValue});
})

// Marks that a task has been completed
app.put('/todo/complete/:id', (req, res) => {
  let index = req.params.id - 1; 
  if (index >= 0 && index < todos.length) {
    let completedTask = todos[index];
    completedTasksHistory.push(completedTask);
    todos.splice(index, 1);
    res.json({ message: "Task completed successfully." });
    //json response is sent back to the client indicating 
    //that the task was completed successfully.
  } else {
    res.status(208).json({ error: "Already Reported." });
  }
});

//Returns entire todo list or return a single todo



// Opens up a port on your computer for the server to listen to
// incoming requests
app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})

//Part 1: Complete part 2 from yesterday's assignment. Check for every case where a hacker could compromise your server. Do not allow bodies in GET requests, 
// do not all non authorized parameters, do not allow the wrong type for a parameter to be passed.
// Part 2: Fix the bug in our DELETE endpoint and anywhere else in your groups code where the id of a 
//task is being associated with the index of an array. i.e using id - 1 to find where in the array the task is present

// 11:16
// Part 3:
// Update your PUT endpoint to allow clients to update their task completion status