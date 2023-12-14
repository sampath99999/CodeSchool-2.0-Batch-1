<?php
require("./dbConfig.php");
$response = ["status" => false, "message" => ""];

function usernameValidation($username)
{
    if ($username == '') {
        $response["status"] = false;
        $response["message"] = "Username should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/^\w{5,}$/', $username)) {
        $response["status"] = false;
        $response["message"] =  "Valid username should be alphanumeric & longer than or equals 5 charecters!";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $username;
        return $response;
    }
}

function passwordValidation($password)
{
    $commonPass = ['Password@123', 'abcdef', 'Abc123@', 'Hello'];

    if ($password == '') {
        $response["status"] = false;
        $response["message"] = "Password should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/[a-z]/', $password)) {
        $response["status"] = false;
        $response["message"] = "Password should conatin one lowercase character";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/[A-Z]/', $password)) {

        $response["status"] = false;
        $response["message"] = "Password should conatin one uppercase character";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/\d/', $password)) {

        $response["status"] = false;
        $response["message"] =  "Password should conatin one digit";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/[!@#$%^&*()_+{}:;<>,.?~]/', $password)) {

        $response["status"] = false;
        $response["message"] = "Password should conatin one Special charcter";
        echo json_encode($response);
        exit;
    } else if (preg_match('/([a-zA-Z0-9])\1/', $password)) {

        $response["status"] = false;
        $response["message"] = "Password should conatin repeating Characters";
        echo json_encode($response);
        exit;
    } else if (preg_match('/\s/', $password)) {

        $response["status"] = false;
        $response["message"] = "Password should conatin Spaces";
        echo json_encode($response);
        exit;
    } else if (in_array(strtolower($password), array_map('strtolower', $commonPass))) {

        $response["status"] = false;
        $response["message"] = "Password is easily guessable";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $password;
        return $response;
    }
}


function firstnameValidation($firstName)
{
    if ($firstName == '') {

        $response["status"] = false;
        $response["message"] = "FirstName should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (strlen($firstName) < 2 || strlen($firstName) > 25) {

        $response["status"] = false;
        $response["message"] =  "FirstName length should be between 2 to 25 character!";
        echo json_encode($response);
        exit;
    } else if ($firstName !== ucfirst(strtolower($firstName))) {

        $response["status"] = false;
        $response["message"] = "First charecter should be Capital in FirstName!";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/^[A-Za-z]+$/', $firstName)) {

        $response["status"] = false;
        $response["message"] = "FirstName should contain only alphabats!";
        echo json_encode($response);
        exit;
    } else {

        $response["status"] = true;
        $response["data"] = $firstName;
        return $response;
    }
}


function lastnameValidation($lastName)
{
    if ($lastName == '') {

        $response["status"] = false;
        $response["message"] = "LastName should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (strlen($lastName) < 2 || strlen($lastName) > 25) {

        $response["status"] = false;
        $response["message"] = "LastName length should be between 2 to 25 character!";
        echo json_encode($response);
        exit;
    } else if ($lastName !== ucfirst(strtolower($lastName))) {

        $response["status"] = false;
        $response["message"] =  "First charecter should be Capital in LastName!";
        echo json_encode($response);
        exit;
    } else if (!preg_match('/^[A-Za-z]+$/', $lastName)) {

        $response["status"] = false;
        $response["message"] = "LastName should contain only alphabats!";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $lastName;
        return $response;
    }
}

function emailValidation($email)
{
    $emailFormat = "/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/";
    if ($email == '') {

        $response["status"] = false;
        $response["message"] = "email should not be Empty!";
        echo json_encode($response);
        exit;
    } else if (strlen($email) > 50) {

        $response["status"] = false;
        $response["message"] = "email should be less than 50 charcter!";
        echo json_encode($response);
        exit;
    } else if (substr_count($email, '@') > 1) {

        $response["status"] = false;
        $response["message"] = "email should contain only single @!";
        echo json_encode($response);
        exit;
    } else if (!preg_match($emailFormat, $email)) {

        $response["status"] = false;
        $response["message"] = "Invalid email format!";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $email;
        return $response;
    }
}

function phoneNumberValidation($phoneNo)
{
    if ($phoneNo == '') {

        $response["status"] = false;
        $response["message"] = "Phone number should not be Empty!";
        echo json_encode($response);
        exit;
    } elseif (!(preg_match("/[0-9]/", $phoneNo))) {
        $response["status"] = false;
        $response["message"] = "Phone number must be Only in digits!";
        echo json_encode($response);
        exit;
    } elseif ((strlen($phoneNo)) != 10) {
        $response["status"] = false;
        $response["message"] = "Phone number must be 10 digits!";
        echo json_encode($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $phoneNo;
        return $response;
    }
}

function dobValidation($dob)
{
    if ($dob == '') {

        $response["status"] = false;
        $response["message"] = "Date Of Birth should not be Empty!";
        echo json_encode($response);
        exit;
    }
    // else if (!preg_match('/^\d{2}-\d{2}-\d{4}$/', $dob)) {

    //     $response["status"] = false;
    //     $response["message"] = "Date Of Birth should be in DD-MM-YYYY format!";
    //     echo json_encode($response);
    //     exit;
    // }
    else {
        $response["status"] = true;
        $response["data"] =  $dob;
        return $response;
    }
}
function genderValidation($gender)
{
    if ($gender == '') {

        $response["status"] = false;
        $response["message"] = "Gender field should not be Empty!";
        echo ($response);
        exit;
    } else {
        $response["status"] = true;
        $response["data"] =  $gender;
        return $response;
    }
}


if ($_SERVER["REQUEST_METHOD"] == 'POST') {


    if (!isset($_POST["username"])) {
        $response["message"] = "Username is required!";
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["password"])) {
        $response["message"] = "Password is required!";
        echo json_encode($response);
        exit;
    }

    if (!isset($_POST["first_name"])) {
        $response["message"] = "first_name is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["last_name"])) {
        $response["message"] = "last_name is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["email"])) {
        $response["message"] = "email is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["phone_no"])) {
        $response["message"] = "phone number is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["gender"])) {
        $response["message"] = "gender is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }
    if (!isset($_POST["dob"])) {
        $response["message"] = "dob is not included!";
        $response["status"] = false;
        echo json_encode($response);
        exit;
    }

    $username = usernameValidation($_POST["username"]);
    $password = passwordValidation($_POST["password"]);
    $firstName = firstnameValidation($_POST["first_name"]);
    $lastName = lastnameValidation($_POST["last_name"]);
    $email = emailValidation($_POST["email"]);
    $phoneNo = phoneNumberValidation($_POST["phone_no"]);
    $gender = genderValidation($_POST["gender"]);
    $dob = dobValidation($_POST["dob"]);

    if (
        $username["data"] == '' || $password["data"] == ''  || $firstName["data"] == ''  || $lastName["data"] == '' || $email["data"] == ''
        || $phoneNo["data"] == '' || $gender["data"] == ''  || $dob["data"] == ''
    ) {
        $response["message"] = "All fields shouldn't be empty";
        echo json_encode($response);
        exit;
    }
    $pdo = getPDO();

    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
        echo json_encode($response);
        exit;
    }

    $query = "SELECT id FROM users WHERE username = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$username["data"]]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) == 1) {
        $response["message"] = "Username already Taken!";
        echo json_encode($response);
        exit;
    }



    $query = "INSERT INTO users (username, password,first_name,last_name,email,phone_no,gender,dob,token) VALUES (?, ?,?,?, ?,?,?, ?,?)";
    $statment = $pdo->prepare($query);
    $result = $statment->execute([$username["data"], $password["data"], $firstName["data"], $lastName["data"], $email["data"], $phoneNo["data"], $gender["data"], $dob["data"], $token]);

    if (!$result) {
        $response["message"] = $statment->errorInfo();
        echo json_encode($response);
    }

    $response["status"] = true;
    $response["message"] = "User Successfully Registered!";
    echo json_encode($response);
    exit;
}

$response["message"] = "OnlY POST method Accepted";
echo json_encode($response);
