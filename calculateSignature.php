<?php
    function process_url($url)
    {
        $processed_url = "";
        for ($i=0; $i <strlen($url) ; $i++) { 
            if($uri[$i]!=" ")
            {
                $processed_url .= $url[$i];
            }
            else{
                $processed_url .= "%20";
            }
        }
        return $processed_uri;
    }
?>

<?php
    $dev_id = "3001296";    // developer ID provided by the PTV
    $url = $_GET['urlString'];  // retriving raw url (contains spaces _ )
    $processed_url = process_url($url);

    $string = $processed_url . "?devid=" . $dev_id;
    $key = "2765ded7-ed93-4e8c-87ff-dfda9edc0bc8";  // 
       
    $signature = hash_hmac("sha1",$string,$key);    // calculating the signature
    
    echo $signature;  // returning the signature!
?>