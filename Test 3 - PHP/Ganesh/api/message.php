<?php

    require_once "./dbConfig.php";

    require_once "./response.php";

    require_once "./session.php";

    // Check the request method is GET.
    if($_SERVER["REQUEST_METHOD"] == "GET"){

        if(empty($_GET['token'])){
            $response = responseError("Login to see the page !");
            echo $response;
            exit;
        }

        $user_session = getUserSession($pdo, $_GET['token']);

        $user_id = $user_session[0]['user_id'];

        // Query to get the add messages.
        $query = "INSERT INTO chats( user_id, message )
                VALUES ( :id, :message )
            ";
        $statment = $pdo->prepare($query);
        $statment->execute([
            "id" => $user_id,
            "message" => $_GET['message']
        ]);
        $messageStatus = $statment->fetchAll(PDO::FETCH_ASSOC);

        if (!$messageStatus) {
            $response = responseError($statment->errorInfo());
            echo $response;
            exit;
        }

        // Query to get the active login user.
        $query = "SELECT message
                FROM chats
            ";
        $statment = $pdo->prepare($query);
        $statment->execute();
        $messages = $statment->fetchAll(PDO::FETCH_ASSOC);

        if (empty($messages)) {
            $response = responseError("Error while loading the data...");
            echo $response;
            exit;
        }

        $response = responseSuccess("Fetch Successful", $messages);
        echo $response; 
        exit;

    

    }



?>