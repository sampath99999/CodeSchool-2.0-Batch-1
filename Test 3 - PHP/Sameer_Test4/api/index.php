<?PHP
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'dbconfig.php';

$response = ["status" => false, "message" => ""];

if (!isset($_POST['name'])) {
  $response["status"] = false;
  $response["message"] = "name is required";
  echo json_encode($response);
  exit;
}
if (!isset($_POST['phone'])) {
  $response["status"] = false;
  $response["message"] = "phone is required";
  echo json_encode($response);
  exit;
}
if (!isset($_POST['email'])) {
  $response["status"] = false;
  $response["message"] = "Email is required";
  echo json_encode($response);
  exit;
}

$name = $_POST["name"];
$email = $_POST["email"];
$phone =$_POST["phone"];

try {
  $query = "INSERT INTO subscribers(name,email,phone) VALUES('$name','$email','$phone')";
  $stmt = $pdo->prepare($query);
  $result = $stmt->execute();
  $response["status"] = true;
  $response["message"] = "Subcriber Successfully registerd";
  echo json_encode($response);
} catch (PDOException $e) {
  $response["status"] = false;
  $response["message"] = $e->getMessage();
  echo json_encode($response);
}