
<?php
// API access key from Google API's Console
define( 'API_ACCESS_KEY', 'AAAANWsRzkU:APA91bGCxXxw04W7KAcFWngbPUcSeIebj8PUefcFK11e8E41Fht8J25dOgZqorv0LvK1Iv2k8vjp8X0fro04YTyqMzAuMjyPs3FoniakyyM_IFr8_B9vdRCXtGDJxO3o0wTrKC-7xpfA' );
$registrationIds = array( $_GET['id'] );
//$registrationIds = '229429595717';
// prep the bundle
$msg = array
(
	'message' 	=> 'Estimados Alumn@s, el profesor ha regresado al aula.',
	'title'		=> 'Aula 26: El profesor ha regresado',
	'subtitle'	=> 'el profesor ha regresado al aula',
	'tickerText'	=> 'el profesor ha regresado al aula (sticker)',
	'vibrate'	=> 1,
	'sound'		=> 1,
	'largeIcon'	=> 'large_icon',
	'smallIcon'	=> 'small_icon'
);
$fields = array
(
	//'registration_ids' 	=> $registrationIds,
  'to'  => '/topics/alumnos',
	'data'			=> $msg
);

$headers = array
(
	'Authorization: key=' . API_ACCESS_KEY,
	'Content-Type: application/json'
);

$ch = curl_init();
curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
curl_setopt( $ch,CURLOPT_POST, true );
curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
$result = curl_exec($ch );
curl_close( $ch );
echo $result;
