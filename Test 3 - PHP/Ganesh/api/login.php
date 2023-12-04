<?php

    require_once "./dbConfig.php";

    require_once "./response.php";

    // Check the request method is POST.
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $email = $_POST["email"];
        $password = $_POST["password"];

        if (empty($email)) {
            $response = responseError("Please provide an Email !");
            echo $response;
            exit;
        }
        if (empty($password)) {
            $response = responseError("Please provide the password !");
            echo $response;
            exit;
        }

        // Query to get the user details with the provided input.
        $query = "SELECT id,
        name,
        email,
        password
        FROM users 
        WHERE email = :email AND password = :password ";
        $statement = $pdo->prepare($query);
        $statement->execute([
            "email" => $email,
            "password" => $password
        ]);
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);

        // Check whether user already exist in the DB.
        if (count($result) != 1) {
            $response = responseError("Username or password is incorrect! Please try again.");
            echo $response;
            exit;
        } else {
            // On success.
            $userID = $result[0]['id'];
            // Generate token.
            $TOKEN = hash('sha256', $password);

            // Maintain user token and session.
            $query = "INSERT INTO sessions( user_id, token ) 
                    VALUES
                    (:user_id, :token)
            ";
            $statement = $pdo->prepare($query);
            $statement->execute([
                "user_id" => $userID,
                "token" => $TOKEN
            ]);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);

            // Error while inserting data.
            if (!$result) {
                $response = responseError($statement->errorInfo());
                echo $response;
                exit;
            }

            // On successful user session insertion.
            $response = responseSuccess("Login Successful. You are redirected to home page in 3 seconds please wait.", $TOKEN);
            echo $response; 
            exit;
         
        }

    } else {
        $response = responseError("Only POST requests are accepted !");
        echo $response;
        exit;
    }




?>