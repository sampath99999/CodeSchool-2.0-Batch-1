<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $source = $_POST["source"];
    $destination = $_POST["destination"];
    $date = $_POST["date"];

    try {
        $dbconn = new PDO("pgsql:host=localhost;dbname=login_register;user=postgres;password=postgre");

        $query = "SELECT * FROM trips WHERE source = :source AND destination = :destination AND date = :date";
        $stmt = $dbconn->prepare($query);
        $stmt->bindValue(':source', $source);
        $stmt->bindValue(':destination', $destination);
        $stmt->bindValue(':date', $date);
        
        $stmt->execute();

        $routes = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($routes) {
            echo json_encode($routes);
        } else {
            echo json_encode(["error" => "No matching routes found"]);
        }
    } catch (PDOException $e) {
        echo json_encode(["error" => "Database error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Invalid request"]);


}
?> 