-- Active: 1692271874209@@127.0.0.1@5432@hms@public
CREATE TABLE patients(   
    patients_id SERIAL PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50),
    disease_type VARCHAR NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL
);

SELECT * FROM patients;
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Saina','Nehval','FEVER',30,'HYD');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES( 'Steven','King','COLD',36,'MUMBAI');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Bruce','Ernst','Body Pains',30,'DELHI');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Sania','Mirja','Brain Tumer',40,'HYD');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Alexander','Hunold','Eye Infection',12,'HYD');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Adam','Smith','Kidney Pain',5,'GUJARATH');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('John','Sigh','FEVER',5,'DELHI');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Bob','flex','Body Pains',26,'MUMBAI');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Sushma','Shetti','FEVER',20,'HYD');
INSERT INTO patients (fname,lname,disease_type,age,address)
VALUES('Sahithi','Reddy','FEVER',45,'MUMBAI');


CREATE TABLE treatments(
    treat_id SERIAL PRIMARY KEY,
    treat_type VARCHAR(100) NOT NULL
);
select * from treatments;

INSERT INTO treatments (treat_type) VALUES('Dental Treatment');
INSERT INTO treatments(treat_type) VALUES('Cardiac Treatment');
INSERT INTO treatments(treat_type) VALUES('Ortho Treatment');
INSERT INTO treatments(treat_type) VALUES('Eye Treatment');
INSERT INTO treatments(treat_type) VALUES('Homeopathy Treatment');
INSERT INTO treatments(treat_type) VALUES('ENT Treatment');
INSERT INTO treatments(treat_type) VALUES('IVF Treatment');
INSERT INTO treatments(treat_type) VALUES('Naturopathy Treatment');
INSERT INTO treatments(treat_type) VALUES('Nephrolithotripsy Treatment');
INSERT INTO treatments(treat_type) VALUES('MR Linac Radiotherapy');



CREATE TABLE check_up(
    check_id SERIAL PRIMARY KEY,
    patients_id INT NOT NULL REFERENCES patients(patients_id),
    complaints VARCHAR(100),
    findings VARCHAR(100),
    treat_id INT NOT NULL REFERENCES treatments(treat_id),
    med_id INT NOT NULL REFERENCES medicines(med_id),
    quantity INT,
    date DATE NOT NULL,
    equip_id INT NOT NULL REFERENCES equipments(equip_id)
);
UPDATE check_up  
SET treat_id=10
WHERE check_id=4;

select * from check_up;

INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(1,'It took lot of time for customer to wait in line for service','blood cells are very less',9,3,3,'2023-05-21',9);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(3,'Services are not upto the mark','LOW BP',9,4,2,'2023-05-21',9);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(5,'All doctors are not available','Eye Damaged',4,6,15,'2022-07-28',10);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(6,'It took lot of time for customer to wait in line for service','Water content is very low',9,5,25,'2023-06-20',11);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(4,'Services are not upto the mark','blood clot',11,7,5,'2020-11-22',12);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(7,'It took lot of time for customer to wait in line for service','Not taking healthy food',9,3,3,'2022-07-28',9);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(9,'Services are not upto the mark','Not taking healthy food',9,8,3,'2022-07-28',1);
INSERT INTO check_up(patients_id,complaints,findings,treat_id,med_id,quantity,date,equip_id)
VALUES(10,'Rooms are not good','Junk food effect',9,3,3,'2022-07-28',9);

CREATE TABLE equipments(
    equip_id SERIAL PRIMARY KEY,
    equip_name VARCHAR(50),
    requested_date DATE NOT NULL,
    date_defected DATE 
)

SELECT * from equipments;

INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Thermometer','2023-01-01','2023-02-01');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Stretcher','2022-02-01','2023-02-26');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Syringe','2022-05-20','2022-06-01');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Sphygmomanometer','2023-03-10','2023-03-28');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Wheelchair','2023-01-01','2023-01-31');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Hospital bed','2023-01-01','2023-01-31');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Surgical instrument','2022-12-24','2023-01-31');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Hospital bed','2023-06-12','2023-07-05');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Stethoscope','2021-05-01','2021-06-25');
INSERT INTO equipments(equip_name,requested_date)
VALUES('Microscope','2021-05-01');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('lithotripter','2023-08-01','2023-10-10');
INSERT INTO equipments(equip_name,requested_date,date_defected)
VALUES('Gamma Knife ','2020-09-11','2021-10-20');

CREATE TABLE medicines(
    med_id SERIAL PRIMARY KEY,
    med_name VARCHAR(50) NOT NULL,
    quantity INT,
    available_Qty INT,
    description VARCHAR(100),
    expiry_date DATE NOT NULL,
    requested_date DATE NOT NULL
);


 select * from medicines;


UPDATE medicines  
SET requested_date='2020-06-24' 
WHERE med_id=7;

UPDATE medicines  
SET expiry_date='2023-06-28' 
WHERE med_id=7;

INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Azel 80 Capsule',10,200,'Azel 80 Capsule is used in the treatment of cancer of the prostate gland','2025-12-12','2022-12-10');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Avil 25 Tablet',30,250,' It provides relief from runny nose, sneezing, congestion, itching, and watery eyes.','2026-10-01','2023-08-10');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Paracetamol',3,100,'Fever medicine','2021-07-26','2023-11-05');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Crocin Advance 500 mg',2,50,'We all know that everyday aches and pains can sometimes get in the way of life.','2022-09-20','2024-07-11');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Cystone forte',25,30,'Kedney Stone Relief','2020-07-20','2023-06-13');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Fit Eye Tablet',15,300,'Eye pain','2021-09-25','2024-06-12');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Temozolomide',5,0,'The brain is protected by the blood brain barrier','2023-06-24','2023-06-28');
INSERT INTO medicines(med_name,quantity,available_Qty,description,expiry_date,requested_date)
VALUES('Advil Capsule',5,20,'Fever medicine','2026-08-20','2023-06-24');

--Queries
--Retrieve all patient information along with their check-up details:

SELECT p.patients_id,p.fname,p.disease_type,c.check_id,c.treat_id,c.date FROM patients p
JOIN check_up c
ON p.patients_id=c.patients_id;

--List all patients who have a specific treatment(General Tretment):

SELECT p.patients_id,p.fname,p.disease_type,c.check_id,c.treat_id,c.quantity,t.treat_type FROM patients p
JOIN check_up c
ON c.patients_id=p.patients_id
JOIN treatments t
ON t.treat_id=c.treat_id
where t.treat_type='General Treatment';


--Find the medicines that are low in stock
SELECT * FROM medicines
where quantity>available_qty;

--Retrieve equipment that is defective and needs repair:
select * from equipments
where date_defected is null;

--Count the number of patients of each type:

SELECT disease_type,COUNT(patients_id) as no_of_patients from patients
GROUP BY disease_type
ORDER BY no_of_patients DESC;

--Find the most common complaint among patients:
SELECT c.complaints,COUNT(check_id) AS common_complaint FROM patients p
JOIN check_up c
ON p.patients_id=c.patients_id
GROUP BY c.complaints
ORDER BY common_complaint DESC
limit 1;

--Retrieve patient details along with the treatments they have received:
SELECT p.patients_id,p.fname,p.disease_type,t.treat_type FROM patients p
JOIN check_up c
ON c.patients_id=p.patients_id
JOIN treatments t
ON t.treat_id = c.treat_id
ORDER BY patients_id;

--Find expired medicines:

SELECT * FROM medicines
WHERE expiry_date <= now();


--Retrieve a list of all patients who underwent a check-up on a specific date(2022-07-28), including their first name, last name, and the date of the check-up.

SELECT p.fname,p.lname,c.date FROM patients p
JOIN check_up c
ON c.patients_id=p.patients_id
WHERE c.date = '2022-07-28';

--Find the total quantity of a specific medicine that has been given to patients, including the medicine name and the sum of the quantities.
SELECT m.med_name,SUM(c.quantity) FROM medicines m
JOIN check_up c
ON c.med_id = m.med_id
GROUP BY m.med_name;

--List all patients who have received a treatment of a certain type(General Treatment), along with their patient ID, first name, and last name.
SELECT p.patients_id,p.fname,p.lname FROM patients p
JOIN check_up c
ON c.patients_id = p.patients_id
JOIN treatments t
ON c.treat_id = t.treat_id
WHERE t.treat_type='General Treatment';

--Get a report of all equipment that was requested on a specific date(2023-01-01), including the equipment name and the date it was requested.
SELECT equip_name,requested_date FROM equipments
WHERE requested_date='2023-01-01';

-- Retrieve a list of medicines that are about to expire, including their current available quantity.

SELECT * FROM medicines
-- WHERE EXTRACT(YEAR FROM expiry_date)-extract(YEAR FROM NOW()) < 1;
WHERE expiry_date <= NOW() + INTERVAL 3 MONTH;

SELECT * FROM equipments
WHERE date_defected is NOT NULL;

--Retrieve the total quantity of each medicine requested and the total quantity that is currently available.
SELECT m.med_name, SUM(m.quantity) AS total_requested, m.available_qty
FROM medicines m
GROUP BY m.med_name, m.available_qty;

--Show the details of patients who received a treatment and were prescribed a specific medicine, including their first name, last name, and the medicine name.
SELECT p.fname,p.lname FROM patients p
JOIN check_up c
ON p.patients_id=c.patients_id
JOIN treatments t 
ON c.treat_id = t.treat_id
JOIN medicines m
ON c.med_id = m.med_id
WHERE t.treat_type='General Treatment' AND m.med_name = 'Paracetamol';

--1)all the medicines stock and how many medicines have been solded
SELECT m.med_id, SUM(c.quantity) as solded ,(SUM(m.available_qty)-SUM(c.quantity)) as stock
FROM medicines m
LEFT JOIN check_up c
ON c.med_id = m.med_id
GROUP BY m.med_id;

--2)treatname top 3 medicines used FOR
SELECT t.treat_type,m.med_name,count(m.med_id) as popular  FROM treatments t
JOIN check_up c
ON c.treat_id=t.treat_id
JOIN medicines m
ON m.med_id=c.med_id
GROUP BY t.treat_type,m.med_name
order by t.treat_type,popular DESC;





