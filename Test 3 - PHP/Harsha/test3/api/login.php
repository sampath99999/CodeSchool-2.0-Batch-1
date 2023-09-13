 <?php

    require_once('./dbConfig.php');

    $response =  ["status" => false, "message" => "", "data" => ""];
    if ($_SERVER["REQUEST_METHOD"] == 'POST') {
        if (!isset($_POST['email'])) {
            $response['status'] = false;
            $response['message'] = "Email is not present";
            echo json_encode($response);
            exit;
        }

        if (!isset($_POST['password'])) {

            $response['status'] = false;
            $response['message'] = "Password is not present";
            echo json_encode($response);
            exit;
        }

        $email = $_POST['email'];
        $password = $_POST["password"];


        if ($email == '' || $password == '') {
            $response["status"] = false;
            $response["message"] = "Email & Password shouldn't be empty";
            echo json_encode($response);
            exit;
        }
        try {


            $pdo = getPDO();
            if (!$pdo) {
                $response["status"] = false;
                $response["message"] = "Database Not Connected!";
                echo json_encode($response);
                exit;
            }

            $query = "SELECT * FROM users WHERE email = ? AND password = ?";

            $statement = $pdo->prepare($query);
            $statement->execute([$email, $password]);
            $user = $statement->fetchAll(PDO::FETCH_ASSOC);

            if (count($user) == 1) {
                $response['status'] = true;
                $response["message"] = "LoggedIn Successfully!";
                $response["data"] = $user[0]["id"];
                echo json_encode($response);
                exit;
            } else {
                $response["status"] = false;
                $response["message"] = "No user with this email & Password!";
                echo json_encode($response);
                exit;
            }
        } catch (Exception $e) {
            error_log($e->getMessage());
            $response['message'] = $e->getMessage();
            echo json_encode($response);
            exit;
        }
    }

    $response["message"] = "Only POST method Accepted";
    echo json_encode($response);
