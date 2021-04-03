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
            'Update employee managers',
            'View employees by manager',
            'View employees by department',
            'Delete departments, roles and employees',
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
            case 'Add a job Role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            case 'Update employees manager':
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
            case 'Delete an employee':
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
  })
}

allRoles = () => {
    connection.query("SELECT * FROM roles", function (err, data) {
        console.table(data);
        start();
    })
}
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
            console.table("Successfully Inserted");
            start();
        })
    })
  }      

//    addRole();

//     addEmployee();

//     updateEmployee();

//     updateEmployeeManager();

//     viewEmployeesByManager();

//     employeeByDepartment();

//     deleteDepartment();

//     deleteJob();

//    deleteEmployee();

//     viewBudget()



start();
