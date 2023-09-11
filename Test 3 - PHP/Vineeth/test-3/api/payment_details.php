<?php

require_once './dbconfig.php';
$pdo=getPDO();

$query="SELECT * FROM donations";
$smt=$pdo->prepare($query);
$smt->execute();
$result=$smt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result);