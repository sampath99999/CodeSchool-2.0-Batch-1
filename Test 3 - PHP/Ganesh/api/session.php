<?php

    require_once "./dbConfig.php";

    require_once "./response.php";

    function getUserSession($pdo, $token){
        // Query for user session including the user id.
        $query = "SELECT user_id,
        token
        FROM sessions
        WHERE token = ?";
        $statment = $pdo->prepare($query);
        $statment->execute([$token]);
        $user_session = $statment->fetchAll(PDO::FETCH_ASSOC);
        return $user_session;
    }


?>