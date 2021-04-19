<?php
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('../httpful.phar');

$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";
$url2 = "https://kronofogden.entryscape.net/rowstore/dataset/eb9eee0d-0a3a-47e4-af93-af42a11f2a44/json";
$url3 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/BO/BO0406/BO0406E/BO0406Tab01";

	// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här som i postExempel_1.php
	$postKod = file_get_contents( "hyra.json" );
	
	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
        ->send();
    
    $response_skuld = \Httpful\Request::get( $url2 )
	->send();
	
    $response_hyra2 = \Httpful\Request::get( $url3 )
    ->send();
    // Vad fick vi för svar??
    
	//echo $response_hyra;
	//echo $response_skuld;
	echo $response_hyra2;
    //echo $postKod;
    //console.log($postKod);
?>