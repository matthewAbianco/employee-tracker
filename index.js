const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'saynope',
    database: 'employee_db'
});
  
connection.connect(err => 
{
    if (err) throw err;
    console.log('connected to mysql2');
});



const start = () => {
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
            'View all departments',
            'View all roles',
            'View all employees', 
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Update an employees manager',
            'View employees by manager',
            'View employees by department',
            'Delete a department',
            'Delete a job role',
            'Delete a employee',
            'View the total utilized budget of all department',
            'Quit'
          ]
        }
    ])
    .then((answer) => {
        switch(answer.choice) {
            case 'View all departments':
                allDepartments();
                break;
            case 'View all roles':
                allRoles();
                break;    
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            case 'Update an employees manager':
                updateEmployeeManager();
                break;     
            case 'View employees by manager':
                viewEmployeesByManager();
                break;    
            case 'View employees by department':
                employeeByDepartment();
                break;
            case 'Delete a department':
                deleteDepartment();
                break;
            case 'Delete a job role':
                deleteJob();
                break;
            case 'Delete a employee':
                deleteEmployee();
                break; 
            case 'View total budget of all departments':
                viewBudget();
                break;       
            case 'Quit':
                console.log("GoodBye!");
                connection.end();
                break;
        }
    });
};


allDepartments = () => {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        start();
    });
  };

viewEmployees = () => {
  connection.query("SELECT * FROM employee", function (err, data) {
      console.table(data);
      start();
  });
};

allRoles = () => {
    connection.query("SELECT * FROM roles", function (err, data) {
        console.table(data);
        start();
    });
};

addDepartment = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'newDept',
                message: 'What is the name of the new department?'
            },
        ]).then(function (res) {
            connection.query('INSERT INTO department(department_name) VALUES (?)',
        [res.newDept], 
         function(err, data) {
            if (err) throw err;
            console.table("Department added!");
            start();
        })
    })
  }    

  addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "enter new role:"
        },
        {
            type: "number",
            name: "salary",
            message: "enter salary:"
        },
        {
            type: "number",
            name: "department_id",
            message: "enter department ID:"
        },
    ]).then(function(res) {
        connection.query("INSERT INTO roles(title, salary, department_id) values (?, ?, ?)", 
        [res.title, res.salary, res.department_id], function (err, data) {
            console.table(data);
            console.log('new role added!')
            start();
        })
    })
  }

addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', 
        [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("new employee added");
            start();
        })
    })
  }



updateEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "which employee id would you like to update?"
        },
        {
            type: "number",
            name: "role_id",
            message: "enter the new role ID:"
        }
    ]).then(function(res) {
        connection.query("UPDATE employee SET role_id = ? WHERE id = ?", 
        [res.role_id, res.id], function (err, data) {
            console.table(data);
            console.log("employee successfully updated")
            start();
        })
    })
  }

  updateEmployeeManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "empmoyeeid",
            message: "which employee id would you like to update?"
        },
        {
            type: "number",
            name: "manager_id",
            message: "enter the new managers ID:"
        }
    ]).then(function(res) {
        connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", 
        [res.manager_id, res.employeeid], function (err, data) {
            console.table(data);
            console.log("employee successfully updated")
            start();
        })
    })
  }


viewEmployeesByManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "insert manager ID"
        },
    ]).then(function(res) {
        connection.query("SELECT * FROM employee WHERE manager_id = ?", 
        [res.manager], function (err, data) {
            console.table(data);
            console.log("employee successfully updated")
            start();
        })
    })
  }


//     employeeByDepartment()

deleteDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentDelete",
            message: "which department would you like to delete?"
        },

    ]).then(function(res) {
        connection.query("DELETE FROM department WHERE department_name = (?)", 
        [res.departmentDelete], function (err, data) {
            console.table(data);
            console.log("department successfully deleted")
            start();
        })
    })
  }

deleteJob = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "roleDelete",
            message: "which job role would you like to delte?"
        },

    ]).then(function(res) {
        connection.query("DELETE FROM roles WHERE title = (?)", 
        [res.roleDelete], function (err, data) {
            console.table(data);
            console.log("job role successfully deleted")
            start();
        })
    })
  }

deleteEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "employeeDelete",
            message: "which job role would you like to delte?"
        },

    ]).then(function(res) {
        connection.query("DELETE FROM employee WHERE first_name = (?)", 
        [res.employeeDelete], function (err, data) {
            console.table(data);
            console.log("employee successfully deleted")
            start();
        })
    })
  }

//     viewBudget()



start();
