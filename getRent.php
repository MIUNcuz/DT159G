<?php
//////////////////////////////////////////////////////////////////////////
//
// filnamn: getRent.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Datum: 2021-05-25
// Beskrivning:
// 
// PHP-fil som Skickar API-förfrågan till scb, för att sedan behandla 
// responsen-filen så datat kan nyttjas till webbplatsens tjänster. 
//
//////////////////////////////////////////////////////////////////////////


header('Content-Type: application/json');
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('biblo/httpful.phar');

	$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";

	// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här.
	$postKod = file_get_contents( "hyra.json" );

	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
		->send();

	// arrayer skapas
	$hy_yearArr =array();
	$hy_medelArr =array();
	$hy_regArr =array();
	$hyra_lan = array();
	
	$dataIn = json_decode($response_hyra, true);


	// variabeler skapade för att kunna navigera i svar från API. 
	$category = $dataIn["dataset"]["dimension"]["Region"]["category"];
	$year = $dataIn["dataset"]["dimension"]["Tid"]["category"]["label"];
	$index = $category["index"];
	$label = $category["label"];
	$values = $dataIn["dataset"]["value"];

	// fyller på hy_regArr med regioner samt de 5 olika värdena för medelhyran/ region. 
	foreach($label as $key => $value){
		$start = $index["$key"];
		$start = 5*$start;
		for($i = 0; $i < 5; $i++){
			array_push($hy_medelArr, $values[$start+$i]);
		}
		array_push($hy_regArr, $value);
	}

	// fyller på hy_yearArr med åren. 
	foreach($year as $key => $value){
		array_push($hy_yearArr, $year["$key"]);
	}

	// sorterar array så för varje region återfinns dess 5 värden. 
	$j = 0;
	foreach($hy_regArr as $key => $reg_arrs){
		for($i = 0; $i < 5; $i++){
			$plot_hyra[$reg_arrs][] = $hy_medelArr[$j];
			$j++;
		}
	}




	$ut_rent = SkapaJson($plot_hyra, $hy_yearArr, $hy_regArr,"bar");
	echo "{$ut_rent}";
	$rent_arr = twoDimArr($plot_hyra, $hy_yearArr);


	// serialiserar data för att sedan skriva till textfil. 
	$serializedRent = serialize($rent_arr);
	file_put_contents('../writeable/ut_rent.txt', $serializedRent);








	///////////////////////////////////////
	// FUNTIONER
	//////////////////////////////////////



	function SkapaJson( &$plot_hyra, &$hy_yearArr, &$hy_regArr, $typ )
	{

		//Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"x" => $hy_yearArr,
			"y" => $plot_hyra,
			"z" => $hy_regArr,
			"type" => $typ  
		] ];
		
		$ut_rent = json_encode( $data ); // Serialisera i json-format.
		return $ut_rent;
	}

	// funktion som skapar en två-dimensionell array. 
	function twoDimArr(&$plot_hyra, &$hy_yearArr ){

		$data = [ [
			"year" => $hy_yearArr,
			"rent" => $plot_hyra
		] ];
	
		return $data;
		
	}
?>