<?php
require_once "dbConfig.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $response = ["status" => false, "message" => ""];

    if (
        isset($_POST["order_id"]) &&
        isset($_POST["delivery_agent_id"])
    ) {
        $order_id = $_POST["order_id"];
        $delivery_agent_id = $_POST["delivery_agent_id"];

        $pdo = getPDO();

        if (!$pdo) {
            $response["message"] = "Database Not Connected!";
            echo json_encode($response);
            exit;
        }

        $query = "SELECT COUNT(*) FROM Delivery_Agents WHERE Id = ?";
        $stmnt = $pdo->prepare($query);
        $stmnt->execute([$delivery_agent_id]);

        $agentExists = $stmnt->fetchColumn();

        if (!$agentExists) {
            $response["message"] = "Invalid Delivery Agent ID!";
            echo json_encode($response);
            exit;
        }

        $orderquery = "UPDATE Orders SET delivery_agent_id = ? WHERE Id = ?";
        $orderstmnt = $pdo->prepare($orderquery);

        if ($orderstmnt->execute([$delivery_agent_id, $order_id])) {
            $response["status"] = true;
            $response["message"] = "Order assigned to the selected delivery agent!";
            echo json_encode($response);
        } else {
            $response["message"] = "Failed to assign the order to the delivery agent.";
            echo json_encode($response);
        }
    } else {
        $response["message"] = "Missing required parameters!";
        echo json_encode($response);
    }
} else {
    $response["message"] = "ONLY POST method Accepted.";
    echo json_encode($response);
}
