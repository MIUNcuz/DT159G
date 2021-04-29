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
	

	
	//var_dump($test);
	//echo ($response_hyra);

	
	$hy_yearArr =array();
	$hy_medelArr =array();
	$hy_regArr =array();

	$dataIn = json_decode($response_hyra);

	var_dump($dataIn->dataset->dimension->Region);
	//fyllArrayer1($dataIn, $hy_yearArr, $hy_medelArr, $hy_regArr);

	//$ut = SkapaJson($hy_yearArr, $hy_medelArr, $hy_regArr,"bar");

	//echo "{$ut}";










	///////////////////////////////////////
	// FUNTIONER
	//////////////////////////////////////
	function findYearAndReg($yArr, $rArr, $year, $reg){
		for( $i=0; $i<count($yArr); $i++ ){
			if($yArr[$i] == $year and $rArr[$i] == $reg){
				return $i;
			}
		}
		return -1;
	}



	function fyllArrayer1 (&$dataIn, &$yArr, &$rArr, &$mArr)
	{
		$year="år";
		$reg="region";
		$medelhyra="Ah_kvm";

		foreach ($dataIn->dataset->dimension->Region as $region)
		{
			$index = findYearAndReg($yArr, $rArr, $region->$year, $region->$reg);
			if($index == -1){
				array_push($rArr, $region->$reg);
				array_push($yArr, $region->$year);
				array_push($mArr, $region->$medelhyra);
			}
			else{
				$mArr[$index] += $region->$medelhyra;
			}

		}
	}
	function SkapaJson( &$rArr, &$yArr, &$mArr, $typ )
	{
		// Fr.o.m. 2021 är de inte sorterade i bokstavsordning.
		//array_multisort($yArr, $sArr, $aArr, $lArr);
		// Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"År" => $yArr,
			"medelhyra" => $mArr,
			"region" => $rArr,
			"type" => $typ  
		] ];
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}
?>