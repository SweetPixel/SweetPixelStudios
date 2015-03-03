<?php 
   
   require_once 'phpmailer/PHPMailerAutoload.php';

   $phpmailer = new PHPMailer();

   if(isset($_POST['msg'])) {
       $sender = $_POST['email'];
       $name = $_POST['name'];
       $message = $_POST['msg'];

       $phpmailer->IsSMTP();
       $phpmailer->Host = "smtp.gmail.com";
       $phpmailer->SMTPAuth = true;
       $phpmailer->SMTPSecure = 'tls';
       $phpmailer->Port = 587;
       $phpmailer->Username = "sayyam@sweetpixelstudios.com"; //
       $phpmailer->Password = "redzOne786";

       // $phpmailer->From = "thenewdawn1994@hotmail.com";
       $phpmailer->FromName = $name;
       $phpmailer->addAddress('sayyam@sweetpixelstudios.com', 'redzOne786');
       // $phpmailer->addReplyTo('thenewdawn1994@hotmail.com', 'Reply Info');

       $phpmailer->Subject = 'Sweet Pixel Studios Contact';
       // $phpmailer->Body = "Sender Email: " . $sender . " Name: " . $name . "\r\n \r\n" . $message;
       $phpmailer->Body = "Name: ". $name . " Sender Email: " . $sender . "\r\n \r\n" . $message;


       if(!$phpmailer->Send()) {
           echo "Mailer Error: " . $phpmailer->ErrorInfo;

       }
       else {
          header("Location: index.html");
          exit; // Location header is set, pointless to send HTML, stop the script
       }


   }
?>