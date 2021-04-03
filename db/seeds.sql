INSERT INTO department (department_name)
values ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ("VP Sales", 40000, 1), 
         ("Salesperson", 50000, 2), 
         ("Lead Engineer", 60000, 3), 
         ("Software Engineer", 70000, 4), 
         ("Accountant", 80000, 5), 
         ("Lead Lawyer", 90000, 6), 
         ("Lawyer", 100000, 7),
        ('VP Human Resources', 110000, 8), 
        ('Human Resource Generalist', 120000, 9); 


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tim", "Burr", 1, 4), 
        ("Mike", "Hawk", 2, 3),
        ("Dixie", "stale", 3, 4),
        ("Hugh", "jackman", 4, 4),
        ("Ivana", "white", 5, 4),
        ("tom", "burns", 6, 4), 
        ("Ferris", "Wheel", 7, 4),
        ("Harry", "Richardson", 8, 4), 
        ("Oliver", "spool", 9, 4); 
        


