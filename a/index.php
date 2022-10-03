<?php
$path= $_SERVER['REQUEST_URI'];

if(strpos($path,"a/?")!== false)
{
    $whatIWant = substr($path, strpos($path, "?") + 1);    
    header('Location: https://api.b-seenapp.com/c/'.$whatIWant);
    die();
}
else
{
    header('Location: https://b-seenapp.com');
    die();
    
}

?>
