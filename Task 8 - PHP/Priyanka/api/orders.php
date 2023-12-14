<?php

require("./dbConfig.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['route']) && $_GET['route'] === 'getAllOrders') {
    try {
        $pdo = getPDO();

        $query = "SELECT o.orders_id, u.name AS user_name, r.name AS restaurant_name, o.order_total, o.delivery_status
        FROM Orders o
        JOIN swiggy_users u ON o.users_id = u.users_id
        JOIN Restaurants r ON o.Restaurants_id = r.Restaurants_id";

        $stmt = $pdo->query($query);
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($orders);
    } catch (PDOException $e) {
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    echo 'Invalid endpoint';
}

?>
