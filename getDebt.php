<?php
header('Content-Type: application/json');

// at a later point, you can convert it back to array like &  unserializing to get actual array:
$recoveredYear = file_get_contents('year.txt');
$yearArr = unserialize($recoveredYear);
$recoveredSkuld = file_get_contents('skuld.txt');
$skuldArr = unserialize($recoveredSkuld);
$recoveredAntSkuld = file_get_contents('ant_skuld.txt');
$ant_skuld = unserialize($recoveredAntSkuld);
$recoveredLan = file_get_contents('lan.txt');
$lanArr = unserialize($recoveredLan);

$objYear = array_unique($yearArr);
unset($objYear[0]);

$ArrYear = (array) $objYear;
$ArrYear = array_values($ArrYear);
//var_dump($ArrYear);

$plot_skuld = putMultiArray($lanArr, getMean($skuldArr, $ant_skuld));

$ut = SkapaJson($plot_skuld, $ArrYear, "bar");

echo "{$ut}";

function getMean($sArr, $aArr){
    $meanArr = array_fill(0, count($sArr), 0);
    for($i=0; $i<count($meanArr); $i++){
        $meanArr[$i] = round($sArr[$i] / $aArr[$i], 0);
    }
    return $meanArr;
}


function putMultiArray($lArr,$meanArr){
    //$reg = $lArr;
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
function SkapaJson( &$plot_skuld, &$ArrYear, $typ )
{

    //Skapa ett PHP-objekt, med "JSON-kodat" data anpassat för plotly.
    $data = [ [
        "x" => $ArrYear,
        "y" => $plot_skuld,
        "type" => $typ
    ] ];
    
    $ut = json_encode( $data ); // Serialisera i json-format.
    return $ut;
}