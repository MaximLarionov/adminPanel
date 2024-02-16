<?php

require "./php/db.php";


$data = select("SELECT * FROM groups");



for ($i = 0; $i < count($data); $i++){
    $data[$i]["days_of_week"] = str_replace("0", "Понедельник", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("1", "Вторник", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("2", "Среда", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("3", "Четверг", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("4", "Пятница", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("5", "Суббота", $data[$i]["days_of_week"]);
    $data[$i]["days_of_week"] = str_replace("6", "Воскресенье", $data[$i]["days_of_week"]);
}




?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./css/index.css">
    <title>Document</title>
</head>
<body>

<header>
    <div class="title">
        <span>Админ-панель</span>
    </div>
</header>

<main>
    <div class="panel">
        <div class="title">

            <div class="text">
                <span>Список каналов</span>
            </div>

            <div class="img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/600px-Telegram_Messenger.png">
            </div>
        </div>

        <hr>

        <div class="list">
            <table class="table">
                <thead>
                    <tr>
                        <th class="name">Имя канала</th>
                        <th class="days">Дни недели</th>
                        <th class="message">Сообщение</th>
                        <th class="move">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <?php

                    for($i = 0; $i < count($data); $i++){


                        $name = $data[$i]["name"];
                        $days = $data[$i]["days_of_week"];
                        $message = $data[$i]["message"];


                        echo "<tr>";


                        echo "<td class='name name$i' data-num='$i'>$name</td>";
                        echo "<td class='days days$i' data-num='$i' data-days='$days'>$days</td>";
                        echo "<td class='message message$i' data-num='$i' data-message='$message'>$message</td>";
                        echo "<td class='move move$i'>
                                <button class='btn-edit btn btn-edit$i' data-num='$i'>Редактировать</button>
                                <button class='btn-delete btn btn-edit$i' data-num='$i'>Удалить</button>
                                <button class='btn-save-change btn-save-change${i} btn' data-num='${i}' style='display: none'>Сохранить</button>
                                <button class='btn-cansel btn-cansel${i} btn' data-num='${i}' style='display: none'>Отмена</button>
                            </td>";


                        echo "</tr>";

                    }


                    ?>

                </tbody>
            </table>
        </div>



    </div>
</main>



<script src="./js/main.js" type="module"></script>
</body>
</html>