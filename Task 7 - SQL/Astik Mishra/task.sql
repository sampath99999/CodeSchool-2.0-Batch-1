/* 2023-08-22 18:39:03 [701 ms] */ 
CREATE TABLE user_account(
    id int PRIMARY KEY,
    username VARCHAR(64),
    password VARCHAR(64),
    email VARCHAR(128),
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    is_project_manager bool,
    registration_time TIMESTAMP
);
/* 2023-08-22 18:43:54 [53 ms] */ 
CREATE TABLE employee(
    id int PRIMARY KEY,
    employee_code VARCHAR(128),
    employee_name VARCHAR(128)
);
/* 2023-08-22 18:44:26 [30 ms] */ 
drop Table employee;
/* 2023-08-22 18:49:17 [127 ms] */ 
CREATE TABLE employee(
    id int PRIMARY KEY,
    employee_code VARCHAR(128),
    employee_name VARCHAR(128),
    user_account_id int NOT NULL,
    Foreign Key (user_account_id) REFERENCES user_account(id)
);
/* 2023-08-22 18:51:19 [64 ms] */ 
CREATE TABLE team(
    id int PRIMARY Key,
    team_name VARCHAR(128)
);
/* 2023-08-22 18:52:15 [73 ms] */ 
CREATE Table role(
    id int PRIMARY Key,
    role_name VARCHAR(128)
);
/* 2023-08-22 18:55:12 [66 ms] */ 
CREATE TABLE team_member(
    id int PRIMARY KEY,
    team_id int NOT NULL,
    employee_id int NOT NULL,
    role_id int NOT NULL,
    Foreign Key (team_id) REFERENCES team(id),
    Foreign Key (employee_id) REFERENCES employee(id),
    Foreign Key (role_id) REFERENCES role(id)
);
/* 2023-08-22 19:19:49 [192 ms] */ 
CREATE Table project(
    id int PRIMARY KEY,
    project_name VARCHAR(128),
    planned_start_date date,
    planned_end_date date,
    actual_start_time date NOT NULL,
    actual_end_time date NOT NULL,
    project_description text
);
/* 2023-08-23 19:24:29 [117 ms] */ 
CREATE Table client_partner(
    id int PRIMARY KEY,
    cp_name VARCHAR(255),
    cp_address VARCHAR(255),
    cp_details TEXT
);
/* 2023-08-23 19:26:16 [127 ms] */ 
CREATE TABLE on_project(
    id int PRIMARY KEY,
    project_id int,
    client_partner_id int,
    date_start date,
    date_end date NOT NULL,
    is_client BOOLEAN,
    is_partner BOOLEAN,
    description text,
    Foreign Key (project_id) REFERENCES project(id),
    Foreign Key (client_partner_id) REFERENCES client_partner(id)
);
/* 2023-08-23 19:26:40 [65 ms] */ 
CREATE Table project_manager(
    id int PRIMARY KEY,
    project_id int,
    Foreign Key (project_id) REFERENCES project(id)
);
/* 2023-08-23 19:27:24 [111 ms] */ 
CREATE Table task(
    id int PRIMARY KEY,
    task_name VARCHAR(255),
    project_id int,
    priority int,
    description text NOT NULL,
    planned_start_date date,
    planned_end_date date,
    planned_budget decimal(8,2),
    actual_start_time date NOT NULL,
    actual_end_time date NOT NULL,
    actual_budget DECIMAL(8,2) NOT NULL,
    Foreign Key (project_id) REFERENCES project(id)
);
/* 2023-08-23 11:27:28 [66 ms] */ 
CREATE TABLE preceding_task(
    id int PRIMARY Key,
    task_id int,
    preceding_task_id int,
    Foreign Key (task_id) REFERENCES task(id),
    Foreign Key (preceding_task_id) REFERENCES preceding_task(id)
);
/* 2023-08-23 11:27:38 [100 ms] */ 
CREATE TABLE activity(
    id int PRIMARY KEY,
    activity_name VARCHAR(255),
    task_id int,
    priority int,
    description text NOT NULL,
    planned_start_date date,
    planned_end_date date,
    planned_budget decimal(8,2),
    actual_start_time date NOT NULL,
    actual_end_time date NOT NULL,
    actual_budget DECIMAL(8,2) NOT NULL,
    Foreign Key (task_id) REFERENCES task(id)
);
/* 2023-08-23 11:27:40 [105 ms] */ 
CREATE TABLE preceding_activity(
    id int PRIMARY KEY,
    activity_id int,
    preceding_activity_id int,
    Foreign Key (activity_id) REFERENCES activity(id),
    Foreign Key (preceding_activity_id) REFERENCES preceding_activity(id)
);
/* 2023-08-23 11:27:44 [48 ms] */ 
CREATE Table assigned(
    id int PRIMARY KEY,
    activity_id  int,
    employee_id int,
    role_id int,
    Foreign Key (activity_id) REFERENCES activity(id),
    Foreign Key (employee_id) REFERENCES employee(id),
    Foreign Key (role_id) REFERENCES role(id)
);
/* 2023-08-23 12:04:12 [6 ms] */ 
INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(1,'astik','1234','astikmishra','Astik','Mishra',true);
/* 2023-08-23 12:10:04 [2 ms] */ 
INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(2,'swastik','abcd','swastikmishra','Swastik','Mishra',false);
/* 2023-08-23 12:16:36 [3 ms] */ 
INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(3,'alok','xyz','alokmishra','Alok','Mishra',false);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(4,'ansh','12ab','anshmishra','Ansh','Mishra',false);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(5,'adwait','123abc','adwaitmishra','Adwait','Mishra',false);
/* 2023-08-23 12:20:05 [58 ms] */ 
INSERT INTO employee(id,employee_code,employee_name,user_account_id) VALUES(1,'1','Astik Mishra',1);INSERT INTO employee(id,employee_code,employee_name,user_account_id) VALUES(2,'2','Adwait Mishra',5);
/* 2023-08-23 12:24:33 [4 ms] */ 
INSERT INTO team(id,team_name) VALUES(1,'Mishra');
/* 2023-08-23 12:28:44 [2 ms] */ 
INSERT INTO team(id,team_name) VALUES(2,'Tripathi');
/* 2023-08-23 12:33:01 [3 ms] */ 
INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(6,'rama','12ram','ramamishra','Rama','Mishra',false);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(7,'sitaram','sita12','sitarammishra','Sitaram','Mishra',true);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(8,'anand','anand123','anandmishra','Anand','Mishra',true);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(9,'abhay','abhay123','abhaymishra','Abhay','Mishra',true);INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(10,'Mamta','mamta123','mamtamishra','Mamta','Mishra',false);INSERT INTO user_account(id,username,password) VALUES(11,'Abha','abha123');
/* 2023-08-23 12:38:00 [80 ms] */ 
UPDATE user_account SET username='mamta' WHERE "id"=10;UPDATE user_account SET email='abhamishra',first_name='Abha',last_name='Mishra',is_project_manager=false,username='abha' WHERE "id"=11;INSERT INTO user_account(id,username,password,email,first_name,last_name,is_project_manager) VALUES(12,'surabhi','surabhi123','surabhimishra','Surabhi','Mishra',false);
/* 2023-08-23 12:44:36 [3 ms] */ 
INSERT INTO employee(id,employee_code,employee_name,user_account_id) VALUES(3,'3','Sitaram Mishra',7);
/* 2023-08-23 12:49:50 [2 ms] */ 
INSERT INTO team(id,team_name) VALUES(3,'Chaturvedi');
/* 2023-08-23 12:55:28 [3 ms] */ 
INSERT INTO role(id,role_name) VALUES(1,'Mentor');INSERT INTO role(id,role_name) VALUES(2,'Child');INSERT INTO role(id,role_name) VALUES(3,'Head');INSERT INTO role(id,role_name) VALUES(4,'Spouse');
/* 2023-08-23 12:59:10 [51 ms] */ 
INSERT INTO team_member(id,team_id,employee_id,role_id) VALUES(1,1,1,2);INSERT INTO team_member(id,team_id,employee_id,role_id) VALUES(2,1,7,1);
/* 2023-08-23 13:07:59 [3 ms] */ 
INSERT INTO team_member(id,team_id,employee_id,role_id) VALUES(1,1,1,2);INSERT INTO team_member(id,team_id,employee_id,role_id) VALUES(2,1,3,1);INSERT INTO team_member(id,team_id,employee_id,role_id) VALUES(3,1,2,2);
/* 2023-08-23 13:13:20 [4 ms] */ 
INSERT INTO client_partner(id,cp_name,cp_address,cp_details) VALUES(1,'Tata','Pune','Tata Technologies');INSERT INTO client_partner(id,cp_name,cp_address,cp_details) VALUES(2,'Adani','Hyderabad','Adani Group');INSERT INTO client_partner(id,cp_name,cp_address,cp_details) VALUES(3,'Google','Bangalore','Google Corp.');
/* 2023-08-23 13:27:59 [13 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','21/5/2023','26/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 13:48:36 [12 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','21/5/2022','26/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:14:44 [12 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','21/5/2021','26/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:21:56 [11 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','21/5/2005','26/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:31:17 [15 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','1/5/2005','26/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:41:31 [12 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','1/5/2005','6/2/2024','2/5/2006','25/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:49:36 [3 ms] */ 
INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(1,'DBMS','12/12/2023','12/12/2024','10/02/2024','10/02/2025','Database');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(2,'DSA','12/1/2025','1/5/2024','1/2/2023','1/2/2024','Data Structures');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(3,'Java','1/5/2005','6/2/2024','2/5/2006','5/3/2022','Java SE');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(4,'Python','12/5/2021','2/5/2012','2/5/2025','2/5/2006','Python Programming');INSERT INTO project(id,project_name,planned_start_date,planned_end_date,actual_start_time,actual_end_time,project_description) VALUES(5,'NodeJS','12/12/2023','12/2/2025','12/12/2022','2/5/2025','NodeJS Backend');
/* 2023-08-23 15:55:43 [76 ms] */ 
CREATE TABLE project_manager(  
    id int NOT NULL PRIMARY KEY,
    project_id int,
    user_account_id int,
    Foreign Key (project_id) REFERENCES project(id),
    Foreign Key (user_account_id) REFERENCES user_account(id)
);
/* 2023-08-23 16:06:45 [6 ms] */ 
INSERT INTO project_manager(id,project_id,user_account_id) VALUES(1,1,1);INSERT INTO project_manager(id,project_id,user_account_id) VALUES(2,2,1);INSERT INTO project_manager(id,project_id,user_account_id) VALUES(3,1,5);INSERT INTO project_manager(id,project_id,user_account_id) VALUES(4,5,2);
/* 2023-08-23 16:13:49 [14 ms] */ 
INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(1,1,2,'1/2/2021','2/2/2022',yes,yes,'adani');INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(2,2,1,'2/1/2021','2/3/2022',yes,yes,'tata');INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(3,4,3,'2/5/2023','1/7/2023',yes,yes,'google');
/* 2023-08-23 16:24:23 [3 ms] */ 
INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(1,1,2,'1/2/2021','2/2/2022',true,true,'adani');INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(2,2,1,'2/1/2021','2/3/2022',true,true,'tata');INSERT INTO on_project(id,project_id,client_partner_id,date_start,date_end,is_client,is_partner,description) VALUES(3,4,3,'2/5/2023','1/7/2023',true,true,'google');
/* 2023-08-23 17:09:10 [58 ms] */ 
INSERT INTO task(id,task_name,project_id,priority,description,planned_start_date,planned_end_date,planned_budget,actual_start_time,actual_end_time,actual_budget) VALUES(1,'SignUp',1,1,'SignUp Page','1/2/2023','2/1/2023',20000,'2/2/2023','2/2/2024',20000);INSERT INTO task(id,task_name,project_id,priority,description,planned_start_date,planned_end_date,planned_budget,actual_start_time,actual_end_time,actual_budget) VALUES(2,'Login',2,2,'Login Page','2/2/2023','2/2/2024',200,'2/2/2023','2/2/2024',500);
/* 2023-08-23 17:09:50 [4 ms] */ 
INSERT INTO preceding_task(id,task_id,preceding_task_id) VALUES(1,1,1);INSERT INTO preceding_task(id,task_id,preceding_task_id) VALUES(2,2,2);
/* 2023-08-23 17:10:50 [11 ms] */ 
UPDATE activity SET description='Design' WHERE "id"=1;
/* 2023-08-23 17:11:46 [5 ms] */ 
INSERT INTO activity(id,activity_name,task_id,priority,description,planned_start_date,planned_end_date,planned_budget,actual_start_time,actual_end_time,actual_budget) VALUES(1,'Website',1,1,'Design','2/2/2023','2/3/2023',5000,'2/2/2023','3/3/2023',6000);
/* 2023-08-23 17:13:08 [2 ms] */ 
INSERT INTO activity(id,activity_name,task_id,priority,description,planned_start_date,planned_end_date,planned_budget,actual_start_time,actual_end_time,actual_budget) VALUES(2,'Create',1,2,'Update','2/5/2025','2/2/2026',6000,'2/2/2025','2/3/2026',6000);
/* 2023-08-23 17:13:36 [4 ms] */ 
INSERT INTO preceding_activity(id,activity_id,preceding_activity_id) VALUES(1,2,1);INSERT INTO preceding_activity(id,activity_id,preceding_activity_id) VALUES(2,1,2);
/* 2023-08-23 17:14:16 [10 ms] */ 
INSERT INTO assigned(id,activity_id,employee_id,role_id) VALUES(1,2,1,2);INSERT INTO assigned(id,activity_id,employee_id,role_id) VALUES(2,1,7,1);
/* 2023-08-23 17:14:41 [3 ms] */ 
INSERT INTO assigned(id,activity_id,employee_id,role_id) VALUES(1,2,1,2);INSERT INTO assigned(id,activity_id,employee_id,role_id) VALUES(2,1,3,1);

-- 1. Give me a list of roles and No Of employees who has a manager
SELECT role.role_name, count(employee.employee_id) FROM role
LEFT JOIN team_member
ON role.id=team_member.role
WHERE role.role_name="Mentor";


-- 2. Give me a list of all employees and number of tasks along with Procedding tasks which have priority 1,2 Seperatly


SELECT employee.employee_code, employee.employee_name,count(task.priority)  FROM employee
LEFT JOIN assigned
ON employee.id = assigned.employee_id
LEFT JOIN activity
ON assigned.activity_id = activity.id
LEFT JOIN task
ON activity.task_id = task.id
WHERE priority = "1" AND "2";