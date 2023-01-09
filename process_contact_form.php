<?php
if(!$_POST) exit;

//if( isset($_POST['submit']) ){

  if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
  

      $secret = '6LfEwRsUAAAAAKG2l1mfSYvWqgsek3QdtuPQ7_n7';
      $response = $_POST['g-recaptcha-response'];
       $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$response);
      $responseData = json_decode($verifyResponse);

		if($responseData->success){

			$input = $_POST;

			$mailInputs = array_slice($input, 0, -1); 
			
			$data = "<table border='0' cellpadding='2' cellspacing='2' width='600'>";
			
				foreach ($mailInputs as $key => $val) {
					echo $key."\r\n";

						    $field_name = ucwords(str_replace("_", " ", $key));
						    $data .= "<tr><td>" . $field_name . "</td><td>" . $val . "</td></tr>";
				}

			$data .= "</table>";
			$my_email_to = "info@anaduspara.com";

			$email_to = "info@zahnarztpraxis-wedding.de";

			$email_subject = "KONTAKT FORMULAR";
			$email_from = $_POST['email'];

			$headers = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=iso-UTF-8' . "\r\n";
			$headers .= 'Reply-To: ' . $email_from . "\r\n";
			$headers .= 'From: ' . $email_from . "\r\n";
			$headers .= 'X-Mailer: PHP/' . phpversion();

			@mail($email_to, $email_subject, $data, $headers);
			//mail to me
			@mail($my_email_to, $email_subject, $data, $headers);


			return true;
		}

  }
	else{
		return false;
	}




?>

