<?php
require("./dbConfig.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['route']) && $_GET['route'] === 'getuser') {
    try {
        $pdo = getPDO();
        $query = "SELECT u.name, COUNT(o.orders_id) AS order_count
        FROM swiggy_users u
        LEFT JOIN Orders o ON u.users_id = o.users_id
        GROUP BY u.name";
        $stmt = $pdo->query($query);
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($users);
    } catch (PDOException $e) {
        echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
    }
} else {
    echo 'Invalid endpoint';
}
?>

