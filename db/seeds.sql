
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal"),('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ("VP Sales", 40000, 1), 
         ("Salesperson", 50000, 1), 
         ("Lead Engineer", 60000, 2), 
         ("Software Engineer", 70000, 2), 
         ("Accountant", 80000, 3), 
         ("Lead Lawyer", 90000, 4), 
         ("Lawyer", 100000, 4),
        ('VP Human Resources', 110000, 5), 
        ('Human Resource Generalist', 120000, 5); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tim", "Burr", 1, null), 
        ("Mike", "Hawk", 2, null),
        ("Dixie", "Normous", 3, null),
        ("Hugh", "Mungus", 4, null),
        ("Ivana", "Humpalot", 5, null),
        ("Biggus", "Dickus", 6, null), 
        ("Ferris", "Wheel", 7, null); 
        ("Harry", "Sachs", 8, null), 
        ("Oliver", "Closaph", 9, null); 