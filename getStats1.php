<?php
	// Länk till nedladdade REST-biblioteket. Detta ligger i mappen biblo i överordnad katalog.
	include('httpful.phar');

$url1 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/START/BO/BO0406/BO0406E/BO0406Tab01";
$url3 = "http://api.scb.se/OV0104/v1/doris/sv/ssd/BO/BO0406/BO0406E/BO0406Tab01";
$url2 = "https://kronofogden.entryscape.net/rowstore/dataset/eb9eee0d-0a3a-47e4-af93-af42a11f2a44/json?_offset=24400&_limit=100";


	// Sökkoden som skickas med POST-anropet hämtas från en fil istället för att skrivas direkt här som i postExempel_1.php
	$postKod = file_get_contents( "hyra.json" );
	
	// Hämta data
	$response_hyra = \Httpful\Request::post( $url1 )
		->body( $postKod )
        ->send();
	
	$response_hyra2 = \Httpful\Request::get( $url3 )
	->send();

	$kronofogden = array();
	
	
	while( $url2 != 'INGEN_URL' )
	{
		$respons = restAnrop( $url2 );
		//$inData =  json_decode( $respons );
		$inData = $respons;
		var_dump($inData);
		fyllArrayer($inData, $kronofogden);
		
		// Om det finns en länk till nästa uppsättning indata, sätt url till den länken.
		// annars sätt url till "INGEN URL"
		if( property_exists($inData, 'next') )
			$url2 = $inData->next;
		else
			$url2 = 'INGEN_URL';
	}



	
	function restAnrop( $url2 )
	{
		$resp = \Httpful\Request::get( $url2 )
		->send();
		
		return $resp;
	}
	
	function fyllArrayer( &$inData, &$kronofogden)
	{
		// Namnen på medlemsvariablerna i kommunerna
		//$reg="län";
		$an_skuld="antal skuldsatta";
		//$bel_skuld="skuldbelopp";
		//$year="år";
		
    	foreach ( $inData->results as $kommun )
		{

			//$kArr[] = $kommun->$reg;
			$kronofogden[] = $kommun->$an_skuld;
			//$kArr[] = $kommun->$bel_skuld;
			//$kArr[] = $kommun->$year;

		}
	}

?>
