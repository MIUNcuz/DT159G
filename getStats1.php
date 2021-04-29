<?php
header('Content-Type: application/json');
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('biblo/httpful.phar');

$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";
$url2 = "https://kronofogden.entryscape.net/rowstore/dataset/eb9eee0d-0a3a-47e4-af93-af42a11f2a44/json?_offset=42000&_limit=100";


	// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här som i postExempel_1.php
	$postKod = file_get_contents( "hyra.json" );
	
	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
        ->send();
	
	$test = json_decode($response_hyra);
	//var_dump($test);
	echo ($response_hyra);
	$hy_yearArr =array();
	$hy_medelArr =array();
	$hy_lanArr =array();



	
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
	
	//echo "{$ut}";
	
	
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
	
	function findYearAndLan($yArr, $lArr, $year, $lan){
		for( $i=0; $i<count($yArr); $i++ ){
			if($yArr[$i] == $year and $lArr[$i] == $lan){
				return $i;
			}
		}
		return -1;
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
			$index = findYearAndLan($yArr, $lArr, $län->$year, $län->$lan);
			if($index == -1){
				array_push($lArr, $län->$lan);
				array_push($yArr, $län->$year);
				array_push($sArr, $län->$skuldbelopp);
				array_push($aArr, $län->$antal_skuldsatta);
			}

			else{
				$sArr[$index] += $län->$skuldbelopp;
				$aArr[$index] += $län->$antal_skuldsatta;
			}


			// $yArr[] = $län->$year;
			// $sArr[] = $län->$skuldbelopp;
			// $aArr[] = $län->$antal_skuldsatta;
			// $lArr[] = $län->$lan;
			// array_push($lArr, $län->$year, $län->$skuldbelopp, $län->$antal_skuldsatta, $län);
		}
	}

	function getMean($sArr, $aArr){
		$meanArr = array_fill(0, count($sArr), 0);
		for($i=0; $i<count($meanArr); $i++){
			$meanArr[$i] = round($sArr[$i] / $aArr[$i], 0);
		}
		return $meanArr;
	}
	// Skapar Json utifrån arrayer
	function SkapaJson( &$yArr, &$sArr, &$aArr, &$lArr, $typ )
	{
		// Fr.o.m. 2021 är de inte sorterade i bokstavsordning.
		//array_multisort($yArr, $sArr, $aArr, $lArr);
		// Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"z" => $yArr,
			"y" => getMean($sArr, $aArr),
			"Antal skuldsatta" => $aArr,
			"x" => $lArr,
			"type" => $typ  
		] ];
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}

?>
