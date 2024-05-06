CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(100),
    salary NUMERIC(10, 2)
);

INSERT INTO employees (name, department, salary)
VALUES ('Atul Singh Chauhan', 'Associate Software Developer', 20000);

SELECT * FROM employees;

UPDATE employees
SET salary = 60000
WHERE name = 'Atul Singh Chauhan';

ALTER TABLE employees
ADD COLUMN email VARCHAR(255);

DELETE FROM employees
WHERE name = 'Atul Singh Chauhan';

DROP TABLE employees;



