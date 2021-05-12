<?php

$recoveredDebt = file_get_contents('../writeable/ut_debt.txt');
$debt = unserialize($recoveredDebt);

$recoveredRent = file_get_contents('../writeable/ut_rent.txt');
$rent = unserialize($recoveredRent);



$ut = SkapaJson($debt,$rent, "bar");

echo "{$ut}";



function SkapaJson( &$debt, &$rent, $typ )
	{

		//Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"d_year" => $debt[0]["year"],
            "d_debt" => $debt[0]["debt"],
            "r_year" => $debt[0]["year"],
            "r_rent" => $debt[0]["rent"],
            
			"type" => $typ  
		] ];
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}
