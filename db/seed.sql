-- DROP DATABASE IF EXISTS myemployee_db;
-- CREATE DATABASE myemployee_db;

USE myemployee_db;
INSERT INTO departments (dept_id, dept_name) VALUES
(1, 'Research'),
(2, 'Development'),
(3, 'Production'),
(4, 'Implementation'),
(5, 'Management'),
(6, 'Training');

USE myemployee_db;
INSERT INTO roles (role_id, role_title, salary, dept_id) VALUES
(1, 'UI UX Designer', 105500, 2),
(2, 'Systems Analyst ', 145000, 3),
(3, 'Account Executive', 165000, 5),
(4, 'Research Analyst ', 115000, 1),
(5, 'Senior Developer', 195000, 2),
(6, 'Data Analyst', 180000, 3),
(7, 'Junior Developer', 85000, 2),
(8, 'Software Engineer', 145000, 3),
(9, 'Tech Support Specialist', 55000, 4),
(10, 'Intern', 45000, 6);

USE myemployee_db;
INSERT INTO employees (id, first_name, last_name, role_title) VALUES
(1, 'Steve', 'Jobs', 'Research Analyst'),
(2, 'Bill', 'Gates', 'Intern'),
(3, 'Paul', 'Allen', 'Junior Developer'),
(4, 'Jeff', 'Bezos', 'Tech Support Specialist'),
(5, 'Jimmy', 'Dean', 'Account Executive'),
(6, 'Oscar', 'Meyer', 'Senior Developer'),
(7, 'Donald', 'Trump', 'Data Analyst'),
(8, 'Wiki', 'Pedia', 'Tech Support Specialist'),
(9, 'John', 'Specoli', 'Intern'),
(10, 'Mr', 'Hand', 'junior Developer'),
(11, 'Farris', 'Bueller', 'Software Engineer'),
(12, 'Winston', 'Churchill', 'Systems Analyst'),
(13, 'Elizabeth', 'Queen', 'Intern'),
(14, 'Richard', 'Nixon', 'UI UX Designer'),
(15, 'Bernie', 'Sanders', 'Senior Developer'),
(16, 'Big', 'Labowski', 'Account Executive'),
(17, 'Vincent', 'Van Gogh', 'Research Analyst'),
(18, 'Golly', 'G Willikers', 'Junior Developer'),
(19, 'James', 'Bond', 'Intern'),
(20, 'Bob', 'Belcher', 'UI UX Designer');