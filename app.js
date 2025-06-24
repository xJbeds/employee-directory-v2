import express from "express";
const app = express();
export default app;

import employeesRouter from './api/employeesRouter.js'
app.use('/employees', employeesRouter)

app.use('/employees', employeesRouter)

app.route("/").get((reuest, response) => {
  response.send("Hello employees!");
});

app.use((error, request, response, next) => {
  response.status(500).send('Server error')
})


  
