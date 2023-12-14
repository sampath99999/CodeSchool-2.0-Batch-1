<?php

require("./dbConfig.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['route']) && $_GET['route'] === 'getuserorders') {
    try {
        $pdo = getPDO();

        $query = "SELECT u.name AS user_name, o.order_total, o.delivery_status, m.item_name
                  FROM swiggy_users u
                  JOIN Orders o ON u.users_id = o.users_id
                  JOIN Restaurants r ON o.Restaurants_id = r.Restaurants_id
                  JOIN Order_Details od ON o.orders_id = od.orders_id
                  JOIN Menu m ON od.menu_id = m.menu_id";

        $stmt = $pdo->query($query);
        $userOrders = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($userOrders);
    } catch (PDOException $e) {
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    echo 'Invalid endpoint';
}

?>
