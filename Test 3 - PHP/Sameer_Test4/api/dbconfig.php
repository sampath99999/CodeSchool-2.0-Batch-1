<?php
$dbhost = "pgsql:host=localhost;dbname=donationbox";
$dbUser = "postgres";
$dbPassword = "postgres";
$dbname="newsletter";
try {
  $pdo = new PDO($dbhost, $dbUser, $dbPassword);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "connection failed" . $e->getMessage();
}
?>
