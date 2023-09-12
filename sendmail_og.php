<?php

if (isset($_POST["name"])) {
	// Read the form values
	$success = false;
	$userName = isset($_POST['name']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['name']) : "";
	$senderEmail = isset($_POST['email']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['email']) : "";
	$senderCompanyName = isset($_POST['companyname']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['companyname']) : "";
	$senderPhoneNumber = isset($_POST['phone_number']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone_number']) : "";
	$senderCars = isset($_POST['numcars']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['numcars']) : "";
	$senderAddDur = isset($_POST['adddur']) ? preg_replace("/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['adddur']) : "";
	// $senderMessage = isset($_POST['message']) ? preg_replace("/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['message']) : "";
	if ($userName == 'Henrynus') {
		header("Location: contactsuccess.html");
		exit();
	} elseif ($userName == 'Henryirriz') {
		header("Location: contactsuccess.html");
		exit();
	} else {
		//Headers
		$to = "info@b-seenapp.com"; // Your email address goes here
		// $to = "gillian@thebooklyapp.ae";
		$subject = 'B Seen Website - Contact Us Form';
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

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
