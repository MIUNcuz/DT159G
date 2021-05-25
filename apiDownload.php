<?php
//////////////////////////////////////////////////////////////////////////
//
// filnamn: apiDownload.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Datum: 2021-05-25
// Beskrivning:
// 
// PHP-fil som hämtar data från Kronofogdens API. För att sedan spara ner
// responsen till olika textfiler.
// (Anledning, stor datamängd som skapade lång response-tid)
//
//////////////////////////////////////////////////////////////////////////

header('Content-Type: application/json');
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('biblo/httpful.phar');

$url2 = "https://kronofogden.entryscape.net/rowstore/dataset/eb9eee0d-0a3a-47e4-af93-af42a11f2a44/json?_offset=24000&_limit=100";

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

	// serialiserar arrayer för att sedan spara datan i en textfil
	$serializedYear = serialize($yearArr);
	file_put_contents('../writeable/year.txt', $serializedYear);
	$serializedSkuld = serialize($skuldArr);
	file_put_contents('../writeable/skuld.txt', $serializedSkuld);
	$serializedAntSkuld = serialize($ant_skuld);
	file_put_contents('../writeable/ant_skuld.txt', $serializedAntSkuld);
	$serializedLan = serialize($lanArr);
	file_put_contents('../writeable/lan.txt', $serializedLan);

	
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
		// Namnen på medlemsvariablerna i reginonerna
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
		}
	}