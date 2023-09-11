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

        // Query to get the users list.
        $query = "SELECT id,
                name,
                profile_image
                FROM users
            ";
        $statment = $pdo->prepare($query);
        $statment->execute();
        $users_list = $statment->fetchAll(PDO::FETCH_ASSOC);

        if (empty($users_list)) {
            $response = responseError("Error while getting the users list !");
            echo $response;
            exit;
        }

        // Query to get the active login user.
        $query = "SELECT id,
                name,
                profile_image
                FROM users
                WHERE id = ?
            ";
        $statment = $pdo->prepare($query);
        $statment->execute([$user_id]);
        $active_user = $statment->fetchAll(PDO::FETCH_ASSOC);

        if (empty($active_user)) {
            $response = responseError("Error while getting the active user !");
            echo $response;
            exit;
        }

        // Query to get the messages.
        $query = "SELECT message
                FROM chats
            ";
        $statment = $pdo->prepare($query);
        $statment->execute();
        $charts = $statment->fetchAll(PDO::FETCH_ASSOC);

        if (empty($charts)) {
            $response = responseError("Error while getting the messages !");
            echo $response;
            exit;
        }

        $response = responseSuccess("Fetch Successful", [$users_list, $active_user, $charts]);
        echo $response; 
        exit;


    }

?>