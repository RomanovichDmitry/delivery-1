<?php
$result = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

  $name   = isset($_POST['name']) ? $_POST['name'] : '';
  $phone  = isset($_POST['phone']) ? $_POST['phone'] : '';
  $email  = isset($_POST['email']) ? $_POST['email'] : 'не указан';
  $message  = isset($_POST['comment']) ? $_POST['comment'] : 'не указано';
  $address  = isset($_POST['address']) ? $_POST['address'] : '';
  $flat  = isset($_POST['flat']) ? $_POST['flat'] : 'не указана';
  $floor  = isset($_POST['floor']) ? $_POST['floor'] : 'не указан';
  $entrance  = isset($_POST['entrance']) ? $_POST['entrance'] : 'не указан';
  $order  = isset($_POST['order']) ? $_POST['order'] : '';

  if ($name && $phone && $address && $order) {
    $to  = "encher77@mail.ru";
    $subject = "Новый заказ";
    $message = "<p>Имя: $name</p>
                <p>Телефон: $phone</p>
                <p>Почта: $email</p>
                <p>Адресс: $address</p>
                <p>Квартира: $flat</p>
                <p>Этаж: $floor</p>
                <p>Подъезд: $entrance</p>
                <p>Сообщение: $mail</p>
                <p>Заказ: $order</p>";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: <mail@delivery.ru>\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() ."\r\n";
    //$headers .= "Reply-To: reply-to@example.com\r\n";

    $mail_status = mail($to, $subject, $message, $headers);

    $result['success'] = true;
    $result['message'] = 'Успешно обработано!';
    $result['order'] = $message;
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
