<?php
$result = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name   = isset($_POST['name']) ? test_input($_POST['name']) : '';
  $phone  = isset($_POST['phone']) ? test_input($_POST['phone']) : '';
  $phone  = isset($_POST['email']) ? test_input($_POST['email']) : 'не указан';
  $phone  = isset($_POST['message']) ? test_input($_POST['message']) : 'не указано';

  if ($name && $phone) {
    $to  = "smalvad@yandex.ru";
    $subject = "Отзыв с сайта";
    $message = "<p>Имя: $name</p>
                <p>Телефон: $phone</p>
                <p>Почта: $mail</p>
                <p>Сообщение: $message</p>";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: <mail@delivery.ru>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() ."\r\n";
    //$headers .= "Reply-To: reply-to@example.com\r\n";

    $mail_status = mail($to, $subject, $message, $headers);

    $result['success'] = true;
    $result['message'] = 'Успешно обработано!';
    $result['mailStatus'] = $mail_status;

  } else {
    $result['success'] = false;
    $result['message'] = 'Одно или несколько полей заполнено неправильно!';
  }

  response($result);

} else {
  $result['success'] = false;
  $result['message'] = 'Не корректный метод отправки формы';

  response($result);
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

function response($result) {
  echo json_encode($result);
  exit();
}
