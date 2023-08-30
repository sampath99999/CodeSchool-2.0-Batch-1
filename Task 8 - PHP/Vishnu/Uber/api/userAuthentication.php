<?php

require_once "./dbConfig.php";

if($_SERVER['REQUEST_METHOD']==='POST'){
    $response=["status"=>false,"message"=>"","data"=>null];
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

    $userEmail=$_POST["userEmail"];
    $userPassword=$_POST["userPassword"];
    $response=["status"=>true,"message"=>"","data"=>null];

    if ($userEmail === '' || $userPassword === '') {
        http_response_code(400);
        $response["status"] = false;
        $response["message"] = "*User email & Password shouldn't be empty";
        echo json_encode($response);
        exit;
    }

    try{
        $pdo=getPDO();
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $query="select id,password,access_token from users where email= ?;";
        $statement=$pdo->prepare($query);
        $statement->execute([$userEmail]);
        $user=$statement->fetch(PDO::FETCH_ASSOC);
        if($user && password_verify($userPassword,$user["password"])){
            $response["message"]="Logged In Successfully";
            $response["status"]=true;
            $response["data"]=$user["access_token"];
            echo json_encode($response);
            exit;
        }
        else{
            $response["message"]="*Username and password didn't match";
            $response["status"]=false;
            echo json_encode($response);
            exit;
        }   
    }
    catch(PDOException $e){
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



