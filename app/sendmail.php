<?php
$to = 'sayyam@sweetpixelstudios.com';
$subject = 'Comments From Your Site!';
$message = 'Name:' . $_POST["your_name"] . "\n";
$message .= 'Email:' . $_POST["your_email"] . "\n";
$message .= 'Comments:' . $_POST["your_comments"] . "\n";
// $headers = 'From: ' . $_POST['email'] . "\r\n" .
// 'Reply-To: ' . $_POST['email'] . "\r\n" .
// 'X-Mailer: PHP/' . phpversion();

mail ($to, $subject, $message);
?>