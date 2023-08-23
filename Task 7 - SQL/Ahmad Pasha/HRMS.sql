-- Active: 1692271638519@@127.0.0.1@5432@hr_management@public

CREATE TABLE
    Employees(
        employee_id SERIAL PRIMARY KEY NOT NULL,
        emp_name VARCHAR(50) NOT NULL,
        emp_email VARCHAR(100) UNIQUE,
        emp_phone VARCHAR(15) UNIQUE NOT NULL,
        emp_gender VARCHAR(10) NOT NULL,
        hire_date DATE NOT NULL,
        reportingTo INT
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date
    )
VALUES (
        'Shoban',
        'shoban123@gmail.com',
        '9201377450',
        'male',
        '10-12-2020'
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date
    )
VALUES (
        'Ravi',
        'ravi123@gmail.com',
        '9201677450',
        'male',
        '10-11-2020'
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date
    )
VALUES (
        'Jaithri',
        'jaithri123@gmail.com',
        '9201377455',
        'female',
        '15-5-2020'
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Jhones',
        'jhones123@gmail.com',
        '9201377400',
        'male',
        '10-6-2022',
        1
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Sai',
        'sai123@gmail.com',
        '9202377450',
        'male',
        '10-2-2022',
        1
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'goldy',
        'goldy123@gmail.com',
        '8201377450',
        'female',
        '9-3-2022',
        1
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Sudheer',
        'sudheer123@gmail.com',
        '9231377450',
        'male',
        '10-4-2022',
        2
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Rashmi',
        'rashmi123@gmail.com',
        '9201379450',
        'male',
        '30-5-2022',
        2
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Divya',
        'divya123@gmail.com',
        '9207377450',
        'female',
        '20-6-2022',
        2
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Manjula',
        'manjula123@gmail.com',
        '9207307450',
        'female',
        '10-12-2022',
        3
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Varun',
        'varun123@gmail.com',
        '9201377750',
        'male',
        '10-2-2023',
        3
    );

INSERT INTO
    Employees(
        emp_name,
        emp_email,
        emp_phone,
        emp_gender,
        hire_date,
        reportingTo
    )
VALUES (
        'Akhila',
        'akhila123@gmail.com',
        '9901377450',
        'female',
        '10-2-2022',
        3
    );

SELECT
    e.emp_name,
    salary,
    m.emp_name as manager_name
from employees e
    join employees m on e.reportingto = m.employee_id
    INNER join payroll on e.employee_id = payroll.employee_id;

DROP Table employees;

-- SELECT reporting_manager_name,reporting_manager_email,emp_firstName, emp_lastName,emp_email from reportingmanagers

-- INNER join employees on reportingManagers.reporting_manager_id = employees.reporting_manager_id;

-- SELECT emp_salary,reporting_manager_salary from reportingmanagers

-- INNER join employees on reportingManagers.reporting_manager_id = employees.reporting_manager_id;

CREATE TABLE
    Department(
        department_id SERIAL NOT NULL PRIMARY KEY,
        job_title VARCHAR(100),
        department_name VARCHAR(100),
        employee_id INT REFERENCES Employees(employee_id)
    );

DROP Table department;

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Manager', 'Development', 1);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Manager', 'Testing', 2);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Manager', 'Finance', 3);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Developer', 'Development', 4);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Developer', 'Development', 5);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Developer', 'Development', 6);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Tester', 'Testing', 7);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Tester', 'Testing', 8);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Tester', 'Testing', 9);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Accountant', 'Finance', 10);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Accountant', 'Finance', 11);

INSERT INTO
    department(
        job_title,
        department_name,
        employee_id
    )
VALUES ('Accountant', 'Finance', 12);

SELECT * from department;

CREATE TABLE
    Attendance(
        attendance_id SERIAL PRIMARY KEY,
        employee_id INT REFERENCES Employees(employee_id),
        date TIMESTAMPTZ DEFAULT Now() NOT NULL,
        attendance INT NOT NULL
    );

SELECT count(*), employee_id
from attendance
where attendance = 0
GROUP BY employee_id;

SELECT count(*), employee_id
from attendance
where attendance = 0
GROUP BY employee_id;

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(1, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(2, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(3, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(4, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(5, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(6, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(7, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(8, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(9, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(10, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(11, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(12, '21-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(1, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(2, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(3, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(4, '22-8-2023', 0);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(5, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(6, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(7, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(8, '22-8-2023', 0);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(9, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(10, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(11, '22-8-2023', 1);

INSERT INTO
    Attendance(employee_id, date, attendance)
VALUES(12, '22-8-2023', 0);

INSERT INTO Attendance(employee_id,attendance) VALUES(1,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(2,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(3,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(4,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(5,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(6,0);

INSERT INTO Attendance(employee_id,attendance) VALUES(7,0);

INSERT INTO Attendance(employee_id,attendance) VALUES(8,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(9,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(10,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(11,1);

INSERT INTO Attendance(employee_id,attendance) VALUES(12,0);

DELETE FROM attendance WHERE attendance_id=4;

SELECT * from attendance;

DROP Table attendance;

CREATE TABLE
    Payroll(
        payroll_id SERIAL PRIMARY KEY,
        employee_id INT REFERENCES Employees(employee_id) NOT NULL,
        salary INT NOT NULL
    );

INSERT INTO Payroll(employee_id,salary) VALUES (1,80000);

INSERT INTO Payroll(employee_id,salary) VALUES (2,60000);

INSERT INTO Payroll(employee_id,salary) VALUES (3,70000);

INSERT INTO Payroll(employee_id,salary) VALUES (4,40000);

INSERT INTO Payroll(employee_id,salary) VALUES (5,40000);

INSERT INTO Payroll(employee_id,salary) VALUES (6,40000);

INSERT INTO Payroll(employee_id,salary) VALUES (7,25000);

INSERT INTO Payroll(employee_id,salary) VALUES (8,25000);

INSERT INTO Payroll(employee_id,salary) VALUES (9,25000);

INSERT INTO Payroll(employee_id,salary) VALUES (10,20000);

INSERT INTO Payroll(employee_id,salary) VALUES (11,20000);

INSERT INTO Payroll(employee_id,salary) VALUES (12,20000);

DROP Table payroll;

SELECT *
from employees
    left JOIN payroll on employees.employee_id = payroll.employee_id;

CREATE TABLE
    Loans(
        loan_id SERIAL PRIMARY KEY,
        employee_id INT REFERENCES Employees(employee_id),
        loan_amount DECIMAL(10, 2) NOT NULL,
        remaining_amount DECIMAL(10, 2) NOT NULL,
        deduction_amount DECIMAL(10, 2),
        start_date DATE,
        end_date DATE
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        1,
        1000000,
        300000,
        10000,
        '21-10-2017',
        '12-6-2025'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        2,
        500000,
        100000,
        5000,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        3,
        500000,
        100000,
        10000,
        '21-10-2018',
        '12-6-2024'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        4,
        500000,
        100000,
        5000,
        '21-8-2018',
        '12-6-2025'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        5,
        500000,
        100000,
        5000,
        '21-10-2016',
        '12-6-2024'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        6,
        500000,
        100000,
        5000,
        '21-10-2019',
        '12-6-2027'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        7,
        500000,
        100000,
        5000,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        8,
        500000,
        100000,
        5000,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        9,
        700000,
        100000,
        7000,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        10,
        400000,
        100000,
        4000,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        11,
        300000,
        200000,
        2500,
        '21-10-2017',
        '12-6-2026'
    );

INSERT INTO
    loans(
        employee_id,
        loan_amount,
        remaining_amount,
        deduction_amount,
        start_date,
        end_date
    )
VALUES (
        12,
        300000,
        100000,
        3000,
        '21-10-2017',
        '12-6-2026'
    );

DROP TABLE loans;

SELECT * FROM loans;

SELECT
    E.emp_name AS "Employee Name",
    E.emp_email AS "Employee Email",
    M.emp_name AS "Manager Name",
    M.emp_email AS "Manager Email",
    P_emp.salary AS "Employee Salary",
    P_mgr.salary AS "Manager Salary"
FROM employees E
    JOIN employees M ON E.reportingTo = M.employee_id
    LEFT JOIN payroll P_emp ON E.employee_id = P_emp.employee_id
    LEFT JOIN payroll P_mgr ON M.employee_id = P_mgr.employee_id;