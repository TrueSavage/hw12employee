DROP DATABASE IF EXISTS
myemployee_db;

CREATE DATABASE myemployee_db;

USE myemployee_db;

CREATE TABLE departments (
  dept_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30) UNIQUE
);



USE myemployee_db;
CREATE TABLE roles (
  role_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  role_title VARCHAR(30) UNIQUE,
  salary DECIMAL NOT NULL,
  dept_id INT NOT NULL,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

USE myemployee_db;
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_title VARCHAR(30) NOT NULL,
  FOREIGN KEY (role_title) REFERENCES roles(role_title)
  );
