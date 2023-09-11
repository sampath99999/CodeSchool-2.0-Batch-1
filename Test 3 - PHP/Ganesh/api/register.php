<?php

    require_once "./dbConfig.php";

    require_once "./response.php";

    // Validation function for input name.
    function inputNameValidation($name){
        if (empty($name)) {
            $response = responseError("Name is required !");
            echo $response;
            exit;
        } elseif (strlen($name) < 2 || strlen($name) > 100) {
            $response = responseError("Name should be a valid length !");
            echo $response;
            exit;
        } else {
            $response = responseSuccess("Valid Name !", $name);
            return $response;
        }
    }

    // Validation function for Input type file.
    function inputFileValidation($file){
        if (empty($file)) {
            $response = responseError("Please select the file ! ");
            echo $response;
            exit;
        } else {
            $response = responseSuccess("Valid File !", $file);
            return $response;
        }
    }

    // Validation function for input type email.
    function inputEmailValidation($email){
        if (empty($email)) {
            $response = responseError("Email is required !");
            echo $response;
            exit;
        } elseif (!(preg_match("/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,})\.([a-zA-Z]{2,5})$/", $email))) {
            $response = responseError("Email domain is invalid !");
            echo $response;
            exit;
        } else {
            $response = responseSuccess("Valid Email !", $email);
            return $response;
        }
    }

    // Validation Function for strong password.
    function inputPasswordValidation($password){
        $strongPassRegex = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/';
        if (empty($password)) {
            $response = responseError("Password is required !");
            echo $response;
            exit;
        } elseif (!(preg_match($strongPassRegex, $password))) {
            $response = responseError("Password must be strong !");
            echo $response;
            exit;
        } else {
            $response = responseSuccess("Valid Password !", $password);
            return $response;    
        }
    }

    // Validation function to confirm user password.
    function inputConfirmPassword($password, $confirmPassword){
        if (empty($confirmPassword)) {
            $response = responseError("Please confirm the password !");
            echo $response;
            exit;
        } else if ($password !== $confirmPassword) {
            $response = responseError("Password does not match !");
            echo $response;
            exit;
        } else {
            $response = responseSuccess("Valid Password !", $confirmPassword);
            return $response; 
        }
    }

    // Check the request method is POST.
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        // Get the user data through post request.
        $userData = $_POST;

        // Check data.
        if (empty($userData)) {
            $response = responseError("Fill all the input fields !");
            echo $response;
            exit;
        }

        // On check validate data.
        // Validation count.
        $validation = array();
        $count = 0;

        array_push($validation, inputNameValidation($userData['user_name']));
        array_push($validation, inputFileValidation($_FILES['image']['name']));
        array_push($validation, inputEmailValidation($userData['user_email']));
        array_push($validation, inputPasswordValidation($userData['user_password']));
        array_push($validation, inputConfirmPassword($userData['user_password'], $userData['confirm_password']));

        foreach ($validation as $val) {
            if ($val) {
                $count++;
            }
        }
    
        // On Unsuccessful validations.
        if ($count != count($validation)) {
            $response = responseError("Fill all the input fields correctly !");
            echo $response;
            exit;
        }

        $name = $userData['user_name'];
        $image = $_FILES['image']['name'];
        $email = $userData['user_email'];
        $password = $userData['confirm_password'];
    
        // On success.
        // Query to find the user with email.
        $query = "SELECT id 
            FROM users 
            WHERE email = :email_id";
        $statement = $pdo->prepare($query);
        $statement->execute([
            "email_id" => $email
        ]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        // Check whether user already exist in the DB.
        if (count($result) == 1) {
            $response = responseError("User already exist! Simply login to website <a href='./index.html'>here.</a>");
            echo $response;
            exit;
        }

        // Query to find the image existance.
        $search = "%$image%";
        $query = "SELECT id 
                FROM users
                WHERE profile_image LIKE ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$search]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        // Check for the profile image already exist in the DB.
        if (count($result) == 1) {
            $response = responseError("Image already exist.");
            echo $response;
            exit;
        }

        // Else.
        // Path to store the image.
        $imageLocation = '../assets/images/profiles/' . $image;
        // On successful storing image to path.
        if (move_uploaded_file($_FILES['image']['tmp_name'], $imageLocation)) {

            // Insert the user data.
            $query = "INSERT INTO
            users( name, profile_image, email, password)
            VALUES ( :user_name, :profile_image, :user_email, :user_password )";
            $statement = $pdo->prepare($query);
            $statement->execute([
                'user_name' => $name,
                'user_email' => $email,
                'profile_image' => $imageLocation,
                'user_password' => $password
            ]);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);

            // Error while inserting data.
            if (!$result) {
                $response = responseError($statement->errorInfo());
                echo $response;
                exit;
            }

            // On successful data insertion.
            $response = responseSuccess("Registration Successful. You are redirected to login page in 3 seconds please wait.", "");
            echo $response; 
            exit;

        }


    } else {
        $response = responseError("Only POST requests are accepted !");
        echo $response;
        exit;
    }

?>