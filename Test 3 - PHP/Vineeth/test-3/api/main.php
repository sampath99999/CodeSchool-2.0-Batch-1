<?php

require_once './dbconfig.php';
$pdo=getPDO();
if($_SERVER['REQUEST_METHOD']=='POST'){
    $response=['status'=>'false','message'=>''];
    if(empty($_POST['amount1'])){
        $response['message']='Amount is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['name1'])){
        $response['message']='Name is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['email1'])){
        $response['message']='email is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['phone_no'])){
        $response['message']='Phone number is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['acc_no'])){
        $response['message']='Account number is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['cvv1'])){
        $response['message']='CVV is required.';
        echo json_encode($response);
        exit;
    }
    if(empty($_POST['holder_name'])){
        $response['message']='holder name is required.';
        echo json_encode($response);
        exit;
    }
    
    $name=$_POST['name1'];
    $email=$_POST['email1'];
    $phone=$_POST['phone_no'];
    $acc=$_POST['acc_no'];
    $cvv=$_POST['cvv1'];
    $Hname=$_POST['holder_name'];
    $amount=$_POST['amount1'];

    $query="Insert into donations(name,email,phone,account_number,cvv,holder_name,amount) VALUES(?,?,?,?,?,?,?)";
    $smt=$pdo->prepare($query);
    $smt->execute([$name,$email,$phone,$acc,$cvv,$Hname,$amount]);

}

