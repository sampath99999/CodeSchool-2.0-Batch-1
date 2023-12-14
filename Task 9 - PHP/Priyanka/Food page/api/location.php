<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $latitude = $_POST["latitude"];
    $longitude = $_POST["longitude"];
    echo "Location data received and processed.";
} else {
    echo "Invalid request.";
}
