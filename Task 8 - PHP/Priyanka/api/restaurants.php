<?php

require("./dbConfig.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['route']) && $_GET['route'] === 'getRestaurants') {
    try {
        $pdo = getPDO();

        $query = "SELECT * FROM Restaurants";
        $stmt = $pdo->query($query);
        $restaurants = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($restaurants);
    } catch (PDOException $e) {
        header('Content-Type: application/json');
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Invalid endpoint'));
}

?>
