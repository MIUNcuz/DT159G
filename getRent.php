<?php
header('Content-Type: application/json');
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('biblo/httpful.phar');

	$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";

		// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här som i postExempel_1.php
	$postKod = file_get_contents( "hyra.json" );

	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
		->send();

	
	$hy_yearArr =array();
	$hy_medelArr =array();
	$hy_regArr =array();

	$hyra_lan = array();
	
	$dataIn = json_decode($response_hyra, true);

	$category = $dataIn["dataset"]["dimension"]["Region"]["category"];
	$year = $dataIn["dataset"]["dimension"]["Tid"]["category"]["label"];


	$index = $category["index"];


	$label = $category["label"];

	$values = $dataIn["dataset"]["value"];

	foreach($label as $key => $value){
		$start = $index["$key"];
		$start = 5*$start;
		for($i = 0; $i < 5; $i++){
			array_push($hy_medelArr, $values[$start+$i]);
		}
		array_push($hy_regArr, $value);
	}

	foreach($year as $key => $value){
		array_push($hy_yearArr, $year["$key"]);
	}
	$j = 0;
	foreach($hy_regArr as $key => $reg_arrs){
		for($i = 0; $i < 5; $i++){
			$plot_hyra[$reg_arrs][] = $hy_medelArr[$j];
			$j++;
		}
	}




	$ut = SkapaJson($plot_hyra, $hy_yearArr, $hy_regArr,"bar");

	echo "{$ut}";








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
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}
?>