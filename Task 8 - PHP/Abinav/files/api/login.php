<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST["email"];
    $password = md5($_POST["password"]);
   

    $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");

    $response = ["status" => true, "message" => "", "data" => null];

    if ($email == '' || $password == '') {
        $response["status"] = false;
        $response["message"] = "Email & Password shouldn't be empty";
        echo($response);
        exit;
    }

   
    
    $query = "SELECT * FROM USERS WHERE email=? AND password=?";
    $statement = $pdo->prepare($query);
    $statement->execute([$email, $password]);
    $user = $statement->fetchAll(PDO::FETCH_ASSOC);

    if (count($user) == 1) {
        $response["message"] = "LoggedIn Successfully!";
        
        echo ($response["message"]);
        exit;
    } else {
        $response["status"] = false;
        $response["message"] = "Invalid Email or Password";
        echo("Invalid EmailId or Password");
        exit;
    }
    header('Content-Type: application/json'); 
    echo json_encode($response);
    

}
?>
