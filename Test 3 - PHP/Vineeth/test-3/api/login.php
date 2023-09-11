<?php
require_once './dbconfig.php';
$pdo=getPDO();
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['Name'];
    $password=$_POST['password'];
    $response=["status"=>false];

    $query="SELECT * FROM users where username=? and password=?";
    $smt=$pdo->prepare($query);
    $smt->execute([$name,$password]);
    $result=$smt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result)>0) {
        $response['status']=true;
        echo json_encode($response);
        exit;
    }

}

