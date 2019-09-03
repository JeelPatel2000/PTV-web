<?php
    $dev_id = "3001296";
    $string = $_GET['urlString'] . "?devid=" . $dev_id;
    $key = "2765ded7-ed93-4e8c-87ff-dfda9edc0bc8";
        
    $signature = hash_hmac("sha1",$string,$key);
    echo $signature;
?>