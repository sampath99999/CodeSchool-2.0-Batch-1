<?php
require_once "./dbconfig.php";

$fname_err = $lname_err = $email_err = $age_err = $gender_err = $designation_err = $date_err = "";
$fname = $lname = $email = $age = $gender = $designation = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];

    if (empty(trim($_POST["fname"]))) {
        $fname_err = "This field is required.";
    } else {
        $fname = ucfirst(trim($_POST["fname"]));
        if (!ctype_alpha($fname)) {
            $fname_err = "Invalid name format.";
        }
    }

    if (empty(trim($_POST["lname"]))) {
        $lname_err = "This field is required.";
    } else {
        $lname = ucfirst(trim($_POST["lname"]));
        if (!ctype_alpha($lname)) {
            $lname_err = "Invalid name format.";
        }
    }

    if (empty(trim($_POST["email"]))) {
        $email_err = "This field is required.";
    } else {
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_err = "Please enter a valid email address.";
        }
    }

    if (empty(trim($_POST["age"]))) {
        $age_err = "This field is required.";
    } else {
        $age = trim($_POST["age"]);
        if (!ctype_digit($age)) {
            $age_err = "Please enter a valid age number";
        }
    }

    if (empty($_POST["gender"])) {
        $gender_err = "This field is required.";
    } else {
        $gender = $_POST["gender"];
    }

    if (empty($_POST["designation"])) {
        $designation_err = "This field is required.";
    } else {
        $designation = $_POST["designation"];
    }

    if (empty($_POST["date"])) {
        $date_err = "This field is required";
    } else {
        $date = $_POST["date"];
    }

    if (empty($fname_err) && empty($lname_err) && empty($email_err) && empty($age_err) && empty($gender_err) && empty($designation_err) && empty($date_err)) {
        try {
            $sql = "UPDATE employees SET first_name = ?, last_name = ?, email = ?, age = ?, gender = ?, designation = ?, joining_date = ? WHERE id = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$fname, $lname, $email, $age, $gender, $designation, $date, $id]);
            
            echo "<script>alert('Record has been updated successfully.');</script>";
            echo "<script>window.location.href='./';</script>";
            exit;
        } catch (PDOException $e) {
            echo "Oops! Something went wrong. Please try again later.";
        }
    }
}

if (isset($_GET["id"]) && !empty(trim($_GET["id"]))) {
    $id = trim($_GET["id"]);
    try {
        $sql = "SELECT * FROM employees WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $fname = $row["first_name"];
            $lname = $row["last_name"];
            $email = $row["email"];
            $age = $row["age"];
            $gender = $row["gender"];
            $designation = $row["designation"];
            $date = $row["joining_date"];
        } else {
            echo "<script>window.location.href='./';</script>";
            exit;
        }
    } catch (PDOException $e) {
        echo "Oops! Something went wrong. Please try again later.";
    }
}

?>

