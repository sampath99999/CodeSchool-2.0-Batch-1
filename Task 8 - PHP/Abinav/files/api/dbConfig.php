<?php 
define("DB_HOST","localhost");
define("DB_NAME","contact_managementapp");
define("DB_PORT","5432");
define("DB_USERNAME","postgres");
define("DB_PASSWORD","postgres");

function getPDO(){
$pdo=new PDO("pgsql:lhost=".DB_HOST.";port=".DB_PORT.";dbname=".DB_NAME.";user=".DB_USERNAME.";password=".DB_PASSWORD);
return $pdo;
}


?>