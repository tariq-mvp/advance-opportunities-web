<?php

if (isset($_POST["name"])) {
	// Read the form values
	$success = false;
	$userName = ($_POST['name']);
	$senderEmail = ($_POST['email']);
	$senderCompanyName = ($_POST['companyname']);
	$senderPhoneNumber = ($_POST['phone_number']);
	$senderCars = ($_POST['numcars']);
	$senderAddDur = ($_POST['adddur']);
	// $senderMessage = isset($_POST['message']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['message']) : "";
	if ($userName == 'Henrynus') {
		header("Location: contactsuccess.html");
		exit();
	} elseif ($userName == 'Henryirriz') {
		header("Location: contactsuccess.html");
		exit();
	} else {
		//Headers
		$to = "ohoud@b-seenapp.com"; // Your email address goes here
		// $to = "gillian@thebooklyapp.ae";
		$subject = 'B Seen Website - Contact Us Form';
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=UTF-8\r\n";

		//body message
		$message =
			"Name: " . $userName . "<br>
			Email: " . $senderEmail . "<br>
			Company Name: " . $senderCompanyName . "<br>
			Phone Number: " . $senderPhoneNumber . "<br>
			Number of Cars: " . $senderCars . "<br>
 			Advertisement Duration: " . $senderAddDur . "<br>"
			. "";

		//Email Send Function
		$send_email = mail($to, $subject, $message, $headers);

		header("Location: contactsuccess.html");
		exit();
	}
} else {
	header("Location: contactfailed.html");
	exit();
}
