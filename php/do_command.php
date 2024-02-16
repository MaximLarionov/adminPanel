<?php
session_start();

require "./db.php";




if($_SESSION["cmd"] === "delete"){
    delete("DELETE FROM groups WHERE name=:name", [
        "name" => $_SESSION["name-channel"]
    ]);
}elseif ($_SESSION["cmd"] === "update"){

    $result = update("UPDATE groups SET days_of_week=:days, message=:message WHERE name=:name", [
        "days"=>$_SESSION["days"],
        "message"=>$_SESSION["message"],
        "name"=>$_SESSION["name-channel"]
    ]);

}


unset($_SESSION);
header("Location: ../");