<?php

$recoveredDebt = file_get_contents('../writeable/ut_debt.txt');
$debt = unserialize($recoveredDebt);

$recoveredRent = file_get_contents('../writeable/ut_rent.txt');
$rent = unserialize($recoveredRent);



$ut_debt = SkapaJson($debt, "bar");

echo "{$ut_debt}";



function SkapaJson( &$debt, $typ )
	{

		//Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
		$data = [ [
			"x" => $debt[0]["year"],
			"y" => $debt[0]["debt"],
			"type" => $typ  
		] ];
		
		$ut_debt = json_encode( $data ); // Serialisera i json-format.
		return $ut_debt;
	}
