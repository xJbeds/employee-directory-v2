import express from 'express'
import { employees } from '#db/employees.js'

const employeesRouter = express.Router()

employeesRouter.route('/').get((request, response) => {
  response.send(employees)
})

app.route("/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  response.send(employees[randomIndex]);
});

app.route("/:id").get((request, response) => {
  const { id } = request.params;
  
  const employee = employees.find((e) => e.id === +id);
  
  if (!employee) {
    return response.status(404).send("Employee not found");
  }
  
  response.send(employee);
});

export default employeesRouter;