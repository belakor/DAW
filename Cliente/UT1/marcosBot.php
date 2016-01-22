<?php
$botToken = "141395827:AAGA2nCUGfCLJHDeS0QN4vnqEXKsIcfCyIw";
$website = "https://api.telegram.org/bot".$botToken;
//$update = file_get_contents($website."/getupdates");
$update = file_get_contents("php://input");
$updateArray = json_decode($update, TRUE);
$chatId = $updateArray["result"][0]["message"]["chat"]["id"];
file_get_contents($website."/sendmessage?chat_id=".$chatId."&text=EstoyEnElPueblo");
?>
