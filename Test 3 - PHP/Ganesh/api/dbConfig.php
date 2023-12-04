<?php

    require_once "./response.php";

    define("DB_HOST", "localhost");
    define("DB_PORT", "5432");
    define("DB_NAME", "chatroom_managment");
    define("DB_USERNAME", "postgres");
    define("DB_PASSWORD", "postgres");

    $pdo = new PDO("pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";user=" . DB_USERNAME . ";password=" . DB_PASSWORD);

    if (!$pdo) {
        $response = responseError("Database Not Connected!");
        echo $response;
        exit;
    }

?>