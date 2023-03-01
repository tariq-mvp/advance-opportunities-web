
<?php

header('Content-Type: application/json');

$number1 = time();
$updated = substr($number1, 3);
$updated = (int)$updated+2000000;


$formatted1 = number_format($updated,0,".",",");
$number2= $updated-6234567; 
$formatted2 = number_format($number2,0,".",",") ;

$data = array(
    'distance_traveled' => $formatted1,
    'impressions' => $formatted2
);

echo json_encode($data);
 