
<?php

define('DB_HOST', "localhost");
define('DB_NAME', "uber_ride_services");
define('DB_PORT', "5432");
define('DB_USERNAME', 'postgres');
define('DB_PASSWORD', 'postgres');

function getPDO()
{
    return new PDO("pgsql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";user=" . DB_USERNAME . ";password=" . DB_PASSWORD);
}
