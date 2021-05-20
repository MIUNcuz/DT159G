<?php
//////////////////////////////////////////////////////////////////////////
//
// filnamn: getComp.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Beskrivning:
// 
// 
//
//
//////////////////////////////////////////////////////////////////////////

header('Content-Type: application/json');

// Läser från textfiler samt av serialiserar textfilerna.
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
            "r_year" => $rent[0]["year"],
            "r_rent" => $rent[0]["rent"],
			"type" => $typ  
		] ];
		
		$ut = json_encode( $data ); // Serialisera i json-format.
		return $ut;
	}
