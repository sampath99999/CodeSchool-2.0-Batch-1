<?php
$dsn = "pgsql:host=localhost;dbname=ticketbooking";
$dbusername = "postgres";
$dbpassword = "postgres";

try {
  $pdo = new PDO($dsn, $dbusername, $dbpassword);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}