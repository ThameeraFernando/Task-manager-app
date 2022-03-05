const express = require("express");
const app = express();
const router = require("./routes/tasks");
//public assets
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set routes
app.use("/api/v1/tasks", router);

//app.get('/api/v1/tasks')          -get all tasks
//app.post('/api/v1/tasks')         -create a new tasks
//app.get('/api/v1/tasks:id');      -get single tasks
//app.patch('/api/v1/tasks:id')     -update tasks
//app.delete('/api/v1/tasks:id');   -delete tasks

const port = 3000;
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
