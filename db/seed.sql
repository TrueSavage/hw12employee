DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;
INSERT INTO department (name) VALUES
('Research'),
('Development'),
('Production'),
('Implementation'),
('Management'),
('Training');


INSERT INTO role (title, salary, department_id) VALUES
(01'UI UX Designer', 105500, 2),
(02'Systems Analyst ', 145000, 3),
(03'Account Executive', 165000, 5),
(04'Research Analyst ', 115000, 1),
(05'Senior Developer', 195000, 2),
(06'Data Analyst', 180000, 3),
(07'Junior Developer', 85000, 2),
(08'Software Engineer', 145000, 3),
(09'Tech Support Specialist', 55000, 4),
(10'Intern', 45000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Steve', 'Jobs', 10, NULL),
('Bill', 'Gates', 2, 5),
('Paul', 'Allen', 6, 2),
('Jeff', 'Bezos', 7),
('Jimmy', 'Dean', 5, 6),
('Oscar', 'Meyer', 5, 1),
('Donald', 'Trump', 3, NULL),
('Wiki', 'Pedia', 9, NULL),
('John', 'Specoli', 2, NULL),
('Mr', 'Hand', 5, 4),
('Farris', 'Bueller', 1, NULL),
('Winston', 'Churchill', 9, 2),
('Elizabeth', 'Queen', 5, 1),
('Richard', 'Nixon', 3, NULL),
('Bernie', 'Sanders', 6, 3),
('Big', 'Labowski', 8, NULL),
('Vincent', 'Van Gogh', 1, 7),
('Golly', 'G Willikers', 4, NULL),
('James', 'Bond', 10, NULL),
('Bob', 'Belcher', 3, NULL);