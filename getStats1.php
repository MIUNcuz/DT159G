<?php
header('Content-Type: application/json');
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('biblo/httpful.phar');

$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";
$url3 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/BO/BO0406/BO0406E/BO0406Tab01";
$url2 = "https://kronofogden.entryscape.net/rowstore/dataset/eb9eee0d-0a3a-47e4-af93-af42a11f2a44/json?_offset=40000&_limit=100";


	// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här som i postExempel_1.php
	$postKod = file_get_contents( "hyra.json" );
	
	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
        ->send();
	
	$response_hyra2 = \Httpful\Request::get( $url3 )
	->send();

	//var_dump($response_hyra);
	
	// $resp_arr = json_decode($response_hyra);
	// echo($resp_arr);


	
	// Använder indata för att hämta nästa indata.
	
	
	$yearArr = array();
	$skuldArr = array();
	$ant_skuld = array();
	$lanArr = array();	
	
	while( $url2 != 'INGEN_URL' )
	{
		$respons = restAnrop( $url2 );
		$inData =  json_decode( $respons );
		fyllArrayer($inData, $yearArr, $skuldArr, $ant_skuld, $lanArr);
		
		// Om det finns en länk till nästa uppsättning indata, sätt url till den länken.
		// annars sätt url till "INGEN URL"
		if( property_exists($inData, 'next') )
			$url2 = $inData->next;
		else
			$url2 = 'INGEN_URL';
	}
	
	$ut = SkapaJson($yearArr, $skuldArr, $ant_skuld, $lanArr,"bar");
	
	echo "{$ut}";
	
	
	/////////////////////////////
	// FUNKTIONER
	/////////////////////////////
	
	// hämta data
	function restAnrop( $url2 )
	{
		$resp = \Httpful\Request::get( $url2 )
		->send();
		
		return $resp;
	}
	
	// & för referensargument
	// https://www.php.net/manual/en/functions.arguments.php
	function fyllArrayer( &$inData, &$yArr, &$sArr, &$aArr, &$lArr )
	{
		// Namnen på medlemsvariablerna i kommunerna
		$year="år";
		$antal_skuldsatta="antal skuldsatta";
		$skuldbelopp="skuldbelopp";
		$lan = "﻿län";

		
    	foreach ( $inData->results as $län )
		{

			$yArr[] = $län->$year;
			$sArr[] = $län->$skuldbelopp;
			$aArr[] = $län->$antal_skuldsatta;
			$lArr[] = $län->$lan;
			array_push($lArr, $län->$year, $län->$skuldbelopp, $län->$antal_skuldsatta, $län);
		}
	}
	// Skapar Json utifrån arrayer
	function SkapaJson( &$yArr, &$sArr, &$aArr, &$lArr, $typ )
	{
		// Fr.o.m. 2021 är de inte sorterade i bokstavsordning.
		//array_multisort($yArr, $sArr, $aArr, $lArr);
		// Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"x" => $yArr,
			"y" => $sArr,
			"z" => $aArr,
			"a" => $lArr,
			"type" => $typ  
		] ];
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}

?>
