<?php
$dbhost = "localhost";
$dbname = "login_register";
$dbUser = "postgres";
$dbPassword = "root";

try {
  $pdo = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbUser, $dbPassword);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully!";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>
