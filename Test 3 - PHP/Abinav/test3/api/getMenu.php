<?php
    require_once "./dbConfig.php";
    $response = ["status" => false, "message" => "", "data" => null];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $role_id = $_POST["roleId"];
    $pdo = getPDO();
    if (!$pdo) {
        $response["message"] = "Database Not Connected!";
    } else {
        $query = "SELECT menu_name FROM menu_items WHERE role_id = ?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$role_id]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response["status"] = true; 
        $response["data"] = $result;
    }
}
else{
    $response["message"] = "only post requests are accepted";
}

echo json_encode($response);

?>
