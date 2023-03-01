
<?php

header('Content-Type: application/json');

$number1 = time();

$number1 = $number1/1000;
$number1=intval($number1)+8000000;
$number1 = intval($number1);
$formatted1 = number_format($number1,0,".",",");
$number2= $number1-6234567; 
$formatted2 = number_format($number2,0,".",",") ;

$data = array(
    'distance_traveled' => $formatted1,
    'impressions' => $formatted2
);

echo json_encode($data);
 