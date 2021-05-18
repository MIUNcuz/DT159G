<?php
function date_check1() {
    $file_pointer1 = "../writeable/ut_rent.txt";
    $file_pointer2 = "../writeable/ut_debt.txt";
    $file_pointer3 = "../writeable/ant_skuld.txt";
    $file_pointer4 = "../writeable/year.txt";
    $file_pointer5 = "../writeable/lan.txt";
    $file_pointer6 = "../writeable/skuld.txt";
    $date = date("m.d");
    if($date == 15.19){
        unlink($file_pointer1);
        unlink($file_pointer2);
        unlink($file_pointer3);
        unlink($file_pointer4);
        unlink($file_pointer5);
        unlink($file_pointer6);
    }
}

function date_check2() {
    $file_pointer2 = "../writeable/test2.txt";
    $date = date("m.d");
    if($date == 15.19){
        unlink($file_pointer2);
    } 
}
?>