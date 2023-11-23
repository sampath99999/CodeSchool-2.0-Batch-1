<?php
define("DB_HOST", "localhost");
define("DB_PORT", "5432");
define("DB_NAME","shop");
define("DB_USERNAME", "postgres");
define("DB_PASSWORD", "postgres");

$token = bin2hex(openssl_random_pseudo_bytes(10));

function getPDO()
{
    $pdo = new PDO("pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";user=" . DB_USERNAME . ";password=" . DB_PASSWORD);
    return $pdo;
}