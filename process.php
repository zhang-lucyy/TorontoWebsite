<?php
$visitor  = $_POST['visitor'];
$groupNum = $_POST['groupNum'];
$vdate    = $_POST['vdate'];
$home     = $_POST['home'];
$places   = $_POST['fplace'];
$rating   = $_POST['rating'];
$destination_email = "lz3744@rit.edu";
$email_subject = "Toronto, Canada - Lucy Zhang";
$email_body = "Visitor name: $visitor\n";
$email_body .= "Group Size: $groupNum\n";
$email_body .= "From: $home\n";
$email_body .= "Date Visited=$vdate\n";

if (!empty($places)) {
    $email_body .= "Favorite Places: " .implode(", ", $places)."\n";
} else {
    $email_body .= "No favorite places selected\n";
}

$email_body .= "\nRating -> $rating\n";

$email_body .= "\n Updated December 2024 \n";
if (mail($destination_email, $email_subject, $email_body)) {
    echo "data sent";
} else {
    echo "Email sending failed";
}
?>
