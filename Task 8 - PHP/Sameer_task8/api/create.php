<?php
# Include connection
require_once "./dbconfig.php";

# Define variables and initialize with empty values
$fname_err = $lname_err = $email_err = $age_err = $gender_err = $designation_err = $date_err = "";
$fname = $lname = $email = $age = $gender = $designation = $date = "";

# Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

  # Check input errors before inserting data into database
  if (empty($fname_err) && empty($lname_err) && empty($email_err) && empty($age_err) && empty($gender_err) && empty($designation_err) && empty($date_err)) {
    # Preapre an insert statement
    $sql = "INSERT INTO employees (first_name, last_name, email, age, gender, designation, joining_date) VALUES (?, ?, ?, ?, ?, ?, ?)";

    if ($stmt = mysqli_prepare($link, $sql)) {
      # Bind variables to the prepared statement as parameters
      mysqli_stmt_bind_param($stmt, "sssisss", $param_fname, $param_lname, $param_email, $param_age, $param_gender, $param_designation, $param_date);

      # Set parameters
      $param_fname = $fname;
      $param_lname = $lname;
      $param_email = $email;
      $param_age = $age;
      $param_gender = $gender;
      $param_designation = $designation;
      $param_date = $date;

      # Execute the statement
      if (mysqli_stmt_execute($stmt)) {
        echo "<script>" . "alert('New record created successfully.');" . "</script>";
        echo "<script>" . "window.location.href='./'" . "</script>";
        exit;
      } else {
        echo "Oops! Something went wrong. Please try again later.";
      }
    }

    # Close statement
    mysqli_stmt_close($stmt);
  }

  # Close connection
  mysqli_close($link);
}
?>
