<?php
//////////////////////////////////////////////////////////////////////////
//
// filnamn: getDebt.php
// Skrivet av: Erik Sillerström, August Jonsson, Alfred Karlsson
// Kurs : Tillämpad datateknik DT159G
// Universitet: Mitt Universitet 
// Datum: 2021-05-
// Beskrivning:
// 
// Behandlar data som återfinns i textfiler som skapats av apiDownload.php
// För att sedan skapa önskat format som behövs för att kunna visa statis- 
// tiken för webblatsens användare. 
//
//////////////////////////////////////////////////////////////////////////


header('Content-Type: application/json');

//Läser av från textfiler för att sedan avserialisera datan.
$recoveredYear = file_get_contents('../writeable/year.txt');
$yearArr = unserialize($recoveredYear);
$recoveredSkuld = file_get_contents('../writeable/skuld.txt');
$skuldArr = unserialize($recoveredSkuld);
$recoveredAntSkuld = file_get_contents('../writeable/ant_skuld.txt');
$ant_skuld = unserialize($recoveredAntSkuld);
$recoveredLan = file_get_contents('../writeable/lan.txt');
$lanArr = unserialize($recoveredLan);

// Städar upp arrayer för att möjligöra plottning. 
$objYear = array_unique($yearArr);
unset($objYear[0]);
$ArrYear = (array) $objYear;
$ArrYear = array_values($ArrYear);



$plot_skuld = putMultiArray($lanArr, getMean($skuldArr, $ant_skuld));

$ut_debt = SkapaJson1($plot_skuld, $ArrYear, "bar");

echo "{$ut_debt}";

$debt_arr = twoDimArr($plot_skuld, $ArrYear);


// serialiserar array för att sedan skriva till textfil. 
$serializedDebt = serialize($debt_arr);
file_put_contents('../writeable/ut_debt.txt', $serializedDebt);

/////////////////////////////////////////////////////
//                                                 //
//             FUNKTIONER                          //   
//                                                 //
/////////////////////////////////////////////////////



// funktion som returnerar medelvärdet 
function getMean($sArr, $aArr){
    $meanArr = array_fill(0, count($sArr), 0);
    for($i=0; $i<count($meanArr); $i++){
        $meanArr[$i] = round($sArr[$i] / $aArr[$i], 0);
    }
    return $meanArr;
}

// funktion som mappar regioner med deras värden 
function putMultiArray($lArr,$meanArr){
    $reg = array_slice($lArr,4);
    $reg = array_unique($reg);
    $start = 4;
    foreach($reg as $key){
        $j=0;
        for($i = 0; $i < 5; $i++){	
            $plot_skuld[$key][] = $meanArr[$start+$j];
            $j= $j+22;
        }
        $start++;
    }
    return $plot_skuld;
}


// Skapar Json utifrån arrayer
function SkapaJson1( &$plot_skuld, &$ArrYear, $typ )
{

    //Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
    $data = [ [
        "x" => $ArrYear,
        "y" => $plot_skuld,
        "type" => $typ
    ] ];
    
    $ut_debt = json_encode( $data ); // Serialisera i json-format.
    return $ut_debt;
}

//funktion som skapar en två-dimensionell array. 
function twoDimArr(&$plot_skuld, &$ArrYear ){

    $data = [ [
        "year" => $ArrYear,
        "debt" => $plot_skuld
    ] ];

    return $data;    
}
