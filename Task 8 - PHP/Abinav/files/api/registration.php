    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

    
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $email = $_POST["email"];
        $password = md5($_POST["password"]);
        $phone = $_POST["phone"];

        $pdo = new PDO("pgsql:host=localhost;port=5432;dbname=contact_managementapp;user=postgres;password=postgres");
        if (!$pdo) {
            $response["message"] = "Database Not Connected!";
            echo json_encode($response);
            exit;
        }

        $query = "SELECT user_id FROM users WHERE email = ?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$email]);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        if (count($result) == 1) {
            $response["message"] = "email already Taken!";
            echo json_encode($response);
            exit;
        }

        $query = "INSERT INTO users (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";
        $statement = $pdo->prepare($query);
        $result = $statement->execute([$firstName, $lastName, $phone, $email, $password]);

        if ($result) {
            $response["message"] = "Data inserted successfully.";
        } else {
            $response["message"] = "Error inserting data.";
        }
        echo json_encode($response);
    }
    ?>
