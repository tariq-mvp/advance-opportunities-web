<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

if (isset($_POST["name"])) {
	// Read the form values
	$success = false;
	$userName = ($_POST['name']);
	$senderEmail = ($_POST['email']);
	$senderCompanyName = ($_POST['companyname']);
	$senderPhoneNumber = ($_POST['phone_number']);
	$senderPackage = ($_POST['selectedPackage']);
	$senderSubPackage = ($_POST['selectedPackageSub']);

	$packages =array (
		0 => 
		array (
		  '$id' => 1,
		  '$label' => 'Basic',
		  '$cars' => 5,
		  '$plans' => 
		  array (
			0 => 
			array (
			  '$id' => 1,
			  '$months' => 3,
			  '$price' => '27,500',
			),
			1 => 
			array (
			  '$id' => 2,
			  '$months' => 6,
			  '$price' => '52,000',
			),
			2 => 
			array (
			  '$id' => 3,
			  '$months' => 9,
			  '$price' => '75,750',
			),
			3 => 
			array (
			  '$id' => 4,
			  '$months' => 12,
			  '$price' => '98,000',
			),
		  ),
		),
		1 => 
		array (
		  '$id' => 2,
		  '$label' => 'Basic Plus',
		  '$cars' => 15,
		  '$plans' => 
		  array (
			0 => 
			array (
			  '$id' => 1,
			  '$months' => 3,
			  '$price' => '81,000',
			),
			1 => 
			array (
			  '$id' => 2,
			  '$months' => 6,
			  '$price' => '153,000',
			),
			2 => 
			array (
			  '$id' => 3,
			  '$months' => 9,
			  '$price' => '223,425',
			),
			3 => 
			array (
			  '$id' => 4,
			  '$months' => 12,
			  '$price' => '288,000',
			),
		  ),
		),
		2 => 
		array (
		  '$id' => 3,
		  '$label' => 'Premium',
		  '$cars' => 30,
		  '$plans' => 
		  array (
			0 => 
			array (
			  '$id' => 1,
			  '$months' => 3,
			  '$price' => '157,500',
			),
			1 => 
			array (
			  '$id' => 2,
			  '$months' => 6,
			  '$price' => '297,000',
			),
			2 => 
			array (
			  '$id' => 3,
			  '$months' => 9,
			  '$price' => '433,350',
			),
			3 => 
			array (
			  '$id' => 4,
			  '$months' => 12,
			  '$price' => '558,000',
			),
		  ),
		),
		3 => 
		array (
		  '$id' => 4,
		  '$cars' => 50,
		  '$label' => 'Pro',
		  '$plans' => 
		  array (
			0 => 
			array (
			  '$id' => 1,
			  '$months' => 3,
			  '$price' => '255,000',
			),
			1 => 
			array (
			  '$id' => 2,
			  '$months' => 6,
			  '$price' => '480,000',
			),
			2 => 
			array (
			  '$id' => 3,
			  '$months' => 9,
			  '$price' => '699,750',
			),
			3 => 
			array (
			  '$id' => 4,
			  '$months' => 12,
			  '$price' => '900,000',
			),
		  ),
		),
	);

	  

	
	$currentPackage = $packages[intval($senderPackage)-1];
	$currentPackageSub = $currentPackage['$plans'][intval($senderSubPackage)-1];
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
			Number of Cars: " . $currentPackage['$cars'] . "<br>
 			Advertisement Duration: " .  $currentPackageSub['$months'] . "<br>
			Advertisement Price: " .  $currentPackageSub['$price'] . "<br>"
			. "";

	

	
		$send_email = mail($to, $subject, $message, $headers);

		header("Location: contactsuccess.html");
		exit();
	}
} else {
	header("Location: contactfailed.html");
	exit();
}
