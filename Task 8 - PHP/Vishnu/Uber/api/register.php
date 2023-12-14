<?php

require_once "./dbConfig.php";

if($_SERVER['REQUEST_METHOD']==='POST'){
    $response=["status"=>false,"message"=>"","data"=>null];

    if(!isset($_REQUEST["userName"])){
        http_response_code(400);
        echo "*User name is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["userPhone"])){
        http_response_code(400);
        echo "*User phone number is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["userEmail"])){
        http_response_code(400);
        echo "*User email is not configured in your call";
        exit;
    }

    if(!isset($_REQUEST["userPassword"])){
        http_response_code(400);
        echo "*User password is not configured in your call";
        exit;
    }

    $userName=$_POST["userName"];
    $userPhone=$_POST["userPhone"];
    $userEmail=$_POST["userEmail"];
    $userPassword=$_POST["userPassword"];
    $response=["status"=>true,"message"=>"","data"=>null];

    if ($userEmail === '' || $userPassword === '' || $userEmail==='' || $userPassword==='') {
        http_response_code(400);
        $response["status"] = false;
        $response["message"] = "*Please fill the required details";
        echo json_encode($response);
        exit;
    }

    //generate access token && password hashing 
    $accessToken = bin2hex(random_bytes(26));
    $userPassword=password_hash($userPassword,PASSWORD_DEFAULT);
   
    try{
        $pdo=getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $query="insert into users(name,phone,email,password,access_token) values (?,?,?,?,?);";
        $statement=$pdo->prepare($query);
        $result=$statement->execute([$userName,$userPhone,$userEmail,$userPassword,$accessToken]);
        if($result){
            $response["message"]="User account created successfully";
            $response["status"]=true;
            echo json_encode($response);
            exit;
        }
        else{
            $response["message"]="User creation failed";
            $response["status"]=true;
            echo json_encode($response);
            exit; 
        }  
    }
    catch(PDOException $e){
        if ($e->getCode() === '23505') { 
            http_response_code(409); 
            echo "*Email or phone number already existed";
            exit;
        }
        http_response_code(400);
        error_log($e->getMessage());
        // echo $e->getMessage();
        echo "*An unexpected error occurred. Please try again later.";
        exit;
    }    
}
else{
    http_response_code(400);
    echo "*Sorry for the inconvience we will get back to you";
}



